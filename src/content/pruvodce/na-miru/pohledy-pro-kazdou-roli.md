---
title: Pohledy pro každou roli — ať obchodník, dispečer, technik i vedoucí vidí svou práci
description: V Twenty si ze stejných dat každý uloží svou obrazovku — tabulku, nástěnku podle fáze, kalendář po dnech a týdnech nebo seznam pro telefon, s filtry i přes vazby a se seskupením. Co kdo smí vidět, řídí role. Jak to vypadá pro obchod a pro servis.
vMenu: Pohledy pro každou roli
poradi: 5
overeno: 2026-11-13
verzeTwenty: '2.57'
temata: [data, reporty, opravneni]
funkce: [pohledy, rozvrzeni-karty, dashboardy, ai-dashboardy, role-opravneni, jen-sve-zaznamy]
zdroje: [twenty-vydani, twenty-capabilities-filters-and-sorting, twenty-capabilities-calendar-view, twenty-capabilities-record-pages, twenty-capabilities-dashboards, docs-opravneni, twenty-views-pipelines-overview, twenty-capabilities-table-views, twenty-capabilities-kanban-views, twenty-capabilities-navigation]
---

**Pohled v Twenty je uložené nastavení seznamu záznamů: tabulka, nástěnka podle fáze (kanban),
kalendář nebo kompaktní seznam — s vlastními filtry, řazením, seskupením a sloupci. Ze stejných
dat si tak obchodník, dispečer, technik i vedoucí udělají každý svou obrazovku, bez kopírování
dat a bez programování.**

*Jak* kdo data vidí, řídí pohled. *Co* smí vidět a měnit, řídí role. Obojí se nastavuje zvlášť,
a proto se dá jedna databáze používat celou firmou, aniž by se lidé navzájem zahlcovali.

## Co vám to umožní

- **Ráno otevřít jednu obrazovku a vědět, co dělat.** Obchodník vidí své obchody po termínu,
  technik dnešní výjezdy, vedoucí, kde se co zaseklo.
- **Stejná data, jiný úhel.** Obchodní případy jsou pro obchodníka nástěnka podle fáze, pro
  vedoucího tabulka seskupená podle obchodníků. Nikdo nic neexportuje.
- **Méně hledání na kartě.** Karta zakázky nebo klienta ukáže hned nahoře to, co lidé potřebují,
  a podrobnosti odloží do dalších záložek.
- **Rychlejší zaučení.** Nový kolega dostane pohledy s jasnými názvy ve složkách menu, ne
  prázdnou tabulku.

## Jak to v Twenty funguje

**Čtyři podoby pohledu.**

- **Tabulka** — řádky a sloupce jako v tabulkovém programu. Sloupce skryjete, přeskládáte
  a rozšíříte; záznamy seskupíte podle pole s výběrem z možností, od verze 2.18 i podle
  navázaného záznamu, třeba podle vlastníka nebo firmy.
- **Nástěnka** — sloupce jsou hodnoty pole, typicky fáze, a karty se mezi nimi přetahují.
  Nahoře u sloupce může být počet, součet, průměr, nejnižší nebo nejvyšší hodnota — třeba
  součet částek ve fázi Jednání.
- **Kalendář** — záznamy podle zvoleného data. Od verze 2.37 po měsících, týdnech i dnech.
- **Seznam** — od verze 2.38.1 kompaktní seznam se seskupením, který se přizpůsobí počítači
  i telefonu.

**Filtry a řazení.** Filtrovat jde podle hodnot polí i podle data — „po termínu", „dnes",
„příštích 14 dní". Pokročilý filtr spojí podmínky přes „a zároveň" i „nebo". Od verze 2.6 jde
filtrovat **přes vazbu**: obchodní případy, jejichž klient má určitý typ, nebo výjezdy, jejichž
zakázka je montáž. Řadit jde podle více polí za sebou.

**Uložení a viditelnost.** Pohled se uloží pod názvem a ikonou a je vidět buď celé firmě, nebo
jen autorovi. Oblíbené pohledy si každý připne nahoru do menu pro sebe; sdílenou část menu jde
uspořádat do složek, třeba Obchod, Dispečink, Vedení. Viditelnost pohledu ale není oprávnění —
skrytý pohled jen zmizí z nabídky, záznamy chrání role.

**Karta záznamu.** Kartu každého typu záznamu si rozvrhnete do záložek a poskládáte z částí:
pole, související záznamy (jako tabulka, nástěnka, kalendář nebo seskupená tabulka), záznamy
přes dvě vazby, e-maily, kalendář, časová osa, úkoly, poznámky, soubory, grafy, vložená stránka
a od verze 2.38.1 i text se společnými pokyny pro tým. Rozvržení platí pro všechny záznamy daného
typu.

**Role.** Role určuje, které typy záznamů a která pole kdo vidí, upravuje a maže; pole jde
i úplně skrýt. Tvrdé omezení „každý vidí jen své záznamy" patří do tarifu **Organization** —
v cloudu i na vlastním serveru. Vlastní role pro lidi jsou na vlastním serveru bez omezení,
v cloudu výrobce jen v tarifu Organization.

**Dashboard.** Pro vedoucího přehled s grafy a čísly; od verze 2.24 na něm mohou být i záznamy
jako seskupená tabulka, nástěnka nebo kalendář. Pohled i dashboard umí od verze 2.20 postavit
AI podle popisu — viz [Přehledy a grafy bez správce](/twenty/obchod/reporty-bez-spravce/).

Postup je v [dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/views-pipelines/overview).

## Jak může vypadat pohled pro jednotlivé role

[Twenty Sales](/pro-obchodni-tymy/) a [Twenty Servis](/pro-servisni-firmy/) jsou naše nadstavby
nad open-source Twenty. Pohledy, přehledy a role z posledního sloupce tabulky v nich jsou hotové
od prvního dne — v Twenty Sales navíc čtyři role: čtenář, obchodník, vedoucí a správce. Ostatní
pohledy si uživatelé uloží sami nebo je nechají postavit AI.

| Role | Podoba | Příklad | Hotové v našem řešení |
|---|---|---|---|
| Obchodník | nástěnka, tabulka | moje obchodní případy podle fáze se součtem hodnoty; po termínu nahoře | Twenty Sales: pohledy Po termínu, Po splatnosti, Bez vlastníka, K dotažení |
| Dispečer | kalendář, tabulka | výjezdy tohoto týdne; zakázky seskupené podle stavu | Twenty Servis: týdenní plánovač s hlídáním kolizí, přehled pro dispečera |
| Technik | seznam v telefonu | dnešní výjezdy s adresou a kontaktem | Twenty Servis: Dnes, Chybí výkaz, Můj plán |
| Vedoucí, majitel | dashboard, seskupená tabulka | obchody nebo zakázky podle lidí, prohry v korunách | Twenty Sales: šest přehledů s grafy; Twenty Servis: přehled pro majitele |

:::poznamka[Ilustrační příklad]{ton="info"}

Firma montuje a servisuje klimatizace a pracuje v Twenty Servis.

**Dispečerka Jana** plánuje v týdenním plánovači a k tomu si uloží vlastní tabulku výjezdů
s filtrem přes vazbu — jen ty, jejichž zakázka je montáž, seřazené podle data. Na montáže
potřebuje dva techniky a chce je vidět pohromadě.

**Technik Petr** ráno otevře v telefonu přehled *Dnes* a večer *Chybí výkaz*, kde zjistí, že
jeden výkaz neuzavřel.

**Majitel** si do oblíbených připne přehled pro majitele a požádá AI chat o tabulku zakázek
za poslední měsíc seskupenou podle stavu.

Data jsou pořád jedna. Každý z nich vidí jinou obrazovku.

:::

## Co je k tomu potřeba

- **Hotové řešení.** Pohledy, přehledy a role Twenty Sales nebo Twenty Servis jsou součástí
  nasazení.
- **Vlastní pohledy.** Ty si uživatel uloží sám, nebo je popíše AI chatu. Na vyhrazeném serveru
  AI běží přes vaše vlastní klíče, za které platíte přímo poskytovateli.
- **Úpravy nad rámec hotového řešení** — nová role, jiné rozvržení karty, sdílené pohledy pro
  nový tým — lze nastavit kdykoli. Je to práce navíc: drobnost se vejde do hodiny měsíčně
  v paušálu, větší úpravu odhadneme předem, viz [SLA balíčky](/sla-balicky/).
- **Tarif Organization**, pokud má každý vidět jen své záznamy.
- **Rozmyslet, co kdo opravdu potřebuje.** Méně pohledů s jasnými názvy funguje líp než
  dvacet podobných. Výrobce sám doporučuje ukazovat jen pole, která jsou potřeba.

:::otazky

### Uvidí ostatní pohled, který si uložím?

Jen když ho nastavíte jako viditelný celé firmě. Jinak ho vidíte jen vy. Výchozí pohled se všemi
záznamy daného typu vidí všichni.

### Může obchodník vidět jen své obchody?

Pohledem si je vyfiltruje během chvíle — ostatní ale k cizím obchodům přístup dál mají. Tvrdé
omezení, kdy cizí záznamy vůbec neuvidí, nastaví role s pravidly pro jednotlivé záznamy
v tarifu Organization.

### Funguje to v telefonu?

Ano, Twenty se otevře v prohlížeči telefonu a seznamový pohled se malému displeji přizpůsobí.
V Twenty Servis má technik přehledy *Dnes*, *Chybí výkaz* a *Můj plán* hotové.

### Může mít každá role jinou kartu záznamu?

Rozvržení karty je jedno pro celý typ záznamu. Co kdo na kartě uvidí, ale řídí role — pole,
ke kterým role nemá přístup, se jí nezobrazí. Podrobnosti pro jednotlivé role se dají rozdělit
do záložek.

### Musíme si pohledy stavět sami?

Ne. V Twenty Sales i Twenty Servis jsou hotové od prvního dne a další vám podle popisu postaví
AI chat.

:::
