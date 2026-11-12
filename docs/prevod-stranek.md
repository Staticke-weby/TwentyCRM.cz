# Převod stránek ze starého webu (Latte) do Markdownu

Návod pro fázi 2. Cílem je **přenést texty 1:1** do nového webu (Astro + šablona Payday).
Neupravujeme obsah, jen formu. Co se smí a nesmí tvrdit, řeší `CLAUDE.md` a `brainstorming/zasady-webu.md`.
Při převodu se ale texty **nemění**, ani když vypadají zastarale. Podezřelá místa jen zapiš do hlášení.

## Zdroje

| Co | Kde |
|---|---|
| Seznam URL → zdrojová šablona → cílový soubor, title, description, pageId, mailto | `docs/url-inventar.json` |
| Šablony starého webu | `../TwentyCRM.cz/web/views/**/*.latte` |
| Vyrenderované HTML starého webu (pro kontrolu textu) | `../TwentyCRM.cz/html/<url>/index.html` |
| Hrubý Markdown export starého webu (dobrý start, ale bez bloků) | `../TwentyCRM.cz/html/<url>.md` |
| Ukázka hotového převodu | `src/content/stranky/cenik.md` |
| Přehled direktiv (bloků) | hlavička `src/lib/markdown/remark-twentycrm.mjs` |

## Cílový soubor

`src/content/stranky/<cesta>.md`, kde cesta = URL bez lomítek (`/pro-servisni-firmy/hvac/` → `pro-servisni-firmy/hvac.md`;
`/obory/` → `obory/index.md`; `/` → `index.md`). Přesně podle sloupce `md` v inventáři.

## Frontmatter

```yaml
---
title: …            # přesně z inventáře
description: …      # přesně z inventáře (max 200 znaků)
pageId: …           # z inventáře
mailto: …           # z inventáře (vynech, pokud je prázdné)
hero:               # první tmavý blok stránky (section-emphasis nahoře)
  stitek: …         # malý text nad nadpisem, pokud je
  nadpis: …         # H1; zvýrazněná část (span text-accent) → *kurzíva*
  perex: …          # první odstavec pod H1 (smí **tučně** a [odkazy](/x/))
  text:             # další odstavce v hero, každý jako položka
    - …
  tlacitka:         # odkazová tlačítka v hero
    - { text: Co Twenty umí →, odkaz: /co-umi/, styl: vedlejsi }
  kontakt: true     # když je v hero include cta-buttons (telefon + e-mail)
  stitky:           # kulaté pilulky pod perexem (např. „🇨🇿 Čeština")
    - …
  disclaimer: Twenty Sales   # když je v hero reseni-disclaimer
zaver:              # poslední tmavý blok s telefonem a e-mailem (section-emphasis na konci)
  nadpis: …
  text: …
  poznamky:         # drobné texty pod tlačítky
    - …
---
```

Hero bez tmavého pozadí → `pozadi: svetle`. Stránka bez hero → vynech `hero`.

## Převodní tabulka

| Ve staré šabloně | V Markdownu |
|---|---|
| `<h2>`, `<h3>`, `<p>`, `<ul>`, `<strong>`, `<a href>` | `##`, `###`, odstavec, `-`, `**…**`, `[text](/url/)` |
| `<section class="section section-soft">` | `::::sekce{pozadi="svetle"}` … `::::` (vnější blok o dvojtečku delší než vnořené) |
| `<section class="section">` (bílé) | nic, jen obsah |
| uprostřed stránky tmavá sekce `section-emphasis` | `::::sekce{pozadi="tmave"}` |
| mřížka karet (`grid … card`) | `:::karty{sloupce="2|3|4"}` a každá karta začíná `### Nadpis` |
| sloupce textu bez rámečku | `:::sloupce{sloupce="2|3"}` + `###` |
| karta s barevnou linkou vlevo (`border-l-4 border-warning / success / info`) | `:::poznamka[Nadpis karty]{ton="varovani|uspech|info"}` |
| zvýrazněný blok (`border-2 border-accent`, `bg-bg-soft p-6`) | `:::zvyrazneni` |
| malý modrý nadpisek nad sekcí (`uppercase tracking-wider text-accent`) | `::stitek[Text]` |
| `text-lead text-muted` odstavec pod H2 | normální odstavec |
| tabulka | Markdown tabulka (GFM) |
| ASCII / Mermaid diagram | blok kódu ``` |
| emoji v nadpisech a kartách | ponechat |
| `✓` / `→` / `—` jako odrážky seznamu | normální seznam `-`, značku z textu vynech |
| Alpine.js (`x-data`, záložky, rozbalování) | statický obsah: záložky za sebou jako `###` sekce |
| částky z `pricing.json` | `{{cena.klic}}`, `{{cena.klic|mesicne}}`, `{{data.cesta}}` (viz cenik.md) |
| telefon / e-mail v textu | `{{kontakt.telefon}}`, `{{kontakt.email}}` |

### Komponenty → direktivy

| `{include 'components/…'}` | Direktiva |
|---|---|
| `demo-cta.latte, produkt => 'sales'` | `::demo-cta{produkt="sales"}` (bez parametru: `::demo-cta`) |
| `cta-buttons.latte, mailtoTemplate => 'hvac'` (mimo hero/závěr) | `::cta{mailto="hvac"}` |
| `reseni-disclaimer.latte` v hero | `hero.disclaimer: Twenty Sales` |
| `reseni-volba.latte, primary => 'servis', primaryText => '…', alternativaText => '…'` | `::reseni-volba{doporuceno="servis" proc="…" alternativa="…"}`. HTML v textu převeď na Markdown (`<strong>` → `**`, `<a>` → `[]()`). Uvnitř atributu nepoužívej rovné uvozovky `"`, jen české „…". |
| `reseni-karty.latte, heading => …, intro => …` | `## heading` + odstavec intro + `::reseni-karty` |
| `rozsireni.latte, kontext => 'servis'` | `::rozsireni{kontext="servis"}` |
| `platforma-vs-custom.latte` | `::platforma-vs-custom` |
| `pripadova-studie.latte` | `:::pripadova-studie{ikona="🏢" nazev="…" podtitul="…"}` se třemi částmi `#### Před`, `#### Co jsme v Twenty nastavili` (seznam kroků), `#### Po`, citát jako `> „…"` |
| `faq-accordion.latte` s položkami z faq.json | `::faq{id="id1,id2"}` nebo `::faq{kategorie="cena"}` |
| `sticky-cta.latte` | vynech (dělá layout) |

`tone` u komponent ignoruj. Když byla komponenta v šedé sekci, obal ji `::::sekce{pozadi="svetle"}`.

### Smyčky nad daty → direktivy

| Stránka / smyčka | Direktiva |
|---|---|
| `$faq` na /otazky/ | `::faq-vse` |
| `$team['members']` | `::tym` |
| `$reseni['srovnani']` tabulka | `::srovnani-reseni` |
| `$reseni['produkty'] … $p['entity']` (servis) | `::entity{produkt="servis"}` |
| `$obory['items']` filtr `servis` / `sales` | `::obory{reseni="servis"}` (s „Co se v CRM eviduje" → přidej `objekty`; text odkazu → `odkaz="Detail →"`) |
| `$pricing[…]['includes']` seznam | `::seznam{data="retainer_selfhost.includes"}` |

## Pravidla

1. **Všechen viditelný text zůstává**, včetně nadpisů, drobných poznámek a textů tlačítek. Nic nepřepisuj, nezkracuj, nepřidávej.
2. Odkazy vždy s lomítkem na konci (`/cenik/`), nikdy `.md`. Externí odkazy ponech.
3. Žádné HTML v Markdownu. Když něco nejde zapsat direktivou, použij nejbližší blok a **zapiš to do hlášení**. Sdílené soubory (`src/lib/**`, `src/styles/**`, `astro.config.mjs`, layouty) **neupravuj**.
4. `demo-cta` jen jednou na stránku (tak jako na starém webu).
5. Neměň jiné soubory než ty, které převádíš.

## Kontrola (povinná, pro každý soubor)

```bash
node scripts/zkontroluj-md.mjs src/content/stranky/<soubor>.md
node scripts/parita.mjs <url-bez-lomitek>        # např. pro-servisni-firmy/hvac
```

`parita.mjs` vypíše věty ze starého webu, které v novém chybí. Cíl je **0 chybějících vět**.
Výjimky (např. text, který na starém webu generovala komponenta jinak) uveď v hlášení i s důvodem.
`npm run build` **nespouštěj**, ostatní převodníky pracují souběžně ve stejné složce a celý build dělá koordinátor.
