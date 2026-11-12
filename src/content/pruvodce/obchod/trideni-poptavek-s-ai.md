---
title: Jak nechat AI roztřídit a ohodnotit nové poptávky
description: Twenty od verze 2.42 umí novou poptávku roztřídit a ohodnotit krokem Třídění v automatizaci, AI krok z ní vytáhne údaje do polí. Co to obchodu přinese, jak to funguje, co je hotové v Twenty Sales a co je k tomu potřeba.
vMenu: Třídění poptávek s AI
draft: true
poradi: 1
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [obchod, ai, automatizace]
funkce: [ai-trideni, ai-krok-automatizace, automatizace, pridelovani-dokola, posta-kalendar, koncept-emailu, role-opravneni, vlastni-klice-ai]
zdroje: [docs-akce, docs-spoustece, twenty-vydani, docs-pravni-faq, twenty-capabilities-ai-agents]
---

**Twenty umí od verze 2.42 novou poptávku roztřídit a ohodnotit krokem Třídění (v anglickém
rozhraní Classify): AI odpoví na otázky, které si nastavíte — ano/ne, výběr z možností nebo
skóre — a automatizace podle odpovědi pokračuje.** Údaje z textu poptávky, třeba předmět zájmu
nebo termín, zapíše do polí AI krok.

V [Twenty Sales](/pro-obchodni-tymy/), naší nadstavbě nad open-source Twenty, k tomu patří
**Zájemce** s vlastním stavem a doplnění údajů o firmě z ARES podle IČO. Třídění tak pracuje
s poptávkou dřív, než se z ní stane obchodní případ.

## Co vám to umožní

- **Obchodník ráno nezačíná tříděním.** Poptávky jsou rozdělené podle toho, o co klient stojí
  a jak konkrétní je jeho zájem. Nahoře jsou ty, kterým má smysl zavolat hned.
- **Horká poptávka nečeká do zítřka.** Vysoké skóre může rovnou spustit přidělení obchodníkovi
  a úkol s dnešním termínem.
- **Jedno měřítko pro všechny.** Co je „konkrétní zájem", se zapíše jednou do zadání pro AI.
  Poptávky se hodnotí podle stejných pravidel, ne podle nálady toho, kdo je zrovna otevřel.
- **Nabídky služeb a omyly se nemíchají s obchody.** Dodavatel, který nabízí reklamu, nebo dotaz
  mimo váš obor dostane označení ke kontrole a nezkreslí přehledy.
- **Vedoucí vidí kvalitu poptávek.** Skóre je obyčejné pole u zájemce — dá se podle něj filtrovat,
  řadit a vyhodnotit v přehledu.

## Jak to v Twenty funguje

Automatizace v Twenty je řada kroků, která se spustí sama. Spouštěčem může být nový záznam —
v Twenty Sales nový Zájemce —, příchozí e-mail v připojené schránce nebo webová adresa, na kterou
pošle údaje formulář z vašeho webu.

Pro práci s poptávkou má Twenty dva kroky s umělou inteligencí:

- **Třídění (Classify).** Dostane údaje z předchozího kroku a odpoví na jednu nebo víc otázek.
  Každá má typ — ano/ne, výběr z možností, nebo skóre od nejnižší po nejvyšší úroveň — a vaše
  pokyny, podle čeho rozhodovat. Odpověď přijde vždy v tvaru, který jste určili, takže se podle
  ní automatizace spolehlivě rozvětví.
- **AI krok.** Volnější pomocník: shrne text, vytáhne z něj údaje, napíše návrh odpovědi
  nebo pracuje se záznamy v CRM. Od verze 2.56 má vlastní rozsah oprávnění, takže smí jen to,
  co mu povolíte.

Výsledek se zapíše k zájemci a další kroky už jsou běžná automatizace: přidělení obchodníkovi,
úkol s termínem, koncept e-mailu ve schránce obchodníka. Jak se poptávky spravedlivě rozdělují,
popisuje článek [rozdělování poptávek mezi obchodníky](/twenty/obchod/rozdelovani-poptavek/).

**Co je hotové v Twenty Sales.** Zájemce žije mimo obchodní případy a nese si stav
Nový → Kontaktován → Kvalifikován → Převeden, nebo Diskvalifikován s důvodem. U zájemce stačí
IČO — název, DIČ, adresu a to, jestli je firma plátce DPH, doplní systém z ARES. Kvalifikace pak
sama založí klienta, kontaktní osobu i obchodní případ, a známou firmu podle IČO nezaloží podruhé.
Třídění s AI se k tomu přidává jako automatizace, kterou nastavíme při nasazení podle vašich
pravidel.

Popis obou kroků je v [dokumentaci výrobce](https://docs.twenty.com/user-guide/workflows/capabilities/workflow-actions)
(anglicky — česká verze krok Třídění zatím nepopisuje).

:::poznamka[Ilustrační příklad]{ton="info"}

Firma, která vyrábí a montuje průmyslová a garážová vrata, dostává poptávky z webového formuláře
od firem i od domácností. Každá založí v Twenty Sales nového **Zájemce** a spustí automatizaci:

1. **Třídění** odpoví na tři otázky: *Kdo poptává — firma, domácnost, nebo dodavatel nabízející
   služby?* · *Jak konkrétní je zájem (1 — obecný dotaz, 4 — rozměry, místo i termín)?* ·
   *Jde o servis už namontovaných vrat?*
2. **AI krok** vytáhne z textu rozměry, místo montáže a požadovaný termín do polí a napíše
   dvouřádkové shrnutí do poznámky.
3. Poptávka se skóre 3 a víc se hned přidělí obchodníkovi a dostane úkol *„Zavolat dnes"*.
   Dodavatel služeb dostane označení ke kontrole — diskvalifikaci potvrdí člověk.

Obchodník ráno otevře pohled svých zájemců seřazený podle skóre a začne od těch, kde zná rozměry
i termín.

:::

## Co je k tomu potřeba

- **Cesta, kudy poptávky přicházejí.** Formulář na webu, připojená schránka, import ze souboru.
  Napojení nastavíme při nasazení.
- **Hodnoticí model pro Třídění.** Krok Classify běží na hodnoticím modelu, který Twenty nazývá
  Jev; správce ho musí zapnout a nastavit k němu klíč ke službě TypeSafe AI. Bez toho krok
  neproběhne. Podle právních otázek výrobce se TypeSafe používá jen tehdy, když ho správce zapne —
  údaje poptávek jí tedy posíláte vědomě. Souvislosti s ochranou osobních údajů rozebírá článek
  [GDPR a AI agenti](/twenty/provoz/gdpr-a-ai-agenti/).
- **AI model pro AI krok.** Na vyhrazeném serveru přes vaše vlastní klíče k AI; platíte přímo
  poskytovateli podle spotřeby. Jak odhadnout útratu, popisuje článek
  [kolik stojí AI agenti](/twenty/naklady/kolik-stoji-ai-agenti/).
- **Kritéria.** Co je pro vás dobrá poptávka a co ne. Zapíšeme je spolu do otázek a na prvních
  týdnech provozu doladíme. Začít jde i jedinou otázkou — viz [pilot AI](/twenty/naklady/pilot-ai/).
- **Twenty od verze 2.42** a pro omezená oprávnění AI kroku od verze 2.56. Na vyhrazeném serveru
  aktualizace nasazujeme v rámci měsíčního paušálu.

:::otazky

### Rozhodne AI sama, kterou poptávku zahodíme?

Jen pokud to tak nastavíte. Rozumnější je nechat AI poptávku označit a o diskvalifikaci rozhodnout
člověkem. V Twenty Sales navíc trvale mazat nesmí žádná z připravených rolí.

### Jaký je rozdíl mezi Tříděním a AI krokem?

Třídění odpovídá vždy v pevném tvaru — ano/ne, jedna z možností, skóre — a hodí se k rozhodování,
kudy automatizace pokračuje. AI krok je volnější: shrne text, vytáhne údaje nebo napíše návrh
odpovědi.

### Funguje to i pro zájemce, které obchodník zapíše ručně?

Ano. Spouštěč se dá nastavit na vznik i úpravu záznamu, takže třídění proběhne i u zájemce
zadaného ručně, nejen u toho z formuláře nebo z e-mailu.

### Jde to i bez Twenty Sales?

Krok Třídění i AI krok jsou součást open-source Twenty a fungují nad jakýmkoli typem záznamu.
Twenty Sales k tomu přidává hotového Zájemce se stavy, načtení z ARES a převod na klienta
a obchodní případ.

:::
