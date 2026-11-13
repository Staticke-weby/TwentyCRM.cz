---
title: Kolik stojí AI agenti v CRM a jak útratu odhadnout předem
description: Salesforce účtuje akce agenta v kreditech, HubSpot vyřešené konverzace, Microsoft kredity Copilotu, Zoho tokeny modelu. Jak jednotlivé modely účtování fungují, jak je to v Twenty a jak útratu odhadnout dřív, než přijde faktura.
vMenu: Kolik stojí AI agenti
poradi: 1
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [naklady, ai]
funkce: [vlastni-klice-ai, ai-volba-modelu, ai-krok-automatizace, ai-trideni]
zdroje: [docs-ai-faq, docs-kredity, salesforce-agentforce-pricing, salesforce-15-agentforce-flexible-pricing-news, hubspot-company-news-hubspots-customer-agent-and-prospecting, hubspot-artificial-intelligence-credits, microsoft-pricing-copilot-studio, microsoft-pricing-business, zoho-agents-pricing-html, claude-api-rate-limits]
---

**AI agenti se v CRM většinou neplatí jako běžná licence za uživatele, ale podle spotřeby — za akci,
za vyřešenou konverzaci nebo za zpracovaný text.** Kolik zaplatíte, proto neurčí ceník, ale množství
práce, kterou agentovi svěříte; to se dá odhadnout dřív, než přijde první faktura.

Žebříček „kdo je nejlevnější" tu nenajdete. Každý dodavatel počítá v jiné jednotce, a dokud nevíte,
kolik akcí, konverzací nebo textu vaše firma za měsíc vyprodukuje, ceny se nedají porovnat. Užitečnější
je rozumět, jak které účtování funguje a jak u něj hlídat útratu.

## Co vám to umožní

- **Rozpočet, který sedí.** Majitel ví, kolik bude AI stát při dnešním objemu poptávek a zakázek
  a kolik při dvojnásobném.
- **Porovnat nabídky ve stejných jednotkách.** Obchodní ředitel přepočte „kredity", „konverzace"
  i „tokeny" na jednu věc: cenu za jednu odvedenou úlohu.
- **Strop místo překvapení.** Útratu omezíte limitem, takže chybně nastavená automatizace
  neprotočí celý měsíční rozpočet za víkend.
- **Vědět, kdy se AI vyplácí.** Cenu za úlohu postavíte vedle času, který ušetří dispečerovi nebo
  obchodníkovi.

## Jak účtují velcí dodavatelé

Ceny výrobců v USD, jak je uvádějí na svých stránkách k 12. 11. 2026. Ceníky se často mění —
před rozhodnutím je ověřte u dodavatele.

| Dodavatel | Model účtování | Co výrobce uvádí |
|---|---|---|
| **Salesforce** (Agentforce) | kredity za akci, za konverzaci nebo příplatek za uživatele | Flex Credits: 500 USD za 100 000 kreditů, akce agenta 20 kreditů (asi 0,10 USD), hlasová akce 30 kreditů. Jinak 2 USD za konverzaci, nebo příplatek 125 USD za uživatele a měsíc s neměřeným použitím pro zaměstnance. |
| **HubSpot** | platba za výsledek, odečítá se z kreditů | Od 14. 4. 2026: Customer Agent 0,50 USD (50 kreditů) za vyřešenou konverzaci, Prospecting Agent 1 USD (100 kreditů) za kontakt doporučený k oslovení. Kredit stojí 0,01 USD; spotřeba nad měsíční limit se doplácí, nevyčerpané kredity propadají. |
| **Microsoft** (Copilot Studio) | kredity za použití agentů | Balíček 25 000 Copilot Credits za 200 USD měsíčně, nebo platba podle skutečné spotřeby. Kolik kreditů akce spotřebuje, záleží na druhu použití. S licencí Microsoft 365 Copilot lze vnitřní agenty v Microsoft 365 používat bez příplatku. |
| **Zoho** (Zia Agents) | stavba zdarma, platí se model | Agenty postavíte zdarma. Modely provozované Zoho mají měsíční kvótu zdarma (Standard 30 milionů tokenů), nad ní se platí kredity. S vlastním klíčem k AI platíte jen poskytovateli modelu. |
| **Twenty** | vlastní klíče na vyhrazeném serveru | Za AI platíte přímo poskytovateli modelu podle spotřeby, bez přirážky Twenty. |

Z tabulky jsou vidět čtyři modely: **paušál za uživatele** (předvídatelný, ale platíte i za lidi,
kteří AI skoro nepoužívají), **kredity za akci** (platíte za každý krok agenta), **platba za výsledek**
(platíte jen za úspěch, ale definici úspěchu určuje dodavatel) a **platba za model** (platíte za
zpracovaný text, cena se liší podle zvoleného modelu).

## Jak to v Twenty funguje

Open-source Twenty se na vyhrazeném serveru neplatí za uživatele ani za AI. Do nastavení se zadají
**vlastní klíče k AI** (BYOK — bring your own key, tedy vaše vlastní smlouva s poskytovatelem AI)
od Anthropic, OpenAI, Google, Mistral nebo xAI a spotřebu účtuje přímo poskytovatel. Twenty u každého
modelu ukazuje poskytovatele, cenu a kde se data zpracovávají, takže pro jednoduchou úlohu zvolíte
levnější model a pro složitou chytřejší.

V cloudu výrobce vlastní klíče nejdou a AI se platí kredity Twenty v dolarech — vedle našeho paušálu
je to druhá faktura; srovnání obou variant je na stránce [Vyhrazený server nebo cloud](/cloud-vs-selfhost/).

Podrobnosti jsou v dokumentaci výrobce v
[častých otázkách k AI](https://docs.twenty.com/cs/user-guide/ai/how-tos/ai-faq).

:::poznamka[Ilustrační příklad]{ton="info"}

Servisní firma chce, aby AI v Twenty roztřídila každou příchozí poptávku a doplnila k ní typ
zařízení a naléhavost. Měsíčně přijde zhruba 400 poptávek. Podle dokumentace Twenty stojí krátká
zpráva zlomek centu, rozsáhlá úloha agenta i kolem 1 USD — rozpětí je tedy 4 až 400 USD měsíčně.
Firma proto nechá úlohu dva týdny běžet na skutečných poptávkách, z vyúčtování poskytovatele zjistí
cenu jednoho třídění, vynásobí ji měsíčním objemem a nastaví strop o třetinu vyšší.

:::

## Co je k tomu potřeba

- **Odhad objemu.** Kolik poptávek, schůzek, zakázek nebo e-mailů za měsíc má AI zpracovat. Bez
  tohoto čísla nedává smysl žádný ceník.
- **Cena jedné úlohy z ostrého provozu.** Nejspolehlivěji ji zjistíte krátkým pilotem na jedné úloze
  — postup popisujeme v článku [Jak začít pilotem](/twenty/naklady/pilot-ai/).
- **Strop útraty.** U poskytovatele AI hlídáte útratu jeho nástroji — Anthropic umožňuje nastavit
  vlastní měsíční limit, u OpenAI jsou upozornění na útratu a limity na tempo požadavků. Podrobně
  v článku [Jak hlídat útratu za AI](/twenty/naklady/hlidani-utraty-za-ai/).
- **Rozumná volba modelu.** Třídění a doplnění údajů zvládne levnější model; dražší nechte na úlohy,
  kde záleží na kvalitě textu.

Co agent v CRM vlastně dělá a čím se liší od chatu, vysvětluje článek
[Co je AI agent](/twenty/ai-agenti/co-je-ai-agent/).

:::otazky

### Je platba za výsledek výhodnější než platba za akci?

Záleží na tom, jak dodavatel výsledek definuje a kolik akcí agent na jeden výsledek potřebuje.
Platba za výsledek přenáší riziko neúspěchu na dodavatele, ale jednotkovou cenu i definici
„vyřešeno" určuje on. Porovnávejte vždy cenu za jednu odvedenou úlohu.

### Kolik stojí AI v Twenty na vyhrazeném serveru?

Twenty si za AI nic neúčtuje. Platíte poskytovateli modelu podle spotřeby, za jeho ceník. Kolik to
bude u vás, zjistíte nejlépe krátkým pilotem na skutečných datech.

### Dá se útrata omezit, aby nepřekvapila?

Ano, nástroji poskytovatele AI: u Anthropic vlastním měsíčním limitem, u OpenAI upozorněním na útratu
a limity na tempo požadavků (upozornění samo požadavky nezastaví). Nastavte je hned při spuštění první
automatizace, ne až po první faktuře.

### Proč neuvádíte, kdo je nejlevnější?

Každý dodavatel počítá v jiné jednotce — kreditech, konverzacích, výsledcích nebo tokenech.
Bez vašeho objemu práce by takové pořadí bylo zavádějící.

:::
