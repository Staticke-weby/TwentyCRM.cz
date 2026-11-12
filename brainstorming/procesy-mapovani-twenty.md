# MDA procesy ↔ Twenty schopnosti — gap analysis

> **Účel:** Pro každý proces / featuru z `scope-faze-1.md` (zrcadlení MDA dodávky) určit, zda Twenty pokrývá, a pokud ano, jak (nativně / přes vestavěný workflow / custom code / gap).
>
> **Legenda statusu:**
> - 🟢 **Native:** funguje out-of-the-box, žádný vývoj
> - 🟦 **Twenty workflow:** postavíme uvnitř Twenty pomocí built-in workflow engine (Code, HTTP Request, Schedule, Iterator, Filter, …) — žádný externí nástroj, automatizace jsou součástí CRM
> - 🟡 **Omezení / kompromis:** Twenty pokrývá, ale s limitem nebo specifickou konfigurací (např. e-mail sync 5min polling, jen People/Companies)
> - 🟠 **Custom code:** vlastní rozšíření / SDK app mimo workflow engine
> - 🔴 **Gap:** Twenty zatím neumí, čekáme na roadmap nebo neimplementujeme
>
> Zdroj schopností: `twenty-capabilities.md` (sourced z oficiálních docs, fetch 2026-05-06).

---

## 1. Datový model (entity z MDA)

| MDA entita | Twenty mapování | Status | Pozn. |
|---|---|---|---|
| Klient (B2B/B2C) | Companies (B2B) + People (B2C) | 🟢 | Nativně 5 standard objektů zahrnuje |
| Kontaktní osoba | People | 🟢 | Vazba People → Companies nativně |
| Lead | Custom object „Lead" | 🟦 | Twenty nemá samostatný Lead objekt, postavíme jako custom (nebo používáme „People se statusem"); rozhodnout v Phase 1 |
| Obchodní případ | Opportunities | 🟢 | Nativně |
| Nabídka / Objednávka | Custom objekty „Nabídka", „Objednávka" + „Položka" | 🟦 | Twenty nemá nativní docs/quote — postavíme jako custom |
| Produkt | Custom object „Produkt" | 🟦 | Custom |
| Místo | Custom object „Místo" | 🟦 | Custom |
| Zařízení | Custom object „Zařízení" | 🟦 | Custom — **toto je klíčový Field Service diferenciátor** |
| Zakázka (Field Service) | Custom object „Zakázka" | 🟦 | Custom — vazba na Zařízení, Místo, Klient, Technik |

**Závěr:** Datový model MDA je v Twenty **plně realizovatelný** — 3 z 9 entit jsou nativní, zbytek je custom (čehož je Twenty stavěn). Žádný blocker.

**Známé omezení:** E-mail/calendar sync se automaticky linkuje pouze na People + Companies. Pro vazbu komunikace na Zakázku / Zařízení postavíme custom workflow (linkne e-mail/event na související Zakázku podle kontextu).

---

## 2. Pracovní procesy (9 oblastí z MDA scope)

### Proces 1 — Správa klientů a kontaktních osob

| Sub-feature | Twenty | Status |
|---|---|---|
| Založení/úprava klienta (B2B/B2C) | Companies + People | 🟢 |
| ARES auto-fill přes IČO | Není nativně | 🟦 — postavit Workflow s Manual triggerem nebo onCreate Companies → HTTP Request na ARES API → Update Record |
| Adresář kontaktních osob | People s relation na Companies | 🟢 |
| Časová osa interakcí | Notes + Tasks na záznamu, e-maily přes sync | 🟢 / 🟡 — zlomené pro custom objekty (Zakázka/Zařízení) |

### Proces 2 — Správa leadů

| Sub-feature | Twenty | Status |
|---|---|---|
| Záznam leadu se zdrojem | Custom object „Lead" se selectem „Zdroj" | 🟦 |
| Hodnocení potenciálu | Pole select „Potenciál" | 🟢 |
| Status flow | Workflow „record updated → if status==Kvalifikovaný" | 🟦 |
| Auto-vytvoření Klienta + Obchodního případu po kvalifikaci | Workflow Action „Create Record" (Companies) + „Create Record" (Opportunities) | 🟦 |

> Toto je tzv. „Lead conversion" pattern. V Twenty postavitelný v ~hodině díky Code + Create Record akcím.

### Proces 3 — Vedení obchodních případů

| Sub-feature | Twenty | Status |
|---|---|---|
| Procesní lišta s fázemi | Status pole + Kanban view per stage | 🟢 |
| Předpokládaná hodnota + výsledek | Standardní pole na Opportunities | 🟢 |
| Časová osa aktivit | Notes + Tasks + e-mail sync | 🟢 |
| Propojení s nabídkami/objednávkami | Relation field na Opportunity → Custom Nabídka/Objednávka | 🟦 |

### Proces 4 — Tvorba nabídek a objednávek

| Sub-feature | Twenty | Status |
|---|---|---|
| Položky, ceny, DPH, auto-výpočet | Custom objekt Nabídka/Objednávka + relation na Položku + Code action pro sumy | 🟦 |
| Schválená nabídka → objednávka | Workflow „status==Schváleno → Create Record (Objednávka)" | 🟦 |
| Třífázový status (Vytvoření → Zpracování → Fakturace) | Status pole + workflow pravidla | 🟦 |
| Vystavení faktury do Fakturoidu/iDokladu/Pohody | Není nativně | 🟦 — Twenty workflow s HTTP Request akcí volá API Fakturoidu / iDokladu / Pohody přímo (Phase 1 = základní; pokročilá obousměrná synchronizace = Phase 2) |

### Proces 5 — Plánování a realizace zakázek (Field Service)

| Sub-feature | Twenty | Status |
|---|---|---|
| Custom Zakázka s fázemi (Nová → Plánování → Realizace → Dokončení) | Custom object + status field + Kanban | 🟦 |
| Plánování termínu + technik | Custom pole „Termín", relation na User | 🟢 / 🟦 |
| Vazba na Zařízení a Místo | Relation fields | 🟦 |
| Zakázkový list s podpisem | Není nativně | 🟦 — generovat PDF přes HTTP Request workflow (např. PDFShift, DocRaptor) nebo Code action; podpis přes externí formulář |
| Evidence spotřebovaného materiálu | Custom child objekt „Spotřebovaný díl" + relation | 🟦 |
| Mobilní použití technikem v terénu | Twenty PWA ✅ potvrzeno fungující v terénu (user test 2026-05) — instalace na home screen, fotky z kamery, online formuláře | 🟢 — žádný gap pro Phase 1 |
| **Calendar event pro výjezd → kalendář technika** | Calendar sync funguje na People/Companies; pro custom Zakázku přes workflow | 🟦 |

### Proces 6 — Správa katalogu produktů

| Sub-feature | Twenty | Status |
|---|---|---|
| Custom Produkt + kategorie + výrobce + cena + DPH | Custom object | 🟦 |
| Auto-výpočet ceny s DPH | Code action ve workflow nebo computed v UI | 🟦 |
| Deaktivace místo mazání | Boolean pole „Aktivní" + filtr ve view | 🟢 |
| Obrázky | Field type ⚪ (nezdokumentováno explicitně, ale pravděpodobné) | 🟦 |

### Proces 7 — Evidence míst

| Sub-feature | Twenty | Status |
|---|---|---|
| Custom Místo s adresou | Custom object | 🟦 |
| Více míst na klienta | 1:N relation Companies → Místo | 🟦 |
| Kontaktní osoba na místě | Relation Místo → People | 🟦 |
| Vazba na Zařízení a Zakázky | Relations | 🟦 |

### Proces 8 — Správa zařízení a servisní historie

| Sub-feature | Twenty | Status |
|---|---|---|
| Custom Zařízení s s.č., model, lokace | Custom object | 🟦 |
| Vazba na Klienta + Místo + Produkt (model) | Relations | 🟦 |
| Servisní historie přes Zakázky | View „Zakázky kde Zařízení == X" | 🟦 |

> **Toto je hlavní Field Service hodnota a v Twenty plně realizovatelná** přes custom objekty + relations. Generický CRM (Raynet) nemá samostatnou entitu Zařízení.

### Proces 9 — Personalizace zobrazení

| Sub-feature | Twenty | Status |
|---|---|---|
| Vlastní filtry, sloupce, řazení | Native views | 🟢 |
| Uložená zobrazení per uživatel | Native | 🟢 |
| Sdílení zobrazení v týmu | Native | 🟢 |
| Kombinace více filtrů | Native | 🟢 |

> Feature parity s MDA, žádný gap.

---

## 3. Klíčové automatizace

| Automatizace | Twenty řešení | Status |
|---|---|---|
| ARES auto-fill | Workflow: Manual trigger nebo onCreate Companies → HTTP Request `ares.gov.cz/ares/...` → Update Record | 🟦 |
| Outlook / Google Workspace e-mail sync | Native s 5min polling, jen People/Companies | 🟢 / 🟡 |
| Linkování e-mailu na Zakázku | Custom workflow podle subject/body parsing | 🟦 |
| Procesní lišty / pipeline | Status field + Kanban view | 🟢 |
| Časová osa interakcí | Native (Notes, Tasks, Emails) | 🟢 |
| Auto-propojování Lead → Klient → Případ → … → Zařízení | Workflow chain s Create Record akcemi | 🟦 |
| Auto-výpočty (cena s DPH, sumy položek) | Code action ve workflow | 🟦 |
| Vlastní views s filtry + sdílení | Native | 🟢 |

---

## 4. Souhrn po procesních oblastech

| Oblast | % nativně | % Twenty workflow | Gap | Phase 1 ready? |
|---|---|---|---|---|
| Klienti / Kontakty | 75 % | 25 % (ARES) | — | ✅ |
| Leady | 30 % | 70 % | — | ✅ |
| Obchodní případy | 70 % | 30 % | — | ✅ |
| Nabídky / Objednávky | 0 % | 90 % | — | ✅ (Phase 1 = základní fakturace přes Twenty workflow; pokročilá Phase 2) |
| Zakázky (Field Service) | 0 % | 80 % | Mobile + signature 🔴 | ⚠️ podle volby segmentu |
| Produkty | 0 % | 100 % | — | ✅ |
| Místa | 0 % | 100 % | — | ✅ |
| Zařízení / servisní historie | 0 % | 100 % | — | ✅ |
| Zobrazení / views | 100 % | 0 % | — | ✅ |

**Celkový závěr:** Twenty pokrývá MDA scope **na ~95 %** přes nativní featury + vestavěné workflows. Hlavní reálná omezení:

1. **Podpis na zakázkovém listu** — externí řešení (formulářová služba s podpisem).
2. **Pokročilá fakturace** — Phase 2.
3. **AI agenti** — Twenty roadmap, do Phase 1 nezahrnovat.

**Vyřešené otázky (původně otevřené):**
- ✅ **Mobilní použití technikem** — PWA potvrzeno fungující v terénu (user test 2026-05). Není nativní iOS/Android, ale instalace na home screen prohlížeče stačí pro Phase 1.
- ✅ **Role-based přístup** — technik vidí pouze své tabulky (Zakázka, Zařízení, Místo) a ne ostatní (Opportunities, finanční pole). Funguje v Selfhostu (open-source build) i v Cloud Organization plánu. Cloud Pro plan nemá role permissions — to je argument pro Selfhost u klientů s rozdělenými rolemi.

---

## 5. Jaký je realistický rozsah Phase 1 nasazení (34 990 Kč)

Přejatelné z MDA, doložitelné v Twenty, dokumentovatelné pro klienta:

✅ **Datový model FS** (8 custom objektů + 2 standard) s plnými relations
✅ **End-to-end procesní řetězec** Lead → Klient → Případ → Nabídka → Objednávka → Zakázka → Zařízení
✅ **Status flow + Kanban views** pro každý procesní krok
✅ **ARES integrace** přes Twenty workflow (HTTP Request)
✅ **Outlook nebo Gmail e-mail sync** (s vědomím limitu na People/Companies)
✅ **Vlastní views per role** (technik, dispečer, účetní)
✅ **Základní reporting** přes dashboards
✅ **Generování PDF zakázkového listu** přes HTTP Request → externí PDF služba
✅ **Školení uživatelů + dokumentace**

⏸ **Phase 2 (samostatný projekt):**
- Plnohodnotná fakturace (Fakturoid/iDoklad/Pohoda)
- AI agenti / shrnutí komunikace
- Pokročilý sklad
- Native mobile / offline mode pro techniky
- Sofistikované BI (Metabase, Power BI)
