# Konkurence a inspirace

> Tento dokument slouží dvojím účelem:
> 1. **Pozicování** — proti komu se vymezujeme a jak (sourced fakta, žádné domněnky).
> 2. **Inspirace** — od koho převzít web-strukturu, copy patterns, UX.
>
> **Zdroje (fetch 2026-05-06):**
> - https://raynet.cz/ (homepage)
> - https://raynet.cz/cena/ (ceník)
> - Pro Twenty fakta viz `twenty-capabilities.md`.

---

## Generický CRM pro SMB v ČR

### Raynet (raynet.cz)

**Pozice na trhu:** nejznámější český CRM pro SMB — pro většinu rozhodovatelů „když se řekne CRM, řeknou Raynet". V kontextu twentycrm.cz funguje jako **etalon ve dvou rovinách**.

---

#### 1. Etalon web-struktury (co od nich převzít)

##### Hero
- Tagline: **„České CRM, které jednoduše funguje"** — přátelský, přístupný, ne technický
- Sekundární: *„Ponořte se do světa Raynet CRM"*
- **Naše analogie:** držet český, přátelský tón. „Funguje" angle je dobrý — i my říkáme „hotové řešení", ne „software"

##### Hlavní navigace (sitemap)
1. **Produkt** (`/produkt/`) — co CRM umí
2. **Oborová řešení** — vertikály! Mají to jako samostatnou top-level položku
3. **Ceník** (`/cena/`) — transparentní, na top level
4. **Radíme** — content / blog hub
5. **O nás** — tým + firma
6. **Kontakt**

##### Klíčové podsekce z navigace
- `/mobilni-aplikace/` — samostatná stránka
- `/raynet-ai/` — samostatná stránka pro AI funkce
- `/automatizace/` — samostatná stránka pro workflowy
- `/zabezpeceni/` — samostatná stránka pro security/GDPR (důležité!)
- `/marketplace/` — integrace
- `/reference/` — případové studie a citace
- `/chci-ukazku/` — CTA na demo
- `/webinare-skoleni/` — vzdělávací obsah
- `/pruvodce-obchodem/` — návody a tipy
- `/kariera/` — i to mají

##### Cílové obory které otevřeně inzerují
*(Z homepage extract)*
- Malé firmy + velké firmy
- Fotovoltaika
- Finanční poradci
- **Realitní makléři** ← my explicitně NE
- Výrobní firmy
- Stavební firmy
- IT firmy
- **Servisní / opravárenské firmy** ← naše první vertikála — Raynet to má, ale generické
- Marketingové agentury

> **Důsledek pro nás:** Raynet servisním firmám slibuje generický CRM. My slibujeme oborové Field Service řešení. Tam je naše místo.

##### Co Raynet dělá obsahově dobře (převzít)
- 📚 **Webinare-skoleni + Pruvodce-obchodem** — content marketing pro lead nurturing
- 🏷️ **Oborové stránky** jako hlavní navigace, ne podsekce
- 🛡️ Samostatná `/zabezpeceni/` stránka — buduje důvěru
- 🤖 Samostatná `/raynet-ai/` — AI jako prodejní bod, ne technický detail
- 📱 Samostatná stránka mobilní app — pro klienty které to zajímá
- 💰 Ceník v hlavní navigaci — transparentnost
- ⏱️ **30denní trial bez karty** — low friction

##### Co NEpřebírat
- ❌ „Spustíte si CRM za 5 minut" / self-service onboarding (my prodáváme implementační projekt)
- ❌ Přílišnou genericitu („pro každého") — my jdeme úzce na Field Service
- ❌ AI jako vágní wow-faktor — my AI claim potvrzujeme oficiálními docs (a Twenty AI je zatím coming soon → na webu opatrně)

---

#### 2. Etalon proti kterému se vymezujeme

Raynet je v zásadě **one-size-fits-all SaaS CRM** s přidanými funkcemi. Funguje, je vyzrálý, má 30+ jazyků a hladký UX. **Slabost:** klient se přizpůsobuje softwaru, ne naopak. Kdo má specifický obor (servis zařízení, revize, výjezdy) typicky používá 30 % funkcí Raynetu a chybí mu 30 % funkcí specifických pro obor.

##### Tvrdé srovnání (ověřené proti zdrojům)

| Rozměr | **Raynet** (cena/cena/ + homepage) | **Twenty / nás** (twenty-capabilities.md) |
|---|---|---|
| **Pricing model** | Per-user / měsíc, **3 tiery + Enterprise** | Open-source self-host (0 Kč licencí) NEBO Cloud $9–19/user/měs |
| **Start tier** | 399–449 Kč/user/měs (max 3 uživatelé!) | Self-host: 0 Kč licencí + 5 000 Kč/měs náš retainer |
| **Professional** | 799–949 Kč/user/měs | Twenty Pro Cloud ~207 Kč/user/měs (–73 % proti Raynetu) |
| **Ultimate** | 999–1 199 Kč/user/měs | Twenty Org Cloud ~437 Kč/user/měs (–56 %) |
| **Free trial** | 30 dní bez karty | 30 dní bez karty (Twenty Cloud) |
| **Limit počet uživatelů** | Start 3, Professional 100, Ultimate 1 000 | Self-host **unlimited**, Cloud unlimited |
| **Limit záznamů** | Start 50k, Professional 250k, Ultimate 500k | **Unlimited** (Cloud i Selfhost) |
| **Storage** | Start 500 MB, Professional 100 GB, Ultimate 1 TB | **Unlimited** (Cloud), nebo dle serveru (Selfhost) |
| **Custom fields** | Start 5, Professional 100, Ultimate 500 | **Unlimited** |
| **Custom OBJEKTY (vlastní entity)** | ❌ Nemá (jen custom fields) | ✅ **Unlimited custom objects** |
| **Workflows** | Start 50/měs, Professional 1 000/měs, Ultimate unlimited | Pro 50M automation credits/rok, Org/Self-host bez limitu |
| **Code action ve workflow** | ❌ Není v dokumentaci | ✅ Custom JavaScript |
| **HTTP Request action** | ⚪ Není explicitně | ✅ Volání externích API |
| **Self-host možnost** | ❌ SaaS only | ✅ Open-source AGPL-3.0 |
| **Vlastnictví dat** | SaaS u Raynetu | Self-host = 100 % vy / Cloud = u Twenty |
| **MCP server (AI)** | ❌ Nemá | ✅ Native MCP (Claude/ChatGPT/Cursor) |
| **GraphQL API** | ⚪ Pravděpodobně REST | ✅ REST + GraphQL |
| **Online podpisy** | Add-on (5–10 dokumentů ročně) | Postavíme přes externí službu volanou z workflow |
| **Mobilní app** | Nativní iOS / Android | PWA (instalace přes prohlížeč, žádný App Store, auto-updates) — ne nativní |
| **AI features** | Raynet AI: shrnutí schůzek, generování e-mailů (GA) | AI Agents v Pro plánu / coming soon (ověřit aktuální stav) |
| **Roky na trhu** | Etablovaný (10+ let CZ) | Mladší produkt (45k stars na GitHubu, týdenní release cadence) |
| **Směr produktu** | Stabilní generický CRM | Aktivně směřuje k **app platformě** (pre-installed apps infrastructure od v2.1.0, twenty-sdk, `npx twenty deploy`) |
| **Rozšíření o další agendy** (projekty, HR, helpdesk, sklad) | Druhý software, druhá faktura, druhý systém | Přibalíme jako další app na stejnou platformu — sdílí Klienty, Kontakty, datový model |
| **Implementační partner** | Většinou direct, partner network omezený | **Vyžaduje partnera** (= my) — hodnota, ne slabina |

##### Kritický bod: custom objekty

**Raynet má strop 500 custom polí na Ultimate plánu, ale NIKDE nezmiňuje custom OBJEKTY (vlastní entity).** To znamená, že servisní firma má v Raynetu:
- ✅ Klienta, kontakty, příležitosti, aktivity
- ❌ Žádnou entitu „Zařízení" se servisní historií
- ❌ Žádnou entitu „Místo" s vazbou na zařízení
- ❌ Žádnou entitu „Zakázka" s technikem a fázemi

Maximum, co lze v Raynetu udělat, je přidat 500 vlastních **polí** k existujícím entitám — ale relace „Zakázka má více Položek a vazbu na Zařízení a Klienta a Technika" tam neexistuje. **To je hlavní strukturální omezení, které Twenty přebíjí.**

##### Kritický bod: cena při růstu týmu

Reálný klient s 20 lidmi, srovnání ročních nákladů:

| Varianta | Setup | Měsíčně | Ročně |
|---|---|---|---|
| **Raynet Professional** | 0 Kč | 20 × 799 = 15 980 Kč/měs | **191 760 Kč/rok** |
| **Raynet Ultimate** | 0 Kč | 20 × 999 = 19 980 Kč/měs | **239 760 Kč/rok** |
| **Twenty Cloud Pro + náš retainer** | 34 990 Kč | 4 000 + 20 × 207 = 8 140 Kč/měs | **97 680 Kč/rok** |
| **Twenty Selfhost + náš retainer** | 34 990 Kč | 5 000 Kč/měs | **60 000 Kč/rok** |

**Selfhost úspora proti Raynet Professional u 20 lidí: 131 760 Kč/rok.**
**Cumulative 5 let: ~660 000 Kč úspory.**

Toto je defendable, sourced kalkulace. Lze ji dát na web jako kalkulačku nebo jako konkrétní příklad.

##### Naše argumentace: čím se VÁM Raynet NEhodí

Pro web (sekce „Twenty vs. Raynet" nebo FAQ):

> **Raynet je dobrý CRM pro firmy, které chtějí standardní obchodní pipeline a stačí jim to bez úprav.**
>
> **Twenty (s námi) je lepší pokud:**
> - Máte oborový proces, který se nevejde do generických polí (servis zařízení, revize, výjezdy)
> - Plánujete růst týmu nad 5 lidí (cena Raynetu lineárně roste, naše ne)
> - Chcete data ve své infrastruktuře (self-host, EU, vaše zálohy)
> - Chcete AI nástroje (Claude/ChatGPT) připojené k CRM přes standardní MCP
> - Vidíte CRM jako platformu, kterou chcete v čase rozšiřovat o vlastní moduly

##### Argumentace: čím je Raynet zase silnější

Buďme féroví — ne všechno uznáváme jako naši slabinu, ale tam kde Raynet má převahu, je to nutné komunikovat:

- ✅ **Mobilní nativní app** (iOS / Android) — Twenty má jen PWA (která ale prakticky funguje pro Field Service use cases)
- ✅ **Více let na CZ trhu** — víc referencí, víc zkušenosti s českými klienty
- ✅ **AI features už GA** (shrnutí schůzek, generování e-mailů) — Twenty AI částečně coming soon
- ✅ **Self-service onboarding** za 5 minut — Twenty (s námi) je implementační projekt
- ✅ **Odzkoušené integrace s CZ ekonomickými systémy** přes marketplace
- ✅ **Webové vzdělávací materiály** (webinare, návody) — my budeme stavět od nuly

> **Důsledek:** Pro klienty kteří chtějí *plug-and-play CRM hned* je Raynet pravděpodobně lepší volba. Pro klienty kteří potřebují **oborové řešení**, **vlastnictví dat** nebo **růst bez per-user pasti** jsme silnější my.

---

## Specializovaný Field Service software (k naplnění po definici A1–A3 segmentů)

Tato sekce je placeholder — naplníme až rozhodneme o konkrétních FS segmentech (viz `persony.md`). Předběžný seznam:

- **mServis, Servis24, FixIT** — CZ specializované FSM nástroje (HVAC / servis)
- **HaloPSA, ConnectWise** — IT-servis PSA (segment B1)
- **RevizeOnline, Revize.eu** — specializovaný revizní SW (segment A2)

**Otázka pro každého** (k validaci):
- Co umějí navíc proti generickému CRM (mobilní app pro technika, kalendář vytížení, konkrétní vzory revizních zpráv)?
- Co naopak NEmají, co Twenty s námi má (custom datový model napříč všemi entitami, AI / MCP, vlastnictví dat, jeden nástroj místo CRM + FSM, …)?

> **Pravděpodobná pozice:** specializované FSM jsou silnější v *terénní fázi* (mobile, plánovací kalendář), my jsme silnější v *celé firmě* (CRM + servis + nabídky + dashboardy v jednom).

---

## Mezinárodní generické CRM (referenčně)

Doplníme jen pokud bude potřeba. Předběžně:
- **HubSpot** — silný v inbound / marketing, drahý při růstu, free tier láká pak za $$$
- **Pipedrive** — lehký sales-focused, ne pro servisní firmy
- **Salesforce SMB** — overkill pro většinu CZ SMB, drahá Apex customizace

Pravděpodobně nebudeme aktivně srovnávat — naším primárním kontextem je Raynet a specializované FSM.

---

## TL;DR (pro web copy)

Pokud bychom měli jeden odstavec proč Twenty s námi vs. Raynet:

> *„Raynet je solidní generický CRM. Pokud máte servisní firmu se zařízeními, výjezdy a servisní historií, Raynet vám nabídne tabulku, do které to zkusíte naroubovat. My v Twenty postavíme pro váš obor přesné entity (Zařízení, Místo, Zakázka, Revize) s vlastními procesy. Bez per-user licence, s daty u vás, a s napojením na AI nástroje (Claude/ChatGPT) přes standardní MCP. U firmy s 20 lidmi vám to ušetří přes 130 000 Kč ročně oproti Raynetu — a hlavně dostanete řešení, které sedí vašim procesům."*
