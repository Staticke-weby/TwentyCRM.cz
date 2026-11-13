---
title: AI recepční, plánovač a asistent technika — kam jde AI v servisu ve světě
description: Co dnes nabízejí velcí dodavatelé softwaru pro servis v terénu — AI, která bere telefony a objednává výjezdy, agent, který přeskládá plán techniků, a asistent v mobilu technika. Stav dostupnosti, co z toho plyne pro českou servisní firmu a co jde s Twenty už dnes.
vMenu: AI v servisu ve světě
poradi: 5
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [servis, ai, agenti, trendy]
funkce: [ai-agenti, ai-krok-automatizace, ai-chat, koncept-emailu, schvaleni-clovekem]
zdroje: [getjobber-features-ai-receptionist, salesforce-stories-agentforce-for-field-service-announcement, learn-field-service-soa-overview, servicetitan-press-servicetitan-introducing-the-next-evoluti, salesforce-stories-field-service-growing-talent-crisis, ai-act-service-desk-ai-act-article-50]
---

**Ve světě se AI v servisu v terénu soustředí na tři role: recepční, která bere telefony
a zapisuje požadavky, plánovač, který navrhuje, jak přeskládat den techniků, a asistent, který
technikovi v mobilu shrne zakázku a pomůže s popisem práce. Část z toho je u velkých dodavatelů
běžně dostupná, část ve zkušebním provozu — a téměř všude platí, že AI navrhne a člověk potvrdí.**

Tenhle článek popisuje trh, ne funkce Twenty. Co z podobných úloh jde s Twenty a s [Twenty Servis](/pro-servisni-firmy/)
(naší nadstavbou nad open-source Twenty pro montáž a servis u zákazníka) už dnes, je v článku [Co může AI v servisní firmě převzít](/twenty/servis/ai-v-servisni-firme/).
Všechny údaje níže pocházejí od samotných dodavatelů a ověřili jsme je 12. 11. 2026.

## AI recepční: bere telefony a zapisuje požadavky

Pro menší servisní firmu je nejbolavější místo telefon. Technik je na střeše, dispečerka
na druhé lince a zákazník volá jinam.

- **Jobber** (software pro řemeslné a servisní firmy) nabízí *Receptionist*: podle stránky
  výrobce odpovídá na hovory a zprávy nepřetržitě, nabídne volajícímu termín výjezdu podle
  nastavení online objednávek, a když termín domluvit nejde, založí požadavek ke kontrole.
  U naléhavých slov, která si firma nastaví, hovor přepojí na člověka nebo pošle upozornění.
- **Salesforce** u svého řešení pro servis v terénu (Agentforce for Field Service, ohlášeno
  9. 4. 2025) popisuje agenta, přes kterého si zákazník na webu nebo ve zprávách objedná,
  přesune nebo zruší termín; podle tiskové zprávy byl běžně dostupný od května 2025.

**Na co myslet:** od 2. 8. 2026 platí v EU pravidla transparentnosti — člověk má vědět, že
komunikuje s AI (čl. 50 AI Actu). Co to znamená pro firmu, rozebírá článek [AI Act a CRM](/twenty/provoz/ai-act-a-crm/).

## AI plánovač: navrhne, jak přeskládat den

Plánování výjezdů je pro AI lákavé a zároveň těžké — hraje roli vzdálenost, priorita, dovednosti
technika a sliby dané klientům.

- **Microsoft Dynamics 365 Field Service** má *Scheduling Operations Agent*. Podle dokumentace
  pomáhá dispečerovi zaplnit díry po zrušených výjezdech, přeskládat den technika, který se
  zdržel, nebo rozdělit nevyřízené zakázky mezi techniky. Dispečer navržený plán zkontroluje
  a pak použije; agent nehýbe výjezdy označenými jako neměnné a respektuje pracovní dobu.
  **Stav: zkušební provoz (preview)** — výrobce výslovně uvádí, že není určený pro ostrý provoz.
- **Salesforce** popisuje agenta, který při zrušeném výjezdu navrhne náhradní zakázky podle
  délky práce, dostupnosti dílů a dopravy; vybírá dispečer. Podle tiskové zprávy z 9. 4. 2025
  běžně dostupné.

## Asistent technika: shrnutí před výjezdem a popis po něm

- **Salesforce** uvádí shrnutí zakázky, které si technik poslechne cestou, průvodce řešením
  závady na místě (včetně rozboru fotky) a návrh zprávy o provedené práci, kterou technik
  upraví vlastními slovy. Podle tiskové zprávy dostupné během dubna až června 2025.
- **ServiceTitan** v září 2025 představil asistenta *Atlas*, kterého se uživatel ptá psaním nebo
  hlasem — spustí přehled, najde zakázku, pošle technika — a který má technikům dávat odpovědi
  přímo v mobilní aplikaci, aby nemuseli volat dispečink. Dostupnost tisková zpráva neupřesňuje.

## Co říkají čísla

Salesforce v červenci 2026 zveřejnil průzkum mezi 2 317 lidmi ze servisu v terénu z devíti zemí
(sběr duben–květen 2026). Podle něj nějakou formu AI používá 95 % organizací, 57 % z těch, které
plánují s pomocí AI, vidí vyšší tržbu na zakázku — a 40 % neumí změřit, jestli jim AI pomáhá.
Jde o průzkum dodavatele, který tyto nástroje prodává, a nerozlišuje velikost firem.

## Co z toho plyne pro českou servisní firmu

- **Vzorec je všude stejný: AI navrhne, člověk potvrdí.** Plán schvaluje dispečer, zprávu
  upravuje technik, naléhavý hovor přebírá člověk. Kdo začne s úlohou, kterou jde snadno
  zkontrolovat, riskuje nejmíň.
- **Bez čistých dat to nejde.** Plánovač potřebuje u každé zakázky délku práce a adresu, asistent
  technika historii zařízení. Firma, která má zakázky v Excelu, musí nejdřív tam — viz
  [Evidence zakázek](/twenty/servis/evidence-zakazek/).
- **Přínos měřit od prvního dne.** Když 40 % firem v průzkumu neumí říct, jestli jim AI pomáhá,
  vyplatí se předem určit, co se má zlepšit — třeba za jak dlouho se z požadavku stane
  naplánovaný výjezd — a změřit to před spuštěním i po něm.

V Twenty lze dnes nastavit AI, která pracuje přímo s daty v CRM: agenty, kteří se spouštějí sami
na událost nebo podle plánu, a AI kroky v automatizacích, které třídí a zakládají záznamy a zprávy
pro klienty ukládají jako koncepty ke kontrole. V Twenty Servis je hotový popis práce sestavený z výkazů techniků a plán sestavuje
dispečer v plánovači, který mu hlídá kolize. Schválení člověkem přímo v běhu agenta se připravuje.

:::poznamka[Ilustrační příklad]{ton="info"}

Servisní firma s kotli zvažuje AI recepční. Než ji pořídí, spočítá si, kolik požadavků jí
týdně přijde e-mailem a kolik telefonem. Ukáže se, že většina chodí e-mailem a jen se
zpožděním se přepisuje. Začne proto zakázkou z e-mailu, kterou dispečerka každé ráno
kontroluje, a k telefonům se vrátí, až bude vědět, jak se AI v jejích datech trefuje.

:::

:::otazky

### Co z toho jde s Twenty už dnes?

Příjem požadavků z e-mailu: lze nastavit automatizaci s AI, která z nich připraví zakázku se
shrnutím ke kontrole dispečerem. Hotový je v Twenty Servis popis práce z výkazů techniků
a odpovědi nad daty dává AI chat.
Podrobně v článku [Co může AI v servisní firmě převzít](/twenty/servis/ai-v-servisni-firme/).

### Naplánuje AI výjezdy lépe než dispečer?

Velcí dodavatelé nabízejí agenty, kteří plán navrhují, ale i tam ho dispečer kontroluje
a u Microsoftu jde zatím o zkušební provoz. V Twenty Servis plánuje dispečer a systém mu hlídá
kolize.

### Jsou ta čísla z průzkumu spolehlivá?

Jsou to údaje dodavatele, který nástroje prodává, sebrané mezi jeho respondenty. Berte je jako
směr, ne jako odhad přínosu pro vaši firmu. Přínos se nejlépe ověří pilotem na jedné úloze —
viz [pilot AI](/twenty/naklady/pilot-ai/).

### Co z toho má smysl řešit už teď?

Čistou evidenci klientů, zařízení a zakázek. Na ní stojí každý z popsaných nástrojů, ať si
nakonec vyberete kterýkoli.

:::
