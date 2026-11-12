# Scope fáze 1 — co dodáváme v Twenty implementaci

> **Princip:** v první fázi zrcadlíme procesy, které dnes dodáváme v MDA řešení (Bohemia CRM Professional na Microsoft Power Platform). Důvod: máme je ověřené v praxi, klienti je akceptovali, datový model funguje. Nepřidáváme nic na zelené louce — pouze portujeme do Twenty to, co Twenty reálně umožňuje.
>
> **Zdroj:** `https://www.bohemiacrm.cz/návody/pracovní-procesy` (fetch 2026-05-06)
>
> ⚠️ **Tento dokument popisuje cílový scope, ne aktuální stav implementace.** Mapování „co je v Twenty nativně, co postavíme přes built-in workflow engine, kde je gap" je následující krok — výstupem je `procesy-mapovani-twenty.md`. Než cokoliv přejde do webového textu, musí být ověřeno proti `docs.twenty.com` / GitHubu (viz pravidlo o pravdivosti v `twentycrm-strategie.md`).

---

## Pozorování ze zdroje

1. **Field Service je explicitně zmíněn** přímo u entity *Zakázka* („Field Service orientace"). Volba FS jako první vertikály je konzistentní s tím, co už dnes dodáváme.
2. **AI featury chybí.** V seznamu pracovních procesů na bohemiacrm.cz **není** žádná zmínka o AI shrnutích, vektorových polích, LLM integracích apod. Posiluje to podezření, že AI sekce na starém twentycrm.cz byly aspirativní marketing — pro Phase 1 je ze scope vyloučíme.
3. **Datový řetězec je end-to-end propojen:** Lead → Klient → Obchodní případ → Nabídka → Objednávka → Zakázka → Zařízení (servisní historie). To je hlavní hodnota — ne jednotlivé moduly, ale jejich propojení.
4. **Microsoft 365 / Outlook integrace** je v MDA světě dána zdarma — v Twenty světě to je nontrivial (e-mail sync je jeden z mála důvodů, proč Twenty Cloud nasadit místo selfhost; viz strategie).

---

## Datový model (entity, vztahy)

| Entita | Klíčová pole | Vztahy | Pozn. |
|---|---|---|---|
| **Klient** | B2B/B2C, IČO/DIČ, vlastník | → Kontaktní osoba, Místo, Obchodní případ, Zakázka, Zařízení | Kořen řetězce. ARES auto-fill přes IČO. |
| **Kontaktní osoba** | jméno, role, kontakty | → Klient | B2B kontakty + B2C jednotlivci. |
| **Lead** | zdroj, hodnocení potenciálu, status | → (po kvalifikaci) Klient + Obchodní případ | Status: Nový → Kontaktovaný → Kvalifikovaný. |
| **Obchodní případ** | předpokládaná hodnota, výsledek (Získáno/Ztraceno) | → Klient, Kontaktní osoba, Nabídka, Objednávka | Procesní lišta: Nový → Zpracování → Návrh → Dokončení. |
| **Nabídka / Objednávka** | položky, cena, DPH, místo doručení | → Obchodní případ, Produkty, Klient | Třífázový: Vytvoření → Zpracování → Fakturace. Schválená nabídka → objednávka. |
| **Položka objednávky** | množství, cena | → Objednávka, Produkt | |
| **Produkt** | kód, kategorie, výrobce, cena, DPH, obrázek | → Položka objednávky, Zařízení (model) | Fyzické produkty + služby. Deaktivace, ne mazání. |
| **Místo** | adresa, kontaktní osoba na místě | → Klient, Zařízení, Zakázka | Více míst na klienta (síť poboček/kaváren). |
| **Zařízení** | s.č., model | → Klient, Místo, Zakázka, Produkt (model) | Servisní historie přes vazbu na zakázky. |
| **Zakázka** | termín, technik, materiál, podpis | → Klient, Místo, Zařízení, Zakázkový list | Field Service entita. Fáze: Nová → Plánování → Realizace → Dokončení. |

**Klíčový princip:** `Zařízení` je samostatná entita (ne jen pole na klientovi), aby šlo vést servisní historii „věci" napříč různými zakázkami. To je **základ Field Service hodnoty** — tohle generický CRM (Raynet, HubSpot) nemá.

---

## Pracovní procesy (9 oblastí, které portujeme)

### 1. Správa klientů a kontaktních osob
- Založení + úprava klienta (B2B/B2C)
- ARES auto-fill přes IČO (české firmy)
- Adresář kontaktních osob s propojením na klienta
- Historie interakcí na časové ose

### 2. Správa leadů
- Záznam poptávky + zdroj (Veletrh, Web, …)
- Hodnocení potenciálu (Velký zájem / Se zájmem / Studený)
- Status flow: Nový → Kontaktovaný → Kvalifikovaný
- Po kvalifikaci automatické vytvoření Klienta + Obchodního případu

### 3. Vedení obchodních případů
- Procesní lišta s fázemi (Nový → Zpracování → Návrh → Dokončení)
- Předpokládaná hodnota + finální výsledek (Získáno/Ztraceno)
- Časová osa pro záznam aktivit
- Propojení s nabídkami/objednávkami

### 4. Tvorba nabídek a objednávek
- Položky, ceny, DPH (auto-výpočet)
- Schválená nabídka → objednávka (převod)
- Třífázový proces (Vytvoření → Zpracování → Fakturace)
- Evidence místa doručení, interní komentáře

### 5. Plánování a realizace zakázek (Field Service)
- Plánování termínu + přiřazení technika
- Vazba na zařízení a místo
- Čtyřfázový proces (Nová → Plánování → Realizace → Dokončení)
- Zakázkový list s podpisem
- Evidence spotřebovaného materiálu

### 6. Správa katalogu produktů
- Produkty (fyzické) + služby
- Kategorie, výrobce, cena, DPH
- Obrázky, unikátní kódy
- Deaktivace místo mazání ukončených produktů

### 7. Evidence míst
- Adresy fyzických lokací zařízení klientů
- Kontaktní osoba na místě
- Více míst na klienta (např. síť kaváren)
- Vazba na zařízení a zakázky

### 8. Správa zařízení a servisní historie
- Sériové číslo + model
- Lokace (Místo) + vlastník (Klient)
- Kompletní servisní historie přes vazbu na zakázky
- (V MDA řešení nemá samostatný návod — entita je, ale UX je rozprostřený přes Klienta a Zakázku)

### 9. Personalizace zobrazení
- Vlastní filtry, sloupce, řazení
- Uložená zobrazení per uživatel
- Sdílení zobrazení v týmu
- Kombinace více filtrů

---

## Klíčové automatizace a integrace v Phase 1

- **ARES auto-fill** přes IČO (CZ firmy) — must-have, klienti to očekávají
- **E-mail sync s Outlook / Microsoft 365** — v MDA světě nativní, v Twenty řešíme jak (Twenty má e-mail sync, ale rozsah a robustnost je třeba ověřit)
- **Procesní lišty / pipeline** s vizuálním stavem fáze
- **Časová osa interakcí** na úrovni klienta + obchodního případu
- **Auto-propojování entit** v řetězci Lead → Klient → Obchodní případ → Nabídka → Objednávka → Zakázka → Zařízení
- **Auto-výpočty** (cena s DPH, sumy)
- **Vlastní zobrazení** s filtry + sdílení v týmu

---

## Co je vědomě **mimo** scope Phase 1

- **AI featury** (shrnutí komunikace, vektorová pole, LLM agenti) — neexistují v MDA dodávce, nezahrnují se do Twenty Phase 1. Můžou přijít v Phase 2 jako diferenciátor.
- **Pokročilá fakturace** — propojení s iDoklad/Fakturoid/Pohoda na úrovni vystavení faktury. V MDA scope je „Fakturace" jako fáze objednávky, ale aktivita směrem ven (vystavení dokladu) je samostatný projekt.
- **Skladová evidence** dílů na zařízeních — jen evidence spotřebovaného materiálu na zakázce, ne plnohodnotný sklad.
- ~~**Mobilní aplikace pro technika**~~ ✅ **Vyřešeno (2026-05):** Twenty PWA funguje, instalujeme na home screen prohlížeče. Není to nativní app, ale pro Field Service v terénu dostačující — fotoaparát, formuláře, online přístup k historii. Pokročilý offline režim by byl Phase 2.
- **Reporting / BI** nad rámec uložených zobrazení.

---

## Návazné kroky

1. **Verifikace Twenty schopností** proti `docs.twenty.com` + GitHub:
    - Jak Twenty řeší custom objekty se vztahy (1:N, N:M) — pokrývá to model výše?
    - Workflow / automation engine — pokrývá procesní lišty + auto-vytváření záznamů + auto-výpočty?
    - E-mail sync — kterou službu (Gmail, Outlook, IMAP) podporuje a do jaké hloubky?
    - Custom views / saved filters — feature parity s MDA?
2. **Mapování proces ↔ Twenty schopnost** s traffic-light statusem:
    - 🟢 nativně v Twenty
    - 🟦 postavíme přes Twenty built-in workflow (Code / HTTP Request)
    - 🟠 vlastní rozšíření / custom kód
    - 🔴 zatím gap — buď čekáme na Twenty roadmap, nebo budujeme sami
3. **ARES + Outlook integrace** — implementace přes Twenty built-in workflow (HTTP Request akce na ARES API, Outlook nativní e-mail sync).
