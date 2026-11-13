---
title: Na vyhrazeném serveru, nebo v cloudu? | TwentyCRM.cz
description: Proč Twenty CRM doporučujeme provozovat na vyhrazeném serveru a kdy dává smysl cloud výrobce. Ceny obou variant, od kolika lidí se vyplatí server, vlastní klíče k AI.
pageId: cloud-vs-selfhost
overeno: 2026-11-13
verzeTwenty: '2.58'
zdroje:
  - url: https://twenty.com/pricing
    nazev: Twenty — ceník cloudu
  - url: https://docs.twenty.com/user-guide/ai/how-tos/ai-faq
    nazev: Twenty — AI FAQ (vlastní klíče jen na vlastním serveru)
  - url: https://docs.twenty.com/user-guide/permissions-access/capabilities/permissions
    nazev: Twenty — role a oprávnění
hero:
  nadpis: Na vyhrazeném serveru, nebo v cloudu?
  perex: >-
    Vyhrazený server doporučujeme téměř vždy — pevný paušál bez poplatků za uživatele, vaše klíče k AI
    a výkon pro AI agenty. Cloud výrobce dává smysl jen pro nejmenší týmy, které AI agenty neplánují.
zaver:
  nadpis: Nevíte si rady? Poradíme.
  text: >-
    30 minut online — projdeme váš případ a spočítáme obě varianty pro váš tým.
---

## Krátká odpověď

:::zvyrazneni

### 🖥 Doporučujeme **vyhrazený server.**

Jedna faktura v korunách, žádné poplatky za uživatele, vlastní klíče k AI a výkon, který umíme
posílit podle zátěže AI agentů. Server v Německu pro vás zařídíme a spravujeme — vy nic technicky neřešíte.

:::

:::karty{sloupce="2"}

### 💸 Cena nezávisí na počtu lidí

Paušál {{cena.retainer_selfhost}} měsíčně, neomezený počet uživatelů. Přijmete kolegu — cena se nezmění.
V cloudu se platí licence za každého uživatele zvlášť a k tomu náš paušál, tedy dvě faktury.

### 🤖 AI s vašimi klíči

Na vlastním serveru zadáte klíče k AI (Anthropic, OpenAI, Google, Mistral, xAI) a tokeny platíte
přímo poskytovateli. Cloud Twenty vlastní klíče nepodporuje — AI tam běží přes kredity výrobce.

### 🔐 Role a oprávnění v ceně

Kdo vidí které typy záznamů a pole, nastavíte na vyhrazeném serveru bez příplatku.
V cloudu jsou vlastní role až v dražším tarifu Organization.

### 📦 Data pod vaší kontrolou

Vlastní server v Německu, přímý přístup k databázi pro vlastní reporty a termín nasazení nových verzí
po dohodě s vámi.

:::

::::sekce{pozadi="svetle"}

## Kolik to stojí

| Měsíčně, bez DPH | 🖥 Vyhrazený server | ☁️ Cloud Pro | ☁️ Cloud Organization |
|---|---:|---:|---:|
| Licence Twenty za uživatele | 0 Kč (otevřený zdrojový kód) | ~200 Kč ({{data.twenty_cloud_external.pro_usd}} USD) | ~860 Kč ({{data.twenty_cloud_external.organization_usd}} USD) |
| Náš paušál | {{cena.retainer_selfhost}} | {{cena.retainer_cloud}} | {{cena.retainer_cloud}} |
| **Celkem pro 10 lidí** | **{{cena.retainer_selfhost}}** | ~5 970 Kč | ~12 580 Kč |
| Faktury | jedna, v korunách | dvě (naše v Kč + výrobce v USD) | dvě (naše v Kč + výrobce v USD) |

Vyhrazený server je stejně drahý nebo levnější **od pěti uživatelů** proti Cloud Pro a **od dvou uživatelů**
proti Cloud Organization — a každý další uživatel rozdíl prohlubuje. Nasazení stojí v obou variantách {{cena.implementation}}.

Ceny licencí Twenty Cloud jsou podle twenty.com při ročním předplatném a odvíjejí se od kurzu dolaru
(počítáno ~22 Kč/USD, kurz ČNB z 12. 11. 2026). Licenci platíte přímo výrobci.

::::

## Co obsahuje náš měsíční paušál

V obou variantách se o systém staráme my. Rozdíl je v tom, kde Twenty běží — a kolik faktur vám měsíčně přijde.

:::karty{sloupce="2"}

### 🖥 Vyhrazený server

Doporučujeme

::stitek[Jedna faktura]

::cenovka{klic="retainer_selfhost" pozn="/měs, vše v ceně (bez DPH)"}

**✓ Bez poplatků za uživatele (otevřený zdrojový kód)**

#### Co od nás

::seznam{data="retainer_selfhost.includes"}

✓ {{data.retainer_selfhost.billing_note}}

### ☁️ Provoz v cloudu

U výrobce Twenty.com

::stitek[Dvě faktury]

::cenovka{klic="retainer_cloud" pozn="/měs náš paušál (bez DPH)"}

\+ Licence Twenty Cloud cca {{data.twenty_cloud_external.pro_usd}}–{{data.twenty_cloud_external.organization_usd}} USD (~207–900 Kč) na uživatele za měsíc, platíte přímo výrobci

#### Co od nás

::seznam{data="retainer_cloud.includes"}

⚠️ {{data.retainer_cloud.billing_note}}

:::

::::sekce{pozadi="svetle"}

## Kdy dává smysl cloud

Levněji vyjde cloud jen v tarifu Pro a jen do čtyř uživatelů. Volte ho, když AI agenty napojovat
neplánujete, role a oprávnění nepotřebujete a nevadí vám dvě faktury. Twenty Cloud běží u výrobce
na serverech AWS ve Frankfurtu.

## SSO, audit log a „každý vidí jen své"

Pro většinu firem stačí role na úrovni typů záznamů a polí a filtrované pohledy „Moje zakázky" nebo
„Mí klienti" — to máte na vyhrazeném serveru v ceně. Jednotné přihlášení (SSO), záznam změn (audit log)
a tvrdé omezení, kdy uživatel vůbec nesmí vidět cizí záznamy, nabízí Twenty v tarifu Organization —
v cloudu i jako licenci pro vlastní server. Pokud je potřebujete, ozvěte se, projdeme to spolu.

::::

::demo-cta
