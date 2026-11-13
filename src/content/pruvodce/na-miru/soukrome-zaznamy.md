---
title: Jak udržet důvěrný obchod jen mezi zasvěcenými — soukromé záznamy a sdílení v Twenty
description: "Twenty připravuje soukromé záznamy: důvěrný obchod nebo personální poznámku uvidí jen autor a ti, s kým ji výslovně sdílí — role na ni nedosáhnou, ani role správce. Co jde dnes přes role a omezení „každý vidí jen své“ a čím se to liší."
vMenu: Soukromé záznamy
poradi: 6
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [opravneni, bezpecnost, data]
funkce: [soukrome-zaznamy, role-opravneni, jen-sve-zaznamy]
zdroje: [github-twenty-v2-55-0, github-twenty-v2-56-0, github-twenty-v2-57-0, gh-prepinace, docs-opravneni, twenty-capabilities-permissions-access-control, github-twenty-v2-41-0, github-twenty-v2-45-0]
---

**Twenty připravuje soukromé záznamy: záznam označený jako soukromý uvidí jen ten, kdo ho
založil, a ti, s kým ho výslovně sdílí. Role na něj podle výrobce nedosáhnou — ani role
správce.** Výrobce funkci ohlásil ve verzi 2.55 (3. 11. 2026); ve vývoji je ale zatím za
přepínačem, takže s ní nepočítejte jako s hotovou.

Dnes se v Twenty dá nastavit, kdo co vidí, přes **role** a v tarifu Organization přes omezení
**„každý vidí jen své záznamy“**. Soukromý záznam řeší jinou situaci: ne pravidlo pro celý tým,
ale jednu věc, o které má vědět jen pár lidí.

## Co vám to umožní

- **Důvěrný obchod mimo zraky celého týmu.** Převzetí konkurenta, zakázka pro klienta, který
  si diskrétnost výslovně vymínil, nebo jednání, o kterém zatím ví jen jednatel a jeden obchodník.
- **Personální věci v CRM, ne v soukromém sešitě.** Poznámka k jednání o mzdě nebo k odchodu
  kolegy zůstane u ostatních záznamů, ale přečtou ji jen ti, komu ji autor zpřístupní.
- **Vyjednávání, které se nerozkecá.** Cenová hranice, pod kterou se nejde, nebo stav sporu
  s dodavatelem — obchod žije v CRM dál, jen ho nevidí každý.
- **Výjimku bez přestavby rolí.** Kvůli jedné citlivé věci není potřeba vymýšlet novou roli
  a přenastavovat oprávnění celému týmu.

## Jak to v Twenty funguje

Twenty má na otázku „kdo co vidí“ tři různé nástroje. Každý se hodí na něco jiného:

| | Role | Každý vidí jen své | Soukromý záznam |
|---|---|---|---|
| **Kdo o tom rozhoduje** | správce, předem pro celou skupinu lidí | správce, pravidlem v roli | autor, u konkrétního záznamu |
| **Na co se vztahuje** | celé typy záznamů a jednotlivá pole | záznamy, které splní podmínku — třeba „obchody, kde jsem vlastník“ | jeden záznam |
| **Vidí to správce** | ano | ano | ne, jen pokud mu ho autor sdílí |
| **Stav** | lze nastavit dnes | lze nastavit dnes, tarif Organization | připravuje se |

**Role** určují, kdo smí které typy záznamů a pole vidět, upravovat nebo mazat — například
že technik nevidí nákupní ceny. Podle dokumentace výrobce se role přidělují i AI agentům
a napojeným systémům. Na vyhrazeném serveru jsou vlastní role bez omezení tarifu, v cloudu
výrobce je mají členové týmu až v tarifu Organization.

**Každý vidí jen své** je pravidlo v roli, které omezí, které jednotlivé záznamy smí člověk
vidět nebo měnit, například „obchodník vidí jen své obchodní příležitosti“. Dokumentace výrobce
ho řadí do tarifu **Organization**, v cloudu i jako licenci pro vlastní server. Rozdíl proti
filtrovanému pohledu „Moje záznamy“: pohled jen třídí, tohle omezení cizí záznamy opravdu skryje.

**Soukromý záznam** podle poznámek k vydání 2.55 vidí jen jeho autor a lidé, se kterými ho
sdílí přímo. Role na něj nedosáhnou, ani role správce. Protože AI agenti a napojené systémy
v Twenty pracují pod rolí, vyplývá z popisu výrobce, že soukromý záznam nevidí ani oni.

**Jak se k tomu Twenty dostalo:** základ sdílení záznamů se objevil ve verzi 2.41 (17. 9.),
sdílení jednotlivého záznamu ve verzi 2.45 (5. 10.), soukromé záznamy ve verzi 2.55 (3. 11.)
a ve verzi 2.56 (5. 11.) výrobce odstranil přepínač, který je zapínal.

**Stav:** ve verzi 2.57 (9. 11.) přibyl pro soukromé záznamy nový přepínač a sdílení s konkrétními
kolegy je v kódu za přepínačem dál. Výrobce ho v poznámkách k vydání 2.41 zařadil mezi placené
funkce; v jakém tarifu bude, zatím neuvádí. Dokumentace výrobce soukromé záznamy ani sdílení
zatím nepopisuje. Proto je vedeme jako „připravuje se“ a stav sledujeme při každém vydání.

Jak fungují role a oprávnění dnes, popisuje
[dokumentace výrobce](https://docs.twenty.com/cs/user-guide/permissions-access/capabilities/permissions),
role pro AI agenty [samostatná stránka](https://docs.twenty.com/cs/user-guide/ai/capabilities/permissions-access-control).

:::poznamka[Ilustrační příklad]{ton="info"}

Velkoobchod s technikou používá [Twenty Sales](/pro-obchodni-tymy/), naši nadstavbu nad
open-source Twenty, se čtyřmi rolemi: čtenář, obchodník, vedoucí a správce. Jednatel vede
jednání o dodávkách pro řetězec, který si v rámcové smlouvě vymínil diskrétnost.

**Dnes:** obchodní případ je v CRM jako každý jiný a o tom, kdo ho vidí, rozhoduje role.
Kdyby se mělo omezit, kdo vidí cizí obchody, je to pravidlo „každý vidí jen své“ v tarifu
Organization — platí ale pro všechny obchody, ne jen pro tenhle.

**Až budou soukromé záznamy dostupné:** jednatel označí obchodní případ jako soukromý a sdílí
ho s jedním obchodníkem. Ostatní ho nevidí, správce systému také ne. Nabídky,
e-maily a úkoly k němu se dál zapisují do CRM a nikdo nevede stranou vlastní tabulku.

:::

## Co je k tomu potřeba

- **Rozmyslet, co je opravdu důvěrné.** Soukromý záznam je výjimka. Když je soukromé všechno,
  přestanou sedět přehledy, plán a dashboardy, protože v nich chybí to, co vedení nevidí.
- **Role pro běžný provoz.** Twenty Sales má čtyři hotové role, Twenty Servis role podle práce
  v systému (technik, operátor, správce). Jejich úpravu na míru vaší firmě lze nastavit, ale je
  to práce navíc: drobnost z hodiny měsíčně v paušálu, větší úprava po odhadu předem — viz
  [SLA balíčky](/sla-balicky/).
- **Tarif Organization**, pokud chcete tvrdé omezení „každý vidí jen své“. Na vyhrazeném serveru
  jde o licenci, kterou prodává výrobce, zvlášť od provozu serveru u nás
  ({{cena.retainer_selfhost|mesicne}} bez DPH).
  Jak se liší cloud, popisuje stránka [Vyhrazený server nebo cloud](/cloud-vs-selfhost/).
- **Novou verzi Twenty**, až výrobce soukromé záznamy zpřístupní. Nasazení nové verze patří
  do hodiny měsíčně v paušálu.

Jak mít pod kontrolou, na co sáhne AI, rozebírá článek
[Bezpečnost AI agentů](/twenty/ai-agenti/bezpecnost-ai-agentu/). Co dalšího Twenty v listopadu
přineslo, shrnuje [přehled novinek](/twenty/novinky/2026-11/).

:::otazky

### Můžeme soukromé záznamy používat už dnes?

Zatím s nimi nepočítejte. Výrobce je ohlásil ve verzi 2.55, ale ve verzi 2.57 jsou v kódu
znovu za přepínačem a sdílení s konkrétními kolegy také. Dnes se přístup řídí rolemi
a v tarifu Organization pravidlem „každý vidí jen své“.

### Uvidí soukromý záznam správce systému?

Podle poznámek k vydání ne. Role na soukromý záznam nedosáhnou, ani role správce — vidí ho jen
autor a ti, s kým ho sdílí přímo.

### Jaký je rozdíl mezi soukromým záznamem a omezením „každý vidí jen své“?

Omezení „každý vidí jen své“ nastavuje správce jako pravidlo pro celou roli a správce sám vidí
všechno. Soukromý záznam je rozhodnutí autora u jednoho záznamu a správce ho nevidí.

### Uvidí soukromý záznam AI agent?

AI agenti a napojené systémy pracují v Twenty pod rolí a na soukromý záznam role podle výrobce
nedosáhnou. AI chat pracuje s oprávněními toho, kdo se ptá.

### Stačí nám filtrovaný pohled „Moje obchody“?

Pro většinu týmů ano — každý vidí svou práci a přehled zůstává. Pohled ale jen třídí. Když
někdo cizí záznamy vidět nesmí, je potřeba role nebo omezení „každý vidí jen své“.

:::
