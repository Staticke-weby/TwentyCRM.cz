// Projde Markdown obsah webu a vrátí u každé stránky, na co se odvolává:
// frontmatter (overeno, verzeTwenty, funkce, zdroje, temata) a bloky ::stav-funkci{temata funkce}.
// Používají skripty twenty-vydani.mjs a obsah-zastarale.mjs.
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'yaml';

const KORENY = [
  { slozka: 'src/content/stranky', predpona: '/' },
  { slozka: 'src/content/pruvodce', predpona: '/twenty/' },
];

function soubory(slozka) {
  return readdirSync(slozka, { withFileTypes: true }).flatMap((e) => {
    const cesta = join(slozka, e.name);
    if (e.isDirectory()) return soubory(cesta);
    return e.name.endsWith('.md') ? [cesta] : [];
  });
}

const seznam = (hodnota) => (hodnota ? String(hodnota).split(',').map((s) => s.trim()).filter(Boolean) : []);

export function nactiObsah() {
  const vysledek = [];
  for (const { slozka, predpona } of KORENY) {
    for (const soubor of soubory(slozka)) {
      const text = readFileSync(soubor, 'utf8');
      const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const fm = m ? parse(m[1]) ?? {} : {};
      const id = relative(slozka, soubor).replaceAll('\\', '/').replace(/\.md$/, '').replace(/(^|\/)index$/, '');
      const url = id ? `${predpona}${id}/` : predpona;
      const bloky = [...text.matchAll(/^::stav-funkci(?:\{([^}]*)\})?\s*$/gm)].map((b) => {
        const attr = Object.fromEntries([...(b[1] ?? '').matchAll(/(\w+)="([^"]*)"/g)].map((x) => [x[1], x[2]]));
        return { temata: seznam(attr.temata), funkce: seznam(attr.funkce) };
      });
      vysledek.push({
        soubor: soubor.replaceAll('\\', '/'),
        url,
        draft: fm.draft === true,
        overeno: fm.overeno ? new Date(fm.overeno).toISOString().slice(0, 10) : null,
        verzeTwenty: fm.verzeTwenty ? String(fm.verzeTwenty) : null,
        funkce: fm.funkce ?? [],
        zdroje: (fm.zdroje ?? []).filter((z) => typeof z === 'string'),
        temata: fm.temata ?? [],
        bloky,
      });
    }
  }
  return vysledek;
}

/** Id funkcí, kterých se stránka týká (frontmatter + bloky ::stav-funkci podle témat i id). */
export function funkceStranky(stranka, vsechnyFunkce) {
  const ids = new Set(stranka.funkce);
  for (const b of stranka.bloky) {
    for (const id of b.funkce) ids.add(id);
    for (const f of vsechnyFunkce) if (f.temata.some((t) => b.temata.includes(t))) ids.add(f.id);
  }
  return ids;
}
