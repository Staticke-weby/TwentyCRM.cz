# twentycrm.cz — Strategie a cenová politika

## Locknutá rozhodnutí (závazná pro celý web)

> Všechna otevřená rozhodnutí jsou zde locknutá. Kdo to potřebuje měnit, projednává s týmem; do té doby web staví podle těchto bodů.

### Jak se nazýváme (terminologie)

| Kontext | Termín |
|---|---|
| Hero / hlavní pozicování | **„Český implementátor Twenty CRM"** |
| Long-form popis | **„Nezávislá česká agentura, která Twenty CRM implementuje a spravuje"** |
| O nás stránka | **„Implementační partner pro Twenty CRM"** |
| Footer disclaimer | **„Tato stránka není oficiálním zastoupením Twenty.com (Twenty Inc.). Provozuje ji ESHOpino s.r.o. — nezávislá česká agentura specializující se na implementaci open-source Twenty CRM."** |

> ❌ Nepoužívat: „Twenty představuje", „Oficiální Twenty partner", „Twenty.cz", „Reseller Twenty".

### Hero / slogan

**H1:** „Open source CRM. I pro vaše AI agenty."
**H2:** „Open-source Twenty CRM v češtině, postavený na míru servisním firmám. Implementujeme, spravujeme, rosteme s vámi."

### Brandové e-maily

**Rozhodnutí (revize 2026-06):** Sjednoceno na **`@bohemiacrm.cz`** napříč oběma brandy. Hlavní kontakt na webu twentycrm.cz je **`info@bohemiacrm.cz`**, osobní aliasy `baloun@bohemiacrm.cz`, `rezac@bohemiacrm.cz` zůstávají (Jakub zatím bez veřejného e-mailu, viz `team.json`).

> Důvod revize: jedna agenturní inbox-doména je provozně jednodušší (žádné forwardy/aliasy navíc, žádná duplicita vláken, jeden DKIM/SPF setup). Brandová separace probíhá na úrovni webu, dokumentů a fakturace — e-mailová doména `bohemiacrm.cz` čte klient jako právní entitu (ESHOpino s.r.o. provozující obě značky), což je v B2B kontextu naprosto v normě.
>
> Předchozí varianta s `@twentycrm.cz` aliasy nebyla nikdy zprovozněna, takže žádné existující kontakty neměníme.

### První oborové podstránky (Phase 1)

Z `persony.md` bereme **3 segmenty s nejsilnějším product-fit a nejmenší specializovanou konkurencí**:

1. **HVAC / klimatizace / tepelná čerpadla** (segment A1)
2. **Revizní technici** — elektro, plyn, hasicí, výtahy (segment A2)
3. **Servis výrobních a strojních zařízení** (segment A3)

Ostatní (B1 IT servis, B2 Bezpečnost, C1 Kancelářská technika, C2 Facility) zůstávají v zásobě, nepouštíme je do oborových podstránek na launch.

### MDA reference

**Rozhodnutí:** Použít **anonymizovaně + s atribucí na agenturu, ne Twenty produkt.** Forma:
- „Servisní firma se 12 techniky (HVAC obor)" — ne jméno klienta
- Reference se pojí ke **kompetenci agentury** v servisních procesech, datovém modelování a integracích
- Umístění: `/o-nas/` jako „Naše zkušenosti se servisními firmami", ne `/reference/` stránka. Reference stránku spustíme až bude obsah dostatečně bohatý.

> **Pravidlo komunikace:** Mluvíme jako agentura s expertízou na servisní procesy, která Twenty CRM přidala do své technologické nabídky. Ne jako „nováček v Twenty světě". Klient nepotřebuje vědět kolik jsme jich na Twenty nasadili — potřebuje vědět, že rozumíme jeho oboru.

### Default deployment doporučení

**Selfhost** (cenová argumentace ~5+ uživatelů, vlastnictví dat, jedna faktura). Cloud nabízíme jako explicitní výjimku po klientském požadavku (zero-ops, malý tým).

### Web design principy (závazné)

Viz `design-principy.md`. Klíčové:
- **Bez screenshotů produktu** — stárnou s každou release Twenty
- **Bez týmových fotek** v MVP (logo + abstraktní vizuály)
- **Typo + barvy + ikony** jako hlavní vizuální nástroj
- **Minimum raster obrázků** — vše co jde, jako SVG / CSS

---

## Pravidlo o pravdivosti obsahu (závazné)

Žádné tvrzení o Twenty CRM (funkce, schopnosti, integrace) na webu nesmí jít nad rámec toho, co je oficiálně dohledatelné v:

- https://twenty.com/
- https://docs.twenty.com/user-guide/introduction
- https://github.com/twentyhq/twenty

Důvody: nejsme tvůrci Twenty, jsme nezávislá agentura. Pod AGPL-3.0 nemáme legitimitu slibovat featury, které neexistují. CZ trh je malý, lidé si ověřují. Jeden přestřelený claim podkopá důvěru pro twentycrm.cz i pro sesterský bohemiacrm.cz.

Všechny hypotézy v brainstormingových dokumentech („Proč Twenty fit (hypotéza)") je nutné před přesunem do webového textu **ověřit proti oficiálním zdrojům**. Roadmap / pre-release funkce označit jako takové. Funkce z komunitních pluginů nebo naší custom práce — popsat jako naše doplnění, ne jako vlastnost Twenty.

Detail viz `CLAUDE.md`.

---

## Positioning

Jsme český implementátor Twenty CRM pro SMB firmy do 50 lidí, nejčastěji do 20. Neprodáváme Twenty jako software — prodáváme **hotové CRM řešení šité na míru oboru klienta**, postavené na Twenty jako technologickém základu.

Nejsme reseller ani distributor. **Nejsme tvůrci Twenty** — jsme nezávislá agentura která Twenty implementuje a spravuje. Rozumíme procesům a dodáme funkční systém.

**Klíčový diferenciátor:** naše řešení je **opravdu upravitelné na míru oboru** klienta. Nejznámější CRM pro SMB v ČR (Raynet) je v zásadě one-size-fits-all — funguje, ale klient se přizpůsobuje softwaru. My to obracíme: software se přizpůsobí klientovi (custom objekty, workflow, postupný rollout funkcí). Detailní srovnání viz [konkurence.md](konkurence.md).

**Druhý klíčový diferenciátor — platforma, ne jednorázový projekt:** Twenty není jen CRM, ale **platforma na kterou postupně přidáváme další agendy** (projekty, HR, helpdesk, sklad, …) tak, jak klient roste. Všechny agendy sdílí společná data (Klient je v každé z nich), takže nevzniká silostní mix nástrojů. Twenty má pre-installed apps infrastrukturu a SDK pro vlastní aplikace (sourced z release notes v2.1.0+), takže to není naše vize, ale směr produktu samotného. Pro nás to znamená **dlouhodobé partnerství s klientem**, ne single-shot deploy.

---

## Vztah k paralelnímu MDA byznysu a volba první vertikály

Provozujeme paralelně agenturu která dodává CRM řešení na **Microsoft Model Driven Apps (Power Platform)**. Postupem narážíme na to, že MDA není vhodné řešení pro každého klienta — pro menší firmy a oborově specifická řešení bývá příliš licenčně/setup nákladné, pomalejší na iterace a často přehlcené funkcemi.

**Twenty CRM volíme** protože:
- **Agentické úpravy** — rychlejší dodání oborově přesných úprav (šetří čas konzultanta i klienta)
- **Postupné rozšiřování** — klient dostane jen to co potřebuje teď, další funkce přibývají s vývojem jeho byznysu (žádné „nepoužíváme 80 % systému")
- **Bez per-user licencí + vlastnictví dat** (open-source, AGPL-3.0)

**Pozice obou produktů (pracovní hypotéza, k ověření):**
- **Twenty** — menší firmy, oborově specifická řešení, klienti kteří chtějí postupný rollout
- **MDA** — klienti kde je potřeba hluboká integrace s Microsoft ekosystémem nebo enterprise scope

### Dvě hotová řešení (revize 2026-08-01)

Prodáváme **právě dvě varianty CRM**, obě jako naše nadstavby nad open-source Twenty:

- **Twenty Servis** — servisně-realizační firmy: montáž, instalace i následný servis u zákazníka. Klient → Místo → Zařízení → Servisní plán → Zakázka → Výjezd → Výkaz → Nabídka. Vychází z původní Field Service vertikály (HVAC), ale je to obecné řešení pro každého, kdo posílá lidi k zákazníkovi.
- **Twenty Sales** — řízení obchodu: zájemci, obchodní případy s fázemi, nabídky s nákupní cenou a marží, projekty s rozpočtem nákladů, obchodní plán se semaforem. Pro prodej **firmám i koncovým zákazníkům**, **krátké i dlouhé obchody**. Nesedne jen tam, kde se objednávky odbavují samy a nikdo s nikým nemluví (čistě e-shopový provoz).

**K referencím (rozhodnutí 2026-08-01):** web klienty nejmenuje a sám od sebe neotevírá, kolik nasazení za sebou máme. Neomlouváme se a neobhajujeme — prodáváme produkt, ne historii. Zároveň si **nikdy nevymýšlíme** nasazení, počty klientů ani reference. Když se někdo zeptá napřímo, odpovídáme pravdu.

**Nejsou to moduly, které se skládají — je to volba.** Servisní firmě stačí Twenty Servis, protože obsahuje i nabídky a ceník. Kombinovaný balíček ani příplatek za druhou nadstavbu nenabízíme.

**Rozpojení dvou os.** Rozhoduje **proces** (jezdíte k zákazníkovi × řídíte obchod), ne obor. Obor je kontext a SEO — každá oborová stránka končí blokem „Které řešení pro vás" s doporučením i alternativou. Velkoobchod, který chce řídit jen obchodní oddělení, patří na Sales; montážní firma, která nechce řešit terén, taky.

**Cílíme přednostně na segmenty s malým počtem uživatelských rolí** (obchodník, vedoucí, backoffice — ne celá firma). Čím méně rolí se systému dotkne, tím snáz pořízení CRM ve firmě projde.

**Explicitně NE:** realitní makléři.

Detail viz [persony.md](persony.md) a sekce „Dvě řešení" v `CLAUDE.md`, která je pro web závazná.

---

## Doména a brand

- **Doména:** twentycrm.cz
- Funguje jako vstupní bod pro klienty kteří hledají Twenty CRM implementaci v ČR
- Specializujeme se na český trh — rychle obsazujeme pozici „český implementátor Twenty CRM" přes obsah, oborové podstránky a hlubokou expertízu v servisních procesech

### Vztah k bohemiacrm.cz (sesterský brand)

Stejnou agenturu (ESHOpino s.r.o., tým Baloun / Řezáč / Pitner) provozujeme pod dvěma brandy:

- **bohemiacrm.cz** — Microsoft Model Driven Apps / Power Platform (zavedený, historie referencí)
- **twentycrm.cz** — Twenty CRM (nový brand, tento web)

**Rozdělení témat ve vyhledávání (rozhodnuto 2026-11-12):** twentycrm.cz vlastní Twenty, open source CRM,
CRM na vyhrazeném serveru, agentní CRM a MCP **i servisní návody** (plánování výjezdů, evidence zakázek, servisní výkaz).
bohemiacrm.cz vlastní Microsoft / Power Platform a velké firmy a na témata twentycrm.cz jen odkazuje — obě domény
o stejném tématu by si braly pozice ve vyhledávání.

**Důsledky pro nový web (k rozhodnutí):**

1. **Brandová separace vs. konsolidace.** Otevřené: budou se na webu twentycrm.cz odkazovat na bohemiacrm.cz (důvěryhodnost přes historii), nebo držíme dva brandy oddělené?
2. **E-maily týmu** — dnes všichni `@bohemiacrm.cz`. Pro twentycrm.cz lze:
    - **(a)** Zavést `@twentycrm.cz` aliasy → čistá brandová separace, ale duplicitní správa.
    - **(b)** Ponechat `@bohemiacrm.cz` → jednodušší, ale vyžaduje na webu vysvětlení vztahu obou brandů.
   Předchozí brainstorming preferoval (a); s tímto kontextem to ale není no-brainer.
3. **Reference z MDA světa** — pokud jsou relevantní pro Field Service, lze použít jako důkaz expertízy (anonymizovaně nebo s odkazem na bohemiacrm.cz).

---



## Cenová politika

> ⚠️ **Zdroj pravdy pro čísla je `web/data/pricing.json`**, ne tento dokument. Aktuálně platí retainer **4 990 Kč** (vyhrazený server) a **3 990 Kč** (cloud) — částky 5 000 / 4 000 níže v tomto souboru jsou historické. **Ceny jsou stejné pro Twenty Sales i Twenty Servis**; za druhou nadstavbu se nepřiplácí, protože se vybírá jedno řešení.

### Nasazení (jednorázově)
**34 990 Kč** za nasazení ověřeného řešení

Zahrnuje:
- Analýza potřeb a návrh datového modelu
- Nasazení a konfigurace instance (Cloud nebo zařídíme self-hosted)
- Custom objekty, pipeline, workflow přes SDK
- Šablona dokumentu / zakázkového listu
- Napojení emailu, případně Ecomail
- Zaškolení uživatelů
- Dokumentace pro klienta

> Toto není cena za experimentování — je to cena za nasazení ověřeného řešení s historií zkušeností z Model Driven Apps.

### Měsíční retainer Cloud
**4 000 Kč/měsíc**

Zahrnuje:
- Dostupnost pro dotazy (email/telefon)
- Drobné úpravy na objednávku
- Sledování Twenty aktualizací, proaktivní komunikace novinek
- Správa API nákladů pokud provozujeme AI agenta

⚠️ **Důležité — dvě faktury u Cloud varianty:**
Klient v Cloud režimu hradí **dva nezávislé účty**:
1. **Twenty Cloud licenci** přímo Twenty Inc. — $9–19/user/měsíc (Pro nebo Organization plan)
2. **Náš retainer** 4 000 Kč/měsíc

Tato dualita musí být na webu a v obchodních materiálech **explicitně vidět**, aby klient nebyl překvapen. Na rozdíl od Selfhostu, kde je vše v naší faktuře.

### Měsíční retainer Selfhost
**5 000 Kč/měsíc**

> Selfhost = **jedna faktura** (naše). Twenty licenci si neplatí — open-source.

> Retainer nenabízíme jako povinný — nabízíme klientům kde je hodnota viditelná každý měsíc.

---

## Technická architektura dodávky

### Infrastruktura
- **Self-hosted:** v ceně Měsíční retainer Selfhost
- **Cloud:** Twenty Cloud ($9/user/měsíc) — pro klienty kde je priorita funkční email sync

