# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

Planning workspace for the **twentycrm.cz** website — a Czech implementor offering Twenty CRM (open-source, AGPL-3.0) as a managed/turnkey service for SMB clients. Operated by ESHOpino s.r.o. (Petr Baloun, David Řezáč, Jakub Pitner). The same agency runs a parallel Microsoft Model Driven Apps business under the **bohemiacrm.cz** brand — twentycrm.cz is a *new sister brand*, not a rebrand.

**The website sells exactly two ready-made solutions** (both are our own nadstavby over Twenty): **Twenty Sales** (řízení obchodu) and **Twenty Servis** (montáže a servis u zákazníka). See "Dvě řešení" below — it is the single most important structural fact about the site.

**Repository layout:**
- `brainstorming/` — strategy and content-research notes (markdown). The source of all decisions.
- **v2 (tento repozitář, od 2026-11-12):** Astro 7 + Tailwind 4, statický výstup do `dist/`. Obsah stránek je v **Markdownu** v `src/content/stranky/` (cesta k souboru = URL), data v `src/data/*.json`, bloky přes direktivy (`::demo-cta`, `:::karty`, `{{cena.klic}}` …) — přehled syntaxe v hlavičce `src/lib/markdown/remark-twentycrm.mjs`. Znalostní část `/twenty/` (průvodce) je ve stejné šabloně: obsah v `src/content/pruvodce/` (složka = oblast, `draft: true` = koncept, který se zveřejní až po ověření), layout `src/layouts/Pruvodce.astro`, vyhledávání Pagefind (index vzniká při `npm run build`). `npm run build:staging` ukáže i koncepty, s noindex. Inventář URL ze starého webu: `docs/url-inventar.md` (`npm run inventar`). Kontroly: `node scripts/zkontroluj-md.mjs <soubor>` (frontmatter, direktivy), `node scripts/parita.mjs --vse` (žádný text starého webu nechybí), `node scripts/odkazy.mjs` po buildu (interní odkazy a kotvy). Build ke každé stránce vytvoří i textovou verzi pro AI asistenty (`/cenik/` → `/cenik.md`, `scripts/markdown-verze.mjs`; slibuje ji `public/llms.txt` a odkazuje na ni `<link rel="alternate" type="text/markdown">`). Postup převodu: `docs/prevod-stranek.md`; obsahové nálezy k rozhodnutí: `docs/nalezy-z-prevodu.md`.

**Registry o Twenty (od 2026-11-12) — jediný zdroj pravdy o stavu funkcí:** `src/data/twenty/funkce.json` (stav každé schopnosti: `dnes` / `pripravuje-se` + důvod / `smer`, omezení jako „jen na vlastním serveru" nebo „tarif Organization", zdroje, datum ověření), `vydani.json` (každé vydání od v1.15 = leden 2026, česky co přineslo a kterých funkcí se týká; Novinky v průvodci jsou po měsících `src/content/pruvodce/novinky/RRRR-MM.md`) a `zdroje.json` (adresy s datem kontroly). Načítá a kontroluje je `src/lib/twenty.mjs` — neznámá funkce, zdroj nebo verze shodí build. Text o tom, co Twenty umí a co se připravuje, **nepiš ručně**: použij `::stav-funkci{temata="…" funkce="…"}` (vykreslí se z registru a po změně stavu se aktualizuje sám), v průvodci frontmatter `funkce: [id]` a `zdroje: [id]`. Když se funkce změní, uprav ji v `funkce.json`, ne na stránkách. Týdenní údržba: `npm run twenty:vydani` (nová vydání z GitHubu, `-- --zapis` je zapíše jako nezpracovaná), `npm run zdroje:kontrola` (dostupnost zdrojů a odkazů na docs.twenty.com), `npm run obsah:zastarale` (co přeověřit; `-- --prisne` před vydáním). Veřejné vysvětlení štítků: `src/content/pruvodce/jak-overujeme.md`. **Use casy z novinek (od 2026-11-18)** se píšou jako krátké karty „Situace z praxe" v `src/data/situace.json` (stránka `/twenty/situace/`, na úvodech oblastí se ukážou samy, jinde `::situace{…}`), ne jako nová část webu; každou změnu z vydání zařadit: karta / úprava článku / jen registr a Novinky / vynechat, a před „Lze nastavit" ověřit v kódu, že není za přepínačem (`docs/plan-pruvodce.md` kap. 3.5, `zasady-webu.md` 14e). Plán: `docs/plan-pruvodce.md` kap. 4. Původní PHP web zůstává v `../TwentyCRM.cz/web/` jako zdroj textů.

Vzhled = šablona **Payday** (MIT, `licenses/payday-theme-MIT.txt`) včetně její barevnosti — tokeny v `src/styles/tokens.css`, sdílené komponenty v `src/styles/komponenty.css`. **Vizuální volby (šablona, barvy, písmo) se vždy nejdřív ptát uživatele.** Emoji v Markdownu se při vykreslení mění na ikony Lucide (tmavý čtvereček, bílá ikona) podle tabulky `src/lib/ikony.mjs`; nové emoji je nutné do tabulky doplnit, jinak build spadne. Velká ikona stojí u karet vždy **vedle názvu**, na střed — u karet řešení (Twenty Sales / Twenty Servis), oborů i karet bez nadpisu (`### 🔧` + odstavec začínající tučnou větou: ta se postaví vedle ikony, zbytek odstavce pod ni) (2026-11-13). Zvýrazněná část nadpisu hero (`*…*`) je vždy na novém řádku. Číslo kroku stojí v řádku **před** nadpisem, ne nad ním (`### 01` + `#### Nadpis` v `:::sloupce`/`:::karty`, nebo `::stitek[1]` + `### Nadpis`); `### 12` + popis v kartách se vykreslí jako statistika s velkým číslem (2026-11-13). Nadpis s textem dostane malou ikonu v řádku před textem, svisle na střed textu (rozhodnutí uživatele 2026-11-12 a 2026-11-13). When working on content, the source of truth is `brainstorming/`.

## Language

All user-facing content and the brainstorming notes are in **Czech**. Write new website copy, FAQs, page titles, and meta descriptions in Czech. Internal code/comments can be English.

## Truthfulness — official Twenty sources are non-negotiable

**Hard rule for all website copy and content claims about Twenty CRM features, behavior, or capabilities:**

Every factual claim must be verifiable against one of the official Twenty sources:

- **https://twenty.com/** — official marketing site
- **https://docs.twenty.com/user-guide/introduction** — user documentation (English; canonical for verifying facts)
- **https://docs.twenty.com/cs/user-guide/introduction** — **Czech-localized user docs** (verified 2026-11-12; the older `/l/cs/` form only redirects with 308 — write `/cs/`). URL pattern: `/cs/user-guide/[section]/overview`. Use these for customer-facing links on the website (twentycrm.cz visitors prefer Czech).
- **https://github.com/twentyhq/twenty** — source code, issues, roadmap, releases

**Rule of thumb for sourcing vs. linking:**
- *Internal verification of facts:* English docs (translations may lag).
- *Public website "learn more" links:* Czech docs (`/cs/...`).

We are an *independent implementation agency*, **not the creators of Twenty**, and operate under AGPL-3.0. We have no authority to invent or pre-announce features. Concretely:

- Do **not** describe a feature as available unless documented in the sources above. If a capability comes from a community plugin, custom code, n8n flow, or our own integration work, label it as such — not as a Twenty feature.
- Do **not** copy aspirational-sounding bullets from the legacy twentycrm.cz site or from other Czech Twenty marketing without verifying each one against current docs/repo. (See `brainstorming/stary-web-souhrn.md` — the AI bullets in particular need verification before reuse.)
- Hypotheses in brainstorming docs (e.g., "Proč Twenty fit (hypotéza)") are fine while planning, but each must be verified against official sources **before** it becomes website copy.
- Pre-release / roadmap features must be flagged as such, not presented as current.
- The Czech market is small; leads will fact-check. A single overstatement undermines the agency's credibility for both twentycrm.cz and the sister brand bohemiacrm.cz.

When in doubt, fetch the source and quote/link rather than paraphrasing from memory.

**Describe what Twenty itself states — do not elaborate on what we have not tried (decided 2026-11-13).** Operational details that Twenty's docs do not describe and that neither we nor our clients have needed (server-side configuration read from source code, e.g. Amazon SES for forwarded mail) do not go on the website or into the guide — no „na vlastním serveru je potřeba…", „vybereme při nasazení", „ověříme před nasazením". Either it is in the vendor's material, or it is not on the site. Twenty Servis: the Servisní plán creates zakázka + výjezd **„podle nastaveného pravidla"** — never state a time („v noci"). Detail in `zasady-webu.md` 14c.

**„Lze nastavit" ≠ „hotové v našem řešení" ≠ „v ceně" (decided 2026-11-13).** The guide describes what the Twenty platform can do. Status label is **„Lze nastavit dnes"** (never „Funguje dnes"); prose says „v Twenty lze nastavit". Call something ready only if the Twenty Sales / Twenty Servis pages document it. „Nastavíme / při nasazení" only for items in `pricing.json` → `implementation.includes`; otherwise state that setup is extra work — small tweaks from the monthly hour in the retainer, larger ones estimated up front (`/sla-balicky/`). No „zdarma", no refusals. The explanatory note under every status block is rendered from `src/lib/twenty.mjs`. Detail in `zasady-webu.md` 14d.

## ⚠️ Než začneš psát cokoli na web

Přečti si **[`brainstorming/zasady-webu.md`](brainstorming/zasady-webu.md)**. Je to jediný dokument,
kde jsou u pravidel i **důvody a konkrétní případy, kdy se porušila a co to způsobilo**.
Sekce níž v tomhle souboru jsou zkrácené verze pro rychlé dodržení — když si nejsi jistý,
*proč* nějaké pravidlo existuje, odpověď je tam. Nové rozhodnutí patří do obou souborů,
nikdy do třetího.

## Dvě řešení — the structural rule of the site (decided 2026-08-01)

The site offers **exactly two ready-made solutions**. Data lives in `web/data/reseni.json`; the comparison table on `/ktere-crm-vybrat/` is generated from it.

| | **Twenty Sales** (`/pro-obchodni-tymy/`) | **Twenty Servis** (`/pro-servisni-firmy/`) |
|---|---|---|
| For | řízení obchodu — **firmám i koncovým zákazníkům, krátké i dlouhé obchody** | montáže a servis **u zákazníka** (servisně-realizační firmy) |
| Own entities | Lead, Obchodní případ (fáze, vážená hodnota), Projekt s rozpočtem nákladů, Obchodní plán s výhledem a semaforem, editovatelné šablony dokumentů, prověření rizika klienta (DPH, insolvence) | Místo, Zařízení (s.č., záruka, jednoúrovňová hierarchie), Servisní plán, Zakázka, Výjezd, Výkaz práce, plánovač týmu, zakázkový list |
| Shared | Nabídky, položky nabídek, ceník produktů — **totožné**; ARES; AI chat a MCP; vyhrazený server nebo cloud; **cena** |
| Status | hotové, demo připravené | hotové, včetně uživatelské příručky v češtině (`docs/prirucka-uzivatele.md`) |

**Non-negotiable rules:**

1. **Product naming.** „Twenty Sales" / „Twenty Servis" must always appear with the note that it is *our nadstavba over open-source Twenty*, not a Twenty Inc. product. Use `components/reseni-disclaimer.latte` on product pages. When referring to the **core/platform**, write **„open-source Twenty"** — never „open-source CRM Twenty". The core is a platform; calling it a CRM blurs it with what we sell. „Twenty CRM" stays only where the product as a whole is meant (page titles, „Co Twenty CRM umí").
2. **They are a choice, not a stack.** Servisní firmě **stačí Twenty Servis** — it covers the whole zakázka lifecycle including nabídky. Never offer a combo package or a surcharge for the second nadstavba.
3. **Servis has no leads and no obchodní plán.** **Zakázka plní roli obchodního případu.** Do not claim otherwise.
3b. **Sales is not B2B-only.** It covers selling to firms *and* to end customers, and short *and* long sales cycles — the deciding factor is that a deal is negotiated and a nabídka is made. The only genuine non-fit is a purely e-shop operation where orders settle themselves and nobody talks to anybody.
3c. **Deployment track record: say nothing, claim nothing.** The site does not name clients and does not volunteer that Twenty Sales has none yet — that is a sales decision made 2026-08-01. The hard line stays: **never fabricate** deployments, client counts, references or case studies presented as real. Sell the product (what is built, demo on request), not a history. If a prospect asks directly, the answer is honest.
3c-2. **Never volunteer weaknesses — anywhere.** There is a hard line between two things that look similar:
   - **Scope / positioning** — „doklad vystavuje fakturační program", „sklad patří podnikovému systému", „model stojí na výjezdu k zákazníkovi". This names *another system's* job, sells focus, and belongs on product and obor pages.
   - **Self-deprecation** — „kde jsme slabší", „nemáme nativní aplikaci", „bez offline režimu", „poznámka k poctivosti". Nobody asked. It reads like a nervous student and it loses deals. Do not write it, not even on deep evaluation pages, and never on the homepage.
   Two specific things that were wrongly framed as our weakness and must stay framed as **normal practice**: (a) **the phone runs it in the browser and you work online** — that is how nearly every comparable system works and offline is rare; mention it only if a prospect asks; (b) **newsletters go out from a mailing tool, not from the CRM** — that is the standard, because bulk sending from a company mailbox wrecks the whole domain's deliverability.
   This does not license fabrication: we still never claim a capability we lack. Silence is allowed; a false claim is not. If a prospect asks directly, answer honestly.
3d. **Scope boundary — say it on every obor page.** In most Sales obory the CRM covers **the salesperson's work up to signature or invoicing**: poptávka → nacenění → nabídka → jednání → podpis. What comes after (výroba, sklad, expedice, vykazování hodin, fakturace) belongs to the system the client already has. Twenty Servis's boundary is the mirror image: zakázka → výjezd → výkaz → zakázkový list; it is not stavební PM, not a warehouse and not accounting.
   Each obor page therefore carries an explicit **„Co u nás / Co zůstává jinému systému"** block. This is not a disclaimer — it is the strongest sales argument, because it tells a sceptical buyer we are not trying to replace what works.
3c-3. **Never refuse a customisation on the website.** The words „to neděláme", „nepostavíme", „neslibujeme" must not appear. When something is not in the product, name **who does it** and offer to **talk it through** — „ozvěte se, projdeme to spolu". A refusal closes the door before the conversation starts; almost every request is either a small tweak or a sensible split with the system the client already has, and that only shows on a call. This is not in conflict with 3e: **do not promise a specific module up front, and do not refuse up front either.**
3e. **Sell what exists; never promise to build.** No „postavíme", „doděláme", „přidáme jako rozšíření", no catalogue of future modules (klientský portál, sklad, HR, SLA timer, podpis prstem, skenování QR, přepočet měn). The single published rozšíření is napojení na fakturaci; everything else is either in the product or it is not. Small tweaks — a field, a view, a číselník, an automation — are honest to mention as work from prepaid SLA hours, but that is not the same as promising a module. Use `components/rozsireni.latte`, which says exactly this and nothing more; do not hand-roll a „Co můžeme přidat" section again.
3e-2. **Never promise entities the products do not have.** No „Vlastní typ Výrobní zakázka / Odběratel / Úkon / Agenda", no fáze výroby, šarže, sériová čísla vyrobených kusů, plánovač strojů, výkazy hodin, řízení subdodavatelů. The four legacy `/obory/` pages were rewritten on 2026-08-01 for exactly this reason — they were selling a bespoke build that contradicted the product page they linked to. Oborové nasazení is **„jaká pole přidat"**, never „co dostavět".
3e-3. **Never rename an entity to the obor's vocabulary.** Data models and entity lists on obor pages must use the names the system actually uses — Sales: **Zájemce · Klient · Kontaktní osoba · Obchodní případ · Nabídka · Projekt · Obchodní plán**; Servis: **Klient · Místo · Zařízení · Servisní plán · Zakázka · Výjezd · Výkaz práce**. Not „Revidovaný objekt", „Stroj", „Výtah", „Plán prohlídek / kontrol / úkonů", „Odběratel", „Zákazník", „Poptávka" (all found and fixed 2026-08-04). A renamed entity reads as „tohle nám postaví na míru" — the exact opposite of what we sell — and it contradicts the demo the prospect will be handed. Write the obor word as the *content* of the record instead: „Páteř je **Zařízení** — u vás konkrétní stroj se sériovým číslem". Ordinary prose about the real customer („zákazník volá", „odběratel to nevidí") is fine; the rule covers **záznamy, karty, pohledy a datové modely**. Detail in `zasady-webu.md` 9.
3f. **Twenty's real edge in most obory** is the e-mail and calendar sync on the client card, the AI agent over that data (MCP), and the sales layer — nabídka s nákupní cenou, marže, plán. Lead on those; they are things an ERP or production system will never do.
3g. **Demo access is the site's conversion tool — and no page sends the visitor away.** `components/demo-cta.latte` belongs on every page where the reader has just understood what they get — **once per page**, placed *before* the closing dark CTA (on obor pages, right after `reseni-volba.latte`). Pass `produkt => 'sales'|'servis'` so the copy names what they will actually see. Hard companion rule: **never link a visitor to a free trial account on twenty.com** — that hands a decided prospect an empty instance without everything that differentiates us. twenty.com stays only as source attribution in the footer and on pages that are *about* the open-source core. **Every twenty.com link carries the partner parameter `?via=bohemiacrm` + `rel="sponsored"` (decided 2026-11-19)** — added automatically by `src/middleware.mjs` (`partnerskeOdkazyVHtml()` in `src/lib/site.mjs`); never write it by hand in Markdown/JSON, only `public/llms.txt` has it manually. Not for docs.twenty.com or GitHub. Promised turnaround is **1 pracovní den**, „zdarma, bez závazku a bez kreditní karty" — keep it true.
4. **Decision axis is the process, not the industry.** Obor pages are context + SEO; each ends with `components/reseni-volba.latte` (recommended + alternative). A wholesaler that only wants to run its sales department wants Sales; a montážní firma that only wants to sell wants Sales too.
5. **The only published rozšíření is napojení na fakturaci** (`/napojeni-na-fakturaci/`) — Pohoda, Money, ABRA, iDoklad, Fakturoid, on request. Say **„fakturace", never „účetnictví"** (účetnictví is a much wider topic and we don't do it). **Do not put on the site, not even as "on request":** servis na provozovně/v dílně, mailing, telefonní ústředna, nativní mobilní aplikace, elektronický podpis, přepočet měn kurzem.
6. **Never state user counts as a suitability criterion.** No „pro týmy 5–25 lidí", „od 5 uživatelů", „pro firmy do 50 zaměstnanců". The client decides by price; and when the reason is separate data or a dedicated instance, the solution makes sense at any size. Describe fit by **what the firm does**. *Allowed exception:* the model cost calculations on `/cenik/` and the price break-even on `/cloud-vs-selfhost/` — those are cost math, not a suitability gate.
7. **Never invent legal intervals, standards or authorisations** on servisní obor pages (výtahy, plynová zařízení, elektro/EZS/EPS, chladiva). Write „systém hlídá lhůty, které si nastavíte". We do not interpret regulation, do not assess technicians' qualifications, and do not do the statutory refrigerant records.
8. **New obor pages must be genuinely unique** — own pains, own equipment, own competitors. Five servisní obory side by side is exactly where cloned pages start reading as doorway spam. `hvac` = klimatizace a TČ · `chladici-technika` = průmyslové a obchodní chlazení · `gastro-technika` = kávovary a automaty; cross-link instead of repeating.
9. **Targeting criterion for further obory:** prefer segments where **few user roles** touch the CRM (obchodník, vedoucí, backoffice — not the whole company). Fewer roles → less training, less resistance, shorter decision → the purchase actually goes through.

## Source-of-truth hierarchy for content decisions

`brainstorming/twentycrm-strategie.md` is the **authoritative** strategy. When other docs disagree with it, strategy wins. Always update strategy when a new decision is made — do not let it drift.

Key resolved decisions (do not regress these on the new site):

- Pricing (source of truth is `web/data/pricing.json`): **Selfhost retainer 4 990 Kč/měsíc**, **Cloud retainer 3 990 Kč/měsíc**, one-time deployment **34 990 Kč**. **Identical for both solutions** — no surcharge for a "harder" vertical, no combo package. (`brainstorming/twentycrm-strategie.md` still says 5 000 / 4 000; the JSON wins.)
- **Cloud is mentioned minimally (decided 2026-11-12).** With current Twenty prices (Cloud Pro $9, **Cloud Organization $39** per user/month, yearly billing) nobody beyond a tiny team without AI agents will pick it. Outside `/cloud-vs-selfhost/` cloud gets **one sentence plus a link** („Twenty jde provozovat i v cloudu výrobce … Kdy dává smysl cloud →"), comparison pages keep **one table row** („Od ~200 Kč na uživ./měs (Pro)"), FAQ answers talk about the dedicated server only. Do not compare cloud tiers anywhere else. Legal texts (VOP, GDPR) stay unchanged. Do not confuse Cloud Organization ($39) with the **self-host Organization licence** (exists, price not published) — describe SSO / audit log / row-level as „tarif Organization — v cloudu i jako licence pro vlastní server", never as „jen v cloudu".
- **Verified facts (research 2026-11-12, Twenty v2.57) — the old site got these wrong:** self-host **does** sync Gmail and Microsoft 365 by signing in with the account (OAuth), not just IMAP; **own AI keys (BYOK) work only on self-host** — cloud runs AI on Twenty's credits; Twenty Cloud runs in **AWS Frankfurt**, not the USA; AI agent / AI steps in workflows are generally available since v2.0. Sources and full timeline: `docs/vyzkum/2026-11-12-twenty-schopnosti-a-vydani.md`.
- **Cloud variant has dual billing** — client pays Twenty Inc. directly (USD, $9–39/user/měs) AND us (CZK retainer). This **must be explicitly visible** wherever cloud is mentioned. Never imply Cloud is one-bill — it is not. Selfhost is the one-bill option.
- **Cloud pricing lives only on `/cloud-vs-selfhost/`** (decided 2026-09-03; VOP keeps the price as contract text). Everywhere else — **including `/cenik/`**, FAQ and llms.txt — cloud may only be *mentioned* as the second variant with two invoices, linking to `/cloud-vs-selfhost/`, without quoting the 3 990 Kč retainer. Reason: prospects were choosing cloud because the lower retainer looked cheaper, though with per-user licences it costs more from ~5 users. `/cenik/` sells the dedicated server only; the two retainer cards moved to `/cloud-vs-selfhost/` ("Co obsahuje náš měsíční paušál").
- **Elsewhere, quote only the dedicated-server price** (4 990 Kč/měs). Product pages, obor pages, SLA and SEO landings must not hang a second number on the reader who did not ask for cloud and does not know it exists — it makes the offer read as complicated.
- Retainer is **optional**, not mandatory — do not present it as required.
- Positioning is **vertical-aware**, but the vertical is *context*, not the decision axis — see "Dvě řešení". Real-estate brokers remain explicitly out.
- **Brand emails (revize 2026-06):** Sjednoceno na **`@bohemiacrm.cz`** pro obě značky. Hlavní kontakt na twentycrm.cz webu je **`info@bohemiacrm.cz`**; osobní aliasy `baloun@bohemiacrm.cz`, `rezac@bohemiacrm.cz`. Předchozí plán aliasů na `@twentycrm.cz` (info@, obchod@, podpora@) zrušen — nebyl nikdy zprovozněn, jedna agenturní inbox-doména je provozně jednodušší. Brandová separace probíhá na úrovni webu, dokumentů a fakturace, ne na úrovni e-mailové domény.
- The AGPL-3.0 disclaimer and "not an official Twenty.com representative" notice are **legally required** — preserve on any new site.
- Default deployment recommendation: **Selfhost** (cheaper from ~5 users, aligns with data-ownership positioning, single CZK bill). Cloud is the explicit exception.
- **Customer-facing term for the selfhost variant: "vyhrazený server" (NOT "vlastní server").** „Vlastní server" implies the client (or we) *own* the machine — but we rent it from a hosting provider too, so the claim would be misleading. „Vyhrazený server" honestly says "a server dedicated exclusively to that client" without implying ownership. Applies site-wide incl. nav label ("Vyhrazený server nebo cloud") and the `/cloud-vs-selfhost/` page (slug stays for SEO). Internal docs may still say "selfhost".
- **Naming convention** for ourselves on the website:
   - Hero / primary positioning: **"Český implementátor Twenty CRM"**
   - Long-form: **"Nezávislá česká agentura, která Twenty CRM implementuje a spravuje"**
   - About page: **"Implementační partner pro Twenty CRM"**
   - Footer disclaimer (legal): **"Tato stránka není oficiálním zastoupením Twenty.com (Twenty Inc.)."**
   - ❌ Never use: "Twenty představuje…", "Oficiální Twenty partner", "Twenty.cz", "Reseller Twenty".
- **Oborové podstránky: 14 live** (9 under Twenty Servis, 5 under Twenty Sales) — see "Dvě řešení". Each is hand-written; there is deliberately no data-driven template, because near-identical pages would read as doorway spam.
- **MDA references:** use anonymized, attributed to agency competency (not Twenty product). Place on `/o-nas/`, not on a `/reference/` page (which launches after first Twenty implementations).
- **Visual design principle: low-image / typography-led.** No screenshots of Twenty UI (rot with each release). No team photos in MVP. No raster decoration. Use typography hierarchy, color blocks, simple SVG icons, ASCII/Mermaid diagrams instead. See `design-principy.md`.
- **Logo (delivered 2026-05):** `public/brand/logo.svg`. ~~Monochrome + accent #0066FF~~ — **nahrazeno 2026-11-12:** uživatel zvolil šablonu Payday i s její barevností (fialový gradient, teplé neutrály, akcent #5b4bc4). Písmo zatím Inter (odpovídá nápisu v logu); Payday má Libre Franklin — otevřená volba. The logo prominently uses the "TWENTY CRM" wordmark, so the **footer disclaimer ("not an official Twenty.com representative") must be visually prominent**, not buried in faded gray (`pravni-texty.md` section 4b).
- **Stack (změněno 2026-11-12):** **Astro 7 (statický výstup) + Tailwind 4**, obsah v Markdownu, bez Alpine.js a bez PHP. **Hosting: GitHub Pages** (rozhodnutí uživatele 2026-11-12; dřív Svethostingu.cz). `public/.htaccess` tam neplatí — obsahuje jen přesměrování na HTTPS a na adresu s lomítkem, které GitHub Pages dělá samo. Nevymýšlet k hostingu nic navíc. Od 2026-11-13 běží ostrý web na **https://www.twentycrm.cz/** (vlastní doména v nastavení GitHub Pages, DNS v Cloudflare); každý push do `main` nasadí `npm run build`. Dřívější náhled v podsložce (build:staging + `scripts/docasna-adresa.mjs`) zůstává jen jako možnost — postup v komentáři `.github/workflows/deploy.yml`. **No contact form** — `tel:` a `mailto:` only. Pozor na cache: `npm run build` maže `node_modules/.astro`, jinak by se po změně `pricing.json` nebo pluginu vykreslily staré hodnoty. **Dev server (`npm run dev`) po změně `astro.config.mjs`, `src/lib/markdown/*`, `src/lib/*.mjs` nebo `src/data/*.json` restartovat** — Markdown plugin a data načítá jen při startu, jinak hlásí neexistující chyby („neznámý blok“) nebo ukazuje staré hodnoty. Tiskové stránky z `public/` jsou v dev serveru jen na `/prezentace-hvac/index.html`, po buildu i na `/prezentace-hvac/`.
- **Agency framing on the website:** present as an **experienced agency adding Twenty technology to its portfolio** — not as "we're starting with this." MDA history (bohemiacrm.cz) is the credibility anchor. Avoid phrases like "pravděpodobně první", "zatím rané", "po prvních klientech" — they leak the "we're new" subtext. The client doesn't need to know how many Twenty deployments we've done; they need to know we understand their domain.
- **Legal review:** drafts in `pravni-texty.md` are **published as-is** (no external legal review). Operational adjustments happen as needed when concrete situations arise (e.g., add a new processor, set a specific liability cap before signing a particular client).
- **Do NOT mention n8n on the website.** Twenty's built-in workflow engine (Code, HTTP Request, Schedule, Iterator, Filter, Form, …) covers ARES, Fakturoid, lead scoring, calendar sync and the bulk of automation use cases *inside the CRM*. Naming n8n implies "automations cost extra" or "automations are a separate tool" — both are wrong. The legacy twentycrm.cz site centered automation messaging on n8n; we are deliberately not carrying that forward. (n8n may still be used internally as a fallback for unusual cases, but never positioned to clients.)
- **Position Twenty as a platform, not a one-shot CRM project.** The "platforma, která roste s vámi" message is durable (Twenty's release notes confirm app-framework direction: pre-installed apps infra in v2.1.0, twenty-sdk, `npx twenty deploy`). Frame the deal as a multi-year partnership: Phase 1 = CRM + Field Service; Phase 2+ = adding projects / helpdesk / HR / custom agendas as the same platform grows. This validates the SLA retainer model and differentiates against Raynet (where adding agendas means buying a second software).
- **Content shelf-life rule.** Twenty ships weekly. Date-stamp any factual claim that contains a number, version, or specific feature ("Twenty has 45k stars" → footnote with verification date). Direction-of-travel claims ("Twenty is moving toward an app platform") are durable and don't need dates. Do NOT publish specific roadmap timing ("X in Q2 2026") — Twenty's roadmap shifts and we have no authority to forecast. DO publish observed direction sourced from release notes ("Pre-installed apps infrastructure landed in v2.1.0"). When in doubt, treat the website as something that needs to be re-checked every ~3 months for stale facts.

## Brainstorming docs index

All planning material lives in `brainstorming/`. Each doc has a focused purpose; **do not duplicate content across docs** — link to the canonical one instead.

**Strategy & external context:**
- **`zasady-webu.md` — proč je web takový, jaký je.** 16 zásad, u každé důvod a konkrétní případ, kdy se porušila. Čti před psaním jakéhokoli obsahu. Obsahuje i technické zásady (dvoukrokový build, `[x-cloak]`, čísla z JSON) a seznam otevřených věcí.
- `twentycrm-strategie.md` — strategy & pricing (authoritative). Truthfulness rule, dual-brand context, deployment philosophy.
- `stary-web-souhrn.md` — snapshot of the legacy twentycrm.cz site (fetch 2026-05-06). Reference only; AI bullets explicitly flagged as unverified.
- `konkurence.md` — competitor analysis. Raynet etalon (sourced pricing + features), placeholder for FSM specialists.

**Audience & scope:**
- `persony.md` — target Field Service segments (A1–C2), 4 cross-cutting roles, open validation questions.
- `scope-faze-1.md` — Phase 1 functional scope, mirrored from bohemiacrm.cz/návody/pracovní-procesy. 10-entity data model, 9 process areas.

**Twenty-specific (sourced from official docs):**
- `twenty-capabilities.md` — verified inventory of Twenty features with maturity flags (🟢 GA / 🟡 partial / 🔵 coming-soon / ⚪ undocumented). Source of truth for any feature claim.
- `procesy-mapovani-twenty.md` — gap analysis: each MDA process mapped to Twenty (🟢 native / 🟦 Twenty workflow / 🟡 n8n / 🟠 custom / 🔴 gap).
- `selfhost-vs-cloud.md` — Cloud vs. Self-host comparison, decision framework, price-break-even analysis (~5 users).

**Web content material:**
- `proc-my.md` — value proposition in 3 layers (Twenty / our service / per-role benefits). Locked hero copy. Vocabulary do/don't list.
- `faq.md` — 20+ honest FAQ items grouped A–F. Future-FAQ candidates listed at bottom.
- `entity-prehledy.md` — short value-add overviews for default Twenty entities (Klient, Kontaktní osoba, Obchodní případ). Lean approach: ~250 words each, focus on our additions (ARES, FS extensions, no limits), link to Czech Twenty docs (`/l/cs/...`) for the actual how-to. Deliberately *not* full tutorials.
- `oborove-podstranky.md` — 3 detailed FS segment landings (HVAC, Revize, Stroje). Phase 1 Czech market. Other segments stay backlogged.
- `den-s-twenty.md` — day-in-the-life storytelling for 4 personas (Lenka dispečerka, Pavel technik, Marek majitel, Helena účetní). Sales-driven empathy content for `/jak-to-vypada-v-praxi/`.
- `migrace-do-twenty.md` — migration playbook + page content for Z Raynetu / Z Pipedrive / Z Excelu (high SEO value).
- `kontakt.md` — contact page content + per-context mailto/tel CTA strategy. **Decision: no contact form on the website** (B2B servicing firms in CZ prefer phone/email; visible phone is a trust signal; less code to maintain). Mailto: links carry pre-filled subject + body templates per page so the inquiry is structured. Lead tracking handled via email folders + simple spreadsheet for launch — own Twenty instance is **deferred** (will set up later, alongside first client implementation). Demo to prospects via per-client Twenty Cloud sandbox prototyped before the call.
- `pravni-texty.md` — drafts of GDPR / Cookie / VOP / disclaimer texts. **All drafts require external legal review before publishing.**
- `design-principy.md` — visual & structural rules: low-image, typography-led, SVG icons (Lucide), Mermaid/CSS diagrams, no screenshots, Plausible analytics (no Google).
- `sitemap.md` — proposed structure with 8+ pages mapped to source docs. Includes locked decisions table.

## Working with the brainstorming docs

- Treat them as living planning documents. When the user makes a new decision in conversation, update the relevant `.md` rather than starting a third doc.
- When `proc-my.md` and `twenty-capabilities.md` disagree, **`twenty-capabilities.md` wins** — it is the sourced fact base.
- Hero slogan (změna 2026-11-13): **"Open source CRM. AI pomáhá, vy rozhodujete."** — AI jako pomocník pod kontrolou člověka, ne náhrada lidí ani složitá technika; vlastní AI (Claude, ChatGPT přes MCP) nese podpůrný text hero. Dřívější „I pro vaše AI agenty." ani „Neplaťte za licence, plaťte za výsledky" nepoužívat. Předchozí "Neplaťte za licence, plaťte za výsledky" je obsolete — nepoužívat. Cenový argument (žádné per-user licence) zůstává v podpůrném textu hero a na ceníku.
- Czech-market automation scenarios (ARES/IČO lookup, Fakturoid/iDoklad/Pohoda invoicing) are key differentiators — keep them concrete, not generic.
- **Sitemap.md** is the integration point: every brainstorming insight should map to an actual web section there. If a doc's content has no place in `sitemap.md`, either update sitemap or question whether the content is needed.

## Voice na webu — pro koncové uživatele, ne pro IT

**Web čte jednatel, dispečerka, obchodník, technik. NENÍ to dokumentace pro IT správce.** Tahle persona neumí anglické technické termíny a od webu si je nemá kde dohledat — pokud jim nerozumí, prostě zavřou kartu.

**Hard rule — žádný anglický žargon ani technický termín bez vysvětlení:**
- ❌ backend / frontend / API / REST / GraphQL / SDK / OAuth / SaaS tier / metadata / schema / side-effect / shared cloud tier / browser automation / screen scraping / nurturing fronta / lead scoring / out-of-the-box / coming soon / GA
- ✅ jádro systému / obrazovka / rozhraní pro vývojáře / přihlášení / placený tarif / údaje / datový model / co se stane potom / sdílený výkon cloudu / simulovat kliknutí / seznam k pozdějšímu kontaktu / hodnocení kvality poptávek / rovnou bez nastavování / dnes funguje / připravuje se

**Výjimky** (lze ponechat bez překladu):
- Jména produktů (Twenty, Claude Desktop, ChatGPT, Cursor, Anthropic, OpenAI…).
- Zkratky vysvětlené jednou: BYOK = vaše klíče k AI, MCP = moderní napojení pro AI nástroje. Pak používané samotně.
- Czech-adopted technické slovo: e-mail, chat, dashboard, token, klient (CRM), pipeline.

**Voice je prodejní, ne manuálová** (viz též `proc-my.md` Voice sekce). Místo „klik X otevře okno Y" píš „uživatel vidí…", místo step-by-step návodu „dispečerka v Twenty zadá…".

**I česká slova můžou být špatná, když znějí jako škola, úřad nebo popis naší procedury.** Psát, co zákazník dostane, ne co budeme dělat my. ❌ „výklad", „komentovaná ukázka", „projdeme si to na vašich situacích", „prezentace řešení" → ✅ „ukážeme, jak by to vypadalo u vás", „uvidíte přesně to, co dodáváme". („Výklad" zůstává správně tam, kde jde o výklad předpisů.) Detail a další případy v `zasady-webu.md` 11b.

**Nikdy neshazovat Microsoft Power Platform ani sesterskou bohemiacrm.cz.** Rozdíl popisovat jako **vhodnost pro daného klienta**, ne jako slabinu technologie: ❌ „kde Microsoft přestřelí" → ✅ „kterým Power Platform velikostí ani cenou nesedne". Je to náš vlastní tým a pro velkého klienta je Power Platform pořád správná odpověď. Viz `zasady-webu.md` 11c.

**Stránka /co-umi/ a /agentske-crm/ jsou nejtechničtější** — proto musí být ze srovnání jazyka nejpečlivější. Před commitem každé technické stránky proletět grep na anglické termíny a ověřit, že každý má buď Czech ekvivalent, nebo vysvětlení v textu.
