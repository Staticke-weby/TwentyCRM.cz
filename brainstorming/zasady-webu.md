# Zásady webu — proč je takový, jaký je

> Vzniklo 2026-08-02 při přestavbě webu na dvě řešení (Twenty Sales / Twenty Servis).
>
> **K čemu tenhle dokument je:** `CLAUDE.md` drží *pravidla* v krátké formě, aby se dala rychle
> dodržet. Tady je u každého **důvod** a **konkrétní případ, kdy se porušilo a co to způsobilo**.
> Bez toho se pravidla za půl roku začnou obcházet, protože nikdo nebude vědět, proti čemu vznikla.
>
> Když se rozhodne něco nového, patří to sem — ne do třetího dokumentu.

---

## 1. Prodáváme dvě hotová řešení, ne implementaci na míru

**Pravidlo:** web nabízí právě dvě varianty CRM — **Twenty Sales** (řízení obchodu) a
**Twenty Servis** (montáže a servis u zákazníka). Obě jsou naše nadstavby nad open-source Twenty.

**Proč:** kupující SMB si nekupuje vývoj. Vývoj pro něj znamená neznámý termín, neznámou cenu
a riziko, že to nedopadne. Kupuje **ověřený systém, který už běží**. Když web sliboval, že něco
postavíme na míru, prodával přesně to, čemu se zákazník chce vyhnout.

**Co se stalo, když to bylo jinak:** web dlouho prodával jednu bezejmennou implementaci na míru.
Důsledky, které se pak musely rozplétat:

- Čtyři oborové stránky slibovaly **vlastní typy záznamů, které v žádném produktu nejsou** —
  Výrobní zakázka s fázemi výroby, materiál se šaržemi, generování sériových čísel, plánovač strojů,
  Odběratel, Provozovna, Agenda, Úkon, Subdodávka. Stránka slíbila jednu věc a blok „Které řešení
  pro vás" pod ní odkázal na produkt, který to neumí.
- `/co-umi/` v tabulce slibovalo, že **napíšeme vlastní React komponenty** — podpis prstem
  na displeji a skener QR kódů.
- Napříč webem viselo **26 slíbených funkcí**, které neexistují: klientský portál (3×), sklad
  náhradních dílů (3×), evidence oprávnění techniků (3×), HR, SLA timer, přepočet měn.
  Tři z nich přitom výslovně zakazuje CLAUDE.md nebo je stáhl `oborove-podstranky.md`.

**Jak to psát:** *„Máme dvě hotová řešení… Nekupujete vývoj, kupujete systém, který běží."*
Přizpůsobení se zmiňuje **až jako důkaz, že se nic nepředělává** — proto je nasazení otázka dnů
a proto se nic nerozbije při aktualizaci. Z rizika se tak stane argument.

❌ ohneme na váš obor · postavíme vám CRM · systém na míru · doděláme
✅ doplníme pár polí a číselníků · hotové řešení doladěné na váš obor · nasadíme

---

## 2. Rozpojení dvou os: produkt rozhoduje, obor je kontext

**Pravidlo:** rozhodovací osa je **proces** (řídíte obchod × jezdíte k zákazníkovi), ne obor.
Obor je kontext a SEO. Každá oborová stránka končí blokem „Které řešení pro vás" s doporučením
i alternativou (`components/reseni-volba.latte`).

**Proč:** obor nic nerozhoduje. Velkoobchod, který chce řídit jen obchodní oddělení, potřebuje Sales.
Montážní firma, která nechce řešit terén, taky. HVAC firma, která chce jen prodávat instalace,
znovu Sales. Kdyby byl obor rozhodovací osou, půlku zájemců bychom poslali na špatnou stránku.

**Vedlejší přínos:** násobí to vyhledávací dotazy — obor × produkt.

---

## 3. Sales a Servis jsou volba, ne skládačka

**Pravidlo:** **servisní firmě stačí Twenty Servis**, protože pokrývá celý životní cyklus zakázky
včetně nabídek a ceníku. Žádný combo balíček, žádný příplatek za druhou nadstavbu.

**Proč:** kombinovaný balíček by byl dražší a složitější než jedno dobře postavené řešení —
a hlavně by ze dvou jasných produktů udělal matoucí konfigurátor.

**Rozsah, který se musí ctít:** Servis **nemá leady ani obchodní plán**; roli obchodního případu
tam plní **Zakázka**. Nabídky, položky nabídek a ceník produktů jsou v obou řešeních **totožné**.

---

## 4. Sales není jen B2B

**Pravidlo:** Twenty Sales funguje pro prodej **firmám i koncovým zákazníkům** a zvládá
**krátké i dlouhé** obchody.

**Proč:** rozhoduje jediná věc — jestli se o obchodu **jedná a dělá se na něj nabídka**.
Prodej kuchyně, fotovoltaiky nebo stroje je z pohledu systému totéž; mění se tempo, ne způsob práce.
Původní podklad říkal „B2B týmy 5–25 lidí", což zbytečně vyřazovalo velkou část trhu.

**Jediný skutečný nefit:** čistě e-shopový provoz, kde se objednávky odbavují samy a nikdo
s nikým nemluví.

---

## 5. Neuvádět počty uživatelů jako kritérium vhodnosti

**Pravidlo:** žádné „pro týmy 5–25 lidí", „od 5 uživatelů", „pro firmy do 50 zaměstnanců".
Vhodnost se popisuje **tím, co firma dělá**.

**Proč (slovy zadavatele):** vhodnost si zákazník stejně určí cenou. A když je důvodem oddělená
data nebo vlastní instance, dává řešení smysl **při jakékoli velikosti**. Číslo v textu je falešná
hranice, která odežene zájemce, kterému by to sedlo.

**Povolená výjimka:** modelové kalkulace na `/cenik/` („Pro 10 uživatelů") a bod zlomu ceny
na `/cloud-vs-selfhost/`. To je cenová matematika, ne brána vhodnosti.

---

## 6. Nevypisovat vlastní slabiny — a rozdíl proti vymezení rozsahu

**Pravidlo:** nikdy nevypisovat, co neumíme, pokud se nikdo neptal. Ani na produktových
a oborových stránkách, natož na homepage.

**Proč:** nevyžádané přiznání nečte jako férovost, ale jako nejistota. Slovy zadavatele:
*„není potřeba hlásit jak studentík, co neumíme."*

**Hranice, kterou je nutné vidět** — dvě věci vypadají podobně a nejsou stejné:

| | |
|---|---|
| **Vymezení rozsahu — patří tam** | „doklad vystavuje fakturační program", „sklad patří podnikovému systému", „model stojí na výjezdu k zákazníkovi" |
| **Sebemrskačství — nepatří nikam** | „kde jsme slabší", „nemáme nativní aplikaci", „bez offline režimu", „poznámka k poctivosti" |

Vymezení rozsahu pojmenovává práci **jiného systému**. Prodává soustředění a skeptikovi říká,
že mu nechceme nahradit to, co funguje. Sebemrskačství pojmenovává **naši nedostatečnost**.

**Dvě věci, které byly chybně označené za naši slabinu** a musí zůstat rámované jako **běžná praxe**:

1. **Práce v prohlížeči telefonu.** Tak to dnes dělá většina srovnatelných systémů a offline režim
   nemá skoro nikdo. Přesto to na sedmi místech stálo jako omezení, včetně přiznání, že
   specializovaná konkurence je v tom silnější. Správně: *nic se neinstaluje, nikdo nic
   neaktualizuje, všichni mají stejnou verzi.*
2. **Hromadná rozesílka z CRM se neposílá schválně.** Newsletter z firemní schránky podřízne
   doručitelnost celé domény — proto se posílá z rozesílacího nástroje. Je to standard, ne nedostatek.

**Co to nelegalizuje:** nadále si **nevymýšlíme**. Mlčet smíme, lhát ne. Když se zájemce zeptá
napřímo, odpověď je pravdivá.

---

## 6b. Web nikdy neodmítá úpravu — vždycky nabídne, že to probereme

**Pravidlo:** nikde na webu nesmí stát *„to neděláme"*, *„to nepostavíme"* ani *„neslibujeme"*.
Když něco v řešení není, píše se, **kdo to dělá** a že se na tom **domluvíme na konzultaci**.

**Proč:** odmítnutí na webu zavírá dveře dřív, než se vůbec začne mluvit. Zájemce si nepřečte
„tohle je poctivá firma", ale „tady mi neporadí" — a zavře kartu. Přitom skoro každý požadavek
se dá buď udělat jako drobná úprava, nebo rozumně rozdělit mezi náš systém a ten, který už mají.
To se ale pozná na hovoru, ne z webu.

**Pozor na rozdíl proti zásadě č. 1** — vypadají opačně a nejsou v rozporu:

| | |
|---|---|
| **Neslibovat konkrétní modul dopředu** (zásada 1) | žádný katalog „klientský portál, sklad, HR" |
| **Neodmítat dopředu** (tahle zásada) | žádné „to neděláme" bez nabídky se o tom bavit |

Dohromady to dává jedinou správnou formulaci: **„ozvěte se, projdeme to a najdeme cestu"** —
bez slibu konkrétní funkce a bez zavřených dveří.

**Co bylo špatně:** homepage tvrdila *„…řekneme rovnou, jestli je to úprava na pár hodin, nebo věc,
kterou neděláme."* Stejně tak komponenta rozšíření (na 12 stránkách), tabulka na `/co-umi/`
(třikrát „Neděláme."), stránka o fakturaci a nadpis „⚠️ Neslibujeme (transparentně)" na `/migrace/`.

**Jak to psát:**

❌ to neděláme · nebudeme to nahrazovat · neslibujeme · nepostavíme
✅ tohle vede váš skladový systém — a když ho máte, napojíme se · ozvěte se a projdeme to spolu ·
na konzultaci si řekneme, jak to rozdělit u vás

**Výjimka, která zůstává:** *nepřejmenováváme základní pojmy* (zásada 9) a *nevykládáme regulaci*
(zásada 10). I ty se ale píšou jako „tohle záměrně necháváme být, protože…", ne jako odmítnutí.

---

## 7. Reference: nejmenujeme, nevymýšlíme

**Pravidlo:** web nejmenuje klienty a **sám od sebe neotevírá**, kolik nasazení za sebou máme.
Zároveň si **nikdy nevymýšlí** nasazení, počty klientů ani reference.

**Proč:** prodáváme produkt, ne historii. Obchodní rozhodnutí padlo 2026-08-01.

**Co bylo špatně:** stránka Twenty Sales měla odstavec, který sám otevíral, že řešení není nasazené
u ostrého klienta, a pak to obhajoval. Zadavatel to trefně nazval blábolem — *„nemůžeme obhajovat,
že to neběží u klientů, prostě je nejmenujeme."* Nahrazeno sekcí, která říká, **co je hotové**
(12 typů záznamů, 6 přehledů, 4 role) a nabízí demo.

**Tvrdá čára:** vymyšlené nasazení nebo reference by při první fact-check schůzce zlomily
důvěryhodnost obou značek. Český trh je malý.

---

## 8. Cena: mimo cenové stránky jen vyhrazený server

**Pravidlo:** na produktových, oborových a SEO stránkách se uvádí **jen 4 990 Kč/měs
za vyhrazený server**. **Cloudový paušál (3 990 Kč) se s cenou objevuje jedině na
`/cloud-vs-selfhost/`** — a ve VOP, kde je to smluvní text. Všude jinde (včetně `/cenik/`,
FAQ a llms.txt) se cloud smí jen zmínit jako druhá varianta se dvěma fakturami
a odkázat na `/cloud-vs-selfhost/`, **bez uvedení našeho cloudového paušálu**.

**Proč:** čtenář, který přišel kvůli obchodu nebo servisu, cloud nehledal a neví o něm.
Druhé číslo mu jen zesložiťuje nabídku, kterou má právě posoudit.

**Zpřísněno 2026-09-03:** původně cloudová cena směla i na `/cenik/`. Klienti ale podle
nižšího paušálu (3 990 < 4 990) volili cloud v domnění, že je levnější — přitom s licencemi
výrobce vyjde od pěti lidí dráž. Sekce „Provoz — 2 varianty" i řádek „Twenty Cloud Pro"
v ročních kalkulacích proto z `/cenik/` zmizely; karty obou paušálů se přesunuly na
`/cloud-vs-selfhost/` (sekce „Co obsahuje náš měsíční paušál"). Ceník prodává jen
vyhrazený server a na cloud odkazuje větou s vysvětlením dvou faktur.

**Zpřísněno 2026-11-12 — cloud jen minimálně:** při aktuálních cenách (Cloud Pro 9 USD,
Cloud Organization 39 USD za uživatele a měsíc) cloud využije jen nejmenší tým bez AI agentů.
Mimo `/cloud-vs-selfhost/` proto cloud dostane **jednu větu a odkaz**, srovnání s konkurencí
**jeden řádek** (cena od tarifu Pro), FAQ mluví jen o vyhrazeném serveru a tarify cloudu se
jinde neporovnávají. SSO, audit log a „každý vidí jen své" se popisují jako **tarif Organization
v cloudu i jako licence pro vlastní server** — nikdy jako „jen v cloudu" (to byla chyba starého webu,
stejně jako tvrzení, že vlastní server neumí Gmail / Microsoft 365 přihlášením účtem).

**Co zůstává nedotknutelné:** kdekoli se cloud zmíní, **musí být přiznaná dvojí fakturace**
(platíte nám v Kč a výrobci v USD). Nikde nesmí vzniknout dojem, že cloud je jedna faktura.

**Vyhrazený server nedoporučujeme podle velikosti firmy, ale podle ceny.** Náš paušál je
u obou variant skoro stejný — jen v cloudu se k němu přičítá licence za každého uživatele.
Vyhrazený server tak vychází stejně nebo líp **hned od začátku**.

---

## 9. Nepřejmenováváme základní pojmy

**Pravidlo:** i u realitky zůstává obchodní případ obchodním případem.

**Proč:** ten název není jen popisek — jede jím AI agent, vazby, skripty i názvy pohledů.
Systém, který se každému klientovi jmenuje jinak, se nedá společně udržovat a hlavně se rozejde
s agentem, který pak radí podle jiného slovníku, než co je na obrazovce.

Oborové nasazení je proto vždycky **„jaká pole přidat"**, nikdy „co přejmenovat".

**Platí to i pro web, nejen pro nasazení.** Datové modely a seznamy entit na oborových stránkách
musí jmenovat entity tak, jak se opravdu jmenují v systému:

| Twenty Sales | Twenty Servis |
|---|---|
| Zájemce · Klient · Kontaktní osoba · Obchodní případ · Nabídka · Projekt · Obchodní plán | Klient · Místo · Zařízení · Servisní plán · Zakázka · Výjezd · Výkaz práce |

**Co bylo špatně (2026-08-04):** oborové stránky si entity převlékaly do oborového slovníku —
`/pro-servisni-firmy/revize/` měla **Revidovaný objekt** a **Revize** místo Zařízení a Zakázky,
`/pro-servisni-firmy/stroje/` **Stroj** místo Zařízení, výtahy **Plán úkonů**, elektro
**Plán kontrol**, chlazení a kotle **Plán prohlídek** — všechno je to Servisní plán.
Na Sales straně se z Klienta stal **Odběratel** (velkoobchod) a **Zákazník** (výrobní firmy)
a ze Zájemce **Poptávka**.

**Proč to škodí zrovna na webu:** čtenář si přejmenovanou entitu přečte jako *„tohle nám
postaví na míru"* — a to je přesně to, co neděláme (zásada 1). Zároveň to rozchází stránku
s demem, které dostane do ruky: v demu uvidí Zařízení, na webu mu slibovali Stroj.

**Jak psát správně:** entita se jmenuje po našem, oborový výraz je popis jejího obsahu —
„Páteř je **Zařízení** — u vás konkrétní stroj se sériovým číslem", „Klient, Místo,
**Zařízení** (revidovaný objekt — elektro / plyn / hromosvod), Servisní plán, Zakázka".
Běžná prózová věta o skutečném zákazníkovi („odběratel to nevidí", „zákazník volá") je
v pořádku a přejmenovávat se nemá — jde jen o **záznamy, karty, pohledy a datové modely**.

---

## 10. Žádné vymyšlené lhůty, normy a oprávnění

**Pravidlo:** na servisních oborových stránkách (výtahy, plynová zařízení, elektro/EZS/EPS,
chladiva) se **neuvádějí konkrétní zákonné lhůty, normy ani autorizace**. Píše se
„systém hlídá lhůty, které si nastavíte".

**Proč:** intervaly a povinnosti se liší podle typu zařízení, prostředí a stáří instalace.
Čtenář je odborník a chybu pozná okamžitě. Navíc nechceme být v pozici, kdy vykládáme regulaci.

**Co bylo špatně:** `/pro-servisni-firmy/revize/` slibovala formuláře podle **ČSN 33 1500
a ČSN 73 0875**. Odstraněno — a nahrazeno poctivým „tiskopisy přesně podle normy neděláme,
specializovaný software je v tom dál".

Nedělame ani **zákonnou evidenci chladiv** ani hlášení; data pro ni umíme dát, výklad ne.

---

## 10b. Jádro se jmenuje „open-source Twenty", ne „open-source CRM Twenty"

**Pravidlo:** když se mluví o **jádru / platformě**, píše se **„open-source Twenty"** —
bez slova CRM. Formulace typu „naše nadstavba nad open-source CRM Twenty" se nepoužívá.

**Proč:** Twenty je platforma, nad kterou stojí naše dvě řešení. Když se jádro pojmenuje jako CRM,
splývá s naším produktem a čtenáři přestane být jasné, co je čí — a proč tedy platí nám,
když je „to CRM" zdarma.

Název **„Twenty CRM"** zůstává tam, kde jde o **produkt jako celek** v očích zákazníka
(titulky stránek, „Co Twenty CRM umí"). Rozdíl: *jádro* = Twenty, *co si zákazník kupuje* =
Twenty Sales nebo Twenty Servis.

---

## 11. Jazyk: web čte jednatel a dispečerka, ne IT správce

**Pravidlo:** žádný anglický žargon bez vysvětlení. Podrobný seznam v `CLAUDE.md`.

**Proč:** tahle persona neumí anglické technické termíny a nemá si je kde dohledat.
Když jim nerozumí, zavře kartu.

**Co se nasbíralo, než se to prošlo:** 60+ výskytů — `row-level` (18×), `OAuth`, `SaaS`, `Kanban`,
`webhook`, `self-hosted`, `framework`, `extension`, `API`. Překlady, které se ujaly:

| Bylo | Je |
|---|---|
| row-level permissions | omezení „vidím jen své záznamy" |
| Kanban pohled | nástěnkový pohled |
| klasické SaaS | uzavřená služba jednoho dodavatele |
| plná OAuth synchronizace | plné napojení schránky |
| aplikační framework | aplikační platforma |

**Nejtechničtější stránky** (`/co-umi/`, `/agentske-crm/`) potřebují největší péči — právě tam
se žargon hromadí nejrychleji.

---

## 11b. Prodejní slovník: ne procedura, ale co z toho zákazník má

**Pravidlo:** i čistě česká slova můžou být špatná, když znějí jako škola, úřad nebo popis
naší procedury. Vždycky psát, co zákazník dostane, ne co budeme dělat my.

**Proč:** čtenář si podle slovesa představí, jak ta schůzka bude vypadat. „Výklad" je hodina,
kterou si musí odsedět; „ukážeme, jak by to vypadalo u vás" je něco, co chce vidět.

**Co se stalo, když se porušilo:** v demo CTA na 37 stránkách stálo *„Když chcete raději
výklad, projdeme si to spolu na 30minutovém hovoru."* První oprava na *„30minutovou
komentovanou ukázku, kde vám to projdeme na vašich situacích"* byla pořád špatně — kostrbatá
a pořád o formě. Teprve *„Raději živě? Na 30 minut online vám ukážeme, jak by to vypadalo
u vás."* říká, co z toho zákazník má, a je o třetinu kratší.

| Nepoužívat | Použít |
|---|---|
| výklad | ukážeme, jak by to vypadalo u vás |
| komentovaná ukázka | (jen když opravdu nejde nic lepšího) |
| projdeme si to na vašich situacích | ukážeme to na vašich zakázkách / číslech |
| prezentace řešení | uvidíte přesně to, co dodáváme |

Slovo **„výklad" zůstává správně** tam, kde jde o výklad předpisů (`/bezpecnost/`,
chladicí technika) — tam je to přesný termín, ne prodejní fráze.

---

## 11c. O sesterské značce a Microsoftu se mluví přes fit, ne přes kvalitu

**Pravidlo:** Power Platform ani bohemiacrm.cz se na tomhle webu nikdy neshazují.
Rozdíl se popisuje jako **vhodnost pro daného klienta**, ne jako slabina technologie.

**Proč:** je to naše vlastní druhá značka a stejný tým. Kdo si přečte obě stránky —
a v malém českém trhu si je přečte —, uvidí agenturu, která pomlouvá vlastní produkt.
Navíc Power Platform je pro velkého klienta pořád ta správná odpověď a nechceme si
zavřít dveře.

**Co se stalo, když se porušilo:** na homepage a `/o-nas/` stálo *„pro firmy, kde Microsoft
přestřelí"*. Nahrazeno *„kterým Power Platform velikostí ani cenou nesedne"* — stejná
informace, ale je to o zákazníkovi, ne o výrobci. V odstavci to navíc navazuje na už
uvedený důvod (drahé licence, dlouhé nasazení, nevyužitá polovina funkcí).

---

## 12. Oborové stránky musí být opravdu jedinečné

**Pravidlo:** každá nová oborová stránka má vlastní bolesti, vlastní zařízení a vlastní konkurenty.
Píší se ručně, žádná sdílená šablona řízená daty.

**Proč:** devět servisních oborů vedle sebe je přesně místo, kde klonované stránky začnou
Googlu číst jako doorway spam — a poškodí i ty dobré. Šablona by k tomu přímo sváděla.

**Vymezení proti sobě navzájem**, aby si stránky nebraly dotazy:
`hvac` = klimatizace a tepelná čerpadla · `chladici-technika` = průmyslové a obchodní chlazení,
mrazírny · `gastro-technika` = kávovary, automaty, výčepní technika.
Kde se překrývají, **odkazují na sebe** místo opakování textu.

---

## 13. Kritérium pro výběr dalších oborů: málo uživatelských rolí

**Pravidlo:** cílit přednostně na segmenty, kde s CRM pracuje **malý počet rolí** —
obchodník, vedoucí, backoffice. Ne celá firma.

**Proč (slovy zadavatele):** *„chceme oslovovat hlavně ty, kde je menší počet uživatelských rolí,
co to používají, aby to vůbec prošlo pořízením CRM."* Čím méně rolí se systému dotkne, tím míň
školení, tím míň odporu, tím kratší rozhodování — a tím spíš se nákup vůbec uskuteční.

Přesně proto funguje stránka **obchodní oddělení výrobní firmy**: zavádět CRM napříč celou výrobou
je projekt na rok, obchodní oddělení je otázka dnů a nikdo jiný o tom nemusí vědět.

---

## 14. Kde je Twenty doopravdy silné

Tři věci, které ERP ani výrobní systém nikdy neudělá — na ty se má vést, ne na konfigurovatelnost:

1. **E-maily a kalendář na kartě klienta.** U výrobců na zakázku se specifikace rodí v e-mailech;
   když jsou u klienta, ví to celý tým, ne jen ten, kdo je psal. A když obchodník odejde,
   historie zůstane firmě.
2. **AI agent nad těmi daty (MCP).** Nepíše text do políčka — čte data, zakládá záznamy, odpovídá
   napříč nabídkami, úkoly i e-maily. A **jede pod rolí toho, kdo se ptá**: co nesmí uživatel,
   nesmí ani agent.
3. **Obchodní vrstva.** Nabídka s nákupní cenou a marží, ceník, plán se semaforem podle času.

**Rozsahová hranice, která z toho plyne:** ve většině Sales oborů pokrývá CRM **práci obchodníka
až po podpis nebo fakturaci**. Co je za tím — výroba, sklad, expedice, vykazování hodin, fakturace —
patří systému, který klient už má. U Twenty Servis je hranice zrcadlová:
zakázka → výjezd → výkaz → zakázkový list. Není to stavební PM, sklad ani účetnictví.

Každá oborová stránka proto nese blok **„Co u nás / Co zůstává jinému systému"**.
Není to disclaimer — je to nejsilnější prodejní argument, protože skeptikovi říká,
že mu nechceme nahradit to, co funguje.

---

## 14b. Demo přístup je hlavní konverzní nástroj — a nikdy neposílat návštěvníka pryč

**Pravidlo:** komponenta `components/demo-cta.latte` patří **na každou stránku, kde čtenář
právě pochopil, co dostane** — vždy právě jednou a **před** závěrečné tmavé CTA, ne vedle něj.
Zároveň platí zákaz: **žádná stránka nesmí posílat návštěvníka na zkušební účet na twenty.com.**

**Proč:** demo přístup do hotového řešení je nejsilnější věc, kterou máme. Zákazník nevidí
prázdný systém k nastavení, ale to, co u nás doopravdy běží — a výměnou za něj dá kontakt.
To je celý smysl webu bez formuláře: mailto s předvyplněným předmětem a tělem je jediné
místo, kde lead vzniká. Čekat s tím až na patičkové CTA je chyba, protože podstatná část
lidí se tam nedoscrolluje; stránky jsou dlouhé.

**Co se stalo, když se porušilo:** na `/kontakt/` — tedy na stránce, kde už člověk **chce**
mluvit s námi — stál blok „Cesta 1 — sami" s tlačítkem *Otevřít twenty.com →* a nabídkou
zkušebního účtu zdarma na 7 dnů. Poslat rozhodnutého zájemce ven na prázdnou cloudovou
instanci znamená dvě věci najednou: dá si pauzu na rozmyšlenou a uvidí produkt bez všeho,
čím se lišíme (ARES, nabídky s marží, oborový datový model). Blok byl zrušen.

Totéž se pak našlo ještě na pěti dalších místech — v závěrečném CTA homepage,
`/cenik/`, `/crm-open-source-cesky/` a `/open-source-crm-srovnani/` stálo „Chcete si
Twenty osahat sami? Na twenty.com máte základní cloudovou variantu zdarma na 7 dnů…",
a `/cloud-vs-selfhost/` cloud dokonce **obhajoval** tím, že je dobrý na nezávazné
vyzkoušení. Všude nahrazeno nabídkou vlastního dema; na `/cloud-vs-selfhost/` navíc
poctivějším důvodem (cloud = licence v dolarech za uživatele a dvě faktury).
FAQ „Můžu si Twenty nejdřív vyzkoušet?" mělo dvě cesty — zůstala jedna, naše.

**twenty.com smí být odkazované už jen jako zdroj:** v patičce, v disclaimeru
„nejsme Twenty Inc.", v právních textech a tam, kde stránka pojednává o open source
jádru nebo o licenci.

**Provozní detaily:**
- Šablony `demo`, `demo-sales`, `demo-servis` v `Helpers::mailtoTemplates()` — vždy 3 krátké
  kvalifikační otázky, ne dotazník.
- Na produktových a oborových stránkách předávat `produkt => 'sales' | 'servis'`, aby text
  jmenoval konkrétní věci, které v demu uvidí. Bez parametru komponenta nabídne obě.
- Slibujeme **1 pracovní den** a „zdarma, bez závazku a bez kreditní karty" — obojí musí platit.
- Na oborových stránkách stojí hned za blokem „Které řešení pro vás": čtenář v tu chvíli ví,
  které řešení je jeho, takže demo dává největší smysl právě tam.

---

## 14c. Popisujeme, co uvádí Twenty — nerozvádíme, co jsme sami nezkoušeli

**Pravidlo:** o funkcích Twenty píšeme to, co uvádí samo Twenty (dokumentace, poznámky k vydáním,
twenty.com). Provozní detaily, které dokumentace nepopisuje a které jsme v praxi nepotřebovali my ani
naši klienti, **nedohledáváme v kódu a nerozvádíme** — žádné „na vlastním serveru je potřeba ještě
služba X", „cestu vybereme při nasazení", „ověříme před nasazením". Buď to je v podkladech výrobce,
nebo to na webu není.

**Proč:** popisujeme platformu, ne vlastní zkušenost s každou její funkcí. Detail vyčtený z kódu
čtenáře zatíží, může být zastaralý a vzbuzuje dojem, že funkce je složitá nebo že ji máme vyzkoušenou.

**Případ (2026-11-13):** článek o sdílené schránce a o e-mailu rozváděl, že přeposílání na vlastním
serveru potřebuje Amazon SES (vyčteno z konfigurace v kódu, dokumentace o tom mlčí). Odstraněno.
Stejně tak u servisního plánu web tvrdil „systém v noci vytvoří zakázku" — správně je **„podle
nastaveného pravidla"**, bez uvádění času (opraveno na stránce Twenty Servis, 9 oborových stránkách,
v reseni.json a v průvodci).

---

## 14d. „Lze nastavit" není „máte hotové" — a nastavení není automaticky v ceně

**Pravidlo:** průvodce popisuje, co umí **platforma Twenty**. To je něco jiného než to, co mají hotové naše řešení
Twenty Sales a Twenty Servis. Štítek stavu proto zní **„Lze nastavit dnes"** (ne „Funguje dnes") a v textu
píšeme „v Twenty lze nastavit", „Twenty umožňuje". Jako hotové uvádíme jen to, co je doložené na stránkách řešení.
„Nastavíme / připravíme / při nasazení" jen u věcí z rozsahu nasazení (`pricing.json` → `implementation.includes`);
jinak poctivě: **nastavení je práce navíc** — drobnost z hodiny měsíčně v paušálu, větší úprava po odhadu předem
([SLA balíčky](/sla-balicky/)). Bez „zdarma", bez cen v hodinách v článcích, bez odmítání.

**Proč:** čtenář bral „funguje dnes" jako „dostanu to", a „nastavíme spolu s vámi" jako službu v ceně.
Obojí by vedlo ke sporu po podpisu.

**Kde je to zapsané v kódu:** štítky a vysvětlivka pod každým blokem stavu (`src/lib/twenty.mjs`) —
změna se projeví všude najednou, včetně `/agentske-crm/`.

---

## 15. Technické zásady, které se osvědčily

**Build je dvoukrokový a dělá se lokálně.** Na Svethostingu není npm ani PHP build —
nahrává se hotový obsah `html/`.

```bash
cd web && npm run build:css && cd .. && php web/build.php
```

`php build.php` **jen kopíruje** `public/style.css`; Tailwind se musí přegenerovat zvlášť,
jinak nové utility třídy v CSS chybí. `html/` i `web/public/style.css` jsou gitignorované.

**Pozor na `npm --prefix web run build:css`** — podle aktuálního pracovního adresáře tiše
neproběhne. Spouštět z `web/`.

**Tři soubory musí zůstat v synchronu:** `web/src/Router.php`, `web/build.php` (`$routes`)
a `web/src/Controllers/PageController.php`. Přidání stránky znamená úpravu všech tří.

**Čísla ber z `pricing.json`, nikdy je nepiš do šablony.** Při přecenění na 34 990 přežila
stará cena 19 990 na `/crm-open-source-cesky/` s pevnými mezerami (`19&nbsp;990`), takže ji
nenašel ani grep. Srovnávací tabulka na homepage se proto generuje z `comparison_examples`.

**`[x-cloak]` musí být v CSS.** Alpine se načítá s `defer`; bez toho pravidla problikne
mobilní menu i rozbalovací „Řešení" při každém načtení stránky.

**`overflow-wrap: break-word` na nadpisech.** Čeština má dlouhá složená slova
(„elektromontážní"), která na 375 px přetečou a posunou celou stránku.

**Tabulky vždy do `.overflow-x-auto`.** Jinak roztáhnou stránku na mobilu.

**Střídání pozadí sekcí** má být pravidelné `T s b s b … s T`. Dvě stejná za sebou vypadají
jako jedna dlouhá plocha.

**V Latte komentáři nesmí být vnořený další komentář.** Latte komentář končí u **prvního**
ukončení, které najde. V hlavičce `demo-cta.latte` byl v ukázce použití vnořený komentář —
docblock se tím uzavřel uprostřed a zbytek (seznam parametrů) se vysázel jako text
na všech 37 stránkách, kde komponenta je. V ukázkách použití psát pomlčku, ne komentář.

**Po přidání komponenty kontrolovat vysázený text, ne jen rozvržení.** Ten uniklý docblock
prošel mou kontrolou přetečení na 375 px, protože jsem měřil šířky, ne obsah. Grep
na `{*`, `*}`, `Params:` a `optional:` ve výstupním HTML to najde okamžitě.

**Kontrolní smyčka, která se osvědčila:** stáhnout `sitemap.xml`, projít všechny URL
ve skrytých iframech na 375 px a hlídat tři věci najednou — `scrollWidth − 375 > 0`
(přetečení), počet výskytů nové komponenty (nesmí být dvakrát na stránce) a únik
šablonové syntaxe. Odhalí i staré chyby: takhle vyskočilo přetečení ceny
„34 990 Kč / bez DPH, jednorázově" na `/cenik/` o 6 px, které tam bylo dávno
(flex bez `flex-wrap`).

**JSON datové soubory needitovat přes `json_decode` → `json_encode`.** Přepíše to formátování
celého souboru — v `faq.json` z toho byl diff 470 řádků místo dvou. Nahrazovat cíleně v textu
a validitu ověřit až potom.

---

## 16. Jak se v tomhle projektu pracuje

- **Návrh před implementací.** U větších vizuálních nebo obsahových změn nejdřív předložit
  variantu k odsouhlasení. Vzniklo poté, co dvě neschválené verze sekce ceníku šly rovnou do kódu
  a musely se zahodit.
- **Ptát se, když si nejsem jistý faktem o produktu.** Web musí být pravdivý; odhad se pozná
  a stojí důvěryhodnost.
- **Rozpracovanou práci uživatele necommitovat bez zeptání** — v tomhle repu jsou to
  `web/views/pdf-prezentace-hvac*.latte`.
- **Když se něco rozhodne, zapsat to sem a do `CLAUDE.md`** — ne do třetího dokumentu.

---

## Otevřené věci (stav 2026-08-02)

- **Ikony jen v SVG.** Odkazy na `brand/favicon.png` a `brand/apple-touch-icon.png` byly
  z `base.latte` odstraněny (2026-08-02) — soubory v repu nikdy nebyly a vracely 404.
  Favicon funguje přes `logo.svg`, což dnešní prohlížeče preferují; chybí jen ikona
  při přidání na plochu telefonu. Logo je široký nápis (296×75), takže čtvercová ikona
  z něj nejde udělat pouhým přejmenováním — až vznikne, vrátit oba `<link>` zpátky.
- **Prezentace `pdf-prezentace-hvac*.latte`** stále obsahují slib „Sklad, HR, klientský portál —
  přidáme nad stejnou kostrou", který je proti zásadě č. 1.
- ~~K potvrzení u Twenty Servis~~ — **ověřeno v repozitáři servis-hvac 2026-11-13:** šablony dokumentů má i Servis
  (od 1.30.22, převzaté ze Sales) — opraveno v `reseni.json`; marži na nabídce má i Servis; prověření rizika klienta
  (insolvence) je jen v Sales (Servis má z ARES DIČ a přenesenou daňovou povinnost).
