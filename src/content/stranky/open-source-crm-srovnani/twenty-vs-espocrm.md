---
title: Twenty CRM vs EspoCRM — kterou platformu vybrat | TwentyCRM.cz
description: Srovnání Twenty CRM a EspoCRM pro českou firmu. Kdy která platforma sedne — moderní vestavěná AI a oficiální česká lokalizace (Twenty) vs. jednoduchý a vzdušný CRM (EspoCRM). Bez technického žargonu.
pageId: srovnani-twenty-vs-espocrm
hero:
  stitek: Srovnání dvou open source CRM
  nadpis: Twenty CRM vs EspoCRM — kterou platformu vybrat
  perex: >-
    Twenty a EspoCRM se v lecčem podobají — oba jsou open source, oba si můžete provozovat
    na vyhrazeném serveru, oba se zaměřují na malé a střední firmy. Liší se ale v technologii, věku, vestavěné AI
    a hlavně **v rozsahu, co opravdu dostanete v open source verzi vs. co je placená nadstavba.**
  text:
    - >-
      EspoCRM má specifický model: free Community Edition je relativně osekaná, většina pokročilých funkcí
      (workflow, BPM, reporty, telefonie, integrace) je v placených modulech nebo jen v Cloud verzi.
      Tady je férové srovnání pro českou firmu.
zaver:
  nadpis: Pomůžeme vám rozhodnout
  text: >-
    30 minut online — projdeme váš obor a procesy. Pokud vám EspoCRM sedne víc než Twenty, řekneme
    to upřímně. Bez závazku.
  poznamky:
    - '[Zpět na hlavní srovnání 5 open source CRM](/open-source-crm-srovnani/)'
---

## Rychlý verdikt — komu která sedne

:::karty{sloupce="2"}

### Vyberte Twenty když:

- Chcete moderní CRM s vestavěnou umělou inteligencí (chat v aplikaci)
- Chcete plnou českou lokalizaci od výrobce
- Hledáte aktivně vyvíjenou platformu (každý týden nová verze)
- Vyžadujete workflow automatizace v open source verzi (ne jako placený modul)
- Plánujete propojení s AI nástroji (Claude, ChatGPT) pro práci s daty
- Chcete cenově dostupný cloud (od ~200 Kč na uživatele/měsíc)
- Hledáte českého implementátora pro nasazení a podporu

### Vyberte EspoCRM když:

- Chcete přehledný a jednoduchý CRM bez zbytečných funkcí
- Máte vlastního IT člověka, který se vyzná v PHP
- Chcete projekt s několikaletou historií (od ~2014)
- Jste ochotni dokoupit pokročilé funkce jako placené moduly
- AI vestavěná v CRM pro vás teď není priorita
- Chcete CRM se samostatnou nativní mobilní aplikací (placené)
- Vám stačí komunitní česká lokalizace

:::

::::sekce{pozadi="svetle"}

## Co opravdu dostanete v open source verzi (a kdy se začíná platit)

Klíčový rozdíl, který marketingová komunikace zatemňuje: **EspoCRM Community Edition je
relativně osekaná**. Mnoho funkcí, které byste čekali jako standard, jsou placené moduly
nebo dostupné jen v Cloud verzi. Twenty má naopak většinu věcí v open source verzi.

:::karty{sloupce="2"}

### Twenty — open source na vyhrazeném serveru

#### V open source verzi máte

- Vestavěný AI chat v aplikaci (BYOK — vlastní API klíč)
- Workflow automatizace (vytváření, úpravy záznamů, plánovaná spuštění, e-maily)
- MCP server pro propojení s Claude/ChatGPT
- Vlastní typy záznamů, polí, pohledů — bez omezení
- Práva a viditelnost na úrovni typů záznamů a polí
- E-maily a kalendář: Gmail a Microsoft 365 přihlášením účtem, ostatní poskytovatelé přes IMAP/SMTP/CalDAV
- Více e-mailových účtů a kalendářů na uživatele
- Filtrované pohledy a Kanban dashboardy
- REST i GraphQL API + webhook

#### Za příplatek: tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)

- ⚠️ Omezení „vidím jen své záznamy“ (uživatel nesmí vidět cizí záznamy)
- ⚠️ SSO (SAML / OIDC)
- ⚠️ Audit log

### EspoCRM — open source Community Edition

#### V Community Edition máte

- Kontakty, accounts, leady, příležitosti
- Cases (helpdesk), úkoly, hovory, schůzky
- Custom entity manager (vlastní typy záznamů a polí)
- Role-based přístup (object i field level)
- E-mail (IMAP/SMTP)
- REST API
- Český jazyk (komunitní překlad přes POEditor)

#### Community Edition NEMÁ — placené moduly nebo jen Cloud

- ⚠️ **Workflow automatizace — Advanced Pack (placený)**
- ⚠️ **Reporty — Advanced Pack (placený)**
- ⚠️ **Business Process Management (BPMN 2.0) — Advanced Pack (placený)**
- ⚠️ Sales Pack (produkty, ceník, quotes, faktury, sklad) — placený
- ⚠️ Project Management — placený
- ⚠️ Customizovatelné dashboardy s dashlety — jen v Cloud verzi
- ⚠️ Report Charts (vizualizace) — jen v Cloud verzi
- ⚠️ VOIP integrace (Twilio, Asterisk, 3CX, Binotel) — placené
- ⚠️ Google integrace (Calendar, Contacts, Gmail) — placená
- ⚠️ Outlook integrace — placená
- ⚠️ MailChimp integrace — placená
- ⚠️ Stripe integrace — placená
- ⚠️ Zoom integrace — placená
- ⚠️ Meeting Scheduler (online booking) — placený

**Cloud začíná od ~330 Kč na uživatele/měsíc** (Basic, min. 3 uživatele) a obsahuje
**všechny placené moduly v ceně**. Community Edition na vyhrazeném serveru je teoreticky zdarma,
ale jakmile potřebujete workflow nebo reporty, musíte koupit Advanced Pack.

:::

:::poznamka[Co to znamená v praxi]{ton="varovani"}

Pokud jdete s EspoCRM cestou „Community Edition zdarma na vyhrazeném serveru", dostanete **relativně
základní CRM**. Jakmile chcete workflow (automatické e-maily, posuny stavů, validace) nebo
reporty (přehledy, grafy), musíte buď koupit placené moduly, nebo přejít na Cloud. **Twenty má
workflow automatizace, AI a customizace v open source verzi.** Cloud Twenty platíte jen
za pokročilé bezpečnostní funkce (row-level, SSO, audit), ne za základní práci s daty.

:::

::::

## Detailní srovnávací tabulka

Co se konkrétně liší v praxi. Sloupce porovnávají **open source / Community verze**
obou systémů.

| Co srovnáváme | Twenty (open source) | EspoCRM Community |
|---|---|---|
| **Základ** | | |
| **Stáří projektu** | Mladý (od 2023) | ~10 let (od ~2014) |
| **Vzhled aplikace** | Moderní, čistý | Čistý a jednoduchý |
| **Frekvence nových verzí** | Prakticky každý týden | Stabilní, pravidelné větší verze |
| **Česká lokalizace** | Plná, oficiální (udržuje výrobce) | Komunitní (POEditor projekt) |
| **Mobil** | | |
| **Mobilní použití** | Web v prohlížeči mobilu | Web v prohlížeči mobilu |
| **Nativní mobilní aplikace** | Není | Existuje (placená nebo součást Cloud) |
| **Umělá inteligence** | | |
| **AI vestavěná v open source verzi** | AI chat v aplikaci (BYOK), napojení pro externí AI nástroje, AI v automatizacích | Postupně přibývá, ale není to hlavní zaměření |
| **Workflow a automatizace** | | |
| **Workflow automatizace** | V open source verzi, vestavěné | Jen v placeném Advanced Packu nebo Cloudu |
| **Business Process Management (BPMN)** | Není (řešíme přes workflow + extension) | Jen v placeném Advanced Packu |
| **Plánované spuštění (cron)** | Vestavěné | Součást Advanced Packu |
| **Reporty a vizualizace** | | |
| **Pokročilé reporty** | Postupně přibývají; možno propojit na BI | Jen v placeném Advanced Packu |
| **Customizovatelné dashboardy** | Ano (v open source) | Jen v Cloud verzi |
| **Charts / vizualizace** | Ano (v open source) | Jen v Cloud verzi |
| **Integrace** | | |
| **Google Calendar / Gmail** | Přihlášením účtem i na vlastním serveru; jinak IMAP / CalDAV | Jen jako placená integrace nebo v Cloudu |
| **Outlook / Microsoft 365** | Přihlášením účtem i na vlastním serveru; jinak IMAP / CalDAV | Jen jako placená integrace nebo v Cloudu |
| **VOIP / telefonní integrace** | Custom (přes API / webhook) | Placené moduly (Twilio, Asterisk, 3CX, Binotel) |
| **Zapier / Make / 2000+ integrací** | Přes API + Zapier (lze) | Jen v Cloud verzi (zahrnuto) |
| **Stripe / platby** | Custom (přes API) | Placená integrace |
| **Customizace** | | |
| **Vlastní typy záznamů bez kódu** | Neomezeně, přímo v nastavení | Ano (Entity Manager) |
| **Vlastní pole bez kódu** | Neomezeně | Ano |
| **Custom React komponenty (oficiální framework)** | Rozšíření Twenty | Custom moduly v PHP/JS |
| **Bezpečnost** | | |
| **Role na úrovni typů záznamů a polí** | Ano | Ano |
| **Row-level (uživatel nesmí vidět cizí)** | Tarif Organization (cloud i vlastní server) | Ano (Team-based access) |
| **SSO (SAML / OIDC)** | Tarif Organization (cloud i vlastní server) | Ano (LDAP, OAuth, SAML přes moduly) |
| **Cloud (placená varianta)** | | |
| **Cloud cena (od výrobce)** | Od ~200 Kč na uživ./měs (Pro) | Basic ~330 Kč / Enterprise ~550 Kč / Ultimate ~1 540 Kč |
| **Min. počet uživatelů v Cloudu** | Bez minima | Min. 3 (Basic), 5 (Enterprise), 10 (Ultimate) |
| **Český implementátor** | **Ano (TwentyCRM.cz)** | Pár implementátorů, různá kvalita a dostupnost |

::::sekce{pozadi="svetle"}

## Skryté náklady — co se občas zapomíná do rozpočtu

:::karty{sloupce="2"}

### Twenty (open source)

- 💰 Vyhrazený server (cena dle poskytovatele a požadované konfigurace)
- 💰 SSL — zdarma (Let's Encrypt)
- 💰 AI tokeny u poskytovatele — dle reálné spotřeby
- 💰 Někdo, kdo se stará o server (nebo paušál implementátorovi)
- 💰 Pokud potřebujete row-level / SSO / audit log → tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)

### EspoCRM (open source Community)

- 💰 Vyhrazený server (cena dle poskytovatele a požadované konfigurace)
- 💰 SSL — zdarma
- 💰 **Advanced Pack (workflow + reporty + BPM) — placený jednorázově nebo měsíčně**
- 💰 **Sales Pack (faktury, sklad) — placený**
- 💰 **Google / Outlook / Zoom / MailChimp integrace — každá samostatně placená**
- 💰 VOIP integrace — placené moduly (cena dle vybraného)
- 💰 Mobilní aplikace — placená licence
- 💰 PHP vývojář pro custom moduly

:::

V praxi se EspoCRM Community Edition vyplatí firmám, které vystačí s velmi základními funkcemi.
Jakmile chcete workflow nebo reporty, ekonomicky často vyhrává Cloud (kde je to v ceně) nebo
přechod na Twenty (kde je to v open source verzi).

::::

::demo-cta

## Nejčastější otázky při rozhodování

### „EspoCRM Community je zdarma — proč bych vůbec uvažoval Twenty?"

EspoCRM Community je zdarma **jen jako základní kostra**. Workflow automatizace,
reporty, BPM, většina integrací (Google, Outlook, MailChimp, Zoom, Stripe, VOIP) jsou placené
extensiony nebo jen v Cloudu. Pokud máte pokrýt workflow a reporty „zdarma na vyhrazeném
serveru", EspoCRM Community vám to neposkytne — Twenty ano.

### „Jak je to s českou lokalizací?"

Twenty má plnou českou lokalizaci, kterou udržuje sám výrobce. EspoCRM má komunitní překlad
přes platformu POEditor — kvalita je obvykle slušná, ale občas zaostává za nejnovější verzí.
Pro firmu, které česká lokalizace fakt záleží, je Twenty bezpečnější volba.

### „Je EspoCRM Cloud dražší než Twenty Cloud?"

Ano, výrazně. EspoCRM Cloud Basic začíná od ~330 Kč na uživatele za měsíc (a vyžaduje minimum
3 uživatele). Twenty Cloud Pro je od ~200 Kč bez minima. Pro firmu s 10 lidmi je rozdíl
~1 300 Kč měsíčně, za rok ~16 000 Kč. EspoCRM Enterprise je ~550 Kč, Ultimate ~1 540 Kč.

### „Co když chci CRM s vestavěnou samostatnou mobilní aplikací?"

EspoCRM má samostatnou mobilní aplikaci (placená licence při provozu na vyhrazeném serveru, v ceně Cloudu).
Twenty má jen web v prohlížeči (přidaný jako ikona na ploše telefonu). Pro většinu denní
práce je rozdíl minimální. Pokud potřebujete aplikaci, která funguje i bez internetu (offline
režim), ani jeden vám to neposkytne.

### „Lze přejít z EspoCRM na Twenty (nebo naopak)?"

Ano — oba systémy umějí export i import dat. Migrace mezi nimi není instantní (datové modely
se liší), ale jde to. Pro přechod z EspoCRM na Twenty máme připravený postup — projdeme s vámi
datový model, namapujeme pole a postupně přesuneme.
