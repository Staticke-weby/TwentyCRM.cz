---
title: "Ada: AI kolegyně v týmové schránce Twenty — co se připravuje"
description: "Twenty připravuje týmovou schránku, kde kolegové spolu s AI asistentkou Adou řeší konverzace a předávají jí úkoly jako člověku. Co ohlásila vydání 2.46–2.57.1, co to firmě umožní, až to bude, a co jde už dnes. Zatím za přepínačem."
vMenu: Ada v týmové schránce
poradi: 5
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [ai, agenti, komunikace]
funkce: [ada-tymova-schranka, schvaleni-clovekem, ai-chat, ai-agenti, koncept-emailu, slack, role-opravneni]
zdroje: [gh-vydani, gh-prepinace, github-twenty-v2-46-0, github-tag-twenty-2fv2-49-0, github-twenty-v2-56-0, github-tag-twenty-2fv2-57-0, github-tag-twenty-2fv2-57-1]
---

**Ada je AI asistentka, kterou Twenty připravuje pro týmovou schránku: kolegové ji v konverzaci
označí jako člověka a ona úkol převezme, odpoví nebo se zeptá, když něco potřebuje. Ve vydáních
2.46 až 2.57.1 (říjen–listopad 2026) výrobce postupně přidal její základy, celá schránka je ale
v kódu stále za přepínačem — běžně dostupná zatím není.**

Píšeme o ní proto, že ukazuje, kam se Twenty posouvá: od AI, které se ptáte v okně chatu, k AI,
která sedí v týmové konverzaci vedle lidí. Tady je, co bylo ohlášeno, co by to firmě umožnilo
a co se dá dělat už dnes.

## Co ohlásila vydání

Podle poznámek k vydáním na GitHubu:

| Vydání | Co přibylo |
|---|---|
| **2.46** (12. 10. 2026) | týmová schránka s konverzacemi s AI — výrobce ji hned schoval za přepínač; konverzace jde přidělit kolegovi, přizvat do ní další členy týmu a označit jako hotovou nebo odložit; AI kroky automatizací mohou poslat dotaz autorovi do schránky a počkat na odpověď |
| **2.49** (19. 10. 2026) | Adu jde v konverzaci označit a člen týmu si ji může vypnout; Ada a agenti umí na zprávu zareagovat ikonkou |
| **2.56** (5. 11. 2026) | pravidla, kdy Ada do konverzace vstupuje a kdy odpovídá; správce nastaví jméno a obrázek asistenta |
| **2.57** (9. 11. 2026) | soukromé zprávy mezi členy týmu přímo ze schránky |
| **2.57.1** (9. 11. 2026) | nastavené jméno a obrázek asistenta se zobrazují v hlavičkách zpráv a zmínkách |

V seznamu přepínačů v kódu Twenty jsou k 12. 11. 2026 pořád přepínač týmové schránky s AI
a přepínač pro identitu v přímých zprávách. Výrobce je zapíná jednotlivým prostorům; dokud z kódu
nezmizí, nejde o funkci, se kterou by se dalo počítat. Jakmile se to změní, štítek stavu pod
článkem se aktualizuje sám.

## Co vám to umožní, až to bude

- **Úkol předaný jedním řádkem.** Obchodník v konverzaci k zakázce napíše *„@Ada připrav souhrn
  posledních e-mailů s klientem"* a nemusí přepínat do jiného okna.
- **Agent, který se umí zeptat.** Když automatizace narazí na nejasnost — chybí cena, nesedí adresa —
  pošle dotaz do schránky odpovědnému člověku a pokračuje až po odpovědi. To je přesně kontrola
  člověkem, o které píšeme v článku [Bezpečnost AI agentů](/twenty/ai-agenti/bezpecnost-ai-agentu/).
- **Jedno místo pro práci týmu.** Konverzace s klienty, s kolegy i s AI na jednom místě, s přidělením
  odpovědného člověka a stavem „hotovo".
- **AI s vlastní tváří.** Firma si asistenta pojmenuje a dá mu obrázek; každý člen týmu si ho může
  v konverzaci vypnout.

Jak přesně bude Ada pracovat s oprávněními, výrobce zatím nepopsal — dokumentace k týmové schránce
ještě není. Ostatní AI v Twenty (chat, agenti, AI kroky) pracuje v rámci rolí, které určíte.

## Co jde v Twenty dnes

Než schránka s Adou vyjde, podobnou práci zastanou funkce, které v Twenty lze nastavit už dnes:

- **AI chat v Twenty** — zeptáte se nad záznamem, na který odkážete přes @, a AI shrne historii nebo
  na požádání záznam upraví. Pracuje s vašimi oprávněními.
- **Agenti se spouštěči** — práci odvedou sami při změně záznamu nebo podle plánu. Jak jsou poskládaní,
  vysvětluje článek [Agenti v Twenty](/twenty/ai-agenti/agenti-v-twenty/).
- **Koncept e-mailu** — zprávu napsanou AI uloží automatizace do schránky ke kontrole, místo aby ji
  odeslala. To dnes nahrazuje dotaz agenta na člověka.
- **Asistent ve Slacku** — kdo pracuje ve Slacku, může asistenta Twenty označit už dnes a ten jedná
  za člena, který ho označil. Víc v článku [Twenty ve Slacku a Teams](/twenty/mcp/twenty-ve-slacku-a-teams/).

:::poznamka[Ilustrační příklad — jak by to mohlo vypadat]{ton="info"}

Vymyšlená servisní firma s Twenty Servis, naší nadstavbou nad open-source Twenty. Dispečerka má
v týmové schránce konverzaci k **Zakázce** na opravu klimatizace. Napíše: *„@Ada najdi u tohohle
Zařízení poslední tři Výjezdy a napiš klientovi návrh termínu."*

Ada připraví shrnutí a koncept e-mailu. Protože chybí dostupnost technika, zeptá se v konverzaci:
*„Mám navrhnout čtvrtek, nebo počkat na potvrzení od technika?"* Dispečerka odpoví a teprve pak
koncept upraví a odešle.

Dnes stejný výsledek dá AI chat nad záznamem a koncept e-mailu z automatizace — jen bez konverzace
v týmové schránce.

:::

## Co je k tomu potřeba

- **Počkat, až výrobce funkci uvolní.** Do ostrého provozu dáváme funkce, které výrobce vydal pro
  všechny — aby se vám po aktualizaci nic nezměnilo pod rukama.
- **Aktuální verzi Twenty.** Nové verze nasazujeme na vyhrazeném serveru v rámci
  [měsíčního paušálu](/sla-balicky/), takže schránka přijde, jakmile ji výrobce uvolní.
- **AI model a role.** Ada poběží na AI modelu, který máte v Twenty nastavený — na vyhrazeném serveru
  s vlastními klíči k AI, za které platíte přímo poskytovateli. Cloud výrobce účtuje AI v kreditech
  a znamená dvě faktury — viz [vyhrazený server, nebo cloud](/cloud-vs-selfhost/).

Co se v Twenty dál připravuje, sleduje stránka [Kam Twenty míří](/twenty/kam-twenty-miri/).

:::otazky

### Můžu Adu používat už dnes?

Běžně ne. Týmová schránka, ve které Ada pracuje, je k 12. 11. 2026 v kódu Twenty za přepínačem.
Podobné úlohy dnes zvládne AI chat, agenti se spouštěči a koncepty e-mailů.

### Kdy bude Ada dostupná?

Výrobce termín neuvádí a Twenty nemá veřejný plán vývoje. Stav sledujeme u každého vydání; jakmile
přepínač z kódu zmizí, aktualizujeme štítek i tento článek.

### Bude Ada vidět všechna data v CRM?

Výrobce to zatím nepopsal. Ostatní AI v Twenty pracuje v rámci rolí; jak to bude u Ady, potvrdíme,
až výrobce k týmové schránce vydá dokumentaci.

### Musí se Ada jmenovat Ada?

Ne. Ve vydáních 2.56 až 2.57.1 přibylo nastavení jména a obrázku asistenta, které se pak ukazuje
v konverzacích.

:::
