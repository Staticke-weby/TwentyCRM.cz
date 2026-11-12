# Příloha k DPA — Sub-zpracovatelé (vzor)

> **Co to je:** Rezervní dokument. Vzor jednostránkové přílohy ke smlouvě o zpracování osobních údajů (DPA), kterou **vytáhneme jen tehdy, když si o ni klient sám řekne** (typicky vyšší corporate v due diligence). Říká, kdo se na provozu jeho dat technicky podílí — bez zbytečného právního drobnopisu.
>
> **Default je faktura, ne DPA.** S většinou SMB klientů provoz funguje na základě **faktury** (smluvní vztah dle Občanského zákoníku). Na žádost klienta podepisujeme **NDA** jako základ formálního závazku k mlčenlivosti — to drtivé většině SMB klientů stačí. **DPA + tato příloha** přichází na řadu, až když klient nebo jeho právník v rámci compliance kontrol explicitně chtějí GDPR sub-zpracovatelskou strukturu na papíře. Nevnucujeme ji.
>
> **Cílovka:** SMB klient (5–50 lidí), který se ptá. Musí to být přečitelné na 2 strany A4. Žádné zastrašování, žádné dvoustránkové GDPR odstavce.
>
> **Verze vzoru:** 1.0 | **Datum:** 10. června 2026

---

# Příloha č. 1 — Seznam sub-zpracovatelů

## ke Smlouvě o zpracování osobních údajů (DPA)

mezi

**Klientem:** [Obchodní firma], IČO [—], se sídlem [—] (dále „Klient")

**Poskytovatelem:** ESHOpino s.r.o., IČO 03223485, Roháčova 145/14, 130 00 Praha 3 (dále „my" / „Poskytovatel")

---

## Stručně

Vaše data v Twenty CRM zpracovává **vyhrazený server v Německu** pod naší správou. K technickému provozu využíváme tři zavedené evropské poskytovatele — všechny s mezinárodními certifikacemi a smlouvami podle GDPR. Vaše data nikdy neopouštějí EU.

| # | Sub-zpracovatel | Co dělá | Kde leží data | Hlavní certifikace |
|---|---|---|---|---|
| 1 | **Hetzner Online GmbH** (Německo) | Server + úložiště souborů a záloh (S3-kompatibilní Object Storage) | Norimberk nebo Falkenstein (DE); Helsinki (FI) volitelně pro zálohování na míru | ISO/IEC 27001:2022 |
| 2 | **netcup GmbH** (Německo) — *jen pokud zvolíte tuto variantu* | Server (alternativa k Hetzneru) | Norimberk (DE); sídlo Karlsruhe | ISO/IEC 27001 + 27701 + 9001 + 14001 |
| 3 | **Elestio** (Belgie/EU) | Orchestrace serveru — instalace, aktualizace OS, firewall, denní šifrované zálohy, monitoring 24/7 | EU region | SOC 2, ISO/IEC 27001, GDPR |

Doplňující informace o každém poskytovateli a jejich smlouvy o ochraně osobních údajů najdete na: hetzner.com/legal, netcup.com/legal, elest.io/legal.

---

## Kdo za co odpovídá

**Poskytovatelé (Hetzner, netcup, Elestio)** odpovídají za infrastrukturu — fyzickou bezpečnost, dostupnost serveru, aktualizace operačního systému, infrastrukturní opatření podle svých certifikací.

**My (ESHOpino)** odpovídáme za nastavení Twenty CRM, správu přístupů z naší strany, koordinaci se sub-zpracovateli, řešení incidentů a komunikaci s Klientem. Reagujeme v běžné **pracovní době (po–pá 8:00–17:00, mimo svátky)**. Mimo pracovní dobu, o víkendech a o svátcích reagujeme nejpozději následující pracovní den. Automatický monitoring infrastruktury běží 24/7 (technickou eskalaci řeší Elestio podle své smlouvy); lidská reakce z naší strany je v pracovní době.

**Klient** odpovídá za uživatele Twenty CRM — silná hesla, vícefaktorové ověření, role a oprávnění, správu odchozích zaměstnanců, obsah, který do CRM ukládá.

Detailní popis bezpečnostních opatření najdete na **twentycrm.cz/bezpecnost/**.

---

## Změna sub-zpracovatele

Sub-zpracovatele můžeme vyměnit nebo přidat (typicky kvůli zlepšení služby nebo když poskytovatel ukončí službu). O změně Klienta písemně informujeme **30 dní předem**. Pokud Klient s konkrétní změnou nesouhlasí, může smlouvu vypovědět s 30denní výpovědní dobou bez sankce.

Pokud Klient námitku v 30denní lhůtě neuplatní, považuje se změna za schválenou.

---

## Když se něco pokazí — kdo to nese

V praxi se v SMB segmentu velké incidenty nestávají. Tato sekce je tu pro férové rozdělení rizika, kdyby přesto došlo:

(1) **Strop naší odpovědnosti.** Naše souhrnná odpovědnost za škodu z této přílohy a DPA je omezena částkou **60 000 Kč** (odpovídá dvanácti měsíčním odměnám za provoz vyhrazeného serveru ve výši 5 000 Kč/měs bez DPH).

(2) **Odpovědnost sub-zpracovatelů.** Pokud škodu způsobí sub-zpracovatel (Hetzner, netcup, Elestio), naše odpovědnost vůči Klientovi je omezena na to, co se nám podaří získat zpět od sub-zpracovatele na základě naší smlouvy s ním. Sub-zpracovatelé jsou zavedení evropští poskytovatelé s vlastními limity odpovědnosti, které nemůžeme jednostranně měnit.

(3) **Co neovlivníme.** Neneseme odpovědnost za škody způsobené:
- jednáním Klienta nebo jeho uživatelů (slabá hesla, sdílení přístupů, nahrání nesprávného obsahu),
- výpadky internetu nebo služeb třetích stran mimo sub-zpracovatele uvedené v této příloze,
- zásahem veřejné moci nebo vyšší mocí (živelní pohroma, kybernetický útok rozsahem překračující obvyklá opatření, válečný konflikt),
- užitím Twenty CRM v rozporu s instrukcemi nebo dokumentací výrobce.

(4) **Pokuty od dozorového úřadu.** Pokuta uložená Klientovi (jako správci) podle čl. 83 GDPR jde k tíži Klienta. Pokud byla pokuta uložena výhradně v důsledku našeho hrubého porušení povinností podle DPA, podílíme se na ní úměrně našemu zavinění, vždy však jen do limitu podle odstavce 1.

---

## Související dokumenty

- Hlavní smlouva o zpracování osobních údajů (DPA) mezi Klientem a Poskytovatelem
- Smlouva o poskytování služeb mezi Klientem a Poskytovatelem
- Veřejné podmínky sub-zpracovatelů: hetzner.com/legal, netcup.com/legal, elest.io/legal
- Naše zásady zpracování osobních údajů: twentycrm.cz/zasady-zpracovani-osobnich-udaju/
- Náš popis bezpečnostního přístupu: twentycrm.cz/bezpecnost/

---

## Datum účinnosti a podpisy

**Datum účinnosti:** [DD. MM. YYYY] **·** **Verze:** [1.0]

Tato příloha nahrazuje veškeré předchozí přílohy se stejným předmětem.

### Za Klienta

Jméno a funkce: …………………………………………

Podpis: ………………………………………… Datum: ………………

### Za Poskytovatele

Petr Baloun, jednatel · ESHOpino s.r.o.

Podpis: ………………………………………… Datum: ………………

---

# Poznámky pro interní použití (NEPATŘÍ DO PODEPISOVANÉ VERZE)

## Eskalační schéma — kdy co podepisujeme

| Klient chce | My dáme |
|---|---|
| Nic explicitního | Faktura. Smlouva = ústní + dílčí e-maily. Pro většinu SMB stačí. |
| „Potřebujeme NDA" | Krátkou NDA (mlčenlivost oboustranně). Naprostá většina formálních klientů s tímhle skončí. |
| „Pošlete DPA" / due diligence | Hlavní DPA + tato příloha. Až teď. |
| „Plný audit, vlastní text DPA" | Vyšší corporate. Posíláme jejich text na revizi advokátovi (extra náklad fakturujeme). |

## Tahy, kvůli kterým je tahle verze pro nás příznivá

1. **Fixní strop 60 000 Kč** (§ odst. 1) — odvozeno z 12 × 5 000 Kč Selfhost retainer. Pevné číslo, žádný „cap dle ročního objemu" který by mohl s velkým klientem vystřelit nahoru. Naproti tomu Cloud klient s nižším retainerem 3 990 Kč/měs by mohl argumentovat nižším capem (~47 880 Kč), což je pro nás stále výhodné — fixní 60 000 Kč je strop, ne floor.
2. **Back-to-back na sub-zpracovatele** (§ odst. 2) — nepřebíráme odpovědnost za to, co Hetzner/Netcup/Elestio nepokryjí ve svých vlastních smlouvách. Hetzner cap je dle jejich VOP cca 50–100 € nebo měsíční poplatek — to je naše reálná páka.
3. **Výjimky z naší odpovědnosti** (§ odst. 3) — slabá hesla klienta, výpadek internetu, vyšší moc, použití v rozporu s dokumentací. Toto pokrývá ~95 % reálných incidentů, které se v SMB segmentu dějí.
4. **GDPR pokuta** (§ odst. 4) — pokuta jde za klientem jako správcem; my se podílíme **jen úměrně** a **jen při hrubém porušení**, vždy do stejného capu.
5. **Reakční doba v pracovní době** — žádný 24/7 závazek, žádné víkendy. SMB klient to očekává; sami se v tom neutopíme.
6. **Rezervní dokument, ne defaultní** — tahle příloha přichází na stůl jen tehdy, když si klient explicitně řekne. Většina SMB nás nikdy nepoprosí.

## Co jsme vědomě vypustili z původního dlouhého vzoru

- Detail TOM (čl. 32) per sub-zpracovatel → nahrazeno odkazem na bezpecnost stránku a na podmínky sub-zpracovatelů
- Detailní seznam kategorií subjektů a kategorií údajů per sub-zpracovatel → patří do hlavní DPA, ne do přílohy
- Sekci o Hetzner Object Storage šifrování at-rest → klient SMB to neřeší; přidává složitost
- Sekci o Twenty Cloud variantě → pokud klient zvolí Cloud, dělá se jiná, jednodušší příloha (ESHOpino není sub-zpracovatel)
- Audit ustanovení → patří do hlavní DPA, ne sem; klient ho prakticky nikdy nevyužije

## Když to klient bude chtít rozvést

Pokud klient v due diligence chce víc detailu (vyšší corporate, banka, regulovaný obor), **pošleme odkazy** — nereexportujeme veřejné dokumenty:
- AVV/DPA a aktuální ISO certifikáty Hetzneru: **hetzner.com/legal** + **hetzner.com/unternehmen/zertifizierung**
- AVV a certifikáty netcup: **netcup.com/legal** + **netcup.com/en/about-netcup**
- DPA a compliance Elestio: **elest.io/legal**
- Náš popis vrstev ochrany: **twentycrm.cz/bezpecnost/**

Náš čas šetříme: klient si veřejné dokumenty zvládne najít sám, my mu jen ukážeme kam. Posíláme dál jen to, co veřejně dostupné není (např. konkrétní datum našeho podpisu AVV) — a to po písemné žádosti.

## Před prvním podpisem ověřit

| Položka | Stav |
|---|---|
| Přesný název Elestio (SRL / SAS / N.V.) | ⚠️ ověřit u elest.io/legal |
| Hetzner AVV cap dle jejich VOP — sladit s naším § odst. 2 | ⚠️ stáhnout aktuální VOP |
| Netcup AVV cap — totéž | ⚠️ |
| Elestio DPA cap — totéž | ⚠️ |
| Šablonu před prvním reálným podpisem proběhnout advokátem (jednorázově) | ⚠️ |

## Pokud klient chce „bez limitu odpovědnosti"

Limit 12 měsíců odměny **nevyjednáváme směrem dolů, ale nahoru** (nikdy ne neomezený). Pokud klient trvá na vyšším limitu:
- Návrh: cap zvýšíme za příplatek (např. cap 500 000 Kč → +1 000 Kč/měs k retaineru jako přirážka za pojištění)
- Alternativně: klient si zařídí vlastní pojištění kybernetického rizika a my mu poskytneme technickou součinnost

## Verze

- **1.0** (2026-06-10) — první draft, lean SMB verze. Předchozí verze (dlouhá 500řádková) zahozena.
