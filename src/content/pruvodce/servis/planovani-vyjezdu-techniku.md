---
title: Plánování výjezdů techniků — jak na to, aby se nic nekřížilo a nic nezapadlo
description: Jak plánovat výjezdy servisních techniků bez kolizí a zapomenutých prohlídek — společný plán týmu, pravidelné prohlídky z karty zařízení, výkaz v telefonu. A jak to řeší Twenty Servis.
vMenu: Plánování výjezdů
draft: true
poradi: 1
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [servis]
funkce: [vlastni-zaznamy, pohledy, dashboardy, role-opravneni]
zdroje: [twenty-capabilities-calendar-view, twenty-capabilities-objects, docs-opravneni]
---

**Výjezdy techniků se dobře plánují ze dvou věcí: z jednoho společného plánu, ve kterém dispečer
vidí všechny techniky najednou, a ze zařízení, která si samy říkají o pravidelnou prohlídku.**
Když plán žije v hlavě dispečera, v diáři a ve skupinovém chatu, kolize se objeví až ráno u auta
a prohlídka, na kterou nikdo nepamatoval, se ozve reklamací.

## Jak plánovat výjezdy, aby to drželo

Tyhle zásady platí bez ohledu na to, v čem plánujete — v tabulce, v kalendáři nebo v aplikaci.

1. **Oddělte zakázku od výjezdu.** Zakázka je celá akce („roční servis kotlů u klienta"),
   výjezd je jedna návštěva v jeden den. Zakázka může mít víc výjezdů a na jeden výjezd může jet
   víc techniků. Kdo to míchá dohromady, neví, kolikrát už se u klienta jelo.
2. **Jeden plán pro celý tým.** Technici v řádcích, dny ve sloupcích. Dispečer musí na jedné
   obrazovce vidět, kdo má kdy volno — ne listovat pěti kalendáři.
3. **Kolize ať hlídá systém, ne paměť.** Každý výjezd potřebuje začátek a konec, ne jen den.
   Pak se dá automaticky poznat, že má technik ve stejnou chvíli dvě místa.
4. **Pravidelné prohlídky plánujte od zařízení, ne z diáře.** U každého zařízení má být
   napsané, jak často se na něj jezdí. Lhůty si nastavíte podle smlouvy s klientem a podle toho,
   co pro dané zařízení platí — systém je pak hlídá místo vás.
5. **Technik má plán i výkaz v telefonu.** Ráno vidí, kam jede a komu volat. Výkaz vyplní
   na místě, ne večer z paměti — a dispečer hned vidí, který výjezd je hotový.

## Co vám to umožní

- **Dispečer** plánuje v jednom týdenním přehledu, kolize vidí hned při plánování a přesun
  výjezdu je otázka několika kliknutí, ne obvolávání.
- **Technik** ráno otevře telefon a má dnešní výjezdy s adresou a kontaktem. Výjezdy, ke kterým
  zapomněl uzavřít výkaz, vidí v přehledu zvlášť.
- **Majitel** nemusí držet servisní plány v hlavě. Pravidelné prohlídky se zakládají samy
  a nic nepřestane fungovat, když je dispečer na dovolené.
- **Účetní** dostane z hotových výkazů hodiny, kilometry a materiál pohromadě — podklad
  k fakturaci bez přepisování z papírů.

## Jak to dělá Twenty Servis

[Twenty Servis](/pro-servisni-firmy/) je naše hotové řešení pro montáž a servis u zákazníka,
postavené jako nadstavba nad open-source Twenty. Stojí na řetězci **Zakázka → Výjezd → Výkaz
práce**, který navazuje na **Klienta**, jeho **Místa** (pobočky s adresou) a **Zařízení**.

- **Plánovač týmu.** Týdenní přehled — sloupce dny, řádky technici, barevné bloky výjezdů.
  Na jeden výjezd přidáte víc techniků a každý pak vyplňuje vlastní výkaz. Vícedenní výjezd se
  rozdělí na denní bloky.
- **Kolize.** Když má technik dva výjezdy přes sebe, systém to označí přímo na výjezdu,
  červeně ve vytížení týmu a v samostatném seznamu kolizí v přehledu dispečera.
- **Přesun.** Výjezd vyberete, kliknete na nový den a potvrdíte. Víkendy a státní svátky
  systém přeskočí sám.
- **Servisní plán.** U zařízení nastavíte, jak často se na něj jezdí — měsíčně, čtvrtletně,
  pololetně, ročně, jednou za dva nebo tři roky. Systém v noci sám založí další zakázku i výjezd
  na plánovaný termín a přiřadí je technikovi, který má zařízení na starosti. Vyřazené zařízení nebo pozastavený plán
  se přeskočí; po výpadku se zameškané termíny nezakládají zpětně, plán pokračuje nejbližším
  budoucím.
- **Telefon technika.** Systém se otevře v prohlížeči telefonu a dá se přidat na plochu.
  Technik vidí přehledy *Dnes*, *Chybí výkaz* a *Můj plán*. Ve výkazu vyplní hodiny, kilometry,
  materiál a popis práce; podpis zákazníka i technika se na zakázce potvrdí razítkem se jménem,
  datem a místem.

Z hotových výkazů pak vznikne PDF zakázkový list s vaším logem. Fakturu z něj vystaví váš
fakturační program — [napojení na fakturaci](/napojeni-na-fakturaci/) je jediné rozšíření,
které k tomu nabízíme.

Zakázky i výjezdy jsou běžné záznamy Twenty, takže si je kromě plánovače můžete zobrazit i v jeho
pohledech — jako tabulku, nástěnku podle stavu nebo kalendář podle data. Jak pohledy fungují,
popisuje [dokumentace výrobce](https://docs.twenty.com/cs/user-guide/views-pipelines/capabilities/calendar-view).

:::poznamka[Ilustrační příklad]{ton="info"}

Servisní firma s kotli u bytových domů. Na čtvrtek dopoledne má technik Petr roční prohlídku
kotle — zakázku i výjezd založil systém sám ze servisního plánu, protože Petr má kotel
na starosti. Ve čtvrtek ráno volá jiný klient s poruchou. Dispečerka Jana založí zakázku, přidá
výjezd a v plánovači ho dá Petrovi hned po prohlídce. Blok se zbarví červeně — prohlídka trvá
déle, než Jana počítala. Výjezd posune o hodinu a kolize zmizí.

Petr má v telefonu v přehledu *Dnes* oba výjezdy s adresou a kontaktem. Výkazy vyplní na místě
a zákazník potvrdí podpis. Večer Jana vystaví zakázkový list a pošle ho klientovi; účetní
z něj vystaví fakturu ve fakturačním programu.

:::

## Co je k tomu potřeba

- **Twenty Servis** — nasazení za {{cena.implementation}} bez DPH jednorázově, provoz
  na vyhrazeném serveru {{cena.retainer_selfhost|mesicne}} bez DPH. Bez poplatku za každého
  dalšího technika. Podrobnosti v [ceníku](/cenik/).
- **Telefon s prohlížečem** pro každého technika. Nic se neinstaluje, všichni mají stejnou verzi.
- **Seznam klientů, míst a zařízení** — z Excelu nebo papírů je převedeme při nasazení,
  viz [přechod z Excelu](/migrace-z-excelu/).
- **Role** — dispečer vidí a plánuje všechno, technik hlavně své výjezdy. Nastavíme je při
  nasazení.

Jestli vám víc chybí přehled o samotných zakázkách než o plánu, pokračujte článkem
[Evidence zakázek: kdy stačí Excel a kdy aplikace](/twenty/servis/evidence-zakazek/).

:::otazky

### Potřebují technici instalovat aplikaci?

Ne. Systém se otevře v prohlížeči telefonu a dá se přidat na plochu, kde se chová jako aplikace.
Technik vidí přehled upravený pro malý displej — dnešní výjezdy, chybějící výkazy a týdenní plán.

### Co když technik onemocní?

Dispečer v plánovači přeřadí jeho výjezdy na jiného technika nebo je posune na jiný den.
Případnou kolizi s plánem kolegy systém hned označí.

### Hlídá systém zákonné lhůty revizí a prohlídek?

Systém hlídá lhůty, které si nastavíte. Interval u každého zařízení zadáváte vy podle smlouvy
s klientem a podle toho, co pro dané zařízení platí. Výklad předpisů zůstává na vás.

### Dá se plánovat i montáž, nejen servis?

Ano. Montáž je v Twenty Servis jen typ zakázky. Zařízení, které namontujete, má rovnou kartu
s datem instalace a zárukou a může na něj navázat servisní plán.

:::
