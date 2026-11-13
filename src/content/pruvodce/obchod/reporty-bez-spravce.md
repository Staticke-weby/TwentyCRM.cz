---
title: Přehledy a grafy bez správce systému — dashboard vám postaví AI
description: Od verze 2.20 stačí v Twenty říct AI, co chcete vidět, a ta sestaví nebo upraví dashboard či filtrovaný pohled. Co dashboardy v Twenty umí, co se v nich podle dokumentace připravuje a které přehledy jsou hotové v Twenty Sales.
vMenu: Reporty bez správce
poradi: 4
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [obchod, reporty, ai]
funkce: [ai-dashboardy, dashboardy, pohledy, ai-chat, import-export]
zdroje: [twenty-vydani, docs-ai-chat, twenty-dashboards-overview, twenty-capabilities-dashboards, twenty-capabilities-widgets, twenty-how-tos-dashboards-faq]
---

**Od verze 2.20 (10. 7. 2026) stačí v AI chatu Twenty napsat, co chcete vidět, a AI sestaví nebo
upraví dashboard či filtrovaný pohled z dat ve vašem CRM.** Vedoucí si tak přehled udělá sám,
bez správce systému a bez čekání, až na to někdo bude mít čas.

Dashboard v Twenty je společný pro celý tým a čísla na něm se mění, jak se mění data. Na rychlou
otázku typu *„kolik obchodů jsme minulý měsíc vyhráli"* nemusíte stavět graf vůbec — AI chat
odpoví rovnou.

## Co vám to umožní

- **Vedoucí obchodu si přehled řekne, ne zadá.** *„Vyhrané obchody po měsících za letošek
  a rozpracované nabídky podle obchodníka"* — a dashboard je na obrazovce.
- **Obchodník má svůj pracovní seznam.** Pohled filtrovaný na jeho obchody seřazené podle termínu
  si nechá připravit stejně.
- **Jedna verze čísel pro všechny.** Dashboard vidí každý, kdo pracuje v Twenty, a ukazuje aktuální
  data — žádné exporty do Excelu, které se rozejdou.
- **Rychlá odpověď bez grafu.** Celková hodnota rozpracovaných obchodů, počet uzavřených za měsíc,
  ve které fázi obchody nejčastěji uvíznou — zeptáte se v chatu.

## Jak to v Twenty funguje

**Dashboard** má záložky a na každé záložce dlaždice. Twenty nabízí:

- **grafy** — sloupcový, koláčový a spojnicový;
- **velké číslo** pro klíčový ukazatel, s poměrem mezi hodnotami pole a s vlastní předponou
  nebo příponou (Kč, %);
- **tabulku a nástěnku záznamů** — třeba obchody, které se mají uzavřít tento měsíc; když to
  povolíte, dají se záznamy upravovat přímo z dashboardu, podle oprávnění uživatele;
- **vloženou stránku** jiného nástroje a **text** s vysvětlivkami.

Dlaždice jde přesouvat, zvětšovat a duplikovat; celý dashboard i záložku také. Oblíbené dashboardy
si každý označí hvězdičkou pro sebe.

**Pohledy** jsou filtrované seznamy záznamů — tabulka, nástěnka podle fáze, kalendář nebo seznam.
Z nich obchodník pracuje každý den.

**AI.** V AI chatu popíšete, co chcete vidět, a AI dashboard nebo pohled postaví, případně
upraví existující. Pracuje s vašimi oprávněními a s daty, která v Twenty opravdu máte.

**Co se připravuje.** Dokumentace výrobce uvádí jako připravované:

- filtry pro celý dashboard najednou — dnes se filtruje u každé dlaždice zvlášť;
- pevné časové pásmo pro dashboard — dnes se data zobrazují podle pásma toho, kdo se dívá;
- budíkové grafy;
- export dashboardu. Data z jednotlivých typů záznamů vyexportovat jde už dnes.

Podrobnosti najdete v [dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/dashboards/overview).

**Co je hotové v Twenty Sales.** V [Twenty Sales](/pro-obchodni-tymy/), naší nadstavbě nad
open-source Twenty, nekoukáte první den na prázdnou obrazovku. Šest přehledů s grafy — zdraví
obchodů; nabídky, marže a péče o klienty; plán, tržby a prohry — je hotových, zvlášť pro koruny
a zvlášť pro eura. K tomu sada pohledů jako Po termínu, Po splatnosti, Bez vlastníka nebo
K dotažení. Smíte si je přejmenovat, přefiltrovat i smazat, a co chybí, dopovíte AI.

:::poznamka[Ilustrační příklad]{ton="info"}

Jednatel firmy, která prodává obráběcí stroje do dílen, chce před poradou vidět, jak si stojí
obchod. V AI chatu napíše: *„Udělej mi dashboard Porada: vyhrané obchody po měsících za letošek,
rozpracované nabídky podle obchodníka a důvody proher v korunách."* AI ho sestaví na jedné záložce.

Jednatel ještě požádá, aby u nabídek byla vidět jen ta s hodnotou nad půl milionu, a dashboard
si dá do oblíbených. Na poradě se všichni dívají na totéž — a když se během týdne obchod pohne,
dashboard to ukáže sám.

:::

## Co je k tomu potřeba

- **Twenty od verze 2.20.** Na vyhrazeném serveru aktualizace nasazujeme v rámci měsíčního paušálu.
- **AI model** — na vyhrazeném serveru přes vaše vlastní klíče k AI, platíte přímo poskytovateli
  podle spotřeby. Samotné dashboardy a pohledy AI nepotřebují; AI je jen rychlejší cesta, jak je
  postavit.
- **Data, která se dají sčítat.** Graf je tak dobrý, jak dobře jsou vyplněné fáze, částky a data.
  Proč na tom stojí i AI, vysvětluje článek
  [proč agenti selhávají na špinavých datech](/twenty/data/proc-agenti-selhavaji/).
- **Hotové přehledy** — s Twenty Sales je máte od prvního dne, včetně obchodního plánu, který
  popisuje článek [obchodní plán se semaforem](/twenty/obchod/obchodni-plan/).

:::otazky

### Musím umět vzorce nebo programovat?

Ne. Dashboard se skládá z dlaždic v nastavení, nebo ho podle popisu sestaví AI. Vzorce ani
programování nejsou potřeba.

### Uvidí můj dashboard i kolegové?

Ano. Dashboardy jsou v Twenty společné pro všechny, kdo v systému pracují — celý tým se dívá
na stejná čísla. Oblíbené si každý nastavuje sám.

### Jsou čísla aktuální?

Dlaždice se aktualizují samy, jak se mění data v CRM. Kdykoli jde dashboard obnovit i ručně.

### Dá se dashboard vyexportovat nebo poslat e-mailem?

Export dashboardu je podle dokumentace výrobce v přípravě. Data z jednotlivých typů záznamů —
obchodů, nabídek, klientů — vyexportovat jde už dnes.

:::
