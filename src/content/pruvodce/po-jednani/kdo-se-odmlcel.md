---
title: Kdo se odmlčel — CRM vám samo řekne, komu se ozvat
description: Twenty umí každé ráno najít klienty a obchodní případy, u kterých se dlouho nic nestalo, a vlastníkovi založit úkol — i s návrhem, jak navázat. Jak to funguje, co je k tomu potřeba a jak nastavit, kolik dní je moc.
vMenu: Kdo se odmlčel
poradi: 3
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [automatizace, obchod, ai]
funkce: [automatizace, cekani-na-udalost, posta-kalendar, pohledy, ai-krok-automatizace, koncept-emailu, ai-chat, slack]
zdroje: [docs-spoustece, docs-akce, docs-ai-chat, twenty-crm-automations-detect-stale-opportunities, twenty-capabilities-filters-and-sorting, github-public-last-contact]
---

**Twenty umí každé ráno projít obchodní případy a klienty, u kterých se delší dobu nic nestalo,
a vlastníkovi založit úkol „ozvat se" — volitelně s krátkým shrnutím a návrhem, jak navázat.**
Stačí automatizace spouštěná podle plánu, která hledá záznamy podle data poslední změny nebo
posledního kontaktu.

Obchody se málokdy ztratí hádkou. Ztratí se tichem: nabídka odešla, klient se neozval a nikdo
si to nepohlídal. Tenhle článek ukazuje, jak ticho v CRM zviditelnit.

## Co vám to umožní

- **Obchodník ví, komu dnes zavolat.** Seznam má v úkolech na dnešek, ne v hlavě nebo v sešitě.
- **Vedoucí vidí, co chladne.** Obchodní případy bez pohybu se ukážou dřív, než z nich je
  propadlá položka v plánu.
- **Nabídka bez odpovědi se připomene sama.** Pár dní po odeslání vznikne úkol, pokud se mezitím
  nic nestalo.
- **Nikdo nezačíná od nuly.** AI k úkolu napíše, co klient naposledy řekl a co se mu slíbilo.
- **I v servisu.** Zakázka, u které neběží žádný další krok, nezapadne mezi ostatními.

## Jak to v Twenty funguje

**Pohled „komu se ozvat".** Seznam obchodních případů nebo klientů seřazený podle data
posledního kontaktu, vyfiltrovaný jen na otevřené. Datum posledního kontaktu doplní bezplatná
aplikace výrobce **Last Contact**: k osobám, firmám a obchodním případům přidá sloupce s datem
posledního e-mailu nebo schůzky a odkazem na ně. U osob navíc rozliší, kdo se ozval naposled —
vy, nebo klient. Plní se sama ze synchronizované pošty a kalendáře, po instalaci i zpětně.

**Automatizace podle plánu.** Jde to postavit z kroků, které Twenty umí dnes:

1. **Spouštěč podle plánu** — třeba každý pracovní den ráno.
2. **Hledání záznamů** — obchodní případy mimo uzavřené fáze, u kterých je poslední změna
   (nebo poslední kontakt) starší než nastavený počet dní.
3. **Pro každý nalezený** založí úkol jeho vlastníkovi, případně pošle souhrnné upozornění
   e-mailem nebo zprávou do Slacku.
4. **Stupňování** — po týdnu úkol obchodníkovi, po dvou týdnech upozornění i vedoucímu.

Výrobce tenhle postup popisuje přímo jako návod v
[dokumentaci](https://docs.twenty.com/cs/user-guide/workflows/how-tos/crm-automations/detect-stale-opportunities)
a doporučuje volit lhůtu podle tempa obchodu: pár dní u rychlých prodejů, měsíc u dlouhých zakázek.

**Čekání po nabídce.** Automatizace spuštěná změnou obchodního případu — například přechodem do
fáze, kdy čekáte na klienta — umí počkat nastavenou dobu a pak pokračovat. Když se obchod mezitím
nepohnul, založí úkol.

**Návrh dalšího kroku od AI.** Do automatizace se vloží krok AI agenta: přečte poslední e-maily
a poznámky k obchodu a do úkolu napíše dvě věty o tom, kde se to zaseklo, a návrh, jak navázat.
Může připravit i koncept e-mailu do schránky obchodníka — odeslání zůstává na člověku
(viz [schválení člověkem](/twenty/po-jednani/schvaleni-clovekem/)).

**Prostě se zeptat.** V AI chatu v Twenty stačí napsat *„Kterým klientům jsem dva týdny nepsal?"*
— podobný dotaz uvádí výrobce v dokumentaci AI chatu jako příklad. Víc v článku
[AI chat v Twenty](/twenty/mcp/ai-chat-v-twenty/).

:::poznamka[Ilustrační příklad]{ton="info"}

Vymyšlená firma dodává průmyslová vrata a obchodník u ní běžně vede dvacet rozjednaných
obchodních případů. Každé pondělí v sedm ráno automatizace najde ty, u kterých se 14 dní nic
nestalo. Obchodník najde v úkolech tři položky „Ozvat se". U jedné stojí: *„Poslední e-mail
od klienta 21. 10.: čekají na schválení rozpočtu na příští rok. Navrhuji zeptat se, kdy rozpočet
schvalují, a nabídnout rezervaci termínu montáže."* Obchod, který visí přes tři týdny, uvidí
v pondělním přehledu i vedoucí.

:::

## Co je k tomu potřeba

- **Připojená pošta a kalendář.** Bez nich zná CRM jen datum poslední ruční úpravy, ne posledního
  rozhovoru s klientem. Viz [e-maily a kalendář na kartě klienta](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/).
- **Aplikace Last Contact** — pro datum posledního e-mailu nebo schůzky. Je zdarma a potřebuje
  synchronizovanou poštu nebo kalendář (Google, Outlook nebo CalDAV).
- **Pravidla, kolik dní je moc** — jiná pro nového zájemce, jiná pro rozjednanou nabídku. Kdo
  dostane úkol a kdy se přidá vedoucí. Automatizaci podle nich lze v Twenty nastavit;
  nastavení je práce navíc: drobnost se vejde do hodiny měsíčně v paušálu, větší úpravu odhadneme předem — viz [SLA balíčky](/sla-balicky/).
- **AI model pro návrh dalšího kroku** — na vyhrazeném serveru přes vaše vlastní klíče k AI,
  platíte přímo poskytovateli. Upozornění samotná AI nepotřebují.

V [Twenty Sales](/pro-obchodni-tymy/), naší nadstavbě nad open-source Twenty, vidí obchodník
datum posledního kontaktu na kartě klienta i obchodního případu a mezi připravenými zadáními pro
AI je i „Neozval se, běží čas". V [Twenty Servis](/pro-servisni-firmy/) má Zakázka pole Předchozí
a Následující úkol, takže zakázka bez dalšího kroku je vidět na první pohled.

:::otazky

### Pozná systém, že jsem klientovi volal?

Telefonát sám nepozná. Počítá s tím, co v CRM je: s e-maily, schůzkami a se zapsanými úkoly
a poznámkami. Když obchodník hovor zapíše, pravidlo se dá nastavit tak, aby s ním počítalo.

### Nebude upozornění tolik, že je přestaneme číst?

Záleží na nastavení. Lhůty se volí podle typu obchodu a místo desítek zpráv může chodit jeden
ranní souhrn. Na prvních týdnech provozu se pravidla doladí.

### Pošle AI klientovi připomínku sama?

Při doporučeném nastavení ne. AI připraví text úkolu nebo koncept e-mailu, který obchodník
zkontroluje a odešle sám.

### Hodí se to i pro servisní firmu?

Ano. Stejný postup najde zakázky, u kterých nic neběží, a pravidla se nastaví podle toho, co je
u vás „dlouho". Pravidelné prohlídky zařízení hlídá v Twenty Servis servisní plán.

:::
