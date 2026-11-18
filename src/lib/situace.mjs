// Situace z praxe (src/data/situace.json) — krátké karty „co se stane → jak to řešit v Twenty“.
// Vykresluje je Markdown plugin: ::situace{…} na libovolné stránce, ::situace-vse na /twenty/situace/.
// Stav se bere z registru funkcí (src/lib/twenty.mjs), takže se po změně funkce aktualizuje sám.
// Při načtení se data zkontrolují — neznámá funkce, oblast nebo článek shodí build.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { marked } from 'marked';
import situaceData from '../data/situace.json' with { type: 'json' };
import { najdiFunkci, stitkyFunkce, OMEZENI } from './twenty.mjs';
import { escapeHtml as e } from './site.mjs';

export const ROLE = {
  obchodnik: 'Obchodník',
  vedouci: 'Vedoucí obchodu',
  dispecer: 'Dispečer',
  technik: 'Technik',
  jednatel: 'Jednatel',
  spravce: 'Správce systému',
};

const PRODUKTY = { sales: 'Twenty Sales', servis: 'Twenty Servis' };
const PRUVODCE = join(process.cwd(), 'src/content/pruvodce');
const DATUM = /^\d{4}-\d{2}-\d{2}$/;

export const situace = situaceData.situace;

/** Úvod oblasti průvodce: název do nadpisu skupiny a pořadí podle navigace. */
function oblastPruvodce(id) {
  const soubor = join(PRUVODCE, id, 'index.md');
  if (!existsSync(soubor)) return null;
  const fm = readFileSync(soubor, 'utf8').split(/^---\s*$/m)[1] ?? '';
  const pole = (k) => fm.match(new RegExp(`^${k}:\\s*["']?(.+?)["']?\\s*$`, 'm'))?.[1];
  return { id, nazev: pole('vMenu') ?? pole('title') ?? id, poradi: Number(pole('poradi') ?? 100) };
}

function clanekExistuje(url) {
  const m = url.match(/^\/twenty\/(.+?)\/?$/);
  if (!m) return false;
  return existsSync(join(PRUVODCE, `${m[1]}.md`)) || existsSync(join(PRUVODCE, m[1], 'index.md'));
}

export function zkontrolujSituace() {
  const p = [];
  const videno = new Set();
  for (const s of situace) {
    const k = `situace ${s.id}`;
    if (!/^[a-z0-9-]+$/.test(s.id ?? '')) p.push(`${k}: id smí mít jen malá písmena, číslice a pomlčky`);
    if (videno.has(s.id)) p.push(`${k}: id je v souboru dvakrát`);
    videno.add(s.id);
    if (!s.situace || !s.reseni || !s.potreba) p.push(`${k}: chybí situace, reseni nebo potreba`);
    if (!s.role?.length) p.push(`${k}: chybí role`);
    for (const r of s.role ?? []) if (!ROLE[r]) p.push(`${k}: neznámá role „${r}“ (${Object.keys(ROLE).join(' | ')})`);
    if (!s.produkt?.length) p.push(`${k}: chybí produkt`);
    for (const x of s.produkt ?? []) if (!PRODUKTY[x]) p.push(`${k}: neznámý produkt „${x}“ (sales | servis)`);
    if (s.hotove && !s.produkt?.includes(s.hotove)) p.push(`${k}: hotove="${s.hotove}" musí být i v produkt`);
    if (!oblastPruvodce(s.oblast ?? '')) p.push(`${k}: oblast „${s.oblast}“ není složka průvodce`);
    if (s.clanek && !clanekExistuje(s.clanek)) p.push(`${k}: článek ${s.clanek} v průvodci neexistuje`);
    if (!s.funkce?.length) p.push(`${k}: chybí funkce`);
    for (const id of s.funkce ?? []) {
      try {
        najdiFunkci(id);
      } catch (err) {
        p.push(`${k}: ${err.message}`);
      }
    }
    if (!DATUM.test(s.overeno ?? '')) p.push(`${k}: overeno musí být RRRR-MM-DD`);
  }
  return p;
}

const problemy = zkontrolujSituace();
if (problemy.length) throw new Error(`[situace] src/data/situace.json:\n  - ${problemy.join('\n  - ')}`);

/** Výběr podle oblasti / role / produktu (všechny zadané musí platit) a/nebo podle id. */
export function vyberSituace({ oblast, role, produkt, ids = [] } = {}) {
  if (ids.length) {
    return ids.map((id) => {
      const s = situace.find((x) => x.id === id);
      if (!s) throw new Error(`situace „${id}“ není v src/data/situace.json`);
      return s;
    });
  }
  return situace.filter(
    (s) => (!oblast || s.oblast === oblast) && (!role || s.role.includes(role)) && (!produkt || s.produkt.includes(produkt)),
  );
}

function produktText(s) {
  if (s.produkt.length === 2) return 'Twenty Sales i Servis';
  return PRODUKTY[s.produkt[0]];
}

function stitky(s) {
  const funkce = s.funkce.map(najdiFunkci);
  const hlavni = funkce[0];
  // Hotové v řešení → štítek řešení; jinak stav první funkce. Kdyby se kterákoli funkce vrátila
  // do „připravuje se“, ukáže se ten stav, ne „Lze nastavit“.
  const nehotova = funkce.find((f) => f.stav !== 'dnes');
  let stav;
  if (nehotova) stav = stitkyFunkce({ ...nehotova, omezeni: [] });
  else if (s.hotove) stav = `<span class="stav-stitek stav-stitek--dnes">Hotové v ${e(PRODUKTY[s.hotove])}</span>`;
  else stav = stitkyFunkce({ ...hlavni, omezeni: [] });
  const omezeni = [...new Set(funkce.flatMap((f) => f.omezeni ?? []))]
    .map((o) => `<span class="stav-stitek stav-stitek--omezeni">${e(OMEZENI[o])}</span>`)
    .join('');
  return stav + omezeni;
}

/** Jedna karta. Kotva #situace-<id> — odkazují na ni Novinky a další stránky. */
export function kartaSituace(s) {
  const kdo = `${s.role.map((r) => ROLE[r]).join(' · ')} — ${produktText(s)}`;
  const odkaz = s.clanek ? `<p class="situace__odkaz"><a href="${e(s.clanek)}">Víc v článku →</a></p>` : '';
  return (
    `<div class="karta situace" id="situace-${e(s.id)}">` +
    `<p class="situace__kdo">${e(kdo)}</p>` +
    `<h3>${e(s.situace)}</h3>` +
    `<p>${marked.parseInline(s.reseni)}</p>` +
    `<p class="situace__potreba"><strong>Co je potřeba:</strong> ${marked.parseInline(s.potreba)}</p>` +
    `<p class="situace__stitky">${stitky(s)}</p>` +
    odkaz +
    `</div>`
  );
}

/** Mřížka karet — stejný vzhled jako :::karty. */
export function situaceBlok(vybrane, { sloupce = 2 } = {}) {
  // jedna karta přes celou šíři — prázdná buňka vedle ní by v mřížce s linkami vypadala jako chyba
  sloupce = Math.min(sloupce, vybrane.length);
  return `<div class="karty-blok situace-blok"><div class="mrizka mrizka--${sloupce} reveal">${vybrane.map(kartaSituace).join('')}</div></div>`;
}

/** Skupiny pro /twenty/situace/: oblasti v pořadí navigace průvodce. */
export function skupinySituaci() {
  const oblasti = [...new Set(situace.map((s) => s.oblast))].map(oblastPruvodce).sort((a, b) => a.poradi - b.poradi);
  return oblasti.map((o) => ({ ...o, situace: situace.filter((s) => s.oblast === o.id) }));
}
