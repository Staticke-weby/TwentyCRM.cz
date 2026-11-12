// Rychlá kontrola Markdown stránek bez celého buildu (lze pouštět souběžně).
// Použití: node scripts/zkontroluj-md.mjs src/content/stranky/cenik.md [další soubory…] [--html vystup.html]
// Ověří frontmatter, projde všechny direktivy a {{…}} hodnoty. Návratový kód 1 = chyba.
import { writeFileSync } from 'node:fs';
import { nactiStranku, zkontrolujFrontmatter, vykresliStranku } from './lib/vykresli-md.mjs';

const args = process.argv.slice(2);
const iHtml = args.indexOf('--html');
const htmlVystup = iHtml >= 0 ? args.splice(iHtml, 2)[1] : null;

let chyba = false;
for (const cesta of args) {
  try {
    const { data } = nactiStranku(cesta);
    const kolekce = cesta.replace(/\\/g, '/').includes('/pruvodce/') ? 'pruvodce' : 'stranky';
    const chyby = zkontrolujFrontmatter(data, kolekce);
    const { html } = await vykresliStranku(cesta);
    // zbytky nepřevedené syntaxe
    // Latte: {$x}, {include}, n:atribut="…" (jen jako atribut v tagu, ne „plán: …" v textu)
    if (/\{\{|\{%|\{\$|\{include|<[^>]*\sn:[a-z]+=/.test(html.replace(/<script[\s\S]*?<\/script>/g, ''))) chyby.push('ve výstupu zůstala šablonová syntaxe ({{ … }}, {include}, {$…}, n:…)');
    if (/(^|\n)\s*:{2,}[a-z]/.test(html)) chyby.push('ve výstupu zůstala nezpracovaná direktiva (::…)');
    if (/href="[^"]*\.md"/.test(html)) chyby.push('odkaz končí na .md — použijte URL s lomítkem (/cenik/)');
    if (chyby.length) {
      chyba = true;
      console.log(`✗ ${cesta}\n  - ${chyby.join('\n  - ')}`);
    } else {
      console.log(`✓ ${cesta}`);
    }
    if (htmlVystup) writeFileSync(htmlVystup, html);
  } catch (err) {
    chyba = true;
    console.log(`✗ ${cesta}\n  - ${err.message}`);
  }
}
process.exit(chyba ? 1 : 0);
