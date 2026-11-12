import { getCollection } from 'astro:content';

/**
 * Statické cesty pro stránky z kolekce `stranky` v dané složce.
 * Každá složka webu má vlastní route soubor (src/pages/<slozka>/[slug].astro), protože
 * v kořeni nesmí být [...slug], aby nekolidovala se složkami (např. /twenty/).
 *
 * @param slozka '' = stránky v kořeni (/cenik/), jinak název složky (pro-servisni-firmy)
 */
export async function cestyVeSlozce(slozka: string) {
  const vse = await getCollection('stranky');
  return vse
    .filter((s) => {
      if (s.id === 'index') return false; // úvodní stránka má vlastní index.astro
      const casti = s.id.split('/');
      return slozka === '' ? casti.length === 1 : casti.length === 2 && casti[0] === slozka;
    })
    .map((s) => ({ params: { slug: s.id.split('/').at(-1)! }, props: { stranka: s } }));
}
