---
title: Jak dostat poštu ze sdílené adresy info@ nebo servis@ ke klientům v CRM
description: Sdílenou adresu jako info@ nebo servis@ připojíte k Twenty dvěma cestami — přeposíláním do e-mailového kanálu, nebo jako běžnou schránku jednoho z uživatelů. Jak se obě cesty liší, na co si dát pozor u Microsoft 365 a co platí na vyhrazeném serveru.
vMenu: Sdílená schránka
draft: true
poradi: 4
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [komunikace]
funkce: [sdilena-schranka, posta-kalendar, ai-chat, ada-tymova-schranka]
zdroje: [twenty-capabilities-email-channels, docs-posta, twenty-capabilities-mailbox, twenty-vydani, twenty-how-tos-forward-a-shared-inbox-from-any-mail-provider, twenty-how-tos-forward-a-shared-inbox-from-microsoft-365, github-twenty-v2-56-0]
---

**Poštu ze sdílené adresy jako info@ nebo servis@ dostanete do Twenty dvěma cestami: přeposíláním
do takzvaného e-mailového kanálu (od verze 2.4), nebo připojením adresy jako běžné schránky
jednoho z uživatelů. V obou případech se zprávy přiřadí ke klientovi a kontaktní osobě podle
odesílatele a kolegové je uvidí na jejich kartě.**

Jak Twenty pracuje s osobními schránkami a kalendáři, popisuje článek [E-maily a kalendář na kartě klienta](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/).
Tady jde o adresy, které nepatří jednomu člověku.

## Co vám to umožní

- **Poptávka z info@ je u klienta.** Nezůstane ve schránce, kterou čte jedna asistentka;
  obchodník ji uvidí na kartě klienta, i když ji nikdo nepřeposlal.
- **Dispečer vidí, co klient psal na servis@,** i když odpovídal kolega, a nemusí se ptát.
- **Historie zůstává firmě.** Když se změní, kdo schránku čte, nic se neztratí.
- **AI má z čeho vycházet.** Zprávy uložené u klienta může využít AI chat při shrnutí historie;
  jak AI pomáhá s tříděním poptávek, popisuje [AI třídění poptávek](/twenty/obchod/trideni-poptavek-s-ai/).

## Jak to v Twenty funguje

### Cesta 1: přeposílání do e-mailového kanálu

Správce založí v nastavení Twenty kanál pro sdílenou adresu a Twenty k němu vytvoří soukromou
adresu pro přeposílání. U poskytovatele pošty se pak zapne automatické přeposílání na tuto adresu.
Zprávy se v Twenty objeví zhruba do minuty dvou a celou schránku k Twenty připojovat nemusíte.

Na čem záleží:

- **Správný druh přeposílání.** Twenty pozná odesílatele z hlavičky zprávy. Použijte
  automatické přeposílání nebo přesměrování na straně poštovního serveru, které odesílatele
  ponechá. Přeposílání jako příloha nebo pravidlo, které skládá novou zprávu, nahradí odesílatele
  vaší adresou — a nic se ke klientům nepřiřadí.
- **Kopie zůstává ve schránce.** Kde to poskytovatel umí, zvolte přeposílání s ponecháním kopie,
  ať tým může schránku používat dál jako dřív.
- **Microsoft 365 přeposílání ven ve výchozím stavu blokuje.** Odesílatel pak dostane
  nedoručenku. Správce musí přeposílání povolit — bezpečně jen pro sdílené schránky, které
  připojujete, ne pro celou firmu.
- **Odpovídání z adresy kanálu** je volitelný druhý krok: správce vaší domény přidá do jejího
  nastavení (DNS) pět ověřovacích záznamů. Pro samotný příjem pošty se na doméně nic nemění.

V cloudu výrobce se přeposílá na adresu u Twenty. **Na vyhrazeném serveru** potřebuje příjem
přeposlané pošty ještě nastavení na straně serveru, které dokumentace pro vlastní server
nepopisuje. Kterou cestu u vás zvolit, proto vybereme při nasazení.

### Cesta 2: info@ jako běžná schránka

Jeden z uživatelů — asistentka, dispečer, vedoucí obchodu — si sdílenou adresu připojí vedle své
osobní schránky. Twenty umí u jednoho uživatele víc schránek najednou a s info@ pak zachází
stejně jako s osobní poštou: Gmail a Microsoft 365 přihlášením účtem, ostatní poskytovatelé přes
otevřený standard IMAP. Na vyhrazeném serveru funguje stejně jako u osobních schránek.

- **Podmínka:** info@ musí být skutečná schránka s vlastním přihlášením, ne alias, který poštu
  jen přeposílá jinam. Jestli to u vaší schránky platí, ověříme při nasazení.
- **Nastavení jako u osobní schránky:** které složky se ukládají a co kolegové uvidí.
- **Pozor na zakládání kontaktů.** Na info@ chodí i obchodní nabídky a newslettery. U sdílené
  adresy se vyplatí zakládat kontakty jen z odeslaných e-mailů, ať se CRM nezaplní cizími adresami.
- **Odpovídání z Twenty** jde rovnou přes připojenou schránku, bez nastavování domény. Od verze
  2.56 se při psaní vybírá, ze kterého připojeného účtu zpráva odejde.

### Jak vybrat

- **Chcete jen vidět poštu u klientů** a odpovídat dál z Outlooku: stačí cesta 1 bez zásahu do domény.
- **Chcete odpovídat z Twenty jako info@:** cesta 1 s ověřením domény, nebo cesta 2.
- **Vyhrazený server:** cesta 2 funguje hned, cesta 1 po nastavení serveru.

Návody výrobce jsou v [dokumentaci k e-mailovým kanálům](https://docs.twenty.com/user-guide/calendar-emails/capabilities/email-channels)
(česky zatím není).

Twenty navíc připravuje týmovou schránku, ve které s konverzacemi pracují kolegové společně
s AI asistentkou Adou. Ve verzi 2.57 je za přepínačem, stav najdete v přehledu níže.

:::poznamka[Ilustrační příklad]{ton="info"}

Servisní firma má adresu servis@, na kterou klienti hlásí poruchy. Dosud ji četla jen dispečerka;
když byla nemocná, hlášení čekala. Po připojení se každá zpráva uloží ke klientovi podle
odesílatele. Technik, který jede k zákazníkovi, otevře na telefonu kartu klienta a vidí, co
zákazník do e-mailu napsal, včetně kódu chyby z displeje. Dispečerka dál pracuje v Outlooku,
protože přeposílání ponechává kopii ve schránce.

:::

## Co je k tomu potřeba

- **Přístup k nastavení pošty** — správce Microsoft 365, Google Workspace nebo hostingu, kde
  sdílená adresa běží.
- **U odpovídání z kanálu přístup k nastavení domény** — kdo spravuje DNS vaší domény.
- **V Twenty oprávnění ke správě nastavení** — e-mailový kanál zakládá správce.
- **Na vyhrazeném serveru rozhodnutí o cestě** — vybereme ji při nasazení podle toho, jak máte
  poštu zřízenou.

V řešeních [Twenty Sales](/pro-obchodni-tymy/) i [Twenty Servis](/pro-servisni-firmy/) — našich
nadstavbách nad open-source Twenty — se zprávy ze sdílené adresy zobrazí u klienta a kontaktní
osoby stejně jako osobní pošta.

:::otazky

### Musíme kvůli sdílené schránce měnit nastavení domény?

Pro příjem ne — stačí pravidlo pro přeposílání u poskytovatele pošty. Záznamy v nastavení domény
jsou potřeba, jen když chcete z Twenty odpovídat jako info@ přes e-mailový kanál.

### Zůstane pošta i v Outlooku?

Ano, když přeposílání nastavíte s ponecháním kopie. U Microsoft 365 k tomu slouží volba, která
zprávy doručí do schránky i na adresu pro přeposílání.

### Proč se zprávy nepřiřadily ke klientům?

Nejčastěji je to druhem přeposílání: když pravidlo přeposílá zprávu jako přílohu nebo ji posílá
znovu jako novou, odesílatelem je vaše adresa. Použijte přeposílání nebo přesměrování, které
odesílatele ponechá.

### Uvidí poštu z info@ všichni?

Zprávy z e-mailového kanálu jsou určené celému týmu. U cesty 2 platí nastavení viditelnosti
schránky — kolegové mohou vidět celý e-mail, nebo jen předmět a odesílatele.

:::
