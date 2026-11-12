# FAQ — kandidáti na nový web

> **Účel:** Rozšíření 3-otázkového FAQ ze starého webu na ~20 otázek pokrývajících reálné obavy klientů. Každá odpověď respektuje pravidlo o pravdivosti (`CLAUDE.md`) — žádné aspirativní claims.
>
> **Pořadí na webu:** Nejčastější otázky nahoru. Skupiny: O Twenty obecně → Cena & licence → Bezpečnost & data → Implementace & podpora → Funkce & limity → Migrace & alternativy.
>
> **Tón:** Krátké, konkrétní, férové. Nebát se říct „toto neumí" — buduje to důvěru.

---

## A. O Twenty obecně

### A1. Co je Twenty CRM?

Twenty je **open-source CRM postavený jako alternativa k Salesforce, navržený pro AI éru** (oficiální tagline z GitHubu). Je to moderní, vyvíjený produkt — 45 000+ stars na GitHubu, 67 vydaných verzí, aktivní vývoj. Licencovaný pod AGPL-3.0, tedy si ho můžete kdykoliv stáhnout a hostovat sami.

### A2. Jste Twenty? Tvoříte ho?

**Ne.** Twenty vyvíjí společnost Twenty Inc. (komunita kolem [github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)). My jsme **nezávislá česká agentura**, která Twenty implementuje, přizpůsobuje na míru oboru klienta a stará se o provoz. Naše hodnota je v oborovém know-how (Field Service) a implementační službě, ne ve vývoji softwaru.

### A3. Proč Twenty a ne třeba Raynet?

Záleží na potřebě:

- **Raynet** je vyzrálý český generický CRM. Pokud chcete standardní obchodní pipeline a vystačí vám předdefinovaná pole — je to dobrá volba.
- **Twenty (s námi)** se vyplatí pokud máte **oborové procesy**, které se nevejdou do generického CRM (servis zařízení, výjezdy, revize). Twenty má neomezené **custom objekty** (Raynet jen custom *pole*), což znamená, že postavíme přesný model vašeho byznysu, ne ho roubujeme do existujících tabulek.
- Navíc: žádné per-user licence (selfhost), data u vás, nativní napojení na AI (Claude/ChatGPT) přes MCP.

Pro 20-členný tým ušetříte oproti Raynet Professional cca **130 000 Kč ročně** na licencích. *Detailní srovnání máme v dokumentu konkurence.*

### A4. Jak je Twenty „moderní"?

Pár konkrétních bodů (sourced z Twenty.com / GitHubu):

- **Open-source pod AGPL-3.0** — kód si stáhnete, žádný lock-in
- **Postaveno na PostgreSQL + TypeScript + React + GraphQL** — moderní stack bez proprietary jazyků (žádný „Apex jako u Salesforce")
- **Vestavěný workflow engine** s `Code` (custom JavaScript) a `HTTP Request` akcemi — automatizace bez dalšího nástroje
- **Native MCP server** — Claude / ChatGPT / Cursor mohou přímo pracovat s vašimi daty přes standardní protokol
- **Aktivní vývoj** — 67 releasů, 11 938 commitů na GitHubu, 45 000+ stars

---

## B. Cena & licence

### B1. Kolik to bude celkem stát?

Záleží na variantě a velikosti:

**Cloud (Twenty.com hostovaný) — dvě faktury:**
1. **Naše faktura:** 34 990 Kč jednorázově za implementaci + 4 000 Kč/měs retainer
2. **Twenty.com faktura:** Twenty Cloud licence — $9/user/měs (Pro plan) nebo $19/user/měs (Organization plan)

Příklad pro 10 lidí na Pro plánu: 4 000 Kč nám + 10 × ~207 Kč Twenty = **~6 070 Kč/měs celkem**.

> Tuto dualitu zmiňujeme od první nabídky — Twenty Cloud licenci si klient hradí přímo Twenty Inc. (USD platba, jejich faktura). Náš retainer je samostatná česká faktura.

**Selfhost (na našem serveru v EU) — jedna faktura:**
- Jednorázově: 34 990 Kč implementace + nasazení
- Měsíčně: 5 000 Kč náš retainer (zahrnuje provoz, zálohy 7 dní, drobné úpravy 1h, sledování releasů)
- **Bez per-user licence** — neomezený počet uživatelů
- Příklad pro 10 lidí: **5 000 Kč/měs**, pro 20 lidí: také **5 000 Kč/měs**

První měsíc selfhost provozu je v ceně implementace.

> **Pro většinu klientů s 5+ uživateli vychází Selfhost levněji a administrativně jednodušeji** (jedna faktura v CZK, bez USD plateb).

### B2. Proč platit za open-source software, který je zdarma?

Software *je* zdarma. **Co stojí peníze:** odborná implementace na váš obor, nasazení na server, zálohy, monitoring, sledování releasů, drobné úpravy, podpora a hlavně **datový model + procesy postavené tak, aby vám sedly**.

Stáhnout Twenty z GitHubu a rozjet ho lokálně vám zabere víkend. Postavit z toho hotový oborový systém pro vaši servisní firmu (s ARES integrací, generováním PDF zakázek, e-mail synchronizací, vlastními workflowy) je projekt na 2–3 týdny zkušeného konzultanta.

### B3. Co když přestaneme s vámi spolupracovat?

Tohle je důležitá otázka — **a fér odpověď je: záleží na variantě.**

**Cloud:** Vaše data jsou u Twenty Inc. (podle pricing/billing dokumentace). Můžete přejít k jinému Twenty implementačnímu partnerovi nebo Twenty spravovat sami.

**Selfhost:** Pokud vám provozujeme my, předáme vám:
- Plný export dat (PostgreSQL dump)
- Dokumentaci infrastruktury
- Konfiguraci a custom code (workflows)

Buď si Twenty převezmete sami (open-source, [česká dokumentace na docs.twenty.com/l/cs](https://docs.twenty.com/l/cs/user-guide/introduction)), nebo si najdete jiného poskytovatele provozu. **Není zde lock-in na nás jako produkt** — pouze závazek na partnera, který lze ukončit.

### B4. Jsou v ceně updates Twenty?

**Ano.** Náš retainer (Cloud i Selfhost) zahrnuje sledování Twenty releasů, plánování upgrade, jeho provedení a otestování, že vaše custom workflows fungují i po update. U Cloudu se updates dějí automaticky podle Twenty rytmu, u Selfhostu řídíme timing s vámi.

### B5. Co skryté poplatky?

Žádné záměrné. Open o tom co je a co není v ceně:

**V ceně Cloud retaineru NENÍ:**
- Twenty Cloud licence (platíte přímo Twenty)
- AI usage nad 50M credits/rok (pokud spotřebujete)

**V ceně Selfhost retaineru NENÍ:**
- Větší úpravy (nad 1h/měs) — řeší se přes SLA balíčky (5 000–50 000 Kč)
- Performance PLUS (od 1 000 Kč/měs) pokud potřebujete dvojnásobný výkon
- DataStorage PLUS (1 000 Kč / 1 TB / měs) pokud potřebujete velké úložiště

---

## C. Bezpečnost, GDPR, vlastnictví dat

### C1. Kde jsou moje data?

**Cloud:** U Twenty Inc. (umístění regionu doporučujeme ověřit v jejich DPA — Data Processing Agreement — před nasazením v regulovaném sektoru).

**Selfhost u nás:** Na **serveru v EU**, který spravujeme my. Můžeme doložit konkrétní datacentrum.

**Selfhost u vás:** Kdekoliv chcete (váš server, vaše cloud).

### C2. Jak je to s GDPR?

Twenty je technologicky neutrální — GDPR je o procesech a konfiguraci. Co nabízíme:

- ✅ Selfhost v EU (data fyzicky pod EU jurisdikcí)
- ✅ Role-based access (Pro plan) / row-level permissions (Organization plan / open-source build)
- ✅ Audit logs (Organization plan / open-source build)
- ✅ Export dat na požádání subjektu (přes API / CSV)
- ✅ Pseudonymizace / smazání záznamu na požádání
- ✅ Smluvně řešené zpracování (DPA mezi vámi a námi)

> Pro silně regulované obory (zdravotnictví, finance, právo) doporučujeme Selfhost.

### C3. Kdo má přístup k mým datům?

**Selfhost:** Pouze osoby, které vy autorizujete v rámci CRM (nastavíte role). Z naší strany k datům přistupují pouze osoby, které řeší konkrétní servisní zásah, a to s vaším vědomím.

**Cloud:** Stejné v rámci CRM. Z naší strany pouze pokud nás pověříte konfigurací. Twenty Inc. má technický přístup k infrastruktuře.

### C4. Co zálohování?

**Selfhost:** 7denní zálohy v ceně retaineru. Volitelně **Backup PLUS** (externí zálohování — cena individuální).

**Cloud:** Řídí Twenty Inc. (jejich SLA / podmínky).

---

## D. Implementace & podpora

### D1. Jak dlouho trvá nasazení?

- **Cloud:** ~1–2 týdny od podpisu po spuštění (datový model, workflows, e-mail sync, školení)
- **Selfhost:** ~2–3 týdny (přidává nasazení serveru, monitoring)

### D2. Co je v ceně 34 990 Kč za nasazení?

- Až 3 hodiny praktického školení – zvládněte CRM rychle a efektivně
- Návrh datového modelu na míru oboru
- Nasazení Twenty (Cloud workspace nebo náš server v EU)
- Custom objekty, vztahy, status flow, workflows
- ARES integrace (pro CZ firmy)
- E-mail sync (Outlook nebo Gmail)
- Šablona zakázkového listu / dokumentu
- Dokumentace pro klienta v češtině
- **První měsíc provozu zdarma** (Selfhost)

### D3. Jaká je podpora po nasazení?

- **Hodinová sazba:** 2 000 Kč/h pro konzultace, školení i úpravy CRM
- **Aktivní podpora přes Teams** (8–16 v pracovní dny)
- **SLA balíčky** s bonusem za předplacení:
  - Basic 5 000 Kč → 5 000 Kč kreditu
  - Standard 10 000 Kč → 11 000 Kč kreditu (bonus 10 %)
  - Professional 20 000 Kč → 23 000 Kč kreditu (bonus 15 %)
  - Premium 50 000 Kč → 60 000 Kč kreditu (bonus 20 %)

### D4. Můžeme si CRM upravovat sami?

**Ano, v rámci UI:**
- Přidávání custom polí, custom objektů, views, workflows — vše přes Settings → Data Model / Settings → Workflows
- Jakýkoliv power user se to naučí za hodinu

**Pokročilejší úpravy** (custom code, integrace s vašimi systémy, generování PDF) řešíme my.

> Toto je odlišnost od MDA / Salesforce, kde i triviální úprava často vyžaduje vývojáře.

---

## E. Funkce & limity

### E1. Má Twenty mobilní aplikaci?

**Ano — Twenty je PWA (Progressive Web App).** Otevřete v prohlížeči telefonu/tabletu, **nainstalujete na home screen jedním klikem** a chová se jako nativní aplikace. Použijete fotoaparát pro fotky zakázky, vyplňujete formuláře, vidíte servisní historii zařízení na místě. Ověřeno funkčností v terénu.

**Co PWA znamená pro vás:**
- ✅ Není potřeba App Store / Google Play — instalace přes prohlížeč
- ✅ Auto-updates (žádné starosti se zastaralými verzemi)
- ✅ Funguje na iOS i Android i Windows tablet bez extra nákladů
- ⚠️ Nativní iOS/Android app Twenty nemá — pokud potřebujete pokročilý offline mód s plnou synchronizací, řešíme individuálně

### E2. Má Twenty AI?

Twenty oficiálně nabízí v Pro plánu **„AI Agents with custom skills"** a **50M automation credits ročně**. **Native MCP server** umožňuje nativní napojení Claude / ChatGPT / Cursor na vaše Twenty data.

> ⚠️ **Některé AI funkce jsou v dokumentaci označeny jako „coming soon".** Před každým nasazením ověřujeme aktuální stav a nepřeprodáváme funkce, které ještě nejsou GA. Plné AI workflows postavíme jakmile Twenty potvrdí GA stav (sledujeme release notes).

### E3. Můžu napojit Fakturoid / iDoklad / Pohoda?

**Ano, postavíme to přímo v Twenty.** Twenty má vestavěný workflow engine s `HTTP Request` akcí, která zavolá API příslušného fakturačního systému. **Žádný další nástroj nepotřebujeme** — automatizace je součástí Twenty, ne samostatný produkt za doplatek.

V Phase 1 typicky postavíme:
- Export podkladu pro fakturu (CSV / PDF)
- Vytvoření faktury ve Fakturoidu po dokončení zakázky (přes API)
- Notifikaci klientovi o vystavené faktuře

Plnohodnotnou obousměrnou synchronizaci (změny zpět z fakturačního systému do Twenty) řešíme jako samostatný projekt v Phase 2.

### E4. Jaké e-mailové providery Twenty podporuje?

Nativně **Google (Gmail)** a **Microsoft (Outlook / Microsoft 365)**. Pro ostatní jsou podporované **SMTP/CalDAV**.

**Limity (z oficiálních docs):**
- Sync je **polling každých 5 minut**, ne real-time
- Internal e-maily (uvnitř stejné domény) se NE-synchronizují (privacy)
- Sync se automaticky linkuje na **People + Companies**, ne na custom objekty (Zakázku, Zařízení) — pro to postavíme custom workflow
- **Přílohy: coming H1 2026** — ověříme aktuální stav před nasazením

### E5. Kolik uživatelů a záznamů zvládne?

**Cloud:** Twenty oficiálně tvrdí „unlimited" pro Pro i Organization plan (uživatelé, záznamy, storage).

**Selfhost:** Limit je váš server. Pro standardní SMB (do 50 lidí, statisíce záznamů) bohatě stačí standardní VPS.

### E6. Jaké jazyky podporuje?

Twenty oficiálně **30+ jazyků** (z pricing). Čeština je zahrnuta. Naše implementace je v češtině včetně dokumentace a školení.

### E7. Můžu omezit, co technik vidí v aplikaci?

**Ano.** Twenty má **role-based permissions** — technik vidí jen Zakázky, Zařízení a Místa, ne Obchodní příležitosti, ceníky, marže nebo finanční výkazy. Lze omezovat na úrovni:

- **Tabulek/objektů** — celé tabulky skryté pro roli
- **Polí** — některá pole skrytá nebo read-only
- **Řádků** — uživatel vidí jen vybrané záznamy (např. jen své zakázky)

**Dostupnost:**
- ✅ **Selfhost (open-source build):** všechny úrovně permissions zdarma
- ✅ **Cloud Organization plan ($19/user):** všechny úrovně permissions
- ❌ **Cloud Pro plan ($9/user):** dle Twenty pricing **nemá** Roles & Permissions

> Pokud potřebujete role separation a zvažujete Cloud, vyplatí se Organization. Často je ale **Selfhost cenově výhodnější** — dostanete tytéž features zdarma.

---

## F. Migrace & alternativy

### F1. Můžu migrovat z jiného CRM (Raynet, Pipedrive, HubSpot…)?

**Ano, formou CSV exportu z původního systému + importu do Twenty.** Twenty má nativní CSV import + REST/GraphQL API pro velké objemy (50 000+ záznamů).

V Phase 1 implementace s vámi probereme:
- Co všechno chcete migrovat (kontakty, příležitosti, historii)
- Jaké pole-mapování (Raynet field → Twenty field)
- Kolik historických záznamů (s narůstajícím objemem se mění postup)

Migrační skript napíšeme součástí implementace pokud je objem rozumný (do desítek tisíc záznamů). U větších objemů řešíme custom.

### F2. Můžu Twenty kombinovat s mým stávajícím systémem (ERP, fakturace)?

**Ano, přes API.** Twenty má REST + GraphQL API a webhooks. Workflow engine umí volat externí API přes `HTTP Request`. Typický scénář:

- Twenty drží CRM + servisní data + zakázky
- Pohoda / iDoklad / Fakturoid drží fakturační doklady
- Workflow vytvoří fakturu ve fakturačním SW po dokončení zakázky

### F2b. Co když budeme chtít přidat další oblast (HR, projekty, sklad, helpdesk)?

**Tady má Twenty zásadní výhodu oproti klasickým CRM** — nekupujete druhý software, rozšíříme stávající.

Twenty deliberately směřuje k app platformě (release v2.1.0 přidal pre-installed apps infrastrukturu, je k dispozici twenty-sdk i `npx twenty deploy` CLI). To znamená, že nad stejným datovým modelem (kde je Klient, Kontakt, Tým) postavíme:

- **Phase 2:** správa projektů s vazbou na Klienty
- **Phase 3:** interní helpdesk / ticketing s vazbou na Zařízení a Zakázky
- **Phase 4+:** HR / nábor, vlastní agendy podle vašeho byznysu

**Praktický rozdíl proti Raynet & spol:** Tam pro projekty kupujete Asanu, pro HR Personio, pro helpdesk Freshdesk. Klient má 4 paralelní záznamy v 4 systémech, synchronizace je ruční.

U nás Klient zůstává jeden, e-mail se propojí napříč agendami, faktury jsou v jednom systému. **Investice do Phase 1 zůstává živá** — nestavíte na zelené louce, jen rozšiřujete.

> Sledujeme Twenty release notes a roadmapu za vás (týdenní release cadence). Když se objeví featura, kterou váš byznys ocení, ozveme se a probereme, jestli má smysl ji nasadit.

### F3. Co když Twenty zanikne?

Twenty je **open-source pod AGPL-3.0**. Kód je veřejný, máte všechna data v PostgreSQL, můžete ho dál provozovat sami nebo si najít jiného poskytovatele. Není to vendor lock-in jako u Salesforce.

Pravděpodobnost zániku: 45 000+ stars, aktivní vývoj, 67 releasů, financováno (sledujeme v jejich GitHub aktivitě). Riziko je menší než u typického SaaS startupu, ale **otevřeně** — open-source projekt nikdy není 100% imunní vůči ukončení vývoje. **Naše odpovědnost** v takovém případě: pomoct s migrací na alternativu (kterou bychom v té době vybrali).

### F4a. Proč nemáte kontaktní formulář?

Servisním firmám se víc líbí zavolat nebo napsat e-mail — je to rychlejší a osobnější. Pokud chcete strukturovat svou poptávku, klepněte na tlačítko **„📧 Napsat"** na jakékoliv stránce — připravíme vám e-mail s pár otázkami (počet techniků, obor, současné řešení), na které stačí doplnit jednoslovné odpovědi. Pak ho upravte a pošlete.

Tahle volba má i konkrétní praktickou výhodu: na webu od vás nesbíráme žádná data ani je neukládáme do žádné databáze. Údaje vidíme až ve chvíli, kdy nám e-mail nebo telefonát dorazí — žádný „odeslal jsem to a teď se možná i kvalifikuju" pocit.

### F4. Kde najdu oficiální dokumentaci?

- **Marketingový web:** [twenty.com](https://twenty.com/)
- **Uživatelská dokumentace v češtině:** [docs.twenty.com/l/cs/user-guide/introduction](https://docs.twenty.com/l/cs/user-guide/introduction)
- **Originální anglická dokumentace:** [docs.twenty.com](https://docs.twenty.com/)
- **Zdrojový kód:** [github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)
- **Naše česká dokumentace:** dodáváme jako součást implementace (specifické pro váš datový model a procesy)

---

## Kandidáti na ještě další FAQ (k validaci s reálnými leady)

Otázky, které pravděpodobně přijdou, ale chceme nejdřív validovat formulaci:

- *„Můžu používat Twenty offline / v terénu bez signálu?"* (PWA pravděpodobně limituje — záleží na ověření)
- *„Bere mi Twenty data, když to budu používat se svým AI?"* (právní otázka kolem AGPL + AI)
- *„Mám už Microsoft 365 — můžu použít Twenty místo Dynamics 365 / Power Platform?"*
- *„Co dává smysl, když jedu sám / jsme dva?"* (small-team scénář — Selfhost se možná nevyplatí, doporučení Cloud)
- *„Kolik mě bude stát Twenty za 5 let?"* (TCO kalkulátor)
- *„Můžete mi udělat Twenty s mým týmem v Microsoft Teams?"* (integrace, vyžaduje ověření)
