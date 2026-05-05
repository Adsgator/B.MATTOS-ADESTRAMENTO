import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  site: 'https://mentoria.abeak9adestramento.com.br',
  integrations: [
    tailwind(),
    react(),
  ],
});
