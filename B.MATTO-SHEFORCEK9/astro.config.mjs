import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    output: 'static',
    site: 'https://sheforcek9.abeak9adestramento.com.br',
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
        sitemap({
            filter: (page) =>
                !page.includes('/links') &&
                !page.includes('/politica-de-privacidade') &&
                !page.includes('/termos-de-uso') &&
                !page.includes('/404'),
        }),
    ],
    image: {
        domains: [],
    },
});