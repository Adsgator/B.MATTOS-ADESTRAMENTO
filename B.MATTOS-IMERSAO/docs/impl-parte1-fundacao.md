# Documento de Implementação — Parte 1: Fundação
## Training Camping · Adsgator · 2026

> Enviar este arquivo para o Roo Code **primeiro**, antes de qualquer outro.
> Criar todos os arquivos na ordem exata. Executar `npm install` ao final desta parte.

---

## Ordem de execução

```bash
git init
git checkout -b dev
# criar todos os arquivos desta parte
npm install
git add -A
git commit -m "init: fundação Training Camping"
```

---

## Arquivo: `.clinerules`

```
# Roo Code — Regras do Projeto Training Camping
# Adsgator · 2026

## Stack obrigatória
- Astro (output: static)
- Tailwind CSS — tokens em tailwind.config.js, nunca HEX hardcoded
- React (apenas islands: MobileMenu, FAQAccordion, InstagramFeed, CookieBanner, LinksPage)
- GSAP + ScrollTrigger — em <script> bundled nos .astro, nunca em bundle React
- Framer Motion — dentro de islands React
- Lenis — <script> bundled no Layout.astro
- Vercel (deploy target)

## Ordem de implementação
1. Parte 1: Fundação (este arquivo)
2. npm install
3. Parte 2: Layout + Componentes Globais
4. Parte 3: Seções da Landing Page
5. Parte 4: Integrações + Páginas Adicionais
6. npm run build — zero erros antes de entregar

## Regras absolutas
- NUNCA alterar nenhuma palavra da copy do DOC-1
- NUNCA HEX hardcoded no código — sempre via token Tailwind
- NUNCA console.log em produção
- NUNCA client:load sem justificativa documentada em comentário
- NUNCA <div> clicável no lugar de <button> ou <a>
- NUNCA <form> HTML nativo em islands React — usar event handlers
- NUNCA imagem sem width, height e alt descritivo
- SEMPRE prefers-reduced-motion check antes de qualquer animação GSAP
- SEMPRE data-tracking e data-section em todos os CTAs e links WhatsApp
- SEMPRE focus-visible em todos os elementos interativos
- SEMPRE rel="noopener noreferrer" em links externos

## Convenção de nomes de arquivos
- Componentes Astro: PascalCase.astro
- Islands React: PascalCase.tsx
- Seções: NomeSection.astro (em src/sections/)
- Páginas: kebab-case.astro (em src/pages/)

## Variáveis de ambiente
- PUBLIC_GTM_ID → GTM ID
- INSTAGRAM_TOKEN → token da API do Instagram
- Nunca hardcodar valores de .env no código
```

---

## Arquivo: `.gitignore`

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Build output
dist/
.astro/

# Environment variables
.env
.env.local
.env.production

# Vercel
.vercel

# OS
.DS_Store
.DS_Store?
._*
Thumbs.db
ehthumbs.db

# Editor
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Testing
coverage/
```

---

## Arquivo: `package.json`

```json
{
  "name": "abeak9-training-camping",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/react": "^3.6.0",
    "@astrojs/sitemap": "^3.2.0",
    "@astrojs/tailwind": "^5.1.0",
    "@fontsource-variable/bricolage-grotesque": "^5.1.0",
    "@fontsource-variable/inter": "^5.1.0",
    "@studio-freight/lenis": "^1.0.42",
    "@vercel/analytics": "^1.3.1",
    "@vercel/speed-insights": "^1.0.12",
    "astro": "^4.16.0",
    "framer-motion": "^11.3.0",
    "gsap": "^3.12.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.5.0"
  }
}
```

---

## Arquivo: `astro.config.mjs`

```js
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
```

---

## Arquivo: `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1d23',
        secondary: '#fe5d16',
        background: '#ffffff',
        surface: '#f7f5f1',
        'text-main': '#1d1d1c',
        'text-support': '#535353',
        border: '#e5e3de',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: [
          '"Bricolage Grotesque Variable"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      borderRadius: {
        DEFAULT: '0.375rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse_soft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-soft': 'pulse_soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
```

---

## Arquivo: `.env.example`

```
# Google Tag Manager
# Substituir GTM-XXXXXXX pelo ID real antes do deploy
PUBLIC_GTM_ID=GTM-XXXXXXX

# WhatsApp
# Formato: DDI + DDD + número, somente dígitos
WHATSAPP_NUMBER=5511918952921

# Instagram Basic Display API
# Token gerado em developers.facebook.com
# Deixar em branco para ativar o fallback (link direto para o perfil)
INSTAGRAM_TOKEN=

# Web3Forms — apenas se formulário de contato ativo
# Não aplicável neste projeto (somente WhatsApp)
# ACCESS_KEY=

# Google Maps Embed API — apenas se mapa ativo
# Não aplicável neste projeto (endereço não autorizado)
# GOOGLE_MAPS_API_KEY=
```

---

## Arquivo: `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "strictNullChecks": true,
    "allowJs": true,
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Arquivo: `public/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="6" fill="#1a1d23"/>
  <rect x="0" y="0" width="6" height="32" rx="0" fill="#fe5d16"/>
  <text x="11" y="22" font-family="sans-serif" font-weight="700" font-size="13" fill="#ffffff">TC</text>
</svg>
```

---

## Estrutura de diretórios a criar

```bash
mkdir -p src/assets/images
mkdir -p src/components/global
mkdir -p src/components/islands
mkdir -p src/sections
mkdir -p src/pages
mkdir -p public
```

---

## Placeholders de imagem a criar em `src/assets/images/`

Criar os seguintes arquivos como placeholders (serão substituídos pelas fotos reais):

| Arquivo | Dimensões | Uso |
|---|---|---|
| `hero-principal.webp` | 1200×1400px | Hero — foto principal |
| `profissional-retrato.webp` | 800×1000px | Seção Diferenciais |
| `og-image.webp` | 1200×630px | Open Graph / compartilhamento |
| `avatar-links.webp` | 192×192px | Página /links |

> **Nota para o implementador:** Enquanto as fotos reais não chegam, criar um placeholder SVG
> de cada tamanho com fundo `#f7f5f1` e label descritivo centralizado.
> Exemplo de placeholder:
> ```svg
> <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1400" viewBox="0 0 1200 1400">
>   <rect width="1200" height="1400" fill="#f7f5f1"/>
>   <text x="600" y="700" text-anchor="middle" font-family="sans-serif"
>         font-size="24" fill="#535353">[hero-principal.webp — 1200×1400px]</text>
> </svg>
> ```

---

## Verificação ao final da Parte 1

```bash
# Confirmar que todos os arquivos existem
ls -la .clinerules .gitignore package.json astro.config.mjs tailwind.config.js tsconfig.json .env.example
ls -la public/favicon.svg
ls -la src/assets/images/

# Instalar dependências
npm install

# Confirmar que o build base funciona (sem páginas ainda — vai gerar erro de rota, esperado)
# Apenas verificar que não há erro de config
npx astro check 2>&1 | head -20

# Commit
git add -A
git commit -m "init: fundação Training Camping"
```
