# Den s Twenty — storytelling pro 4 persony

> **Účel:** Ukázat hodnotu Twenty + naší implementace **konkrétně, ne abstraktně**. Klient se musí poznat v jedné z postav („přesně takhle to u nás vypadá"). Storytelling odbloku empatii a urychlí konverzi.
>
> **Umístění na webu:** sekce na `/pro-servisni-firmy/` (collapsed accordion „Den dispečerky / technika / majitele / účetní" → uživatel rozklikne tu, která ho zajímá), nebo jako dedicated stránka `/jak-to-vypada-v-praxi/`.
>
> **Forma:** Krátký scénář (~200 slov), 1. osoba nebo třetí osoba podle preference. Konkrétní jména a čísla. Žádné generické „Manager Mary" — používáme česká jména a reálné situace.
>
> **Tón:** Lehký, ne marketingově nablýskaný. Jako kdyby kolega vyprávěl, jak to u nich teď funguje.

---

## 1. Den dispečerky Lenky 📋

> **Lenka, dispečerka** v servisní firmě klimatizace s 8 techniky. Před Twenty: Excel, Outlook, papírky, stálé volání techniků.

**7:30** — Otevřu **Twenty na laptopu**. Vidím Kanban view *„Zakázky pro dnešek"*. Jakub má v terénu 3 výjezdy, Pavel 2, Honza nemocný. Přesouvám 1 Honzův výjezd na Pavla — drag-and-drop.

**8:15** — Volá pan Novák z Fitness centra Karlín. *„Dobrý den, klima v sále nefouká chladně."* Otevírám kartu klienta — vidím že **má 4 jednotky**, naposledy servis 14 měsíců zpátky, F-plyn revize prošla minulý týden. Říkám: *„Pošlu Pavla, je 20 min od vás."*

Vytvořím novou Zakázku, propojím se zařízením v sále, přiřadím Pavlovi → on dostane notifikaci do mobilu.

**10:30** — V Twenty vidím že workflow „Plán revizí" upozornil, že u **3 klientů máme F-plyny revize do konce měsíce.** Generuju naplánované zakázky, pošlu klientům automatický e-mail s návrhem termínu. Stačí mi 4 minuty.

**14:00** — Pavel skončil ve fitku, vyplnil zakázku v mobilu (PWA), nahrál fotku staré filtru, podepsal pan Novák tabletem. Vidím **dokončenou zakázku v Twenty**, hodiny i materiál jsou tam, fakturantka má podklad připravený.

**16:00** — Chystám zítřek. Vidím vytíženost techniků v dashboardu: Jakub 6h, Pavel 7h, ostatní méně. Tři výjezdy ještě k naplánování. Přesouvám.

**Co se nestalo dnes:**
- ❌ 12 telefonátů technikům „kde jsi, kdy můžeš?"
- ❌ Hledání kontaktu klienta v Outlooku
- ❌ Přepisování ze Excelu do Outlooku do Excelu
- ❌ „Nevíme, kdy byla minulá revize" — kontext máme vždy

> *„Konec držení firmy v hlavě. Když budu nemocná, kolegyně vidí všechno co dělám já."*

---

## 2. Den technika Pavla 🔧

> **Pavel, technik** na výjezdu, certifikovaný F-plynařů, 8 let praxe. Před Twenty: papírové zakázkové listy, večerní vyplňování v autě, ztrácí se mu papíry.

**7:00** — Otevírám **Twenty na telefonu** (nainstalované jako appka z prohlížeče). Vidím *Mé dnešní výjezdy*: 3 zakázky, GPS adresy, kontakty na klienty.

**8:30** — Příjezd do Fitness Karlín. Klepnu na zakázku, **vidím historii klimatizace** (Daikin 5kW, instalace 2022-08, poslední servis 2024-11, naposledy řešen kondenzátor). *Aha, takže určitě nebude problém v elektrice — to bych viděl v historii.*

**9:15** — Diagnóza: zanesený filtr a nízký tlak chladiva. Foto starého filtru → přímo do Twenty zakázky (PWA umí fotoaparát). Doplním materiál (filtr ABC, R32 250g), vykázané hodiny (1.5h).

Pan Novák podepíše tabletem. Zakázka uzavřená, **dispečerka i fakturantka už mají všechno**.

**10:30** — Druhý výjezd — bytový dům, plánovaná revize F-plynů. Twenty mi ukáže předchozí 2 revize, vidím kolik chladiva, jaký servisní kontakt. Zaškrtnu pole *„Revize OK, vše v normě"*, generuje se mi PDF revizní zpráva. Klient ji dostane e-mailem, archivovaná v Twenty.

**13:00** — Třetí výjezd, reklamace v záruce. Otevřu kartu klienta — **vidím že záruka platí ještě 4 měsíce.** Bezstarostně provedu opravu, klient nebude platit.

**Co se nestalo dnes:**
- ❌ Hledání papírové dokumentace z minula („kdo to dělal naposled?")
- ❌ Volání do firmy „Lenko, je to v záruce?"
- ❌ Večerní 2 hodiny vyplňování zakázkových listů z bloku
- ❌ Ztracený zakázkový list z auta

> *„V mobilu mám historii každého stroje. Klient vidí, že vím o čem mluvím — ne že přijíždím slepý."*

---

## 3. Den majitele Marka 👔

> **Marek, jednatel** servisní firmy 12 lidí. Před Twenty: vidí jen faktury a stížnosti, na všechno se musí ptát.

**8:00** — Otevírám **Twenty dashboard**. Bez ptání vidím:
- 📈 **Pipeline za měsíc:** 42 zakázek probíhá, hodnota ~ 380 000 Kč
- ⚠️ **Reklamace v záruce:** 3 otevřené, žádná po termínu
- 📅 **Vytíženost techniků:** Jakub 95 %, Pavel 85 %, ostatní < 70 % — můžeme přijímat víc zakázek
- 💰 **Předpokládaný měsíční obrat:** trakuje se podle dokončených zakázek

**9:30** — Volá kámoš Petr, jiný majitel HVAC firmy. Ptá se: *„Jak řešíš revize F-plynů? My to máme v Excelu, je to peklo."* Říkám mu — **z Twenty vidím v sekundě, kolik mám otevřených revizních termínů příští 3 měsíce, kdo má jakou certifikaci, jaký objem chladiv jsme letos uplatnili.** Ohlášení do registru je workflow, dispečerka kliknutím vyřeší.

Petr říká: *„To zní moc dobře. Nepošli mi kontakt na vaši IT firmu?"*

**14:00** — Schůzka s účetním. Vidíme **přehled fakturovaných zakázek za měsíc**, čerpání paušálních smluv u 3 stálých klientů, neuzavřené zakázky (sales pipeline → splatnost). Účetní říká: *„Tady všechno sedí, nemusím nic dohledávat."*

**17:00** — Premýšlím o expanzi. Twenty není jen CRM — **až přidáme HR (nábor 2 nových techniků v Q3) nebo skladovku (chceme držet zásobu chladiv), nemusíme kupovat další software**. Naše implementační agentura mi říkala, že rozšíříme Twenty o další moduly tak, jak rosteme.

**Co se nestalo dnes:**
- ❌ Mailové dotazy „pošli mi reporty za minulý měsíc"
- ❌ Pocit, že nevím, co se ve firmě děje
- ❌ Nákup další SaaS aplikace na to, co Twenty zvládne

> *„Mám čísla i historii v jedné aplikaci. A když přijde čas přidat HR, nezačínám od nuly."*

---

## 4. Den účetní Heleny 💼

> **Helena, externí účetní** pro servisní firmu, 1× týdně dochází na 4 hodiny. Před Twenty: hledání papírů, dotazy na techniky, půlka chyb na fakturách jsou její překlepy.

**9:00** — Otevírám **Twenty s rolí „Účetní"** — vidím jen to, co se mě týká: *Dokončené zakázky k fakturaci, smluvní paušály, podklady pro DPH.*

Vidím **filtr „K fakturaci za uplynulý týden"** — 18 zakázek. Klikám na první.

**9:15** — Zakázka u Fitness Karlín: 1.5h Pavla, 1× filtr, 250g R32. Cena už spočítána (sazba × hodiny + materiál × ceník). DPH automaticky. **Žádné překlepy z papírového výkazu.**

Exportuji všech 18 zakázek do CSV → import do Pohody (Twenty workflow + HTTP Request to Pohoda API by to uměl ještě nativněji, ale pro začátek nám stačí export). Faktura vystavena, odeslána klientovi e-mailem.

**11:00** — Marek (majitel) se ptá: *„Heleno, kolik máme v paušálu Tatry tento měsíc?"* Otevřu kartu Smlouvy → **vidím čerpání 67h ze smluvních 80h**. Říkám během 5 sekund.

**14:00** — Kontrola DPH za kvartál. Filtruju zakázky kde DPH platí my, kde reverse-charge. Twenty má všechno správně označené technikem na zakázce, exportuju report. **Žádná hodina dohledávání podkladů.**

**Co se nestalo dnes:**
- ❌ Dotazy na techniky „kolik jsi měl hodin?"
- ❌ Překlepy z papírového výkazu
- ❌ Hledání kdo má které smluvní paušály
- ❌ Telefonáty „pošli mi to ještě jednou, ztratil jsem to"

> *„Polovina mé práce byla dohledávání podkladů. To už neřeším — Twenty má všechno na svém místě."*

---

## Web prezentace storytellingu

### Varianta A — Accordion na `/pro-servisni-firmy/`

```
[👔 Den majitele     ▼]  → klepnutím rozbalí story
[📋 Den dispečerky   ▼]
[🔧 Den technika     ▼]
[💼 Den účetní       ▼]
```

**Výhoda:** kompaktní, uživatel klikne jen na svou roli.
**Nevýhoda:** nezíská to SEO traffic na konkrétní role.

### Varianta B — Dedicated stránka `/jak-to-vypada-v-praxi/`

Plná stránka s 4 sekcemi pod sebou. Každá sekce má vlastní H2 a kotvu. SEO benefit (delší obsah, sémantická hierarchie).

### Varianta C (doporučená) — kombinace

- Na `/pro-servisni-firmy/` účet zkrácenou verzi (1 odstavec per persona) jako accordion
- Plná verze na samostatné `/jak-to-vypada-v-praxi/` linkované z accordion sekce

---

## Pravidla pro storytelling (pokud rozšíříme)

1. **Konkrétní jména** (Lenka, Pavel, Marek, Helena) — ne abstraktní role
2. **Konkrétní čísla** (1.5h, 250g R32, 12 lidí) — důvěryhodnost
3. **Konkrétní firmy** (Fitness Karlín, Tatra Trucks) — pozor na **fiktivní** vs. reálné názvy. Doporučení: **fiktivní + bezpečné** (Fitness Karlín = generic, není reálná firma; Tatra Trucks JE reálná, ale jen ilustrativně). Pokud chceme být ultra-bezpeční: použít zcela vymyšlená jména.
4. **Tón:** lidský, ne korporátní. Mluvíme jako kolega, ne jako brožura.
5. **„Co se nestalo dnes"** — stylistický prvek pro důraz na bolesti, které jsme odebrali.
6. **Závěrečná citace v 1. osobě** — 1 věta.

---

## Co schválně NEpíšeme

- ❌ „Twenty CRM transformoval naši firmu" (overkill, zní fake)
- ❌ Přesné dollar úspory („ušetřili jsme 250 000 Kč ročně") — bez sourced reference je to vágní claim
- ❌ Velké příběhy o digitální transformaci — držíme se jednoho dne, jednoho úkolu, jednoho efektu
