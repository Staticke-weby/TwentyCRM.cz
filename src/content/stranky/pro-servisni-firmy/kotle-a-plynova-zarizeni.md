---
title: Twenty CRM pro servis kotlů a plynových zařízení | TwentyCRM.cz
description: CRM pro firmy, které montují a servisují kotle, kotelny a plynová zařízení. Karta každého kotle se sériovým číslem a zárukou, sezónní prevence se plánuje sama, výkaz technika v telefonu.
pageId: obor-kotle
mailto: kotle
hero:
  stitek: 🔥 Kotle a plynová zařízení
  nadpis: CRM pro montáž a servis kotlů a kotelen
  perex: >-
    Kotel má výrobní číslo, datum uvedení do provozu, záruku a termín další prohlídky.
    Systém vám je připomene v srpnu — ne v listopadu, kdy už volají všichni najednou.
  stitky:
    - Kotle · kotelny · plynová zařízení
    - 🔨 Montáž, prohlídky, opravy
  kontakt: true
zaver:
  nadpis: Konzultace zdarma
  text: >-
    30 minut online, bez závazku — projdeme, jak zvládáte sezónu a evidujete zařízení,
    ukážeme demo, vy se rozhodnete.
---

## Tahle firma jste vy?

Pokud aspoň tři z šesti přikývly, jsme přesně pro vás.

:::karty{sloupce="2"}

### 🍂

**Sezóna vás každý rok převálcuje.** Od září zvoní telefon bez přestání, prohlídky se kupí a mezitím padají poruchy. V květnu je klid a nikdo neplánuje dopředu.

### 🏠

**Míchají se vám dva světy.** Rodinné domy, kde se jezdí jednou za čas, a firmy nebo bytové domy se smlouvou. Každý potřebuje jinou pozornost, ale eviduje se to na jedné hromadě.

### 🧾

**Záruční servis za výrobce.** Musíte doložit datum uvedení do provozu a co se na kotli dělalo. Ten údaj je na papíře v šanonu, případně na fotce v telefonu technika.

### 🏭

**Kotelna není jeden kotel.** Je to kaskáda, čerpadla, expanzní nádoba, regulace a komín. Zapisujete zásah „do kotelny" a za dva roky nevíte, čeho se přesně týkal.

### 🔩

**Díl podle modelu a výrobního čísla.** Bez přesného typu neobjednáte, a přesný typ zná jen ten, kdo tam byl. Volá se, fotí se, čeká se.

### 📋

**Prohlídky se odkládají, dokud něco nespadne.** Klient řekne „ozvěte se na podzim" a nikdo si to nezapíše tak, aby to na podzim někdo našel.

:::

::::sekce{pozadi="svetle"}

## Náš datový model pro topenářské a plynařské firmy

Kotelna se skládá z víc zařízení a každé má vlastní život. **Proto zapisujete zásah
na konkrétní kus**, ne na celou budovu — a historie pak dává smysl i za pět let.

```
Klient (Bytové družstvo Jižní svahy)
  ↓
  Místo (Kotelna, Okružní 88)
       ↓
       Zařízení: Kotel — kaskáda, kus 1
         (výrobce, model, výrobní číslo,
          uvedení do provozu, záruka 24 měs.)
            ├── Oběhové čerpadlo
            ├── Expanzní nádoba
            └── Regulace
       Zařízení: Kotel — kaskáda, kus 2
              ↓
              Servisní plán (interval, který si nastavíte)
                    ↓
                    Zakázka: Montáž / Prohlídka / Oprava / Uvedení do provozu
                          ↓
                          Výjezd → Výkaz práce (hodiny, km, materiál)
```

:::karty{sloupce="3"}

### Uvedení do provozu a záruka

Zadáte datum a délku záruky, systém dopočítá konec a ukazuje, kolik dní zbývá. Podklad pro záruční servis máte doložitelný.

### Sestava, ne jedna položka

Kotel jako hlavní karta, čerpadlo a regulace pod ním. Vyměnili jste čerpadlo? Zapíše se na ně.

### Kdo to montoval

Montáž je typ zakázky. Když za dva roky přijde reklamace, vidíte, kdo tam byl a co tam nechal.

:::

::::

## Co od nás dostanete

V ceně nasazení a měsíčního provozu — cena je stejná jako u ostatních oborů.

:::karty{sloupce="2"}

### 🍂 Sezónu naplánujete v létě

Na každém kotli je nastavený interval prohlídek. Systém v noci vytváří zakázky s výjezdem
na termín — takže v srpnu vidíte, kolik práce vás na podzim čeká, a máte čas obvolat klienty.

- Intervaly zadáváte vy podle typu zařízení a smlouvy — systém je jen hlídá
- Přiřadí technika, který zařízení zná
- Klient odložil na příští rok? Termín posunete, plán běží dál

### 🧰 Technik ví, co ho čeká, než vystoupí z auta

V mobilu má kartu zařízení — výrobce, model, výrobní číslo, stav záruky a co se tam
dělalo posledně. Nemusí volat do kanceláře a kancelář nemusí listovat v šanonu.

- **📍 Dnes** — dnešní výjezdy s adresou a kontaktem
- Hledání podle výrobního čísla napříč všemi klienty
- Popis umístění („kotelna v suterénu, klíč u domovníka")

### 📅 Havárie mezi plánované prohlídky

V topné sezóně chodí poruchy denně. Týdenní plánovač ukáže, kdo má kdy volno,
a přesun plánované prohlídky na jiný den je klik.

- Kolizi v čase technika systém sám označí
- Dva technici na jedné montáži — každý vlastní výkaz
- Vícedenní montáž se rozdělí na denní sloty

### 📄 Doklad a podklad k fakturaci

Z hotových výkazů vznikne PDF zakázkový list s vaším logem — souhrn práce, materiál,
hodiny, kilometry a podpisy. Fakturantka nečeká na papír z auta.

- Razítko podpisu zákazníka i technika
- Nabídka na výměnu kotle s položkami z ceníku a DPH
- Načtení firmy z ARES podle IČO (u firem a bytových domů)
- Souhrn práce pro klienta umí sestavit AI z textů techniků

:::

::::sekce{pozadi="svetle"}

::reseni-volba{doporuceno="servis" proc="Montujete kotle a pak k nim jezdíte na prohlídky a opravy. Twenty Servis zvládne obojí v jednom — instalované zařízení rovnou vzniká jako karta s datem uvedení do provozu a servisním plánem." alternativa="Kotle hlavně prodáváte a montáž zadáváte partnerům? Pak vám sedne Twenty Sales — ceník, nabídky a marže na každé zakázce."}

::::

::demo-cta{produkt="servis"}

## Čím se lišíme od toho, co používáte dnes

Nejčastější alternativy a v čem je proti nim rozdíl.

:::karty{sloupce="1"}

### Proti diáři a připomínkám v telefonu

Fungují, dokud jste jeden nebo dva. Jakmile má firma tři čtyři techniky, přestane být jasné,
kdo co ví — a znalost, která je jen v hlavě, s dovolenou nebo výpovědí odejde.

### Proti běžnému CRM

Běžná CRM neznají pojem *zařízení se sériovým číslem*, natož kotelnu složenou z několika
kusů. Servisní historie konkrétního kotle se v nich nedá vést — a přesně o tu tady jde.

### Proti softwaru od výrobce kotlů

Ten je silný v tom, co se týká jeho vlastní techniky — vzdálený dohled, chybové stavy,
záruční agenda. Ale:

- ❌ Umí jen svoji značku. Vy servisujete tři nebo čtyři.
- ❌ Neplánuje vaše lidi a neřeší, co se má komu vyfakturovat.
- ❌ Není to CRM — nemá klienta, nabídku ani obchodní stránku věci.

**Nekonkurujeme mu, doplňujeme ho.** On hlídá techniku, my hlídáme zakázku.

:::

::::sekce{pozadi="svetle"}

::rozsireni{kontext="servis"}

::::
