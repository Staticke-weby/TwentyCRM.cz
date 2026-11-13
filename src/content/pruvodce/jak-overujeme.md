---
title: Jak průvodce ověřujeme
description: Odkud bereme informace o Twenty, co znamenají štítky „Lze nastavit dnes“ a „Připravuje se“ a jak často průvodce kontrolujeme proti novým verzím.
vMenu: Jak ověřujeme
poradi: 99
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [platforma]
funkce: [mcp-server, mcp-klient, smer-vestavene-asistenty]
zdroje: [gh-vydani, twenty-vydani, docs-mcp, gh-prepinace]
---

Twenty vydává zhruba dvě nové verze týdně. Popis, který byl pravdivý před měsícem, dnes už pravdivý být
nemusí — proto u každé funkce uvádíme, **v jakém je stavu**, a u každého článku, **kdy jsme ho naposledy
ověřili**.

Průvodce píše ESHOpino s.r.o., nezávislá česká agentura, která Twenty nasazuje a spravuje.
Nejsme výrobce Twenty a nemáme od něj žádné informace navíc — vycházíme jen z toho, co výrobce
zveřejní.

## Odkud informace bereme

- **Poznámky k vydáním** na GitHubu výrobce — co přesně která verze přinesla.
- **Dokumentace výrobce** na docs.twenty.com — jak funkce funguje a pro koho je.
- **Ceník** na twenty.com — tarify a co obsahují.
- **Zdrojový kód** — u funkcí, které výrobce ohlásil, ale ještě je nevydal pro všechny.

Údaje o trhu, konkurenci a statistiky uvádíme jen s odkazem na původní zdroj, ne z druhé ruky.

## Co znamenají štítky

Každá funkce Twenty, o které píšeme, je v jednom ze tří stavů:

- **Lze nastavit dnes** — Twenty to dnes umí a dá se to nastavit; neznamená to, že je to hotové v našem řešení.
  Uvádíme i verzi, od které to Twenty má. Co je hotové v Twenty Sales a Twenty Servis, popisují
  [stránky řešení](/ktere-crm-vybrat/).
- **Připravuje se** — výrobce ji ohlásil, ale ještě ji nevydal jako hotovou pro všechny. Štítek
  u ní říká proč: **ve vývoji** (v kódu je, ale zatím vypnutá), **zkušební provoz**, **ohlášeno
  v dokumentaci** nebo **rozpracováno**. Nikdy ji nepopisujeme jako hotovou.
- **Směr vývoje** — na funkci se v kódu pracuje, ale výrobce ji ještě neohlásil. Ukazuje, kam Twenty míří,
  a nic neslibuje.

Doplňující štítky říkají, kde funkce platí: **jen na vlastním serveru**, **jen v cloudu výrobce**,
nebo **v tarifu Organization**. Takhle to vypadá u napojení pro AI nástroje:

::stav-funkci{funkce="mcp-server,mcp-klient,smer-vestavene-asistenty" smer}

## Co je Twenty a co je naše

Funkce Twenty popisujeme jako funkce Twenty. Naše řešení **Twenty Sales** a **Twenty Servis** a to,
co pro klienty nastavujeme — zadání pro AI agenty, automatizace, napojení na fakturaci — vždy
označujeme jako naši práci nad open-source Twenty, ne jako vlastnost samotného Twenty.

## Jak často kontrolujeme

- **Každý týden** projdeme nová vydání Twenty a zkontrolujeme, že odkazy na zdroje fungují.
  Když se změní funkce, o které článek mluví, článek přeověříme.
- **Každý měsíc** shrneme česky, co nového Twenty přineslo.
- **Každé čtvrtletí** znovu projdeme všechny články starší než 90 dní, ceny a statistiky.

Pod každým článkem najdete datum posledního ověření, verzi Twenty, proti které jsme ověřovali,
a seznam zdrojů.

## Našli jste chybu?

Pokud něco v průvodci neodpovídá tomu, co vidíte v Twenty, [napište nám]({{mailto.otazka}}).
Opravíme to a do článku doplníme, co se změnilo.
