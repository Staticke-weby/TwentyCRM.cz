// node scripts/docasna-adresa.mjs /TwentyCRM.cz
// Dočasné nasazení na https://staticke-weby.github.io/TwentyCRM.cz/ (web v podsložce).
// Odkazy jsou v obsahu psané od kořene („/cenik/"), proto se po buildu v dist/ všem kořenovým
// cestám v HTML a CSS předsadí podsložka. Po přepnutí na doménu www.twentycrm.cz tenhle krok
// z .github/workflows/deploy.yml smazat.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const zaklad = process.argv[2]?.replace(/\/$/, '');
if (!/^\/[\w.-]+$/.test(zaklad ?? '')) throw new Error('Použití: node scripts/docasna-adresa.mjs /Podslozka');

const soubory = (slozka) =>
  readdirSync(slozka, { withFileTypes: true }).flatMap((e) => {
    const cesta = join(slozka, e.name);
    if (e.isDirectory()) return e.name === 'pagefind' ? [] : soubory(cesta);
    return /\.(html|css)$/.test(e.name) ? [cesta] : [];
  });

let pocet = 0;
for (const soubor of soubory('dist')) {
  const puvodni = readFileSync(soubor, 'utf8');
  const novy = puvodni
    // href="/…", src="/…", action="/…" (ne „//" — adresy bez protokolu)
    .replace(/\b(href|src|action|poster)=(["'])\/(?!\/)/g, `$1=$2${zaklad}/`)
    // url(/fonts/…) v CSS
    .replace(/url\((["']?)\/(?!\/)/g, `url($1${zaklad}/`)
    // načítání vyhledávání v průvodci ('/pagefind/…' ve vloženém skriptu)
    .replace(/(["'])\/pagefind\//g, `$1${zaklad}/pagefind/`);
  if (novy !== puvodni) {
    writeFileSync(soubor, novy);
    pocet++;
  }
}
console.log(`Cesty předsazené „${zaklad}" v ${pocet} souborech.`);
