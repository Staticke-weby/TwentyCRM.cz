---
title: "Agentní firma: CRM, které pracuje za vás"
description: Jak se CRM mění z databáze, do které se kliká, v pracovní prostředí, kde část práce odvedou AI agenti a lidé ji schvalují. Co z toho jde s open-source Twenty dnes, co se připravuje a kde začít.
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [ai, agenti, mcp, automatizace]
funkce: [posta-kalendar, zapisniky-schuzek, ai-chat, ai-agenti, ai-krok-automatizace, mcp-server, vlastni-klice-ai, schvaleni-clovekem, ada-tymova-schranka]
zdroje: [salesforce-13-agentic-enterprise-announcement, anthropic-mcp-nadace, gh-vydani]
---

**CRM přestává být databáze, do které se kliká. Stává se pracovním prostředím firmy, kde část
práce odvedou AI agenti — a lidé je řídí a schvalují.** Tento průvodce ukazuje, co z toho jde
s open-source Twenty už dnes, co se připravuje a kde má smysl začít.

Stejným směrem jdou i velcí dodavatelé. Salesforce v říjnu 2025 představil „agentní firmu“, ve které
lidé, AI agenti a data pracují na jedné platformě. Napojení AI asistentů na firemní systémy se sjednotilo
na otevřeném standardu MCP, který od prosince 2025 spravuje nezávislá nadace pod Linux Foundation.
Twenty jde stejnou cestou a je to vidět vydání po vydání — s jedním rozdílem: má otevřený kód a běží
na vašem serveru, takže **data, paměť firmy i volba AI modelu zůstávají u vás**.

## Jak vypadá CRM, které pracuje za vás

```
  e-maily · schůzky · hovory ─────► zapisují se samy
                                         │
                                         ▼
               CRM = jedna paměť firmy (klienti, obchody, zakázky)
                    │                                   │
                    ▼                                   ▼
        AI agenti s vlastní rolí           Claude, ChatGPT, Cursor přes MCP
        (spouštěče, dovednosti)            (pod rolí toho, kdo se ptá)
                    │                                   │
                    └──────────► člověk schvaluje ◄─────┘
                                         │
                                         ▼
                         přehled o nákladech a přínosu
```

1. **Záznam se dělá sám** — e-maily, schůzky a jejich přepisy se ukládají ke klientovi bez
   přepisování. [E-maily a schůzky →](/twenty/e-maily-a-schuzky/)
2. **Po jednání je hotový další krok** — shrnutí, úkol a návrh e-mailu připraví AI.
   [Po jednání →](/twenty/po-jednani/)
3. **AI agenti mají jasná pravidla** — pracují pod vlastní rolí a na spouštěč.
   [AI agenti →](/twenty/ai-agenti/)
4. **Jedna paměť pro lidi i AI** — asistent, kterého už používáte, se k CRM připojí přes MCP.
   [MCP →](/twenty/mcp/)
5. **Člověk rozhoduje** — co AI připraví, schválí kolega. V Twenty to dnes řeší role a koncepty,
   samostatné schvalování v týmové schránce se připravuje.
6. **Náklady pod kontrolou** — začít pilotem na jedné úloze a vědět, kolik AI stojí.
   [Náklady →](/twenty/naklady/)

## Proč právě Twenty

- **Otevřený kód a vlastní server.** Data a historie komunikace neleží u dodavatele CRM.
- **Vlastní klíče k AI.** Na vyhrazeném serveru si vyberete poskytovatele a model a platíte mu napřímo.
- **Napojení pro AI bez licenčního příplatku.** MCP server je součástí Twenty, žádný placený „AI modul“ navíc.
- **Hotová řešení nad Twenty.** Pro řízení obchodu [Twenty Sales](/pro-obchodni-tymy/), pro montáže
  a servis u zákazníka [Twenty Servis](/pro-servisni-firmy/) — obě jsou naše nadstavby nad open-source Twenty.

## Kde začít podle role

- **Obchodník:** [příprava na schůzku](/twenty/po-jednani/priprava-na-schuzku/) ·
  [úkol a e-mail po schůzce](/twenty/po-jednani/ukol-a-e-mail-po-schuzce/) ·
  [e-maily na kartě klienta](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/)
- **Vedoucí obchodu:** [úlohy pro AI agenta](/twenty/ai-agenti/ulohy-pro-ai-agenta/) ·
  [záznam a přepis schůzek](/twenty/e-maily-a-schuzky/zaznam-a-prepis-schuzek/) ·
  [pilot AI na jedné úloze](/twenty/naklady/pilot-ai/)
- **Dispečer a technik:** [plánování výjezdů](/twenty/servis/planovani-vyjezdu-techniku/) ·
  [evidence zakázek](/twenty/servis/evidence-zakazek/)
- **Jednatel:** [co je AI agent](/twenty/ai-agenti/co-je-ai-agent/) ·
  [kolik stojí AI agenti](/twenty/naklady/kolik-stoji-ai-agenti/) ·
  [AI Act a CRM](/twenty/provoz/ai-act-a-crm/)
- **Správce systému:** [co je MCP](/twenty/mcp/co-je-mcp/) ·
  [připojení Claude a ChatGPT](/twenty/mcp/pripojeni-claude-a-chatgpt/) ·
  [které CRM mají MCP server](/twenty/mcp/crm-s-mcp-serverem/)

Twenty vydává zhruba dvě nové verze týdně, proto u každé funkce uvádíme, v jakém je stavu,
a u každého článku, kdy jsme ho naposledy ověřili. [Jak průvodce ověřujeme →](/twenty/jak-overujeme/)
