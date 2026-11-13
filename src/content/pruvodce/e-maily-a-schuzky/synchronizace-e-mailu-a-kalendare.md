---
title: Jak dostat e-maily a schůzky ke klientovi do CRM bez přepisování
description: Twenty se připojí k poště a kalendáři každého uživatele a e-maily i schůzky s klienty ukládá k jejich kartě samo. Gmail a Microsoft 365, Seznam a další přes IMAP, sdílená schránka info@ — co se ukládá a co zůstane soukromé.
vMenu: E-maily a kalendář
draft: true
poradi: 1
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [komunikace]
funkce: [posta-kalendar, sdilena-schranka, ai-chat]
zdroje: [docs-posta, twenty-capabilities-mailbox, twenty-capabilities-calendar, twenty-capabilities-email-channels, docs-server-nastaveni, twenty-vydani]
---

**Twenty se připojí k poště a kalendáři každého uživatele a e-maily i schůzky s klienty ukládá
k jejich kartě samo — nikdo nic nepřepisuje ani nepřeposílá.** Gmail a Microsoft 365 se připojí
přihlášením účtem, a to i na vyhrazeném serveru; ostatní schránky přes otevřené standardy IMAP
a CalDAV.

Na kartě klienta, kontaktní osoby i obchodního případu je pak vidět celá historie: kdo komu co
napsal, kdy se potkali a s kým. A protože je v CRM, může s ní pracovat i AI.

## Co vám to umožní

- **Obchodník vidí historii klienta na jednom místě.** Než zvedne telefon, otevře kartu a vidí
  poslední e-maily a schůzky — svoje i kolegů — bez prohledávání schránky.
- **Komunikace zůstává firmě.** Když obchodník odejde nebo je na dovolené, jeho korespondence
  s klienty není zamčená v jeho schránce. Kolega naváže tam, kde skončil.
- **Kontakty se zakládají samy.** Z adres v e-mailech a pozvánkách vzniknou kontaktní osoby
  a podle domény se přiřadí ke klientovi. Když klient v CRM ještě není, Twenty ho založí.
- **Vedoucí vidí, o čem se jedná.** Otevře obchodní případ a vidí, kdy a o čem se s klientem
  naposledy psalo a kdy byla poslední schůzka — bez porady, na které se to zjišťuje.
- **AI má z čeho vycházet.** Shrnutí klienta nebo návrh dalšího kroku stojí na tom, co klient
  skutečně napsal. Viz [příprava na schůzku](/twenty/po-jednani/priprava-na-schuzku/).

## Jak to v Twenty funguje

Každý uživatel si v nastavení připojí svou schránku a kalendář — klidně několik najednou,
například firemní Microsoft 365 a vedle něj schránku u Seznamu. U každé schránky zvlášť si určí:

- **co uvidí kolegové** — jen odesílatele, příjemce a čas; k tomu předmět; nebo celý e-mail,
- **jestli se mají zakládat kontakty** — z odeslaných i přijatých e-mailů, jen z odeslaných,
  nebo vůbec,
- **které složky se ukládají** — třeba Doručená a Odeslaná pošta, bez osobních složek.

U kalendáře podobně: kolegové vidí buď celou událost, nebo jen čas a účastníky.

**Co se do CRM ukládá:** e-maily a schůzky s lidmi mimo vaši firmu. Synchronizace běží zhruba
každých pět minut; první načtení velké schránky trvá déle — podle výrobce asi 400 e-mailů
za minutu. E-maily se zobrazují u kontaktní osoby, u klienta (podle domény) a u obchodního
případu (podle klienta, ke kterému patří). Od verze 2.51 jde k obchodnímu případu tlačítkem
připojit i další vlákno nebo schůzku daného klienta a od verze 2.52 se e-mail odeslaný
z obchodního případu uloží k němu.

**Co zůstává mimo:**

- **pošta mezi kolegy** — e-maily, kde jsou všichni ze stejné domény, se ve výchozím nastavení
  neukládají (správce to může pro celou firmu zapnout),
- hromadné adresy a distribuční seznamy,
- složky, které vyřadíte, a pokud si to nastavíte, soukromé události z kalendáře.

Připojit jde skutečnou schránku, ne alias — adresu, která poštu jen přeposílá do jiné schránky.
Pošta z aliasu se ukládá přes hlavní schránku a z ověřeného aliasu jde z Twenty i odesílat.

Ze záznamu se dá rovnou jednat: odpovědět na e-mail, napsat nový nebo naplánovat schůzku.
Událost vznikne přímo v připojeném kalendáři a je navázaná na klienta, od kterého jste začali.

**Sdílená schránka info@ nebo servis@** se dá připojit dvěma způsoby. Buď jako běžná schránka
jednoho z uživatelů, nebo — od verze 2.4 — přeposíláním do takzvaného e-mailového kanálu, bez
připojování celé schránky. Twenty pak zprávy páruje ke klientům podle odesílatele. Obě cesty
popisuje článek [Sdílená schránka v CRM](/twenty/e-maily-a-schuzky/sdilena-schranka/).

Podrobnosti najdete v [dokumentaci výrobce](https://docs.twenty.com/cs/user-guide/calendar-emails/overview).

:::poznamka[Ilustrační příklad]{ton="info"}

Obchodník montážní firmy odjede na dva týdny na dovolenou. Mezitím se jeho klient ozve
s dotazem k nabídce a pošle ho rovnou jemu. Kolegyně, která obchodníka zastupuje, otevře
v Twenty kartu klienta: vidí celé vlákno k nabídce, schůzku z minulého týdne i to, kdo na ní
byl. Klientovi zavolá, ví, o čem se jednalo, a nemusí se nikoho ptát ani hledat v cizí poště.

:::

## Co je k tomu potřeba

- **Twenty** — synchronizace pošty a kalendáře je součástí Twenty ve všech tarifech
  i na vyhrazeném serveru.
- **Gmail a Microsoft 365** — na vyhrazeném serveru se připojení jednou zaregistruje u Googlu
  a Microsoftu pro celou firmu; to uděláme při nasazení. U Microsoftu potřebuje každý uživatel
  licenci Microsoft 365.
- **Ostatní poskytovatelé** — Seznam, Forpsi, Wedos, Active 24 a další se připojí přes IMAP,
  SMTP a CalDAV. Jak spolehlivě synchronizace s vaším poskytovatelem běží, ověříme při nasazení.
- **Pravidla viditelnosti** — co mají kolegové vidět a které složky ukládat. Doporučíme
  nastavení podle toho, jak u vás obchod a servis fungují.

V řešení [Twenty Sales](/pro-obchodni-tymy/) i [Twenty Servis](/pro-servisni-firmy/) — našich
nadstavbách nad open-source Twenty — je komunikace na kartě klienta a kontaktní osoby,
v Twenty Sales i u obchodního případu. Další možnosti jsou na stránce [Co Twenty CRM umí](/co-umi/).

:::otazky

### Uvidí kolegové všechny moje e-maily?

Ne. Ukládají se jen e-maily s lidmi mimo firmu a jen ze složek, které vyberete. U každé schránky
navíc určíte, jestli kolegové uvidí celý e-mail, nebo jen předmět a odesílatele.

### Ukládá se i pošta mezi kolegy?

Ve výchozím nastavení ne — e-maily, kde jsou všichni účastníci z vaší domény, zůstávají mimo
CRM. Správce to může zapnout pro celou firmu, pokud to dává smysl.

### Funguje to se Seznamem nebo s poštou u českého hostingu?

Ano, přes otevřené standardy IMAP, SMTP a CalDAV, které podporuje prakticky každý poskytovatel.
Jak spolehlivě synchronizace s vaším konkrétním poskytovatelem běží, ověříme při nasazení.

### Jak rychle se nový e-mail v CRM objeví?

Synchronizace běží zhruba každých pět minut. Výjimkou je první načtení velké schránky — to podle
počtu e-mailů trvá od minut po hodiny.

### Co když chci mít u klienta e-mail, který se neuložil sám?

Přepošlete ho nebo zkopírujte do poznámky u záznamu. U obchodního případu jde navíc tlačítkem
připojit libovolné vlákno nebo schůzku klienta, ke kterému obchod patří.

:::
