---
title: Jak hlídat útratu za AI na vyhrazeném serveru, aby faktura nepřekvapila
description: Na vyhrazeném serveru platíte AI přímo poskytovateli. Jak nastavit strop útraty a upozornění u Anthropic a OpenAI, proč volit levnější model na jednoduché úlohy, jak útratu změřit pilotem a hlídat automatizace, které AI spouštějí.
vMenu: Hlídání útraty za AI
poradi: 3
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [naklady, ai, provoz]
funkce: [vlastni-klice-ai, ai-volba-modelu, ai-krok-automatizace, ai-agenti, ai-trideni, ai-kredity]
zdroje: [docs-ai-faq, claude-api-rate-limits, twenty-vydani, github-twenty-v2-40-0, github-twenty-v2-46-0, github-twenty-v2-56-0, docs-pravni-faq, openai-terraform-rate-limits-and-spend, claude-build-with-claude-effort, claude-manage-claude-data-residency, gartner-press-releases-2026-08-17-gartner-predicts-ai-infere]
---

**Útratu za AI na vyhrazeném serveru hlídáte tam, kde ji platíte — u poskytovatele AI: nastavíte
měsíční strop nebo upozornění a Twenty připojíte přes samostatný účet, aby byla jeho spotřeba vidět
zvlášť.** Zbytek je volba modelu podle úlohy, krátký pilot, ze kterého znáte cenu jedné úlohy,
a pravidelný pohled do vyúčtování.

Hlídat se to vyplatí, i když ceny AI modelů klesají. Gartner v srpnu 2026 předpověděl, že náklady
na běh jednoho agentního postupu do roku 2028 **vzrostou víc než pětinásobně** — agenti dělají
složitější úlohy ve více krocích a spotřebují mnohem víc textu než jednoduchý chat.

Na vyhrazeném serveru zadáváte do Twenty vlastní klíče k AI a spotřebu platíte přímo poskytovateli,
bez přirážky (víc v článku [Vlastní klíče k AI](/twenty/provoz/vlastni-klice-k-ai/)). Kredity a limity
útraty přímo v Twenty existují jen v cloudu výrobce — srovnání najdete na stránce
[Vyhrazený server nebo cloud](/cloud-vs-selfhost/).

## Co vám to umožní

- **Strop místo překvapení.** Chybně nastavená automatizace nemůže za víkend utratit víc, než jste
  ochotni riskovat.
- **Vidět, kolik stojí CRM a kolik ostatní AI.** Když má Twenty vlastní účet nebo projekt
  u poskytovatele, jeho spotřeba se nemíchá s tím, co ve firmě používají vývojáři nebo marketing.
- **Platit za chytrost jen tam, kde je potřeba.** Třídění poptávek zvládne levný model, koncept
  odpovědi klientovi dražší.
- **Rozpočet podložený čísly.** Z pilotu znáte cenu jedné úlohy a víte, kolik bude stát dvojnásobný
  objem.

## Jak útratu hlídat

**1. Samostatný účet pro Twenty.** U Anthropic jde o samostatný pracovní prostor, u OpenAI
o samostatný projekt, každý s vlastním klíčem. Spotřebu CRM pak vidíte odděleně a limit nastavíte
jen pro ni.

**2. Strop nebo upozornění hned na začátku.** U poskytovatelů to funguje různě:

| Poskytovatel | Co nastavíte | Co se stane po dosažení |
|---|---|---|
| **Anthropic** | vlastní měsíční limit útraty pro celý účet i pro jednotlivý pracovní prostor, pod stropem, který má účet podle své úrovně | požadavky poskytovatel odmítá až do začátku dalšího měsíce, nebo dokud limit nezvýšíte |
| **OpenAI** | e-mailové upozornění, když měsíční útrata projektu nebo celé organizace dosáhne zvolené částky; limity počtu požadavků a textu za minutu pro projekt | upozornění požadavky nezastaví — je to signál, ne strop; tempo útraty brzdí limity za minutu |

Pozor na důsledek tvrdého stropu: po jeho dosažení přestanou do konce měsíce fungovat i AI funkce
v CRM. Strop proto nastavte s rezervou nad očekávanou spotřebou a k němu upozornění dřív, než se
do něj narazí. Zda váš poskytovatel upozornění nabízí a jak, ověřte v jeho nastavení.

**3. Levnější model na jednoduché úlohy.** Twenty od verze 2.40 ukazuje u každého modelu cenu za
milion tokenů (token je kousek textu, zhruba část slova). Výchozí model pro celou firmu může být
rychlý a levný; chytřejší dostanou jen agenti, u kterých na kvalitě textu záleží. U modelů Claude 5.5
jde od verze 2.56 nastavit i **úroveň úsilí** — čím nižší, tím méně textu model na odpověď spotřebuje.

**4. Pilot a měření.** Novou úlohu nechte dva až čtyři týdny běžet na skutečných datech, z vyúčtování
zjistěte cenu jedné úlohy a vynásobte ji měsíčním objemem. Postup popisuje článek
[Jak začít pilotem](/twenty/naklady/pilot-ai/).

**5. Hlídání automatizací.** Nejvíc utratí agent nebo AI krok, který se spouští častěji, než má.
Spouštěč při změně záznamu proto omezte na pole, na kterých záleží (třeba fázi obchodního případu),
a u nového agenta první dny kontrolujte, kdy a nad kterými záznamy běžel.

**6. Pravidla pro data stojí peníze.** Některá nastavení umístění zpracování zdražují: Anthropic
účtuje za zpracování jen v USA 1,1násobek běžné ceny. Výrobce Twenty u připravovaného nastavení
„jen EU a bez uchovávání dat" upozorňuje, že bude k dispozici méně modelů a některé budou dražší.

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodní firma používá **Twenty Sales** (naši nadstavbu nad open-source Twenty) na vyhrazeném
serveru. U Anthropic si pro CRM založí samostatný pracovní prostor s vlastním klíčem. Pilot: AI krok
třídí nové Zájemce podle toho, o co mají zájem, na levném modelu. Po třech týdnech vyúčtování ukáže
cenu jednoho třídění; firma ji vynásobí měsíčním počtem poptávek, nastaví limit pracovního prostoru
zhruba na dvojnásobek a každý měsíc porovná útratu s časem, který obchodníci ušetřili.

:::

## Co je k tomu potřeba

- **Firemní účet u poskytovatele AI** se samostatným pracovním prostorem nebo projektem pro Twenty.
- **Odhad objemu** — kolik poptávek, schůzek nebo zakázek má AI měsíčně zpracovat.
- **Strop nebo upozornění** nastavené před spuštěním první automatizace s AI.
- **Člověka, který se jednou měsíčně podívá do vyúčtování** a porovná ho s přínosem.
- **Nastavení** — klíč k AI a výchozí model se do Twenty zadávají při nasazení, protože AI chat je
  součástí Twenty Sales i Twenty Servis. Omezení spouštěčů patří k automatizaci, pro kterou je;
  automatizace s AI navíc a jejich nastavení jsou práce navíc: drobnost se vejde do hodiny měsíčně
  v paušálu, větší úpravu odhadneme předem — viz [SLA balíčky](/sla-balicky/).

Jak AI účtují velcí dodavatelé CRM a jak útratu odhadnout předem, rozebírá článek
[Kolik stojí AI agenti v CRM](/twenty/naklady/kolik-stoji-ai-agenti/).

:::otazky

### Kolik bude AI v CRM stát měsíčně?

Záleží na počtu úloh, jejich délce a zvoleném modelu. Spolehlivé číslo dá jen krátký pilot na vašich
datech — z něj znáte cenu jedné úlohy a vynásobíte ji objemem.

### Co se stane, když dojde strop?

U tvrdého limitu poskytovatel další požadavky odmítne, takže AI v CRM přestane do konce měsíce
odpovídat; práce v Twenty bez AI běží dál. Proto doporučujeme strop s rezervou a upozornění předem.

### Neplatí se za AI ještě Twenty?

Na vyhrazeném serveru ne. Spotřebu platíte jen poskytovateli modelu podle jeho ceníku.

### Vyplatí se vždy nejlevnější model?

Ne vždy. Levný model, který se často mýlí, stojí čas lidí na opravy. Na jednoduché třídění obvykle
stačí, u textů pro zákazníky se vyplatí porovnat v pilotu i dražší model.

:::
