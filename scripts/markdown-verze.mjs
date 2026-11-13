#!/usr/bin/env node
/**
 * Textová verze každé stránky pro AI asistenty: dist/cenik/index.html → dist/cenik.md,
 * dist/index.html → dist/index.md (stejně jako na původním webu, slibuje to public/llms.txt).
 *
 * Bere jen obsah <main>, vynechá navigaci, boční obsah průvodce, ikony, skripty a tlačítka.
 * Interní odkazy převádí na .md (/cenik/ → /cenik.md). Není to dokonalý převod HTML → Markdown,
 * stačí na čtení a citování.
 *
 * Spouští se po `astro build` (v package.json), před Pagefind a před scripts/docasna-adresa.mjs.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fromHtml } from 'hast-util-from-html';

const DIST = 'dist';
const SITE = 'https://www.twentycrm.cz';
const VYNECHAT_TAGY = new Set(['script', 'style', 'svg', 'button', 'nav', 'aside', 'noscript', 'iframe', 'template', 'form']);
// Stránky, které nejsou určené ke čtení (tiskové verze, 404).
const VYNECHAT_STRANKY = new Set(['404.html', 'prezentace-hvac/index.html', 'letak-hvac/index.html']);

function* htmlSoubory(dir) {
  for (const jmeno of readdirSync(dir)) {
    const cesta = join(dir, jmeno);
    if (statSync(cesta).isDirectory()) {
      if (jmeno === '_astro' || jmeno === 'pagefind') continue;
      yield* htmlSoubory(cesta);
    } else if (jmeno.endsWith('.html')) yield cesta;
  }
}

const trida = (n) => {
  const c = n.properties?.className;
  return Array.isArray(c) ? c : [];
};

function vynechat(n) {
  if (n.type !== 'element') return false;
  if (VYNECHAT_TAGY.has(n.tagName)) return true;
  const p = n.properties ?? {};
  if (p.ariaHidden === 'true' || p.ariaHidden === true) return true;
  if (p.hidden) return true;
  if (trida(n).includes('ikona') || trida(n).includes('sr-only')) return true;
  return false;
}

function mdOdkaz(href) {
  if (typeof href !== 'string') return '';
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  const [cesta, kotva] = href.split('#');
  if (/\.[a-z0-9]+$/i.test(cesta)) return href; // soubor (obrázek, pdf, txt)
  const md = cesta === '/' ? '/index.md' : cesta.replace(/\/$/, '') + '.md';
  return kotva ? `${md}#${kotva}` : md;
}

const mezery = (s) => s.replace(/[ \t\r\n ]+/g, ' ');

/** Řádkový obsah (text, odkazy, zvýraznění) — bez bloků. */
function radek(n) {
  if (n.type === 'text') return mezery(n.value);
  if (n.type !== 'element' || vynechat(n)) return '';
  const vnitrek = () => n.children.map(radek).join('');
  switch (n.tagName) {
    case 'br':
      return '  \n';
    case 'strong':
    case 'b': {
      const t = vnitrek().trim();
      return t ? `**${t}**` : '';
    }
    case 'em':
    case 'i': {
      const t = vnitrek().trim();
      return t ? `*${t}*` : '';
    }
    case 'code':
      return '`' + vnitrek() + '`';
    case 'a': {
      const t = vnitrek().trim();
      const href = mdOdkaz(n.properties?.href);
      return t && href ? `[${t}](${href})` : t;
    }
    case 'img':
      return n.properties?.alt ? `![${n.properties.alt}](${n.properties.src})` : '';
    case 'span':
      // Štítky (stav funkce, omezení) stojí v HTML těsně vedle sebe — v textu je oddělit.
      if (trida(n).some((c) => c.endsWith('-stitek') || c.startsWith('stav-stitek'))) return ` · ${vnitrek().trim()}`;
      return vnitrek();
    default:
      return vnitrek();
  }
}

const BLOKOVE = new Set([
  'p', 'div', 'section', 'article', 'header', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'table', 'pre', 'blockquote', 'details', 'summary', 'figure', 'figcaption', 'dl', 'dt', 'dd', 'hr',
]);
const maBloky = (n) => n.children?.some((d) => d.type === 'element' && (BLOKOVE.has(d.tagName) || maBloky(d)) && !vynechat(d));

function tabulka(n) {
  const radky = [];
  const projdi = (x) => {
    for (const d of x.children ?? []) {
      if (d.type !== 'element') continue;
      if (d.tagName === 'tr') radky.push(d.children.filter((c) => c.type === 'element' && (c.tagName === 'td' || c.tagName === 'th')));
      else projdi(d);
    }
  };
  projdi(n);
  if (!radky.length) return '';
  const bunka = (c) => radek(c).trim().replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ');
  const sloupcu = Math.max(...radky.map((r) => r.length));
  const out = radky.map((r) => '| ' + Array.from({ length: sloupcu }, (_, i) => (r[i] ? bunka(r[i]) : '')).join(' | ') + ' |');
  out.splice(1, 0, '|' + ' --- |'.repeat(sloupcu));
  return out.join('\n');
}

/** Blokový obsah — vrací pole odstavců. */
function bloky(n, hloubka = 0) {
  if (n.type === 'text') {
    const t = mezery(n.value).trim();
    return t ? [t] : [];
  }
  if (n.type !== 'element' || vynechat(n)) return [];
  const tag = n.tagName;
  const deti = () => n.children.flatMap((d) => bloky(d, hloubka));

  if (/^h[1-6]$/.test(tag)) {
    const t = radek(n).trim();
    return t ? [`${'#'.repeat(Number(tag[1]))} ${t}`] : [];
  }
  if (tag === 'p' || tag === 'figcaption' || tag === 'dt' || tag === 'dd') {
    const t = radek(n).trim();
    return t ? [t] : [];
  }
  if (tag === 'summary') {
    const t = radek(n).trim();
    return t ? [`**${t}**`] : [];
  }
  if (tag === 'hr') return ['---'];
  if (tag === 'pre') return ['```\n' + radekText(n).replace(/\n+$/, '') + '\n```'];
  if (tag === 'blockquote') return [deti().join('\n\n').replace(/^/gm, '> ')];
  if (tag === 'table') return [tabulka(n)];
  if (tag === 'ul' || tag === 'ol') {
    let i = 0;
    const polozky = n.children
      .filter((d) => d.type === 'element' && d.tagName === 'li')
      .map((li) => {
        i++;
        const znacka = tag === 'ol' ? `${i}.` : '-';
        const obsah = maBloky(li) ? li.children.flatMap((d) => bloky(d, hloubka + 1)).join('\n') : radek(li).trim();
        return `${znacka} ${obsah.replace(/\n/g, '\n  ')}`;
      });
    return polozky.length ? [polozky.join('\n')] : [];
  }
  // Kontejner: když obsahuje jen řádkový obsah, je to odstavec.
  if (!maBloky(n)) {
    const t = radek(n).trim();
    return t ? [t] : [];
  }
  // Smíšený obsah: souvislé řádkové kusy spojit do odstavce.
  const out = [];
  let kus = '';
  const dokoncit = () => {
    const t = kus.trim();
    if (t) out.push(t);
    kus = '';
  };
  for (const d of n.children) {
    if (d.type === 'element' && !vynechat(d) && (BLOKOVE.has(d.tagName) || maBloky(d))) {
      dokoncit();
      out.push(...bloky(d, hloubka));
    } else kus += radek(d);
  }
  dokoncit();
  return out;
}

function radekText(n) {
  if (n.type === 'text') return n.value;
  if (n.type !== 'element') return '';
  return n.children.map(radekText).join('');
}

function najdi(n, test) {
  if (test(n)) return n;
  for (const d of n.children ?? []) {
    const f = najdi(d, test);
    if (f) return f;
  }
  return null;
}

const meta = (strom, jmeno) =>
  najdi(strom, (n) => n.type === 'element' && n.tagName === 'meta' && n.properties?.name === jmeno)?.properties?.content ?? '';
const uvozovky = (s) => `"${String(s).replace(/\s+/g, ' ').replace(/"/g, '\\"')}"`;

let pocet = 0;
for (const soubor of htmlSoubory(DIST)) {
  const rel = relative(DIST, soubor).split(sep).join('/');
  if (VYNECHAT_STRANKY.has(rel)) continue;
  const strom = fromHtml(readFileSync(soubor, 'utf8'));
  const main = najdi(strom, (n) => n.type === 'element' && n.tagName === 'main');
  if (!main) continue;

  const titulek = radekText(najdi(strom, (n) => n.type === 'element' && n.tagName === 'title') ?? { type: 'text', value: '' });
  const cesta = rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '');
  const telo = bloky(main)
    .join('\n\n')
    .replace(/[ \t]+\n/g, (m) => (m.startsWith('  ') ? '  \n' : '\n'))
    .replace(/^(\s*)· /gm, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  const md =
    `---\ntitle: ${uvozovky(titulek)}\nurl: ${uvozovky(SITE + cesta)}\ndescription: ${uvozovky(meta(strom, 'description'))}\n---\n\n` +
    telo +
    '\n';
  const cil = rel === 'index.html' ? join(DIST, 'index.md') : join(DIST, rel.replace(/\/index\.html$/, '') + '.md');
  writeFileSync(cil, md);
  pocet++;
}
console.log(`markdown-verze: ${pocet} stránek → .md`);
