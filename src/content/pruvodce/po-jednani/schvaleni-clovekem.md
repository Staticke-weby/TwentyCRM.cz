---
title: Schválení člověkem — proč AI agent v CRM nic neodešle sám
description: AI v Twenty připraví e-mail, úkol nebo shrnutí, ale ven nic nepošle bez člověka. Jak to dnes zajišťují koncepty e-mailů, role a označení akcí — a co se připravuje, aby se agent mohl zeptat a počkat na schválení přímo v Twenty.
vMenu: Schválení člověkem
draft: true
poradi: 4
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [ai, agenti, automatizace, bezpecnost]
funkce: [koncept-emailu, ai-krok-automatizace, role-opravneni, mcp-oznaceni-akci, automatizace, kontrola-dat, schvaleni-clovekem, ada-tymova-schranka]
zdroje: [docs-akce, docs-spoustece, twenty-capabilities-permissions-access-control, gh-pr-20672, github-twenty-v2-46-0, github-twenty-v2-56-0, gh-prepinace, github-twenty-v2-47-0]
---

**AI v Twenty pracuje jako asistent, ne jako odesílatel: e-mail klientovi uloží do konceptů,
změny dělá jen v rozsahu své role a asistentům zvenčí Twenty u každé akce řekne, jestli data
mění.** Poslední slovo u všeho, co jde ven nebo něco nevratně mění, tak zůstává člověku.

Přímo „agent se zeptá, počká a pokračuje až po schválení" výrobce ohlásil, ale zatím je za
přepínačem. Tady je, co jde dnes a co se připravuje.

## Co vám to umožní

- **Klient nedostane text, který nikdo nečetl.** AI napíše, obchodník zkontroluje a odešle.
- **Rychlost bez rizika.** Práci odvede AI, rozhodnutí zůstane na člověku — kontrola hotového
  návrhu trvá chvíli, psaní od nuly mnohem déle.
- **Jasná odpovědnost.** Kdo zprávu odeslal nebo změnu potvrdil, je člověk se jménem.
- **Důvěra po krocích.** Začnete s tím, že AI jen připravuje. Co jí svěříte dál, rozhodnete
  podle toho, jak se osvědčí.

## Jak to v Twenty funguje dnes

**Koncept místo odeslání.** Automatizace v Twenty má krok **Koncept e-mailu**: zpráva se uloží do
složky Koncepty v připojené schránce a neodejde, dokud ji člověk sám neodešle. Výrobce ho
v dokumentaci popisuje přesně pro e-maily napsané AI, které má před odesláním někdo zkontrolovat.

**Role pro AI.** Agent i krok AI v automatizaci pracují pod vlastní rolí. Od verze 2.56 má AI krok
vlastní rozsah oprávnění, takže smí méně než automatizace kolem něj — třeba číst a zakládat úkoly,
ale ne mazat ani měnit ceny. Výrobce u rolí pro agenty uvádí i dohledatelnost: které akce provedl
který agent.

**Schválení tlačítkem.** AI připraví návrh do poznámky nebo pole a další krok — odeslání,
změnu fáze — spustí až člověk tlačítkem u záznamu. Ruční spouštění automatizací na vybraných
záznamech Twenty umí; takhle postavené schválení nastavujeme tam, kde je potřeba.

**Asistenti zvenčí.** Když s Twenty pracuje Claude nebo ChatGPT přes MCP (otevřený standard
pro napojení AI nástrojů), Twenty jim od verze 2.6 u každé akce označí, jestli data jen čte, nebo
mění. Asistent se pak před změnou může zeptat — Claude například žádá o schválení použití nástroje.
Podrobnosti v článku [jak připojit Claude a ChatGPT](/twenty/mcp/pripojeni-claude-a-chatgpt/).

**Pojistka v datech.** Od verze 2.56 má Twenty v tarifu Organization pravidla pro kontrolu dat:
neúplný nebo chybný záznam neuloží člověk ani AI.

Kroky automatizací popisuje [dokumentace výrobce](https://docs.twenty.com/cs/user-guide/workflows/capabilities/workflow-actions),
role pro AI [samostatná stránka](https://docs.twenty.com/cs/user-guide/ai/capabilities/permissions-access-control).

## Co se připravuje

Ve verzi 2.46 výrobce ohlásil, že agenti a automatizace budou moci **navrhnout akci ke schválení**
a krok AI agenta **položit otázku člověku** — dotaz přijde do týmové schránky v Twenty a agent
pokračuje až po odpovědi. Ve verzi 2.47 se tahle část schovala za přepínač týmové schránky, který
je v kódu i v listopadu 2026. Patří k tomu i **Ada**, AI kolegyně, které kolega v konverzaci předá
úkol jako člověku (víc v článku [Ada — AI kolegyně](/twenty/ai-agenti/ada-ai-kolegyne/)).

Až se to zpřístupní, schválení proběhne přímo v Twenty, bez přepínání do pošty. Termín výrobce
neuvádí. Do té doby roli schválení spolehlivě plní koncepty, role a tlačítka.

:::poznamka[Ilustrační příklad]{ton="info"}

Vymyšlená firma servisuje kávovary v kancelářích a používá Twenty Servis. Po výjezdu AI
z textů techniků sestaví popis provedené práce pro klienta. Dispečerka ho na zakázce přečte,
jednu větu přepíše a teprve pak pošle klientovi zakázkový list. Ve stejné firmě obchodník dostává
na nové poptávky návrh odpovědi jako koncept v Outlooku — doplní cenu dopravy a odešle.

:::

## Co je k tomu potřeba

- **Rozhodnout, co smí AI samo.** Typicky: třídit, shrnovat, zakládat úkoly a doplňovat pole.
  Jen připravit: cokoli, co jde ke klientovi, mění cenu nebo něco maže.
- **Role pro každého agenta** — co vidí a co smí měnit.
- **Připojené schránky** — koncept vzniká ve schránce, kterou má automatizace nastavenou, proto
  se nastavuje pro každého obchodníka zvlášť.
- **Nastavení při nasazení** — zadání, role a místa, kde má být tlačítko, připravíme spolu.

V [Twenty Sales](/pro-obchodni-tymy/), naší nadstavbě nad open-source Twenty, agent v chatu
nejdřív ukáže, co chce zapsat, a počká na potvrzení. V [Twenty Servis](/pro-servisni-firmy/)
posílá zakázkový list klientovi člověk, ne AI. Celý postup od schůzky po koncept e-mailu popisuje
článek [úkol a e-mail po schůzce](/twenty/po-jednani/ukol-a-e-mail-po-schuzce/).

:::otazky

### Umí automatizace e-mail odeslat i bez člověka?

Ano, krok Odeslat e-mail existuje. U zpráv, které napsala AI, doporučujeme koncept — odeslat ho
pak trvá jedno kliknutí.

### Co když AI v CRM přepíše něco špatně?

Co smí měnit, určuje její role; v tarifu Organization nepustí neúplný záznam pravidla pro kontrolu dat. Průběh každé
automatizace se zaznamenává po krocích, takže se dá dohledat, co a kdy proběhlo.

### Kdy bude schvalování přímo v Twenty?

Výrobce termín neuvádí. Funkce je ve vývoji za přepínačem; stav sledujeme u každého vydání
a ukazuje ho přehled níže.

### Nezdržuje schvalování práci?

Méně, než se zdá. Člověk nepíše od nuly, jen čte hotový návrh. Schvalovat má smysl to, co jde
ven nebo co se nedá vrátit; zbytek může AI dělat sama.

:::
