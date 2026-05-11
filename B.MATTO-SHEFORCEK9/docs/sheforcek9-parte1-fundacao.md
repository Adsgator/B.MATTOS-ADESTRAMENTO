# SheForceK9 — Documento de Implementação
## PARTE 1 — Fundação
### `.clinerules`, `.gitignore`, `package.json`, `astro.config.mjs`, `tailwind.config.js`, `.env.example`

> Gerado por LandingAI · Adsgator · Para: Beatriz Mattos · sheforcek9.abeak9adestramento.com.br

---

## PASSO 0 — GIT INIT (executar antes de qualquer arquivo)

```bash
git init
git checkout -b dev
```

---

## ARQUIVO: `.gitignore`

```gitignore
# Dependencies
node_modules/

# Build output
dist/
.astro/

# Environment
.env
.env.local
.env.*.local

# OS
.DS_Store
Thumbs.db

# Editors
.vscode/
.idea/
*.swp
*.swo

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Vercel
.vercel/
```

---

## ARQUIVO: `.clinerules`

```markdown
# .clinerules — SheForceK9

## Identidade do Projeto
- Cliente: Beatriz Mattos
- Projeto: She ForceK9 — Curso de Guarda e Proteção para Mulheres
- Domínio: sheforcek9.abeak9adestramento.com.br
- Agência: Adsgator

## Stack
- Framework: Astro (output: static)
- Estilização: Tailwind CSS — tokens apenas, sem HEX hardcoded
- Islands React: MobileMenu, InstagramFeed, CookieBanner
- Animações: GSAP + ScrollTrigger (em scripts .astro), Framer Motion (em islands React)
- Scroll: Lenis integrado ao GSAP
- Deploy: Vercel (static)

## Regras Absolutas
1. NUNCA alterar a copy dos blocos — transcrever exatamente como no DOC-1
2. NUNCA HEX hardcoded no código — sempre via token Tailwind (ex: `bg-primary`)
3. NUNCA console.log em produção
4. NUNCA credenciais ou tokens no código — sempre em .env
5. NUNCA <div> clicável no lugar de <button> ou <a>
6. NUNCA <form> HTML nativo em islands React — usar event handlers
7. SEMPRE prefers-reduced-motion antes de qualquer animação GSAP
8. SEMPRE width, height e alt em toda imagem
9. SEMPRE rel="noopener noreferrer" em links externos
10. SEMPRE focus-visible em todos os elementos interativos

## Tokens de Design
- Fonte títulos: Bebas Neue
- Fonte corpo: DM Sans
- Cor primary: cor-primary (→ #fe5d16)
- Cor dark: cor-dark (→ #1a1d23)
- Cor background: cor-bg (→ #f9f0df)
- Cor texto: cor-text (→ #1d1d1c)
- Cor suporte: cor-muted (→ #535353)

## Estrutura de Arquivos Esperada
src/
  assets/images/          → hero-principal.webp, profissional-retrato.webp, og-image.webp, favicon.svg, avatar-links.webp
  components/
    global/               → Layout.astro, Header.astro, Footer.astro, Button.astro, SectionHeader.astro, FeatureCard.astro, GTM.astro
    islands/              → MobileMenu.tsx, InstagramFeed.tsx, CookieBanner.tsx
  pages/
    index.astro           → landing page principal
    links.astro           → árvore de links
    404.astro             → página 404 personalizada
    politica-de-privacidade.astro
    termos-de-uso.astro
  sections/               → Hero.astro, Servico.astro, Diferenciais.astro, ComoFunciona.astro, Precos.astro, FAQ.astro, InstagramSection.astro, CTAFinal.astro
public/
  robots.txt
  manifest.json
```

---

## ARQUIVO: `package.json`

```json
{
  "name": "sheforcek9",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^4.8.0",
    "@astrojs/react": "^3.2.0",
    "@astrojs/sitemap": "^3.1.0",
    "@astrojs/tailwind": "^5.1.0",
    "@fontsource/dm-sans": "^5.0.0",
    "@studio-freight/lenis": "^1.0.45",
    "@vercel/analytics": "^1.2.2",
    "@vercel/speed-insights": "^1.0.9",
    "framer-motion": "^11.1.7",
    "gsap": "^3.12.5",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "tailwindcss": "^3.4.3"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "^5.4.0"
  }
}
```

> **Nota de instalação:**
> ```bash
> npm install
> npm install --save-dev @types/react @types/react-dom typescript
> # Bebas Neue via CDN Google Fonts (configurado no Layout.astro) — não há pacote @fontsource
> ```

---

## ARQUIVO: `astro.config.mjs`

```js
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
```

---

## ARQUIVO: `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        // Tokens de cor — nunca usar HEX direto no código
        primary:    '#fe5d16', // laranja da marca
        dark:       '#1a1d23', // quase preto — header, footer, CTAs
        bg:         '#f9f0df', // creme — fundo principal
        surface:    '#f0e6d0', // creme mais escuro — fundo seções alternadas
        text:       '#1d1d1c', // texto principal
        muted:      '#535353', // texto secundário / suporte
        'primary-hover': '#e04d0c', // laranja escurecido para hover
        'dark-lighter': '#252830', // dark levemente mais claro para superfícies no escuro
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans:    ['"DM Sans"',    'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala tipográfica editorial
        'display-2xl': ['clamp(3.5rem, 8vw, 7rem)',  { lineHeight: '0.95', letterSpacing: '0.01em' }],
        'display-xl':  ['clamp(2.8rem, 6vw, 5.5rem)', { lineHeight: '1',    letterSpacing: '0.01em' }],
        'display-lg':  ['clamp(2.2rem, 4vw, 4rem)',   { lineHeight: '1.05', letterSpacing: '0.01em' }],
        'display-md':  ['clamp(1.8rem, 3vw, 3rem)',   { lineHeight: '1.1',  letterSpacing: '0.01em' }],
        'body-lg':     ['1.125rem', { lineHeight: '1.75' }],
        'body-md':     ['1rem',     { lineHeight: '1.7'  }],
        'body-sm':     ['0.875rem', { lineHeight: '1.65' }],
        'label':       ['0.75rem',  { lineHeight: '1',    letterSpacing: '0.15em' }],
      },
      spacing: {
        // Espaçamento de seção
        'section-y-mobile':  '6rem',   // py-24
        'section-y-desktop': '10rem',  // py-40
      },
      maxWidth: {
        'prose-tight': '60ch',
        'content':     '1280px',
        'wide':        '1440px',
      },
      borderRadius: {
        // Regra: sem arredondamento excessivo
        DEFAULT: '0.25rem',  // rounded-sm para botões
        'card':  '0.375rem', // rounded para cards
      },
      boxShadow: {
        // Regra: sombras apenas em tons neutros, max opacity 0.15
        'card':   '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.13)',
        'button': '0 2px 12px rgba(254,93,22,0.20)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'float':   'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
```

---

## ARQUIVO: `.env.example`

```env
# Google Tag Manager — substituir antes do deploy
GTM_ID=GTM-XXXXXXX

# WhatsApp — DDI + DDD + número, sem espaços ou símbolos
WHATSAPP_NUMBER=5511918952921

# Mensagem pré-preenchida URL-encoded
WHATSAPP_MESSAGE=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.

# Web3Forms — se formulário de contato for ativado
ACCESS_KEY=

# Instagram Feed — token da Graph API (se feed dinâmico for ativado)
INSTAGRAM_TOKEN=

# Google Maps API Key — se embed avançado for necessário (embed básico por iframe não precisa)
GOOGLE_MAPS_API_KEY=

# Domínio canônico
SITE_URL=https://sheforcek9.abeak9adestramento.com.br
```

---

## ARQUIVO: `public/robots.txt`

```
User-agent: *
Allow: /

Disallow: /links
Disallow: /politica-de-privacidade
Disallow: /termos-de-uso

Sitemap: https://sheforcek9.abeak9adestramento.com.br/sitemap-index.xml
```

---

## ARQUIVO: `public/manifest.json`

```json
{
  "name": "SheForceK9 — Curso de Proteção para Mulheres",
  "short_name": "SheForceK9",
  "description": "Curso presencial de guarda e proteção com cães para mulheres. São José dos Campos/SP.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f9f0df",
  "theme_color": "#1a1d23",
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
```

---

## ARQUIVO: `src/styles/global.css`

```css
/* Importar DM Sans via @fontsource */
@import '@fontsource/dm-sans/400.css';
@import '@fontsource/dm-sans/400-italic.css';
@import '@fontsource/dm-sans/500.css';
@import '@fontsource/dm-sans/600.css';
@import '@fontsource/dm-sans/700.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    scroll-behavior: auto; /* Lenis cuida do smooth scroll */
  }

  html {
    font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
    background-color: #f9f0df;
    color: #1d1d1c;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Focus visible global — nunca outline:none sem substituto */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-primary;
  }

  /* Prefers reduced motion — desativa animações CSS */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer components {
  /* Container padrão do projeto */
  .container-content {
    @apply mx-auto max-w-content px-6 lg:px-12;
  }

  /* Label de seção — texto pequeno uppercase acima dos títulos */
  .section-label {
    @apply font-sans text-label font-semibold uppercase tracking-[0.15em] text-primary;
  }

  /* Título de seção com Bebas Neue */
  .section-title {
    @apply font-display text-display-lg text-dark;
  }

  /* Subtítulo de seção */
  .section-subtitle {
    @apply font-sans text-body-lg text-muted leading-relaxed;
  }
}
```

---

## ARQUIVO: `src/assets/images/` — Placeholders obrigatórios

Criar os seguintes placeholders até os assets reais chegarem:

| Nome do arquivo           | Dimensões  | Descrição                                               |
|---------------------------|------------|---------------------------------------------------------|
| `hero-principal.webp`     | 1200×800px | Foto da instrutora Beatriz com cão em ambiente urbano   |
| `profissional-retrato.webp` | 800×1000px | Retrato da Beatriz para seção Diferenciais            |
| `og-image.webp`           | 1200×630px | Imagem para compartilhamento social                     |
| `favicon.svg`             | SVG nativo | Logo da marca em SVG                                    |
| `avatar-links.webp`       | 192×192px  | Foto circular para página /links                        |

**Nota:** Enquanto os assets reais não chegam, usar `<div>` com fundo `bg-surface` + texto descritivo conforme padrão Adsgator. Nunca cor sólida genérica sem label.

---

## COMANDO DE COMMIT INICIAL

```bash
git add .
git commit -m "init: fundação do projeto SheForceK9 — Adsgator"
git branch main
git checkout main
# Conectar ao remoto:
git remote add origin [URL_DO_REPOSITÓRIO]
git push -u origin main
```

---

> **Próximo arquivo:** Parte 2 — Layout + Componentes Globais
