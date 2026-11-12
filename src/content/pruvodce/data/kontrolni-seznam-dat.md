---
title: "Kontrolní seznam: jsou data ve vašem CRM připravená na AI?"
description: Než AI v CRM svěříte první úlohu, projděte pět oblastí — duplicity, úplnost údajů, jednotné hodnoty, datový model a oprávnění. Co v každé zkontrolovat a jak to v Twenty ověřit pohledem nebo dotazem v AI chatu.
vMenu: Kontrolní seznam
draft: true
poradi: 2
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [data, ai]
funkce: [slucovani-duplicit, kontrola-dat, vlastni-zaznamy, pohledy, role-opravneni, ai-chat]
zdroje: [docs-opravneni, docs-ai-chat, twenty-capabilities-objects, twenty-capabilities-validation-rules, twenty-capabilities-fields, twenty-capabilities-uniqueness-constraints, github-twenty-v2-53-1, github-twenty-v2-47-0]
---

**Než AI v CRM svěříte první úlohu, projděte pět oblastí: duplicity, úplnost údajů, jednotné
hodnoty, datový model a oprávnění. Dokonalá nemusí být všechna data — stačí ta, se kterými bude
AI v první úloze pracovat.** Každou položku seznamu ověříte v Twenty pohledem s filtrem nebo
dotazem v AI chatu, bez exportu do Excelu.

Proč na tom záleží, vysvětluje článek [Proč AI agenti chybují na zdvojených a neúplných datech](/twenty/data/proc-agenti-selhavaji/).
Tady je postup.

## Co vám to umožní

- **Víte, kde začít.** Místo „uklidit CRM" máte ohraničený seznam pro jednu úlohu.
- **AI nespustíte nad daty, která ji zmýlí.** Slabá místa najdete dřív než zákazník.
- **Úklid se nedělá znovu.** Jedinečná pole a pravidla pro kontrolu dat drží data čistá i potom.

## Kontrolní seznam

### 1. Duplicity

- **Najděte dvojice.** Seřaďte klienty podle názvu nebo IČO, nebo se zeptejte AI chatu:
  *„Najdi klienty, kteří vypadají jako stejná firma."* Totéž u kontaktních osob (stejné jméno,
  jiný e-mail) a u vlastních typů záznamů, třeba zařízení se stejným výrobním číslem.
- **Slučte je.** Twenty sloučí dva až devět záznamů do jednoho a vazby nechá u výsledného.
  Od verze 2.53.1 u libovolného typu záznamu a i přes AI chat.
- **Zavřete dveře dalším.** Pole, která mají být jedinečná — IČO, výrobní číslo, číslo
  zákazníka —, označte jako jedinečná. Twenty to dovolí, až když v datech žádné duplicity
  nezůstaly; počítají se i smazané záznamy.

### 2. Úplnost

- **Určete, co AI potřebuje.** Pro třídění poptávek třeba obor, region a odkud poptávka přišla;
  pro připomínky prohlídek datum posledního servisu u zařízení.
- **Změřte mezery.** Pohled s filtrem „je prázdné" ukáže, kolik záznamů daný údaj nemá. Na počet
  se můžete zeptat i AI chatu.
- **Doplňte, nebo vyřaďte.** Co doplnit nejde, vyřaďte z první úlohy — AI by nad tím hádala.
- **Pohlídejte nové záznamy.** Pravidlo pro kontrolu dat, například „poptávka musí mít region",
  zastaví neúplný záznam u člověka, importu, automatizace i AI. Sestavit ho umí i AI v postranním
  panelu (od verze 2.47), náhled ukáže, jak by dopadlo na tři poslední záznamy, a aktivace stará
  data nemění — chybný záznam se opraví při nejbližším uložení. Pravidla jsou v tarifu Organization.

### 3. Jednotné hodnoty

- **Najděte volný text tam, kde mají být pevné hodnoty.** Stav, region, typ zařízení, zdroj
  poptávky. Pohled seřazený podle pole nebo dotaz v AI chatu ukáže, kolik variant stejné věci
  vzniklo.
- **Přejděte na výběr.** Pole typu výběr drží hodnoty jednotné. Staré hodnoty sjednotíte
  exportem, opravou v tabulce a importem zpět — záznamy se podle jedinečného pole aktualizují,
  nevzniknou nové.
- **Sjednoťte formáty.** Telefony s předvolbou, data, částky ve stejné měně.

### 4. Datový model

- **Každá věc má svůj typ záznamu.** Zařízení u klienta není věta v poznámce a zakázka není
  řádek v popisu klienta. Údaj schovaný ve volném textu se nedá filtrovat ani hlídat pravidlem.
- **Vazby místo kopií.** Kontaktní osoba patří ke klientovi, zakázka k místu a zařízení. AI pak
  z karty klienta dojde ke všemu, co k němu patří.
- **Srozumitelné názvy polí.** AI vidí stejné názvy jako kolegové. Pole „Pozn2" nepomůže nikomu.
- **Staré pole pryč.** Nepoužívaná pole vypněte — data zůstanou, ale pole nebude plést lidi
  ani AI.

### 5. Role a oprávnění

- **Pro každou AI úlohu určete, co smí číst a co měnit.** Role v Twenty jdou nastavit na typ
  záznamu i na jednotlivá pole.
- **AI krok s vlastní rolí.** Od verze 2.56 běží AI krok v automatizaci s vlastním omezeným
  oprávněním, napojené systémy s vlastním klíčem a rolí a AI nástroj připojený přes MCP
  (moderní napojení pro AI nástroje) pod rolí uživatele.
- **Kdo smí hromadně měnit data.** Slučování vyžaduje právo záznamy upravovat i mazat, import
  a export mají vlastní oprávnění. Dejte je jen těm, kdo je potřebují.

Navíc zkontrolujte, že **historie klienta je v CRM**: připojené schránky a kalendáře lidí,
kteří s klienty mluví, a sdílené adresy jako info@ — viz [sdílená schránka v CRM](/twenty/e-maily-a-schuzky/sdilena-schranka/).

:::poznamka[Ilustrační příklad]{ton="info"}

Servisní firma chce, aby jí AI každé pondělí připravila seznam zařízení, kterým se blíží
pravidelná prohlídka. Kontrola podle seznamu ukáže: 1 200 zařízení, z toho 140 bez data
posledního servisu a 30 dvojic se stejným výrobním číslem, a typ zařízení psaný volným textem
v osmnácti variantách. Dispečerka během dvou dnů duplicity sloučí, výrobní číslo se nastaví
jako jedinečné, typ se převede na výběr a u 140 zařízení se datum doplní z papírových výkazů,
nebo se zařízení z první úlohy vyřadí. Teprve pak se úloha spustí.

:::

## Co je k tomu potřeba

- **Člověk, který data zná** — dispečer, obchodní asistentka, vedoucí. Rozhoduje, co je
  duplicita a co je povinné; technika je tu až na druhém místě.
- **Pár dní na úklid** dat pro první úlohu, ne měsíce na celé CRM.
- **Tarif Organization** pro pravidla kontroly dat — v cloudu výrobce i jako licence pro
  vyhrazený server. Ostatní body seznamu zvládnete v Twenty bez něj.
- **Převod dat při nasazení.** V našich řešeních [Twenty Sales](/pro-obchodni-tymy/) a
  [Twenty Servis](/pro-servisni-firmy/) — nadstavbách nad open-source Twenty — data při nasazení
  převádíme a typy záznamů i vazby jsou už připravené. Duplicity je nejlevnější sloučit právě
  při převodu; jak převod z tabulek vypadá, popisuje [přechod z Excelu s pomocí AI](/twenty/data/prechod-z-excelu-s-ai/).

:::otazky

### Kolik dat musíme uklidit?

Jen ta, se kterými bude AI v první úloze pracovat. Když AI třídí poptávky, uklízíte poptávky
a klienty; servisní historii zařízení zatím ne. Každá další úloha přidá svůj kousek.

### Jak poznáme, že duplicit je hodně?

Seřaďte klienty podle názvu a projděte první stovku, nebo se zeptejte AI chatu. Když pokus
o nastavení jedinečného pole skončí chybou, duplicity v datech jsou.

### Potřebujeme kvůli úklidu tarif Organization?

Jen pro pravidla pro kontrolu dat, která hlídají nová data. Slučování duplicit, jedinečná pole,
pohledy s filtry a role na vyhrazeném serveru tarif Organization nepotřebují.

### Může úklid udělat AI za nás?

Část ano: najde podezřelé dvojice, sloučí je, spočítá prázdná pole a navrhne pravidlo. Co je
duplicita a co je povinné, ale rozhoduje člověk, který zná klienty — AI mu jen ušetří hledání.

:::
