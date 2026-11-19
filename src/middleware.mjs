// Úprava hotového HTML každé stránky (běží v dev serveru i při statickém buildu).
// Dnes jediná věc: partnerský parametr ?via=… v odkazech na twenty.com (viz src/lib/site.mjs).
import { defineMiddleware } from 'astro:middleware';
import { partnerskeOdkazyVHtml } from './lib/site.mjs';

export const onRequest = defineMiddleware(async (_context, next) => {
  const odpoved = await next();
  if (!(odpoved.headers.get('content-type') ?? '').includes('text/html')) return odpoved;
  const html = await odpoved.text();
  return new Response(partnerskeOdkazyVHtml(html), {
    status: odpoved.status,
    statusText: odpoved.statusText,
    headers: odpoved.headers,
  });
});
