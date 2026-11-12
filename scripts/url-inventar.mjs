// Vytáhne z původního webu (PHP) seznam URL → šablona → title/description
// a zapíše ho do docs/url-inventar.json + docs/url-inventar.md.
// Použití: node scripts/url-inventar.mjs [cesta-k-puvodnimu-repu]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const OLD = process.argv[2] ?? '../TwentyCRM.cz';
const router = readFileSync(join(OLD, 'web/src/Router.php'), 'utf8');
const ctrl = readFileSync(join(OLD, 'web/src/Controllers/PageController.php'), 'utf8');

const routes = [...router.matchAll(/addRoute\('GET',\s*'([^']+)',\s*\[PageController::class,\s*'(\w+)'\]/g)]
  .map(([, url, method]) => ({ url, method }));

// PHP single-quoted string: '…' with \' escapes
const phpStr = (key, body) => {
  const m = body.match(new RegExp(`'${key}'\\s*=>\\s*'((?:[^'\\\\]|\\\\.)*)'`));
  return m ? m[1].replace(/\\'/g, "'") : undefined;
};

const methods = {};
for (const m of ctrl.matchAll(/public function (\w+)\(\): void\s*\{([\s\S]*?)\n {4}\}/g)) {
  const body = m[2];
  methods[m[1]] = {
    view: body.match(/render\('([^']+)'/)?.[1],
    title: phpStr('title', body),
    description: phpStr('description', body),
    pageId: phpStr('pageId', body),
    noindex: /'noindex'\s*=>\s*true/.test(body),
    mailto: phpStr('mailtoTemplate', body),
  };
}

const target = (url) => (url === '/' ? 'index.md' : url.replace(/^\/|\/$/g, '') + '.md');
const rows = routes.map(({ url, method }) => {
  const m = methods[method] ?? {};
  // /obory/ může být obory.md i obory/index.md — obojí dává stejnou adresu
  const slozka = `src/content/stranky/${url.replace(/^\/|\/$/g, '')}/index.md`;
  const md = url !== '/' && existsSync(slozka) ? slozka : `src/content/stranky/${target(url)}`;
  return {
    url,
    view: `web/views/${m.view}.latte`,
    md,
    title: m.title,
    description: m.description,
    pageId: m.pageId,
    noindex: m.noindex,
    mailto: m.mailto,
    stav: existsSync(join('public', url, 'index.html'))
      ? 'statické HTML (public/)'
      : !existsSync(md)
      ? 'čeká'
      : /^stav:\s*rozpracovano\s*$/m.test(readFileSync(md, 'utf8'))
        ? 'rozpracováno'
        : 'převedeno',
  };
});

writeFileSync('docs/url-inventar.json', JSON.stringify(rows, null, 2) + '\n');
const done = rows.filter((r) => r.stav === 'převedeno').length;
const md = [
  '# Inventář URL — původní web → Astro',
  '',
  `Vygenerováno skriptem \`scripts/url-inventar.mjs\` z \`${OLD}/web/src/Router.php\`.`,
  'Všechny URL zůstávají 1:1, včetně lomítka na konci. Znovu spustit po každé převedené stránce.',
  '',
  `Celkem: **${rows.length}** URL · převedeno: **${done}**`,
  '',
  '| URL | Původní šablona | Markdown | noindex | Stav |',
  '|---|---|---|---|---|',
  ...rows.map(
    (r) =>
      `| \`${r.url}\` | \`${r.view.replace('web/views/', '')}\` | \`${r.md.replace('src/content/stranky/', '')}\` | ${r.noindex ? 'ano' : ''} | ${r.stav} |`,
  ),
  '',
].join('\n');
writeFileSync('docs/url-inventar.md', md);
console.log(`${rows.length} URL → docs/url-inventar.{json,md} (převedeno ${done})`);
