import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Ověřitelný zdroj tvrzení (pravidlo pravdivosti v CLAUDE.md). */
const zdroj = z.object({
  url: z.url(),
  nazev: z.string().optional(),
});

/** Společná metadata pro stránky i průvodce: kdy a podle čeho byla fakta ověřena. */
const overeni = {
  /** Datum posledního ověření faktů proti oficiálním zdrojům Twenty. */
  overeno: z.coerce.date().optional(),
  /** Verze Twenty, proti které se ověřovalo (např. "2.57"). */
  verzeTwenty: z.string().optional(),
  /** Zdroje: id z src/data/twenty/zdroje.json (preferované), nebo přímo { url, nazev }. */
  zdroje: z.array(z.union([z.string(), zdroj])).default([]),
  /** Funkce Twenty, o kterých text mluví — id z src/data/twenty/funkce.json; štítky stavu se berou z registru. */
  funkce: z.array(z.string()).default([]),
  /** Témata pro hlídání novinek — skript podle nich najde stránky dotčené novým releasem. */
  temata: z.array(z.string()).default([]),
};

/**
 * Marketingové stránky. Adresa = cesta k souboru:
 *   stranky/index.md                     → /   (id "index")
 *   stranky/cenik.md                     → /cenik/
 *   stranky/pro-servisni-firmy/index.md  → /pro-servisni-firmy/
 *   stranky/pro-servisni-firmy/hvac.md   → /pro-servisni-firmy/hvac/
 */
const stranky = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/stranky',
    generateId: ({ entry }) => entry.replace(/\.md$/, '').replace(/\/index$/, ''),
  }),
  schema: z.object({
    /** <title> — včetně „| TwentyCRM.cz". */
    title: z.string(),
    description: z.string().max(300),
    /** Identifikátor stránky (sticky CTA se nevykreslí na kontaktu apod.). */
    pageId: z.string().optional(),
    /** Klíč šablony e-mailu ze src/data/mailto.json. */
    mailto: z.string().default('generic'),
    noindex: z.boolean().default(false),
    /** Stav převodu ze starého webu — skript scripts/url-inventar.mjs ho čte. */
    stav: z.enum(['prevedeno', 'rozpracovano']).default('prevedeno'),
    /** Úvodní blok stránky. Bez něj začíná stránka rovnou obsahem. */
    hero: z
      .object({
        nadpis: z.string(),
        stitek: z.string().optional(),
        /** Kulaté „pilulky" pod perexem (např. „🇨🇿 Čeština", „📅 Nasazení do týdne"). */
        stitky: z.array(z.string()).default([]),
        perex: z.string().optional(),
        /** Další odstavce pod perexem (smí obsahovat Markdown a {{…}}). */
        text: z
          .union([z.string(), z.array(z.string())])
          .optional()
          .transform((v) => (v === undefined ? [] : Array.isArray(v) ? v : [v])),
        pozadi: z.enum(['tmave', 'svetle']).default('tmave'),
        /** Vyšší hero s větším odsazením (úvodní stránka). */
        velke: z.boolean().default(false),
        tlacitka: z
          .array(z.object({ text: z.string(), odkaz: z.string(), styl: z.enum(['hlavni', 'vedlejsi']).default('hlavni') }))
          .default([]),
        /** Vykreslí dvojici tlačítek telefon + e-mail (podle `mailto` stránky). */
        kontakt: z.boolean().default(false),
        /** Povinné upozornění u produktových stránek: „Twenty Sales je naše nadstavba…". */
        disclaimer: z.enum(['Twenty Sales', 'Twenty Servis']).optional(),
      })
      .optional(),
    /** Závěrečný tmavý blok s telefonem a e-mailem. */
    zaver: z
      .object({
        nadpis: z.string(),
        text: z.string().optional(),
        /** Drobný text pod tlačítky (smí obsahovat Markdown a {{…}}). */
        poznamky: z.array(z.string()).default([]),
      })
      .optional(),
    ...overeni,
  }),
});

/**
 * Znalostní část /twenty/… (průvodce). Adresa = cesta k souboru:
 *   pruvodce/index.md        → /twenty/          (id "index")
 *   pruvodce/mcp/index.md    → /twenty/mcp/      (úvod oblasti)
 *   pruvodce/mcp/claude.md   → /twenty/mcp/claude/ (článek)
 * Oblasti = složky; pořadí v navigaci řídí `poradi`. Názvy složek jsou schválené adresy
 * (docs/plan-pruvodce.md kap. 8) — po zveřejnění je neměnit.
 */
const pruvodce = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/pruvodce',
    generateId: ({ entry }) => entry.replace(/\.md$/, '').replace(/\/index$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(300),
    /** Koncept: vidět jen při vývoji, do produkčního buildu nejde. */
    draft: z.boolean().default(false),
    /** Pořadí v navigaci (oblasti i články v oblasti). */
    poradi: z.number().default(100),
    /** Kratší název do boční navigace. */
    vMenu: z.string().optional(),
    ...overeni,
  }),
});

export const collections = { stranky, pruvodce };
