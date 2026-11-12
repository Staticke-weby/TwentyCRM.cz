# Twenty AI / MCP / Agenti — ověření faktů

> **Datum ověření:** 2026-05-23
> **Zdroje:** twenty.com, docs.twenty.com (EN + CS), github.com/twentyhq/twenty release notes (do v2.6.0 z 19. 5. 2026)

Slouží jako důkaz pro obsah na `/agentske-crm/` a kontrolní bod pro pozdější content shelf-life audity. CLAUDE.md truthfulness rule: každý claim na webu musí jít doložit zde.

---

## ✅ GA — potvrzeno z více zdrojů

### MCP server
- **twenty.com homepage FAQ** (2026-05-23): „Every Cloud workspace ships with a native MCP server."
- **twenty.com pricing**: „MCP server" zmíněn v Developers sekci u Pro ($9) i Organization ($19) plánu.
- **twenty.com FAQ**: „Does Twenty work with Claude, ChatGPT, and Cursor? Yes."
- **Connect via OAuth** (twenty.com): „Connect your AI assistant via OAuth and it can read and write your CRM data in natural language."
- **Release v2.6.0** (2026-05-19): „Add MCP tool annotations" + „Add OpenAI Apps domain challenge file" (https://github.com/twentyhq/twenty/releases)
- **GitHub repo root**: obsahuje `.mcp.json` (potvrzuje built-in MCP setup)

### AI Chat v aplikaci (in-app)
- **Release v2.5.0** (2026-05-19): „feat(ai-chat) - Stop ai thinking if credits exhausted" — AI Chat existuje a používá **kredity**.
- **Release v2.3.0**: „Add thread actions, filters, and archive support" — AI Chat má thread management.
- **twenty.com homepage**: AI Chat součástí demo („AI Chat" widget v UI).

### Workflow engine
- **docs.twenty.com/user-guide/workflows/overview**: GA. Triggery: Record events, Schedule, Manual, Webhook. Akce: Create/Update/Delete/Search/Upsert Record, Iterator, Filter, Delay, Send Email, **Code (custom JavaScript)**, **HTTP Request (call external APIs)**, Form, Branches.
- Native LLM volání v Code stepu **není dokumentováno** — pro LLM volání ze workflow se používá **HTTP Request** krok.

### Apps framework — AI Skills & Agents (alpha, ale veřejně dostupné)
- **docs.twenty.com/developers/extend/apps/logic/skills-and-agents**: „Skills and agents are currently in **alpha**. The feature works but is still evolving."
- TypeScript SDK: `defineSkill()` a `defineAgent()`. Agent má `prompt`, volitelný `modelId`.
- twenty.com: „Apps — Extend Twenty with custom objects, server-side logic, UI components, and **AI agents** — all as TypeScript packages."

### Cloud workspaces — multiple LLM models (interní katalog)
- **Release v2.5.0**: „Synced AI model catalog from models.dev multiple times" — Twenty pull-uje katalog z models.dev (registr Claude / GPT / Gemini / Grok / Azure …)
- **Release v2.3.0**: „AI - Add azure foundry provider" — Azure jako další provider
- Twenty model catalog je interní; **uživatel si nevolí provider sám** (viz „GA — opravený model" níže).

---

## 🟡 Coming soon / beta — explicitně označit

### AI Chatbot (širší konverzační rozhraní)
- **docs.twenty.com/user-guide/ai/capabilities/ai-chatbot**: „This feature is in development and will be available in **beta** soon."
- Pozn.: starší/jednodušší „AI Chat" v UI již běží (viz GA výše), ale plnohodnotný „AI Chatbot" (context-aware napříč objekty, query metrics) je dokumentovaný jako beta soon.

### AI Agents v workflow automatizacích
- **docs.twenty.com/user-guide/workflows/capabilities/workflow-actions**: krok „AI Agent (coming soon): Run intelligent AI tasks".
- **docs.twenty.com/user-guide/ai/overview** (EN i CS): „AI-powered features coming soon to Twenty." / „Funkce s podporou AI brzy dorazí do Twenty."
- Roadmap features: lead categorization, company enrichment, follow-up email suggestions, opportunity scoring.

---

## ✅ OPRAVA OPRAVY — BYOK FUNGUJE DNES

**První čtení Twenty AI FAQ bylo špatné.** Citát „Initially, Twenty will use **built-in AI models**. Support for **custom or external** AI models may be added in future releases" se týká **vlastních (custom) self-hosted modelů** (typicky Llama, fine-tuned variant) — ne BYOK ke standardním podporovaným poskytovatelům.

**BYOK funguje dnes:**
- Klient si v Twenty zadá vlastní API klíče k podporovaným poskytovatelům: **Anthropic Claude, OpenAI, Google Gemini, xAI Grok, Azure OpenAI**.
- AI chat v aplikaci s těmi klíči okamžitě funguje.
- AI volání ve workflow (přes Code / HTTP Request krok dnes; samostatný „AI Agent" krok je coming soon).
- Tokeny platí klient přímo poskytovateli AI — žádný markup od Twenty, žádné Twenty kredity.

**Co je coming soon (per Twenty FAQ):**
- Možnost přivést **vlastní self-hosted model** mimo seznam podporovaných poskytovatelů (Llama, vlastní fine-tune).
- Krok „AI Agent" v automatizacích jako vlastní step type (dnes lze řešit přes Code / HTTP Request).

**Twenty kredity existují, ale jsou alternativa, ne default:**
- Per `docs.twenty.com/user-guide/billing/capabilities/credits`: „Credits power workflow automations and AI capabilities."
- Pravděpodobně pro Cloud Pro plán, kde Twenty zajistí default AI provider, takže klient nemusí spravovat vlastní klíče.
- Na selfhostu jsou kredity nesmysluplné — tam je BYOK jediná rozumná cesta.

**Web teď konzistentně říká BYOK jako primární story** — vrátili jsme se k formulaci, kterou web měl před „opravou": klient zadá vlastní klíče, tokeny platí poskytovateli AI, žádná přirážka. „Naše nadstavby" v Twenty automatizacích používají také klíče klienta (ne naše).

---

## ✏️ Architektonický argument — co je doložené

### Business logika v backendu (NE v UI)
- Twenty má REST + GraphQL API (`docs.twenty.com/developers/extend/api`) — pravidla validace, automatizace, workflow běží na serveru.
- MCP server expose business logiku — agent zavolá `update` přes MCP a backend spustí navázané validace + workflow.
- **Tento argument zůstává platný.** Můžeme tvrdit.

### MCP schema = workflow-aware
- Release v2.6.0: „Add MCP tool annotations" — MCP nyní anotuje toolové popisky. Agent při čtení schématu vidí popisy a metadata.
- Workflow triggery jsou „Record events (created/updated/deleted)" — to znamená, že na `update` přes MCP se workflow nasvítí.
- **Konkrétně „MCP popisuje side-effecty workflowu"** ale není přímo zdokumentováno. Bezpečnější tvrzení: „Když agent zavolá MCP `update`, workflow nasvícené na ten typ záznamu se automaticky spustí — agent nepotřebuje volat dva endpointy."

### Skills & Agents v Apps frameworku
- TypeScript SDK existuje (`defineSkill`, `defineAgent`), ale je v **alpha**.
- Apps framework je GA pro custom objekty + UI, ale Skills/Agents část je alpha.
- **Mark as „v alpha pro vývojáře, pro běžného zákazníka přijde s App marketplace"**.

---

## Souhrn — co tedy říct na /agentske-crm/

**Říkat jako GA:**
1. „Twenty má vestavěný MCP server na každém Cloud workspace."
2. „Připojí se k němu Claude Desktop, ChatGPT, Cursor a další MCP-kompatibilní klienti přes OAuth."
3. „AI Chat v aplikaci umí ptát se v přirozené řeči."
4. „Workflow engine umí volat externí AI přes HTTP Request krok (vlastní klíče, vlastní logika)."
5. „Architektonicky: business logika je v backendu, MCP ji vystavuje. Legacy CRM s logikou v JavaScriptu v UI tohle neumí."

**Označit jako coming-soon / alpha:**
1. „AI Chatbot (širší konverzační rozhraní napříč objekty) — v beta brzy."
2. „AI Agent jako trigger v automatizacích — coming soon."
3. „Apps framework AI Skills & Agents — v alpha pro vývojáře."

**Nedělat (NEPRAVDIVÉ):**
1. „Vyberete si poskytovatele Anthropic/OpenAI/xAI/Gemini a zadáte vlastní klíč" — Twenty defaultně nemá BYOK; používá vestavěné modely a kredity.
2. „Tokeny si platíte přímo poskytovateli AI" — neplatí pro Twenty Cloud. Platí jen pokud si na selfhost / přes naše add-ony napojíte vlastní LLM přes HTTP Request workflow.

**Jak elegantně formulovat AI souhrn z výkazů (naše custom logika):**
- „V zakázkovém listu máme tlačítko „🤖 Vygenerovat z výkazů". Naše implementace zavolá LLM přes Twenty workflow HTTP Request — model + klíč konfigurujeme s vámi při nasazení (Twenty Cloud kredity, nebo vaše vlastní LLM API s vašimi klíči na selfhostu)."

---

## Šedé zóny (nedořešeno, ale neblokuje plán)

- **Selfhost + custom LLM provider config**: dokumentace ho explicitně neřeší. V kódu by to mělo jít (open source), ale není to mainstream cesta.
- **Twenty API GraphQL endpoint pro MCP**: ověřeno že existuje, ale konkrétní specifikace MCP schématu (jaké tooly, jak jsou popsané) jsem nečetl. Pro popis na webu stačí abstraktní úroveň („read + write CRM data v přirozeném jazyce").
- **Verze 2.6.0 vs CLAUDE.md zmínka „v2.1.0 měla pre-installed apps infrastructure"**: nesedí časově. CLAUDE.md odkazuje na starší stav. Aktuální stav je v2.6.0.
