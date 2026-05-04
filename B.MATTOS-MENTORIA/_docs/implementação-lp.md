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

      {/* Fallback sempre visível */}
      
        Prefere ir direto?{' '}
        
          → Falar no WhatsApp
        
      

      {`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}
    
  );
}
```

---

### `src/components/CookieBanner.tsx`

```tsx
// src/components/CookieBanner.tsx
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  gtmId: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieBanner({ gtmId: _gtmId }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('adsgator-consent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage unavailable — não exibir o banner
    }
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
    
      {visible && (
        
          
            Usamos cookies para melhorar sua experiência e mensurar o desempenho do site.{' '}
            
              Política de Privacidade
            
          
          
            
              Recusar
            
            
              Aceitar
            
          
        
      )}
    
  );
}
```

---

## FASE 5 — LAYOUT

---

### `src/layouts/Layout.astro`

```astro
---
// src/layouts/Layout.astro
export const prerender = true;

import GTM from '../components/GTM.astro';
import Button from '../components/Button.astro';
import MobileMenu from '../components/MobileMenu';
import CookieBanner from '../components/CookieBanner';
import { Image } from 'astro:assets';
import logo from '../assets/logo.svg';

import '@fontsource/dm-serif-display';
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
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Perguntas frequentes', href: '#faq' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Beatriz Mattos Adestradora',
  description:
    'Seu cão não responde porque a base de comunicação está errada. Mentoria online individual com Beatriz Mattos. Entenda como funciona e fale agora.',
  url: 'https://[DOMINIO].com.br',
  telephone: '+5511918952921',
  email: 'abeamattosk9@gmail.com',
  priceRange: 'A partir de R$ 697/mês',
  image: 'https://[DOMINIO].com.br/assets/images/og-image.webp',
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
  class="bg-background text-foreground antialiased"
  style="-webkit-tap-highlight-color: transparent;"
>
  <!-- GTM noscript BODY — imediatamente após <body> -->
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
      height="0"
      width="0"
      style="display:none;visibility:hidden"
      title="Google Tag Manager"
    ></iframe>
  </noscript>

  <!-- ═══════════════════════════════════════════
       HEADER
  ════════════════════════════════════════════ -->
  <header
    id="main-header"
    class="sticky top-0 z-50 w-full bg-transparent transition-all duration-200"
  >
    <div class="max-w-content mx-auto flex items-center justify-between px-5 xl:px-12 h-14 xl:h-16">
      <!-- Logo -->
      <a
        href="#top"
        aria-label="Beatriz Mattos Adestradora — início da página"
        class="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Image
          src={logo}
          alt="Beatriz Mattos Adestradora"
          height={32}
          loading="eager"
          class="h-8 w-auto"
        />
      </a>

      <!-- Navegação desktop -->
      <nav class="hidden xl:flex items-center gap-8" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a
            href={link.href}
            class="font-sans text-body text-foreground hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <!-- CTA desktop -->
      <div class="hidden xl:flex">
        <Button
          label="Falar no WhatsApp"
          href={wppUrl}
          variant="accent"
          trackingId="btn-cta-header"
          section="header"
          newTab={true}
          class="px-5 py-2.5 text-small"
        />
      </div>

      <!-- Menu mobile -->
      <div class="xl:hidden">
        <MobileMenu
          client:load
          links={navLinks}
          ctaLabel="Falar no WhatsApp"
          ctaHref={wppUrl}
        />
      </div>
    </div>
  </header>

  <!-- ═══════════════════════════════════════════
       CONTEÚDO PRINCIPAL
  ════════════════════════════════════════════ -->
  <main id="top">
    <slot />
  </main>

  <!-- ═══════════════════════════════════════════
       RODAPÉ
  ════════════════════════════════════════════ -->
  <footer class="bg-foreground py-12 px-5 xl:px-12">
    <div class="max-w-content mx-auto">
      <div class="flex flex-col gap-8 xl:grid xl:grid-cols-3 xl:gap-12">
        <!-- Coluna 1: Marca -->
        <div>
          <a
            href="#top"
            aria-label="Beatriz Mattos Adestradora"
            class="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-block"
          >
            <Image
              src={logo}
              alt="Beatriz Mattos Adestradora"
              height={28}
              loading="lazy"
              class="h-7 w-auto brightness-0 invert"
            />
          </a>
          <p class="font-sans text-small text-primary-foreground opacity-60 mt-2">
            Mentoria online individual de adestramento.
          </p>
        </div>

        <!-- Coluna 2: Navegação -->
        <div>
          <p class="font-sans text-label uppercase tracking-widest text-muted-foreground mb-4">
            Navegação
          </p>
          <nav aria-label="Navegação do rodapé">
            {navLinks.map((link) => (
              <a
                href={link.href}
                class="font-sans text-small text-primary-foreground opacity-70 hover:opacity-100 block mb-2 transition-opacity focus-visible:outline-2 focus-visible:outline-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <!-- Coluna 3: Contato -->
        <div>
          <p class="font-sans text-label uppercase tracking-widest text-muted-foreground mb-4">
            Contato
          </p>
          <a
            id="link-tel-footer"
            href="tel:+5511918952921"
            data-tracking="click-tel"
            data-section="footer"
            class="font-sans text-small text-primary-foreground opacity-70 hover:opacity-100 block mb-2 transition-opacity focus-visible:outline-2 focus-visible:outline-primary"
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
            class="font-sans text-small text-primary-foreground opacity-70 hover:opacity-100 block mb-2 transition-opacity focus-visible:outline-2 focus-visible:outline-primary"
          >
            WhatsApp
          </a>
          <a
            href="mailto:abeamattosk9@gmail.com"
            class="font-sans text-small text-primary-foreground opacity-70 hover:opacity-100 block mb-4 transition-opacity focus-visible:outline-2 focus-visible:outline-primary"
          >
            abeamattosk9@gmail.com
          </a>
          <!-- Redes sociais -->
          <div class="flex gap-4">
            <a
              href="https://instagram.com/abeak9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Beatriz Mattos"
              class="text-primary-foreground opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@abeak9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok da Beatriz Mattos"
              class="text-primary-foreground opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.98a8.24 8.24 0 0 0 4.84 1.55V7.08a4.85 4.85 0 0 1-1.07-.39z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Barra inferior -->
      <div class="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-sans text-small text-primary-foreground opacity-40">
          © {new Date().getFullYear()} Beatriz Mattos. Todos os direitos reservados.
        </p>
        <a
          href="/politica-de-privacidade"
          class="font-sans text-small text-primary-foreground opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-primary"
        >
          Política de Privacidade
        </a>
      </div>
    </div>
  </footer>

  <!-- ═══════════════════════════════════════════
       BOTÃO WHATSAPP FLUTUANTE
  ════════════════════════════════════════════ -->
  <a
    id="btn-wpp-floating"
    href={wppUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar com Beatriz no WhatsApp"
    data-tracking="click-whatsapp"
    data-section="floating-button"
    class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-14 h-14 flex items-center justify-center rounded-full bg-whatsapp shadow-btn opacity-0 scale-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    style="transition: transform 0.3s ease-out, opacity 0.3s ease-out;"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>

  <!-- CookieBanner -->
  <CookieBanner client:idle gtmId={gtmId} />

  <!-- ═══════════════════════════════════════════
       SCRIPTS: Lenis + GSAP + Header + Floating Button
  ════════════════════════════════════════════ -->
  <script>
    import Lenis from '@studio-freight/lenis';
    import gsap from 'gsap';
    import ScrollTrigger from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    // ── Lenis smooth scroll ──────────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time: number) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // ── Header hide/show on scroll ───────────────────────────────────
    const header = document.getElementById('main-header');
    let lastScrollY = 0;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const currentY = self.scroll();
        const scrollingDown = currentY > lastScrollY;

        if (currentY > 80) {
          header?.classList.add('bg-background/95', 'backdrop-blur-sm', 'border-b', 'border-border');
          header?.classList.remove('bg-transparent');
        } else {
          header?.classList.remove('bg-background/95', 'backdrop-blur-sm', 'border-b', 'border-border');
          header?.classList.add('bg-transparent');
        }

        if (!prefersReduced && header) {
          if (scrollingDown && currentY > 100) {
            gsap.to(header, { y: '-100%', duration: 0.3, ease: 'power2.in', overwrite: true });
          } else {
            gsap.to(header, { y: 0, duration: 0.3, ease: 'power2.out', overwrite: true });
          }
        }

        lastScrollY = currentY;
      },
    });

    // ── Botão WhatsApp flutuante ─────────────────────────────────────
    const floatingBtn = document.getElementById('btn-wpp-floating') as HTMLElement | null;
    const heroSection = document.getElementById('hero');
    const footerEl = document.querySelector('footer') as HTMLElement | null;

    const showFloating = () => {
      if (!floatingBtn) return;
      if (!prefersReduced) {
        gsap.to(floatingBtn, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
      } else {
        floatingBtn.style.opacity = '1';
        floatingBtn.style.transform = 'scale(1)';
      }
    };

    const hideFloating = () => {
      if (!floatingBtn) return;
      if (!prefersReduced) {
        gsap.to(floatingBtn, { opacity: 0, scale: 0, duration: 0.3, ease: 'power2.in' });
      } else {
        floatingBtn.style.opacity = '0';
        floatingBtn.style.transform = 'scale(0)';
      }
    };

    if (heroSection) {
      const heroObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) hideFloating();
            else showFloating();
          });
        },
        { threshold: 0.1 }
      );
      heroObs.observe(heroSection);
    }

    if (footerEl) {
      const footerObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) hideFloating();
            else if (!heroSection?.getBoundingClientRect().bottom || (heroSection?.getBoundingClientRect().bottom ?? 0) < 0) {
              showFloating();
            }
          });
        },
        { threshold: 0.1 }
      );
      footerObs.observe(footerEl);
    }
  </script>
</body>
</html>
```

---

## FASE 6 — SEÇÕES

---

### `src/sections/HeroSection.astro`

```astro
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
  class="bg-background pt-24 pb-16 xl:pt-32 xl:pb-24 px-5 xl:px-12"
  aria-label="Hero — Impacto Inicial"
>
  <div class="max-w-content mx-auto flex flex-col xl:grid xl:grid-cols-[55fr_45fr] xl:items-center xl:gap-16">
    <!-- Coluna de texto -->
    <div class="flex flex-col gap-6 xl:gap-8 xl:max-w-[580px]">
      <h1 class="font-serif text-h1 text-foreground hero-h1">
        Seu cão não responde porque a comunicação entre vocês está cheia de ruído.
      </h1>

      <!-- Elemento Caveat: anotação manuscrita -->
      <span
        class="hero-hand-annotation font-hand text-hand-lg text-accent italic rotate-[-3deg] inline-block -mt-2 ml-1 select-none"
        aria-hidden="true"
      >
        é aqui que a gente começa ↓
      </span>

      <p class="font-sans text-body-lg text-muted-foreground hero-subtitle">
        Mentoria online individual com Beatriz Mattos — para donos que querem conduzir o próprio cão com clareza, e adestradores que querem atender com segurança técnica.
      </p>

      <p class="font-sans text-body text-muted-foreground hero-reforco">
        Encontros semanais pelo Google Meet. Análise dos seus treinos. Suporte direto via WhatsApp. Sem enrolação — direto no problema que está travando você.
      </p>

      <div>
        <Button
          label="Quero começar minha mentoria"
          href={wppUrl}
          variant="accent"
          trackingId="btn-cta-hero"
          section="hero"
          newTab={true}
          class="px-8 py-4 text-body font-semibold"
        />
      </div>
    </div>

    <!-- Coluna de imagem -->
    <div class="hero-image mt-10 xl:mt-0">
      <Image
        src={heroImage}
        alt="Beatriz Mattos em sessão de adestramento com cão, conduzindo o treino"
        width={800}
        height={1000}
        loading="eager"
        format="webp"
        class="w-full max-w-[480px] xl:max-w-full rounded-img object-cover mx-auto xl:mx-0"
      />
    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';

  document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.timeline()
      .from('.hero-h1',              { opacity: 0, y: 30,  duration: 1.0, ease: 'power2.out' })
      .from('.hero-subtitle',        { opacity: 0, y: 24,  duration: 0.8, ease: 'power2.out' }, '-=0.6')
      .from('.hero-reforco',         { opacity: 0, y: 20,  duration: 0.7, ease: 'power2.out' }, '-=0.5')
      .from('#btn-cta-hero',         { opacity: 0, y: 16,  duration: 0.7, ease: 'power2.out' }, '-=0.4')
      .from('.hero-image',           { opacity: 0, x: 30,  duration: 1.2, ease: 'power2.out' }, '-=0.8')
      .from('.hero-hand-annotation', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'elastic.out(1, 0.5)' }, '-=0.3');
  });
</script>
```

---

### `src/sections/ServicosSection.astro`

```astro
---
// src/sections/ServicosSection.astro
import SectionHeader from '../components/SectionHeader.astro';
import Button from '../components/Button.astro';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const donosItems = [
  'Você aprende a usar marcadores e comandos claros, sem ambiguidade.',
  'Entende por que o seu cão não responde — e o que mudar na sua conduta.',
  'Trabalha casos concretos: ansiedade por separação, reatividade, manejo no dia a dia.',
  'Se torna independente. Usa a mentoria para construir base, não como muleta permanente.',
];

const adestradorItems = [
  'Você aprende a estruturar treinos comportamentais de forma segura e efetiva.',
  'Desenvolve análise aplicada para cada perfil de cão e de cliente.',
  'Ganha segurança técnica para atender sem depender de outro profissional.',
  'Tem acesso direto à visão de quem já trabalhou com muitos perfis e não retém informação.',
];
---

<section
  id="servico"
  class="bg-surface py-section px-5 xl:px-12"
  aria-labelledby="servico-title"
>
  <div class="max-w-content mx-auto servico-wrapper">
    <SectionHeader
      label="A Mentoria"
      title="O principal professor do seu cão é você. A mentoria existe para te preparar para esse papel."
      subtitle="A mentoria online da Beatriz Mattos é individual, técnica e direta. Não é curso gravado. Não é consultoria genérica. É um acompanhamento semanal focado no seu caso específico — com análise do que você já faz, correção do que está gerando ruído e construção de uma base sólida de comunicação com o seu cão."
    />

    <!-- Cards -->
    <div class="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-6 servico-cards">
      <!-- Para donos de cães -->
      <div class="bg-background border border-border rounded-card p-8">
        <p class="font-sans text-label uppercase tracking-widest text-muted-foreground mb-3">
          Para donos de cães
        </p>
        <ul class="flex flex-col gap-3" role="list">
          {donosItems.map((item) => (
            <li class="flex gap-3 font-sans text-body text-foreground">
              <span class="text-accent font-semibold shrink-0" aria-hidden="true">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <!-- Para adestradores iniciantes -->
      <div class="bg-background border border-border rounded-card p-8">
        <p class="font-sans text-label uppercase tracking-widest text-muted-foreground mb-3">
          Para adestradores iniciantes
        </p>
        <ul class="flex flex-col gap-3" role="list">
          {adestradorItems.map((item) => (
            <li class="flex gap-3 font-sans text-body text-foreground">
              <span class="text-accent font-semibold shrink-0" aria-hidden="true">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-10 flex justify-center">
      <Button
        label="Quero entender como funciona para o meu caso"
        href={wppUrl}
        variant="primary"
        trackingId="btn-cta-servico"
        section="servico"
        newTab={true}
      />
    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.servico-wrapper > *:first-child', {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '.servico-wrapper', start: 'top 85%' },
    });

    gsap.from('.servico-cards > *', {
      opacity: 0, y: 30, duration: 0.7, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.servico-cards', start: 'top 80%' },
    });
  }
</script>
```

---

### `src/sections/ComoFuncionaSection.astro`

```astro
---
// src/sections/ComoFuncionaSection.astro
import SectionHeader from '../components/SectionHeader.astro';
import Button from '../components/Button.astro';
import Icon from '../components/Icon.astro';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const steps = [
  {
    icon: 'MessageCircle',
    title: 'Primeiro contato via WhatsApp',
    text: 'Você envia: raça, idade do cão, principal problema comportamental, histórico de adestramento e se está disposto a mudar a rotina. Esse filtro garante que a mentoria seja viável para o seu caso antes de você investir.',
  },
  {
    icon: 'Video',
    title: 'Encontros semanais pelo Google Meet',
    text: '1, 2 ou 3 encontros por semana, 100% individuais. Você fala com a Beatriz diretamente — sem turma, sem generalização.',
  },
  {
    icon: 'Play',
    title: 'Análise dos seus treinos',
    text: 'Você filma, manda via WhatsApp. A Beatriz analisa e te devolve o que está gerando ruído na comunicação com o seu cão.',
  },
  {
    icon: 'Headphones',
    title: 'Suporte entre encontros',
    text: 'Dúvida surgiu na prática? Acesso direto pelo WhatsApp entre sessões.',
  },
  {
    icon: 'Award',
    title: 'Você constrói autonomia',
    text: 'O objetivo da mentoria é que você não precise dela para sempre. A independência é o produto final.',
  },
];
---

<section
  id="como-funciona"
  class="bg-background py-section px-5 xl:px-12"
  aria-labelledby="como-funciona-title"
>
  <div class="max-w-content mx-auto">
    <div class="cf-header">
      <SectionHeader
        label="Como Funciona"
        title="Individual, semanal e focado no seu caso — do primeiro encontro até a sua autonomia."
        subtitle="A mentoria não começa pelo cão. Começa por você. Primeiro resolvemos o que está travando — depois desenvolvemos os objetivos."
      />
    </div>

    <!-- Steps -->
    <ol
      class="mt-12 flex flex-col gap-0 xl:grid xl:grid-cols-5 xl:gap-4 cf-steps"
      role="list"
      aria-label="Passo a passo da mentoria"
    >
      {steps.map((step, i) => (
        <li class="cf-step relative flex xl:flex-col gap-4 xl:gap-3 items-start xl:items-center pb-8 xl:pb-0">
          <!-- Linha conectora mobile -->
          {i < steps.length - 1 && (
            <div
              class="xl:hidden absolute left-5 top-10 bottom-0 w-px bg-border"
              aria-hidden="true"
            />
          )}

          <!-- Número + ícone -->
          <div class="shrink-0 flex flex-col items-center gap-2">
            <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border">
              <Icon name={step.icon} size={20} class="text-accent" />
            </div>
            <span
              class="font-serif text-display text-foreground opacity-[0.07] select-none leading-none absolute top-0 left-0 xl:static xl:text-[5rem]"
              aria-hidden="true"
            >
              {i + 1}
            </span>
          </div>

          <!-- Conteúdo -->
          <div class="flex-1 xl:text-center">
            <p class="font-sans text-body font-semibold text-foreground">{step.title}</p>
            <p class="font-sans text-body text-muted-foreground mt-1">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>

    <!-- CTA -->
    <div class="mt-12 flex justify-center">
      <Button
        label="Quero começar — falar com a Beatriz"
        href={wppUrl}
        variant="accent"
        trackingId="btn-cta-como-funciona"
        section="como-funciona"
        newTab={true}
      />
    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 1280;

    gsap.from('.cf-header', {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '.cf-header', start: 'top 85%' },
    });

    gsap.from('.cf-step', {
      opacity: 0,
      x: isMobile ? 0 : -20,
      y: isMobile ? 20 : 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: { trigger: '.cf-steps', start: 'top 80%' },
    });
  }
</script>
```

---

### `src/sections/DiferenciaisSection.astro`

```astro
---
// src/sections/DiferenciaisSection.astro
import { Image } from 'astro:assets';
import SectionHeader from '../components/SectionHeader.astro';
import FeatureCard from '../components/FeatureCard.astro';
import Button from '../components/Button.astro';
import retrato from '../assets/images/profissional-retrato.webp';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const cards = [
  {
    icon: 'Layers',
    title: 'Visão completa do comportamento animal',
    description:
      'Trabalhou com perfis variados, condições reais, sem roteiro de livro. O que funciona na prática é o que entra na mentoria.',
  },
  {
    icon: 'Unlock',
    title: 'Nenhuma informação retida',
    description:
      'Sem ego de quem quer parecer indispensável. A Beatriz entrega a técnica completa — porque o objetivo é que você não precise dela mais do que o necessário.',
  },
  {
    icon: 'Target',
    title: 'Complexidade traduzida em prática',
    description:
      'Análise do comportamento aplicada de forma clara. Sem misticismo, sem achismo. O que está errado tem nome e tem correção.',
  },
  {
    icon: 'User',
    title: 'Encontros 100% individuais',
    description: 'Seu cão, seu caso, sua rotina. Sem generalização de grupo.',
  },
  {
    icon: 'Compass',
    title: 'Liderança com estabilidade',
    description:
      'O foco não é fazer o cão obedecer por pressão. É construir uma relação de comunicação clara — em que o cão entende o que se espera dele e o dono sabe como exigir.',
  },
];
---

<section
  id="diferenciais"
  class="bg-surface py-section px-5 xl:px-12"
  aria-labelledby="diferenciais-title"
>
  <div class="max-w-content mx-auto">
    <div class="xl:grid xl:grid-cols-[1fr_1fr] xl:gap-16 xl:items-start">
      <!-- Coluna esquerda -->
      <div class="dif-col-left">
        <SectionHeader
          label="Por que a Beatriz Mattos"
          title="Técnica sem ego. Didática sem filtro. Resultado sem atalho."
          subtitle="Beatriz Mattos treina pessoas antes de treinar cães. Essa é a diferença entre uma mentoria que gera dependência e uma que constrói autonomia de verdade."
        />

        <div class="mt-8 relative inline-block">
          <Image
            src={retrato}
            alt="Beatriz Mattos em contexto de trabalho real com cão"
            width={600}
            height={750}
            loading="lazy"
            format="webp"
            class="w-full max-w-[360px] rounded-img object-cover shadow-card"
          />
          <!-- Elemento Caveat -->
          <span
            class="absolute -bottom-4 -right-4 font-hand text-hand-lg text-accent rotate-[-2deg] select-none"
            aria-hidden="true"
          >
            treina pessoas antes de cães →
          </span>
        </div>

        <div class="mt-12">
          <Button
            label="Quero me tornar independente no manejo do meu cão"
            href={wppUrl}
            variant="primary"
            trackingId="btn-cta-diferenciais"
            section="diferenciais"
            newTab={true}
          />
        </div>
      </div>

      <!-- Coluna direita: cards -->
      <div class="mt-12 xl:mt-0 grid grid-cols-1 gap-4 dif-cards">
        {cards.map((card) => (
          <FeatureCard
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.dif-col-left', {
      opacity: 0, y: 30, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '.dif-col-left', start: 'top 80%' },
    });

    gsap.from('.dif-cards > *', {
      opacity: 0, y: 30, duration: 0.7, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.dif-cards', start: 'top 80%' },
    });
  }
</script>
```

---

### `src/sections/PlanosSection.astro`

```astro
---
// src/sections/PlanosSection.astro
import SectionHeader from '../components/SectionHeader.astro';
import Button from '../components/Button.astro';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const planos = [
  {
    nome: '1 encontro por semana',
    preco: 'R$ 697',
    ideal: 'Quem tem rotina mais fechada e quer evolução constante, sem sobrecarga.',
  },
  {
    nome: '2 encontros por semana',
    preco: 'R$ 747',
    ideal: 'Quem quer avançar mais rápido e tem disponibilidade para trabalhar a prática com mais frequência.',
  },
  {
    nome: '3 encontros por semana',
    preco: 'R$ 897',
    ideal: 'Quem está com um caso mais urgente ou quer imersão técnica intensiva.',
  },
];
---

<section
  id="planos"
  class="bg-background py-section px-5 xl:px-12"
  aria-labelledby="planos-title"
>
  <div class="max-w-content mx-auto">
    <div class="max-w-tight mx-auto planos-header">
      <SectionHeader
        label="Planos"
        title="Escolha o ritmo que se encaixa na sua rotina."
        subtitle="Todos os planos incluem encontros individuais pelo Google Meet, análise de vídeos dos seus treinos e suporte via WhatsApp entre sessões. Mínimo de 30 dias. Cancelamento com aviso prévio de 30 dias."
        align="center"
      />
    </div>

    <!-- Cards de planos -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 planos-cards">
      {planos.map((plano) => (
        <div class="bg-background border border-border rounded-card p-8 shadow-card flex flex-col gap-4">
          <p class="font-sans text-label uppercase tracking-widest text-muted-foreground">
            {plano.nome}
          </p>
          <div class="flex items-baseline gap-1">
            <span class="font-serif text-h2 text-foreground">{plano.preco}</span>
            <span class="font-sans text-body text-muted-foreground">/mês</span>
          </div>
          <hr class="border-t border-border my-0" />
          <p class="font-sans text-label uppercase tracking-widest text-muted-foreground">
            Ideal para
          </p>
          <p class="font-sans text-body text-foreground">{plano.ideal}</p>
        </div>
      ))}
    </div>

    <!-- Aviso de desconto -->
    <div class="mt-8 bg-muted rounded-card p-4 text-center">
      <p class="font-sans text-small text-muted-foreground">
        Pagamento via PIX tem 5% de desconto no primeiro mês. Cartão de crédito disponível — taxa por conta do cliente.
      </p>
    </div>

    <!-- CTA -->
    <div class="mt-8 flex justify-center">
      <Button
        label="Falar com a Beatriz e escolher meu plano"
        href={wppUrl}
        variant="accent"
        trackingId="btn-cta-planos"
        section="planos"
        newTab={true}
      />
    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.planos-header', {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '.planos-header', start: 'top 85%' },
    });

    gsap.from('.planos-cards > *', {
      opacity: 0, y: 40, duration: 0.7, ease: 'power2.out', stagger: 0.12,
      scrollTrigger: { trigger: '.planos-cards', start: 'top 80%' },
    });
  }
</script>
```

---

### `src/sections/FAQSection.astro`

```astro
---
// src/sections/FAQSection.astro
// Accordion implementado em Astro puro com <script> inline — sem React.
import SectionHeader from '../components/SectionHeader.astro';
import Button from '../components/Button.astro';

const wppUrl =
  'https://wa.me/5511918952921?text=Ol%C3%A1%2C%20Beatriz!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.%20Seguem%20minhas%20informa%C3%A7%C3%B5es%3A%20Ra%C3%A7a%3A%20%7C%20Idade%20do%20c%C3%A3o%3A%20%7C%20Principal%20problema%20comportamental%3A%20%7C%20Hist%C3%B3rico%20de%20adestramento%3A%20%7C%20Estou%20disposto%20a%20mudar%20a%20rotina%3A';

const faqs = [
  {
    pergunta: 'Mentoria online realmente funciona para problemas comportamentais?',
    resposta:
      'Funciona — porque o principal professor do seu cão é você, não o adestrador. O que a mentoria faz é te ensinar a conduzir, corrigir e comunicar de forma clara. Isso acontece no dia a dia, na sua casa, com o seu cão. O Google Meet é o meio, não a limitação.',
  },
  {
    pergunta: 'As aulas ficam gravadas?',
    resposta:
      'Não. Os encontros são ao vivo e individuais — o que garante foco total no seu caso. O que fica com você é o que você aprende e aplica.',
  },
  {
    pergunta: 'Como funciona o suporte entre os encontros?',
    resposta:
      'Via WhatsApp direto com a Beatriz. Você pode mandar vídeos dos treinos para análise e tirar dúvidas que surgem na prática.',
  },
  {
    pergunta: 'Posso cancelar quando quiser?',
    resposta:
      'O compromisso mínimo é de 30 dias. Depois disso, o cancelamento é feito com aviso prévio de 30 dias — o que garante que você não abandone o processo no meio de uma evolução.',
  },
  {
    pergunta: 'É para mim se eu sou adestrador, não dono de cão?',
    resposta:
      'Sim. A mentoria atende adestradores iniciantes que querem desenvolver segurança técnica para estruturar treinos e atender clientes com mais efetividade. O foco é técnico e prático — não teórico.',
  },
  {
    pergunta: 'O que eu preciso enviar antes de começar?',
    resposta:
      'No primeiro contato pelo WhatsApp: raça e idade do cão, principal problema comportamental, histórico de adestramento (se tiver) e se você está disposto a adaptar a rotina. Esse filtro existe para garantir que a mentoria vai funcionar para você.',
  },
];
---

<section
  id="faq"
  class="bg-surface py-section px-5 xl:px-12"
  aria-labelledby="faq-title"
>
  <div class="max-w-narrow mx-auto">
    <div class="faq-header">
      <SectionHeader
        label="Perguntas Frequentes"
        title="Antes de falar com a Beatriz, leia isso."
        align="left"
      />
    </div>

    <!-- Accordion -->
    <div class="mt-10 flex flex-col divide-y divide-border faq-list" role="list">
      {faqs.map((faq, i) => (
        <div
          class="faq-item"
          data-open="false"
          role="listitem"
        >
          <button
            class="flex justify-between items-center w-full py-5 text-left gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded="false"
            aria-controls={`faq-answer-${i}`}
            id={`faq-btn-${i}`}
          >
            <span class="font-sans text-body font-semibold text-foreground">{faq.pergunta}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="faq-chevron shrink-0 text-muted-foreground transition-transform duration-300"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            class="faq-panel overflow-hidden"
            style="height: 0;"
          >
            <p class="font-sans text-body text-muted-foreground pb-5 pr-8">
              {faq.resposta}
            </p>
          </div>
        </div>
      ))}
    </div>

    <!-- CTA -->
    <div class="mt-10">
      <Button
        label="Ainda tem dúvida? Fala direto com a Beatriz"
        href={wppUrl}
        variant="secondary"
        trackingId="btn-cta-faq"
        section="faq"
        newTab={true}
        class="w-full xl:w-auto"
      />
    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  // ── Accordion ───────────────────────────────────────────────────────
  const items = document.querySelectorAll<HTMLElement>('.faq-item');

  items.forEach((item) => {
    const btn = item.querySelector<HTMLButtonElement>('button');
    const panel = item.querySelector<HTMLElement>('.faq-panel');
    const chevron = item.querySelector<SVGElement>('.faq-chevron');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isOpen = item.dataset.open === 'true';

      // Fechar todos