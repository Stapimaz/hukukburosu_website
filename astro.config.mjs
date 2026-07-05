import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://Stapimaz.github.io',
  base: '/hukukburosu_website',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr-TR',
          en: 'en-US',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
