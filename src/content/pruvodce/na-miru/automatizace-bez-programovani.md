---
title: Co může CRM dělat samo — automatizace v Twenty bez programování
description: Automatizace v Twenty se skládá z hotových kroků a spustí se sama — při vzniku nebo změně záznamu, podle plánu, tlačítkem, zvenčí nebo s příchozím e-mailem. Přehled spouštěčů a kroků včetně AI, čekání a záznamu průběhu ve verzi 2.57.
vMenu: Automatizace bez programování
poradi: 4
overeno: 2026-11-13
verzeTwenty: '2.57'
temata: [automatizace, ai]
funkce: [automatizace, zaznam-behu-automatizace, pridelovani-dokola, cekani-na-udalost, koncept-emailu, ai-krok-automatizace, ai-trideni, mcp-spousti-automatizaci, schvaleni-clovekem]
zdroje: [docs-spoustece, docs-akce, twenty-vydani, github-twenty-v2-46-0, docs-opravneni, twenty-workflows-overview, twenty-capabilities-workflow-branches, twenty-capabilities-workflow-runs, twenty-need-more-help-workflows-faq]
---

**Automatizace v Twenty je řada kroků, která proběhne sama, když se v CRM něco stane — vznikne
nebo se změní záznam, přijde e-mail, nastane naplánovaný čas nebo někdo klikne na tlačítko.
Skládá se v nastavení z hotových kroků, bez programování: založit úkol, změnit stav, poslat
e-mail, počkat na odpověď klienta, nechat AI poptávku roztřídit.**

Tenhle článek je přehled: čím se automatizace spouští, z čeho se skládá a jak se hlídá.
Konkrétní použití rozebírají navazující články — [rozdělování poptávek](/twenty/obchod/rozdelovani-poptavek/),
[třídění poptávek s AI](/twenty/obchod/trideni-poptavek-s-ai/),
[úkol a e-mail po schůzce](/twenty/po-jednani/ukol-a-e-mail-po-schuzce/) a
[kdo se odmlčel](/twenty/po-jednani/kdo-se-odmlcel/). AI agenty, kteří pracují samostatně,
popisuje článek [Agenti v Twenty](/twenty/ai-agenti/agenti-v-twenty/).

## Co vám to umožní

- **Nic nezapadne mezi lidmi.** Vyhraný obchod sám založí úkol kolegyni z kanceláře, nová
  poptávka hned dostane vlastníka. Nikdo nemusí nic přeposílat.
- **Méně přepisování.** Údaje z formuláře na webu nebo z jiného systému se zapíšou do CRM samy,
  i s dohledáním, jestli už klient existuje.
- **Pravidelné kontroly bez připomínek v diáři.** Automatizace podle plánu každé ráno projde,
  co je po termínu, a řekne to tomu, koho se to týká.
- **Stejný postup u každého.** Pravidlo platí pro nového obchodníka stejně jako pro toho, kdo
  ve firmě pracuje dvacet let.
- **Přehled, co se stalo.** U každého spuštění je vidět, který krok proběhl a s jakými údaji.

## Jak to v Twenty funguje

**Spouštěče.** Každá automatizace začíná právě jedním spouštěčem:

- **vznik, změna nebo smazání záznamu** — u libovolného typu, i u vlastních. U změny jde hlídat
  jen vybraná pole, třeba fázi obchodu. Pro záznamy zakládané ručně výrobce doporučuje spouštěč
  „vznik nebo změna": Twenty ukládá průběžně, takže by se automatizace jinak rozběhla dřív, než
  člověk vyplní všechna pole;
- **ručně** — z nabídky příkazů nebo tlačítkem nad vybranými záznamy, buď pro každý záznam zvlášť,
  nebo jednou pro celý výběr. Od verze 2.57 může připravenou automatizaci spustit i AI asistent
  připojený přes [MCP](/twenty/mcp/co-je-mcp/);
- **podle plánu** — každých pár minut, hodin nebo dní;
- **zvenčí** — Twenty dá automatizaci vlastní webovou adresu (webhook), na kterou pošle údaje
  jiný systém, třeba formulář na vašem webu;
- **příchozí e-mail nebo schůzka** — e-maily a události z připojených schránek jsou v Twenty
  také záznamy, takže automatizace může zareagovat na nový e-mail. Od verze 2.44 jim umí doplnit
  i vlastní pole, například kategorii z třídění.

**Kroky.** Za spouštěčem následuje libovolný počet kroků, které na sebe navazují — každý může
použít údaje z předchozích:

- **práce se záznamy** — založit, upravit, smazat, najít (až 200 záznamů najednou), nebo
  „založit, a když už existuje, upravit" podle jedinečného údaje, třeba firmu podle domény;
- **výběr člověka** — od verze 2.16 vybere z určeného seznamu jednoho: dokola, toho s nejmenším
  počtem přidělených záznamů, nebo náhodně;
- **řízení průběhu** — opakování pro každý záznam ze seznamu, filtr, který pustí dál jen záznamy
  splňující podmínku, větvení „když – jinak", čekání na dobu nebo na datum a od verze 2.46
  **čekání na událost**: automatizace se zastaví a pokračuje, až se záznam změní nebo uplyne
  nastavený čas;
- **komunikace** — odeslat e-mail z připojené schránky, nebo ho jen **uložit jako koncept**,
  aby ho člověk zkontroloval a odeslal sám; založit událost v připojeném kalendáři i s pozvánkou;
  u ručně spuštěné automatizace se formulářem zeptat na údaje;
- **napojení** — zavolat jiný systém (požadavek HTTP) nebo spustit vlastní kód v JavaScriptu.
  Tady programování začíná; pro běžné postupy ho není potřeba;
- **AI** — **AI krok** přečte údaje, shrne je, rozhodne nebo doplní pole; od verze 2.56 s vlastním
  rozsahem oprávnění. **Třídění** (v anglickém rozhraní Classify, od verze 2.42) odpoví na otázky,
  které nastavíte — ano/ne, výběr z možností nebo skóre — vždy v pevném tvaru, takže se podle
  odpovědi dá spolehlivě větvit.

**Záznam průběhu.** Každé spuštění se zapisuje: kdy začalo, jestli běží, skončilo, čeká nebo
selhalo, a co vstoupilo a vystoupilo z každého kroku. Od verze 2.9 jsou vidět krok po kroku
i volání AI, výsledek kódu, požadavky do jiných systémů a odeslané e-maily. Od verze 2.14 jde
neúspěšný běh pustit znovu **od kroku, který selhal**, ne celý od začátku. Sám se běh neopakuje.

Novou automatizaci jde před zapnutím vyzkoušet na zkušebních údajích. Přehled je v
[dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/workflows/overview); popis všech
kroků včetně AI je zatím jen v [anglické verzi](https://docs.twenty.com/user-guide/workflows/capabilities/workflow-actions).

:::poznamka[Ilustrační příklad]{ton="info"}

Firma dodává a montuje stínicí techniku a obchod vede v [Twenty Sales](/pro-obchodni-tymy/),
naší nadstavbě nad open-source Twenty. Jedna automatizace hlídá fázi **Obchodního případu**:

1. **Spouštěč:** změna obchodního případu, hlídané pole Fáze.
2. **Větvení:** když je fáze *Vyhráno*, založí úkol kolegyni z kanceláře *„Objednat materiál"*
   s termínem na zítřek a uloží koncept e-mailu klientovi s dalším postupem. Když je fáze
   *Prohráno* a hodnota přes 300 000 Kč, dostane úkol vedoucí: *„Projít důvod prohry"*.
3. **Fáze Nabídka:** automatizace počká, až se fáze změní, nejdéle sedm dní. Když se nezměnila,
   AI krok shrne poslední komunikaci a obchodník dostane úkol *„Ozvat se k nabídce"* i s tím
   shrnutím.

Jednou běh skončí chybou — u klienta chybí kontaktní osoba s e-mailem. Správce v záznamu průběhu
uvidí, který krok selhal, údaj doplní a běh pustí znovu od toho kroku.

:::

## Co je k tomu potřeba

- **Popsaný postup.** Kdo co dělá, kdy a co se má stát potom. Výrobce sám radí začít jednoduše
  a postup si rozmyslet dřív, než se začne skládat.
- **Hotové řešení jako základ.** Automatizace a fáze procesů, které patří k
  [Twenty Sales](/pro-obchodni-tymy/) nebo [Twenty Servis](/pro-servisni-firmy/) — našim
  nadstavbám nad open-source Twenty —, nastavíme
  při nasazení. Další automatizace podle vašich pravidel lze nastavit kdykoli později — je to
  práce navíc: drobnost se vejde do hodiny měsíčně v paušálu, větší úpravu odhadneme předem,
  viz [SLA balíčky](/sla-balicky/).
- **Oprávnění.** Automatizace vytváří a zapíná jen ten, kdo k nim má v roli přístup. AI krok
  pracuje pod vlastní rolí, takže smí jen to, co mu povolíte.
- **AI model, pokud automatizace používá AI.** Na vyhrazeném serveru přes vaše vlastní klíče
  k AI, za které platíte přímo poskytovateli. Krok Třídění navíc potřebuje hodnoticí model,
  který musí správce zapnout — podrobnosti v článku o [třídění poptávek](/twenty/obchod/trideni-poptavek-s-ai/).

:::otazky

### Potřebujeme k automatizacím programátora?

Pro běžné postupy ne. Úkoly, změny stavu, e-maily, čekání, větvení i AI kroky se skládají
v nastavení. Kód a volání jiných systémů přijdou na řadu až u napojení nebo vlastních výpočtů.

### Co když automatizace selže?

V záznamu průběhu je vidět, který krok selhal a proč. Po opravě se běh pustí znovu od toho
kroku. Sama se automatizace znovu nespouští.

### Může automatizace poslat e-mail klientovi sama?

Může, krok Odeslat e-mail ho pošle z připojené schránky. Když chcete, aby text nejdřív viděl
člověk, použije se koncept. Jak v Twenty zůstává poslední slovo člověku, popisuje článek
[Schválení člověkem](/twenty/po-jednani/schvaleni-clovekem/).

### Jaký je rozdíl mezi automatizací a AI agentem?

Automatizace jde pevně danými kroky. Agent dostane zadání a sám volí, jak ho splnit, v mezích
své role. Obojí jde spojit: AI krok je agent uvnitř automatizace.

### Spustí se automatizace i při importu dat?

Ano, spouštěč „vznik záznamu" reaguje i na záznamy z importu. Výrobce proto doporučuje před
velkým importem automatizace nad daným typem záznamu dočasně vypnout, aby neodešly nečekané
e-maily nebo nevznikly zbytečné úkoly.

:::
