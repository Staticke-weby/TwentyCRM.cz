---
title: Twenty CRM pro revizní techniky | TwentyCRM.cz
description: Každý revidovaný objekt má kartu se sériovým číslem a historií zápisů. Pravidelné revize se generují samy. PDF revizní zpráva s vaším logem. Pro elektro, plyn, EPS, hromosvody, výtahy.
pageId: obor-revize
mailto: revize
hero:
  stitek: 🛡️ Revizní technici
  nadpis: Twenty CRM pro revizní techniky
  perex: >-
    Každé revidované zařízení má svou kartu se sériovým číslem, lhůtou další revize a kompletní historií zápisů.
    Pravidelné revize se generují automaticky. Revizní zpráva v PDF s vaším logem.
  stitky:
    - Pro samostatné techniky i revizní firmy
    - 📋 Elektro / plyn / hasicí přístroje / výtahy / hromosvody
    - 📅 Nasazení v řádu jednotek pracovních dní
  kontakt: true
zaver:
  nadpis: Konzultace zdarma
  text: 30 minut online — projdeme typy revizí, které děláte, ukážeme demo, vy se rozhodnete.
---

## Tahle firma jste vy?

Pokud jste aspoň u 3 z 5 přikývli, jsme přesně pro vás.

:::karty{sloupce="2"}

### 📅

**Lhůty napříč klienty** — který objekt má kdy další revizi, co kdy končí. Excel s termíny, který nikdo neudržuje aktuální.

### 🗂️

**Word šablona pro každou revizní zprávu** — vyplnit, vytisknout, podepsat, naskenovat, archivovat ve dvou cestách (papír + Dropbox).

### 🔍

**Při kontrole úřadu** — dohledávat, zda jste 6 měsíců zpět tam, kde jste podle harmonogramu měli být.

### 📞

**Klient se ptá: „kdy přijdete?"** — vy hledáte v Outlooku a dvou Excelech zároveň.

### 💸

**Specializovaný revizní software** (RevizeOnline, Revize.eu) je drahý, uzavřený, a pořád neřeší obchodní stránku — klienty, nabídky, smlouvy. Vedete tak dva systémy vedle sebe.

:::

::::sekce{pozadi="svetle"}

## Náš datový model pro revizní firmy

Stejná kostra, kterou používáme pro HVAC servis. Páteř je **Zařízení** — u vás konkrétní
revidovaný objekt: rozvaděč, hromosvod, kotelna. Všechno ostatní (zakázky, zprávy, lhůty) na něj navazuje.

```
Klient (Bytové družstvo Vyšehrad)
  ↓
  Místo (objekt s.č. parc. 14/3)
       ↓
       Zařízení: Hlavní rozvaděč 400V (s.č. R-2018-04)
              ↓
              Servisní plán: revize 1× za 3 roky (běží sám)
                    ↓
                    Zakázka 2024-06: Revize — PDF zápis
                          ↓
                          Výjezd (technik Novák) → Výkaz práce
                    Zakázka 2027-06: Revize (auto-naplánováno)
       Zařízení: Hromosvod východní
              ↓
              Zakázka 2025-09: Revize …
```

:::karty{sloupce="2"}

### Kompletní historie

Každého konkrétního zařízení napříč lety a techniky. Vyhledávání podle sériového čísla, klienta, typu zařízení.

### Servisní plán hlídá lhůty

Na zařízení založíte servisní plán s frekvencí (ročně / po 2 / 3 letech). Systém podle nastaveného pravidla hlídá termíny a generuje další zakázku sám.

### Archiv PDF zápisů

Všechny revizní zprávy přiřazené k zařízení, dohledatelné během sekundy. Při selfhostu data zůstávají u vás na serveru.

### Plánovač výjezdů

Týdenní rozvrh s detekcí kolizí. Když má jeden technik dva výjezdy ve stejný čas, systém ho označí.

:::

::::

## Co od nás dostanete

V ceně {{cena.implementation}} nasazení + měsíční paušál.

:::karty{sloupce="2"}

### 📊 Datový model pro revize

- Klient, Místo, Zařízení (revidovaný objekt — elektro / plyn / EPS / hromosvod / výtah), Servisní plán, Zakázka, Výjezd, Výkaz práce
- Lhůta revize u každého zařízení — nastavíte si ji podle typu a smlouvy
- Pole „Kdo smí dělat" — vy si u techniků evidujete, na co mají oprávnění
- ARES auto-fill firmy podle IČO

### 🔁 Servisní plán běží sám

- Na zařízení nastavíte frekvenci (ročně / po 2 / 3 / 5 letech)
- Podle nastaveného pravidla se vygeneruje další zakázka + výjezd v plánovaný termín
- Po výpadku negeneruje retroaktivně — posune termín na nejbližší budoucí

### 📱 Mobil pro revizní techniky v terénu

- **📍 Dnes**, **⚠️ Chybí výkaz**, **📅 Můj plán**
- Vyplnění zápisu na místě (popis, závady, materiál)
- Razítko podpisu zákazníka (jméno, datum, místo)

### 📄 PDF revizní zpráva

- Hlavička s vaším logem, klient, místo plnění, podpisy
- Souhrn práce (popis, použitý materiál, závady)
- **🤖 AI souhrn z výkazů** (BYOK — vaše klíče k AI, tokeny platíte přímo poskytovateli)
- Archivace uvnitř Twenty, filtrované pohledy (rok, zařízení, technik)

:::

::::sekce{pozadi="svetle"}

::reseni-volba{doporuceno="servis" proc="Vracíte se k témuž zařízení podle termínů a potřebujete doložit, co se tam kdy dělalo. Twenty Servis má karty zařízení, servisní plán a výkaz technika z terénu." alternativa="Revize jsou u vás vedlejší a hlavní je obchod — sháníte zakázky, děláte nabídky a hlídáte marži? Pak vám sedne Twenty Sales."}

::::

::demo-cta{produkt="servis"}

## Čím se lišíme od toho, co používáte dnes

:::karty{sloupce="1"}

### RevizeOnline / Revize.eu — silnější v hotových formulářích, ale:

- ❌ Drahé (často 500+ Kč/měs/uživatel) a uzavřené
- ❌ Žádné CRM — klienti, kontakty, faktury jsou jinde, máte 2 systémy
- ❌ Závislost na dodavateli a uzavřený formát dat

**Náš přístup:** jeden otevřený systém pro klienty, plánování
i evidenci zásahů, bez poplatků za uživatele. Zápis z revize u nás vzniká jako dokument
se souhrnem toho, co jste na místě zapsali — **není to ale předepsaný oborový formulář**.
Pokud potřebujete tiskopisy přesně podle konkrétní normy, specializovaný revizní software
je v tomhle dál a řekneme vám to rovnou.

:::

::rozsireni{kontext="servis"}
