---
title: Aplikace nad Twenty — co to je a kdy se vyplatí
description: Aplikace v Twenty je balíček, který do systému najednou přidá vlastní záznamy, logiku, obrazovky i AI agenty. Jak se liší od polí a automatizací, které aplikace už v Twenty jsou, co je obchod s aplikacemi a kdy má aplikace pro firmu smysl.
vMenu: Aplikace nad Twenty
poradi: 2
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [aplikace]
funkce: [aplikace, obchod-s-aplikacemi, vlastni-zaznamy, automatizace, ai-agenti, ai-dovednosti, role-opravneni, zapisniky-schuzek, nahravani-schuzek, linkedin]
zdroje: [docs-aplikace, docs-dovednosti, twenty-core-concepts-apps, twenty-operations-publishing, twenty-operations-marketplace-review, github-public-call-recorder, github-public-fireflies, gh-vydani, twenty-vydani]
---

**Aplikace v Twenty je balíček, který do systému najednou přidá vlastní typy záznamů, logiku,
obrazovky i AI agenty — a dá se nainstalovat, aktualizovat a odebrat jako celek. Pro firmu má
smysl tam, kde nestačí pole a automatizace: když je potřeba vlastní výpočet, napojení na interní
systém nebo stejné rozšíření ve více firmách.**

Většina přizpůsobení se aplikace vůbec netýká. Pole, typy záznamů, pohledy a automatizace se
v Twenty nastavují bez programování — viz [Vlastní typy záznamů a pole](/twenty/na-miru/vlastni-typy-zaznamu/).
Aplikace je další patro pro to, co nastavením udělat nejde.

## Co vám to umožní

- **Použít hotová rozšíření.** Zápisy schůzek, nahrávání hovorů nebo konverzace z LinkedInu
  se do Twenty dostávají právě jako aplikace — nic se kvůli nim nepředělává.
- **Mít logiku, kterou automatizace nepostaví.** Výrobce uvádí jako příklady vlastní výpočet
  ceny, kontrolu, která proběhne při každé změně záznamu, nebo panel s daty z interního systému.
- **Rozšíření, které se dá udržovat.** Aplikace má verze; nová verze se nainstaluje jako celek
  a systém, kde je zapnutá automatická aktualizace, ji převezme sám.
- **Mít pod kontrolou, na co sáhne.** Aplikace pracuje pod vlastní rolí a vidí jen to, co jí
  role dovolí — stejně jako člověk nebo AI agent.

## Jak to v Twenty funguje

**Z čeho se aplikace skládá.** Podle dokumentace výrobce může aplikace obsahovat:

- **typy záznamů a pole** — nové, nebo doplněná ke stávajícím,
- **logiku** — kód, který se spustí při změně záznamu, podle plánu nebo když ho zavolá jiný systém,
- **obrazovky** — vlastní panely a části karty záznamu nebo dashboardu,
- **AI agenty a dovednosti** — zadání a postupy pro AI,
- **pohledy a položky menu**, aby uživatel nové věci hned našel.

Platformu pro aplikace přineslo vydání 2.0 v dubnu 2026 a od té doby ji výrobce rozšiřuje
vydání po vydání.

**Aplikace, které už v Twenty jsou.** Některé aplikace výrobce instaluje předem — například
napojení schránek Gmail, Outlook a IMAP. Další se zapínají podle potřeby: nahrávání a přepis
schůzek, zápisy z Fireflies, Fathom, Granola nebo Microsoft Teams, obohacení údajů o firmách
nebo konverzace z LinkedInu, kterou zajišťuje aplikace třetí strany přes službu Unipile.

**Obchod s aplikacemi.** Hotové aplikace od výrobce a dalších firem se mají instalovat z jednoho
místa. Obchod je zatím ve **zkušebním provozu**. Aplikace se do něj dostane až po kontrole
u výrobce — ta mimo jiné hlídá, aby si aplikace brala jen nutná oprávnění a popsala, jaká data
odcházejí mimo Twenty a kam, včetně poskytovatelů AI.

**Soukromá aplikace.** Aplikaci jde nasadit i přímo na jeden server, bez zveřejnění v obchodě —
pro firemní nástroje, které nikdo jiný nepotřebuje.

**Pro správce a vývojáře.** Aplikace se píší v jazyce TypeScript pomocí sady nástrojů výrobce
(twenty-sdk) a nástroje pro příkazovou řádku `twenty`. Výrobce k tomu připravil i dovednosti pro
AI asistenty na programování, jako Claude Code nebo Cursor. Obrazovky v aplikacích jsou podle
dokumentace stále ve vývoji. Podrobnosti jsou v
[dokumentaci výrobce](https://docs.twenty.com/cs/getting-started/core-concepts/apps).

## Kdy aplikace dává smysl — a kdy ne

| Potřeba | Čím se řeší |
|---|---|
| Evidovat nový údaj nebo typ záznamu | pole a typy záznamů v nastavení |
| Poslat e-mail, založit úkol, změnit stav při události | automatizace bez programování |
| AI má roztřídit poptávku nebo shrnout záznam | AI krok v automatizaci nebo AI agent |
| Vlastní výpočet, který automatizace neumí | aplikace |
| Panel s daty z interního systému na kartě záznamu | aplikace |
| Stejné rozšíření ve více firmách, s verzemi | aplikace |

Rozumné pořadí je od shora dolů. Co jde nastavit, nemá smysl programovat — nastavení se snáz
mění a aktualizace Twenty ho nerozbijí.

:::poznamka[Ilustrační příklad]{ton="info"}

Velkoobchod s technickým materiálem používá CRM pro obchod. Obchodníci chtějí na kartě klienta
vidět jeho nezaplacené faktury, které žijí v podnikovém systému. Pole by data jen kopírovala
a automatizace by je stahovala pořád dokola. Firma proto zvažuje malou soukromou aplikaci:
panel na kartě klienta, který si data načte, když ho obchodník otevře, pod rolí s oprávněním
jen ke čtení.

:::

## Co je k tomu potřeba

- **Jasná potřeba.** Než se začne mluvit o aplikaci, vyplatí se ověřit, že ji neřeší pole,
  pohled nebo automatizace.
- **Provoz Twenty.** Na vyhrazeném serveru, který slouží jen vaší firmě, za
  {{cena.retainer_selfhost|mesicne}} bez DPH. Cloud výrobce je druhá možnost se dvěma
  fakturami, viz [vyhrazený server, nebo cloud](/cloud-vs-selfhost/).
- **Kontrola cizích aplikací.** U každé aplikace od třetí strany se dívejte, jaká oprávnění chce
  a kam posílá data.

Naše hotová řešení [Twenty Sales](/pro-obchodni-tymy/) a [Twenty Servis](/pro-servisni-firmy/) —
nadstavby nad open-source Twenty — pokrývají obchod a servis u zákazníka bez další aplikace. Když
narazíte na potřebu, kterou nastavení nepokryje, ozvěte se: projdeme, jestli jde o drobnou úpravu,
napojení na systém, který už máte, nebo o aplikaci.

:::otazky

### Je aplikace totéž co doplněk (plugin)?

Podobné, ale širší. Aplikace v Twenty nepřidává jen tlačítko — může přinést vlastní typy záznamů,
logiku, obrazovky i AI agenty a instaluje se jako celek.

### Můžeme instalovat aplikace z obchodu?

Obchod s aplikacemi je zatím ve zkušebním provozu. Aplikace, které výrobce dodává předem
nebo doporučuje — třeba zápisy schůzek — se zapínají v nastavení.

### Rozbije aktualizace Twenty naši aplikaci?

Aplikace může uvést, se kterými verzemi Twenty funguje; do jiné verze se pak nenainstaluje.
Twenty ale vydává nové verze zhruba dvakrát týdně, takže aplikace potřebuje průběžnou údržbu —
i proto je lepší vždycky nejdřív zkusit nastavení.

### Kdo vidí data, se kterými aplikace pracuje?

Aplikace pracuje pod vlastní rolí a vidí jen to, co jí role dovolí. Aplikace v obchodě musí
popsat, jaká data odcházejí mimo Twenty a kam.

:::
