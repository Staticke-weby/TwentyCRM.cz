# Sitemap nového webu — návrh struktury

> **Účel:** Návrh struktury nového twentycrm.cz, který drží linii Raynetu jako etalonu (validovaný UX pro CZ SMB trh) a zároveň reflektuje **náš diferenciátor** (oborové řešení, vlastnictví dat, transparentní cena).
>
> **Vstupy:**
> - `konkurence.md` (Raynet sitemap, „co převzít / nepřevzít")
> - `proc-my.md` (3 vrstvy hodnoty, 4 persony)
> - `twenty-capabilities.md` (co je dohledatelné = co lze publikovat)
> - `selfhost-vs-cloud.md` (samostatná sekce na webu)
> - `procesy-mapovani-twenty.md` (Phase 1 scope)
> - `faq.md`
> - `persony.md` (Field Service, ne makléři)
> - `scope-faze-1.md` (datový model + procesy)
>
> **Princip:** každá sekce na webu musí mít explicitní zdroj v některém z brainstorming dokumentů. Žádný nový obsah „z hlavy" bez dohledatelného podkladu.

---

## Hlavní navigace (top menu)

Struktura držící Raynet etalon, redukovaná o věci, které pro nás Phase 1 zatím nejsou (kariéra, blog v plném rozsahu).

```
[Logo Twenty CRM] | Co Twenty umí | Pro koho | Cloud nebo Selfhost? | Cena | Otázky | O nás | [CTA: Konzultace zdarma]
```

| Položka menu | URL | Status | Zdrojové dokumenty |
|---|---|---|---|
| Homepage | `/` | povinné | proc-my.md (hero), všechny ostatní (sumáře sekcí) |
| Co Twenty umí | `/co-umi/` | povinné | twenty-capabilities.md, scope-faze-1.md, entity-prehledy.md |
| Pro koho (Field Service) | `/pro-servisni-firmy/` | povinné | persony.md, scope-faze-1.md |
| ↳ HVAC / klimatizace | `/pro-servisni-firmy/hvac/` | Phase 1 | oborove-podstranky.md sekce 1 |
| ↳ Revizní technici | `/pro-servisni-firmy/revize/` | Phase 1 | oborove-podstranky.md sekce 2 |
| ↳ Servis výrobních strojů | `/pro-servisni-firmy/stroje/` | Phase 1 | oborove-podstranky.md sekce 3 |
| Jak to vypadá v praxi | `/jak-to-vypada-v-praxi/` | povinné (sales) | den-s-twenty.md (4 persony stories) |
| Migrace ze stávajícího CRM | `/migrace/` | povinné (SEO) | migrace-do-twenty.md rozcestník |
| ↳ Z Raynetu | `/migrace-z-raynetu/` | Phase 1 (SEO klíčový) | migrace-do-twenty.md sekce 1 |
| ↳ Z Pipedrive | `/migrace-z-pipedrive/` | Phase 1 | migrace-do-twenty.md sekce 2 |
| ↳ Z Excelu | `/migrace-z-excelu/` | Phase 1 | migrace-do-twenty.md sekce 3 |
| Cloud nebo Selfhost? | `/cloud-vs-selfhost/` | povinné | selfhost-vs-cloud.md |
| Cena | `/cenik/` | povinné | twentycrm-strategie.md, selfhost-vs-cloud.md |
| SLA balíčky | `/sla-balicky/` | povinné (cross-ref VOP) | stary-web-souhrn.md sekce SLA |
| Otázky | `/otazky/` | povinné | faq.md |
| Bezpečnost a GDPR | `/bezpecnost/` | povinné (trust) | bezpecnost.md |
| O nás | `/o-nas/` | povinné | proc-my.md (vrstva 2), strategie.md |
| Kontakt | `/kontakt/` | povinné | kontakt.md |

**Právní stránky (footer link, povinné):**
| Položka | URL | Zdroj |
|---|---|---|
| Zásady zpracování OÚ | `/zasady-zpracovani-osobnich-udaju/` | pravni-texty.md sekce 3 |
| Cookie policy | `/cookies/` | pravni-texty.md sekce 2 |
| Obchodní podmínky | `/obchodni-podminky/` | pravni-texty.md sekce 4 |

**Volitelné v hlavním menu (zvážit po launch):**
- `Twenty vs Raynet` (`/twenty-vs-raynet/`) — komparativní landing podle SEO traffic
- `Blog / Návody` — content marketing až jako Phase 2

**Top menu na mobilu:**
- Hamburger menu (kompletní seznam výše)
- Sticky bottom CTA: „📞 Zavolat" / „📧 Napsat" (viz `kontakt.md`). **Žádný formulář na webu — bez výjimky.**

---

## Stav rozhodnutí

| Rozhodnutí | Stav | Detail |
|---|---|---|
| Hero slogan | ✅ Locked (2026-11-13) | „Open source CRM. AI pomáhá, vy rozhodujete." |
| Brandové e-maily | ✅ Locked | `@twentycrm.cz` aliasy (info@, obchod@, podpora@, osobní) |
| Phase 1 oborové segmenty | ✅ Locked | HVAC, Revize, Stroje |
| MDA reference použití | ✅ Locked | Anonymizovaně, atribuce na agenturu, na `/o-nas/` |
| Default deployment doporučení | ✅ Locked | Selfhost (Cloud výjimka) |
| Naming agentury | ✅ Locked | Český implementátor + variace per kontext |
| Visual design přístup | ✅ Locked | Low-image, typo-led (viz `design-principy.md`) |
| Web stack | ⏳ Otevřené | Diskutuje se zvenčí; doporučení = statický generator (Astro/Hugo/11ty) |
| Logo + brand identity | ⏳ Otevřené | Klient dodá logo, brand vyplyne |

---

## Detailní obsah každé stránky

### 🏠 Homepage `/`

Cíl: do 5 sekund klient ví, **co prodáváme, komu, a co tím získá**. Pak progresivní disclosure.

| # | Sekce | Obsah | Zdroj |
|---|---|---|---|
| 1 | **Hero** | H1: „Open source CRM. AI pomáhá, vy rozhodujete." H2: „Open-source Twenty CRM v češtině — oborové řešení pro servisní firmy do 50 lidí." [CTA: Konzultace zdarma] [CTA2: Co Twenty umí →] | proc-my.md, Linka C |
| 2 | **3 hlavní bolesti** (kterou Twenty řeší) | Krátká visualizace: „Konec papírů a Excelu", „Servisní historie zařízení v jednom místě", „Bez per-user licencí" | proc-my.md vrstva 3 |
| 2b | **Platforma, ne jednorázový SW** | Vizuální timeline: Phase 1 CRM+FS → Phase 2 projekty → Phase 3 helpdesk → Phase 4 HR. „Když porostete, Twenty poroste s vámi — bez druhého softwaru." | proc-my.md vrstva 1, twenty-capabilities.md sekce 9 |
| 3 | **Pro koho** (rychlý pohled) | 4 persony karty: Majitel / Dispečer / Technik / Účetní — co každý získá. Link „Pro koho podrobně →" | proc-my.md vrstva 3 |
| 4 | **Co dostanete od nás** | 3 sloupce: Datový model na míru oboru / Twenty workflow napojené na vaše systémy / Provoz a sledování verzí | proc-my.md vrstva 2 |
| 5 | **Twenty vs. Raynet** (mini srovnání) | Tabulka 5 řádků s nejvíc tvrdými diferenciátory + link na detail | konkurence.md |
| 6 | **Cloud nebo Selfhost** (rozhodovací) | Stručná verze: 2 boxy s 3 body, link na detail | selfhost-vs-cloud.md |
| 7 | **Cenový bod zlomu** | „Od 5 uživatelů Selfhost ušetří desítky tisíc ročně oproti Raynetu." Konkrétní kalkulace 20 lidí. | konkurence.md, selfhost-vs-cloud.md |
| 8 | **Naše příběh** (microsekce) | „Zkušenosti z Microsoft Power Platform na bohemiacrm.cz, Twenty bereme jako agentnější a lehčí variantu pro menší firmy." | strategie.md |
| 9 | **FAQ teaser** | 4 nejčastější otázky + link „Všechny otázky →" | faq.md |
| 10 | **Final CTA** | „Konzultace zdarma — 30 minut, žádný závazek" + dvojice tlačítek `tel:` a `mailto:` | proc-my.md CTA, kontakt.md |
| 11 | **Footer** | Disclaimer AGPL-3.0, Twenty není naše značka, fakturační údaje, kontakt, sesterský brand bohemiacrm.cz | strategie.md |

---

### 🛠 Co Twenty umí `/co-umi/`

Cíl: poctivý funkční rozsah. **Toto je kritická stránka** — sem půjde každý, kdo si chce ověřit naše claimy z hero.

| Sekce | Obsah | Zdroj |
|---|---|---|
| **Úvod + bezpečné citace** | „The open alternative to Salesforce, designed for AI" — co to znamená v lidské řeči | twenty-capabilities.md sekce „Oficiální positioning" |
| **Datový model** | 5 standardních + neomezené custom objekty. Příklad: jak vypadá Field Service datový model (Klient → Místo → Zařízení → Zakázka). Diagram. | twenty-capabilities.md sekce 1, scope-faze-1.md tabulka |
| **Klient (Companies + People)** | Krátký box: k čemu je, ARES auto-fill, žádné limity, B2B/B2C. Link na Twenty docs pro detail. | entity-prehledy.md sekce 1 |
| **Kontaktní osoba** | Krátký box: auto-link e-mailů, vazba na Místo (FS rozšíření), časová osa, role-based viditelnost. | entity-prehledy.md sekce 2 |
| **Obchodní případ** | Krátký box: vazba na Nabídku/Objednávku/Zakázku (custom), auto-vytvoření z kvalifikovaného Leadu, Kanban. | entity-prehledy.md sekce 3 |
| **Role-based přístup** | Technik vidí jen Zakázky/Zařízení/Místa, ne finanční data. **Selfhost zdarma, Cloud na Organization plánu.** | twenty-capabilities.md sekce 6, selfhost-vs-cloud.md |
| **Mobile / PWA** | Twenty PWA — instalace na home screen prohlížeče, fotky, formuláře. Funguje v terénu. Není nativní iOS/Android. | twenty-capabilities.md sekce 10 (Mobilní app), faq.md E1 |
| **Workflows / automatizace** | Triggery + Akce (s Code a HTTP Request). Příklad: „Po dokončení zakázky → vytvoř fakturu ve Fakturoidu" | twenty-capabilities.md sekce 2 |
| **E-mail a kalendář** | Gmail + Outlook nativně, polling 5 minut, omezení (jen People/Companies — postavíme custom workflow pro vazbu na Zakázku). **Přílohy: postupně.** | twenty-capabilities.md sekce 3 |
| **AI a MCP** | Co je dnes GA (MCP server pro Claude/ChatGPT) vs. co je na roadmapě. **Bez aspirativních claimů.** | twenty-capabilities.md sekce 4 |
| **Layout, views, dashboards** | Custom views per role, sdílení v týmu | twenty-capabilities.md sekce 5 |
| **API + integrace** | REST + GraphQL, webhooks, MCP, ARES (custom), Outlook/Gmail | twenty-capabilities.md sekce 7 |
| **Twenty jako platforma** | App framework infrastruktura (pre-installed apps od v2.1.0, twenty-sdk, npx twenty deploy). „Co můžeme přidat v dalších fázích." | twenty-capabilities.md sekce 9, proc-my.md platforma sekce |
| **Aktivní vývoj** | Týdenní release cadence, 67 releasů, jak sledujeme za vás | twenty-capabilities.md sekce 9 |
| **Co Twenty NEMÁ** (transparentní sekce) | Mobilní native app, pokročilá fakturace, sklad — co řešíme jak | twenty-capabilities.md sekce 10 |
| **CTA**: Chcete vidět konkrétní use case? | Link na Pro koho | — |

---

### 👥 Pro koho `/pro-servisni-firmy/`

Cíl: klient se v této stránce **musí poznat**. „Ano, přesně to potřebujeme."

| Sekce | Obsah | Zdroj |
|---|---|---|
| **Hero**: „Pro servisní firmy které vyjíždí k zákazníkům" | Field Service explicitně. „Ne pro realitní makléře." | persony.md |
| **Typické obory které řešíme** | Karty: HVAC / klimatizace / tepelná čerpadla, Revizní technici (elektro/plyn/výtahy), Servis výrobních strojů, IT onsite servis, Bezpečnostní systémy, Servis kancelářské techniky | persony.md sekce „Kandidátní segmenty" |
| **Datový model pro Field Service** | Diagram: Klient → Místo → Zařízení (s.č., model) → Zakázka (technik, termín, materiál, podpis) | scope-faze-1.md |
| **9 procesů které máme zvládnuté** | Karty s ikonami: Klienti, Leady, Příležitosti, Nabídky, Zakázky, Produkty, Místa, Zařízení, Vlastní zobrazení | scope-faze-1.md |
| **Pro každou roli ve firmě** | 4 sekce: Majitel / Dispečer / Technik / Účetní — bolest + co dostane | proc-my.md vrstva 3 |
| **„Jeden den s Twenty"** | Krátký storytelling 1 dne dispečerky / technika (vytvoříme po validaci s reálným klientem) | persony.md role tabulka |
| **Co je v Phase 1 a co Phase 2** | Transparentní: 95% MDA scope se přenese, mobilní app a pokročilá fakturace = Phase 2 | procesy-mapovani-twenty.md sekce 5 |
| **CTA**: Sedí to vašemu byznysu? | Konzultace zdarma | — |

---

### ☁️ Cloud nebo Selfhost? `/cloud-vs-selfhost/`

Cíl: ne ztratit klienty, kteří se rozhodují podle této osy. Pomoct rozhodnout.

| Sekce | Obsah | Zdroj |
|---|---|---|
| **Krátká odpověď** | Tabulka „klient potřebuje X → doporučujeme Y" | selfhost-vs-cloud.md |
| **3 hlavní rozdíly v lidské řeči** | Vlastnictví dat / Cena s růstem / Setup čas | selfhost-vs-cloud.md |
| **Detailní srovnání** | Plná tabulka | selfhost-vs-cloud.md |
| **Cenový bod zlomu** | Od 5 uživatelů Selfhost vyhrává — graf nebo příklad | selfhost-vs-cloud.md sekce „Cenový bod zlomu" |
| **Cenový kalkulátor** (volitelné) | Slider „kolik máme uživatelů" → orientační měsíční náklad | — (nový custom widget) |
| **Slabosti každé varianty** | Otevřeně — buduje důvěru | selfhost-vs-cloud.md sekce „Slabší stránky" |
| **CTA**: Nevíte? Doporučíme | Konzultace zdarma | — |

---

### 💰 Cena `/cenik/`

Cíl: transparentní cena na první pohled (Raynet to dělá dobře). Ne hide-the-ball.

| Sekce | Obsah | Zdroj |
|---|---|---|
| **Princip ceny** | „Bez per-user licence (selfhost) nebo s ní (Cloud) — vy si vyberete." | strategie.md cenová politika |
| **Implementace 34 990 Kč** | Co všechno zahrnuje (rozepsaný seznam). První měsíc Selfhost provozu zdarma. | strategie.md |
| **Provoz Cloud — DVĚ FAKTURY** | Vizuální karty: (1) naše: 4 000 Kč/měs retainer; (2) Twenty Inc.: $9–19/user/měs licence. **Toto musí být explicitně viditelné** — ne schované. | strategie.md, selfhost-vs-cloud.md |
| **Provoz Selfhost — JEDNA FAKTURA** | 5 000 Kč/měs jen u nás (Twenty licence neplatí — open-source), neomezený počet uživatelů | strategie.md, selfhost-vs-cloud.md |
| **Doplňky** | Performance PLUS, DataStorage PLUS, Backup PLUS | stary-web-souhrn.md |
| **SLA balíčky** | Tabulka Basic / Standard / Professional / Premium s bonusy | stary-web-souhrn.md |
| **Kalkulátor / příklad** | „20 lidí na Selfhostu = 5 000 Kč/měs" + srovnání s Raynetem | konkurence.md |
| **Hodinová sazba** | 2 000 Kč/h | stary-web-souhrn.md |
| **CTA**: Cenovou nabídku na míru | mailto: link s pre-filled subject „Cenová nabídka Twenty CRM" | kontakt.md |

---

### ❓ Otázky `/otazky/`

| Sekce | Obsah | Zdroj |
|---|---|---|
| **Filtry kategorií** | O Twenty / Cena / Bezpečnost / Implementace / Funkce / Migrace | faq.md sekce A–F |
| **20 otázek** s odpověďmi | Plný obsah | faq.md |
| **Vyhledávač** (volitelné) | Pro velké FAQ | — |
| **CTA**: Nevidíte vaši otázku? | mailto: link „Mám otázku k Twenty CRM" | kontakt.md |

---

### 🏢 O nás `/o-nas/`

| Sekce | Obsah | Zdroj |
|---|---|---|
| **Naše příběh** | „Začali jsme MDA na Power Platform (bohemiacrm.cz), Twenty je naší cestou pro klienty kde je MDA overkill." | strategie.md |
| **Tým** | Petr Baloun, David Řezáč, Jakub Pitner — krátké profily, fotky, role | stary-web-souhrn.md, strategie.md |
| **Sesterský brand** | Vztah k bohemiacrm.cz transparentně | strategie.md |
| **Kontakt + fakturace** | ESHOpino s.r.o., adresa, IČO/DIČ | stary-web-souhrn.md |
| **Disclaimer** | „Nejsme tvůrci Twenty, jsme nezávislá implementační agentura. Twenty je AGPL-3.0." | strategie.md, CLAUDE.md |

---

### 📞 Kontakt `/kontakt/`

| Sekce | Obsah | Zdroj |
|---|---|---|
| **Hlavní kontakt** | E-mail, telefon, hodiny podpory | stary-web-souhrn.md |
| **Kontakty týmu** | Per role (Baloun / Řezáč / Pitner). **Otevřená otázka:** `@twentycrm.cz` vs. `@bohemiacrm.cz` — viz strategie | strategie.md vztah k brandu |
| **Hlavní CTA blok** | Dvě velká tlačítka: „📞 Zavolat: +420 605 540 167" + „📧 Napsat: obchod@twentycrm.cz". Bez formuláře. | kontakt.md |
| **Co se stane potom** | Numbered list expectations: do 1 hod potvrzení, do 1 prac. dne návrh schůzky, 30 min online, bez závazku | kontakt.md |
| **Mapa** + sídlo | Praha 3, Roháčova 145/14 | stary-web-souhrn.md |

---

## Sekce, které VĚDOMĚ zatím nemáme

| Sekce | Důvod | Kdy zařadit |
|---|---|---|
| **Reference / Případové studie** stránka | Spustíme až bude obsah dostatečně bohatý | Anonymizované case studies + citace klientů (souhlas vždy předem) |
| **Blog / Návody** | Vyžaduje pravidelnou produkci obsahu | Phase 2 jako SEO content marketing |
| **Webinare / Školení** | Stejné jako blog | Phase 2 |
| **Marketplace integrací** | Nemáme katalog hotových integrací | Phase 2, až bude 5+ ověřených integrací |
| **Dedicated stránka pro každý FS segment** (HVAC, IT servis, …) | Potřebujeme nejdřív validovat segmenty s reálnými leady | Po validaci A1–A3 z `persony.md` |
| **Pricing kalkulátor** widget | Hezký na to mít, ale ne MVP | Po launch, až je provoz |

---

## Footer (na všech stránkách)

```
─────────────────────────────────────────────
twentycrm.cz | ESHOpino s.r.o. | IČO 03223485

🛠 Co Twenty umí    👥 Pro koho    ☁️ Cloud nebo Selfhost?
💰 Cena             ❓ Otázky      🏢 O nás
                    📞 Kontakt

Sesterský brand: bohemiacrm.cz (Microsoft Power Platform)

Twenty CRM je open-source pod AGPL-3.0. Tato stránka NENÍ
oficiálním zastoupením Twenty.com — jsme nezávislá agentura.
─────────────────────────────────────────────
```

---

## Pořadí prací (pokud bychom šli stavět zítra)

1. **Homepage** — hero + 3 bolesti + pro koho karty + final CTA. MVP může být i jen tato stránka.
2. **Cena** + **Cloud vs Selfhost** — odbloku nákupní rozhodnutí, je to jedna z nejhledanějších věcí.
3. **Otázky (FAQ)** — odbloku obavy.
4. **Co Twenty umí** — pro klienty kteří chtějí ověřit hloubku.
5. **Pro koho** — pro klienty kteří se chtějí poznat v segmentu.
6. **O nás** + **Kontakt** — minimum důvěryhodnosti.

Po launchi přidáváme Reference (jakmile bude dostatek case studies), Blog/Návody (SEO), další oborové segmenty.
