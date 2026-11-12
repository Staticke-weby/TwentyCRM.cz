---
title: Evidence zakázek v Excelu, nebo v aplikaci? Kdy tabulka stačí a kdy už ne
description: Kdy evidence servisních zakázek v Excelu stačí, podle čeho poznáte, že přestává (víc techniků, historie zařízení, termíny prohlídek, sdílení), a jak vypadá evidence zakázek v Twenty Servis.
vMenu: Evidence zakázek
draft: true
poradi: 2
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [servis, data]
funkce: [vlastni-zaznamy, pohledy, import-export, ai-import, ai-chat]
zdroje: [twenty-data-migration-overview, twenty-capabilities-objects, docs-ai-chat, twenty-vydani]
---

**Excel na evidenci zakázek stačí, dokud ji vede jeden člověk, zakázky se neopakují a nikdo
nepotřebuje dohledat, co se na konkrétním zařízení dělalo před dvěma lety.** Jakmile do tabulky
zapisuje víc lidí, technici potřebují data v terénu a vy hlídáte pravidelné prohlídky, je
na čase aplikace, ve které je zakázka navázaná na klienta, zařízení a výkaz technika.

## Kdy Excel stačí

Excel je dobrý nástroj a spoustě firem slouží roky. Umí ho každý, nic navíc nestojí a sloupec
přidáte za minutu. Na evidenci zakázek bohatě stačí, když:

- zakázky zapisuje a čte hlavně jeden člověk,
- jde většinou o jednorázové práce, ke kterým se nevracíte,
- historii zařízení u klienta nepotřebujete, nebo ji máte v hlavě,
- fakturujete z několika řádků měsíčně.

Aby tabulka vydržela co nejdéle: **jeden řádek = jedna zakázka** s vlastním číslem, sloupec
se stavem a datem, rozbalovací seznamy místo volného psaní a hotové zakázky nemazat, jen
označit.

## Kde Excel přestává stačit

Tabulka se nerozbije najednou. Obvykle si všimnete jednoho z těchto signálů:

- **Zapisuje víc lidí.** Dispečer, dva technici a účetní — každý trochu jinak. Vznikají kopie
  souboru, přepsané buňky a otázka, která verze platí.
- **Klient se ptá na historii zařízení.** „Kdy jste u nás byli naposledy a co jste měnili?"
  V tabulce, kde je řádek zakázka, se odpověď skládá z filtrování přes několik let a listů.
- **Termíny prohlídek.** Tabulka termín obarví, ale jen tomu, kdo ji zrovna otevře. Pravidelná
  prohlídka, na kterou nikdo nepamatoval, se pak ozve jako reklamace.
- **Technik je v terénu.** Na displeji telefonu se tabulka se třiceti sloupci vyplňuje špatně,
  takže výkaz vzniká na papíře a večer se přepisuje.
- **Podklad k fakturaci se skládá ručně.** Hodiny, kilometry a materiál se sčítají z papírů
  a zpráv a na něco se zapomene.

Pokud poznáváte dva a víc bodů, je čas podívat se po aplikaci.

## Co vám aplikace umožní

- **Dispečer** má zakázky, výjezdy a technika pohromadě a nemusí dohledávat, kdo objekt zná.
- **Technik** vidí u zařízení celou servisní historii a výkaz vyplní v telefonu na místě.
- **Majitel** vidí stav všech zakázek a jejich hodnotu, aniž by někoho obvolával.
- **Účetní** dostane z hotových výkazů hodiny, kilometry a materiál jako jeden podklad.

## Jak vypadá evidence zakázek v Twenty Servis

[Twenty Servis](/pro-servisni-firmy/) je naše hotové řešení pro montáž a servis u zákazníka,
postavené jako nadstavba nad open-source Twenty. Zakázka v něm není řádek, ale záznam s vazbami:

- **Klient → Místo → Zařízení.** Zakázka patří klientovi, konkrétní pobočce (adresa se do ní
  propíše sama) a zařízení. Karta zařízení ukazuje otevřené i uzavřené zakázky, poslední servis
  a živý stav záruky.
- **Typ a stav zakázky.** Montáž, servis, revize, oprava, prohlídka… Montáž je jen typ zakázky,
  takže co namontujete, to pak na stejné kartě servisujete.
- **Výjezdy a výkazy pod zakázkou.** Zakázka má jeden nebo víc výjezdů, každý technik k nim
  vyplní vlastní **Výkaz práce** — hodiny, kilometry, materiál, popis práce.
- **Servisní plán.** Opakované zakázky na pravidelné prohlídky zakládá systém sám podle lhůty,
  kterou si u zařízení nastavíte.
- **Nabídka a zakázkový list.** K zakázce sestavíte nabídku z ceníku a z hotových výkazů
  vystavíte PDF zakázkový list s vaším logem. Popis práce pro klienta z textů techniků umí sestavit
  i AI — s vlastními klíči k AI, takže za ni platíte přímo jejímu poskytovateli.

Protože jde o záznamy open-source Twenty, fungují nad nimi i jeho běžné nástroje: pohledy jako
tabulka, nástěnka podle stavu nebo kalendář, filtry a AI chat, kterého se zeptáte běžnou řečí
třeba na to, kdy se na zařízení jezdilo naposledy.

Fakturu z podkladů vystaví váš fakturační program. Kdo chce podklady posílat rovnou do něj,
pro toho je [napojení na fakturaci](/napojeni-na-fakturaci/).

## Jak přejít z Excelu

Data z Excelu nebo CSV se do Twenty nahrávají importem, který sloupce přiřadí k polím podle názvu
a typu dat ([přechod z Excelu](/twenty/data/prechod-z-excelu-s-ai/)). Kdykoli je zase vyexportujete, takže v systému nejste uzamčení. Jak import
funguje, popisuje [dokumentace výrobce](https://docs.twenty.com/cs/user-guide/data-migration/overview).

Nemusíte převádět celou historii. Většinou stačí klienti, místa, zařízení a datum poslední
prohlídky — starší papíry zůstanou v archivu. Postup popisujeme na stránce
[Z Excelu do Twenty](/migrace-z-excelu/).

:::poznamka[Ilustrační příklad]{ton="info"}

Firma, která servisuje kávovary v kavárnách a kancelářích, vede zakázky v tabulce. Klient se třemi
pobočkami volá, že kávovar v jedné z nich hlučí, a ptá se, jestli je ještě v záruce. Dnes
dispečerka hledá v tabulce zakázek, v e-mailech a v dodacích listech.

V Twenty Servis otevře klienta, pobočku a kávovar. Na kartě vidí, že záruka platí ještě dva
měsíce, poslední servis dělal technik Tomáš a měnil těsnění. Založí zakázku na opravu
a výjezd dá Tomášovi, který stroj zná.

:::

## Co je k tomu potřeba

- **Twenty Servis** — nasazení za {{cena.implementation}} bez DPH jednorázově, provoz
  na vyhrazeném serveru {{cena.retainer_selfhost|mesicne}} bez DPH, bez poplatků za uživatele.
  Podrobnosti v [ceníku](/cenik/).
- **Vaše tabulky** — klienty, místa a zařízení převedeme při nasazení.
- **Pár dní na rozjezd** — nasazení hotového řešení je v řádu jednotek pracovních dní,
  včetně školení na vašich datech.
- **Klíč k AI** — jen pokud chcete AI chat a souhrn z výkazů. Vlastní klíče k AI (BYOK)
  znamenají, že za AI platíte přímo jejímu poskytovateli, bez naší přirážky.

Jak se pak plánuje, kdo kam pojede, popisuje článek
[Plánování výjezdů techniků](/twenty/servis/planovani-vyjezdu-techniku/).

:::otazky

### Musíme převést celou historii z Excelu?

Ne. Obvykle stačí klienti, místa, zařízení a datum posledního servisu nebo prohlídky. Od té chvíle
historie vzniká v systému sama a staré tabulky zůstanou jako archiv.

### Můžeme data dostat zpátky do Excelu?

Ano. Záznamy z Twenty kdykoli vyexportujete. Data jsou vaše a na vyhrazeném serveru, který
slouží jen vaší firmě.

### Nahradí to náš fakturační program?

Ne — fakturu dál vystavuje program, který už používáte. Twenty Servis k ní připraví podklad:
hodiny, kilometry, materiál a zakázkový list. Napojení na fakturační program řešíme na požadavek.

### Je aplikace dražší než Excel?

Excel nic navíc nestojí, aplikace ano. Vyplatí se ve chvíli, kdy vás tabulka stojí čas —
přepisováním výkazů, dohledáváním historie nebo zapomenutou prohlídkou. Cenu nasazení a provozu
najdete výše, za další techniky nic nepřiplácíte.

:::
