---
title: Twenty CRM pro servis chladicí techniky | TwentyCRM.cz
description: CRM pro servis průmyslového a obchodního chlazení — chladicí boxy, mrazírny, chlazené vitríny, strojovny. Karta každého okruhu, plán prohlídek, havarijní výjezdy a výkaz technika v telefonu.
pageId: obor-chlazeni
mailto: chlazeni
hero:
  stitek: 🧊 Chladicí technika
  nadpis: CRM pro servis průmyslového a obchodního chlazení
  perex: >-
    Když chlazení stojí, zboží se kazí a hodiny se počítají. Karta konkrétního zařízení
    s historií poruch, servisní plán a technik, který ví, co ho v tom provozu čeká.
  stitky:
    - Chladicí boxy · mrazírny · vitríny · strojovny
    - 🚨 Havarijní i plánované výjezdy
  kontakt: true
zaver:
  nadpis: Konzultace zdarma
  text: >-
    30 minut online, bez závazku — projdeme vaše provozy a to, jak dnes zvládáte havárie,
    ukážeme demo, vy se rozhodnete.
---

## Tahle firma jste vy?

Pokud aspoň tři z šesti přikývly, jsme přesně pro vás.

:::karty{sloupce="2"}

### ⏰

**Porucha se neodkládá na zítra.** Mrazák v provozu stojí a klient počítá ztrátu na zboží. Potřebujete hned vědět, kdo je nejblíž, kdo má volno a co za zařízení to vlastně je.

### 🌙

**Noční a víkendová pohotovost.** Technik něco vyjel v sobotu ve tři ráno. V pondělí si nikdo nevzpomene, co přesně dělal, a účtuje se odhadem.

### 🏬

**V jednom provozu je zařízení všude.** Strojovna, dva chladicí boxy, mrazák, šest vitrín v prodejně. Zásah zapíšete „na prodejnu" a za rok nevíte, co konkrétně se opravovalo.

### 🔁

**Jedno zařízení zlobí pořád dokola.** Tušíte to, ale nedoložíte — a tím pádem klientovi neřeknete s čísly v ruce, že už se vyplatí výměna, ne další oprava.

### ❄️

**Kolik chladiva se kam doplnilo.** Technik to napsal na papír, papír je v autě, a když se za rok ptáte, jestli ten okruh netěsní, není z čeho vyčíst trend.

### 📑

**Klient chce přehled za rok.** Řetězec si dělá audit dodavatelů a chce vědět, kolikrát jste u nich byli a co se dělalo. Sbírá se to týden.

:::

::::sekce{pozadi="svetle"}

## Náš datový model pro chladicí techniku

Provoz není jedno zařízení. **Každý chladicí okruh a každá vitrína má vlastní kartu** —
teprve pak jde vyčíst, které zařízení stojí za většinou výjezdů.

```
Klient (Potraviny Morava, a.s.)
  ↓
  Místo (Prodejna Zlín — Náměstí)     Místo (Sklad Otrokovice)
       ↓                                    ↓
       Zařízení: Strojovna                  Zařízení: Mrazicí box
         ├── Kompresor 1                      (výrobce, typ, výr. číslo,
         ├── Kompresor 2                       chladivo a náplň, instalace)
         └── Kondenzátor
       Zařízení: Chladicí box
       Zařízení: Vitrína — mléčné
              ↓
              Servisní plán (interval, který si nastavíte)
                    ↓
                    Zakázka: Prohlídka / Havárie / Montáž / Oprava
                          ↓
                          Výjezd → Výkaz (hodiny, km, materiál,
                                          doplněné chladivo)
```

:::karty{sloupce="3"}

### Poruchovost po zařízeních

Kolikrát se letos jelo k té konkrétní vitríně a za kolik hodin. Podklad pro rozhovor „oprava, nebo výměna".

### Strojovna jako sestava

Kompresory a kondenzátor pod jednou kartou strojovny. Zásah se zapíše na ten kus, kterého se týkal.

### Chladivo jako údaj u zařízení

Typ a náplň vedete u karty, doplnění zapisuje technik do výkazu. Trend úniků pak vyčtete z historie.

:::

::::

## Co od nás dostanete

V ceně nasazení a měsíčního provozu — cena je stejná jako u ostatních oborů.

:::karty{sloupce="2"}

### 🚨 Havárie se vejde mezi plánovanou práci

Týdenní plánovač ukáže, kdo kde je a komu se co překrývá. Havarijní výjezd vsunete
mezi plánované prohlídky a hned vidíte, co se tím posunulo.

- Kolizi v čase technika systém sám označí
- Přesun plánované prohlídky na jiný den je klik
- Dva technici na jedné opravě — každý vlastní výkaz

### 📱 Technik vykáže i o víkendu

Systém se otevře v prohlížeči telefonu. Technik zapíše hodiny, kilometry, materiál
a doplněné chladivo hned po zásahu — ne v pondělí po paměti.

- Stačí čas odjezdu nebo počet hodin — druhé se dopočítá
- Pohled „Chybí výkaz" ukáže, co zůstalo nedodělané
- Razítko podpisu zákazníka i technika přímo na zakázce

### 🗓 Prohlídky, které nespadnou pod stůl

Na zařízení nastavíte interval prohlídek a systém podle nastaveného pravidla vytvoří zakázku i výjezd.
Plánovaná práce tak nezmizí pod náporem havárií.

- Intervaly zadáváte vy podle typu zařízení a smlouvy — systém je jen hlídá
- Přiřadí technika, který zařízení zná
- Vyřazené zařízení se přeskočí, plán se nemusí mazat

### 📄 Přehled pro klienta i pro fakturaci

Řetězec chce roční přehled zásahů? Otevřete kartu klienta. Z hotových výkazů navíc
vznikne PDF zakázkový list s vaším logem.

- Historie po klientovi, po provozu i po konkrétním zařízení
- Nabídka na výměnu zařízení s položkami z ceníku a DPH
- Načtení firmy z ARES podle IČO
- Souhrn práce pro klienta umí sestavit AI z textů techniků

:::

:::poznamka[Jak si to rozdělíme]{ton="info"}

**Chladivo vedeme jako údaj u zařízení** — typ i náplň — a doplnění zapisuje
technik do výkazu. Z toho snadno vytáhnete podklad pro svou zákonnou evidenci.
Samotný výklad, co a kdy se musí evidovat a hlásit, je odbornost vaše a vašeho oborového
softwaru; do toho vám nemluvíme.

**Teploty hlídá měřicí systém v provozu**, ne CRM — a když ho máte,
napojíme se na něj. Pokud řešíte něco na pomezí, ozvěte se a projdeme to spolu.

:::

::::sekce{pozadi="svetle"}

::reseni-volba{doporuceno="servis" proc="Jezdíte k témuž zařízení opakovaně — plánovaně i při havárii. Twenty Servis má karty zařízení s historií poruch, plánovač výjezdů a výkaz technika z terénu." alternativa="Chlazení hlavně dodáváte a servis zajišťuje partner? Pak vám sedne Twenty Sales — nabídky s položkami, nákupní cena i marže na každé zakázce."}

::::

::demo-cta{produkt="servis"}

## Čím se lišíme od toho, co používáte dnes

Nejčastější alternativy a v čem je proti nim rozdíl.

:::karty{sloupce="1"}

### A co když děláme i klimatizace?

Kostra je stejná, slovník jiný. Komfortní klimatizace a průmyslové chlazení se liší
v tom, co se eviduje a jak rychle se musí reagovat. Pokud děláte obojí, vedeme to
v jednom systému — jen s jinými poli. Podívejte se i na
[stránku pro HVAC](/pro-servisni-firmy/hvac/).

### Proti měřicímu systému v provozu

Ten hlídá teploty a pošle poplach. Neřekne vám, kdo tam pojede, co se tam dělalo minule
a co se má vyfakturovat. **Nekonkurujeme mu, doplňujeme ho** — on hlídá provoz,
my hlídáme zakázku.

### Proti specializovanému terénnímu softwaru

Umí terénní agendu a někdy i oborové detaily. Za to ale platíte:

- ❌ Licence za každého uživatele — s rostoucím týmem to roste
- ❌ Uzavřený systém, data u dodavatele
- ❌ Obchodní stránku (nabídky, marže) obvykle neřeší

U nás technik pracuje v telefonu přes prohlížeč, což je dnes běžná praxe. Navíc dostanete
obchodní část s nabídkami a marží a systém zůstává otevřený, bez poplatků za uživatele.

:::

::::sekce{pozadi="svetle"}

::rozsireni{kontext="servis"}

::::
