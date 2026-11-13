---
title: Vlastní klíče k AI — jak si na vyhrazeném serveru vybrat AI model a platit ho napřímo
description: Na vyhrazeném serveru zadáte do Twenty vlastní klíč k AI od Anthropic, OpenAI, Google, Mistral nebo xAI a spotřebu platíte přímo poskytovateli. Jak se volí model, co Twenty ukazuje o ceně a umístění dat a co se připravuje.
vMenu: Vlastní klíče k AI
poradi: 2
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [provoz, ai, naklady]
funkce: [vlastni-klice-ai, ai-volba-modelu, ai-agenti, ai-krok-automatizace, ai-chat, ai-pravidla-dat]
zdroje: [docs-ai-faq, twenty-vydani, github-twenty-v2-40-0, github-twenty-v2-56-0, docs-pravni-faq, gh-prepinace, github-pull-29553, github-twenty-v2-57-0, claude-build-with-claude-effort, claude-manage-claude-data-residency]
---

**Na vyhrazeném serveru si AI do Twenty přivedete sami: zadáte vlastní klíč u poskytovatele, kterého
si vyberete, a spotřebu platíte přímo jemu, bez přirážky.** Twenty pak u každého modelu ukáže
poskytovatele, cenu a to, kde se data zpracovávají — a pro každou úlohu zvolíte model, který se na
ni hodí.

Vlastní klíč (anglicky BYOK — bring your own key) znamená, že s poskytovatelem AI máte vlastní
smlouvu a vlastní účet; Twenty mu jen posílá požadavky. V cloudu výrobce vlastní klíč zadat nejde,
AI tam běží na účtech Twenty a platí se kredity — srovnání obou variant najdete na stránce
[Vyhrazený server nebo cloud](/cloud-vs-selfhost/).

## Co vám to umožní

- **Vybrat si poskytovatele.** Anthropic (modely Claude), OpenAI, Google, Mistral nebo xAI — podle
  toho, s kým už firma pracuje a čí podmínky jí sedí.
- **Platit AI bez prostředníka.** Účet vystavuje poskytovatel podle skutečné spotřeby. Twenty si
  za AI nic neúčtuje.
- **Levný model na jednoduché úlohy, chytrý na složité.** Roztřídit poptávku zvládne rychlý
  a levný model; shrnout dlouhé jednání nebo připravit koncept odpovědi klientovi dražší.
- **Vědět, kde se data zpracovávají.** Údaj vidíte u každého modelu, ještě než ho zapnete. Je to
  podklad pro rozhodnutí, která popisuje článek [GDPR a AI agenti](/twenty/provoz/gdpr-a-ai-agenti/).
- **Nezáviset na jednom dodavateli AI.** Když přijde lepší nebo levnější model, přepnete ho
  v nastavení. Data, agenti i automatizace zůstávají, jak jsou.

## Jak to v Twenty funguje

**Zadání klíče.** Správce vloží klíč do administrace Twenty a modely daného poskytovatele se objeví
v nastavení AI. Vestavění poskytovatelé — OpenAI, Anthropic, Google, Mistral a xAI — fungují na
vlastním serveru v každém tarifu včetně bezplatného. Klíčů od více poskytovatelů může být zadaných
víc najednou. Twenty umí i modely připojené přes Amazon Bedrock (od verze 2.47) a Microsoft Azure
Foundry (od verze 2.3); u nich oblast zpracování určuje nastavení účtu u cloudového poskytovatele.

**Katalog modelů (od verze 2.40).** Nastavení AI ukazuje u každého modelu poskytovatele, cenu za
milion tokenů (token je kousek textu, zhruba část slova), kolik textu model najednou pojme, jak
dlouhou odpověď může napsat a kde se data zpracovávají.

**Volba modelu.** Firma má výchozí model. U agenta nebo AI kroku v automatizaci zvolíte výchozí model,
úroveň (rychlejší a levnější, nebo chytřejší) nebo konkrétní model — tuhle volbu Twenty zjednodušilo
ve verzi 2.56. Od stejné verze jsou v nabídce Claude Haiku 5.5, Sonnet 5.5 a Opus 5.5 s volbou
**úrovně úsilí**: jak důkladně model úlohu promyslí, a tedy i kolik textu na ni spotřebuje.

**Vlastní poskytovatelé.** Kromě vestavěných jde připojit i vlastní adresu — soukromou bránu, model
s rozhraním kompatibilním s OpenAI, model provozovaný ve vlastní infrastruktuře nebo další oblast
zpracování. Výrobce je dnes poskytuje bez poplatku, u větších instalací k nim vyžaduje licenci
Organization; jak je na tom konkrétní server, ukazuje administrace AI.

**Připravuje se:** nastavení, že AI smí data zpracovávat jen v EU a jen u poskytovatelů, kteří je
neuchovávají — požadavek, který tyto podmínky nesplní, Twenty odmítne. Výrobce ho už popisuje ve své
dokumentaci, ve verzi 2.57 je ale v kódu zatím za přepínačem.

Podrobnosti jsou v dokumentaci výrobce v
[častých otázkách k AI](https://docs.twenty.com/cs/user-guide/ai/how-tos/ai-faq).

:::poznamka[Ilustrační příklad]{ton="info"}

Servisní firma používá **Twenty Servis** (naši nadstavbu nad open-source Twenty) na vyhrazeném
serveru. Firma si založí účet u Anthropic a klíč vloží do Twenty. Jako výchozí model zvolí rychlý
a levný Claude Haiku — stačí na AI krok, který každé nové poptávce doplní typ zařízení a naléhavost.
Agent, který z dlouhé e-mailové výměny připraví shrnutí k zakázce, dostane chytřejší Claude Sonnet.
Po měsíci firma z vyúčtování poskytovatele vidí, kolik stála která úloha, a podle toho volbu doladí.

:::

## Co je k tomu potřeba

- **Vyhrazený server s open-source Twenty** — vlastní klíče jsou jen tam.
- **Firemní účet u poskytovatele AI a klíč.** Zakládá se ve správě účtu u poskytovatele, ne
  v předplatném chatu, které používají lidé. Za spotřebu platí firma poskytovateli.
- **Strop útraty** nastavený u poskytovatele hned na začátku — postup popisuje článek
  [Jak hlídat útratu za AI](/twenty/naklady/hlidani-utraty-za-ai/).
- **Rozhodnutí, kam smějí data** — u kterého poskytovatele a v jaké oblasti se smějí zpracovávat.
- **Nastavení** — klíče, výchozí model a modely pro jednotlivé agenty nastavíme při nasazení nebo
  v rámci předplacených hodin podpory.

Na čem závisí, kolik AI za měsíc stojí, rozebírá článek
[Kolik stojí AI agenti v CRM](/twenty/naklady/kolik-stoji-ai-agenti/).

:::otazky

### Můžeme používat víc poskytovatelů najednou?

Ano. Každý poskytovatel má vlastní klíč a modely všech zadaných poskytovatelů se objeví v nastavení.
Jednomu agentovi tak může běžet Claude a jinému model od OpenAI.

### Účtuje si Twenty za AI něco navíc?

Na vyhrazeném serveru ne. Spotřebu platíte přímo poskytovateli modelu podle jeho ceníku.

### Jde AI provozovat úplně u nás, bez cloudového poskytovatele?

Twenty umí připojit i model provozovaný ve vlastní infrastruktuře. Jestli to u vás dává smysl,
záleží hlavně na tom, jaké úlohy má AI dělat a na jakém hardwaru by model běžel — ozvěte se,
projdeme to spolu.

### Dá se AI v CRM úplně vypnout?

Ano. Bez zadaného klíče AI na vyhrazeném serveru neběží vůbec. Data k poskytovateli AI navíc odcházejí
jen tehdy, když někdo AI opravdu použije — v AI chatu, v agentovi nebo v AI kroku automatizace —
a oprávnění ptát se AI jde jednotlivým rolím odebrat (vestavěná role správce si ho ponechává).

:::
