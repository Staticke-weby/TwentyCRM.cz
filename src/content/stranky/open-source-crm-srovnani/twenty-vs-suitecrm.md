---
title: Twenty CRM vs SuiteCRM — kterou platformu vybrat | TwentyCRM.cz
description: "Srovnání Twenty CRM a SuiteCRM pro českou firmu. Kdy která platforma sedne — moderní vestavěná AI a česká lokalizace (Twenty) vs. roky prověřený CRM s velkou komunitou (SuiteCRM). Upřímný pohled bez marketingu."
pageId: srovnani-twenty-vs-suitecrm
hero:
  stitek: Srovnání dvou open source CRM
  nadpis: Twenty CRM vs SuiteCRM — kterou platformu vybrat
  perex: >-
    Twenty a SuiteCRM jsou populární open source CRM, ale každý sedne jiné firmě. SuiteCRM je veterán
    (od roku 2013, fork SugarCRM Community z roku 2014). Twenty je mnohem mladší moderní platforma
    (od roku 2023) navržená s ohledem na umělou inteligenci a rychlý vývoj.
  text:
    - >-
      Na téhle stránce najdete férové srovnání pro českou firmu — včetně skutečných omezení obou open source verzí
      (na věci, které výrobci nerádi přiznávají).
zaver:
  nadpis: Pomůžeme vám rozhodnout
  text: >-
    30 minut online — projdeme váš obor, procesy a potřeby. Pokud vám SuiteCRM sedne víc než Twenty,
    řekneme to upřímně. Bez závazku, bez kreditní karty.
  poznamky:
    - '[Zpět na hlavní srovnání 5 open source CRM](/open-source-crm-srovnani/)'
---

## Rychlý verdikt — komu která sedne

:::karty{sloupce="2"}

### Vyberte Twenty když:

- Chcete moderní aplikaci, ne software, který vypadá jako z roku 2015
- Vyžadujete plnou českou lokalizaci od výrobce (ne komunitní)
- Potřebujete vestavěnou umělou inteligenci v aplikaci
- Hledáte aktivně vyvíjenou platformu (nové verze každý týden)
- Plánujete stavět vlastní typy záznamů pro váš obor — bez programátora
- Nechcete narážet na zastaralé pluginy z éry SugarCRM 6.5 (2010)
- Hledáte českého implementátora, který se v tom denně pohybuje

### Vyberte SuiteCRM když:

- Chcete CRM s nejdelší historií a největší světovou komunitou (přes 10 let, desetitisíce instalací)
- Máte vlastního IT člověka, který se vyzná v PHP a klasické webové architektuře
- Vyhovuje vám klasické funkcionalisticky-bohaté rozhraní (i za cenu starší optiky)
- Potřebujete vestavěnou agendu, kterou Twenty nemá (servisní cases, lehký inventory)
- AI vestavěná v aplikaci pro vás teď není priorita
- Chcete CRM se samostatnou nativní mobilní aplikací
- Vám stačí komunitní česká lokalizace s občas lehce zaostávající kvalitou

:::

::::sekce{pozadi="svetle"}

## Co opravdu dostanete v open source verzi (a kdy se začíná platit)

Klíčová věc, kterou marketingová komunikace zatemňuje: **open source verze obou systémů má
omezení proti placeným variantám.** Tady je upřímné srovnání.

:::karty{sloupce="2"}

### Twenty — open source na vyhrazeném serveru

Co máte zdarma a co je v placené variantě

#### V open source verzi máte

- Vestavěný AI chat v aplikaci (BYOK — vlastní klíče k Anthropicu, OpenAI, Google, xAI)
- Workflow automatizace (vytváření, úpravy záznamů, e-maily, plánované spuštění)
- MCP server pro propojení s Claude/ChatGPT/Cursor (vy si připojíte svého asistenta)
- Vlastní typy záznamů, polí, pohledů — bez omezení, přímo v nastavení
- Práva a viditelnost na úrovni typů záznamů a polí
- Pokročilé filtrované pohledy („Moje zakázky", „Můj plán na dnešek")
- E-maily a kalendář: Gmail a Microsoft 365 přihlášením účtem, ostatní poskytovatelé přes IMAP/SMTP/CalDAV
- Odesílání e-mailů přímo z workflow přes SMTP (funguje všude)
- Více e-mailových účtů a kalendářů na jednoho uživatele

#### Za příplatek: tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)

- ⚠️ Omezení „vidím jen své záznamy“ (uživatel *nesmí* vidět cizí záznamy — vynucená restrikce)
- ⚠️ Single Sign-On (SSO přes SAML / OIDC)
- ⚠️ Audit log (kdo co kdy upravil)

### SuiteCRM — open source na vyhrazeném serveru

Co máte zdarma a co je v placené variantě / placených modulech

#### V open source verzi máte

- Kontakty, firmy, leady, příležitosti (klasický prodejní cyklus)
- Aktivity (hovory, e-maily, schůzky, úkoly)
- Cases (helpdesk / podpora)
- Lehký inventory (produkty, ceník, quotes, invoices)
- Workflow modul (od verze 7.x — Process Definitions)
- Reports modul
- Custom modules (Module Builder)
- E-mail (POP3/IMAP přes Inbound Email)
- REST API + SOAP API

#### Open source nemá / vyžaduje placené moduly nebo SuiteCRM Hosted

- ⚠️ **AI nemá vůbec v open source verzi** (placené moduly v SuiteCRM Store, např. FynRahbar Chatbot — externí)
- ⚠️ Nativní mobilní aplikace — placená SuiteCRM Mobile licence
- ⚠️ Pokročilé reporty (např. Crystal Reports) — placené nadstavby
- ⚠️ Outlook plugin — placený
- ⚠️ Microsoft 365 / Google Workspace integrace — placené nadstavby
- ⚠️ Pokročilé Kanban / Drag & Drop — placené (např. MTS Kanban v SuiteCRM Store)
- ⚠️ Pokročilé telefonní integrace (VoIP) — placené nadstavby
- ⚠️ SuiteAssured (oficiální podpora a dlouhodobé patche) — placená služba
- ⚠️ SuiteCRM Hosted (managed cloud) — placený, podmínky individuální

**SuiteCRM Hosted i většina pokročilých modulů má placený model** — výrobce ceník
standardně nezveřejňuje, vyžaduje individuální poptávku.

:::

::::

## Specifické riziko SuiteCRM: stárnoucí ekosystém a verze 8 vs 7

U SuiteCRM je nutné vědět dvě věci, které ostatní open source CRM (včetně Twenty) tolik netrápí:

:::poznamka[Verze 7.x vs 8.x — větší změna architektury]{ton="varovani"}

SuiteCRM 8 (vydaná v roce 2022) přinesla zásadní přechod — nové frontendové rozhraní postavené
na moderní technologii (Angular). Architektura backendu se taky změnila. Výrobce explicitně
dokumentuje migrační proces 7.x → 8.x včetně specifických návodů — není to triviální update,
protože: **spousta hotových komunitních modulů z verze 7.x (a starší ze SugarCRM éry)
ve verzi 8 nefunguje bez úprav.**

Pro firmu to znamená: pokud nasadíte SuiteCRM 8 a chcete využít moduly z marketplace, ověřte
si konkrétní kompatibilitu — některé jsou stále jen pro 7.x.

:::

:::poznamka[Stárnoucí komunitní moduly z éry SugarCRM]{ton="varovani"}

SuiteCRM zdědil ekosystém modulů ze SugarCRM Community Edition (2004–2014). Mnoho
modulů, které najdete na fóru nebo v SuiteCRM Store, je **velmi staré
(psané pro PHP 5.6, jQuery z 2012, opuštěné autory)**. Funkční mohou být, ale představují
bezpečnostní a kompatibilní riziko. Aktivně udržované a moderní moduly existují, ale je jich
řádově méně. Před použitím každého modulu doporučujeme ověřit poslední aktualizaci a kompatibilitu
s vaší verzí SuiteCRM.

:::

:::poznamka[Twenty: nemá tenhle problém (ale je to mladý projekt)]{ton="uspech"}

Twenty existuje od 2023 a má jednotnou architekturu od počátku. Žádný „dědictví ze starého CRM",
žádné PHP 5 moduly, žádný plugin marketplace plný opuštěných modulů. To je plus.
Druhá strana: **Twenty je mladý — má řádově méně hotových rozšíření než SuiteCRM.**
Pokud potřebujete obskurní integraci (např. „Salesforce-to-Twenty migrace one-click"), pravděpodobně
ji ještě nikdo neudělal. To řeší naše individuální vývojářská práce, ale je to fakticky více práce
než „stáhnu hotový plugin".

:::

::::sekce{pozadi="svetle"}

## Detailní srovnávací tabulka

Co se konkrétně liší v praxi (open source verze obou systémů, ne placené varianty).

| Co srovnáváme | Twenty (open source) | SuiteCRM (open source) |
|---|---|---|
| **Základ** | | |
| **Stáří projektu** | Mladý (od 2023) | Veterán (od 2013, kořeny v SugarCRM od 2004) |
| **Vzhled aplikace** | Moderní, čistý, vzdušný | Funkční, místy vypadá starší (z roku 2015); SuiteCRM 8 je modernější |
| **Frekvence nových verzí** | Prakticky každý týden | Větší verze párkrát ročně (např. 8.10 v dubnu 2026, 7.15.1) |
| **Česká lokalizace** | Plná, oficiální (udržuje výrobce) | Komunitní (přes SourceForge), kvalita kolísá podle verze |
| **Mobil** | | |
| **Mobilní použití** | Web v prohlížeči mobilu (přidá se na plochu) | Web v prohlížeči mobilu |
| **Nativní mobilní aplikace** | Není | SuiteCRM Mobile — placená licence (ne v open source) |
| **Offline režim** | Ne (vyžaduje internet) | V open source ne; v placené mobilní aplikaci omezeně |
| **Umělá inteligence** | | |
| **AI vestavěná v open source verzi** | AI chat v aplikaci (BYOK), napojení pro externí AI nástroje, AI v automatizacích | Není (jen placené moduly v SuiteCRM Store) |
| **Napojení na Claude / ChatGPT / Cursor / Google** | Vestavěné | Není standardně; jen externí scriptování přes rozhraní |
| **Kdo platí AI tokeny** | Vy přímo poskytovateli (BYOK, žádný markup) | N/A v open source verzi |
| **Customizace a vývoj** | | |
| **Vlastní typy záznamů bez kódu** | Neomezeně, přímo v nastavení | Ano (Module Builder), ale složitější UX |
| **Vlastní pole bez kódu** | Neomezeně | Ano (Studio) |
| **Workflow / automatizace** | Vestavěný moderní workflow engine + AI v krocích | Process Definitions (od 7.x); méně bohatý než moderní workflow |
| **Plánované spuštění (cron)** | Ano (interval i cron expression) | Ano (přes scheduled jobs) |
| **REST / GraphQL API** | REST + GraphQL (moderní) | REST + SOAP (klasické) |
| **Custom React komponenty (extension framework)** | Oficiální Rozšíření Twenty (npx create-twenty-app) | Custom moduly v PHP (klasický přístup) |
| **E-mail a kalendář** | | |
| **Synchronizace osobní pošty (Gmail / M365)** | Přihlášením účtem i na vlastním serveru; jinak IMAP / CalDAV | Inbound Email (POP3/IMAP); plná OAuth ne v open source |
| **Odesílání e-mailů ze systému přes SMTP** | Ano, ve všech variantách | Ano |
| **Více e-mailových účtů na uživatele** | Neomezeně | Ano (více účtů na uživatele) |
| **Bezpečnost a oprávnění** | | |
| **Role na úrovni typů záznamů a polí** | Ano | Ano (Roles, Security Suite) |
| **Row-level (uživatel *nesmí* vidět cizí záznamy)** | Tarif Organization (cloud i vlastní server) | Ano (Security Groups Module) |
| **SSO (SAML / OIDC)** | Tarif Organization (cloud i vlastní server) | Ano (přes moduly, např. SAML SSO) |
| **Audit log** | Tarif Organization (cloud i vlastní server) | Ano (vestavěný audit trail) |
| **Ekosystém a údržba** | | |
| **Marketplace pluginů** | Mladý ekosystém (Twenty Apps) | SuiteCRM Store (rozsáhlý, ale mnoho starších modulů) |
| **Riziko zastaralých pluginů** | Nízké (mladý a uniformní ekosystém) | Vysoké (PHP 5.6 éra, opuštění autoři) |
| **Migrace mezi major verzemi** | Plynulé (týdenní release) | 7.x → 8.x je netriviální (změna architektury) |
| **Český implementátor** | **Ano (TwentyCRM.cz)** | Pár implementátorů, různá kvalita a dostupnost |
| **Cloud (placená varianta)** | | |
| **Cloud cena (od výrobce)** | Od ~200 Kč na uživ./měs (Pro) | SuiteCRM Hosted (cena dle plánu, nezveřejněná) |
| **Co Cloud přidává nad open source** | Hosting a aktualizace od výrobce | Hosting, automatické zálohy, podpora, SuiteAssured (LTS) |

::::

## Skryté náklady — co se občas zapomíná do rozpočtu

Open source software je zdarma, ale nasazení a provoz nikdy ne. Tady je realistický pohled na to,
co se obvykle do rozpočtu zapomíná.

:::karty{sloupce="2"}

### Twenty (open source)

- 💰 Vyhrazený server (cena dle poskytovatele a požadované konfigurace)
- 💰 SSL certifikát — typicky zdarma (Let's Encrypt)
- 💰 AI tokeny u poskytovatele (Anthropic, OpenAI) — dle reálné spotřeby
- 💰 Někdo, kdo se stará o server (vlastní IT člověk nebo paušál implementátorovi)
- 💰 Pokud potřebujete row-level / SSO / audit log → tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)
- 💰 Custom extension (vlastní React komponenta) — individuální cena

### SuiteCRM (open source)

- 💰 Vyhrazený server (cena dle poskytovatele a požadované konfigurace)
- 💰 SSL — zdarma
- 💰 SuiteAssured (oficiální podpora, LTS) — placená služba dle plánu
- 💰 SuiteCRM Mobile licence — placená
- 💰 Pokročilé moduly ze SuiteCRM Store — placené (cena dle modulu)
- 💰 Microsoft 365 / Outlook integrace — placené nadstavby
- 💰 AI moduly (např. FynRahbar Chatbot) — placené
- 💰 PHP vývojář pro vlastní moduly — hodinová sazba dle dodavatele
- 💰 Migrace 7.x → 8.x s úpravou starých modulů — projektová cena

:::

::demo-cta

::::sekce{pozadi="svetle"}

## Nejčastější otázky při rozhodování

### „SuiteCRM je tu déle, není to bezpečnější volba?"

Délka existence není sama o sobě záruka kvality dnes. SuiteCRM má za sebou roky práce
a velkou komunitu — to je plus. Ale architektura SuiteCRM odráží dobu, kdy vznikala.
Twenty má sice méně historie, ale staví v moderních technologiích a má zajištěné financování
(sérii A) — není to víkendový projekt.

### „Kolik z té široké funkcionality SuiteCRM reálně potkám v praxi?"

SuiteCRM open source verze má v základu hodně modulů — kontakty, leady, příležitosti,
accounts, cases, products, quotes, invoices, contracts, projects, calendar, reports.
Většina firem ale využije 5–10 z nich. Twenty má v základu méně, ale jednodušeji nasaditelné
a vlastní typy záznamů přidáte v nastavení podle potřeby. **Klíčová otázka:**
potřebujete „velký balík všeho hned", nebo „jen co používám, a budu si přidávat postupně"?

### „Co když Twenty zanikne?"

Twenty je open source pod AGPL-3.0 — pokud by výrobce skončil, kód je veřejný a dál ho může
spravovat komunita nebo jakýkoli implementátor. Vaše data jsou ve standardní PostgreSQL
databázi a vždy zůstanou vaše. Stejné pravidlo platí pro SuiteCRM — oba projekty vás chrání tím,
že nejste závislí na jediném dodavateli.

### „Lze přejít z SuiteCRM na Twenty (nebo naopak)?"

Ano — oba systémy umějí export i import dat (CSV, JSON, REST API). Migrace mezi nimi není
instantní (datové modely se liší), ale jde to. Pro přechod ze SuiteCRM na Twenty máme
připravený postup — projdeme s vámi datový model, namapujeme pole a postupně přesuneme.

### „SuiteCRM má samostatnou mobilní aplikaci, Twenty ne — je to problém?"

Pokud techniky pošlete na výjezdy do oblastí bez signálu (podzemí, vesnice bez pokrytí),
ano — SuiteCRM Mobile (placená licence!) má lepší šanci fungovat než web. Pro většinu firem
(s pokrytým 4G/5G po ČR) ale rozdíl v praxi nepoznáte. Mobilní web Twenty se chová jako aplikace
(přidá se na plochu telefonu, fotí, kreslí podpis).

### „Co je pravda na tom, že SuiteCRM má staré pluginy?"

Je to pravda — SuiteCRM zdědil ekosystém ze SugarCRM CE (2004–2014). V SuiteCRM Store i komunitních
fórech najdete moduly, které nebyly aktualizovány roky, jsou psané pro PHP 5 a jejich autoři
dávno přestali odpovídat. Před nasazením modulu si vždy ověřte: kdy byl naposledy aktualizovaný,
s jakou verzí SuiteCRM funguje, jestli má aktivního správce. Aktivně udržované moderní moduly
existují, ale je nutné je vybírat opatrně.

::::
