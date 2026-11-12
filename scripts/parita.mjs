// Porovná text stránky na starém webu (vyrenderované HTML v ../TwentyCRM.cz/html/)
// s novou Markdown stránkou a vypíše věty, které v novém textu chybějí.
// Použití: node scripts/parita.mjs cenik              (jedna URL; také /cenik/, pro-servisni-firmy/hvac, index)
//          node scripts/parita.mjs --vse              (všechny převedené URL z docs/url-inventar.json)
//          node scripts/parita.mjs /cenik/ --stary ../TwentyCRM.cz/html
// Návratový kód 1 = pokrytí pod 98 % nebo chybějící věty.
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fromHtml } from 'hast-util-from-html';
import { toText } from 'hast-util-to-text';
import { visit, SKIP } from 'unist-util-visit';
import { vykresliStranku } from './lib/vykresli-md.mjs';

const args = process.argv.slice(2);
const iStary = args.indexOf('--stary');
const STARY = iStary >= 0 ? args.splice(iStary, 2)[1] : '../TwentyCRM.cz/html';
const vse = args.includes('--vse');
const podrobne = args.includes('--podrobne');
// Schválené rozdíly (opravené překlepy, vědomě změněné prvky) — věty starého webu, které už v novém být nemají.
// `--zapis-vyjimky` uloží aktuálně chybějící věty jako schválené. Použít jen po kontrole, že jde o záměr.
const SOUBOR_VYJIMEK = 'docs/parita-vyjimky.json';
const zapsatVyjimky = args.includes('--zapis-vyjimky');
const vyjimky = existsSync(SOUBOR_VYJIMEK) ? JSON.parse(readFileSync(SOUBOR_VYJIMEK, 'utf8')) : {};
const inventar = JSON.parse(readFileSync('docs/url-inventar.json', 'utf8'));

// Přijme „/cenik/", „cenik", „pro-servisni-firmy/hvac" i „index" (Git Bash přepisuje /cesty/ na C:/Program Files/Git/…).
const naUrl = (a) => {
  const s = a.replace(/\\/g, '/').replace(/^.*\/Git\//, '').replace(/^\/+|\/+$/g, '');
  return s === '' || s === 'index' ? '/' : `/${s}/`;
};
const urls = vse ? inventar.filter((r) => existsSync(r.md)).map((r) => r.url) : args.filter((a) => !a.startsWith('--')).map(naUrl);

/** Text z <main>, bez skriptů, stylů a svg. */
function textZHtml(html, jenMain) {
  let strom = fromHtml(html, { fragment: !jenMain });
  if (jenMain) {
    let main = null;
    visit(strom, 'element', (n) => {
      if (n.tagName === 'main') {
        main = n;
        return SKIP;
      }
    });
    strom = main ?? strom;
  }
  visit(strom, 'element', (n, i, p) => {
    if (p && ['script', 'style', 'svg', 'template', 'noscript'].includes(n.tagName)) {
      p.children.splice(i, 1);
      return [SKIP, i];
    }
  });
  return toText(strom, { whitespace: 'normal' });
}

const normalizuj = (s) =>
  s
    .toLowerCase()
    .replace(/[  ]/g, ' ')
    .replace(/[„“”"'‚‘’«»]/g, '')
    .replace(/[→←↓↑✓✗★•·—–▸▶►\-|*_#>]/g, ' ')
    .replace(/\p{Extended_Pictographic}|\p{Regional_Indicator}|️/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function vety(text) {
  return text
    .split(/(?<=[.!?:])\s+|\n+/)
    .map((v) => normalizuj(v).replace(/[.!?:,;()]/g, ' ').replace(/\s+/g, ' ').trim())
    .filter((v) => v.split(' ').length >= 3);
}

let spatne = false;
for (const url of urls) {
  const radek = inventar.find((r) => r.url === url);
  if (!radek) {
    console.log(`? ${url} — není v inventáři`);
    continue;
  }
  const staryPath = join(STARY, url === '/' ? 'index.html' : url.replace(/^\//, '') + 'index.html');
  if (!existsSync(staryPath)) {
    console.log(`? ${url} — chybí starý soubor ${staryPath}`);
    continue;
  }
  if (!existsSync(radek.md)) {
    console.log(`– ${url} — zatím nepřevedeno`);
    continue;
  }
  const stary = vety(textZHtml(readFileSync(staryPath, 'utf8'), true));
  const { html } = await vykresliStranku(radek.md);
  const novy = normalizuj(textZHtml(html, false)).replace(/[.!?:,;()]/g, ' ').replace(/\s+/g, ' ');
  const schvalene = new Set(vyjimky[url] ?? []);
  const chybiVse = [...new Set(stary)].filter((v) => !novy.includes(v));
  if (zapsatVyjimky && chybiVse.length) vyjimky[url] = chybiVse;
  const chybi = chybiVse.filter((v) => !schvalene.has(v));
  const pokryti = 1 - chybi.length / Math.max(1, new Set(stary).size);
  const ok = chybi.length === 0;
  if (!ok) spatne = true;
  console.log(`${ok ? '✓' : '✗'} ${url} — pokrytí ${(pokryti * 100).toFixed(1)} % (${chybi.length} chybějících vět)`);
  if (!ok && (podrobne || !vse)) for (const v of chybi) console.log(`    · ${v}`);
}
if (zapsatVyjimky) {
  writeFileSync(SOUBOR_VYJIMEK, JSON.stringify(vyjimky, null, 2) + '\n');
  console.log(`Schválené rozdíly uloženy do ${SOUBOR_VYJIMEK}`);
}
process.exit(spatne && !zapsatVyjimky ? 1 : 0);
