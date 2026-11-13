---
title: Jak mít zprávy z LinkedInu u klienta v CRM — a co k tomu potřebujete
description: Aplikace LinkedIn pro Twenty ukládá konverzace z LinkedInu ke kontaktní osobě a klientovi vedle e-mailů a umí na ně odpovědět z CRM. K LinkedInu se připojuje přes službu třetí strany Unipile. Co umí, jaká má omezení a co je potřeba na vyhrazeném serveru.
vMenu: LinkedIn v CRM
poradi: 3
overeno: 2026-11-13
verzeTwenty: '2.58'
temata: [komunikace, linkedin]
funkce: [linkedin, posta-kalendar, ai-chat]
zdroje: [gh-vydani, gh-prepinace, github-public-linkedin, github-linkedin-setup, github-twenty-v2-54-0, github-twenty-v2-55-0, github-twenty-v2-56-0, unipile-pricing-api]
---

**Twenty má aplikaci LinkedIn, která ukládá konverzace z LinkedInu ke kontaktní osobě a klientovi
vedle jejich e-mailů a umí na ně odpovědět přímo z CRM. K LinkedInu se ale nepřipojuje sama:
jde přes službu třetí strany Unipile, se kterou je na vyhrazeném serveru potřeba mít vlastní účet.**

Aplikaci vydává výrobce Twenty a přibývala postupně: ve verzi 2.54 čtení zpráv, ve 2.55 import
historie, kontaktů a příloh, ve 2.56 odpovědi z Twenty. Obrazovka, přes kterou si každý uživatel
připojí svůj účet, je i ve verzi 2.58 v kódu ještě mezi rozpracovanými funkcemi za přepínačem.
Jak ji u vás zprovoznit, proto ověřujeme před nasazením.

## Co vám to umožní

- **Obchod přes LinkedIn není schovaný v jednom profilu.** Kolega, který přebírá klienta, vidí
  na kartě kontaktní osoby i to, co se domlouvalo na LinkedInu, ne jen e-maily.
- **Odpověď bez přepínání.** Na zprávu z LinkedInu obchodník odpoví z Twenty a odejde z jeho
  vlastního účtu.
- **Kontakty se párují samy.** Účastníci konverzací se spárují s kontaktními osobami, které už
  v CRM máte, a podle nastavení se nové založí.
- **Komunikace na jednom místě i pro AI.** Zprávy z LinkedInu se ukládají stejně jako e-maily,
  takže s nimi může pracovat i AI chat, když připravuje [shrnutí klienta před schůzkou](/twenty/po-jednani/priprava-na-schuzku/)
  — v rozsahu, který dovolí nastavení viditelnosti.

## Jak to v Twenty funguje

- **Každý připojí svůj vlastní účet.** Uživatel se přihlásí k LinkedInu přes přihlašovací
  stránku Unipile, pár kliknutí.
- **Nové zprávy přicházejí průběžně** a ukládají se k osobě a firmě vedle e-mailů. Od verze 2.56
  je u každé konverzace vidět, odkud přišla — z e-mailu, nebo z LinkedInu.
- **Historie jen nedávná.** LinkedIn povoluje zhruba 100 vyhledání profilů denně na účet, proto
  se při prvním načtení importuje posledních 10, 20 (výchozí) nebo 50 konverzací, případně žádná
  a ukládají se jen nové zprávy.
- **Přílohy:** aplikace stahuje i obrázky, videa, hlasové zprávy a dokumenty do 25 MB. Přílohy
  u zpráv jsou ale ve verzi 2.57 přechodně za přepínačem, dokud se při aktualizaci nedokončí
  jejich převod.
- **Párování podle profilu.** Spolehlivě se zpráva přiřadí, když má kontaktní osoba v poli
  LinkedIn adresu veřejného profilu. Jinak aplikace hledá podle jména a jmenovce nehádá — když
  stejné jméno má víc lidí, zprávu nepřiřadí, dokud adresu profilu nedoplníte.
- **Odpovědi jsou text v existující konverzaci.** Novou konverzaci, poslání přílohy a označení
  jako přečtené uděláte na LinkedInu.
- **Nastavení má každý své:** co se importuje, kdo zprávy uvidí, jestli se zakládají nové kontakty
  a jak se párují.
- **Odhlášení:** když LinkedIn účet odhlásí, aplikace připojení označí a je potřeba se přihlásit znovu.

Popis aplikace a návod pro vlastní server jsou v [repozitáři Twenty na GitHubu](https://github.com/twentyhq/twenty/tree/main/packages/twenty-apps/public/linkedin).

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodník dodavatele průmyslových vrat se s technickým ředitelem logistického centra seznámil
na veletrhu a dál si píšou přes LinkedIn — o rozměrech, termínu i ceně. Když obchodník odjede na
dovolenou a klient pošle e-mailem dotaz k nabídce, kolegyně otevře kartu kontaktní osoby. Vidí
e-maily i konverzaci z LinkedInu, kde se klient ptal na termín montáže a obchodník mu potvrdil
rozměry. Ví, co bylo dohodnuto, a nemusí obchodníkovi volat.

:::

## Co je k tomu potřeba

- **Twenty ve verzi 2.57 nebo novější** — tak to uvádí návod k aplikaci pro vlastní server.
- **Účet u Unipile.** Unipile účtuje podle počtu připojených účtů, podle svého ceníku od 49 EUR
  měsíčně až za deset účtů (ověřeno 12. 11. 2026). Platí se přímo jim.
- **Server dostupný z internetu.** Unipile posílá nové zprávy na adresu vašeho serveru, ta proto
  musí být veřejně dostupná pro tuto službu.
- **Obrazovka pro připojení účtů** je ve verzi 2.58 zatím za přepínačem — proto vedeme LinkedIn
  jako funkci, která se připravuje.
- **Adresy profilů u kontaktů.** Čím víc kontaktních osob má vyplněné pole LinkedIn, tím víc
  zpráv se přiřadí správně.
- **Posouzení ochrany osobních údajů.** Zprávy tečou přes servery Unipile, s tím je potřeba
  počítat — víc v článku [GDPR a AI agenti](/twenty/provoz/gdpr-a-ai-agenti/).
- **Nastavení aplikace na vyhrazeném serveru.** Nastavení je práce navíc: drobnost se vejde do hodiny měsíčně v paušálu, větší úpravu odhadneme předem — viz [SLA balíčky](/sla-balicky/).

V cloudu výrobce je napojení na Unipile podle návodu aplikace připravené a aplikace se platí
výrobci zvlášť — rozdíl obou variant je na stránce [Vyhrazený server, nebo cloud](/cloud-vs-selfhost/).

K řešení [Twenty Sales](/pro-obchodni-tymy/) — naší nadstavbě nad open-source Twenty — lze aplikaci
doplnit; zprávy z LinkedInu se pak zobrazí u kontaktní osoby a klienta stejně jako e-maily. Jak se do CRM dostávají
e-maily a schůzky, popisuje článek [E-maily a kalendář na kartě klienta](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/).

:::otazky

### Je to oficiální napojení od LinkedInu?

Ne. Aplikaci vydává výrobce Twenty a k LinkedInu se připojuje přes službu třetí strany Unipile.
LinkedIn ji nevydává.

### Můžu z CRM začít novou konverzaci?

Ne, z Twenty odpovíte textem v konverzaci, která už existuje. Novou konverzaci a přílohy pošlete
na LinkedInu; zprávy se pak do CRM uloží samy.

### Uvidí kolegové všechny moje zprávy z LinkedInu?

Co se importuje a kdo zprávy uvidí, si každý nastaví u svého připojení. Soukromé konverzace tak
v CRM být nemusí.

### Proč se nenačetla celá historie?

LinkedIn omezuje počet vyhledání profilů zhruba na 100 denně na účet. Proto se při prvním
načtení importuje jen posledních 10 až 50 konverzací; nové zprávy pak přicházejí průběžně.

:::
