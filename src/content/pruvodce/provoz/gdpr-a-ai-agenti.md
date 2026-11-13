---
title: GDPR a AI agenti — kam tečou data zákazníků, když v CRM pracuje AI
description: Kdo je u AI v CRM správce a kdo zpracovatel, kam odcházejí data zákazníků, kde se zpracovávají a jestli na nich poskytovatel AI trénuje. Přehled z GDPR, pokynů EDPB a dokumentace Twenty, Anthropic a OpenAI. Nejde o právní radu.
vMenu: GDPR a AI agenti
poradi: 3
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [provoz, ai, bezpecnost, legislativa]
funkce: [vlastni-klice-ai, ai-volba-modelu, role-opravneni, ai-krok-automatizace, audit-log, mcp-server, ai-pravidla-dat]
zdroje: [docs-pravni-faq, docs-ai-faq, docs-opravneni, github-twenty-v2-40-0, github-twenty-v2-56-0, eur-lex-oj-ces-3, edpb-guidelines-guidelines-072020-concepts-controller-and-pr, uoou, anthropic-legal-commercial-terms, privacy-articles-7996862-how-do-i-view-and-sign-your-data-pr, claude-manage-claude-data-residency, claude-manage-claude-api-and-data-retention, privacy-articles-7996866-how-long-do-you-store-my-organizati, openai-guides-your-data]
---

**Když v CRM pracuje AI, odcházejí data zákazníků k poskytovateli AI modelu — ale jen ta, se
kterými AI v danou chvíli pracuje, a jen když ji někdo nebo něco spustí.** Vaše firma zůstává
správcem osobních údajů; poskytovatel AI je také zpracovatelem, se kterým musí být vztah
ošetřený smlouvou, a podstatné je, kde data zpracovává a jestli je uchovává.

:::poznamka[Toto není právní poradenství]{ton="varovani"}

Článek je přehled z obecného nařízení o ochraně osobních údajů (GDPR), pokynů evropských úřadů
a dokumentace poskytovatelů ke dni ověření. Nevykládá, jak se pravidla vztahují na vaši firmu.
Konkrétní použití AI s osobními údaji konzultujte s pověřencem pro ochranu osobních údajů nebo
s advokátem.

:::

Jak je zabezpečený samotný vyhrazený server, kde leží data CRM a jaké máme zpracovatelské podmínky,
popisuje stránka [Bezpečnost](/bezpecnost/). Pravidla evropského nařízení o umělé inteligenci
shrnuje článek [AI Act a CRM](/twenty/provoz/ai-act-a-crm/). Tady jde o jedinou otázku: co se
s daty děje, když je čte AI.

## Kdo je kdo

GDPR rozlišuje **správce** — toho, kdo určuje, proč a jak se osobní údaje zpracovávají (čl. 4 bod 7)
— a **zpracovatele**, který je zpracovává pro něj (čl. 4 bod 8). Zpracovatel smí pracovat jen podle
smlouvy se správcem a správce smí využít jen zpracovatele, který poskytuje dostatečné záruky
(čl. 28). Role podrobně rozebírá Evropský sbor pro ochranu osobních údajů (EDPB) v pokynech 07/2020.

| Kdo | Role | Co s daty dělá |
|---|---|---|
| **Vaše firma** | správce | rozhoduje, které údaje o zákaznících vede a k čemu na ně pouští AI |
| **My (ESHOpino) — vyhrazený server** | zpracovatel | provozujeme server, na kterém leží data CRM; podmínky na stránce [Bezpečnost](/bezpecnost/) |
| **Poskytovatel AI modelu** (Anthropic, OpenAI…) | zpracovatel podle vaší smlouvy s ním | zpracuje text, který mu Twenty pošle s úlohou, a vrátí odpověď |
| **AI asistent připojený přes MCP** (Claude, ChatGPT) | podle tarifu, pod kterým ho uživatel používá | čte data CRM, ke kterým má přihlášený uživatel přístup |

Na vyhrazeném serveru zadáváte **vlastní klíč k AI** — smlouvu s poskytovatelem modelu tedy uzavírá
vaše firma přímo (podrobnosti v článku [Vlastní klíče k AI](/twenty/provoz/vlastni-klice-k-ai/)).
Twenty Inc. jako výrobce vyhrazený server neprovozuje; podle své dokumentace nemá vlastní AI model
a na datech zákazníků žádný model netrénuje. V cloudu výrobce je zpracovatelem Twenty Inc. a AI běží
přes jeho poskytovatele — srovnání najdete na stránce [Vyhrazený server nebo cloud](/cloud-vs-selfhost/).

## Kam data tečou a co o nich říkají poskytovatelé

Podle dokumentace Twenty odchází text k poskytovateli AI jen tehdy, když někdo spustí AI chat, agenta
nebo AI krok v automatizaci. Co přesně odejde, určuje úloha a role, pod kterou AI běží.

**Trénování.** Anthropic má v obchodních podmínkách pro firemní služby, že na obsahu zákazníků nesmí
trénovat modely. OpenAI uvádí, že data poslaná přes rozhraní pro napojení systémů ve výchozím stavu
k trénování nepoužívá.

**Uchovávání.** Anthropic u firemních zákazníků ve výchozím stavu maže vstupy a výstupy do 30 dní;
déle je drží jen ve stanovených výjimkách, například při porušení pravidel používání. Režim nulového
uchovávání se sjednává s jeho obchodním týmem. OpenAI ve výchozím stavu uchovává záznamy pro kontrolu
zneužití až 30 dní; nulové uchovávání nabízí po schválení.

**Umístění.** U Anthropic běží zpracování buď kdekoli ve světě (výchozí stav), nebo jen v USA,
a data se ukládají zatím jen v USA. Jde tedy o předání do třetí země, pro které GDPR vyžaduje
záruky (čl. 44–46); smlouvu o zpracování se standardními smluvními doložkami má Anthropic
automaticky součástí firemních obchodních podmínek. Při připojení přes Amazon Bedrock určuje oblast
zpracování nastavení u Amazonu a zpracovatelem je on. OpenAI nabízí zpracování a uložení v Evropě
(EHP a Švýcarsko) pro nové projekty, u kterých to schválí.

**Asistenti připojení přes MCP.** Když se obchodník ptá na data CRM v Claude nebo ChatGPT, platí podmínky
tarifu, pod kterým asistenta používá. Smlouva o zpracování Anthropic pokrývá firemní služby (Claude pro
firmy a rozhraní pro napojení systémů); osobní tarify se řídí jinými podmínkami. Pro práci s daty
zákazníků proto patří asistent do firemního tarifu.

## Co vám to umožní

- **Odpovědět zákazníkovi, kam jeho data jdou.** Máte popsané, kdo je zpracovává, kde a za jakých
  podmínek — i když AI pracuje uvnitř CRM.
- **Pustit AI jen k tomu, co úloha potřebuje.** GDPR požaduje omezit údaje na nezbytný rozsah
  (čl. 5 odst. 1 písm. c) a ochranu promyslet už při návrhu (čl. 25). Role pro agenta to v praxi
  zajistí.
- **Zvolit, kde se data zpracovávají.** Model vybíráte podle toho, kde běží, ne jen podle ceny.
- **Mít data CRM pod kontrolou.** Na vyhrazeném serveru leží celé CRM na serveru jen pro vaši firmu;
  poskytovatel AI dostane jen text konkrétní úlohy.

## Jak to v Twenty funguje

- **Role pro AI.** Agent i AI krok v automatizaci pracují pod rolí, která určuje, ke kterým typům
  záznamů a polím mají přístup. Od verze 2.56 má každý AI krok vlastní oprávnění
  ([oprávnění a role](https://docs.twenty.com/cs/user-guide/permissions-access/capabilities/permissions)).
- **Oprávnění ptát se AI** jde jednotlivým rolím odebrat; vestavěná role správce si ho ponechává.
- **Katalog modelů** ukazuje od verze 2.40 u každého modelu poskytovatele a to, kde se data
  zpracovávají.
- **Záznam změn** (součást licence Organization) ukáže, kdo co a kdy v systému změnil.
- **Připravuje se** nastavení, že AI smí data zpracovávat jen v EU a jen u poskytovatelů, kteří je
  neuchovávají. Výrobce ho popisuje v
  [právních otázkách](https://docs.twenty.com/cs/user-guide/legal/how-tos/legal-faq), ve verzi 2.57
  je ale v kódu zatím za přepínačem.

:::poznamka[Ilustrační příklad]{ton="info"}

Velkoobchod používá **Twenty Sales** (naši nadstavbu nad open-source Twenty) na vyhrazeném serveru
a chce, aby agent ke každému novému Zájemci napsal krátké shrnutí poptávky. Agent dostane roli, která
vidí jen záznamy Zájemců, ne celou historii Klientů. Firma zvolí model a oblast zpracování, které jí
po konzultaci s pověřencem vyhovují, doplní poskytovatele AI do záznamů o činnostech zpracování
a do informací pro zákazníky a ověří, že obchodníci používají Claude ve firemním tarifu.

:::

## Co je k tomu potřeba

- **Přehled, kde AI s osobními údaji pracuje** — které úlohy, nad jakými záznamy a kdo je spouští.
- **Smlouva s poskytovatelem AI** a ověření, kde zpracovává data a jak dlouho je uchovává.
- **Doplnění záznamů o činnostech zpracování** (čl. 30) a informací pro zákazníky (čl. 13 a 14),
  které zahrnují i příjemce a předání do třetích zemí.
- **Role pro AI s nejmenšími nutnými oprávněními** — v Twenty je lze nastavit; nastavení je práce navíc: drobnost se vejde do hodiny měsíčně v paušálu, větší úpravu odhadneme předem — viz [SLA balíčky](/sla-balicky/).
- **Konzultaci s pověřencem nebo advokátem.** Dozorovým úřadem je v Česku
  [Úřad pro ochranu osobních údajů](https://uoou.gov.cz/).

:::otazky

### Trénuje AI na datech našich zákazníků?

Twenty vlastní model nemá a netrénuje. Anthropic má zákaz trénování v obchodních podmínkách pro
firemní služby, OpenAI data z rozhraní pro napojení systémů ve výchozím stavu k trénování nepoužívá.
U osobních tarifů AI asistentů platí jiné podmínky — ověřte je.

### Dá se zařídit, aby data neopustila EU?

Data CRM na vyhrazeném serveru leží v Německu. U AI záleží na poskytovateli: OpenAI nabízí zpracování
v Evropě pro schválené projekty, přes cloudové platformy jde zvolit oblast, případně jde připojit
model provozovaný ve vlastní infrastruktuře. Nastavení „jen EU" přímo v Twenty se připravuje.

### Je třídění poptávek agentem automatizované rozhodování podle GDPR?

Článek 22 se týká rozhodnutí založených výhradně na automatizovaném zpracování, která mají pro člověka
právní nebo obdobně významné účinky. Jak se to vztahuje na váš postup, posoudí právník. Kde si nejste
jistí, nechte AI navrhovat a rozhodnutí na člověku.

### Potřebujeme posouzení vlivu na ochranu osobních údajů?

GDPR ho vyžaduje u zpracování, které pravděpodobně představuje vysoké riziko pro práva lidí (čl. 35).
Jestli to platí pro vaše použití AI, posoudí pověřenec nebo advokát podle rozsahu a druhu údajů.

:::
