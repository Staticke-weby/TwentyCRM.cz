# Design principy webu twentycrm.cz

> **Účel:** Vizuální a strukturální pravidla pro nový web. Cíl je **prodejní web s minimální údržbou** — žádné rastry produktu, žádné týmové fotky v MVP, vše typografií + barvami + ikony + diagramy které lze rychle přepsat.

---

## 0. Logo (✅ dodáno 2026-05, SVG + PNG)

**Assety (oba dodány):**
- `brainstorming/TwentyCRM.cz logo.svg` — **primární zdroj** pro web (vektor, ostrá v každém rozlišení, malá velikost)
- `brainstorming/TwentyCRM.cz logo.png` — fallback / OG card / e-mail signature

> **Po stack volbě** přesunout do `public/brand/` (Astro) nebo ekvivalentního adresáře, inline SVG do header komponenty pro nejlepší performance (žádný extra request).

**Charakteristika loga:**
- **Pure black on white** — žádné gradienty, žádné barvy
- **Wordmark:** „TWENTY CRM" v bold sans-serif (heavyweight grotesque, vizuálně blízké Inter Black / Manrope ExtraBold)
- **Mark:** dynamický geometrický motiv (dvě šikmé čáry) symbolizující pohyb / vpřed / dvě entity
- **Layout:** horizontální (mark | separator | wordmark)

**Důsledky pro design celého webu:**
- **Monochrome-first** — výchozí palette je černá + bílá + odstíny šedé. Barvy přicházejí jen jako akcent (CTA, success metriky, varování).
- **Bold sans-serif** napříč nadpisy, jinak lehčí váha pro body — soulad s wordmarkem
- **Žádné pastelové barvy** — logo je ostré, kontrastní; web musí být stejně.

**Pravidla pro práci s logem:**

| Kontext | Verze loga | Velikost (přibližně) |
|---|---|---|
| Header desktop | plná | výška ~36px |
| Header mobile | plná (responsive scale) | výška ~28px |
| Footer | plná | výška ~28px |
| Favicon / OG | jen mark (bez wordmarku) | 32×32, 192×192, 512×512 |
| Touch icon (PWA / homescreen) | jen mark | 180×180, 512×512 |

**Co s logem NEdělat:**
- ❌ Měnit barvy (žádný „bílý logo na tmavém pozadí" — udělat samostatnou inverzní variantu pokud je potřeba)
- ❌ Přidávat efekty (stín, glow, gradient)
- ❌ Rozdělovat mark a wordmark (vždy jako celek, kromě favicon)
- ❌ Měnit poměry / proporcionalitu

**Logo a disclaimer (důležité):**
Logo prominentně používá wordmark „TWENTY CRM", což je silná vizuální asociace s produktem Twenty Inc. **Footer disclaimer** („nejsme oficiální zastoupení Twenty.com") proto musí být **vždy viditelný na každé stránce, nesmí být skryt do hluboké patičky bez kontrastu**. Detail viz `pravni-texty.md` a tato sekce 11 níže.
>
> **Kontext rozhodnutí:**
> - Twenty UI se mění s každým release — screenshot zastará za týdny
> - Demo děláme online na schůzce, ne přes screenshoty na webu
> - Tým má jiné priority než pravidelně foto sessions
> - Logo dodáme zvenčí, brand identity je in-house
>
> **Důsledek:** sázíme na **typo-led design** se silnými barevnými bloky, jasnou hierarchií a jednoduchou ikonografií.

---

## 1. Vizuální hierarchie (místo screenshotů)

### Hero / hlavní hlavička
- **Velký H1** (50–70 px na desktop, 32–40 px na mobile)
- **Podtitul** výrazně menší (~24 px), ale stále silný
- Žádný hero obrázek / screenshot. **Místo toho:** velký barevný blok / gradient / abstraktní tvar (CSS) + dvojice CTA tlačítek
- Volitelně: **animovaný text** (typewriter effect) na jednom slově v H1 pro vizuální zájem

### Sekce v body
- Každá sekce má **vlastní pozadí** (alternující bílá / lehce barevná / dark accent block)
- **H2 nadpis** sekce ~40 px, výrazný
- **3-4 sloupce karet** nebo tabulka — vizuální struktura sama o sobě
- Místo screenshotu: **velká ikona** (SVG, lightweight)

### Karty (3-4 v řadě)
- Bílé pozadí, jemný stín nebo border
- **Velká ikona nahoru** (40–60 px)
- **H3** + **odstavec textu** (3-5 řádků max)
- Hover state: jemný lift / barevná změna borderu

---

## 2. Barvy (✅ locknuto podle dodaného loga)

Logo je **pure black on white**. Z toho vychází **monochrome-first** systém — barvy se používají úsporně, jen jako funkční signal (CTA, success, warning), ne jako dekorace.

### Locked palette

#### Černá / bílá / šedá (kostra)
| Token | Hex | Použití |
|---|---|---|
| `--black` | `#000000` | Logo, primární text na světlém pozadí, výrazné nadpisy |
| `--ink` | `#0F172A` | Body text (jemnější než pure black, lepší pro delší čtení) |
| `--white` | `#FFFFFF` | Hlavní pozadí |
| `--bg-soft` | `#F8FAFC` | Alternující pozadí sekcí (lehký kontrast) |
| `--bg-emphasis` | `#0F172A` | Tmavá sekce (hero, final CTA) — text bílý |
| `--border` | `#E2E8F0` | Borders, dividers |
| `--muted` | `#64748B` | Sekundární text, captions, footer text |

#### Akcent — funkční barvy (úsporně)
| Token | Hex | Použití |
|---|---|---|
| `--accent` | `#0066FF` | **Primární CTA tlačítka, odkazy, focus states** — elektrická modrá ladí s monochrome (technický, moderní, ne korporátní) |
| `--success` | `#16A34A` | Tabulky úspor („−131 760 Kč/rok"), GA features, ✅ checkmarky |
| `--warning` | `#EA580C` | „Pozor — Cloud má 2 faktury", upozornění na coming-soon |
| `--info` | `#0891B2` | Info bloky, secondary highlight |

#### Persony — volitelné akcenty na rolových kartách
> Pravidlo: jen jako tenký horní border 4px, ne plné pozadí. Karty zůstávají monochrome.

| Persona | Border accent |
|---|---|
| 👔 Majitel | `--ink` (tmavá kostra) |
| 📋 Dispečer | `--info` (tyrkysová) |
| 🔧 Technik | `--warning` (oranžová) |
| 💼 Účetní | `--success` (zelená) |

#### Pravidla použití barev

- ✅ **Hero**: tmavé pozadí (`--bg-emphasis` nebo pure black) + bílý text + výrazný `--accent` CTA
- ✅ **Sekce body**: bílá pozadí, alternuje s `--bg-soft`
- ✅ **Tabulky srovnání** (Twenty vs Raynet): naše sloupec se subtilně zvýrazní (světle modrý border-left + nepatrně barevné pozadí)
- ✅ **Citace / pull quotes**: levý border 4px v `--accent`, kurziva
- ❌ Nepoužívat víc než 1 akcent na stránce (pokud nejde o explicitně srovnávací obsah jako úspora vs varování)
- ❌ Žádné gradient backgrounds, kromě možného hero (jemný vertical gradient `--bg-emphasis` → black)
- ❌ Žádné decorative color blocks bez funkce

---

## 3. Typografie (✅ locknuto)

### Font: **Inter** (open-source, Google Fonts / self-host)

Inter Black (váha 900) vizuálně velmi blízký wordmarku v dodaném logu. Inter zároveň pokrývá body text (400/500), kapitálky, čísla, je optimalizovaný pro screen reading. Open-source, bez licenčních komplikací, self-hostable (lepší pro performance + GDPR — bez Google Fonts CDN).

```
Heading family: 'Inter', system-ui, -apple-system, sans-serif (váhy 700, 800, 900)
Body family:    'Inter', system-ui, -apple-system, sans-serif (váhy 400, 500)
Mono family:    ui-monospace, 'SF Mono', Menlo, Consolas, monospace (Lucide, JetBrains Mono volitelně pro code blocks)
```

### Self-host vs CDN

**Doporučení: self-host.**
- ✅ Žádný request na třetí stranu (Google Fonts) → lepší privacy + GDPR
- ✅ Stabilnější load (žádný third-party DNS hop)
- ✅ Konzistentní s naším pozicováním „vlastnictví dat / minimalizace third party"
- Soubor `Inter.woff2` se subset cs/sk znaků = ~30 KB — minimální dopad na payload

### Hierarchie velikostí (desktop, locknuto)

| Úroveň | Velikost | Váha | Použití |
|---|---|---|---|
| H1 hero | 64px | **900 (Black)** | Hero — soulad s wordmarkem |
| H1 page | 48px | 800 | Top stránek |
| H2 | 36px | 700 | Sekce |
| H3 | 24px | 600 | Pod-sekce, karty |
| H4 | 20px | 600 | Odstavce |
| Lead | 20px | 400 | Hero podtitul, intro odstavce |
| Body | 17px | 400 | Hlavní text |
| Small | 14px | 400 | Footer, popisky, captions |
| Tiny | 12px | 500 | Microcopy, badges, error labels |

**Letter-spacing:**
- H1 hero: `-0.02em` (těsnější, soulad s wordmarkem)
- H2/H3: `-0.01em`
- Body: `0` (default)
- Caps / labels: `+0.05em` (rozšířenější, lepší čitelnost CAPS)

**Line-height:**
- Headings: 1.1 — 1.2 (těsnější, výrazné)
- Body: 1.6 (vzdušné, čitelné)
- Lead/intro: 1.5

### Hierarchie na mobile
Škálovat ~0.7× s minimem 16px pro body (čitelnost). H1 hero na mobile = ~40px (velký, ale zvládnutelný).

### Numerické formátování

Inter má vestavěný `tnum` (tabular numerals) — **používat v cenových tabulkách a srovnáních**, čísla budou zarovnaná pod sebou:

```css
.price-table { font-variant-numeric: tabular-nums; }
```

---

## 4. Ikony

### Pravidlo: SVG, ne raster

- **Lucide Icons** (lucide.dev) — open-source, lightweight, konzistentní
- Alternativa: **Tabler Icons** (tabler.io/icons) — větší knihovna
- Velikost ikon: 24px (inline), 40-60px (karty), 80-120px (sekce hero)
- Stroke width: 2px (default) nebo 1.5 (subtilnější)

### Konkrétní ikony pro klíčové koncepty

| Koncept | Lucide ikona |
|---|---|
| Klient / Companies | `building-2` |
| Kontaktní osoba | `user-round` |
| Obchodní případ | `briefcase-business` |
| Zařízení (FS) | `cog` nebo `wrench` |
| Místo / lokace | `map-pin` |
| Zakázka / výjezd | `truck` nebo `clipboard-list` |
| Workflow / automatizace | `workflow` nebo `zap` |
| AI / MCP | `sparkles` nebo `brain-circuit` |
| Cloud | `cloud` |
| Selfhost / server | `server` |
| Vlastnictví dat | `lock` nebo `shield-check` |
| Open-source | `git-branch` nebo `code` |
| Mobilní (PWA) | `smartphone` |
| Cena / úspora | `coins` nebo `wallet` |
| Otázky (FAQ) | `circle-help` |

---

## 5. Diagramy (místo obrázků)

### Pravidlo: vše v kódu, žádné PNG/JPG

**Datový model FS** (Klient → Místo → Zařízení → Zakázka):
- **Mermaid diagram** v MDX (pokud stack podporuje) — automaticky se renderuje
- Alternativa: čistě **HTML/CSS box layout** s šipkami v SVG
- Alternativa: **excalidraw** export do SVG (handdrawn feel, nezastará)

**Phase timeline** (Phase 1 → 4):
- **Horizontální timeline** v CSS — bloky s ikonami a textem, bez obrázků
- Šipky mezi fázemi v inline SVG

**Cenová tabulka srovnání** (Twenty vs. Raynet):
- **Klasická HTML tabulka** — žádný image-based comparison
- Zvýraznit „naše pole" barvou pozadí

**Cloud vs Selfhost rozhodovací strom:**
- **Bullet list s ikonami** v dvou sloupcích (👈 Cloud / Selfhost 👉)
- Nebo flowchart v Mermaid

---

## 6. Co a kde MÁ obrázek

### Povolené raster obrázky (a kdy)

1. **Logo twentycrm.cz** — primárně **SVG** (`TwentyCRM.cz logo.svg`) inline v header / footer. PNG jako fallback pro e-mail signatury, OG cards a kontexty kde SVG nejde.
2. **Open Graph / Twitter card** — preview obrázek pro sdílení (1 PNG, generujeme jednou — typicky logo + tagline na barevném pozadí, 1200×630)
3. **Favicon + PWA touch icons** — z mark-části loga (SVG zdroj → PNG exporty 32, 192, 512, 180)
4. **Logo bohemiacrm.cz** v `/o-nas/` sekci „sesterský brand" — 1 obrázek, statický

**Celkem ~3-4 raster obrázky na celém webu.**

### Co NE (zakázáno)

- ❌ Screenshoty Twenty UI
- ❌ Screenshoty našich implementací (i kdyby anonymizované — stárnou)
- ❌ Stock fotografie kanceláří / lidí u počítačů
- ❌ Týmové fotky (zatím — můžou přijít po launchi pokud bude čas)
- ❌ Obrázky-jako-výplň-prázdného-místa (pokud sekce vypadá prázdně, máme málo obsahu, ne málo grafiky)
- ❌ Animované GIFy

---

## 7. Mikro-interakce a animace

### Doporučené (lightweight, CSS-only)

- **Hover** na CTA tlačítkách: lift 2px + barevná změna
- **Smooth scroll** k anchor odkazům
- **Fade-in** sekcí při scrollu (intersection observer)
- **Sticky** navigace nahoru po scrollu
- **Animovaný typewriter** v hero (jeden klíčové slovo se mění: „… pro **HVAC** firmy" → „… pro **revizní** firmy" → „… pro **servisní strojírenské** firmy")

### Nedoporučené

- ❌ Parallax scrolling (těžké na mobile, distraktor)
- ❌ Auto-playing carouselly (anti-pattern)
- ❌ Heavy JavaScript animace (CPU-heavy)

---

## 8. Layout & rozvržení

### Container

- **Max-width:** 1280px (s bočními paddingy)
- **Padding:** 24px na desktop, 16px na mobile
- **Vertikální rytmus:** sekce ~80–120 px vertical padding (vzdušnost)

### Mřížka

- **12-column grid** standard, většina layoutů ale vystačí s flexbox
- **Karta-row:** typicky 3 sloupce na desktop, 1 na mobile (responsive collapse)
- **Cena-srovnání:** 2 sloupce side-by-side (Cloud / Selfhost) na desktop, stack na mobile

### Sekce homepage (vertikální flow)

```
[Hero, full-width, dark/gradient bg]
─────
[3 bolesti, 3-column cards, white bg]
─────
[Platforma timeline, full-width, light accent bg]
─────
[Pro koho persony, 4-column cards, white bg]
─────
[Co dostanete od nás, 3-column, accent bg]
─────
[Twenty vs Raynet mini-table, 2-column, white bg]
─────
[Cloud vs Selfhost teaser, 2-column, dark bg]
─────
[Cenový bod zlomu, single CTA, accent bg]
─────
[FAQ teaser, 4 questions accordion, white bg]
─────
[Final CTA, full-width, dark/gradient bg]
─────
[Footer]
```

---

## 9. CTA strategie

### Pravidla

- **Každá sekce má jedno CTA** (ne víc, ne míň — paralýza výběru)
- **Hlavní akce** = primární barva, výrazně odlišená
- **Sekundární akce** = outline button, méně dominantní
- **Závazek transparentně** v textu CTA: „Konzultace zdarma — 30 minut, žádný závazek"
- **Reciprocita:** zmíníme co dostane („krátké hodnocení vašich procesů a doporučení")

### Konkrétní CTA tlačítka (kandidáti)

| Pozice | Primární CTA | Sekundární |
|---|---|---|
| Hero | „🔵 Konzultace zdarma" | „Co Twenty umí →" |
| Po platforma sekci | „🔵 Pojďme to probrat" | „Otázky? →" |
| Po pricing teaser | „🔵 Spočítáme vám úsporu" | „Cenová tabulka →" |
| Po Cloud/Selfhost | „🔵 Doporučíme vám lepší" | (jen primární) |
| Final | „🔵 Naplánujte si konzultaci" | (jen primární) |

---

## 10. Mobile-first checklist

- ✅ Klikatelná tlačítka min 44px výška (Apple HIG)
- ✅ Body text min 16px (čitelnost)
- ✅ Sticky bottom CTA na mobile (volitelné — „Konzultace zdarma" stálé)
- ✅ Hamburger menu, ne přeplněný nav
- ✅ Tabulky scroll-x na úzkých displejích, nebo stack-collapse
- ✅ Obrázky / SVG s `loading="lazy"` (i když máme málo)
- ✅ Žádné horizontální scrollování (kromě označených tabulek)

---

## 11. SEO + Performance

### Pro SEO (low-hanging fruit)
- Sémantické HTML5 (`<header>`, `<main>`, `<article>`, `<aside>`, `<footer>`)
- `<title>` per stránka, `<meta description>` per stránka
- Open Graph tags
- Schema.org structured data: `LocalBusiness`, `FAQPage`, `Service`
- Sitemap.xml, robots.txt
- Hreflang `cs` (jediný jazyk MVP)

### Performance cíle
- **Lighthouse Performance:** > 95
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Bez JS frameworků pokud nejsou nutné** — preferujeme statický HTML/CSS s minimálním JS pro UX vylepšení

### Důsledek pro stack
Tento principiální dokument **upřednostňuje statické generátory** (Astro, Hugo, 11ty) před heavy SPA frameworky (Next.js, Nuxt). Stack rozhodne se zvenčí, ale doporučení vyplývající z designu = **statický generator s MDX podporou pro Mermaid + ikony**.

---

## 12. Maintenance pravidla

### Co se nemění (publikováno = stabilní)

- Pricing tier (Cloud Pro $9, Selfhost 5 000 Kč…) — měníme jen pokud Twenty změní svůj
- Pozicování / hero / 5 pilířů — stabilní strategie
- Mascot / brand identity — dáno logo dodávkou

### Co se aktualizuje pravidelně

- **Každé 3 měsíce:** ověřit Twenty fakta na webu (release notes), aktualizovat data ve „verifikováno YYYY-MM" footnotech
- **Po každém klientovi:** zvážit přidání anonymizované reference do `/o-nas/`
- **Po každé fázi rozšíření** (Phase 2 atd.): rozšířit obsah na `/co-umi/` o novou agendu

### Šablony obsahu pro auto-update

- Cena tabulky → centralizovaná data (JSON / TOML), web ji renderuje — nemusíme přepisovat vícero stránek
- FAQ → markdown soubor per otázka, web je sloučí — snadno přidávat
- Reference → markdown soubor per case, web seznam vyrenderuje

---

## 13. Stack — dvě varianty (k volbě)

> **Stav:** rozhodnutí o formuláři (žádný — viz `kontakt.md`) výrazně **zjednodušilo obě varianty**. Bez form handler endpointu je marketing web prakticky čistá statika + pár tel/mailto linků + cookie banner.
>
> **Dvě reálné cesty:**
> - **A) Astro 4 + Cloudflare Pages** — modern static-first, zero ops
> - **B) Vanilla PHP 8.3 + Latte + SQLite na existujícím VPS** — leverages existing infra
>
> Obě fungují stejně dobře pro tento web. Volba je o **operačním modelu a kontextu týmu**, ne o uživatelské zkušenosti návštěvníka.

### Kdy zvolit kterou variantu

| Kontext | Volba |
|---|---|
| Máte zaběhnutý VPS s PHP a chcete leverage existing infra | **B (PHP)** |
| Tým je v PHP zběhlejší / chce debug v existujícím prostředí | **B (PHP)** |
| SQLite použijete i pro další věci (consent log, lead queue, …) | **B (PHP)** |
| Bez VPS, chcete zero-ops a free hosting | **A (Astro)** |
| Tým preferuje TypeScript / moderní JS ekosystém | **A (Astro)** |
| Chcete out-of-the-box CDN, DDoS, SSL bez setup | **A (Astro)** |

> **Doporučení v kontextu tohoto projektu (uživatel má VPS s PHP 8.3 + SQLite):** **Varianta B (PHP)**. Marginální rozdíl ve výsledné UX, výrazná úspora setup času, jeden méně systém k naučení / udržování.

---

## 13.A — Varianta Astro

### Proč Astro (a ne Next / Hugo / 11ty)

| Kritérium | Náš požadavek | Astro | Hugo | 11ty | Next.js |
|---|---|---|---|---|---|
| Static-first, žádný runtime serverový JS | ano | ✅ default | ✅ | ✅ | ❌ (App Router primárně SSR) |
| MDX (markdown + komponenty) | ano | ✅ first-class | ⚠️ skrz shortcodes | ⚠️ pluginy | ✅ |
| Vlastní design tokeny + Tailwind | ano | ✅ `npx astro add tailwind` | ⚠️ ručně | ⚠️ ručně | ✅ |
| Komponentový model pro karty / persony / kalkulačku | ano | ✅ `.astro` + React island | ❌ Go templates | ⚠️ JS-light | ✅ heavy |
| Performance default (žádný JS not needed) | TOP | ✅ zero-JS by default | ✅ | ✅ | ⚠️ JS-heavy |
| i18n nativně (kdybychom šli později EN/SK) | nice-to-have | ✅ `astro:i18n` | ✅ | ⚠️ pluginy | ✅ |
| Markdown content + serverové endpointy (lead form → Twenty) | ano | ✅ `pages/api/*.ts` | ❌ čistě statické | ❌ | ✅ |
| Image optimization out-of-box (3-4 raster obrázky) | ano | ✅ `<Image>` | ⚠️ ručně | ⚠️ ručně | ✅ |
| Dev experience, build speed | high | ✅ rychlé | ✅ nejrychlejší | ✅ | ⚠️ velký build |
| Ekosystém / komunita | stable | ✅ rostoucí | ✅ mature | ⚠️ menší | ✅ huge |

**Závěr:** Astro je sweet-spot mezi statikou (Hugo) a komponentovým frameworkem (Next). Pro náš případ — markdown content s občasnou interaktivitou + serverové endpointy pro form handling — sedí přesně.

---

### Konkrétní stack lock

#### Frontend / SSG
- **Astro 4** (latest stable) — framework
- **Tailwind CSS 3** — utility-first styling, locked design tokens (sekce 2-3) v `tailwind.config.js`
- **MDX** — content stránky (`*.mdx` v `src/content/pages/`)
- **Astro Content Collections** — pro typed content (FAQ, pricing data, oborové podstránky)

#### UI komponenty
- **Astro components** (`.astro`) — default pro statické komponenty (Header, Footer, Hero, Card, …)
- **React** — pouze pro interaktivní bity (kalkulačka úspor v `/cenik/`, accordion na `/jak-to-vypada-v-praxi/`)
- **Lucide React** — ikony jako komponenty (knihovna `lucide-react`)

#### Typografie
- **Inter** — self-hosted, woff2 subset cs/sk/en (~30 KB)
- Soubor: `public/fonts/Inter-roman.cs.woff2`
- `font-display: swap` pro neblokující render
- Žádný Google Fonts CDN (privacy + GDPR + performance)

#### Content / data
- **Markdown / MDX** v `src/content/` pro stránky a entity přehledy
- **TOML / JSON** pro centralizovaná data:
  - `src/data/pricing.toml` — Cloud / Selfhost ceny, SLA balíčky, příklady
  - `src/data/faq.toml` — FAQ otázky / odpovědi (kategorizované)
  - `src/data/team.toml` — kontakty týmu (Baloun, Řezáč, Pitner)
- **Single source of truth** — když změna ceny, mění se na jednom místě a propisuje napříč webem

#### Forms a lead routing
**Žádný formulář na webu** (rozhodnuto 2026-05). Klient volá nebo píše e-mail. Detaily v `kontakt.md`.

Důsledek pro stack:
- ❌ Žádný `pages/api/contact.ts` endpoint
- ❌ Žádné anti-spam (honeypot, Turnstile, time-based check)
- ❌ Žádné GDPR consent flow pro form data
- ❌ Žádný auto-reply mailing systém
- ✅ Pouze `tel:` a `mailto:` linky s JS-rendered obfuskací proti scrapování botů
- ✅ Lead capture do Twenty manuálně (1 min/lead když e-mail dorazí)

#### Analytics
- **Plausible** (plausible.io) — EU-hosted (Frankfurt), bez cookies, GDPR-compliant
- Self-hosted varianta dostupná pokud chceme plnou kontrolu (Phase 2)
- Skript loaded **conditionally** podle cookie consent (anonymní stat ano, přesné tracking ne bez souhlasu)

#### Cookie consent
- **Vlastní lightweight banner** (custom Astro/React komponenta) — žádné third-party CMP (Cookiebot, OneTrust = drahé, opravdu nepotřebujeme)
- Stav uložen v `localStorage` (žádné cookies pro samotný consent — paradox vyřešen)
- Re-otevření přes link „🍪 Cookies" v patičce

#### Hosting / deployment
- **Cloudflare Pages** (preferováno) — zdarma, EU edge, vynikající DDoS protection, automatické SSL, custom domain
  - Alternativa: **Vercel** nebo **Netlify** — taky OK, ale Cloudflare má lepší free tier a EU regiony
- **Doména:** twentycrm.cz, DNS přes Cloudflare (jednodušší integrace)
- **SSL:** automatic Let's Encrypt přes hosting provider
- **CDN:** automatický globální (Cloudflare má 300+ POPs)
- **Build:** Astro `npm run build` → `dist/` adresář → deploy

#### Repository / vývoj
- **GitHub** — single repo `twentycrm-cz` (web + content + design)
- **Branching:** `main` (production), feature branches
- **CI/CD:** **Cloudflare Pages auto-deploy** na push do `main` (bez GitHub Actions ve většině případů)
- **Preview deployments:** automatické pro každou PR (vidíme změny před merge)
- **Local dev:** `npm install && npm run dev` → `localhost:4321`

#### Monitoring
- **Cloudflare Analytics** — basic uptime / traffic (zdarma)
- **Plausible** — návštěvnost a goal conversions
- **Lighthouse CI** v GitHub Actions (volitelné Phase 2) — alert pokud Lighthouse score klesne

#### SEO
- **`@astrojs/sitemap`** — auto-generated sitemap.xml
- **Schema.org structured data** v page components — `LocalBusiness`, `FAQPage`, `Service`
- **OpenGraph + Twitter cards** v každé stránce (automatické přes Astro layout)
- **`robots.txt`** ve `public/`
- **hreflang** zatím jen `cs-CZ` (později rozšiřitelné)

#### Performance budget
| Metrika | Cíl |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | 100 |
| LCP (Largest Contentful Paint) | < 1.5 s |
| CLS (Cumulative Layout Shift) | < 0.05 |
| TBT (Total Blocking Time) | < 200 ms |
| Total page weight (compressed) | < 200 KB |
| Time to Interactive | < 2 s |

---

### Adresářová struktura repu (návrh)

```
twentycrm-cz/
├── .github/
│   └── workflows/         # CI (volitelné — pokud Cloudflare auto-deploy nestačí)
├── public/
│   ├── brand/
│   │   ├── logo.svg       # primární
│   │   ├── logo.png       # fallback / OG
│   │   └── favicon.ico
│   ├── fonts/
│   │   └── Inter-roman.cs.woff2
│   └── og-default.png
├── src/
│   ├── components/        # Header, Footer, Hero, Card, CTAButton, ...
│   ├── content/
│   │   ├── pages/         # MDX stránky
│   │   ├── obory/         # oborové podstránky (HVAC, Revize, Stroje)
│   │   └── migrace/       # migrační landing pages
│   ├── data/
│   │   ├── pricing.toml
│   │   ├── faq.toml
│   │   └── team.toml
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── co-umi.astro
│   │   ├── pro-servisni-firmy/
│   │   │   ├── index.astro
│   │   │   ├── hvac.astro
│   │   │   ├── revize.astro
│   │   │   └── stroje.astro
│   │   ├── migrace/
│   │   ├── cloud-vs-selfhost.astro
│   │   ├── cenik.astro
│   │   ├── otazky.astro
│   │   ├── o-nas.astro
│   │   ├── kontakt.astro
│   │   ├── api/
│   │   │   └── contact.ts  # form handler → Twenty API
│   │   └── pravni/         # GDPR / Cookies / VOP
│   └── styles/
│       └── globals.css     # Tailwind + custom CSS variables (palette)
├── astro.config.mjs
├── tailwind.config.js
├── package.json
└── README.md
```

---

### Checklist pro start vývoje

Když schválíš tento stack, postup:

1. ✅ Vytvořit GitHub repo `twentycrm-cz` (private nebo public — preference)
2. ✅ `npm create astro@latest` → blank template
3. ✅ Přidat Tailwind: `npx astro add tailwind`
4. ✅ Přidat MDX: `npx astro add mdx`
5. ✅ Přidat React (pro interaktivní komponenty): `npx astro add react`
6. ✅ Stáhnout Inter font woff2 (Google Fonts → self-host)
7. ✅ Nastavit `tailwind.config.js` s našimi tokeny (palette, typography z sekcí 2-3)
8. ✅ Naimplementovat layout: BaseLayout, Header, Footer
9. ✅ Po jedné stránce: Homepage → Co Twenty umí → Pro koho → Cloud vs Selfhost → Cena → Otázky → O nás → Kontakt
10. ✅ Doplnit oborové podstránky a migrační stránky
11. ✅ Doplnit právní stránky
12. ✅ Implementovat form handler `pages/api/contact.ts` + napojení na Twenty API
13. ✅ Cookie consent banner
14. ✅ Plausible analytics (s consent gating)
15. ✅ DNS přepnutí na Cloudflare Pages, custom doména twentycrm.cz
16. ✅ Final Lighthouse audit, OG card test, mobile responsive check
17. ✅ Spuštění

**Odhad času pro Astro variantu** (od `npm create` po launch): **5-8 pracovních dnů**.

---

## 13.B — Varianta PHP 8.3 + Latte + SQLite (✅ LOCKED 2026-05)

> **Cílová infrastruktura:**
> - **Hosting:** Svethostingu.cz, tarif **Multi 100** (1 CPU / 1 GB RAM / 30 GB SSD, neomezené domény, SSH, free Let's Encrypt, libovolná PHP konfigurace)
> - **Doména + DNS + reverse proxy:** **Cloudflare** (orange cloud, proxied) — již spravované uživatelem
> - **Repo:** GitHub private

### Stack lock

| Vrstva | Volba | Proč |
|---|---|---|
| Runtime | **PHP 8.3** (configurable per Svethostingu admin) | Moderní PHP (typed properties, readonly, enums, JIT) |
| Webserver | **Apache + .htaccess** (Svethostingu standard) | Žádný nginx setup nutný, mod_rewrite pro URL routing |
| Templating | **Latte** ([latte.nette.org](https://latte.nette.org)) | Český produkt (Nette), auto-escape, layout dědičnost, rychlé |
| Routing | **`nikic/fast-route`** | 19 URL — žádný Symfony overkill, modular front controller |
| Frontend | **Tailwind CSS** kompilovaný přes npm na dev → statický `public/style.css` deployed | Node jen na dev mašině, hosting Node nepotřebuje |
| JS framework | **Alpine.js** (~15 KB) | Sprinkled deklarativní interaktivita, perfektně sedí s PHP-rendered HTML |
| AJAX | (vynecháno) | Žádný formulář na webu = htmx zbytečné. FAQ accordion vystačí Alpine. |
| DB | **SQLite přes PDO** (file v `db/twentycrm.sqlite`) | Cookie consent log + případně jednoduchý log konverzí. File-based = žádný MySQL setup. |
| Font | **Self-hosted Inter** woff2 v `public/fonts/` | Privacy + GDPR + performance |
| Analytics | **Plausible** script tag (s consent gating) | EU-hosted, bez cookies, GDPR-friendly |
| Cookie banner | **Vanilla JS / Alpine** komponenta + SQLite log | Lightweight, vlastní kontrola |
| **Cloudflare config** | **Orange cloud (proxied), SSL mode „Full (strict)"** | DDoS, CDN cache pro statiku, hidden origin IP |
| **Origin SSL** | Let's Encrypt přes Svethostingu (zdarma, automatic renewal) | Pro Cloudflare „Full (strict)" mode end-to-end |

### Adresářová struktura

```
twentycrm-cz/
├── public/                      # webroot (Apache/nginx document root)
│   ├── index.php                # front controller
│   ├── style.css                # Tailwind build output (gitignored, build artefakt)
│   ├── alpine.min.js
│   ├── brand/
│   │   ├── logo.svg             # primární
│   │   └── logo.png             # fallback
│   └── fonts/
│       └── Inter-roman.cs.woff2
├── views/                       # Latte šablony
│   ├── layouts/
│   │   └── base.latte
│   ├── components/
│   │   ├── header.latte
│   │   ├── footer.latte
│   │   ├── cta-buttons.latte    # tel + mailto, reusable
│   │   └── faq-accordion.latte
│   ├── homepage.latte
│   ├── co-umi.latte
│   ├── pro-servisni-firmy/
│   │   ├── index.latte
│   │   ├── hvac.latte
│   │   ├── revize.latte
│   │   └── stroje.latte
│   ├── migrace/
│   │   ├── index.latte
│   │   ├── z-raynetu.latte
│   │   ├── z-pipedrive.latte
│   │   └── z-excelu.latte
│   ├── cloud-vs-selfhost.latte
│   ├── cenik.latte
│   ├── otazky.latte
│   ├── o-nas.latte
│   ├── kontakt.latte
│   ├── jak-to-vypada-v-praxi.latte
│   └── pravni/
│       ├── gdpr.latte
│       ├── cookies.latte
│       └── obchodni-podminky.latte
├── src/
│   ├── Router.php               # router setup
│   ├── Controllers/
│   │   ├── PageController.php   # render Latte šablon
│   │   └── ConsentController.php # cookie consent log do SQLite
│   ├── Helpers.php              # mailto: builder per stránku, etc.
│   └── Db.php                   # PDO SQLite wrapper
├── data/                        # centralizované JSON
│   ├── pricing.json             # ceny per varianta, SLA balíčky
│   ├── faq.json                 # otázky + odpovědi po kategoriích
│   ├── team.json                # tým + kontakty
│   ├── obory.json               # oborové podstránky data
│   └── migrace.json             # migrační stránky data
├── db/
│   └── twentycrm.sqlite         # consent log (volitelně analytics fallback)
├── tailwind.config.js
├── package.json                 # jen pro Tailwind build
├── composer.json                # PHP deps (Latte, fast-route)
└── README.md
```

### Mailto + tel link buildování (PHP helper)

```php
// src/Helpers.php
function mailtoLink(string $template, array $vars = []): string {
    $subjects = [
        'generic' => 'Konzultace Twenty CRM',
        'hvac' => 'Konzultace — HVAC servisní firma',
        'revize' => 'Konzultace — Revize',
        'stroje' => 'Konzultace — Servis strojních zařízení',
        'raynet' => 'Migrace z Raynetu do Twenty',
        // ...
    ];
    $bodies = [
        'generic' => "Dobrý den,\n\nmám zájem o Twenty CRM pro naši firmu.\n\nKrátce o nás:\n- Obor:\n- Velikost týmu:\n- Současné řešení:\n\nS pozdravem,",
        'hvac' => "Dobrý den,\n\nprovozujeme servisní firmu v oblasti klimatizace / HVAC.\n\n- Počet techniků:\n- Současné řešení:\n- Co řešíme nejvíc:\n\nS pozdravem,",
        // ...
    ];
    $subject = urlencode($subjects[$template] ?? $subjects['generic']);
    $body = urlencode($bodies[$template] ?? $bodies['generic']);
    return "mailto:obchod@twentycrm.cz?subject={$subject}&body={$body}";
}
```

V Latte:

```latte
<a href="{mailtoLink('hvac')}" class="btn btn-primary">
  📧 Napsat: obchod@twentycrm.cz
</a>
```

### Cookie consent v SQLite

```sql
CREATE TABLE consent_log (
  id INTEGER PRIMARY KEY,
  visitor_id TEXT,             -- random UUID v localStorage
  timestamp INTEGER,
  consent_version TEXT,        -- pro pozdější update policy
  analytics BOOLEAN,
  necessary BOOLEAN DEFAULT 1
);
```

PHP endpoint `public/index.php?action=consent` přijme POST z banneru, uloží do SQLite. Plausible script se loaduje **conditionally** podle `analytics=1`.

### Build / deploy workflow (Svethostingu Multi 100)

#### Local development (na vývojářské mašině)
```bash
composer install
npm install
npm run watch:css                  # Tailwind watch mode
php -S localhost:8080 -t public/   # PHP built-in server (PHP 8.3 lokálně)
# → http://localhost:8080
```

#### Příprava production buildu
```bash
composer install --no-dev --optimize-autoloader
npm run build:css                  # Tailwind production build (minified) → public/style.css
```

#### Deployment na Svethostingu (dvě varianty)

**Varianta 1 — Git pull přes SSH (preferováno):**
```bash
ssh user@server.svethostingu.cz
cd /domains/twentycrm.cz/
git pull origin main
composer install --no-dev --optimize-autoloader
# Tailwind build neptřebujeme dělat na serveru — public/style.css commitujeme do gitu
```

**Varianta 2 — sFTP deploy (fallback):**
- Zip celý projekt lokálně po `composer install --no-dev` + `npm run build:css`
- Upload přes sFTP do `/domains/twentycrm.cz/`
- Vyloučit z deploye: `node_modules/`, `tests/`, `.git/`, `vendor/bin/` (pokud potřeba), `db/twentycrm.sqlite` (live data!)

**`.htaccess` v `public/`:**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.php [QSA,L]

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
</IfModule>

# Force HTTPS (Cloudflare zařídí, ale pro jistotu)
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

# PHP version (Svethostingu specific)
<FilesMatch "\.php$">
  SetHandler application/x-httpd-php83
</FilesMatch>
```

#### Cloudflare konfigurace

| Setting | Hodnota | Proč |
|---|---|---|
| **Proxy mode** | 🟧 Proxied (orange cloud) | DDoS, CDN, hidden origin |
| **SSL/TLS mode** | **Full (strict)** | End-to-end SSL, Cloudflare ↔ Svethostingu Let's Encrypt cert |
| **Always Use HTTPS** | On | Auto-redirect HTTP → HTTPS na Cloudflare edge |
| **Automatic HTTPS Rewrites** | On | Auto-fix mixed content |
| **HSTS** | On (po týdnu testovacího provozu) | Prevent SSL downgrade |
| **Brotli compression** | On | Lepší kompresní poměr než gzip |
| **HTTP/3 (QUIC)** | On | Rychlejší connection setup |
| **Browser Cache TTL** | 1 month | Static assets cached |
| **Cache Rules** | Cache `*.css`, `*.js`, `*.woff2`, `*.svg`, `*.png` | CDN nese statiku, Apache jen HTML |
| **Page Rules** (volitelné) | `twentycrm.cz/*` → Cache Level: Standard | Default behavior |

> **Origin IP visibility:** Pro deploy přes SSH/sFTP používáme buď přímo `serverXX.svethostingu.cz` hostname (z admin panelu), nebo separátní A record `direct.twentycrm.cz` (DNS-only / grey cloud) — Cloudflare proxy je jen pro veřejnou doménu.

### Checklist pro start vývoje

#### Setup (1. den)
1. ✅ Vytvořit GitHub repo `twentycrm-cz` (private)
2. ✅ `composer init` + `composer require latte/latte nikic/fast-route`
3. ✅ Setup `public/index.php` jako front controller + router
4. ✅ `npm init` + `npm install -D tailwindcss @tailwindcss/typography`
5. ✅ Nastavit `tailwind.config.js` s našimi tokeny (palette, typography z sekcí 2-3 design-principy.md)
6. ✅ Stáhnout Inter woff2 (Google Fonts → self-host, subset cs/sk/en) do `public/fonts/`
7. ✅ Vytvořit `.htaccess` (URL routing, cache, PHP version, HTTPS)

#### Layout + komponenty (2. den)
8. ✅ Naimplementovat layout: `base.latte`, `header.latte`, `footer.latte`
9. ✅ `cta-buttons.latte` komponenta s tel + mailto (s pre-filled subject per kontext)
10. ✅ `faq-accordion.latte` (Alpine.js)
11. ✅ Cookie consent banner (Alpine.js + SQLite log)
12. ✅ Footer disclaimer (prominentně viditelný, viz `pravni-texty.md` 4b)

#### Stránky (3.–6. den, postupně)
13. ✅ Homepage `/`
14. ✅ Co Twenty umí `/co-umi/`
15. ✅ Pro koho `/pro-servisni-firmy/` + 3 oborové (HVAC / Revize / Stroje)
16. ✅ Cloud nebo Selfhost `/cloud-vs-selfhost/`
17. ✅ Cena `/cenik/`
18. ✅ Otázky `/otazky/`
19. ✅ Migrace `/migrace/` + 3 (Z Raynetu / Pipedrive / Excelu)
20. ✅ Jak to vypadá v praxi `/jak-to-vypada-v-praxi/`
21. ✅ O nás `/o-nas/`
22. ✅ Kontakt `/kontakt/`
23. ✅ Právní stránky (GDPR / Cookies / VOP)

#### Integrace (7. den)
24. ✅ Plausible analytics (s consent gating na základě cookie banneru)
25. ✅ JS-rendered mailto: linky (proti scrapování)
26. ✅ OpenGraph + favicon + PWA touch icons z mark-části loga

#### Deploy + spuštění (8.–9. den)
27. ✅ Production build (`composer install --no-dev`, `npm run build:css`)
28. ✅ Deploy na Svethostingu Multi 100 (git pull přes SSH nebo sFTP)
29. ✅ DNS přepnutí v Cloudflare na origin IP (orange cloud, Full Strict SSL)
30. ✅ Aktivace Let's Encrypt v Svethostingu admin panelu (origin SSL pro Full Strict)
31. ✅ Final Lighthouse audit (cíl ≥95 ve všech kategoriích)
32. ✅ Test mailto/tel linků (iOS Mail, Android, Outlook desktop, Thunderbird)
33. ✅ Test mobile responsive (iPhone SE až iPad Pro)
34. ✅ Test OG card (Facebook Debugger, Twitter Card Validator)
35. ✅ Spuštění

**Odhad času pro PHP variantu na Svethostingu Multi 100:** **8-10 pracovních dnů** (závisí na úrovni vyladění detailů a dostupnosti zpětné vazby).

### Co PHP varianta NEpotřebuje

- ❌ **Form handler endpoint** (žádný formulář na webu — viz `kontakt.md`)
- ❌ **Anti-spam pro form** (CSRF, honeypot)
- ❌ **PHPMailer / SMTP setup** pro odchozí mail z webu (klient si píše z vlastního klienta)
- ❌ **Heavy framework** (Symfony, Laravel) — overkill pro 19 stránek
- ❌ **CMS / admin panel** — content je v Latte šablonách + JSON, edit přes git push
- ❌ **Authentication** — veřejný web

---

### Co stack NEpotřebuje (vědomě vyloučené, platí pro obě varianty)

- ❌ **CMS** (Strapi, Sanity, Contentful) — content v repu (markdown / Latte / JSON)
- ❌ **Authentication** — veřejný marketing web, žádní přihlášení uživatelé
- ❌ **Third-party form services** (Formspree, Tally) — žádný formulář na webu
- ❌ **Google Analytics / Tag Manager** — privacy-first
- ❌ **A/B testing tooling** — pro MVP nepotřebné
- ❌ **Storybook / design system tool** — Tailwind + repo postačí
- ❌ **Google Analytics / Tag Manager** — privacy-first
- ❌ **A/B testing tooling** — pro MVP nepotřebné
- ❌ **Storybook / design system tool** — Tailwind + 1 Astro repo postačí

---

### Otevřené body k rozhodnutí (rychlé volby)

1. **Stack: Astro vs PHP?** — doporučení = **PHP** (Varianta B) vzhledem k existujícímu VPS
2. **GitHub repo:** private nebo public? Doporučení **private** (web obsahuje brainstorming a strategic content; po launchi případně extract do public)
3. **DNS / reverse proxy:** doporučení **Cloudflare před VPS** — free tier, DDoS, SSL, CDN cache pro statické assety. DNS přesunout pod Cloudflare.
4. ~~**Twenty instance pro vlastní lead capture**~~ ✅ **Odloženo:** lead tracking přes e-mail složky + spreadsheet pro launch. Vlastní Twenty (selfhost) založíme až s první klientskou implementací. Demo na schůzce: prototypovaný Twenty Cloud sandbox per klient (30 dní free trial).
5. ~~**Mailové aliasy**~~ ✅ **Vyřešeno:** zařídí uživatel na stávajícím mailserveru.

> Tyto body lze rozhodnout v krátké schůzce před začátkem implementace, neblokují brainstorming.
