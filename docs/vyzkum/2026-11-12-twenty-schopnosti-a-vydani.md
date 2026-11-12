# Twenty: ověřená inventura funkcí, vydání v2.0 → v2.57 a plánované novinky

> Rešerše 2026-11-12 (subagent). Všechny zdroje zkontrolovány 2026-11-12.
> Tohle je **výchozí stav registru vydání a funkcí** pro průvodce — viz docs/plan-pruvodce.md.

## Zkratky zdrojů
- **GH vX.Y** — release notes na GitHubu: `https://github.com/twentyhq/twenty/releases/tag/twenty%2FvX.Y.Z` (v2.0–v2.9: tag `vX.Y.Z`); API `api.github.com/repos/twentyhq/twenty/releases?per_page=100`
- **TR** — https://twenty.com/releases (marketingový changelog v2.0–v2.52, bez označení beta)
- **PR** — https://twenty.com/pricing
- **D:/cesta** — `https://docs.twenty.com/<cesta>`; celý obsah `docs.twenty.com/llms-full.txt`
- **FF** — seznam přepínačů v kódu: `github.com/twentyhq/twenty/blob/main/packages/twenty-shared/src/types/FeatureFlagKey.ts` (změna 2026-11-11). Interní, zapíná Twenty per workspace; uživatel si sám zapne jen „New REST Metadata API format".

## Označení stavu
**GA** hotové bez přepínače · **FLAG** za přepínačem (v cloudu možná zapnuté jen některým) · **BETA/ALPHA** jak označuje Twenty · **CLOUD / SELF** jen cloud / jen vlastní provoz · **ORG / ENT** tarif Organization / Enterprise

## Pozor
- Release notes předbíhají dokumentaci; některé stránky docs jsou zastaralé (viz konec).
- **Česká dokumentace je na `docs.twenty.com/cs/user-guide/...`, ne `/l/cs/`.** 108 stránek proti 120 anglickým; chybí sekce Email Campaigns.
- **Ceny cloudu se změnily: Organization 39 USD/uživatel/měs** (web dosud počítá s 19 USD).

## 1. AI
| Funkce | Co firmě umožní | Stav | Od | Zdroj |
|---|---|---|---|---|
| AI chat („Ask AI") zná aktuální stránku, hledá a upravuje záznamy | zeptat se CRM lidskou řečí místo stavění filtrů | GA | v2.1 (2026-04-24, AI přepínač zrušen) | D:/user-guide/ai/capabilities/ai-chatbot; GH v2.1 |
| Správa chatů (archiv, filtr, přejmenování) | pořádek v konverzacích s AI | GA | v2.2 / v2.43 | TR; GH v2.43 |
| `@` záznamy, `/` dovednosti, přílohy, diktování | navést AI na konkrétní záznam a postup | GA | v2.40, v2.44, v2.38.1 | TR |
| AI staví a upravuje dashboardy a pohledy | reporty bez správce | GA | v2.20 | TR |
| Import CSV s pomocí AI | rychlejší migrace | GA | v2.18 | TR; GH v2.18 |
| AI slučuje duplicity (u libovolného objektu) | čistá data | GA | v2.53.1 | GH v2.53.1 |
| AI řídí e-mailové kampaně | rozesílky přes chat | GA (kampaně samy beta) | v2.53.1 | GH v2.53.1 |
| **Ada** — výchozí jméno asistenta; zmínky, vypnutí, reakce, jméno a avatar mění admin | AI „kolega" v týmových konverzacích | částečně FLAG (inbox) | v2.48–v2.57.1 | GH v2.49, v2.56, v2.57.1 |
| Agenti: vlastní seznam a stránky, záložka Spouštěče, čekání na událost/čas | autonomní agenti na události a plán | GA | v2.46 (2026-10-12) | TR; GH v2.46 |
| Agent se může zeptat člověka (do inboxu autora) | schválení člověkem uvnitř běhu agenta | FLAG (inbox) | v2.46 | GH v2.46, v2.47 |
| Dovednosti (skills) — opakovatelné instrukce, oddělené pro agenty a uživatele | standardizované postupy | GA v produktu; ALPHA v SDK | v2.40 | GH v2.40; D:/developers/extend/apps/logic/skills-and-agents |
| Volba úrovně modelu, katalog s cenou, kontextem, **umístěním dat** a zero-retention | cena vs. kvalita, GDPR | GA | v2.40 | TR; GH v2.40 |
| Claude Haiku/Sonnet/Opus 5.5 s úrovní úsilí | aktuální modely | GA | v2.56 | GH v2.56 |
| BYOK (vlastní klíče) | vlastní smlouvy s poskytovateli AI | **jen SELF** (cloud BYOK nemá); OpenAI, Anthropic, Google, Mistral, xAI; vlastní/OpenAI-kompatibilní zdarma do 25 uživatelů, nad tím Organization; Bedrock v2.47, Azure Foundry v2.3 | — | D:/user-guide/ai/how-tos/ai-faq |
| Code interpreter (E2B sandbox) | analýzy a soubory v chatu | GA v cloudu; na vlastním provozu vypnutý (`CODE_INTERPRETER_TYPE`) | v2.15 | GH v2.15 |
| AI napíše, ukáže a publikuje vlastní widget | vlastní obrazovky bez vývojáře | **FLAG** `IS_AI_CHAT_COMPONENT_BUILDER_ENABLED` (oznámeno ve v2.55) | v2.55 | GH v2.55; FF |
| AI data policy: zpracování jen v EU, zero retention, blokace limitem 0 | GDPR, compliance | v Legal FAQ; záložka Soukromí za **FLAG** `IS_AI_DATA_POLICY_ENABLED` | v2.57 | D:/user-guide/legal/how-tos/legal-faq; FF |
| Netrénuje na datech zákazníků; výchozí poskytovatelé v cloudu Azure OpenAI, OpenAI, Anthropic, Mistral | odpovědi pro nákup/IT | politika | — | Legal FAQ |
| Kredity: 1 kredit = 1 USD; Pro 1 kredit/uživatel/měs (~100 úkolů/týden), Organization 4 (~500); balíčky od 20 USD/měs; limity na člena/API klíč/aplikaci (ORG) | rozpočet na AI | GA | v2.49 | D:/user-guide/billing/capabilities/credits |

## 2. MCP
| Funkce | Co firmě umožní | Stav | Od | Zdroj |
|---|---|---|---|---|
| **Twenty jako MCP server** (`/mcp`, OAuth nebo API klíč) | práce s CRM z Claude, ChatGPT, Cursoru, Claude Code, Codexu | GA, všechny tarify | v2.0; obrazovka nastavení v2.19 | D:/user-guide/ai/capabilities/mcp; GH v2.19 |
| Stovky nástrojů (CRUD, workflow, soubory), režim meta | agent pracuje s reálnými daty pod rolí uživatele / API klíče | GA | v2.40, v2.44, v2.56 | GH |
| AI nebo MCP spustí workflow | automatizace spuštěná externím agentem | GA | v2.57 | GH v2.57 |
| Návod: zpřístupnění `/mcp`, `/oauth`, `/.well-known` pro IP rozsahy Anthropic a OpenAI | cloudoví asistenti nad soukromou instancí | docs | — | D:/developers/self-host/capabilities/security |
| **MCP klient** — Twenty volá externí MCP servery, nástroje v AI chatu | AI v Twenty použije další systémy bez synchronizace dat | **BETA „not live yet"**; FLAG `IS_MCP_SERVERS_ENABLED` | v2.53.1 → v2.57 | GH; FF |

## 3. Workflow a automatizace
| Funkce | Co firmě umožní | Stav | Od | Zdroj |
|---|---|---|---|---|
| Spouštěče: vznik/změna/upsert/smazání záznamu, ručně, plán, webhook | automatizace bez kódu | GA | před v2 | D:/user-guide/workflows/capabilities/workflow-triggers |
| Akce: CRUD, vyhledání, výběr záznamu (round-robin v2.16), iterace, filtr, zpoždění, odeslání/koncept e-mailu, událost v kalendáři (v2.18), formulář, kód, HTTP, **AI agent**, **Classify** | celý proces uvnitř CRM | GA | — | D:/user-guide/workflows/capabilities/workflow-actions |
| Classify | směrování/hodnocení leadů | GA, vyžaduje model „Jev" a TypeSafe API klíč | v2.42 | workflow-actions |
| AI kroky s vlastním oprávněním | omezit, na co AI sáhne | GA | v2.56 | GH v2.56 |
| Opakování od chybného kroku, logy | spolehlivý provoz | GA | v2.14, v2.9 | TR |
| Krok „poslat do inboxu", lidský vstup | člověk ve smyčce | FLAG | v2.46–2.47 | GH v2.47 |
| Slack konektor | spouštět automatizace ze Slacku | GA | v2.7 | GH v2.7 |

## 4. Data, obrazovky, oprávnění
| Funkce | Co firmě umožní | Stav | Od | Zdroj |
|---|---|---|---|---|
| Vlastní objekty a pole (20+ typů) | modelovat jakoukoli firmu | GA | před v2 | D:/getting-started/key-features |
| Vazby M:N | složitější vztahy | GA | v2.45 | TR |
| Validační pravidla | kvalita dat | GA | v2.56 | GH |
| Pohledy: tabulka, kanban, kalendář (den/týden v2.37), seznam (v2.38.1), seskupení dle vazby | pipeline a fronty práce | GA | — | TR |
| Karta záznamu s widgety a záložkami, vazby přes 2 kroky (v2.28) | 360° pohled na klienta | GA | v2.0 | TR |
| Dashboardy (widgety, tabulky, kanban, kalendář) | řízení z čísel | GA; docs „coming soon": filtry, časové pásmo, budíky, export, soukromé | v2.0 | D:/user-guide/dashboards |
| Role; oprávnění na objekt a pole; role pro API klíče a AI agenty | nejmenší nutná práva | vlastní role ORG v cloudu, zdarma na vlastním provozu | — | D:/user-guide/permissions-access/capabilities/permissions |
| Oprávnění na řádky | „obchodník vidí jen své" | ORG | — | tamtéž |
| Sdílení a soukromé záznamy | důvěrné obchody, HR | oznámeno v2.55; část přepínačů stále v kódu → **částečně FLAG** | v2.41–v2.55 | GH; FF |
| Import (CSV/XLSX) a export | žádné uzamčení | GA | v2.51–v2.53.1 | GH |

## 5. Komunikace
| Funkce | Co firmě umožní | Stav | Od | Zdroj |
|---|---|---|---|---|
| E-mail a kalendář: Google, Microsoft, IMAP/SMTP; aliasy (v2.35) | každý e-mail a schůzka na kartě klienta | GA | — | D:/user-guide/calendar-emails |
| Sdílené schránky přes přeposílání | support@ bez plného připojení | GA | v2.4 | TR |
| E-mailové kampaně | obchodní rozesílky bez dalšího nástroje | docs **BETA „na vyžádání"**; přepínač zrušen v2.54 | v2.54 | D:/user-guide/email-campaigns/overview |
| Nahrávání hovorů: bot, přepisy, na kartě záznamu | záznamy schůzek v CRM | GA | v2.17 | GH v2.17 |
| Fireflies (v2.7), Fathom (v2.38.1), Granola (v2.42), Teams přepisy se shrnutím AI (v2.51) | využít stávající zápisníky schůzek | GA aplikace | — | TR; GH |
| Slack asistent (jedná za člena, který ho označil) | CRM ze Slacku | GA | v2.26 / 1.0.0 v2.39 | GH |
| Teams asistent | CRM z Teams | rozpracováno | v2.46–v2.50 | GH |
| LinkedIn aplikace (přes Unipile): konverzace, osoby, odpovědi | LinkedIn obchod v CRM | GA aplikace (třetí strana) | v2.55, v2.56 | GH |
| Interní inbox, přímé zprávy | týmové konverzace s AI | **FLAG** `IS_AI_CHAT_INBOX_ENABLED` | v2.46 → v2.57 | GH; FF |

## 6. Aplikace
| Funkce | Co firmě umožní | Stav | Od | Zdroj |
|---|---|---|---|---|
| TypeScript SDK a CLI `twenty` (`npm install -g twenty`, `twenty app init`); `create-twenty-app` je zastaralé | vlastní aplikace: objekty, logika, obrazovky, agenti, dovednosti, workflow | GA; vývoj oficiálně macOS/Linux (Windows přes WSL 2) | v2.0 | D:/developers/extend/apps/getting-started/quick-start |
| Logické funkce (HTTP, cron, DB události, AI nástroje), OAuth připojení, kanály zpráv (BETA), účtování kreditů | placené a napojené oborové aplikace | GA, části BETA | — | dev docs |
| Marketplace (npm publish → claim → listing), soukromé instalace (ORG) | distribuce aplikací | **beta** (v2.43), listing v2.54 | — | GH |
| Předinstalované aplikace, automatické aktualizace | rychlý start | GA | v2.46, v2.53.1 | GH |
| Agent Skills pro Claude Code / Codex | stavět aplikace s AI | GA | v2.5 | quick-start |
| twenty-ui (MIT, 1.0.0-alpha) | nativní vzhled aplikací | ALPHA | v2.16, v2.40 | GH |

## 7. Provoz a bezpečnost
- **Tarify:** Pro 9 USD/uživatel/měs; **Organization 39 USD/uživatel/měs** (při ročním placení; měsíční cena neuvedena); Enterprise od 50 000 USD/rok (izolace, IP allow-list, SCIM, SLA). Self-host Free = vše z Pro + vlastní role, vlastní AI klíče; Self-host Organization = prémiové funkce bez povinnosti zveřejnit úpravy kódu, licenční klíč přes Stripe, cena neuvedena. (PR; D:/user-guide/billing/capabilities/pricing-plans)
- **Bezpečnost:** SSO (SAML/OIDC) a audit logy = ORG; 2FA všude (záložní kódy v2.46, blokace opakování TOTP v2.55); DPA jedním klikem; cloud v **AWS Frankfurt**, volba regionu slíbena na 2027. (PR; Legal FAQ)
- **Aktualizace:** 57 menších vydání mezi v2.0 (2026-04-21) a v2.57 (2026-11-09), zhruba 2 týdně; od v1.23 lze přeskočit verze; některá vydání mají nekompatibilní změny (v2.51 migrace rich textu, v2.55 webhooky vyžadují roli). (GH; D:/developers/self-host/capabilities/upgrade-guide)

## Časová osa v2.0 → v2.57 (pohled zákazníka)
- **v2.0 (04-21):** aplikace, vlastní rozvržení, agenti, volba modelu, MCP server (TR). „Workspace v gitu s větvemi" (TR) nepotvrzeno.
- **v2.1 (04-24):** AI bez přepínače; úvodní stránky objektů; předinstalované aplikace
- **v2.2 (05-04):** opakované události Google; správa chatů
- **v2.3 (05-14):** Azure Foundry; obecné OAuth pro aplikace
- **v2.4 (05-14):** sdílené schránky přeposíláním
- **v2.5–2.6 (05-19):** balíček dovedností pro Claude; zabezpečení JWT; filtry přes vazby
- **v2.7 (05-25):** Fireflies; Slack konektor; rotace klíčů JWT
- **v2.9 (06-05):** tabulky vazeb; logy kroků workflow; oprávnění aplikací
- **v2.14–2.16 (06-15/25):** opakování workflow; rychlejší code interpreter; živé e-mailové záložky; round-robin přidělování
- **v2.17–2.19 (06-29 → 07-08):** nahrávání hovorů GA; import s AI; události v kalendáři z AI a workflow; obrazovka MCP
- **v2.20 (07-10):** AI staví dashboardy; doporučené aplikace (PDL, Last Contact, Call Recorder)
- **v2.24–2.28 (07-24 → 08-11):** pohledy na dashboardech; Slack asistent; rozvržení vazeb; seznam zařízení a relací
- **v2.30–2.35 (08-11 → 08-26):** chat na celou obrazovku; Slack agent jedná za člena; interaktivní nahrávky; e-mailové aliasy
- **v2.38.1–2.41 (09-06 → 09-17):** seznamový pohled; úpravy workflow; diktování; Fathom; úrovně modelů; dovednosti přes `/`; základ sdílení záznamů
- **v2.42–2.45 (09-23 → 10-05):** Classify; Granola; HTML e-maily; stránky příloh; MCP přímý režim; M:N vazby; sdílení na úrovni záznamu
- **v2.46 (10-12):** stránky a spouštěče agentů; AI inbox (FLAG); lidský vstup; záložní kódy 2FA
- **v2.47–2.49 (10-15 → 10-19):** sdílení chatů GA; Teams asistent odpovídá; export přes API klíče; zmínky Ady; AI kredity na uživatele
- **v2.50–2.52 (10-21 → 10-27):** kredity za uživatele; nový editor; přepisy z Teams; propojení e-mailů a schůzek s obchody
- **v2.53.1 (10-30):** slučování libovolných objektů (i přes AI); pohledy inboxu; metadata MCP serverů; AI nástroje pro kampaně
- **v2.54 (10-30):** kampaně bez přepínače; marketplace listing; aplikace deklarují MCP servery
- **v2.55 (11-03):** AI stavitel widgetů (FLAG); soukromé záznamy; LinkedIn synchronizace; přístup k mikrofonu/kameře v iframe; Getting Started
- **v2.56 (11-05):** AI kroky s vlastním oprávněním; Claude 5.5 s úrovní úsilí; odpovědi na LinkedIn; přepínač soukromých záznamů zrušen
- **v2.57 / 2.57.1 (11-09):** MCP nástroje v chatu (FLAG); AI/MCP spouští workflow; AI data policy (FLAG); přímé zprávy; Getting Started výchozí; opravy účtování; oprava SAML

## Co je v plánu
Veřejná roadmapa **není** (twenty.com/roadmap = 404, v repozitáři žádné milníky ani štítek roadmap).

**Oficiálně v dokumentaci:**
- dashboardy: filtry, časové pásmo, budíkové grafy, export, soukromé dashboardy
- CC/BCC v akci odeslání e-mailu; odesílání ze schránek kolegů
- označování kolegů v poznámkách („H2 2026")
- volba regionu hostingu (2027)
- filtrování událostí webhooků
- konec starého formátu REST metadat 2026-11-15
- MCP klient „beta, not live yet"

**Odvozeno z přepínačů a otevřených PR (stav 2026-11-12):**
- inbox a týmový chat s Adou: sekce přímých zpráv, přítomnost, potvrzení přečtení (#30232, #30264, #30263)
- MCP klient a krok „MCP nástroj" ve workflow (#29957)
- ChatGPT a Claude jako vestavěné aplikace s připojením per uživatel (#29762)
- agenti čtou přílohy záznamů (#30083)
- podmíněné spouštěče agentů (#30128)
- přístupové skupiny, oprávnění k vytváření, pravidla na řádky přes vazby (FF; #30252)
- uložené AI komponenty v rozvržení stránek (#28732)
- propojení uživatelů Teams (#30156)
- přizpůsobení postranního panelu v2 (#29067)
- seskupené pohledy jako záložky (FF)

## Směr vývoje
1. **Agentní pracovní prostor** — Ada jako člen týmu v inboxu a zprávách; agenti se stránkami, spouštěči a schválením člověkem; AI staví dashboardy a obrazovky (GH v2.46–v2.57; FF)
2. **Platforma pro aplikace** — SDK a CLI, marketplace, účtování kreditů; aplikace deklarují agenty, dovednosti a MCP servery (GH v2.53.1–v2.57)
3. **MCP oběma směry** — Twenty dostupné z Claude a ChatGPT; Twenty volá externí MCP nástroje (FLAG)
4. **Konverzace v CRM** — LinkedIn, Slack, Teams, zápisníky schůzek, kampaně
5. **Připravenost pro větší firmy** — sdílení na úrovni záznamu, soukromé záznamy, AI data policy (EU, zero retention), SAML, audit; zpeněžení přes ORG/ENT a kredity

## Neověřeno nebo v rozporu
- „Workspace v gitu s větvemi, PR a rollbacky" (TR v2.0) — bez potvrzení v GH ani docs
- zda jsou AI stavitel widgetů, AI data policy, MCP klient, inbox/Ada a soukromé záznamy zapnuté v cloudu (v kódu za přepínačem, v release notes jako hotové)
- e-mailové kampaně: docs beta/na vyžádání, přepínač zrušen ve v2.54
- zastaralé stránky docs: M:N „not yet available" (hotové v2.45); nativní odesílání e-mailů „on the roadmap" (už existuje); kredity pro aplikace „launch in October" bez potvrzení
- přesná měsíční cena a cena Self-host Organization nejsou na webu
- Teams asistent — GA nepotvrzeno; Ada jako výchozí jméno mimo inbox nepotvrzeno
- názvy vestavěných dovedností (code-interpreter, crm-hygiene, dashboard-building, deal-review, enrich, meeting-prep, xlsx, pdf, pptx, docx, workflow-building…) — vidět jen v instrukcích živého MCP serveru, ne v docs
