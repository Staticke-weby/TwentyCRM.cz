---
title: AI vám postaví vlastní obrazovku — co Twenty připravuje a co jde už dnes
description: Twenty připravuje funkci, kdy v AI chatu popíšete, co chcete na kartě záznamu vidět, a AI navrhne vlastní panel, ukáže ho na vašich datech a po schválení zveřejní. Zatím je za přepínačem. Co jde dnes — dashboardy a pohledy od AI a vlastní rozvržení karty.
vMenu: AI postaví obrazovku
draft: true
poradi: 3
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [ai, aplikace]
funkce: [ai-obrazovky, ai-dashboardy, ai-chat, dashboardy, pohledy, aplikace]
zdroje: [github-tag-twenty-2fv2-55-0, gh-prepinace, twenty-capabilities-record-pages, twenty-layout-front-components, docs-ai-chat, twenty-vydani]
---

**Twenty připravuje funkci, kdy v AI chatu popíšete, co chcete vidět, a AI vám navrhne vlastní
panel — ukáže ho na vašich datech, zeptá se, jestli ho chcete, a po schválení ho zveřejní, aby
se dal přidat na kartu záznamu. Výrobce ji ohlásil ve verzi 2.55 (listopad 2026), ale v kódu je
zatím za přepínačem, takže běžně dostupná není.**

Už dnes přitom AI v Twenty postaví dashboard nebo filtrovaný pohled podle popisu a kartu
záznamu si můžete poskládat sami z hotových částí. Tenhle článek popisuje obojí — co jde teď
a co se připravuje.

## Co by vám to umožnilo

- **Obrazovku podle práce, ne podle toho, co systém nabízí.** Obchodník chce na kartě klienta
  vidět vývoj objednávek a otevřené nabídky v jednom panelu — popíše to a nečeká na vývojáře.
- **Rychlé zkoušení.** Panel uvidíte nanečisto na svých záznamech dřív, než ho kdokoli
  z kolegů dostane na obrazovku.
- **Jednotný vzhled.** Podle poznámek k vydání se panely od AI drží barev vašeho prostředí
  Twenty, takže nepůsobí jako cizí prvek.

## Jak to má fungovat

Podle poznámek k vydání 2.55:

1. V **AI chatu** popíšete, co potřebujete — třeba „na kartě zakázky chci vidět součet hodin
   ze všech výkazů a kdo na ní pracoval".
2. AI napíše vlastní panel a **ukáže ho naživo** — s ukázkovými daty nebo s vašimi záznamy.
3. Než ho uloží, **zeptá se vás na schválení**. Místo technického zápisu uvidíte rovnou náhled.
4. Schválený panel se **zveřejní v nabídce částí karty**, odkud ho přidáte na kartu záznamu
   nebo na dashboard.

**Stav:** funkce je v kódu Twenty za přepínačem, který výrobce zapíná jednotlivým prostředím.
Kdy bude dostupná všem, výrobce neuvedl. Aktuální stav najdete v přehledu níže.

## Co jde už dnes

**AI postaví dashboard a pohled.** Od verze 2.20 stačí AI chatu říct, co chcete vidět —
„otevřené zakázky podle technika" nebo „obchody, které se měsíc nepohnuly" — a AI sestaví
dashboard s grafy a tabulkami nebo filtrovaný pohled. Bez správce systému.

**Karta záznamu podle vás.** Kartu každého typu záznamu si rozvrhnete do záložek a poskládáte
z hotových částí: pole, související záznamy, e-maily, kalendář, časová osa, úkoly, poznámky,
soubory, grafy nebo vložená stránka z jiného systému. Změna platí pro všechny záznamy daného typu.
Jak na to, popisuje [dokumentace výrobce](https://docs.twenty.com/cs/user-guide/layout/capabilities/record-pages).

**Vlastní panel jako součást aplikace.** Panel, který hotové části nenabízejí, se dá napsat
jako součást [aplikace nad Twenty](/twenty/na-miru/aplikace-nad-twenty/). To je ale práce pro
vývojáře a výrobce sám uvádí, že vlastní obrazovky v aplikacích jsou stále ve vývoji.

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodní tým používá [Twenty Sales](/pro-obchodni-tymy/), naši nadstavbu nad open-source Twenty.
Obchodní ředitelka chce na kartě klienta vidět, jak se vyvíjí hodnota jeho nabídek.

**Dnes:** na kartu klienta přidá graf ze souvisejících nabídek po měsících a AI chat požádá
o dashboard „hodnota nabídek podle klientů za letošní rok" pro celkový přehled.

**Až bude funkce dostupná:** popíše AI chatu panel přímo pro kartu klienta, prohlédne si ho
nad třemi klienty, které zná, a teprve pak ho schválí a přidá na kartu pro všechny.

:::

## Co bude potřeba

- **AI model a klíč** — stejně jako u AI chatu. Na vyhrazeném serveru s vlastními klíči k AI,
  za které platíte přímo poskytovateli; náklady rozebírá článek
  [Kolik stojí AI agenti](/twenty/naklady/kolik-stoji-ai-agenti/).
- **Někoho, kdo panel schválí.** I obrazovku od AI je dobré vyzkoušet na několika záznamech,
  než ji dostane celý tým.
- **Rozmyslet, co patří na kartu.** Panel nenahradí dobře navržená pole — když údaj
  v záznamech chybí, AI ho na obrazovku nevykouzlí. Viz
  [Vlastní typy záznamů a pole](/twenty/na-miru/vlastni-typy-zaznamu/).

:::otazky

### Můžu si vlastní obrazovku od AI nechat postavit už dnes?

Ne, funkce je zatím za přepínačem. Dnes AI postaví dashboard nebo pohled a kartu záznamu si
poskládáte z hotových částí.

### Bude panel od AI vidět všem?

Podle ohlášení se schválený panel zveřejní do nabídky částí karty. Na kartu ho pak přidá ten,
kdo upravuje rozvržení karet.

### Nahradí to vývojáře?

Pro jednoduché přehledy z dat, která už v Twenty máte, možná ano. Napojení na další systémy
nebo vlastní výpočty dál patří do aplikací.

### Kdy bude funkce dostupná?

Výrobce termín neuvedl a my ho nepředpovídáme. Stav sledujeme při každém vydání a přehled níže
se podle toho aktualizuje.

:::
