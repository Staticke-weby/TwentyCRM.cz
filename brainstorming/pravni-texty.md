# Právní texty pro web

> **Účel:** Texty pro povinné právní stránky webu twentycrm.cz, připravené k publikaci. Pokud při běžném provozu vznikne situace, kterou texty nepokrývají, doplníme operativně.
>
> **Stránky které texty pokrývají:**
> 1. Footer disclaimer (vždy viditelný)
> 2. Cookie policy + consent banner
> 3. Zásady zpracování osobních údajů (GDPR)
> 4. Všeobecné obchodní podmínky (VOP)

---

## 1. Footer disclaimer (na všech stránkách)

### Plný text (footer)

```
─────────────────────────────────────────────
twentycrm.cz | ESHOpino s.r.o. | IČO: 03223485 | DIČ: CZ03223485
Roháčova 145/14, 130 00 Praha 3

Twenty CRM je open-source software vyvíjený společností Twenty Inc.
pod licencí AGPL-3.0. Tato stránka NENÍ oficiálním zastoupením
Twenty.com — provozuje ji ESHOpino s.r.o., nezávislá česká agentura,
která Twenty CRM implementuje a spravuje pro klienty na českém trhu.

Sesterský brand: bohemiacrm.cz (Microsoft Power Platform / Model Driven Apps)

[Zásady zpracování osobních údajů] [Cookie policy] [Obchodní podmínky] [Kontakt]
─────────────────────────────────────────────
```

### Zkrácená verze (mobile / kompaktní footer)

```
twentycrm.cz | ESHOpino s.r.o. | IČO 03223485
Twenty CRM je open-source pod AGPL-3.0. Nejsme oficiální zastoupení Twenty.com.
[GDPR] [Cookies] [VOP] [Kontakt]
```

---

## 2. Cookie policy + consent banner

### Cookie consent banner (první návštěva)

```
🍪 Potřebujeme váš souhlas s cookies

Používáme nutné cookies pro fungování webu a volitelně analytické cookies
(Plausible — žádný Google, žádné sledování, žádné prodej dat třetím stranám).

[Souhlasím se vším] [Pouze nutné] [Nastavení →]
```

> **Doporučení k analytics:** **Plausible Analytics** (open-source, EU-hosted, žádné cookies podle některých výkladů — ověřit s právníkem). Alternativa: **Umami**. **Nepoužívat Google Analytics** — zbytečné GDPR komplikace + neodpovídá naší positioning „vlastnictví dat".

### Stránka `/cookies/`

```
# Cookie policy

Tato stránka vysvětluje, jaké cookies a podobné technologie používáme
na twentycrm.cz a proč.

## Co jsou cookies

Cookies jsou malé textové soubory, které web uloží ve vašem prohlížeči
při návštěvě. Slouží k zapamatování vašich preferencí, sledování návštěv
nebo měření výkonnosti webu.

## Jaké cookies používáme

### Nutné (vždy aktivní)
- **`twentycrm_session`** — udržuje stav vašeho prohlížeče během návštěvy
  (např. zda jste odsouhlasili cookies). Doba: 30 dní.
- **`twentycrm_consent`** — pamatuje vaše rozhodnutí o cookies. Doba: 365 dní.

### Volitelné (vyžadují váš souhlas)
- **Plausible Analytics** — anonymní statistiky návštěv (kolik lidí, ze kterých
  zemí, na které stránky chodí). Nepoužívá cookies pro identifikaci jednotlivců.
  Data jsou hostována v EU. Žádné sledování napříč weby, žádný profiling.

### Co NEpoužíváme
- ❌ Google Analytics
- ❌ Facebook Pixel / Meta tracking
- ❌ Reklamní cookies třetích stran
- ❌ Cookies pro re-marketing nebo retargeting

## Jak svůj souhlas změnit

Cookie banner můžete znovu otevřít kliknutím na odkaz „🍪 Cookies"
v patičce stránky. Odsouhlasené volby si můžete kdykoliv změnit.

V prohlížeči můžete cookies kdykoliv smazat — viz nápověda vašeho prohlížeče.

## Aktualizace této politiky

Tato politika může být občas aktualizována (např. když přidáme novou službu
nebo nástroj). Datum poslední aktualizace najdete na konci stránky.

Poslední aktualizace: [DATUM PUBLIKACE]
```

> Konkrétní názvy cookies a jejich životnost přizpůsobíme aktuálnímu stack řešení. Výše je orientační.

---

## 3. Zásady zpracování osobních údajů (GDPR)

### Stránka `/zasady-zpracovani-osobnich-udaju/`

```
# Zásady zpracování osobních údajů

ESHOpino s.r.o., IČO 03223485, se sídlem Roháčova 145/14, 130 00 Praha 3
(dále jen „my", „naše společnost"), provozuje webovou stránku
twentycrm.cz a poskytuje služby implementace a správy CRM systému Twenty.

V tomto dokumentu vysvětlujeme, jak zpracováváme osobní údaje, které
od vás dostáváme nebo o vás shromažďujeme.

## 1. Správce osobních údajů

ESHOpino s.r.o.
IČO: 03223485
Sídlo: Roháčova 145/14, 130 00 Praha 3
Kontakt: info@bohemiacrm.cz, +420 605 540 167

Pověřence pro ochranu osobních údajů (DPO) jsme nestanovili, protože
to pro naši velikost a charakter zpracování není povinné.

## 2. Jaké údaje a proč zpracováváme

### a) Údaje, které nám pošlete e-mailem nebo telefonicky
**Údaje:** jméno, e-mail, telefon, název firmy, popis vaší poptávky — jakékoliv údaje uvedete v e-mailu nebo na telefonu.
**Účel:** odpověď na vaši poptávku, příprava nabídky, předsmluvní jednání.
**Právní základ:** plnění smlouvy / předsmluvní jednání (čl. 6 odst. 1 písm. b GDPR).
**Doba uchování:** 24 měsíců od posledního kontaktu, pokud nedojde k uzavření smlouvy.

> Tato webová stránka **nemá kontaktní formulář.** Veškerá komunikace probíhá přes mailto: nebo tel: linky, které otevřou váš vlastní e-mail klient nebo dialer. Žádné údaje neukládáme přímo z webové stránky — vidíme je až ve chvíli, kdy nám e-mail / telefonát dorazí.

### b) Údaje klientů (po uzavření smlouvy)
**Údaje:** kontaktní údaje, fakturační údaje, technické údaje k provozu.
**Účel:** plnění smlouvy o implementaci a/nebo správě Twenty CRM.
**Právní základ:** plnění smlouvy + zákonné povinnosti (DPH, účetnictví).
**Doba uchování:** po dobu trvání smlouvy + 10 let pro daňové a účetní povinnosti.

### c) Údaje uložené v Twenty CRM klienta (zpracovatel)
Pokud pro klienta provozujeme Twenty CRM (selfhost), jsme **zpracovatel**
osobních údajů jeho zákazníků. Klient je správcem.

Vztahy zpracovatel-správce upravujeme samostatnou **Smlouvou o zpracování
osobních údajů (DPA)** uzavřenou před spuštěním provozu.

### d) Cookies a analytika
Viz [/cookies/](#).

## 3. Komu předáváme vaše údaje

Vaše údaje **neprodáváme ani neposkytujeme třetím stranám pro marketingové
účely.** Sdílíme je pouze:

- **Účetní firma** (zpracování fakturace) — DPA uzavřena
- **Provozovatel hostingu** pokud máte u nás Twenty Selfhost — DPA uzavřena
- **Plausible Analytics** (EU hosted) — anonymizovaná data o návštěvách
- **Twenty Inc.** pokud používáte Twenty Cloud — vy přímo, ne přes nás

V žádném případě nepředáváme údaje mimo EU bez vaší vědomosti.

## 4. Vaše práva

Máte právo:
- **Na přístup** — víte, jaké údaje o vás máme
- **Na opravu** — pokud jsou nepřesné
- **Na výmaz** („právo být zapomenut") — kde to není v rozporu s našimi
  zákonnými povinnostmi (např. archivace faktur 10 let)
- **Na omezení zpracování**
- **Na přenositelnost** — vaše údaje vám předáme ve strojově čitelném formátu
- **Vznést námitku**
- **Podat stížnost** u Úřadu pro ochranu osobních údajů (uoou.cz)

Pro uplatnění práv nás kontaktujte na **info@bohemiacrm.cz**. Reagujeme
do 30 dnů (často dříve).

## 5. Bezpečnost

Údaje uchováváme:
- Na **serverech v EU** (selfhost klientů, naše operativa)
- S **šifrováním v klidu i přenosu** (TLS 1.3, šifrované zálohy)
- S **přísnou kontrolou přístupu** — k údajům přistupují pouze osoby,
  které je potřebují pro plnění svého úkolu

V případě bezpečnostního incidentu vás informujeme do 72 hodin
(GDPR čl. 33–34).

## 6. Změny této politiky

Tuto politiku můžeme občas aktualizovat. Datum poslední změny:

**Datum poslední aktualizace:** [DATUM PUBLIKACE]
```

> **Před publikací doplnit:**
> - Konkrétní jména zpracovatelů (účetní firma, hosting provider)
> - Datum poslední aktualizace
> - Pokud změníme zpracovatele nebo přidáme nový analytický nástroj, stránku updatovat

---

## 4. Všeobecné obchodní podmínky (VOP) — base template

### Stránka `/obchodni-podminky/`

> Tyto VOP jsou připravené k publikaci. Konkrétní částku limitu odpovědnosti (§5) doplníme před publikací — typicky se odvozuje od ročního objemu zakázky nebo se stanoví fixní strop (např. 250 000 Kč). Reklamační mechanismus rozepisujeme stručně, detail řešíme s konkrétním klientem ve smlouvě.

```
# Všeobecné obchodní podmínky služby twentycrm.cz

Verze: 1.0  |  Účinnost: [DATUM PUBLIKACE]

## 1. Strany

**Poskytovatel:** ESHOpino s.r.o., IČO 03223485, se sídlem
Roháčova 145/14, 130 00 Praha 3 (dále „Poskytovatel", „my").

**Zákazník:** osoba, která uzavře s Poskytovatelem smlouvu o implementaci
a/nebo provozu Twenty CRM (dále „Zákazník", „vy").

## 2. Předmět služby

Poskytovatel poskytuje:

a) **Implementaci Twenty CRM** — analýza, návrh datového modelu,
   nasazení, konfigurace, školení, dokumentace. Cena 34 990 Kč
   bez DPH (jednorázově).

b) **Provoz Twenty Cloud** (Cloud retainer) — měsíční služby správy
   klientovy Twenty Cloud instance. **Twenty Cloud licenci si Zákazník
   hradí přímo společnosti Twenty Inc. (twenty.com).** Cena retaineru
   4 000 Kč / měs bez DPH.

c) **Provoz Twenty Selfhost** (Selfhost retainer) — měsíční služby
   provozu, údržby a drobných úprav Twenty na serveru Poskytovatele
   nebo Zákazníka. Cena 5 000 Kč / měs bez DPH. Twenty CRM software
   je open-source pod AGPL-3.0 a Zákazník za něj neplatí licenci.

d) **Vývojové a konzultační hodiny** nad rámec retaineru — 2 000 Kč/h
   bez DPH, případně přes SLA balíčky se slevou.

Cena všech služeb je v korunách českých, bez DPH. K cenám se připočítává
DPH dle platných sazeb.

## 3. Trvání smlouvy

Implementace je jednorázová.
Retainer (Cloud nebo Selfhost) se uzavírá na dobu neurčitou s tříměsíční
výpovědní dobou (libovolně z obou stran). První měsíc Selfhost retaineru
je zdarma jako součást implementace.

## 4. Vlastnictví dat

a) **Cloud:** Data Zákazníka uložená v Twenty Cloud jsou ve správě
   Twenty Inc. dle jejich smluvních podmínek. Poskytovatel k nim
   přistupuje pouze v rámci poskytovaných služeb.

b) **Selfhost:** Data Zákazníka uložená v Twenty Selfhost instanci
   jsou **vlastnictvím Zákazníka**. Poskytovatel k nim přistupuje
   pouze v nezbytné míře pro plnění smlouvy.

V obou případech Poskytovatel **neprodává ani jinak komerčně nevyužívá**
data Zákazníka.

## 5. Odpovědnost

Poskytovatel odpovídá za škodu způsobenou porušením smlouvy do výše
[X] Kč nebo do výše ročního objemu plnění (podle toho, co je nižší).

Poskytovatel **neodpovídá** za:
- Výpadky způsobené třetí stranou (Twenty Inc. v Cloud režimu, hosting
  provider Zákazníka)
- Ztrátu dat způsobenou jednáním Zákazníka (např. smazání záznamů)
- Nepřímé škody, ušlý zisk
- Funkce Twenty CRM, které Twenty Inc. nedodá podle své roadmapy

## 6. Twenty CRM jako produkt třetí strany

a) Poskytovatel **není** výrobcem ani vlastníkem Twenty CRM. Twenty CRM
   je open-source produkt společnosti Twenty Inc., dostupný pod licencí
   AGPL-3.0.

b) Poskytovatel **není** oficiálním zastoupením, partnerem ani resellerem
   Twenty Inc.

c) Poskytovatel je **nezávislá implementační agentura**, která Twenty
   přizpůsobuje a provozuje pro Zákazníka.

d) Aktuální podmínky Twenty Inc. (Cloud cena, AGPL licence) najdete na
   twenty.com a github.com/twentyhq/twenty.

## 7. Reklamace a podpora

Reklamace zasílejte e-mailem na **info@bohemiacrm.cz**. Reagujeme do
1 pracovního dne. Detail reakčních dob a SLA balíčků viz `/cenik/`.

## 8. Mlčenlivost

Obě strany se zavazují k mlčenlivosti ohledně neveřejných informací,
o kterých se v rámci spolupráce dozví. Mlčenlivost trvá i po skončení
smlouvy.

## 9. Závěrečná ustanovení

Tyto podmínky se řídí právním řádem České republiky. Případné spory
budou řešit věcně příslušné soudy v České republice.

Aktualizace VOP zveřejňujeme na této stránce s datem účinnosti.
Stávajícím Zákazníkům změny oznamujeme e-mailem alespoň 30 dní předem.

Poslední aktualizace: [DATUM PUBLIKACE]
```

> **Před publikací doplnit:**
> - Konkrétní částka limitu odpovědnosti (§5) — doporučení 250 000 Kč nebo roční objem
> - Datum účinnosti
>
> Operativní doplnění (smlouvy s konkrétními klienty řeší detail):
> - Konkrétní SLA reakční doby per balíček (Basic / Standard / …)
> - Specifika pro konkrétní typy služeb (Cloud správa vs. Selfhost provoz)
> - Reklamační konkretika dle individuálního případu

---

## 4b. Doplněk k disclaimeru — vizuální prominence

⚠️ **Důležité s ohledem na dodané logo:**

Logo prominentně používá wordmark **„TWENTY CRM"** (viz `design-principy.md` sekce 0). To je silná vizuální asociace s produktem Twenty Inc. **Z toho plyne**, že disclaimer „nejsme oficiální zastoupení Twenty.com" musí být **vizuálně viditelný**, nejen technicky přítomný v patičce.

**Kde a jak vidět:**

1. **Footer — vždy** na každé stránce, čitelné `--ink` na světlém pozadí, **ne v jemné šedé**, ne menší než 14px.
2. **`/o-nas/` stránka** — explicitní sekce „Kdo jsme a kdo nejsme" s jasným vysvětlením vztahu k Twenty Inc.
3. **`/obchodni-podminky/` článek 6** — Twenty CRM jako produkt třetí strany (formálně potvrzeno).
4. **Při jakémkoliv prominent claimu o Twenty featuře** — drobné odkazy na zdroj (twenty.com, github) nebo přímou citaci.

**NEpřípustné:**
- ❌ Disclaimer hlubokým šedým textem v patičce, kterou nikdo nepřečte
- ❌ Vynechání disclaimer u case studies / testimonials, které by mohly vypadat jako Twenty oficiální reference
- ❌ Použití fráze „oficiální český Twenty partner" / „autorizovaný Twenty implementátor" — neexistuje takový status

---

## 5. Disclaimer formulace pro různé kontexty

### Footer (vždy viditelný)
> „Twenty CRM je open-source pod AGPL-3.0. Tato stránka NENÍ oficiálním zastoupením Twenty.com."

### About / O nás stránka (delší formulace)
> „Jsme **nezávislá česká agentura**, která Twenty CRM implementuje a spravuje. Nejsme tvůrci Twenty ani jejich oficiální partner — jsme implementační agentura, která vám Twenty postaví na míru, převede data a postará se o provoz. Twenty CRM vyvíjí společnost Twenty Inc. pod open-source licencí AGPL-3.0; aktuální podmínky najdete na [twenty.com](https://twenty.com)."

### Marketing CTA / sales kontext (krátká forma)
> „Český implementátor Twenty CRM"

### Email patička / smlouva (formální)
> „ESHOpino s.r.o. (IČO 03223485) — nezávislá agentura specializující se na implementaci Twenty CRM. Twenty CRM je produkt společnosti Twenty Inc. (USA), používaný pod licencí AGPL-3.0."

---

## 6. Konkrétní akční položky před publikací webu

| Úkol | Kdo | Stav |
|---|---|---|
| Doplnit konkrétní zpracovatele (účetní firma, hosting provider) v GDPR textu | tým | TODO |
| Doplnit limit odpovědnosti (částka v VOP §5) | tým | TODO |
| DPA (Data Processing Agreement) šablona pro klienty s naším provozem | tým | TODO |
| Volba analytics tool — locknuto na **Plausible** (privacy, EU-hosted) | — | ✅ |
| Cookie banner UI implementace | stack vývoj | TODO |
| Datum publikace všech 3 právních stránek | tým | TODO |

---

## Poznámky pro implementaci

- **Cookie banner** musí být **opt-in** (ne pre-checked), GDPR/ePrivacy
- **Souhlas** musí být **specifický a oddělitelný** (zvlášť souhlas s nutnými, zvlášť s analytickými)
- **Možnost odvolat souhlas** musí být **stejně snadná jako dát souhlas**
- **Data subject requests** (žádosti o výmaz, přístup) — připravit interní proces a šablonu odpovědi
- **Breach response plán** — připravit kontakty a postup pro případ incidentu
