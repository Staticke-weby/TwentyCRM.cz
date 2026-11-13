---
title: Twenty CRM vs EspoCRM — kterou platformu vybrat | TwentyCRM.cz
description: Srovnání Twenty CRM a EspoCRM pro českou firmu. Kdy která platforma sedne — moderní vestavěná AI a oficiální česká lokalizace (Twenty) vs. jednoduchý a vzdušný CRM (EspoCRM). Bez technického žargonu.
pageId: srovnani-twenty-vs-espocrm
overeno: 2026-11-13
zdroje:
  - url: https://www.espocrm.com/pricing/
    nazev: EspoCRM — ceník cloudu (Basic, Enterprise, Ultimate)
  - url: https://www.espocrm.com/extensions/
    nazev: EspoCRM — placená a bezplatná rozšíření
  - url: https://www.espocrm.com/extensions/intelligence/
    nazev: EspoCRM — rozšíření Intelligence (AI)
  - url: https://www.espocrm.com/extensions/mcp/
    nazev: EspoCRM — rozšíření MCP (zdarma)
  - url: https://www.espocrm.com/features/
    nazev: EspoCRM — přehled funkcí
  - url: https://docs.espocrm.com/administration/roles-management/
    nazev: EspoCRM — role a oprávnění (vše / tým / vlastní, oprávnění k polím)
  - url: https://docs.espocrm.com/administration/oidc/
    nazev: EspoCRM — přihlášení přes OpenID Connect (od verze 7.3)
  - url: https://docs.espocrm.com/user-guide/reports
    nazev: EspoCRM — reporty (součást Advanced Packu)
  - url: https://www.espocrm.com/blog/how-to-use-poeditor-to-translate-espocrm/
    nazev: EspoCRM — překlady přes POEditor
  - url: https://github.com/espocrm/espocrm
    nazev: EspoCRM — zdrojový kód (AGPL-3.0, od roku 2014)
  - url: https://twenty.com/pricing
    nazev: Twenty — ceník cloudu
  - url: https://docs.twenty.com/user-guide/billing/capabilities/pricing-plans
    nazev: Twenty — tarify a co obsahují
  - url: https://docs.twenty.com/user-guide/permissions-access/capabilities/permissions
    nazev: Twenty — role a oprávnění
  - url: https://docs.twenty.com/user-guide/calendar-emails/overview
    nazev: Twenty — e-maily a kalendář
  - url: https://docs.twenty.com/developers/self-host/capabilities/setup
    nazev: Twenty — vlastní server (připojení Gmailu a Microsoft 365)
  - url: https://docs.twenty.com/user-guide/ai/how-tos/ai-faq
    nazev: Twenty — AI FAQ (vlastní klíče jen na vlastním serveru)
  - url: https://docs.twenty.com/user-guide/workflows/capabilities/workflow-actions
    nazev: Twenty — kroky automatizací
hero:
  stitek: Srovnání dvou open source CRM
  nadpis: Twenty CRM vs EspoCRM — kterou platformu vybrat
  perex: >-
    Twenty a EspoCRM se v lecčem podobají — oba jsou open source, oba si můžete provozovat
    na vyhrazeném serveru, oba se zaměřují na malé a střední firmy. Liší se ale v technologii, věku, vestavěné AI
    a hlavně **v rozsahu, co dostanete v bezplatné open source verzi a co je placené rozšíření.**
  text:
    - >-
      EspoCRM má vlastní model: bezplatná verze pokrývá jádro CRM a pokročilé funkce
      (automatizace, reporty, řízení procesů, AI, telefonie, napojení na Google a Outlook) jsou placená
      rozšíření — v cloudu výrobce jsou všechna v ceně. Tady je férové srovnání pro českou firmu.
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
- Vyžadujete automatizace v bezplatné open source verzi (ne jako placené rozšíření)
- Plánujete propojení s AI nástroji (Claude, ChatGPT) pro práci s daty
- Chcete provoz na vyhrazeném serveru bez poplatků za uživatele
- Hledáte českého implementátora pro nasazení a podporu

### Vyberte EspoCRM když:

- Chcete přehledný a jednoduchý CRM bez zbytečných funkcí
- Máte vlastního IT člověka, který se vyzná v PHP
- Chcete projekt s dlouhou historií (od roku 2014)
- Jste ochotni dokoupit pokročilé funkce jako placená rozšíření — nebo jít do cloudu výrobce, kde jsou v ceně
- AI vestavěná v CRM pro vás teď není priorita
- Vám stačí komunitní česká lokalizace

:::

::::sekce{pozadi="svetle"}

## Co dostanete v bezplatné verzi (a kdy se začíná platit)

Klíčový rozdíl při rozhodování: **bezplatná verze EspoCRM pokrývá jádro CRM**, pokročilé
funkce — automatizace, reporty, řízení procesů, AI, napojení na Google a Outlook — jsou placená
rozšíření nebo součást cloudu výrobce. Twenty má většinu těchto věcí přímo v open source verzi.

:::karty{sloupce="2"}

### Twenty — open source na vyhrazeném serveru

#### V open source verzi máte

- Vestavěný AI chat v aplikaci (s vlastními klíči k AI — za AI platíte přímo poskytovateli)
- Automatizace (vytváření a úpravy záznamů, plánovaná spuštění, e-maily, AI jako krok)
- Napojení pro AI nástroje (MCP) — Claude, ChatGPT nebo Cursor pracují s daty v CRM
- Vlastní typy záznamů, polí, pohledů — bez omezení
- Práva a viditelnost na úrovni typů záznamů a polí
- E-maily a kalendář: Gmail a Microsoft 365 přihlášením účtem, ostatní poskytovatelé přes IMAP/SMTP/CalDAV
- Více e-mailových účtů a kalendářů na uživatele
- Filtrované pohledy (tabulka, kanban, kalendář) a dashboardy s grafy
- Rozhraní pro napojení dalších systémů (REST i GraphQL) a automatická upozornění jiným systémům (webhooky)

#### Za příplatek: tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)

- ⚠️ Omezení „vidím jen své záznamy“ (uživatel nesmí vidět cizí záznamy)
- ⚠️ Jednotné přihlášení firemním účtem (SSO přes SAML / OIDC)
- ⚠️ Záznam změn (audit log)
- ⚠️ Pravidla pro kontrolu dat a povinná pole

### EspoCRM — bezplatná open source verze

#### V bezplatné verzi máte

- Kontakty, firmy, poptávky, obchodní případy
- Požadavky zákazníků (helpdesk), úkoly, hovory, schůzky
- Správce vlastních typů záznamů, polí a vazeb
- Role s přístupem na úrovni typů záznamů (vše / tým / vlastní) i jednotlivých polí
- Dashboardy se seznamy záznamů
- E-mail (IMAP/SMTP)
- Přihlášení přes LDAP nebo OpenID Connect (OIDC)
- Rozhraní pro napojení dalších systémů (REST)
- Napojení pro AI nástroje (rozšíření MCP — zdarma)
- Český jazyk (komunitní překlad přes POEditor)

#### Placená rozšíření (v cloudu EspoCRM v ceně)

- ⚠️ **Automatizace (workflows) — Advanced Pack**
- ⚠️ **Reporty a grafy z reportů na dashboardu — Advanced Pack**
- ⚠️ **Řízení procesů podle diagramů (BPMN) — Advanced Pack**
- ⚠️ **AI: shrnutí, psaní e-mailů, AI ve vzorcích — rozšíření Intelligence**
- ⚠️ Sales Pack (produkty, ceníky, nabídky, faktury, nákup, sklad)
- ⚠️ Project Management (projekty, úkoly, Ganttův diagram)
- ⚠️ Telefonie (3CX, Twilio, Asterisk, Starface, Binotel)
- ⚠️ Google (kalendář, kontakty, přihlášení Gmailu)
- ⚠️ Outlook (kalendář, kontakty, přihlášení schránky)
- ⚠️ MailChimp, Stripe, Zoom
- ⚠️ Meeting Scheduler (online rezervace schůzek)

**Cloud EspoCRM začíná na ~310 Kč na uživatele/měsíc** (Basic, 12,90 EUR, min. 3 uživatelé)
a obsahuje **všechna rozšíření v ceně**. Bezplatná verze na vyhrazeném serveru je zdarma,
ale jakmile potřebujete automatizace nebo reporty, je potřeba dokoupit Advanced Pack.

:::

:::poznamka[Co to znamená v praxi]{ton="info"}

Pokud jdete s EspoCRM cestou „bezplatná verze na vyhrazeném serveru", dostanete **solidní
jádro CRM**. Jakmile chcete automatizace (automatické e-maily, posuny stavů) nebo
reporty (přehledy, grafy), dokoupíte placená rozšíření, nebo přejdete do cloudu výrobce.
**Twenty má automatizace, AI a přizpůsobení v open source verzi.** Tarif Organization od Twenty
potřebujete jen na pokročilé zabezpečení (SSO, záznam změn, „vidím jen své") a pravidla pro
kontrolu dat — ne na základní práci s daty.

:::

::::

## Detailní srovnávací tabulka

Co se konkrétně liší v praxi. Sloupce porovnávají **bezplatné open source verze**
obou systémů.

| Co srovnáváme | Twenty (open source) | EspoCRM (bezplatná verze) |
|---|---|---|
| **Základ** | | |
| **Stáří projektu** | Mladý (od 2023) | Přes 10 let (od 2014) |
| **Vzhled aplikace** | Moderní, čistý | Čistý a jednoduchý |
| **Frekvence nových verzí** | Prakticky každý týden | Stabilní, pravidelné větší verze |
| **Česká lokalizace** | Plná, oficiální (přímo v aplikaci od výrobce) | Komunitní (překlady přes POEditor) |
| **Mobil** | | |
| **Mobilní použití** | Web v prohlížeči mobilu | Web v prohlížeči mobilu |
| **Nativní mobilní aplikace** | Není | Oficiální není; existují aplikace od jiných vývojářů |
| **Umělá inteligence** | | |
| **AI vestavěná v open source verzi** | AI chat v aplikaci (vlastní klíče k AI), napojení pro AI nástroje, AI jako krok automatizace | Placené rozšíření Intelligence (OpenAI, Gemini, Claude) |
| **Napojení pro AI nástroje (MCP)** | V základu | Bezplatné rozšíření MCP |
| **Automatizace** | | |
| **Automatizace** | V open source verzi, vestavěné | Placený Advanced Pack (v cloudu v ceně) |
| **Řízení procesů podle diagramů (BPMN)** | Není; procesy se skládají v automatizacích | Placený Advanced Pack |
| **Plánované spuštění** | Vestavěné | Součást Advanced Packu |
| **Reporty a vizualizace** | | |
| **Reporty** | Dashboardy s grafy | Placený Advanced Pack |
| **Dashboardy** | Ano (v open source) | Ano (v základu) |
| **Grafy** | Ano (v open source) | Grafy z reportů s Advanced Packem |
| **Integrace** | | |
| **Google Calendar / Gmail** | Přihlášením účtem i na vlastním serveru; jinak IMAP / CalDAV | Placené rozšíření Google (v cloudu v ceně) |
| **Outlook / Microsoft 365** | Přihlášením účtem i na vlastním serveru; jinak IMAP / CalDAV | Placené rozšíření Outlook (v cloudu v ceně) |
| **Telefonie** | Není v základu | Placené rozšíření (3CX, Twilio, Asterisk, Starface, Binotel) |
| **Napojení na další služby** | Přes rozhraní pro vývojáře (REST, GraphQL) a upozornění jiným systémům (webhooky) | V cloudu výrobce uvádí 2 000+ napojení (vyžadují účty u těch služeb) |
| **Stripe / platby** | Není v základu | Placené rozšíření Stripe |
| **Přizpůsobení** | | |
| **Vlastní typy záznamů bez kódu** | Neomezeně, přímo v nastavení | Ano (správce typů záznamů) |
| **Vlastní pole bez kódu** | Neomezeně | Ano |
| **Vlastní obrazovky a rozšíření** | Vlastní aplikace nad Twenty (oficiální nástroje výrobce) | Vlastní moduly v PHP/JS |
| **Bezpečnost** | | |
| **Role na úrovni typů záznamů a polí** | Ano | Ano |
| **„Vidím jen své záznamy“** | Tarif Organization (cloud i vlastní server) | Ano (úrovně vše / tým / vlastní) |
| **Jednotné přihlášení (SSO)** | Tarif Organization (cloud i vlastní server) | LDAP a OpenID Connect v základu |
| **Cloud (placená varianta)** | | |
| **Cloud cena (od výrobce)** | Od ~200 Kč na uživ./měs (Pro) | Basic ~310 Kč (12,90 EUR) / Enterprise ~540 Kč (22 EUR) / Ultimate ~1 440 Kč (59 EUR) |
| **Min. počet uživatelů v cloudu** | — | Min. 3 (Basic), 5 (Enterprise), 10 (Ultimate) |
| **Český implementátor** | **Ano (TwentyCRM.cz)** | Podle dostupnosti partnera |

Ceny podle ceníků výrobců k 13. 11. 2026, na uživatele a měsíc; přepočet na Kč je přibližný
(~22 Kč za USD, ~24,4 Kč za EUR; kurz ČNB z 12. 11. 2026). EspoCRM účtuje cloud Basic a Enterprise na 6 nebo 12 měsíců.

::::sekce{pozadi="svetle"}

## Skryté náklady — co se občas zapomíná do rozpočtu

:::karty{sloupce="2"}

### Twenty (open source)

- 💰 Vyhrazený server (cena dle poskytovatele a požadované konfigurace)
- 💰 SSL — zdarma (Let's Encrypt)
- 💰 AI tokeny u poskytovatele — dle reálné spotřeby
- 💰 Někdo, kdo se stará o server (nebo paušál implementátorovi)
- 💰 Pokud potřebujete „vidím jen své" / SSO / záznam změn / pravidla pro kontrolu dat → tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)

### EspoCRM (bezplatná verze)

- 💰 Vyhrazený server (cena dle poskytovatele a požadované konfigurace)
- 💰 SSL — zdarma
- 💰 **Advanced Pack (automatizace + reporty + řízení procesů) — placené rozšíření**
- 💰 **Intelligence (AI funkce) — placené rozšíření, k tomu AI tokeny u poskytovatele**
- 💰 **Sales Pack (nabídky, faktury, sklad) — placené rozšíření**
- 💰 **Google / Outlook / Zoom / MailChimp — každé samostatné placené rozšíření**
- 💰 Telefonie — placené rozšíření
- 💰 PHP vývojář pro vlastní moduly

:::

V praxi se bezplatná verze EspoCRM vyplatí firmám, které vystačí s jádrem CRM.
Jakmile chcete automatizace nebo reporty, ekonomicky často vyhrává cloud EspoCRM (kde je to v ceně),
nebo Twenty (kde je to v open source verzi).

::::

::demo-cta

## Nejčastější otázky při rozhodování

### „EspoCRM je zdarma — proč bych vůbec uvažoval Twenty?"

Bezplatná verze EspoCRM pokrývá **jádro CRM**. Automatizace, reporty, řízení procesů,
AI a většina napojení (Google, Outlook, MailChimp, Zoom, Stripe, telefonie) jsou placená
rozšíření nebo součást cloudu výrobce. Pokud chcete mít automatizace a reporty „zdarma na vyhrazeném
serveru", bezplatná verze EspoCRM je neobsahuje — Twenty ano.

### „Jak je to s českou lokalizací?"

Twenty má plnou českou lokalizaci přímo v aplikaci od výrobce. EspoCRM má komunitní překlad
přes platformu POEditor — kvalita je obvykle slušná, ale občas zaostává za nejnovější verzí.
Pro firmu, které česká lokalizace fakt záleží, je Twenty bezpečnější volba.

### „Kolik stojí cloud EspoCRM?"

Podle ceníku výrobce (13. 11. 2026) Basic ~310 Kč (12,90 EUR) na uživatele a měsíc s minimem
3 uživatelů, Enterprise ~540 Kč (22 EUR) s minimem 5 a Ultimate ~1 440 Kč (59 EUR) s minimem 10;
Basic a Enterprise se platí na 6 nebo 12 měsíců. Všechna rozšíření jsou v ceně. Jak u Twenty
vychází vyhrazený server proti cloudu, najdete v [srovnání vyhrazeného serveru a cloudu](/cloud-vs-selfhost/).

### „Co když chci CRM se samostatnou mobilní aplikací?"

EspoCRM oficiální mobilní aplikaci nemá — existují aplikace od jiných vývojářů, které se
k EspoCRM připojí. Twenty běží ve webovém prohlížeči telefonu (přidaný jako ikona na ploše),
stejně jako většina srovnatelných systémů. Pro denní práci je to obvykle vše, co je potřeba.

### „Lze přejít z EspoCRM na Twenty (nebo naopak)?"

Ano — oba systémy umějí export i import dat. Migrace mezi nimi není instantní (datové modely
se liší), ale jde to. Pro přechod z EspoCRM na Twenty máme připravený postup — projdeme s vámi
datový model, namapujeme pole a postupně přesuneme.
