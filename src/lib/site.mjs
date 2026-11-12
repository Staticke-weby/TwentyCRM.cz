// Sdílená data a pomocné funkce — používá je Markdown plugin (při buildu)
// i Astro komponenty. Čísla a kontakty berte VŽDY odsud, nikdy je nepište do textu ručně.
import pricing from '../data/pricing.json' with { type: 'json' };
import mailto from '../data/mailto.json' with { type: 'json' };
import faq from '../data/faq.json' with { type: 'json' };
import reseni from '../data/reseni.json' with { type: 'json' };
import obory from '../data/obory.json' with { type: 'json' };
import team from '../data/team.json' with { type: 'json' };

export { pricing, faq, reseni, obory, team };

export const KONTAKT = {
  email: 'info@bohemiacrm.cz',
  telefon: '+420605540167',
  telefonZobrazeni: '+420 605 540 167',
};

/** 34990 → "34 990 Kč" (pevné mezery, jako na původním webu). */
export function formatCena(castka, { mesicne = false } = {}) {
  const cislo = String(Math.round(castka)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${cislo} Kč${mesicne ? '/měs' : ''}`;
}

/** mailto: odkaz s předvyplněným předmětem a tělem podle kontextu stránky (src/data/mailto.json). */
export function mailtoOdkaz(sablona = 'generic') {
  const t = mailto[sablona] ?? mailto.generic;
  return `mailto:${KONTAKT.email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(t.body)}`;
}

export function telOdkaz() {
  return `tel:${KONTAKT.telefon}`;
}

/** Hodnota z pricing.json podle tečkové cesty ("implementation.includes"). */
export function zPricing(cesta) {
  const hodnota = cesta.split('.').reduce((o, k) => (o == null ? undefined : o[k]), pricing);
  if (hodnota === undefined) throw new Error(`pricing.json: cesta „${cesta}" neexistuje`);
  return hodnota;
}

// {{cena.klic}} · {{cena.klic|mesicne}} · {{data.cesta}} · {{kontakt.email}} · {{kontakt.tel}} · {{mailto.sablona}}
// Tečka, ne dvojtečka: „:slovo" by remark-directive přečetl jako direktivu.
const VZOR_HODNOTY = /\{\{(cena|data|kontakt|mailto)\.([\w.-]+?)(?:\|(\w+))?\}\}/g;

/** Jedna zástupná hodnota — {{cena.…}}, {{data.…}}, {{kontakt.…}}. Při chybě vyhodí Error. */
function hodnota(typ, klic, modifikator) {
  switch (typ) {
    case 'cena': {
      // klíč s .price (implementation) nebo přímo číslo (comparison_examples.0.competitor_yearly)
      const v = zPricing(klic);
      const castka = typeof v === 'number' ? v : v?.price;
      if (typeof castka !== 'number') throw new Error(`{{cena.${klic}}} — v pricing.json není číslo ani .price`);
      return formatCena(castka, { mesicne: modifikator === 'mesicne' });
    }
    case 'data':
      return String(zPricing(klic));
    case 'kontakt':
      if (klic === 'telefon') return KONTAKT.telefonZobrazeni;
      if (klic === 'email') return KONTAKT.email;
      if (klic === 'tel') return telOdkaz();
      throw new Error(`{{kontakt.${klic}}} — známé jsou telefon, email, tel`);
    case 'mailto':
      // celý mailto: odkaz s předvyplněným předmětem a textem podle šablony z mailto.json
      if (!mailto[klic]) throw new Error(`{{mailto.${klic}}} — šablona „${klic}" není v src/data/mailto.json`);
      return mailtoOdkaz(klic);
    default:
      throw new Error(`neznámá hodnota {{${typ}.${klic}}}`);
  }
}

/** Dosadí do textu všechny zástupné hodnoty. Používá Markdown plugin i frontmatter (hero, závěr). */
export function dosadHodnoty(text) {
  if (!text || !text.includes('{{')) return text;
  return text.replace(VZOR_HODNOTY, (_, t, k, m) => hodnota(t, k, m));
}

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
