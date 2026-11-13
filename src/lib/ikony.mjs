// Emoji v obsahu → ikony Lucide ve stylu Payday (tmavý podklad, bílá ikona).
// V Markdownu se dál píše emoji (čitelné pro autora). Při vykreslení se podle téhle
// tabulky nahradí ikonou. Emoji, které tu chybí, zastaví build — doplňte ho sem.
// Ikony: lucide-static (ISC, licenses/lucide-ISC.txt), názvy viz https://lucide.dev/icons
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

/** emoji (bez variačního selektoru FE0F) → název ikony Lucide, nebo { text } pro textový odznak */
export const EMOJI = {
  // stavy a značky v seznamech a tabulkách
  '⚠': 'triangle-alert',
  '❌': 'x',
  '✓': 'check',
  '✅': 'check',
  '★': 'star',
  '🟡': 'clock',
  '▶': 'play',
  '➕': 'plus',
  '♾': 'infinity',
  // peníze
  '💰': 'coins',
  '💸': 'banknote',
  '💵': 'banknote',
  '💱': 'arrow-right-left',
  '🧾': 'receipt',
  '🧮': 'calculator',
  // čas a plánování
  '📅': 'calendar',
  '🗓': 'calendar-days',
  '⏱': 'timer',
  '⏰': 'alarm-clock',
  '⏳': 'hourglass',
  '🕒': 'clock',
  '🌅': 'sunrise',
  '🌙': 'moon',
  '🍂': 'leaf',
  '☀': 'sun',
  // dokumenty a data
  '📋': 'clipboard-list',
  '📄': 'file-text',
  '📑': 'files',
  '📁': 'folder',
  '🗂': 'folders',
  '🗄': 'archive',
  '📒': 'notebook',
  '📝': 'pencil-line',
  '📊': 'chart-column',
  '📈': 'trending-up',
  '📉': 'trending-down',
  '📦': 'package',
  '🔢': 'hash',
  '📐': 'ruler',
  // komunikace
  '📞': 'phone',
  '📧': 'mail',
  '📬': 'mailbox',
  '📤': 'send',
  '📥': 'inbox',
  '💬': 'message-square',
  '🔔': 'bell',
  '🔇': 'bell-off',
  '📱': 'smartphone',
  // technika a provoz
  '🖥': 'monitor',
  '☁': 'cloud',
  '🔌': 'plug',
  '⚙': 'settings',
  '🔧': 'wrench',
  '🔨': 'hammer',
  '🛠': 'hammer',
  '🔩': 'bolt',
  '🧰': 'toolbox',
  '🔁': 'repeat',
  '🔄': 'refresh-cw',
  '⚡': 'zap',
  '🔗': 'link',
  '🌐': 'globe',
  '🌍': 'globe',
  '🧩': 'puzzle',
  '🏗': 'construction',
  '🚀': 'rocket',
  '🖨': 'printer',
  // AI
  '🤖': 'bot',
  '🧠': 'brain',
  '🤯': 'brain',
  '✨': 'sparkles',
  // bezpečnost
  '🛡': 'shield-check',
  '🔐': 'lock-keyhole',
  '🔒': 'lock',
  '🔓': 'lock-open',
  '🔑': 'key-round',
  '🚪': 'door-closed',
  '🚨': 'siren',
  '🏛': 'landmark',
  // lidé a firmy
  '👤': 'user',
  '👥': 'users',
  '👔': 'user-cog',
  '👷': 'hard-hat',
  '🤝': 'handshake',
  '💼': 'briefcase',
  '🎓': 'graduation-cap',
  '🏢': 'building-2',
  '🏭': 'factory',
  '🏬': 'store',
  '🏪': 'store',
  '🏠': 'house',
  '🧱': 'brick-wall',
  // místa, pohyb, obory
  '📍': 'map-pin',
  '🚗': 'car',
  '🧭': 'compass',
  '🔍': 'search',
  '👀': 'eye',
  '🎯': 'target',
  '🚦': 'traffic-cone',
  '🕳': 'circle-dashed',
  '🎁': 'gift',
  '❄': 'snowflake',
  '🧊': 'refrigerator',
  '🌡': 'thermometer',
  '🌬': 'wind',
  '🔥': 'flame',
  '☕': 'coffee',
  '🍽': 'utensils',
  '🛗': 'arrow-up-down',
  // vlajky nemají ikonu — textový odznak
  '🇨🇿': { text: 'CZ' },
  '🇪🇺': { text: 'EU' },
};

/** Najde emoji (včetně vlajek, ZWJ sekvencí a znaků ✓ ★ ▶). */
export const EMOJI_RE = /(?:\p{Regional_Indicator}{2}|\p{Extended_Pictographic}️?(?:‍\p{Extended_Pictographic}️?)*|[✓★▶]️?)/gu;
const klic = (emoji) => emoji.replace(/️/g, '');

const lucideDir = join(dirname(createRequire(import.meta.url).resolve('lucide-static/package.json')), 'icons');
const cache = new Map();

/** SVG ikony Lucide, o něco tenčí tah jako v Payday. */
export function svgIkony(nazev) {
  if (!cache.has(nazev)) {
    const svg = readFileSync(join(lucideDir, `${nazev}.svg`), 'utf8')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<svg[^>]*>/, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">')
      .replace(/\s*\n\s*/g, '');
    cache.set(nazev, svg);
  }
  return cache.get(nazev);
}

export function znamaEmoji(emoji) {
  return klic(emoji) in EMOJI;
}

/**
 * Odznak s ikonou. velikost: 'velka' (karta: vedle názvu, nebo místo nadpisu) · 'stredni' (v nadpisu ##) · 'mala' (v textu, seznamu, tabulce)
 * Vyhodí Error pro emoji, které není v tabulce.
 */
export function odznak(emoji, velikost = 'mala') {
  const cil = EMOJI[klic(emoji)];
  if (!cil) throw new Error(`emoji „${emoji}" (U+${[...emoji].map((c) => c.codePointAt(0).toString(16).toUpperCase()).join(' U+')}) není v tabulce src/lib/ikony.mjs — doplňte ho`);
  const tridy = `ikona ikona--${velikost}`;
  if (typeof cil === 'object') return `<span class="${tridy} ikona--text" aria-hidden="true">${cil.text}</span>`;
  return `<span class="${tridy}" aria-hidden="true">${svgIkony(cil)}</span>`;
}

/** Odznak přímo podle názvu ikony Lucide (pro ikony, které nejsou z emoji). */
export function odznakLucide(nazev, velikost = 'mala') {
  return `<span class="ikona ikona--${velikost}" aria-hidden="true">${svgIkony(nazev)}</span>`;
}

const IKONA_TONU = { info: 'info', varovani: 'triangle-alert', uspech: 'check' };

/**
 * Štítek poznámky (:::poznamka) ve stylu Payday: malá tmavá ikona + text velkými písmeny.
 * Začíná-li text emoji, ikona je z něj; jinak podle tónu (info / varovani / uspech).
 */
export function stitekPoznamky(text, ton = 'info') {
  const m = text.match(new RegExp(`^\\s*(${EMOJI_RE.source})\\s*`, 'u'));
  const ikona = m ? odznak(m[1]) : odznakLucide(IKONA_TONU[ton] ?? 'info');
  const zbytek = m ? text.slice(m[0].length) : text;
  const esc = zbytek.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<p class="poznamka__stitek">${ikona}<span>${esc}</span></p>`;
}

/** Nahradí emoji v HTML (jen v textu mezi značkami; skripty, styly a atributy nechá být). */
export function nahradEmojiVHtml(html, velikost = 'mala') {
  if (!html) return html;
  let vystup = '';
  let uvnitrSkriptu = false;
  for (const cast of html.split(/(<[^>]+>)/)) {
    if (cast.startsWith('<')) {
      if (/^<(script|style)\b/i.test(cast)) uvnitrSkriptu = true;
      else if (/^<\/(script|style)/i.test(cast)) uvnitrSkriptu = false;
      vystup += cast;
    } else {
      vystup += uvnitrSkriptu ? cast : cast.replace(EMOJI_RE, (e) => odznak(e, velikost));
    }
  }
  return vystup;
}

/** Odstraní emoji z textu (pro <title>, alt, aria-label…). */
export function bezEmoji(text) {
  return text.replace(EMOJI_RE, '').replace(/\s{2,}/g, ' ').trim();
}
