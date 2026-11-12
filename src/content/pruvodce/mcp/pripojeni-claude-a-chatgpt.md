---
title: Jak připojit Claude a ChatGPT k Twenty a co pak zvládnou
description: Claude i ChatGPT se k Twenty připojí přes MCP — přidáte adresu systému a přihlásíte se v prohlížeči. Co pak asistent v CRM udělá, v kterých tarifech to jde a co je potřeba na vyhrazeném serveru.
vMenu: Připojení Claude a ChatGPT
draft: true
poradi: 2
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [mcp, ai]
funkce: [mcp-server, mcp-oznaceni-akci, mcp-spousti-automatizaci, role-opravneni]
zdroje: [docs-mcp, docs-opravneni, docs-server-bezpecnost, twenty-cenik, claude-articles-11175166-get-started-with-custom-connectors-, openai-articles-12584461-developer-mode-apps-and-full-mcp-co]
---

**Claude i ChatGPT se k Twenty připojí přes MCP: do AI nástroje se přidá adresa vašeho Twenty
a uživatel se přihlásí svým účtem v prohlížeči.** Asistent pak v CRM hledá, shrnuje, zakládá
a upravuje záznamy nebo spouští připravené automatizace — vždy jen v rozsahu role toho, kdo se ptá.

Co je MCP a proč na něm záleží, vysvětluje [úvodní článek](/twenty/mcp/co-je-mcp/). Tady je to
podstatné o připojení dvou nejrozšířenějších asistentů.

## Co vám to umožní

- **Obchodník se připraví na jednání bez klikání.** V Claude napíše „shrň mi klienta, za kterým
  zítra jedu, a jeho otevřené obchodní případy" a dostane přehled z aktuálních dat v Twenty. Víc
  o přípravě na schůzku v článku [Příprava na schůzku](/twenty/po-jednani/priprava-na-schuzku/).
- **Zápis po jednání rovnou do CRM.** Poznámku z hovoru asistent uloží ke klientovi a založí
  úkol na další krok. Než data změní, může se zeptat.
- **Dispečer se zeptá na stav práce.** S [Twenty Servis](/pro-servisni-firmy/) (naší nadstavbou
  nad open-source Twenty) se asistent dostane i k zakázkám a výjezdům — přes MCP jsou dostupné
  i typy záznamů, které nejsou v Twenty od výrobce.
- **Majitel dostane odpověď místo sestavy.** „Kolik nabídek jsme tento měsíc poslali a kolik
  z nich je ve fázi jednání?" — bez exportu do Excelu.
- **Asistent spustí připravenou automatizaci.** Od verze 2.57 může AI nástroj zvenčí spustit
  automatizaci, kterou máte v Twenty nastavenou.

## Jak to v Twenty funguje

Twenty má MCP server na stejné adrese, na které systém běží, jen s koncovkou `/mcp`. V nastavení
Twenty je připravený text ke zkopírování, takže nikdo nic nepíše ručně. Napojení je součástí
všech tarifů Twenty i vyhrazeného serveru.

- **Dva způsoby přihlášení.** Doporučený je přihlášení v prohlížeči: heslo se nikam neukládá
  a přístup se sám obnovuje. Pro nástroje, které to neumějí, nebo pro napojené systémy jde použít
  klíč, kterému přidělíte vlastní roli.
- **Stovky akcí.** Hledání firem a osob, založení a úprava záznamů, práce s úkoly, spuštění
  automatizace. Claude si akce načítá podle potřeby. Pro nástroje, které chtějí všechny akce
  najednou, má Twenty úsporný režim s několika obecnými akcemi (v dokumentaci „meta").
- **Čtení a změny jsou rozlišené.** Twenty u každé akce AI nástroji označí, jestli data jen čte,
  nebo je mění — asistent se pak před změnou může zeptat.
- **Oprávnění.** Při přihlášení v prohlížeči platí role uživatele, u klíče role, kterou mu
  nastavíte. AI nevidí víc než člověk, za kterého pracuje.

### Claude a ChatGPT se liší hlavně tarifem

| | Claude (Anthropic) | ChatGPT (OpenAI) |
|---|---|---|
| Kde jde Twenty připojit | ve všech tarifech, v bezplatném jeden vlastní konektor | plně v tarifech Business a Enterprise/Edu, na webu |
| Čtení i zápis | ano | v Business a Enterprise/Edu ano; v tarifu Pro jen čtení |
| Kdo připojení přidá | v tarifech Pro a Max uživatel sám; v Team a Enterprise vlastník organizace, členové se pak přihlásí každý svým účtem | správce nebo vlastník pracovního prostoru (v Enterprise i pověření členové); pro firmu ho zveřejní správce |
| Potvrzení změn | Claude žádá o schválení použití nástroje, nepotřebné akce jde vypnout | u zápisu si může vyžádat potvrzení, zvlášť rizikové akce může zablokovat |

Stav podle nápovědy [Anthropic](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)
a [OpenAI](https://help.openai.com/en/articles/12584461-developer-mode-apps-and-full-mcp-connectors-in-chatgpt-beta),
ověřeno 12. 11. 2026. OpenAI vede plné napojení zatím jako zkušební provoz a názvy v nastavení
ChatGPT se často mění. Kromě aplikací Claude a ChatGPT se k Twenty připojí i Claude Code, Cursor
a další nástroje s podporou MCP. Postup krok za krokem je v
[dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/ai/capabilities/mcp).

:::poznamka[Ilustrační příklad]{ton="info"}

Vedoucí servisu ve vymyšlené firmě, která používá Twenty Servis, napíše v ChatGPT: *„Které
výjezdy na příští týden ještě nemají technika?"* ChatGPT si přes MCP přečte výjezdy v Twenty
a vrátí seznam. Na pokyn *„k zakázce u nové pekárny v Kolíně přidej poznámku, že klient chce termín až
po 14. hodině"* pozná, že jde o změnu, a před uložením si ji nechá potvrdit. Poznámka se objeví
u zakázky, jako by ji zapsal on sám.

:::

## Co je k tomu potřeba

- **Twenty** — MCP server je ve všech tarifech i na vyhrazeném serveru, bez příplatku.
- **Tarif AI nástroje** — u Claude stačí kterýkoli, u ChatGPT kvůli zápisu Business nebo
  Enterprise. Asistenta platíte jeho poskytovateli.
- **Role pro AI** — rozmyslet, co smí asistent vidět a měnit; třeba jen čtení pro někoho, kdo
  potřebuje přehledy. Na vyhrazeném serveru přidělíte vlastní roli lidem i klíčům bez omezení
  tarifem. Cloud výrobce to řeší jinak, viz [srovnání vyhrazeného serveru a cloudu](/cloud-vs-selfhost/).
- **Adresa dostupná pro cloudové asistenty** — Claude i ChatGPT se k Twenty nepřipojují z vašeho
  počítače, ale ze svých serverů, a to i z aplikace na ploše. Na vyhrazeném serveru proto
  zpřístupníme adresy pro napojení AI jen z jejich rozsahů IP adres; zbytek systému může zůstat
  dostupný jen vašemu týmu. Asistenti běžící přímo v počítači, jako Claude Code, žádnou otevřenou
  adresu nepotřebují. Tohle i role nastavujeme při nasazení — víc o zabezpečení na stránce
  [Bezpečnost](/bezpecnost/).

Jak si napojení přes MCP stojí u jiných CRM, ukazuje [srovnání šesti systémů](/twenty/mcp/crm-s-mcp-serverem/).

:::otazky

### Musíme platit Claude nebo ChatGPT?

U Claude jde Twenty připojit i v bezplatném tarifu, jen s jedním vlastním konektorem. U ChatGPT
je plné napojení se zápisem dostupné v tarifech Business a Enterprise/Edu; v tarifu Pro jen
čtení. Twenty za napojení nic navíc neúčtuje.

### Uvidí AI data, která kolega vidět nesmí?

Ne. Asistent pracuje pod rolí přihlášeného uživatele, nebo pod rolí klíče. Co nesmí vidět člověk,
nevidí ani jeho asistent.

### Můžeme asistentovi povolit jen čtení?

Ano. Stačí role, která smí data jen číst. Hodí se třeba pro majitele, který chce přehledy,
nebo pro první týdny, než si tým na práci s AI zvykne.

### Funguje to s Twenty na vyhrazeném serveru?

Ano, stejně jako v cloudu. Jen je potřeba, aby se cloudoví asistenti k adrese napojení dostali
z internetu — to nastavíme tak, aby zbytek systému zůstal chráněný.

### Co když budeme chtít jiného asistenta?

Připojíte ho na stejnou adresu. MCP je otevřený standard, takže CRM ani data se nemění —
mění se jen nástroj, ve kterém se ptáte.

:::
