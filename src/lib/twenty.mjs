// Registry o Twenty: vydání, funkce, zdroje (src/data/twenty/*.json) — viz docs/plan-pruvodce.md kap. 4.
// Používá je Markdown plugin (::stav-funkci), layout průvodce i skripty (twenty:vydani, obsah:zastarale).
// Při načtení se registry zkontrolují a při chybě build spadne — neexistující funkce, zdroj nebo verze
// se tak na web nedostane.
import vydaniData from '../data/twenty/vydani.json' with { type: 'json' };
import funkceData from '../data/twenty/funkce.json' with { type: 'json' };
import zdrojeData from '../data/twenty/zdroje.json' with { type: 'json' };
import { escapeHtml } from './site.mjs';

export const STAVY = {
  dnes: 'Lze nastavit dnes',
  'pripravuje-se': 'Připravuje se',
  smer: 'Směr vývoje',
};

/** Proč je funkce „připravuje se" — čte zákazník. */
export const DUVODY = {
  prepinac: 'výrobce ji ohlásil, zatím je ve vývoji vypnutá',
  beta: 'zkušební provoz',
  'docs-coming-soon': 'výrobce ji ohlásil v dokumentaci',
  nepotvrzeno: 'rozpracovaná, výrobce ji zatím nevydal jako hotovou',
};

/** Krátká verze důvodu pro štítek v přehledu. */
export const DUVODY_KRATCE = {
  prepinac: 've vývoji',
  beta: 'zkušební provoz',
  'docs-coming-soon': 'ohlášeno v dokumentaci',
  nepotvrzeno: 'rozpracováno',
};

export const OMEZENI = {
  'jen-cloud': 'jen v cloudu výrobce',
  'jen-vlastni-server': 'jen na vlastním serveru',
  'tarif-organization': 'tarif Organization',
  'cloud-organization': 'v cloudu až v tarifu Organization',
  'tarif-enterprise': 'tarif Enterprise',
  'aplikace-treti-strany': 'aplikace třetí strany',
};

const TYPY_ZDROJU = ['vydani', 'dokumentace', 'web-twenty', 'cenik', 'kod', 'konkurence', 'studie', 'legislativa', 'standard'];
const DATUM = /^\d{4}-\d{2}-\d{2}$/;
const VERZE = /^\d+\.\d+\.\d+$/;

/** Porovnání verzí "2.9.0" < "2.10.0". */
export function porovnejVerze(a, b) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i];
  return 0;
}

export const vydani = [...vydaniData.vydani].sort((a, b) => porovnejVerze(b.verze, a.verze));
export const funkce = funkceData.funkce;
export const zdroje = zdrojeData.zdroje;

const funkcePodleId = new Map(funkce.map((f) => [f.id, f]));
const zdrojePodleId = new Map(zdroje.map((z) => [z.id, z]));
const vydaniPodleVerze = new Map(vydani.map((v) => [v.verze, v]));

/** Kontrola registrů — vrací seznam problémů (prázdný = v pořádku). */
export function zkontrolujRegistry() {
  const p = [];
  const duplicity = (seznam, klic, co) => {
    const videno = new Set();
    for (const x of seznam) {
      if (videno.has(x[klic])) p.push(`${co} „${x[klic]}" je v registru dvakrát`);
      videno.add(x[klic]);
    }
  };
  duplicity(zdroje, 'id', 'zdroj');
  duplicity(funkce, 'id', 'funkce');
  duplicity(vydani, 'verze', 'vydání');

  for (const z of zdroje) {
    if (!/^https?:\/\//.test(z.url ?? '')) p.push(`zdroj ${z.id}: chybí url`);
    if (!z.nazev) p.push(`zdroj ${z.id}: chybí nazev`);
    if (!TYPY_ZDROJU.includes(z.typ)) p.push(`zdroj ${z.id}: neznámý typ „${z.typ}"`);
    if (!DATUM.test(z.zkontrolovano ?? '')) p.push(`zdroj ${z.id}: zkontrolovano musí být RRRR-MM-DD`);
  }
  for (const v of vydani) {
    if (!VERZE.test(v.verze)) p.push(`vydání ${v.verze}: verze musí být X.Y.Z`);
    if (!DATUM.test(v.datum ?? '')) p.push(`vydání ${v.verze}: datum musí být RRRR-MM-DD`);
    if (v.zpracovano !== null && !DATUM.test(v.zpracovano ?? '')) p.push(`vydání ${v.verze}: zpracovano musí být datum nebo null`);
    for (const z of v.zmeny ?? []) {
      if (!z.co) p.push(`vydání ${v.verze}: změna bez popisu`);
      for (const id of [z.funkce ?? []].flat()) if (!funkcePodleId.has(id)) p.push(`vydání ${v.verze}: neznámá funkce „${id}"`);
    }
  }
  for (const f of funkce) {
    const k = `funkce ${f.id}`;
    if (!f.nazev || !f.prinos) p.push(`${k}: chybí nazev nebo prinos`);
    if (!STAVY[f.stav]) p.push(`${k}: neznámý stav „${f.stav}"`);
    if (f.stav === 'pripravuje-se' && !DUVODY[f.duvod]) p.push(`${k}: u „pripravuje-se" chybí duvod (${Object.keys(DUVODY).join(' | ')})`);
    if (f.stav !== 'dnes' && f.od) p.push(`${k}: „od" patří jen k funkcím, které fungují dnes`);
    if (f.od && !vydaniPodleVerze.has(f.od)) p.push(`${k}: verze od=${f.od} není v registru vydání`);
    for (const o of f.omezeni ?? []) if (!OMEZENI[o]) p.push(`${k}: neznámé omezení „${o}"`);
    if (!f.zdroje?.length) p.push(`${k}: chybí zdroj`);
    for (const id of f.zdroje ?? []) if (!zdrojePodleId.has(id)) p.push(`${k}: neznámý zdroj „${id}"`);
    if (f.stav === 'smer' && !f.zdroje?.some((id) => zdrojePodleId.get(id)?.typ === 'kod')) p.push(`${k}: směr vývoje potřebuje důkaz v kódu (zdroj typu kod)`);
    if (!DATUM.test(f.overeno ?? '')) p.push(`${k}: overeno musí být RRRR-MM-DD`);
  }
  return p;
}

const problemy = zkontrolujRegistry();
if (problemy.length) {
  throw new Error(`[registry Twenty] src/data/twenty/*.json:\n  - ${problemy.join('\n  - ')}`);
}

export function najdiFunkci(id) {
  const f = funkcePodleId.get(id);
  if (!f) throw new Error(`funkce „${id}" není v src/data/twenty/funkce.json`);
  return f;
}

export function najdiZdroj(id) {
  const z = zdrojePodleId.get(id);
  if (!z) throw new Error(`zdroj „${id}" není v src/data/twenty/zdroje.json`);
  return z;
}

export function najdiVydani(verze) {
  return vydaniPodleVerze.get(verze);
}

/** Nejnovější zpracované vydání (proti němu je registr aktuální). */
export function posledniZpracovane() {
  return vydani.find((v) => v.zpracovano);
}

/** Změny funkce napříč vydáními, od nejnovější. */
export function historieFunkce(id) {
  const out = [];
  for (const v of vydani) {
    for (const z of v.zmeny ?? []) if ([z.funkce ?? []].flat().includes(id)) out.push({ verze: v.verze, datum: v.datum, url: v.url, co: z.co });
  }
  return out;
}

/** Funkce podle témat (OR) a/nebo seznamu id; pořadí jako v registru. */
export function vyberFunkce({ temata = [], ids = [] } = {}) {
  const t = new Set(temata);
  const vybrane = funkce.filter((f) => f.temata.some((x) => t.has(x)));
  for (const id of ids) {
    const f = najdiFunkci(id);
    if (!vybrane.includes(f)) vybrane.push(f);
  }
  return vybrane;
}

/** 2026-11-12 → „12. 11. 2026". */
export function datumCesky(iso) {
  const [r, m, d] = String(iso).slice(0, 10).split('-').map(Number);
  return `${d}. ${m}. ${r}`;
}

/** Krátké označení verze: "2.57.0" → "v2.57", "2.53.1" → "v2.53.1". */
export function verzeKratce(verze) {
  return 'v' + verze.replace(/\.0$/, '');
}

/** Text štítku stavu: „Lze nastavit · od v2.19" (v seznamech zkráceně, plné „Lze nastavit dnes" v nadpisu skupiny). */
export function textStavu(f) {
  if (f.stav === 'dnes') return STAVY.dnes + (f.od ? ` · od ${verzeKratce(f.od)}` : '');
  return STAVY[f.stav];
}

/**
 * HTML štítků funkce. Ve skupině „Připravuje se" / „Směr vývoje" je stav už v nadpisu skupiny,
 * proto se tam místo něj ukáže jen krátký důvod (ve vývoji, zkušební provoz…).
 */
export function stitkyFunkce(f, { veSkupine = false } = {}) {
  let stav;
  if (f.stav === 'pripravuje-se' && veSkupine) stav = `<span class="stav-stitek stav-stitek--pripravuje-se" title="${escapeHtml(DUVODY[f.duvod])}">${escapeHtml(DUVODY_KRATCE[f.duvod])}</span>`;
  else if (f.stav === 'smer' && veSkupine) stav = '';
  else stav = `<span class="stav-stitek stav-stitek--${f.stav}">${escapeHtml(textStavu(f))}</span>`;
  const omezeni = (f.omezeni ?? []).map((o) => `<span class="stav-stitek stav-stitek--omezeni">${escapeHtml(OMEZENI[o])}</span>`).join('');
  return stav + omezeni;
}

function polozka(f) {
  const stitky = stitkyFunkce(f, { veSkupine: true });
  return `<li><p class="stav-funkci__nazev"><strong>${escapeHtml(f.nazev)}</strong></p><p class="stav-funkci__prinos">${escapeHtml(f.prinos)}</p>${stitky ? `<p class="stav-funkci__stitky">${stitky}</p>` : ''}</li>`;
}

/**
 * Blok „Co funguje dnes a co se připravuje" — vykresluje direktiva ::stav-funkci i layout průvodce.
 * Stav se bere z registru, takže se po změně funkce aktualizuje na všech stránkách sám.
 */
export function stavFunkciBlok(vybrane, { smer = false } = {}) {
  const skupiny = [
    ['dnes', 'Lze nastavit dnes'],
    ['pripravuje-se', 'Připravuje se'],
    ...(smer ? [['smer', 'Směr vývoje']] : []),
  ];
  const sloupce = skupiny
    .map(([stav, nadpis]) => {
      const f = vybrane.filter((x) => x.stav === stav);
      if (!f.length) return '';
      return `<div class="stav-funkci__skupina stav-funkci__skupina--${stav}"><h3>${nadpis}</h3><ul>${f.map(polozka).join('')}</ul></div>`;
    })
    .join('');
  const overeno = vybrane.map((f) => f.overeno).sort().at(0);
  const posledni = posledniZpracovane();
  const vysvetlivka = `<p class="stav-funkci__pata">„Lze nastavit“ znamená, že to Twenty dnes umí. Co mají <a href="/pro-obchodni-tymy/">Twenty Sales</a> a <a href="/pro-servisni-firmy/">Twenty Servis</a> hotové hned po nasazení, popisujeme u řešení. Nastavení dalších věcí je práce navíc — drobnou úpravu zvládneme z hodiny měsíčně v paušálu, větší vám předem odhadneme (<a href="/sla-balicky/">SLA balíčky</a>).</p>`;
  const pata = `<p class="stav-funkci__pata">Stav ověřený ${datumCesky(overeno)} proti Twenty ${verzeKratce(posledni.verze)} — podle <a href="https://github.com/twentyhq/twenty/releases" rel="noopener" target="_blank">poznámek k vydáním</a> a <a href="https://docs.twenty.com/cs/user-guide/introduction" rel="noopener" target="_blank">dokumentace výrobce</a>.</p>`;
  return `<section class="stav-funkci reveal not-prose" data-pagefind-ignore><div class="stav-funkci__mrizka">${sloupce}</div>${vybrane.some((f) => f.stav === 'dnes') ? vysvetlivka : ''}${pata}</section>`;
}
