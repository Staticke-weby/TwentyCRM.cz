---
title: Které úlohy může AI agent převzít v obchodě a servisu — a co z toho jde dnes
description: Patnáct konkrétních úloh pro AI v obchodě a servisu — třídění poptávek, příprava na schůzku, zakázka z e-mailu, souhrn z výkazů, hlídání obchodů bez pohybu. U každé poctivě, jestli jde v Twenty dnes a čím, nebo se teprve připravuje.
vMenu: Úlohy pro AI agenta
poradi: 3
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [ai, agenti, obchod, servis]
funkce: [ai-agenti, ai-krok-automatizace, ai-trideni, pridelovani-dokola, ai-chat, mcp-server, posta-kalendar, sdilena-schranka, zapisniky-schuzek, slucovani-duplicit, ada-tymova-schranka, schvaleni-clovekem, mcp-klient, smer-agent-cte-prilohy]
zdroje: [docs-akce, docs-spoustece, docs-ai-chat, docs-mcp, gh-vydani, gh-prepinace, twenty-capabilities-ai-agents]
---

**AI v CRM dnes zvládne hlavně práci, která má jasný začátek a kontrolovatelný výsledek: roztřídit
poptávku, shrnout historii klienta, z e-mailu založit zakázku, napsat první verzi odpovědi. Rozhodnutí
o ceně, termínu a o tom, co jde ke klientovi, zůstávají u lidí.**

Část úloh dělá **agent sám** — spustí ho nová poptávka, e-mail nebo plán. Část dělá **AI na vyžádání**:
AI chat přímo v Twenty, nebo Claude či ChatGPT připojený přes MCP. U každé úlohy proto píšeme, čím
jde dnes a jestli ji v [Twenty Sales](/pro-obchodni-tymy/) nebo [Twenty Servis](/pro-servisni-firmy/)
(naše nadstavby nad open-source Twenty) už máte hotovou. Rozdíl mezi agentem a asistentem vysvětluje článek
[Co je AI agent](/twenty/ai-agenti/co-je-ai-agent/).

## Co vám to umožní

- **Obchodník** tráví čas jednáním, ne tříděním a přepisováním.
- **Dispečer** dostává požadavky klientů už jako zakázky se shrnutím.
- **Technik** po výjezdu nepíše dlouhé popisy pro klienta.
- **Majitel** má jistotu, že žádný obchod ani zakázka neusne bez povšimnutí.

## Jak to v Twenty funguje: úlohy v obchodě

1. **Třídění nových poptávek.** Když přibude **Zájemce**, AI odpoví na otázky, které nastavíte —
   poptávka, nebo dotaz? jak konkrétní zájem? — a automatizace ho přidělí dalšímu obchodníkovi
   v pořadí. *Dnes lze nastavit: agent sám — třídění (Classify) a rozdělování dokola v automatizaci.*
2. **Doplnění údajů o firmě.** Údaje z ARES se načtou podle IČO; AI krok z textu poptávky vyplní
   další pole, třeba obor nebo předmět zájmu. *Dnes: načtení z ARES je součást Twenty Sales
   i Twenty Servis, doplnění dalších polí lze nastavit jako AI krok.*
3. **Příprava na schůzku.** Shrnutí historie klienta — obchodní případy, nabídky, poslední e-maily —
   za pár desítek vteřin. *Dnes: na vyžádání v AI chatu (odkaz na záznam přes @) nebo v Claude či
   ChatGPT přes MCP.* Podrobně v článku [Příprava na schůzku](/twenty/po-jednani/priprava-na-schuzku/).
4. **Souhrn obchodního případu s doporučením.** AI projde pole případu, nabídky, poznámky a e-maily
   s kontaktní osobou a navrhne, co udělat teď. *Dnes: hotové v Twenty Sales, na tlačítko.*
5. **Návrh e-mailu po schůzce.** Ze zápisu schůzky připraví AI shrnutí, úkol a návrh e-mailu klientovi,
   který čeká ve schránce jako koncept. *Dnes lze nastavit: agent sám — AI krok a krok Koncept e-mailu; zápis
   z nahrávání schůzek nebo z nástrojů jako Fireflies a Granola.* Viz
   [Ze schůzky úkol a e-mail](/twenty/po-jednani/ukol-a-e-mail-po-schuzce/).
6. **Hlídání obchodů bez pohybu.** Každé pondělí AI projde **Obchodní případy** a **Nabídky**, které se
   dlouho nepohnuly, a vlastníkům založí úkol se shrnutím poslední komunikace. *Dnes lze nastavit: agent sám,
   spouštěč podle plánu.*
7. **Rozpracovaná nabídka z podkladů.** Obchodník zadá, co klient chce, a AI z ceníku sestaví
   **Nabídku** jako rozpracovanou. Obchodník zkontroluje ceny a teprve pak ji vystaví.
   *Dnes: na vyžádání v Claude nebo ChatGPT přes MCP.*

## Úlohy v servisu

8. **Zakázka z e-mailu klienta.** E-mail na servis@ nebo do schránky dispečera AI vyhodnotí; když jde
   o požadavek na servis, založí **Zakázku** navázanou na **Klienta** a **Místo** a shrne, co klient
   chce. *Dnes lze nastavit: agent sám — spouštěč na příchozí e-mail, třídění a AI krok; dispečer zakázku
   zkontroluje a naplánuje **Výjezd**.*
9. **Souhrn z výkazů pro klienta.** Z krátkých poznámek techniků ve **Výkazech práce** vznikne
   srozumitelný popis provedené práce do zakázkového listu. *Dnes: hotové v Twenty Servis,
   na tlačítko.*
10. **Domluva termínu prevence.** Zakázku a výjezd podle **Servisního plánu** založí Twenty Servis samo;
    AI k tomu připraví koncept e-mailu klientovi s navrženým termínem. *Dnes: Servisní plán je součást
    Twenty Servis, koncept e-mailu lze doplnit automatizací s AI krokem.*
11. **Odpovědi dispečerovi nad daty.** „U kterých **Zařízení** končí záruka do 30 dnů?" nebo „Kolik
    výjezdů měl Klient X letos?" *Dnes: na vyžádání v AI chatu nebo přes MCP.*
12. **Zpracování přiložené objednávky nebo protokolu.** Dispečer nahraje PDF do AI chatu a požádá
    o založení zakázky z jeho obsahu. *Dnes: na vyžádání v AI chatu. Aby agent četl přílohy
    záznamů sám, je zatím jen směr vývoje — v kódu rozpracované.*

## Napříč firmou

13. **Úklid duplicit.** AI pomůže najít a sloučit dvakrát založené firmy, osoby i další záznamy.
    *Dnes: slučování duplicit s pomocí AI (od verze 2.53).*

**Připravuje se** (ohlášeno ve vydáních, zatím za přepínačem nebo ve zkušebním provozu):

14. **Úkol předaný AI v týmové konverzaci.** Kolega v týmové schránce označí AI asistentku Adu
    a ona úkol převezme jako člověk. *Připravuje se.*
15. **Agent se zeptá a počká na schválení.** Agent připraví krok, pošle ho člověku a pokračuje až po
    odpovědi. *Připravuje se — dnes kontrolu zajišťují koncepty.* Stejně tak **AI v Twenty, která
    si sama sáhne do dalších firemních systémů** přes MCP — připravuje se.

Jak jsou agenti, spouštěče a AI kroky poskládané, vysvětluje článek
[Agenti v Twenty](/twenty/ai-agenti/agenti-v-twenty/).

:::poznamka[Ilustrační příklad]{ton="info"}

Firma montuje a servisuje klimatizace. První měsíc s AI svěří agentovi jedinou úlohu: **zakázku
z e-mailu** (úloha 8). Dispečerka každé ráno projde zakázky, které agent založil, a opraví, co nesedí.
Po měsíci ví, jak často se agent trefil a kde se zadání musí zpřesnit — a teprve pak přidá úlohu 10,
domluvu termínů prevence.

:::

## Co je k tomu potřeba

- **Začít jednou úlohou.** Vybrat tu, která se dobře kontroluje a často opakuje. Postup popisuje
  [pilot na jedné úloze](/twenty/naklady/pilot-ai/).
- **AI model.** Na vyhrazeném serveru s vlastními klíči k AI, za které platíte přímo poskytovateli;
  v cloudu výrobce v kreditech a se dvěma fakturami — viz [vyhrazený server, nebo cloud](/cloud-vs-selfhost/)
  a [kolik stojí AI agenti](/twenty/naklady/kolik-stoji-ai-agenti/).
- **Napojenou poštu.** Úlohy 5, 6 a 8 potřebují e-maily na kartě klienta —
  [synchronizace e-mailů a kalendáře](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/).
- **Zadání a role.** Co má AI udělat, co smí měnit a co jen navrhnout. Hotové části (souhrny, ARES,
  Servisní plán) přicházejí s řešením; ostatní úlohy lze v Twenty nastavit. Nastavení je práce navíc: drobnost se vejde do hodiny měsíčně v paušálu, větší úpravu odhadneme předem — viz [SLA balíčky](/sla-balicky/).

:::otazky

### Které úlohy jsou v Twenty Sales a Twenty Servis hotové hned po nasazení?

Souhrn obchodního případu a načtení firmy z ARES v Twenty Sales, souhrn z výkazů, Servisní plán
a ARES v Twenty Servis. AI chat a napojení přes MCP má obojí. Automatizace s AI (třídění, zakázka
z e-mailu, koncepty e-mailů) se nastavují podle toho, jak u vás práce chodí.

### Pošle AI něco klientovi bez mého vědomí?

Nemusí. Zprávy psané AI se dají ukládat jako koncepty, které člověk zkontroluje a odešle sám.
Automatické odeslání je volba, kterou zapnete jen vědomě.

### Naplánuje AI výjezdy techniků?

Plán sestavuje dispečer v plánovači Twenty Servis. AI mu pomůže s podklady — co je potřeba
naplánovat a co se u zařízení dělo. Jak plánovat výjezdy, popisuje článek
[Plánování výjezdů techniků](/twenty/servis/planovani-vyjezdu-techniku/).

### Kterou úlohou začít?

Tou, která se často opakuje a jejíž výsledek se dá rychle zkontrolovat — typicky třídění poptávek
v obchodě nebo zakázka z e-mailu v servisu.

:::
