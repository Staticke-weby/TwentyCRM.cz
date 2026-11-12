# CRM jako pracovní prostředí lidí a agentů (globální směr, stav 2026-11-12)

> Rešerše subagentem. **[V]** ověřeno na primární stránce · **[S]** jen sekundární zdroj · **[U]** neověřeno / v rozporu.

## Paradigma v 7 bodech
1. **Agenti jako kolegové, člověk je řídí.** Microsoft WorkLab „2025: The year the Frontier Firm is born" (23. 4. 2025): fáze asistent → agenti jako „digitální kolegové" → lidé určují směr agentům, kteří vedou celé procesy; „agent boss", poměr lidí a agentů [V]
   https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born
   WTI 2026 (5. 5. 2026): role se mění „od plnění úkolů k dosahování výsledků"; 86 % uživatelů bere výstup AI jako výchozí bod; aktivní agenti v M365 15× meziročně [V]
   https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization
2. **„Agentic enterprise" = lidé, agenti a data na jedné platformě 24/7.** Salesforce Agentforce 360 (13. 10. 2025) [V] https://www.salesforce.com/news/press-releases/2025/10/13/agentic-enterprise-announcement/ ; HubSpot INBOUND 2025 „hybrid human-AI teams" [S] https://www.businesswire.com/news/home/20250903907062/en
3. **Agenti dostávají atributy zaměstnanců: identitu, oprávnění, nadřízeného.** OpenAI Frontier (5. 2. 2026) [S] https://openai.com/index/introducing-openai-frontier/ ; Microsoft Agent 365 (18. 11. 2025) „control plane for AI agents", Entra ID agenta [V] https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-agent-365-the-control-plane-for-ai-agents/ ; Day.ai: agenti mají jména, popis práce, „reports to one person" [V] https://day.ai/
4. **Řízení agentů je samostatná vrstva.** ServiceNow AI Control Tower (květen 2025) + MCP pro externí agenty (Knowledge 2026) [S]; Google Gemini Enterprise (9. 10. 2025) „front door for AI in the workplace" [S] https://techcrunch.com/2025/10/09/google-ramps-up-its-ai-in-the-workplace-ambitions-with-gemini-enterprise
5. **Rozhraní se stěhuje do obecného asistenta, CRM se volá přes konektory a MCP.** Anthropic Cowork pluginy (30. 1. 2026, /sales:call-prep) [S] https://claude.com/resources/articles/cowork-plugins-across-enterprise ; Claude Managed Agents (8. 4. 2026, beta) [S] https://claude.com/blog/claude-managed-agents ; OpenAI AgentKit (6. 10. 2025) [S]; ChatGPT agent žádá svolení před důležitými kroky (17. 7. 2025) [S]. → CRM musí být dobré v tom, že ho volají agenti, ne jen v tom, že se v něm kliká.
6. **Hodnota se přesouvá od záznamů ke kontextu a stopě rozhodnutí.** Foundation Capital „Context graphs" (22. 12. 2025) [S] https://foundationcapital.com/context-graphs-one-month-in/ ; WTI 2026 „Owned Intelligence" [V]
7. **Práce se přesouvá od lidí, kteří používají AI, k AI, která pracuje přes API.** Anthropic Economic Index (15. 9. 2025): 77 % podnikového API použití jsou automatizační vzorce [S] https://www.anthropic.com/research/anthropic-economic-index-september-2025-report

## Cílová architektura (sbíhá se napříč dodavateli)
1. **Systém záznamů** — objekty, role, oprávnění (Twenty: objekty workspace)
2. **Automatický záznam** — e-mail, kalendář, hovory, schůzky bez přepisování (Day.ai, Lightfield, Attio „It logs itself" [V])
3. **Vrstva kontextu a paměti** — „context graph" (Day, Lightfield [V]), Data 360, „semantic layer" [S]
4. **Agenti s vlastní identitou a rolí** — Twenty: agent vázán na roli, „keep the agent's own role" bez člena [V] https://docs.twenty.com/developers/extend/apps/logic/skills-and-agents
5. **Fronta ke schválení („agent inbox")** — agent navrhne, člověk schválí / upraví / zamítne (LangChain Agent Inbox [S]; Lightfield „For review", Day, Attio [V]); Twenty: `sendInboxMessage()` a alfa dotaz na člena, samostatná obrazovka schvalování nenalezena [U]
6. **Otevřený protokol** — MCP server zpřístupní systém záznamů libovolnému asistentovi pod oprávněním uživatele (Twenty, Attio, ServiceNow)
7. **Řídicí věž** — registr, sledování, audit, měření nákladů (Agent 365, ServiceNow, Gemini Enterprise; Twenty: spotřeba AI kreditů v2.41 [V])

## 14 použití agentů, která dnes běží (SMB obchod a servis)
1. Automatický záznam e-mailů a kalendáře k osobám a obchodům (Day, Lightfield, Attio) [V]
2. Přepis schůzky → shrnutí → aktualizace CRM (Twenty: Granola v2.42, Teams přepisy se shrnutím v2.51, nahrávání hovorů v2.49; Folk) [V]
3. Obohacení a kvalifikace leadů (Folk; Twenty AI kroky „enrich, classify") [V]
4. AI klasifikace záznamů ve workflow (Twenty Classify v2.42) [V]
5. Návrh follow-upu po kontaktu (Folk; Twenty 2.0 agenti píší e-maily ve workflow) [V]
6. Upozornění na kontakty, které utichly; návrhy fáze obchodu ze signálů (Folk [V], Clarify [S])
7. Příprava na schůzku (Claude /sales:call-prep [S]); Salesforce State of Sales 2026: agenti mají zkrátit rešerše o 34 % a psaní e-mailů o 36 %, obchodník prodává jen ~40 % času [V] https://www.salesforce.com/news/stories/state-of-sales-report-announcement-2026/
8. Příprava nabídky (HubSpot CPQ s AI [S]; Salesforce „quoting complex deals" [V])
9. Dotazy a úpravy CRM lidskou řečí (Ask Attio; Twenty AI chat s @záznamem a /dovedností v2.40, AI dashboardy v2.20) [V]
10. Samoobslužný agent pro zákazníky (HubSpot Customer Agent ~70 % vyřešeno samo) [S]
11. AI recepční, která objedná zakázku (Jobber Receptionist GA srpen 2025) [S]
12. Asistent technika v terénu (ServiceTitan Atlas, 18. 9. 2025, část v preview) [S]
13. Optimalizace plánu výjezdů (Dynamics 365 Field Service Scheduling Operations Agent — **preview**) [S/U]
14. Back office: párování plateb a upomínky (QuickBooks Accounting/Payments Agent, USA, 1. 7. 2025) [S]

## Protiargumenty
- **Spolehlivost:** CRMArena-Pro (Salesforce AI Research, květen 2025): ~58 % úspěšnost u jednokrokových, ~35 % u vícekrokových CRM úloh [S] https://arxiv.org/html/2505.18878v1 ; TheAgentCompany (CMU): nejlepší agent dokončil ~24–30 % kancelářských úloh [S/U]
- **Bezpečnost:** „ForcedLeak" (září 2025, CVSS 9,4) — prompt injection přes Web-to-Lead formulář mohla vynést data z Agentforce, opraveno [S] https://thehackernews.com/2025/09/salesforce-patches-critical-forcedleak.html
- **Kvalita dat:** lídři odhadují, že 26 % jejich dat je nedůvěryhodných [S]; 51 % obchodních lídrů s AI brzdí nepropojené systémy [V]
- **Návratnost:** MIT NANDA „GenAI Divide" (2025): 95 % organizací v malém předběžném vzorku bez měřitelného přínosu [S]
- **Důvěra:** Klarna (květen 2025) znovu nabírala lidi do podpory [S]
- **Připravenost:** jen 26 % uživatelů AI říká, že vedení je v AI sladěné (WTI 2026) [V]
- **Zralost Twenty:** dovednosti a agenti v SDK jsou **alpha**, externí MCP servery „beta, not live yet" [V]; MCP server workspace funguje pro Claude, Cursor, ChatGPT

## Pozice Twenty
- Homepage: „Build your Enterprise CRM at AI Speed", „Stay in control with our open-source software", „Don't get locked into someone else's ecosystem", „Self-hosting the open source core is free" [V] https://twenty.com/
- 2.0.0 (21. 4. 2026): aplikace, workspace v gitu (větve, PR, rollback — podle TR; v GH nepotvrzeno, viz inventura), stavba z Claude Code/Cursor/CLI, agenti ve workflow, workspace pro libovolného MCP klienta [V] https://twenty.com/releases
- MCP na vlastním provozu `https://{doména}/mcp`, oprávnění podle přihlášeného uživatele nebo role API klíče [V] https://docs.twenty.com/user-guide/ai/capabilities/mcp
- OpenAI-kompatibilní poskytovatel na vlastním provozu přes `OPENAI_COMPATIBLE_BASE_URL/_API_KEY/_MODELS` (issue #16213) [V]; plně lokální modely nepotvrzeny [U]

**Úhel pro průvodce:** systém záznamů a kontext ve vlastní infrastruktuře, vlastní volba modelu, libovolný agent (Claude, ChatGPT, vlastní) v něm pracuje pod rolemi, které určíte.
