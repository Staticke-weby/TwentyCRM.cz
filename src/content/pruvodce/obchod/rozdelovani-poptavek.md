---
title: Jak spravedlivě rozdělovat poptávky mezi obchodníky
description: Twenty od verze 2.16 umí v automatizaci vybrat obchodníka dokola, podle vytížení nebo náhodně a nového zájemce mu rovnou přidělit. Kdy se hodí která cesta, jak to doplňuje frontu zájemců v Twenty Sales a co je k tomu potřeba.
vMenu: Rozdělování poptávek
poradi: 2
overeno: 2026-11-12
verzeTwenty: '2.57'
temata: [obchod, automatizace]
funkce: [pridelovani-dokola, automatizace, ai-trideni, cekani-na-udalost, pohledy, jen-sve-zaznamy]
zdroje: [docs-akce, docs-spoustece, twenty-vydani, github-twenty-v2-46-0, docs-opravneni]
---

**Twenty umí od verze 2.16 v automatizaci vybrat z obchodníků, které určíte, jednoho — postupně
dokola, toho s nejmenším počtem přidělených záznamů, nebo náhodně — a nového zájemce mu hned
přidělit.** Poptávka tak nečeká, až si ji někdo všimne, a práce se dělí rovnoměrně bez toho,
aby ji vedoucí přehazoval ručně.

V [Twenty Sales](/pro-obchodni-tymy/), naší nadstavbě nad open-source Twenty, k tomu existuje
i druhá cesta: zájemce bez vlastníka není chyba, ale fronta, ze které si obchodníci berou sami.
Obě cesty jdou kombinovat.

## Co vám to umožní

- **Žádná poptávka neleží bez majitele.** Zájemce má obchodníka ve chvíli, kdy vznikne, a ten
  dostane úkol s termínem.
- **Férové dělení bez dohadování.** Každý dostane svůj díl v pořadí, které nikdo neovlivní —
  a nikdo si nevybírá jen ty nejlepší poptávky.
- **Vedoucí nedělá dispečera.** Ráno nepřeposílá e-maily a nerozepisuje poptávky do tabulky.
  Kontroluje jen to, co zůstalo nevyřízené.
- **Správná poptávka správnému člověku.** Spolu s tříděním s AI může jít velká firma
  zkušenějšímu obchodníkovi a domácnost kolegovi, který prodává koncovým zákazníkům.

## Jak to v Twenty funguje

Rozdělování je krok **Výběr záznamu** v automatizaci. Do kroku vyberete obchodníky, mezi které
se má dělit, a strategii:

| Strategie | Jak vybírá | Kdy se hodí |
|---|---|---|
| **Dokola** | jeden po druhém v pevném pořadí; pamatuje si, kde minule skončil | rovnoměrné dělení, nejčastější volba |
| **Podle vytížení** | toho, kdo má nejméně záznamů navázaných přes pole, které určíte | když se má vyrovnávat celkový objem práce |
| **Náhodně** | náhodně jednoho z vybraných | když na pořadí nezáleží |

Strategie podle vytížení počítá všechny navázané záznamy bez ohledu na jejich stav — tedy
i uzavřené obchody. Pro dělení nových poptávek je proto obvykle přesnější cesta dokola.

Vybraný obchodník se v dalším kroku zapíše jako vlastník zájemce a automatizace pokračuje
dál: založí úkol, pošle upozornění nebo připraví koncept první odpovědi. Spouštět ji může nový
záznam, příchozí e-mail nebo formulář z vašeho webu, případně až výsledek
[třídění poptávek s AI](/twenty/obchod/trideni-poptavek-s-ai/).

Seznam obchodníků je v kroku vybraný napevno. Když se tým změní, upraví se krok; když se má
dělit zvlášť pro různé skupiny poptávek, má každá větev automatizace vlastní seznam.

**Fronta v Twenty Sales.** Zájemci bez vlastníka tvoří frontu, ze které si obchodníci berou
sami. Hodí se tam, kde si obchodníci poptávky vybírají podle oboru nebo regionu.
Od verze 2.46 umí automatizace počkat na čas nebo na změnu záznamu, takže se obě cesty dají
spojit: co si nikdo nevezme do stanovené doby, přidělí automatizace dokola.

Popis kroku je v [dokumentaci výrobce](https://docs.twenty.com/user-guide/workflows/capabilities/workflow-actions)
(anglicky — česká verze krok Výběr záznamu zatím nepopisuje).

:::poznamka[Ilustrační příklad]{ton="info"}

Dovozce zahradní techniky má čtyři obchodníky. Dva prodávají prodejnám a zahradnickým firmám,
dva koncovým zákazníkům. Každá nová poptávka z webu založí v Twenty Sales **Zájemce**:

1. **Třídění** rozhodne, jestli poptává firma, nebo domácnost.
2. Firemní poptávka jde do první větve a přidělí se **dokola** jednomu ze dvou obchodníků
   pro firmy; domácnost do druhé větve s druhou dvojicí.
3. Obchodník dostane úkol *„Ozvat se do 2 hodin"*.
4. Automatizace počká dva dny. Když zájemce pořád nemá stav Kontaktován, založí úkol
   vedoucímu obchodu.

Když jeden z obchodníků odjede na dovolenou, vedoucí ho na ten týden z větve vyřadí — poptávky
se rozdělí mezi zbylé.

:::

## Co je k tomu potřeba

- **Twenty od verze 2.16**, pro čekání na čas nebo změnu záznamu od verze 2.46. Na vyhrazeném
  serveru aktualizace nasazujeme v rámci měsíčního paušálu.
- **Pravidla dělení.** Kdo dostává jaké poptávky, v jakém pořadí, co se stane s nevyřízenými.
  Domluvíme je s vedoucím obchodu a automatizaci nastavíme při nasazení.
- **Zájemci na jednom místě.** Rozdělovat jde jen to, co do CRM opravdu přijde — formulář,
  schránka nebo import. Na tom stojí i [třídění poptávek](/twenty/obchod/trideni-poptavek-s-ai/).
- **Kontrola, co se nehýbe.** Přidělená poptávka bez kontaktu se dá hlídat pohledem i automatizací —
  podrobněji v článku [kdo se odmlčel](/twenty/po-jednani/kdo-se-odmlcel/).

Samotné rozdělování AI nepotřebuje, takže za něj neplatíte poskytovateli AI nic.

:::otazky

### Co když je obchodník na dovolené nebo nemocný?

Seznam obchodníků je v kroku vybraný napevno. Na dobu nepřítomnosti ho vedoucí nebo správce
upraví, případně si zájemce bez vlastníka vezme kolega z fronty.

### Jde rozdělovat podle regionu nebo oboru?

Ano. Automatizace se rozvětví podle pole u zájemce — kraj, obor, typ zákazníka — nebo podle
výsledku třídění s AI, a každá větev má vlastní skupinu obchodníků.

### Uvidí obchodník jen své zájemce?

Přidělení určuje, kdo je vlastník, ne kdo záznam vidí. Tvrdé omezení, kdy uživatel cizí záznamy
vůbec neuvidí, je v Twenty součást tarifu Organization — v cloudu i jako licence pro vyhrazený
server. Pro běžnou práci stačí pohled filtrovaný na vlastní zájemce.

### Potřebuji k tomu AI?

Ne. Výběr obchodníka je obyčejný krok automatizace. AI přijde na řadu, jen když chcete poptávky
předtím roztřídit.

:::
