---
title: Bezpečnost a GDPR | Twenty CRM v Německu na ISO 27001 | TwentyCRM.cz
description: Open-source kód k auditu, servery v Německu (Hetzner / Netcup) s ISO/IEC 27001 a 27701, šifrování TLS, denní Borg zálohy do jiné lokace, monitoring 24/7. Jak plníme GDPR.
pageId: bezpecnost
mailto: bezpecnost
hero:
  nadpis: Bezpečnost vašich dat
  perex: >-
    Otevřený zdrojový kód k auditu, servery v Německu s mezinárodními certifikacemi ochrany informací,
    šifrované zálohy, denní monitoring a jasná smlouva o zpracování osobních údajů. Žádná „černá skříňka".
zaver:
  nadpis: Máte konkrétní otázku k bezpečnosti?
  text: >-
    30 minut online — projdeme váš případ, vaše regulační prostředí a navrhneme konkrétní nastavení.
    Bez prodejních oklik, bez „doladíme později".
---

## Zkrátka

:::zvyrazneni

- **Otevřený zdrojový kód** — Twenty je open source pod licencí AGPL-3.0.
  Celý kód je veřejný na GitHubu a jakákoliv firma si ho může nechat ověřit. Žádné skryté funkce,
  žádné nedohledatelné rozhraní.
- **Vaše data leží v EU** — fyzicky na serverech v Německu, na infrastruktuře
  s certifikací **ISO/IEC 27001** (mezinárodní standard řízení bezpečnosti informací)
  a **ISO/IEC 27701** (standard řízení ochrany soukromí). Žádný přenos mimo EU
  bez vašeho výslovného souhlasu.
- **Konkrétní technická opatření** — šifrované spojení (HTTPS / TLS 1.3),
  šifrované zálohy denně, firewall s otevřením jen nezbytných portů, ochrana proti opakovaným
  chybným pokusům o přihlášení, vícefaktorové ověření, monitoring 24 hodin denně.

:::

Tato stránka je psaná tak, aby ji rozuměl jednatel i správce IT. Anglické termíny vysvětlujeme
hned u prvního použití. Pokud někde narazíte na něco, co potřebujete upřesnit,
[napište nám]({{mailto.bezpecnost}}) —
odpovíme konkrétně, ne marketingovou frází.

::::sekce{pozadi="svetle"}

## Čtyři vrstvy ochrany — kde data leží a co je chrání

Bezpečnost není jedna kontrolka. Je to vrstva za vrstvou — od aplikace, přes server, infrastrukturu
datového centra, až po úložiště souborů a záloh. Tady jsou všechny čtyři.

:::karty{sloupce="2"}

### 🧩 1. Aplikace — Twenty

- **Otevřený zdrojový kód** pod licencí AGPL-3.0 — kompletní kód na
  [GitHubu](https://github.com/twentyhq/twenty),
  auditovatelný.
- **Role a oprávnění** — kdo na co může (vidět / upravovat / mazat).
  Lze omezit po typech záznamů i po polích.
- **Přihlášení přes firemní Google nebo Microsoft účet** (SSO — jednotné
  přihlášení) místo dalšího hesla.
- **Vícefaktorové ověření** (MFA — k heslu navíc kód z aplikace nebo SMS)
  pro citlivé účty.
- **Záznam změn (audit log)** a **omezení „vidím jen své záznamy“**
  (uživatel nesmí vidět cizí záznamy) — nabízí Twenty v tarifu Organization
  (v cloudu i jako licenci pro vlastní server).

### 🖥 2. Server — operační systém a síť

- **Vyhrazený server pro každého klienta** — žádné sdílení s cizí firmou
  (žádný „noisy neighbor", žádný vedlejší únik).
- **Automatické bezpečnostní záplaty operačního systému** — opravy zranitelností
  jádra a systémových knihoven se nasazují bez vašeho zásahu, jakmile výrobce vydá opravu.
- **Firewall s otevřením jen nezbytných portů** — z internetu je přístupný
  pouze web (HTTPS) a vzdálená správa (SSH); vše ostatní zavřené.
- **SSH přístup pouze přes klíče**, ne hesla — slovníkové útoky nemají
  kam zaútočit.
- **Ochrana proti opakovaným chybným pokusům o přihlášení**
  (rate limiting na SSH i na aplikační vrstvě) — útočník nemůže donekonečna zkoušet kombinace.

### 🏛 3. Infrastruktura — datové centrum

- **Servery fyzicky v Německu** (Norimberk nebo Falkenstein —
  podle zvoleného poskytovatele Hetzner / Netcup).
- **Mezinárodní certifikace ISO/IEC 27001** (systém řízení bezpečnosti informací)
  a u Netcupu navíc **ISO/IEC 27701** (systém řízení ochrany soukromí).
- **Fyzická ostraha 24 hodin denně**, kamerový systém, kontrolovaný přístup,
  redundantní napájení (záložní zdroje, dieselagregát).
- **Hardwarová redundance** — výpadek jedné komponenty (disk, napájecí
  zdroj, síťové rozhraní) neshodí službu.
- **Provoz prostřednictvím Elestio** (orchestrace serverů) — platforma
  s certifikací **SOC 2, ISO 27001, HIPAA, GDPR**.

### 📦 4. Přílohy a zálohy

- **Přílohy v Hetzner Object Storage** (úložiště souborů kompatibilní
  se standardem Amazon S3) — datová centra v Norimberku nebo Falkensteinu.
- **Distribuovaná replikace dat** (technologie Ceph) — soubor je rozložen
  na víc fyzických disků, výpadek jednoho disku neznamená ztrátu.
- **Denní automatizované zálohy nástrojem BorgBackup** — osvědčený
  open-source standard pro inkrementální šifrované zálohy. Elestio je spouští každou
  noc bez vašeho zásahu.
- **Zálohy v jiné lokaci než produkční server** — kdyby selhalo celé
  datové centrum, kde server běží, záloha je nezávisle v jiném. Volitelně směrujeme
  do vašeho vlastního S3 úložiště (Hetzner Object Storage, AWS S3, MinIO),
  abyste měli zálohy plně pod sebou.
- **Šifrovaný přenos** (TLS / HTTPS) mezi serverem a úložištěm.
- **Pravidelný test obnovy** — záloha bez testu obnovy je jen iluze.

:::

::::

## Certifikace poskytovatelů, kterým svěřujeme infrastrukturu

Sami v datovém centru servery nestavíme — využíváme zavedené evropské poskytovatele s mezinárodními
certifikacemi. Každý článek řetězce má vlastní smlouvu o zpracování osobních údajů (DPA).

| Poskytovatel | Co dělá | Certifikace | Kde leží data |
|---|---|---|---|
| [Hetzner](https://www.hetzner.com/) | Servery a úložiště souborů (Object Storage) | **ISO/IEC 27001:2022** (vydáno SOCOTEC Certification) | Norimberk a Falkenstein (Německo); Helsinki (Finsko) volitelně pro zálohování na míru |
| [Netcup](https://www.netcup.com/) | Servery (alternativa pro klienty s preferencí jiného německého poskytovatele) | **ISO/IEC 27001** (TÜV NORD, 2024) · **ISO/IEC 27701** (řízení ochrany soukromí) · **ISO 9001** (řízení kvality) · **ISO 14001** (environmentální management) | Norimberk (Německo); sídlo společnosti Karlsruhe |
| [Elestio](https://elest.io/) | Orchestrace serverů, aktualizace, monitoring, firewall, zálohy | **SOC 2** (americký standard pro správu dat) · **ISO/IEC 27001** · **HIPAA** (americký standard pro zdravotnictví) · **GDPR** (evropské nařízení o ochraně dat) | Region volíme s vámi (pro české klienty EU) |

:::zvyrazneni

**Co ty zkratky znamenají:**

- **ISO/IEC 27001** — mezinárodní standard systému řízení bezpečnosti informací. Auditor (TÜV NORD, SOCOTEC) prochází firmu jednou za rok a kontroluje, že má napsané procesy a opravdu je dodržuje.
- **ISO/IEC 27701** — doplněk k 27001 specificky pro správu osobních údajů (návaznost na GDPR). Netcup je drží, Hetzner v naší ověřené sadě ne.
- **SOC 2** — americký ekvivalent pro firmy, které spravují data klientů (AICPA standard). Audituje řízení bezpečnosti, dostupnosti a důvěrnosti.
- **HIPAA** — americký zákon o ochraně zdravotních dat. Pro nás přímo neplatí, ale ukazuje, že Elestio zvládá i striktní compliance prostředí.

:::

::::sekce{pozadi="svetle"}

## Konkrétní technická opatření

Co je nasazené dnes na každém vyhrazeném serveru, který pro vás zařídíme. Bez teorie a obecných frází —
jen co se opravdu pouští do produkce.

:::karty{sloupce="3"}

### 🔐 Šifrované spojení (TLS 1.3)

Veškerá komunikace mezi prohlížečem a Twenty, mezi Twenty a úložištěm souborů
i mezi námi a serverem probíhá šifrovaně. To, co poznáte v adresním řádku podle „https://".
Certifikát se automaticky obnovuje (Let's Encrypt).

### 📦 Šifrované zálohy denně — Borg + S3 do jiné lokace

Záloha databáze a souborů vzniká každou noc nástrojem **BorgBackup**
(open-source standard pro inkrementální šifrované zálohy) a putuje do
**jiné lokace než produkční server** — typicky do Hetzner Object Storage
v jiném datovém centru. Volitelně lze nasměrovat do **vašeho vlastního S3**
(AWS S3, Hetzner, MinIO) pro plnou nezávislost na třetí straně.
V základu uchováváme 7 denních záloh; delší retenci (týdenní a měsíční zálohy)
nebo zálohy do zeměpisně vzdálenější lokality (Hetzner Helsinki, Finsko)
nastavíme jako zálohování na míru za příplatek.

### 🛡 Firewall jen pro nezbytné porty

Z internetu je přístupný pouze web (HTTPS, port 443) a vzdálená správa pro nás (SSH, port 22).
Vše ostatní zavřené. Databáze není z internetu vůbec dostupná —
jen z vnitřní sítě serveru.

### 🚪 Ochrana proti útokům hrubou silou

Rate limiting (omezení počtu pokusů za čas) blokuje útočníka, který by zkoušel hesla nebo SSH klíče
dokola. Po několika chybných pokusech se IP adresa dočasně zablokuje.
Slovníkové ani brute-force útoky tedy nemají kam zaútočit.

### 🔑 Vícefaktorové ověření (MFA) + SSO

Twenty podporuje přihlášení přes firemní Google nebo Microsoft účet (SSO — jednotné přihlášení).
MFA (vícefaktorové ověření, druhá vrstva k heslu) chrání citlivé účty.
SAML / OIDC pro firmy s vlastním ověřovacím serverem nabízí Twenty v tarifu Organization.

### 🛠 Automatické bezpečnostní záplaty

Operační systém serveru dostává opravy zranitelností (jádra i systémových knihoven)
automaticky, jakmile výrobce vydá záplatu. Twenty samotné aktualizujeme manuálně s vámi
(testovací prostředí → produkce), abychom vás v UI nepřekvapili.

### 📊 Monitoring 24 hodin denně

Dostupnost služby, vytížení serveru, chybové stavy a anomálie sledujeme nepřetržitě.
Při výpadku dostaneme upozornění a začínáme řešit, ještě než to stihnete zaznamenat vy.

### 🔒 Kontrolovaný přístup z naší strany

Na server přistupujeme jen přes SSH klíče (žádná hesla). Každé přihlášení se loguje.
Klíče má jen úzký okruh techniků; změna v týmu = okamžitá rotace klíčů.

:::

::::

## Jak plníme GDPR

GDPR (Obecné nařízení o ochraně osobních údajů) je evropský zákon. V Německu se mu říká DSGVO
a v některých výkladech je o něco přísnější — což nám hraje do karet, protože tam máme servery.
Tady je, co konkrétně plníme a jak.

:::zvyrazneni

### ✓ Data zůstávají v EU

Servery i zálohy jsou v Německu, na infrastruktuře s certifikací ISO 27001.
Žádné údaje neopouštějí EU bez vašeho výslovného souhlasu.
**Výjimka:** pokud zvolíte cloud výrobce, data spravuje americká Twenty Inc.
(na serverech AWS ve Frankfurtu) — viz [srovnání variant](/cloud-vs-selfhost/).

### ✓ Zpracovatelská dohoda — co nejméně papírování

Pravidla zpracování (kdo je správce, kdo zpracovatel, sub-zpracovatelé, vaše práva,
postup při incidentu) máme popsaná zde a v [Zásadách zpracování osobních údajů](/zasady-zpracovani-osobnich-udaju/)
a ve [VOP](/obchodni-podminky/). **Zaplacením první faktury** nebo zahájením užívání služby je klient akceptuje
(čl. 28 odst. 2 GDPR — obecné svolení k zapojení sub-zpracovatelů).
Pokud váš compliance proces vyžaduje samostatnou podepsanou **DPA**
(smlouvu o zpracování dat dle čl. 28 GDPR), vystavíme ji na žádost — máme připravený
krátký vzor.

### ✓ Sub-zpracovatelé

Hetzner, Netcup i Elestio mají vlastní DPA podle GDPR. Hetzner a Netcup jsou německé
společnosti vázané DSGVO; Elestio sídlí v Belgii. Aktualizovaný seznam zveřejňujeme
v [Zásadách zpracování](/zasady-zpracovani-osobnich-udaju/).
Plánovanou změnu sub-zpracovatele oznámíme předem (30 dní); pokud nesouhlasíte, máte
právo na námitku a výpověď bez sankce.

### ✓ Práva subjektů údajů (články 15–22 GDPR)

Vaši zákazníci, jejichž údaje jsou v CRM, mají právo na přístup k údajům, opravu,
výmaz („zapomenutí"), omezení zpracování, přenositelnost dat a námitku.
My vám pomůžeme tato práva uplatnit technicky — export záznamu, smazání,
vyhledání všech aktivit dané osoby.

### ✓ Hlášení bezpečnostního incidentu do 72 hodin (články 33–34)

Pokud nastane incident, který by mohl ohrozit osobní údaje, informujeme vás
(jako správce) **bez zbytečného odkladu, typicky do 24 hodin od detekce**.
Vy pak máte podle GDPR 72 hodin na ohlášení dozorovému úřadu (v ČR Úřad pro ochranu
osobních údajů). Předáme vám všechny technické podklady, které budete pro hlášení potřebovat.

### ✓ Záznamy o činnostech zpracování (článek 30)

Vedeme evidenci, jaké údaje, pro koho, na jakém právním základě a jak dlouho zpracováváme.
Záznamy poskytneme na vyžádání auditorovi nebo dozorovému úřadu.

### ✓ Pověřenec pro ochranu osobních údajů (DPO)

ESHOpino DPO nestanovilo, protože povinnost stanovit DPO se podle článku 37 GDPR
na naši velikost a charakter zpracování nevztahuje. Pokud máte DPO vy, komunikujeme
s ním přímo a předáme mu všechny informace, které pro svou roli potřebuje.

### ✓ Přenos dat mimo EU jen v krajních případech a s vědomím klienta

Pokud by někdy vznikla potřeba přenést data mimo EU (např. proto, že integrace vyžaduje
službu v USA), upozorníme vás předem a domluvíme buď využití varianty hostované v EU,
nebo standardní smluvní doložky podle čl. 46 GDPR.

:::

Plné znění našich zásad zpracování osobních údajů najdete na stránce
[Zásady zpracování osobních údajů](/zasady-zpracovani-osobnich-udaju/).

::::sekce{pozadi="svetle"}

## Co je vaše zodpovědnost

Bezpečnost je sdílená. My řešíme infrastrukturu, operační systém, aktualizace a zálohy.
Vy řešíte to, co s daty děláte uvnitř Twenty.

:::zvyrazneni

- **Silná hesla pro uživatele** (alespoň 12 znaků, ne sdílená napříč službami).
  Doporučujeme správce hesel (Bitwarden, 1Password, KeePass).
- **Zapnout vícefaktorové ověření (MFA) všem uživatelům** — zvláště těm s admin
  oprávněním. V Twenty je MFA volitelné; doporučujeme nastavit jako povinné.
- **Aktualizace seznamu uživatelů** — když někdo odejde z firmy, neprodleně
  mu zrušte přístup. Twenty má jednoduchou správu uživatelů; zvládne to administrátor
  v týmu během minuty.
- **Nastavení rolí** — kdo na co má vidět. Technik nepotřebuje vidět finance,
  účetní nepotřebuje vidět servisní výkazy. S nastavením rolí vám pomůžeme v rámci implementace.
- **Bezpečnost vlastních zařízení** — počítače, telefony, ze kterých uživatelé
  do Twenty přihlašují, by měly mít aktuální systém, antivirus a uzamčení obrazovky.
  CRM je jen tak bezpečné, jako nejslabší zařízení připojené na něj.
- **Citlivé soubory zvlášť** — pokud do CRM nahráváte dokumenty s vysokou
  citlivostí (osobní zdravotní údaje, exekuce), uvažujte o aplikačním šifrování souborů
  před uploadem. S klienty v regulovaných oborech tohle nastavujeme nad rámec standardu.

:::

::::

## Co se stane při bezpečnostním incidentu

Plán pro špatný den — ne proto, že čekáme, že přijde, ale proto, že je profesionální mít ho připravený.

### 1. Detekce

Buď monitoring (Elestio plus náš dohled) zachytí anomálii — neobvyklý objem požadavků,
chybný stav databáze, pokus o průnik. Nebo nám incident nahlásíte vy či uživatel.

### 2. Izolace

Pokud je třeba, vyřadíme dotčenou komponentu (server, účet, integraci) z provozu, abychom
zamezili dalšímu šíření. U vyhrazeného serveru to znamená vypnutí konkrétní služby nebo
blokaci IP adresy — vaše ostatní agenda běží dál.

### 3. Informace pro vás (typicky do 24 hodin)

Bez zbytečného odkladu vám oznámíme: co se stalo, jaký rozsah dat se incidentu týká,
jaká je předpokládaná příčina a jaké kroky podnikáme. Toto je vstupní informace pro vaše
rozhodnutí, zda incident hlásit Úřadu pro ochranu osobních údajů.

### 4. Řešení a obnova

Záplata zranitelnosti, obnova ze zálohy (pokud je třeba), forenzní analýza příčiny.
Cílem je nejen zastavit incident, ale zajistit, aby se nemohl opakovat.

### 5. Vaše hlášení dozorovému úřadu (do 72 hodin)

Pokud byly dotčeny osobní údaje, podle GDPR (článek 33) máte jako správce povinnost
ohlásit incident Úřadu pro ochranu osobních údajů (ÚOOÚ) do 72 hodin od chvíle,
kdy jste se o něm dozvěděli. My vám předáme všechny technické podklady, které pro
hlášení potřebujete — co se stalo, kdy, kolika subjektů se to týká, jaké kategorie údajů,
jaká nápravná opatření.

### 6. Zpráva po incidentu

Po vyřešení dostanete písemnou zprávu — co se stalo, co jsme zjistili, co měníme do budoucna.
Žádné krytí, žádné mlžení.

::::sekce{pozadi="svetle"}

## Časté otázky k bezpečnosti

Co se nás opravdu ptají firmy, které před podpisem prochází bezpečnostní due diligence.

### Můžu si nechat kód Twenty nezávisle ověřit?

Ano. Twenty je open source pod licencí AGPL-3.0 — kompletní zdrojový kód je na
[github.com/twentyhq/twenty](https://github.com/twentyhq/twenty).
Vy nebo váš auditor si ho můžete stáhnout a projít. Naši konfiguraci serveru
(Docker compose, proměnné prostředí, vlastní úpravy) vám předáme jako součást
dokumentace nasazení.

### Co se stane s mými daty, když ukončíme spolupráci?

U vyhrazeného serveru jsou vaše data **vaše**. Dostanete plný export
(databázový dump v PostgreSQL formátu + složku souborů) plus návod, jak Twenty
rozjet u jiného poskytovatele nebo na vlastní infrastruktuře. Twenty je open source —
nikdo vás v něm nedrží. Konkrétní postup předání dat řešíme individuálně, ale princip
je jasný: nic vám nezůstává u nás.

### Můžete vy vidět naše data?

Technicky ano — pro správu serveru má naše technická role root přístup k operačnímu
systému. V rámci běžné správy do dat nesaháme; v případě potřeby (řešení chyby,
pomoc s exportem) jen po dohodě s vámi. Každé přihlášení k serveru se loguje;
DPA upravuje, kdy a jak smíme s daty nakládat. Pro klienty s nejvyšší citlivostí
umíme nasadit šifrování disku s klientskými klíči, kdy ani my data v klidu nevidíme.

### Nabízíte penetrační test?

Ano, na vyžádání. Domluvíme s vámi rozsah (jen Twenty / celý server / včetně sociálního
inženýrství) a kdo ho provede — buď s vámi spolupracující externí pen-tester,
nebo doporučíme partnera. Výstup z testu projdeme společně a nálezy zapracujeme.

### A co Twenty Cloud — co když ho chci?

V cloudu výrobce data spravuje americká Twenty Inc. na serverech AWS ve Frankfurtu podle vlastních
bezpečnostních postupů a DPA, viz [twenty.com/legal](https://twenty.com/legal).
Pro klienty pracující s osobními údaji (B2C, regulované obory, citlivé profese)
doporučujeme vyhrazený server — data zůstávají v EU pod naší správou.
Srovnání obou variant najdete na [stránce vyhrazený server vs cloud](/cloud-vs-selfhost/).

### Co když některý poskytovatel (Hetzner, Netcup, Elestio) zkrachuje?

Vaše data zůstanou vaše. Borg zálohy putují **do jiné lokace** než produkční
server — i kdyby celý jeden hosting přestal existovat, záloha žije v druhém datovém centru.
Pro maximální nezávislost na třetí straně směrujeme zálohy do **vašeho vlastního
S3 úložiště** (AWS S3, Hetzner, MinIO), kde nad nimi máte plnou kontrolu.
Migrace na jinou infrastrukturu je standardní disaster recovery scénář; pro klienty
v kritickém provozu ji periodicky nacvičujeme.

### Máte SLA na dostupnost služby?

Konkrétní procento dostupnosti (například 99,9 %) zatím nedáváme do paušálu — nemáme
ještě dost dlouhou historii vyhrazeného serveru, abychom se k tomu mohli odpovědně
zavázat. Pro klienty s konkrétními SLA požadavky umíme cíl smluvně dohodnout
individuálně a doplnit ho redundancí (zálohovaný server, monitoring s eskalací).

::::

::demo-cta

### Zdroje a datum ověření

Bezpečnostní fakta a certifikace stárnou — datacentra přicházejí a odcházejí, normy se aktualizují.
Stránku procházíme každé tři měsíce; pokud nějaký zdroj nesedí, napište nám a opravíme to.

**Datum poslední revize zdrojů:** 10. června 2026

- [Hetzner ISO/IEC 27001:2022 certifikát](https://www.hetzner.com/unternehmen/zertifizierung/)
- [Netcup certifikace (ISO 27001 / 27701 / 9001 / 14001)](https://www.netcup.com/en/about-netcup)
- [Elestio (SOC 2, ISO 27001, HIPAA, GDPR)](https://elest.io/)
- [Hetzner Object Storage](https://docs.hetzner.com/storage/object-storage/overview/)
- [Twenty CRM — role a oprávnění (česky)](https://docs.twenty.com/cs/user-guide/permissions-access/overview)
- [Twenty CRM — zdrojový kód na GitHubu](https://github.com/twentyhq/twenty)
