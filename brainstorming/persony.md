# Persony — cílové segmenty

> **První vertikála:** Field Service (servisní firmy s techniky v terénu).
> **Explicitně mimo scope:** realitní makléři a další non-FS segmenty.
>
> Tento dokument je pracovní draft. Po validaci s reálnými leady ho upřesníme — některé segmenty vypadnou, jiné se rozštěpí, hypotézy se přepíšou na zjištění.

---

## Proč Field Service jako první

- Máme oborové know-how z paralelního MDA byznysu (procesy, datový model, typické integrace) — můžeme ho přenést a urychlit nasazení Twenty.
- Field Service má dost společných procesů napříč obory (zakázka → výjezd → výkaz → fakturace → servisní historie zařízení), aby se vyplatilo mít „polotovar" který se na míru doladí pro konkrétní obor.
- Existují klienti pro které je MDA overkill, ale generický CRM (Pipedrive, Raynet) jim zase neřeší terénní část.

---

## Co rozumíme „Field Service" v kontextu Twenty

Klient řídí tým techniků kteří **vyjíždějí k zákazníkům** za účelem instalace, servisu, revize nebo údržby. Typicky potřebuje v jednom systému:

- Kartu zákazníka + jeho **zařízení/objektů** (servisní historie na úrovni věci, ne jen kontaktu)
- Plánování zakázek/výjezdů a přiřazení technika
- Výkaz práce (čas, materiál, ujeté km) → podklad pro fakturaci
- Servisní/protokoly/revizní zprávy (PDF, podpis)
- Pravidelné servisy / revize s termíny a notifikacemi
- Reklamace, záruky, evidence náhradních dílů

To je víc než klasický „sales CRM" — Twenty je tu jako **app framework** (custom objekty Zařízení, Zakázka, Výjezd, Revize), ne jen jako kontakt-management.

---

## Kandidátní segmenty (pracovní seznam)

Označení: **A** = nejvíc fit, **B** = pravděpodobně fit, **C** = potřebuje validovat.

### A1. Servis HVAC, klimatizace, tepelná čerpadla
- **Profil:** 3–20 lidí, často majitel + 2–10 techniků + admin/koordinátor.
- **Procesy:** instalace → záruční servis → pozáruční → pravidelné revize chladiv (F-plyny). Sezónnost.
- **Bolesti:** evidence chladiv pro hlášení, plánování revizí, kdy komu volat, výkazy z terénu na papíře.
- **Dnes používají:** Excel + papír + případně Money/Pohoda. Občas FSM (mServis, Servis24, FixIT) nebo nic.
- **Proč Twenty fit (hypotéza):** custom objekt Zařízení s typem chladiva a periodicitou revize, propojení s kartou klienta a výjezdy, postupně AI pro extrakci z protokolů.
- **Otevřené otázky:** trh už má specializované FSM — jak proti nim pozici stavíme? Kde Twenty vyhrává (cena? customizace? vlastnictví dat?)?

### A2. Revizní technici (elektro / plyn / hasicí přístroje / hromosvody / výtahy)
- **Profil:** často OSVČ nebo mikrofirmy 1–10 lidí. Heavy paperwork, certifikace, lhůty.
- **Procesy:** plán revizí → výjezd → revizní zpráva (PDF s razítkem) → evidence pro klienta i pro úřady.
- **Bolesti:** sledování lhůt napříč klienty, generování zpráv, archivace, dohledatelnost při kontrole.
- **Dnes používají:** Excel + Word šablony + Dropbox. Specializovaný SW (RevizeOnline, Revize.eu) bývá uzavřený a drahý.
- **Proč Twenty fit (hypotéza):** custom objekty Revidovaný objekt + Revize, generování PDF z šablony, automatické připomínky lhůt.
- **Otevřené otázky:** jak moc je důležitý oficiální formát zprávy (musí jít z certifikovaného SW)? Lze Twenty workflow + externí PDF služba (volaná přes HTTP Request akci) pokrýt formátové nároky?

### A3. Servis výrobních a strojních zařízení (B2B, technici u zákazníka)
- **Profil:** 5–50 lidí, typicky technický servis pro výrobní podniky (potravinářství, plasty, obrábění).
- **Procesy:** smluvní servis + ad-hoc opravy, evidence dílů, SLA reakční doby.
- **Bolesti:** evidence sériových čísel + servisní historie strojů, vykazování času pro fakturaci po hodinách, díly.
- **Dnes používají:** často interní řešení v Excelu nebo lehký ERP. MDA jim může být velký.
- **Proč Twenty fit (hypotéza):** custom objekty Stroj + Servisní zásah, integrace s fakturačním SW, později skladová evidence dílů.

### B1. IT servis / onsite podpora pro byznys
- **Profil:** 5–30 lidí, helpdesk + technici v terénu.
- **Procesy:** ticketing + SLA + výjezdy + smluvní paušály + ad-hoc.
- **Bolesti:** propojení tiketů s firmami a smlouvami, vykazování pro klienta.
- **Dnes používají:** Zammad, Freshdesk, OTRS, někdy ConnectWise.
- **Proč Twenty fit (hypotéza):** ticketing + CRM + smlouvy v jednom místě, custom dashboardy.
- **Riziko:** specializované PSA nástroje (HaloPSA, ConnectWise) jsou silná konkurence — kde vyhrajeme?

### B2. Bezpečnostní systémy (EZS, EPS, kamery)
- **Profil:** 5–25 lidí, instalace + servis + monitorovací centrum.
- **Procesy:** instalace projektu → pravidelné kontroly → servisní výjezdy → evidence komponent.
- **Otevřené otázky:** jak moc je důležitá integrace s monitorovacím SW? To bude pravděpodobně mimo scope Twenty.

### C1. Servis kancelářské techniky / kávovarů / vending
- **Profil:** 5–30 lidí, pravidelné servisy + spotřební materiál + B2B.
- Pravděpodobně dobrý fit, ale potřebujeme reálnou poptávku abychom validovali.

### C2. Facility management / údržba budov
- Široký pojem — některé firmy ano, jiné ne. Validovat po segmentech (HVAC údržba, úklid, drobná řemesla).

---

## Společné role v Field Service firmách

Nezávisle na segmentu typicky narazíme na tyto role — copy/CTA na webu by měl mluvit zejména k **rozhodovateli**, ale ukázat hodnotu i pro **uživatele**:

| Role | Pozice ve firmě | Co je trápí | Co od CRM čeká |
|---|---|---|---|
| **Rozhodovatel** | majitel / jednatel | „nemám přehled, co se děje", neefektivita, papíry | dashboard, zisk z výjezdů, ne-přepláceno SW |
| **Koordinátor / dispečer** | admin / asistentka | rozdělování práce, telefony, papíry | plán výjezdů, fronta zakázek, kontakty |
| **Technik v terénu** | servisák | papírování, hledání historie u zákazníka | mobilní výkaz, historie zařízení, fotky |
| **Účetní / fakturant** | externí nebo in-house | dohledávání podkladů pro fakturu | přesný výkaz hodin/materiálu, export |

---

## Otevřené otázky k validaci (status k 2026-05)

1. ~~**Které segmenty oslovíme jako první?**~~ ✅ **Vyřešeno:** Phase 1 oborové podstránky pro **A1 HVAC, A2 Revize, A3 Servis strojů**. Detail v `oborove-podstranky.md`. Ostatní (B1, B2, C1, C2) zůstávají v zásobě.
2. **Máme konkrétní leady / piloty** v některém segmentu? — operativní otázka, neblokuje launch webu (po launchi se uvidí podle traffic).
3. **Kde nasazujeme Twenty vs. MDA?** — open: navrženo „Twenty pro menší / oborově specifické / postupné rolloutu, MDA pro M365 ekosystém / enterprise scope" (`twentycrm-strategie.md`), v praxi se uvidí.
4. ~~**Jak řešíme mobilního technika?**~~ ✅ **Vyřešeno (2026-05):** PWA funguje. Komunikujeme jako přednost (žádný App Store, instant updates).
5. **Generování PDF protokolů/revizí** — implementační rozhodnutí, default = Twenty workflow + externí PDF službu (PDFShift / DocRaptor). Definitivní volba per klient.
6. **Diferenciátor proti specializovaným FSM** v jednotlivých oborech — zachycuje `oborove-podstranky.md` per segment.
7. ~~**Reference z MDA světa**~~ ✅ **Vyřešeno:** používáme **anonymizovaně** s atribucí na agenturu („Servisní firma se 12 techniky, HVAC obor"), umístění `/o-nas/` jako důvěryhodnost agentury, ne jako reference Twenty produktu.
8. ~~**Role-based přístup pro techniky**~~ ✅ **Vyřešeno (2026-05):** funguje. Selfhost zdarma, Cloud na Organization plánu.
