import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

/**
 * Průvodce /twenty/ — struktura z kolekce `pruvodce` (src/content/pruvodce/).
 * Oblast = složka s index.md, článek = další .md v té složce.
 * Koncepty (`draft: true`) jsou vidět jen při vývoji; produkční build je vynechá.
 */

export type Clanek = CollectionEntry<'pruvodce'>;
export interface Oblast {
  uvod: Clanek;
  clanky: Clanek[];
}

/** Koncepty ukazuje vývoj a testovací build (KONCEPTY=1, viz npm run build:staging). */
const ukazatKoncepty = import.meta.env.DEV || process.env.KONCEPTY === '1';
const viditelny = (e: Clanek) => ukazatKoncepty || !e.data.draft;
const podlePoradi = (a: Clanek, b: Clanek) => a.data.poradi - b.data.poradi || a.data.title.localeCompare(b.data.title, 'cs');

export const PREFIX = '/twenty/';

export function url(e: Clanek | string): string {
  const id = typeof e === 'string' ? e : e.id;
  return id === 'index' ? PREFIX : `${PREFIX}${id}/`;
}

/** Je průvodce zveřejněný? Dokud je úvod koncept, menu a patička na něj neodkazují. */
export async function pruvodceZverejnen(): Promise<boolean> {
  if (ukazatKoncepty) return true;
  const uvod = await getEntry('pruvodce', 'index');
  return Boolean(uvod && !uvod.data.draft);
}

export async function vsechny(): Promise<Clanek[]> {
  return (await getCollection('pruvodce')).filter(viditelny);
}

/** Úvod průvodce + oblasti s články, seřazené podle `poradi`. */
export async function strom(): Promise<{ uvod?: Clanek; oblasti: Oblast[] }> {
  const vse = await vsechny();
  const uvod = vse.find((e) => e.id === 'index');
  const oblasti = vse
    .filter((e) => e.id !== 'index' && !e.id.includes('/'))
    .sort(podlePoradi)
    .map((o) => ({
      uvod: o,
      clanky: vse.filter((e) => e.id.startsWith(`${o.id}/`)).sort(podlePoradi),
    }));
  return { uvod, oblasti };
}

/** Pořadí čtení: úvod → oblast → její články → další oblast … */
export async function poradiCteni(): Promise<Clanek[]> {
  const { uvod, oblasti } = await strom();
  return [...(uvod ? [uvod] : []), ...oblasti.flatMap((o) => [o.uvod, ...o.clanky])];
}

export function oblastClanku(e: Clanek): string | undefined {
  if (e.id === 'index') return undefined;
  return e.id.split('/')[0];
}
