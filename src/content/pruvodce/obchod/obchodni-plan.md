---
title: Obchodní plán se semaforem — víte včas, jestli tempo stačí
description: V Twenty Sales je obchodní plán samostatný záznam s cílem obratu, plněním z potvrzených nabídek a semaforem, který měří tempo vůči uplynulému času. Jak funguje, co z něj vyčte vedoucí i AI a co je k tomu potřeba.
vMenu: Obchodní plán
poradi: 5
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [obchod, reporty]
funkce: [vlastni-zaznamy, pohledy, dashboardy, ai-chat, mcp-server]
zdroje: [twenty-capabilities-objects, docs-ai-chat, docs-mcp]
---

**V Twenty Sales, naší nadstavbě nad open-source Twenty, je obchodní plán samostatný záznam:
cíl obratu za období, plnění sečtené z potvrzených nabídek a semafor, který porovná plnění
s tím, kolik z období už uběhlo.** Šedesát procent v půlce kvartálu je v pořádku, šedesát procent
týden před koncem není — a systém ten rozdíl pozná za vás.

Běžné CRM řekne, co se stalo a co se rýsuje. Neřekne, jestli to stačí. Na tuhle otázku je
obchodní plán.

## Co vám to umožní

- **Skluz vidíte, dokud se s ním dá něco dělat.** Semafor přepne na Zaostává uprostřed období,
  ne až po jeho konci.
- **Plnění, kterému se dá věřit.** Počítá se z potvrzených nabídek, ne z obchodů, které někdo
  odklikal do fáze Vyhráno. A zrušená zakázka z plnění zase zmizí — nezůstane tam nasucho.
- **Plán firmy i plán obchodníka.** Plán bez vlastníka je plán celé firmy, s vlastníkem je osobní.
  Každý obchodník vidí své tempo, vedoucí celek.
- **Koruny a eura zvlášť.** Plán nesčítá měny potichu a ukazuje, co do plnění nespadlo a proč.
- **Výhled, ne jen historie.** Rozpracované obchody mají podle fáze pravděpodobnost a z ní váženou
  hodnotu — vidíte, kolik ještě může do konce období realisticky přibýt.

## Jak to v Twenty funguje

Obchodní plán je jeden z dvanácti typů záznamů Twenty Sales. Stojí na tom, že open-source Twenty
umí vlastní typy záznamů s vlastními poli a vazbami — proto nad ním fungují i pohledy, dashboardy,
AI chat a napojení pro AI nástroje jako každý jiný záznam.

**Jak plán počítá:**

- **Cíl** — obrat, který si stanovíte na zvolené období, třeba kvartál.
- **Plnění** — součet potvrzených nabídek v období. Nabídky se vážou k obchodním případům,
  takže je vidět, ze kterých obchodů plnění pochází.
- **Semafor** — Před plánem → V plánu → Zaostává; po skončení období Splněno, nebo Nesplněno.
  Měří tempo vůči času, ne jen procento splnění.
- **Výhled** — stojí na fázích obchodu Nový → Kvalifikace → Nabídka → Jednání → Vyhráno nebo
  Prohráno. Každá fáze má pravděpodobnost, ze které systém spočítá váženou hodnotu.

Mezi šesti hotovými přehledy Twenty Sales je přehled **plán, tržby a prohry** — plnění plánu vedle
skutečných tržeb a důvodů proher. Důvod prohry se vyhodnocuje v kusech i v korunách; pořadí
důvodů pak často vyjde jinak.

**AI nad plánem.** Plán je běžný záznam, takže se na něj dá zeptat v AI chatu přímo v Twenty nebo
v Claude či ChatGPT připojeném přes MCP: *„Jak jsme na tom s plánem za kvartál a které obchody
ve fázi Jednání by mohly skluz dorovnat?"* AI přečte plán i obchodní případy a vrátí přehled.
Pracuje pod rolí toho, kdo se ptá. Jak se ptát, popisuje
[dokumentace výrobce](https://docs.twenty.com/cs/user-guide/ai/capabilities/ai-chatbot).

:::poznamka[Ilustrační příklad]{ton="info"}

Firma, která dodává a montuje kancelářský nábytek, má na kvartál firemní plán a k tomu osobní plány
tří obchodníků. V sedmém týdnu z třinácti ukazuje firemní plán **V plánu**, ale osobní plán jednoho
obchodníka přepnul na **Zaostává** — dvě velké nabídky čekají na podpis a jedna potvrzená zakázka
byla zrušená a z plnění vypadla.

Vedoucí to vidí v pondělí ráno v přehledu, ne na konci kvartálu. V AI chatu se zeptá, které jeho
obchodní případy ve fázi Jednání mají nejvyšší váženou hodnotu, a na poradě s obchodníkem rovnou
probere tři konkrétní obchody.

:::

## Co je k tomu potřeba

- **[Twenty Sales](/pro-obchodni-tymy/)** — obchodní plán, fáze s pravděpodobností, nabídky
  a přehled plnění jsou součástí řešení. Nasazení stojí {{cena.implementation}} jednorázově,
  provoz na vyhrazeném serveru {{cena.retainer_selfhost|mesicne}}, bez poplatků za uživatele.
- **Potvrzené nabídky v systému** — plnění se počítá z nich, takže obchodníci zapisují nabídky
  do Twenty Sales, ne do vlastních tabulek. Jak nabídky fungují, popisuje článek
  [nabídka s marží](/twenty/obchod/nabidka-s-marzi/).
- **Plány na období** — cíle zadá vedoucí; při nasazení je spolu nastavíme a převedeme
  i rozpracované obchody, aby výhled začínal od skutečného stavu.
- **AI model** jen pro otázky v AI chatu — na vyhrazeném serveru přes vaše vlastní klíče k AI.
  Samotný plán a semafor AI nepotřebují.

:::otazky

### Počítá se plnění z vyhraných obchodů?

Ne, z potvrzených nabídek. Fáze Vyhráno říká, co obchodník odklikal; potvrzená nabídka říká, co
klient skutečně objednal. A když se zakázka zruší, z plnění zase zmizí.

### Můžu mít plán pro firmu i pro každého obchodníka?

Ano. Plán bez vlastníka je plán celé firmy, plán s vlastníkem je osobní. Mohou běžet současně.

### Co když prodáváme v korunách i v eurech?

Plán koruny a eura nesčítá potichu — ukazuje, co do plnění nespadlo a proč. Hotové přehledy
v Twenty Sales jsou zvlášť pro koruny a zvlášť pro eura.

### Má obchodní plán i Twenty Servis?

Obchodní plán je součást Twenty Sales. [Twenty Servis](/pro-servisni-firmy/) staví na zakázkách,
výjezdech a výkazech práce a má vlastní přehledy pro technika, dispečera a majitele.

:::
