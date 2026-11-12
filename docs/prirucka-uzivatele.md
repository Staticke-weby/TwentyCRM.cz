# Příručka pro uživatele

Systém pro správu servisních zakázek. Příklady v této příručce používají fiktivní firmu **Kávový Servis Brno s.r.o.**, která prodává a servisuje kávovary po brněnských kavárnách, kancelářích a hotelích.

---

## Obsah

1. Co tento systém umí
2. Jak se v systému pohybovat
3. Klienti, místa, zařízení a servisní plán
4. Nabídky pro klienta
5. Plánování výjezdů
6. Práce v terénu — technik
7. Zakázka je hotová — co dál
8. Dashboardy a přehledy
9. Když se něco zasekne

---

## 1. Co tento systém umí

Systém vidí na jednom místě **kdo jsou vaši klienti, jaké mají kávovary, kdo má kdy výjezd, kolik se odpracovalo a co účtujete**. Místo papírů, Excelů a SMS si vše zapíšete do jedné databáze a každý ve firmě (operátor, technik, vlastník) vidí to, co potřebuje.

### Jak věci do sebe zapadají

```
Klient (firma)
    └── Místo (pobočka)
            └── Kávovar (zařízení)
                    └── Servisní plán (každoroční prevence)
                            ↓
                          Zakázka (celá akce, např. „roční servis Brnokafé")
                                ↓
                              Výjezd (jedna návštěva u klienta)
                                    ↓
                                  Výkaz (co technik na výjezdu udělal)
                                        ↓
                                      Nabídka / Faktura
```

Číst odshora dolů: **Klient má místa, místa mají kávovary, kávovary mají servisní plán. Plán vytvoří zakázku, k zakázce naplánujete výjezd, technik z výjezdu vyplní výkaz, podle výkazů vystavíte fakturu.**

### Co systém **neumí**

- Posílat e-maily klientovi sám (musíte si exportovat PDF a poslat ručně).
- Vést účetnictví — pouze připravuje podklady pro fakturaci, faktury vystavujete v účetním systému.
- Nahrávat fotky kávovaru přímo z fotoaparátu — fotku si nejdřív uložte v telefonu, pak nahrajete jako přílohu.

> 💡 **Tip:** Když nevíte, kde začít, otevřete si nejdřív **Dashboard** podle své role (Technik / Operátor) — vidíte tam přehled toho, co vás čeká.

---

## 2. Jak se v systému pohybovat

### Levé menu

Po přihlášení vidíte vlevo svislé menu. Co kde je:

| Položka | K čemu slouží |
|---|---|
| 🏠 **Přehled pro Technika / Operátora** | Váš dashboard — co vás dnes čeká |
| 👥 **Klienti** | Seznam všech firem, které servisujete |
| 👤 **Kontaktní osoby** | Lidé u klientů (paní Nováková z Brnokafé) |
| 📋 **Zakázky** | Všechny servisní akce (probíhající i hotové) |
| 💰 **Nabídky** | Cenové návrhy pro klienty |
| 🚗 **Výjezdy** | Jednotlivé návštěvy u klientů |
| ☕ **Zařízení** | Kávovary u klientů |
| 📍 **Místa** | Pobočky klientů |
| 📐 **Pravidla zakázek** | Automatické plány servisu |

### Vyhledávání

Stisknete **Ctrl + K** (Mac: Cmd + K). Otevře se vyhledávací okno přes celou obrazovku. Napíšete třeba "Brnokafé" a najdete klienta, jeho kávovary, zakázky i nabídky.

### Seznam vs. detail

- **Seznam** (např. Klienti) = tabulka všech záznamů. Kliknete na řádek → otevře se detail.
- **Detail** = jedna konkrétní firma. Nahoře jsou taby (Domů, Související, Historie, …). Domů = základní pole; Související = další záznamy navázané na klienta (nabídky, kávovary, místa).

### Co vidí Operátor a co Technik

Systém má **role** — podle role vám zobrazí jen to, co potřebujete.

- **Operátor (dispečer):** vidí všechno — klienty, zakázky, nabídky, plánuje výjezdy.
- **Technik (terénní pracovník):** vidí především svůj dashboard a své výjezdy. Klienty a zakázky vidí jen pro čtení.
- **Admin (vy nebo majitel):** vidí vše a může měnit nastavení.

> 💡 **Tip:** Pokud někdo říká "nevidím tam tlačítko" — nejčastěji je to tím, že je v jiné roli než vy. Ozvěte se nám na podporu.

---

## 3. Klienti, místa, zařízení a servisní plán

> 📝 *Revize sekce: 2026-05-22 — verze systému 1.14.259*

Klient = firma, která má nainstalovaný kávovar a chce po vás servis. Typicky kavárna, kancelář, hotel.

Klient má jednu nebo víc **poboček** (Míst), v každé může být **jeden nebo víc kávovarů** (Zařízení), a každý kávovar může mít vlastní **pravidelný servisní plán** (Pravidlo zakázky). Tahle čtveřice je páteř evidence — všechno ostatní (nabídky, zakázky, výjezdy) na ni navazuje.

### Založit nového klienta

**Příklad:** Volá vám paní Nováková z Brnokafé café — chce začít s vámi spolupracovat. Postupujte takto:

1. Klikněte v levém menu na **Klienti** → vpravo nahoře **+ Nový**.
2. Vyplňte **IČO firmy** (najdete na webu firmy nebo na faktuře). Po uložení systém **sám doplní** název, DIČ, plátce DPH a adresu z veřejného rejstříku ARES.
3. Doplňte ručně to, co ARES nemá: **telefon, e-mail, typ klienta** (Kavárna / Kancelář / Hotel / ...).
4. **Uložte.**

> 💡 **Tip:** Pokud klient nemá IČO (např. fyzická osoba), všechno vyplníte ručně.

### Přidat pobočku (místo)

Brnokafé má 3 kavárny v Brně — každá je samostatné **Místo**. Proč to oddělovat:
- víte, ve které kavárně je konkrétní kávovar
- víte, kam má technik dojet (z místa se do zakázky/výjezdu **automaticky propíše adresa**)
- vidíte přehledně historii pro každou pobočku zvlášť (zakázky, výjezdy, výkazy)

**Vytvoření:**

1. Otevřete klienta → tab **Související** → sekce **📍 Místa** → **+ Přidat místo**.
2. Vyplňte:
   - **Název** (např. "Kavárna Náměstí Svobody") — to je jediný povinný údaj.
   - **Ulice, město, PSČ** (např. Náměstí Svobody 12, Brno, 60200).
   - **Kontaktní osoba** — volitelně vedoucí směny nebo provozní (telefonovat při příjezdu).
3. Uložte.

**Použití místa v zakázce, nabídce a výjezdu:**

Když pak budete vytvářet zakázku, nabídku nebo výjezd pro toho klienta, máte pole **Místo** — vyberete pobočku z dropdownu, a systém vám sám doplní adresu (ulice, město, PSČ). Pokud potom adresu ručně přepíšete (např. nadiktoval ji zákazník jinde), systém ji nepřepíše zpátky.

**Detail místa:**

V levém menu **Místa** najdete všechny pobočky napříč klienty. V detailu místa jsou subgridy:

- 🔧 **Zařízení** v této pobočce
- 🎯 **Zakázky** spojené s tímto místem
- 💰 **Nabídky**
- 🚗 **Výjezdy**
- 📝 **Výkazy práce**

> 💡 **Tip:** Pokud má klient jen jednu adresu (např. malá firma s jedinou kanceláří), místo nemusíte zakládat. Adresu vyplníte přímo na klientovi a v zakázkách/výjezdech necháte pole **Místo** prázdné.

### Vložit kontaktní osobu

Vždy je dobré mít u klienta aspoň jednu osobu, na kterou se obrátit.

1. Detail klienta → tab **Související** → **Kontaktní osoby** → **+ Přidat osobu**.
2. Jméno, příjmení, telefon, e-mail, pozice (vedoucí, technik, ...).

> 💡 **Tip:** Konkrétní osobu můžete přiřadit i k **místu** (vedoucí pobočky) a k **zařízení** (kdo obsluhuje stroj). U zařízení můžete mít i víc kontaktů — viz Zařízení níže.

### Eviduji kávovar (zařízení)

Každý kávovar, který klient má, si vložíte jako záznam — díky tomu pak vidíte historii servisu konkrétního stroje, hlídáte záruku, plánujete pravidelnou prevenci.

**Vytvoření:**

1. Levé menu → **Zařízení** → **+ Nový**.
2. Vyplňte **základní technické údaje:**
   - **Název** ("Klima Kavárna Svobody — bar"). Lidský identifikátor, podle kterého ho najdete.
   - **Výrobce + model** ("WMF / 5000S")
   - **Sériové číslo** (z výrobního štítku) — pro objednávky náhradních dílů a hledání. **Pište ho pečlivě**, je vyhledávatelné.
   - **Specifikace** — volitelný textový popis (výkon, intervaly, příslušenství).
3. **Umístění:**
   - **Klient** (povinné).
   - **Místo** — která pobočka klienta. Volitelně, ale silně doporučené.
   - **Kontaktní osoba** — primární kontakt pro toto zařízení (obsluha).
   - **Bližší popis umístění** ("za barem vlevo", "kuchyně, 2. patro").
   - **Přiřazený technik** — odpovědný za toto zařízení. Když systém **automaticky** vytváří zakázku ze servisního plánu, dosadí tohoto technika jako vlastníka.
4. **Instalace a záruka:**
   - **Stav** (Objednáno / Připraveno / **Instalováno** / Servisováno / V zápůjčce / Vyřazeno).
   - **Datum instalace** — kdy bylo zařízení předáno do servisu.
   - **Záruka (měsíců)** — délka záruky (default 12). Systém **sám spočítá Záruka do** (datum konce).
5. Uložte. Systém přidělí **kód zařízení** ve formátu `ZZ-YYNNNN` (např. `ZZ-260042`).

**Co všechno detail zařízení ukazuje:**

- **Stav záruky živě** — Aktivní / Vypršela / Bez záruky + počet zbývajících dní.
- Záložka **Servisní plán** — pravidelné prevence (viz níže), kalendář příštích zakázek.
- Záložka **Servisní historie** — Otevřené zakázky (NAPLÁNOVANÝ / PROBÍHÁ) + Uzavřené (DOKONČEN / ZRUŠEN). Plus souhrn **Výkaz práce** (celkem hodin, na cestě) a **Poslední zásahy** (Poslední servis, Poslední revize, Poslední zakázka).
- Záložka **Související** — Podřízená zařízení (komponenty), Další kontaktní osoby (M:N — víc obsluh, viz Tip níže).

**Hledání:**

V seznamu Zařízení můžete filtrovat podle stavu, klienta, výrobce, sériového čísla, modelu. Klávesa **Ctrl + K** nahoře vám rovnou vyhledává podle sériového čísla napříč všemi zařízeními.

> 💡 **Tip:** Sériové číslo si zapíšete pečlivě — pomáhá při objednávkách náhradních dílů a slouží jako klíč při claim záruky.

> 💡 **Tip (víc obsluh):** Jedno zařízení může mít víc kontaktních osob s funkcí (obsluha, vedoucí provozu, noční směna). Hlavní kontakt je přímo na zařízení; další přidáte v záložce **Související** → **Další kontaktní osoby**.

> 💡 **Tip (hierarchie):** Pokud se zařízení skládá z více částí (např. VRV centrála + jednotlivé split jednotky, nebo kávovar + mlýnek + změkčovač), můžete to evidovat: kořenové zařízení necháte bez nadřazeného, podružné mají v poli **Nadřazené** odkaz na kořenové. Hierarchie je jen jednoúrovňová (žádné vnořování).

### Servisní plán — automatické plánování (Pravidla zakázky)

Když kávovar potřebuje pravidelnou prevenci (jednou ročně výměna těsnění, jednou za 6 měsíců čištění), nemusíte si to pamatovat. Založíte **Pravidlo zakázky** na konkrétním zařízení a systém pak **každou noc ve 3:00** kontroluje, jestli má pro to pravidlo vytvořit novou zakázku.

**Vytvoření pravidla:**

1. Detail zařízení → záložka **Servisní plán** → **+ Nové pravidlo**.
2. Vyplňte:
   - **Název** ("Roční prevence WMF 5000S") — pod tímto jménem se bude vytvářet i Zakázka a Výjezd.
   - **Typ zakázky** — Servis / Montáž / Revize / Prohlídka / Oprava / Kontrola / Školení.
   - **Doba trvání** (v hodinách, např. 1.5) — odhad, jak dlouho potrvá výjezd. Systém ho použije pro nastavení **Plánovaný konec** výjezdu.
   - **Popis zakázky** — co se má dělat (propíše se do popisu zakázky i výjezdu).
   - **Frekvence** — Měsíčně / Kvartálně / Pololetně / **Ročně** / Jednou za 2 roky / Jednou za 3 roky.
   - **Termín první zakázky** (datum + čas) — kdy proběhne první výjezd. Klíčový vstup — od něj se odvozují všechny další termíny.
   - **Aktivní** — zaškrtnuto = systém pravidlo používá. Když chcete pravidlo dočasně pozastavit (klient na pár měsíců pauznul), odškrtnete a žádné zakázky se negenerují.
3. Uložte.

**Co se stane při uložení:**

Pravidlo hned vygeneruje **dvojici**: novou **Zakázku** + první **Výjezd** na zadaný termín. Klient + Místo + Kontaktní osoba se převezmou ze zařízení; **Přiřazený technik** ze zařízení se dosadí jako vlastník výjezdu.

**Co dál — denní automatika:**

Každou noc ve 3:00 cron projde všechna aktivní pravidla a u těch, kde je **Následující termín** dnes nebo dřív, vygeneruje novou dvojici Zakázka + Výjezd. Potom posune termín o frekvenci dál.

**Příklad:** Pravidlo "Roční prevence WMF" má frekvenci 12 měsíců, první termín 15. ledna 2027 v 09:00. V noci 14./15. ledna 2027 cron vygeneruje Zakázku + Výjezd na 15. 1. 2027 v 09:00 a posune termín na 15. 1. 2028.

**Co se NEgeneruje:**

- Pokud je zařízení ve stavu **Objednáno / Připraveno / V zápůjčce / Vyřazeno** — cron pravidlo přeskočí.
- Pokud je **Aktivní = ne** — přeskočí.
- Když je termín zpožděný (např. zapomněli jste na rok zapnout cron), systém **zameškané zpětně negeneruje** — posune termín na nejbližší budoucí a od něj pokračuje (žádný flood zakázek do minulosti).

**Změna pravidla:**

Když potřebujete změnit frekvenci nebo termín, otevřete pravidlo a upravte. Systém automaticky přepočítá **Následující termín**. Pokud už existuje výjezd, který chcete také změnit, musíte ho **ručně upravit nebo smazat** — pravidlo zpětně do existujících výjezdů nesahá.

> 💡 **Tip:** Pokud klient pravidelnou prevenci zruší (např. přestal kávovar používat), buď **odškrtněte Aktivní** (jednoduše schováte) nebo pravidlo smažete. Existující naplánované výjezdy zůstanou — smažete je zvlášť, pokud nedáváte smysl.

---

## 4. Nabídky pro klienta

Než pojede technik, často chce klient cenovou nabídku — co bude stát výměna mlecího kotouče, kolik je hodinová sazba, doprava.

### Sestavit novou nabídku

1. Levé menu → **Nabídky** → **+ Nová**.
2. Vyberte **klienta** a (volitelně) **zakázku**, ke které nabídka patří.
3. Sekce **Položky nabídky** — klikněte **+ Přidat položku**:
   - **Název** ("Mlecí kotouč WMF — výměna")
   - **Popis** (volitelně podrobnosti)
   - **Množství** (1 ks)
   - **Jednotka** (ks / h / km)
   - **Cena za jednotku bez DPH**
4. Přidejte další položky stejně (např. "Práce technika — 2 h", "Doprava — 25 km").
5. Sekce **Výdaje** (volitelně) — náklady, které neúčtujete klientovi, ale chcete je mít evidované (např. nákup dílu od dodavatele).
6. **Uložte.** Systém sám spočítá celkovou cenu bez DPH a s DPH.

> 💡 **Tip:** Sazba DPH se pro celou nabídku nastaví v poli **Sazba DPH** (typicky 21 %). Pokud je položka osvobozená, nastavíte sazbu 0 % přímo na položce.

### Stažení PDF nabídky

V detailu nabídky vpravo nahoře je sekce **⚡ Rychlé kroky** → klikněte **Spustit** u "Vystavit PDF nabídku". Systém PDF vygeneruje (cca 5 sekund) a uloží jej do tabu **Soubory** nabídky.

PDF stáhnete kliknutím na soubor → otevře se v prohlížeči nebo se rovnou stáhne.

> 💡 **Tip:** PDF má v hlavičce **logo vaší firmy**. Logo se nastavuje jednou na úvod.

### Označit nabídku jako přijatou

Když klient nabídku schválí:

1. Detail nabídky → pole **Stav nabídky** → vyberte **Přijatá**.
2. Systém propíše hodnotu nabídky do statistik klienta.

---

## 5. Plánování výjezdů

### Co znamená Zakázka, Výjezd a Výkaz

Tyto tři pojmy se snadno popletou:

- **Zakázka** = celá akce. Třeba "Roční servis kávovarů Brnokafé 2026". Trvá týden, dva, někdy měsíc.
- **Výjezd** = jeden konkrétní den, kdy někdo někam jede. "Petr Novák jede ve čtvrtek do Kavárny Svobody."
- **Výkaz** = záznam, co technik na výjezdu skutečně udělal. "Vyměnil mlecí kotouč, 2 h práce, 25 km."

> 💡 **Mnemo:** zakázka může mít víc výjezdů (jedeme tam 3×), jeden výjezd může mít víc výkazů (jeli jsme tam 2 technici současně).

### Naplánovat nový výjezd

**Příklad:** Paní Nováková nahlásila, že kávovar v Kavárně Svobody hlučí. Marie (operátorka) postupuje:

1. Otevře **Zakázku** (existující nebo vytvoří novou pro Brnokafé) — pokud nová, **+ Nová zakázka**, vybere klienta, místo a kávovar.
2. V detailu zakázky → tab **Související** → sekce **Výjezdy** → **+ Přidat výjezd**.
3. Vyplní:
   - **Plánovaný začátek** (čtvrtek 9:00)
   - **Plánovaný konec** (čtvrtek 11:00)
   - **Adresa** (předvyplněná z místa)
   - **Kontaktní osoba** (vedoucí směny — kdo bude technika pouštět dovnitř)
4. Uloží.

### Přidání technika do výjezdu

Výjezd bez technika není výjezd. Přidání:

1. Detail výjezdu → sekce **Plánovač týmu výjezdu** → vyberte den a klikněte do volného slotu technika.
2. Vyplňte **typ práce** (Servis / Montáž / Revize), **začátek a konec slotu**.
3. Uložte.

Petr teď uvidí výjezd ve svém dashboardu pod **Dnes** (pokud je termín dnes) nebo **Můj plán**.

> 💡 **Tip:** Pokud potřebujete na výjezd 2 techniky (instalace velkého stroje), přidáte druhého slot do téhož výjezdu. Systém pak vytvoří 2 výkazy — jeden per technik.

### Plánovač týmu — kdo má kdy čas

Plánovač najdete dvojím způsobem:

- **Plánovač týmu výjezdu** (na detailu konkrétního výjezdu) — týdenní pohled. Sloupce = dny, řádky = technici, barevné obdélníky = sloty (čím delší, tím déle trvá).
- **Týdenní plánovač výjezdů** (dashboard Přehled pro Operátora) — pohled na všechny výjezdy v týdnu, ne jen na jeden.

**Posunutí výjezdu na jiný den** (technik onemocněl, klient přesunul termín):

1. V dashboardu **Týdenní plánovač výjezdů** klikněte na bublinu výjezdu — bublina se „vybere".
2. Klikněte na cílový den v gridu (nebo zvolte datum v malém kalendáři).
3. Klikněte **Potvrdit**. Systém posune všechny sloty výjezdu na nový den (víkendy a státní svátky přeskočí automaticky).

### Kolize — když má technik 2 výjezdy najednou

Systém detekuje, když má jeden technik dva sloty se vzájemně překrytým časem. Uvidíte to na třech místech:

- **Detail výjezdu** — pole *Má konflikt* je zaškrtnuté.
- **Vytížení týmu** (dashboard Operátora) — kolidující bary jsou červené.
- **Kolize slotů** (dashboard Operátora) — samostatný seznam všech kolidujících dvojic.

Co dělat: posunout jeden ze slotů na jiný čas, nebo přidat dalšího technika.

---

## 6. Práce v terénu — technik

Systém je optimalizovaný pro telefon — můžete ho používat přímo z auta nebo u klienta.

### Můj den — co vidím když otevřu systém

Ráno otevřete telefon, přihlásíte se → otevře se **Přehled pro Technika**. Vidíte:

- **📍 Dnes** — výjezdy, které vás dnes čekají, kolik hodin, kam jedete.
- **⚠️ Chybí výkaz** — sloty po termínu, kde jste ještě nezaškrtli „Hotový výkaz". Tyto urgentně doplnit.
- **📅 Můj plán** — týdenní pohled (Po–Ne), můžete listovat dopředu i dozadu po týdnech.
- **📝 Můj výkaz práce** — měsíční přehled odpracovaných hodin a km, řádek za řádkem.

Vše je řešeno tak, aby bylo dobře čitelné i na malém displeji.

### Přijel jsem k zákazníkovi

1. V dashboardu klepněte na dnešní výjezd.
2. Otevře se detail vašeho slotu (výkazu).
3. Vyplňte **Čas příjezdu** — klepněte na pole, vyberte aktuální čas.

### Vyplnění výkazu

Po dokončení práce zapište co jste udělali. Stačí vyplnit **jedno z dvou** — buď čas odjezdu, nebo počet hodin práce. Druhé systém dopočítá sám.

| Pole | Co napsat |
|---|---|
| **Čas odjezdu** | Když jste skončili. (Hodiny se dopočítají.) |
| **Hodin** | Kolik hodin jste pracovali. (Čas odjezdu se dopočítá.) |
| **Km** | Kolik jste najel celkem (tam + zpět). |
| **Popis práce** | Co konkrétně jste udělali ("Vyměnil mlecí kotouč, odvzdušnil bojler, vyčistil sítka"). |
| **Použitý materiál** | Co jste vyměnil ("1× mlecí kotouč WMF, 2× těsnění bojleru"). |
| **Důvod nedokončení** | Pokud jste nestihli vše (chybí materiál, klient nebyl k zastižení, ...). |

> 💡 **Tip:** Materiál si napište hned po výměně — ráno už si nevzpomenete na všechny díly.

### Označit výkaz jako hotový

Když je vše vyplněno:

1. V detailu výkazu najděte pole **Hotový výkaz** → přepněte na **ANO**.
2. Uložit.

Tím říkáte: "tento výkaz je kompletní, můžete s ním pracovat (fakturovat, ukládat do souhrnu zakázky)".

> 💡 **Tip:** Hotový výkaz se počítá do souhrnů zakázky (hodiny, km, popisy). Rozpracované výkazy se nezapočítávají — proto se nebojte přepnout až když jste si jistí.

### Podpis zákazníka i váš (technika)

U zákazníka můžete podepsat protokol o provedeném servisu. Najdete to na **Zakázce → tab Zakázkový list → sekce Podpisy**.

1. **Za zákazníka** — vyberte z rozbalovacího seznamu osobu (paní Nováková, vedoucí směny).
2. **Místo podpisu** — vyplňte adresu (systém předvyplňuje z výjezdu).
3. Klikněte **Potvrdit podpis za zákazníka**. Systém vytvoří **stylizované razítko** s jejím jménem a datem/časem.
4. Stejně pro **Za dodavatele** — vyberte sebe (technik) a klikněte Potvrdit.

Razítko vypadá takto: nahoře drobně "PODEPSÁNO", pod tím **jméno osoby kurzívou velkým písmem**, pod ním tenká čára a datum + čas. Místo podpisu (např. "Náměstí Svobody 12, Brno") je dole pod čarou s ikonou špendlíku.

> 💡 **Tip:** Pokud zákazník odmítne podpis, nevadí — podpis je nepovinný. Můžete ho doplnit později, nebo nechat prázdný.

---

## 7. Zakázka je hotová — co dál

Když všechny výjezdy proběhly a technici si zapsali výkazy, je zakázka prakticky hotová. Teď připravíte podklady pro fakturaci.

### Zakázkový list — souhrn všeho

Otevřete zakázku → klikněte na tab **Zakázkový list**. Vidíte:

- **Tabulku hotových výkazů** — kdo, kdy, kolik hodin, kolik km, jaký materiál.
- **Podrobnosti** — termín zahájení, dokončení (vypočítané z výkazů).
- **Popis provedené práce** — textový souhrn celé akce.
- **Podpisy** — razítka zákazníka a dodavatele.

### Vygenerovat textový souhrn z výkazů

Místo abyste ručně psali, co se na zakázce dělalo, klikněte na **🤖 Vygenerovat z výkazů**. Systém:

1. Přečte všechny hotové výkazy (popisy práce, materiál).
2. Pomocí AI nebo šablony sestaví **souhrnný text** pro klienta.
3. Vyplní pole **Popis provedené práce**.

Text si potom můžete ručně upravit kliknutím na **✏️ Upravit**.

> 💡 **Tip:** AI generuje souhrn ve formálním obchodním tónu. Pokud se vám něco nelíbí, prostě to přepište.

### PDF zakázkový list

V pravém dolním rohu tabu Zakázkový list → sekce **⚡ Rychlé kroky** → **Vystavit PDF zakázkový list**.

Systém za pár sekund vygeneruje PDF. Najdete ho v tabu **Soubory** zakázky. Obsahuje:

- Hlavičku s logem a názvem zakázky
- Klient + místo plnění
- Termín zahájení + dokončení + statistiky (počet výjezdů, hodin, km)
- **Popis provedené práce** (váš souhrn)
- **Podpisy** (razítka)
- Detailní záznamy práce — tabulka výkazů (na další stránce)

> 💡 **Tip:** PDF je A4 na výšku, vhodné pro tisk i e-mail. Pošlete ho klientovi a uložte do účetnictví jako podklad pro fakturu.

### Termíny zakázky — co znamenají

V sekci 🗂 Záznam zakázky uvidíte 2 zajímavá pole:

- **Předchozí úkol** — datum posledního úkolu, který jste na této zakázce dokončili. (Třeba "rozhovor s klientem 12. 5.")
- **Následující úkol** — datum nejbližšího nedokončeného úkolu. (Třeba "telefonát zákazníkovi 23. 5.")

Tato pole se automaticky aktualizují, když si vytvoříte Úkol navázaný na zakázku.

> 💡 **Tip:** Úkoly slouží pro interní připomínky ("nezapomenout zavolat", "objednat díl"). Nepleťte si je s výjezdem (výjezd = fyzická návštěva u klienta).

---

## 8. Dashboardy a přehledy

Dashboard je úvodní obrazovka, kterou vidíte po přihlášení. Systém má **3 různé dashboardy** — podle role a potřeby.

### Přehled pro Technika

- **📍 Dnes** — vaše dnešní výjezdy (časy, klient, adresa, kontakt)
- **⚠️ Chybí výkaz** — sloty po termínu bez zaškrtnutého „Hotový výkaz"
- **📅 Můj plán** — týdenní pohled Po–Ne s listováním vpřed a vzad
- **📝 Můj výkaz práce** — měsíční přehled odpracovaného času a km

### Přehled pro Operátora

- **📅 Týdenní plánovač výjezdů** — týdenní grid se všemi výjezdy; klik-vybrat-klik pro přesun na jiný den
- **👥 Vytížení týmu** — kdo z techniků je kdy obsazený (bary v gridu, červené = kolize)
- **⚠️ Kolize slotů** — seznam dvojic slotů, kde se technik kryje sám sebou

### Vývoj hodnoty zakázek (pro vlastníka/manažera)

Statistický pohled — grafy a klíčové ukazatele:

- **Celková hodnota všech zakázek** (součet)
- **Počet zakázek**, **Maximální / Průměrná / Minimální hodnota**
- **Vývoj hodnoty zakázek v čase** — čárový graf po týdnech nebo měsících
- **Tabulka všech zakázek** — pro detailní pohled

> 💡 **Tip:** Mezi dashboardy přepínáte v levém menu — položky „Přehled pro Technika" a „Přehled pro Operátora" nahoře.

---

## 9. Když se něco zasekne

Krátké FAQ pro nejčastější situace. Pokud tady svůj problém nenajdete, **ozvěte se naší podpoře**.

### Nevidím tlačítko „Spustit AI generování" (nebo jiné tlačítko)

Pravděpodobně vaše role nemá oprávnění. Operátoři a Admini ho vidí; Technici typicky ne. Ozvěte se na podporu, nastavíme to.

### Klient nemá v systému vyplněnou DPH a adresu

Vyplňte mu **IČO** a uložte. Systém data z ARES doplní automaticky.

### Technik je nemocný, kdo převezme jeho výjezdy?

Otevřete **Plánovač týmu** → najděte sloty nemocného technika → klikněte na slot → změňte technika na jiného volného. Systém upraví automaticky.

### Klient odmítá podpis na protokolu

Klidně. Podpis je nepovinný — můžete vystavit PDF zakázkový list i bez něj. V budoucnu (až klient podpis udělí) můžete doplnit.

### Kde najdu starou nabídku z minulého roku?

V detailu klienta → tab **Související** → sekce **Nabídky**. Tam jsou všechny, seřazené od nejnovější. Nebo Ctrl+K → napište kód nabídky (formát `RRRR-NNN`, např. `2025-042`).

### Jak změním logo v PDF nabídky?

Nahrajete obrázek (PNG/SVG) do **Profilu firmy** (Nastavení → Profil firmy → Přílohy → soubor pojmenovaný "logo.png"). Příště se objeví v PDF nabídky i zakázkového listu.
