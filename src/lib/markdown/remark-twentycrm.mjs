// Remark plugin: direktivy a zástupné hodnoty pro obsah v Markdownu.
// Tahle hlavička je kompletní přehled syntaxe — při přidání direktivy ji aktualizujte.
//
// Bloky s obsahem (:::)
//   :::sekce{pozadi="svetle|tmave|usvit"}   celá šíře stránky, vlastní pozadí (usvit = světlý gradient Payday)
//   :::karty{sloupce="1|2|3|4"}       každý ### nadpis uvnitř začíná novou kartu
//   :::sloupce{sloupce="2|3"}         jako karty, ale bez rámečku
//   :::zvyrazneni                     podbarvený blok
//   :::poznamka[Nadpis]{ton="info|varovani|uspech"}   podbarvený blok se štítkem a ikonou tónu
//   :::pripadova-studie{ikona="🏢" nazev="…" podtitul="…"}
//        #### Před / #### Co jsme v Twenty nastavili / #### Po  (tři sloupce) + > citát
//
// Samostatné bloky (::)
//   ::demo-cta{produkt="sales|servis"}
//   ::cta{mailto="hvac" velikost="lg"}
//   ::disclaimer{produkt="Twenty Sales"}
//   ::seznam{data="implementation.includes"}        položky z pricing.json
//   ::cenovka{klic="retainer_selfhost" pozn="/měs bez DPH"}   velká cena z pricing.json
//   ::stitek[Adaptační program]                      malý modrý nadpisek nad blokem
//   ::faq{kategorie="cena" pocet="4"}  nebo  ::faq{id="dve-reseni,cena-uzivatele"}
//   ::faq-vse                                        všechny otázky po kategoriích (/otazky/)
//   ::reseni-volba{doporuceno="servis" proc="…" alternativa="…"}   „Které řešení pro vás" (smí Markdown)
//   ::reseni-karty                                   karty Twenty Sales + Twenty Servis (reseni.json)
//   ::srovnani-reseni                                tabulka srovnání obou řešení (reseni.json)
//   ::entity{produkt="servis"}                       typy záznamů řešení jako dlaždice
//   ::obory{reseni="servis" objekty odkaz="Detail →"}   karty oborů (obory.json)
//   ::tym                                            karty týmu (team.json)
//   ::rozsireni{kontext="servis|sales"}              napojení na fakturaci + „co když nám něco chybí"
//   ::platforma-vs-custom                            proč hotová platforma vs. vývoj s AI agentem
//   ::video{youtube="ILmFLiFd16A" nazev="…"}         video z YouTube (youtube-nocookie)
//   ::stav-funkci{temata="ai,mcp" funkce="sso" bez="ai-kredity" smer}
//        co z Twenty funguje dnes a co se připravuje — z registru src/data/twenty/funkce.json
//        (temata = výběr podle témat, funkce = přidat konkrétní id, bez = vynechat id, smer = i směr vývoje)
//
// Nadpisy
//   ## Nadpis {#kotva}                               vlastní id nadpisu pro odkazy /stranka/#kotva
//
// Hodnoty v textu
//   {{cena.implementation}}            → 34 990 Kč   (pricing.json → .price)
//   {{cena.comparison_examples.1.savings_vs_competitor}} → 131 880 Kč (číslo na cestě)
//   {{cena.retainer_selfhost|mesicne}} → 4 990 Kč/měs
//   {{data.twenty_cloud_external.pro_usd}} → 9
//   {{kontakt.telefon}} / {{kontakt.email}}  (bez dvojtečky — :slovo je syntaxe direktiv)
//   [Zavolejte]({{kontakt.tel}})            → tel: odkaz
//   [Napište]({{mailto.otazka}})            → mailto: s předvyplněným předmětem a textem (mailto.json)
//
// remark-directive (syntaxe) je v astro.config.mjs před tímto pluginem.
// Text „:slovo" uprostřed věty by se četl jako direktiva — neznámé textové direktivy
// proto vracíme zpátky na obyčejný text.

import { visit, SKIP } from 'unist-util-visit';
import { faq, zPricing, dosadHodnoty, escapeHtml } from '../site.mjs';
import { EMOJI_RE, odznak, nahradEmojiVHtml, stitekPoznamky } from '../ikony.mjs';
import { najdiFunkci, vyberFunkce, stavFunkciBlok } from '../twenty.mjs';
import {
  ctaTlacitka,
  demoCta,
  disclaimer,
  seznamFajfek,
  faqBlok,
  faqVse,
  reseniVolba,
  reseniKarty,
  srovnaniReseni,
  entityReseni,
  oboryKarty,
  tym,
  rozsireni,
  platformaVsCustom,
} from '../komponenty.mjs';

function chyba(file, node, zprava) {
  const kde = `${file?.path ?? '?'}:${node.position?.start?.line ?? '?'}`;
  throw new Error(`[obsah] ${kde} — ${zprava}`);
}

const html = (value) => ({ type: 'html', value });

/** mdast uzel, který se vykreslí jako <tag class="…"> s danými potomky. */
function obal(tag, className, children, props = {}) {
  return { type: 'paragraph', data: { hName: tag, hProperties: { className, ...props } }, children };
}

/** Rozdělí potomky podle ### nadpisů na skupiny (úvod před prvním nadpisem zůstane zvlášť). */
function rozdelPodleH3(children) {
  const uvod = [];
  const skupiny = [];
  for (const ch of children) {
    if (ch.type === 'heading' && ch.depth === 3) skupiny.push([ch]);
    else if (skupiny.length) skupiny.at(-1).push(ch);
    else uvod.push(ch);
  }
  return { uvod, skupiny };
}

function dosad(text, file, node) {
  try {
    return dosadHodnoty(text);
  } catch (err) {
    return chyba(file, node, err.message);
  }
}

export default function remarkTwentycrm() {
  return (tree, file) => {
    // 1) Zástupné hodnoty v textu i v odkazech
    visit(tree, 'link', (node) => {
      node.url = dosad(node.url, file, node);
    });
    visit(tree, 'text', (node) => {
      node.value = dosad(node.value, file, node);
    });

    // 2) Nadpisy sekcí se při scrollu jednou vynoří (Payday)
    //    + vlastní kotva: „## Nadpis {#princip}" → id="princip" (odkazy /co-umi/#princip)
    visit(tree, 'heading', (node) => {
      const props = { ...(node.data?.hProperties ?? {}) };
      if (node.depth === 2) props.className = ['reveal'];
      const posledni = node.children.at(-1);
      const kotva = posledni?.type === 'text' && posledni.value.match(/\s*\{#([\w-]+)\}\s*$/);
      if (kotva) {
        posledni.value = posledni.value.slice(0, kotva.index);
        props.id = kotva[1];
      }
      node.data = { ...node.data, hProperties: props };
    });

    // 3) Direktivy
    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined) return;
      const a = node.attributes ?? {};

      if (node.type === 'containerDirective') {
        switch (node.name) {
          case 'sekce': {
            const pozadi = a.pozadi ?? 'svetle';
            if (!['svetle', 'tmave', 'usvit', 'bile'].includes(pozadi)) chyba(file, node, `:::sekce pozadi="${pozadi}" — povoleno svetle | tmave | usvit | bile`);
            node.data = { hName: 'section', hProperties: { className: ['sekce', `sekce--${pozadi}`] } };
            node.children = [obal('div', ['sekce__vnitrek'], node.children)];
            return;
          }
          case 'karty':
          case 'sloupce': {
            const sloupce = Number(a.sloupce ?? 3);
            const { uvod, skupiny } = rozdelPodleH3(node.children);
            if (!skupiny.length) chyba(file, node, `:::${node.name} — uvnitř chybí ### nadpisy, podle kterých se dělí na ${node.name}`);
            const trida = node.name === 'karty' ? 'karta' : 'sloupec';
            node.data = { hName: 'div', hProperties: { className: [`${node.name}-blok`] } };
            node.children = [
              ...uvod,
              obal('div', ['mrizka', `mrizka--${sloupce}`, 'reveal'], skupiny.map((s) => obal('div', [trida], s))),
            ];
            return;
          }
          case 'poznamka': {
            const prvni = node.children[0];
            let stitek = 'Poznámka';
            if (prvni?.data?.directiveLabel) {
              stitek = prvni.children.map((c) => c.value ?? '').join('');
              node.children = node.children.slice(1);
            }
            const ton = a.ton ?? 'info';
            if (!['info', 'varovani', 'uspech'].includes(ton)) chyba(file, node, `:::poznamka ton="${ton}" — povoleno info | varovani | uspech`);
            node.data = { hName: 'aside', hProperties: { className: ['poznamka', `poznamka--${ton}`] } };
            let hlavicka;
            try {
              hlavicka = stitekPoznamky(stitek, ton);
            } catch (err) {
              chyba(file, node, err.message);
            }
            node.children = [html(hlavicka), ...node.children];
            return;
          }
          case 'pripadova-studie': {
            // #### Před / #### Co jsme v Twenty nastavili / #### Po → tři sloupce; > citát pod nimi
            const citat = node.children.filter((c) => c.type === 'blockquote');
            const zbytek = node.children.filter((c) => c.type !== 'blockquote');
            const sloupce = [];
            for (const ch of zbytek) {
              if (ch.type === 'heading' && ch.depth === 4) sloupce.push([ch]);
              else if (sloupce.length) sloupce.at(-1).push(ch);
            }
            if (sloupce.length !== 3) chyba(file, node, ':::pripadova-studie čeká tři části: #### Před, #### Co jsme v Twenty nastavili, #### Po');
            const hlavicka = html(
              `<header class="studie__hlavicka">${a.ikona ? ikonaNeboChyba(a.ikona, 'velka', file, node) : ''}<div><p class="stitek stitek--sedy">Případová studie</p><h3>${escapeHtml(a.nazev ?? '')}</h3><p class="drobny">${escapeHtml(a.podtitul ?? '')}</p></div></header>`,
            );
            node.data = { hName: 'article', hProperties: { className: ['studie', 'reveal'] } };
            node.children = [hlavicka, obal('div', ['studie__sloupce'], sloupce.map((s) => obal('div', ['studie__sloupec'], s))), ...citat];
            return;
          }
          case 'zvyrazneni':
            node.data = { hName: 'div', hProperties: { className: ['zvyrazneni'] } };
            return;
          default:
            return chyba(file, node, `neznámý blok :::${node.name}`);
        }
      }

      if (node.type === 'textDirective') {
        // není naše — vrátit jako text (např. „Cena:Kč")
        const label = node.children?.length ? '[' + node.children.map((c) => c.value ?? '').join('') + ']' : '';
        parent.children[index] = { type: 'text', value: ':' + node.name + label };
        return SKIP;
      }

      if (node.type === 'leafDirective') {
        let vystup;
        switch (node.name) {
          case 'demo-cta':
            vystup = demoCta({ produkt: a.produkt, nadpis: a.nadpis, text: a.text });
            break;
          case 'cta':
            vystup = ctaTlacitka({ mailto: a.mailto, velikost: a.velikost, tmave: a.tmave !== undefined });
            break;
          case 'disclaimer':
            if (!a.produkt) chyba(file, node, '::disclaimer potřebuje produkt="Twenty Sales|Twenty Servis"');
            vystup = disclaimer({ produkt: a.produkt, tmave: a.tmave !== undefined });
            break;
          case 'cenovka': {
            if (!a.klic) chyba(file, node, '::cenovka potřebuje klic="…" z pricing.json');
            const castka = dosad(`{{cena.${a.klic}}}`, file, node);
            vystup = `<p class="cenovka"><span class="cenovka__castka tnum">${castka}</span>${a.pozn ? ` <span class="cenovka__pozn">${escapeHtml(a.pozn)}</span>` : ''}</p>`;
            break;
          }
          case 'stitek': {
            const text = node.children?.map((c) => c.value ?? '').join('') || a.text;
            if (!text) chyba(file, node, '::stitek[Text štítku] — chybí text v hranatých závorkách');
            vystup = `<p class="stitek">${escapeHtml(dosad(text, file, node))}</p>`;
            break;
          }
          case 'seznam': {
            const polozky = zPricing(a.data ?? '');
            if (!Array.isArray(polozky)) chyba(file, node, `::seznam data="${a.data}" není seznam`);
            vystup = seznamFajfek(polozky);
            break;
          }
          case 'faq': {
            let polozky = faq.items;
            if (a.id) {
              const ids = a.id.split(',').map((s) => s.trim());
              polozky = ids.map((id) => faq.items.find((i) => i.id === id) ?? chyba(file, node, `::faq — otázka „${id}" není ve faq.json`));
            } else if (a.kategorie) {
              polozky = polozky.filter((i) => i.category === a.kategorie);
            }
            if (a.pocet) polozky = polozky.slice(0, Number(a.pocet));
            vystup = faqBlok(polozky, { jsonLd: a.bezld === undefined });
            break;
          }
          case 'faq-vse':
            vystup = faqVse();
            break;
          case 'reseni-volba':
            if (!a.doporuceno || !a.proc) chyba(file, node, '::reseni-volba potřebuje doporuceno="sales|servis" a proc="…"');
            vystup = reseniVolba({ doporuceno: a.doporuceno, proc: dosad(a.proc, file, node), alternativa: a.alternativa && dosad(a.alternativa, file, node) });
            break;
          case 'reseni-karty':
            vystup = reseniKarty();
            break;
          case 'srovnani-reseni':
            vystup = srovnaniReseni();
            break;
          case 'entity':
            vystup = entityReseni(a.produkt);
            break;
          case 'obory':
            vystup = oboryKarty({ reseni: a.reseni, objekty: a.objekty !== undefined, odkaz: a.odkaz });
            break;
          case 'tym':
            vystup = tym();
            break;
          case 'rozsireni':
            vystup = rozsireni({ kontext: a.kontext });
            break;
          case 'platforma-vs-custom':
            vystup = platformaVsCustom();
            break;
          case 'video': {
            // YouTube přes youtube-nocookie (bez cookies), načítá se až při scrollu
            if (!/^[\w-]{6,20}$/.test(a.youtube ?? '')) chyba(file, node, '::video potřebuje youtube="ID videa"');
            const nazev = escapeHtml(a.nazev ?? 'Video');
            vystup = `<div class="video reveal"><iframe src="https://www.youtube-nocookie.com/embed/${a.youtube}?rel=0" title="${nazev}" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
            break;
          }
          case 'stav-funkci': {
            const seznam = (s) => (s ? s.split(',').map((x) => x.trim()).filter(Boolean) : []);
            const temata = seznam(a.temata);
            const ids = seznam(a.funkce);
            const bez = new Set(seznam(a.bez));
            if (!temata.length && !ids.length) chyba(file, node, '::stav-funkci potřebuje temata="…" nebo funkce="…" (registr src/data/twenty/funkce.json)');
            let vybrane = [];
            try {
              for (const id of bez) najdiFunkci(id);
              vybrane = vyberFunkce({ temata, ids }).filter((f) => !bez.has(f.id));
            } catch (err) {
              chyba(file, node, err.message);
            }
            if (!a.smer && a.smer !== '') vybrane = vybrane.filter((f) => f.stav !== 'smer');
            if (!vybrane.length) chyba(file, node, `::stav-funkci — pro témata „${a.temata}" není v registru žádná funkce`);
            vystup = stavFunkciBlok(vybrane, { smer: a.smer !== undefined });
            break;
          }
          default:
            return chyba(file, node, `neznámý blok ::${node.name}`);
        }
        parent.children[index] = html(vystup);
        return SKIP;
      }
    });

    // 4) Emoji → ikony Lucide ve stylu Payday (tabulka v src/lib/ikony.mjs)
    nahradEmoji(tree, file);
  };
}

function ikonaNeboChyba(emoji, velikost, file, node) {
  try {
    return odznak(emoji, velikost);
  } catch (err) {
    return chyba(file, node, err.message);
  }
}

const EMOJI_JEDEN = new RegExp(EMOJI_RE.source, 'u');

function nahradEmoji(tree, file) {
  // a) Nadpis začínající emoji: má-li text → malý odznak v řádku před textem nadpisu;
  //    nadpis jen z emoji (karta bez nadpisu) → velký odznak místo nadpisu.
  visit(tree, 'heading', (node, index, parent) => {
    const prvni = node.children[0];
    if (!parent || prvni?.type !== 'text') return;
    const m = prvni.value.match(new RegExp(`^\\s*(${EMOJI_RE.source})\\s*`, 'u'));
    if (!m) return;
    prvni.value = prvni.value.slice(m[0].length);
    const zbyvaText = node.children.some((c) => (c.type === 'text' ? c.value.trim() : true));
    if (zbyvaText) {
      node.children.unshift(html(ikonaNeboChyba(m[1], 'stredni', file, node)));
      return;
    }
    parent.children[index] = html(ikonaNeboChyba(m[1], 'velka', file, node));
    return [SKIP, index + 1];
  });

  // b) Emoji v běžném textu (odrážky, tabulky, odstavce) → malý odznak
  visit(tree, 'text', (node, index, parent) => {
    if (!parent || index === undefined || !EMOJI_JEDEN.test(node.value)) return;
    const casti = [];
    let posledni = 0;
    for (const m of node.value.matchAll(EMOJI_RE)) {
      if (m.index > posledni) casti.push({ type: 'text', value: node.value.slice(posledni, m.index) });
      casti.push(html(ikonaNeboChyba(m[0], 'mala', file, node)));
      posledni = m.index + m[0].length;
      // mezera hned za emoji patří k ikoně
      if (node.value[posledni] === ' ') posledni++;
    }
    if (posledni < node.value.length) casti.push({ type: 'text', value: node.value.slice(posledni) });
    parent.children.splice(index, 1, ...casti);
    return [SKIP, index + casti.length];
  });

  // c) HTML z direktiv a komponent
  visit(tree, 'html', (node) => {
    try {
      node.value = nahradEmojiVHtml(node.value);
    } catch (err) {
      chyba(file, node, err.message);
    }
  });
}
