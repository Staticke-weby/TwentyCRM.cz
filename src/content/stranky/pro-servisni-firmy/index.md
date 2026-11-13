---
title: Twenty Servis — CRM pro servisní a montážní firmy | TwentyCRM.cz
description: Hotové CRM pro firmy, které montují a servisují u zákazníka. Karta zařízení se zárukou, servisní plán generuje zakázky sám, plánovač výjezdů a výkaz technika v telefonu.
pageId: pro-servisni-firmy
mailto: servis
hero:
  stitek: 🔧 Twenty Servis
  nadpis: CRM pro firmy, které montují a servisují u zákazníka
  perex: >-
    Dispečer plánuje výjezdy v týdenním rozvrhu a vidí kolize. Technik si v mobilu otevře dnešní výjezd
    a vyplní výkaz s hodinami, materiálem i podpisem. Z hotových výkazů vám systém připraví
    **PDF zakázkový list s vaším logem**, který pošlete klientovi a do účetnictví.
  stitky:
    - "🔨 Montáž i servis v jednom"
    - "🇨🇿 Celé prostředí česky"
    - "📅 Nasazení v řádu jednotek pracovních dní"
  kontakt: true
  disclaimer: Twenty Servis
zaver:
  nadpis: Sedí to vašemu byznysu?
  text: 30 minut online — projdeme váš obor, ukážeme demo, vy se rozhodnete.
---

## Co namontujete, to pak servisujete

Většina firem dělá obojí — nejdřív přijedou něco postavit a pak se k tomu pár let vracejí.
Ve dvou oddělených systémech se to rozejde: montáž si vede svoje papíry, servis svoje,
a za dva roky nikdo neví, kdo tam vlastně byl první a co tam nechal.

Proto je u nás **montáž jenom typ zakázky**. Zařízení, které namontujete,
rovnou vzniká jako karta s datem instalace, délkou záruky a servisním plánem.
Když za dva roky zavolá klient s poruchou, technik vidí, co tam kdo dělal — včetně toho,
že to montoval on sám.

::::sekce{pozadi="svetle"}

## Jak do sebe věci zapadají

Běžné CRM má klienta, příležitost a aktivitu. Pro firmu s lidmi v terénu to nestačí —
chybí mu pojem pobočky, konkrétního zařízení a výjezdu.
**Twenty Servis má tuhle strukturu hotovou:**

```
Klient (firma se sítí poboček)
  ↓
  Místo (konkrétní pobočka, adresa)
       ↓
       Zařízení (s.č., model, datum instalace, záruka)
              ↓
              Servisní plán (pravidelná prevence)
                    ↓
                    Zakázka (montáž, servis, oprava, prohlídka…)
                          ↓
                          Výjezd (jeden den, jedna návštěva)
                                ↓
                                Výkaz práce (technik, hodiny, km, materiál)
                                      ↓
                                      Nabídka / podklad k fakturaci
```

:::sloupce{sloupce="2"}

### Z karty klienta vidíte

- Všechny pobočky a všechna zařízení
- Kompletní historii montáží i servisu napříč lety
- Otevřené reklamace v záruce
- Statistiky hodnoty zakázek

### Z karty zařízení vidíte

- Kdo ho montoval a kdo na něm dělal naposledy
- Co měnil, jaké díly použil
- Kdy je další plánovaná prohlídka
- Živý stav záruky (kolik dní zbývá)

:::

::::

## Co od nás dostanete

Čtyři výsledky, na kterých systém stojí. Konkrétní obor jen přidává vlastní slovník a pole —
kostra je stejná.

:::karty{sloupce="2"}

### 📅 Plánování výjezdů bez kolizí

Týdenní plánovač — sloupce dny, řádky technici, barevné sloty. Když má jeden technik dva výjezdy
ve stejný čas, systém kolizi automaticky označí.

- Více techniků na jednom výjezdu (každý vlastní výkaz)
- Vícedenní výjezd se rozdělí na denní sloty (8–16)
- Víkendy a státní svátky systém přeskakuje sám
- Přesun výjezdu na jiný den — klik, klik, potvrdit

### 📱 Mobil pro techniky v terénu

Systém se otevře v prohlížeči telefonu, přidáte na plochu, chová se jako aplikace. Technik vidí
přehled přizpůsobený malému displeji.

- **📍 Dnes** — výjezdy na dnešek s adresou a kontaktem
- **⚠️ Chybí výkaz** — sloty po termínu, které zapomněl uzavřít
- **📅 Můj plán** — týdenní pohled
- Výkaz: popis práce, materiál, kilometry, hodiny
- Razítko podpisu zákazníka i technika (jméno, datum, místo)

### 🔁 Opakované zakázky se generují samy

Pro každé zařízení založíte servisní plán — měsíčně, čtvrtletně, pololetně, ročně, jednou
za 2 nebo 3 roky, nebo po zadaném počtu dní. Systém ho hlídá místo vás.

- Podle nastaveného pravidla se vygeneruje další zakázka i výjezd na plánovaný termín
- Přiřadí stejného technika, který má zařízení na starosti
- Po výpadku negeneruje zpětně — posune se na nejbližší budoucí termín
- Vyřazené zařízení nebo pozastavený plán přeskočí

### 📄 Dokumenty s vaším logem

Nabídka i zakázkový list v PDF — vaše hlavička, vaše patička. Logo nahrajete jednou.

- **PDF nabídka** — položky, jednotky, DPH, stav „přijato"
- **PDF zakázkový list** — souhrn výkazů, hodiny, km, materiál, podpisy
- **🤖 Souhrn z výkazů** — z textů techniků sestaví popis pro klienta (vaše vlastní klíče k AI, tokeny platíte přímo poskytovateli)
- Načtení firmy z ARES podle IČO

:::

::::sekce{pozadi="svetle"}

## Co v systému najdete

Typy záznamů, které spolu drží. Nic z toho nemusíte nastavovat — přijde to hotové.

::entity{produkt="servis"}

:::poznamka[Co v Twenty Servis naopak není]{ton="varovani"}

- **Zájemci (leady) a jejich kvalifikace.** Zakázka tady plní roli obchodního případu — nemá tedy fáze obchodu ani samostatnou frontu zájemců.
- **Obchodní plán a výhled plnění.** Cíl obratu za období a semafor podle času má [Twenty Sales](/pro-obchodni-tymy/).
- **Servis u vás na provozovně.** Řešení počítá s tím, že jedete k zákazníkovi. Příjem zařízení do vlastní dílny v něm dnes není.

Nabídky, položky nabídek i ceník produktů jsou přitom v obou řešeních totožné —
v tomhle o nic nepřicházíte.

:::

::::

::demo-cta{produkt="servis"}

## V jakých oborech to běží

Kostra je pokaždé stejná, mění se slovník a pole. Vyberte si obor nejblíž tomu vašemu —
a když tam není, princip platí i tak, jen ho spolu projdeme na konzultaci.

::obory{reseni="servis" odkaz="Detail →"}

::::sekce{pozadi="svetle"}

## Kde končíme a co necháváme jiným

Twenty Servis pokrývá celý životní cyklus zakázky — od nabídky po podklad k fakturaci.
Dvě věci k němu ale vědomě nepatří.

- **Doklad vystavuje fakturační program.** Z hotových výkazů dostanete přesný podklad — hodiny, kilometry, materiál. Fakturu z něj vystaví váš účetní software, ne CRM. [Napojení řešíme na požadavek →](/napojeni-na-fakturaci/)
- **Model stojí na výjezdu k zákazníkovi.** Klient → místo → zařízení → výjezd. Příjem zařízení do vlastní dílny v řešení není; pokud je servis na provozovně jádro vašeho byznysu, řekneme to na konzultaci.

::::

::stitek[Případové studie]

## Jak vypadá nasazení v praxi

Slovník se mění (zakázka, výjezd, servis, montáž), bolesti se opakují. Dvě konkrétní situace —
anonymizované, ale realistické. Všechno, co se v nich nastavuje, jde udělat během několika dní.

:::pripadova-studie{ikona="🏢" nazev="Údržba budov: Z papírů a Excelu na sdílený přehled v řádu jednotek pracovních dní" podtitul="Firma spravující údržbu administrativních a obchodních objektů, Praha + Středočeský kraj"}

#### Před

Tři dispečerky, každá dělá svým způsobem — Excel, papír, mail. Klient zavolá, dispečerka začne dohledávat, kdo to objekt zná. Když je nemocná, kolegyně neví, co jí leží na stole. Reklamace v záruce občas vyřízena pozdě.

#### Co jsme v Twenty nastavili

- Vlastní typy záznamů: **Klient**, **Místo** (objekt s adresou a typem budovy), **Zařízení** (kotel, vzduchotechnika, výtah, požární signalizace), **Zakázka**, **Výjezd**, **Výkaz práce**
- Načtení firmy z ARES při zadání IČO klienta
- Pole „Profese" u zakázky (elektro, voda, klima, výtahy) — filtr a nástěnka podle profese
- Servisní plán u kotlů a vzduchotechniky — roční prevence se generuje sama
- Týdenní plánovač s hlídáním kolizí, vícedenní výjezdy se rozdělí na denní sloty
- Role: dispečerka má plný přístup, technici a účetní mají omezené pohledy podle typu záznamů a polí (přesné „uživatel vidí jen své záznamy" vyžaduje vyšší tarif Twenty (Organization) — pro tuhle firmu to nebylo nutné)
- PDF zakázkový list s logem firmy — klient ho dostane po dokončení zakázky

#### Po

Dispečerky pracují ze sdíleného plánovače. Když je jedna nemocná, druhé vidí přesný stav. **Vyřizování reklamací zrychleno o cca 40 %** — žádné dohledávání, kdo to objekt zná. Klient s několika objekty má v jedné kartě kompletní historii údržby.

> „Nejde o žádný kosmický software. Jde o to, že všichni vidí stejný obrázek. Kdyby tohle nemělo přijít, nepřežijeme růst."

:::

:::pripadova-studie{ikona="☀️" nazev="Montáž a servis fotovoltaik: Z evidence v hlavě na výjezdy s historií zařízení" podtitul="Firma instalující a servisující fotovoltaiky pro rodinné domy a malé komerční objekty"}

#### Před

Majitel zná všechny instalace v hlavě. Servisní zásahy si technici řeší přes chat. Po roce přibyly stovky instalací a začalo se ztrácet, která má jakou pojistku, kde končí záruka, kdy byla poslední kontrola střídače.

#### Co jsme v Twenty nastavili

- Zařízení **Instalace FV** — adresa, datum nasazení, výkon, počet panelů, model střídače, sériové číslo
- Záruční pole zvlášť pro panely, střídač a práci; systém živě ukazuje „zbývá X dní"
- Montáž jako typ zakázky — po předání se ze stejné karty rozjede servisní plán
- Mobilní přehled pro techniky — dnešní výjezdy, sloty po termínu, týdenní plán
- Servisní plán na kontrolu po 1, 2 a 5 letech od instalace — zakázky se generují samy
- Pohled „Otevřené reklamace v záruce" — majitel ho vidí denně
- PDF protokol o kontrole z karty zakázky s logem firmy

#### Po

Majitel přestal držet firmu v hlavě. Technici dorazí k instalaci s historií zařízení v mobilu — vidí, co je v záruce a co kontroloval kdo posledně. **Reklamace v záruce vyřešena průměrně do 3 dnů**, plánované kontroly se neztrácí.

> „Z hospodaření v hlavě v systém, který přežije moji dovolenou. To bylo to, co jsem od softwaru čekal."

:::

::::sekce{pozadi="svetle"}

::platforma-vs-custom

::::

::rozsireni{kontext="servis"}

::::sekce{pozadi="svetle"}

## Kolik to stojí

Dvě čísla a žádná překvapení. Jednou za nasazení, pak měsíčně za provoz —
a nic navíc za každého dalšího technika, kterého do systému pustíte.

:::karty{sloupce="2"}

### Nasazení, jednorázově

::cenovka{klic="implementation"}

Nasazení hotového řešení, doplnění polí vašeho oboru, převod dat, dokumenty s vaším logem a adaptační program se školením.

### Provoz na vyhrazeném serveru, měsíčně

::cenovka{klic="retainer_selfhost"}

Jedna faktura v korunách, bez poplatků za uživatele. Server v Německu zařídíme a spravujeme my.

:::

[Podrobný ceník →](/cenik/)

{{data.vat_note}}

::::

## Pro koho to *NENÍ*

Jsme féroví — řekneme upřímně, kdy vám náš přístup nesedne.

:::zvyrazneni

- ❌ **Realitní makléři** — používáme Twenty, ale tento segment neřešíme
- ❌ **Servis výhradně u vás na provozovně**, bez výjezdů k zákazníkovi — celý model stojí na výjezdu
- ❌ **Velké podniky s propojením na Microsoft 365 a podnikové systémy** — doporučíme spíš Power Platform na bohemiacrm.cz
- ❌ **Kdo hledá plug-and-play za hodinu** — i s hotovým řešením je to v řádu jednotek pracovních dní

:::

::::sekce{pozadi="svetle"}

::reseni-volba{doporuceno="servis" proc="Posíláte lidi k zákazníkovi něco namontovat nebo opravit a vracíte se k témuž zařízení? Twenty Servis je postavený přesně na tohle — a nabídky s ceníkem v něm najdete taky." alternativa="Nikam nejezdíte a řešíte hlavně obchod — poptávky, nabídky, marže, plnění plánu? Pak je pro vás Twenty Sales."}

::::
