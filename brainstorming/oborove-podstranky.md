# Oborové podstránky — 3 segmenty Phase 1

> **🔁 Stav 2026-05-22:** Tento dokument je **historický planning brief**. Reálný obsah živých stránek
> (`/pro-servisni-firmy/{index,hvac,revize,stroje}`) byl přepsán podle skutečně dodávaného produktu —
> Field Service řešení nad Twenty CRM popsané v `servis-hvac-5jwrl/docs/prirucka-uzivatele.md`. Pokud
> tento dokument tvrdí, že v Phase 1 dodáváme něco, co produkt nemá (viz seznam níže), platí stránka, ne tento dokument.
>
> **Z původního brief odstraněno (NENÍ v základním nasazení, jen jako placené rozšíření / úprava na míru):**
> - F-plyn alerty 30 dní předem dispečerovi + technikovi + klientovi
> - 60/30/14denní upozornění před vypršením revize
> - SLA timer reagující na nahlášení poruchy, alert při překročení
> - Automatický výpočet ceny incidentu (sazba × hodiny + díly)
> - Sledování čerpání paušálu měsíčně
> - Podpis prstem (máme jen razítko s datem/místem po kliknutí)
> - Klientský portál
> - Šablony zápisů per typ revize (elektro/plyn/EPS) připravené dopředu
> - Automatický e-mail klientovi (lze dodělat přes Twenty workflow Send Email)
>
> **Co naopak v základu funguje** (nepřidávat na seznam limitů):
> - Foto z fotoaparátu — Twenty PWA používá nativní file picker, takže kamera funguje (foto + galerie)
>
> **Co produkt reálně má a stránky to říkají:** datový model Klient/Místo/Zařízení/Zakázka/Výjezd/Výkaz, ARES auto-fill,
> týdenní plánovač s detekcí kolizí, vícedenní výjezdy rozdělené na denní sloty, automatické generování opakovaných
> zakázek z pravidla (cron, respekt k českým svátkům, skip-and-forward), mobilní dashboardy pro techniky
> (📍 Dnes / ⚠️ Chybí výkaz / 📅 Můj plán), výkaz s rich-textem, PDF nabídka + PDF zakázkový list s logem,
> AI sumarizace výkazů (BYOK).
>
> ---
>
> **Účel:** Detailní content per cílová vertikála pro `/pro-servisni-firmy/[obor]/`. Každá stránka je sales-driven landing — bolest klienta, naše odpověď, konkrétní hodnota, CTA.
>
> **Phase 1 segmenty (locknuto):** A1 HVAC, A2 Revize, A3 Servis výrobních strojů. Ostatní (`persony.md`) zůstávají v zásobě.
>
> **Princip:** Klient se v ~10 sekundách musí poznat: „ano, přesně tahle firma jsme my, přesně tyhle problémy řešíme". Pak teprve řešení.
>
> **Tonalita:** Konkrétní > obecné. Čísla > slova. Příklad > metafora.
>
> **Kanonický šablona** (každá stránka):
> 1. Hero (kdo jste, co řešíme)
> 2. 4–6 typických bolestí oboru (klient se pozná)
> 3. Náš datový model pro obor (custom entity, ne generický CRM)
> 4. Co konkrétně dodáváme v Phase 1 (Year 1)
> 5. Konkurence v oboru — proč my (vs. generický CRM, vs. specializovaný FSM)
> 6. Phase 2+ co můžeme přidat
> 7. CTA

---

## 1. `/pro-servisni-firmy/hvac/` — HVAC, klimatizace, tepelná čerpadla

### Hero

**H1:** Twenty CRM pro firmy se servisem klimatizací, tepelných čerpadel a vzduchotechniky.

**H2:** Servisní historie každého zařízení. Plánování revizí F-plynů. Zakázky technika v mobilu. Bez per-user licencí.

**Pod-hero badge:**
> ❄️ Pro instalační i servisní firmy 3–25 lidí.
> 🇨🇿 Implementace v češtině, na vašem serveru nebo Twenty Cloudu.
> 📅 Nasazení za 2–3 týdny.

**Primární CTA:** „🔵 30minutová konzultace zdarma"
**Sekundární:** „Jak to vypadá v praxi →" (link na /co-umi/ nebo `den-s-twenty.md` storytelling)

---

### „Tahle firma jste vy?" (klient se pozná)

Pravděpodobně řešíte tyhle situace:

- 🔧 **Každé zařízení má svůj příběh** — kdo ho instaloval, jaké chladivo, kdy byla poslední revize, co se opravovalo. Dnes to máte v Excelu, na papíře, nebo v hlavě technika.
- 📅 **Revize F-plynů a hlášení do registru** — kdo má kdy další termín, který technik je certifikovaný, kdo to ohlídá, když je sezóna a všichni jsou v terénu.
- 📞 **Telefonáty místo plánování** — zákazník zavolá s reklamací, dispečerka volá technikovi „kde jsi, kdy můžeš?", technik odpovídá ze střechy.
- 📋 **Zakázkové listy na papíře** — technik vyplní, klient podepíše, papír leží v autě 3 dny, fakturantka se ptá kde to je.
- 💸 **Reklamace v záruce, kterou nikdo nevyřídil včas** — protože nikde není centrální evidence, kdy záruka začala a kdy končí.
- 🌡️ **Sezónní špička** — léto je peklo. Bez systému přepisujete jeden týden a druhý týden hořknete nad reklamacemi z té první.

> Pokud aspoň 3 z 6 přikývlo, jsme přesně pro vás.

---

### Náš datový model pro HVAC firmy

Generický CRM (Raynet, Pipedrive) má jen Klient + Příležitost + Aktivita. Pro vás to nestačí. **My postavíme:**

```
Klient (ESHOpino kavárna, s.r.o.)
  ↓
  Místo (Wenceslas square 14, Praha 1)
  Místo (Karlovo náměstí 4, Praha 2)
       ↓
       Zařízení (Daikin 5kW, s.č. ABC123, instalace 2023-04)
              ↓
              Zakázka 2026-03-12: Roční servis (technik Pavel, 1.5h, 250g R32)
              Zakázka 2026-09-20: Reklamace ovladače (technik Jirka, 0.5h)
              Revize F-plynů 2027-04 (plán, automatická připomínka)
```

**Co tím získáte:**
- Z karty kavárny vidíte všechny její pobočky, všechna zařízení, kompletní servisní historii
- Z karty zařízení (s.č.) vidíte, **kdo to dělal posledně, co měnil, kdy je další revize**
- Plánování revizí podle lhůt — Twenty workflow vás upozorní 30 dní dopředu
- Žádné limity počtu zařízení, klientů, zakázek

---

### Co dodáváme v Phase 1 (Year 1)

V ceně **34 990 Kč nasazení** + měsíční retainer dostanete:

#### Datový model
- ✅ Custom entity: **Klient, Místo, Zařízení (s.č., model, chladivo, typ), Zakázka, Servisní zásah**
- ✅ Vztahy: Klient → Místo → Zařízení → Zakázky (servisní historie)
- ✅ Pole na zařízení: **typ chladiva, množství, datum instalace, datum poslední revize, certifikovaný technik**

#### Procesy a automatizace (Twenty workflow, ne externí nástroj)
- ✅ **Plánování revizí** — pravidelné termíny dle typu zařízení a lhůt F-plynů
- ✅ **Notifikace 30 dní dopředu** — dispečer + technik + klient (volitelně)
- ✅ **Zakázka v mobilu** — technik vyplňuje na místě (PWA), foto z místa, podpis
- ✅ **Servisní zpráva PDF** — automatický generování po dokončení zakázky
- ✅ **ARES auto-fill** — IČO klienta → název / sídlo / DIČ z registru
- ✅ **E-mail sync** s Outlook nebo Gmailem
- ✅ **Role technik / dispečer / účetní** — každý vidí jen co potřebuje

#### Reporting
- ✅ **Pipeline v Kanban view** — kolik zakázek je v jaké fázi
- ✅ **Vytíženost techniků** — kdo má kolik příští týden
- ✅ **Reklamace v záruce** — automatický flag co spadá do záruky
- ✅ **Plán revizí** — overview kolik revizí je v dalších 30/60/90 dnech

---

### Proč my, ne…

**…Raynet / Pipedrive / generický CRM?**
Nemají entitu Zařízení se servisní historií. Maximum, co umí, je „aktivita na klientovi" — nedohledáte historii konkrétního Daikinu po 3 letech.

**…specializovaný FSM (mServis, Servis24)?**
Specializované FSM jsou silnější v terénu (offline mód, plánovací kalendář), ale:
- ❌ Per-user licence — dražší při růstu týmu
- ❌ Uzavřená SaaS — vaše data u nich
- ❌ Nelze rozšířit o další agendy (HR, projekty, helpdesk)
- ❌ Nelze napojit AI (Claude / ChatGPT přes MCP) bez další integrace

Twenty s námi je **kompromis na druhou stranu**: terénní část trochu jednodušší (PWA místo nativní app), ale **víc otevřená a roste s vámi**. Pro většinu HVAC firem do 25 lidí je to trade-off, který se vyplatí.

**…MDA / Power Platform?**
Naše paralelní agentura (bohemiacrm.cz) MDA dodává — ale pro 5–25 lidí v HVAC oboru to bývá overkill (licence Microsoft 365, dlouhý setup, přehlcené UX). Twenty stejné procesy zvládne rychleji a levněji. Pokud máte M365 ekosystém a 30+ lidí, MDA má stále smysl — řekneme upřímně.

---

### Phase 2+ co lze přidat (jak rostete)

Twenty je platforma, ne jednorázový projekt:

- **Phase 2:** Skladová evidence náhradních dílů (čerpadla, ventily, chladiva)
- **Phase 2:** Plánovací kalendář s drag-and-drop (kanban → kalendářový pohled)
- **Phase 3:** AI agenti — automatický návrh termínu revize, generování servisních zpráv z fotek
- **Phase 3+:** Vlastní mobilní app (pokud PWA nestačí), telefonní call recording integrace
- **Phase 4:** HR pro nábor a evidence kvalifikací (F-plyny certifikace, atd.)

---

### CTA

**🔵 Konzultace zdarma — 30 minut, online, bez závazku**
> Probereme vaše procesy, ukážeme demo na vašich (anonymizovaných) datech, doporučíme jestli má smysl pokračovat.

---

---

## 2. `/pro-servisni-firmy/revize/` — Revizní technici (elektro, plyn, hasicí, výtahy, hromosvody)

### Hero

**H1:** Twenty CRM pro revizní techniky.

**H2:** Plán revizí, zprávy v PDF, archivace pro úřady. Žádné vyhledávání lhůt v Excelu, žádné dohledávání v 5 různých složkách.

**Pod-hero badge:**
> 🛡️ Pro samostatné techniky i revizní firmy.
> 📋 Elektro / plyn / hasicí přístroje / výtahy / hromosvody.
> 🇨🇿 V češtině, na našem nebo vašem serveru.

**Primární CTA:** „🔵 Konzultace zdarma"
**Sekundární:** „Co umíme automatizovat →"

---

### „Tahle firma jste vy?"

Typicky řešíte:

- 📅 **Lhůty napříč klienty** — který objekt má kdy další revizi, co kdy končí, koho budíte zavolat
- 🗂️ **Word šablona pro každou revizní zprávu** — vyplnit, vytisknout, podepsat, naskenovat, archivovat ve dvou cestách (papír + Dropbox)
- 🔍 **Při kontrole úřadu** — dohledávat, zda jste 6 měsíců zpět tam, kde jste podle harmonogramu měli být
- 📞 **Klient se ptá: „kdy přijdete?"** — vy hledáte v kalendáři Outlooku a dvou Excelech zároveň
- 💸 **Specializovaný revizní SW** (RevizeOnline, Revize.eu) je drahý, uzavřený, a pořád nemá obchodní pipeline (kontakty, faktury, smlouvy) — máte 2 systémy

> Pokud aspoň 3 z 5 přikývlo, jsme přesně pro vás.

---

### Náš datový model pro revizní firmy

```
Klient (Bytové družstvo Vyšehrad)
  ↓
  Místo (objekt s.č. parc. 14/3)
       ↓
       Revidovaný objekt (Hlavní rozvaděč 400V)
              ↓
              Revize 2024-06: pravidelná, technik Novák, výstup PDF
              Revize 2027-06: plán (automatická připomínka 60 dní dopředu)
       Revidovaný objekt (Hromosvod východní)
              ↓
              Revize 2025-09: ...
```

**Co tím získáte:**
- Kompletní historie každého **konkrétního revidovaného objektu** napříč lety a techniky
- **Automatický kalendář lhůt** — Twenty workflow zkontroluje denně, kde se blíží termín
- **Všechny PDF zprávy** přiřazené k objektu, dohledatelné během sekundy
- **Plánování revizí** podle vytíženosti techniků a lokality

---

### Co dodáváme v Phase 1

#### Datový model
- ✅ Klient, Místo, Revidovaný objekt (s typem revize: elektro / plyn / EPS / hromosvod), Revizní zpráva
- ✅ Lhůta revize per typ objektu (custom pole, dle vyhlášek)
- ✅ Certifikace technika — který technik smí dělat jaký typ revize

#### Automatizace
- ✅ **Plán revizí podle lhůt** — Twenty workflow upozorní 60/30/14 dní dopředu
- ✅ **PDF revizní zpráva** — generování ze šablony, předvyplněné údaje klienta + objektu
- ✅ **Archivace** — PDF se ukládá do Twenty (selfhost = u vás na serveru)
- ✅ **Notifikace klientovi** — automatický e-mail s upozorněním na blížící se termín

#### Pro audit / kontrolu
- ✅ **Filtrované views** — všechny revize za rok 2024, všechny revize objektu X, všechny revize technika Y
- ✅ **Export pro úřad** — CSV nebo PDF souhrn na požádání

---

### Proč my, ne…

**…RevizeOnline / Revize.eu?**
Specializované revizní SW jsou silnější v generování zpráv (předvyplněné formuláře dle vyhlášek), ale:
- ❌ Drahé (často 500+ Kč/měs/uživatel) a uzavřené
- ❌ Žádný CRM — klienti, kontakty, faktury jsou jinde
- ❌ Vendor lock-in (proprietary formát)

Náš přístup: **Twenty s revizními custom objekty** = jeden systém pro CRM i revize, otevřený, bez per-user pasti. PDF zprávy generujeme přes externí PDF službu (PDFShift / DocRaptor) volanou z Twenty workflow — formát si držíme my, není to vázáno na vendora.

**Honest caveat:** specializované SW mají hotové předvyplněné šablony pro každý typ revize. Naše šablony postavíme společně s vámi v Phase 1 — to je trochu více setup práce, ale výsledek je váš.

---

### Phase 2+

- **Phase 2:** Mobilní formuláře pro revizi v terénu (PWA s validací povinných polí)
- **Phase 2:** Generování úředního výkazu pro hromadné kontroly
- **Phase 3:** AI extrakce ze starých papírových revizí (PDF/foto → strukturovaná data)
- **Phase 3+:** Online portál pro klienta — vidí své objekty, termíny, PDF zprávy ke stažení

---

### CTA

**🔵 Konzultace zdarma — 30 minut**
> Ukážeme jak by Twenty vypadal pro váš obor revizí. Probereme šablony zpráv, lhůty, certifikace techniků.

---

---

## 3. `/pro-servisni-firmy/stroje/` — Servis výrobních a strojních zařízení

### Hero

**H1:** Twenty CRM pro firmy se servisem výrobních a strojních zařízení.

**H2:** SLA, sériová čísla, servisní historie strojů. Reakční doby pod kontrolou. Vykazování času pro fakturaci po hodinách.

**Pod-hero badge:**
> ⚙️ Pro 5–50 techniků v B2B servisu strojů.
> 🏭 Strojírenství, potravinářství, plasty, balení.
> 🇨🇿 SLA reporting, smlouvy, fakturace po hodinách.

**Primární CTA:** „🔵 Konzultace zdarma"
**Sekundární:** „Datový model pro vás →"

---

### „Tahle firma jste vy?"

Typicky řešíte:

- ⏱️ **SLA reakční doby** — klient hlásí poruchu, vy musíte reagovat do 4h, nastoupit do 24h. Někdy se to nestihne, nikdo neví proč, sankce hrozí.
- 🔢 **Servisní historie po sériových číslech** — který stroj, jaké náhradní díly, kdo to dělal, kolik hodin
- ⏰ **Vykazování času pro fakturaci** — technik píše do Excelu, fakturantka přepisuje, půlka chyb je z překlepů
- 📄 **Smlouvy a paušály** — klient X má smluvní servis, klient Y ad-hoc, kdo si pamatuje?
- 📦 **Náhradní díly** — co je na skladě, co u kterého klienta zabudované, co se objednává
- 💼 **Klient si dělá audit dodavatelů** — chce report za rok, kolik zásahů, kolik hodin, jaké stroje

> Pokud aspoň 3 z 6 přikývlo, jsme přesně pro vás.

---

### Náš datový model

```
Klient (Tatra Trucks a.s.)
  ↓
  Smlouva (paušál 80h/měs, SLA 4h reakce)
  Stroj (CNC frézka XYZ, s.č. T-2024-001)
       ↓
       Servisní zásah 2025-08-12: porucha vřetena, technik Novák, 3.5h, díl ABC
       Servisní zásah 2026-01-15: pravidelná údržba, 2h
       Servisní zásah 2026-04-22: poporuchová oprava, 6h
```

**Co tím získáte:**
- Z karty stroje vidíte **všechny zásahy seřazené v čase, kolik hodin, který technik, jaké díly**
- Z karty klienta vidíte **využití smluvního paušálu, ad-hoc hodiny, fakturovat zvlášť**
- **SLA timer** — Twenty workflow startne časomíru od nahlášení poruchy, alertuje při překročení
- **Auto-výpočet hodin** — technik vyplní start/end, Twenty spočítá

---

### Co dodáváme v Phase 1

- ✅ Custom entity: Klient, Smlouva, Stroj (s.č., model, výrobce, instalace), Servisní zásah
- ✅ SLA pole na smlouvě + workflow timer
- ✅ Reakční doba měření a alerty
- ✅ Vykazování hodin a materiálu na zásahu
- ✅ Auto-výpočet ceny za zásah (sazba × hodiny + díly)
- ✅ Přehled paušálního čerpání měsíčně
- ✅ Export podkladů pro fakturaci (CSV / PDF)
- ✅ Reporting per klient (auditní výkaz)

---

### Proč my, ne…

**…HaloPSA / ConnectWise (PSA pro IT servis, ale aplikovatelné na strojní)?**
Silní v US trhu, drazí, často $80+/user/měs. Žádné CZ specifika (ARES, Pohoda integrace).

**…interní řešení v Excelu / Access?**
Funguje pro 1 technika. Pro 5+ je to chaos a nikdo nemá přehled. Audit u klienta = panika.

**…ERP s servisním modulem (SAP, Helios)?**
Drahé, dlouhý setup, overkill pro 5–50 lidí. Twenty s námi je 10–20× rychlejší k spuštění.

**…Raynet a generický CRM?**
Stejně jako u HVAC — nemají Stroj jako entitu. Servisní historie po s.č. v Raynetu nepostavíte.

---

### Phase 2+

- **Phase 2:** Skladová evidence náhradních dílů s pohyby (rezervace, výdej, objednávky)
- **Phase 2:** Mobilní výkaz technika v terénu (PWA + foto + podpis klienta)
- **Phase 3:** AI návrh časového odhadu na základě historie podobných oprav
- **Phase 3:** Klientský portál — klient vidí své stroje, zásahy, čerpání paušálu
- **Phase 4:** HR + plánování dovolených techniků (vazba na vytíženost smluv)

---

### CTA

**🔵 Konzultace zdarma — 30 minut**
> Ukážeme jak by Twenty vypadal s vaší servisní praxí. Probereme SLA, fakturaci, smluvní vs. ad-hoc.

---

## Šablona — pro budoucí oborové podstránky

Pokud bude business case rozšířit o další segmenty (B1 IT servis, B2 Bezpečnost, C1 Kancelářská technika, C2 Facility), použijte stejnou strukturu:

1. **Hero** s konkrétním H1 pro obor
2. **„Tahle firma jste vy?"** — 5–6 typických bolestí
3. **Náš datový model pro [obor]** — ASCII diagram s konkrétními entitami
4. **Co dodáváme v Phase 1** — checklist (datový model, automatizace, reporting)
5. **Proč my, ne specializovaný X / generický Y / interní Excel?**
6. **Phase 2+ co můžete přidat**
7. **CTA**

---

## Společné prvky napříč oborovými podstránkami

- **Pricing teaser** v patičce každé oborové podstránky (link na `/cenik/`)
- **Cloud/Selfhost teaser** v patičce
- **„Z Raynetu do Twenty" link** — pro klienty migrující ze stávajícího CRM
- **Final CTA** je vždycky stejné: „Konzultace zdarma — 30 minut"

---

## Co tato sekce nepotřebuje (ne plýtvat časem)

- ❌ Stock fotky strojů / kavárenských klimatizací / průmyslových hal
- ❌ Komparativní tabulky se specializovanými konkurenty (drahé na maintenance, riziko nepřesných tvrzení o cizích produktech)
- ❌ Detailní průvodce krok-za-krokem typu „jak vytvořit zařízení" (to je práce Twenty docs)
- ❌ Video demo (sami říkáme, že demo děláme online — proč to dublujeme?)
