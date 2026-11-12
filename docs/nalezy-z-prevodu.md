# Obsahové nálezy z převodu (fáze 2, 2026-11-12)

Při převodu se texty **neměnily** (1:1 se starým webem). Tohle jsou místa, kterých si převodníci všimli
a která stojí za rozhodnutí. Seřazeno od nejzávažnějšího.

## 1. Pravdivost a rizika (CLAUDE.md pravidla 3c, pravdivost)

- **Případové studie s čísly a citáty.** /pro-servisni-firmy/ a 4 obory pod /obory/
  (realizace, velkoobchod, výroba na zakázku, profesní služby) mají „anonymizované, ale realistické“ studie
  s konkrétními metrikami („zrychleno o cca 40 %“, „do 3 dnů“) a citáty zákazníků. Pravidlo 3c zakazuje
  vydávat vymyšlené případové studie za skutečné. Rozhodnout: přeznačit na „modelová situace“, odstranit
  čísla a citáty, nebo nechat.
- **Zastaralá fakta o Twenty** (web uvádí stav z května 2026, aktuální je v2.57 z listopadu 2026):
  - ~~/agentske-crm/ „Stav k 23. 5. 2026“, „od verze v2.6.0“, AI kroky ve workflow jako „připravuje se“~~ — **opraveno 2026-11-12:**
    sekce „Co už funguje a co se připravuje“ se vykresluje z registru funkcí (`::stav-funkci`). Pryč i tvrzení „Twenty agentovi
    předem popíše, co se po jeho akci stane“ — v2.6.0 přineslo jen označení nástrojů MCP na čtení / změnu dat (PR #20672),
    a „konkrétní situace z firem, které dnes Twenty s AI používají“ → „ukázkové situace“ (pravidlo 3c).
  - /co-umi/ „Přílohy e-mailů výrobce dodává v průběhu roku 2026“.
  - srovnávací stránky: ceny konkurence a „Datum aktualizace: květen 2026“.
- ~~Cena Twenty Cloud Organization 19 USD (~440 Kč)~~ — **opraveno 2026-11-12 na 39 USD (~900 Kč)** všude
  (pricing.json, 8 stránek, FAQ, llms.txt; kurz ~23 Kč/USD jako ve výpočtech webu). Přepočítáno: bod zlomu s Organization
  „od dvou uživatelů", 10 lidí ~9 000 Kč/měs, srovnání s Vtigerem (Organization je dražší než Vtiger One) a EspoCRM.
  Self-host Organization (licence pro vlastní server, cena neuvedena) se nemění.
- ~~„Vidím jen své záznamy“, SSO a audit log „jen v Cloud Organization“~~ — **opraveno 2026-11-12** na „tarif Organization —
  v cloudu i jako licence pro vlastní server … ozvěte se“. Otevřené zůstává obchodní rozhodnutí, zda licenci aktivně nabízet.
- ~~Odkazy na českou dokumentaci Twenty `docs.twenty.com/l/cs/…`~~ — **přepsáno 2026-11-12 na `/cs/…`** všude kromě VOP
  (`obchodni-podminky.md` bod d — smluvní text; odkaz funguje přes přesměrování, `npm run zdroje:kontrola` ho hlásí).
- **Tvrzení o konkurenci bez zdroje:** ~~/agentske-crm/ (Raynet, Pipedrive, Salesforce „napodobují kliknutí“)~~ — odstraněno
  2026-11-12 (Raynet i Pipedrive mají MCP server, viz `docs/vyzkum/2026-11-12-trendy-agentske-crm.md`),
  /pro-servisni-firmy/revize/ (RevizeOnline, Revize.eu „500+ Kč/měs/uživatel“), /stroje/ (HaloPSA, ConnectWise),
  /open-source-crm-srovnani/twenty-vs-odoo-crm/ (nasazení Odoo 100–500 tis. Kč).
- **Skutečná firma v ukázce:** /pro-servisni-firmy/stroje/ používá „Tatra Trucks a.s.“.

## 2. Vnitřní rozpory

- /pro-servisni-firmy/ píše „Devět typů záznamů“, `reseni.json` jich má 11.
- /obory/ „Co dodáváme společně“: „Napojení na Fakturoid, iDoklad nebo Pohodu“ × /napojeni-na-fakturaci/:
  „není součástí základní dodávky“. Podobně blok „Proč hotová platforma“ („propojení s … Fakturoidem“).
- VOP: description „Účinnost 1. června 2026“ × text „Účinnost: 17. srpna 2026“.
- /bezpecnost/: SSO přes Google/Microsoft jako dostupné × /cloud-vs-selfhost/: SSO „jen v Cloud Organization“.
- /cloud-vs-selfhost/: licence „~200 Kč“ vs. „~207 Kč“ v příkladu; řádek „Role na úrovni typů záznamů a polí“ – „V obou variantách“ ve sloupci cloud.
- /migrace/ „úspora cca 84 000 Kč“ × /migrace-z-konkurence/ 84 120 Kč; ukázkový výpočet má čísla natvrdo (při změně ceníku nebude sedět).
- /migrace-z-konkurence/ (doporučuje Sales) zmiňuje typy Místo, Zařízení, Zakázka a „školení dispečera + techniků“.
- /otazky/ hero radí „klepněte na ‚Napsat‘“, tlačítko se tak nejmenuje.
- Blok „Které řešení pro vás“ říká „Pro tento obor doporučujeme“ i na produktových stránkách.

## 3. Překlepy a jazyk (rychlé opravy)

| Stránka | Místo |
|---|---|
| / | „co dnes hořet“, chybí čárka před „jestli“ |
| /co-umi/ | „nás teoreticky nic nebránilo“ (nám), „fortně“, mezera před tečkou, „Neomezené Účty“ |
| /jak-to-vypada-v-praxi/ | „nakupní ceny“ |
| /o-nas/ | „projděme si … ukážeme“ (osoby), čárka před „jestli“ |
| /crm-open-source-cesky/ | „ale aplikační platformu“, „oficiální oficiální“, „4. Český podpora“ |
| /open-source-crm-srovnani/ | „ať si rozhodnete“, „Proč v srovnání“, „honest pohled“ |
| twenty-vs-suitecrm | „od roku 2013, fork … z roku 2014“, „weekendový“, „maintaina“, „IMAP (jen odchozí)“, „z SuiteCRM Store“ |
| twenty-vs-espocrm, -vtiger, -odoo | „Twenty Rozšíření Twenty“ (zdvojené); vtiger „příl ohy“; odoo „dělá výhodný teprve když“ |
| /pro-servisni-firmy/hvac/ | „mlecího kotouče“ (díl kávovaru, kopie z gastro), „Wenceslas square 14“ |
| /kotle-a-plynova-zarizeni/ | „mezi tím“ → „mezitím“ |
| /chladici-technika/ | „oborového software“ → „softwaru“ |
| /obory/vyroba-na-zakazku/ | „v vlastním Excelu“ |
| /migrace/ | „nedávají v novém smysl“ (chybí slovo) |
| /migrace-z-excelu/ | „v Outlook“, „přikývlo“, „v 3 zdrojích“ |
| /bezpecnost/ | „Bez prodejní oklikou“, „10. červen 2026“ |
| /sla-balicky/ | „opravná oprava“, „NEní“ |
| více stránek | „Generický/běžný CRM“ (rod), anglicismy „ARES auto-fill“, „Workflows“, „timeline“ |

**Stav 2026-11-12: opraveno 48 míst na 22 stránkách** (tabulka výše). Opravené věty jsou v
`docs/parita-vyjimky.json` jako schválené rozdíly proti starému webu.

Záměrně neopraveno, protože jde o obsah, ne o překlep:
- /pro-servisni-firmy/hvac/: „mlecího kotouče“ (díl kávovaru) a „Wenceslas square 14“.
- twenty-vs-suitecrm: letopočty „od roku 2013, fork … z roku 2014“ a „IMAP (jen odchozí)“.
- Míchané uvozovky a zbývající anglicismy („ARES auto-fill“, „Workflows“, „timeline“).

Ke kontrole: na /co-umi/ „fortně upravit“ (slovo nedává smysl) je teď „po svém upravit“ — ověřte, že to sedí záměru.

## 4. Co se při převodu změnilo ve formě (ne v textu)

- Emoji v obsahu se vykreslují jako ikony Lucide ve stylu Payday (tmavý podklad, bílá ikona). V Markdownu
  zůstávají emoji, mapování je v `src/lib/ikony.mjs`.

- Barevné rámečky karet (zelená/oranžová linka) se v mřížkách nepřenesly — karty mají jednotný styl Payday.
- /otazky/: filtrovací tlačítka kategorií (Alpine.js) nahradil statický rozcestník s kotvami.
- Tiskové stránky /prezentace-hvac/ a /letak-hvac/ jsou převzaté 1:1 jako statické HTML i s původními styly.
