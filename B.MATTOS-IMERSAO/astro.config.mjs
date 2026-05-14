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
    // sitemap habilitado na Parte 5+ (versão do @astrojs/sitemap com bug será corrigida)
    // sitemap({
    //   filter: (page) =>
    //     ![
    //       `${SITE}/links/`,
    //       `${SITE}/politica-de-privacidade/`,
    //       `${SITE}/termos-de-uso/`,
    //       `${SITE}/404/`,
    //     ].includes(page),
    // }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@studio-freight/lenis'],
    },
  },
});
