// Vykreslí Markdown stránku stejnou cestou jako Astro (remark-directive + náš plugin),
// ale bez Astra — kvůli rychlé kontrole jednotlivých souborů a porovnání se starým webem.
import { readFileSync } from 'node:fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { parse as parseYaml } from 'yaml';
import { marked } from 'marked';

import remarkTwentycrm from '../../src/lib/markdown/remark-twentycrm.mjs';
import { dosadHodnoty } from '../../src/lib/site.mjs';
import { ctaTlacitka, disclaimer } from '../../src/lib/komponenty.mjs';

export function nactiStranku(cesta) {
  const zdroj = readFileSync(cesta, 'utf8');
  const m = zdroj.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error(`${cesta}: chybí frontmatter (--- … ---)`);
  return { data: parseYaml(m[1]) ?? {}, telo: m[2] };
}

/** Kontrola frontmatteru podle schématu v src/content.config.ts (zjednodušeně). */
export function zkontrolujFrontmatter(d, kolekce = 'stranky') {
  const chyby = [];
  if (!d.title) chyby.push('chybí title');
  if (!d.description) chyby.push('chybí description');
  else if (d.description.length > 300) chyby.push(`description má ${d.description.length} znaků (max 300)`);
  if (kolekce === 'stranky') {
    if (d.hero && !d.hero.nadpis) chyby.push('hero bez nadpis');
    if (d.hero?.pozadi && !['tmave', 'svetle'].includes(d.hero.pozadi)) chyby.push('hero.pozadi: tmave | svetle');
    if (d.hero?.disclaimer && !['Twenty Sales', 'Twenty Servis'].includes(d.hero.disclaimer)) chyby.push('hero.disclaimer: Twenty Sales | Twenty Servis');
    if (d.zaver && !d.zaver.nadpis) chyby.push('zaver bez nadpis');
    if (d.stav && !['prevedeno', 'rozpracovano'].includes(d.stav)) chyby.push('stav: prevedeno | rozpracovano');
    for (const t of d.hero?.tlacitka ?? []) if (!t.text || !t.odkaz) chyby.push('hero.tlacitka: každé potřebuje text a odkaz');
  }
  return chyby;
}

export async function vykresliTelo(telo, cesta) {
  const soubor = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDirective)
    .use(remarkTwentycrm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process({ value: telo, path: cesta });
  return String(soubor);
}

const inline = (s) => (s ? marked.parseInline(dosadHodnoty(s)) : '');

/** Hero + tělo + závěr — to, co je na stránce mezi hlavičkou a patičkou. */
export async function vykresliStranku(cesta) {
  const { data: d, telo } = nactiStranku(cesta);
  const casti = [];
  if (d.hero) {
    const h = d.hero;
    const texty = h.text === undefined ? [] : Array.isArray(h.text) ? h.text : [h.text];
    casti.push(
      h.stitek ? `<p>${h.stitek}</p>` : '',
      `<h1>${inline(h.nadpis)}</h1>`,
      h.perex ? `<p>${inline(h.perex)}</p>` : '',
      ...texty.map((t) => `<p>${inline(t)}</p>`),
      ...(h.stitky ?? []).map((t) => `<p>${inline(t)}</p>`),
      ...(h.tlacitka ?? []).map((t) => `<a href="${t.odkaz}">${t.text}</a>`),
      h.kontakt ? ctaTlacitka({ mailto: d.mailto }) : '',
      h.disclaimer ? disclaimer({ produkt: h.disclaimer }) : '',
    );
  }
  casti.push(await vykresliTelo(telo, cesta));
  if (d.zaver) {
    casti.push(
      `<h2>${d.zaver.nadpis}</h2>`,
      d.zaver.text ? `<p>${inline(d.zaver.text)}</p>` : '',
      ctaTlacitka({ mailto: d.mailto }),
      ...(d.zaver.poznamky ?? []).map((p) => `<p>${inline(p)}</p>`),
    );
  }
  return { data: d, html: casti.join('\n') };
}
