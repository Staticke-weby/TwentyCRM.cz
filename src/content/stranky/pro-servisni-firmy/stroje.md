---
title: Twenty CRM pro servis výrobních strojů | TwentyCRM.cz
description: Každý stroj má kartu se sériovým číslem a historií zásahů. Hodiny techniků z výkazů se sčítají na zakázku — přesný podklad pro fakturaci. PDF zakázkový list s vaším logem.
pageId: obor-stroje
mailto: stroje
hero:
  stitek: ⚙️ Servis výrobních a strojních zařízení
  nadpis: Twenty CRM pro firmy se servisem výrobních strojů
  perex: >-
    Každý stroj má svou kartu se sériovým číslem a historií zásahů. Hodiny techniků z výkazů se sčítají
    na zakázku — máte přesný podklad pro fakturaci. PDF zakázkový list s vaším logem.
  stitky:
    - Pro B2B servis strojních zařízení
    - 🏭 Strojírenství, potravinářství, plasty, balení
    - 📅 Nasazení v řádu jednotek pracovních dní
  kontakt: true
zaver:
  nadpis: Konzultace zdarma
  text: 30 minut online — probereme SLA, fakturaci, smluvní vs. ad-hoc, ukážeme demo, vy se rozhodnete.
---

## Tahle firma jste vy?

Pokud jste aspoň u 3 z 6 přikývli, jsme přesně pro vás.

:::karty{sloupce="2"}

### 🔢

**Servisní historie po sériových číslech** — který stroj, jaké náhradní díly, kdo to dělal, kolik hodin. Dnes v Excelu nebo v hlavě technika.

### ⏰

**Vykazování času pro fakturaci** — technik píše do Excelu, fakturantka přepisuje, půlka chyb je z překlepů.

### 📅

**Pravidelná údržba** — kdo má kdy další termín preventivní prohlídky, kdo to ohlídá.

### 📄

**Smlouvy a paušály** — klient X má smluvní servis, klient Y ad-hoc, kdo si pamatuje.

### ⏱️

**SLA reakční doby** — klient hlásí poruchu, máte reagovat do 4 h. Někdy se to nestihne, nikdo neví proč.

### 💼

**Klient si dělá audit dodavatelů** — chce report za rok, kolik zásahů, kolik hodin, jaké stroje.

:::

::::sekce{pozadi="svetle"}

## Náš datový model

Stejná kostra, kterou používáme pro HVAC servis. Páteř je **Zařízení** — u vás konkrétní
stroj se sériovým číslem: historie zásahů, hodiny techniků, materiál.

```
Klient (Strojírna Modelov a.s. — ukázková firma)
  ↓
  Místo (výrobní hala 3)
       ↓
       Zařízení: CNC frézka XYZ (s.č. SM-2024-001, instalace 2024-03)
              ↓
              Servisní plán: údržba 1× kvartálně (běží sám)
                    ↓
                    Zakázka 2025-08: porucha vřetena (3.5 h, díl ABC)
                    Zakázka 2026-01: pravidelná údržba (2 h)
                    Zakázka 2026-04: poporuchová oprava (6 h, 2 technici)
                          ↓
                          Výjezd → Výkaz práce (hodiny, km, materiál)
```

:::karty{sloupce="2"}

### Z karty zařízení

Všechny zásahy seřazené v čase, kolik hodin, který technik, jaké díly, kdy je další plánovaná údržba.

### Z karty klienta

Všechny stroje, kompletní servisní historie napříč lety, statistiky hodnoty zakázek.

### Z výkazu technika

Hodiny, km, popis zásahu, použitý materiál. Hodiny se sčítají na zakázku — žádné dopisování z Excelu.

### Plánovač výjezdů

Týdenní rozvrh s detekcí kolizí. Dva technici na jednom zásahu = dva nezávislé výkazy.

:::

::::

## Co od nás dostanete

V ceně {{cena.implementation}} nasazení + měsíční paušál.

:::karty{sloupce="2"}

### 📊 Datový model pro strojní servis

- Klient, Místo, Zařízení (stroj — sériové číslo, model, výrobce, datum instalace, záruka), Servisní plán, Zakázka, Výjezd, Výkaz práce
- Pole „Smluvní servis" na klientovi (ano / ne, druh smlouvy)
- ARES auto-fill firmy podle IČO

### 🔁 Servisní plán běží sám

- Na zařízení nastavíte frekvenci (měsíčně / čtvrtletně / pololetně / ročně / po zadaném počtu dní)
- Podle nastaveného pravidla se vygeneruje další zakázka + výjezd v plánovaný termín
- Záruka zařízení se počítá sama; živý widget „zbývá X dní"

### ⏱️ Hodiny pro fakturaci

- Technik vyplní příjezd/odjezd nebo hodiny + km
- Hodiny se sčítají na výjezd a dál na zakázku
- Žádné dopisování z Excelu — fakturantka má podklad jedním kliknutím

### 📄 Zakázkový list v PDF

- Souhrn výkazů (technici, hodiny, km, materiál, podpisy)
- Hlavička s vaším logem, klient, místo plnění
- **🤖 AI souhrn z výkazů** (BYOK — vaše klíče k AI, tokeny platíte přímo poskytovateli)
- Razítko podpisu zákazníka (jméno, datum, místo)

:::

::::sekce{pozadi="svetle"}

::reseni-volba{doporuceno="servis" proc="Máte ve správě konkrétní stroje se sériovými čísly a jezdíte k nim opakovaně. Twenty Servis vede jejich historii, plánuje techniky a z výkazů udělá podklad k fakturaci." alternativa="Stroje hlavně prodáváte a servis je vedlejší nebo ho zajišťuje výrobce? Pak vám sedne Twenty Sales — ceník, nabídky a marže na každé zakázce."}

::::

::demo-cta{produkt="servis"}

## Čím se lišíme od toho, co používáte dnes

:::karty{sloupce="1"}

### Proti zahraničním servisním systémům

Zahraniční servisní systémy jako HaloPSA se platí za každého technika — HaloPSA uvádí cenu za agenta a měsíc ([ceník výrobce](https://www.usehalo.com/pricing), k 13. 11. 2026). Twenty Servis má naopak paušál bez poplatků za uživatele a české reálie, jako načtení firem z ARES, hotové.

### Proti internímu řešení v Excelu

Jednomu technikovi to stačí. Jakmile jsou v terénu tři, přestane být jasné, kdo kde byl a co udělal — a když si klient vyžádá přehled zásahů za rok, sbírá se to ručně.

### Proti servisnímu modulu podnikového systému

Nasazení bývá dlouhé a drahé, protože se otevírá celý systém. Když potřebujete hlavně servisní agendu, jsme výrazně rychleji v provozu.

### Proti běžnému CRM

Nezná zařízení jako samostatný záznam. Historii konkrétního kusu podle sériového čísla z něj proto nevyčtete.

:::

::rozsireni{kontext="servis"}
