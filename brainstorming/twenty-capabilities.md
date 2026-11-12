# Twenty CRM — ověřené schopnosti (zdrojováno)

> **Účel:** Honest inventář toho, co Twenty oficiálně umí. Každé tvrzení je dohledatelné v oficiálních zdrojích (twenty.com / docs.twenty.com / GitHub). Toto je jediný materiál ze kterého lze čerpat pro feature claims na webu.
>
> **Zdroje (fetch 2026-05-06):**
> - https://twenty.com/ (homepage)
> - https://twenty.com/pricing
> - https://twenty.com/why-twenty
> - https://docs.twenty.com/user-guide/introduction
> - https://docs.twenty.com/user-guide/data-model/overview
> - https://docs.twenty.com/user-guide/workflows/overview
> - https://docs.twenty.com/user-guide/calendar-emails/overview
> - https://docs.twenty.com/user-guide/ai/overview
> - https://github.com/twentyhq/twenty (README)
>
> **Maturita:** 🟢 GA / produkční | 🟡 částečné nebo s omezením | 🔵 coming soon (roadmap) | ⚪ nezdokumentováno

---

## Oficiální positioning (citace)

- „**Build your Enterprise CRM at AI Speed**" (homepage tagline)
- „**The open alternative to Salesforce, designed for AI**" (GitHub README)
- „the #1 open source CRM" (homepage)
- „The future of CRM is built, not bought" (why-twenty)
- „You don't rent your data warehouse from a vendor who decides the schema" (why-twenty)
- „Customize in an afternoon" vs. „months" (why-twenty, srovnání proti tradičním CRM)

---

## 1. Datový model 🟢

### Standardní objekty (out-of-the-box)

| Objekt | Popis |
|---|---|
| **People** | jednotlivci (kontakty, leady, partneři) |
| **Companies** | firmy / organizace |
| **Opportunities** | obchodní příležitosti / dealy |
| **Notes** | poznámky připojené k záznamům |
| **Tasks** | úkoly připojené k záznamům |

> Pouze 5 standardních objektů — méně, než má Salesforce/MDA. To je záměr (lehkost), ale znamená to, že **vše ostatní si modeluje implementátor přes custom objekty**.

### Custom objekty 🟢

- „Create as many custom objects as you need" — neomezené custom objekty.
- „Unlimited custom fields" — neomezený počet custom polí.
- **Bez per-object licenčního dopadu.**
- Editace přes UI (Settings → Data Model). ⚪ Code-as-config / IaC pro datový model docs nezmiňují.
- Field typy: „text, number, date, select, multi-select, relation, and more" (přesný výpis nezdokumentován).
- Vztahy: explicitně zmíněn typ „relation"; ⚪ kardinalita (1:1, 1:N, N:M) v docs nezdokumentována — nutno ověřit v UI/kódu.

### Omezení (důležité)

- **Email/calendar sync je vázán pouze na People a Companies.** Nezfunguje na Opportunities ani na custom objektech (přímá citace z docs: „Email and calendar sync only works with People, Companies"). 🟡
- Validace polí, formula fields, scripting přímo na poli — ⚪ v docs neuvedeno.

---

## 2. Workflows / automatizace 🟢

Jeden z nejsilnějších bodů Twenty — vestavěný workflow engine pokryje **většinu use casů automatizace přímo v CRM, bez potřeby dalšího nástroje**. To je důležitý bod: automatizace nejsou samostatný produkt za doplatek, jsou součástí Twenty.

### Triggery
- Record events: záznam vytvořen / aktualizován / smazán
- Schedule: cron-style (denně, týdně, …)
- Manual: spuštění uživatelem
- Webhook: vstup zvenčí

### Akce
- Create / Update / Delete Record
- Search Record (najdi záznamy podle kritérií)
- Upsert Record
- Iterator (smyčka přes pole)
- Filter (větvení podle podmínky)
- Delay (čekání nebo schedule)
- Send Email (přes připojený účet)
- **Code: spuštění custom JavaScriptu** 🟢 — toto je velký diferenciátor proti generickým CRM
- **HTTP Request: volání externích API** 🟢 — napojení na vaše systémy (ARES, Fakturoid, Pohoda, Slack, …) přímo z workflow, bez dalšího nástroje
- Form: vstup od uživatele uvnitř Twenty UI
- **AI Agent: 🔵 coming soon** (NEpsát na web jako hotové)

> **Důsledek:** Twenty má vestavěný workflow engine s `Code` + `HTTP Request` akcemi. Scénáře jako ARES lookup, fakturační integrace, lead scoring, notifikace, naplánované úkoly nebo parsing dat **stavíme přímo v Twenty** — automatizace jsou součástí CRM, ne další nástroj za doplatek.

---

## 3. E-mail a kalendář 🟡

### Podporovaní providers
- **Google** (Gmail + Google Calendar) — nativně 🟢
- **Microsoft** (Outlook + Microsoft Calendar) — nativně 🟢
- **SMTP/CalDAV** — pro ostatní providery 🟢

### Co se synchronizuje
- **External emails** — všechny e-maily s externími kontakty z vybraných složek (Inbox, Sent, custom — bez Spam/Trash) 🟢
- **Internal emails** — NEsyncuje se (e-maily v rámci stejné domény zůstávají soukromé) 🟢
- Calendar: meetings s externími účastníky 🟢
- Auto-link: účastníci se automaticky propojí s CRM záznamy podle e-mailové domény 🟢

### Limity (důležité)
- **Sync = polling každých 5 minut**, ne real-time. 🟡
- **Initial import: ~400 zpráv/min** (limit Gmail API). 🟡
- **Vázáno pouze na People + Companies.** Custom objekty a Opportunities synchronizovaný e-mail nemají. 🟡
- **Pouze pravé mailboxy** — aliasy a forwardy nejsou podporovány. 🟡
- **Přílohy: 🔵 coming H1 2026.** ⚠️ Ověřit aktuální stav před psaním na web.

> **Důsledek pro Field Service implementace:** Pokud chceme komunikaci spojit s entitou *Zakázka* nebo *Zařízení*, nepůjde to přes nativní email sync — řešíme přes custom workflow nebo manuální linkování.

---

## 4. AI features 🔵 (převážně coming soon!)

### Co Twenty říká na svém webu (homepage / pricing)
- „AI chat always ready to help you move faster" (homepage)
- „agentic AI" (homepage)
- „AI Agents with custom skills" (Pro plan, pricing)
- „Up to 50M automation credits/year" (Pro plan)
- „Custom AI models" (Organization plan)
- Native MCP server pro Claude / ChatGPT / Cursor (homepage)

### Co říkají dokumenty (docs.twenty.com/user-guide/ai/overview)
> „**AI-powered features coming soon to Twenty.**"

- AI Chatbot — coming soon
- AI Agents v workflows — coming soon

### ⚠️ Nesoulad (kritické pro psaní webu)
Marketing site a pricing page tvrdí, že AI Agents jsou součástí Pro plánu (50M credits/rok). Docs říkají „coming soon". To znamená:

- Funkce mohou být **částečně dostupné v Cloud verzi**, ale dokumentace zaostává.
- **Před napsáním AI sekce na web znovu ověřit aktuální stav** — nestačí jen tvrdit „Twenty má AI", protože to je dnes ve flux.
- Bezpečné formulace: „AI agentní funkce v Pro plánu (postupně dodávané podle Twenty roadmapy)" + odkaz na zdroj.

### MCP server 🟢
- MCP integrace s Claude/ChatGPT/Cursor je explicitně v Pro plánu (pricing) — to je dohledatelné a lze prezentovat jako hotové.
- MCP umožňuje, aby AI klient (např. Claude.ai) mohl číst/zapisovat do Twenty CRM přes standardizovaný protokol.

### Vector / embeddings / RAG ⚪
- V dokumentech ani na marketing webu **nezdokumentováno**.
- Starý twentycrm.cz tvrdil „Vektorová data — připravenost pro vlastní AI chatboty" — toto **nemáme čím podpořit**, vyřadit z webového textu.

---

## 5. Layout, views, dashboards 🟢

- Custom views s filtry, řazením, sloupci (Settings → views; analogie k MDA „uložená zobrazení") 🟢
- Sdílení views v týmu 🟢
- Record page customization 🟢
- Dashboards: „Real-time insights to track performance" (introduction docs) 🟢 — hloubku features nutno ověřit dalším fetchem

---

## 6. Permissions & access 🟢 / 🟡

Twenty má **role-based access control** s několika úrovněmi (z docs/user-guide/permissions-access):
- **Custom role definitions** — vytvoření vlastních rolí s konkrétními právy
- **Object-level permissions** — řízení kdo vidí/edituje/maže záznamy konkrétního objektu (např. technik vidí Zakázku, ale ne Opportunities) ✅ potvrzeno fungující
- **Field-level permissions** — „Restrict access to sensitive fields" (oficiální docs)
- **Row-level permissions** — pouze Organization plan na Cloudu

### Dostupnost per varianta (důležitý detail pro pricing argumentaci)

| Feature | Cloud Pro ($9) | Cloud Organization ($19) | Selfhost (open-source) |
|---|---|---|---|
| Custom roles & object-level permissions | ❌ (dle Twenty pricing) | ✅ | ✅ |
| Field-level permissions | ❌ | ✅ | ✅ |
| Row-level permissions | ❌ | ✅ | ✅ (open-source build) |
| SAML/OIDC SSO | ❌ | ✅ | ✅ |
| Audit logs | ❌ | ✅ | ✅ |
| Advanced encryption | ❌ | ✅ | ✅ |

> **Důležité pro obchodní argumentaci:** Role-based přístup (omezení které tabulky technik vidí) v Cloudu vyžaduje Organization plan ($19/user/měs). **V Selfhostu je toto zdarma jako součást open-source buildu** — to posiluje cenovou argumentaci pro Selfhost u klientů, kteří potřebují role separation (typicky 3+ technici + dispečer + účetní).

### Praktický dopad pro Field Service

Technik v terénu vidí pouze Zakázku, Zařízení a Místo — ne Obchodní případy nebo finanční pole. Toto je ✅ realizovatelné.

> Klient menší (3–10 uživatelů) bez potřeby separace rolí může jet Cloud Pro. Klient s rolemi (technik vs dispečer vs účetní) jde buď Cloud Organization NEBO Selfhost (cenově výrazně výhodnější).

---

## 7. Integrace / API 🟢

- **REST + GraphQL API** 🟢
- API rate limit: 100 req/min (Pro), 200 req/min (Organization)
- Webhooks 🟢
- MCP server 🟢
- CSV import/export 🟢
- API import: 50 000+ records (homepage tvrzení)
- **`npx twenty deploy`** — CLI pro deploy custom apps (GitHub README)

> **Pro CZ specifika** (ARES, Fakturoid, iDoklad, Pohoda) — neexistují nativní integrace; stavíme přes vestavěné `HTTP Request` workflow + případně custom Code akci. Vše uvnitř Twenty, bez dalšího nástroje.

---

## 8. Deployment options 🟢

| Možnost | Detail |
|---|---|
| **Cloud (Twenty.com)** | Managed, zero-ops, „spin up workspace in under a minute" |
| **Self-host přes Docker Compose** | Open-source, plné vlastnictví |
| **Local development** | Setup guide v dokumentaci |
| **`npx twenty deploy`** | CLI deploy |

Tech stack (z GitHub README):
- Frontend: React, Jotai, Linaria, Lingui (i18n)
- Backend: NestJS, BullMQ
- DB: PostgreSQL
- Jazyk: TypeScript (78.7 % codebase)
- Build: Nx monorepo

---

## 9. Maturita produktu a směr vývoje (sourced)

### Tvrdá čísla
| Metrika | Hodnota | Stav k |
|---|---|---|
| GitHub stars | 45.6k | 2026-05 |
| Forks | 6.3k | 2026-05 |
| Total commits | 11 938 | 2026-05 |
| Releases | 67 | 2026-05 |
| Latest release | v2.2.0 | 2026-05 |
| Release cadence | týdně až dvoutýdně | průběžně 2026 |
| Open issues | 73 | 2026-05 |

### Co recent releases ukazují (z release notes v1.22 → v2.2)

| Release | Klíčové featury | Signál |
|---|---|---|
| v2.2.0 | AI chat, billing, recurring calendar events | AI mainstreaming, billing maturity |
| v2.1.0 | **Pre-installed apps infrastructure**, page layout scaffolding, admin panel | **App platform direction** |
| v2.0.0 | OAuth security hardening, admin panel redesign, website overhaul | Enterprise readiness |
| v1.23.0 | Record page layouts, workflow improvements, cross-version upgrade | UX customization |
| v1.22.0 | Rich-text fields, AI tool output flattening, **SSE streaming na MCP** | AI integration deepening |

### Twenty jako platforma (ne jen CRM) — sourced

Recent release notes potvrzují, že Twenty **deliberately** směřuje od pure CRM k **app platform / framework**:

- **„infrastructure for pre-installed apps"** (v2.1.0)
- **twenty-sdk** — publikovaný SDK pro vývoj custom aplikací
- **App registration system** s manifest-based konfigurací
- **`npx twenty deploy`** CLI pro deploy custom apps (GitHub README)
- **Page layout scaffolding** (v2.1.0) — vlastní UI per app

> **Důsledek pro positioning:** Twenty není „jen CRM, který si můžete upravit", ale **platforma, na kterou stavíte další aplikace** sdílející datový model. To validuje messaging „platforma, která roste s vámi" a rozlišuje nás od generického CRM (Raynet).

### Jak používat roadmap při psaní webu

Roadmap je **pozitivní signál**, ne závazek. Při psaní obsahu:

- ✅ **Lze citovat:** „Twenty aktivně přidává AI agenty, e-mailové přílohy a další app framework features" (sourced z release notes)
- ✅ **Lze říct:** „Pre-installed apps infrastruktura už ve v2.1.0" (konkrétní release, sourced)
- ❌ **Nelze tvrdit:** „Twenty bude mít X v Q2 2026" (roadmap se mění; my nemáme autoritu prognózovat)
- ✅ **Lze říct:** „Vývoj jde rychlým tempem (týdenní releases) — sledujeme ho za vás a včas upozorňujeme na novinky" — toto je naše služba, ne Twenty claim

### Životnost obsahu na webu (důležitý design princip)

Vzhledem k rychlosti vývoje Twenty:

| Typ tvrzení | Životnost | Jak psát |
|---|---|---|
| „Twenty je open-source" | dlouhá | klidně bez data |
| „Twenty má custom objekty" | dlouhá (core feature) | bez data |
| „Twenty Pro stojí $9/user/měs" | krátká (pricing se mění) | s datem ověření v patičce nebo „aktuální stav viz twenty.com/pricing" |
| „Twenty má AI agenty" | střední (právě se vyvíjí) | s datem nebo „v roadmapě / postupně dodáváno" |
| „Twenty má 45 000 stars" | krátká (čísla rostou) | s datem |
| „Twenty směřuje k app platformě" | dlouhá (validovaná strategická směr) | bez data |

**Pravidlo:** Pokud tvrzení obsahuje konkrétní číslo, verzi nebo název featury, **datovat**. Pokud je o směru / filozofii / standardní open-source vlastnosti, datum není potřeba.

---

## 10. Co Twenty NEMÁ / je nutno řešit jinak

| Potřeba | Twenty stav | Jak řešíme |
|---|---|---|
| **Pokročilá fakturace** (vystavení dokladu do Fakturoidu/iDokladu/Pohody) | Nemá nativní | Twenty workflow s HTTP Request akcí volá API fakturačního SW |
| **ARES lookup** (CZ-specific) | Nemá nativní | HTTP Request workflow nebo custom code |
| **Mobilní app pro technika** v terénu | **PWA (Progressive Web App)** — funguje v prohlížeči mobilu/tabletu, ✅ potvrzeno fungující v terénu (user test 2026-05). Není nativní iOS/Android. | Pro Phase 1 dostačující — instalace na home screen, fotky z fotoaparátu, formulářová práce |
| **Storage pro velké přílohy** | Email attachments coming soon (H1 2026) | Phase 2 / DataStorage PLUS produkt |
| **Pokročilý reporting / BI** | Dashboards bez detailů; pravděpodobně omezený | Externí BI (Metabase, Power BI) přes API |
| **Telefonní integrace / call recording** | Nezdokumentováno | Třetí strana (PBX webhook → workflow) |
| **Sklad dílů s pohyby** | Není v core CRM | Phase 2 nebo externí SW |

---

## 11. Phase 1 ready vs. počkat

**🟢 Lze stavět Phase 1 implementaci na:**
- Custom datový model (Field Service entity: Zakázka, Zařízení, Místo, …)
- Workflows s Code + HTTP Request akcemi (ARES, fakturace, notifikace)
- E-mail sync s Gmailem/Outlookem (s vědomím limitů — pouze People/Companies)
- Custom views per role (technik, dispečer, účetní)
- **Role-based object permissions** (Selfhost vždy / Cloud na Organization plánu) — technik vidí jen své tabulky
- **PWA pro techniky v terénu** ✅ potvrzeno fungující
- API + MCP integrace
- Self-host nebo Cloud podle potřeby klienta

**🟡 Lze, ale s omezením / vlastním řešením:**
- Linkování e-mailů na Zakázku/Zařízení (custom workflow, ne nativní sync)
- Přílohy v e-mailech (čekat na H1 2026 nebo postavit vlastní)
- Komplexní formuláře / validace (custom code v workflow)

**🔵 Odložit do Phase 2:**
- AI agentní funkce — necílit na Phase 1 messaging dokud Twenty nesplní docs
- AI extrakce dat z dokumentů (vektorové funkce nezdokumentované)
- Plnohodnotný sklad
- Native mobilní app

---

## 12. Co citovat z oficiálních zdrojů na web (safe quotes)

Tyto formulace jsou **přímé citace z Twenty oficiálních zdrojů** a lze je použít na webu (s atribucí nebo parafrází):

- „The open alternative to Salesforce, designed for AI" — pozicování proti Salesforce, AI-ready
- „Build your Enterprise CRM at AI Speed" — speed of customization angle
- „The future of CRM is built, not bought" — anti-vendor-lock argument
- „You don't rent your data warehouse from a vendor who decides the schema" — data ownership argument
- „Customize in an afternoon" (vs months) — agility argument
- „Open-source, AI-ready, and yours to shape" — three-pillar pozicování

**❌ NEpoužívat:**
- Cokoliv o vektorových polích (nezdokumentované)
- „Twenty má hotové AI shrnutí komunikace" (coming soon)
- Konkrétní LLM provider claims (OpenAI/Gemini/Claude) bez ověření aktuální dokumentace
