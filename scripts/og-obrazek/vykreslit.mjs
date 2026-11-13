#!/usr/bin/env node
/**
 * Vykreslí obrázek pro sdílení odkazu (1200×630) ze šablony og.html do public/og-image.jpg.
 * Používá Edge nebo Chrome v režimu bez okna a sharp (je v závislostech Astro) na převod do JPG.
 *
 *   node scripts/og-obrazek/vykreslit.mjs            # varianta usvit (na webu)
 *   node scripts/og-obrazek/vykreslit.mjs soumrak    # tmavá varianta
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const varianta = process.argv[2] ?? 'usvit';
const tady = dirname(fileURLToPath(import.meta.url));
const sablona = pathToFileURL(join(tady, 'og.html')).href + '#' + varianta;
const cil = resolve(tady, '../../public/og-image.jpg');

const prohlizece = [
  process.env.PROHLIZEC,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const prohlizec = prohlizece.find((p) => existsSync(p));
if (!prohlizec) throw new Error('Nenašel jsem Edge ani Chrome — nastavte cestu v proměnné PROHLIZEC.');

const docasne = mkdtempSync(join(tmpdir(), 'og-'));
const png = join(docasne, 'og.png');
execFileSync(prohlizec, [
  '--headless=new',
  `--user-data-dir=${join(docasne, 'profil')}`,
  '--disable-gpu',
  '--hide-scrollbars',
  '--allow-file-access-from-files',
  '--force-device-scale-factor=1',
  '--window-size=1200,630',
  '--virtual-time-budget=3000',
  `--screenshot=${png}`,
  sablona,
], { stdio: 'ignore' });
// Prohlížeč může skončit dřív, než soubor dopíše — chvíli počkat.
for (let i = 0; i < 50 && !existsSync(png); i++) await new Promise((r) => setTimeout(r, 200));

await sharp(png).jpeg({ quality: 90, mozjpeg: true }).toFile(cil);
try {
  rmSync(docasne, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
} catch {
  // Prohlížeč ještě drží profil — dočasnou složku smaže systém.
}
console.log(`og-image: ${varianta} → ${cil}`);
