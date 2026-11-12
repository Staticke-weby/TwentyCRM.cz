# Migrace do Twenty — playbook + content pro web

> **Účel:** SEO + conversion content pro lidi, kteří **už nějaké CRM používají** a hledají alternativu. Páka „pomůžeme s migrací zdarma / v ceně setup" odbloku rozhodnutí.
>
> **Web struktura:** stránky `/migrace-z-raynetu/`, `/migrace-z-pipedrive/`, `/migrace-z-excelu/` (případně shrnující rozcestník `/migrace/`).
>
> **SEO důvod:** lidé typicky vyhledávají „přechod z Raynetu", „alternativa k Raynetu", „export z Pipedrive". Tyto stránky cílí přesně na ten intent.

---

## 1. `/migrace-z-raynetu/` — Z Raynetu do Twenty

### Hero

**H1:** Migrace z Raynetu do Twenty CRM

**H2:** Postaráme se o převod kontaktů, příležitostí i historie. Migrace je v ceně implementace, žádné překvapení.

**Pod-hero badge:**
> ⏱️ Typický čas migrace: 2–3 týdny celý projekt
> 💸 Migrace zdarma (součást implementace 34 990 Kč)
> 📞 Bez výpadku — Raynet jede dál, dokud nejsme v Twenty

**Primární CTA:** „🔵 Konzultace zdarma — probereme váš export z Raynetu"
**Sekundární:** „Cenové srovnání →"

---

### Proč klienti opouští Raynet

Z reálných důvodů, které slyšíme:

- 💸 **Cena při růstu týmu** — Raynet Professional je 799 Kč/uživatel. Při 15 lidech to je ~12 000 Kč měsíčně, jen za licence. *„Každý nový kolega znamená vyšší účet."*
- 🔧 **Generický CRM, oborové procesy ne** — kdo má servisní zařízení, výjezdy nebo revize, narazí na strop custom polí (Ultimate = 500 polí, ale **žádné custom objekty**).
- 🇪🇺 **Vlastnictví dat** — Raynet je SaaS u dodavatele. Pro klienty s GDPR-ostražitým IT to je problém.
- 🔌 **Limity automatizace** — Professional plan má 1 000 workflow runs/měs. Při hustším provozu to je úzké hrdlo.
- 🏗️ **Žádná platforma** — pro projekty, HR nebo helpdesk si kupujete druhý software. Klient existuje paralelně ve 4 systémech.

> **Naše pozice:** Twenty je **opačná filozofie** — open-source, neomezené custom objekty, self-host možnost, platforma na kterou stavíte další agendy. To není pro každého, ale pro firmy s oborovou specifikou je to lepší volba.

---

### Co vám konkrétně ušetříme za rok

Příklad pro **15-členný tým na Raynet Professional**:

| Položka | Raynet | Twenty Selfhost s námi | Roční rozdíl |
|---|---|---|---|
| Licence Twenty / Raynet | 15 × 799 × 12 = **143 820 Kč** | 0 Kč (open-source) | −143 820 Kč |
| Náš retainer / nikdo | — | 5 000 × 12 = **60 000 Kč** | +60 000 Kč |
| **Celkem ročně** | **143 820 Kč** | **60 000 Kč** | **−83 820 Kč** |
| **Setup jednorázově** | 0 Kč | 34 990 Kč | +34 990 Kč (1× ne ročně) |

**Návratnost setup do 4 měsíců.** Po druhém roce ušetříte ~167 640 Kč na licencích (a roste s týmem).

Kalkulačka pro vlastní výpočet je v `/cenik/`.

---

### Jak migrace probíhá (timeline)

#### Týden 1: Analýza a export
- Schůzka — projdeme váš datový model v Raynetu
- Identifikujeme **co migrovat (kontakty, příležitosti, aktivity, dokumenty)** a **co ne** (zastaralá data, duplicity)
- Vy uděláte CSV export z Raynetu (provedeme vás)
- Mapujeme pole Raynet → Twenty

#### Týden 2: Datový model + import
- Postavíme custom objekty pro váš obor (pro Field Service: Místo, Zařízení, Zakázka)
- Naimportujeme kontakty a firmy
- Naimportujeme historii (Raynet aktivity → Twenty Notes/Tasks)
- Připravíme custom views per role

#### Týden 3: Workflows + školení
- ARES auto-fill, e-mail sync, klíčové automatizace
- Školení dispečera + techniků (až 2h)
- Paralelní běh — Raynet máte ještě aktivní, Twenty ostře testujete na vzorku
- Odpojení Raynetu (po vašem souhlasu)

> **Rizikové scénáře řešíme:**
> - Co když migrace odhalí špatná data v Raynetu? Společně vyčistíme, pak importujeme.
> - Co když chybí pole, které v Twenty nejde vyřešit? Před spuštěním víme, řekneme upřímně.
> - Co když chcete migraci přerušit? Raynet máte stále — žádný hard cut.

---

### Co se nemění (důležité)

- **Vaše procesy** — pokud něco fungovalo v Raynetu, postavíme to i v Twenty. Cílíme parita + náš oborový upgrade, ne revoluce.
- **Vaše e-mailová adresa** — nesynchronizujete znova kontakty s Outlookem; jen v Twenty.
- **Vaše doména a fakturace** — nemění se nic mimo Raynet samotný.

---

### Konkrétní pole-mapování (orientační)

| Raynet pole | Twenty pole / objekt |
|---|---|
| Klient | Companies (B2B) nebo People (B2C) |
| Kontaktní osoba | People |
| Příležitost | Opportunity |
| Aktivita (telefon/e-mail/schůzka) | Note nebo Task na Klientovi/Příležitosti |
| Vlastní pole (custom field) | Custom field na příslušné entitě |
| Tagy | Multi-select pole |
| **Servisní zařízení** (custom) | Custom Object „Zařízení" |
| **Zakázka / výjezd** | Custom Object „Zakázka" |
| Faktura | Mimo CRM (Pohoda / Fakturoid napojení) |

---

### CTA

**🔵 Konzultace zdarma — probereme váš případ**

> 30 minut online, ukážeme jak by Twenty vypadal pro vás. Doporučíme jestli má smysl pokračovat. **Bez závazku, bez kreditní karty.**

---

---

## 2. `/migrace-z-pipedrive/` — Z Pipedrive do Twenty

### Hero

**H1:** Migrace z Pipedrive do Twenty CRM

**H2:** Pro firmy, které vyrostly z čistě prodejního Pipedrive a potřebují víc — servis, zařízení, oborové procesy.

**Pod-hero badge:**
> 🔄 Pipedrive Pipelines → Twenty Opportunities (1:1 mapování)
> 🛠 Servis a Field Service jako rozšíření, ne další nástroj
> 💸 Levnější při růstu týmu (Pipedrive Professional = $49/uživatel)

---

### Kdy migrovat z Pipedrive

Typicky když:
- Začali jste jako **prodejní firma**, vyrostli jste do **servisu/dodávek**
- Potřebujete víc než jen pipeline — **zařízení, výjezdy, servisní historii**
- **Pipedrive cena** roste s týmem rychleji než byste chtěli
- Hledáte **český implementační support** v češtině (Pipedrive je US produkt)

---

### Cenové srovnání (orientační, ověřit aktuální)

| Plán | Pipedrive cena (orientační) | Twenty Selfhost s námi |
|---|---|---|
| Per uživatel / měs (Professional) | ~$49 (~1 100 Kč) | 0 Kč (selfhost) |
| Pro 10 uživatelů ročně | ~132 000 Kč | 60 000 Kč retainer |
| Vlastnictví dat | SaaS u Pipedrive | Self-host = vy |
| Custom objekty | Omezené | Neomezené |

> ⚠️ Pipedrive ceny ověřit při psaní finálního copy (z pricing page). Změny se dějí pravidelně.

---

### Co migrujeme z Pipedrive

- **Deals** → Twenty Opportunities (s pipeline a fázemi)
- **People** → Twenty People
- **Organizations** → Twenty Companies
- **Activities** → Twenty Notes / Tasks
- **Custom fields** → Twenty custom fields (1:1 mapování)
- **Email integrace** — překlopíme na Twenty Outlook/Gmail sync
- **Workflows** — postavíme znovu v Twenty workflow engine (typicky výhodnější — mocnější Code action)

---

### Co dostanete navíc oproti Pipedrive

- ✅ Custom objekty — Pipedrive má jen Deals/People/Orgs, Twenty libovolné entity
- ✅ Servis a Field Service — datový model pro Zařízení, Místo, Zakázka
- ✅ Open-source — žádný lock-in, kód jde s vámi
- ✅ Implementace v češtině s českým partnerem (my)
- ✅ Selfhost = jedna faktura v CZK, ne USD platby

---

### CTA

**🔵 Pošlete nám export z Pipedrive a podíváme se**

---

---

## 3. `/migrace-z-excelu/` — Z Excelu / papírů do Twenty

### Hero

**H1:** Z Excelu (a papírů) do moderního CRM, které neztrácí data

**H2:** Pro firmy, které doteď řídí klienty v Excelu, Outlooku a v hlavách dispečerů. Twenty postavíme na míru a přeneseme všechno.

**Pod-hero badge:**
> 📊 Z Excelu / Google Sheets / Access
> 📒 Z Outlook kontaktů + papírových bloků
> ⏱️ Typicky 2–3 týdny celý projekt

---

### Tahle firma jste vy?

- 📋 **Klienti jsou v jednom Excelu**, kontakty v Outlook, zakázky na papírech v autech, fakturační data v Pohodě
- 🤯 **Když je dispečerka nemocná, firma stojí** — všechno má v hlavě
- 📞 **Pamatuje si servisní historii „kolega Jirka"** — ne systém
- 📈 **Rosteme, ale začíná to být chaos** — 5 lidí stačil Excel, 12 lidí už ne
- 💼 **Klient se ptá „kdy jste tu byli posledně?"** a my hledáme v 3 zdrojích zároveň

---

### Migrace z Excelu — typický postup

#### Co máme v Excelu vs. co potřebujeme v Twenty

| Excel realita | Twenty cíl |
|---|---|
| 1 list = 1 klient s historií ve sloupcích | Companies + Notes/Tasks časová osa |
| Adresář kontaktů v Outlooku | People propojené s Companies |
| Excel „Plán výjezdů" | Custom Zakázka + Kanban view |
| Excel „Servisní knihy zařízení" | Custom Zařízení s servisní historií |
| Papírové zakázkové listy | Twenty zakázka (mobilní PWA) + PDF export |
| Termíny revizí v Outlook kalendáři | Twenty workflow s automatickými připomínkami |

#### Kroky

1. **Týden 1: Analýza** — projdeme s vámi všechny zdroje (Excel, Outlook, papíry, Pohoda export)
2. **Týden 2: Datový model** — postavíme custom objekty pro váš obor (Zařízení, Zakázka, Místo)
3. **Týden 2-3: Import** — kontakty z Outlooku, klienty z Excelu, historii kde to dává smysl
4. **Týden 3: Školení + spuštění** — dispečer + technici, paralelní běh s Excelem, odstavujeme postupně

---

### Co řešíme s migrací z papírů

**„Co s 10 lety servisní historie na papírech?"**
- Nepokoušíme se naskenovat všechno — to by trvalo měsíce a nemělo by hodnotu
- Naimportujeme **klíčová data** (klient, zařízení, datum poslední revize/servisu) — to vám stačí pro budoucí provoz
- Papíry zůstávají v archivu pro audit, Twenty drží digitální budoucnost

**„Naši technici jsou starší, neznají IT — zvládnou to?"**
- PWA Twenty na telefonu má **jednoduché formuláře, větší písmo, ikony**
- 2hodinové školení pokryje běžnou denní práci
- První 2 týdny děláme aktivní podporu — telefon zazvoní, my poradíme
- Realisticky: technici za týden přivyknou, za měsíc děláme spíš podporu kolem vychytávek

---

### CTA

**🔵 Pojďme to probrat — co máte dnes a kam to chcete dotáhnout**

---

---

## 4. `/migrace/` (rozcestník)

Krátká stránka, která rozcestuje:

```
[Z Raynetu     →]
[Z Pipedrive   →]
[Z HubSpotu    →]    ← může vzniknout později
[Z Excelu      →]
[Z jiného CRM  →]    ← contact form
```

S obecným textem:
> Ať už používáte cokoliv, postaráme se o převod dat. Migrace je součástí ceny implementace (34 990 Kč). Žádný hard cut — paralelně s vaším systémem testujeme, dokud nejste v pohodě.

---

## Společná pravidla pro migrace

### Co slibujeme (a nezneužíváme)

- ✅ **Migrace v ceně setup** — žádné překvapení, žádné „za to si připlatíte"
- ✅ **Žádný výpadek** — váš stávající systém běží, dokud Twenty není ostře v provozu
- ✅ **Reverze možná** — pokud po týdnu Twenty nesedí, pomůžeme s re-importem zpět. Paralelní běh chrání před hard cutem.
- ✅ **Realistické timeline** — 2–3 týdny pro standardní migraci

### Co neslibujeme (transparentně)

- ❌ „Migrace za 5 minut" — není to nasazení nového e-shopu
- ❌ „100 % datová parita" — některá pole se nevejdou (např. Raynet velmi specifické tagy), společně rozhodneme co je důležité
- ❌ „Bez vašeho času" — potřebujeme ~4 hodiny vašich klíčových uživatelů na schůzkách a školení

### CTA strategy napříč migration stránkami

- Hlavní CTA: **„Pošlete nám export, my se podíváme"** (low friction, ne „kup od nás")
- Sekundární: **„Cenová kalkulačka"** (link na /cenik/ s kalkulátorem)
- Třetí: **„Důvody proč klienti opouští [X]"** (link na /otazky/ nebo blog post)

---

## SEO klíčová slova (pro budoucí stack volbu — meta tags)

### `/migrace-z-raynetu/`
- migrace z raynet
- alternativa raynet
- raynet vs open source crm
- export z raynet do crm
- raynet konec smlouvy

### `/migrace-z-pipedrive/`
- pipedrive alternativa cz
- pipedrive vs open source
- migrace pipedrive
- český crm místo pipedrive

### `/migrace-z-excelu/`
- crm pro servisní firmu z excelu
- přechod z excelu na crm
- crm pro malou firmu z excelu
- modernizace excel servisní firma

---

## Co schválně NEpíšeme na migrační stránky

- ❌ „Raynet je špatný" — komparativně, ne odsuzovavě. Klient z Raynetu pravděpodobně Raynet nějakou dobu používal a nesedne mu, když pliveme na jejich rozhodnutí.
- ❌ „Migrace je triviální" — není. Buďme realističtí.
- ❌ „Stará data jsou bezcenná" — pro klienta cenu mají, i kdyby praktickou ne, tak emocionální.
- ❌ Stoprocentní záruky („nedojde k výpadku") — místo toho **„paralelní běh až do plného přechodu"**, což je provoznější realita.
