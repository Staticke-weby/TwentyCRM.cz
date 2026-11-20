// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkDirective from 'remark-directive';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import remarkTwentycrm from './src/lib/markdown/remark-twentycrm.mjs';

// Staging build: NOINDEX=1 npm run build → noindex na všech stránkách, robots Disallow, bez Umami.
const SITE = process.env.SITE_URL ?? 'https://www.twentycrm.cz';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // URL ze starého webu zůstávají 1:1 — všechny s lomítkem na konci.
  trailingSlash: 'always',
  build: { format: 'directory' },

  // Zrušené adresy → nové (GitHub Pages neumí přesměrování na serveru, Astro vytvoří stránku s meta refresh).
  redirects: {
    // Půlroční souhrn Novinek rozdělený 2026-11-20 na měsíční přehledy.
    '/twenty/novinky/2026-04-az-09/': '/twenty/novinky/2026-04/',
  },

  markdown: {
    // Bloky ``` jsou na webu ASCII diagramy, ne kód — bez zvýrazňování (to jim dávalo tmavé pozadí).
    syntaxHighlight: false,
    // Klasický remark/rehype engine (ne výchozí satteri) — kvůli vlastním direktivám.
    processor: unified({
      remarkPlugins: [remarkDirective, remarkTwentycrm],
      smartypants: false,
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => !/\/(prezentace-hvac|letak-hvac)\/$/.test(page),
    }),
  ],
});
