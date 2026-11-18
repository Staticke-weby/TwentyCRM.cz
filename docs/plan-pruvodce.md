# Plán průvodce /twenty/ — „Agentní firma s Twenty"

> Verze 1 · 2026-11-12 · podklady: `docs/vyzkum/2026-11-12-*.md`
> Navazuje na pravidla v `CLAUDE.md` a `brainstorming/zasady-webu.md` (pravdivost, žádný žargon, prodáváme co existuje).

---

## 1. Teze — co prodáváme

**CRM přestává být databáze, do které se kliká. Stává se pracovním prostředím firmy, kde část práce dělají AI agenti
a lidé ji řídí a schvalují.** Tohle už není předpověď, ale směr, kterým jdou všichni velcí:

- Microsoft popisuje „Frontier Firm": agenti jako digitální kolegové, člověk určuje směr a schvaluje (Work Trend Index 2025 a 2026).
- Salesforce „agentic enterprise": lidé, agenti a data na jedné platformě (Agentforce 360, 10/2025).
- Agenti dostávají identitu, oprávnění a „nadřízeného" (Microsoft Agent 365, OpenAI Frontier, Day.ai).
- AI asistenti (Claude, ChatGPT, Copilot) se k firemním systémům připojují přes MCP; od 12/2025 ho spravuje Linux Foundation.
- Nové CRM „se vyplňují sama" — e-maily, schůzky a hovory se zapisují bez přepisování (Attio, Day.ai, Lightfield).

**Twenty jde stejným směrem a je to vidět vydání po vydání** (v2.0 → v2.57, duben–listopad 2026): agenti se spouštěči,
dovednosti, AI kroky ve workflow s vlastními oprávněními, MCP server, přepisy schůzek se shrnutím, AI stavitel dashboardů,
asistentka Ada v týmové schránce (za přepínačem), MCP oběma směry (připravuje se). Navíc otevřený kód a vlastní server:
**data, kontext i volba AI modelu zůstávají u klienta.**

**Klienta nezajímají funkce, ale co mu umožní.** Proto průvodce **není manuál Twenty** (ten je na docs.twenty.com),
ale odpověď na otázku *„co by u nás mohlo dělat CRM samo a co z toho jde už dnes"*. Každý článek končí cestou k demu.

**Cíl pro web:** nejlepší český zdroj o agentních CRM a o Twenty. Česky o Twenty nepíše nikdo kromě nás a twenty.com/cs;
témata MCP, open source CRM a agenti v obchodě a servisu jsou česky prázdná nebo strojově přeložená
(`docs/vyzkum/2026-11-12-seo-cesky-trh.md`).

---

## 2. Tři vrstvy pravdy — jak o funkcích píšeme

Twenty vydává zhruba dvě verze týdně a část novinek je ve vydání ohlášená, ale v kódu ještě schovaná za přepínačem.
Každé tvrzení o schopnosti proto patří do jedné ze tří vrstev a čtenář musí vidět, do které:

| Vrstva | Co znamená | Jak to píšeme | Příklad |
|---|---|---|---|
| **Funguje dnes** | hotové bez přepínače (GA), uvedeno ve vydání nebo v dokumentaci | „Twenty umí…", s verzí a datem ověření | AI kroky ve workflow s vlastním oprávněním (v2.56) |
| **Připravuje se** | ohlášené ve vydání, ale za přepínačem; beta „na vyžádání"; uvedené v dokumentaci jako „coming soon" | „Připravuje se: …", nikdy jako hotové | týmová schránka s Adou, MCP klient, AI stavitel widgetů |
| **Směr vývoje** | odvozeno z rozpracovaných změn v kódu nebo z trendu trhu | jen na stránce „Kam Twenty míří" a v trendových článcích, s odkazem na důkaz | ChatGPT a Claude jako vestavěné aplikace (PR #29762) |

Doplňující štítky: **jen cloud / jen vlastní server / tarif Organization**, protože se to v Twenty liší a mění cenu.

**Naše nadstavby** (Twenty Sales, Twenty Servis) a **naše práce** (nastavení agenta, workflow, napojení) se vždy
pojmenují jako naše, ne jako funkce Twenty (CLAUDE.md pravidla 1, 3e). Neslibujeme moduly, které nemáme.

---

## 3. Struktura průvodce

### 3.1 Vstupní stránka `/twenty/` — „Agentní firma: CRM, které pracuje za vás"
Pilíř celého průvodce. Krátce teze z kap. 1, schéma cílové architektury (systém záznamů → automatický záznam → paměť
firmy → agenti s rolí → schválení člověkem → MCP pro libovolného asistenta → přehled nákladů) a rozcestník deseti oblastí.
Výrazy: *agentní CRM, AI agent v CRM, AI CRM, CRM s umělou inteligencí*.

### 3.2 Deset oblastí podle toho, co klient získá

Každá oblast = úvodní stránka (výsledek pro klienta, co jde dnes, co se připravuje) + články.
U článků: **stav** = co z toho Twenty umí dnes (D), připravuje se (P), naše práce nad Twenty (N); **vlna** = pořadí psaní.

#### 1. „CRM, které se vyplní samo" — `/twenty/e-maily-a-schuzky/`
Konec přepisování. E-maily, schůzky, hovory a LinkedIn se zapisují ke klientovi samy.
| Článek | Stav | Vlna |
|---|---|---|
| E-maily a kalendář na kartě klienta bez přepisování (Google, Microsoft, IMAP) | D | 1 |
| Záznam a přepis schůzky přímo v CRM (nahrávání hovorů, Teams přepisy se shrnutím v2.51, Fathom, Granola, Fireflies) | D | 1 |
| LinkedIn konverzace v CRM (aplikace přes Unipile, v2.55–2.56) | D (třetí strana) | 2 |
| Sdílená schránka info@/servis@ v CRM (přeposílání, v2.4) | D | 2 |
| Přechod z Excelu s pomocí AI (import, slučování duplicit) | D | 2 |

#### 2. „Po každém jednání hotový další krok" — `/twenty/po-jednani/`
Shrnutí, návrh follow-upu a úkol připraví AI, člověk jen schválí.
| Článek | Stav | Vlna |
|---|---|---|
| Ze schůzky rovnou úkol a návrh e-mailu (přepis → AI shrnutí → workflow) | D + N | 1 |
| Kdo se odmlčel: upozornění na klienty a obchody bez kontaktu | D (workflow) | 2 |
| Příprava na schůzku: AI shrne historii klienta za 30 vteřin | D (AI chat, @záznam) | 1 |
| Schválení člověkem: proč agent nic neodešle sám | D (koncept) / P (fronta ke schválení) | 2 |

#### 3. „AI kolegové s jasnými pravidly" — `/twenty/ai-agenti/`
Agenti v Twenty: co dělají, pod jakou rolí, kdo je hlídá.
| Článek | Stav | Vlna |
|---|---|---|
| Co je AI agent v CRM a čím se liší od chatbota | D | 1 |
| Agenti v Twenty: spouštěče, dovednosti, role (v2.40–2.56) | D (dovednosti v SDK alpha) | 1 |
| Ada — AI kolegyně v týmové schránce | P (za přepínačem) | 3 |
| Bezpečnost agentů: oprávnění, audit, prompt injection (poučení z ForcedLeak) | D + N | 2 |
| 15 úloh, které může agent převzít v obchodě a servisu (co dnes, co brzy) | D/P | 1 |

#### 4. „Jedna paměť firmy pro lidi i AI" — `/twenty/mcp/`
CRM jako zdroj pravdy, ke kterému se připojí Claude, ChatGPT nebo Copilot.
| Článek | Stav | Vlna |
|---|---|---|
| Co je MCP a proč na něm záleží firmě (ne vývojáři) | D | 1 |
| Jak připojit Claude / ChatGPT k Twenty a co pak umí | D | 1 |
| Které CRM mají MCP server (Twenty, Raynet, Pipedrive, HubSpot, Salesforce, Attio) — nezávislé srovnání | D (data o konkurenci se zdroji) | 1 |
| AI chat v Twenty: ptejte se CRM lidskou řečí | D | 2 |
| Twenty ve Slacku a Teams | D (Slack) / P (Teams) | 3 |
| Twenty volá další systémy přes MCP (klient) | P | 3 |

#### 5. „Obchodníci prodávají místo vyplňování polí" — `/twenty/obchod/`
Vazba na Twenty Sales.
| Článek | Stav | Vlna |
|---|---|---|
| AI kvalifikace a třídění poptávek (krok Classify, v2.42) | D (vyžaduje model a klíč) | 2 |
| Rozdělování leadů mezi obchodníky (round-robin, v2.16) | D | 2 |
| Nabídka s marží a ceníkem — a co z ní připraví AI | D + N (Twenty Sales) | 2 |
| Reporty bez správce: AI postaví dashboard (v2.20) | D | 2 |
| Obchodní plán se semaforem | N (Twenty Sales) | 3 |

#### 6. „Servis od poptávky po podklad k fakturaci" — `/twenty/servis/`
Vazba na Twenty Servis a oborové stránky.
| Článek | Stav | Vlna |
|---|---|---|
| Plánování výjezdů techniků — návod | N (Twenty Servis) | 1 (SEO mezera) |
| Evidence zakázek: Excel vs. aplikace | N | 1 (SEO) |
| Servisní výkaz — co má obsahovat a jak ho vyplnit v mobilu | N | 2 (SEO) |
| Co může AI v servisní firmě převzít už dnes (příjem poptávky, shrnutí, připomínky prevencí) | D + N | 2 |
| AI recepční, plánovač, asistent technika — kam to jde ve světě | směr (trend) | 3 |

#### 7. „Systém podle vaší firmy — za dny, ne měsíce" — `/twenty/na-miru/`
| Článek | Stav | Vlna |
|---|---|---|
| Vlastní typy záznamů a pole: jak Twenty přizpůsobit oboru | D | 2 |
| Aplikace nad Twenty: co to je a kdy dává smysl | D (marketplace beta) | 3 |
| AI vám postaví vlastní obrazovku (widget) | P (za přepínačem) | 3 |

#### 8. „Čistá data, pak agenti" — `/twenty/data/`
| Článek | Stav | Vlna |
|---|---|---|
| Proč agenti selhávají na špinavých datech (a jak tomu předejít) | D + trend | 2 |
| Duplicity, validace, datový model — kontrolní seznam před nasazením AI | D | 2 |

#### 9. „Vaše data, váš server, váš AI model" — `/twenty/provoz/`
| Článek | Stav | Vlna |
|---|---|---|
| Vyhrazený server, nebo cloud: aktuální ceny a bod zlomu (Organization 39 USD!) | D | 1 (oprava cen) |
| Vlastní klíče k AI a volba modelu (jen vlastní server; umístění dat a zero-retention v2.40) | D | 2 |
| AI Act pro firmu s CRM: co platí od 2. 8. 2026 (označení AI) a co se odkládá | trend/legislativa | 1 (SEO mezera) |
| GDPR a AI agenti: kam tečou data zákazníků | D + legislativa | 2 |
| Bezpečnost Twenty: SSO, 2FA, audit, cloud ve Frankfurtu | D | 3 |

#### 10. „Předvídatelné náklady a měřitelný přínos" — `/twenty/naklady/`
| Článek | Stav | Vlna |
|---|---|---|
| Kolik stojí AI agenti v CRM: Salesforce, HubSpot, Microsoft, Zoho, Twenty (kredity, platba za výsledek) | D (data se zdroji) | 1 |
| Proč 40 % AI projektů skončí a jak začít pilotem na jedné úloze | trend | 1 |
| AI kredity v Twenty a jak hlídat útratu (limity na člena, v2.49) | D | 2 |

### 3.3 Průřezové sekce
- **Kam Twenty míří** `/twenty/kam-twenty-miri/` — živá stránka: směry vývoje (agentní pracovní prostor, aplikace,
  MCP oběma směry, konverzace v CRM, připravenost pro větší firmy) a seznam „připravuje se" s důkazy. Generuje se z registru (kap. 4).
- **Novinky** `/twenty/novinky/` — měsíční česky shrnutí vydání („Co je nového v Twenty — listopad 2026"),
  jen to, co je pro firmu podstatné. Generuje se z registru vydání + lidská redakce.
- **Slovník** `/twenty/slovnik/` — agent, MCP, dovednost, workflow, system of record, human-in-the-loop, BYOK, kredity…
  Krátké stránky, dobré na vyhledávání a pro odkazy z článků.
- **Trendy** — 3–4 delší texty: „Agentní firma: co se mění v roce 2026", „Kolik českých firem používá AI (ČSÚ 11/2026: 35 %)",
  „AI agenti v servisu ve světě". Statistiky jen s primárním zdrojem.
- **Cesty podle role** (na vstupní stránce): obchodník, vedoucí obchodu, dispečer, technik, jednatel, IT — každá vede na 4–6 článků.
- **Srovnání** — stávající `/open-source-crm-srovnani/` + nové „Kdo má v roce 2026 skutečné AI agenty: Raynet, Pipedrive,
  HubSpot, Salesforce, Twenty" a „Open source CRM česky 2026" (SEO mezera).

### 3.4 Návaznost na stávající web
- `/agentske-crm/` a `/co-umi/` zůstávají jako prodejní stránky; průvodce je **rozvádí do hloubky** a odkazuje na ně (ne naopak duplikovat).
  `/agentske-crm/` je dnes datované „k 23. 5. 2026" a tvrdí, že AI kroky ve workflow se připravují — **aktualizovat podle registru jako první**.
- Každý článek v oblasti 5 vede na Twenty Sales, v oblasti 6 na Twenty Servis; oborové stránky odkazují na relevantní články.
- **Rozdělení s bohemiacrm.cz** (umisťuje se na „open source CRM česky", „CRM pro servisní firmy"): dohodnout, která doména vlastní
  které téma, a na druhé jen odkazovat — jinak si budou brát pozice.

### 3.5 Situace z praxe `/twenty/situace/` (rozhodnutí 2026-11-18)
Mezistupeň mezi Novinkami (pomíjivé, řazené podle vydání) a články (trvalé, dlouhé): **krátká karta = jedna situace**,
jak ji řekne zákazník („Poptávka přišla jako PDF a nikdo nemá čas ji celou číst"), jak ji řešit v Twenty, co je
k tomu potřeba a štítek stavu z registru. Nevznikla samostatná část webu: články průvodce už use casy jsou,
příběhy rolí má `/jak-to-vypada-v-praxi/` a stránka pro každou novinku by byla tenká (doorway, zásada 12).

- **Data:** `src/data/situace.json` (role, produkt, oblast, `funkce` z registru, `hotove` jen u věcí hotových v řešení,
  `clanek`, `overeno`). Kontroluje `src/lib/situace.mjs` — neznámá funkce, oblast nebo článek shodí build.
- **Kde se ukáže:** všechny na `/twenty/situace/` po oblastech (`::situace-vse`, kotva `#situace-<id>`); úvod oblasti je
  ukáže sám pod články (layout); jinde `::situace{oblast role produkt id}` — třeba na produktové nebo oborové stránce.
- **Vlastní URL karta nemá.** Když naroste (3+ příbuzné situace, příklad, otázky), napíše se článek a karta na něj odkáže.
- **Štítek** se bere z první funkce; když kterákoli funkce není `dnes`, karta ukáže její stav. `obsah:zastarale`
  hlásí karty, jejichž funkce se po `overeno` změnila.

**Postup u každého vydání** (týdně, s `npm run twenty:vydani`) — každou změnu zařadit do jedné ze čtyř skupin:
1. **Nová karta Situace** — funkce bez přepínače, která řeší konkrétní situaci zákazníka.
2. **Úprava článku** — změna rozšiřuje to, co už článek popisuje.
3. **Jen registr a Novinky** — drobnost, nebo věc za přepínačem („Připravuje se").
4. **Vynechat** — nástroje pro vývojáře, rozhraní pro vývojáře, vnitřní opravy.

Před zařazením do 1 nebo 2 **ověřit v kódu změny, že není za přepínačem** (`IS_…_ENABLED`) a že má obrazovku pro
uživatele, ne jen definici v aplikaci. Shrnutí vydání (i z AI) to nerozliší — viz zásada 14e.

---

## 4. Správa zdrojů a aktuálnosti

Cíl: **každé tvrzení o Twenty se dá dohledat ke konkrétnímu vydání nebo stránce dokumentace a je jasné, kdy bylo naposledy ověřeno.**
Když se něco změní, systém sám řekne, kterých článků se to týká.

### 4.1 Tři registry v repozitáři (jediný zdroj pravdy)

**a) Registr vydání** — `src/data/twenty/vydani.json`
Jeden záznam na každé vydání Twenty (výchozí stav v2.0–v2.57 je v `docs/vyzkum/2026-11-12-twenty-schopnosti-a-vydani.md`).
```json
{ "verze": "2.56.0", "datum": "2026-11-05", "url": "https://github.com/twentyhq/twenty/releases/tag/twenty%2Fv2.56.0",
  "zmeny": [ { "funkce": "ai-kroky-workflow", "co": "AI kroky běží s vlastním oprávněním", "typ": "zmena" } ],
  "zpracovano": "2026-11-12" }
```

**b) Registr funkcí** — `src/data/twenty/funkce.json`
Jeden záznam na schopnost. Tohle je **jediné místo, kde se mění stav** (funguje dnes / připravuje se / směr).
```json
{ "id": "mcp-server", "nazev": "MCP server", "prinos": "Claude nebo ChatGPT pracují s daty v CRM pod vaší rolí",
  "stav": "dnes", "omezeni": ["vsechny-tarify"], "od": "2.0.0", "zmeny": ["2.19.0", "2.56.0"],
  "zdroje": ["docs-mcp", "gh-2-19"], "overeno": "2026-11-12", "temata": ["mcp", "ai"] }
```
Stavy: `dnes` · `pripravuje-se` (+ důvod: `prepinac` / `beta` / `docs-coming-soon`) · `smer` (+ důkaz: PR, issue).
Omezení: `jen-cloud` · `jen-vlastni-server` · `tarif-organization` · `tarif-enterprise`.

**c) Registr zdrojů** — `src/data/twenty/zdroje.json`
```json
{ "id": "docs-mcp", "url": "https://docs.twenty.com/user-guide/ai/capabilities/mcp", "typ": "dokumentace",
  "vydavatel": "Twenty", "zkontrolovano": "2026-11-12", "stav": "ok", "otisk": "sha256…" }
```
Typy: `vydani`, `dokumentace`, `web-twenty`, `cenik`, `kod` (přepínače, PR), `konkurence`, `studie` (Gartner, ČSÚ…), `legislativa`.
Zdroje mimo Twenty (trendy, konkurence, statistiky) jdou do stejného registru — u čísel platí „jen primární zdroj".

### 4.2 Článek se na registry jen odkazuje
Frontmatter článku průvodce:
```yaml
funkce: [mcp-server, ai-chat]     # stav a „ověřeno" se berou z registru funkcí
zdroje: [docs-mcp, gh-2-19]       # pro tvrzení mimo registr funkcí
overeno: 2026-11-12               # kdy člověk naposledy prošel text článku
verzeTwenty: '2.57'
```
Stránka pak **sama vykreslí**:
- u každé zmíněné funkce štítek stavu („Funguje dnes · od v2.19", „Připravuje se", „Jen na vlastním serveru"),
- box „Ověřeno 12. 11. 2026 proti Twenty v2.57" a seznam zdrojů,
- historii změn článku („Co se změnilo") z gitu.

Když se v registru změní stav funkce (např. Ada přejde z přepínače do „dnes"), **všechny články se štítkem se aktualizují samy**;
text článku pak ručně doplníme podle hlášení z kap. 4.3.

### 4.3 Hlídání změn — skripty a pravidelná kontrola
| Příkaz | Co dělá | Kdy |
|---|---|---|
| `npm run twenty:vydani` | stáhne nová vydání z GitHub API od posledního zpracovaného, vypíše změny, navrhne záznamy do registru vydání a funkcí, **vypíše dotčené články** (podle `funkce` a `temata`) | týdně |
| `npm run twenty:prepinace` | porovná seznam přepínačů v kódu (FeatureFlagKey.ts) s registrem — co přibylo, co zmizelo (= funkce se zapnula pro všechny) | týdně |
| `npm run zdroje:kontrola` | ověří dostupnost URL a otisk obsahu; hlásí `nedostupne` a `zmeneno-od-overeni` | týdně |
| `npm run obsah:zastarale` | články s `overeno` starším než 90 dní, nebo jejichž funkce se změnila po datu ověření, nebo s nedostupným zdrojem | týdně + před vydáním |
| `npm run twenty:novinky` | z registru vydání připraví koncept měsíční „Novinky v Twenty" | měsíčně |

Build **neprojde**, když článek odkazuje na neexistující funkci nebo zdroj, nebo když text označí za hotovou funkci,
která je v registru `pripravuje-se` (kontrola klíčových slov u štítků).

**Pravidelný rytmus:**
- **týdně** (ručně — `npm run twenty:vydani`, `zdroje:kontrola`, `obsah:zastarale`): spustit kontroly → hlášení „co se změnilo a kterých článků se to týká" → člověk rozhodne → úprava registru a textů.
- **u každého vydání:** zařazení změn do čtyř skupin (kap. 3.5) — nové karty Situace, úpravy článků, Novinky.
- **měsíčně:** článek Novinky + aktualizace „Kam Twenty míří".
- **čtvrtletně:** audit všech článků starších 90 dní, cen (Twenty i konkurence) a statistik.

### 4.4 Veřejná transparentnost
Stránka **„Jak průvodce ověřujeme"**: odkud čerpáme (vydání, dokumentace, kód), co znamenají štítky, jak často kontrolujeme,
že nejsme Twenty Inc. Pro čtenáře důvěra, pro vyhledávače i AI vyhledávače signál odbornosti (E-E-A-T).

---

## 5. Šablona článku
1. **Nadpis = otázka nebo výsledek** („Jak připojit ChatGPT k firemnímu CRM", ne „MCP server").
2. **Odpověď v prvních dvou větách** (dobré pro Google i AI odpovědi).
3. **Co vám to umožní** — 3–5 výsledků pro firmu, konkrétně (obchodník, dispečer…).
4. **Jak to v Twenty funguje** — krátce, bez návodu na klikání (ten je v dokumentaci; odkaz na českou docs `docs.twenty.com/cs/…`).
5. **Příklad z praxe** — obchod nebo servis; vymyšlené situace označit jako ilustrační (pravidlo 3c: žádné vymyšlené reference).
6. **Co je potřeba** — tarif / vlastní server / AI kredity / naše nastavení; ceny vždy s datem.
7. **Stav funkcí** (štítky z registru) + **co se připravuje**.
8. **Časté otázky** (3–5, FAQPage).
9. **Demo přístup** (`::demo-cta`) a související články.
10. **Ověřeno · verze Twenty · zdroje**.

Jazyk: pro jednatele, obchodníky, dispečery (CLAUDE.md „Voice"). Technické články pro správce (MCP na vlastním serveru,
klíče k AI) označit „Pro správce" a držet zvlášť, aby nerušily hlavní tón.

---

## 6. Vyhledávání a viditelnost
- **Skupiny výrazů** (relativní poptávka, ověřit v GSC / Marketing Mineru): AI agenti (roste), AI CRM, MCP a integrace,
  servis v terénu (evidence zakázek, plánování výjezdů — bez reklam, malá konkurence), open source / vlastní server
  (česky skoro nic), srovnání a alternativy (Raynet, Pipedrive, HubSpot, Salesforce), AI Act, Twenty (malá poptávka, ale nejkvalifikovanější).
- **Seznam.cz** odměňuje hlubokou strukturu jedné domény a kotvy v textu → oblasti s úvodními stránkami, obsah stránky s kotvami.
  Založit profil na **firmy.cz**.
- **Strukturovaná data:** TechArticle + BreadcrumbList (hotové v layoutu), FAQPage u otázek, DefinedTerm ve slovníku.
- **AI vyhledávače:** krátké odpovědi na začátku, data ověření, `llms.txt` a verze stránek v Markdownu (z obsahu, který už v Markdownu máme).
- **Vnitřní prolinkování:** každý článek → úvod oblasti → vstupní stránka; články ↔ Twenty Sales / Servis ↔ oborové stránky.

---

## 7. Postup

**Krok 0 — základ — ✅ hotovo 2026-11-12**
- ✅ Fakta na webu: ceny cloudu (Organization 39 USD) a omezení cloudu na minimum; odkazy na českou dokumentaci `/cs/`
  (kromě VOP — smluvní text, starý odkaz jen přesměrovává); `/agentske-crm/` přepsáno: pryč tvrzení, že Raynet/Pipedrive
  musí „napodobovat kliknutí" (oba mají MCP server), a že Twenty agentovi „předem popíše následky akce" (v2.6.0 přineslo jen
  označení nástrojů MCP čtení / změna, PR #20672); „Co už funguje" se vykresluje z registru.
- ✅ Registry `src/data/twenty/{funkce,vydani,zdroje}.json` (50 funkcí, 57 vydání v2.0–v2.57.1 vč. v2.42 jen z twenty.com,
  27 zdrojů), kontrola v `src/lib/twenty.mjs`. Proti návrhu v kap. 4.1: historie funkce se **neodvozuje z pole `zmeny` ve funkci**,
  ale z `vydani.json` (`zmeny[].funkce`) — změna se zapisuje jen na jednom místě.
- ✅ Štítky stavu: direktiva `::stav-funkci` pro libovolnou stránku, v průvodci blok „Co z toho Twenty umí dnes" z `funkce: […]`;
  `zdroje: […]` přijímá id z registru.
- ✅ Skripty `twenty:vydani`, `obsah:zastarale` a navíc `zdroje:kontrola` (dostupnost + přesměrování; otisk obsahu zatím ne).
  Zbývá z kap. 4.3: `twenty:prepinace`, `twenty:novinky` a kontrola „hotová funkce v textu, která je v registru pripravuje-se".
- ✅ Stránka „Jak průvodce ověřujeme" (`/twenty/jak-overujeme/`, koncept do zveřejnění průvodce).

**Stav 2026-11-12: vlna 1 napsaná jako koncepty** — vstupní stránka, 15 článků (článek „Vyhrazený server, nebo cloud“
vypuštěn: ceny cloudu jen na `/cloud-vs-selfhost/`, oblast Provoz tam odkazuje) a úvody 8 oblastí; zdroje převedeny do
registru (78), nové funkce `cekani-na-udalost` a `koncept-emailu`. Prochází se na dočasném webu (staticke-weby.github.io/TwentyCRM.cz, zobrazuje i koncepty); otevřené body k ověření:
vyřešeno 2026-11-13 — Gartner ověřen ručně; Amazon SES z textů odstraněn (zásada 14c: nerozvádět, co Twenty neuvádí); servisní plán zakládá zakázku podle nastaveného pravidla.

**Stav 2026-11-12 (večer): vlny 2 a 3 napsané jako koncepty** — celkem 61 stránek průvodce (155 zdrojů, 56 funkcí v registru),
včetně Kam Twenty míří, Novinek (říjen, listopad 2026) a slovníku na jedné stránce. Oproti kap. 3.2: „AI kredity v Twenty“
→ `/twenty/naklady/hlidani-utraty-za-ai/` (kredity jsou jen v cloudu), „Bezpečnost Twenty“ a „Open source CRM česky“
vypuštěny (pokrývají `/bezpecnost/` a `/crm-open-source-cesky/`), trendy a srovnání agentů v oblasti AI agenti.
Opraveno při kontrole: pravidla pro kontrolu dat (a tím povinná pole) jsou jen v tarifu Organization; LinkedIn = připravuje se
(připojení účtu za přepínačem); import s AI = import přes AI chat. Gartner (2025 i doplněné zprávy z 2026) a čísla článků GDPR ověřeny ručně ve vestavěném prohlížeči 2026-11-12.

**2026-11-13: průvodce zveřejněn** — `draft` zrušen u všech 61 stránek (rozhodnutí uživatele), odkaz v menu a v patičce se zobrazuje; doplněn do `public/llms.txt`.

**Vlna 1 — 14 článků + vstupní stránka (2–3 týdny)**: články označené „1" v kap. 3.2. Mix: tři pilíře prodeje
(automatický záznam, agenti, MCP) + SEO mezery (plánování výjezdů, evidence zakázek, AI Act, ceny AI agentů, MCP srovnání).
Po vlně 1 průvodce zveřejnit (zrušit `draft`) a zapnout odkaz v menu.

**Vlna 2 — ~20 článků (měsíc)**, **Vlna 3 — zbytek + Novinky + Kam Twenty míří (průběžně)**.

**Provoz:** týdenní kontrola změn, měsíční Novinky, čtvrtletní audit. Rytmus psaní ~4–6 kvalitních článků týdně
(hromadně generované stránky vyhledávače trestají).

**Měření:** Google Search Console + Seznam Webmaster (pozice, výrazy), Umami (návštěvy, čtení), konverze = žádosti o demo
z průvodce. Po 3 měsících vyhodnotit, které oblasti přivádějí poptávky, a podle toho psát dál.

---

## 8. Rozhodnutí (2026-11-12)
1. **Rozdělení témat s bohemiacrm.cz** — twentycrm.cz vlastní Twenty, open source, vyhrazený server, agentní CRM, MCP
   i servisní návody; bohemiacrm.cz vlastní Microsoft / Power Platform a velké firmy a na tato témata jen odkazuje
   (zapsáno v `brainstorming/twentycrm-strategie.md`).
2. **Bez formálního schvalování** (změna 2026-11-12) — koncepty se procházejí společně na dočasném webu, který je zobrazuje; `draft` se ruší při spuštění na vlastní doméně.
3. **Adresy oblastí podle hledaných slov** (nadpis zůstává výsledek pro klienta) — finální, po zveřejnění neměnit:
   `/twenty/e-maily-a-schuzky/` · `po-jednani` · `ai-agenti` · `mcp` · `obchod` · `servis` · `na-miru` · `data` · `provoz` ·
   `naklady` · `kam-twenty-miri` · `novinky` · `slovnik` · `jak-overujeme`. Složky v `src/content/pruvodce/` jsou založené.
4. **Šablony ke stažení: ne.** Servisní články jsou jen text.
5. **Týdenní kontrola ručně**, bez naplánované úlohy. Web se zveřejní přes **GitHub Pages**.
6. **Use casy jako karty „Situace z praxe" uvnitř průvodce, ne nová část webu** (2026-11-18) — kap. 3.5. První várka:
   čtyři karty z v2.59 (přílohy, podmínka u spouštěče, IČO klienta v seznamu, Claude/ChatGPT tlačítkem) a čtyři
   z existujících článků.
