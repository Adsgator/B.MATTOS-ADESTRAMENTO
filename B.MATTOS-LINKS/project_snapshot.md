# Project Snapshot

**Projeto:** `B. MATTOS`  
**Gerado em:** 2026-05-03 00:27:16  
**Total de arquivos:** 37  
**Raiz:** `C:\PROJETOS\SITE CLIENTES\B. MATTOS`  

---

## 📁 Estrutura de Arquivos

```
B. MATTOS/
├── 📁 _docs/
│   ├── 📄 BEATRIZ_MATTOS_DOC03_IMPLEMENTACAO.md (62.4KB)
│   ├── 📄 Briefing-Mentoria-Online-Beatriz-Mattos.md
│   └── 📄 implementação-lp.md (72.5KB)
├── 📁 public/
│   ├── 📄 manifest.json
│   └── 📄 robots.txt
├── 📁 src/
│   ├── 📁 assets/
│   │   └── 📁 images/
│   ├── 📁 components/
│   │   ├── 📄 Button.astro
│   │   ├── 📄 ContactForm.tsx
│   │   ├── 📄 CookieBanner.tsx
│   │   ├── 📄 FeatureCard.astro
│   │   ├── 📄 GTM.astro
│   │   ├── 📄 Icon.astro
│   │   ├── 📄 MobileMenu.tsx
│   │   ├── 📄 SectionHeader.astro
│   │   └── 📄 StickyCTA.astro
│   ├── 📁 layouts/
│   │   └── 📄 Layout.astro (15.7KB)
│   ├── 📁 pages/
│   │   ├── 📁 api/
│   │   │   └── 📄 contato.ts
│   │   ├── 📄 404.astro
│   │   ├── 📄 index.astro
│   │   ├── 📄 links.astro
│   │   └── 📄 politica-de-privacidade.astro
│   ├── 📁 sections/
│   │   ├── 📄 ComoFuncionaSection.astro
│   │   ├── 📄 ContatoSection.astro
│   │   ├── 📄 CTAFinalSection.astro
│   │   ├── 📄 DiferenciaisSection.astro
│   │   ├── 📄 FAQSection.astro
│   │   ├── 📄 HeroSection.astro
│   │   ├── 📄 PlanosSection.astro
│   │   └── 📄 ServicosSection.astro
│   ├── 📄 dump_project_v2.py (13.0KB)
│   └── 📄 env.d.ts
├── 📄 .clinerules
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 .rooignore
├── 📄 astro.config.mjs
├── 📄 package.json
├── 📄 project_snapshot.md (199.7KB)
├── 📄 README.md
└── 📄 tailwind.config.js
```

---

## 📄 Conteúdo dos Arquivos

### `.env.example`

```text
GTM_ID=
RESEND_API_KEY=
WHATSAPP_NUMBER=5511918952921
```

### `.gitignore`

```gitignore
# Dependências
node_modules/
.pnp
.pnp.js

# Build
dist/
.output/
.vercel/
.netlify/

# Astro
.astro/

# Ambiente — NUNCA commitar
.env
.env.local
.env.development
.env.production
.env.staging
*.env

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Cache
.cache/
.parcel-cache/
.turbo/

# Editores
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.DS_Store
Thumbs.db

# Testes
coverage/
.nyc_output/

# Temporários
*.tmp
*.temp
*.bak
*.orig

# Sistema
.DS_Store
.AppleDouble
.LSOverride
Desktop.ini
$RECYCLE.BIN/

# Certificados locais
*.pem
*.key
*.cert

.vercel
```

### `README.md`

```markdown
# adsgator-base

Projeto-base da Adsgator. Duplicar para cada novo cliente — nunca editar este original.

## Estrutura

```
adsgator-base/
├── .clinerules          → regras permanentes — Roo lê automaticamente
├── .gitignore           → proteção do Git
├── .rooignore           → o que o Roo ignora
├── .roo/
│   └── modes.yaml       → modos customizados do Roo
└── _docs/
    └── ficha-implementacao.md   → vazio, aguardando o Doc 3
```

## Como usar

Ver `_docs/COMO-INICIAR-PROJETO.md` para o passo a passo completo.
Ver `_docs/COMANDOS.md` para os comandos prontos de cada etapa.

## Documentos de produção (templates)

Os três documentos da esteira ficam fora deste projeto — em pasta separada de templates:

```
adsgator-templates/
├── [Nome_Cliente]-01-copy-e-estrutura.md
├── [Nome_Cliente]-02-brainstorm-visual.md
└── [Nome_Cliente]-03-ficha-implementacao.md  ← gerado pela IA, não template
```
```

### `astro.config.mjs`

```javascript
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
  site: 'https://abeak9adestramento.com.br',
  integrations: [
    tailwind(),
    react(),
  ],
});
```

### `package.json`

```json
{
  "name": "beatriz-mattos-landing",
  "type": "module",
  "version": "1.0.0",
  "engines": {
    "node": "20.x"
  },
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/react": "^3.6.0",
    "@astrojs/sitemap": "^3.2.0",
    "@astrojs/tailwind": "^5.1.0",
    "@fontsource-variable/inter": "^5.1.0",
    "@fontsource/anton": "^5.2.7",
    "@fontsource/bebas-neue": "^5.2.7",
    "@fontsource/caveat": "^5.1.0",
    "@fontsource/dm-serif-display": "^5.1.0",
    "@studio-freight/lenis": "^1.0.42",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "astro": "^4.16.0",
    "framer-motion": "^11.11.0",
    "gsap": "^3.12.5",
    "lucide-react": "^0.414.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "resend": "^4.0.0",
    "tailwindcss": "^3.4.14"
  }
}
```

### `project_snapshot.md`

```markdown

```

### `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background:  '#F9F0DF',
        foreground:  '#1A1D23', // Azul profundo quase preto
        primary: {
          DEFAULT:    '#1A1D23',
          foreground: '#F9F0DF',
        },
        accent: {
          DEFAULT:    '#FF4D00', // Laranja Tático Vibrante
          foreground: '#FFFFFF',
        },
        surface:     '#F1E6D0',
        border:      '#1A1D23',
        muted: {
          DEFAULT:    '#E5DCC8',
          foreground: '#4A5568',
        },
        whatsapp:    '#25D366',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand:  ['Caveat', 'cursive'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 7vw, 5.5rem)',    { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'h1':      ['clamp(2.85rem, 7vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h2':      ['clamp(1.75rem, 4vw, 3rem)',    { lineHeight: '1.0',  letterSpacing: '-0.015em' }],
        'h3':      ['clamp(1.25rem, 2.5vw, 2rem)',  { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'body-lg': ['1.1875rem',                    { lineHeight: '1.6' }],
        'body':    ['1rem',                         { lineHeight: '1.6' }],
        'small':   ['0.8125rem',                    { lineHeight: '1.5' }],
        'label':   ['0.75rem',                      { lineHeight: '1', letterSpacing: '0.1em' }],
        'cta':     ['clamp(1.15rem, 4vw, 2rem)', { lineHeight: '1', letterSpacing: '0.05em' }],
        'hand-lg': ['2.25rem',                      { lineHeight: '1' }],
      },
      spacing: {
        'section':    'clamp(3.5rem, 8vw, 7rem)',
        'section-sm': '3.5rem',
        'container':  '1.25rem',
      },
      maxWidth: {
        'content': '1200px',
        'narrow':  '860px',
        'tight':   '700px',
      },
      borderRadius: {
        'btn':  '0px',
        'card': '0px',
        'img':  '0px',
      },
      boxShadow: {
        'card': '8px 8px 0px 0px rgba(26, 29, 35, 1)',
        'btn':  '4px 4px 0px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
```

### `_docs\BEATRIZ_MATTOS_DOC03_IMPLEMENTACAO.md`

> ⚠️ **Truncado:** mostrando primeiras 1000 linhas

```markdown
# BEATRIZ MATTOS — Ficha de Implementação

> **Documento 3 de 3 — Adsgator**
> Gerado a partir do Doc 1 (Copy e Estrutura) + Doc 2 (Brainstorm e Direção).
> Este documento é o brief técnico completo para a IA implementadora.
> Copie, cole e execute — sem edições adicionais, exceto os campos listados na Seção 12.

---

## INSTRUÇÃO MESTRE

Você é um engenheiro front-end sênior responsável por construir uma landing page de alta conversão para **Beatriz Mattos**, adestradora com serviço de mentoria online individual. O projeto usa **Astro + Tailwind CSS + GSAP + Framer Motion**. O objetivo único de conversão é levar o usuário a enviar uma mensagem no WhatsApp com 5 informações pré-preenchidas — sem que ele precise digitar nada além de confirmar o envio.

A página funciona como **filtro ativo**: o preço é exibido, o processo é detalhado, as objeções são respondidas. Quem clica no CTA já sabe o que vai fazer e por quê. Nenhuma CTA deve redirecionar para formulário externo ou página de obrigado separada — tudo acontece inline ou via WhatsApp.

**Regras absolutas que você jamais viola:**
- Zero HEX hardcoded no código — sempre via token Tailwind definido em `tailwind.config.js`
- Zero `console.log` em produção
- Zero imagem sem `width` e `height` definidos
- Zero animação sem `prefers-reduced-motion` check
- Zero credencial ou token hardcoded — sempre via `.env`
- Zero cópia alterada — a copy está neste documento palavra por palavra e não muda nem uma vírgula
- Zero `<form>` HTML nativo em islands React — usar event handlers
- Zero `<div>` clicável no lugar de `<button>` ou `<a>`
- `<h1>` única por página — sempre no Hero
- Hierarquia de headings lógica: h1 → h2 → h3. Nunca pular nível.

**Padrão de qualidade:** editorial premium com personalidade orgânica. Referências visuais: functionhealth.com (tipografia com serifa, off-white, blocos limpos) + outseta.com (elementos manuais, setas Caveat, toque humano) + Saga Adestramento (layouts assimétricos, foco no humano em ação). O site não pode parecer gerado por IA nem template de pet shop. Cada detalhe — espaçamento, peso tipográfico, transição — é intencional.

**Stack:** Astro · Tailwind CSS · GSAP + ScrollTrigger · Framer Motion · Lenis · Resend (formulário)
**Deploy alvo:** Vercel (`output: 'static'`)
**Tracking:** Google Tag Manager (ID a inserir no `.env`)
**Acessibilidade:** WCAG AA mínimo em todo contraste de texto

---

## 1. VISÃO GERAL

| Campo | Valor |
|---|---|
| **Cliente** | Beatriz Mattos |
| **Marca** | Beatriz Mattos \| Adestradora |
| **Serviço principal** | Mentoria Online para donos de cães e adestradores |
| **Objetivo de conversão** | Mensagem no WhatsApp com 5 campos pré-preenchidos |
| **Número WhatsApp** | 5511918952921 |
| **Link CTA principal** | `https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A` |
| **E-mail de contato** | abeamattosk9@gmail.com |
| **Instagram** | @abeak9 |
| **TikTok** | @abeak9 |
| **Horário de atendimento** | Segunda a Sexta, 09h às 17h |
| **Modalidade** | 100% online via Google Meet |
| **GTM ID** | Inserir via `.env` — `GTM_ID` |
| **Deploy** | Vercel — output estático |
| **Tema visual** | Claro |
| **Páginas do projeto** | `/` (landing page) · `/links` (árvore de links) · `/politica-de-privacidade` · `/404` |

---

## 2. METADADOS DE SEO

### Landing Page — `src/pages/index.astro`

```html
<title>Mentoria de Adestramento Online | Beatriz Mattos</title>
<meta name="description" content="Seu cão não responde porque a base de comunicação está errada. Mentoria online individual com Beatriz Mattos. Entenda como funciona e fale agora.">
<meta name="keywords" content="mentoria adestramento online, adestramento para cães com ansiedade, adestramento reatividade cães, mentoria para adestradores iniciantes, como resolver ansiedade de separação cão, adestramento online funciona, adestrador online individual">
<meta property="og:title" content="Mentoria de Adestramento Online | Beatriz Mattos">
<meta property="og:description" content="Seu cão não responde porque a base de comunicação está errada. Mentoria individual online — 1x, 2x ou 3x por semana. Fale com Beatriz Mattos.">
<meta property="og:image" content="/assets/images/og-image.webp">
<meta property="og:type" content="website">
<link rel="canonical" href="https://[dominio-do-cliente].com.br/">
```

### Página /links — `src/pages/links.astro`

```html
<title>Beatriz Mattos | Adestradora — Links</title>
<meta name="description" content="Mentoria online, cursos e contato direto com Beatriz Mattos, adestradora.">
<link rel="canonical" href="https://[dominio-do-cliente].com.br/links">
```

### Página /politica-de-privacidade — `src/pages/politica-de-privacidade.astro`

```html
<title>Política de Privacidade e Termos de Uso — Beatriz Mattos</title>
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://[dominio-do-cliente].com.br/politica-de-privacidade">
```

### Página /404 — `src/pages/404.astro`

```html
<meta name="robots" content="noindex">
```

---

## 3. STACK TÉCNICA

```
NÚCLEO IMUTÁVEL
───────────────
Astro          → Framework base. Saída estática por padrão. Zero JS desnecessário.
                 astro.config.mjs: output: 'static', site: 'https://[dominio].com.br'
                 @astrojs/sitemap instalado e configurado.
                 Exclui do sitemap: /links, /politica-de-privacidade, /404

Tailwind CSS   → Toda estilização. Tokens em tailwind.config.js.
                 Sem style="" onde Tailwind resolve.
                 Sem HEX hardcoded no código — sempre via token.

Node.js        → Ambiente de build.

Lenis          → Smooth scroll global. npm install @studio-freight/lenis
                 Inicializado em <script is:inline> no Layout.astro.
                 duration: 1.2 | easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                 Integrado ao GSAP: lenis.on('scroll', ScrollTrigger.update)

EXTENSÕES (apenas onde necessário)
───────────────────────────────────
React          → Somente para componentes com estado dinâmico real:
                 MobileMenu.tsx, InstagramFeed.tsx (se ativo), ContactForm.tsx, CookieBanner.tsx
                 Sempre com client:visible ou client:idle (nunca client:load sem justificativa)

GSAP + ScrollTrigger → Animações de scroll e timelines.
                 Direto em <script> dentro dos .astro — nunca via import em bundle React.
                 gsap.registerPlugin(ScrollTrigger) obrigatório antes de qualquer uso.

Framer Motion  → Dentro de islands React.
                 Menu mobile fullscreen (AnimatePresence), hover em cards, CTA spring.

Resend         → Backend do formulário de contato.
                 npm install resend | Variável: RESEND_API_KEY no .env

DEPLOY
──────
Target: Vercel — output: 'static' em astro.config.mjs
Alternativa aceita: Netlify — mesma configuração

ARQUIVOS OBRIGATÓRIOS
──────────────────────
public/robots.txt → Permite: / | Proíbe: /links | Sitemap: https://[dominio]/sitemap-index.xml
public/manifest.json → name, short_name, start_url, display: 'standalone',
                        background_color: '#F9F0DF', theme_color: '#313C4E',
                        icons: [192px, 512px derivados do SVG da logo]
.env.example → GTM_ID= | RESEND_API_KEY= | WHATSAPP_NUMBER=5511918952921
```

---

## 4. SISTEMA DE DESIGN

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background:  '#F9F0DF',   // creme quente — fundo principal da página
        foreground:  '#313C4E',   // azul-ardósia escuro — texto principal
        primary: {
          DEFAULT:    '#313C4E',  // azul-ardósia — botões primários, headings
          foreground: '#F9F0DF',  // creme — texto sobre botão primário
        },
        accent: {
          DEFAULT:    '#DF4637',  // coral-vermelho — CTAs de destaque, marcadores
          foreground: '#F9F0DF',  // creme — texto sobre botão accent
        },
        surface:     '#F2E8D5',   // creme levemente mais escuro — cards, fundo de seções alternadas
        border:      '#DDD0BC',   // bege quente — bordas sutis
        muted: {
          DEFAULT:    '#EDE0CC',  // creme acinzentado — fundos de hover, badges
          foreground: '#7A8595',  // cinza-azulado — textos secundários, labels
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'ui-serif', 'Georgia', 'serif'],
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand:  ['Caveat', 'cursive'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5.5vw, 4.25rem)',  { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':      ['clamp(2.25rem, 5vw, 3.75rem)',   { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2':      ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        'h3':      ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3',  letterSpacing: '-0.01em' }],
        'body-lg': ['clamp(1rem, 1.5vw, 1.125rem)',   { lineHeight: '1.7' }],
        'body':    ['1rem',                            { lineHeight: '1.65' }],
        'small':   ['0.875rem',                        { lineHeight: '1.5' }],
        'label':   ['0.75rem',                         { lineHeight: '1', letterSpacing: '0.1em' }],
        'hand-lg': ['clamp(1.25rem, 2vw, 1.75rem)',   { lineHeight: '1.3' }],
      },
      spacing: {
        'section': '6rem',        // py-section — espaçamento padrão entre seções
        'section-sm': '4rem',     // seções mais compactas
        'container': '1.25rem',   // padding lateral mobile mínimo
      },
      maxWidth: {
        'content':  '72rem',      // max-w-content — container de conteúdo padrão (1152px)
        'narrow':   '48rem',      // max-w-narrow — textos longos, FAQ (768px)
        'tight':    '38rem',      // max-w-tight — copy de seções centralizadas (608px)
      },
      borderRadius: {
        'btn':  '0px',    // botões — sem arredondamento, postura de autoridade
        'card': '4px',    // cards — levemente arredondado, não excessivo
        'img':  '2px',    // imagens — quase reto
      },
      boxShadow: {
        'card': '0 2px 12px rgba(49, 60, 78, 0.08)',
        'btn':  '0 4px 16px rgba(49, 60, 78, 0.18)',
      },
    },
  },
  plugins: [],
}
```

---

### Tipografia

**DM Serif Display** — Serifa editorial, elegante. Usada em H1, H2 e texto de impacto. Evoca autoridade acadêmica sem frieza corporativa. Inspira functionhealth.com.
```
npm install @fontsource/dm-serif-display
import '@fontsource/dm-serif-display'; // weight 400 (único weight disponível)
```

**Inter** — Sans-serif técnica e limpa. Usada em body, labels, navegação e CTAs. Alta legibilidade em qualquer tamanho.
```
npm install @fontsource-variable/inter
import '@fontsource-variable/inter';   // variable font — pesos 300 a 700
```

**Caveat** — Handwriting natural. Usada exclusivamente em elementos manuais decorativos: setas, sublinhados enfatizados, anotações ao lado de seções. Inspira outseta.com.
```
npm install @fontsource/caveat
import '@fontsource/caveat/700.css';   // apenas weight 700 — mais legível em tamanho pequeno
```

**font-display: swap** — obrigatório. Confirmar que Fontsource não está sendo sobrescrito.

Fallback stack declarado em tailwind.config.js — nunca deixar o navegador escolher.

---

### Ícones

**Biblioteca:** `lucide-react`
**Estilo:** outline exclusivamente — nunca misturar solid e outline na mesma página
**strokeWidth:** `1.5` em todos os ícones sem exceção
**Tamanho padrão:** `h-5 w-5` (20px)
**Tamanho grande (diferenciais, como funciona):** `h-6 w-6` (24px)
**Cor:** sempre via token — `text-foreground` (padrão), `text-accent` (destaque), `text-muted-foreground` (secundário)
**Ícones icon-only** (WhatsApp flutuante, hambúrguer, fechar menu): obrigatório `aria-label` descritivo

---

### Bordas e Arredondamento

| Elemento | Classe Tailwind |
|---|---|
| Botões | `rounded-btn` (0px — sem arredondamento) |
| Cards de serviço, diferenciais, planos | `rounded-card` (4px) |
| Imagens do profissional | `rounded-img` (2px) |
| Avatar circular (/links) | `rounded-full` |
| Inputs do formulário | `rounded-card` (4px) |
| Accordion FAQ | `rounded-card` (4px) |

---

### Sistema de Animação

**Filosofia:** animação tem função. Revelar, guiar, confirmar. Nunca decorativa.
**prefers-reduced-motion:** todas as animações GSAP encapsuladas em:
```js
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // animação aqui
}
```

**Tokens GSAP:**

| Parâmetro | Valor |
|---|---|
| Duração padrão de entrada | `0.7s` |
| Duração rápida (micro) | `0.3s` |
| Duração lenta (hero) | `1.0s – 1.4s` |
| Easing entrada | `power2.out` |
| Easing saída | `power2.in` |
| Easing spring (botões) | `elastic.out(1, 0.5)` via Framer Motion |

**Triggers por bloco:**

| Bloco | Trigger | Animação |
|---|---|---|
| Hero | Timeline imediata (sem ScrollTrigger) | H1 → subtítulo → CTA → imagem. `opacity: 0→1, y: 30→0`, duração `1.0s`, stagger `0.15s` |
| Seções internas | `ScrollTrigger start="top 80%"` | `opacity: 0→1, y: 40→0`, duração `0.7s` |
| Cards em grid | `ScrollTrigger + stagger 0.1s` por card | Mesma entrada das seções |
| Títulos de seção | `ScrollTrigger start="top 85%"` | `opacity: 0→1, y: 20→0`, duração `0.6s` — dispara antes dos cards |
| CTA Final | `ScrollTrigger start="top 75%"` | `scale: 0.96→1 + opacity: 0→1`, duração `0.8s`, `power3.out` |
| Passos (Como Funciona) | `ScrollTrigger + stagger 0.12s` | `opacity: 0→1, x: -20→0` (desktop) / `y: 20→0` (mobile) |

**Tokens Framer Motion (islands React):**

| Elemento | Animação |
|---|---|
| Hambúrguer → X | `rotate + scale`, `0.3s`, spring stiffness 300 damping 20 |
| Menu overlay | `opacity 0→1`, `0.25s ease-out` |
| Links do menu | stagger `0.05s`, `y: 20→0 + opacity: 0→1` |
| Hover em cards | `y: -4px, scale: 1.01`, `0.2s ease-out` |
| Hover em botões | `scale: 1.03`, `0.15s spring` |
| CTA pulse (sutil) | `scale 1→1.04→1`, loop a cada `3s`, só quando visível no viewport |

**Lenis + GSAP sync:**
```js
gsap.ticker.add((time) => { lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)
```

---

## 5. COMPONENTES GLOBAIS

Criar todos estes componentes antes de montar qualquer seção. Nunca duplicar lógica — se dois blocos usam o mesmo padrão, usam o mesmo componente.

### Componentes Astro

**`Layout.astro`**
Shell global. Contém: `<head>` completo com SEO tags, GTM snippet (head + body), Lenis init, Schema.org JSON-LD, preconnect e preload críticos, import das fontes Fontsource, componente MobileMenu, botão WhatsApp flutuante, rodapé, CookieBanner island.
Props: `title`, `description`, `ogTitle`, `ogDescription`, `canonicalUrl`

**`Button.astro`**
Props: `label` (string), `href` (string), `variant` ('primary' | 'accent' | 'secondary' | 'ghost'), `trackingId` (string), `section` (string), `newTab` (boolean, default false)
Variantes:
- `primary`: `bg-primary text-primary-foreground hover:opacity-90`
- `accent`: `bg-accent text-accent-foreground hover:opacity-90`
- `secondary`: `border border-foreground text-foreground hover:bg-muted`
- `ghost`: `text-foreground underline underline-offset-4 hover:text-accent`
Sempre com: `id={trackingId}`, `data-tracking="click-whatsapp"` (se href = wa.me), `data-section={section}`, `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`
Nunca escrever botão inline nas seções — sempre instanciar `<Button />`.

**`SectionHeader.astro`**
Props: `label` (string — texto pequeno acima), `title` (string — H2), `subtitle` (string — opcional), `align` ('left' | 'center', default 'left')
Label: `font-sans text-label uppercase tracking-widest text-accent font-semibold`
Title: `font-serif text-h2 text-foreground`
Subtitle: `font-sans text-body-lg text-muted-foreground max-w-tight`

**`FeatureCard.astro`**
Props: `icon` (nome do ícone Lucide), `title` (string), `description` (string)
Layout: `bg-surface rounded-card p-6 border border-border shadow-card`
Icon: `h-6 w-6 text-accent strokeWidth={1.5}`

**`GTM.astro`**
Props: `id` (string — ex: GTM-XXXXXXX)
Entrega os dois snippets do GTM: um no `<head>` (via slot), um imediatamente após `<body>`.
Diretiva: `<script is:inline>` — nunca processar com bundler.
Inclui o Google Consent Mode v2 default (tudo `denied`) antes do snippet GTM.

### Componentes React (islands)

**`MobileMenu.tsx`**
Props: `links` (Array<{label: string, href: string}>), `ctaLabel` (string), `ctaHref` (string)
Fullscreen overlay com `AnimatePresence`. Hambúrguer com morphing animado (3 linhas → X).
Fundo: `bg-foreground` com opacidade 97% — escuro, impactante.
Links: `font-serif text-h2 text-primary-foreground` — tipografia grande, entra em stagger.
Elemento de destaque no fundo: número de telefone `(11) 91895-2921` como link `tel:` + botão WhatsApp em destaque.
Focus trap ativo enquanto aberto. Escape fecha. Bloqueia scroll do body (`overflow-hidden`).
`aria-hidden="true"` em links do desktop enquanto fechado.

**`ContactForm.tsx`**
Props: `whatsappFallback` (string — URL do WhatsApp)
Formulário simples com os 5 campos de filtro. Submit via Resend (API route Astro).
ErrorBoundary: se submit falhar, exibe link direto para WhatsApp como fallback.
Honeypot: campo `website` com `position: absolute; left: -9999px; opacity: 0;`, `tabIndex={-1}`, `autoComplete="off"`. Se preenchido, rejeitar silenciosamente.
Loading state: botão com spinner, desabilitado durante submit.
Success state: inline — mensagem de confirmação substitui o formulário com fade-in.

**`CookieBanner.tsx`**
Props: `gtmId` (string)
`client:idle` — não compete com LCP.
Barra horizontal fixa no bottom. Fundo: `bg-surface backdrop-blur-sm border-t border-border`.
Dois botões: "Aceitar" (primary) e "Recusar" (ghost).
Estado em `localStorage`: chave `'adsgator-consent'`, valor `'granted'` | `'denied'`.
Entrada/saída: `AnimatePresence`, slide de baixo para cima.
Dispara `gtag('consent', 'update', {...})` ao aceitar.

---

## 6. INFRAESTRUTURA DE RASTREAMENTO

### GTM.astro — código completo

```html
<!-- Consent Mode v2 DEFAULT — inserir ANTES do snippet GTM -->
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
</script>

<!-- GTM snippet HEAD — imediatamente após <meta charset> -->
<script is:inline>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');
</script>

<!-- GTM snippet BODY — imediatamente após <body> -->
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    height="0" width="0" style="display:none;visibility:hidden" is:inline></iframe>
</noscript>
```

Substituir `GTM-XXXXXXX` pelo valor da variável de ambiente `import.meta.env.GTM_ID`.

---

### Mapa de CTAs e data-attributes

| ID do botão | data-tracking | data-section | Localização |
|---|---|---|---|
| `btn-cta-header` | `click-whatsapp` | `header` | Botão fixo no header |
| `btn-cta-hero` | `click-whatsapp` | `hero` | CTA principal do Hero |
| `btn-cta-servico` | `click-whatsapp` | `servico` | CTA da seção O Serviço |
| `btn-cta-como-funciona` | `click-whatsapp` | `como-funciona` | CTA de Como Funciona |
| `btn-cta-diferenciais` | `click-whatsapp` | `diferenciais` | CTA de Diferenciais |
| `btn-cta-planos` | `click-whatsapp` | `planos` | CTA de Planos e Preços |
| `btn-cta-faq` | `click-whatsapp` | `faq` | CTA do FAQ |
| `btn-submit-form` | `submit-form` | `formulario` | Botão de envio do formulário |
| `btn-cta-final` | `click-whatsapp` | `cta-final` | CTA Final |
| `btn-wpp-floating` | `click-whatsapp` | `floating-button` | Botão flutuante WhatsApp |
| `link-wpp-footer` | `click-whatsapp` | `footer` | Link WhatsApp no footer |
| `link-tel-footer` | `click-tel` | `footer` | Link telefone no footer |

### Mapa de conversões Google Ads

| Conversão | Trigger |
|---|---|
| `contato_wpp` | Todos os cliques em elementos com `data-tracking="click-whatsapp"` |
| `view_content` | Pageview da landing page `/` (GTM trigger: Page View) |
| `view_links` | Pageview de `/links` (GTM trigger: Page View filtrado por URL) |

---

## 7. UX E PERFORMANCE

### Preload e Performance Crítica (em Layout.astro, no `<head>`)

```html
<!-- Preconnect para domínio da fonte -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">

<!-- Preload da fonte principal (DM Serif Display woff2) -->
<link rel="preload" href="/fonts/dm-serif-display-v14-latin-regular.woff2"
  as="font" type="font/woff2" crossorigin="anonymous">

<!-- Preload da imagem hero (apenas hero-principal.webp) -->
<link rel="preload" href="/assets/images/hero-principal.webp"
  as="image" fetchpriority="high">
```

### Lenis — inicialização completa (em Layout.astro, `<script is:inline>`)

```js
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => { lenis.raf(time * 1000) });
gsap.ticker.lagSmoothing(0);
```

### Menu Fixo Inteligente (desktop)

- `sticky top-0 z-50`
- Esconde ao scrollar para baixo: `gsap.to(header, { y: '-100%', duration: 0.3, ease: 'power2.in' })`
- Reaparece ao scrollar para cima: `gsap.to(header, { y: 0, duration: 0.3, ease: 'power2.out' })`
- Fundo muda após 80px de scroll: `bg-background/95 backdrop-blur-sm transition-all duration-200`
- Logo: link para `#top`, SVG nativo
- Sempre contém: logo à esquerda + nav links âncora + botão CTA WhatsApp (`btn-cta-header`)

### Botão WhatsApp Flutuante

- `fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40`
- Mínimo `w-14 h-14` (56px) — touch target efetivo `64px` com padding interno
- SVG nativo do WhatsApp — cor `#25D366` — sem biblioteca externa
- Oculto no carregamento: `opacity-0 scale-0`
- Aparece quando Hero sai do viewport: `IntersectionObserver` no `#hero`
- Desaparece quando footer entra no viewport: `IntersectionObserver` no `footer`
- Entrada: `scale 0→1 + opacity 0→1`, `0.3s ease-out` (GSAP ou CSS transition)
- `aria-label="Falar com Beatriz no WhatsApp"` obrigatório
- `id="btn-wpp-floating" data-tracking="click-whatsapp" data-section="floating-button"`
- `href` = link CTA principal (da Seção 1)

### Mobile First

- Touch targets mínimo `44x44px` em todos os elementos interativos
- Padding lateral mobile mínimo: `px-5` — nunca menos
- Base para mobile, sobrescrever com `md:` e `xl:`
- Breakpoint principal para 2 colunas: `xl:` (1280px)
- Texto nunca menor que `16px` no mobile
- `-webkit-tap-highlight-color: transparent` no CSS global

### Rodapé

- Ano dinâmico: `{new Date().getFullYear()}`
- Links para `/politica-de-privacidade`
- CNPJ: não fornecido — omitir campo

---

## 8. PROIBIÇÕES VISUAIS

```
SEM gradientes coloridos entre duas cores vibrantes
SEM sombras coloridas — box-shadow apenas em tons neutros, máx opacity 0.15
SEM backgrounds com ilustrações genéricas ou stock vectors de pets
SEM bordas arredondadas excessivas — máx rounded-card (4px) em botões e cards
SEM ícones coloridos — monocromático, sempre via token de cor do texto ou accent
SEM mistura de estilos de ícone — lucide-react outline em 100% das instâncias
SEM copy alterada — o texto deste documento não muda nem uma vírgula
SEM HEX hardcoded no código — sempre via token Tailwind
SEM animação sem prefers-reduced-motion check
SEM credencial, token ou API key no código — sempre em variáveis .env
SEM console.log em produção
SEM imagem sem width e height definidos (provoca layout shift)
SEM <form> HTML nativo em islands React — usar event handlers
SEM <div> ou <span> clicável — sempre <button> ou <a>
SEM visual de pet shop (fotos de cachorro genéricas, paleta pastel, ícones de patinha)
SEM visual de startup tech escura — o tema é claro, quente, editorial
SEM elementos flutuantes aleatórios sem função — o Caveat só aparece como anotação intencional
SEM Playfair Display pesada ou serifas dramáticas em body — só DM Serif Display em títulos
SEM font-weight 900 ou black em nenhum elemento
```

---

## 9. ASSETS DO PROJETO

### Imagens

| Nome do arquivo | Dimensões | Proporção | Tratamento | loading | Placeholder |
|---|---|---|---|---|---|
| `hero-principal.webp` | 800 × 1000px | 4:5 | Cor natural, recorte vertical | `eager` | `[Foto da Beatriz em ação com cão — 800×1000px]` |
| `profissional-retrato.webp` | 600 × 750px | 4:5 | Cor natural, enquadramento meio-corpo | `lazy` | `[Retrato da Beatriz — fundo neutro ou exterior real — 600×750px]` |
| `og-image.webp` | 1200 × 630px | 1.91:1 | Composição: nome + tagline sobre fundo `#F9F0DF` com foto da Beatriz à direita | `eager` | `[OG Image — Beatriz Mattos Adestradora]` |
| `avatar-links.webp` | 192 × 192px | 1:1 | Circular, rosto da Beatriz, fundo limpo | `eager` | `[Avatar circular — 192×192px]` |

Todos os arquivos obrigatoriamente em: `src/assets/images/[nome].webp`
Componente de imagem: sempre `<Image />` nativo do Astro com `format="webp"`.
Placeholders: `bg-surface` com label descritivo dentro — nunca cor sólida genérica sem label.

### Logo

- Formato: SVG nativo (`src/assets/logo.svg`)
- Header: altura `h-8` (32px), width proporcional, `currentColor`
- Footer: altura `h-7` (28px)
- Página /links: altura `h-10` (40px), centralizada
- Nunca usar PNG da logo

### Favicon

- `public/favicon.svg` — SVG nativo derivado da logo
- Nunca PNG como favicon principal

---

## 10. ESPECIFICAÇÃO POR SEÇÃO

> **REGRA CRÍTICA:** a copy abaixo é transcrita palavra por palavra do Doc 1. Não alterar nem uma vírgula. As especificações de Layout, Tipografia e Animação são instruções técnicas adicionadas abaixo da copy.

---

### SEÇÃO: Cabeçalho

**Copy:**
- LOGO / LABEL: "Beatriz Mattos | Adestradora"
- ITENS DE MENU:
  - "Como funciona"
  - "Planos"
  - "Perguntas frequentes"
- CTA / BOTÃO (fixo no topo): "Falar no WhatsApp"

**Implementação:**
- Layout: `sticky top-0 z-50 w-full` / Desktop: `flex items-center justify-between px-6 xl:px-12 h-16` / Mobile: `flex items-center justify-between px-5 h-14`
- Fundo: `bg-background/95 backdrop-blur-sm border-b border-border` (após 80px de scroll)
- Fundo inicial: `bg-transparent` (no topo da página)
- Transição de fundo: `transition-all duration-200`
- Logo: `<Image src={logo} alt="Beatriz Mattos Adestradora" height={32} loading="eager" />` linkada a `#top`
- Navegação desktop: `hidden xl:flex items-center gap-8` — links âncora (`#como-funciona`, `#planos`, `#faq`) em `font-sans text-body text-foreground hover:text-accent transition-colors`
- CTA header: `<Button variant="accent" label="Falar no WhatsApp" href={wppUrl} trackingId="btn-cta-header" section="header" />` — `px-5 py-2.5 text-small font-semibold`
- Mobile: logo + hambúrguer apenas — sem links de navegação inline
- Componentes: `Button.astro`, `MobileMenu.tsx` (island `client:load`)
- Animação: hide/show no scroll via GSAP (ver Seção 7)
- Rastreamento: `id="btn-cta-header" data-tracking="click-whatsapp" data-section="header"`
- Export: `export default Header` — montado dentro de `Layout.astro`

---

### SEÇÃO: Hero — Impacto Inicial

**Copy:**
- TÍTULO PRINCIPAL (H1): "Seu cão não responde porque a comunicação entre vocês está cheia de ruído."
- SUBTÍTULO / TEXTO DE APOIO: "Mentoria online individual com Beatriz Mattos — para donos que querem conduzir o próprio cão com clareza, e adestradores que querem atender com segurança técnica."
- TEXTO DE REFORÇO: "Encontros semanais pelo Google Meet. Análise dos seus treinos. Suporte direto via WhatsApp. Sem enrolação — direto no problema que está travando você."
- CTA / BOTÃO: "Quero começar minha mentoria"

**Implementação:**
- Layout: `section#hero` / Mobile: `flex flex-col` / Desktop: `xl:grid xl:grid-cols-[55fr_45fr] xl:items-center`
- Fundo: `bg-background`
- Espaçamento: `pt-24 pb-16 xl:pt-32 xl:pb-24 px-5 xl:px-12` — espaço generoso acima por causa do header fixo
- Coluna texto: `flex flex-col gap-6 xl:gap-8 xl:max-w-[580px]`
- H1: `font-serif text-h1 text-foreground` — DM Serif Display, peso regular, quebra de linha natural
- **Elemento Caveat:** logo abaixo de "cheia de ruído", um sublinhado ondulado manuscrito em `font-hand text-hand-lg text-accent` apontando para o CTA — ex: seta ou anotação `"é aqui que a gente começa"`. Posicionado absolutamente ao lado do CTA ou logo abaixo da H1. SVG inline ou texto Caveat em `italic font-bold text-accent rotate-[-3deg]`.
- Subtítulo: `font-sans text-body-lg text-muted-foreground`
- Texto de reforço: `font-sans text-body text-muted-foreground` — separado por linha ou badge
- CTA: `<Button variant="accent" label="Quero começar minha mentoria" href={wppUrl} trackingId="btn-cta-hero" section="hero" />` — `px-8 py-4 text-body font-semibold`
- Coluna imagem: `mt-10 xl:mt-0` / `<Image src={heroImage} alt="Beatriz Mattos em sessão de adestramento com cão, conduzindo o treino" width={800} height={1000} loading="eager" class="w-full max-w-[480px] xl:max-w-full rounded-img object-cover" />`
- Mobile: imagem abaixo do texto, full-width
- Desktop: imagem à direita, leve recorte superior e inferior
- Animação: timeline GSAP sem ScrollTrigger — dispara no `DOMContentLoaded`
  ```js
  gsap.timeline()
    .from('h1', { opacity: 0, y: 30, duration: 1.0, ease: 'power2.out' })
    .from('.hero-subtitle', { opacity: 0, y: 24, duration: 0.8, ease: 'power2.out' }, '-=0.6')
    .from('.hero-reforco', { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' }, '-=0.5')
    .from('#btn-cta-hero', { opacity: 0, y: 16, duration: 0.7, ease: 'power2.out' }, '-=0.4')
    .from('.hero-image', { opacity: 0, x: 30, duration: 1.2, ease: 'power2.out' }, '-=0.8')
    .from('.hero-hand-annotation', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'elastic.out(1,0.5)' }, '-=0.3')
  ```
- Rastreamento: `id="btn-cta-hero" data-tracking="click-whatsapp" data-section="hero"`
- Export: `HeroSection.astro`

---

### SEÇÃO: O Serviço

**Copy:**
- LABEL: "A Mentoria"
- TÍTULO PRINCIPAL: "O principal professor do seu cão é você. A mentoria existe para te preparar para esse papel."
- SUBTÍTULO / TEXTO DE APOIO: "A mentoria online da Beatriz Mattos é individual, técnica e direta. Não é curso gravado. Não é consultoria genérica. É um acompanhamento semanal focado no seu caso específico — com análise do que você já faz, correção do que está gerando ruído e construção de uma base sólida de comunicação com o seu cão."
- ITENS — Para donos de cães:
  - "Você aprende a usar marcadores e comandos claros, sem ambiguidade."
  - "Entende por que o seu cão não responde — e o que mudar na sua conduta."
  - "Trabalha casos concretos: ansiedade por separação, reatividade, manejo no dia a dia."
  - "Se torna independente. Usa a mentoria para construir base, não como muleta permanente."
- ITENS — Para adestradores iniciantes:
  - "Você aprende a estruturar treinos comportamentais de forma segura e efetiva."
  - "Desenvolve análise aplicada para cada perfil de cão e de cliente."
  - "Ganha segurança técnica para atender sem depender de outro profissional."
  - "Tem acesso direto à visão de quem já trabalhou com muitos perfis e não retém informação."
- CTA / BOTÃO: "Quero entender como funciona para o meu caso"

**Implementação:**
- Layout: `section#servico` / `py-section px-5 xl:px-12` / `max-w-content mx-auto`
- Fundo: `bg-surface` — diferencia visualmente do Hero
- SectionHeader: `<SectionHeader label="A Mentoria" title="O principal professor do seu cão é você. A mentoria existe para te preparar para esse papel." subtitle="A mentoria online da Beatriz Mattos é individual, técnica e direta. Não é curso gravado. Não é consultoria genérica. É um acompanhamento semanal focado no seu caso específico — com análise do que você já faz, correção do que está gerando ruído e construção de uma base sólida de comunicação com o seu cão." />`
- Cards abaixo do header: `mt-12 grid grid-cols-1 xl:grid-cols-2 gap-6`
- Card "Para donos de cães": `<FeatureCard />` com título do card em `font-serif text-h3`, lista de itens com marcadores `text-accent` (traço — `—`), `bg-background border border-border rounded-card p-8`
- Card "Para adestradores iniciantes": mesmo tratamento visual, `bg-background border border-border rounded-card p-8`
- Label de cada card: `font-sans text-label uppercase tracking-widest text-muted-foreground mb-3`
- Itens de lista: `font-sans text-body text-foreground` com marcador `text-accent mr-2` (traço `—`)
- CTA: `<Button variant="primary" ... />` — centralizado abaixo dos cards, `mt-10 mx-auto`
- Animação: ScrollTrigger `start="top 80%"` — header entra primeiro, depois cards em stagger `0.1s`
- Rastreamento: `id="btn-cta-servico" data-tracking="click-whatsapp" data-section="servico"`
- Export: `ServicosSection.astro`

---

### SEÇÃO: Como Funciona

**Copy:**
- LABEL: "Como Funciona"
- TÍTULO PRINCIPAL: "Individual, semanal e focado no seu caso — do primeiro encontro até a sua autonomia."
- SUBTÍTULO / TEXTO DE APOIO: "A mentoria não começa pelo cão. Começa por você. Primeiro resolvemos o que está travando — depois desenvolvemos os objetivos."
- ITENS (passo a passo):
  - Passo 1 — Primeiro contato via WhatsApp: "Você envia: raça, idade do cão, principal problema comportamental, histórico de adestramento e se está disposto a mudar a rotina. Esse filtro garante que a mentoria seja viável para o seu caso antes de você investir."
  - Passo 2 — Encontros semanais pelo Google Meet: "1, 2 ou 3 encontros por semana, 100% individuais. Você fala com a Beatriz diretamente — sem turma, sem generalização."
  - Passo 3 — Análise dos seus treinos: "Você filma, manda via WhatsApp. A Beatriz analisa e te devolve o que está gerando ruído na comunicação com o seu cão."
  - Passo 4 — Suporte entre encontros: "Dúvida surgiu na prática? Acesso direto pelo WhatsApp entre sessões."
  - Passo 5 — Você constrói autonomia: "O objetivo da mentoria é que você não precise dela para sempre. A independência é o produto final."
- CTA / BOTÃO: "Quero começar — falar com a Beatriz"

**Implementação:**
- Layout: `section#como-funciona` / `py-section px-5 xl:px-12` / `max-w-content mx-auto`
- Fundo: `bg-background`
- SectionHeader: `<SectionHeader label="Como Funciona" title="Individual, semanal e focado no seu caso — do primeiro encontro até a sua autonomia." subtitle="A mentoria não começa pelo cão. Começa por você. Primeiro resolvemos o que está travando — depois desenvolvemos os objetivos." />`
- Steps container: `mt-12 flex flex-col gap-0` (mobile) / `xl:grid xl:grid-cols-5 xl:gap-4` (desktop)
- Cada step: `relative flex xl:flex-col gap-4 xl:gap-3 items-start xl:items-center`
- Número do step: `font-serif text-display text-muted opacity-30 leading-none` — numeral grande como elemento visual de fundo relativo ao card
- Conteúdo do step: `flex-1`
- Título do step: `font-sans text-body font-semibold text-foreground`
- Texto do step: `font-sans text-body text-muted-foreground mt-1`
- Linha conectora (mobile): borda esquerda `border-l-2 border-border ml-5 pl-4` entre steps
- Linha conectora (desktop): linha horizontal `border-t-2 border-border` com position absolute, top 20px
- Ícone de cada step: Lucide — Passo 1: `MessageCircle`, Passo 2: `Video`, Passo 3: `Play`, Passo 4: `Headphones`, Passo 5: `Award` — `h-6 w-6 text-accent`
- CTA: `<Button variant="accent" ... />` — `mt-12 mx-auto block`
- Animação: ScrollTrigger `start="top 80%"`, steps entram com stagger `0.12s`, `x: -20→0` (desktop) / `y: 20→0` (mobile)
- Rastreamento: `id="btn-cta-como-funciona" data-tracking="click-whatsapp" data-section="como-funciona"`
- Export: `ComoFuncionaSection.astro`

---

### SEÇÃO: Diferenciais

**Copy:**
- LABEL: "Por que a Beatriz Mattos"
- TÍTULO PRINCIPAL: "Técnica sem ego. Didática sem filtro. Resultado sem atalho."
- SUBTÍTULO / TEXTO DE APOIO: "Beatriz Mattos treina pessoas antes de treinar cães. Essa é a diferença entre uma mentoria que gera dependência e uma que constrói autonomia de verdade."
- ITENS:
  - "Visão completa do comportamento animal" — Trabalhou com perfis variados, condições reais, sem roteiro de livro. O que funciona na prática é o que entra na mentoria.
  - "Nenhuma informação retida" — Sem ego de quem quer parecer indispensável. A Beatriz entrega a técnica completa — porque o objetivo é que você não precise dela mais do que o necessário.
  - "Complexidade traduzida em prática" — Análise do comportamento aplicada de forma clara. Sem misticismo, sem achismo. O que está errado tem nome e tem correção.
  - "Encontros 100% individuais" — Seu cão, seu caso, sua rotina. Sem generalização de grupo.
  - "Liderança com estabilidade" — O foco não é fazer o cão obedecer por pressão. É construir uma relação de comunicação clara — em que o cão entende o que se espera dele e o dono sabe como exigir.
- CTA / BOTÃO: "Quero me tornar independente no manejo do meu cão"

**Implementação:**
- Layout: `section#diferenciais` / `py-section px-5 xl:px-12` / `max-w-content mx-auto`
- Fundo: `bg-surface`
- Layout interno: `xl:grid xl:grid-cols-[1fr_1fr] xl:gap-16 xl:items-start`
- Coluna esquerda: SectionHeader + CTA + foto da Beatriz (`profissional-retrato.webp`)
- Coluna direita: grid de cards `grid grid-cols-1 gap-4`
- Foto: `<Image src={retrato} alt="Beatriz Mattos em contexto de trabalho real com cão" width={600} height={750} loading="lazy" class="mt-8 xl:mt-0 w-full max-w-[360px] rounded-img object-cover shadow-card" />`
- **Elemento Caveat:** anotação manuscrita ao lado da foto — `font-hand text-hand-lg text-accent rotate-[-2deg]` — ex: `"treina pessoas antes de cães →"` apontando para o retrato com uma seta SVG simples
- Cards: `<FeatureCard />` com ícones Lucide:
  - "Visão completa": `Layers`
  - "Nenhuma informação retida": `Unlock`
  - "Complexidade traduzida": `Target`
  - "Encontros 100% individuais": `User`
  - "Liderança com estabilidade": `Compass`
- Cada card: `bg-background border border-border rounded-card p-6 shadow-card`
- CTA: `<Button variant="primary" ... />` — `mt-8`
- Animação: ScrollTrigger `start="top 80%"` — header + foto entram juntos, cards em stagger `0.1s`
- Hover nos cards: Framer Motion `whileHover={{ y: -4, scale: 1.01 }}`
- Rastreamento: `id="btn-cta-diferenciais" data-tracking="click-whatsapp" data-section="diferenciais"`
- Export: `DiferenciaisSection.astro`

---

### SEÇÃO: Planos e Preços

**Copy:**
- LABEL: "Planos"
- TÍTULO PRINCIPAL: "Escolha o ritmo que se encaixa na sua rotina."
- SUBTÍTULO / TEXTO DE APOIO: "Todos os planos incluem encontros individuais pelo Google Meet, análise de vídeos dos seus treinos e suporte via WhatsApp entre sessões. Mínimo de 30 dias. Cancelamento com aviso prévio de 30 dias."
- PLANO 1: Nome: "1 encontro por semana" | Preço: "R$ 697/mês" | Ideal para: "Quem tem rotina mais fechada e quer evolução constante, sem sobrecarga."
- PLANO 2: Nome: "2 encontros por semana" | Preço: "R$ 747/mês" | Ideal para: "Quem quer avançar mais rápido e tem disponibilidade para trabalhar a prática com mais frequência."
- PLANO 3: Nome: "3 encontros por semana" | Preço: "R$ 897/mês" | Ideal para: "Quem está com um caso mais urgente ou quer imersão técnica intensiva."
- AVISO DE DESCONTO: "Pagamento via PIX tem 5% de desconto no primeiro mês. Cartão de crédito disponível — taxa por conta do cliente."
- CTA / BOTÃO: "Falar com a Beatriz e escolher meu plano"

**Implementação:**
- Layout: `section#planos` / `py-section px-5 xl:px-12` / `max-w-content mx-auto`
- Fundo: `bg-background`
- SectionHeader: centralizado (`align="center"`) — `max-w-tight mx-auto`
- Cards: `mt-12 grid grid-cols-1 md:grid-cols-3 gap-6` — Mobile: empilhados. Desktop: 3 colunas.
- Estrutura de cada card:
  ```
  bg-background border border-border rounded-card p-8 shadow-card
  flex flex-col gap-4
  ```
- Nome do plano: `font-sans text-label uppercase tracking-widest text-muted-foreground`
- Preço: `font-serif text-h2 text-foreground` — o número domina visualmente
- "por mês": `font-sans text-body text-muted-foreground`
- Linha divisória: `border-t border-border my-4`
- Label "Ideal para": `font-sans text-label uppercase tracking-widest text-muted-foreground`
- Texto ideal para: `font-sans text-body text-foreground`
- **Sem "Mais escolhido"** — a cliente não confirmou
- Aviso de desconto: `mt-8 bg-muted rounded-card p-4 font-sans text-small text-muted-foreground text-center` — abaixo dos cards, não escondido
- CTA: `<Button variant="accent" ... />` — `mt-8 mx-auto block`
- Animação: ScrollTrigger `start="top 80%"`, cards em stagger `0.12s`, `y: 40→0, opacity: 0→1`
- Rastreamento: `id="btn-cta-planos" data-tracking="click-whatsapp" data-section="planos"`
- Export: `PlanosSection.astro`

---

### SEÇÃO: FAQ

**Copy:**
- LABEL: "Perguntas Frequentes"
- TÍTULO PRINCIPAL: "Antes de falar com a Beatriz, leia isso."
- PERGUNTA 1: "Mentoria online realmente funciona para problemas comportamentais?" | RESPOSTA: "Funciona — porque o principal professor do seu cão é você, não o adestrador. O que a mentoria faz é te ensinar a conduzir, corrigir e comunicar de forma clara. Isso acontece no dia a dia, na sua casa, com o seu cão. O Google Meet é o meio, não a limitação."
- PERGUNTA 2: "As aulas ficam gravadas?" | RESPOSTA: "Não. Os encontros são ao vivo e individuais — o que garante foco total no seu caso. O que fica com você é o que você aprende e aplica."
- PERGUNTA 3: "Como funciona o suporte entre os encontros?" | RESPOSTA: "Via WhatsApp direto com a Beatriz. Você pode mandar vídeos dos treinos para análise e tirar dúvidas que surgem na prática."
- PERGUNTA 4: "Posso cancelar quando quiser?" | RESPOSTA: "O compromisso mínimo é de 30 dias. Depois disso, o cancelamento é feito com aviso prévio de 30 dias — o que garante que você não abandone o processo no meio de uma evolução."
- PERGUNTA 5: "É para mim se eu sou adestrador, não dono de cão?" | RESPOSTA: "Sim. A mentoria atende adestradores iniciantes que querem desenvolver segurança técnica para estruturar treinos e atender clientes com mais efetividade. O foco é técnico e prático — não teórico."
- PERGUNTA 6: "O que eu preciso enviar antes de começar?" | RESPOSTA: "No primeiro contato pelo WhatsApp: raça e idade do cão, principal problema comportamental, histórico de adestramento (se tiver) e se você está disposto a adaptar a rotina. Esse filtro existe para garantir que a mentoria vai funcionar para você."
- CTA / BOTÃO: "Ainda tem dúvida? Fala direto com a Beatriz"

**Implementação:**
- Layout: `section#faq` / `py-section px-5 xl:px-12`
- Fundo: `bg-surface`
- Container interno: `max-w-narrow mx-auto`
- SectionHeader: `align="left"` — `label="Perguntas Frequentes" title="Antes de falar com a Beatriz, leia isso."`
- Accordion: `mt-10 flex flex-col divide-y divide-border`
- Cada item accordion:
  - Trigger: `button` com `flex justify-between items-center w-full py-5 text-left`
  - Pergunta: `font-sans text-body font-semibold text-foreground`
  - Ícone: `ChevronDown` do Lucide, `h-5 w-5 text-muted-foreground`, rotaciona `rotate-180` quando aberto
  - Resposta: `font-sans text-body text-muted-foreground pb-5 pr-8` — anima com `height: 0 → auto` via CSS `transition-all` ou GSAP
  - Estado aberto/fechado: gerenciado por `data-open` no elemento pai + CSS
- Implementar como Astro com `<script>` inline (sem React) — accordion simples sem estado dinâmico complexo
- CTA: `<Button variant="secondary" label="Ainda tem dúvida? Fala direto com a Beatriz" href={wppUrl} trackingId="btn-cta-faq" section="faq" />` — `mt-10 w-full xl:w-auto`
- Animação: ScrollTrigger `start="top 80%"` — label + título entram, depois acordeon aparece com `opacity: 0→1`
- Rastreamento: `id="btn-cta-faq" data-tracking="click-whatsapp" data-section="faq"`
- Export: `FAQSection.astro`

---

### SEÇÃO: Formulário de Contato

> Esta seção substitui o Feed Instagram (que foi desmarcado nas integrações do Doc 2) e implementa o Formulário de Contato marcado como ativo.

**Copy:**
- LABEL: "Quero Começar"
- TÍTULO PRINCIPAL: "Preencha abaixo antes de ir para o WhatsApp."
- SUBTÍTULO / TEXTO DE APOIO: "São as mesmas informações que a Beatriz precisa para avaliar o seu caso. Preencha aqui e receba o retorno direto — sem precisar digitar tudo no WhatsApp."
- CAMPOS DO FORMULÁRIO:
  - Nome completo (obrigatório)
  - WhatsApp com DDD (obrigatório)
  - Raça do cão (obrigatório)
  - Idade do cão (obrigatório)
  - Principal problema comportamental — campo de texto livre (obrigatório)
  - Já passou por adestramento antes? — radio: "Sim" / "Não" (obrigatório)
  - Está disposto a dedicar tempo à rotina? — radio: "Sim" / "Não" (obrigatório)
- BOTÃO SUBMIT: "Enviar para a Beatriz"
- MENSAGEM DE SUCESSO: "Mensagem enviada. A Beatriz vai entrar em contato via WhatsApp em até 24h úteis."
- FALLBACK: "Prefere ir direto? → Falar no WhatsApp"

**Implementação:**
- Layout: `section#contato` / `py-section px-5 xl:px-12`
- Fundo: `bg-background`
- Container: `max-w-narrow mx-auto`
- SectionHeader: `label="Quero Começar"` | `title="Preencha abaixo antes de ir para o WhatsApp."` | `subtitle="São as mesmas informações que a Beatriz precisa para avaliar o seu caso. Preencha aqui e receba o retorno direto — sem precisar digitar tudo no WhatsApp."`
- Componente: `<ContactForm client:visible whatsappFallback={wppUrl} />`
- Skeleton antes da hidratação: `grid gap-4` com divs `h-12 bg-surface rounded-card animate-pulse` simulando os campos
- Estrutura dos campos no `ContactForm.tsx`:
  - Label: `font-sans text-small font-semibold text-foreground mb-1 block`
  - Input/Textarea: `w-full bg-surface border border-border rounded-card px-4 py-3 font-sans text-body text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-accent`
  - Radio: grupo com `flex gap-4`, radio nativo estilizado com Tailwind
  - Honeypot: `<input name="website" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', opacity: 0 }} />`
- Submit: `onClick` handler — sem `<form onSubmit>` HTML nativo
- Endpoint: `src/pages/api/contato.ts` — recebe o POST, valida honeypot, envia via Resend para `abeamattosk9@gmail.com`
- Loading state: spinner no botão + `disabled` durante a requisição
- Success state: substitui o formulário com mensagem de confirmação, fade-in `opacity: 0→1 0.4s`
- Fallback link: visível sempre abaixo do formulário — `font-sans text-small text-muted-foreground` com link `text-accent hover:underline`
- Rastreamento: `id="btn-submit-form" data-tracking="submit-form" data-section="formulario"`
- Export: `ContatoSection.astro` + `ContactForm.tsx`

---

### SEÇÃO: CTA Final

**Copy:**
- TÍTULO PRINCIPAL: "Pronto para parar de adivinhar o que o seu cão precisa?"
- SUBTÍTULO / TEXTO DE APOIO: "Manda uma mensagem para a Beatriz com as informações do seu cão. O próximo passo é uma conversa — não um compromisso."
- LEMBRETE DE FILTRO: "Antes de clicar, tenha em mãos: raça, idade, principal problema comportamental, histórico de adestramento e se você está disposto a mudar a rotina."
- CTA / BOTÃO: "Falar com a Beatriz no WhatsApp"

**Implementação:**
- Layout: `section#cta-final` / `py-section px-5 xl:px-12`
- Fundo: `bg-primary` — contraste máximo com o restante da página
- Container: `max-w-tight mx-auto text-center flex flex-col items-center gap-6`
- H2: `font-serif text-h2 text-primary-foreground` — DM Serif Display em creme sobre escuro
- Subtítulo: `font-sans text-body-lg text-primary-foreground opacity-80`
- Lembrete de filtro: `font-sans text-small text-primary-foreground opacity-60 max-w-[480px]`
- CTA: `<Button variant="accent" label="Falar com a Beatriz no WhatsApp" href={wppUrl} trackingId="btn-cta-final" section="cta-final" />` — `px-10 py-5 text-body font-semibold`
- **Elemento Caveat:** anotação `font-hand text-hand-lg text-accent opacity-70 rotate-[2deg]` — ex: `"↙ é aqui"` apontando para o botão
- Animação: ScrollTrigger `start="top 75%"`, `scale: 0.96→1 + opacity: 0→1`, duração `0.8s`, `power3.out`
- Hover no CTA: Framer Motion `whileHover={{ scale: 1.03 }}` + CTA pulse `scale 1→1.04→1` a cada 3s quando visível
- Rastreamento: `id="btn-cta-final" data-tracking="click-whatsapp" data-section="cta-final"`
- Export: `CTAFinalSection.astro`

---

### SEÇÃO: Rodapé

**Copy:**
- NOME / MARCA: "Beatriz Mattos | Adestradora"
- LINKS DE NAVEGAÇÃO: "Como funciona" | "Planos" | "Perguntas frequentes"
- CONTATO: WhatsApp: (11) 91895-2921 | E-mail: abeamattosk9@gmail.com
- REDES SOCIAIS: Instagram: @abeak9 | TikTok: @abeak9
- TEXTO LEGAL: "© {new Date().getFullYear()} Beatriz Mattos. Todos os direitos reservados."
- POLÍTICA DE PRIVACIDADE: "Política de Privacidade"

**Implementação:**
- Layout: `footer` / `bg-foreground py-12 px-5 xl:px-12`
- Container: `max-w-content mx-auto`
- Desktop: `grid grid-cols-3 gap-12` — coluna 1: marca | coluna 2: navegação | coluna 3: contato
- Mobile: `flex flex-col gap-8`
- Coluna 1 — Marca: Logo SVG em `currentColor text-primary-foreground h-7` + tagline curta `font-sans text-small text-primary-foreground opacity-60 mt-2`
- Coluna 2 — Navegação: label `font-sans text-label uppercase tracking-widest text-muted-foreground mb-4` | Links âncora em `font-sans text-small text-primary-foreground opacity-70 hover:opacity-100 block mb-2`
- Coluna 3 — Contato: WhatsApp como `<a href="tel:+5511918952921" data-tracking="click-tel" data-section="footer">` | Email como `<a href="mailto:abeamattosk9@gmail.com">` | Ícones Instagram e TikTok com `rel="noopener noreferrer" target="_blank"` | `aria-label="Instagram da Beatriz Mattos"`, `aria-label="TikTok da Beatriz Mattos"`
- Linha inferior: `border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4`
- Copyright: `font-sans text-small text-primary-foreground opacity-40`
- Link Política: `font-sans text-small text-primary-foreground opacity-60 hover:opacity-100`
- Ano dinâmico: `{new Date().getFullYear()}` — nunca hardcoded
- Export: montado dentro de `Layout.astro`

---

### PÁGINA: /links — Árvore de Links

**Copy e estrutura:**
- Logo ou nome (topo, centralizado): "Beatriz Mattos | Adestradora"
- Avatar circular: foto da Beatriz (96px)
- Tagline: "Treina pessoas antes de treinar cães."
- Botões (ordem por prioridade de conversão):
  1. "💬 Falar no WhatsApp" — link CTA principal
  2. "🌐 Acessar o site" — link para `/`
  3. "📸 Instagram @abeak9" — link para `https://instagram.com/abeak9`
  4. "🎵 TikTok @abeak9" — link para `https://tiktok.com/@abeak9`
  5. "✉️ Enviar e-mail" — link `mailto:abeamattosk9@gmail.com`
- Rodapé mínimo: "© {new Date().getFullYear()} Beatriz Mattos"

**Implementação:**
- Layout: `min-h-screen bg-background flex flex-col items-center justify-start pt-16 px-5 pb-12`
- Container: `w-full max-w-[480px] mx-auto flex flex-col items-center gap-6`
- Logo: `<Image src={logo} alt="Beatriz Mattos Adestradora" height={40} loading="eager" />`
- Avatar: `<Image src={avatarLinks} alt="Foto de Beatriz Mattos, adestradora" width={96} height={96} loading="eager" class="rounded-full object-cover border-2 border-border" />`
- Tagline: `font-sans text-body text-muted-foreground text-center`
- Botões: `w-full` — cada um com `<Button />` conforme variante:
  - WhatsApp: `variant="accent"` — destaque visual máximo
  - Site, Instagram, TikTok, Email: `variant="secondary"`
- Links: todos com `target="_blank" rel="noopener noreferrer"` (exceto o link para `/`)
- Ícones de rede: `mt-6 flex gap-4` — ícones `h-5 w-5 text-muted-foreground hover:text-accent`
- Rodapé: `mt-auto font-sans text-small text-muted-foreground`
- Animação de entrada: Framer Motion — cada botão entra com `opacity: 0→1, y: 20→0`, stagger `0.08s`
- Tracking: `data-tracking="click-whatsapp" data-section="links-page"` no botão WhatsApp | `data-tracking="click-instagram" data-section="links-page"` no Instagram | GTM dispara `view_links` no pageview
- SEO: metadados da Seção 2 desta ficha
- Export: `src/pages/links.astro`

---

### PÁGINA: /404 — Página de Erro Personalizada

**Copy (gerada no tom exato do projeto):**
- NUMERAL: "404"
- TÍTULO: "Esse endereço não existe."
- SUBTÍTULO: "Mas o que você procura, está aqui."
- BOTÃO PRIMÁRIO: "Voltar ao início"
- BOTÃO SECUNDÁRIO: "Falar no WhatsApp"

**Implementação:**
- Layout: `min-h-screen bg-background flex flex-col items-center justify-center px-5 text-center`
- Elemento visual: numeral "404" em `font-serif text-[20vw] text-foreground opacity-[0.06] absolute inset-0 flex items-center justify-center pointer-events-none select-none leading-none`
- Animação do 404: GSAP loop — `gsap.to('.num-404', { y: -10, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' })`
- Conteúdo centralizado: `relative z-10 flex flex-col items-center gap-6 max-w-md`
- Logo: `<Image src={logo} height={32} loading="eager" />` linkada para `/`
- Título: `font-serif text-h2 text-foreground`
- Subtítulo: `font-sans text-body text-muted-foreground`
- Botões: `flex flex-col sm:flex-row gap-4 mt-2`
  - Primário: `<Button variant="primary" label="Voltar ao início" href="/" trackingId="btn-404-home" section="404" />`
  - Secundário: `<Button variant="secondary" label="Falar no WhatsApp" href={wppUrl} trackingId="btn-404-wpp" section="404" />`
- Rastreamento: `data-tracking="click-404-home"` e `data-tracking="click-404-whatsapp"`
- SEO: `<meta name="robots" content="noindex">`
- Export: `src/pages/404.astro`

---

### PÁGINA: /politica-de-privacidade — Política de Privacidade e Termos de Uso

**Implementação:**
- Uma única página com âncoras `#privacidade` e `#termos`
- Layout editorial de leitura: `max-w-narrow mx-auto py-16 px-5`
- Tipografia body: `text-[17px] leading-[1.8]` — foco em legibilidade
- Fundo: `bg-background` (sempre claro, independente do tema da LP)
- Header simplificado: logo linkada para `/` + link "← Voltar ao site" (sem menu completo)
- Estrutura da Política de Privacidade (âncora `#privacidade`):
  - H1: "Política de Privacidade"
  - **O que coletamos:** Nome, WhatsApp, e informações sobre o cão fornecidas via formulário de contato ou mensagem no WhatsApp.
  - **Para que usamos:** Exclusivamente para avaliar seu caso, entrar em contato e prestar o serviço de mentoria. Nenhum dado é vendido ou compartilhado com terceiros para fins comerciais.
  - **Google Analytics / GTM:** Coletamos dados de acesso (páginas visitadas, origem do tráfego) de forma anonimizada, conforme seu consentimento. Você pode recusar via banner de cookies.
  - **Com quem compartilhamos:** Apenas com ferramentas de serviço (Google Meet, WhatsApp, Resend) necessárias para a prestação do atendimento.
  - **Seus direitos (LGPD):** Você tem direito a acessar, corrigir ou excluir seus dados a qualquer momento. Contato: abeamattosk9@gmail.com.
  - **Contato:** Para exercer seus direitos, envie e-mail para abeamattosk9@gmail.com com o assunto "Direitos LGPD".
- Estrutura dos Termos de Uso (âncora `#termos`):
  - H2: "Termos de Uso"
```

### `_docs\Briefing-Mentoria-Online-Beatriz-Mattos.md`

```markdown
---
title: Briefing Mentoria
date: 2026-05-01 14:21
tags: [prompt ia]
---

# Briefing Mentoria

## 1. Informações Essenciais e Contato

**Profissional:** Beatriz Mattos | Adestradora

**Redes Sociais:** Instagram: @b.mattosadestra e @abeak9 | TikTok: @abeak9

**Domínio do Site:** `abeak9.adestra.com.br`

**Meios de Contato (Destaque):** WhatsApp (11) 91895-2921, Instagram e E-mail (abeamattosk9@gmail.com).

**Horário de Atendimento:** Segunda a Sexta, das 09h00 às 17h00.

**Termos Estritamente Proibidos:** NÃO usar a palavra **"tutor"** e NÃO usar o termo **"adestramento 100% positivo"**.

## 2. Visão Geral da Mentoria Online

**Objetivo Principal:** Levar o adestramento com técnica e prática para que donos se tornem independentes e contatem profissionais apenas para serviços pontuais (como consultorias mensais).

## Para quem é

**Donos de cães:** Que buscam corrigir problemas de manejo, falta de comunicação (ruídos/falta de marcadores), ansiedade por separação e reatividade (com cães ou pessoas).

**Adestradores iniciantes:** Que buscam segurança técnica para desenvolver treinos de forma efetiva e segura para si e para os clientes.

**A Promessa/Frase de Impacto:** _“Transformo donos e treinadores em líderes conscientes, unindo técnica, comportamento e coragem para construir cães equilibrados e relações verdadeiramente seguras… sendo ponte entre a teoria, a prática e a aplicação na vida real.”_

## 3. Formato e Entregas da Mentoria

**Modelo:** Assinatura mensal com aulas ao vivo e semanais (1 a 3 encontros por semana).

**Plataforma e Metodologia:** Aulas 100% individuais pelo Google Meet (não ficam gravadas). Combinação de teoria aplicada à análise do comportamento e prática com métodos cientificamente comprovados.

## Suporte Extra

Suporte direto via WhatsApp em horário comercial (segunda a sexta).

Análise de vídeos dos treinos do aluno com orientações detalhadas para ajustes.

**Objeção Principal a ser Quebrada:** _“Funciona sendo online e sem o profissional tocar no cão?”_

**Resposta:** Sim, porque o principal professor do cachorro é o próprio dono. A mentoria fornece toda a análise e direcionamento para que o dono execute com excelência.

## 4. Preços e Regras de Contratação

## Planos Mensais

1x por semana: R$ 697,00

2x por semana: R$ 747,00

3x por semana: R$ 897,00

**Formas de Pagamento:** PIX ou Cartão de Crédito (taxa da operadora repassada ao cliente).

**Oferta Especial (Destaque na Página):** 5% de desconto no primeiro mês para fechamento via PIX.

**Regras de Fidelidade:** O tempo mínimo é de 30 dias (1º mês). Após esse período, o cancelamento só pode ser feito mediante aviso prévio de 30 dias de antecedência.

## 5. Diretrizes da Landing Page e Fluxo de Conversão

**Design e Sensação:** Elegante, Minimalista e Moderno. Deve transmitir **Profissionalismo** absoluto (referência: Instagram @saga.adestramento). Deve conter fotos da Beatriz e do serviço.

**Objetivo da Página (Filtro):** A página deve ser extremamente completa e responder todas as dúvidas básicas. O objetivo é que o cliente chegue ao WhatsApp **apenas** para realizar o pagamento e agendar, filtrando curiosos.

**Mensagem Inicial do Lead (Obrigatório antes do primeiro contato no WhatsApp):** Para que o lead não chegue "cru", o botão de contato do site deve direcionar o cliente a enviar as seguintes respostas:

1. Qual a raça do cão?
2. Qual a idade?
3. Qual o principal problema comportamental?
4. Já passou por algum adestramento antes?
5. Está disposto(a) a se dedicar a uma mudança de rotina?
```

### `_docs\implementação-lp.md`

> ⚠️ **Truncado:** mostrando primeiras 1000 linhas

```markdown
# Blueprint de Implementação — Beatriz Mattos Landing Page
> **Documento para o Roo Code.**
> Contém todos os arquivos do projeto na ordem correta de criação.
> Não invente nada além do que está aqui.
> Campos que exigem ação humana antes do go-live: `[DOMINIO]`, `[GTM_ID]`, `[RESEND_API_KEY]`.

---

## ORDEM DE CRIAÇÃO

### FASE 1 — Fundação
1. `package.json`
2. `astro.config.mjs`
3. `tailwind.config.js`
4. `.env.example` → criar `.env` com valores reais

### FASE 2 — Arquivos Estáticos
5. `public/robots.txt`
6. `public/manifest.json`
7. `public/favicon.svg`
8. `src/assets/logo.svg`

### FASE 3 — Pré-requisito de Assets de Imagem
> Colocar imagens placeholder em `src/assets/images/` antes de executar `npm run dev`.
> Formatos obrigatórios e dimensões exatas:
> - `hero-principal.webp` — 800×1000px
> - `profissional-retrato.webp` — 600×750px
> - `og-image.webp` — 1200×630px
> - `avatar-links.webp` — 192×192px
> As fotos reais da Beatriz substituem esses placeholders antes do go-live (Seção 12 do Doc 3).

### FASE 4 — Componentes Globais
9. `src/components/Icon.astro`
10. `src/components/GTM.astro`
11. `src/components/Button.astro`
12. `src/components/SectionHeader.astro`
13. `src/components/FeatureCard.astro`
14. `src/components/MobileMenu.tsx`
15. `src/components/ContactForm.tsx`
16. `src/components/CookieBanner.tsx`

### FASE 5 — Layout
17. `src/layouts/Layout.astro`

### FASE 6 — Seções
18. `src/sections/HeroSection.astro`
19. `src/sections/ServicosSection.astro`
20. `src/sections/ComoFuncionaSection.astro`
21. `src/sections/DiferenciaisSection.astro`
22. `src/sections/PlanosSection.astro`
23. `src/sections/FAQSection.astro`
24. `src/sections/ContatoSection.astro`
25. `src/sections/CTAFinalSection.astro`

### FASE 7 — Páginas
26. `src/pages/index.astro`
27. `src/pages/links.astro`
28. `src/pages/politica-de-privacidade.astro`
29. `src/pages/404.astro`
30. `src/pages/api/contato.ts`

---

## INSTALAÇÃO DE DEPENDÊNCIAS

```bash
npm create astro@latest beatriz-mattos -- --template minimal
cd beatriz-mattos
npm install @astrojs/tailwind @astrojs/react @astrojs/sitemap @astrojs/vercel
npm install tailwindcss
npm install react react-dom @types/react @types/react-dom
npm install framer-motion gsap @studio-freight/lenis
npm install lucide-react
npm install resend
npm install @fontsource/dm-serif-display @fontsource-variable/inter @fontsource/caveat
```

---

## BUILD E DEPLOY

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview local do build
npm run preview

# Deploy na Vercel (via CLI)
npx vercel --prod
```

> Deploy alvo: Vercel. O `@astrojs/vercel` adapter está configurado em `astro.config.mjs`.
> A saída é `hybrid`: todas as páginas são estáticas (prerendered), somente `/api/contato` é serverless.
> Variáveis de ambiente devem ser configuradas no painel da Vercel antes do deploy.

---

## FASE 1 — FUNDAÇÃO

---

### `package.json`

```json
{
  "name": "beatriz-mattos-landing",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/react": "^3.6.0",
    "@astrojs/sitemap": "^3.2.0",
    "@astrojs/tailwind": "^5.1.0",
    "@astrojs/vercel": "^7.8.0",
    "@fontsource-variable/inter": "^5.1.0",
    "@fontsource/caveat": "^5.1.0",
    "@fontsource/dm-serif-display": "^5.1.0",
    "@studio-freight/lenis": "^1.0.42",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "astro": "^4.16.0",
    "framer-motion": "^11.11.0",
    "gsap": "^3.12.5",
    "lucide-react": "^0.414.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "resend": "^4.0.0",
    "tailwindcss": "^3.4.14"
  }
}
```

---

### `astro.config.mjs`

```js
// astro.config.mjs
// NOTA: output 'hybrid' permite páginas estáticas + endpoint serverless /api/contato.
// Todas as páginas têm export const prerender = true — comportamento idêntico a 'static'.
// Somente src/pages/api/contato.ts é serverless (necessário para Resend funcionar).
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'hybrid',
  site: 'https://[DOMINIO].com.br',
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/links') &&
        !page.includes('/politica-de-privacidade') &&
        !page.includes('/404'),
    }),
  ],
});
```

---

### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background:  '#F9F0DF',
        foreground:  '#313C4E',
        primary: {
          DEFAULT:    '#313C4E',
          foreground: '#F9F0DF',
        },
        accent: {
          DEFAULT:    '#DF4637',
          foreground: '#F9F0DF',
        },
        surface:     '#F2E8D5',
        border:      '#DDD0BC',
        muted: {
          DEFAULT:    '#EDE0CC',
          foreground: '#7A8595',
        },
        whatsapp:    '#25D366',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'ui-serif', 'Georgia', 'serif'],
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand:  ['Caveat', 'cursive'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5.5vw, 4.25rem)',  { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':      ['clamp(2.25rem, 5vw, 3.75rem)',   { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2':      ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        'h3':      ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3',  letterSpacing: '-0.01em' }],
        'body-lg': ['clamp(1rem, 1.5vw, 1.125rem)',   { lineHeight: '1.7' }],
        'body':    ['1rem',                            { lineHeight: '1.65' }],
        'small':   ['0.875rem',                        { lineHeight: '1.5' }],
        'label':   ['0.75rem',                         { lineHeight: '1', letterSpacing: '0.1em' }],
        'hand-lg': ['clamp(1.25rem, 2vw, 1.75rem)',   { lineHeight: '1.3' }],
      },
      spacing: {
        'section':    '6rem',
        'section-sm': '4rem',
        'container':  '1.25rem',
      },
      maxWidth: {
        'content': '72rem',
        'narrow':  '48rem',
        'tight':   '38rem',
      },
      borderRadius: {
        'btn':  '0px',
        'card': '4px',
        'img':  '2px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(49, 60, 78, 0.08)',
        'btn':  '0 4px 16px rgba(49, 60, 78, 0.18)',
      },
    },
  },
  plugins: [],
}
```

---

### `.env.example`

```
GTM_ID=
RESEND_API_KEY=
WHATSAPP_NUMBER=5511918952921
```

---

## FASE 2 — ARQUIVOS ESTÁTICOS

---

### `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /links
Disallow: /politica-de-privacidade
Disallow: /404

Sitemap: https://[DOMINIO].com.br/sitemap-index.xml
```

---

### `public/manifest.json`

```json
{
  "name": "Beatriz Mattos Adestradora",
  "short_name": "Beatriz Mattos",
  "description": "Mentoria online individual de adestramento com Beatriz Mattos.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F9F0DF",
  "theme_color": "#313C4E",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

> Gerar `public/icons/icon-192.png` e `public/icons/icon-512.png` a partir do `src/assets/logo.svg`.

---

### `public/favicon.svg`

```svg

  
  B

```

> Substituir pelo favicon real derivado do logo da Beatriz antes do go-live.

---

## FASE 3 — ASSETS DE MARCA

---

### `src/assets/logo.svg`

```svg

  Beatriz Mattos
   | Adestradora

```

> Placeholder tipográfico. Substituir pelo arquivo SVG real do logo da Beatriz antes do go-live.

---

## FASE 4 — COMPONENTES GLOBAIS

---

### `src/components/Icon.astro`

```astro
---
// src/components/Icon.astro
// Ícones Lucide como SVG puro — sem dependência React, sem JS.
// strokeWidth: 1.5 em todos. viewBox: 0 0 24 24.
interface Props {
  name: string;
  size?: number;
  class?: string;
  ariaHidden?: boolean;
}
const { name, size = 24, class: className = '', ariaHidden = true } = Astro.props;

const icons: Record<string, string> = {
  Layers:
    '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  Unlock:
    '<rect width="11" height="11" x="11" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  Target:
    '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  User:
    '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  Compass:
    '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  MessageCircle:
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  Video:
    '<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>',
  Play:
    '<polygon points="5 3 19 12 5 21 5 3"/>',
  Headphones:
    '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  Award:
    '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  ChevronDown:
    '<polyline points="6 9 12 15 18 9"/>',
  Menu:
    '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  X:
    '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  Instagram:
    '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
};

const paths = icons[name] ?? '';
---
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
  aria-hidden={ariaHidden ? 'true' : undefined}
  set:html={paths}
/>
```

---

### `src/components/GTM.astro`

```astro
---
// src/components/GTM.astro
// Renderiza: Consent Mode v2 + snippet GTM do <head>.
// Snippet <body> (noscript) é adicionado diretamente em Layout.astro logo após <body>.
interface Props { id: string; }
const { id } = Astro.props;
---

<!-- Google Consent Mode v2 DEFAULT — executar ANTES do GTM -->
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
</script>

<!-- GTM snippet HEAD -->
<script is:inline define:vars={{ gtmId: id }}>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',gtmId);
</script>
```

---

### `src/components/Button.astro`

```astro
---
// src/components/Button.astro
interface Props {
  label: string;
  href: string;
  variant: 'primary' | 'accent' | 'secondary' | 'ghost';
  trackingId: string;
  section: string;
  newTab?: boolean;
  class?: string;
}

const {
  label,
  href,
  variant,
  trackingId,
  section,
  newTab = false,
  class: extraClass = '',
} = Astro.props;

const isWhatsApp = href.includes('wa.me');
const dataTracking = isWhatsApp ? 'click-whatsapp' : trackingId;

const base =
  'inline-flex items-center justify-center font-sans font-semibold rounded-btn transition-opacity duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const variants: Record<string, string> = {
  primary:   'bg-primary text-primary-foreground hover:opacity-90 shadow-btn px-6 py-3',
  accent:    'bg-accent text-accent-foreground hover:opacity-90 shadow-btn px-6 py-3',
  secondary: 'border border-foreground text-foreground hover:bg-muted px-6 py-3',
  ghost:     'text-foreground underline underline-offset-4 hover:text-accent px-2 py-1',
};
---
<a
  id={trackingId}
  href={href}
  data-tracking={dataTracking}
  data-section={section}
  target={newTab ? '_blank' : undefined}
  rel={newTab ? 'noopener noreferrer' : undefined}
  class={`${base} ${variants[variant]} ${extraClass}`}
>
  {label}
</a>
```

---

### `src/components/SectionHeader.astro`

```astro
---
// src/components/SectionHeader.astro
interface Props {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}
const { label, title, subtitle, align = 'left' } = Astro.props;
const centered = align === 'center';
---
<div class={centered ? 'text-center' : ''}>
  <p class="font-sans text-label uppercase tracking-widest text-accent font-semibold mb-3">
    {label}
  </p>
  <h2 class="font-serif text-h2 text-foreground">
    {title}
  </h2>
  {subtitle && (
    <p class={`font-sans text-body-lg text-muted-foreground mt-4 ${centered ? 'max-w-tight mx-auto' : 'max-w-tight'}`}>
      {subtitle}
    </p>
  )}
</div>
```

---

### `src/components/FeatureCard.astro`

```astro
---
// src/components/FeatureCard.astro
import Icon from './Icon.astro';

interface Props {
  icon: string;
  title: string;
  description: string;
  class?: string;
}
const { icon, title, description, class: extraClass = '' } = Astro.props;
---
<div class={`bg-background border border-border rounded-card p-6 shadow-card ${extraClass}`}>
  <div class="mb-4 text-accent h-6 w-6">
    <Icon name={icon} size={24} class="h-6 w-6" />
  </div>
  <h3 class="font-sans text-body font-semibold text-foreground mb-2">{title}</h3>
  <p class="font-sans text-body text-muted-foreground">{description}</p>
</div>
```

---

### `src/components/MobileMenu.tsx`

```tsx
// src/components/MobileMenu.tsx
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export default function MobileMenu({ links, ctaLabel, ctaHref }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Escape key + focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const overlay = overlayRef.current;
      if (!overlay) return;
      const focusable = Array.from(
        overlay.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const barVariants = {
    closed: (custom: number) => ({
      rotate: 0,
      y: 0,
      opacity: custom === 1 ? 1 : undefined,
    }),
    open: (custom: number) => ({
      rotate: custom === 0 ? 45 : custom === 2 ? -45 : 0,
      y: custom === 0 ? 8 : custom === 2 ? -8 : 0,
      opacity: custom === 1 ? 0 : 1,
    }),
  };

  return (
    <>
      {/* Hamburger */}
      <button
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-overlay"
        onClick={() => setIsOpen(true)}
        className="xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {[0, 1, 2].map((i) => (
          
        ))}
      

      {/* Fullscreen overlay */}
      
        {isOpen && (
          
            {/* Close button */}
            <button
              ref={closeButtonRef}
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-primary-foreground hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              
                
              
            

            {/* Nav links */}
            
              
                {links.map((link, i) => (
                  
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-h2 text-primary-foreground hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {link.label}
                    
                  
                ))}
              
            

            {/* Phone + CTA */}
            
              
                (11) 91895-2921
              
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                data-tracking="click-whatsapp"
                data-section="mobile-menu"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center bg-accent text-accent-foreground font-sans font-semibold text-body px-6 py-4 rounded-btn hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {ctaLabel}
              
            
          
        )}
      
    </>
  );
}
```

---

### `src/components/ContactForm.tsx`

```tsx
// src/components/ContactForm.tsx
// Zero  HTML nativo — usar event handlers conforme especificação.
import { useState, useEffect } from 'react';

interface Props {
  whatsappFallback: string;
}

interface FormState {
  nome: string;
  whatsapp: string;
  raca: string;
  idade: string;
  problema: string;
  adestramento: string;
  rotina: string;
  website: string; // honeypot
}

const emptyForm: FormState = {
  nome: '',
  whatsapp: '',
  raca: '',
  idade: '',
  problema: '',
  adestramento: '',
  rotina: '',
  website: '',
};

export default function ContactForm({ whatsappFallback }: Props) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState<Partial<Record>>({});

  useEffect(() => { setMounted(true); }, []);

  const inputClass =
    'w-full bg-surface border border-border rounded-card px-4 py-3 font-sans text-body text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors';
  const labelClass = 'font-sans text-small font-semibold text-foreground mb-1 block';

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const setRadio = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = (): boolean => {
    const required: (keyof FormState)[] = ['nome', 'whatsapp', 'raca', 'idade', 'problema', 'adestramento', 'rotina'];
    const newErrors: Partial<Record> = {};
    required.forEach((key) => {
      if (!form[key]) newErrors[key] = 'Campo obrigatório';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (form.website) return; // honeypot — rejeitar silenciosamente
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // Skeleton antes da hidratação
  if (!mounted) {
    return (
      
        {Array.from({ length: 6 }).map((_, i) => (
          
        ))}
      
    );
  }

  if (status === 'success') {
    return (
      
        
          Mensagem enviada.
        
        
          A Beatriz vai entrar em contato via WhatsApp em até 24h úteis.
        
      
    );
  }

  return (
    
      {/* Honeypot — invisível para usuários, oculto de leitores de tela */}
      <input
        name="website"
        value={form.website}
        onChange={set('website')}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
      />

      {/* Nome */}
      
        Nome completo *
        <input
          id="cf-nome"
          name="nome"
          type="text"
          autoComplete="name"
          value={form.nome}
          onChange={set('nome')}
          placeholder="Seu nome completo"
          className={`${inputClass} ${errors.nome ? 'border-accent' : ''}`}
          aria-required="true"
          aria-describedby={errors.nome ? 'err-nome' : undefined}
        />
        {errors.nome && (
          
            {errors.nome}
          
        )}
      

      {/* WhatsApp */}
      
        WhatsApp com DDD *
        <input
          id="cf-whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          value={form.whatsapp}
          onChange={set('whatsapp')}
          placeholder="(11) 99999-9999"
          className={`${inputClass} ${errors.whatsapp ? 'border-accent' : ''}`}
          aria-required="true"
          aria-describedby={errors.whatsapp ? 'err-whatsapp' : undefined}
        />
        {errors.whatsapp && (
          
            {errors.whatsapp}
          
        )}
      

      {/* Raça */}
      
        Raça do cão *
        <input
          id="cf-raca"
          name="raca"
          type="text"
          value={form.raca}
          onChange={set('raca')}
          placeholder="Ex: Labrador, SRD, Border Collie"
          className={`${inputClass} ${errors.raca ? 'border-accent' : ''}`}
          aria-required="true"
        />
        {errors.raca && (
          {errors.raca}
        )}
      

      {/* Idade */}
      
        Idade do cão *
        <input
          id="cf-idade"
          name="idade"
          type="text"
          value={form.idade}
          onChange={set('idade')}
          placeholder="Ex: 2 anos"
          className={`${inputClass} ${errors.idade ? 'border-accent' : ''}`}
          aria-required="true"
        />
        {errors.idade && (
          {errors.idade}
        )}
      

      {/* Problema */}
      
        
          Principal problema comportamental *
        
        <textarea
          id="cf-problema"
          name="problema"
          rows={4}
          value={form.problema}
          onChange={set('problema')}
          placeholder="Descreva o principal comportamento que você quer resolver"
          className={`${inputClass} resize-none ${errors.problema ? 'border-accent' : ''}`}
          aria-required="true"
        />
        {errors.problema && (
          {errors.problema}
        )}
      

      {/* Adestramento anterior */}
      
        Já passou por adestramento antes? *
        
          {['Sim', 'Não'].map((opt) => (
            
              <input
                type="radio"
                name="adestramento"
                value={opt}
                checked={form.adestramento === opt}
                onChange={() => setRadio('adestramento', opt)}
                className="accent-accent w-4 h-4 cursor-pointer"
                aria-required="true"
              />
              {opt}
            
          ))}
        
        {errors.adestramento && (
          {errors.adestramento}
        )}
      

      {/* Rotina */}
      
        Está disposto a dedicar tempo à rotina? *
        
          {['Sim', 'Não'].map((opt) => (
            
              <input
                type="radio"
                name="rotina"
                value={opt}
                checked={form.rotina === opt}
                onChange={() => setRadio('rotina', opt)}
                className="accent-accent w-4 h-4 cursor-pointer"
                aria-required="true"
              />
              {opt}
            
          ))}
        
        {errors.rotina && (
          {errors.rotina}
        )}
      

      {/* Submit */}
      <button
        id="btn-submit-form"
        data-tracking="submit-form"
        data-section="formulario"
        onClick={handleSubmit}
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
        className="mt-2 w-full bg-primary text-primary-foreground font-sans font-semibold text-body px-6 py-4 rounded-btn hover:opacity-90 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center justify-center gap-3 transition-opacity"
      >
        {status === 'loading' ? (
          <>
            
              
              
            
            Enviando...
          </>
        ) : (
          'Enviar para a Beatriz'
        )}
      

      {/* Erro */}
      {status === 'error' && (
        
          Ocorreu um erro ao enviar.{' '}
          
            Prefere ir direto? → Falar no WhatsApp
          
        
      )}
```

### `public\manifest.json`

```json
{
  "name": "Beatriz Mattos Adestradora",
  "short_name": "Beatriz Mattos",
  "description": "Mentoria online individual de adestramento com Beatriz Mattos.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F9F0DF",
  "theme_color": "#313C4E",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### `public\robots.txt`

```text
User-agent: *
Allow: /
Disallow: /links
Disallow: /politica-de-privacidade
Disallow: /404

Sitemap: https://abeak9adestramento.com.br/sitemap-index.xml
```

### `src\dump_project_v2.py`

```python
"""
dump_project.py — Project Snapshot Generator
=============================================
Gera um snapshot completo de qualquer projeto em um único arquivo .md
Uso: python dump_project.py [pasta_raiz] [--output arquivo.md]

Exemplos:
  python dump_project.py
  python dump_project.py ./meu-projeto
  python dump_project.py ./meu-projeto --output snapshot.md
  python dump_project.py --max-lines 500
"""

import os
import sys
import argparse
from datetime import datetime
from pathlib import Path

# ─── Configurações ────────────────────────────────────────────────────────────

# Pastas inteiras que serão ignoradas (em qualquer nível)
IGNORE_DIRS = {
    "node_modules", ".venv", "venv", "env", ".env",
    "__pycache__", ".git", ".svn", ".hg",
    "dist", "build", ".next", ".nuxt", "out",
    ".cache", ".parcel-cache", ".turbo",
    "uploads", "static/uploads", "media",
    ".idea", ".vscode", ".vs",
    "coverage", ".nyc_output", ".pytest_cache",
    "eggs", "*.egg-info", ".tox",
    "target",  # Rust/Java
    "vendor",  # Go/PHP
    "Pods",    # iOS
    ".gradle", # Android
}

# Extensões de arquivo que serão ignoradas (binários, mídia, etc)
IGNORE_EXTENSIONS = {
    # Imagens
    ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico",
    ".bmp", ".tiff", ".tif", ".raw", ".psd", ".ai", ".eps",
    # Vídeos
    ".mp4", ".avi", ".mov", ".mkv", ".webm", ".flv",
    # Áudio
    ".mp3", ".wav", ".ogg", ".flac", ".aac",
    # Fontes
    ".ttf", ".otf", ".woff", ".woff2", ".eot",
    # Binários / Compilados
    ".exe", ".dll", ".so", ".dylib", ".bin", ".obj", ".o",
    ".pyc", ".pyo", ".pyd", ".class",
    # Comprimidos
    ".zip", ".tar", ".gz", ".rar", ".7z", ".bz2",
    # Banco de dados
    ".db", ".sqlite", ".sqlite3",
    # Lock files (grandes e inúteis pra análise)
    # (detectados pelo nome, abaixo)
    # Documentos binários
    ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
    # Outros
    ".map",  # Source maps
    ".min.js", ".min.css",  # Minificados
    ".chunk.js",  # Chunks de build
}

# Arquivos específicos que serão ignorados (por nome exato)
IGNORE_FILES = {
    "package-lock.json", "yarn.lock", "pnpm-lock.yaml",
    "poetry.lock", "Pipfile.lock", "composer.lock",
    "Gemfile.lock", "cargo.lock", ".DS_Store", "Thumbs.db",
    ".env", ".env.local", ".env.production", ".env.development",
    "dump_project.py",  # o próprio script
}

# Extensões de texto que serão incluídas
TEXT_EXTENSIONS = {
    # Web
    ".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx",
    ".html", ".htm", ".css", ".scss", ".sass", ".less",
    # Python
    ".py", ".pyi",
    # Configs
    ".json", ".yaml", ".yml", ".toml", ".ini", ".cfg", ".conf",
    ".env.example", ".env.template",
    # Markdown / Docs
    ".md", ".mdx", ".rst", ".txt",
    # Scripts
    ".sh", ".bat", ".cmd", ".ps1",
    # Outros
    ".xml", ".graphql", ".prisma", ".sql",
    ".vue", ".svelte", ".astro",
    ".go", ".rs", ".java", ".kt", ".swift", ".c", ".cpp", ".h",
    ".rb", ".php", ".cs",
    ".r", ".R",
    # Config sem extensão (detectar pelo nome)
}

# Arquivos sem extensão que devem ser incluídos
INCLUDE_NO_EXT = {
    "Makefile", "Dockerfile", "Procfile", "Pipfile",
    "Gemfile", "Rakefile", "Brewfile",
    ".gitignore", ".gitattributes", ".editorconfig",
    ".prettierrc", ".eslintrc", ".babelrc",
    "requirements.txt",
}

# Número máximo de linhas por arquivo (evitar arquivos enormes)
DEFAULT_MAX_LINES = 1000
DEFAULT_MAX_FILE_SIZE_KB = 200

# ─── Funções ──────────────────────────────────────────────────────────────────

def should_ignore_dir(dir_name: str) -> bool:
    return dir_name in IGNORE_DIRS or dir_name.startswith(".")

def should_include_file(filepath: Path, max_size_kb: int) -> tuple[bool, str]:
    """Retorna (incluir, motivo_exclusão)"""
    name = filepath.name
    ext = filepath.suffix.lower()

    # Ignorar arquivos específicos
    if name in IGNORE_FILES:
        return False, f"arquivo ignorado por nome"

    # Ignorar extensões binárias
    if ext in IGNORE_EXTENSIONS:
        return False, f"extensão binária/media ({ext})"

    # Verificar tamanho
    try:
        size_kb = filepath.stat().st_size / 1024
        if size_kb > max_size_kb:
            return False, f"arquivo muito grande ({size_kb:.0f}KB > {max_size_kb}KB)"
    except OSError:
        return False, "erro ao acessar arquivo"

    # Arquivo sem extensão
    if not ext:
        if name in INCLUDE_NO_EXT:
            return True, ""
        # Ignorar outros sem extensão (binários, etc)
        return False, "sem extensão conhecida"

    # Extensão de texto conhecida
    if ext in TEXT_EXTENSIONS:
        return True, ""

    # Tentar ler como texto (detecção automática)
    try:
        with open(filepath, "r", encoding="utf-8", errors="strict") as f:
            f.read(512)  # Ler só os primeiros 512 bytes
        return True, ""  # É texto válido
    except (UnicodeDecodeError, OSError):
        return False, "arquivo binário (detecção automática)"


def get_language(filepath: Path) -> str:
    """Retorna a linguagem para syntax highlighting no markdown."""
    ext = filepath.suffix.lower()
    name = filepath.name
    
    mapping = {
        ".py": "python", ".pyi": "python",
        ".js": "javascript", ".mjs": "javascript", ".cjs": "javascript",
        ".jsx": "jsx", ".ts": "typescript", ".tsx": "tsx",
        ".html": "html", ".htm": "html",
        ".css": "css", ".scss": "scss", ".sass": "sass", ".less": "less",
        ".json": "json", ".yaml": "yaml", ".yml": "yaml",
        ".toml": "toml", ".ini": "ini", ".cfg": "ini", ".conf": "ini",
        ".md": "markdown", ".mdx": "markdown",
        ".sh": "bash", ".bat": "bat", ".cmd": "bat", ".ps1": "powershell",
        ".sql": "sql", ".graphql": "graphql",
        ".xml": "xml",
        ".vue": "vue", ".svelte": "svelte",
        ".go": "go", ".rs": "rust", ".java": "java",
        ".kt": "kotlin", ".swift": "swift",
        ".c": "c", ".cpp": "cpp", ".h": "c",
        ".rb": "ruby", ".php": "php", ".cs": "csharp",
        ".txt": "text",
    }

    names_mapping = {
        "Dockerfile": "dockerfile",
        "Makefile": "makefile",
        ".gitignore": "gitignore",
        "requirements.txt": "text",
    }

    return names_mapping.get(name, mapping.get(ext, "text"))


def build_tree(root: Path, prefix: str = "", ignore_hidden: bool = True) -> list[str]:
    """Gera árvore de arquivos estilo 'tree'."""
    lines = []
    try:
        entries = sorted(root.iterdir(), key=lambda x: (x.is_file(), x.name.lower()))
    except PermissionError:
        return lines

    visible = []
    for entry in entries:
        if entry.is_dir():
            if should_ignore_dir(entry.name):
                continue
        else:
            if entry.name in IGNORE_FILES:
                continue
            if entry.suffix.lower() in IGNORE_EXTENSIONS:
                continue
        visible.append(entry)

    for i, entry in enumerate(visible):
        is_last = i == len(visible) - 1
        connector = "└── " if is_last else "├── "
        extension = "    " if is_last else "│   "

        if entry.is_dir():
            lines.append(f"{prefix}{connector}📁 {entry.name}/")
            lines.extend(build_tree(entry, prefix + extension, ignore_hidden))
        else:
            size_kb = entry.stat().st_size / 1024
            size_str = f" ({size_kb:.1f}KB)" if size_kb > 10 else ""
            lines.append(f"{prefix}{connector}📄 {entry.name}{size_str}")

    return lines


def collect_files(root: Path, max_size_kb: int) -> list[tuple[Path, str]]:
    """Coleta todos os arquivos a incluir, com linguagem."""
    files = []

    for dirpath, dirnames, filenames in os.walk(root):
        # Filtrar pastas ignoradas (modifica in-place para o walk não entrar)
        dirnames[:] = sorted([
            d for d in dirnames
            if not should_ignore_dir(d)
        ])

        for filename in sorted(filenames):
            filepath = Path(dirpath) / filename
            include, reason = should_include_file(filepath, max_size_kb)
            if include:
                lang = get_language(filepath)
                files.append((filepath, lang))

    return files


def read_file_safe(filepath: Path, max_lines: int) -> tuple[str, bool]:
    """Lê arquivo com segurança, retorna (conteúdo, truncado)."""
    encodings = ["utf-8", "utf-8-sig", "latin-1", "cp1252"]
    
    for encoding in encodings:
        try:
            with open(filepath, "r", encoding=encoding) as f:
                lines = f.readlines()
            
            truncated = len(lines) > max_lines
            content = "".join(lines[:max_lines])
            return content, truncated
        except (UnicodeDecodeError, OSError):
            continue
    
    return "[❌ Erro: não foi possível ler este arquivo]", False


def generate_snapshot(
    root_dir: str = ".",
    output_file: str = "project_snapshot.md",
    max_lines: int = DEFAULT_MAX_LINES,
    max_size_kb: int = DEFAULT_MAX_FILE_SIZE_KB,
) -> None:
    root = Path(root_dir).resolve()
    output = Path(output_file)

    if not root.exists():
        print(f"❌ Pasta não encontrada: {root}")
        sys.exit(1)

    print(f"\n🔍 Analisando projeto em: {root}")
    print(f"📄 Output: {output.resolve()}")
    print(f"⚙️  Limite por arquivo: {max_lines} linhas / {max_size_kb}KB")
    print("─" * 60)

    # Coletar arquivos
    files = collect_files(root, max_size_kb)
    print(f"\n✅ {len(files)} arquivos encontrados\n")

    # Gerar árvore
    tree_lines = build_tree(root)

    # Escrever output
    with open(output, "w", encoding="utf-8") as out:

        # ── Header ──
        out.write(f"# Project Snapshot\n\n")
        out.write(f"**Projeto:** `{root.name}`  \n")
        out.write(f"**Gerado em:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  \n")
        out.write(f"**Total de arquivos:** {len(files)}  \n")
        out.write(f"**Raiz:** `{root}`  \n\n")
        out.write("---\n\n")

        # ── Árvore de Arquivos ──
        out.write("## 📁 Estrutura de Arquivos\n\n")
        out.write("```\n")
        out.write(f"{root.name}/\n")
        for line in tree_lines:
            out.write(line + "\n")
        out.write("```\n\n")
        out.write("---\n\n")

        # ── Conteúdo dos Arquivos ──
        out.write("## 📄 Conteúdo dos Arquivos\n\n")

        for filepath, lang in files:
            relative = filepath.relative_to(root)
            content, truncated = read_file_safe(filepath, max_lines)

            out.write(f"### `{relative}`\n\n")

            if truncated:
                out.write(f"> ⚠️ **Truncado:** mostrando primeiras {max_lines} linhas\n\n")

            out.write(f"```{lang}\n")
            out.write(content)
            if not content.endswith("\n"):
                out.write("\n")
            out.write("```\n\n")

            print(f"  ✔ {relative}")

    # ── Estatísticas ──
    output_size = output.stat().st_size / 1024
    print(f"\n{'─' * 60}")
    print(f"✅ Snapshot gerado com sucesso!")
    print(f"📄 Arquivo: {output.resolve()}")
    print(f"📦 Tamanho: {output_size:.1f}KB ({output_size/1024:.2f}MB)")
    print(f"📊 Arquivos incluídos: {len(files)}")
    print(f"\n💡 Próximo passo: Fazer upload de '{output.name}' no chat com Claude")
    print("─" * 60 + "\n")


# ─── Entry Point ──────────────────────────────────────────────────────────────

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Gera um snapshot completo de qualquer projeto em um único arquivo .md",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Exemplos:
  python dump_project.py
  python dump_project.py ./meu-projeto
  python dump_project.py ./meu-projeto --output snapshot.md
  python dump_project.py . --max-lines 500 --max-size 100
        """
    )
    
    parser.add_argument(
        "root",
        nargs="?",
        default=".",
        help="Pasta raiz do projeto (padrão: pasta atual)"
    )
    parser.add_argument(
        "--output", "-o",
        default="project_snapshot.md",
        help="Nome do arquivo de saída (padrão: project_snapshot.md)"
    )
    parser.add_argument(
        "--max-lines",
        type=int,
        default=DEFAULT_MAX_LINES,
        help=f"Máximo de linhas por arquivo (padrão: {DEFAULT_MAX_LINES})"
    )
    parser.add_argument(
        "--max-size",
        type=int,
        default=DEFAULT_MAX_FILE_SIZE_KB,
        help=f"Tamanho máximo por arquivo em KB (padrão: {DEFAULT_MAX_FILE_SIZE_KB}KB)"
    )

    args = parser.parse_args()

    generate_snapshot(
        root_dir=args.root,
        output_file=args.output,
        max_lines=args.max_lines,
        max_size_kb=args.max_size,
    )
```

### `src\env.d.ts`

```typescript
/// <reference path="../.astro/types.d.ts" />
```

### `src\components\Button.astro`

```text
---
// src/components/Button.astro
interface Props {
  label: string;
  href: string;
  variant: 'primary' | 'accent' | 'secondary' | 'ghost';
  trackingId: string;
  section: string;
  newTab?: boolean;
  class?: string;
}

const {
  label,
  href,
  variant,
  trackingId,
  section,
  newTab = false,
  class: extraClass = '',
} = Astro.props;

const isWhatsApp = href.includes('wa.me');
const dataTracking = isWhatsApp ? 'click-whatsapp' : trackingId;

const base =
  'inline-flex items-center justify-center font-display font-bold uppercase tracking-widest transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-2 border-foreground active:translate-x-1 active:translate-y-1 active:shadow-none';

const variants: Record<string, string> = {
  primary:   'bg-foreground text-primary-foreground hover:bg-foreground/90 shadow-[4px_4px_0px_0px_rgba(255,77,0,1)] text-cta',
  accent:    'bg-accent text-white hover:bg-accent/90 shadow-[4px_4px_0px_0px_rgba(26,29,35,1)] text-cta',
  secondary: 'border-2 border-foreground text-foreground hover:bg-surface text-cta',
  ghost:     'border-none text-foreground underline underline-offset-8 hover:text-accent p-0 text-cta',
};
---
<a
  id={trackingId}
  href={href}
  data-tracking={dataTracking}
  data-section={section}
  target={newTab ? '_blank' : undefined}
  rel={newTab ? 'noopener noreferrer' : undefined}
  class={`${base} ${variants[variant]} ${extraClass}`}
>
  {label}
</a>
```

### `src\components\ContactForm.tsx`

```tsx
// src/components/ContactForm.tsx
import { useState, useEffect } from 'react';

interface Props {
  whatsappFallback: string;
}

interface FormState {
  nome: string;
  whatsapp: string;
  raca: string;
  idade: string;
  problema: string;
  adestramento: string;
  rotina: string;
  website: string; // honeypot
}

const emptyForm: FormState = {
  nome: '',
  whatsapp: '',
  raca: '',
  idade: '',
  problema: '',
  adestramento: '',
  rotina: '',
  website: '',
};

export default function ContactForm({ whatsappFallback }: Props) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  useEffect(() => { setMounted(true); }, []);

  const inputClass =
    'w-full bg-white border-2 border-foreground rounded-none px-4 py-3 font-sans text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-accent/20 transition-all';
  const labelClass = 'font-display text-label font-bold text-foreground mb-2 block tracking-widest uppercase';

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const setRadio = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = (): boolean => {
    const required: (keyof FormState)[] = ['nome', 'whatsapp', 'raca', 'idade', 'problema', 'adestramento', 'rotina'];
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    required.forEach((key) => {
      if (!form[key]) newErrors[key] = 'CAMPO OBRIGATÓRIO';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (form.website) return;
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!mounted) {
    return (
      <div className="grid gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-14 bg-surface border-2 border-foreground animate-pulse" />
        ))}
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="bg-foreground text-white border-4 border-accent p-10 text-center animate-[fadeIn_0.4s_ease-in-out]">
        <h3 className="font-display text-h2 text-accent mb-4">MENSAGEM RECEBIDA.</h3>
        <p className="font-sans text-body-lg">
          Em até 24h úteis eu vou te chamar no WhatsApp para analisar o seu caso.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <input
        name="website"
        value={form.website}
        onChange={set('website')}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
      />

      <div>
        <label htmlFor="cf-nome" className={labelClass}>SEU NOME COMPLETO *</label>
        <input
          id="cf-nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={set('nome')}
          placeholder="COMO VOCÊ SE CHAMA?"
          className={`${inputClass} ${errors.nome ? 'border-accent' : ''}`}
        />
        {errors.nome && <span className="text-accent font-bold text-label mt-2 block">{errors.nome}</span>}
      </div>

      <div>
        <label htmlFor="cf-whatsapp" className={labelClass}>WHATSAPP COM DDD *</label>
        <input
          id="cf-whatsapp"
          name="whatsapp"
          type="tel"
          value={form.whatsapp}
          onChange={set('whatsapp')}
          placeholder="(11) 99999-9999"
          className={`${inputClass} ${errors.whatsapp ? 'border-accent' : ''}`}
        />
        {errors.whatsapp && <span className="text-accent font-bold text-label mt-2 block">{errors.whatsapp}</span>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="cf-raca" className={labelClass}>RAÇA DO CÃO *</label>
          <input
            id="cf-raca"
            name="raca"
            type="text"
            value={form.raca}
            onChange={set('raca')}
            placeholder="EX: PASTOR ALEMÃO"
            className={`${inputClass} ${errors.raca ? 'border-accent' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="cf-idade" className={labelClass}>IDADE DO CÃO *</label>
          <input
            id="cf-idade"
            name="idade"
            type="text"
            value={form.idade}
            onChange={set('idade')}
            placeholder="EX: 18 MESES"
            className={`${inputClass} ${errors.idade ? 'border-accent' : ''}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-problema" className={labelClass}>PRINCIPAL PROBLEMA COMPORTAMENTAL *</label>
        <textarea
          id="cf-problema"
          name="problema"
          rows={3}
          value={form.problema}
          onChange={set('problema')}
          placeholder="O QUE ESTÁ ACONTECENDO NA PRÁTICA?"
          className={`${inputClass} resize-none ${errors.problema ? 'border-accent' : ''}`}
        />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <span className={labelClass}>JÁ PASSOU POR ADESTRADOR? *</span>
          <div className="flex gap-10 mt-4">
            {['SIM', 'NÃO'].map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group font-display text-h3">
                <input
                  type="radio"
                  name="adestramento"
                  value={opt}
                  checked={form.adestramento === opt}
                  onChange={() => setRadio('adestramento', opt)}
                  className="w-6 h-6 border-2 border-foreground accent-accent cursor-pointer"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <span className={labelClass}>ESTÁ DISPOSTO A MUDAR A ROTINA? *</span>
          <div className="flex gap-10 mt-4">
            {['SIM', 'NÃO'].map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group font-display text-h3">
                <input
                  type="radio"
                  name="rotina"
                  value={opt}
                  checked={form.rotina === opt}
                  onChange={() => setRadio('rotina', opt)}
                  className="w-6 h-6 border-2 border-foreground accent-accent cursor-pointer"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="w-full bg-accent text-white font-display text-h2 py-5 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(26,29,35,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(26,29,35,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all disabled:opacity-50"
      >
        {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR PARA ANÁLISE'}
      </button>

      {status === 'error' && (
        <p className="text-accent font-bold text-center">
          OCORREU UM ERRO. TENTE O WHATSAPP.
        </p>
      )}

      <p className="text-center font-display text-label tracking-widest text-muted-foreground">
        QUER IR DIRETO? <a href={whatsappFallback} className="text-accent underline decoration-2 underline-offset-4">FALALA NO WHATSAPP</a>
      </p>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}} />
    </div>
  );
}
```

### `src\components\CookieBanner.tsx`

```tsx
// src/components/CookieBanner.tsx
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  gtmId: string;
}

declare global {
  interface Window { gtag?: (...args: unknown[]) => void; }
}

export default function CookieBanner({ gtmId: _gtmId }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('adsgator-consent');
      if (!consent) setVisible(true);
    } catch { /* noop */ }
  }, []);

  const handleAccept = () => {
    try { localStorage.setItem('adsgator-consent', 'granted'); } catch { /* noop */ }
    setVisible(false);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }
  };

  const handleDeny = () => {
    try { localStorage.setItem('adsgator-consent', 'denied'); } catch { /* noop */ }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-sm bg-background border-4 border-foreground p-8 shadow-[8px_8px_0px_0px_rgba(26,29,35,1)]"
        >
          <p className="font-sans text-small font-bold text-foreground mb-6 uppercase tracking-wider">
            CONTROLE DE COOKIES. <br/>
            USAMOS PARA MELHORAR SUA EXPERIÊNCIA.
          </p>
          <div className="flex gap-6">
            <button
              onClick={handleDeny}
              className="font-display text-body tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              RECUSAR
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 bg-accent text-white font-display text-h3 py-3 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(26,29,35,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
            >
              ACEITAR
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### `src\components\FeatureCard.astro`

```text
---
// src/components/FeatureCard.astro
import Icon from './Icon.astro';

interface Props {
  icon: string;
  title: string;
  description: string;
  class?: string;
}
const { icon, title, description, class: extraClass = '' } = Astro.props;
---
<div class={`bg-background border border-border rounded-card p-6 shadow-card ${extraClass}`}>
  <div class="mb-4 text-accent h-6 w-6">
    <Icon name={icon} size={24} class="h-6 w-6" />
  </div>
  <h3 class="font-sans text-body font-semibold text-foreground mb-2">{title}</h3>
  <p class="font-sans text-body text-muted-foreground">{description}</p>
</div>
```

### `src\components\GTM.astro`

```text
---
// src/components/GTM.astro
// Renderiza: Consent Mode v2 + snippet GTM do <head>.
// Snippet <body> (noscript) é adicionado diretamente em Layout.astro logo após <body>.
interface Props { id: string; }
const { id } = Astro.props;
---

<!-- Google Consent Mode v2 DEFAULT — executar ANTES do GTM -->
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
</script>

<!-- GTM snippet HEAD -->
<script is:inline define:vars={{ gtmId: id }}>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',gtmId);
</script>
```

### `src\components\Icon.astro`

```text
---
// src/components/Icon.astro
// Ícones Lucide como SVG puro — sem dependência React, sem JS.
// strokeWidth: 1.5 em todos. viewBox: 0 0 24 24.
interface Props {
  name: string;
  size?: number;
  class?: string;
  ariaHidden?: boolean;
}
const { name, size = 24, class: className = '', ariaHidden = true } = Astro.props;

const icons: Record<string, string> = {
  Layers:
    '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  Unlock:
    '<rect width="11" height="11" x="11" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  Target:
    '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  User:
    '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  Compass:
    '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  MessageCircle:
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  Video:
    '<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>',
  Play:
    '<polygon points="5 3 19 12 5 21 5 3"/>',
  Headphones:
    '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  Award:
    '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  ChevronDown:
    '<polyline points="6 9 12 15 18 9"/>',
  Menu:
    '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  X:
    '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  Instagram:
    '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
};

const paths = icons[name] ?? '';
---
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
  aria-hidden={ariaHidden ? 'true' : undefined}
  set:html={paths}
/>
```

### `src\components\MobileMenu.tsx`

```tsx
// src/components/MobileMenu.tsx
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export default function MobileMenu({ links, ctaLabel, ctaHref }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsOpen(false); return; }
      if (e.key !== 'Tab') return;
      const overlay = overlayRef.current;
      if (!overlay) return;
      const focusable = Array.from(overlay.querySelectorAll('a[href], button:not([disabled])')) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <button
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen(true)}
        className="xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-2 text-foreground"
      >
        <span className="w-8 h-1 bg-current" />
        <span className="w-8 h-1 bg-current" />
        <span className="w-8 h-1 bg-current" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            ref={overlayRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'circOut' }}
            className="fixed inset-0 z-[60] bg-foreground flex flex-col p-8 border-l-8 border-accent"
          >
            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              className="self-end w-12 h-12 flex items-center justify-center text-white border-2 border-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>

            <nav className="mt-16 flex flex-col gap-8">
              <ul className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display text-[3.5rem] leading-none text-white hover:text-accent transition-colors uppercase tracking-widest"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-8">
              <div className="font-display text-h3 text-white tracking-widest opacity-60">
                (11) 91895-2921
              </div>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center bg-accent text-white font-display text-h2 py-5 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
              >
                {ctaLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

### `src\components\SectionHeader.astro`

```text
---
// src/components/SectionHeader.astro
interface Props {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}
const { label, title, subtitle, align = 'left' } = Astro.props;
const centered = align === 'center';
---
<div class={`${centered ? 'text-center mx-auto' : ''} flex flex-col gap-4`}>
  <div class="flex items-center gap-3">
    <div class="h-1 w-12 bg-accent"></div>
    <p class="font-display text-label uppercase tracking-[0.3em] text-accent font-bold">
      {label}
    </p>
  </div>
  
  <h2 class="font-display text-h2 text-foreground uppercase">
    {title}
  </h2>
  
  {subtitle && (
    <p class={`font-sans text-body-lg text-muted-foreground mt-2 max-w-narrow ${centered ? 'mx-auto' : ''}`}>
      {subtitle}
    </p>
  )}
</div>
```

### `src\components\StickyCTA.astro`

```text
---
// src/components/StickyCTA.astro
import Button from './Button.astro';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';
---

<div
  id="sticky-cta-container"
  class="fixed bottom-0 left-0 w-full p-4 z-[100] translate-y-full xl:hidden"
>
  <div class="max-w-md mx-auto">
    <Button
      label="QUERO LIDERAR MEU CÃO"
      href={wppUrl}
      variant="accent"
      trackingId="btn-sticky-cta"
      section="sticky-footer"
      newTab={true}
      class="w-full py-5 shadow-[4px_4px_0px_0px_rgba(26,29,35,1)]"
    />
  </div>
</div>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const stickyCta = document.getElementById('sticky-cta-container');
  const heroCta = document.getElementById('btn-cta-hero');

  if (stickyCta && heroCta) {
    // Show after a small delay on load
    gsap.to(stickyCta, {
      y: 0,
      duration: 0.6,
      delay: 1,
      ease: 'power3.out'
    });

    // Hide when Hero CTA comes into view
    ScrollTrigger.create({
      trigger: heroCta,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(stickyCta, {
          y: '120%',
          duration: 0.4,
          ease: 'power2.in',
          overwrite: true
        });
      },
      // Note: User said "it disappears and doesn't reappear", 
      // but usually it's better if it reappears if they scroll back up before reaching it?
      // "ele só aparece entre o top da página e o botão de CTA do hero"
      // So if they scroll back UP from the hero CTA, it SHOULD reappear.
      onLeaveBack: () => {
        gsap.to(stickyCta, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: true
        });
      },
      // If they go past the Hero CTA (scrolling down), keep it hidden
      onEnterBack: () => {
        gsap.to(stickyCta, {
          y: '120%',
          duration: 0.4,
          ease: 'power2.in',
          overwrite: true
        });
      },
      onLeave: () => {
         gsap.to(stickyCta, {
          y: '120%',
          duration: 0.4,
          ease: 'power2.in',
          overwrite: true
        });
      }
    });
  }
</script>
```

### `src\layouts\Layout.astro`

```text
---
// src/layouts/Layout.astro
export const prerender = true;

import GTM from '../components/GTM.astro';
import Button from '../components/Button.astro';
import MobileMenu from '../components/MobileMenu';
import CookieBanner from '../components/CookieBanner';
import { Image } from 'astro:assets';
import logo from '../assets/logo.svg';
import logoBranca from '../assets/logo-branca.svg';
import StickyCTA from '../components/StickyCTA.astro';

import '@fontsource/anton';
import '@fontsource/bebas-neue';
import '@fontsource-variable/inter';
import '@fontsource/caveat/700.css';

interface Props {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl: string;
  robots?: string;
}

const {
  title,
  description,
  ogTitle = title,
  ogDescription = description,
  canonicalUrl,
  robots,
} = Astro.props;

const gtmId = import.meta.env.GTM_ID ?? '';
const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const navLinks = [
  { label: 'COMO FUNCIONA', href: '#como-funciona' },
  { label: 'PLANOS', href: '#planos' },
  { label: 'DÚVIDAS', href: '#faq' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Beatriz Mattos | Mentoria K9',
  description:
    'Eu ensino você a liderar o seu cão. Mentoria online individual técnica para quem busca resultados reais e disciplina.',
  url: 'https://abeak9adestramento.com.br',
  telephone: '+5511918952921',
  email: 'abeamattosk9@gmail.com',
  priceRange: 'A partir de R$ 697/mês',
  image: 'https://abeak9adestramento.com.br/assets/images/og-image.webp',
  openingHours: 'Mo-Fr 09:00-17:00',
  sameAs: [
    'https://www.instagram.com/abeak9',
    'https://www.tiktok.com/@abeak9',
  ],
};
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- GTM + Consent Mode v2 -->
  <GTM id={gtmId} />

  <!-- SEO -->
  <title>{title}</title>
  <meta name="description" content={description} />
  {robots && <meta name="robots" content={robots} />}
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:image" content="/assets/images/og-image.webp" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href={canonicalUrl} />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="manifest" href="/manifest.json" />

  <!-- Performance: preconnect -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

  <!-- Performance: preload hero image -->
  <link rel="preload" href="/assets/images/hero-principal.webp" as="image" fetchpriority="high" />

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json" set:html={JSON.stringify(schema)} />
</head>
<body
  class="bg-background text-foreground antialiased overflow-x-hidden selection:bg-accent selection:text-white"
  style="-webkit-tap-highlight-color: transparent;"
>
  <!-- GTM noscript BODY -->
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
      height="0"
      width="0"
      style="display:none;visibility:hidden"
      title="Google Tag Manager"
    ></iframe>
  </noscript>

  <!-- HEADER -->
  <header
    id="main-header"
    class="fixed top-0 z-50 w-full transition-all duration-300 py-4"
  >
    <div class="max-w-content mx-auto px-5 xl:px-12">
      <div class="flex items-center justify-between xl:grid xl:grid-cols-3 xl:items-center">
        
        <!-- Navegação desktop (Esquerda) -->
        <nav class="hidden xl:flex items-center gap-10" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              href={link.href}
              class="font-display text-body font-bold text-foreground hover:text-accent transition-colors tracking-[0.2em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <!-- Logo (Centro) -->
        <div class="flex justify-start xl:justify-center relative h-20 xl:h-20">
          <a
            href="#top"
            aria-label="Beatriz Mattos . início da página"
            class="xl:absolute xl:top-0 xl:left-1/2 xl:-translate-x-1/2 z-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary group"
          >
            <div class="bg-background p-2 rounded-full border-2 border-foreground shadow-card transition-transform duration-500 group-hover:scale-110">
              <Image
                src={logo}
                alt="Beatriz Mattos Adestradora"
                width={100}
                height={100}
                loading="eager"
                class="h-16 w-16 xl:h-20 xl:w-20 transition-transform duration-700 group-hover:rotate-12"
              />
            </div>
          </a>
        </div>

        <!-- CTA desktop (Direita) + Menu Mobile -->
        <div class="flex items-center justify-end">
          <div class="hidden xl:flex">
            <Button
              label="QUERO COMEÇAR"
              href={wppUrl}
              variant="primary"
              trackingId="btn-cta-header"
              section="header"
              newTab={true}
              class="px-10 py-4 !text-body border-2 border-foreground"
            />
          </div>

          <!-- Menu mobile -->
          <div class="xl:hidden">
            <MobileMenu
              client:load
              links={navLinks}
              ctaLabel="QUERO COMEÇAR"
              ctaHref={wppUrl}
            />
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- CONTEÚDO PRINCIPAL -->
  <main id="top">
    <slot />
  </main>

  <!-- RODAPÉ -->
  <footer class="bg-foreground py-20 px-5 xl:px-12 text-primary-foreground border-t-8 border-accent">
    <div class="max-w-content mx-auto">
      <div class="flex flex-col gap-12 xl:grid xl:grid-cols-3 xl:gap-24">
        <!-- Coluna 1: Marca -->
        <div class="flex flex-col gap-6">
          <a
            href="#top"
            aria-label="Beatriz Mattos"
            class="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-block"
          >
            <Image
              src={logoBranca}
              alt="Beatriz Mattos Adestradora"
              width={160}
              height={160}
              loading="lazy"
              class="h-16 w-auto"
            />
          </a>
          <p class="font-display text-h2 leading-none text-white">
            EU ENSINO VOCÊ A LIDERAR O SEU CÃO.
          </p>
        </div>

        <!-- Coluna 2: Navegação -->
        <div>
          <p class="font-display text-label uppercase tracking-widest text-accent mb-6 font-bold">
            NAVEGAÇÃO
          </p>
          <nav aria-label="Navegação do rodapé" class="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                href={link.href}
                class="font-display text-body-lg hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <!-- Coluna 3: Contato -->
        <div>
          <p class="font-display text-label uppercase tracking-widest text-accent mb-6 font-bold">
            CONTATO
          </p>
          <div class="flex flex-col gap-4">
            <a
              id="link-tel-footer"
              href="tel:+5511918952921"
              data-tracking="click-tel"
              data-section="footer"
              class="font-display text-body-lg hover:text-accent transition-colors"
            >
              (11) 91895-2921
            </a>
            <a
              id="link-wpp-footer"
              href={wppUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-tracking="click-whatsapp"
              data-section="footer"
              class="font-display text-body-lg hover:text-accent transition-colors"
            >
              WHATSAPP
            </a>
            <a
              href="mailto:abeamattosk9@gmail.com"
              class="font-sans text-body opacity-70 hover:opacity-100 transition-opacity"
            >
              abeamattosk9@gmail.com
            </a>
          </div>
          <div class="flex gap-6 mt-8">
            <a
              href="https://instagram.com/abeak9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="text-primary-foreground hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@abeak9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              class="text-primary-foreground hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.98a8.24 8.24 0 0 0 4.84 1.55V7.08a4.85 4.85 0 0 1-1.07-.39z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-primary-foreground/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="font-sans text-small opacity-40">
          © {new Date().getFullYear()} Beatriz Mattos. TODOS OS DIREITOS RESERVADOS.
        </p>
        <a
          href="/politica-de-privacidade"
          class="font-sans text-small opacity-60 hover:opacity-100 transition-opacity"
        >
          POLÍTICA DE PRIVACIDADE
        </a>
      </div>
    </div>
  </footer>

  <!-- BOTÃO WHATSAPP FLUTUANTE -->
  <a
    id="btn-wpp-floating"
    href={wppUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar com Beatriz no WhatsApp"
    data-tracking="click-whatsapp"
    data-section="floating-button"
    class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-16 h-16 flex items-center justify-center bg-whatsapp text-white shadow-xl opacity-0 scale-0 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>

  <!-- CookieBanner -->
  <CookieBanner client:idle gtmId={gtmId} />

  <!-- Sticky CTA (Mobile Only) -->
  <StickyCTA />

  <style is:global>
    section {
      scroll-margin-top: 80px;
    }
  </style>

  <!-- SCRIPTS -->
  <script>
    import Lenis from '@studio-freight/lenis';
    import gsap from 'gsap';
    import ScrollTrigger from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.12, // Um pouco mais rápido/responsivo
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time: number) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0); // Evita pulos em animações

    // Header logic
    const header = document.getElementById('main-header');
    let lastScrollY = 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Refresh ScrollTrigger after a short delay to ensure everything is in place
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });

    ScrollTrigger.create({
      start: 50, // Começa a mudar o header mais cedo
      end: 'max',
      onUpdate: (self) => {
        const currentY = self.scroll();
        const scrollingDown = currentY > lastScrollY;

        if (currentY > 80) {
          header?.classList.add('bg-background/95', 'backdrop-blur-sm', 'border-b-2', 'border-foreground');
          header?.classList.remove('py-4');
          header?.classList.add('py-2');
        } else {
          header?.classList.remove('bg-background/95', 'backdrop-blur-sm', 'border-b-2', 'border-foreground');
          header?.classList.remove('py-2');
          header?.classList.add('py-4');
        }

        if (!prefersReduced && header) {
          if (scrollingDown && currentY > 200) {
            gsap.to(header, { y: '-100%', duration: 0.3, ease: 'power2.in', overwrite: true });
          } else {
            gsap.to(header, { y: 0, duration: 0.3, ease: 'power2.out', overwrite: true });
          }
        }
        lastScrollY = currentY;
      },
    });

    // Floating Button logic
    const floatingBtn = document.getElementById('btn-wpp-floating');
    const heroSection = document.getElementById('hero');

    if (heroSection && floatingBtn) {
      ScrollTrigger.create({
        trigger: heroSection,
        start: 'bottom 20%',
        onEnter: () => gsap.to(floatingBtn, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }),
        onLeaveBack: () => gsap.to(floatingBtn, { opacity: 0, scale: 0, duration: 0.3, ease: 'power2.in' }),
      });
    }
    // Active link highlighting (Scroll Spy)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#main-header nav a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('text-accent');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-accent');
        }
      });
    });
  </script>
</body>
</html>
```

### `src\pages\404.astro`

```text
---
// src/pages/404.astro
export const prerender = true;

import { Image } from 'astro:assets';
import logo from '../assets/logo.svg';
import Button from '../components/Button.astro';

import '@fontsource/dm-serif-display';
import '@fontsource-variable/inter';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>404 . Página não encontrada | Beatriz Mattos</title>
  <meta name="robots" content="noindex" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</head>
<body class="bg-background text-foreground antialiased min-h-screen flex flex-col items-center justify-center px-5 text-center relative overflow-hidden">
  
  <!-- Numeral decorativo -->
  <div class="num-404 font-serif text-[30vw] text-foreground opacity-[0.04] absolute inset-0 flex items-center justify-center pointer-events-none select-none leading-none z-0">
    404
  </div>

  <div class="relative z-10 flex flex-col items-center gap-8 max-w-md">
    <a href="/" aria-label="Voltar ao início">
      <Image src={logo} alt="Beatriz Mattos Adestradora" height={32} loading="eager" class="h-8 w-auto" />
    </a>

    <div class="flex flex-col gap-4">
      <h1 class="font-serif text-h2 text-foreground">Esse endereço não existe.</h1>
      <p class="font-sans text-body text-muted-foreground">
        Mas o que você procura, está aqui.
      </p>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 mt-6 w-full">
      <Button
        label="Voltar ao início"
        href="/"
        variant="primary"
        trackingId="btn-404-home"
        section="404"
        class="flex-1 py-4"
      />
      <Button
        label="Falar no WhatsApp"
        href={wppUrl}
        variant="secondary"
        trackingId="btn-404-wpp"
        section="404"
        newTab={true}
        class="flex-1 py-4"
      />
    </div>
  </div>

  <script>
    import gsap from 'gsap';
    
    document.addEventListener('DOMContentLoaded', () => {
      gsap.to('.num-404', {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  </script>
</body>
</html>
```

### `src\pages\index.astro`

```text
---
// src/pages/index.astro
export const prerender = true;

import Layout from '../layouts/Layout.astro';
import HeroSection from '../sections/HeroSection.astro';
import ServicosSection from '../sections/ServicosSection.astro';
import ComoFuncionaSection from '../sections/ComoFuncionaSection.astro';
import DiferenciaisSection from '../sections/DiferenciaisSection.astro';
import PlanosSection from '../sections/PlanosSection.astro';
import FAQSection from '../sections/FAQSection.astro';
import ContatoSection from '../sections/ContatoSection.astro';
import CTAFinalSection from '../sections/CTAFinalSection.astro';
---

<Layout
  title="Beatriz Mattos | Mentoria Individual de Adestramento Online"
  description="Seu cão não responde porque a base de comunicação está errada. Mentoria online individual com Beatriz Mattos. Entenda como funciona e fale agora."
  canonicalUrl="https://abeak9adestramento.com.br"
>
  <HeroSection />
  <ServicosSection />
  <ComoFuncionaSection />
  <DiferenciaisSection />
  <PlanosSection />
  <FAQSection />
  <ContatoSection />
  <CTAFinalSection />
</Layout>
```

### `src\pages\links.astro`

```text
---
// src/pages/links.astro
export const prerender = true;

import { Image } from 'astro:assets';
import logo from '../assets/logo.svg';
import avatarLinks from '../assets/images/profissional-retrato.webp'; // Usando o mesmo retrato como fallback
import Button from '../components/Button.astro';
import Icon from '../components/Icon.astro';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const links = [
  {
    label: '💬 Falar no WhatsApp',
    href: wppUrl,
    variant: 'accent',
    trackingId: 'links-wpp',
    newTab: true,
  },
  {
    label: '🌐 Acessar o site',
    href: '/',
    variant: 'secondary',
    trackingId: 'links-home',
  },
  {
    label: '📸 Instagram @abeak9',
    href: 'https://instagram.com/abeak9',
    variant: 'secondary',
    trackingId: 'links-insta',
    newTab: true,
  },
  {
    label: '🎵 TikTok @abeak9',
    href: 'https://tiktok.com/@abeak9',
    variant: 'secondary',
    trackingId: 'links-tiktok',
    newTab: true,
  },
];
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Beatriz Mattos | Links</title>
  <meta name="description" content="Links oficiais de Beatriz Mattos Adestradora." />
  <meta name="robots" content="noindex" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</head>
<body class="bg-background text-foreground antialiased min-h-screen flex flex-col items-center justify-start pt-16 px-5 pb-12">
  
  <div class="w-full max-w-[520px] mx-auto flex flex-col items-center gap-8">
    <!-- Logo -->
    <a href="/" aria-label="Beatriz Mattos Adestradora">
      <Image src={logo} alt="Beatriz Mattos Adestradora" height={40} loading="eager" />
    </a>

    <!-- Avatar -->
    <div class="relative">
      <Image
        src={avatarLinks}
        alt="Foto de Beatriz Mattos, adestradora"
        width={96}
        height={96}
        loading="eager"
        class="rounded-full object-cover border-2 border-border shadow-card"
      />
    </div>

    <!-- Taglinee -->
    <p class="font-sans text-body text-muted-foreground text-center max-w-[280px]">
      Treina pessoas antes de treinar cães.
    </p>

    <!-- Botões -->
    <nav class="w-full flex flex-col gap-4 links-container">
      {links.map((link, i) => (
        <div class="link-item opacity-0 translate-y-4">
          <Button
            label={link.label}
            href={link.href}
            variant={link.variant as any}
            trackingId={link.trackingId}
            section="links-page"
            newTab={link.newTab}
            class="w-full py-5"
          />
        </div>
      ))}
    </nav>

    <!-- Redes -->
    <div class="mt-4 flex gap-6">
      <a href="mailto:abeamattosk9@gmail.com" class="text-muted-foreground hover:text-accent transition-colors" aria-label="Enviar e-mail">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      </a>
    </div>

    <!-- Footer -->
    <footer class="mt-auto pt-12 text-center">
      <p class="font-sans text-small text-muted-foreground opacity-60">
        © {new Date().getFullYear()} Beatriz Mattos
      </p>
    </footer>
  </div>

  <script>
    import gsap from 'gsap';
    
    document.addEventListener('DOMContentLoaded', () => {
      gsap.to('.link-item', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });
  </script>
</body>
</html>
```

### `src\pages\politica-de-privacidade.astro`

```text
---
// src/pages/politica-de-privacidade.astro
export const prerender = true;

import { Image } from 'astro:assets';
import logo from '../assets/logo.svg';

import '@fontsource/dm-serif-display';
import '@fontsource-variable/inter';
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Política de Privacidade | Beatriz Mattos</title>
  <meta name="description" content="Política de Privacidade e Termos de Uso de Beatriz Mattos Adestradora." />
  <meta name="robots" content="noindex, follow" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</head>
<body class="bg-background text-foreground antialiased min-h-screen">
  
  <header class="border-b border-border py-6 px-5">
    <div class="max-w-narrow mx-auto flex items-center justify-between">
      <a href="/" aria-label="Voltar para o início">
        <Image src={logo} alt="Beatriz Mattos Adestradora" height={28} class="h-7 w-auto" />
      </a>
      <a href="/" class="font-sans text-small text-muted-foreground hover:text-accent transition-colors">
        ← Voltar ao site
      </a>
    </div>
  </header>

  <main class="max-w-narrow mx-auto py-16 px-5">
    <article class="prose prose-slate max-w-none">
      <section id="privacidade" class="mb-16">
        <h1 class="font-serif text-h2 mb-8">Política de Privacidade</h1>
        
        <div class="space-y-6 font-sans text-body leading-relaxed text-foreground/80">
          <p>
            Esta Política de Privacidade descreve como Beatriz Mattos ("nós", "nosso") coleta, utiliza e protege as informações fornecidas por você ao utilizar este site.
          </p>

          <h3 class="font-bold text-foreground text-h3 mt-8">1. Coleta de Informações</h3>
          <p>
            Coletamos informações que você nos fornece diretamente através do formulário de contato ou via WhatsApp, incluindo: Nome completo, número de WhatsApp, raça e idade do cão, e descrições de comportamento animal.
          </p>

          <h3 class="font-bold text-foreground text-h3 mt-8">2. Uso das Informações</h3>
          <p>
            As informações coletadas são utilizadas exclusivamente para:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Avaliar a viabilidade técnica da mentoria para o seu caso;</li>
            <li>Entrar em contato via WhatsApp para agendamento ou suporte;</li>
            <li>Melhorar a qualidade dos nossos serviços e do conteúdo do site.</li>
          </ul>

          <h3 class="font-bold text-foreground text-h3 mt-8">3. Cookies e Rastreamento</h3>
          <p>
            Utilizamos o Google Tag Manager e o Google Analytics para coletar dados de acesso anonimizados, como páginas visitadas e origem do tráfego. Você pode gerenciar seu consentimento através do banner de cookies exibido no site.
          </p>

          <h3 class="font-bold text-foreground text-h3 mt-8">4. Compartilhamento de Dados</h3>
          <p>
            Não vendemos ou alugamos seus dados pessoais. Compartilhamos informações apenas com provedores de serviços essenciais para o nosso atendimento (Google Workspace, WhatsApp, Resend) conforme necessário para a prestação do serviço.
          </p>

          <h3 class="font-bold text-foreground text-h3 mt-8">5. Seus Direitos (LGPD)</h3>
          <p>
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento. Para exercer esses direitos, entre em contato através do e-mail: <a href="mailto:abeamattosk9@gmail.com" class="text-accent underline">abeamattosk9@gmail.com</a>.
          </p>
        </div>
      </section>

      <hr class="border-border mb-16" />

      <section id="termos">
        <h2 class="font-serif text-h2 mb-8">Termos de Uso</h2>
        
        <div class="space-y-6 font-sans text-body leading-relaxed text-foreground/80">
          <h3 class="font-bold text-foreground text-h3 mt-8">1. Objeto</h3>
          <p>
            Este site apresenta os serviços de mentoria de adestramento online oferecidos por Beatriz Mattos. A contratação do serviço implica na aceitação das condições comerciais e pedagógicas descritas.
          </p>

          <h3 class="font-bold text-foreground text-h3 mt-8">2. Condições do Serviço</h3>
          <p>
            A mentoria exige um compromisso mínimo de 30 dias. O cancelamento do serviço deve ser comunicado com aviso prévio de 30 dias. Os resultados dependem diretamente da aplicação consistente das orientações técnicas pelo cliente.
          </p>

          <h3 class="font-bold text-foreground text-h3 mt-8">3. Responsabilidades</h3>
          <p>
            Beatriz Mattos se compromete a entregar a técnica e o suporte conforme o plano contratado. O cliente é responsável pela segurança e integridade física do cão e das pessoas envolvidas durante a execução dos treinos sugeridos.
          </p>

          <h3 class="font-bold text-foreground text-h3 mt-8">4. Contato</h3>
          <p>
            Dúvidas sobre estes termos podem ser enviadas para <a href="mailto:abeamattosk9@gmail.com" class="text-accent underline">abeamattosk9@gmail.com</a>.
          </p>
        </div>
      </section>
    </article>
  </main>

  <footer class="border-t border-border py-12 px-5 text-center">
    <p class="font-sans text-small text-muted-foreground opacity-60">
      © {new Date().getFullYear()} Beatriz Mattos.
    </p>
  </footer>
</body>
</html>
```

### `src\pages\api\contato.ts`

```typescript
// src/pages/api/contato.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const resendKey = import.meta.env.RESEND_API_KEY;

  if (!resendKey) {
    console.error('RESEND_API_KEY não configurada.');
    return new Response(JSON.stringify({ error: 'Configuração do servidor incompleta.' }), { status: 500 });
  }

  try {
    const body = await request.json();
    const { nome, whatsapp, raca, idade, problema, adestramento, rotina, website } = body;

    // Honeypot validation
    if (website) {
      return new Response(JSON.stringify({ message: 'Spam detectado.' }), { status: 200 });
    }

    // Basic validation
    if (!nome || !whatsapp || !raca || !problema) {
      return new Response(JSON.stringify({ error: 'Campos obrigatórios faltando.' }), { status: 400 });
    }

    const resend = new Resend(resendKey);

    const { error } = await resend.emails.send({
      from: 'Site Beatriz Mattos <contato@abeak9adestramento.com.br>',
      to: ['lucasapsimoes@gmail.com'],
      subject: `Novo Contato: ${nome}`,
      html: `
        <h2>Novo contato recebido pelo site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Raça do cão:</strong> ${raca}</p>
        <p><strong>Idade do cão:</strong> ${idade}</p>
        <p><strong>Problema:</strong> ${problema}</p>
        <p><strong>Adestramento anterior:</strong> ${adestramento}</p>
        <p><strong>Disposto a mudar rotina:</strong> ${rotina}</p>
      `,
    });

    if (error) {
      console.error('Erro Resend:', error);
      return new Response(JSON.stringify({ error: 'Erro ao enviar e-mail.' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Sucesso' }), { status: 200 });
  } catch (e) {
    console.error('Erro API:', e);
    return new Response(JSON.stringify({ error: 'Erro interno no servidor.' }), { status: 500 });
  }
};
```

### `src\sections\CTAFinalSection.astro`

```text
---
// src/sections/CTAFinalSection.astro
import Button from '../components/Button.astro';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';
---

<section
  id="cta-final"
  class="bg-foreground py-section px-5 xl:px-12 relative overflow-hidden border-t-8 border-accent"
>
  <!-- Background Noise -->
  <div class="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style="background-image: url('https://www.transparenttextures.com/patterns/dark-matter.png');"></div>

  <div class="max-w-content mx-auto text-center flex flex-col items-center gap-10 relative z-10">
    <h2 class="font-display text-h1 text-white leading-none uppercase max-w-[900px]">
      CONSTRUA UMA RELAÇÃO DE RESPEITO E <span class="text-accent">CLAREZA COM O SEU CÃO.</span>
    </h2>
    
    <p class="font-sans text-body-lg text-white opacity-80 max-w-[600px]">
      O próximo passo é uma análise técnica do seu caso para estruturarmos o melhor plano de treinamento. Vamos alinhar as expectativas e começar o trabalho de campo.
    </p>

    <div class="relative mt-6">
      <Button
        label="FALE COMIGO PELO WHATSAPP"
        href={wppUrl}
        variant="accent"
        trackingId="btn-cta-final"
        section="cta-final"
        newTab={true}
        class="px-16 py-6 text-h3 tracking-[0.2em] border-2 border-foreground"
      />
    </div>

    <p class="font-display text-label text-accent tracking-[0.3em] mt-8 uppercase font-bold">
      MENTORIA INDIVIDUAL. VAGAS POR ORDEM DE CONTATO.
    </p>
  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#cta-final h2, #cta-final p, #cta-final .relative', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#cta-final',
        start: 'top 95%',
      },
    });
  }
</script>
```

### `src\sections\ComoFuncionaSection.astro`

```text
---
// src/sections/ComoFuncionaSection.astro
import SectionHeader from '../components/SectionHeader.astro';

const passos = [
  {
    num: '01',
    titulo: 'FILTRO INICIAL',
    descricao: 'Você me envia no WhatsApp raça idade do cão e o principal problema. Esse filtro existe para garantir que a mentoria seja viável para o seu caso antes de você investir.',
  },
  {
    num: '02',
    titulo: 'ENCONTROS INDIVIDUAIS',
    descricao: 'Encontros pelo Google Meet totalmente focados no seu caso. Você fala diretamente comigo sem turmas e sem generalização.',
  },
  {
    num: '03',
    titulo: 'ANÁLISE DE CAMPO',
    descricao: 'Você filma seus treinos e me envia. Eu analiso tudo e te devolvo o que está gerando ruído na comunicação com o seu cão.',
  },
  {
    num: '04',
    titulo: 'SUPORTE TÁTICO',
    descricao: 'Acesso direto ao WhatsApp entre as sessões. Surgiu dúvida na prática você tem suporte para continuar o trabalho.',
  },
];
---

<section
  id="como-funciona"
  class="bg-background py-section px-5 xl:px-12 border-b-2 border-foreground"
>
  <div class="max-w-content mx-auto">
    <div class="grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] gap-12 xl:gap-20">
      
      <!-- Esquerda: Cabeçalho Fixo -->
      <div class="xl:sticky xl:top-32 h-fit">
        <SectionHeader
          label="O PROCESSO"
          title="MÉTODO CLARO ACOMPANHAMENTO DIRETO E RESULTADO CONSISTENTE."
          subtitle="Um acompanhamento direto focado em resultados práticos. Identificamos falhas, aplicamos correções e construímos a sua autonomia como condutor."
        />
        
        <div class="mt-12 p-10 border-4 border-foreground bg-accent text-white font-display text-h2 leading-none rotate-[-2deg] shadow-[8px_8px_0px_0px_rgba(26,29,35,1)] max-w-sm">
          O OBJETIVO <br/> DA MENTORIA <br/> É A SUA <br/> INDEPENDÊNCIA.
        </div>
      </div>

      <!-- Direita: Passos com efeito Stacking -->
      <div class="flex flex-col gap-0 steps-stack-container">
        {passos.map((p, index) => (
          <div 
            class="sticky bg-surface border-2 border-foreground p-8 xl:p-12 mb-20 shadow-[4px_4px_0px_0px_rgba(26,29,35,1)] transition-transform duration-500 step-card"
            style={`top: ${120 + (index * 24)}px; z-index: ${index + 1};`}
          >
            <span class="font-display text-[6rem] text-foreground opacity-5 absolute right-8 top-4 pointer-events-none select-none">
              {p.num}
            </span>
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-display text-h2 text-accent">{p.num}.</span>
              <h3 class="font-display text-h2 text-foreground tracking-widest">{p.titulo}</h3>
            </div>
            <p class="font-sans text-body-lg text-muted-foreground max-w-lg leading-relaxed">
              {p.descricao}
            </p>
          </div>
        ))}

        <!-- Autonomia (Card Final que fecha o stack) -->
        <div 
          class="sticky bg-foreground text-white p-10 xl:p-14 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(255,77,0,1)] z-[10]"
          style={`top: ${120 + (passos.length * 24)}px;`}
        >
          <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#FF4D00_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <h3 class="font-display text-display text-accent mb-6 relative z-10 leading-none">AUTONOMIA</h3>
          <p class="font-sans text-body-lg opacity-90 relative z-10 max-w-xl">
            Você constrói a base de comunicação. Você entende o cão. Você conduz com clareza. A mentoria termina quando você se torna independente.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Efeito de compressão opcional ao stackar */
  .step-card {
    will-change: transform, opacity;
  }
</style>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.step-card');
    
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return; // Não anima o último do stack da mesma forma

      gsap.to(card, {
        scale: 0.95 - (i * 0.01),
        opacity: 0.8,
        scrollTrigger: {
          trigger: card,
          start: `top ${120 + (i * 24)}px`,
          endTrigger: '.steps-stack-container',
          end: 'bottom center',
          scrub: true,
          pinSpacing: false,
        }
      });
    });
  }
</script>
```

### `src\sections\ContatoSection.astro`

```text
---
// src/sections/ContatoSection.astro
import SectionHeader from '../components/SectionHeader.astro';
import ContactForm from '../components/ContactForm';
---

<section
  id="contato"
  class="bg-background py-section px-5 xl:px-12 relative border-b-2 border-foreground"
  aria-labelledby="contato-title"
>
  <!-- Grid Decorativo -->
  <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: linear-gradient(#1A1D23 1px, transparent 1px), linear-gradient(90deg, #1A1D23 1px, transparent 1px); background-size: 40px 40px;"></div>

  <div class="max-w-content mx-auto relative z-10">
    <div class="grid grid-cols-1 xl:grid-cols-[1fr_500px] gap-20">
      
      <div>
        <SectionHeader
          label="QUERO COMEÇAR"
          title="O PRÓXIMO PASSO É UMA CONVERSA. NÃO UM COMPROMISSO."
          subtitle="Antes de começar eu preciso entender o seu caso. Preencha os dados do seu cão para que eu possa avaliar como a mentoria se aplica à sua situação."
        />

        <div class="mt-12 flex flex-col gap-8">
          <div class="flex items-start gap-6 p-6 border-4 border-foreground bg-surface">
            <span class="text-accent font-display text-h1 leading-none">!</span>
            <p class="font-sans text-body-lg">
              <strong class="text-foreground">Tenha em mãos</strong> raça idade principal problema e o histórico de adestramentos anteriores.
            </p>
          </div>
          
          <div class="p-8 border-4 border-foreground bg-foreground text-white font-display text-h3 tracking-widest rotate-[1deg]">
            A MENTORIA EXIGE COMPROMETIMENTO COM A ROTINA E <span class="text-accent">É ASSIM QUE OS RESULTADOS APARECEM.</span>
          </div>
        </div>
      </div>

      <div class="bg-background border-4 border-foreground p-8 shadow-[12px_12px_0px_0px_rgba(26,29,35,1)]">
        <ContactForm client:load />
      </div>
    </div>
  </div>
</section>
```

### `src\sections\DiferenciaisSection.astro`

```text
---
// src/sections/DiferenciaisSection.astro
import { Image } from 'astro:assets';
import SectionHeader from '../components/SectionHeader.astro';
import Button from '../components/Button.astro';
import retrato from '../assets/images/profissional-retrato.webp';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const items = [
  {
    title: 'VISÃO COMPLETA',
    desc: 'Trabalhei com perfis variados em condições reais. O que funciona na prática é o que entra na mentoria.',
  },
  {
    title: 'TRANSPARÊNCIA TOTAL',
    desc: 'Toda a técnica que eu conheço eu te ensino. O objetivo é que você caminhe sozinho.',
  },
  {
    title: 'DIDÁTICA DIRETA',
    desc: 'Sem misticismo ou achismo. O que está errado tem nome e tem correção técnica fundamentada.',
  },
];
---

<section
  id="diferenciais"
  class="bg-surface py-section px-5 xl:px-12 border-b-2 border-foreground overflow-hidden"
  aria-labelledby="diferenciais-title"
>
  <div class="max-w-content mx-auto">
    <div class="xl:grid xl:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
      
      <!-- Coluna Esquerda: Texto e Lista -->
      <div class="dif-text">
        <SectionHeader
          label="POR QUE EU"
          title="TÉCNICA DIRETA RESULTADO QUE SE SUSTENTA."
          subtitle="Treino pessoas antes de treinar cães. A mentoria existe para que você consiga conduzir o seu cão sozinho."
        />

        <div class="mt-16 flex flex-col gap-8">
          {items.map((item) => (
            <div class="flex flex-col gap-2 border-l-4 border-foreground pl-8 py-2">
              <h3 class="font-display text-h3 text-foreground tracking-widest">{item.title}</h3>
              <p class="font-sans text-body-lg text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div class="mt-16">
          <Button
            label="QUERO ME TORNAR INDEPENDENTE"
            href={wppUrl}
            variant="primary"
            trackingId="btn-cta-diferenciais"
            section="diferenciais"
            newTab={true}
            class="px-10 py-5 text-h3 tracking-widest border-2 border-foreground"
          />
        </div>
      </div>

      <!-- Coluna Direita: Imagem de Impacto -->
      <div class="relative mt-20 xl:mt-0">
        <div class="absolute -inset-4 border-4 border-accent -z-10 translate-x-6 translate-y-6"></div>
        <Image
          src={retrato}
          alt="Beatriz Mattos - Foco e Técnica"
          width={600}
          height={800}
          class="w-full grayscale contrast-125 border-4 border-foreground"
        />
        <div class="absolute -bottom-10 -left-10 font-hand text-[3rem] text-accent rotate-[-6deg] bg-background px-4 py-2 border-2 border-foreground shadow-card">
          Sem filtro. Só técnica.
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.dif-text > *', {
      opacity: 0, x: -20, duration: 0.5, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: '.dif-text', start: 'top 95%' }
    });

    gsap.from('.dif-text + div', {
      opacity: 0, scale: 0.98, x: 20, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.dif-text', start: 'top 95%' }
    });
  }
</script>
```

### `src\sections\FAQSection.astro`

```text
---
// src/sections/FAQSection.astro
import SectionHeader from '../components/SectionHeader.astro';

const faqs = [
  {
    pergunta: 'COMO FUNCIONA A MENTORIA ONLINE?',
    resposta: 'A mentoria foca em capacitar VOCÊ para treinar o seu cão. Através de vídeo chamadas, eu te ensino a ler o animal, ajustar sua postura e agir com precisão. O resultado acontece na sua rotina diária, onde a comunicação realmente importa.',
  },
  {
    pergunta: 'VOU RECEBER UM CURSO GRAVADO?',
    resposta: 'Não. O acompanhamento é 100% individual e ao vivo. Cada sessão é personalizada para o seu cenário específico, analisando o comportamento do seu cão e a sua evolução técnica como condutor.',
  },
  {
    pergunta: 'HÁ SUPORTE ENTRE OS ENCONTROS?',
    resposta: 'Sim. Você terá um canal direto comigo via WhatsApp para tirar dúvidas e enviar vídeos dos seus treinos. Isso garante que as correções sejam feitas no momento certo, acelerando o aprendizado.',
  },
  {
    pergunta: 'QUAL É O TEMPO DE COMPROMISSO?',
    resposta: 'Trabalhamos com um ciclo inicial de 30 dias para garantir que o método seja aplicado corretamente. O foco é a sua evolução técnica e a construção de resultados consistentes a médio e longo prazo.',
  },
  {
    pergunta: 'VOCÊ ATENDE ADESTRADORES PROFISSIONAIS?',
    resposta: 'Sim. Ofereço suporte para profissionais que buscam refinamento técnico, segurança em casos complexos e uma visão estratégica sobre o treinamento K9 e comportamento canino.',
  },
];
---

<section
  id="faq"
  class="bg-surface py-section px-5 xl:px-12 border-b-2 border-foreground"
  aria-labelledby="faq-title"
>
  <div class="max-w-content mx-auto">
    <div class="max-w-narrow mb-16">
      <SectionHeader
        label="DÚVIDAS"
        title="O QUE VOCÊ PRECISA SABER ANTES DE COMEÇAR."
        subtitle="Respostas diretas para as dúvidas mais comuns. Se a sua não estiver aqui é só me chamar no WhatsApp."
      />
    </div>

    <!-- Accordion Brutalista -->
    <div class="flex flex-col border-t-4 border-foreground">
      {faqs.map((faq, index) => (
        <div class="border-b-4 border-foreground overflow-hidden faq-item group">
          <button
            class="w-full flex items-center justify-between p-8 text-left transition-colors hover:bg-white/20 aria-expanded:bg-white/40 focus:outline-none group/btn"
            aria-expanded="false"
          >
            <span class="font-display text-h3 tracking-widest text-foreground group-hover:text-accent transition-colors">
              {faq.pergunta}
            </span>
            <span class="text-accent font-display text-h1 leading-none transition-transform duration-300 transform group-aria-expanded:rotate-45">
              +
            </span>
          </button>
          <div
            class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out bg-white/40"
            role="region"
          >
            <div class="p-8 pt-0 font-sans text-body-lg text-muted-foreground max-w-narrow">
              {faq.resposta}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<script>
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const button = item.querySelector('button');
    const content = item.querySelector('div[role="region"]');
    const icon = item.querySelector('.transition-transform');

    button?.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      // Close all others
      faqItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector('button');
        const otherContent = otherItem.querySelector('div[role="region"]');
        const otherIcon = otherItem.querySelector('.transition-transform');
        
        if (otherButton && otherContent) {
          otherButton.setAttribute('aria-expanded', 'false');
          (otherContent as HTMLElement).style.maxHeight = '0';
          otherIcon?.classList.remove('rotate-45');
        }
      });

      // Toggle current
      if (!isExpanded) {
        button.setAttribute('aria-expanded', 'true');
        (content as HTMLElement).style.maxHeight = content?.scrollHeight + 'px';
        icon?.classList.add('rotate-45');
      }
    });
  });
</script>
```

### `src\sections\HeroSection.astro`

```text
---
// src/sections/HeroSection.astro
import { Image } from 'astro:assets';
import Button from '../components/Button.astro';
import heroImage from '../assets/images/hero-principal.webp';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';
---

<section
  id="hero"
  class="bg-background pt-40 pb-20 xl:pt-44 xl:pb-0 px-5 xl:px-12 relative"
>
  <!-- Dot pattern background -->
  <div class="absolute inset-0 opacity-[0.03] pointer-events-none select-none" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>

  <!-- Accent glow behind image area -->
  <div class="hidden xl:block absolute right-0 top-1/2 -translate-y-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

  <div class="max-w-content mx-auto relative z-10">
    <div class="xl:grid xl:grid-cols-[1fr_500px] xl:gap-x-12 xl:items-start">
      
      <!-- Coluna de Conteúdo (Texto) -->
      <div class="flex flex-col gap-8 xl:gap-16">
        <div class="max-w-[1000px]">
          <h1 class="font-display text-h1 text-foreground leading-[0.85] uppercase">
            LIDERANÇA E DISCIPLINA <br/>
            <span class="text-accent">COM PRECISÃO TÁTICA.</span>
          </h1>
          
          <div class="relative inline-block mt-[-20px] ml-6 xl:mt-4">
            <span class="xl:absolute xl:-top-6 xl:left-[60%] font-hand text-h3 xl:text-hand-lg text-accent rotate-[-6deg] xl:rotate-[-4deg] whitespace-nowrap bg-background px-4 py-1 border-2 border-foreground shadow-card z-20">
              fale a língua do seu cão
            </span>
          </div>
        </div>

        <div class="relative flex flex-col gap-6 xl:gap-6 xl:max-w-[620px] xl:pb-12">
          
          <!-- Bloco Imagem e Texto de Apoio (Mobile) -->
          <div class="relative w-full mt-4 xl:mt-0">
            
            <!-- Imagem Mobile -->
            <div class="hero-image-animate block xl:hidden w-[90%] ml-auto z-10 pointer-events-none">
              <Image
                src={heroImage}
                alt="Beatriz Mattos em treinamento com American Bully"
                width={600}
                height={600}
                loading="eager"
                format="webp"
                class="w-full h-auto drop-shadow-2xl"
              />
            </div>

            <!-- Texto de Apoio posicionado no espaço negativo (Mobile) ou fluxo normal (Desktop) -->
            <div class="absolute top-6 left-0 w-[50%] sm:w-[45%] xl:relative xl:top-auto xl:left-auto xl:w-full z-20">
              <p class="font-display text-[1.4rem] sm:text-[1.7rem] leading-[1.0] xl:text-h3 text-foreground uppercase">
                Ajuste sua comunicação e recupere <br class="hidden xl:block"/>
                a clareza na convivência com o seu cão.
              </p>
            </div>
            
          </div>
          
          <!-- Parágrafo Longo (Embaixo da imagem no Mobile) -->
          <p class="font-sans text-body sm:text-body-lg text-muted-foreground relative z-20 mt-4 xl:mt-0">
            A mentoria individual foca no ponto central que é a sua postura como condutor do cão. Através de uma análise técnica e personalizada identificamos as falhas na sua comunicação que geram desobediência e insegurança.
          </p>

          <div id="hero-ctas" class="flex flex-col sm:flex-row items-center gap-8 mt-4 relative z-20">
            <Button
              label="QUERO LIDERAR MEU CÃO"
              id="btn-cta-hero"
              href={wppUrl}
              variant="accent"
              trackingId="btn-cta-hero"
              section="hero"
              newTab={true}
              class="w-full sm:w-auto px-8 sm:px-12 py-6 tracking-widest shadow-card"
            />
            <a href="#como-funciona" class="inline-flex items-center justify-center font-display text-body-lg tracking-widest hover:text-accent transition-colors underline underline-offset-8 leading-none">
              VER MEU MÉTODO
            </a>
          </div>
        </div>
      </div>

      <!-- Coluna da Imagem (Desktop) -->
      <div id="hero-image-wrapper" class="hero-image-animate hidden xl:block relative xl:mt-[-40px] xl:-mr-12 z-20 group cursor-crosshair">
        <!-- Shadow anchor / ground effect -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-[30px] bg-foreground/10 rounded-[50%] blur-2xl pointer-events-none hero-shadow"></div>
        
        <Image
          src={heroImage}
          alt="Beatriz Mattos em treinamento com American Bully"
          width={1000}
          height={1000}
          loading="eager"
          format="webp"
          class="w-full max-w-[460px] drop-shadow-2xl transition-all duration-700"
        />


      </div>
    </div>
  </div>
</section>

<style>
  /* Ensure the overflow is visible beyond the hero section */
  #hero {
    overflow: visible !important;
  }

  /* Subtle floating animation */
  @keyframes heroFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  #hero-image-wrapper {
    animation: heroFloat 6s ease-in-out infinite;
    animation-play-state: paused;
  }

  /* Only float on desktop for performance */
  @media (min-width: 1280px) {
    #hero-image-wrapper {
      animation-play-state: running;
    }
  }

  /* Shadow pulses with float */
  @keyframes shadowPulse {
    0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.15; }
    50% { transform: translateX(-50%) scale(0.85); opacity: 0.08; }
  }

  .hero-shadow {
    animation: shadowPulse 6s ease-in-out infinite;
  }

  @media (min-width: 1280px) {
    .hero-shadow {
      animation-play-state: running;
    }
  }
</style>

<script>
  import gsap from 'gsap';

  document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const tl = gsap.timeline();

    tl.from('#hero h1', { y: 30, duration: 0.7, ease: 'power3.out' })
      .from('#hero .font-hand', { scale: 0, rotation: 10, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3')
      .from('#hero p', { y: 15, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.3')
      .from('#hero-ctas', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .from('.hero-image-animate', { y: 60, opacity: 0, scale: 0.95, duration: 1, ease: 'power3.out' }, '-=0.8');
  });
</script>
```

### `src\sections\PlanosSection.astro`

```text
---
// src/sections/PlanosSection.astro
import SectionHeader from '../components/SectionHeader.astro';
import Button from '../components/Button.astro';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const listaPlanos = [
  {
    id: 'basico',
    nome: 'BÁSICO',
    sessao: '01 SESSÃO POR SEMANA',
    preco: '697',
    desc: 'Foco em correção pontual e base de comunicação.',
    itens: ['Análise de 1 vídeo por semana', 'Suporte WhatsApp comercial', 'Encontros individuais'],
  },
  {
    id: 'padrao',
    nome: 'PADRÃO',
    sessao: '02 SESSÕES POR SEMANA',
    preco: '747',
    highlight: true,
    desc: 'Ideal para casos de reatividade e rotina complexa.',
    itens: ['Análise de 3 vídeos por semana', 'Suporte WhatsApp prioridade', 'Ajuste de rotina diária'],
  },
  {
    id: 'intensivo',
    nome: 'INTENSIVO',
    sessao: '03 SESSÕES POR SEMANA',
    preco: '897',
    desc: 'Para quem quer resultado máximo no menor tempo.',
    itens: ['Análise ilimitada de vídeos', 'Acesso direto 24h (urgência)', 'Formação de condutor'],
  },
];
---

<section
  id="planos"
  class="bg-foreground py-section px-5 xl:px-12 border-y-8 border-accent relative"
>
  <div class="max-w-content mx-auto relative z-10">
    <div class="text-white text-center mb-16">
      <div class="inline-block bg-accent text-white px-6 py-2 mb-6 font-display text-h3 tracking-widest border-2 border-white">
        INVESTIMENTO TÁTICO
      </div>
      <h2 class="font-display text-h1 uppercase leading-none">
        ESCOLHA O RITMO DA <br class="md:hidden"/> <span class="text-accent">SUA EVOLUÇÃO.</span>
      </h2>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {listaPlanos.map((plano) => (
        <div class={`relative flex flex-col bg-background border-4 p-8 xl:p-10 ${plano.highlight ? 'border-accent scale-105 z-20 shadow-[10px_10px_0px_0px_rgba(255,77,0,1)]' : 'border-white/10 hover:border-white transition-colors'}`}>
          
          {plano.highlight && (
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-white font-display text-label tracking-widest px-4 py-2 border-2 border-foreground whitespace-nowrap">
              MAIS PROCURADO
            </div>
          )}

          <div class="mb-8">
            <h3 class="font-display text-h3 text-foreground opacity-50 tracking-widest uppercase mb-1">{plano.nome}</h3>
            <p class="font-display text-h2 text-foreground leading-tight">{plano.sessao}</p>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-1">
              <span class="font-display text-h3 text-foreground opacity-40">R$</span>
              <span class="font-display text-[4rem] leading-none text-foreground">{plano.preco}</span>
              <span class="font-display text-h3 text-muted-foreground uppercase ml-2"> por mês</span>
            </div>
          </div>

          <div class="flex-grow flex flex-col gap-6">
            <p class="font-sans text-body-lg font-bold text-foreground">
              {plano.desc}
            </p>
            <ul class="flex flex-col gap-4">
              {plano.itens.map(item => (
                <li class="flex items-start gap-3 font-sans text-body text-muted-foreground">
                  <span class="w-2.5 h-2.5 bg-accent mt-1 shrink-0"></span>
                  <span class="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div class="mt-12">
            <Button
              label="QUERO COMEÇAR"
              href={wppUrl}
              variant={plano.highlight ? 'accent' : 'primary'}
              trackingId={`btn-plan-${plano.id}`}
              section="planos"
              newTab={true}
              class="w-full py-4 text-h3 tracking-[0.1em]"
            />
          </div>
        </div>
      ))}
    </div>

    <!-- Notas -->
    <div class="mt-20 flex flex-col md:flex-row gap-10 border-t-2 border-white/10 pt-12 text-white/40 font-sans text-[0.7rem] uppercase tracking-[0.15em]">
      <div class="flex items-start gap-4">
        <span class="text-accent font-bold text-h3 leading-none mt-[-4px]">[!]</span>
        <p class="max-w-xs">Pagamento via PIX: 5% OFF no primeiro mês. Cartão disponível (com taxas).</p>
      </div>
      <div class="flex items-start gap-4">
        <span class="text-accent font-bold text-h3 leading-none mt-[-4px]">[#]</span>
        <p class="max-w-xs">Compromisso mínimo de 30 dias. Aviso de cancelamento com 30 dias de antecedência.</p>
      </div>
    </div>
  </div>
</section>
<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#planos .max-w-content > div', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#planos',
        start: 'top 95%',
      },
    });
  }
</script>
```

### `src\sections\ServicosSection.astro`

```text
---
// src/sections/ServicosSection.astro
import SectionHeader from '../components/SectionHeader.astro';
import Button from '../components/Button.astro';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const donosItems = [
  'Eu te ensino a usar marcadores e comandos que o seu cão realmente respeita.',
  'Vou te mostrar por que ele não responde e o que ajustar na sua conduta para mudar isso.',
  'Trabalhamos casos reais como reatividade ansiedade e falta de controle no dia a dia.',
  'O objetivo é te tornar independente. A mentoria é um caminho e não uma muleta.',
];

const adestradorItems = [
  'Vou te ensinar a estruturar treinos táticos com segurança e clareza técnica.',
  'Desenvolvemos sua capacidade de análise para qualquer perfil de cão.',
  'Segurança técnica para você atender casos complexos sem hesitar.',
  'Acesso direto à minha experiência prática. Tudo que eu sei eu te ensino.',
];
---

<section
  id="servico"
  class="bg-surface pt-32 xl:pt-40 pb-section px-5 xl:px-12 border-y-2 border-foreground relative z-10"
>
  <div class="max-w-content mx-auto">
    <div class="max-w-narrow mb-16">
      <SectionHeader
        label="O MÉTODO"
        title="CAPACITAÇÃO TÉCNICA PARA VOCÊ CONDUZIR O SEU CÃO COM SEGURANÇA."
        subtitle="O foco da mentoria é transformar a sua relação com o cão através de conhecimento aplicado. Analisamos cada detalhe da sua comunicação para que você tenha segurança e controle real na sua rotina."
      />
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-16 mt-12">
      <!-- Card 1 -->
      <div class="bg-background border-4 border-foreground p-8 xl:p-12 relative">
        <div class="absolute -top-6 -left-4 bg-accent text-white font-display text-h3 px-6 py-2 border-2 border-foreground -rotate-2">
          PARA DONOS
        </div>
        <ul class="flex flex-col gap-6 mt-8">
          {donosItems.map((item) => (
            <li class="flex gap-4 font-sans text-body-lg text-foreground font-bold">
              <span class="text-accent">>></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <!-- Card 2 -->
      <div class="bg-foreground border-4 border-foreground p-8 xl:p-12 relative">
        <div class="absolute -top-6 -left-4 bg-background text-foreground font-display text-h3 px-6 py-2 border-2 border-foreground rotate-2">
          PARA PROFISSIONAIS
        </div>
        <ul class="flex flex-col gap-6 mt-8">
          {adestradorItems.map((item) => (
            <li class="flex gap-4 font-sans text-body-lg text-white font-bold">
              <span class="text-accent">>></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div class="mt-20 flex justify-center">
      <Button
        label="QUERO ANALISAR O MEU CASO"
        href={wppUrl}
        variant="accent"
        trackingId="btn-cta-servico"
        section="servico"
        newTab={true}
        class="px-12 py-6 text-h3 tracking-widest"
      />
    </div>
  </div>
</section>
```

