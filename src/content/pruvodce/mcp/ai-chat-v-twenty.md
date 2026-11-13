---
title: AI chat v Twenty — zeptejte se CRM lidskou řečí
description: V Twenty je AI chat, kterému napíšete otázku běžnou řečí. Najde záznamy, spočítá, shrne historii klienta a na požádání záznam založí nebo upraví — pod vaší rolí. Co umí ve verzi 2.57 a co je k tomu potřeba.
vMenu: AI chat v Twenty
poradi: 4
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [ai, mcp]
funkce: [ai-chat, ai-dovednosti, ai-dashboardy, ai-volba-modelu, vlastni-klice-ai, role-opravneni, mcp-server]
zdroje: [docs-ai-chat, twenty-ai-overview, twenty-vydani, gh-vydani, docs-ai-faq, docs-opravneni, docs-server-nastaveni]
---

**V Twenty je AI chat, kterému napíšete otázku běžnou řečí místo skládání filtrů — a on najde
záznamy, spočítá čísla, shrne historii klienta a na požádání záznam založí nebo upraví.** Zná
stránku, na které právě jste, a pracuje pod vaší rolí: vidí totéž co vy.

Chat je přímo v Twenty, takže k němu nepotřebujete předplatné Claude ani ChatGPT. Kdo je ve firmě
už používá, dostane se ke stejným datům i odtud — přes MCP, otevřený standard pro napojení
AI nástrojů na firemní systémy (víc v článku [Co je MCP](/twenty/mcp/co-je-mcp/)).

## Co vám to umožní

- **Najít bez filtrů.** *„Obchodní případy nad půl milionu, které jsou ve fázi jednání déle než
  měsíc."* Odpověď je seznam s odkazy na záznamy.
- **Čísla bez sestavy.** *„Kolik obchodů jsme minulý měsíc uzavřeli a za kolik?"* Majitel se
  zeptá sám, nemusí čekat na export.
- **Shrnout klienta tam, kde jste.** Na kartě klienta stačí napsat *„shrň mi tohoto klienta"* —
  AI projde obchodní případy, úkoly, poznámky, e-maily a schůzky.
- **Zapsat po hovoru.** *„Přidej poznámku, že klient chce termín po 15. lednu, a založ mi úkol
  zavolat mu 10. ledna."*
- **Firemní postup jedním příkazem.** Uložená dovednost — třeba „příprava na schůzku" s vaší
  osnovou — se spustí lomítkem a vždy postupuje stejně.

## Jak to v Twenty funguje

AI chat je v Twenty pro všechny od verze 2.1 (duben 2026). Výrobce ho popisuje čtyřmi
vlastnostmi: dotazy běžnou řečí, přístup k záznamům, vazbám a číslům napříč systémem, znalost
aktuální stránky („tato firma", „tento obchod") a navazující otázky, které drží souvislost.
Od té doby přibylo:

- **zavináč (@)** — odkážete na konkrétní záznam, třeba klienta nebo obchodní případ (v2.40),
- **lomítko (/)** — spustí uloženou dovednost s firemním postupem (v2.40),
- **přílohy** — do chatu přiložíte soubor, se kterým má AI pracovat (v2.6),
- **diktování** — otázku namluvíte místo psaní (v2.38),
- **správa konverzací** — historie, přejmenování a archiv (v2.2), sdílení konverzace s kolegou
  (v2.47) a chat přes celou obrazovku (v2.30).

**Oprávnění.** Chat pracuje s vašimi oprávněními. Co nesmíte vidět vy, neuvidí ani AI; když
záznam změní, je to stejné, jako byste ho změnili vy.

**Volba modelu.** Od verze 2.40 Twenty u AI modelů ukazuje poskytovatele, cenu a to, kde se data
zpracovávají. Pro běžné dotazy stačí levnější model, na shrnutí dlouhé historie se hodí chytřejší.

**Přehledy na požádání.** Chat umí od verze 2.20 sestavit i dashboard nebo filtrovaný pohled
(víc v článku [reporty bez správce](/twenty/obchod/reporty-bez-spravce/)).

Popis AI chatu je v [dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/ai/capabilities/ai-chatbot).

:::poznamka[Ilustrační příklad]{ton="info"}

Vedoucí obchodu ve vymyšlené firmě, která prodává kuchyňské linky firmám i domácnostem,
otevře v pondělí ráno AI chat: *„Které obchodní případy se mají tento měsíc uzavřít a u kterých
z nich nebyl dva týdny žádný kontakt?"* Dostane šest případů. U dvou se doptá: *„@Novostavby
Hradec — co klient naposledy psal?"* AI shrne poslední e-mail: čeká na vyjádření architekta.
Vedoucí napíše *„založ obchodníkovi úkol zeptat se na termín vyjádření"* a úkol je u případu.

:::

## Co je k tomu potřeba

- **AI model.** Na vyhrazeném serveru zadáte vlastní klíče k AI (Anthropic, OpenAI, Google,
  Mistral nebo xAI) a platíte přímo poskytovateli podle spotřeby, bez přirážky. V cloudu výrobce
  se AI účtuje jinak, viz [vyhrazený server, nebo cloud](/cloud-vs-selfhost/).
- **Data v CRM.** Shrnutí jsou tak dobrá, jak úplná jsou data. Nejvíc pomůže synchronizovaná pošta
  a kalendář ([e-maily a kalendář na kartě klienta](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/)).
- **Role.** Aby AI každému ukázala jen to, co vidět má. Nastavíme je při nasazení.
- **Výpočty nad tabulkami.** Pokud má AI v chatu počítat nad přiloženými tabulkami, zapíná se
  na vyhrazeném serveru zvlášť prostředí pro spouštění výpočtů. Nastavíme ho při nasazení.
- **Dovednosti.** Firemní postupy (příprava na schůzku, shrnutí obchodu) zapíšeme spolu s vámi.

AI chat a napojení pro AI nástroje mají obě naše nadstavby nad open-source Twenty —
[Twenty Sales](/pro-obchodni-tymy/) i [Twenty Servis](/pro-servisni-firmy/). Twenty Sales k tomu
přidává souhrn obchodního případu na tlačítko a sadu připravených zadání. Jak AI pomáhá před
jednáním, ukazuje článek [příprava na schůzku](/twenty/po-jednani/priprava-na-schuzku/).

:::otazky

### Čím se AI chat v Twenty liší od ChatGPT?

Je přímo v CRM: zná stránku, na které jste, pracuje s aktuálními daty pod vaší rolí a nepotřebuje
další předplatné. ChatGPT nebo Claude dávají smysl, když v nich tým už pracuje — k Twenty se
připojí přes MCP.

### Můžu se ptát česky?

Ano. Jak dobře model odpoví, záleží na zvoleném modelu. V Twenty Sales jsou česky i názvy fází,
takže AI používá stejné výrazy jako obchodník.

### Může se AI splést?

Jazykové modely se mohou splést nebo něco vynechat. U důležitých údajů — ceny, termínu, slibu —
si nechte ukázat záznam nebo e-mail, ze kterého AI vychází, a otevřete si ho.

### Kolik AI chat stojí?

Chat je součástí Twenty. Na vyhrazeném serveru platíte jen spotřebu AI přímo poskytovateli
modelu podle vlastních klíčů. Kolik to obvykle dělá, rozebírá článek
[kolik stojí AI agenti](/twenty/naklady/kolik-stoji-ai-agenti/).

:::
