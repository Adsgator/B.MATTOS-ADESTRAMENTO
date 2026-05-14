import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://imersao.abeak9adestramento.com.br';

export default defineConfig({
  output: 'static',
  site: SITE,
  integrations: [
    tailwind({ applyBaseStyles: true }),
    react(),
    sitemap({
      filter: (page) =>
        ![
          `${SITE}/links/`,
          `${SITE}/politica-de-privacidade/`,
          `${SITE}/termos-de-uso/`,
          `${SITE}/404/`,
        ].includes(page),
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR' },
      },
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@studio-freight/lenis'],
    },
  },
});
