// Astro si ukládá vyrenderovaný Markdown do mezipaměti:
//   - build: node_modules/.astro/
//   - dev server: .astro/data-store.json
// Po změně pricing.json, Markdown pluginu nebo ikon by se jinak vykreslily staré hodnoty —
// proto se obojí maže před každým buildem i spuštěním dev serveru.
import { rmSync } from 'node:fs';
rmSync('node_modules/.astro', { recursive: true, force: true });
rmSync('.astro/data-store.json', { force: true });
