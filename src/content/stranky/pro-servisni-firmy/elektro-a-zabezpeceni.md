---
title: Twenty CRM pro elektromontážní a zabezpečovací firmy | TwentyCRM.cz
description: CRM pro montáž a servis elektroinstalací, zabezpečovacích systémů, požární signalizace a kamer. Karta každé ústředny a čidla, plán kontrol podle lhůt, které si nastavíte, výkaz technika v telefonu.
pageId: obor-elektro
mailto: elektro
hero:
  stitek: 🔌 Elektroinstalace a zabezpečovací technika
  nadpis: CRM pro elektromontážní a zabezpečovací firmy
  perex: >-
    Co je v tom objektu vlastně nainstalované, kdo to tam montoval a kdy tam má někdo znovu přijít.
    Ústředna, čidla, kamery i přístupový systém na kartách — ne v hlavě technika, který loni odešel.
  stitky:
    - Elektro · EZS · EPS · kamery · přístupové systémy
    - 🔨 Montáž i následný servis
  kontakt: true
zaver:
  nadpis: Konzultace zdarma
  text: 30 minut online, bez závazku — projdeme vaše objekty a procesy, ukážeme demo, vy se rozhodnete.
---

## Tahle firma jste vy?

Pokud aspoň tři z šesti přikývly, jsme přesně pro vás.

:::karty{sloupce="2"}

### 📦

**Nevíte přesně, co je kde nainstalované.** Kolik čidel má ta prodejna, jaký typ ústředny tam je, kolik kamer a jestli k nim patří vlastní záznamové zařízení. Odpověď je v hlavě technika nebo v projektové dokumentaci ve složce, kterou nikdo neotevřel od kolaudace.

### 🔑

**Přístupy a kódy k ústřednám** kolují v mailech a v poznámkách v telefonu. Když technik onemocní, kolega se do systému nedostane — a klient čeká.

### 🗓

**Každý objekt má jinou domluvenou lhůtu kontroly.** U jednoho klienta jednou ročně, u druhého kvartálně podle smlouvy. Hlídá to Excel, který aktualizuje jeden člověk — a ten teď má dovolenou.

### 🚨

**Výjezd k planému poplachu.** Klient tvrdí, že to bylo poprvé. Vy máte pocit, že potřetí za měsíc — ale doložit to nedokážete, takže se to neúčtuje.

### 🏢

**Převzali jste objekt po jiné firmě.** Půlka techniky je od někoho jiného, půlka vaše, a rozdíl si pamatuje jen ten, kdo tam byl při přebírání.

### 🧾

**Fakturace po zásahu vázne.** Technik zapsal hodiny na papír, papír leží v autě, fakturantka se ptá popáté. Za měsíc už nikdo neví, jestli se tam měnil modul, nebo jen resetoval.

:::

::::sekce{pozadi="svetle"}

## Náš datový model pro elektro a zabezpečovací techniku

Klíčová věc, kterou běžné CRM neumí: **zařízení se skládá z dalších zařízení**.
Ústředna je hlavní karta, čidla a klávesnice pod ní. Zásah zapíšete na to, čeho se opravdu týkal.

```
Klient (Prodejny Sever, s.r.o.)
  ↓
  Místo (Prodejna Kolín, Pražská 12)
       ↓
       Zařízení: Ústředna EZS (výrobce, model, s.č., instalace 2024-05)
            ├── Čidlo — sklad, zadní vchod
            ├── Klávesnice — u vstupu
            └── Komunikátor
       Zařízení: Kamerový systém (záznamové zařízení + 6 kamer)
       Zařízení: Přístupový systém (čtečky, elektrozámky)
              ↓
              Servisní plán (lhůta podle smlouvy s klientem)
                    ↓
                    Zakázka: Montáž / Kontrola / Oprava / Rozšíření
                          ↓
                          Výjezd → Výkaz práce (hodiny, km, materiál)
```

:::karty{sloupce="3"}

### Hierarchie zařízení

Ústředna jako hlavní karta, prvky pod ní. Vyměnili jste jedno čidlo? Zapíše se na ně, ne na celý objekt.

### Víc kontaktů na zařízení

Vedoucí prodejny, správce objektu, noční ostraha. Technik ví, komu volat, když se nedostane dovnitř.

### Historie po zásazích

Kdo tam byl, co dělal, jaký díl vyměnil. Doložitelné i po třech letech, i když ten technik už u vás nepracuje.

:::

::::

## Co od nás dostanete

V ceně nasazení a měsíčního provozu — cena je stejná jako u ostatních oborů.

:::karty{sloupce="2"}

### 🗂 Pasport objektu, který drží

Každý objekt má seznam toho, co v něm je — s výrobcem, modelem, sériovým číslem a datem
instalace. Technik ho vidí v mobilu, ještě než vystoupí z auta.

- Zařízení pod sebou (ústředna → prvky), ne jeden slepený text
- Bližší popis umístění („rozvaděč v suterénu, vlevo od schodů")
- Vyhledávání podle sériového čísla napříč všemi objekty

### 🗓 Kontroly podle lhůt, které si nastavíte

Na zařízení nastavíte, jak často se tam má jezdit — měsíčně, čtvrtletně, pololetně, ročně,
po dvou nebo třech letech. Systém v noci sám vytvoří zakázku i výjezd na termín.

- Lhůty zadáváte vy podle smlouvy a typu techniky — systém je jen hlídá
- Přiřadí technika, který má objekt na starosti
- Klient dal kontroly na pauzu? Plán vypnete a zase zapnete

### 🚨 Výjezdy včetně planých poplachů

Každý zásah je záznam s datem, technikem a popisem. Když se klient ptá, kolikrát tam
letos někdo byl, otevřete kartu objektu a máte to.

- Typ zakázky rozliší montáž, kontrolu, opravu i rozšíření systému
- Týdenní plánovač sám označí, když má technik dva výjezdy přes sebe
- Podklad k účtování opakovaných výjezdů máte doložitelný

### 📄 Zakázkový list a nabídka v PDF

Po dokončení práce vznikne z výkazů techniků jeden dokument s vaším logem — souhrn práce,
materiál, hodiny, kilometry a podpisy.

- Razítko podpisu zákazníka i technika přímo na zakázce
- Nabídka na rozšíření systému s položkami z ceníku a DPH
- Načtení firmy z ARES podle IČO

:::

::::sekce{pozadi="svetle"}

::reseni-volba{doporuceno="servis" proc="Montujete a pak se k témuž objektu vracíte na kontroly a opravy. Twenty Servis má karty zařízení s hierarchií, servisní plán a výkaz technika z terénu." alternativa="Montáže zadáváte subdodavatelům a sami hlavně sháníte a uzavíráte zakázky? Pak vám může stačit Twenty Sales — nabídky, marže a přehled o tom, co je rozjednané."}

::::

::demo-cta{produkt="servis"}

## Čím se lišíme od toho, co používáte dnes

Nejčastější alternativy a v čem je proti nim rozdíl.

:::karty{sloupce="1"}

### Proti dokumentaci ve složkách na disku

Projektová dokumentace popisuje stav při předání. Neřekne vám, že se loni měnila ústředna
a předloni přibyly dvě kamery. Karta zařízení se aktualizuje tím, že technik vyplní výkaz —
nemusí si vzpomenout, že má ještě někam zapsat, co udělal.

### Proti běžnému CRM

Běžná CRM nemají vlastní typ záznamu pro zařízení, natož pro zařízení složené z dalších prvků.
Maximum, co umí, je poznámka u klienta. Historii konkrétní ústředny z ní za tři roky nevyčtete.

### Proti softwaru od výrobce zabezpečovací techniky

Ten je silnější v tom, co umí jeho vlastní technika — vzdálená správa, stavy, poplachy.
Ale:

- ❌ Umí jen svoji značku. Vy na objektech máte tři.
- ❌ Neřeší, kdo kdy pojede, kolik to stálo a co se má fakturovat.
- ❌ Není to CRM — nemá klienta, nabídku ani obchodní stránku věci.

**Nekonkurujeme mu, doplňujeme ho.** On hlídá techniku, my hlídáme zakázku.

:::

::::sekce{pozadi="svetle"}

::rozsireni{kontext="servis"}

::::
