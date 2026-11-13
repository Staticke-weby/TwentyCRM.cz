---
title: Jak dostat záznam a přepis schůzky přímo do CRM
description: Přepis a shrnutí schůzky se v Twenty uloží ke klientovi samy — z nahrávacího asistenta Twenty, z Microsoft Teams nebo z nástroje, který už používáte (Fireflies, Fathom, Granola). Co z toho firma má a co je k tomu potřeba.
vMenu: Záznam a přepis schůzek
poradi: 2
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [komunikace, ai]
funkce: [nahravani-schuzek, zapisniky-schuzek, posta-kalendar, ai-krok-automatizace]
zdroje: [gh-vydani, twenty-vydani, github-public-call-recorder, github-public-teams, github-public-fathom, github-public-granola, github-public-fireflies]
---

**Twenty ukládá přepis a shrnutí schůzky jako samostatný záznam navázaný na událost v kalendáři,
a tím i na klienta, kontaktní osobu a obchodní případ.** Přepis pořídí buď nahrávací asistent
Twenty, nebo ho Twenty převezme z nástroje, který ve firmě už máte — Microsoft Teams, Fireflies,
Fathom nebo Granola.

Výsledek je stejný: co se na schůzce řeklo a dohodlo, je v CRM u klienta, ne v něčím notebooku.

## Co vám to umožní

- **Obchodník se soustředí na rozhovor, ne na poznámky.** Přepis, shrnutí a dohodnuté kroky
  má po schůzce v CRM.
- **Kolega nebo vedoucí si schůzku dohledá u klienta.** Otevře záznam a vidí účastníky,
  shrnutí a přepis — u nahrávacího asistenta i video, které se přehraje od místa, na které
  v přepisu klikne.
- **Dohody se neztrácejí.** Termín, cena nebo výhrada, kterou klient zmínil mimochodem,
  se dá najít i za půl roku.
- **AI a automatizace mají podklad.** Ze shrnutí může AI připravit úkol a návrh e-mailu
  klientovi — viz [úkol a e-mail po schůzce](/twenty/po-jednani/ukol-a-e-mail-po-schuzce/).
- **Nemusíte měnit nástroj.** Kdo už zapisuje schůzky ve Fireflies, Fathomu nebo Granole,
  zapisuje dál tam.

## Jak to v Twenty funguje

Každá zaznamenaná schůzka je v Twenty záznam schůzky s přepisem (kdo co řekl) a shrnutím.
Když je ke schůzce událost v připojeném kalendáři, záznam se k ní připojí a přes účastníky
se dostane ke klientovi. Na kartě klienta, kontaktní osoby i obchodního případu pak může být
přehled posledních zaznamenaných schůzek. Možnosti jsou čtyři:

- **Nahrávací asistent Twenty** (od verze 2.17). Sám se připojí ke schůzkám z kalendáře,
  které mají odkaz na Google Meet, Zoom, Microsoft Teams, Webex nebo GoTo Meeting. Uloží
  video nebo zvuk, přepis a shrnutí od AI. V Zoomu, Google Meet a Teams na začátku napíše
  do chatu schůzky, že nahrává — text si upravíte. U jednotlivé schůzky ho vypnete, pro celou
  firmu pozastavíte jedním přepínačem. Pro hovory, ve kterých se střídají jazyky, jde přepis
  přepnout na specializovanou službu.
- **Microsoft Teams** (od verze 2.51). Přepisy schůzek z Teams se uloží do Twenty a AI k nim
  napíše shrnutí. Platí pro pracovní účty a schůzky, které jste svolali; přenáší se přepis,
  ne zvuk a video. Přístup k přepisům musí povolit správce Microsoft 365.
- **Fireflies** (od verze 2.7) a **Fathom** (od verze 2.38). Přepisy a shrnutí se z nich
  ukládají do Twenty, z Fathomu i seznam dohodnutých kroků a nahrávka. Fathom po připojení
  načte posledních 31 dní.
- **Granola** (od verze 2.42). Ukládá shrnutí a přepisy s rozlišením mluvčích, změny poznámek
  průběžně dotahuje. Potřebuje tarif Granola Business nebo Enterprise.

Přepisy převzaté z těchto nástrojů vidí v Twenty každý, kdo má přístup k záznamům schůzek.
Kdo je smí vidět, určíte rolí. Popis jednotlivých aplikací je u výrobce
v [repozitáři Twenty](https://github.com/twentyhq/twenty/tree/main/packages/twenty-apps/public)
(anglicky).

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodník servisní firmy má online schůzku v Teams se správcem kancelářské budovy o pravidelných
prohlídkách klimatizací. Po schůzce je u klienta v Twenty záznam: účastníci, přepis a shrnutí
s dohodnutými body — nabídka na prohlídky dvanácti jednotek do pátku, přístup do strojovny
přes recepci. Vedoucí si v pondělí otevře kartu klienta a ví, co se slíbilo, aniž by se
obchodníka ptal.

:::

## Co je k tomu potřeba

- **Připojený kalendář** (Google, Microsoft nebo CalDAV) — přes událost se přepis páruje
  s klientem. Nahrávací asistent nahrává schůzky, které jsou v kalendáři a mají odkaz
  na online schůzku. Jak kalendář připojit, popisuje článek
  [e-maily a kalendář na kartě klienta](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/).
- **Volba zdroje** — nahrávací asistent Twenty, nebo napojení na nástroj, který máte.
  Za Fireflies, Fathom nebo Granolu platíte jejich výrobci podle svého tarifu.
- **Nastavení na vyhrazeném serveru** — napojení zapneme při nasazení: u nahrávacího asistenta
  účet u služby Recall.ai, která nahrávání zajišťuje a účtuje podle svého ceníku, u Teams
  registraci v Microsoft 365, u ostatních klíč k jejich službě. Server musí být dosažitelný
  z internetu, aby mu služby mohly hotové přepisy posílat.
- **AI pro shrnutí** — na vyhrazeném serveru přes vaše vlastní klíče k AI, platíte přímo
  poskytovateli podle spotřeby.

Open-source Twenty je platforma pod oběma našimi nadstavbami, [Twenty Sales](/pro-obchodni-tymy/)
i [Twenty Servis](/pro-servisni-firmy/), takže tyto možnosti mají obě.

:::otazky

### Dozvědí se klienti, že se schůzka nahrává?

Nahrávací asistent se ke schůzce připojí jako viditelný účastník a v Zoomu, Google Meet a Teams
napíše do chatu, že nahrává. Kdy nahrávat a jak o tom účastníky informovat, je rozhodnutí vaší
firmy — u každé schůzky jde asistent vypnout.

### Kde se nahrávky a přepisy ukládají?

Twenty si ukládá vlastní kopii videa, zvuku i přepisu, takže zůstanou k dispozici, i když
zdrojová nahrávka vyprší. Na vyhrazeném serveru jsou na vašem serveru. U nahrávacího asistenta
se zdrojová nahrávka ve službě Recall.ai ve výchozím nastavení maže po necelých sedmi dnech.

### Musíme kvůli tomu opustit Fireflies nebo Fathom?

Ne. Twenty si přepisy a shrnutí převezme z nástroje, který používáte. Lidé pracují stejně jako
dosud, jen výsledek je navíc u klienta v CRM.

### Kdo v Twenty přepisy uvidí?

Každý, kdo má přístup k záznamům schůzek. Rolí omezíte, kdo je smí číst — například jen
obchod a vedení.

:::
