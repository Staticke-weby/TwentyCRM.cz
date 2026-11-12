---
title: Twenty použije další firemní systémy přes MCP — co se připravuje a co to firmě přinese
description: Dnes se přes MCP připojují k Twenty AI asistenti zvenčí. Připravuje se opačný směr — AI v Twenty si sama sáhne do dalších systémů, aniž by se data kopírovala. Kde je vývoj v listopadu 2026, co to firmě umožní a jak propojit systémy už dnes.
vMenu: Twenty volá další systémy
draft: true
poradi: 6
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [mcp, ai, automatizace]
funkce: [mcp-klient, smer-mcp-v-automatizacich, mcp-server, automatizace, aplikace]
zdroje: [gh-vydani, gh-prepinace, gh-pr-29957, docs-dovednosti, docs-akce, docs-spoustece, docs-mcp, github-twenty-v2-53-1, github-twenty-v2-54-0, github-twenty-v2-57-0]
---

**Připravuje se: AI uvnitř Twenty si bude moci přes MCP sáhnout do dalších firemních systémů —
přečíst z nich údaje nebo v nich něco udělat — aniž by se data musela do CRM kopírovat.** Výrobce
tuhle část v listopadu 2026 vede jako zkušební provoz, který ještě není spuštěný; v kódu je za
přepínačem. Dnes funguje opačný směr: k Twenty se přes MCP připojují Claude, ChatGPT a další
asistenti.

MCP je otevřený standard, přes který AI nástroje pracují s firemními systémy (vysvětluje ho
článek [Co je MCP](/twenty/mcp/co-je-mcp/)). Systém, který MCP nabízí, se nazývá MCP server;
nástroj, který ho používá, MCP klient. Twenty je dnes server a připravuje se být i klientem.

## Co to firmě umožní

Až bude funkce dostupná, změní hlavně tři věci:

- **Odpověď z více systémů v jednom chatu.** Obchodník se v Twenty zeptá na klienta a AI přidá
  i údaje ze systému, který vede projekty nebo podporu — pokud ten systém MCP server nabízí.
- **Bez synchronizace.** Data zůstanou tam, kde vznikají. Nic se nepřenáší v noci tabulkami,
  nic nezastará a neexistují dvě verze téže informace.
- **Krok v jiném systému přímo z automatizace.** V kódu Twenty se rozpracovává krok automatizace
  „MCP nástroj", který zavolá nástroj jiného systému. Zatím je to směr vývoje, ne funkce.

Pro firmu je to další kus myšlenky „jedna paměť firmy": CRM nemusí obsahovat všechno, aby AI
v CRM věděla všechno, co potřebuje.

## Kde je vývoj dnes

Twenty k tomu skládá díly vydání po vydání:

| Verze | Co přibylo |
|---|---|
| 2.53.1 (30. 10. 2026) | Twenty umí evidovat externí MCP servery — název, adresu, způsob přihlášení, zapnuto/vypnuto |
| 2.54 (30. 10. 2026) | Aplikace nad Twenty mohou MCP server nabídnout jako svou součást |
| 2.57 (9. 11. 2026) | Nástroje externích MCP serverů se zpřístupní AI chatu — za přepínačem |
| rozpracováno | krok „MCP nástroj" v automatizacích (otevřená změna kódu č. 29957) |

Dokumentace pro vývojáře aplikací to říká přímo: MCP servery jsou ve zkušebním provozu a ještě
nejsou spuštěné — aplikace je mohou deklarovat, ale pracovní prostory jejich nástroje zatím
nepoužijí.

**Jak je to navržené z pohledu bezpečnosti.** Přihlášení do druhého systému jde přes připojení
uživatele k danému systému a přístupový údaj se posílá jen na adresu serveru. Ta se po propojení
nesmí změnit, takže údaj neodejde nikam jinam. Firma může každý server vypnout.

## Jak propojit Twenty s dalšími systémy už dnes

Na zkušební provoz čekat nemusíte:

- **Asistent s více napojeními.** Claude nebo ChatGPT můžete připojit k Twenty i k dalším
  systémům s MCP serverem zároveň. Odpověď z více systémů tak dostanete v asistentovi, jen ne
  v chatu uvnitř Twenty. Viz [jak připojit Claude a ChatGPT](/twenty/mcp/pripojeni-claude-a-chatgpt/).
- **Automatizace v Twenty.** Krok s požadavkem na jiný systém pošle nebo načte data přes jeho
  rozhraní; jiný systém zase může automatizaci v Twenty spustit sám. Tak se napojí většina
  běžných nástrojů.
- **Napojení na fakturaci.** Pohoda, Money, ABRA, iDoklad nebo Fakturoid — to je naše hotové
  rozšíření, viz [napojení na fakturaci](/napojeni-na-fakturaci/).

:::poznamka[Ilustrační příklad — až bude funkce dostupná]{ton="info"}

Vymyšlená firma montuje vzduchotechniku a projekty realizace vede v samostatném projektovém
nástroji, který nabízí MCP server. Obchodník v AI chatu v Twenty napíše: *„Připrav mi podklady
na schůzku s firmou Lipka — otevřené obchody a jak daleko je realizace minulé zakázky."* AI vezme
obchodní případy a e-maily z Twenty a stav realizace přímo z projektového nástroje. Nic se mezi
systémy nekopíruje a obchodník nemusí nikomu volat, jak to na stavbě vypadá.

:::

## Co bude potřeba

- **Systém s MCP serverem.** Jestli ho váš projektový nebo jiný systém nabízí, zjistíte u jeho
  dodavatele — nebo to projdeme spolu na konzultaci.
- **Přístup do druhého systému.** Kdo se připojuje a s jakými právy — v druhém systému platí jeho
  vlastní oprávnění.
- **Rozmyslet, co smí AI tam dělat.** Číst je jedna věc, zakládat nebo měnit druhá. Platí stejné
  zásady jako u [schválení člověkem](/twenty/po-jednani/schvaleni-clovekem/).
- **Aktuální verzi Twenty.** Na vyhrazeném serveru nové verze nasazujeme v rámci
  [měsíčního paušálu](/sla-balicky/), takže se k funkci dostanete s verzí, ve které ji výrobce
  spustí.

Obě naše nadstavby nad open-source Twenty, [Twenty Sales](/pro-obchodni-tymy/)
i [Twenty Servis](/pro-servisni-firmy/), stojí na stejném jádru a funkci dostanou stejně.
Kam Twenty míří dál, shrnuje stránka [Kam Twenty míří](/twenty/kam-twenty-miri/).

:::otazky

### Můžeme to používat už dnes?

Běžně ne. Funkce je ve zkušebním provozu za přepínačem a výrobce ji ještě nespustil. Odpovědi
z více systémů dnes nabídne Claude nebo ChatGPT připojený k Twenty i k dalším systémům.

### Kdy to bude hotové?

Termín výrobce neuvádí. Postup sledujeme u každého vydání; aktuální stav ukazuje přehled níže.

### Odejdou data z CRM do jiného systému?

Do druhého systému jde jen to, co AI pošle jako součást konkrétního dotazu nebo akce — třeba
název klienta, podle kterého hledá. Nic se hromadně nesynchronizuje a ve druhém systému platí
oprávnění, která tam máte.

### Musí druhý systém MCP podporovat?

Ano. Pokud ho nepodporuje, propojí se s Twenty automatizací přes jeho rozhraní, jak se to dělá
dnes.

:::
