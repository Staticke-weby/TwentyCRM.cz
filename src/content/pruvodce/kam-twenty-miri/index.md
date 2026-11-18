---
title: "Kam Twenty míří"
description: "Pět směrů, kterými se open-source Twenty vyvíjí: agentní pracovní prostor, aplikace, MCP oběma směry, konverzace v CRM a připravenost pro větší firmy. U každého co lze nastavit dnes, co se připravuje a důkaz."
vMenu: "Kam Twenty míří"
poradi: 11
overeno: 2026-11-18
verzeTwenty: '2.59'
temata: [ai, mcp, agenti, aplikace, komunikace, opravneni]
zdroje: [gh-vydani, twenty-vydani, gh-prepinace, gh-pr-29762, gh-pr-29957, gh-pr-30083, gh-pr-30128, gh-pr-30252, github-twenty-v2-58-0, github-twenty-v2-59-0, github-pull-28732, github-pull-30156, github-pull-30232, github-pull-29822]
---

**Twenty se mění z CRM, do kterého se kliká, v pracovní prostředí, kde vedle lidí pracují AI agenti
a kam se připojí AI asistent, kterého ve firmě už používáte.** Je to vidět na pěti směrech, kterými
jdou vydání od dubna do listopadu 2026 — u každého níže najdete, co lze nastavit dnes, co se připravuje
a z čeho to víme.

Výrobce nezveřejňuje plán vývoje s termíny. Směr proto čteme z toho, co je ověřitelné: z poznámek
k vydáním (Twenty vydává zhruba dvě verze týdně, od v2.0 21. 4. 2026 po v2.59 16. 11. 2026),
z přepínačů rozpracovaných funkcí v kódu a z otevřených změn v kódu. Termíny budoucích verzí
neuvádíme — nemáme je od koho mít. Stránku aktualizujeme jednou měsíčně spolu
s [Novinkami](/twenty/novinky/).

Tři štítky, které tu používáme:

- **Lze nastavit dnes** — vyšlo jako hotové, bez přepínače, a dá se nastavit. Neznamená to, že je to
  hotové v našem řešení.
- **Připravuje se** — výrobce to ohlásil ve vydání, ale ve vývoji je to zatím vypnuté, nebo to běží
  ve zkušebním provozu.
- **Směr vývoje** — rozpracovaná změna v kódu, která ještě v žádném vydání není. Může se změnit
  nebo nevyjít vůbec.

## 1. Agentní pracovní prostor

AI v Twenty se posouvá od chatu, kterého se ptáte, k agentům, kteří pracují vedle týmu a člověk
jim zadává a schvaluje práci.

- **Lze nastavit dnes:** AI chat přímo v Twenty (bez přepínače od v2.1); agenti s vlastními stránkami
  a spouštěči, kteří umí počkat na událost nebo čas (v2.46); dovednosti se zapsanými firemními postupy
  (v2.40); AI krok v automatizacích s vlastním omezeným oprávněním (v2.56); AI třídění poptávek
  a e-mailů (v2.42); AI postaví dashboard nebo pohled (v2.20); e-mail napsaný AI jako koncept, který
  odešle člověk; agent si sám přečte PDF nebo obrázek přiložený k záznamu (v2.59) a spustí se jen
  za splněné podmínky, třeba při změně fáze (v2.59).
- **Připravuje se:** AI asistentka Ada v týmové schránce, které kolega předá úkol v konverzaci
  jako člověku, a přímé zprávy mezi kolegy (v2.46–v2.57.1, za přepínačem); agent, který se uprostřed
  práce zeptá člověka a počká na schválení (v2.46, za přepínačem).
- **Důkaz:** [v2.46](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.46.0),
  [v2.56](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.56.0),
  [v2.57](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.57.0),
  [v2.59](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.59.0) a
  [seznam přepínačů v kódu](https://github.com/twentyhq/twenty/blob/main/packages/twenty-shared/src/types/FeatureFlagKey.ts).

Víc v článcích [Agenti v Twenty](/twenty/ai-agenti/agenti-v-twenty/) a
[Ada — AI kolegyně v týmové schránce](/twenty/ai-agenti/ada-ai-kolegyne/).

## 2. Platforma pro aplikace

Twenty se staví jako základ, na který se instalují oborová rozšíření: vlastní typy záznamů, logika,
obrazovky, automatizace i agenti v jednom balíčku.

- **Lze nastavit dnes:** aplikace nad Twenty (od v2.0); nástroje pro vývojáře včetně příkazové řádky
  (v2.46); automatizace, agenti a dovednosti se dají z jedné instalace vytáhnout a přenést do jiné
  (v2.53.1); vlastní typy záznamů, pole a vazby mnoho na mnoho (v2.45).
- **Připravuje se:** obchod s aplikacemi (zkušební provoz od v2.43, výpis aplikací v2.54); AI, která
  podle popisu postaví a zveřejní vlastní panel na kartě záznamu (v2.55, za přepínačem).
- **Směr vývoje:** obrazovky postavené AI se dají umístit do rozvržení stránek
  ([#28732](https://github.com/twentyhq/twenty/pull/28732), rozpracováno).
- **Důkaz:** [v2.54](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.54.0),
  [v2.55](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.55.0).

Co aplikace jsou a kdy dávají smysl, vysvětluje článek
[Aplikace nad Twenty](/twenty/na-miru/aplikace-nad-twenty/).

## 3. MCP oběma směry

MCP je otevřený standard, přes který se AI asistent připojí k firemnímu systému
([co je MCP](/twenty/mcp/co-je-mcp/)). Twenty ho používá v obou směrech: asistent zvenčí pracuje
s CRM a připravuje se, aby AI v Twenty sáhla do dalších systémů.

- **Lze nastavit dnes:** Claude, ChatGPT nebo Cursor pracují s daty v Twenty pod rolí uživatele (od v2.0,
  obrazovka nastavení v2.19); Twenty asistentovi označí, které akce data jen čtou a které je mění
  (v2.6); přihlášený uživatel nechá asistenta spustit připravenou automatizaci (v2.57); Claude
  a ChatGPT jsou v nastavení mezi dostupnými aplikacemi s tlačítkem pro připojení (v2.59).
- **Připravuje se:** AI chat v Twenty použije nástroje jiných systémů přes MCP (zkušební provoz,
  v2.57 za přepínačem); aplikace mohou nabízet vlastní MCP servery (v2.54); krok automatizace, který
  zavolá nástroj jiného systému (v2.58, za přepínačem).
- **Směr vývoje:** ChatGPT a Claude jako
  vestavěné aplikace, ke kterým si každý uživatel připojí svůj účet
  ([#29762](https://github.com/twentyhq/twenty/pull/29762), rozpracováno).
- **Důkaz:** [v2.57](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.57.0),
  [změna #29822](https://github.com/twentyhq/twenty/pull/29822).

Víc v článcích [Jak připojit Claude a ChatGPT](/twenty/mcp/pripojeni-claude-a-chatgpt/) a
[Twenty volá další systémy](/twenty/mcp/twenty-vola-dalsi-systemy/).

## 4. Konverzace v CRM

Cíl je, aby se v CRM objevila každá konverzace s klientem bez přepisování — e-mail, schůzka, hovor,
zpráva.

- **Lze nastavit dnes:** e-maily a kalendář na kartě klienta (Gmail, Microsoft 365, ostatní přes IMAP);
  ruční přiřazení e-mailů a schůzek firmy k obchodu (v2.51); sdílená schránka přeposíláním (v2.4);
  nahrávání a přepis schůzek (v2.17); zápisy z Fireflies, Fathom, Granola a přepisy z Teams se shrnutím
  od AI (v2.7–v2.51); konverzace z LinkedInu včetně odpovědí z CRM přes aplikaci třetí strany
  (v2.55–v2.56); asistent Twenty ve Slacku (v2.26).
- **Připravuje se:** asistent Twenty v Microsoft Teams (rozpracovaný od v2.46); e-mailové kampaně
  (dokumentace je vede jako zkušební provoz).
- **Směr vývoje:** ruční propojení uživatelů Teams s členy týmu v Twenty
  ([#30156](https://github.com/twentyhq/twenty/pull/30156), rozpracováno).
- **Důkaz:** [v2.51](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.51.0),
  [v2.56](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.56.0),
  [přehled novinek na twenty.com](https://twenty.com/releases).

Víc v oblasti [CRM, které se vyplní samo](/twenty/e-maily-a-schuzky/).

## 5. Připravenost pro větší firmy

Spolu s AI přibývá to, co chtějí firmy s víc týmy a s přísnějšími pravidly: kdo co vidí, jaká data
smějí do AI a kdo co změnil.

- **Lze nastavit dnes:** role a oprávnění na typy záznamů a pole i pro AI agenty; pravidla pro kontrolu dat, která nepustí neúplný záznam lidem ani AI (v2.56, tarif Organization); záložní kódy
  dvoufázového přihlášení (v2.46). Jednotné přihlášení a záznam změn jsou v tarifu Organization.
- **Připravuje se:** sdílení jednotlivého záznamu (v2.45) a soukromé záznamy, které vidí jen autor a ti, s kým je sdílí (v2.55–v2.57, za
  přepínačem); pravidla pro data v AI — zpracování jen v EU a bez uchovávání u poskytovatele
  (v2.57, za přepínačem; popisuje je právní FAQ výrobce).
- **Směr vývoje:** přístupové skupiny a jemnější pravidla, kdo vidí které záznamy (přepínače v kódu,
  [#30252](https://github.com/twentyhq/twenty/pull/30252) rozpracováno).
- **Důkaz:** [v2.55](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.55.0),
  [v2.57](https://github.com/twentyhq/twenty/releases/tag/twenty/v2.57.0).

Víc v článcích [Bezpečnost AI agentů](/twenty/ai-agenti/bezpecnost-ai-agentu/) a
[GDPR a AI agenti](/twenty/provoz/gdpr-a-ai-agenti/).

## Co z toho plyne pro vás

- **Rozhodujte podle toho, co lze nastavit dnes.** Co je z toho hotové v Twenty Sales a Twenty Servis,
  uvidíte v demu; ostatní ze seznamu „Lze nastavit dnes“ se dá doplnit. Co se připravuje, je dobrá zpráva
  do budoucna, ne důvod k nákupu.
- **Platforma roste s vámi.** Nové schopnosti přicházejí do stejného systému, ke stejným datům.
  Neplatíte za ně druhý software ani licenci — open-source Twenty je na vyhrazeném serveru bez licenčních
  poplatků; výjimkou jsou funkce tarifu Organization.
- **O nové verze se nestaráte sami.** Pokud máte paušál za provoz na vyhrazeném serveru, nasazení nové verze
  Twenty patří do hodiny měsíčně, která je v něm. Co se v Twenty změnilo, shrnujeme každý měsíc
  v [Novinkách](/twenty/novinky/).

Twenty Sales a Twenty Servis — naše nadstavby nad open-source Twenty pro
[řízení obchodu](/pro-obchodni-tymy/) a [montáže a servis u zákazníka](/pro-servisni-firmy/) —
stojí na tom, co Twenty umí dnes. Prodejní přehled AI v obou řešeních je na stránce
[Agentské CRM](/agentske-crm/).

## Přehled stavu funkcí

Seznam se vykresluje z našeho registru funkcí a mění se s každým zpracovaným vydáním.

::stav-funkci{temata="ai,mcp,agenti,aplikace,komunikace,opravneni" smer}

:::otazky

### Kdy bude hotová Ada nebo napojení na další systémy přes MCP?

Nevíme a nebudeme hádat. Výrobce termíny nezveřejňuje a funkce za přepínačem se zapínají, až jsou
hotové. Jakmile se to stane, objeví se to v [Novinkách](/twenty/novinky/) a štítek tady se změní.

### Můžu funkci, která se připravuje, používat už teď?

Do ostrého provozu doporučujeme jen to, co výrobce vydal jako hotové. Funkce za přepínačem se ještě
mění a výrobce je nevydal pro běžné použití. V demu vám ukážeme, co jde dnes a čím se to dá do té
doby nahradit — například schválení člověkem řeší koncepty e-mailů a role.

### Co když se směr vývoje změní?

Může. Směr vývoje čteme z rozpracovaných změn v kódu a ty se někdy přepracují nebo zavřou. Proto ho
nepopisujeme jako slib a u každé položky uvádíme odkaz, podle kterého si to ověříte sami.

### Platí se za nové funkce něco navíc?

Nová verze open-source Twenty je na vyhrazeném serveru bez licenčních poplatků. Zvlášť se platí
jen funkce tarifu Organization (například jednotné přihlášení) a AI — tu na vyhrazeném serveru platíte
přímo poskytovateli přes vlastní klíče. Nastavit novou funkci pro váš provoz je práce navíc —
drobnost se vejde do hodiny měsíčně v paušálu, větší úpravu odhadneme předem
(viz [SLA balíčky](/sla-balicky/)).

:::
