---
title: Proč AI agenti v CRM chybují na zdvojených a neúplných datech — a jak tomu předejít
description: AI agent rozhoduje podle toho, co v CRM najde. Dvakrát založený klient, prázdná pole a volně psané hodnoty ho svedou ke špatné odpovědi. Co se konkrétně pokazí a co proti tomu nabízí Twenty — slučování duplicit, pravidla pro kontrolu dat a role.
vMenu: Proč agenti chybují
draft: true
poradi: 1
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [data, ai, agenti]
funkce: [slucovani-duplicit, kontrola-dat, vlastni-zaznamy, role-opravneni, ai-krok-automatizace, posta-kalendar]
zdroje: [docs-opravneni, gh-vydani, salesforce-stories-state-of-sales-report-announcement-2026, arxiv-abs-2505-18878, twenty-capabilities-validation-rules, twenty-capabilities-uniqueness-constraints, github-twenty-v2-53-1, github-pull-27818, gartner-press-releases-2026-07-28-gartner-predicts-ai-agents]
---

**AI agent v CRM nemá vlastní paměť ani úsudek o vašich klientech — rozhoduje jen podle toho, co
v datech najde. Když je klient založený dvakrát, důležitá pole jsou prázdná a stejná věc je
zapsaná pěti způsoby, agent odpoví sebejistě, ale špatně.** Předejít se tomu dá dřív, než agenta
pustíte do práce: sloučit duplicity, určit, které údaje musí být vyplněné, a dát agentovi jen
taková oprávnění, jaká potřebuje.

Není to okrajový problém. V průzkumu Salesforce State of Sales 2026 (4 050 lidí z obchodu
z 22 zemí, srpen až září 2025) uvedlo 51 % vedoucích obchodu, kteří AI používají, že jim AI
projekty brzdí nepropojené systémy. 74 % dotázaných se proto věnuje čištění dat — odstraňování
duplicit, opravám chyb a chybějících údajů a sjednocování formátů.

Gartner v červenci 2026 předpověděl, že do roku 2028 bude AI agentů v obchodě desetkrát víc než
obchodníků, ale **méně než 40 % obchodníků řekne, že jim agenti zvýšili produktivitu**. Bez
pořádných dat, propojených procesů a pohodlné práce pro obchodníky podle něj vznikne jen víc
digitální aktivity, ne víc výsledků.

## Kde agent na datech klopýtne

- **Zdvojený klient.** Firma založená jednou z e-mailu a podruhé ručně s překlepem v názvu má
  historii rozdělenou na dvě karty. Agent, který má shrnout vztah s klientem, najde jen polovinu.
  Upozornění „klient se dva měsíce neozval" přijde, i když s ním kolega včera psal na druhé kartě.
- **Prázdné pole.** Má-li AI přidělit poptávku podle regionu a region chybí, musí hádat, nebo
  poptávku nechat ležet. Člověk se zeptá kolegy; agent se zeptat nemá koho.
- **Volně psané hodnoty.** „Praha", „Praha 4", „PHA" a „praha" jsou pro člověka totéž, pro filtr
  čtyři různé hodnoty. Agent, který třídí podle regionu nebo stavu, část záznamů mine.
- **Zastaralé údaje.** Obchodní případ, který dávno padl, ale v CRM je pořád rozjednaný, vede
  agenta k tomu, že navrhne připomenout se klientovi, který už nakoupil jinde.
- **Historie mimo CRM.** Když dohody leží v osobní schránce obchodníka, agent je nevidí a pracuje
  s neúplným obrazem. Proto je základ [synchronizace pošty a kalendáře](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/).
- **Příliš široká oprávnění.** Agent, který smí měnit všechno, může jednu chybu zopakovat ve stovce
  záznamů najednou.

Spolehlivost agentů přitom není samozřejmá ani na čistých datech. V testu CRMArena-Pro
(Salesforce AI Research, květen 2025) zvládly nejlepší modely zhruba 58 % jednokrokových úloh
v CRM a asi 35 % úloh vedených v několika krocích rozhovoru. Čistá data tedy nejsou zárukou,
ale jsou předpoklad — chybějící údaj nedoplní ani lepší model.

## Co vám uklizená data umožní

- **Odpovědi z celé historie.** AI shrne klienta ze všech e-mailů, schůzek a obchodů, ne z jedné
  z jeho karet.
- **Automatizace, které rozhodují správně.** AI krok, který poptávku zařadí nebo přidělí, dostane
  všechny údaje, které k tomu potřebuje.
- **Přehledy, kterým se dá věřit.** Každý klient se v součtech počítá jednou.
- **Chyby, které jsou vidět.** Když data drží pravidla, odchylka v práci agenta bije do očí
  a dá se rychle opravit.

## Jak tomu v Twenty předejít

- **Slučování duplicit.** Dva až devět záznamů sloučíte do jednoho a vazby — e-maily, úkoly,
  obchodní případy — zůstanou u výsledného záznamu. Od verze 2.53.1 to jde u libovolného typu
  záznamu, nejen u firem a osob, a duplicity umí sloučit i AI chat. Podle instrukcí od výrobce si
  přitom nejdřív ukáže náhled a při rozporu se zeptá, kterou hodnotu ponechat. Slučovat smí jen
  role, která smí záznamy upravovat i mazat.
- **Jedinečná pole.** E-mail u osoby a doména u firmy jsou v Twenty jedinečné samy. Další pole,
  třeba IČO nebo výrobní číslo, jde jako jedinečné označit — druhý záznam se stejnou hodnotou
  pak nevznikne ani importem.
- **Pravidla pro kontrolu dat.** Podmínka, kterou musí záznam splnit, než se uloží — například
  že obchodní případ nepostoupí do závěrečné fáze bez částky, nebo že kontaktní osoba patří
  ke klientovi. Pravidlo platí pro každý zápis: ručně, importem, automatizací i přes napojení,
  kterým pracuje AI. Tak se z „povinného pole" stane pravidlo, které nepustí ani agenta.
  Pravidla patří do tarifu Organization, v cloudu výrobce i jako licence pro vyhrazený server.
- **Výběr místo volného textu.** Pole typu výběr drží hodnoty jako region, typ zařízení nebo
  stav jednotné, takže je filtr i AI najdou všechny.
- **Role pro AI.** AI krok v automatizaci běží od verze 2.56 s vlastním omezeným oprávněním
  a AI nástroj připojený přes MCP (moderní napojení pro AI nástroje, viz [Co je MCP](/twenty/mcp/co-je-mcp/))
  pod rolí uživatele, za kterého pracuje. Agent tak smí měnit
  jen to, co mu určíte.

Podrobnosti najdete v dokumentaci výrobce: [pravidla pro kontrolu dat](https://docs.twenty.com/user-guide/data-model/capabilities/validation-rules)
a [role a oprávnění](https://docs.twenty.com/cs/user-guide/permissions-access/capabilities/permissions).

V našich řešeních [Twenty Sales](/pro-obchodni-tymy/) a [Twenty Servis](/pro-servisni-firmy/) —
nadstavbách nad open-source Twenty — se navíc klient zakládá podle IČO a název, DIČ a adresu
doplní ARES. Název firmy tak nikdo nepíše ručně pokaždé trochu jinak.

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodní ředitel velkoobchodu s technikou se zeptá AI chatu: *„Kteří klienti letos uzavřeli
obchody za víc než milion?"* Firma Strojírny Novák v odpovědi chybí. V CRM má totiž dvě karty —
„Strojírny Novák s.r.o." z e-mailu a „Strojirny Novak" založenou ručně — a obchody jsou
rozdělené mezi ně, každá polovina pod hranicí. Po sloučení obou karet se obchody sečtou a firma
se v přehledu objeví. Aby se to neopakovalo, správce označí IČO jako jedinečné pole.

:::

## Co je k tomu potřeba

- **Jednorázový úklid** dat, se kterými bude AI v první úloze pracovat. Postup krok za krokem
  je v [kontrolním seznamu před nasazením AI](/twenty/data/kontrolni-seznam-dat/).
- **Rozhodnutí, co je povinné a kdy.** Které údaje musí mít poptávka, klient nebo zakázka, je
  obchodní rozhodnutí, ne technické. Pravidla podle něj pak nastavíme.
- **Tarif Organization** jen pro pravidla kontroly dat. Slučování duplicit, jedinečná pole
  a vlastní role jsou na vyhrazeném serveru součástí Twenty.
- **Začít malou úlohou.** Jak vybrat první úlohu a změřit výsledek, popisuje [Pilot AI](/twenty/naklady/pilot-ai/).

:::otazky

### Musíme mít všechna data dokonalá, než začneme s AI?

Ne. Stačí uklidit data, se kterými bude AI pracovat v první úloze — třeba klienty a otevřené
obchodní případy. Zbytek se dočistí postupně a pravidla pro kontrolu dat hlídají, aby nová data
nevznikala neúplná.

### Najde duplicity AI sama?

Můžete AI chat požádat, ať projde klienty a navrhne, které vypadají jako stejná firma. Sloučit je
umí také. U sporných hodnot si podle instrukcí od výrobce nejdřív ukáže náhled a zeptá se, kterou
ponechat.

### Zastaví pravidlo pro kontrolu dat i AI?

Ano. Pravidlo platí pro každý zápis do záznamu — ručně, importem, automatizací i přes napojení
AI nástroje. Záznam, který ho nesplní, se neuloží a Twenty ukáže zprávu, co doplnit.

### Proč nestačí lepší AI model?

Model pracuje s tím, co v CRM najde. Když je historie klienta rozdělená na dvě karty nebo chybí
údaj, podle kterého se rozhoduje, chybu nespraví ani dražší model — jen ji podá přesvědčivěji.

:::
