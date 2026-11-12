// npm run zdroje:kontrola [-- --zapis]
// Ověří dostupnost všech zdrojů z src/data/twenty/zdroje.json a všech odkazů na docs.twenty.com
// v obsahu webu. Hlásí nedostupné adresy a přesměrování (např. stará /l/cs/ → /cs/).
// Zdroj s „presmerovani: true“ smí přesměrovat (např. kořen webu na aktuální verzi dokumentace).
// --zapis u zdrojů v registru nastaví „zkontrolovano" na dnešek a „stav" (ok | nedostupne | presmerovano).
//
// Spouštět týdně (docs/plan-pruvodce.md kap. 4.3).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const REGISTR = 'src/data/twenty/zdroje.json';
const zapis = process.argv.includes('--zapis');
const registr = JSON.parse(readFileSync(REGISTR, 'utf8'));

function soubory(slozka) {
  return readdirSync(slozka, { withFileTypes: true }).flatMap((e) => {
    const cesta = join(slozka, e.name);
    if (e.isDirectory()) return e.name === 'node_modules' ? [] : soubory(cesta);
    return /\.(md|json|astro|mjs|ts|txt)$/.test(e.name) ? [cesta] : [];
  });
}

// odkazy na dokumentaci výrobce v obsahu (kromě registru zdrojů)
const vObsahu = new Map();
for (const soubor of [...soubory('src'), ...soubory('public')]) {
  if (soubor.replaceAll('\\', '/') === REGISTR) continue;
  for (const m of readFileSync(soubor, 'utf8').matchAll(/https:\/\/docs\.twenty\.com\/[^\s)"'<>`\]]+/g)) {
    const url = m[0].replace(/[.,;]+$/, '');
    if (!vObsahu.has(url)) vObsahu.set(url, new Set());
    vObsahu.get(url).add(soubor.replaceAll('\\', '/'));
  }
}

const adresy = new Map(); // url → { zdroj?, soubory? }
for (const z of registr.zdroje) adresy.set(z.url, { zdroj: z });
for (const [url, s] of vObsahu) adresy.set(url, { ...(adresy.get(url) ?? {}), soubory: [...s] });

async function over(url) {
  const hlavicky = { 'User-Agent': 'twentycrm-cz-kontrola-zdroju' };
  // část webů na zkrácený dotaz (HEAD) nebo na neznámého klienta odpoví chybou — pak zkusit jako prohlížeč
  const jakoProhlizec = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', Accept: 'text/html' };
  try {
    let r = await fetch(url, { method: 'HEAD', redirect: 'manual', headers: hlavicky });
    if (r.status >= 400) r = await fetch(url, { redirect: 'manual', headers: jakoProhlizec });
    if (r.status >= 300 && r.status < 400) return { stav: 'presmerovano', kod: r.status, kam: new URL(r.headers.get('location'), url).href };
    return { stav: r.ok ? 'ok' : 'nedostupne', kod: r.status };
  } catch (err) {
    return { stav: 'nedostupne', kod: err.cause?.code ?? err.message };
  }
}

const dnes = new Date().toISOString().slice(0, 10);
const vysledky = [];
const fronta = [...adresy.entries()];
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (fronta.length) {
      const [url, info] = fronta.shift();
      vysledky.push({ url, ...info, ...(await over(url)) });
    }
  }),
);

for (const v of vysledky) if (v.stav === 'presmerovano' && v.zdroj?.presmerovani && !v.soubory) v.stav = 'ok';
// zdroj s „rucniKontrola: true" automatické stahování blokuje (např. Gartner) — jen připomenout
const rucne = vysledky.filter((v) => v.stav === 'nedostupne' && v.zdroj?.rucniKontrola && !v.soubory);
for (const v of rucne) v.stav = 'rucne';
const problemy = vysledky.filter((v) => v.stav !== 'ok' && v.stav !== 'rucne');
if (rucne.length) {
  console.log('Ověřit ručně v prohlížeči (web blokuje automatické stahování):');
  for (const v of rucne) console.log(`  · ${v.zdroj.id} — ${v.url}`);
  console.log('');
}
for (const v of problemy.sort((a, b) => a.url.localeCompare(b.url))) {
  const kde = [v.zdroj && `registr: ${v.zdroj.id}`, ...(v.soubory ?? [])].filter(Boolean).join(', ');
  console.log(`✗ ${v.stav} (${v.kod}) ${v.url}${v.kam ? ` → ${v.kam}` : ''}\n    ${kde}`);
}
console.log(`\n${vysledky.length} adres (${registr.zdroje.length} v registru, ${vObsahu.size} odkazů na dokumentaci v obsahu), problémů: ${problemy.length}`);

if (zapis) {
  for (const z of registr.zdroje) {
    const v = vysledky.find((x) => x.url === z.url);
    z.stav = v.stav === "rucne" ? z.stav : v.stav;
    z.zkontrolovano = dnes;
  }
  writeFileSync(REGISTR, JSON.stringify(registr, null, 2) + '\n');
  console.log(`Zapsáno do ${REGISTR}.`);
}
process.exit(problemy.length ? 1 : 0);
