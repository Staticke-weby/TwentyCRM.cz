---
title: Jak přejít z Excelu do CRM s pomocí AI — import, duplicity a cesta zpět
description: Tabulky z Excelu se do Twenty nahrají importem s automatickým přiřazením sloupců a kontrolou duplicit na obrazovce. Kde do přechodu vstupuje AI — import přes AI chat, slučování duplicit, pravidla pro nová data — a jak data kdykoli vyexportovat zpět.
vMenu: Z Excelu s AI
draft: true
poradi: 3
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [data, ai, migrace]
funkce: [import-export, ai-import, slucovani-duplicit, kontrola-dat, ai-chat]
zdroje: [twenty-data-migration-overview, twenty-vydani, twenty-capabilities-file-formats, twenty-capabilities-field-mapping, twenty-capabilities-uniqueness-constraints, twenty-how-tos-export-your-data, docs-server-nastaveni, github-twenty-v2-18-0, github-twenty-v2-51-0, github-twenty-v2-53-1]
---

**Tabulky z Excelu se do Twenty nahrají importem: Twenty samo navrhne, který sloupec patří do
kterého pole, zvýrazní duplicitní řádky a chyby necháte opravit přímo na obrazovce. AI pomůže
tam, kde se při přechodu dřív ztrácely hodiny — sloučí dvakrát založené záznamy, větší soubory
umí nahrát přes AI chat a pomůže nastavit pravidla, aby nová data zůstala čistá.**

Kdy Excel na evidenci přestává stačit, popisuje článek [Evidence zakázek: Excel, nebo aplikace](/twenty/servis/evidence-zakazek/),
co z tabulek převádíme při nasazení, stránka [Z Excelu do Twenty](/migrace-z-excelu/). Tady je,
jak samotný import funguje a kde do něj vstupuje AI.

## Co vám to umožní

- **Žádné přepisování.** Klienti, kontakty, obchody i zařízení se nahrají ze souborů, které už máte.
- **Přechod po částech.** Nejdřív klienty, za týden zbytek. Opakovaný import záznamy podle
  jedinečného pole aktualizuje, nezaloží je podruhé.
- **Úklid hned na začátku.** Duplicity v souboru uvidíte před nahráním, ty v systému sloučíte
  po něm — dřív, než nad daty začne pracovat AI.
- **Cesta zpět.** Data kdykoli vyexportujete do CSV a otevřete v Excelu. Nejste uzamčeni.

## Jak import v Twenty funguje

- **Soubory:** CSV, XLSX i starší XLS, do 10 000 záznamů v jednom souboru. První řádek nese
  názvy sloupců, v souboru je jeden typ záznamu, bez vzorců a sloučených buněk; načte se první list.
- **Pořadí:** nejdřív klienti, pak kontaktní osoby, obchodní případy a nakonec další typy
  záznamů. Vazba se odkazuje na záznam, který už v systému je — kontaktní osobu ke klientovi
  přiřadí třeba doména firmy.
- **Přiřazení sloupců:** Twenty je navrhne podle názvu sloupce a typu dat (datum, číslo, e-mail).
  Nejjistější je vyexportovat pár řádků z Twenty a použít jejich názvy sloupců. Pole a hodnoty
  výběru musí v systému existovat předem — import zakládá záznamy, ne pole.
- **Kontrola před nahráním:** duplicitní řádky v souboru se zvýrazní žlutě a chyby opravíte
  přímo na obrazovce. Od verze 2.53.1 se při chybě neztratí rozpracovaná práce — potvrzené řádky
  zůstanou a chybné jde dál upravovat.
- **Jedinečnost:** osoba se pozná podle e-mailu, firma podle domény, další typy podle polí, která
  označíte jako jedinečná. Shodný záznam se aktualizuje místo zdvojení. Pozor: počítají se
  i smazané záznamy — import je obnoví.

Návod najdete v [dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/data-migration/overview).

## Kde pomůže AI

- **Import přes AI chat.** Od verze 2.18 jde větší CSV nebo tabulku nahrát i přes AI chat,
  včetně párování vazeb a hromadných úprav. Spolehlivý hromadný import stojí podle poznámek
  k vydání na prostředí, ve kterém AI spouští kód. Na vyhrazeném serveru je toto prostředí
  ve výchozím stavu vypnuté a pro ostrý provoz ho dokumentace výrobce počítá u samostatné
  služby E2B. Jestli ho zapnout, nebo data nahrát běžným importem, rozhodneme při nasazení.
- **Slučování duplicit po importu.** AI chat projde nahrané záznamy, najde dvojice a sloučí je
  (od verze 2.53.1). Vazby zůstanou u výsledného záznamu. Podrobněji v článku [Proč AI agenti
  chybují na zdvojených a neúplných datech](/twenty/data/proc-agenti-selhavaji/).
- **Pravidla pro nová data.** AI pomůže sestavit pravidlo pro kontrolu dat, třeba „zařízení musí
  mít výrobní číslo" (tarif Organization). Pravidla platí i pro import — aktivní pravidlo
  nepustí řádky, které ho nesplní. Při převodu proto pravidla zapínáme až po nahrání starých dat.
- **Kontrola úplnosti.** Zeptejte se AI chatu, kolik klientů nemá vyplněné IČO nebo kolik
  zařízení nemá datum posledního servisu. Co dál, popisuje [kontrolní seznam před nasazením AI](/twenty/data/kontrolni-seznam-dat/).

## Cesta zpět: export

Záznamy vyexportujete z kteréhokoli pohledu do CSV: export obsahuje sloupce, které v pohledu
vidíte, a záznamy, které odpovídají filtru, najednou až 20 000. Hodí se na zálohu, rozbor
v Excelu i hromadnou úpravu — export, oprava, import zpět. Správce serveru navíc od verze 2.51
vyexportuje celý pracovní prostor najednou jako balík souborů CSV. Import i export mají vlastní
oprávnění, takže určíte, kdo smí data hromadně nahrávat a odnášet.

:::poznamka[Ilustrační příklad]{ton="info"}

Firma montující fotovoltaiky má tři tabulky: zákazníky, kontakty a rozjednané nabídky. Nejdřív
se nahrají zákazníci — import zvýrazní 25 řádků se stejnou doménou, které se v tabulce opraví.
Pak kontakty, které se ke klientům přiřadí podle domény, a nakonec obchodní případy. AI chat po
importu najde dvanáct klientů založených dvakrát pod mírně jiným názvem a po potvrzení je sloučí.
Teprve potom se zapne pravidlo, že obchodní případ ve fázi nabídky musí mít částku.

:::

## Co je k tomu potřeba

- **Vaše tabulky** — Excel, CSV nebo export ze starého systému.
- **Rozhodnutí, co převést.** Většinou stačí klienti, kontakty a otevřené obchody, u servisu
  místa, zařízení a datum posledního servisu. Starší historie může zůstat v archivu.
- **Připravená pole.** V řešeních [Twenty Sales](/pro-obchodni-tymy/) a [Twenty Servis](/pro-servisni-firmy/)
  — našich nadstavbách nad open-source Twenty — jsou typy záznamů i vazby hotové; doplní se jen
  pár polí podle vašich tabulek.
- **Pro import přes AI chat** klíč k AI a zapnuté prostředí pro spouštění kódu; na vyhrazeném
  serveru platíte AI přímo jejímu poskytovateli.
- **Tarif Organization** jen pro pravidla kontroly dat.

:::otazky

### Kolik řádků jde nahrát najednou?

Do 10 000 záznamů v jednom souboru. Větší tabulku rozdělte na víc souborů; u statisíců záznamů
je rychlejší nahrát je přes rozhraní pro vývojáře, což při převodu uděláme my.

### Co když import skončí chybou v půlce?

Od verze 2.53.1 o rozpracovaný import nepřijdete: potvrzené řádky zůstanou a chybné opravíte
na obrazovce.

### Přepíše import data, která už v CRM jsou?

Jen když se shoduje jedinečné pole — e-mail, doména nebo pole, které tak označíte. Pak se záznam
aktualizuje. Pozor u výběru s více hodnotami: import hodnoty nahradí, nepřidá k nim.

### Smíme data z tabulek posílat do AI?

Běžný import se obejde bez AI úplně — data se k žádné AI nedostanou. U importu přes AI chat je
zpracuje poskytovatel AI, jehož klíč na vyhrazeném serveru zadáte, a prostředí pro spouštění
kódu, které je samostatnou službou. Proto o téhle cestě rozhodujeme při nasazení. Víc v článku
[GDPR a AI agenti](/twenty/provoz/gdpr-a-ai-agenti/).

:::
