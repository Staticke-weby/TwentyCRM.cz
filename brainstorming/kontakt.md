# Kontaktní stránka — content

> **Účel:** Content pro `/kontakt/` a všechny CTA napříč webem.
>
> **Klíčové rozhodnutí (2026-05):** **Bez formuláře.** Jen telefon + e-mail jako primární CTA. Důvody:
> 1. B2B servisní firmy v ČR typicky volají nebo píšou e-mail, ne vyplňují forms
> 2. Visible telefon = trust signal („skutečná firma, která bere telefony")
> 3. Méně kódu (žádný form handler, anti-spam, /dekujeme/ stránka, lead queue, GDPR consent storage)
> 4. mailto: link s pre-filled subject + body je flexibilnější než rigid form
> 5. Lead tracking řešíme jednoduše přes e-mailové složky + spreadsheet (vlastní Twenty instanci založíme později, až bude reálná potřeba — typicky s první klientskou implementací)

---

## Hlavní kontaktní informace (na webu)

```
📞 +420 605 540 167          (Po–Pá 8:00–17:00)
📧 obchod@twentycrm.cz       (odpověď do 1 pracovního dne)

────────────────

Akutní podpora pro stávající klienty:
📧 podpora@twentycrm.cz
🕐 8:00–16:00 v pracovní dny
```

---

## CTA strategie napříč webem (jednotná)

Veškerá CTA tlačítka mají dvě varianty vedle sebe:

```
[ 📞 Zavolat: +420 605 540 167 ]   [ 📧 Napsat: obchod@twentycrm.cz ]
```

### Implementace tlačítek (HTML)

```html
<a href="tel:+420605540167" class="btn btn-primary">
  📞 Zavolat: +420 605 540 167
</a>

<a href="mailto:obchod@twentycrm.cz?subject=Konzultace%20Twenty%20CRM" class="btn btn-secondary">
  📧 Napsat: obchod@twentycrm.cz
</a>
```

**Mobilní zařízení:** `tel:` link otevře dialer. `mailto:` otevře e-mail klienta.
**Desktop:** `tel:` často zobrazí nabídku aplikací (Skype, Teams, …). `mailto:` otevře default e-mail klienta.

---

## Pre-filled mailto links (per kontext)

Každá CTA na konkrétní stránce má **vlastní subject + body template**, aby:
- Byl e-mail predpřipraven s minimem psaní
- Měli jsme okamžitě kontext (ze které stránky lead přišel)
- Mohli klientovi dát strukturu

### Generic CTA (homepage, footer)

```
mailto:obchod@twentycrm.cz
?subject=Konzultace Twenty CRM
&body=Dobrý den,%0A%0Amám zájem o Twenty CRM pro naši firmu.%0A%0AKrátce o nás:%0A- Obor:%0A- Velikost týmu:%0A- Současné řešení:%0A%0AS pozdravem,%0A
```

Po klepnutí v e-mail klientovi:
```
To: obchod@twentycrm.cz
Subject: Konzultace Twenty CRM

Dobrý den,

mám zájem o Twenty CRM pro naši firmu.

Krátce o nás:
- Obor:
- Velikost týmu:
- Současné řešení:

S pozdravem,
```

### CTA z `/pro-servisni-firmy/hvac/`

```
?subject=Konzultace%20—%20HVAC%20servisní%20firma
&body=Dobrý den,%0A%0Aprovozujeme servisní firmu v oblasti klimatizace / HVAC.%0A%0A- Počet techniků:%0A- Současné řešení (Excel / Raynet / …):%0A- Co řešíme nejvíc:%0A%0AS pozdravem,
```

### CTA z `/pro-servisni-firmy/revize/`

```
?subject=Konzultace%20—%20Revize
&body=Dobrý den,%0A%0Aprovozujeme revizní techniky.%0A%0A- Typy revizí (elektro / plyn / …):%0A- Počet techniků:%0A- Co řešíme nejvíc:%0A%0AS pozdravem,
```

### CTA z `/pro-servisni-firmy/stroje/`

```
?subject=Konzultace%20—%20Servis%20strojních%20zařízení
&body=Dobrý den,%0A%0Aprovozujeme servisní firmu pro výrobní/strojní zařízení.%0A%0A- Obor (CNC / potravinářství / …):%0A- Počet techniků:%0A- SLA požadavky:%0A%0AS pozdravem,
```

### CTA z `/migrace-z-raynetu/`

```
?subject=Migrace%20z%20Raynetu%20do%20Twenty
&body=Dobrý den,%0A%0Apoužíváme Raynet a zvažujeme přechod.%0A%0A- Verze (Start / Pro / Ultimate):%0A- Počet uživatelů:%0A- Co nám v Raynetu chybí:%0A%0AS pozdravem,
```

### CTA z `/migrace-z-pipedrive/`, `/migrace-z-excelu/`

Stejný princip — segment-specific subject + body se základními otázkami, na které stačí doplnit jednoslovné odpovědi.

### CTA z `/cenik/`

```
?subject=Cenová%20nabídka%20Twenty%20CRM
&body=Dobrý den,%0A%0Achtěli bychom orientační cenovou nabídku pro:%0A%0A- Počet uživatelů:%0A- Cloud nebo Selfhost:%0A- Obor:%0A%0AS pozdravem,
```

> **Pravidlo:** body je krátký, max 5 řádků, používá strukturu „- bod:" na vlastní řádek. Klient může smazat / doplnit / přepsat.

---

## Layout `/kontakt/` stránky

Doporučená struktura: **2 sloupce na desktop** (kontakty vlevo, tým vpravo), 1 sloupec na mobile.

### Hero

**H1:** Pojďme se pobavit

**H2:** Zavolejte nebo napište — odpovídáme do 1 pracovního dne. 30 minut online schůzka, bez závazku, bez kreditní karty.

### Hlavní CTA blok

```
┌─────────────────────────────────────┐
│  📞 ZAVOLEJTE                       │
│  +420 605 540 167                   │
│  Po–Pá 8:00–17:00                   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  📧 NAPIŠTE                         │
│  obchod@twentycrm.cz                │
│  Odpověď do 1 pracovního dne        │
└─────────────────────────────────────┘
```

Obě tlačítka na šířku, s velkým fontem, primární barvou (`--accent`). Mobil = stack pod sebou, desktop = vedle sebe.

### Sekce „Co se stane potom"

Žádný `/dekujeme/` page potřebný (není form submit), ale stejný princip vysvětlení očekávání:

```
✉️ Po vašem e-mailu / hovoru:

1. Do hodiny dostanete potvrzení
2. Do 1 pracovního dne návrh termínu schůzky
3. 30 minut online (Google Meet / Microsoft Teams)
4. Bez závazku — společně rozhodneme, jestli má smysl pokračovat
```

### Tým (kdo je za co odpovědný)

```
👤 Petr Baloun
Specialista na CRM a integrace, jednatel
📧 baloun@twentycrm.cz
📞 +420 605 540 167

  „Bavte se se mnou o implementacích, datovém modelu a integracích."

────────────────

👤 David Řezáč
CRM & procesní konzultant, jednatel
📧 rezac@twentycrm.cz
📞 +420 736 772 499

  „Bavte se se mnou o procesech, optimalizaci a strategii rolloutu."

────────────────

👤 Jakub Pitner
Developer a správa serverů
📧 pitner@twentycrm.cz

  „Bavte se se mnou o technických detailech, selfhostu a custom code."
```

> Bez fotek (viz `design-principy.md`). Iniciály v barevném kruhu jako fallback.

### Sídlo

```
📍 ESHOpino s.r.o.
Roháčova 145/14
130 00 Praha 3

IČO: 03223485
DIČ: CZ03223485
```

> Mapa je nice-to-have, ne nutná. Pokud chceme, **lazy-load embed** — preferovat **OpenStreetMap přes Leaflet** (open-source, žádné reklamy, žádný lock-in) před Mapy.cz / Google Maps.

---

## Sticky CTA bar (mobile)

Na všech stránkách kromě `/kontakt/`, sticky bottom bar:

```
[ 📞 Zavolat ]  [ 📧 Napsat ]
```

Klepnutí otevře `tel:` resp. `mailto:` — žádný redirect na `/kontakt/`. Klient skoro vždy chce konat hned, ne přečíst další stránku.

---

## Anti-spam pro public e-mailovou adresu

Public mailto: link **přitahuje boty**. Ošetříme:

### Server-side
- **SpamAssassin** nebo **rspamd** na mailserveru — standardní filtrace
- **Greylisting** — ne nutné, ale snižuje spam o 50–80 %
- **DKIM + SPF + DMARC** pro `twentycrm.cz` doménu — autenticita odchozí pošty + lepší filtrace

### Client-side ochrana před scraping
- **Vyhnout se `<a href="mailto:obchod@twentycrm.cz">` v HTML zdrojáku** — boti to čtou
- Místo toho: **JavaScript-rendered** mailto link (boti většinou nečtou JS):

```html
<button data-email="obchod@twentycrm.cz" data-subject="Konzultace Twenty CRM" class="btn js-mailto">
  📧 Napsat
</button>

<script>
document.querySelectorAll('.js-mailto').forEach(btn => {
  btn.addEventListener('click', () => {
    const email = btn.dataset.email;
    const subject = btn.dataset.subject;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  });
});
</script>
```

Alternativa — **obfuskace pomocí HTML entity** (transparent fallback bez JS):

```html
<a href="mailto:obchod&#64;twentycrm&#46;cz">obchod&#64;twentycrm&#46;cz</a>
```

**Doporučení:** kombinace — JS render pro 90 % botů + visible plain text pro accessibility (screen readers + ne-JS klienti). Ideálně oba přístupy v různých částech webu (hero = JS render, footer = entity-encoded plain).

---

## Lead tracking (jednoduše, bez vlastní Twenty instance pro launch)

Bez formuláře a v early-stage objemu (předpokládaně 1–3 e-maily týdně v prvních měsících) není potřeba vlastní Twenty instance pro lead pipeline. Stačí:

1. E-mail dorazí na `obchod@twentycrm.cz`
2. Někdo z týmu (Baloun / Řezáč) přečte
3. Označí složkou / labelem v e-mail klientovi (např. `Twenty leads / nový`, `Twenty leads / domluveno na schůzku`, `Twenty leads / zákazník`)
4. Volitelně poznamená do prostého spreadsheetu (jméno, firma, fáze, datum poslední komunikace)

**Vlastní Twenty instanci pro own lead pipeline založíme později** — typicky souběžně s první klientskou implementací, kdy už máme provozní selfhost rutinu a přidat naši vlastní = pár hodin práce.

### Demo na schůzce (bez own Twenty production instance)

Když potřebujeme klientovi ukázat reálné Twenty fungující na jeho oboru, máme tři možnosti:

1. **Twenty Cloud sandbox** — 30denní trial bez karty, vytvoříme prototyp jeho oborového data modelu před schůzkou (30–60 min přípravy). Po schůzce sandbox necháme zaniknout nebo prodloužíme.
2. **Existující klientský selfhost** s anonymizovanými daty (až budeme mít prvního klienta).
3. **Sdílení obrazovky z docs.twenty.com** + walkthrough featur — fallback, ne ideální.

> **Princip:** klient nepotřebuje vidět *naši* Twenty instanci. Potřebuje vidět *jak by jeho* Twenty vypadala. Sandbox prototypovaný před schůzkou je často přesvědčivější než produkční instance s naší firemní pipeline.

---

## FAQ aktualizace (přidat otázku)

V `faq.md` doplnit otázku do skupiny D (implementace & podpora) nebo nové „O tomto webu":

> **Proč nemáte kontaktní formulář?**
> Servisním firmám se víc líbí zavolat nebo napsat e-mail. Je to rychlejší a osobnější. Pokud chcete strukturovat svou poptávku, klepněte na tlačítko „Napsat" — připravíme vám e-mail s pár otázkami, na které stačí doplnit odpovědi.

---

## Co tato změna ušetří v kódu / stacku

✅ Žádný form handler endpoint
✅ Žádné anti-spam pro form (CSRF, honeypot, time-based check, Cloudflare Turnstile)
✅ Žádná SQLite tabulka `leads` (nebo zjednodušená — jen pro consent log Plausible)
✅ Žádná `/dekujeme/` stránka
✅ Žádný auto-reply mailing systém (klient si zařídí v e-mail klientovi sám)
✅ Žádný GDPR consent flow pro form data
✅ Žádný PHPMailer / SMTP setup pro odchozí mail z webu

> **Saving:** ~1.5 dne developerského času + průběžná maintenance.

---

## Zachované akce před launch

- ✅ DKIM/SPF/DMARC pro `twentycrm.cz` doménu (potřebné pro mail aliasy)
- ✅ Aliasy `info@`, `obchod@`, `podpora@`, `baloun@`, `rezac@`, `pitner@` na existující mailserver
- ✅ Mailbox provisioning pro tým
- ✅ Test mailto: linků na různých zařízeních (iOS Mail, Outlook, Gmail web, Thunderbird)
- ✅ Test tel: linků na mobilu (iOS, Android dialer)
