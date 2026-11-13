---
title: Twenty CRM vs Odoo CRM — kterou platformu vybrat | TwentyCRM.cz
description: Srovnání Twenty CRM a Odoo CRM pro českou firmu. Samostatný moderní CRM (Twenty) vs. modul v podnikovém balíku Odoo (CRM + účetnictví + sklady + e-shop). Kdy která dává smysl.
pageId: srovnani-twenty-vs-odoo-crm
overeno: 2026-11-13
zdroje:
  - url: https://www.odoo.com/cs_CZ/pricing
    nazev: Odoo — ceník (One App Free, Standard, Custom)
  - url: https://www.odoo.com/page/editions
    nazev: Odoo — srovnání edic Community a Enterprise
  - url: https://www.odoo.com/page/about-us
    nazev: Odoo — o firmě (50 hlavních aplikací, 28 milionů uživatelů)
  - url: https://www.odoo.com/documentation/19.0/applications/sales/crm/track_leads/lead_scoring.html
    nazev: Odoo — bodování příležitostí v CRM
  - url: https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations.html
    nazev: Odoo — účetní lokalizace (Česká republika)
  - url: https://www.odoo.com/partners/country/czech-republic-55
    nazev: Odoo — partneři v České republice
  - url: https://github.com/odoo/odoo/blob/master/LICENSE
    nazev: Odoo Community — licence LGPL-3.0
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
  - url: https://github.com/twentyhq/twenty/blob/main/LICENSE
    nazev: Twenty — licence (AGPL-3.0)
hero:
  stitek: Srovnání dvou open source CRM
  nadpis: Twenty CRM vs Odoo CRM — kterou platformu vybrat
  perex: >-
    Odoo a Twenty se srovnávají často, ale jsou to velmi odlišné platformy. Odoo je obrovský podnikový
    balík (výrobce uvádí 50 hlavních aplikací — účetnictví, sklady, e-shop, výroba, HR…), ve kterém je CRM
    jen jednou z aplikací. Twenty je samostatný CRM zaměřený na práci s klienty.
  text:
    - >-
      Důležité pro rozhodování: **bezplatná verze Community (open source) má proti placené verzi
      Enterprise podle srovnání výrobce řadu rozdílů** — Studio (úpravy bez programování), mobilní aplikace,
      plné účetnictví, automatizace marketingu, PLM, IoT, pokročilá výroba — to vše jen v placeném
      Enterprise. Tady je férové srovnání pro českou firmu.
zaver:
  nadpis: Pomůžeme vám rozhodnout
  text: >-
    30 minut online — projdeme, jaké systémy už ve firmě máte a co chcete řešit. Pokud Odoo sedne
    víc než Twenty (například protože stavíte podnikový systém od nuly), řekneme to upřímně. Bez závazku.
  poznamky:
    - '[Zpět na hlavní srovnání 5 open source CRM](/open-source-crm-srovnani/)'
---

## Rychlý verdikt — komu která sedne

:::karty{sloupce="2"}

### Vyberte Twenty když:

- Chcete samostatný CRM, ne celý podnikový balík
- Fakturaci, sklady a další systémy už máte řešené (Pohoda, Money, Helios, Fakturoid…)
- Vyžadujete vestavěnou umělou inteligenci v aplikaci
- Chcete platformu navrženou moderně (od roku 2023)
- Potřebujete rychlé nasazení (řád jednotek pracovních dní)
- Vám stačí jednodušší struktura — CRM, který nepřetěžuje

### Vyberte Odoo když:

- Chcete kompletní podnikový balík (CRM + účetnictví + sklady + e-shop + HR + výroba…)
- Stavíte firmu od nuly a chcete jeden systém pro všechno
- Potřebujete řešit i e-commerce (Odoo má integrovaný e-shop)
- Vyhovuje vám klasická struktura modulů a delší proces nasazení
- Máte rozpočet na další aplikace (v cloudu je jedna aplikace zdarma, za další se platí)
- Pokud chcete plnou funkcionalitu, jste ochotni jít rovnou do placeného Enterprise
- Hledáte etablovanou síť partnerů Odoo v ČR

:::

::::sekce{pozadi="svetle"}

## Odoo Community vs Enterprise — co je v open source a co jen v placené verzi

Odoo má dvě edice: Community (open source pod LGPL-3.0, zdarma) a Enterprise (proprietární,
placená). **Tady je přehled podle oficiálního srovnání edic — funkce, které jsou jen
v Enterprise a v Community open source je nemáte.**

:::poznamka[Funkce JEN v placeném Odoo Enterprise (chybí v Community)]{ton="varovani"}

#### Studio (úpravy bez programování)

- ⚠️ **Studio — nástroj pro úpravy bez kódu** (vlastní pole, formuláře, automatizace) — jen v Enterprise
- ⚠️ V Community Edition musí úpravy dělat vývojář v kódu (Python + XML)

#### Mobilní aplikace

- ⚠️ **Mobilní aplikace pro Android a iOS** — jen v Enterprise
- ⚠️ Community má jen web v prohlížeči

#### Účetnictví a finance

- ⚠️ Plné účetnictví (hlavní kniha, párování bankovních výpisů, analytické účetnictví, rozpočty, účetní lokalizace, výkazy) — jen v Enterprise
- ⚠️ Digitalizace přijatých faktur a výdajů (OCR) — jen v Enterprise
- ⚠️ Mzdy (Payroll) — jen v Enterprise
- ⚠️ AI ve fakturaci, Documents, Sign (elektronický podpis) — jen v Enterprise

#### Prodej a marketing

- ⚠️ **Automatizace marketingu (Marketing Automation)** — jen v Enterprise
- ⚠️ Předplatné (Subscriptions), pronájem (Rental) — jen v Enterprise
- ⚠️ Sociální sítě (Social Marketing) — jen v Enterprise

#### Výroba a sklad

- ⚠️ **Pokročilá výroba** (obrazovka pro dílnu, řídicí panel, plánování) — jen v Enterprise
- ⚠️ **PLM (správa životního cyklu výrobku)** — jen v Enterprise
- ⚠️ **IoT (napojení zařízení)** — jen v Enterprise
- ⚠️ Kontrola kvality (Quality) a čárové kódy — jen v Enterprise

#### Služby, HR a procesy

- ⚠️ **Schvalování (Approvals)** — jen v Enterprise
- ⚠️ Helpdesk, servis v terénu (Field Service), plánování, rezervace schůzek — jen v Enterprise
- ⚠️ Hodnocení zaměstnanců (Appraisals) a doporučení (Referrals) — jen v Enterprise
- ⚠️ Telefonie (VoIP), znalostní báze (Knowledge) — jen v Enterprise

#### Hosting a podpora

- ⚠️ **Neomezená podpora**, hosting a přechody na nové verze — jen v Enterprise
- ⚠️ Cloud Odoo Online: jedna aplikace zdarma, další v placeném tarifu; Odoo.sh se platí zvlášť

:::

:::poznamka[Co je v Community Edition (zdarma, open source)]{ton="info"}

Community má hodně modulů, ale s omezeními:

- CRM, Sales, POS
- Website, eCommerce, Blog, Forum, Live Chat, eLearning
- Inventory, Manufacturing (základní), Purchase, Maintenance
- HR moduly (Employees, Recruitment, Time Off, Fleet)
- Project, Timesheet (základní)
- Invoicing (fakturace), Payments, Expenses (bez OCR)
- Email Marketing, SMS Marketing, Events, Surveys
- Discuss, Calendar, To-Do

**Důležité:** Community moduly fungují, ale úpravy jsou „jen pro vývojáře" —
v Enterprise dostanete Studio (úpravy bez kódu) a mobilní aplikaci. Bez nich se Community
hodí hlavně firmám s vlastním Odoo vývojářem.

:::

::::

## Twenty — co dostanete v open source verzi

Pro srovnání — co u Twenty získáte rovnou v open source verzi (na vyhrazeném serveru), bez nutnosti
placené nadstavby.

:::poznamka[Twenty open source obsahuje]{ton="uspech"}

- **AI chat v aplikaci** (s vlastními klíči k AI — za AI platíte přímo poskytovateli)
- **Napojení pro AI nástroje (MCP)** — Claude, ChatGPT nebo Cursor pracují s daty v CRM
- Automatizace (vytváření a úpravy záznamů, plánovaná spuštění, e-maily, AI jako krok)
- Vlastní typy záznamů, polí, pohledů — bez omezení, **bez kódu, přímo v nastavení**
- Práva a viditelnost na úrovni typů záznamů a polí
- E-maily a kalendář: Gmail a Microsoft 365 přihlášením účtem, ostatní poskytovatelé přes IMAP/SMTP/CalDAV
- Více e-mailových účtů na uživatele
- Rozhraní pro napojení dalších systémů (REST i GraphQL) a automatická upozornění jiným systémům (webhooky)
- Vlastní aplikace nad Twenty (rozšíření s vlastními typy záznamů, logikou a obrazovkami)

#### Za příplatek: tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)

- ⚠️ Omezení „vidím jen své záznamy“
- ⚠️ Jednotné přihlášení firemním účtem (SSO přes SAML / OIDC)
- ⚠️ Záznam změn (audit log)
- ⚠️ Pravidla pro kontrolu dat a povinná pole

Klíčové: **přizpůsobení bez kódu** má Twenty v open source verzi (Odoo ho má až
v Enterprise jako Studio). Twenty běží v telefonu ve webovém prohlížeči — stejně jako Odoo Community.

:::

::::sekce{pozadi="svetle"}

## Detailní srovnávací tabulka

Co se konkrétně liší v **open source verzích** obou systémů (Twenty open source vs
Odoo Community Edition).

| Co srovnáváme | Twenty (open source) | Odoo Community |
|---|---|---|
| **Základ** | | |
| **Co to je** | Samostatný CRM | Aplikace v podnikovém balíku Odoo (výrobce uvádí 50 hlavních aplikací) |
| **Stáří projektu** | Mladý (od 2023) | Dlouholetý projekt (výrobce uvádí přes 28 milionů uživatelů) |
| **Velikost a komplexita** | Lehký, rychlé nasazení (jednotky pracovních dní) | Velký balík, délka implementace podle rozsahu aplikací |
| **Open source licence** | AGPL-3.0 (standardní; soubory placených funkcí tarifu Organization mají obchodní licenci) | LGPL-3.0 (Community), Enterprise je proprietární |
| **Česká lokalizace** | Plná, oficiální | Čeština v aplikaci; česká účetní lokalizace v placeném Enterprise |
| **Mobil** | | |
| **Mobilní použití** | Web v prohlížeči mobilu | Web v prohlížeči mobilu |
| **Nativní mobilní aplikace** | Není | **Není v Community** (jen Enterprise) |
| **Přizpůsobení** | | |
| **Vlastní typy záznamů a polí bez kódu** | Ano, neomezeně, přímo v nastavení | **Studio jen v Enterprise** (Community vyžaduje vývojáře) |
| **Vlastní automatizace a přizpůsobení** | V open source, bez kódu | Studio (Enterprise) nebo Python kód (Community) |
| **Umělá inteligence** | | |
| **AI vestavěná v open source verzi** | AI chat v aplikaci, napojení pro AI nástroje (MCP), AI jako krok automatizace | Bodování příležitostí v CRM |
| **Další AI funkce** | V open source verzi (vlastní klíče k AI) | V placené verzi (tarif Custom uvádí AI agenty) |
| **Funkční rozsah** | | |
| **CRM funkce** | Specializované | Základní (jedna z mnoha aplikací) |
| **Účetnictví** | Není — napojení na fakturační program (Pohoda, Money, ABRA, iDoklad, Fakturoid) je [naše rozšíření](/napojeni-na-fakturaci/) | Fakturace v Community; plné účetnictví jen v Enterprise |
| **Sklady** | Není — sklad patří podnikovému systému | Vestavěné (Inventory) |
| **E-shop / e-commerce** | Není | Vestavěný (Website + eCommerce) |
| **Výroba (Manufacturing)** | Není | Základní v Community; pokročilá výroba, PLM a IoT jen v Enterprise |
| **Automatizace marketingu** | Není v základu | **Jen v Enterprise** (hromadné e-maily jsou i v Community) |
| **HR / mzdy** | Není | Základní HR v Community; mzdy jen v Enterprise |
| **Schvalování** | Není v základu | Jen v Enterprise |
| **Cena (placená varianta)** | | |
| **Cena samotného CRM** | Cloud od ~200 Kč na uživatele/měsíc | V cloudu Odoo Online zdarma, pokud je CRM jediná aplikace (bez omezení uživatelů) |
| **Cena s dalšími aplikacemi (cloud)** | N/A | Standard od ~360 Kč (14,90 EUR) na uživatele/měsíc, se Studiem tarif Custom od ~680 Kč (27,90 EUR) |
| **Implementace** | | |
| **Doba nasazení (typicky)** | Jednotky pracovních dní | Podle rozsahu aplikací |
| **Cena nasazení (orientačně)** | {{cena.implementation}} jednorázově (TwentyCRM.cz) | Podle rozsahu aplikací a partnera |
| **Český implementátor** | **Ano (TwentyCRM.cz)** | Ano (Odoo má v ČR síť partnerů) |

Ceny Odoo podle ceníku výrobce k 13. 11. 2026 při roční platbě (při měsíční 18,60 EUR, resp.
33,90 EUR); přepočet na Kč je přibližný (~24,4 Kč za EUR, ~22 Kč za USD; kurz ČNB z 12. 11. 2026).

::::

## Skryté náklady — co se občas zapomíná do rozpočtu

:::karty{sloupce="2"}

### Twenty (open source)

- 💰 Vyhrazený server (cena dle poskytovatele a požadované konfigurace)
- 💰 SSL — zdarma
- 💰 AI tokeny u poskytovatele — dle reálné spotřeby
- 💰 Někdo, kdo se stará o server (nebo paušál implementátorovi)
- 💰 Pokud potřebujete „vidím jen své" / SSO / záznam změn / pravidla pro kontrolu dat → tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)

### Odoo (Community open source)

- 💰 Vyhrazený server (cena dle poskytovatele a konfigurace)
- 💰 SSL — zdarma
- 💰 **Pro úpravy bez kódu (Studio) → placená verze (v cloudu tarif Custom od ~680 Kč/uživ./měs)**
- 💰 **Pro mobilní aplikaci → Enterprise**
- 💰 **Pro automatizaci marketingu, PLM, IoT, pokročilou výrobu → Enterprise**
- 💰 **Pro plné účetnictví / OCR / mzdy → Enterprise**
- 💰 Python vývojář pro vlastní moduly v Community — hodinová sazba dle dodavatele
- 💰 Přechod na novou hlavní verzi Odoo — v Community projektová cena (v Enterprise je v ceně)

:::

V praxi: Odoo Community se nejvíc vyplatí firmám s vlastním Odoo vývojářem. Bez něj
sahá většina firem po placeném Enterprise, které dává největší smysl tehdy, když opravdu
chcete kompletní podnikový balík.

::demo-cta

::::sekce{pozadi="svetle"}

## Nejčastější otázky při rozhodování

### „Odoo má CRM zdarma — proč bych vůbec uvažoval Twenty?"

Odoo má pravidlo: v cloudu Odoo Online je jedna aplikace zdarma (s neomezeným počtem uživatelů),
za další se platí. Pokud opravdu chcete jen CRM (a fakturujete přes Fakturoid, Pohoda nebo iDoklad),
Odoo CRM zdarma se zdá lákavé. **Ale —** jakmile přidáte druhou aplikaci, platí se tarif
Standard od ~360 Kč (14,90 EUR) na uživatele a měsíc za celý balík, s úpravami bez programování
tarif Custom od ~680 Kč. A CRM v Odoo je stavěné jako součást podnikového balíku — AI chat
v aplikaci a napojení pro AI nástroje, které Twenty má v základu, tam v bezplatné verzi nenajdete.

### „Stavíme firmu od nuly — máme jet rovnou Odoo?"

Pokud opravdu plánujete jeden systém na všechno (CRM + účetnictví + sklady + e-shop + HR),
Odoo je rozumná volba. Má za sebou dlouhý vývoj a síť partnerů v ČR. Ale
i tady doporučujeme zvážit, jestli „jeden velký systém" je správný přístup — některé firmy
raději kombinují specializované systémy (Twenty pro CRM, Fakturoid pro fakturaci, Helios
pro sklady), které dělají jednu věc dobře a propojují se. „Jeden systém na všechno" má své
plus i mínus.

### „Odoo Community je zdarma — vystačím si s ní?"

Záleží, co potřebujete. Community má funkční moduly, ale **úpravy „bez kódu"
(nástroj Studio) jsou jen v Enterprise.** Také mobilní aplikace, automatizace marketingu,
plné účetnictví, PLM, IoT, pokročilá výroba, mzdy — to vše jen v Enterprise. Community vyhovuje
firmám s vlastním Odoo vývojářem (Python). Pro běžnou firmu bez IT je Community v praxi
omezená. Twenty má přizpůsobení bez kódu v open source verzi.

### „Odoo je na trhu mnohem déle — Twenty jen od roku 2023. Není to risk?"

Délka existence není sama o sobě záruka kvality. Odoo má za sebou roky vývoje, ale CRM
není jeho hlavní zaměření — je to jedna z mnoha aplikací. Twenty je dělané **specificky
jako CRM**, vývoj je veřejný na GitHubu a nové verze vycházejí prakticky každý týden.
Pokud chcete specializovaný CRM, ne CRM jako jednu z aplikací podnikového balíku, Twenty má
své výhody i navzdory mladšímu věku.

### „Co je vlastně lepší řešení pro typickou českou firmu?"

Záleží, jestli máte (nebo chcete mít) účetnictví, sklady a další agendy v jednom systému.
Pokud ano, a jste ochotni investovat čas do nasazení velkého balíku, Odoo dává smysl. Pokud
chcete jen samostatný moderní CRM s českou podporou a napojením na systémy, které už máte
(ARES, fakturační program), a nepotřebujete řešit zbytek — Twenty je rychlejší a lehčí.

::::
