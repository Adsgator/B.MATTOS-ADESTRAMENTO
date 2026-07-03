import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    output: 'static',
    site: 'https://presencial.abeak9adestramento.com.br',
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
    ],
    image: {
        domains: [],
    },
});
