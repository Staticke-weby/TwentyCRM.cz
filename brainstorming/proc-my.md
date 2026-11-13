# Proč my, proč Twenty — value proposition pro web

> **Účel:** Materiál pro klíčové marketingové sekce (hero, „proč my", „pro koho", benefits per role). Každý feature claim o Twenty je sourced z `twenty-capabilities.md`. Zákaz aspirativních tvrzení (viz `CLAUDE.md`).

---

## Tři vrstvy hodnoty

Web by měl jasně rozlišit:

1. **Co dostane klient od Twenty CRM** (technologie — neutrální fakta)
2. **Co dostane od nás konkrétně** (implementační hodnota — náš diferenciátor)
3. **Co tím získá pro byznys** (benefity v lidské řeči)

Většina českých CRM webů mluví jen v rovině 1 nebo 3. My máme convince v rovině 2 — *„nejsme jen reseller, jsme partner se zkušeností z MDA světa, který vám oborový systém doopravdy postaví."*

---

## Vrstva 1 — Co dostane klient od Twenty (technologie)

Tyto body jsou všechny dohledatelné v oficiálních zdrojích Twenty (viz `twenty-capabilities.md`).

### Modernost (čím se Twenty liší od „starých" CRM)

- **Open-source pod AGPL-3.0** — žádné per-user licenční pasti při růstu týmu, kód si lze kdykoliv stáhnout, forknout, hostovat sami.
- **„The open alternative to Salesforce, designed for AI"** (oficiální tagline z GitHubu).
- **MCP server nativně** — Twenty rozumí Model Context Protocol, takže Claude / ChatGPT / Cursor mohou s vašimi daty pracovat přes standardní rozhraní. Toto Raynet nemá.
- **Vestavěný workflow engine** s `Code` (custom JavaScript) a `HTTP Request` akcemi — automatizace přímo v CRM, žádný samostatný nástroj a žádný doplatek navíc.
- **REST + GraphQL API** out-of-the-box.
- **Postaveno na PostgreSQL + TypeScript + React** — moderní stack, který umí každý vývojář, žádné proprietary jazyky (jako Apex u Salesforce).
- **Aktivní vývoj** — 45 000+ stars na GitHubu, 67 releasů, **týdenní release cadence**, neustálé novinky.

### Platforma, ne jednorázový projekt 🏗️

Twenty není **jen CRM** — je to **platforma, na které postupně stavíte celý systém pro vaši firmu**. Toto není naše vize, ale **doložitelný směr produktu samotného** (z release notes v2.0+):

- **Pre-installed apps infrastructure** (release v2.1.0)
- **twenty-sdk** — oficiální SDK pro vývoj custom aplikací
- **App registration system** s manifestem
- **`npx twenty deploy`** — CLI pro deploy vlastních aplikací (z GitHub README)

**Co to znamená v čase:**

| Fáze | Co spustíme | Sdílí data s |
|---|---|---|
| **Phase 1 (rok 1)** | CRM + Field Service (Klient → Místo → Zařízení → Zakázka) | — |
| **Phase 2** | Přidáme správu **projektů** s vazbou na Klienty a tým | Klienti, Kontakty, Tým |
| **Phase 3** | Přidáme interní **helpdesk / ticketing** | Klienti, Zařízení, Zakázky |
| **Phase 4+** | **HR / nábor**, vlastní agendy dle potřeby firmy | Lidé, role, dokumenty |

> **Hlavní message:** Když přijde čas přidat HR nebo projekty, **nekupujete druhý software**. Rozšíříme stávající Twenty, klient zůstává jeden, e-maily zůstávají propojené, faktury v jednom systému.

**Vs. Raynet a podobní:** v Raynetu pro projekty kupujete druhý nástroj (Asana? Trello?), pro HR třetí (Personio?), pro helpdesk čtvrtý (Freshdesk?). Vzniká silostní mix, kde Klient existuje paralelně ve 4 systémech a synchronizace je ruční. **My to neděláme — vše na jedné platformě se sdíleným datovým modelem.**

> **Bezpečné citace pro web:**
> - „Open-source, AI-ready, and yours to shape" (Twenty.com)
> - „The future of CRM is built, not bought" (Twenty.com)
> - „You don't rent your data warehouse from a vendor who decides the schema" (Twenty.com)

> **NE-bezpečné claims (zatím nepoužívat):** AI agenti, vektorová pole, automatické shrnutí komunikace — jsou na roadmapě / coming soon, ne všechny GA. Před použitím ověřit aktuální docs.

### Vlastnictví dat — *core argument*

- Self-host = data jsou **fyzicky na vašem nebo námi spravovaném serveru v EU**.
- Twenty Cloud = data u Twenty Inc., ale stále **AGPL kód** = můžete kdykoliv migrovat na self-host.
- Žádná závislost na zahraničním vendorovi typu Salesforce.
- Plná kontrola nad zálohami, exportem, smazáním.

> Tento argument je v CZ silný hlavně pro: regulované obory (zdravotnictví, finance, právo), klienty s GDPR-paranoidním IT, klienty kteří mají negativní zkušenost s SaaS lock-inem.

### Role-based přístup — *bonus argument pro Selfhost*

Twenty umí omezit, **které tabulky a pole konkrétní role vidí** (např. technik vidí Zakázky a Zařízení, ne Opportunities a finanční pole). Toto je:

- ✅ **Selfhost: zdarma** jako součást open-source buildu
- ⚠️ **Cloud Pro plan ($9/user): nemá** Roles & Permissions (dle Twenty pricing)
- ✅ **Cloud Organization ($19/user): má**

> **Důsledek pro klienta s rozdělenými rolemi (3+ technici + dispečer + účetní):** Selfhost je **zdarma to, co v Cloudu stojí $19/user/měs**. Pro tým 10 lidí je to úspora ~50 000 Kč ročně jen na licencích.

---

## Vrstva 2 — Co dostane od nás (náš diferenciátor)

**Tady stojí náš pricing 34 990 Kč nasazení a retainery 4 000 / 5 000 Kč.** Bez nás je Twenty „jen software"; s námi je to **fungující oborové řešení**.

### Co konkrétně přidáváme nad rámec Twenty

1. **Oborový datový model na míru Field Service** (Zařízení, Místo, Zakázka, Zakázkový list — Twenty nativně nemá; my postavíme z custom objektů s vazbami)
2. **End-to-end procesní řetězec** Lead → Klient → Případ → Nabídka → Objednávka → Zakázka → Zařízení (auto-vytváření přes Twenty workflows)
3. **ARES integrace** přes Twenty built-in workflow → automatické doplnění CZ firem podle IČO. Bez druhého nástroje.
4. **E-mail sync** s Outlook nebo Gmailem nakonfigurovaný a otestovaný
5. **Generování PDF zakázkového listu** (přes externí PDF službu volanou z Twenty workflow)
6. **Vlastní views per role** — technik vidí jiné než dispečer, dispečer jiné než účetní
7. **Praktické školení uživatelů (až 2 hod)** — ne videa na YouTube, reálná práce s reálnými daty
8. **Dokumentace na míru pro klienta** — psaná pro váš datový model a procesy. Pro obecné Twenty referenční manuály je k dispozici [česká docs.twenty.com](https://docs.twenty.com/l/cs/user-guide/introduction); my dodáme to, co je specifické pro vaši instanci.
9. **Aktivní podpora přes Teams** — odpovídáme v hodinách, ne dnech

### Cenový model — transparentně podle volby

| Volba | Faktur | Komu | Co |
|---|---|---|---|
| **Selfhost** (doporučeno default) | 1 (česká, CZK) | nám | 34 990 Kč setup + 5 000 Kč/měs retainer. Twenty licence neplatí. |
| **Cloud** | **2** | nám + Twenty Inc. | Naše: 34 990 Kč + 4 000 Kč/měs. Twenty: $9–19/user/měs (USD, přímo Twenty.com). |

> **Tuto dualitu komunikujeme od první nabídky.** U Cloudu klient bude platit Twenty Inc. v dolarech kartou nebo bankovním převodem — to je třeba vědět dopředu.

### Proč právě my (důvěryhodnost)

- **Historie z Microsoft Model Driven Apps** (paralelně provozujeme [bohemiacrm.cz](https://www.bohemiacrm.cz)) — přenášíme stejný procesní model, který už dnes dodáváme klientům
- **Field Service je obor, který v MDA reálně dodáváme** — entita Zakázka, servisní historie zařízení, čtyřfázový proces — to není teorie, to je validovaný produkt
- **Specializovaná česká agentura na Twenty CRM** — Twenty je naše druhá platforma vedle Microsoft Power Platform. Soustředíme se na ní cíleně, ne příležitostně.
- **Tým s technickou + procesní + obchodní expertizou** (Baloun, Řezáč, Pitner)

### „Nejsme tvůrci Twenty" — proč to není slabina

- Naše hodnota je v **implementaci a oborovém know-how**, ne ve vývoji softwaru.
- Stejně jako Microsoft partner není Microsoft, ale klientovi dodá fungující řešení.
- Twenty je open-source ekosystém — naše implementace patří klientovi, není závislá na nás existencí.
- Pokud bychom přestali existovat, klient si může převzít provoz nebo najít jiného partnera (open-source = žádný lock-in na nás).

---

## Vrstva 3 — Benefity per role (co konkrétně klient ocení)

Sekce „Pro koho" na webu by měla mluvit přímo k těmto rolím — buď jednou stránkou rozdělenou do 4 sekcí, nebo 4 oddělenými sekcemi.

### 👔 Pro majitele / jednatele (rozhodovatel)

**Co ho trápí:** „Nevím přesně, co se ve firmě děje. Vidím faktury a stížnosti, ale ne pipeline a timing. Bojím se, že utíkají peníze v servisu kde nestihneme reklamace v záruce. A jak budu rozšiřovat firmu, nechci kupovat 5 dalších SW nástrojů které spolu nemluví."

**Co dostane:**
- 🟢 Reálný přehled pipeline (Kanban, dashboardy) — kolik je v jaké fázi, kolik je hodnota
- 🟢 Servisní historie každého zařízení — víte, co kdo kdy dělal, čí je to chyba
- 🟢 Žádné per-user licence při růstu týmu (selfhost) — předvídatelné náklady
- 🟢 Vlastnictví dat — pokud cokoli, exportujete a jdete dál
- 🟢 **Investice s životností** — Twenty není jednorázový SW, ale platforma. Když budete potřebovat HR / projekty / helpdesk, rozšíříme stávající systém, nenakoupíte další silos
- 🟢 Sdílení dat napříč budoucími agendami — Klient je všude stejný, jeden e-mail v inboxu se propojí s relevantními zakázkami i projekty

**Hlavní message:** *„Ovládnete čísla i historii své firmy. A platforma roste s vámi — když budete chtít přidat další oblast, nepřebudováváme od nuly. Nezávisle, dlouhodobě, bez závislosti na zahraničním vendorovi."*

### 📋 Pro koordinátora / dispečera (denní uživatel)

**Co ho trápí:** „Volání, papíry, Excel. Pamatuji si v hlavě, kdo má jaké zařízení, kdy se má dělat revize, kdo je volný. Když jsem nemocná, zastaví se to."

**Co dostane:**
- 🟢 Plán výjezdů s drag-and-drop nebo Kanban (Twenty views)
- 🟢 Auto-připomínky lhůt (workflow s Schedule trigger)
- 🟢 Adresář klientů + kontaktních osob + míst v jednom místě
- 🟢 ARES auto-fill přes IČO — netipovat, neopisovat z webu
- 🟢 Výhled na vytíženost techniků (dashboardy)

**Hlavní message:** *„Konec držení firmy v hlavě. Plánování, lhůty, kontakty na jedno kliknutí — tým si poradí i bez vás."*

### 🔧 Pro technika v terénu

**Co ho trápí:** „Papíry, hledání historie, výkazy večer doma. Klient se ptá, co bylo posledně, a já si musím volat do firmy."

**Co dostane:**
- 🟢 **Mobilní webová aplikace (PWA)** — instalace na home screen telefonu/tabletu, funguje jako nativní app. Potvrzeno (2026-05) že funguje v terénu.
- 🟢 **Vidí jen své tabulky** — díky role-based permissions má technik přístup pouze ke Zakázkám / Zařízením / Místům, ne k finančním datům nebo obchodnímu pipelinu. Buduje to fokus a ochranu citlivých informací.
- 🟢 Servisní historie zařízení s.č. — *„posledně to dělal kolega Jirka, vyměnil tohle, datum X"*
- 🟢 Výkaz práce + materiál v aplikaci, ne na papíře
- 🟢 Foto z místa do záznamu zakázky (přes mobilní fotoaparát v PWA)
- 🟦 Generovaný PDF zakázkový list s podpisem (přes Twenty workflow + externí podpisovou službu)

**Hlavní message:** *„Konec papírů a večerních výkazů. Historie zařízení, materiál, fotky — všechno v telefonu na místě, a vidíte jen to, co se vás týká."*

### 💼 Pro účetní / fakturanta

**Co ji trápí:** „Hledám podklady pro fakturu po telefonu. Ručně přepisuji čas a materiál z papíru do účetního SW. Půlka chyb na fakturách jsou moje překlepy z výkazů."

**Co dostane:**
- 🟢 Přesný výkaz hodin a materiálu na zakázce (technik vyplnil v mobilu)
- 🟦 Auto-výpočet ceny + DPH (Code action ve workflow)
- 🟦 Export podkladu pro fakturu nebo přímé odeslání do Fakturoidu / iDokladu / Pohody (Phase 2 jako rozšíření, Phase 1 = export)
- 🟢 Přehled nezúčtovaných zakázek (filtered view)

**Hlavní message:** *„Podklady pro faktury automaticky z terénu — žádné dohledávání, žádné překlepy."*

---

## Modernita Twenty vs. „klasický" CRM (co lze ocenit)

Cílíme klienty, kteří mají v hlavě „CRM = drahý SaaS jako Salesforce nebo Raynet". Twenty je **jiná generace** a stojí to za vysvětlení.

| Co Twenty má, co Raynet nemá | Co to znamená pro klienta |
|---|---|
| Custom objekty (Zařízení, Místo, Zakázka) | Oborový systém, ne přizpůsobení vašeho byznysu na CRM |
| Workflow engine s Code + HTTP Request | Automatizace přímo v CRM, bez druhého SW |
| MCP server pro Claude/ChatGPT | AI vidí vaše data nativně bez další integrace |
| Open-source + self-host | Žádný lock-in, vlastnictví dat, neomezený růst týmu |
| GraphQL API | Snadné napojení na vaše další systémy |
| Aktivní vývoj (67 releasů) | Produkt který se rozvíjí, ne „jako v 2015" |

> **Ale buďme férové (důvěryhodnost):** Twenty je **mladší produkt** než Raynet. Je menší ekosystém integrací (Raynet má proprietární spojky s ekonomickými systémy). Twenty potřebuje implementačního partnera — tady jsme my. To je fakt, ne chyba.

---

## Hero (✅ locknuto)

**H1:**
> **„Open source CRM. AI pomáhá, vy rozhodujete."** (změna 2026-11-13; dřív „I pro vaše AI agenty.")

**H2 / podtitul:**
> Open-source Twenty CRM v češtině, postavený na míru servisním firmám. Implementujeme, spravujeme, rosteme s vámi.

**Pod-podtitul (volitelné, malé písmo):**
> Český implementátor Twenty CRM. Bez per-user licencí. Data u vás. Platforma, která roste s vaší firmou.

**Důvody pro tuto kombinaci:**
- **Změna 2026-11-13:** „I pro vaše AI agenty" mluvilo k technikům a nebralo obavu, že AI lidi nahradí nebo že to bude složité. Nový slogan říká, kdo má navrch: AI připraví, člověk rozhodne. Že si zákazník připojí vlastní AI (Claude, ChatGPT přes MCP), nese podpůrný text hero.
- Původní zdůvodnění: hlavní slogan stavěl na dvou diferenciátorech, které jsou v roce 2026 v segmentu klíčové: **open-source** (žádné licence, data u vás, selfhost) a **AI agenti přes MCP/BYOK** (vlastní klíče Anthropic/OpenAI, škálovatelný výkon na vyhrazeném serveru). „I pro vaše" naznačuje, že AI si zákazník přivede sám — neprodáváme mu ji.
- Podtitul nese další 3 diferenciátory: čeština / oborové řešení / dlouhodobý vztah.
- Pod-podtitul řeší 3 nejčastější obavy: licence, data ownership, future-proofing.
- Předchozí slogan „Neplaťte za licence, plaťte za výsledky" je obsolete — cenový argument zůstává v podpůrném textu hero a na ceníku.

---

## CTA strategie

**Bez formuláře** (rozhodnuto 2026-05). Klient buď zavolá, nebo napíše e-mail. CTA jsou jednotná napříč webem:

```
[ 📞 Zavolat: +420 605 540 167 ]   [ 📧 Napsat: obchod@twentycrm.cz ]
```

Mailto: link má **pre-filled subject + body** podle stránky, ze které klient přijde — viz `kontakt.md` pro per-page šablony.

**Pravidla:**
- Každá sekce na webu, která něco prodává, má dvojici tlačítek (zavolat / napsat) — žádný redirect na `/kontakt/`.
- Mobile: sticky bottom bar s těmito dvěma tlačítky napříč všemi stránkami kromě `/kontakt/`.
- Hlavní slogan u CTA: **„Konzultace zdarma — 30 minut, bez závazku"** (validovaná formulace ze starého webu, pořád silná).

Zachovat ze starého webu: „Konzultace zdarma" funguje a je validovaná.

---

## Slovník (nepoužívat / používat)

### Nepoužívat (přestřelené, neověřené, generické)
- ❌ „AI-ready architektura" (vágní)
- ❌ „Nekonečná škálovatelnost" (slogan z marketingu, neměřitelné)
- ❌ „Operační systém pro váš byznys" (přehnaná metafora)
- ❌ „Vektorová data připravená pro AI chatboty" (nezdokumentované)
- ❌ „Plně AI-powered" (zatím coming soon)
- ❌ „Twenty bude mít X v Q2 2026" (specifické roadmap timing — měnitelné, riskujeme reputaci)

### Používat (sourced, konkrétní, důvěryhodné)
- ✅ „Open-source pod AGPL-3.0"
- ✅ „Self-host nebo Cloud podle vaší volby"
- ✅ „Custom objekty na míru oboru"
- ✅ „Vestavěný workflow engine s napojením na vaše systémy přes API"
- ✅ „MCP server pro Claude / ChatGPT" (jen pokud chceme zvýraznit AI angle)
- ✅ „Implementační partner s historií Microsoft Power Platform"
- ✅ „Oborové řešení pro servisní firmy, ne generický CRM"
- ✅ **„Platforma, ne projekt — roste s vámi"** (sourced z Twenty release notes, app framework direction)
- ✅ „Pre-installed apps infrastructure už ve v2.1.0" (konkrétní release)
- ✅ „Týdenní release cadence" (sourced z GitHub)
- ✅ „Sledujeme Twenty roadmapu za vás" (naše služba, ne Twenty claim)
