---
title: Nabídka, u které víte, kolik vyděláte — a co k ní připraví AI
description: V Twenty Sales se nabídka skládá z ceníku s nákupní cenou, takže hrubou i čistou marži vidíte před odesláním. Co k tomu umí šablony dokumentů, co z nabídek připraví AI v chatu nebo v Claude a ChatGPT a co je k tomu potřeba.
vMenu: Nabídka s marží
draft: true
poradi: 3
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [obchod, ai]
funkce: [vlastni-zaznamy, ai-chat, mcp-server, mcp-oznaceni-akci, mcp-spousti-automatizaci, role-opravneni, koncept-emailu]
zdroje: [docs-ai-chat, docs-mcp, docs-opravneni, gh-pr-20672, gh-vydani]
---

**V Twenty Sales, naší nadstavbě nad open-source Twenty, se nabídka skládá z položek ceníku,
kde je vedle prodejní ceny i ta nákupní — hrubou a čistou marži proto vidíte dřív, než nabídku
odešlete, ne až podle faktury za tři měsíce.** AI nad tím umí nabídky shrnout, vyhledat ty
s nízkou marží nebo připravit první verzi nabídky a průvodního e-mailu; čísla přitom počítá
systém, AI je jen čte.

## Co vám to umožní

- **Marže před odesláním.** Obchodník vidí, kolik na nabídce zbyde, ještě když se dá cena upravit.
- **Ceník drží vedoucí.** Obchodníci skládají nabídky z jednoho ceníku a slevu dávají tam, kam
  patří — na položku. Ceník sám mění jen vedoucí.
- **Skutečná marže, ne odhad.** Subdodávky, doprava a materiál navíc se zapíšou jako výdaje
  k nabídce; klient je nevidí, ale čistá marže s nimi počítá.
- **Dokument bez přepisování.** Nabídka do PDF česky nebo anglicky jedním kliknutím, s vaší
  hlavičkou a logem.
- **Rychlé odpovědi nad nabídkami.** Které rozpracované nabídky mají nízkou marži, co jsme klientovi
  nabízeli loni, kde běží splatnost — zeptáte se běžnou řečí.

## Jak to v Twenty funguje

**Nabídka v Twenty Sales.** Nabídka patří k obchodnímu případu a skládá se z položek a výdajů:

- **Hrubá marže** — jak je nastavená cena proti nákupu zboží.
- **Čistá marže** — kolik zbyde po subdodávkách, dopravě a materiálu navíc.
- **Stav** — od rozpracované po uhrazenou. Splatnost je datum, ne počet dní, takže je připravený
  i pohled „Po splatnosti".
- **Projekt** — když jedna dodávka sdružuje víc obchodů, sčítají se hodnota nabídek, náklady, zisk
  a marže do projektu s rozpočtem nákladů.

Před dodávkou jde klienta jedním tlačítkem prověřit v registru plátců DPH a v insolvenčním
rejstříku. Fakturu vystavuje váš fakturační program; [napojení na fakturaci](/napojeni-na-fakturaci/)
řešíme na požadavek.

**Šablony dokumentů.** Vedle hotové nabídky do PDF jsou v systému šablony, které si upraví kdokoli
bez programátora — nad klientem, obchodním případem, projektem i nabídkou. Kdo přepíše šablonu,
přepíše dokument: pořadí, sloupce, popisky i jazyk. Výstup jde do PDF, do webové stránky, nebo
jako podklad, který předáte AI. Pět hotových šablon je součástí dodávky.

**Co z toho připraví AI.** Nabídky, položky i ceník jsou běžné záznamy v Twenty, takže s nimi
pracuje AI chat přímo v systému i asistent jako Claude nebo ChatGPT připojený přes MCP:

- **Souhrn obchodního případu na tlačítko.** Hotové v Twenty Sales: AI projde pole případu,
  nabídky, poznámky a e-maily s kontaktní osobou a navrhne, co udělat teď.
- **Otázky napříč nabídkami.** *„Které nabídky ve stavu rozpracovaná mají čistou marži pod 15 %?"*
  AI najde záznamy a vrátí seznam.
- **První verze nabídky.** Na pokyn obchodníka založí nabídku k obchodnímu případu a přidá položky
  z ceníku. Marži dopočítá systém stejně jako u ručně založené nabídky.
- **Průvodní e-mail.** Z nabídky a šablony připraví text, který automatizace uloží jako koncept
  do schránky obchodníka — odešle ho člověk.

AI přitom jede pod rolí toho, kdo se ptá. Co nesmí obchodník, nesmí ani ona: u ceníku, který
obchodník měnit nesmí, AI zapisovací možnosti vůbec nevidí. Twenty navíc AI nástrojům označuje,
které akce data jen čtou a které je mění, a co AI zapisuje, nejdřív ukáže a počká na potvrzení.

Jak se ptát AI chatu, popisuje [dokumentace výrobce](https://docs.twenty.com/cs/user-guide/ai/capabilities/ai-chatbot).

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodnice studia, které navrhuje a montuje kuchyně domácnostem i developerům, připravuje nabídku
pro rodinný dům. V AI chatu napíše: *„Založ k tomuhle případu nabídku podle loňské nabídky
pro stejného developera, ceny vezmi z aktuálního ceníku."* AI ukáže, co založí, a po potvrzení
vznikne rozpracovaná nabídka s položkami.

Obchodnice přidá výdaj za dopravu do patra a subdodávku elektroinstalace. Čistá marže klesne
pod hranici, kterou si firma hlídá, a tak u dvou položek ubere slevu. PDF vygeneruje jedním
kliknutím a průvodní e-mail najde jako koncept v Outlooku.

:::

## Co je k tomu potřeba

- **Twenty Sales** — nabídky s marží, ceník, šablony a prověření klienta jsou součástí řešení.
  Nasazení stojí {{cena.implementation}} jednorázově, provoz na vyhrazeném serveru
  {{cena.retainer_selfhost|mesicne}}, bez poplatků za uživatele.
- **Ceník s nákupními cenami** — převedeme ho z vašeho dosavadního ceníku nebo tabulky při nasazení,
  stejně jako dokumenty s vaším logem.
- **AI model** — pro AI chat a souhrny na vyhrazeném serveru přes vaše vlastní klíče k AI; platíte
  přímo poskytovateli. Claude nebo ChatGPT se připojí přes MCP — viz
  [jak připojit Claude a ChatGPT](/twenty/mcp/pripojeni-claude-a-chatgpt/).
- **Role** — kdo smí měnit ceník a co smí AI zapisovat. Čtyři role (čtenář, obchodník, vedoucí,
  správce) jsou v Twenty Sales nastavené.

Nabídky, položky nabídek a ceník produktů najdete stejné i v [Twenty Servis](/pro-servisni-firmy/),
našem řešení pro montáž a servis u zákazníka.

:::otazky

### Spočítá marži AI?

Ne. Marži počítá systém z prodejních a nákupních cen a z výdajů k nabídce. AI čísla čte —
vyhledá, porovná, shrne —, ale nevymýšlí je.

### Uvidí klient nákupní ceny nebo naše výdaje?

Výdaje k nabídce klient nevidí; slouží jen k tomu, aby marže seděla se skutečností. Co je
v dokumentu pro klienta, určuje šablona, kterou si sami upravíte.

### Může obchodník změnit cenu v ceníku?

Ne. Ceník mění jen vedoucí. Obchodník dává slevu na položku nabídky, takže je vidět, kde a o kolik
se z ceníku slevilo.

### Vystaví Twenty Sales i fakturu?

Fakturu vystavuje fakturační program. V CRM se eviduje číslo faktury, datum fakturace, splatnost
a úhrada — plyne z nich stav nabídky a přehled pohledávek.

:::
