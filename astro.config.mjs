// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://devapplications.xyz';

/**
 * Spanish lives at the root and English under /en/, and game pages also
 * change their folder (/juegos/x/ ↔ /en/games/x/), so each sitemap entry
 * gets its translation linked with hreflang here.
 * @param {string} url
 */
function alternatesFor(url) {
  const path = url.slice(site.length);
  const game = path.match(/^\/(?:juegos|en\/games)\/([^/]+)\/$/);
  if (game) return { es: `/juegos/${game[1]}/`, en: `/en/games/${game[1]}/` };
  if (path === '/' || path === '/en/') return { es: '/', en: '/en/' };
  return null;
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      serialize(item) {
        const alt = alternatesFor(item.url);
        if (alt) {
          item.links = [
            { lang: 'es-ES', url: `${site}${alt.es}` },
            { lang: 'en-US', url: `${site}${alt.en}` },
          ];
        }
        return item;
      },
    }),
  ],
  output: 'static',
  site,
  trailingSlash: 'always',
});
