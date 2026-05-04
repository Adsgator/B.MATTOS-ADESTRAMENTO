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
  - **Sobre o serviço:** Este site apresenta e comercializa o serviço de mentoria online de adestramento oferecido por Beatriz Mattos. O serviço é prestado via Google Meet, de forma individual e online.
  - **Condições gerais:** O serviço exige comprometimento mínimo de 30 dias. Cancelamentos após o período mínimo requerem aviso prévio de 30 dias. Valores e condições de pagamento estão descritos neste site.
  - **Limitação de responsabilidade:** Os resultados dependem do comprometimento e dedicação de cada cliente. Beatriz Mattos não garante resultados específicos em prazo determinado.
  - **Contato:** abeamattosk9@gmail.com
- SEO: `<meta name="robots" content="noindex, follow">`
- `data-tracking="click-privacy-contact"` no link de contato LGPD
- Export: `src/pages/politica-de-privacidade.astro`

---

## 11. CHECKLIST DE ENTREGA

### Antes de codificar
- [ ] Assets em `src/assets/images/` com nomes corretos: `hero-principal.webp`, `profissional-retrato.webp`, `og-image.webp`, `avatar-links.webp`
- [ ] Logo em `src/assets/logo.svg`
- [ ] Favicon em `public/favicon.svg`
- [ ] `.env` criado com base no `.env.example` — valores reais inseridos
- [ ] `GTM_ID=GTM-XXXXXXX` — aguardando gestor de tráfego
- [ ] `RESEND_API_KEY=` — configurado
- [ ] `WHATSAPP_NUMBER=5511918952921`
- [ ] Fontes instaladas: `npm install @fontsource/dm-serif-display @fontsource-variable/inter @fontsource/caveat`
- [ ] `tailwind.config.js` configurado com todos os tokens desta ficha
- [ ] Lenis instalado: `npm install @studio-freight/lenis`

### Durante a implementação
- [ ] `Layout.astro` criado com: GTM snippet (is:inline), Consent Mode v2, Lenis init, GSAP + ScrollTrigger, SEO tags, Schema.org JSON-LD, preconnect e preload críticos
- [ ] Todos os componentes globais criados antes das seções (Button, SectionHeader, FeatureCard, GTM, MobileMenu, ContactForm, CookieBanner)
- [ ] Nenhum HEX hardcoded — sempre via token Tailwind
- [ ] Todos os botões com `id` e `data-tracking` e `data-section`
- [ ] `prefers-reduced-motion` check em todas as animações GSAP
- [ ] Focus trap ativo no MobileMenu quando aberto
- [ ] Scroll do body bloqueado quando MobileMenu aberto
- [ ] `focus-visible` em todos os elementos interativos
- [ ] Todas as imagens com `width`, `height` e `alt` descritivo
- [ ] Links externos com `rel="noopener noreferrer"`
- [ ] Todos os telefones visíveis como `<a href="tel:+5511918952921">`
- [ ] Honeypot no formulário — validação silenciosa no endpoint
- [ ] ErrorBoundary no ContactForm com fallback WhatsApp
- [ ] Botão WhatsApp flutuante com IntersectionObserver correto
- [ ] `public/robots.txt` criado
- [ ] `public/manifest.json` criado
- [ ] `@astrojs/sitemap` configurado em `astro.config.mjs`

### Antes de entregar
- [ ] Build sem erros: `npm run build`
- [ ] Lighthouse Performance ≥ 90 mobile
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Todas as imagens com `width` e `height` definidos (zero layout shift)
- [ ] Link do WhatsApp testado: `https://wa.me/5511918952921?text=...` — mensagem aparece pré-preenchida no app
- [ ] Menu mobile testado em DevTools 375px — overlay, stagger, fechar com Escape
- [ ] Smooth scroll funcionando — Lenis + GSAP sync sem travamentos
- [ ] GTM snippet verificado no `<head>` e no `<body>`
- [ ] Formulário de contato testado — submit, honeypot, success state, fallback
- [ ] Conversões mapeadas no GTM: `contato_wpp`, `view_content`, `view_links`
- [ ] `/links` funcionando — tracking `view_links` ativo
- [ ] `/404` personalizada ativa — botões rastreados
- [ ] `/politica-de-privacidade` acessível via link no rodapé
- [ ] `og-image.webp` testada em `https://www.opengraph.xyz`
- [ ] Ano dinâmico no rodapé: `{new Date().getFullYear()}`
- [ ] Nenhum `console.log` em produção
- [ ] CookieBanner aparecendo e registrando consent no localStorage
- [ ] Schema.org JSON-LD válido: testar em `https://validator.schema.org`

---

## 12. LOCAIS QUE EXIGEM AÇÃO HUMANA

Estes são os únicos pontos que precisam de inserção manual antes da publicação. Nenhum outro campo está em aberto.

- [ ] **Substituir `hero-principal.webp`** pela foto real da Beatriz em ação com cão (800×1000px, formato webp)
- [ ] **Substituir `profissional-retrato.webp`** pela foto da Beatriz para a seção Diferenciais (600×750px, formato webp)
- [ ] **Substituir `avatar-links.webp`** pela foto circular da Beatriz para a página /links (192×192px, formato webp)
- [ ] **Criar e publicar `og-image.webp`** — composição 1200×630px com nome + tagline + foto da Beatriz
- [ ] **Inserir o GTM ID real** no arquivo `.env` — variável `GTM_ID=GTM-XXXXXXX`
- [ ] **Inserir a RESEND_API_KEY** no arquivo `.env` após criar conta em resend.com
- [ ] **Substituir o domínio** em todas as ocorrências de `[dominio-do-cliente].com.br` pelo domínio real
- [ ] **Confirmar link do WhatsApp** manualmente no dispositivo — abrir `https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!...` e confirmar que a mensagem aparece pré-preenchida corretamente
- [ ] **Configurar conversões no Google Ads** — vincular `contato_wpp`, `view_content` e `view_links` no painel do Google Ads com o gestor de tráfego
- [ ] **Testar formulário de contato** — enviar uma submissão de teste e confirmar recebimento no e-mail `abeamattosk9@gmail.com`
- [ ] **Validar Schema.org** após publicar — acessar `https://validator.schema.org` e inserir a URL do site
- [ ] **Aprovar copy com a Beatriz** — o texto foi gerado com base no briefing, mas a aprovação final da cliente é obrigatória antes do go-live

---

## SCHEMA.ORG — JSON-LD (inserir no `<head>` via Layout.astro)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Beatriz Mattos Adestradora",
  "description": "Seu cão não responde porque a base de comunicação está errada. Mentoria online individual com Beatriz Mattos. Entenda como funciona e fale agora.",
  "url": "https://[dominio-do-cliente].com.br",
  "telephone": "+5511918952921",
  "email": "abeamattosk9@gmail.com",
  "priceRange": "A partir de R$ 697/mês",
  "image": "https://[dominio-do-cliente].com.br/assets/images/og-image.webp",
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [
    "https://www.instagram.com/abeak9",
    "https://www.tiktok.com/@abeak9"
  ]
}
</script>
```

> `address` e `geo` omitidos — serviço 100% online, sem endereço presencial.
> `aggregateRating` omitido — sem avaliações Google confirmadas.

---

**Fim do Documento 3 — Ficha de Implementação**
