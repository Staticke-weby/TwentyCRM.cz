---
title: Twenty CRM vs Odoo CRM — kterou platformu vybrat | TwentyCRM.cz
description: Srovnání Twenty CRM a Odoo CRM pro českou firmu. Samostatný moderní CRM (Twenty) vs. modul v podnikovém balíku Odoo (CRM + účetnictví + sklady + e-shop). Kdy která dává smysl.
pageId: srovnani-twenty-vs-odoo-crm
hero:
  stitek: Srovnání dvou open source CRM
  nadpis: Twenty CRM vs Odoo CRM — kterou platformu vybrat
  perex: >-
    Odoo a Twenty se srovnávají často, ale jsou to velmi odlišné platformy. Odoo je obrovský podnikový
    balík s 30+ moduly (účetnictví, sklady, e-shop, výroba, HR…), ve kterém je CRM jen jedním z modulů.
    Twenty je samostatný CRM zaměřený na práci s klienty.
  text:
    - >-
      Důležité, co marketing Odoo zatemňuje: **Community Edition (open source) má proti Enterprise
      verzi výrazná omezení** — Studio (low-code customizer), mobilní aplikace, marketing
      automation, PLM, IoT, advanced manufacturing, řada finančních funkcí — to vše jen v placeném
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
- Účetnictví, sklady a další systémy už máte řešené (Pohoda, Money, Helios, Fakturoid…)
- Vyžadujete vestavěnou umělou inteligenci v aplikaci
- Chcete platformu navrženou moderně (od roku 2023)
- Potřebujete rychlé nasazení (řád jednotek pracovních dní, ne měsíce)
- Hledáte transparentní cenu (otevřená cenová politika)
- Vám stačí jednodušší struktura — CRM, který nepřetěžuje

### Vyberte Odoo když:

- Chcete kompletní podnikový balík (CRM + účetnictví + sklady + e-shop + HR + výroba…)
- Stavíte firmu od nuly a chcete jeden systém pro všechno
- Potřebujete řešit i e-commerce (Odoo má integrovaný e-shop)
- Vyhovuje vám klasická struktura modulů a delší proces nasazení
- Máte rozpočet na licence dalších modulů (CRM modul je zdarma, ostatní se platí)
- Pokud chcete plnou funkcionalitu, jste ochotni jít rovnou do placeného Enterprise
- Hledáte etablovaný český Odoo ekosystém (silný)

:::

::::sekce{pozadi="svetle"}

## Odoo Community vs Enterprise — co je v open source vs jen v placené verzi

Odoo má dvě edice: Community (open source pod LGPL-3.0, zdarma) a Enterprise (proprietární,
placená). Marketing tlačí Enterprise. **Tady je oficiální seznam funkcí, které jsou jen
v Enterprise a v Community open source je nemáte.**

:::poznamka[Funkce JEN v placeném Odoo Enterprise (chybí v Community)]{ton="varovani"}

#### Studio (low-code customizer)

- ⚠️ **Studio — nástroj pro úpravy bez kódu** (custom fields, formuláře, workflow) — jen v Enterprise
- ⚠️ V Community Edition musí customizace dělat vývojář v kódu (Python + XML)

#### Mobilní aplikace

- ⚠️ **Native mobilní aplikace pro Android a iOS** — jen v Enterprise
- ⚠️ Community má jen mobilní web v prohlížeči

#### Účetnictví a finance

- ⚠️ Pokročilé účetnictví (multi-currency, multi-company features) — jen v Enterprise
- ⚠️ Bank reconciliation — jen v Enterprise
- ⚠️ Expense OCR (digitalizace dokladů) — jen v Enterprise
- ⚠️ Payroll (mzdy) s OCR a integrací — jen v Enterprise

#### Marketing

- ⚠️ **Marketing Automation** — jen v Enterprise
- ⚠️ Pokročilé e-mail kampaně — jen v Enterprise

#### Výroba

- ⚠️ **Advanced Manufacturing** (shopfloor view, control panel, scheduling) — jen v Enterprise
- ⚠️ **PLM (Product Lifecycle Management)** — jen v Enterprise
- ⚠️ **IoT capabilities** — jen v Enterprise
- ⚠️ MRP II + advanced quality control — jen v Enterprise

#### Procesy

- ⚠️ **Approvals workflow** — jen v Enterprise
- ⚠️ Pokročilé HR features (Performance, Skills development) — Enterprise
- ⚠️ Subscriptions advanced features — Enterprise

#### Hosting a podpora

- ⚠️ **Profesionální podpora** a oficiální upgrady mezi major verzemi — jen Enterprise
- ⚠️ Hostované služby (Odoo SaaS, Odoo.sh) — placené

:::

:::poznamka[Co je v Community Edition (zdarma, open source)]{ton="info"}

Community má hodně modulů, ale s omezeními:

- CRM, Sales, POS, Subscriptions (základní)
- Website, eCommerce, Blog
- Inventory, Manufacturing (základní), Purchase
- HR moduly (Employees, Recruitment, Time Off, Appraisals)
- Project, Timesheet, Field Service (základní)
- Accounting / Invoicing / Expenses (základ — bez OCR a pokročilých funkcí)
- Discuss, Calendar, To-Do

**Důležité:** Community moduly fungují, ale customizace je „jen pro vývojáře" —
v Enterprise dostanete Studio (úpravy bez kódu) a mobilní aplikaci. Bez nich je Community
spíše pro firmy s vlastním Odoo vývojářem.

:::

::::

## Twenty — co dostanete v open source verzi

Pro srovnání — co u Twenty získáte rovnou v open source verzi (na vyhrazeném serveru), bez nutnosti
placené nadstavby.

:::poznamka[Twenty open source obsahuje]{ton="uspech"}

- **AI chat v aplikaci** (BYOK — vlastní API klíč)
- **MCP server** pro propojení s Claude / ChatGPT / Cursor
- Workflow automatizace (vytváření, úpravy, plánovaná spuštění, e-maily)
- Vlastní typy záznamů, polí, pohledů — bez omezení, **bez kódu, přímo v nastavení**
- Práva a viditelnost na úrovni typů záznamů a polí
- E-maily a kalendář: Gmail a Microsoft 365 přihlášením účtem, ostatní poskytovatelé přes IMAP/SMTP/CalDAV
- Více e-mailových účtů na uživatele
- REST i GraphQL API + webhook
- Custom React komponenty (rozšíření Twenty)

#### Za příplatek: tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)

- ⚠️ Omezení „vidím jen své záznamy“
- ⚠️ SSO (SAML / OIDC)
- ⚠️ Audit log
- ⚠️ Nativní mobilní aplikace (Twenty má jen web v telefonu — stejné jako Odoo Community)

Klíčové: **customizace bez kódu** má Twenty v open source verzi (Odoo to má až
v Enterprise jako Studio).

:::

::::sekce{pozadi="svetle"}

## Detailní srovnávací tabulka

Co se konkrétně liší v **open source verzích** obou systémů (Twenty open source vs
Odoo Community Edition).

| Co srovnáváme | Twenty (open source) | Odoo Community |
|---|---|---|
| **Základ** | | |
| **Co to je** | Samostatný CRM | Modul v podnikovém balíku Odoo (30+ modulů celkem) |
| **Stáří projektu** | Mladý (od 2023) | 20 let (Odoo, dříve TinyERP, od 2005) |
| **Velikost a komplexita** | Lehký, rychlé nasazení (jednotky pracovních dní) | Velký balík, často delší implementace (měsíce) |
| **Open source licence** | AGPL-3.0 (standardní) | LGPL-3.0 (Community), Enterprise je proprietární |
| **Česká lokalizace** | Plná, oficiální | Plná, oficiální (silný český Odoo ekosystém) |
| **Mobil** | | |
| **Mobilní použití** | Web v prohlížeči mobilu | Web v prohlížeči mobilu |
| **Nativní mobilní aplikace** | Není | **Není v Community** (jen Enterprise) |
| **Customizace** | | |
| **Vlastní typy záznamů a polí bez kódu** | Ano, neomezeně, přímo v nastavení | **Studio jen v Enterprise** (Community vyžaduje vývojáře) |
| **Custom workflow / přizpůsobení** | V open source, bez kódu | Studio (Enterprise) nebo Python kód (Community) |
| **Umělá inteligence** | | |
| **AI vestavěná v open source verzi** | AI chat v aplikaci, MCP server, AI v workflow | AI lead scoring (základní) |
| **Napojení na externí AI (Claude, ChatGPT)** | Vestavěné (MCP) | Custom (přes API / Python) |
| **Funkční rozsah** | | |
| **CRM funkce** | Specializované | Základní (jeden z mnoha modulů) |
| **Účetnictví** | Není (propojení s Fakturoid, Pohoda, iDoklad) | Základní v Community; pokročilé jen v Enterprise |
| **Sklady / inventory** | Není (lze custom) | Vestavěné (Inventory modul) |
| **E-shop / e-commerce** | Není | Vestavěný (Website + eCommerce) |
| **Výroba (Manufacturing)** | Není (lze custom typy) | Základní v Community; pokročilá MRP/PLM/IoT jen v Enterprise |
| **Marketing automation** | Custom (přes workflow) | **Jen v Enterprise** |
| **HR / Payroll** | Není | Základní HR v Community; Payroll s OCR jen v Enterprise |
| **Approvals workflow** | Custom (přes workflow) | Jen v Enterprise |
| **Cena (placená varianta)** | | |
| **Cena samotného CRM** | Cloud od ~200 Kč na uživatele/měsíc | CRM modul je zdarma (jako jediný modul v Online verzi) |
| **Cena s dalšími moduly (Online)** | N/A | Od ~530 Kč na uživatele/měsíc nahoru |
| **Implementace** | | |
| **Doba nasazení (typicky)** | Jednotky pracovních dní | Měsíce (kompletní podnikový balík) |
| **Cena nasazení (orientačně)** | {{cena.implementation}} jednorázově (TwentyCRM.cz) | 100 000–500 000+ Kč (závisí na rozsahu modulů) |
| **Český implementátor** | **Ano (TwentyCRM.cz)** | Ano (silný český Odoo ekosystém) |

::::

## Skryté náklady — co se občas zapomíná do rozpočtu

:::karty{sloupce="2"}

### Twenty (open source)

- 💰 Vyhrazený server (cena dle poskytovatele a požadované konfigurace)
- 💰 SSL — zdarma
- 💰 AI tokeny u poskytovatele — dle reálné spotřeby
- 💰 Někdo, kdo se stará o server (nebo paušál implementátorovi)
- 💰 Pokud potřebujete row-level / SSO / audit log → tarif Organization od Twenty (v cloudu i jako licence pro vlastní server)

### Odoo (Community open source)

- 💰 Vyhrazený server — Odoo je náročný, vyžaduje silnější infrastrukturu (cena dle poskytovatele a konfigurace)
- 💰 SSL — zdarma
- 💰 **Pro customizace bez kódu → Enterprise (~870+ Kč/uživ./měs)**
- 💰 **Pro mobilní aplikaci → Enterprise**
- 💰 **Pro Marketing Automation, PLM, IoT, advanced manufacturing → Enterprise**
- 💰 **Pro pokročilé účetnictví / OCR / Payroll → Enterprise**
- 💰 Python vývojář pro vlastní moduly v Community — hodinová sazba dle dodavatele
- 💰 Migrace mezi Odoo verzemi (každý rok nová) — projektová cena

:::

V praxi: Odoo Community se vyplatí jen firmám s vlastním Odoo vývojářem. Bez něj je Community
„pro vývojáře, ne pro byznys uživatele". Většina firem proto skončí na placeném Enterprise
(~870+ Kč/uživ./měs), které se ale vyplatí teprve tehdy, když opravdu chcete kompletní podnikový balík.

::demo-cta

::::sekce{pozadi="svetle"}

## Nejčastější otázky při rozhodování

### „Odoo má CRM zdarma — proč bych vůbec uvažoval Twenty?"

Odoo má pravidlo: jeden modul zdarma v Online verzi, ostatní placené. Pokud opravdu chcete
jen CRM (a fakturujete přes Fakturoid, Pohoda nebo iDoklad), Odoo CRM zdarma se zdá lákavé.
**Ale —** jakmile přidáte druhý modul, začíná se platit ~530 Kč na uživatele
za měsíc za celý balík. A samotný CRM modul Odoo je dělaný jako součást ERP — nemá moderní
funkce (vestavěná AI, MCP, custom React komponenty), které Twenty má v základu.

### „Stavíme firmu od nuly — máme jet rovnou Odoo?"

Pokud opravdu plánujete jeden systém na všechno (CRM + účetnictví + sklady + e-shop + HR),
Odoo je rozumná volba. Má za tím 20 let vývoje a silný český ekosystém implementátorů. Ale
i tady doporučujeme zvážit, jestli „jeden velký systém" je správný přístup — některé firmy
raději kombinují specializované systémy (Twenty pro CRM, Fakturoid pro fakturaci, Helios
pro sklady), které dělají jednu věc dobře a propojují se. „Jeden systém na všechno" má své
plus i mínus.

### „Odoo Community je zdarma — vystačím si s ní?"

Záleží, co potřebujete. Community má funkční moduly, ale **customizace „bez kódu"
(nástroj Studio) je jen v Enterprise.** Také mobilní aplikace, Marketing Automation,
PLM, IoT, advanced manufacturing, payroll s OCR — to vše jen v Enterprise. Community vyhovuje
firmám s vlastním Odoo vývojářem (Python). Pro běžnou firmu bez IT je Community v praxi
omezená. Twenty má customizace bez kódu v open source verzi.

### „Odoo CRM modul má 20 let zkušeností — Twenty jen 3 roky. Není to risk?"

Délka existence není sama o sobě záruka kvality. Odoo má za sebou roky vývoje, ale CRM modul
není jeho hlavní fokus — je to jeden z mnoha modulů. Twenty je dělané **specificky
jako CRM** a má za sebou financování (sérii A) i jasné pozicování. Pokud chcete
specializovaný CRM, ne CRM jako vedlejší modul ERP, Twenty má své výhody i navzdory mladšímu
věku.

### „Co je vlastně lepší řešení pro typickou českou firmu?"

Záleží, jestli máte (nebo chcete mít) účetnictví, sklady a další agendy v jednom systému.
Pokud ano, a jste ochotni investovat čas do nasazení velkého balíku, Odoo dává smysl. Pokud
chcete jen samostatný moderní CRM s českou podporou a integracemi (ARES, Fakturoid)
a nepotřebujete řešit zbytek — Twenty je rychlejší a lehčí. V praxi vidíme, že firmy do 50
lidí často volí samostatné nástroje raději než velký balík.

::::
