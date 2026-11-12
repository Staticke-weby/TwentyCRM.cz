---
title: Která CRM mají MCP server — Twenty, Raynet, Pipedrive, HubSpot, Salesforce, Attio
description: Srovnání šesti CRM podle toho, jak se k nim připojí Claude nebo ChatGPT přes MCP — čtení a zápis, oprávnění, tarif a kde server běží. Jen fakta z dokumentace výrobců, ověřeno 12. 11. 2026.
vMenu: CRM s MCP serverem
draft: true
poradi: 3
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [mcp, ai]
funkce: [mcp-server, mcp-oznaceni-akci, mcp-spousti-automatizaci, role-opravneni, vlastni-klice-ai]
zdroje: [docs-mcp, docs-opravneni, twenty-cenik, raynet-blog-mcp-server-raynet, pipedrive-newsroom-pipedrive-launches-native-mcp-server-brin, hubspot-changelog-remote-hubspot-mcp-server-is-now-generally, hubspot-build-apps-integrate-with-the-remote-hubspot-mcp-ser, salesforce-04-salesforce-hosted-mcp-servers-are-now-generall, attio-mcp-overview]
---

**K listopadu 2026 má vlastní MCP server všech šest CRM ze srovnání — Twenty, Raynet, Pipedrive,
HubSpot, Salesforce i Attio.** Liší se tím, v kterém tarifu je k dispozici, jak se uživatel
přihlašuje, co smí AI měnit a hlavně kde server běží: jen u výrobce, nebo i na serveru, který
patří jen vám.

MCP je otevřený standard, přes který se k CRM připojí Claude, ChatGPT a další asistenti
(podrobně v článku [Co je MCP](/twenty/mcp/co-je-mcp/)). Twenty nasazujeme, proto srovnáváme
výhradně to, co výrobci sami uvádějí ve své dokumentaci, a u každého údaje je zdroj.

## Co vám to umožní

Na čem při výběru záleží — a na co se ptát kteréhokoli dodavatele:

- **Volba asistenta zůstane na vás.** Všech šest serverů je postavených na otevřeném standardu,
  takže firma není vázaná na jednoho dodavatele AI. Obchodník může pracovat v Claude, kolega
  v ChatGPT.
- **AI pracuje pod oprávněním člověka.** U všech šesti platí práva přihlášeného uživatele.
  Rozdíl je v tom, jak jemně jde AI omezit — například jen na čtení.
- **Cena bez překvapení.** Někde je MCP ve všech tarifech, jinde až od vyššího. Asistenta
  (Claude, ChatGPT) se platí zvlášť jeho poskytovateli všude.
- **Kde leží data.** Server u výrobce je pohodlný. Kdo chce mít CRM i napojení pro AI pod
  vlastní kontrolou, potřebuje systém, který jde provozovat na vlastním serveru.

## Srovnání šesti CRM

| CRM | MCP server od výrobce | Co AI smí | Přihlášení a oprávnění | Tarif | Kde server běží |
|---|---|---|---|---|---|
| **Twenty** | ano, od v2.0 (21. 4. 2026) | číst, zakládat, upravovat, spouštět automatizace | přihlášení v prohlížeči nebo klíč; role uživatele, nebo role přidělená klíči | všechny tarify | cloud výrobce, nebo váš vyhrazený server (otevřený kód) |
| **Raynet** | ano (2. 9. 2026) | hledat, číst, zakládat a upravovat; reporty jen číst; nemaže | klíč od správce, jen čtení, nebo čtení a zápis; jeden klíč na uživatele a nástroj | Professional, Ultimate, Enterprise; bez příplatku | u výrobce (app.raynet.cz) |
| **Pipedrive** | ano (30. 6. 2026) | hledat, zakládat a upravovat záznamy, převádět poptávky na obchody, aktivity | přihlášení v prohlížeči; práva uživatele, akce v historii změn | všechny tarify | spravuje výrobce |
| **HubSpot** | ano, obecně dostupný od 13. 4. 2026 | číst i zapisovat, některé typy záznamů jen číst | přihlášení v prohlížeči přes připojení vytvořené v účtu; práva uživatele | všechny účty; dostupné akce podle předplatného | u výrobce (mcp.hubspot.com) |
| **Salesforce** | ano, obecně dostupný od 29. 4. 2026 | data, automatizace, vlastní akce a dotazy; je i server jen pro čtení | každá akce pod přihlášeným uživatelem, platí práva k objektům, polím i sdílení; server zapíná správce | Enterprise Edition a vyšší | u výrobce |
| **Attio** | ano | hledat, číst, zakládat a upravovat záznamy, poznámky, úkoly | přihlášení v prohlížeči jako uživatel Attio; čtení bez potvrzení, zápis s potvrzením | dokumentace u MCP tarif neuvádí | u výrobce (mcp.attio.com) |

Ověřeno 12. 11. 2026 v dokumentaci a oznámeních výrobců — odkazy jsou v seznamu zdrojů pod
článkem. Služby se rychle mění; před rozhodnutím si údaje zkontrolujte u výrobce.

### Krátce ke každému

- **Raynet** — český výrobce; server má jasně oddělené klíče pro čtení a pro zápis a AI
  nedovolí mazat. Napojení je v tarifech Professional, Ultimate
  a Enterprise bez příplatku.
- **Pipedrive** — server vyvíjí a spravuje přímo Pipedrive, je ve všech tarifech a každá akce
  AI se zapíše do historie změn.
- **HubSpot** — kromě obchodu zpřístupní i marketing, obsah webu a konverzace.
  Co je dostupné, záleží na předplatném.
- **Salesforce** — oprávnění se uplatní až na úroveň polí a pravidel sdílení, server se musí
  výslovně zapnout. Určené pro edici Enterprise a vyšší.
- **Attio** — čtení schvaluje automaticky, každý zápis nechá asistenta potvrdit.

## Jak to v Twenty funguje

Twenty má MCP server na adrese, na které systém běží (`…/mcp`), ve všech tarifech. Uživatel se
přihlásí v prohlížeči a asistent pracuje pod jeho rolí; pro napojené systémy jde použít klíč
s vlastní rolí, třeba jen pro čtení. Twenty u každé akce AI nástroji označí, jestli data jen čte,
nebo mění, a od verze 2.57 může asistent zvenčí spustit připravenou automatizaci.

V čem se Twenty od ostatních liší:

- **Otevřený kód.** Twenty je open source; jak server pracuje, si může kdokoli ověřit.
- **Vlastní server.** CRM i napojení pro AI mohou běžet na vyhrazeném serveru jen pro vaši
  firmu. Tam přidělíte vlastní roli lidem i klíčům bez omezení tarifem.
- **Vlastní klíče k AI.** Na vlastním serveru běží AI uvnitř Twenty (chat, agenti) na vašich
  klíčích k AI poskytovatelům a za AI platíte přímo jim.

Jak připojit Claude a ChatGPT, popisuje [samostatný článek](/twenty/mcp/pripojeni-claude-a-chatgpt/).
Podrobnosti jsou v [dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/ai/capabilities/mcp).

:::poznamka[Ilustrační příklad]{ton="info"}

Vymyšlená montážní firma vybírá CRM a jednatel chce, aby obchodníci pracovali s daty z Claude.
Na schůzce s dodavateli si klade stejné čtyři otázky: Je MCP v našem tarifu? Může AI jen číst?
Uvidíme v historii, co AI změnila? Kde budou data? Tabulka výše dává odpověď u všech šesti
systémů — rozhoduje pak, co firma od CRM potřebuje jinak.

:::

## Co je k tomu potřeba

- **CRM s MCP serverem** — u Twenty ve všech tarifech i na vyhrazeném serveru.
- **AI asistent s podporou MCP** — Claude, ChatGPT, Cursor a další; platí se jeho poskytovateli.
- **Promyšlené role** — co smí AI vidět a měnit, rozhoduje nastavení CRM, ne asistent.
- **U Twenty na vyhrazeném serveru** — zpřístupnění adresy napojení pro cloudové asistenty.
  To nastavujeme my při nasazení. Ceny vyhrazeného serveru najdete na [ceníku](/cenik/),
  cloud výrobce je druhou variantou se dvěma fakturami — viz [srovnání](/cloud-vs-selfhost/).

Hotová řešení pro obchod a pro servis u zákazníka jsou [Twenty Sales](/pro-obchodni-tymy/)
a [Twenty Servis](/pro-servisni-firmy/) — naše nadstavby nad open-source Twenty.

:::otazky

### Je MCP server v CRM placený zvlášť?

Podle výrobců ne: Twenty, Pipedrive a HubSpot ho mají ve všech tarifech, Raynet v tarifech
Professional, Ultimate a Enterprise bez příplatku, Salesforce v edici Enterprise a vyšší.
Zvlášť se vždy platí samotný asistent.

### Který systém má MCP server nejbezpečnější?

Všech šest respektuje oprávnění přihlášeného uživatele. Liší se nástroje navíc: Raynet odděluje
klíče pro čtení a zápis, Attio nechá potvrzovat každý zápis, Salesforce uplatní i práva k polím
a sdílení, Twenty označuje akce, které data mění, a dovolí přidělit klíči vlastní roli.

### Můžu MCP server provozovat na vlastním serveru?

U Twenty ano, protože celé CRM je open source a běží i na vyhrazeném serveru. Ostatní výrobci
v tomto srovnání popisují MCP server jako službu, kterou sami provozují a spravují.

### Jsou tohle všechno AI agenti?

Ne. MCP server jen zpřístupní CRM asistentovi, se kterým pracujete. O agentech, kteří pracují
sami podle spouštěčů, je článek [Co je AI agent](/twenty/ai-agenti/co-je-ai-agent/).

:::
