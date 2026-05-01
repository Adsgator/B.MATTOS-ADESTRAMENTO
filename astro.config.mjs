// astro.config.mjs
// NOTA: output 'hybrid' permite páginas estáticas + endpoint serverless /api/contato.
// Todas as páginas têm export const prerender = true — comportamento idêntico a 'static'.
// Somente src/pages/api/contato.ts é serverless (necessário para Resend funcionar).
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static', // nunca 'server' ou 'hybrid'
  site: 'https://beatrizmattos.com.br',
  integrations: [
    tailwind(),
    react(),
  ],
});
