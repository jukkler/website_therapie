import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://therapiezentrum-ziesemer.de',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE' },
      },
    }),
  ],
  image: {
    domains: [],
  },
});
