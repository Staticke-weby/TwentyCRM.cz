---
title: Twenty ve Slacku a v Microsoft Teams — CRM tam, kde tým píše
description: Ve Slacku se dnes zeptáte Twenty na klienta nebo založíte úkol jednou zprávou; asistent jedná s vašimi oprávněními. Z Teams dnes Twenty přebírá přepisy schůzek, asistent pro Teams se připravuje. Co jde, co je potřeba a na co si dát pozor.
vMenu: Twenty ve Slacku a Teams
poradi: 5
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [komunikace, ai, mcp]
funkce: [slack, teams, zapisniky-schuzek, ai-chat, role-opravneni, vlastni-klice-ai, mcp-server]
zdroje: [gh-vydani, github-public-teams, github-public-slack, github-slack-setup, github-twenty-v2-26-0, github-twenty-v2-50-0]
---

**Ve Slacku jde Twenty používat dnes: zmíníte @Twenty v kanálu nebo mu napíšete přímou zprávu
a asistent najde klienta, odpoví na dotaz nebo založí poznámku či úkol — vždy s oprávněními
člověka, který se ptá.** Z Microsoft Teams Twenty dnes přebírá přepisy schůzek se shrnutím od AI;
asistent přímo v Teams se připravuje a běžně dostupný zatím není.

Obojí řeší stejnou věc: tým, který celý den píše ve Slacku nebo v Teams, nemusí kvůli každé
drobnosti přepínat do CRM.

## Co vám to umožní

- **Zeptat se bez přepnutí okna.** *„Co víme o firmě Novák Stavby?"* nebo *„Které obchody se mají
  uzavřít tento měsíc?"* přímo v konverzaci s kolegy.
- **Zapsat ze zprávy.** *„Přidej k Janě Novákové poznámku: cenu probereme příští týden"* —
  záznam je v CRM, ne jen ve Slacku.
- **Upozornění z CRM do kanálu.** Automatizace v Twenty umí poslat zprávu do kanálu Slacku:
  vyhraný obchod, nová poptávka, [obchod, který se odmlčel](/twenty/po-jednani/kdo-se-odmlcel/).
- **Náhled odkazu.** Když někdo vloží do Slacku odkaz na záznam v Twenty, ukáže se jeho náhled.
- **Přepisy porad z Teams u klienta.** Co se řeklo na schůzce v Teams, je dohledatelné v CRM.

## Jak to funguje — Slack (dnes)

Twenty má pro Slack vlastní aplikaci. Napojení na automatizace přišlo ve verzi 2.7, konverzační
asistent ve verzi 2.26 a ve verzi 2.39 výrobce aplikaci vydal jako prověřenou verzi 1.0.

- **Jak se ptát.** Zmínkou @Twenty v kanálu nebo přímou zprávou. Asistent odpovídá ve vlákně
  a v témže vlákně se dá doptávat (od verze 2.48 drží jedno vlákno jako jednu konverzaci). Do
  odpovědi přidá odkazy na záznamy, které našel nebo založil.
- **Co umí.** Dohledat kontakt, firmu nebo otevřené obchody; založit a upravit osoby, firmy,
  obchodní případy, poznámky a úkoly.
- **Kdo smí.** Asistent odpovídá jen lidem, jejichž účet ve Slacku je propojený s uživatelem
  v Twenty, a jedná s jeho oprávněními. Účty se stejným e-mailem se propojí samy, ostatní propojí
  správce a člověk to potvrdí ve zprávě od asistenta.
- **Kroky v automatizacích.** Automatizace v Twenty umí do Slacku poslat, upravit nebo smazat
  zprávu a přidat reakci.

Výrobce u aplikace upozorňuje, že odpovědi generuje AI a mohou být nepřesné — důležité údaje
je dobré ověřit v Twenty.

## Jak to funguje — Microsoft Teams

**Dnes: přepisy schůzek.** Aplikace Twenty pro Teams ukládá přepisy schůzek do záznamů hovorů
a AI k nim napíše shrnutí (od verze 2.51). Funguje s pracovními a školními účty Microsoft 365
a se schůzkami, které jste organizovali. Podrobnosti v článku
[záznam a přepis schůzky](/twenty/e-maily-a-schuzky/zaznam-a-prepis-schuzek/).

**Připravuje se: asistent v Teams.** Ve vydáních 2.46–2.54 výrobce přidal asistenta, který
v Teams přijme dotaz, odpoví na něj a ukazuje průběh. První verze aplikace Teams (připravená ve vydáních 2.50–2.53)
ale obsahuje jen přepisy schůzek a návod k aplikaci asistenta nezmiňuje. Ptát se Twenty
z Teams tedy zatím běžně nejde; stav sledujeme u každého vydání.

Firmy na Microsoftu se dnes ptají v AI chatu přímo v Twenty, nebo v Claude či ChatGPT přes MCP
— otevřený standard pro napojení AI nástrojů (viz [Co je MCP](/twenty/mcp/co-je-mcp/)).

:::poznamka[Ilustrační příklad]{ton="info"}

Ve vymyšlené firmě, která dodává kancelářský nábytek, píše obchodnice do kanálu #obchod:
*„@Twenty jaké otevřené obchodní případy máme s firmou Severka?"* Asistent ve vlákně vypíše dva
případy s fází a hodnotou a přidá odkazy. Obchodnice pokračuje: *„Založ mi úkol poslat jim do
pátku upravenou nabídku."* Úkol je v Twenty u klienta. Kolega,
který k obchodům tohoto klienta přístup nemá, by na stejnou otázku odpověď nedostal.

:::

## Co je k tomu potřeba

- **Slack.** Aplikace se nainstaluje do Twenty a propojí se se Slackem. Na vyhrazeném serveru
  k tomu správce založí vlastní aplikaci ve Slacku a Twenty musí být pro Slack dosažitelné
  z internetu. Nastavení je práce navíc: drobnost se vejde do hodiny měsíčně v paušálu, větší úpravu odhadneme předem — viz [SLA balíčky](/sla-balicky/).
- **Tarif Slacku.** Zmínky v kanálu a přímé zprávy fungují i v bezplatném Slacku. Postranní
  panel asistenta vedle konverzací vyžaduje placený tarif Slacku.
- **AI model.** Aplikace sama nic nestojí, odpovědi asistenta ale spotřebují AI — na vyhrazeném
  serveru přes vaše vlastní klíče k AI.
- **Teams přepisy.** Správce Microsoft 365 musí povolit přístup k přepisům schůzek. Na vyhrazeném
  serveru se aplikace navíc registruje u Microsoftu a potřebuje veřejnou adresu serveru.
- **Role.** Asistent ve Slacku vidí totéž co propojený uživatel — role v Twenty proto řeší
  i tohle.

Obě naše nadstavby nad open-source Twenty, [Twenty Sales](/pro-obchodni-tymy/)
i [Twenty Servis](/pro-servisni-firmy/), mají AI chat a napojení pro AI nástroje. Asistenta ve
Slacku lze k oběma doplnit; s jejich záznamy pak pracuje pod stejnými pravidly.

:::otazky

### Uvidí kolega ve Slacku data, ke kterým v Twenty nemá přístup?

Ne. Asistent jedná s oprávněními propojeného uživatele. Kdo propojený není, odpověď nedostane.

### Musíme mít placený Slack?

Ne. Dotazy přes zmínku v kanálu nebo přímou zprávu fungují i v bezplatném tarifu. Placený tarif
je potřeba jen pro postranní panel asistenta.

### Kdy půjde Twenty používat i z Teams?

Přepisy schůzek z Teams lze nastavit už dnes. Asistent pro dotazy v Teams je rozpracovaný a výrobce
termín neuvádí.

### Může asistent ve Slacku odpovědět špatně?

Může — odpovědi generuje AI. U důležitých údajů klikněte na odkaz na záznam a ověřte si je
v Twenty.

:::
