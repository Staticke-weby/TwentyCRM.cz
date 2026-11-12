---
title: Jak přizpůsobit CRM oboru — vlastní typy záznamů, pole a vazby v Twenty
description: Twenty se oboru přizpůsobuje nastavením — vlastními poli, typy záznamů, vazbami i „mnoho na mnoho" a pravidly pro kontrolu dat. Kdy stačí pole, kdy je potřeba nový typ záznamu a proč základní pojmy nepřejmenovávat.
vMenu: Typy záznamů a pole
draft: true
poradi: 1
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [data, aplikace]
funkce: [vlastni-zaznamy, vazby-mnoho, kontrola-dat, pohledy, import-export, posta-kalendar, role-opravneni]
zdroje: [twenty-capabilities-objects, twenty-data-model-overview, twenty-capabilities-fields, twenty-capabilities-relation-fields, twenty-how-tos-create-many-to-many-relations, twenty-capabilities-validation-rules, twenty-vydani]
---

**Twenty přizpůsobíte oboru v nastavení, bez programování: přidáte vlastní pole, vlastní typy
záznamů a vazby mezi nimi a nastavíte pravidla, která nepustí neúplná data. Cena se tím nemění —
pole a typů záznamů může být, kolik potřebujete.**

U našich řešení [Twenty Sales](/pro-obchodni-tymy/) a [Twenty Servis](/pro-servisni-firmy/) —
nadstaveb nad open-source Twenty — je hlavní kostra hotová. Přizpůsobení oboru proto znamená
rozhodnout, **jaká pole přidat**: u servisu tepelných čerpadel výkon a typ jednotky, u výrobce
nábytku materiál a termín výroby. Ne stavět nový systém.

## Co vám to umožní

- **Evidovat, co je pro váš obor podstatné**, místo poznámek ve volném textu, které se nedají
  filtrovat.
- **Filtrovat a počítat** — „všechna zařízení nad 10 kW, kterým letos končí záruka" je pohled
  na dvě kliknutí, ne ruční hledání.
- **Propojit, co k sobě patří.** Kontaktní osoba u více zařízení, zakázka u konkrétní pobočky,
  nabídka k obchodnímu případu.
- **Dát AI pevnou půdu.** AI chat, agenti i Claude či ChatGPT připojený přes MCP pracují se stejnými
  poli jako lidé. Čím jasnější struktura, tím přesnější odpovědi.

## Jak to v Twenty funguje

**Typy záznamů.** Twenty má standardní typy — osoby, firmy, obchodní příležitosti, poznámky
a úkoly — a k nim libovolné vlastní: zařízení, smlouvy, projekty. Standardní typy se nedají smazat,
jen skrýt, a jejich název na obrazovce jde změnit.

**Pole.** Ke každému typu záznamu přidáte pole: text, číslo, částka s měnou, datum, datum a čas,
výběr z možností i výběr více možností, adresa, e-mail, telefon, odkaz, ano/ne, hodnocení
hvězdičkami a další. Pole může být jedinečné — dvě zařízení pak nemohou mít stejné výrobní číslo.
Nepotřebné pole se skryje a data zůstanou.

**Vazby.** Záznamy propojíte vazbou „jeden k mnoha" (klient a jeho pobočky) nebo vazbou na více
typů najednou (poznámka u osoby, firmy i obchodu). Od verze 2.45 umí Twenty i **vazby mnoho
na mnoho** — jeden člověk u více projektů a projekt s více lidmi. Spojovací záznam mezi nimi Twenty
na obrazovce skryje, ale dá se na něm evidovat i údaj o vztahu, třeba role člověka v projektu.

**Pravidla pro kontrolu dat.** Od verze 2.56 nastavíte podmínku, kterou záznam musí splnit, aby
se uložil, a zprávu, která řekne, co opravit — třeba „obchod ve fázi Vyhráno musí mít částku" nebo
„konec nesmí být před začátkem". Pravidlo platí pro lidi i pro import, automatizace a napojené
systémy. Podle dokumentace výrobce patří do tarifu **Organization** — v cloudu i jako licence
pro vlastní server.

Všechno se nastavuje v Nastavení → Datový model; obvykle to smí jen správce. Postup
popisuje [dokumentace výrobce](https://docs.twenty.com/cs/user-guide/data-model/overview).

## Čtyři pravidla, podle kterých model navrhujeme

1. **Vlastnost je pole, ne nový typ.** Typ zařízení, stav smlouvy nebo region jsou pole.
   Nový typ záznamu má smysl, až když má věc vlastní život — stavy, termíny, vlastní vazby — nebo
   když jich může být u jednoho záznamu neomezeně. Tak to doporučuje i výrobce.
2. **Základní pojmy nepřejmenováváme.** Klient zůstává Klientem, Zařízení Zařízením — u vás to
   může být kotel, stroj nebo výtah, ale to je obsah záznamu, ne jeho jméno. Podle názvů se řídí
   pohledy, automatizace i AI agent a jednotný slovník drží systém udržitelný při každé aktualizaci.
3. **Osoby, firmy a obchody nenahrazujeme vlastními typy.** E-maily a schůzky z napojených schránek
   se v Twenty párují právě k nim. Kdo si založí vlastní „Kontakt", přijde o historii komunikace
   na kartě.
4. **Typ pole se rozmýšlí předem.** Po založení ho nejde změnit; oprava znamená nové pole
   a převod dat.

:::poznamka[Ilustrační příklad]{ton="info"}

Firma montuje a servisuje tepelná čerpadla u rodinných domů a nasazuje Twenty Servis. Klient,
Místo, Zařízení, Servisní plán, Zakázka, Výjezd a Výkaz práce jsou hotové. K **Zařízení** se
doplní tři pole: *Typ čerpadla* (výběr: vzduch–voda, země–voda), *Výkon v kW* (číslo) a *Výrobní
číslo venkovní jednotky* (jedinečný text). K **Zakázce** pole *Odkud poptávka přišla*.

Dispečerka si pak vytvoří pohled „čerpadla země–voda bez prohlídky za posledních 12 měsíců" a AI
chatu se zeptá, kolik takových zařízení má technik Pavel na starosti. Nic dalšího se nestaví.

:::

## Co je k tomu potřeba

- **Hotové řešení jako základ.** Twenty Sales nebo Twenty Servis — nasazení za
  {{cena.implementation}} bez DPH jednorázově, provoz na vyhrazeném serveru
  {{cena.retainer_selfhost|mesicne}} bez DPH. Doplnění polí vašeho oboru je součást nasazení.
- **Seznam toho, co dnes evidujete** — sloupce z tabulek, kolonky z papírových formulářů.
  Z nich se pozná, co bude pole a co výběr z možností. Data pak převedeme importem, viz
  [přechod z Excelu](/migrace-z-excelu/).
- **Tarif Organization**, pokud chcete pravidla pro kontrolu dat.
- **Role** — kdo smí datový model měnit. Obvykle jen jeden správce; ostatní pracují s daty.

Drobné úpravy během provozu — pole, pohled, číselník, automatizace — se řeší z hodin podpory,
viz [SLA balíčky](/sla-balicky/). Když nastavení nestačí, další krok popisuje článek
[Aplikace nad Twenty](/twenty/na-miru/aplikace-nad-twenty/).

:::otazky

### Stojí každé pole nebo typ záznamu navíc?

Ne. Twenty neúčtuje podle počtu polí ani typů záznamů. Pole vašeho oboru doplníme v rámci
nasazení; pozdější drobné úpravy jdou z hodin podpory.

### Můžeme si pole přidávat sami?

Ano, kdo má oprávnění k datovému modelu, přidá pole v nastavení během minuty. Doporučujeme to
nechat jednomu člověku, aby se model nerozrostl o duplicitní pole.

### Přijdeme o data, když pole zrušíme?

Ne, pokud ho jen skryjete — data zůstanou a pole jde vrátit. Smazání je trvalé.

### Proč nemůžeme Zařízení přejmenovat na Stroj?

Protože podle názvu se řídí pohledy, automatizace i AI agent a stejně se jmenuje v demu
i v příručce. Oborové slovo patří do obsahu záznamu — „Zařízení: frézka XY, výrobní číslo…".

:::
