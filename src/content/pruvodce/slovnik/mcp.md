---
title: Co je MCP a k čemu je v CRM
description: MCP je otevřený standard, přes který se AI asistenti jako Claude nebo ChatGPT napojí na firemní data. Co to znamená pro Twenty — bez žargonu.
vMenu: MCP
draft: true
poradi: 10
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [mcp, ai]
funkce: [mcp-server, mcp-oznaceni-akci, mcp-spousti-automatizaci, mcp-klient]
zdroje: [mcp-standard, docs-mcp, gh-vydani]
---

**MCP** (Model Context Protocol) je otevřený standard, přes který se AI asistent napojí na jiný systém —
přečte z něj data a může v něm i něco udělat. Místo toho, aby každý AI nástroj potřeboval vlastní
napojení na každý program, stačí jedno společné „rozhraní pro AI".

## Co to znamená pro Twenty

Twenty má vlastní MCP server. Asistent, kterého používáte — třeba Claude nebo ChatGPT —
se k němu připojí a pracuje s daty v CRM v přirozené řeči: najde klienta, shrne historii,
založí úkol.

## Proč na tom záleží

- **Stejná pravidla jako pro lidi.** Asistent pracuje pod rolí toho, kdo se ptá, a vidí jen to, co smí vidět on.
- **Automatizace se spouští i tak.** Když asistent změní záznam, proběhnou navázané automatizace stejně, jako kdyby záznam změnil člověk.
