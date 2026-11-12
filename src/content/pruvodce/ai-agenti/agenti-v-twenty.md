---
title: "Agenti v Twenty: kdy se sami spustí, co smějí a kdo je hlídá"
description: AI agenti v Twenty se spouštějí sami při změně záznamu nebo podle plánu, pracují pod vlastní rolí a drží se firemních postupů. Co umí ve verzi 2.57 — spouštěče, dovednosti, AI krok a třídění v automatizacích — a co se připravuje.
vMenu: Agenti v Twenty
draft: true
poradi: 2
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [ai, agenti, automatizace]
funkce: [ai-agenti, ai-dovednosti, ai-krok-automatizace, ai-trideni, cekani-na-udalost, ai-volba-modelu, role-opravneni, automatizace, pridelovani-dokola, ada-tymova-schranka, schvaleni-clovekem]
zdroje: [docs-akce, docs-spoustece, docs-dovednosti, docs-opravneni, twenty-vydani, gh-prepinace, github-twenty-v2-40-0, github-twenty-v2-46-0, github-twenty-v2-56-0, twenty-capabilities-permissions-access-control]
---

**Agent v Twenty je AI kolega s vlastním zadáním, rolí a spouštěči: sám se rozběhne, když vznikne
nebo se změní záznam nebo přijde naplánovaný čas, a odvede práci v datech CRM. Stejně dobře může
být jedním krokem automatizace — přečte záznam, roztřídí ho nebo doplní údaje a automatizace podle
výsledku pokračuje.**

Obecný rozdíl mezi agentem a chatbotem vysvětluje článek [Co je AI agent](/twenty/ai-agenti/co-je-ai-agent/).
Tady je, z čeho se agenti v Twenty skládají ve verzi 2.57 (listopad 2026).

## Co vám to umožní

- **Obchodník dostane poptávky už roztříděné.** Nový Zájemce se sám zařadí podle toho, o co má
  zájem, a přidělí se dalšímu obchodníkovi v pořadí.
- **Dispečer nemusí přepisovat e-maily.** Požadavek klienta se promění v zakázku se shrnutím,
  kterou stačí zkontrolovat a naplánovat.
- **Vedoucí nastaví jednotný postup.** Jak se shrnuje obchodní případ nebo jak se píše odpověď
  klientovi, se zapíše jednou a AI to dělá pokaždé stejně.
- **Majitel ví, na co AI sáhne.** Každý agent i každý AI krok má vlastní oprávnění a u agenta je
  vidět, kdy a nad kterým záznamem běžel.

## Jak to v Twenty funguje

**Agent.** Má jméno, zadání (co a jak má dělat), zvolený AI model a dovednosti. Agenti jsou
v Twenty od verze 2.0; od verze 2.46 mají vlastní seznam a stránku, podobně jako automatizace.
U modelu Twenty od verze 2.40 ukazuje poskytovatele, cenu a to, kde se data zpracovávají, takže se
dá volit mezi levnějším a chytřejším.

**Spouštěče.** Od verze 2.46 se agent spouští sám — při vzniku, změně nebo smazání záznamu (změnu
jde omezit na konkrétní pole, třeba fázi obchodního případu) nebo pravidelně podle plánu. Každý
spouštěč může nést vlastní doplňující pokyn, například „připrav plán prvního měsíce pro nového
klienta".

**Dovednosti.** Zapsaný firemní postup, který AI opakuje stejně: jak shrnout schůzku, jak připravit
podklady k nabídce. Od verze 2.40 se v AI chatu vyvolají lomítkem a dovednosti pro agenty jsou
oddělené od těch pro lidi.

**Role.** Agentovi se přiřadí role stejně jako kolegovi — určuje, které typy záznamů a pole vidí
a smí měnit. Když se ptáte v AI chatu, AI pracuje s vašimi oprávněními.

**AI v automatizacích.** Automatizace v Twenty (spouštěč a řada kroků bez programování) mají dva
kroky s umělou inteligencí:

- **AI agent** — podle zadání přečte data z předchozích kroků, shrne je, rozhodne, napíše text nebo
  pracuje se záznamy v CRM. Od verze 2.56 má krok vlastní nastavení a vlastní rozsah oprávnění:
  buď nese jednorázové zadání, nebo spustí připraveného agenta s jeho rolí. AI tak smí méně než
  automatizace kolem ní.
- **Třídění (Classify)** — od verze 2.42 odpoví na otázky, které nastavíte (ano/ne, výběr z možností,
  skóre), vždy v pevném tvaru. Automatizace se podle odpovědi spolehlivě rozvětví.

K tomu patří **čekání**: od verze 2.46 umí automatizace i agent počkat na událost — změnu záznamu —
nebo na čas a pak pokračovat. A krok **Koncept e-mailu** uloží zprávu napsanou AI do schránky ke
kontrole, místo aby ji odeslal.

Návod výrobce je v dokumentaci ke [krokům automatizací](https://docs.twenty.com/cs/user-guide/workflows/capabilities/workflow-actions)
a k [oprávněním AI agentů](https://docs.twenty.com/cs/user-guide/ai/capabilities/permissions-access-control).

**Co se připravuje.** Ve vydáních 2.46–2.57 výrobce ohlásil i věci, které jsou zatím za přepínačem,
tedy ne běžně dostupné: **Ada**, AI kolegyně v týmové schránce, které kolega v konverzaci předá úkol
jako člověku, a **schválení člověkem uvnitř běhu agenta** — agent se zeptá, počká na odpověď a teprve
pak pokračuje. Aktuální stav obou funkcí ukazuje přehled níže.

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodní tým, který prodává fotovoltaiky firmám i domácnostem. Když v CRM přibude nový **Zájemce**,
spustí se automatizace:

1. **Třídění** odpoví na dvě otázky: *Jde o poptávku, nebo o dotaz na servis?* a *Jak konkrétní je
   zájem, na stupnici 1–5?*
2. Poptávka se skóre 3 a víc se přidělí dalšímu obchodníkovi v pořadí; dotaz na servis jde
   kolegyni na podporu.
3. **AI krok** shrne text poptávky do poznámky a napíše návrh první odpovědi.
4. Návrh se uloží jako **koncept e-mailu** ve schránce obchodníka. Ten ho upraví a odešle.

Vedle toho běží agent s plánem: každé pondělí ráno projde **Obchodní případy**, které se dva týdny
nepohnuly, a vlastníkům založí úkol s krátkým shrnutím poslední komunikace.

:::

## Co je k tomu potřeba

- **Aktuální verze Twenty.** Spouštěče agentů jsou od verze 2.46, vlastní oprávnění AI kroků od
  verze 2.56. Na vyhrazeném serveru nové verze nasazujeme v rámci [měsíčního paušálu](/sla-balicky/).
- **AI model.** Na vyhrazeném serveru s vlastními klíči k AI, za které platíte přímo poskytovateli.
  V cloudu výrobce se AI účtuje v kreditech a platí se dvě faktury — viz
  [vyhrazený server, nebo cloud](/cloud-vs-selfhost/).
- **Pro třídění zvláštní model.** Krok Classify běží na hodnoticím modelu výrobce, který musí
  správce zapnout a nastavit k němu klíč. Bez toho krok neproběhne.
- **Zadání, dovednosti a role.** Co má agent dělat, podle jakého postupu a na co smí sáhnout.
  Připravíme spolu s vámi při nasazení.

Které úlohy se pro agenty v obchodě a servisu hodí, ukazuje [přehled úloh](/twenty/ai-agenti/ulohy-pro-ai-agenta/).
AI v obou našich nadstavbách nad open-source Twenty, [Twenty Sales](/pro-obchodni-tymy/) i [Twenty Servis](/pro-servisni-firmy/),
shrnuje stránka [Agentské CRM](/agentske-crm/).

:::otazky

### Jaký je rozdíl mezi agentem a AI krokem v automatizaci?

Agent je samostatný „kolega" s vlastním zadáním, rolí a spouštěči. AI krok je jedna zastávka
v automatizaci: buď s jednorázovým zadáním, nebo tak, že spustí připraveného agenta. Jednoduchou
úlohu stačí vyřešit krokem, opakovanou práci s vlastním postupem se vyplatí svěřit agentovi.

### Může agent poslat e-mail klientovi sám?

Automatizace e-mail odeslat umí. U zpráv psaných AI ale dává smysl krok Koncept e-mailu: zpráva čeká
ve schránce, dokud ji člověk nezkontroluje a neodešle. Aby se agent sám zeptal a počkal na schválení,
se v Twenty připravuje.

### Co je Ada?

AI asistentka, kterou Twenty ohlásil pro týmovou schránku: kolega ji v konverzaci označí jako
člověka a ona úkol převezme. Zatím je za přepínačem, tedy ne běžně dostupná — připravuje se.

### Uvidí agent data, která vidět nemá?

Ne, pokud mu je role nepovolí. Agent pracuje s oprávněním své role, AI krok v automatizaci se svým
vlastním rozsahem. Co smí vidět a měnit, určíte vy.

:::
