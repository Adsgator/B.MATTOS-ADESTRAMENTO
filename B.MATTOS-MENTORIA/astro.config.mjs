// astro.config.mjs
// NOTA: output 'hybrid' permite páginas estáticas + endpoint serverless /api/contato.
// Todas as páginas têm export const prerender = true — comportamento idêntico a 'static'.
// Somente src/pages/api/contato.ts é serverless (necessário para Resend funcionar).
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  site: 'https://mentoria.abeak9adestramento.com.br',
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
  ],
});
