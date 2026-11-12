---
title: Zásady zpracování osobních údajů | TwentyCRM.cz
description: Jak zpracováváme osobní údaje, kategorie sub-zpracovatelů (Hetzner / Netcup / Elestio v EU), vaše práva podle GDPR a postup při bezpečnostním incidentu.
pageId: gdpr
hero:
  pozadi: svetle
  stitek: Právní
  nadpis: Zásady zpracování osobních údajů
  perex: >-
    ESHOpino s.r.o., IČO 03223485, se sídlem Roháčova 145/14, 130 00 Praha 3 (dále „my", „naše společnost"), provozuje webovou stránku twentycrm.cz a poskytuje služby implementace a správy CRM systému Twenty.
---

V tomto dokumentu vysvětlujeme, jak zpracováváme osobní údaje, které od vás dostáváme nebo o vás shromažďujeme. Dokument vychází z Nařízení Evropského parlamentu a Rady (EU) 2016/679 — obecné nařízení o ochraně osobních údajů (dále „GDPR") a zákona č. 110/2019 Sb., o zpracování osobních údajů.

:::zvyrazneni

**Tato webová stránka neukládá žádné osobní údaje návštěvníků.**
Nemá kontaktní formulář, nesbírá data, neukládá nic do databáze. Veškerá komunikace probíhá přes `mailto:` nebo `tel:` linky, které otevřou váš vlastní e-mailový klient nebo dialer. Údaje vidíme až ve chvíli, kdy nám e-mail nebo telefonát dorazí.

:::

## 1. Správce osobních údajů

:::zvyrazneni

**ESHOpino s.r.o.**\
IČO: 03223485 | DIČ: CZ03223485\
Sídlo: Roháčova 145/14, 130 00 Praha 3\
Zápis v OR vedeném Městským soudem v Praze, oddíl C, vložka 228847\
Kontakt: [{{kontakt.email}}]({{mailto.generic}}), [{{kontakt.telefon}}]({{kontakt.tel}})

:::

Pro běžné záležitosti (poptávky, smlouvy, výkon vašich práv) nás kontaktujte na [{{kontakt.email}}]({{mailto.generic}}). Reagujeme do 30 dnů (čl. 12 odst. 3 GDPR), v praxi obvykle do několika pracovních dní.

## 2. Kategorie subjektů údajů a účely zpracování

Rozlišujeme tři kategorie osob, jejichž údaje můžeme zpracovávat, plus analytiku návštěvnosti webu.

### 2.1 Návštěvníci webu — poptávky a předsmluvní jednání

- **Údaje:** jméno, e-mail, telefon, název firmy, popis vaší poptávky — jakékoliv údaje uvedete v e-mailu nebo na telefonu.
- **Účel:** odpověď na vaši poptávku, příprava nabídky, předsmluvní jednání.
- **Právní základ:** plnění smlouvy a předsmluvní jednání (čl. 6 odst. 1 písm. b GDPR).
- **Doba uchování:** 24 měsíců od posledního kontaktu, pokud nedojde k uzavření smlouvy. Pak smazáno.

### 2.2 Klienti — po uzavření smlouvy

- **Údaje:** kontaktní údaje oprávněných zástupců, fakturační údaje, technické údaje k provozu (přístupy, konfigurace), korespondence.
- **Účel:** plnění smlouvy o implementaci a/nebo správě Twenty CRM, fakturace, podpora.
- **Právní základ:** plnění smlouvy (čl. 6 odst. 1 písm. b GDPR) + plnění právních povinností (čl. 6 odst. 1 písm. c GDPR — DPH, účetnictví, archivace).
- **Doba uchování:** po dobu trvání smlouvy + 10 let pro daňové a účetní povinnosti dle zákona o účetnictví a zákona o DPH.

### 2.3 Subjekty údajů v Twenty CRM klienta — naše role zpracovatele

Pokud pro klienta provozujeme Twenty CRM (vyhrazený server pod naší správou), jsme ve vztahu k údajům jeho kontaktů, zákazníků a obchodních partnerů uložených v CRM **zpracovatelem** ve smyslu čl. 4 odst. 8 GDPR. Klient je správcem těchto údajů.

Vztah zpracovatel-správce řešíme primárně těmito veřejně dostupnými dokumenty — těmito Zásadami zpracování, [VOP](/obchodni-podminky/) a popisem bezpečnostních opatření na stránce [Bezpečnost a GDPR](/bezpecnost/). Zaplacením první faktury nebo zahájením užívání služby Klient akceptuje jejich aktuální znění (čl. 28 odst. 2 GDPR — obecné svolení k zapojení sub-zpracovatelů; postup oznamování změn viz čl. 2 VOP).

Pokud Klientův compliance proces vyžaduje samostatnou podepsanou **Smlouvu o zpracování osobních údajů (DPA)** dle čl. 28 GDPR, vystavíme ji na žádost — máme připravený krátký vzor přílohy se sub-zpracovateli.

V Cloud variantě (Twenty Cloud od Twenty Inc.) data v CRM zpracovává přímo Twenty Inc. jako zpracovatel klienta. My nejsme v této variantě zpracovatel ani sub-zpracovatel — klient je s Twenty Inc. v přímém smluvním vztahu. Detail viz [srovnání variant](/cloud-vs-selfhost/).

### 2.4 Analytika návštěvnosti webu

Web používá pouze nástroje, které **neukládají cookies do vašeho prohlížeče** a neidentifikují jednotlivé návštěvníky. Konkrétně:

- **Cloudflare Analytics** — agregovaná data o návštěvnosti, která Cloudflare poskytuje nám jako provozovatelům webu. Cloudflare zpracovává požadavky jako edge proxy a analytika je vedlejším produktem této role. Bez cookies, bez fingerprintingu jednotlivců.
- **AWStats** — analýza serverových access logů hostingu. Údaje (IP, user-agent, requested URL, status, referrer) jsou v logu hostingu standardně přítomné pro účely diagnostiky a bezpečnosti. AWStats z nich generuje souhrnné statistiky. Logy se rotují s krátkou dobou uchování (typicky 30 dní).
- **Google Search Console** — Google nám reportuje, jak Googlebot indexuje naše stránky a které dotazy lidé hledají. Tyto údaje pochází z vyhledávání Google, ne ze sledování konkrétních návštěvníků na našem webu.

**Nepoužíváme** Google Analytics, Facebook Pixel ani jiné JavaScript tracking nástroje, které by ukládaly cookies nebo identifikovaly jednotlivé návštěvníky.

## 3. Příjemci údajů a sub-zpracovatelé

Vaše údaje **neprodáváme ani neposkytujeme třetím stranám pro marketingové účely.** Sdílíme je výhradně se sub-zpracovateli, kteří nám pomáhají poskytovat naše služby a kteří jsou smluvně zavázáni dodržovat GDPR a naše bezpečnostní požadavky.

### 3.1 Infrastruktura pro provoz Twenty CRM klientů (vyhrazený server)

| Sub-zpracovatel | Role | Lokalita | Certifikace + DPA |
|---|---|---|---|
| **Hetzner Online GmbH** | Servery a úložiště souborů (Object Storage) | Norimberk a Falkenstein (DE); Helsinki (FI) volitelně pro zálohování na míru | ISO/IEC 27001:2022; DPA dle čl. 28 GDPR uzavřena |
| **netcup GmbH** | Servery (alternativní poskytovatel) | Norimberk (DE) | ISO/IEC 27001, ISO/IEC 27701, ISO 9001, ISO 14001 (TÜV NORD); DPA dle čl. 28 GDPR uzavřena |
| **Elestio SRL** | Orchestrace serverů, automatizované aktualizace OS, firewall, zálohy, monitoring | Sídlo Belgie; provoz v EU regionu | SOC 2, ISO/IEC 27001, HIPAA, soulad s GDPR; DPA dle čl. 28 GDPR uzavřena |

### 3.2 Provozní a administrativní

- **Účetní firma** — zpracování fakturace; DPA uzavřena.
- **Provozovatel naší firemní e-mailové domény** — doručování naší korespondence; standardní DPA poskytovatele.
- **Cloudflare Inc.** — DNS a edge proxy **našeho webu twentycrm.cz** (agregovaná analytika návštěvnosti); CRM instance klientů za Cloudflare neběží. ISO/IEC 27001, SOC 2 Type II; DPA se standardními smluvními doložkami (čl. 46 GDPR).
- **Google (Search Console)** — agregované statistiky vyhledávání; bez identifikace návštěvníků.

### 3.3 Pouze ve specifických scénářích

- **Twenty Inc.** — pokud klient používá Twenty Cloud (variantu hostovanou výrobcem); klient je s Twenty Inc. v **přímém** smluvním vztahu, nikoliv přes nás. Detail v sekci 4 níže.
- **Externí pen-tester / bezpečnostní auditor** — pouze na vyžádání klienta, s konkrétním rozsahem a podpisem NDA.
- **Orgány veřejné moci** — pokud nám to ukládá zákon (např. ÚOOÚ, soud, policie v rámci trestního řízení).

Aktualizovaný seznam sub-zpracovatelů poskytujeme klientům jako přílohu DPA. O změně sub-zpracovatele klienta informujeme předem a klient má právo proti změně podat námitku.

## 4. Mezinárodní předání údajů (mimo EU/EHP)

Naše standardní provozní nastavení **nepředpokládá předání osobních údajů mimo EU/EHP**. Servery, úložiště a zálohy jsou fyzicky v Německu (Hetzner / Netcup); u zálohování na míru případně ve Finsku (Hetzner Helsinki) — vždy v rámci EU.

Existují tři výjimečné scénáře, ve kterých k předání mimo EU dochází:

- **a) Twenty Cloud** — pokud klient zvolí variantu hostovanou výrobcem Twenty Inc. (USA), data v CRM zpracovává Twenty Inc. ve svých datových centrech. Toto předání je upraveno smluvním vztahem mezi klientem a Twenty Inc., nikoliv námi. Aktuální podmínky a opatření Twenty Inc. (vč. standardních smluvních doložek dle čl. 46 GDPR) najdete na [twenty.com/legal](https://twenty.com/legal).
- **b) Cloudflare (pouze web twentycrm.cz)** — náš prezentační web běží za edge proxy na globální síti Cloudflare; **CRM instance klientů za Cloudflare neběží**. Cloudflare Inc. má vlastní DPA se standardními smluvními doložkami dle čl. 46 GDPR a je certifikována pro ISO/IEC 27001 a SOC 2 Type II.
- **c) Mimořádné případy** — pokud by někdy vznikla potřeba předání mimo EU (např. integrace s konkrétní službou v USA, kde není EU alternativa), upozorníme klienta předem, vyhodnotíme dopad (DPIA) a uplatníme některý z mechanismů dle čl. 46 GDPR (standardní smluvní doložky) nebo požádáme klienta o výslovný souhlas.

Nikdy nepředáme údaje mimo EU bez vašeho předchozího informování.

## 5. Vaše práva jako subjektu údajů

Máte právo:

- **Na přístup** k údajům — vědět, jaké údaje o vás máme (čl. 15 GDPR).
- **Na opravu** nepřesných nebo neúplných údajů (čl. 16 GDPR).
- **Na výmaz** („právo být zapomenut") — pokud to není v rozporu s našimi zákonnými povinnostmi, např. archivace daňových dokladů 10 let (čl. 17 GDPR).
- **Na omezení zpracování** v případech, kdy zpochybňujete přesnost údajů nebo legalitu zpracování (čl. 18 GDPR).
- **Na přenositelnost údajů** — předání ve strojově čitelném formátu (čl. 20 GDPR).
- **Vznést námitku** proti zpracování (čl. 21 GDPR).
- **Nebýt předmětem automatizovaného rozhodování** včetně profilování s právními účinky (čl. 22 GDPR) — tuto praxi neprovádíme.
- **Odvolat souhlas** v případech, kdy je zpracování založeno na souhlasu (čl. 7 odst. 3 GDPR) — týká se nás okrajově, většinu zpracování opíráme o smlouvu, ne souhlas.
- **Podat stížnost** u dozorového úřadu — v ČR [Úřad pro ochranu osobních údajů](https://www.uoou.cz) (Pplk. Sochora 27, 170 00 Praha 7).

Pro uplatnění práv nás kontaktujte na [{{kontakt.email}}]({{mailto.generic}}). Žádost vyřídíme bez zbytečného odkladu, nejpozději do 30 dnů od jejího obdržení (čl. 12 odst. 3 GDPR). Pokud jste subjektem údajů v CRM našeho klienta, obraťte se prosím nejdříve přímo na klienta jako správce — my mu poskytneme technickou součinnost.

## 6. Technická a organizační opatření (čl. 32 GDPR)

Zavedli jsme přiměřená technická a organizační opatření k zajištění úrovně zabezpečení odpovídající riziku, zejména:

### 6.1 Šifrování

- **Šifrování v přenosu** — veškerá komunikace mezi prohlížečem a Twenty, mezi Twenty a úložištěm souborů, i mezi námi a serverem přes SSH probíhá přes TLS 1.3 (HTTPS / SSH).
- **Šifrované zálohy** — denní zálohy databáze a souborů vytvářené nástrojem BorgBackup jsou šifrované před uložením do úložiště.
- Pro klienty s vyšší citlivostí umíme nasadit aplikační šifrování příloh nebo šifrování disku s klientskými klíči (mimo standardní rozsah služby — dohoda individuálně).

### 6.2 Řízení přístupu

- **Vyhrazený server pro každého klienta** — bez sdílení infrastruktury s jiným klientem.
- **Zásada nejmenšího nutného přístupu** — k údajům přistupují pouze osoby, které je potřebují pro plnění svého úkolu.
- **SSH přístup k serveru pouze přes klíče**, ne hesla. Klíče má jen úzký okruh techniků; změna v týmu = okamžitá rotace klíčů.
- **Záznam přihlášení** k serveru — auditujeme, kdo a kdy se přihlásil.
- **Vícefaktorové ověření (MFA)** pro účty s administrátorskými právy v Twenty CRM, doporučujeme klientům i pro běžné uživatele.
- **SSO (jednotné přihlášení)** přes Google nebo Microsoft — uživatelé používají firemní účet, místo dalšího hesla.

### 6.3 Ochrana proti útokům

- **Firewall** s otevřením pouze nezbytných portů (HTTPS 443, SSH 22). Databáze není z internetu dostupná vůbec.
- **Ochrana proti útokům hrubou silou** — rate limiting na SSH i na aplikační vrstvě blokuje opakované chybné pokusy o přihlášení.
- **Automatické bezpečnostní záplaty** operačního systému (kernel-level patches řešení Elestio) — opravy zranitelností se nasazují bez prodlení.

### 6.4 Dostupnost a obnova

- **Denní automatizované zálohy** nástrojem BorgBackup — databáze i souborů.
- **Zálohy v jiné lokaci** než produkční server — odolnost vůči výpadku celého datového centra.
- **Volitelně do klientského S3 úložiště** (AWS, Hetzner, MinIO) pro plnou nezávislost na třetí straně.
- **Pravidelný test obnovy** — záloha bez testu obnovy je jen iluze.
- **Hardwarová redundance** u poskytovatelů (Hetzner / Netcup) — výpadek jedné komponenty neshodí službu.
- **Monitoring 24 hodin denně** — dostupnost, výkon, chybové stavy. Při výpadku dostáváme upozornění.

### 6.5 Organizační opatření

- **Mlčenlivost** — všichni pracovníci ESHOpino i případní externisté jsou smluvně vázáni mlčenlivostí, která trvá i po skončení spolupráce.
- **DPA se sub-zpracovateli** — viz sekce 3 výše.
- **Záznamy o činnostech zpracování** dle čl. 30 GDPR vedeme — viz sekce 9.
- **Interní postup řešení bezpečnostního incidentu** — viz sekce 7.

Detailní popis čtyř vrstev ochrany (aplikace / server / infrastruktura / přílohy a zálohy), certifikací poskytovatelů a konkrétních technických opatření najdete na stránce [Bezpečnost a GDPR](/bezpecnost/).

## 7. Postup při bezpečnostním incidentu (čl. 33–34 GDPR)

V případě porušení zabezpečení osobních údajů (security breach), které pravděpodobně bude mít za následek riziko pro práva a svobody fyzických osob, postupujeme následovně:

1. **Detekce a izolace** — monitoring zachytí anomálii, případně nám incident nahlásí klient nebo uživatel; izolujeme dotčenou komponentu, abychom zamezili dalšímu šíření.
2. **Informace klientovi** jako správci — bez zbytečného odkladu, typicky do 24 hodin od detekce, předáváme klientovi popis incidentu, kategorii a počet dotčených subjektů a údajů, pravděpodobné důsledky a nápravná opatření.
3. **Klient (správce) má 72 hodin** na ohlášení incidentu Úřadu pro ochranu osobních údajů dle čl. 33 GDPR. My poskytujeme veškerou technickou součinnost.
4. **Informace subjektům údajů** — pokud incident představuje vysoké riziko pro práva a svobody subjektů, správce je informuje bez zbytečného odkladu dle čl. 34 GDPR.
5. **Řešení a obnova** — záplata zranitelnosti, obnova ze zálohy (pokud je třeba), forenzní analýza příčiny.
6. **Zpráva po incidentu** — písemné shrnutí pro klienta s popisem nápravných a preventivních opatření.

## 8. Pověřenec pro ochranu osobních údajů (DPO)

Pověřence pro ochranu osobních údajů (DPO) jsme nestanovili, protože povinnost stanovit DPO se podle čl. 37 GDPR na ESHOpino s.r.o. nevztahuje (nejsme orgán veřejné moci, naše hlavní činnost nezahrnuje rozsáhlé pravidelné a systematické monitorování subjektů ani rozsáhlé zpracování zvláštních kategorií údajů ve smyslu čl. 9 GDPR).

Pokud máte DPO vy jako klient, komunikujeme s ním přímo a poskytneme mu všechny informace, které pro svou roli potřebuje.

## 9. Záznamy o činnostech zpracování (čl. 30 GDPR)

Vedeme záznamy o činnostech zpracování ve smyslu čl. 30 GDPR — kategorie subjektů, kategorie údajů, účely zpracování, právní základ, příjemce, mezinárodní předání, lhůty pro výmaz a obecný popis technických a organizačních opatření. Záznamy zpřístupníme na vyžádání dozorovému úřadu (ÚOOÚ) nebo auditorovi.

## 10. Změny této politiky

Tuto politiku můžeme občas aktualizovat — zejména při přidání nového sub-zpracovatele, nového analytického nástroje nebo změně právního rámce. Aktuální znění je vždy k dispozici na této stránce. Klienty s aktivní smlouvou o zásadní změně (např. změna sub-zpracovatele s vlivem na zpracování jejich dat) informujeme předem e-mailem nebo v rámci komunikace o smlouvě.

**Poslední aktualizace: 1. června 2026**
