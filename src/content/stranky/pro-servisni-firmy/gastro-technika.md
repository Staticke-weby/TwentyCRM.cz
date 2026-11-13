---
title: Twenty CRM pro servis gastro techniky a kávovarů | TwentyCRM.cz
description: CRM pro firmy, které dodávají a servisují kávovary, nápojové automaty a výčepní techniku. Karta každého stroje na pobočce klienta, pravidelná prevence se plánuje sama, výkaz technika i zakázkový list v PDF.
pageId: obor-gastro
mailto: gastro
hero:
  stitek: ☕ Gastro technika a nápojové automaty
  nadpis: CRM pro servis kávovarů, automatů a výčepní techniky
  perex: >-
    Stroj stojí u zákazníka a nesmí stát. Karta každého kávovaru na konkrétní pobočce,
    pravidelná prevence se plánuje sama, technik hlásí z telefonu ještě od baru.
  stitky:
    - Kávovary · automaty · výčepní technika · myčky
    - 🔨 Instalace i servis
  kontakt: true
zaver:
  nadpis: Konzultace zdarma
  text: 30 minut online, bez závazku — projdeme vaše stroje a provozovny, ukážeme demo, vy se rozhodnete.
---

## Tahle firma jste vy?

Pokud aspoň tři z šesti přikývly, jsme přesně pro vás.

:::karty{sloupce="2"}

### 🏪

**Jeden klient má víc provozoven a v každé jiný stroj.** Zavolá vedoucí z jedné z nich a začíná dohadování, o který kávovar vlastně jde a jestli je ještě v záruce.

### ⏱

**Když stroj stojí, kavárna netočí.** Zákazník potřebuje vědět, kdy přijedete, a vy potřebujete vědět, kdo je zrovna nejblíž a má volno.

### 🔄

**Prevence se odkládá, dokud se něco nerozbije.** Výměna těsnění, čištění, odvápnění — všichni vědí, že se to má dělat pravidelně, a nikdo to nehlídá.

### 📦

**Stroje v zápůjčce a v pronájmu.** Který je náš a jen zapůjčený, který si klient koupil, a kde vlastně teď fyzicky stojí? Přesunul se z jedné pobočky na druhou a nikdo to nezapsal.

### 🧰

**Náhradní díly podle sériového čísla.** Objednáváte mlecí kotouč a musíte vědět přesný model a výrobní číslo. Technik ho vyfotí a pošle na chat, kde se to za týden ztratí.

### 💸

**Fakturuje se se zpožděním.** Technik odjel, práci udělal, ale hodiny a materiál dorazily do kanceláře až s papírem za dva týdny.

:::

::::sekce{pozadi="svetle"}

## Náš datový model pro gastro techniku

Klíč je **místo**. Klient je firma, ale stroj stojí na konkrétní provozovně —
a právě tam jede technik. Bez toho mezistupně se u řetězců s deseti pobočkami ztratíte.

```
Klient (Brnokafé, s.r.o.)
  ↓
  Místo (Kavárna Náměstí Svobody)   Místo (Kavárna Zelný trh)
       ↓                                  ↓
       Zařízení: Kávovar                  Zařízení: Kávovar
         (výrobce, model, s.č.,             ├── Mlýnek
          instalace, záruka 24 měs.)        └── Změkčovač vody
              ↓
              Servisní plán: prevence 1× ročně (běží sama)
                    ↓
                    Zakázka: Roční servis / Oprava / Instalace
                          ↓
                          Výjezd (čtvrtek 9:00, Petr Novák)
                                ↓
                                Výkaz: 2 h, 25 km,
                                       „vyměněn mlecí kotouč"
```

:::karty{sloupce="3"}

### Stroj složený z částí

Kávovar, mlýnek a změkčovač jako sestava. Vyměnili jste mlýnek? Zapíše se na něj, historie kávovaru zůstane celá.

### Živý stav záruky

Zadáte datum instalace a délku záruky, systém dopočítá konec a ukazuje, kolik dní zbývá. Reklamace se neproflákne.

### Stav zařízení

Objednáno, připraveno, instalováno, v zápůjčce, vyřazeno. U vyřazeného a zapůjčeného se prevence negeneruje.

:::

::::

## Co od nás dostanete

V ceně nasazení a měsíčního provozu — cena je stejná jako u ostatních oborů.

:::karty{sloupce="2"}

### ☕ Karta zařízení na konkrétní pobočce

Zavolá vedoucí z Kavárny Svobody, vy si najdete pobočku a rovnou vidíte, jaký stroj tam stojí,
kdo ho instaloval a co se na něm naposledy dělalo.

- Výrobce, model, sériové číslo, popis umístění („za barem vlevo")
- Hledání podle sériového čísla napříč všemi klienty
- Kontakt na obsluhu i vedoucího přímo u stroje

### 🔁 Prevence se plánuje sama

Na stroji nastavíte, jak často se má jezdit — měsíčně, čtvrtletně, pololetně, ročně.
Systém podle nastaveného pravidla vytvoří zakázku i výjezd a přiřadí technika, který stroj zná.

- Klient si na dva měsíce dal pauzu? Plán vypnete a zase zapnete
- Po výpadku negeneruje zpětně — posune se na nejbližší termín
- Doba trvání z plánu rovnou nastaví délku výjezdu v rozvrhu

### 📅 Rozvrh, který vidí kolize

Havárie v pondělí ráno, tři plánované prevence a technik, který volá, že stojí v koloně.
Týdenní plánovač ukáže, kdo má kdy volno, a přesun výjezdu je klik.

- Dva technici na jedné instalaci — každý vlastní výkaz
- Kolizi v čase technika systém sám označí
- Víkendy a státní svátky při přesunu přeskakuje

### 📄 Podklad k fakturaci ještě týž den

Technik vyplní výkaz v telefonu u baru — hodiny, kilometry, materiál, popis práce.
Z hotových výkazů vznikne PDF zakázkový list s vaším logem.

- Stačí čas odjezdu nebo počet hodin — druhé se dopočítá
- Razítko podpisu vedoucího směny i technika
- Nabídka s položkami z ceníku (díl, práce, doprava) a DPH
- Souhrn práce pro klienta umí sestavit AI z textů techniků

:::

::::sekce{pozadi="svetle"}

::reseni-volba{doporuceno="servis" proc="Instalujete stroje na provozovny a pak k nim jezdíte na prevence a opravy. Twenty Servis je postavený přesně na tenhle cyklus — karta zařízení, servisní plán, výjezd, výkaz, zakázkový list." alternativa="Techniku hlavně prodáváte a servis zajišťuje někdo jiný? Pak vám sedne Twenty Sales — ceník s nákupní i prodejní cenou, nabídky a marže."}

::::

::demo-cta{produkt="servis"}

## Čím se lišíme od toho, co používáte dnes

Nejčastější alternativy a v čem je proti nim rozdíl.

:::karty{sloupce="1"}

### Proti sdílenému kalendáři a skupinovému chatu

Kalendář zvládne, kdo kdy kam jede. Neřekne vám, co se na tom stroji dělalo předloni,
jestli je v záruce a kolik hodin se za rok naúčtovalo. A hlavně: kalendář se nedá vyfakturovat.

### Proti běžnému CRM

Běžná CRM znají klienta a obchod, ale nemají pojem *provozovna* ani *stroj*.
U řetězce s deseti kavárnami tak nikdy nevíte, o kterou pobočku jde — a servisní historie
se slije do jedné hromady poznámek u firmy.

### Proti specializovanému terénnímu softwaru

Umí terénní agendu a leckde i propracovanější rozvrh. Za to ale platíte:

- ❌ Licence za každého uživatele — s rostoucím týmem to roste
- ❌ Uzavřený systém, vaše data u dodavatele
- ❌ Odchod jinam je práce — data i formát drží dodavatel

U nás technik pracuje v telefonu přes prohlížeč, což je dnes běžná praxe. Navíc dostanete
i obchodní část — nabídky, ceník a marži — a systém zůstává otevřený, s daty u vás.

:::

::::sekce{pozadi="svetle"}

::rozsireni{kontext="servis"}

::::
