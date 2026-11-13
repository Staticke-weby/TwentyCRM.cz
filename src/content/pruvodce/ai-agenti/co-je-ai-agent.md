---
title: Co je AI agent v CRM a čím se liší od chatbota
description: AI agent v CRM sám odvede zadanou práci, když přijde poptávka, změní se zakázka nebo nastane čas — pod vlastní rolí a s kontrolou člověka. Chatbot jen odpovídá. Rozdíl, příklady z obchodu a servisu a jak to funguje v Twenty.
vMenu: Co je AI agent
poradi: 1
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [ai, agenti]
funkce: [ai-agenti, ai-krok-automatizace, role-opravneni, ai-chat, mcp-server, schvaleni-clovekem]
zdroje: [docs-akce, docs-opravneni, gh-vydani, twenty-vydani, twenty-capabilities-ai-agents, gartner-press-releases-2025-08-26-gartner-predicts-40-percen, microsoft-work-trend-index-2025-the-year-the-frontier-firm-i]
---

**AI agent v CRM je umělá inteligence, která sama odvede zadanou práci v datech firmy — když přijde
nová poptávka, změní se zakázka nebo nastane naplánovaný čas. Chatbot odpovídá, když se ho zeptáte;
agent koná, i když se nikdo neptá, ale jen v mezích role, kterou mu dáte, a s kontrolou člověka tam,
kde na tom záleží.**

Nejde o slovíčkaření. Analytická společnost Gartner v tiskové zprávě z 26. 8. 2025 označila za
nejčastější omyl, když se agenty nazývají AI asistenti, kteří čekají na pokyn člověka a samostatně
nepracují. Microsoft ve své studii Work Trend Index 2025 popisuje stejný posun: od asistenta, který
ulehčí práci, přes agenty jako „digitální kolegy" plnící úkoly na pokyn člověka, až po lidi, kteří
agentům určují směr.

## Chatbot, asistent, agent

| | Chatbot a AI asistent | AI agent |
|---|---|---|
| **Kdo začíná** | člověk napíše otázku | událost v CRM nebo plán — nová poptávka, změna fáze, každé ráno v 7:00 |
| **Co udělá** | odpoví, shrne, najde | přečte záznamy, rozhodne podle zadání, doplní údaje, připraví koncept |
| **S čím pracuje** | s tím, co mu ukážete nebo k čemu má přístup | s daty v CRM, ke kterým mu role dá přístup |
| **Kdo ho hlídá** | člověk čte odpověď | role určuje, co smí vidět a měnit; důležité kroky kontroluje člověk |

V praxi se obojí doplňuje. Asistent se hodí na otázky („co se dělo u tohoto klienta?"), agent na
opakovanou práci, která má jasný začátek a jasný výsledek.

## Co vám to umožní

Když agenta v Twenty nastavíte, může to vypadat takto:

- **Obchodník nezačíná den tříděním.** Nové poptávky jsou ráno roztříděné podle toho, o co klient
  stojí, a přidělené správnému obchodníkovi. Místo čtení rovnou volá.
- **Dispečer nepřepisuje e-maily do zakázek.** Z požadavku klienta vznikne zakázka navázaná
  na správného klienta, se shrnutím, co klient chce. Dispečer ji zkontroluje a naplánuje výjezd.
- **Majitel ví, že nic neusne.** Agent pravidelně projde obchodní případy a zakázky bez pohybu
  a odpovědným lidem založí úkol s krátkým shrnutím, proč.
- **Rozhodnutí zůstávají u lidí.** Agent připraví, člověk potvrdí — e-mail čeká jako koncept
  ve schránce, ne odeslaný klientovi.

## Jak to v Twenty funguje

Twenty má AI agenty od verze 2.0 (duben 2026) a s dalšími vydáními je rozšiřuje. Z AI dělají agenta
tři věci:

- **Spouštěč.** Agent se rozběhne sám — při vzniku nebo změně záznamu, podle plánu, nebo jako krok
  automatizace. Od verze 2.46 (říjen 2026) má každý agent vlastní stránku se seznamem spouštěčů.
- **Role.** Agent dostane roli jako člen týmu a vidí a mění jen ty typy záznamů a pole, které mu
  povolíte. Krok s AI v automatizaci má od verze 2.56 vlastní, užší oprávnění, i když automatizace
  sama smí víc.
- **Člověk na konci.** Dnes se kontrola řeší tím, že agent připravuje koncepty: automatizace umí
  e-mail místo odeslání uložit ke kontrole. To, aby se agent sám zeptal a počkal na schválení,
  se v Twenty připravuje.

Vedle agentů má Twenty **AI chat** — asistenta, kterého se ptáte přímo v systému — a napojení pro
Claude nebo ChatGPT přes MCP ([co je MCP](/twenty/mcp/co-je-mcp/)). Jak jsou agenti v Twenty
poskládaní, rozebíráme v článku [Agenti v Twenty](/twenty/ai-agenti/agenti-v-twenty/). Popis
výrobce je v [dokumentaci](https://docs.twenty.com/cs/user-guide/ai/capabilities/ai-agents).

:::poznamka[Ilustrační příklad]{ton="info"}

Servisní firma, která udržuje kotle. Ve 22:40 přijde na adresu servis@ e-mail: *„Kotel v bytě
na Lesní 12 hlásí poruchu a netopí."* Automatizace e-mail předá agentovi. Ten najde klienta podle
adresy odesílatele, založí **Zakázku** navázanou na **Klienta** a **Místo**, do popisu shrne, co klient
napsal, a připíše, že jde o poruchu, která nesnese odklad.

Ráno v 7:00 má dispečerka zakázku nahoře v seznamu, zkontroluje ji a naplánuje **Výjezd**.
Klientovi do té doby nic neodešlo bez člověka.

:::

## Co je k tomu potřeba

- **Jasné zadání a čistá data.** Agent je tak dobrý jako pokyny, které dostane, a data, ze kterých
  čte. Proto doporučujeme začít jednou dobře vymezenou úlohou — viz
  [pilot na jedné úloze](/twenty/naklady/pilot-ai/).
- **AI model.** Na vyhrazeném serveru připojíte vlastní klíče k AI (Anthropic, OpenAI, Google,
  Mistral, xAI) a za AI platíte přímo poskytovateli. Cloud výrobce účtuje AI v kreditech
  a znamená dvě faktury — viz [vyhrazený server, nebo cloud](/cloud-vs-selfhost/). Kolik to dělá
  v korunách, rozebírá článek [Kolik stojí AI agenti](/twenty/naklady/kolik-stoji-ai-agenti/).
- **Role a zadání pro agenta.** Co smí vidět, co smí měnit a co má připravit jen jako návrh.
  Agenty lze v Twenty nastavit podle vašeho provozu. Nastavení je práce navíc: drobnost se vejde do hodiny měsíčně v paušálu, větší úpravu odhadneme předem — viz [SLA balíčky](/sla-balicky/).
- **Pozor na komunikaci se zákazníky.** Když AI píše přímo klientům, týkají se vás pravidla
  o označování AI — viz [AI Act a CRM](/twenty/provoz/ai-act-a-crm/).

Které konkrétní úlohy může agent v obchodě a servisu převzít, a co z toho jde už dnes, najdete
v přehledu [úloh pro AI agenta](/twenty/ai-agenti/ulohy-pro-ai-agenta/). Prodejní pohled na AI
v Twenty je na stránce [Agentské CRM](/agentske-crm/).

:::otazky

### Je AI agent totéž co AI asistent v CRM?

Ne. Asistent odpovídá, když se ho zeptáte. Agent se spustí sám — na událost nebo podle plánu — a práci
v datech odvede bez vašeho pokynu, v mezích své role. Twenty umožňuje obojí: AI chat jako asistenta
a agenty se spouštěči.

### Může agent udělat chybu?

Může, stejně jako člověk. Proto má agent jen roli s nejnutnějšími právy, výstupy, které jdou ven
ke klientovi, připravuje jako koncepty, a Twenty u něj hlídá stejná pravidla jako u lidí — role
a v tarifu Organization i pravidla pro kontrolu dat. Začínat se vyplatí jednou úlohou, u které se výsledek dá snadno zkontrolovat.

### Nahradí agent obchodníka nebo dispečerku?

Agent přebírá rutinu: třídění, přepisování, hlídání termínů, první verze textů. Jednání s klientem,
cenu a plán výjezdů dál určují lidé — jen na to mají víc času.

### Potřebuji k agentům Claude nebo ChatGPT?

Ne. Agenti v Twenty běží na AI modelu, který vyberete v nastavení. Claude nebo ChatGPT připojený
přes MCP je druhá, samostatná cesta: asistent zvenčí, který s daty v Twenty pracuje pod vaší rolí.

:::
