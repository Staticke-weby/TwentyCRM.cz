// Projde vyrenderovaný web v dist/ a ověří, že každý interní odkaz vede na existující stránku nebo soubor.
// Použití: npm run build && node scripts/odkazy.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const stranky = [];
(function projdi(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) projdi(p);
    else if (f.endsWith('.html')) stranky.push(p);
  }
})(DIST);

const existuje = (cesta) => {
  const bez = decodeURIComponent(cesta.split('#')[0].split('?')[0]);
  if (bez === '' ) return true;
  const p = join(DIST, bez);
  return existsSync(p) && (statSync(p).isFile() || existsSync(join(p, 'index.html')));
};

const chyby = new Map();
let pocet = 0;
for (const s of stranky) {
  const html = readFileSync(s, 'utf8');
  for (const [, href] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    pocet++;
    if (!existuje(href)) {
      const kde = '/' + relative(DIST, s).replace(/\\/g, '/').replace(/index\.html$/, '');
      if (!chyby.has(href)) chyby.set(href, new Set());
      chyby.get(href).add(kde);
    }
    if (/^\/[^#?]*[^/#?]$/.test(href) && !/\.[a-z0-9]+$/i.test(href)) {
      // interní stránka bez lomítka na konci → přesměrování navíc
      const kde = '/' + relative(DIST, s).replace(/\\/g, '/').replace(/index\.html$/, '');
      const klic = `${href}  (chybí lomítko na konci)`;
      if (!chyby.has(klic)) chyby.set(klic, new Set());
      chyby.get(klic).add(kde);
    }
  }
}

// Kotvy: /stranka/#kotva i #kotva na téže stránce musí mít cíl s tímhle id.
const url = (s) => '/' + relative(DIST, s).replace(/\\/g, '/').replace(/index\.html$/, '');
const idsStranky = new Map(stranky.map((s) => [url(s), new Set([...readFileSync(s, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]));
let kotev = 0;
for (const s of stranky) {
  for (const [, cesta, kotva] of readFileSync(s, 'utf8').matchAll(/href="(\/[^"#?]*)?#([^"]+)"/g)) {
    kotev++;
    const cil = cesta ?? url(s);
    if (!idsStranky.get(cil)?.has(decodeURIComponent(kotva))) {
      const klic = `${cesta ?? ''}#${kotva}  (kotva bez cíle)`;
      if (!chyby.has(klic)) chyby.set(klic, new Set());
      chyby.get(klic).add(url(s));
    }
  }
}

console.log(`${stranky.length} stránek, ${pocet} interních odkazů, ${kotev} odkazů na kotvy`);
if (chyby.size === 0) {
  console.log('✓ všechny interní odkazy vedou na existující cíl');
} else {
  console.log(`✗ ${chyby.size} rozbitých cílů:`);
  for (const [href, kde] of chyby) console.log(`  ${href}  ←  ${[...kde].slice(0, 5).join(', ')}${kde.size > 5 ? ' …' : ''}`);
  process.exitCode = 1;
}
