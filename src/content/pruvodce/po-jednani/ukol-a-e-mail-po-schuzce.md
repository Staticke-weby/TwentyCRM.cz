---
title: Po schůzce rovnou úkol a návrh e-mailu — připraví je AI v CRM
description: Jakmile se ke klientovi uloží přepis schůzky, automatizace v Twenty ho předá AI, která založí úkol s termínem a připraví koncept navazujícího e-mailu. Odeslání zůstává na člověku. Co jde dnes a co se připravuje.
vMenu: Úkol a e-mail po schůzce
poradi: 1
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [ai, automatizace, komunikace]
funkce: [automatizace, ai-krok-automatizace, koncept-emailu, zapisniky-schuzek, nahravani-schuzek, role-opravneni, vlastni-klice-ai, schvaleni-clovekem]
zdroje: [docs-akce, docs-spoustece, twenty-ai-overview, docs-opravneni, gh-vydani]
---

**Jakmile se ke klientovi uloží přepis nebo shrnutí schůzky, může automatizace v Twenty předat
text AI, která z něj založí úkol s termínem a připraví koncept navazujícího e-mailu.** Koncept
skončí ve složce Koncepty v poště obchodníka — odejde, až když ho člověk zkontroluje a odešle.

Návrh e-mailu podle poznámek ze schůzky uvádí výrobce v dokumentaci přímo jako příklad použití
AI v automatizacích. Skládá se z kroků, které Twenty umí dnes.

## Co vám to umožní

- **Obchodník po schůzce nepíše od nuly.** Shrnutí, úkol i e-mail klientovi má připravené,
  jen je zkontroluje, upraví a odešle.
- **Dohodnuté kroky nezapadnou.** Co se na schůzce slíbilo, se stane úkolem u klienta nebo
  obchodního případu — s termínem a s tím, kdo ho má udělat.
- **Vedoucí vidí, co ze schůzky vzešlo.** Úkoly jsou u klienta, ne v sešitě obchodníka.
- **Všichni to dělají stejně.** Jak má vypadat e-mail po schůzce a co patří do úkolu, se
  zapíše jednou do zadání pro AI. Nový obchodník posílá klientům stejně kvalitní shrnutí
  jako zkušený kolega.

## Jak to v Twenty funguje

Automatizace v Twenty je řada kroků, která se spustí sama. Pro tenhle případ vypadá takto:

1. **Spouštěč** — u klienta přibyl nebo se doplnil záznam schůzky s přepisem (z nahrávacího
   asistenta Twenty, z Teams, Fireflies, Fathomu nebo Granoly). Spouštět jde i poznámkou
   po schůzce, nebo tlačítkem na kartě klienta.
2. **Krok AI agenta** — dostane přepis a shrnutí a vaše zadání, například *„vypiš dohodnuté
   kroky s termíny a navrhni krátký e-mail klientovi, věcně a bez frází"*. Pracuje s vlastní
   rolí — vidí a mění jen to, co mu povolíte.
3. **Založení úkolu** — úkol s termínem a odpovědným u klienta nebo obchodního případu.
4. **Koncept e-mailu** — zpráva se uloží do složky Koncepty v připojené schránce. Neodejde,
   dokud ji člověk sám neodešle.

Automatizace umí e-mail i rovnou odeslat. U zpráv klientům, které píše AI, má ale smysl
nechat poslední slovo člověku — koncept je přesně ten krok.

**Co se připravuje:** Twenty chystá, aby se agent mohl uprostřed práce zeptat člověka přímo
v Twenty a pokračovat až po jeho schválení. Dnes je ve vývoji za přepínačem; do té doby roli
schválení plní koncept e-mailu a úkol, které obchodník zkontroluje.

Popis kroků automatizací najdete v [dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/workflows/capabilities/workflow-actions).

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodnice firmy, která dodává stínicí techniku, má online schůzku s nákupčím developera.
Schůzku zaznamená Fathom. Krátce poté najde u obchodního případu v Twenty úkol *„Poslat
upravenou nabídku ve třech variantách látek — do čtvrtka"* a v Outlooku koncept: poděkování
za schůzku, tři body, na kterých se shodli, a termín nabídky. Opraví jednu větu a odešle.

:::

## Co je k tomu potřeba

- **Přepisy schůzek v Twenty** — z nahrávacího asistenta nebo z nástroje, který používáte.
  Viz [záznam a přepis schůzky](/twenty/e-maily-a-schuzky/zaznam-a-prepis-schuzek/).
- **Připojená schránka** — koncept vzniká ve schránce, kterou má automatizace nastavenou,
  proto se nastavuje pro každého obchodníka zvlášť. Viz
  [e-maily a kalendář na kartě klienta](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/).
- **AI model** — na vyhrazeném serveru přes vaše vlastní klíče k AI (Anthropic, OpenAI, Google,
  Mistral nebo xAI). Platíte přímo poskytovateli podle spotřeby.
- **Zadání a role pro AI** — co má e-mail obsahovat, jakým tónem, kam zakládat úkoly a co smí
  AI měnit. Automatizaci podle toho lze v Twenty nastavit a na prvních schůzkách doladit.
  Nastavení je práce navíc: drobnost se vejde do hodiny měsíčně v paušálu, větší úpravu odhadneme předem — viz [SLA balíčky](/sla-balicky/).

V [Twenty Sales](/pro-obchodni-tymy/) lze úkol zakládat k obchodnímu případu,
v [Twenty Servis](/pro-servisni-firmy/) ke klientovi nebo k zakázce. Obě řešení jsou naše
nadstavby nad open-source Twenty. Jak AI agenti v Twenty fungují obecně, popisuje článek
[agenti v Twenty](/twenty/ai-agenti/agenti-v-twenty/).

:::otazky

### Pošle AI e-mail klientovi sama?

Jen pokud to tak nastavíte. Při nastavení s konceptem e-mail čeká ve složce Koncepty, dokud
ho obchodník nezkontroluje a neodešle.

### Co když AI z přepisu vyvodí něco špatně?

Úkol i e-mail jsou návrh, který člověk před odesláním čte a opraví. Zadání pro AI se na prvních
schůzkách doladí — co má vynechat, na co si dát pozor.

### Uvidí AI data, která vidět nemá?

AI krok pracuje pod vlastní rolí. Nastavíte, které typy záznamů smí číst a co smí měnit — třeba
jen zakládat úkoly, nikdy nemazat.

### Funguje to i bez nahrávání schůzek?

Ano. Spouštěčem může být i poznámka, kterou obchodník po schůzce napíše, nebo tlačítko
na kartě klienta. AI pak pracuje s poznámkou místo přepisu.

:::
