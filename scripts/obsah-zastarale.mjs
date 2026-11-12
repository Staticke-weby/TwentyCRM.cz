// npm run obsah:zastarale [-- --prisne] [-- --vse]
// Najde texty, které je potřeba přeověřit:
//   · „overeno" starší než 90 dní,
//   · funkce, o kterých text mluví, se po datu ověření změnila (nové vydání v registru) nebo byla přeověřena,
//   · zdroj textu je v registru označený jako nedostupný,
// a stav registrů: funkce ověřené před víc než 90 dny, nezpracovaná vydání, dlouho nekontrolované zdroje.
// --prisne = skončí chybou, když něco najde (před vydáním webu). --vse = vypíše i stránky bez data ověření.
//
// Spouštět týdně a před každým vydáním (docs/plan-pruvodce.md kap. 4.3).
import { funkce, zdroje, vydani, historieFunkce, najdiFunkci } from '../src/lib/twenty.mjs';
import { nactiObsah, funkceStranky } from './lib/obsah.mjs';

const LIMIT_DNI = 90;
const LIMIT_ZDROJE_DNI = 35;
const prisne = process.argv.includes('--prisne');
const vse = process.argv.includes('--vse');
const dnes = new Date().toISOString().slice(0, 10);
const dni = (od) => Math.floor((Date.parse(dnes) - Date.parse(od)) / 86400000);
const zdrojPodleId = new Map(zdroje.map((z) => [z.id, z]));

const nalezy = [];
const obsah = nactiObsah();
const bezOvereni = [];

for (const s of obsah) {
  const ids = funkceStranky(s, funkce);
  const relevantni = s.overeno || ids.size || s.zdroje.length;
  if (!relevantni) {
    bezOvereni.push(s);
    continue;
  }
  const radky = [];
  if (!s.overeno) radky.push('chybí „overeno" (datum, kdy člověk text naposledy prošel proti zdrojům)');
  else if (dni(s.overeno) > LIMIT_DNI) radky.push(`ověřeno před ${dni(s.overeno)} dny (${s.overeno})`);

  for (const id of s.funkce) {
    try {
      najdiFunkci(id);
    } catch {
      radky.push(`neznámá funkce „${id}" ve frontmatteru`);
    }
  }
  if (s.overeno) {
    for (const id of ids) {
      const f = funkce.find((x) => x.id === id);
      if (!f) continue;
      const pozdejsi = historieFunkce(id).filter((h) => h.datum > s.overeno);
      for (const h of pozdejsi) radky.push(`funkce „${f.nazev}" se změnila ve v${h.verze} (${h.datum}): ${h.co}`);
      if (f.overeno > s.overeno && !pozdejsi.length) radky.push(`funkce „${f.nazev}" byla v registru přeověřena ${f.overeno} — stav: ${f.stav}`);
    }
  }
  for (const id of s.zdroje) {
    const z = zdrojPodleId.get(id);
    if (!z) radky.push(`neznámý zdroj „${id}"`);
    else if (z.stav !== 'ok') radky.push(`zdroj „${z.nazev}" je ${z.stav} (${z.url})`);
  }
  if (radky.length) nalezy.push({ nadpis: `${s.url}${s.draft ? ' (koncept)' : ''}  ${s.soubor}`, radky });
}

const registr = [];
for (const f of funkce) if (dni(f.overeno) > LIMIT_DNI) registr.push(`funkce ${f.id}: ověřena před ${dni(f.overeno)} dny`);
for (const z of zdroje) {
  if (z.stav !== 'ok') registr.push(`zdroj ${z.id}: ${z.stav} — ${z.url}`);
  else if (dni(z.zkontrolovano) > LIMIT_ZDROJE_DNI) registr.push(`zdroj ${z.id}: nekontrolován ${dni(z.zkontrolovano)} dní (npm run zdroje:kontrola -- --zapis)`);
}
const nezpracovana = vydani.filter((v) => !v.zpracovano);
if (nezpracovana.length) registr.push(`nezpracovaná vydání: ${nezpracovana.map((v) => v.verze).join(', ')}`);
const posledni = vydani[0];
if (posledni && dni(posledni.datum) > 14) registr.push(`poslední vydání v registru je ${posledni.verze} z ${posledni.datum} — spusťte npm run twenty:vydani`);

for (const n of nalezy) {
  console.log(`✗ ${n.nadpis}`);
  for (const r of n.radky) console.log(`    · ${r}`);
}
if (registr.length) {
  console.log('\nRegistry (src/data/twenty):');
  for (const r of registr) console.log(`    · ${r}`);
}
console.log(
  `\n${obsah.length} stránek, ${obsah.length - bezOvereni.length} s ověřovanými fakty (overeno / funkce / zdroje), k přeověření: ${nalezy.length}; ` +
    `poznámek k registrům: ${registr.length}. Stránek bez vazby na registr: ${bezOvereni.length}${vse ? '' : ' (vypíše --vse)'}.`,
);
if (vse) for (const s of bezOvereni) console.log(`    ${s.url}${s.draft ? ' (koncept)' : ''}`);
if (prisne && (nalezy.length || registr.length)) process.exit(1);
