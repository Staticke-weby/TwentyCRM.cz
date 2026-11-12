---
title: Proč velká část AI projektů skončí a jak začít pilotem na jedné úloze
description: Gartner čeká, že přes 40 % projektů s AI agenty bude do konce roku 2027 zrušeno. Proč se to děje a jak začít s AI v CRM bezpečně — jedna úloha, měřitelný cíl, schválení člověkem a čistá data.
vMenu: Pilot na jedné úloze
draft: true
poradi: 2
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [naklady, ai, agenti]
funkce: [ai-krok-automatizace, ai-trideni, ai-agenti, role-opravneni, schvaleni-clovekem, kontrola-dat, slucovani-duplicit]
zdroje: [docs-akce, docs-opravneni, gartner-press-releases-2025-06-25-gartner-predicts-over-40-p, csu-produkty-ai-pouzivaji-v-cesku-tri-ctvrtiny-velkych-firem]
---

**Projekty s AI agenty nejčastěji končí proto, že stojí víc, než se čekalo, nepřinášejí jasně
měřitelný užitek nebo firma neumí uhlídat rizika.** Nejspolehlivější cesta je proto začít pilotem na
jedné opakované úloze, s měřitelným cílem, se schválením člověkem a nad uklizenými daty.

Analytická společnost Gartner v červnu 2025 předpověděla, že **přes 40 % projektů s AI agenty bude do
konce roku 2027 zrušeno** — kvůli rostoucím nákladům, nejasnému obchodnímu přínosu nebo nedostatečné
kontrole rizik. Zároveň AI rychle zabydluje české firmy: podle Českého statistického úřadu ji v roce
2026 používalo **35 % podniků s více než 10 zaměstnanci**, dvakrát víc než o rok dřív. Mezi malými
firmami je to necelá třetina a nejčastěji jde o psaní textů, kódu nebo tvorbu hlasu.

## Co vám to umožní

- **Ověřit přínos dřív, než utratíte víc.** Majitel po několika týdnech ví, jestli AI na konkrétní
  úloze šetří čas, a rozhoduje podle čísel, ne podle prezentace.
- **Znát skutečnou cenu.** Z pilotu vyjde cena za jednu odvedenou úlohu — podklad pro odhad útraty
  popsaný v článku [Kolik stojí AI agenti v CRM](/twenty/naklady/kolik-stoji-ai-agenti/).
- **Získat důvěru lidí.** Dispečerka nebo obchodník vidí, že AI připraví návrh a poslední slovo mají
  oni. Další úloha pak naráží na menší odpor.
- **Najít slabá místa v datech.** Pilot rychle ukáže duplicity a prázdná pole, která by AI zmátla
  i ve velkém.

## Jak pilot postavit

Gartner jmenuje tři důvody neúspěchu. Každému odpovídá jedno pravidlo pilotu.

1. **Jedna úloha, která se často opakuje.** Ne „AI pro obchod", ale například roztřídit příchozí
   poptávky, shrnout schůzku do poznámky nebo připravit podklad k připomínce servisní prohlídky.
   Úloha má jasný vstup a jasný výsledek.
2. **Měřitelný cíl proti dnešku (nejasný přínos).** Před startem změřte výchozí stav: jak dlouho
   trvá, než se poptávka dostane ke správnému člověku, kolik minut zabere zápis ze schůzky. Cíl
   formulujte číslem a dobou, třeba „poptávka přidělená do dvou hodin, ne druhý den".
3. **Schválení člověkem a omezená oprávnění (rizika).** AI navrhuje, člověk potvrzuje — hlavně
   u všeho, co odchází zákazníkovi. Agent dostane jen taková oprávnění, jaká úloha opravdu potřebuje.
4. **Strop útraty a sledování ceny (náklady).** Limit nastavíte hned u spuštění a každý týden
   porovnáte cenu s ušetřeným časem.
5. **Čistá data.** Před spuštěním slučte duplicitní klienty a doplňte pole, ze kterých bude AI
   vycházet. Agent, který nenajde správného klienta, udělá chybu, i když pracuje správně.
6. **Termín vyhodnocení.** Předem si stanovte datum, kdy pilot vyhodnotíte a rozhodnete:
   rozšířit, upravit, nebo ukončit.

## Jak to v Twenty funguje

Pilot v Twenty obvykle stojí na **automatizaci s AI krokem**: při vzniku nebo změně záznamu AI podle
vašeho zadání přečte data, rozhodne a doplní údaje. Krok třídění (Classify) zařadí poptávku do
kategorie a automatizace podle ní pokračuje. AI krok běží **s vlastním omezeným oprávněním** —
role určí, které záznamy a pole smí číst a měnit
([role a oprávnění](https://docs.twenty.com/cs/user-guide/permissions-access/capabilities/permissions),
[kroky automatizací](https://docs.twenty.com/cs/user-guide/workflows/capabilities/workflow-actions)).

Schválení člověkem se dnes řeší nastavením: AI připraví návrh, kategorii nebo koncept a odeslání
nechá na člověku. Krok, ve kterém agent sám pošle návrh ke schválení a počká na odpověď, se
v Twenty **připravuje**. Pravidla pro kontrolu dat a slučování duplicit pomohou data uklidit před
startem.

:::poznamka[Ilustrační příklad]{ton="info"}

Servisní firma používá **Twenty Servis** (naši nadstavbu nad open-source Twenty). Poptávky chodí
na servis@ a dispečerka je ráno ručně třídí. Pilot: AI ke každé nové poptávce doplní typ zařízení
a naléhavost a navrhne, ke kterému klientovi a místu patří. Dispečerka návrh potvrdí a založí
zakázku. Cíl: urgentní poptávka u dispečerky do dvou hodin. Po šesti týdnech firma porovná dobu
přidělení, počet oprav, které dispečerka v návrzích dělala, a měsíční útratu za AI — a rozhodne,
jestli přidá další úlohu.

:::

## Co je k tomu potřeba

- **Vybraná úloha a její vlastník** — člověk, který úlohu dnes dělá a výsledek pilotu posoudí.
- **Změřený výchozí stav** — bez něj se přínos nedá doložit.
- **AI model a klíč** — na vyhrazeném serveru vlastní klíč k AI, za spotřebu platíte poskytovateli.
- **Uklizená data** — sloučené duplicity a vyplněná pole, ze kterých AI vychází.
- **Nastavení** — automatizaci, roli pro AI a strop útraty připravíme při nasazení nebo v rámci
  předplacených hodin podpory.

Které úlohy se na pilot hodí nejlépe, ukazuje článek
[Úlohy pro AI agenta](/twenty/ai-agenti/ulohy-pro-ai-agenta/).

:::otazky

### Jak dlouho má pilot trvat?

Tak dlouho, aby úloha proběhla v dostatečném počtu a v běžném provozu — u denně opakovaných úloh
obvykle několik týdnů. Důležitější než délka je předem stanovené datum vyhodnocení.

### Proč jen jedna úloha?

Jen u jedné úlohy jasně poznáte, co přínos způsobilo a kolik stál. Pilot na „celý obchod" se nedá
vyhodnotit a právě takové projekty se nejčastěji ruší.

### Co když pilot nevyjde?

Pak jste za malé peníze zjistili, že tahle úloha se pro AI nehodí — nebo že je potřeba nejdřív
uklidit data. Automatizaci vypnete a zkusíte jinou úlohu.

### Musí AI všechno schvalovat člověk?

Na začátku ano, hlavně u všeho, co odchází zákazníkovi. Když pilot ukáže, že návrhy jsou spolehlivé,
můžete schvalování u interních kroků postupně uvolnit.

:::
