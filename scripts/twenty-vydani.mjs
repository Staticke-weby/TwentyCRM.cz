// npm run twenty:vydani [-- --zapis]
// Stáhne z GitHubu vydání Twenty, která ještě nejsou v src/data/twenty/vydani.json, vypíše jejich hlavní
// body, odhadne dotčené funkce (podle „hledat" v funkce.json) a stránky webu, kterých se to může týkat.
// --zapis přidá nová vydání do registru jako nezpracovaná (zpracovano: null) — člověk pak doplní
// „zmeny" a stav funkcí a nastaví datum zpracování. Volitelně GITHUB_TOKEN (vyšší limit API).
//
// Spouštět týdně (docs/plan-pruvodce.md kap. 4.3).
import { readFileSync, writeFileSync } from 'node:fs';
import { nactiObsah, funkceStranky } from './lib/obsah.mjs';

const REGISTR = 'src/data/twenty/vydani.json';
const FUNKCE = 'src/data/twenty/funkce.json';
const zapis = process.argv.includes('--zapis');
const OD_VERZE = '2.0.0';

const porovnej = (a, b) => {
  const [pa, pb] = [a, b].map((v) => v.split('.').map(Number));
  for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i];
  return 0;
};

const registr = JSON.parse(readFileSync(REGISTR, 'utf8'));
const funkce = JSON.parse(readFileSync(FUNKCE, 'utf8')).funkce;
const zname = new Set(registr.vydani.map((v) => v.verze));
const nejnovejsi = registr.vydani.map((v) => v.verze).sort(porovnej).at(-1) ?? OD_VERZE;

async function stahni() {
  const hlavicky = { 'User-Agent': 'twentycrm-cz-registr', Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) hlavicky.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const vse = [];
  for (let strana = 1; strana <= 10; strana++) {
    const r = await fetch(`https://api.github.com/repos/twentyhq/twenty/releases?per_page=100&page=${strana}`, { headers: hlavicky });
    if (!r.ok) throw new Error(`GitHub API ${r.status}: ${await r.text()}`);
    const data = await r.json();
    if (!data.length) break;
    vse.push(...data);
    // stránky jdou od nejnovějšího — jakmile jsme pod nejnovější známou verzí, starší už nepotřebujeme
    const verze = data.map((x) => x.tag_name.match(/^(?:twenty\/)?v(\d+\.\d+\.\d+)$/)?.[1]).filter(Boolean);
    if (zname.size && verze.length && verze.every((v) => porovnej(v, nejnovejsi) < 0)) break;
  }
  return vse
    .filter((x) => !x.draft && !x.prerelease)
    .map((x) => ({ verze: x.tag_name.match(/^(?:twenty\/)?v(\d+\.\d+\.\d+)$/)?.[1], x }))
    .filter(({ verze }) => verze && porovnej(verze, OD_VERZE) >= 0 && !zname.has(verze))
    .map(({ verze, x }) => ({ verze, datum: x.published_at.slice(0, 10), url: x.html_url, telo: x.body ?? '' }))
    .sort((a, b) => porovnej(a.verze, b.verze));
}

/** Hlavní body z poznámek k vydání (nadpisy a tučné odrážky), bez seznamu oprav. */
// Poznámky mají víc tvarů: ručně psané („### Features" + „- **Funkce** — popis") a generované
// („## ✨ New features" / „## 💅 Improvements & UX" + „- feat(ai): popis (#123) by @autor").
// Bereme sekce s novinkami a nekompatibilními změnami (⚠), vynecháváme opravy, bezpečnostní
// aktualizace knihoven a změny pro vývojáře.
const SEKCE_ANO = /highlights|features|improvements|notable|breaking/i;
const SEKCE_NE = /bug ?fix|fixes|security|developer|changelog|contributors|chore|maintenance/i;

function hlavniBody(telo) {
  const body = [];
  let sekce = null; // null = před prvním nadpisem
  for (const r of telo.split('\n')) {
    const nadpis = r.match(/^#{2,4}\s+(.+)/);
    if (nadpis) {
      sekce = SEKCE_NE.test(nadpis[1]) ? 'ne' : SEKCE_ANO.test(nadpis[1]) ? (/breaking/i.test(nadpis[1]) ? 'breaking' : 'ano') : sekce;
      continue;
    }
    if (sekce === 'ne' || sekce === null) continue;
    const m = r.match(/^\s*[-*]\s+(?:\*\*(.+?)\*\*.*|(.+))$/);
    if (!m) continue;
    let text = (m[1] ?? m[2])
      .replace(/^(\[[\w-]+\]\s*)?(feat|fix|chore|refactor|docs|perf)(\([^)]*\))?!?:\s*/i, '')
      .replace(/\s+\(\[#\d+\].*$/, '')
      .replace(/\s+(by @|in https).*$/, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (!text || (sekce === 'breaking' && /^bump /i.test(text))) continue;
    if (sekce === 'breaking') text = '⚠ ' + text;
    body.push(text.slice(0, 140));
  }
  return [...new Set(body)];
}

function dotceneFunkce(body) {
  const text = body.join('\n');
  return funkce.filter((f) => (f.hledat ?? []).some((slovo) => new RegExp(`\\b${slovo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i').test(text)));
}

const nova = await stahni();
const obsah = nactiObsah();

if (!nova.length) {
  console.log(`✓ Registr vydání je aktuální (nejnovější ${nejnovejsi}).`);
} else {
  console.log(`Nová vydání Twenty od ${nejnovejsi}: ${nova.length}\n`);
  const vsechnyDotcene = new Set();
  for (const v of nova) {
    console.log(`■ ${v.verze} (${v.datum}) ${v.url}`);
    const body = hlavniBody(v.telo);
    for (const b of body.slice(0, 25)) console.log(`    · ${b}`);
    if (body.length > 25) console.log(`    · … a dalších ${body.length - 25} (celé v poznámkách k vydání)`);
    const dotcene = dotceneFunkce(body);
    if (dotcene.length) console.log(`    funkce v registru, kterých se to může týkat: ${dotcene.map((f) => `${f.id} [${f.stav}]`).join(', ')}`);
    dotcene.forEach((f) => vsechnyDotcene.add(f.id));
    console.log('');
  }
  const stranky = obsah.filter((s) => [...funkceStranky(s, funkce)].some((id) => vsechnyDotcene.has(id)));
  if (stranky.length) {
    console.log('Stránky, které na dotčené funkce odkazují (zkontrolovat text):');
    for (const s of stranky) console.log(`  ${s.url}${s.draft ? ' (koncept)' : ''}  ${s.soubor}`);
    console.log('');
  }
  if (zapis) {
    for (const v of nova) registr.vydani.push({ verze: v.verze, datum: v.datum, url: v.url, zmeny: [], zpracovano: null });
    registr.vydani.sort((a, b) => porovnej(b.verze, a.verze));
    writeFileSync(REGISTR, JSON.stringify(registr, null, 2) + '\n');
    console.log(`Zapsáno ${nova.length} vydání do ${REGISTR} jako nezpracovaná (zpracovano: null).`);
  } else {
    console.log('Pro zápis do registru spusťte: npm run twenty:vydani -- --zapis');
  }
}

const nezpracovana = registr.vydani.filter((v) => !v.zpracovano);
if (nezpracovana.length) {
  console.log(`\nNezpracovaná vydání v registru: ${nezpracovana.map((v) => v.verze).join(', ')}`);
  console.log('Postup: doplnit „zmeny" (česky, co to firmě přinese, s odkazem na funkci), upravit stav v funkce.json, nastavit „zpracovano".');
}
