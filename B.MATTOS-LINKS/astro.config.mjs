// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  output: 'static',
  site: 'https://links.abeak9adestramento.com.br', // ajustar ao domínio final
  integrations: [
    tailwind(),

  ],
  vite: {
    resolve: {
      alias: {
        '~': '/src',
      },
    },

  },
});
