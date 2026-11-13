---
title: Servisní výkaz — co má obsahovat a jak ho technik vyplní v mobilu
description: Co patří do servisního výkazu, aby z něj šlo fakturovat a za rok dohledat, co se na zařízení dělalo. A jak technik vyplní Výkaz práce v Twenty Servis přímo v telefonu — hodiny, kilometry, materiál, popis práce a podpis.
vMenu: Servisní výkaz
poradi: 3
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [servis]
funkce: [vlastni-zaznamy, pohledy, role-opravneni]
zdroje: [twenty-capabilities-objects, docs-opravneni]
---

**Dobrý servisní výkaz odpoví na tři otázky: kdo, kdy a na čem pracoval, co přesně udělal a co
z toho se bude účtovat. Nejlépe se vyplňuje hned na místě v telefonu — ne večer z paměti
a ne na papír, který se pak přepisuje.**

Výkaz je podklad pro tři lidi najednou: pro účetní, která podle něj fakturuje, pro klienta, který
chce vědět, za co platí, a pro technika, který na stejné zařízení přijede za rok. Když v něm něco
chybí, doplácí na to vždycky někdo z nich.

## Co má servisní výkaz obsahovat

Tohle je běžná dobrá praxe, ne výklad předpisů. Co musíte evidovat u konkrétního zařízení
podle smlouvy nebo podle předpisů, si určujete vy.

1. **K čemu výkaz patří.** Klient, pobočka s adresou, zakázka a konkrétní zařízení — ideálně
   s výrobním číslem, aby se dalo dohledat i po výměně štítku na dveřích.
2. **Kdo a kdy.** Jméno technika, datum, čas příjezdu a odjezdu. Když jedou dva, každý
   má vlastní záznam — jinak se hodiny sčítají špatně.
3. **Odpracovaný čas a cesta.** Hodiny práce a ujeté kilometry, protože se obvykle účtují
   zvlášť.
4. **Popis práce.** Co technik zjistil a co udělal, konkrétně: „vyměnil těsnění bojleru,
   vyčistil sítka", ne „servis proveden".
5. **Materiál a díly.** Co se vyměnilo a v jakém množství. Na tohle se zapomíná nejčastěji,
   a přitom to jsou peníze.
6. **Co zůstalo otevřené.** Když se práce nedokončila — chyběl díl, klient nebyl k zastižení —
   napsat proč. Z toho dispečer pozná, že je potřeba další výjezd.
7. **Potvrzení zákazníka.** Kdo za klienta převzal práci, kdy a kde.

## Co vám to umožní

- **Účetní** fakturuje z jednoho podkladu, ve kterém jsou hodiny, kilometry i materiál, a nemusí
  nic dohledávat ve zprávách.
- **Dispečer** hned vidí, který výjezd je hotový, a kde výkaz chybí.
- **Technik** má u zařízení celou historii — co se měnilo a kdo tam byl naposledy.
- **Klient** dostane srozumitelný přehled provedené práce s vaším logem, ne opis poznámek.

## Jak to funguje v Twenty Servis

[Twenty Servis](/pro-servisni-firmy/) je naše hotové řešení pro montáž a servis u zákazníka,
postavené jako nadstavba nad open-source Twenty. Výkaz v něm není samostatný papír, ale
záznam **Výkaz práce**, který visí pod **Výjezdem**, ten pod **Zakázkou** a ta u **Klienta**,
jeho **Místa** a **Zařízení**. Klient, adresa i zařízení jsou tedy ve výkazu dané předem —
technik je nevyplňuje.

**V telefonu.** Systém se otevře v prohlížeči telefonu a dá se přidat na plochu. Technik ráno
vidí přehled *Dnes* s výjezdy, adresou a kontaktem. Po příjezdu klepne na výjezd a zapíše čas
příjezdu.

**Vyplnění výkazu.** Po práci vyplní:

- **čas odjezdu nebo počet hodin** — stačí jedno, druhé systém dopočítá,
- **kilometry** tam i zpět,
- **popis práce** a **použitý materiál**,
- **důvod nedokončení**, pokud se něco nestihlo.

Když na výjezd jedou dva technici, každý má vlastní výkaz. Hotový výkaz technik označí přepínačem
*Hotový výkaz* — teprve pak se započítá do souhrnu zakázky. Výkazy, které po termínu výjezdu
zůstaly neuzavřené, vidí technik v přehledu *Chybí výkaz*, takže nic nevisí týdny.

**Podpis.** Na zakázce se potvrdí podpis za zákazníka i za dodavatele. Systém k němu vytvoří
razítko se jménem, datem, časem a místem podpisu. Podpis je nepovinný a dá se doplnit později.

**Zakázkový list.** Z hotových výkazů vznikne na zakázce přehled — kdo, kdy, kolik hodin, kolik
kilometrů a jaký materiál — a z něj PDF zakázkový list s vaším logem pro klienta a jako podklad
k fakturaci. Popis provedené práce pro klienta umí z textů techniků sestavit i AI; text si pak
upravíte ručně.

Výkazy jsou běžné záznamy Twenty, takže je kromě přehledů technika zobrazíte i jako tabulku
nebo s filtry — třeba všechny výkazy za měsíc u jednoho klienta. Co kdo vidí a smí upravit,
určují role: technik pracuje hlavně se svými výjezdy, dispečer vidí všechno. Jak typy záznamů
v Twenty fungují, popisuje [dokumentace výrobce](https://docs.twenty.com/cs/user-guide/data-model/capabilities/objects).

:::poznamka[Ilustrační příklad]{ton="info"}

Firma servisuje kávovary v kavárnách. Technik Martin přijede v úterý v devět, v přehledu *Dnes*
klepne na výjezd a zapíše čas příjezdu. Vymění mlecí kotouč a dvě těsnění, do výkazu napíše
„1× mlecí kotouč, 2× těsnění bojleru", 2 hodiny a 24 km. Vedoucí směny potvrdí podpis na zakázce
a Martin označí výkaz jako hotový.

Odpoledne dispečerka otevře zakázku, nechá z výkazu sestavit popis práce pro klienta, upraví
jednu větu a vystaví PDF zakázkový list. Účetní z něj fakturuje ve svém programu.

:::

## Co je k tomu potřeba

- **Twenty Servis** — nasazení za {{cena.implementation}} bez DPH jednorázově, provoz
  na vyhrazeném serveru {{cena.retainer_selfhost|mesicne}} bez DPH, bez poplatku za každého
  dalšího technika. Podrobnosti v [ceníku](/cenik/).
- **Telefon s prohlížečem** pro každého technika. Nic se neinstaluje a všichni mají stejnou verzi.
- **Logo** pro zakázkový list — nahrajete ho jednou.
- **Klíč k AI** — jen pokud chcete popis práce sestavovat z výkazů pomocí AI. Vlastní klíče k AI
  (BYOK) znamenají, že za AI platíte přímo jejímu poskytovateli.

Fakturu z podkladů vystavuje váš fakturační program. Kdo chce podklady posílat rovnou do něj,
pro toho je [napojení na fakturaci](/napojeni-na-fakturaci/). Jak se výjezdy plánují, popisuje
článek [Plánování výjezdů techniků](/twenty/servis/planovani-vyjezdu-techniku/).

:::otazky

### Musí technik vyplňovat všechno?

Ne. Klient, adresa a zařízení jsou ve výkazu dané z výjezdu. Technik zapíše čas, kilometry,
popis práce a materiál; u času stačí buď odjezd, nebo počet hodin.

### Co když jedou na výjezd dva technici?

Každý vyplní vlastní výkaz. Zakázkový list je pak sečte dohromady a u každého řádku je vidět,
kdo práci dělal.

### Co když zákazník nechce podepsat?

Podpis je nepovinný. Zakázkový list vystavíte i bez něj a podpis můžete doplnit později.

### Dají se přiložit fotky?

Ano, jako přílohu. Fotku technik vyfotí telefonem a nahraje ji k záznamu.

### Kdo z výkazů napíše text pro klienta?

Na zakázce je tlačítko, které z hotových výkazů sestaví souhrnný popis práce — pomocí AI nebo
podle šablony. Text si pak upravíte, jak potřebujete.

:::
