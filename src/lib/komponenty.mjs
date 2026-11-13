// HTML bloky, které se vkládají do Markdownu direktivami (viz remark-twentycrm.mjs)
// a zároveň je používají Astro šablony. Jeden zdroj = stejný vzhled všude.
import { marked } from 'marked';
import { KONTAKT, mailtoOdkaz, telOdkaz, escapeHtml as e, faq, reseni, obory, team, pricing, formatCena } from './site.mjs';
import { odznak, odznakLucide, stitekPoznamky } from './ikony.mjs';

const ikonaTelefon =
  '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
const ikonaMail =
  '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>';

/** Šipka do tlačítka „pilulka se šipkou" (Payday, ikona Lucide arrow-right, ISC). */
export const sipka =
  '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';

/** Dvojice tlačítek telefon (se šipkou) + e-mail. */
export function ctaTlacitka({ mailto = 'generic', velikost = '', tmave = false } = {}) {
  const lg = velikost === 'lg' ? ' btn-lg' : '';
  return `<div class="cta-tlacitka${tmave ? ' cta-tlacitka--tmave' : ''}">
  <a href="${telOdkaz()}" class="btn btn-primary btn-sipka${lg} tnum">${KONTAKT.telefonZobrazeni}<span class="btn-sipka__ikona">${ikonaTelefon}</span></a>
  <a href="${e(mailtoOdkaz(mailto))}" class="btn btn-secondary${lg}">${ikonaMail}${KONTAKT.email}</a>
</div>`;
}

/**
 * Demo přístup — hlavní konverzní blok. Na stránce JEN JEDNOU, před závěrečným CTA
 * (CLAUDE.md pravidlo 3g). Nikdy neodkazovat na zkušební účet na twenty.com.
 */
export function demoCta({ produkt = '', nadpis, text } = {}) {
  const sales = produkt === 'sales';
  const servis = produkt === 'servis';
  const h =
    nadpis ??
    (sales ? 'Chcete Twenty Sales vidět zevnitř?' : servis ? 'Chcete Twenty Servis vidět zevnitř?' : 'Chcete to vidět zevnitř?');
  const t =
    text ??
    (sales
      ? 'Pošleme vám demo přístup do Twenty Sales s vyplněnými daty — leady, fáze obchodu, nabídka s nákupní cenou a marží, obchodní plán se semaforem i AI chat nad tím vším. Ne prázdný systém k nastavení, ale hotové řešení tak, jak ho dodáváme.'
      : servis
        ? 'Pošleme vám demo přístup do Twenty Servis s vyplněnými daty — zařízení u klientů, servisní plán, zakázka, plánovač výjezdů, výkaz práce i zakázkový list. Ne prázdný systém k nastavení, ale hotové řešení tak, jak ho dodáváme.'
        : 'Pošleme vám demo přístup do Twenty Sales nebo Twenty Servis s vyplněnými daty — hotové řešení tak, jak ho dodáváme, ne prázdný systém k nastavení. Napište, co řešíte, a vybereme, které z nich vám má víc co ukázat.');
  const mailto = sales ? 'demo-sales' : servis ? 'demo-servis' : 'demo';
  return `<aside class="demo-cta reveal not-prose not-content" aria-label="Demo přístup">
  <div class="demo-cta__text">
    <p class="stitek">Demo přístup</p>
    <h3>${e(h)}</h3>
    <p>${e(t)}</p>
    <p class="demo-cta__pozn">Přístup pošleme do 1 pracovního dne — zdarma, bez závazku a bez kreditní karty. Raději živě? Na 30 minut online vám ukážeme, jak by to vypadalo u vás.</p>
  </div>
  <div class="demo-cta__akce">
    <a href="${e(mailtoOdkaz(mailto))}" class="btn btn-primary btn-sipka btn-lg">Napsat o demo přístup<span class="btn-sipka__ikona">${sipka}</span></a>
    <a href="${telOdkaz()}" class="btn btn-secondary tnum">${ikonaTelefon}${KONTAKT.telefonZobrazeni}</a>
  </div>
</aside>`;
}

/** Povinné upozornění na produktových stránkách (CLAUDE.md pravidlo 1). */
export function disclaimer({ produkt, tmave = false }) {
  return `<p class="disclaimer${tmave ? ' disclaimer--tmave' : ''}"><strong>${e(produkt)}</strong> je naše nadstavba nad <a href="https://twenty.com" rel="noopener" target="_blank">open-source Twenty</a>. Nejsme Twenty Inc. ani jeho oficiální zastoupení — jsme česká agentura, která nad Twenty staví hotová oborová řešení a provozuje je pro klienty.</p>`;
}

/** Seznam s fajfkami (typicky položky z pricing.json). */
export function seznamFajfek(polozky) {
  return `<ul class="fajfky">${polozky.map((p) => `<li>${odznakLucide('check')}<span>${e(p)}</span></li>`).join('')}</ul>`;
}

/** Rozbalovací otázky — nativní <details>, bez JavaScriptu. Vloží i FAQPage JSON-LD. */
export function faqBlok(polozky, { jsonLd = true } = {}) {
  const html = polozky
    .map(
      (p) => `<details class="faq__polozka" id="${e(p.id)}">
  <summary>${e(p.question)}</summary>
  <div class="faq__odpoved"><p>${e(p.answer)}</p></div>
</details>`,
    )
    .join('\n');
  const ld = jsonLd
    ? `<script type="application/ld+json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: polozky.map((p) => ({
          '@type': 'Question',
          name: p.question,
          acceptedAnswer: { '@type': 'Answer', text: p.answer },
        })),
      }).replace(/</g, '\\u003c')}</script>`
    : '';
  return `<div class="faq not-prose not-content">${html}</div>${ld}`;
}

/** Všechny otázky z faq.json po kategoriích, s rozcestníkem nahoře (/otazky/). */
export function faqVse() {
  const kategorie = faq.categories.filter((k) => faq.items.some((i) => i.category === k.id));
  const nav = `<nav class="stitky-nav" aria-label="Kategorie otázek">${kategorie
    .map((k) => `<a href="#kategorie-${e(k.id)}">${e(k.label)}</a>`)
    .join('')}</nav>`;
  const bloky = kategorie
    .map(
      (k) => `<section class="faq-kategorie" id="kategorie-${e(k.id)}">
  <h2 class="reveal">${e(k.label)}</h2>
  ${faqBlok(faq.items.filter((i) => i.category === k.id), { jsonLd: false })}
</section>`,
    )
    .join('\n');
  const ld = `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((p) => ({ '@type': 'Question', name: p.question, acceptedAnswer: { '@type': 'Answer', text: p.answer } })),
  }).replace(/</g, '\\u003c')}</script>`;
  return nav + bloky + ld;
}

const inl = (s) => (s ? marked.parseInline(s) : '');
/** Název řešení s ikonou vedle něj (ne nad ním) — rozhodnutí uživatele 2026-11-13. */
const nazevReseni = (p) => `<div class="karta__nazev">${odznak(p.icon, 'velka')}<h3>${e(p.name)}</h3></div>`;
const produkt = (klic) => reseni.produkty.find((p) => p.key === klic);

/** „Které řešení pro vás" — doporučené + alternativa (obory, migrace). */
export function reseniVolba({ doporuceno, proc, alternativa }) {
  const dop = produkt(doporuceno);
  const druhe = produkt(doporuceno === 'sales' ? 'servis' : 'sales');
  if (!dop) throw new Error(`::reseni-volba doporuceno="${doporuceno}" — povoleno sales | servis`);
  const druhaKarta = alternativa
    ? `<div class="karta"><p class="stitek stitek--sedy">Nebo naopak</p>${nazevReseni(druhe)}<p>${inl(alternativa)}</p><p><a href="${druhe.url}" class="btn btn-secondary">Co ${e(druhe.name)} umí →</a></p></div>`
    : `<div class="karta"><p class="stitek stitek--sedy">Nejste si jistí?</p><h3>Dvě otázky a máte jasno</h3><p>Rozhoduje jediná věc — jestli od vás někdo jezdí k zákazníkovi, nebo jestli řídíte obchodní tým. Projděte si krátké srovnání obou řešení vedle sebe.</p><p><a href="/ktere-crm-vybrat/" class="btn btn-secondary">Porovnat obě řešení →</a></p></div>`;
  return `<div class="reseni-volba">
<h2 class="reveal">Které řešení pro vás</h2>
<p class="perex">Nabízíme dvě hotová řešení. Nekupujete obě — vybíráte podle toho, co ve firmě řešíte.</p>
<div class="karty-blok"><div class="mrizka mrizka--2 reveal">
<div class="karta karta--zvyraznena"><p class="stitek">Pro tento obor doporučujeme</p>${nazevReseni(dop)}<p>${inl(proc)}</p><p><a href="${dop.url}" class="btn btn-primary btn-sipka">Co ${e(dop.name)} umí<span class="btn-sipka__ikona">${sipka}</span></a></p></div>
${druhaKarta}
</div></div>
<p class="drobny">Cena nasazení i měsíčního provozu je u obou řešení stejná — <a href="/cenik/">podrobný ceník</a>.</p>
</div>`;
}

/** Dvě produktové karty vedle sebe (Twenty Sales a Twenty Servis) z reseni.json. */
export function reseniKarty() {
  const karty = reseni.produkty
    .map(
      (p) => `<div class="karta">
  ${nazevReseni(p)}
  <p class="drobny">${e(p.subtitle)}</p>
  <p>${e(p.claim)}</p>
  <p class="stitek stitek--sedy">Sedne vám, když</p>
  ${seznamFajfek(p.proKoho)}
  <p><a href="${p.url}" class="btn btn-secondary">Co ${e(p.name)} umí →</a></p>
</div>`,
    )
    .join('\n');
  return `<div class="karty-blok"><div class="mrizka mrizka--2 reveal">${karty}</div></div>
<p class="drobny">Cena je u obou stejná — <a href="/cenik/">nasazení jednorázově a měsíční provoz</a>. Nevíte, které z nich? <a href="/ktere-crm-vybrat/">Dvě otázky a máte jasno →</a></p>`;
}

/** Tabulka srovnání obou řešení z reseni.json (/ktere-crm-vybrat/). */
export function srovnaniReseni() {
  const bunka = (v) => (v === 'ano' ? '<span class="ano">✓ ano</span>' : v === 'ne' ? '<span class="ne">— ne</span>' : e(v));
  const radky = reseni.srovnani
    .map((r) => `<tr><th scope="row">${e(r.label)}</th><td>${bunka(r.sales)}</td><td>${bunka(r.servis)}</td></tr>`)
    .join('');
  const [s, v] = [produkt('sales'), produkt('servis')];
  return `<div class="tabulka-obal"><table class="srovnani"><thead><tr><th>Co potřebujete</th><th>${e(s.icon)} ${e(s.name)}</th><th>${e(v.icon)} ${e(v.name)}</th></tr></thead><tbody>${radky}</tbody></table></div>`;
}

/** Typy záznamů daného řešení jako dlaždice. */
export function entityReseni(klic) {
  const p = produkt(klic);
  if (!p) throw new Error(`::entity produkt="${klic}" — povoleno sales | servis`);
  return `<ul class="dlazdice reveal">${p.entity.map((x) => `<li>${e(x)}</li>`).join('')}</ul>`;
}

/** Karty oborů z obory.json. */
export function oboryKarty({ reseni: klic, objekty = false, odkaz = 'Detail oboru →' }) {
  const polozky = obory.items.filter((o) => !klic || o.reseni === klic);
  return `<div class="karty-blok"><div class="mrizka mrizka--3 reveal">${polozky
    .map(
      (o) => `<a href="${o.url}" class="karta karta--odkaz">
  <div class="karta__nazev">${odznak(o.emoji, 'velka')}<h3>${e(o.title)}</h3></div>
  <p class="drobny">${e(o.subtitle)}</p>
  <p>${e(o.tagline)}</p>
  ${objekty ? `<p class="stitek stitek--sedy">Co se v CRM eviduje</p><p class="drobny">${o.objects.map(e).join(' · ')}</p>` : ''}
  <span class="karta__dalsi">${e(odkaz)}</span>
</a>`,
    )
    .join('\n')}</div></div>`;
}

/** Tým z team.json (/kontakt/, /o-nas/). */
export function tym() {
  return `<div class="karty-blok"><div class="mrizka mrizka--3 reveal">${team.members
    .map(
      (m) => `<div class="karta tym">
  <span class="tym__inicialy" aria-hidden="true">${e(m.initials)}</span>
  <h3>${e(m.name)}</h3>
  <p class="drobny">${e(m.title)}${m.role ? `, ${e(m.role)}` : ''}</p>
  <p class="tym__citat">„${e(m.tagline)}"</p>
  <p class="tym__kontakt">${m.phone ? `<a href="tel:${e(m.phone_e164)}" class="tnum">📞 ${e(m.phone)}</a>` : ''}
  ${m.email ? `<a href="mailto:${e(m.email)}">📧 ${e(m.email)}</a>` : ''}</p>
</div>`,
    )
    .join('\n')}</div></div>`;
}

/** Jediné publikované rozšíření — napojení na fakturaci (CLAUDE.md pravidla 3e a 5). */
export function rozsireni({ kontext = 'sales' } = {}) {
  const servis = kontext === 'servis';
  return `<div class="rozsireni">
<h2 class="reveal">Čím se to dá rozšířit</h2>
<p class="perex">Jedno rozšíření nabízíme rovnou, protože ho chce skoro každý.</p>
<div class="zvyrazneni reveal">
  <h3>${odznak('🧾', 'stredni')}Napojení na fakturaci</h3>
  <p>${
    servis
      ? 'Hotové výkazy z terénu — hodiny, kilometry, materiál — přetečou rovnou do vašeho fakturačního programu. Pohoda, Money, ABRA, iDoklad, Fakturoid a další. Fakturantka nic nepřepisuje.'
      : 'Podklad z přijaté nabídky přeteče rovnou do vašeho fakturačního programu — Pohoda, Money, ABRA, iDoklad, Fakturoid a další. Bez přepisování a bez druhého místa, kde vzniká faktura.'
  }</p>
  <p class="drobny">Není součástí základní dodávky schválně: aby se neplatilo za propojení na program, který nemáte. Děláme ho na požadavek, na ten, který opravdu používáte.</p>
  <p><a href="/napojeni-na-fakturaci/" class="btn btn-secondary">Jak napojení funguje →</a></p>
</div>
<aside class="poznamka reveal">
  ${stitekPoznamky('A co když nám něco chybí?', 'info')}
  <p>Zavolejte a projdeme to. <strong>Pole, pohled, číselník nebo automatika</strong> bývají úprava na pár hodin — ty řešíme z předplacených hodin. <strong>U větší agendy si sedneme a najdeme cestu:</strong> někdy je nejrychlejší doplnit ji přímo u nás, jindy napojit systém, který na ni ve firmě už máte. Odcházíte s řešením, ne s odkazem jinam.</p>
  <p>Odpověď dostanete rovnou na konzultaci, ne až po podpisu. Nezačínáme přitom od nuly — základ je hotový a odzkoušený, takže se bavíme o doladění, ne o vývoji.</p>
  <p><a href="/kontakt/" class="btn btn-secondary">Probrat, co potřebujete →</a></p>
</aside>
</div>`;
}

/** „Proč hotová platforma" — Twenty s hlídaným jádrem vs. vývoj od nuly s AI agentem. */
export function platformaVsCustom() {
  const varovani = [
    'AI vygeneruje kód — bezpečnostní díry projdou, protože je nikdo nezkontroloval',
    'Architekturu navrhuje AI bez znalosti vašeho byznysu — chyby se projeví až při škálování',
    'Datový model padá při situacích, na které nikdo nepomyslel — vy je objevíte první',
    'Nejde upgrade — když chcete novou funkci, zase platíte vývoj',
    'Závislost na konkrétním programátorovi — když odejde, máte problém',
    'Mobilní rozhraní, role, audit log, GDPR, zálohy — všechno znova od nuly',
  ];
  const plusy = [
    'Open-source jádro vyvíjí placený tým — každá změna je kontrolovaná, bezpečnostní audit',
    'AI nástroje (MCP, Claude, ChatGPT) jsou <strong>uživateli</strong> Twenty, ne staviteli — pracují s vyzkoušeným základem',
    'Tisíce uživatelů po celém světě — neobvyklé situace už dávno potkali jiní, ne vy',
    'Týdenní cyklus nových verzí s kontrolovanými změnami — nové funkce dorazí samy',
    'Mobilní rozhraní, role, audit log, GDPR, zálohy — všechno už hotové a vyzkoušené',
    'Když nás přestanete potřebovat, vaše data zůstanou vaše a Twenty je open source — software si může spravovat kdokoliv',
  ];
  return `<div class="platforma-vs-custom">
<p class="stitek">Proč hotová platforma</p>
<h2 class="reveal">Twenty je dělané pro AI vývoj — ale jádro hlídají lidé, kteří vědí, co je bezpečné</h2>
<p class="perex">AI dnes umí postavit CRM systém za pár týdnů. Twenty samo je <strong>od základu navržené pro AI</strong> — má vestavěné napojení pro Claude a ChatGPT, MCP server, aplikační platformu. To není proti AI vývoji.</p>
<p class="perex">Skutečný rozdíl je <strong>v governance.</strong> Twenty má jádro, kterým prochází tým lidí — auditují bezpečnost, hlídají datový model, rozhodují, co se může pustit do produkce. AI tam pomáhá, ale nerozhoduje. Systém postavený od nuly jenom AI agentem tuhle kontrolu nemá. Co AI udělá, to jde do produkce.</p>
<div class="karty-blok"><div class="mrizka mrizka--2 reveal">
<div class="karta"><h3>Vlastní vývoj od nuly jen s AI agentem</h3><ul class="fajfky">${varovani.map((v) => `<li>${odznakLucide('triangle-alert')}<span>${v}</span></li>`).join('')}</ul></div>
<div class="karta"><h3>Twenty s lidsky hlídaným jádrem + naše konfigurace</h3>${seznamFajfekHtml(plusy)}</div>
</div></div>
<div class="zvyrazneni"><p><strong>Co děláme my:</strong> tu specifickou vrstvu nad Twenty — přejmenování objektů, pár polí podle vašeho oboru, automatizace v Twenty workflow engine, propojení s ARES a vaším e-mailem, na přání i napojení na váš fakturační program. <strong>AI dnes pomáhá nám i vám — ale staví na jádru, které někdo zkontroloval.</strong> Vy nejste beta tester platformy, jste klient, který využívá vyzkoušený systém upravený pro váš obor.</p></div>
</div>`;
}

/** Seznam s fajfkami, položky už obsahují bezpečné HTML (z kódu, ne od čtenáře). */
function seznamFajfekHtml(polozky) {
  return `<ul class="fajfky">${polozky.map((p) => `<li>${odznakLucide('check')}<span>${p}</span></li>`).join('')}</ul>`;
}

/**
 * SLA balíčky jako cenové karty (pricing.json → sla_packages, hourly_rate).
 * U každého: cena, kredit, kolik hodin práce za něj zhruba je, bonus a efektivní sazba za hodinu.
 * Balíček s nejvyšším bonusem dostane výraznější rámeček.
 */
export function slaBalicky() {
  const sazba = pricing.hourly_rate.price;
  const baliky = pricing.sla_packages;
  const maxBonus = Math.max(...baliky.map((b) => b.bonus_pct));
  const cislo = (n) => String(Math.round(n * 10) / 10).replace('.', ',');
  const hodiny = (h) => `${cislo(h)} ${Number.isInteger(h) && h >= 5 ? 'hodin' : 'hodiny'}`;
  const karty = baliky
    .map((b) => {
      const h = b.credit / sazba;
      const efektivne = Math.round(b.price / h);
      const nejvyssi = b.bonus_pct === maxBonus && maxBonus > 0;
      return `<article class="sla-karta${nejvyssi ? ' sla-karta--zvyraznena' : ''}">
<p class="sla-karta__nazev">SLA ${e(b.name)}${nejvyssi ? ' <span class="sla-karta__stitek">nejvyšší bonus</span>' : ''}</p>
<p class="sla-karta__cena tnum">${formatCena(b.price)}</p>
<p class="sla-karta__pozn">jednorázově, bez DPH</p>
<ul class="sla-karta__body">
<li><strong class="tnum">${formatCena(b.credit)}</strong> kreditu — zhruba ${hodiny(h)} práce</li>
<li>${b.bonus_pct ? `bonus <strong>+${b.bonus_pct} %</strong>, ušetříte ${formatCena(b.savings)}` : 'bez bonusu'}</li>
<li>vychází na <strong class="tnum">${formatCena(efektivne)}</strong> za hodinu</li>
</ul>
</article>`;
    })
    .join('\n');
  return `<div class="sla-balicky reveal not-prose not-content">${karty}</div>`;
}
