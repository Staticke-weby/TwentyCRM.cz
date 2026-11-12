---
title: Twenty CRM pro servis a montáž výtahů | TwentyCRM.cz
description: CRM pro výtahářské firmy — karta každého výtahu v konkrétním domě, plán pravidelných úkonů podle lhůt, které si nastavíte, výjezdy techniků, výkaz s materiálem a PDF zakázkový list.
pageId: obor-vytahy
mailto: vytahy
hero:
  stitek: 🛗 Výtahy
  nadpis: CRM pro servis a montáž výtahů
  perex: >-
    Stovky výtahů v desítkách domů, každý s vlastní historií a vlastním termínem. Karta konkrétního
    výtahu v konkrétním domě — a technik ji má v mobilu dřív, než vejde do strojovny.
  stitky:
    - Servis · opravy · modernizace · montáž
    - 🏢 SVJ, správci nemovitostí, firmy
  kontakt: true
zaver:
  nadpis: Konzultace zdarma
  text: >-
    30 minut online, bez závazku — projdeme, jak dnes evidujete zařízení a plánujete techniky,
    ukážeme demo, vy se rozhodnete.
---

## Tahle firma jste vy?

Pokud aspoň tři z šesti přikývly, jsme přesně pro vás.

:::karty{sloupce="2"}

### 🏢

**Zákazník je společenství vlastníků nebo správce, ale výtah stojí v domě.** Jeden správce vám spravuje třicet adres — a vy pořád dohledáváte, který dům patří pod kterou smlouvu.

### 🗓

**Pravidelné úkony mají různé intervaly.** U jednoho zařízení se jezdí častěji než u druhého, něco vyplývá ze smlouvy a něco z typu výtahu. Dnes to hlídá tabulka a jeden člověk, který ji umí číst.

### 🧰

**Díl na třicet let starý výtah.** Musíte znát výrobce, typ a výrobní číslo. Ten údaj je na štítku ve strojovně, kam se dostane jen technik — a ten je zrovna na jiné adrese.

### ⏳

**Odstávka a nervózní obyvatelé.** Předseda společenství chce vědět, kdy to pojede. Vy potřebujete vědět, jestli díl dorazil a kdo tam může zítra vyrazit.

### 👷

**Každý technik má „svoje" domy.** Zná je nazpaměť — a když onemocní nebo odejde, ta znalost odejde s ním. Zástup pak jezdí naslepo.

### 🧾

**Výbor chce doklad, co se dělalo.** Musíte doložit zásahy za rok pro schůzi vlastníků. Dnes to znamená projít e-maily, papíry a paměť.

:::

::::sekce{pozadi="svetle"}

## Náš datový model pro výtahářské firmy

Zásadní rozdíl proti běžnému CRM: **zákazník a adresa nejsou totéž**. Smlouvu podepisuje
správce nebo společenství, ale zařízení je v konkrétním domě — a technik jezdí tam, ne do kanceláře.

```
Klient (Správa domů Vinohrady, s.r.o.)
  ↓
  Místo (Bytový dům Korunní 45)      Místo (Bytový dům Slezská 12)
       ↓                                   ↓
       Zařízení: Výtah A — hlavní schodiště   Zařízení: Výtah — jediný v domě
         výrobce, typ, výrobní číslo,
         nosnost, počet stanic,
         rok uvedení do provozu
       Zařízení: Výtah B — zásobovací
              ↓
              Servisní plán (interval, který si nastavíte)
                    ↓
                    Zakázka: Prohlídka / Oprava / Modernizace / Montáž
                          ↓
                          Výjezd → Výkaz práce (hodiny, km, materiál)
```

:::karty{sloupce="3"}

### Víc výtahů v jednom domě

Každý má vlastní kartu a vlastní historii. „Ten zásobovací" a „ten na hlavním schodišti" nejsou jedna položka.

### Kontakty na dům

Předseda výboru, domovník, správce. Technik ví, komu volat, když potřebuje otevřít strojovnu.

### Historie, která přežije technika

Co se v tom domě dělalo za pět let, dohledá i kolega, který tam jede poprvé.

:::

::::

## Co od nás dostanete

V ceně nasazení a měsíčního provozu — cena je stejná jako u ostatních oborů.

:::karty{sloupce="2"}

### 🛗 Karta zařízení se vším, co technik potřebuje

Výrobce, typ, výrobní číslo, rok uvedení do provozu, popis umístění. Technik si to otevře
v telefonu — nemusí volat do kanceláře a kancelář nemusí hledat ve složkách.

- Hledání podle výrobního čísla napříč všemi domy
- Vlastní pole pro to, co si evidujete vy (nosnost, počet stanic, typ pohonu)
- Historie zásahů seřazená od nejnovějšího

### 🗓 Termíny, které nehlídá jeden člověk

Na každém zařízení nastavíte servisní plán s vlastním intervalem. Systém v noci vytvoří zakázku
i výjezd na termín a přiřadí technika, který dům zná.

- Intervaly zadáváte vy podle typu zařízení a smlouvy — systém je jen hlídá
- Po výpadku negeneruje zpětně, posune se na nejbližší budoucí termín
- Modernizovaný výtah dostane nový plán, starý se vypne

### 📅 Rozvrh napříč domy

Týdenní plánovač — sloupce dny, řádky technici. Havarijní výjezd vsunete mezi plánované
úkony a hned vidíte, komu se to překrývá.

- Kolizi v čase technika systém sám označí červeně
- Dva technici na jedné opravě — každý vlastní výkaz
- Přesun na jiný den je klik, víkendy se přeskakují

### 📄 Doklad pro výbor i pro fakturaci

Z hotových výkazů vznikne PDF zakázkový list s vaším logem — souhrn práce, materiál,
hodiny, kilometry a podpisy. Předsedovi ho pošlete, do účetnictví taky.

- Přehled všech zásahů za období na kartě místa i zařízení
- Razítko podpisu zástupce domu i technika
- Nabídka na opravu nebo modernizaci s položkami a DPH
- Načtení společenství nebo správce z ARES podle IČO

:::

::::sekce{pozadi="svetle"}

::reseni-volba{doporuceno="servis" proc="Máte ve správě konkrétní zařízení v konkrétních domech a vracíte se k nim roky. Twenty Servis je postavený na tenhle cyklus — karta zařízení, servisní plán, výjezd, výkaz, doklad."}

::::

::demo-cta{produkt="servis"}

## Čím se lišíme od toho, co používáte dnes

Nejčastější alternativy a v čem je proti nim rozdíl.

:::karty{sloupce="1"}

### Proti tabulce se seznamem domů

Tabulka zvládne seznam. Nezvládne historii — kdo tam kdy byl, co měnil a co se s tím
zařízením dělo za posledních pět let. A hlavně: technik do ní z domu nic nezapíše.

### Proti běžnému CRM

Běžná CRM znají firmu a obchodní případ. Neznají pojem *dům* ani *konkrétní zařízení v domě*.
U správce s třiceti adresami se všechno slije do jedné karty a nedohledáte nic.

### Proti specializovanému výtahářskému softwaru

Specializované systémy bývají silnější v oborové agendě a některé se napojují i na dispečink.
Ale:

- ❌ Licence za každého uživatele — s rostoucím týmem to roste
- ❌ Uzavřený systém, data u dodavatele, těžký odchod jinam
- ❌ Obchodní stránku (nabídky na modernizace, marže) obvykle neřeší
- ❌ Odchod jinam je práce — data i formát drží dodavatel

**Nejsme oborový systém a netváříme se tak.** Jsme hotové řešení, které umí
evidenci zařízení a plánování lidí — bez poplatků za uživatele a s vašimi daty u vás.

:::

::::sekce{pozadi="svetle"}

::rozsireni{kontext="servis"}

::::
