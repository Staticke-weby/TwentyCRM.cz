# Twenty Cloud vs. Self-host — srovnání a rozhodovací rámec

> **Účel:** Podklad pro web (sekce „Cloud nebo vyhrazený server?") a pro obchodní rozhovor s klientem. Každé technické tvrzení o Twenty je zdrojováno z `twenty-capabilities.md` (oficiální docs).
>
> **Naše dvě cenové linky** (viz `twentycrm-strategie.md`):
> - **Cloud retainer:** 4 000 Kč/měsíc (správa a úpravy). ⚠️ Klient si **navíc** hradí Twenty Cloud licenci přímo Twenty Inc. ($9–19/user/měs) — **dvě faktury**.
> - **Selfhost retainer:** 5 000 Kč/měsíc — **jedna faktura**, zahrnuje provoz a úpravy. Twenty licenci klient neplatí (open-source).

---

## Krátká odpověď

| Klient potřebuje | Doporučení |
|---|---|
| Co nejrychleji nasadit, malý tým 3–10 lidí, žádné regulatorní obavy | **Cloud** |
| Plné vlastnictví dat, regulatorní compliance (zdravotnictví, právo, finance), >25 uživatelů | **Selfhost** |
| Velký objem dat (TB+ příloh, historie), citlivost na cenu per-user | **Selfhost** |
| Vysoké nároky na e-mail sync robustnost, malý IT tým, zero-ops | **Cloud** |
| Klient chce platformu pro vlastní aplikace (custom apps mimo Twenty UI) | Buď, ale Selfhost dává více kontroly |

---

## Co dostane klient v každé variantě

### Cloud (Twenty.com hostovaný)

**Co je v ceně Twenty (oficiální pricing):**
- **Pro plan: $9 / user / měsíc** (roční fakturace, −25 % discount)
- **Organization plan: $19 / user / měsíc** (roční)
- 30denní trial bez karty
- Unlimited records, storage, custom objekty, custom fields, dashboards, views
- CSV import/export, 30+ jazyků
- REST + GraphQL API (100 calls/min Pro, 200 Org)
- Webhooks, MCP server, AI Agents (Pro = 50M automation credits/rok)

**Pro plan vs Organization plan:**

| Feature | Pro $9 | Organization $19 |
|---|---|---|
| Custom objekty / fields / records / storage | unlimited | unlimited |
| Workflows (Code, HTTP Request, …) | ✅ | ✅ |
| AI Agents | ✅ (50M credits/rok) | ✅ (custom AI models) |
| MCP server | ✅ | ✅ |
| API rate limit | 100/min | 200/min |
| **Roles & Permissions** | ❌ | ✅ |
| **Row-level permissions** | ❌ | ✅ |
| **SAML/OIDC SSO** | ❌ | ✅ |
| **Audit logs** | ❌ | ✅ |
| **Advanced encryption** | ❌ | ✅ |
| Priority support | ❌ | ✅ |

**Kdy stačí Pro a kdy je třeba Organization:**
- 3–10 uživatelů, jednoduchá organizace, jeden tým → **Pro**
- Více týmů s různými právy, citlivá data, SSO requirement, regulatorní zátěž → **Organization**

**Co dostává klient od nás (Cloud retainer 4 000 Kč/měs):**
- Implementace + konfigurace v jeho Cloud workspace (jednorázově 34 990 Kč)
- Měsíčně: dostupnost pro dotazy, drobné úpravy, sledování releasů Twenty, proaktivní info o novinkách
- Správa API nákladů pokud provozujeme AI workflow

**⚠️ DŮLEŽITÉ — Cloud režim = klient platí dvě nezávislé faktury:**

| Komu | Co | Kolik |
|---|---|---|
| **Twenty Inc.** (přímo z Twenty.com) | Twenty Cloud licenci | $9–19/user/měs (Pro nebo Organization plan) |
| **Nám** (ESHOpino s.r.o.) | Naše služby — implementace, údržba, úpravy | 34 990 Kč setup + 4 000 Kč/měs retainer |

Plus volitelně:
- AI usage nad rámec 50M credits/rok (rozhodne Twenty Inc. tarif)

> Toto je častý zdroj překvapení u klientů — proto to **explicitně komunikujeme od první nabídky**. Rozdíl proti Selfhostu, kde je vše na naší faktuře.

### Selfhost (na našem nebo klientově serveru)

**Co je v ceně Twenty:**
- 0 Kč licence — open-source AGPL-3.0
- Bez per-user limitů (neomezeně uživatelů)
- Bez storage limitů (omezí jen velikost serveru)
- **Všechny featury Pro + většina Organization zdarma** — open-source build obsahuje Roles, SSO, audit logs (ověřit aktuální buildy; Twenty obvykle nepoužívá enterprise paywall)

**Co dostává klient od nás (Selfhost retainer 5 000 Kč/měs):**
- Implementace + nasazení na server v EU (jednorázově 34 990 Kč)
- Měsíčně: provoz infrastruktury (server, zálohy 7 dní, monitoring), dostupnost pro dotazy, drobné úpravy, sledování releasů Twenty, upgrade verze Twenty
- Odpovědnost za uptime, security patche

**Doplňky (z `stary-web-souhrn.md`):**
- Performance PLUS — zdvojnásobení výkonu od 1 000 Kč/měs
- DataStorage PLUS — S3 úložiště 1 000 Kč / 1 TB / měs
- Backup PLUS — externí zálohy individuálně

---

## Přímé srovnání (přehledová tabulka)

| Dimenze | Cloud (Twenty.com) | Selfhost (u nás) |
|---|---|---|
| **Měsíční cena Twenty (≈10 lidí)** | ~$90 ($1 080 ročně) na Pro plánu | 0 Kč (open-source) |
| **Náš retainer** | 4 000 Kč/měs | 5 000 Kč/měs |
| **Setup poplatek** | 34 990 Kč jednorázově | 34 990 Kč jednorázově |
| **Vlastnictví dat** | Twenty Inc. SaaS, EU regiony pravděpodobné* | 100 % klient (na vyhrazeném serveru) nebo my (EU server) |
| **Regulatorní compliance** | Záleží na Twenty (DPA, location) | Plná kontrola — vy víte přesně kde data jsou |
| **Per-user dopad růstu týmu** | Lineárně rostou licence | Nulový — neomezený počet uživatelů |
| **Updates** | Auto, Twenty řídí timing | My řídíme timing (sjednáno s klientem, žádné nečekané breaking changes) |
| **Uptime / zálohy** | Twenty SLA | Naše SLA + 7 dní zálohy v ceně |
| **AI / API limity** | Pro 50M credits/rok, 100 req/min | Bez limitů (omezí jen vlastní hardware + LLM provider) |
| **Time to deploy** | Workspace v <1 min, naše konfigurace ~2 týdny | Server + konfigurace ~2–3 týdny |
| **Customizace přes UI** | Plná | Plná |
| **Customizace přes kód (rozšíření, custom apps)** | Omezená Cloud sandboxem | **Neomezená — můžete forknout, modifikovat zdroják, deployovat** |
| **Bezpečnost při výpadku internetu** | Závislé na Twenty | Závislé na vlastní infrastruktuře |
| **Ideální velikost firmy** | 3–25 uživatelů | 5–50+ uživatelů, kde se selfhost vyplatí |

*) Twenty.com EU regiony nejsou v dnes fetchnutých docs explicitně potvrzené. Ověřit před nabídkou klientovi v regulovaném sektoru.

---

## Cenový bod zlomu (kdy se vyplatí přepnout)

Selfhost retainer je o 1 000 Kč/měs dražší než Cloud retainer. Twenty Cloud licence je $9–19/user/měs.

**Cloud Pro při kurzu 23 Kč/$:** ~207 Kč/user/měs.

Bod kdy je celková Cloud cena = celková Selfhost cena:
- 4 000 Kč (náš retainer) + N × 207 Kč = 5 000 Kč (selfhost retainer)
- N × 207 = 1 000
- **N ≈ 5 uživatelů** (na Pro), respektive **~2 uživatele** (na Organization)

> **Důsledek:** Od ~5 uživatelů na Pro plánu (resp. ~2 na Org) je Selfhost cenově výhodnější. **Pro každého dalšího uživatele Cloud roste lineárně, Selfhost ne.**

Pro 20 uživatelů na Pro plánu:
- Cloud: 4 000 + 20×207 = **8 140 Kč/měs**
- Selfhost: **5 000 Kč/měs** + (případně Performance PLUS 1 000)
- Selfhost ušetří ~3 000–4 000 Kč/měs jen na licencích.

> **Argumentace pro web:** „Od 5 uživatelů se vám Selfhost obvykle vyplatí. U 20 uživatelů ušetříte ~40 000 Kč ročně na licencích, navíc získáte plné vlastnictví dat."

---

## Rozhodovací framework (pro obchodníka)

### Volíme **Cloud** když:
- ✅ Klient chce „začít hned" a má 3–10 uživatelů
- ✅ Klient nemá interní IT a nechce o infrastruktuře přemýšlet
- ✅ E-mail sync robustnost je TOP priorita (Twenty má sync na sobě, méně rizik)
- ✅ Klient nemá obavu o data v SaaS (běžné B2B)
- ✅ Bude růst pomalu / strop ~15 lidí
- ⚠️ Sezónně variabilní tým (snadné scaling licencí dolů)

### Volíme **Selfhost** když:
- ✅ Klient má 5+ uživatelů a růstový plán
- ✅ Regulatorně citlivá data (zdravotnictví, finance, právo)
- ✅ Klient chce **explicitně vlastnit data** (silný argument v CZ trhu)
- ✅ Velký objem příloh / historických dat (storage limitless u nás)
- ✅ Custom app development plánovaný (Twenty SDK, vlastní extensions)
- ✅ Klient má interní IT nebo nám ho předal a chce kontrolu
- ✅ Vysoká AI / API zátěž (workflow s 1000+ runs/den) — Cloud limit 50M credits/rok by mohl být úzké hrdlo

### Otevřená otázka pro Phase 1 default

**Návrh:** Default doporučovat **Selfhost**, protože:
1. Je to konzistentní s naším positioningem („vlastnictví dat", odlišení od Raynetu)
2. Cenově se zlomí kolem 5 uživatelů, což jsme prakticky všichni klienti (3–20 lidí)
3. MDA klienti jsou zvyklí na on-prem / dedicated cloud myšlení
4. Open-source AGPL-3.0 mentální model („open" + „kontrola") je core marketing message

Cloud nabízíme jako **explicitní výjimku** pokud klient chce zero-ops nebo má specifický důvod.

---

## Slabší stránky každé varianty (transparentní pro web FAQ)

### Slabosti Cloud (musíme komunikovat)
- Per-user pricing roste s týmem
- Limity API (100/min Pro)
- Limity AI credits (50M/rok)
- Custom code rozšíření jsou omezené sandboxem
- Závislost na Twenty Inc. (politické, finanční, právní riziko v dlouhém horizontu)

### Slabosti Selfhost (musíme komunikovat)
- Vyžaduje aktivní správu infrastruktury — proto retainer
- Updates jsou pomalejší (musíme plánovat, testovat)
- E-mail sync má 5 minutový polling jako Cloud — selfhost to nevyřeší
- Mobilní use je PWA (jako v Cloudu) — Twenty nemá nativní iOS/Android app
- Pokud nás klient opustí, musí zvolit jiného poskytovatele provozu (lock-in na partnera, ne na produkt)

> Tyto slabosti **explicitně komunikujeme** — buduje to důvěru. „Bez vendor lock-inu" neznamená „bez závazku k partnerovi."

---

## Skrytá výhoda Selfhostu: Roles & Permissions zdarma

Twenty pricing page rozlišuje:

| Feature | Cloud Pro $9 | Cloud Organization $19 | Selfhost |
|---|---|---|---|
| Roles & Permissions (omezení tabulek per role) | ❌ | ✅ | ✅ |
| Row-level permissions | ❌ | ✅ | ✅ |
| SAML/OIDC SSO | ❌ | ✅ | ✅ |
| Audit logs | ❌ | ✅ | ✅ |
| Advanced encryption | ❌ | ✅ | ✅ |

**Co to znamená:** Pokud klient potřebuje **roli „technik vidí jen Zakázky a Zařízení"** (běžná Field Service potřeba s 3+ rolemi), v Cloudu musí jít na **Organization plan ($19/user)**, ne na Pro ($9). Selfhost dostává stejné features **zdarma**.

**Porovnání pro 10-člennou firmu s rolemi:**

| Varianta | Měsíčně Twenty licence | Náš retainer | Celkem ročně |
|---|---|---|---|
| Cloud Pro (bez rolí) | 10 × 207 Kč = 2 070 Kč | 4 000 Kč | 72 840 Kč |
| **Cloud Organization (s rolemi)** | 10 × 437 Kč = 4 370 Kč | 4 000 Kč | **100 440 Kč** |
| **Selfhost (s rolemi)** | **0 Kč** | 5 000 Kč | **60 000 Kč** |

> Selfhost je u 10-členného týmu s rolemi o ~40 000 Kč/rok levnější než Cloud Organization.

To je další konkrétní argument pro Selfhost u klientů, kteří potřebují role separation.

---

## Co z toho jde do webové sekce „Cloud nebo Selfhost?"

**Návrh struktury sekce:**

1. **Krátká odpověď** (podle profilu firmy) — viz tabulka úplně nahoře
2. **3 hlavní rozdíly** v lidské řeči:
   - Vlastnictví dat (Selfhost = u vás, Cloud = u Twenty)
   - Cena s růstem týmu (Selfhost = fix, Cloud = lineárně roste)
   - Setup čas (Cloud = 1 týden, Selfhost = 2–3 týdny)
3. **Tabulka přehledu** (zjednodušená verze tabulky výše)
4. **Cenový kalkulátor** (volitelné) — slider „kolik máme uživatelů" → „Cloud stojí X, Selfhost Y"
5. **Reálný bod zlomu** (5 uživatelů) — argumentace cenou
6. **CTA: „Nevíte? Zavolejte, doporučíme."**
