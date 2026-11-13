---
title: Co může AI v servisní firmě převzít už dnes — a co zůstává dispečerovi
description: Zakázka z e-mailu klienta, popis práce z výkazů techniků, připomínky prevencí a odpovědi z dat bez hledání. Co z toho v Twenty a Twenty Servis funguje dnes, co se připravuje a co dál rozhoduje člověk.
vMenu: AI v servisní firmě
draft: true
poradi: 4
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [servis, ai, agenti, automatizace]
funkce: [ai-agenti, ai-krok-automatizace, ai-trideni, koncept-emailu, automatizace, ai-chat, mcp-server, posta-kalendar, vlastni-klice-ai, ada-tymova-schranka, schvaleni-clovekem, mcp-klient, smer-agent-cte-prilohy]
zdroje: [docs-akce, docs-spoustece, docs-ai-chat, docs-mcp, docs-ai-faq, gh-vydani, gh-prepinace]
---

**V servisní firmě AI dnes nejvíc pomůže s papírováním kolem zakázky: z e-mailu klienta připraví
zakázku se shrnutím, z poznámek techniků sestaví popis práce pro klienta, připomene prevence
a odpoví na otázky nad daty bez hledání. Kdo kam pojede, za kolik a co odejde klientovi, dál
rozhoduje dispečer.**

Rozdíl proti chatbotovi „vedle" je v tom, že AI pracuje přímo s daty v CRM — s klienty, zařízeními,
zakázkami a výkazy. U každé úlohy níže píšeme, čím jde dnes: co je hotové v [Twenty Servis](/pro-servisni-firmy/)
(naší nadstavbě nad open-source Twenty pro montáž a servis u zákazníka), co se nastavuje jako
automatizace v Twenty a co se teprve připravuje.

## Co vám to umožní

- **Dispečer** dostává požadavky klientů jako rozpracované zakázky se shrnutím, ne jako
  e-maily k přepsání.
- **Technik** po výjezdu zapíše pár řádků a srozumitelný text pro klienta za něj sestaví AI.
- **Majitel** se zeptá běžnou řečí — „u kterých zařízení končí záruka do měsíce?" — a nemusí
  čekat, až mu někdo udělá tabulku.
- **Klient** dostane návrh termínu prevence dřív, než si na ni sám vzpomene.

## Co jde dnes

**1. Zakázka z e-mailu klienta.** Automatizace v Twenty se umí spustit i příchozím e-mailem.
AI krok **třídění** rozhodne, jestli jde o požadavek na servis, obchodní dotaz, nebo něco jiného;
u servisu další AI krok založí **Zakázku** navázanou na **Klienta** a do popisu shrne, co klient
chce. Dispečer zakázku zkontroluje, doplní a naplánuje **Výjezd**. *Dnes: automatizace s AI,
nastavuje se podle toho, kam vám požadavky chodí — do schránky dispečera, nebo na společnou
adresu typu servis@.*

**2. Popis práce z výkazů.** Technici do **Výkazu práce** píšou krátce: „vyměněno těsnění,
vyčištěna sítka". Na zakázce je tlačítko, které z hotových výkazů sestaví souvislý popis provedené
práce pro zakázkový list. *Dnes: hotové v Twenty Servis.* Podrobně v článku
[Servisní výkaz](/twenty/servis/servisni-vykaz/).

**3. Připomínky prevencí.** Pravidelné prohlídky zakládá Twenty Servis samo — **Servisní plán**
vytvoří zakázku i výjezd podle pravidla, jak je u zařízení nastavené. To není AI, ale pravidlo, které nastavíte
u zařízení. AI k tomu může přidat dopis: automatizace podle plánu jednou týdně vezme výjezdy
na další týdny a ke každému připraví e-mail klientovi s navrženým termínem. Zpráva se uloží jako
**koncept**, dispečer ji zkontroluje a odešle sám. *Dnes: Servisní plán je součást Twenty Servis,
koncepty e-mailů přidá automatizace s AI krokem.*

**4. Odpovědi z dat bez hledání.** V AI chatu přímo v Twenty se dispečer zeptá: „Kdy u nás byl
naposledy technik na kávovaru v kavárně na náměstí a co měnil?" nebo „Kolik výjezdů měl tento
klient letos?" AI chat zná stránku, na které jste, takže na kartě zařízení stačí „tohle zařízení".
Dispečer může do chatu nahrát i PDF objednávku a požádat o shrnutí. *Dnes: AI chat v Twenty;
stejně tak Claude nebo ChatGPT připojený přes MCP.*

**5. Týdenní přehled pro majitele.** AI agent se spustí podle plánu — třeba v pondělí ráno —
projde otevřené zakázky a výjezdy, ke kterým chybí výkaz, a připraví krátké shrnutí. *Dnes: agent
se spouštěčem podle plánu; co přesně má hlídat, se nastavuje při nasazení.*

Jak jsou agenti, spouštěče a AI kroky poskládané, vysvětluje článek
[Agenti v Twenty](/twenty/ai-agenti/agenti-v-twenty/). Kroky automatizací popisuje
[dokumentace výrobce](https://docs.twenty.com/cs/user-guide/workflows/capabilities/workflow-actions).

## Co se připravuje

Výrobce ve vydáních 2.46–2.57 ohlásil další věci, které jsou zatím za přepínačem nebo ve zkušebním
provozu, tedy ne běžně dostupné:

- **Ada v týmové schránce** — dispečer v konverzaci označí AI asistentku a předá jí úkol jako
  kolegovi.
- **Schválení uvnitř běhu agenta** — agent připraví krok, zeptá se člověka a pokračuje až po
  odpovědi. Dnes stejnou kontrolu zajišťují koncepty a zakázky, které dispečer potvrdí.
- **AI, která si sama sáhne do dalších systémů** přes MCP — třeba do skladového programu,
  bez kopírování dat.
- **Agent sám přečte přílohy záznamu** — objednávku nebo protokol. Zatím jen směr vývoje,
  rozpracovaný v kódu.

## Co zůstává člověku

**Plán techniků.** Kdo kam a kdy pojede, sestavuje dispečer v plánovači Twenty Servis — systém
mu hlídá kolize a AI dodá podklady. Velcí dodavatelé už nabízejí agenty, kteří plán sami navrhují;
jak daleko jsou, popisuje článek [AI v servisu ve světě](/twenty/servis/ai-v-servisu-ve-svete/).
**Cena a termín pro klienta.** AI připraví návrh, rozhoduje člověk. **Co odejde klientovi.**
Zprávy psané AI se ukládají jako koncepty; automatické odeslání je volba, kterou zapnete jen vědomě.

:::poznamka[Ilustrační příklad]{ton="info"}

Firma servisuje tepelná čerpadla u rodinných domů. Na servis@ přijde e-mail: „Venkovní jednotka
hlučí a na displeji svítí chyba, můžete přijet?" Automatizace ho vyhodnotí jako požadavek na
servis, najde klienta podle adresy odesílatele, založí zakázku typu Oprava a do popisu napíše
shrnutí. Dispečerka Eva ji ráno najde mezi novými zakázkami, doplní zařízení a v plánovači dá
výjezd technikovi, který čerpadlo montoval.

Druhý den technik vyplní výkaz, Eva nechá z výkazu sestavit popis práce a vystaví zakázkový list.

:::

## Co je k tomu potřeba

- **Twenty Servis** — zakázky, výjezdy, výkazy, Servisní plán a souhrn z výkazů jsou hotové.
  Nasazení za {{cena.implementation}} bez DPH jednorázově, provoz na vyhrazeném serveru
  {{cena.retainer_selfhost|mesicne}} bez DPH. Podrobnosti v [ceníku](/cenik/).
- **AI model a klíč.** Na vyhrazeném serveru zadáte vlastní klíče k AI (BYOK) — za AI platíte
  přímo poskytovateli, bez naší přirážky. Odhad nákladů v článku
  [Kolik stojí AI agenti](/twenty/naklady/kolik-stoji-ai-agenti/).
- **Napojenou poštu**, pokud chcete zakázky z e-mailů —
  [synchronizace e-mailů a kalendáře](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/).
- **Jednu úlohu na začátek.** Nejlépe tu, která se často opakuje a dá se snadno zkontrolovat.
  Postup popisuje [pilot na jedné úloze](/twenty/naklady/pilot-ai/).

:::otazky

### Naplánuje AI výjezdy techniků sama?

Ne. Plán sestavuje dispečer v plánovači Twenty Servis, který hlídá kolize. AI mu pomůže
s podklady — co je potřeba naplánovat a co se u zařízení dělo.

### Pošle AI klientovi e-mail bez našeho vědomí?

Nemusí. Zprávy napsané AI se ukládají jako koncepty, které dispečer zkontroluje a odešle sám.

### Co když AI založí zakázku špatně?

Zakázku z e-mailu dispečer vždycky kontroluje před naplánováním výjezdu. První týdny je dobré
sledovat, kde se AI netrefí, a podle toho zpřesnit zadání.

### Potřebují technici k AI něco navíc?

Ne. Technik vyplňuje výkaz v telefonu jako dosud; souhrn pro klienta se spouští na zakázce.

:::
