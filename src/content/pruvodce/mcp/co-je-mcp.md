---
title: Co je MCP a proč na něm záleží vaší firmě
description: MCP je otevřený standard, přes který se Claude, ChatGPT nebo Cursor připojí k firemnímu CRM a pracují s jeho daty. Co to firmě umožní, jak to funguje v Twenty a co je k tomu potřeba.
vMenu: Co je MCP
poradi: 1
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [mcp, ai]
funkce: [mcp-server, mcp-oznaceni-akci, mcp-spousti-automatizaci, role-opravneni, mcp-klient]
zdroje: [mcp-standard, anthropic-mcp-nadace, docs-mcp, docs-opravneni, gh-pr-20672]
---

**MCP (Model Context Protocol) je otevřený standard, přes který se AI asistent — Claude, ChatGPT
nebo Cursor — připojí k firemnímu systému, přečte z něj data a může v něm i pracovat.** Twenty má
vlastní MCP server, takže asistent, kterého ve firmě už používáte, pracuje s daty v CRM pod rolí
toho, kdo se ptá.

Standard původně vytvořila společnost Anthropic a v prosinci 2025 ho předala nezávislé nadaci
Agentic AI Foundation pod Linux Foundation. Nepatří tedy jednomu dodavateli a podporuje ho
většina velkých AI nástrojů.

## Co vám to umožní

- **Ptát se CRM tam, kde už pracujete.** Obchodník se zeptá v Claude, majitel v ChatGPT — oba
  dostanou odpověď z aktuálních dat v Twenty, bez exportu do Excelu.
- **Jedna paměť firmy pro lidi i AI.** Klienti, obchodní případy, zakázky a historie komunikace jsou
  na jednom místě. AI pracuje se stejnými daty jako kolegové, ne s kopií, která za týden zastará.
- **Nezávislost na jednom dodavateli AI.** Když se objeví lepší asistent, připojíte ho na stejnou
  adresu. CRM i data zůstávají, kde jsou.
- **Stejná pravidla jako pro lidi.** AI vidí jen to, co smí vidět uživatel, za kterého pracuje,
  a když záznam změní, proběhnou navázané automatizace jako u člověka.

## Jak to v Twenty funguje

Twenty má MCP server na adrese, na které systém běží (`…/mcp`). V nastavení Twenty (AI → MCP)
je připravené nastavení, které se vloží do AI nástroje — v Claude, Claude Code a Cursoru do
konfigurace, v ChatGPT v nastavení aplikací a konektorů.

- **Přihlášení:** uživatel se při prvním připojení přihlásí svým účtem v prohlížeči. Žádné heslo
  se nikam neukládá. Pro napojené systémy jde místo toho použít klíč s vlastní rolí.
- **Co AI může dělat:** stovky akcí — najít firmy a osoby, založit záznam, upravit obchodní případ,
  spustit připravenou automatizaci. U každé akce Twenty AI nástroji označí, jestli data jen čte,
  nebo je mění; asistent se pak před změnou může zeptat.
- **Oprávnění:** připojení přebírá roli přihlášeného uživatele, u klíče roli, kterou mu nastavíte.

Podrobný návod je v [dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/ai/capabilities/mcp).

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodník napíše v Claude: *„Které obchodní případy ve fázi Nabídka se dva týdny nepohnuly?
Ke každému navrhni další krok."* Claude si přes MCP přečte obchodní případy a poslední komunikaci
v Twenty a vrátí seznam s návrhy. Když obchodník odpoví *„založ k nim úkoly na zítřek"*, Claude
pozná, že jde o změnu dat, a před založením se zeptá.

:::

## Co je k tomu potřeba

- **Twenty** — napojení pro AI je součástí Twenty, ve všech tarifech i na vyhrazeném serveru.
- **AI nástroj s podporou MCP** — například Claude (aplikace i Claude Code), ChatGPT nebo Cursor,
  podle toho, co ve firmě používáte. Za asistenta platíte jeho poskytovateli podle svého tarifu.
- **Role pro AI** — u sdíleného použití je dobré rozmyslet, co smí AI vidět a měnit. Role a klíče
  nastavíme při nasazení.
- **Přístup zvenku** — asistenti běžící v cloudu (Claude, ChatGPT) se musí k Twenty dostat
  z internetu. Na vyhrazeném serveru zpřístupníme jen adresy, které napojení potřebuje.

Twenty se připravuje i na opačný směr: aby AI uvnitř Twenty mohla přes MCP sáhnout do dalších
firemních systémů. Stav najdete v přehledu níže.

:::otazky

### Je napojení přes MCP bezpečné?

AI pracuje pod rolí konkrétního uživatele nebo klíče a nevidí víc, než smí on. Přihlášení probíhá
v prohlížeči a heslo se nikam neukládá. Co smí AI měnit, omezíte rolí — například jen čtení.

### Potřebuji k tomu programátora?

Ne. V Twenty zkopírujete připravené nastavení a vložíte ho do AI nástroje. Při nasazení to
nastavíme za vás, včetně rolí.

### Platí se za MCP v Twenty něco navíc?

Napojení je součástí Twenty ve všech tarifech. Za samotného AI asistenta platíte jeho poskytovateli,
například předplatné Claude nebo ChatGPT.

### Co když AI udělá chybu?

Akce, které mění data, jsou označené a asistent se před nimi může zeptat. Zbytek hlídá Twenty
stejně jako u člověka: role a navázané automatizace; v tarifu Organization i pravidla pro kontrolu dat.

:::
