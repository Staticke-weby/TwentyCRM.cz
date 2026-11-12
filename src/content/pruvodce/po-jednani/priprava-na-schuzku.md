---
title: Příprava na schůzku — AI vám shrne historii klienta
description: Před schůzkou se zeptáte AI v Twenty, nebo v Claude či ChatGPT, a dostanete shrnutí klienta z e-mailů, schůzek, obchodních případů a poznámek v CRM. Jak to funguje, co je k tomu potřeba a jak výsledek ověřit.
vMenu: Příprava na schůzku
draft: true
poradi: 2
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [ai, komunikace]
funkce: [ai-chat, ai-dovednosti, posta-kalendar, nahravani-schuzek, mcp-server, role-opravneni, vlastni-klice-ai]
zdroje: [docs-ai-chat, twenty-ai-overview, twenty-vydani, docs-mcp, docs-opravneni]
---

**Před schůzkou stačí otevřít kartu klienta a napsat AI v Twenty *„shrň mi, co s touto firmou
řešíme"* — AI projde obchodní případy, úkoly, poznámky, e-maily a schůzky v CRM a vrátí shrnutí
s otevřenými body.** Stejně to funguje z Claude nebo ChatGPT, pokud je máte k Twenty připojené.

Kvalita shrnutí stojí na tom, co v CRM je. Když se do Twenty ukládají e-maily a přepisy schůzek
samy, AI ví i to, co klient řekl a napsal — ne jen to, co někdo zapsal do poznámky.

## Co vám to umožní

- **Obchodník přijde připravený i ke klientovi, kterého zdědil.** Jednou otázkou zjistí, co se
  nabízelo, co klient řešil a co zůstalo nedotažené.
- **Vedoucí se před jednáním o prodloužení zeptá na stav.** Otevřené obchodní případy,
  nevyřízené nabídky, poslední výhrada klienta — v jedné odpovědi.
- **Dispečer v servisu ví, s kým mluví.** Před telefonátem s klientem se zeptá, které zakázky
  a výjezdy u něj proběhly a co zůstalo otevřené.
- **Bez přepínání oken.** AI je přímo u záznamu, nebo v asistentovi, kterého už používáte.
- **Stejná příprava pro všechny.** Firemní postup přípravy na schůzku zapíšete jednou jako
  dovednost a kdokoli ho vyvolá jedním příkazem.

## Jak to v Twenty funguje

**AI chat v Twenty** zná stránku, na které jste. Na kartě klienta stačí psát „tento klient",
na obchodním případu „tento obchod". Od verze 2.40 navíc:

- **zavináčem (@)** odkážete na konkrétní záznam — klienta, kontaktní osobu, obchodní případ,
- **lomítkem (/)** spustíte uloženou dovednost, třeba „příprava na schůzku" s vaší osnovou.

AI pracuje s daty v CRM pod vaší rolí: vidí totéž co vy. E-maily, u kterých kolega sdílí jen
předmět a odesílatele, celé nepřečte ani AI. Na požádání může i založit úkol nebo doplnit
poznámku.

**Z Claude nebo ChatGPT** to funguje přes MCP — otevřený standard pro napojení AI nástrojů
na firemní systémy. Asistent si data přečte v Twenty pod rolí přihlášeného uživatele.
Více v článcích [Co je MCP](/twenty/mcp/co-je-mcp/)
a [jak připojit Claude a ChatGPT](/twenty/mcp/pripojeni-claude-a-chatgpt/).

**Příprava může běžet i sama.** Automatizace s plánovaným spouštěčem každé ráno projde dnešní
schůzky v kalendáři a AI ke každé připraví shrnutí klienta do poznámky. Skládá se z běžných kroků
automatizací Twenty; zadání a rozsah nastavíme podle vás.

Popis AI chatu je v [dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/ai/capabilities/ai-chatbot).

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodník převzal klienta po kolegovi a zítra má s ním první schůzku. Na kartě klienta napíše:
*„Shrň posledního půl roku: co jsme nabízeli, co klient řešil v e-mailech a na schůzkách, co
zůstalo otevřené. Navrhni tři otázky na zítřek."* AI vrátí přehled: jedna nabídka přijatá,
druhá bez odpovědi od září; v e-mailu z minulého měsíce klient zmínil, že mu nevyhovuje termín
dodání; úkol „zavolat ohledně rozšíření" je po termínu. K tomu tři otázky, kterými na to
navázat.

:::

## Co je k tomu potřeba

- **Data v CRM** — hlavně synchronizovaná pošta a kalendář
  ([e-maily a kalendář na kartě klienta](/twenty/e-maily-a-schuzky/synchronizace-e-mailu-a-kalendare/))
  a ideálně přepisy schůzek ([záznam a přepis schůzky](/twenty/e-maily-a-schuzky/zaznam-a-prepis-schuzek/)).
  Bez nich AI zná jen to, co kdo ručně zapsal.
- **AI model** — na vyhrazeném serveru přes vaše vlastní klíče k AI. Volíte poskytovatele
  i model a platíte mu přímo podle spotřeby.
- **Pro Claude nebo ChatGPT** — předplatné u jejich poskytovatele a napojení přes MCP, které
  je součástí Twenty.
- **Role** — aby AI nevidělo víc, než má. Nastavíme je při nasazení.

V [Twenty Sales](/pro-obchodni-tymy/), naší nadstavbě nad open-source Twenty, je navíc souhrn
obchodního případu na tlačítko a sada připravených zadání pro typické situace v obchodě.
Jak AI v Twenty funguje celkově, popisuje stránka [Agentské CRM](/agentske-crm/).

:::otazky

### Odkud AI informace bere?

Z dat v Twenty, ke kterým máte přístup: klienti, kontaktní osoby, obchodní případy, nabídky,
úkoly, poznámky, e-maily, schůzky a jejich přepisy.

### Může se AI splést?

Jazykové modely se mohou splést nebo něco vynechat. U důležitých údajů — ceny, termínu,
slibu — si nechte říct, ze kterého e-mailu nebo záznamu AI vychází, a otevřete si ho.

### Uvidí AI soukromou poštu obchodníků?

Ne. Do CRM se ukládají jen e-maily s lidmi mimo firmu ze složek, které si každý vybere,
a v rozsahu, který nastaví. Pošta mezi kolegy se ve výchozím nastavení neukládá vůbec.

### Musím pro to platit ChatGPT nebo Claude?

Ne. AI chat je přímo v Twenty. Claude nebo ChatGPT dávají smysl, když je ve firmě už používáte
a chcete se ptát odtud.

:::
