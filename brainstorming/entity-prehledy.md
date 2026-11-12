# Přehledy základních entit (Klient, Kontaktní osoba, Obchodní případ)

> **Účel:** Krátké boxy / sekce pro web, které ke každé výchozí Twenty entitě řeknou:
> 1. K čemu je
> 2. **Co u nás přidáváme nebo kde nemáme limity** (toto je hlavní hodnota — diferenciátor)
> 3. Jak začít (1–2 odstavce)
> 4. Odkaz na Twenty docs pro hlubší návod
>
> **Princip:** **NEpíšeme plné tutoriály.** To je commodity content, který stárne s každým release Twenty. Naše hodnota je v doplnění (ARES, FS extensions, žádné limity), ne v dokumentaci.
>
> **Umístění na webu:** doporučuji jako **sekce na stránce `/co-umi/`** (případně rozšířit do podstránek `/co-umi/klient/` atd. pokud bude SEO důvod). Aktualizace [sitemap.md](sitemap.md) tomu odpovídá.
>
> **Pravdivost:** všechny faktické claimy jsou sourced z `twenty-capabilities.md`. Limity Raynetu z `konkurence.md` (ověřeno na raynet.cz/cena/).
>
> **Link na Twenty docs:** ✅ Česká verze potvrzena (2026-05). URL pattern: `https://docs.twenty.com/l/cs/user-guide/[section]/overview`. Konkrétní české sekce viz tabulka níže.
>
> | Anglická sekce | Česká URL | Český název |
> |---|---|---|
> | Data Model | `https://docs.twenty.com/l/cs/user-guide/data-model/overview` | Datový model |
> | Calendar/Emails | `https://docs.twenty.com/l/cs/user-guide/calendar-emails/overview` | Kalendář a e-maily |
> | Workflows | `https://docs.twenty.com/l/cs/user-guide/workflows/overview` | Pracovní postupy |
> | AI | `https://docs.twenty.com/l/cs/user-guide/ai/overview` | AI |
> | Permissions | `https://docs.twenty.com/l/cs/user-guide/permissions-access/overview` | Oprávnění a přístup |
> | Layout | `https://docs.twenty.com/l/cs/user-guide/layout/overview` | Rozložení |
> | Dashboards | `https://docs.twenty.com/l/cs/user-guide/dashboards/overview` | Přehledy |

---

## 1. Klient (Companies + People)

### K čemu je
Klient je základní záznam o firmě nebo osobě, se kterou obchodujete. V Twenty má dvě výchozí entity:

- **Companies** — pro **B2B** vztahy (firmy, organizace)
- **People** — pro **B2C** kontakty (jednotlivci) a zároveň jako kontaktní osoby v rámci B2B firem

### Co u nás navíc

- **🇨🇿 ARES auto-fill přes IČO** — zadáte IČO a Twenty workflow automaticky doplní přesný název, sídlo, DIČ a stav plátce DPH z ARES registru. Nemusíte opisovat z webu úřadu.
- **Žádný strop počtu klientů** — Twenty má neomezený počet záznamů (Cloud i Selfhost). Pro srovnání: nejvyšší tier Raynetu (Ultimate) má strop 500 000 záznamů.
- **Neomezená vlastní pole** — když potřebujete sledovat třeba „typ topení" u klientů z HVAC oboru nebo „velikost firmy podle zaměstnanců", přidáte si vlastní pole. Bez limitů a bez příplatku za počet polí.
- **Vazba na všechny ostatní entity FS modelu** — z karty klienta vidíte jeho Místa, Zařízení, Zakázky a Servisní historii v jednom místě. Nativní Twenty má to oddělené, my to spojíme.

### Jak začít

1. V hlavní navigaci klikněte na **Klienti** (Companies)
2. **+ Nový klient** → vyplňte IČO → ARES doplní zbytek
3. Přidejte kontaktní osoby (People) jako odpovědné kontakty
4. Připojte e-mailovou doménu klienta — Twenty pak automaticky linkuje příchozí e-maily na tento záznam

### Pro detailní návod
→ [Twenty docs (česky): Datový model — Companies & People](https://docs.twenty.com/l/cs/user-guide/data-model/overview)

---

## 2. Kontaktní osoba (People)

### K čemu je
Kontaktní osoba je konkrétní jednotlivec, se kterým komunikujete — buď v rámci klientské firmy (B2B), nebo jako samostatný klient (B2C). V Twenty je People standardní entita, kterou používáte stejně pro kontakty firem i pro koncové zákazníky.

### Co u nás navíc

- **Auto-link e-mailů** — když klient pošle e-mail z adresy, kterou má přiřazenou ke svému profilu, Twenty automaticky přiřadí e-mail i kalendářové události k záznamu osoby (nativní funkce Gmail / Outlook sync, my ji nakonfigurujeme).
- **Vazba na Místo (Field Service)** — u servisních firem můžete označit, kdo je „kontaktní osobou na konkrétním místě" — jiný kontakt na hlavní centrále, jiný v provozovně. Toto je naše custom rozšíření datového modelu.
- **Časová osa interakcí** — všechny e-maily, telefonáty, schůzky a poznámky k osobě na jednom místě, automaticky chronologicky.
- **Role a oprávnění** — pokud potřebujete, aby technik viděl jen kontaktní osoby na svých zakázkách a ne celý adresář, je to řešitelné přes role-based permissions.

### Jak začít

1. V navigaci klikněte na **Kontaktní osoby** (People)
2. **+ Nová osoba** → jméno, e-mail, telefon
3. Přiřaďte ke klientovi (Companies) → osoba se objeví na kartě klienta
4. Připojte k Místu (volitelné, pro Field Service)

### Pro detailní návod
→ [Twenty docs (česky): Datový model — People](https://docs.twenty.com/l/cs/user-guide/data-model/overview)

---

## 3. Obchodní případ (Opportunities)

### K čemu je
Obchodní případ je samostatná příležitost — konkrétní obchod, který se snažíte uzavřít. Sleduje se v něm fáze prodejního cyklu, předpokládaná hodnota, výsledek (Získáno / Ztraceno) a vazby na klienta, kontakty a aktivity.

### Co u nás navíc

- **Vazba na Nabídku, Objednávku a Zakázku** — Twenty má nativně Opportunity, ale nemá Nabídku ani Zakázku. My obojí přidáme jako custom objekty s plnými relacemi: z karty Obchodního případu vidíte všechny související nabídky, schválené objednávky a fyzické zakázky (výjezdy, servisy).
- **Auto-vytvoření z kvalifikovaného Leadu** — když dispečer označí Lead jako „Kvalifikovaný", Twenty workflow **automaticky vytvoří** Klienta, Kontaktní osobu i Obchodní případ. Bez ručního přepisování.
- **Kanban view per fáze** — vizuální pipeline (Nový → Zpracování → Návrh → Dokončení) s drag-and-drop mezi fázemi.
- **Předpokládaná hodnota + výsledek** — sledování očekávaného výnosu na úrovni jednotlivého případu i celého pipelinu, pro reporting a forecast.
- **Žádné limity** — neomezený počet otevřených i historických případů. Standardní pro Twenty (Pro / Org / Selfhost).

### Jak začít

1. V navigaci klikněte na **Obchodní případy** (Opportunities)
2. **+ Nový případ** → název, klient, předpokládaná hodnota, fáze
3. Přidejte aktivity (Notes, Tasks) — sleduje se historie
4. Po výhře označte výsledek „Získáno" → Twenty workflow automaticky vytvoří Nabídku/Objednávku (nastavíme dle vašeho procesu)

### Pro detailní návod
→ [Twenty docs (česky): Datový model — Opportunities](https://docs.twenty.com/l/cs/user-guide/data-model/overview)

---

## Design poznámka pro web

Tyto 3 boxy lze prezentovat jako:

**Varianta A (doporučená pro MVP):** sekce na `/co-umi/` page, jeden box pod druhým, každý ~250 slov. Lehké, jeden URL, žádné dodatečné menu položky.

**Varianta B (pokud SEO):** podstránky `/co-umi/klient/`, `/co-umi/kontakt/`, `/co-umi/obchodni-pripad/` — každá vlastní URL pro vyhledávače, breadcrumb navigace, „další entita →" odkazy. Vyšší produkční náklad, vyšší SEO výnos.

**Co rozhodně NE:**
- ❌ Plný tutoriálový obsah typu „klikněte tady, pak tam" — to dělá Twenty docs lépe a aktualizuje se to s každým release
- ❌ Screenshoty UI — stárnou s každou major verzí Twenty
- ❌ Detail field-by-field popis — opět commodity, low value-add

Naše hodnota = **proč to chtít** + **kde to máme rozšířené** + **link kam dál**.

---

## Co potenciálně přidat později (NE v MVP)

Pokud bude SEO traffic na entity stránky, lze rozšířit o:

- **Příklad konkrétního FS use case** per entita (např. „Klient v HVAC firmě s 5 lokalitami")
- **Video walk-through** (max 2 min, fokus na naše rozšíření, ne na základní použití)
- **Stažení vzorové datové struktury** (CSV šablona pro import)

Tyto věci ale **nemají smysl, dokud nemáme reálné klienty** — bez příběhu vyznívají uměle.
