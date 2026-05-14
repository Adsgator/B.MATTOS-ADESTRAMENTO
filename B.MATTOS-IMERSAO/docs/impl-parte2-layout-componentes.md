# Documento de Implementação — Parte 2: Layout + Componentes Globais
## Training Camping · Adsgator · 2026

> Executar após `npm install` da Parte 1.
> Criar todos os arquivos nesta ordem: GTM → Layout → Header → Footer → Componentes → Islands.

---

## Arquivo: `src/components/global/GTM.astro`

```astro
---
interface Props {
  id: string;
}
const { id } = Astro.props;
---
<!-- GTM Head Snippet — is:inline obrigatório, nunca bundlar -->
<script is:inline define:vars={{ id }}>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', id);
</script>
```

---

## Arquivo: `src/components/global/Layout.astro`

```astro
---
import '@fontsource-variable/bricolage-grotesque/wght.css';
import '@fontsource-variable/inter/wght.css';
import GTM from './GTM.astro';
import Header from './Header.astro';
import Footer from './Footer.astro';
import WhatsAppFloat from './WhatsAppFloat.astro';
import CookieBanner from '../islands/CookieBanner';
import { Analytics } from '@vercel/analytics/astro';
import { SpeedInsights } from '@vercel/speed-insights/astro';

export interface Props {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  noindex?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

const {
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  canonical,
  noindex = false,
  showHeader = true,
  showFooter = true,
} = Astro.props;

const SITE = 'https://imersao.abeak9adestramento.com.br';
const canonicalURL = canonical ?? `${SITE}${Astro.url.pathname}`;
const gtmId = import.meta.env.PUBLIC_GTM_ID ?? 'GTM-XXXXXXX';

const schema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Training Camping',
  description:
    'Imersão presencial de treinamento comportamental para cães em São José dos Campos. Você treina junto com seu cão e sai com uma nova forma de se comunicar com ele.',
  url: SITE,
  telephone: '+5511918952921',
  image: `${SITE}/og-image.webp`,
  sameAs: ['https://www.instagram.com/abeak9'],
});
---

<!doctype html>
<html lang="pt-BR" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Consent Mode v2 — DEVE vir antes do GTM -->
    <script is:inline>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500,
      });
      gtag('js', new Date());
    </script>

    <!-- Google Tag Manager -->
    <GTM id={gtmId} />

    <!-- SEO principal -->
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    {noindex ? <meta name="robots" content="noindex, follow" /> : <meta name="robots" content="index, follow" />}
    <link rel="canonical" href={canonicalURL} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={ogTitle ?? title} />
    <meta property="og:description" content={ogDescription ?? description} />
    <meta property="og:image" content={`${SITE}/og-image.webp`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Training Camping" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={ogTitle ?? title} />
    <meta name="twitter:description" content={ogDescription ?? description} />
    <meta name="twitter:image" content={`${SITE}/og-image.webp`} />

    <!-- Favicon e Manifest -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#1a1d23" />

    <!-- Preconnect fontes variáveis -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- Preload hero — fetchpriority high para LCP -->
    <link
      rel="preload"
      as="image"
      href="/images/hero-principal.webp"
      fetchpriority="high"
    />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json" set:html={schema} />
  </head>

  <body class="bg-background text-text-main font-sans antialiased overflow-x-hidden">
    <!-- GTM noscript — imediatamente após <body> -->
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style="display:none;visibility:hidden"
        title="Google Tag Manager"
      ></iframe>
    </noscript>

    {showHeader && <Header />}

    <main id="main-content" tabindex="-1">
      <slot />
    </main>

    {showFooter && <Footer />}

    <WhatsAppFloat />

    <CookieBanner client:idle gtmId={gtmId} />

    <Analytics />
    <SpeedInsights />

    <!-- Lenis smooth scroll + GSAP ScrollTrigger — init global -->
    <script>
      import Lenis from '@studio-freight/lenis';
      import { gsap } from 'gsap';
      import { ScrollTrigger } from 'gsap/ScrollTrigger';

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      // Expor globalmente para outros scripts do projeto
      (window as any).__lenis = lenis;
    </script>
  </body>
</html>
```

---

## Arquivo: `src/components/global/Header.astro`

```astro
---
import Button from './Button.astro';
import MobileMenu from '../islands/MobileMenu';

const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';

const navLinks = [
  { label: 'A imersão', href: '#servico' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
];
---

<header
  id="site-header"
  class="fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-transparent"
  role="banner"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 md:h-20">

      <!-- Logo -->
      <a
        href="#top"
        class="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded"
        aria-label="Training Camping — voltar ao topo"
      >
        <span
          class="inline-block w-1.5 h-6 bg-secondary rounded-full group-hover:h-8 transition-all duration-200"
          aria-hidden="true"
        ></span>
        <span class="font-display font-semibold text-lg text-white tracking-tight">
          Training Camping
        </span>
      </a>

      <!-- Nav desktop -->
      <nav
        class="hidden md:flex items-center gap-8"
        aria-label="Navegação principal"
      >
        {
          navLinks.map((link) => (
            <a
              href={link.href}
              class="text-sm font-medium text-white/75 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
            >
              {link.label}
            </a>
          ))
        }
      </nav>

      <!-- CTA desktop -->
      <div class="hidden md:block">
        <Button
          label="Falar pelo WhatsApp"
          href={WA_LINK}
          variant="secondary"
          trackingId="btn-header-wpp"
          trackingAction="click-whatsapp-header"
          section="header"
          external
        />
      </div>

      <!-- Mobile menu island -->
      <MobileMenu
        client:visible
        links={navLinks}
        ctaLabel="Falar pelo WhatsApp"
        ctaHref={WA_LINK}
      />
    </div>
  </div>
</header>

<script>
  import { gsap } from 'gsap';

  const header = document.getElementById('site-header');
  if (!header) throw new Error('[Header] elemento #site-header não encontrado');

  let lastScroll = 0;
  let isHidden = false;
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  function updateHeader() {
    const currentScroll = window.scrollY;

    // Fundo após 80px de scroll
    if (currentScroll > 80) {
      header.classList.add('bg-primary', 'shadow-sm');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.add('bg-transparent');
      header.classList.remove('bg-primary', 'shadow-sm');
    }

    // Esconde ao rolar para baixo / reaparece ao rolar para cima
    if (!prefersReduced) {
      if (currentScroll > lastScroll && currentScroll > 250 && !isHidden) {
        gsap.to(header, { y: '-100%', duration: 0.3, ease: 'power2.inOut' });
        isHidden = true;
      } else if (currentScroll < lastScroll && isHidden) {
        gsap.to(header, { y: '0%', duration: 0.3, ease: 'power2.inOut' });
        isHidden = false;
      }
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
</script>
```

---

## Arquivo: `src/components/global/Footer.astro`

```astro
---
const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';
const currentYear = new Date().getFullYear();
---

<footer class="bg-primary text-white" role="contentinfo">
  <!-- Accent line topo -->
  <div class="h-1 bg-secondary" aria-hidden="true"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
    <div class="grid md:grid-cols-3 gap-12 md:gap-8">

      <!-- Coluna 1: Marca -->
      <div>
        <div class="flex items-center gap-2 mb-4">
          <span class="inline-block w-1.5 h-6 bg-secondary rounded-full" aria-hidden="true"></span>
          <span class="font-display font-semibold text-lg tracking-tight">Training Camping</span>
        </div>
        <p class="text-white/60 text-sm leading-relaxed">
          Imersão presencial de treinamento comportamental para cães. SJC e região.
        </p>
        <p class="text-white/40 text-2xs mt-4 font-mono">
          CNPJ: 49.081.534/0001-89
        </p>
      </div>

      <!-- Coluna 2: Links -->
      <div>
        <p class="text-2xs font-medium uppercase tracking-widest text-white/40 mb-5">
          Contato
        </p>
        <nav aria-label="Links do rodapé">
          <ul class="flex flex-col gap-3">
            <li>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-footer-wpp"
                data-tracking="click-whatsapp-footer"
                data-section="footer"
                class="text-sm text-white/75 hover:text-secondary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
              >
                WhatsApp: (11) 91895-2921
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/abeak9"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-footer-instagram"
                data-tracking="click-instagram-footer"
                data-section="footer"
                class="text-sm text-white/75 hover:text-secondary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
              >
                Instagram: @abeak9
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Coluna 3: Legal -->
      <div>
        <p class="text-2xs font-medium uppercase tracking-widest text-white/40 mb-5">
          Legal
        </p>
        <nav aria-label="Links legais">
          <ul class="flex flex-col gap-3">
            <li>
              <a
                href="/politica-de-privacidade"
                class="text-sm text-white/75 hover:text-secondary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
              >
                Política de privacidade
              </a>
            </li>
            <li>
              <a
                href="/termos-de-uso"
                class="text-sm text-white/75 hover:text-secondary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
              >
                Termos de uso
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
    >
      <p class="text-white/40 text-2xs">
        © {currentYear} Training Camping. Todos os direitos reservados.
      </p>
      <a
        href="https://adsgator.com.br"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white/30 hover:text-white/60 transition-colors duration-150 text-2xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
        aria-label="Site criado pela agência Adsgator"
      >
        Criado pela Adsgator
      </a>
    </div>
  </div>
</footer>
```

---

## Arquivo: `src/components/global/Button.astro`

```astro
---
export interface Props {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'white' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  trackingId?: string;
  trackingAction?: string;
  section?: string;
  external?: boolean;
  fullWidth?: boolean;
  class?: string;
}

const {
  label,
  href,
  variant = 'primary',
  size = 'md',
  trackingId,
  trackingAction,
  section,
  external = false,
  fullWidth = false,
  class: extraClass = '',
} = Astro.props;

const base =
  'inline-flex items-center justify-center font-sans font-medium rounded border transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary';

const variants: Record<string, string> = {
  primary:
    'bg-primary text-white border-primary hover:bg-primary/90',
  secondary:
    'bg-secondary text-white border-secondary hover:bg-secondary/90',
  ghost:
    'bg-transparent text-text-main border-border hover:border-text-support hover:bg-surface',
  white:
    'bg-white text-primary border-transparent hover:bg-white/90',
  'outline-white':
    'bg-transparent text-white border-white/60 hover:border-white hover:bg-white/10',
};

const sizes: Record<string, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2',
};

const classes = [base, variants[variant], sizes[size], fullWidth ? 'w-full' : '', extraClass]
  .filter(Boolean)
  .join(' ');
---

<a
  href={href}
  class={classes}
  id={trackingId}
  data-tracking={trackingAction}
  data-section={section}
  {...external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}}
>
  {label}
</a>
```

---

## Arquivo: `src/components/global/SectionHeader.astro`

```astro
---
export interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  class?: string;
}

const {
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
  class: extraClass = '',
} = Astro.props;

const wrapperAlign = align === 'center' ? 'text-center mx-auto items-center' : '';
const titleColor = light ? 'text-white' : 'text-text-main';
const subtitleColor = light ? 'text-white/65' : 'text-text-support';
---

<div class={`max-w-2xl flex flex-col ${wrapperAlign} ${extraClass}`}>
  {
    label && (
      <p class="text-2xs font-semibold uppercase tracking-widest text-secondary mb-3">
        {label}
      </p>
    )
  }
  <h2
    class={`font-display font-semibold text-3xl md:text-4xl leading-tight ${titleColor} mb-4`}
  >
    {title}
  </h2>
  {
    subtitle && (
      <p class={`text-lg leading-relaxed ${subtitleColor}`}>
        {subtitle}
      </p>
    )
  }
</div>
```

---

## Arquivo: `src/components/global/FeatureCard.astro`

```astro
---
export interface Props {
  icon: string; // SVG inline string
  title: string;
  description: string;
  class?: string;
}

const { icon, title, description, class: extraClass = '' } = Astro.props;
---

<article
  class={`js-card group bg-background border border-border rounded p-6 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.01] ${extraClass}`}
>
  <div
    class="w-10 h-10 flex items-center justify-center text-secondary mb-5"
    aria-hidden="true"
  >
    <Fragment set:html={icon} />
  </div>
  <h3 class="font-display font-semibold text-lg text-text-main mb-2 leading-snug">
    {title}
  </h3>
  <p class="text-text-support leading-relaxed text-sm">
    {description}
  </p>
</article>
```

---

## Arquivo: `src/components/global/WhatsAppFloat.astro`

```astro
---
const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';
---

<div
  id="whatsapp-float"
  class="fixed bottom-6 right-6 z-50 opacity-0 pointer-events-none transition-opacity duration-300"
  aria-hidden="true"
>
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar pelo WhatsApp"
    id="btn-whatsapp-float"
    data-tracking="click-whatsapp-flutuante"
    data-section="floating"
    class="flex items-center justify-center w-14 h-14 bg-whatsapp rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  >
    <!-- WhatsApp SVG nativo -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  </a>
</div>

<script>
  const floatWrapper = document.getElementById('whatsapp-float');
  const hero = document.getElementById('top');

  if (floatWrapper && hero) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          floatWrapper.classList.remove('opacity-0', 'pointer-events-none');
          floatWrapper.classList.add('opacity-100');
          floatWrapper.removeAttribute('aria-hidden');
        } else {
          floatWrapper.classList.add('opacity-0', 'pointer-events-none');
          floatWrapper.classList.remove('opacity-100');
          floatWrapper.setAttribute('aria-hidden', 'true');
        }
      },
      { threshold: 0 }
    );
    observer.observe(hero);
  }
</script>
```

---

## Arquivo: `src/components/islands/MobileMenu.tsx`

```tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

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
  const shouldReduce = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = () => setIsOpen(false);

  // Bloqueia scroll do body quando menu aberto
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap + Escape
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
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
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const linkVariants = (i: number) => ({
    hidden: shouldReduce ? {} : { opacity: 0, y: 24 },
    visible: shouldReduce
      ? {}
      : {
          opacity: 1,
          y: 0,
          transition: { delay: 0.1 + i * 0.06, duration: 0.35 },
        },
  });

  const barVariants = {
    top: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: 45, y: shouldReduce ? 0 : 7 },
    },
    mid: {
      closed: { opacity: 1 },
      open: { opacity: 0 },
    },
    bot: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: -45, y: shouldReduce ? 0 : -7 },
    },
  };

  return (
    <div className="md:hidden">
      {/* Botão hambúrguer */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-overlay"
        className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
      >
        <motion.span
          animate={isOpen ? 'open' : 'closed'}
          variants={barVariants.top}
          transition={{ duration: 0.2 }}
          className="block w-6 h-0.5 bg-white origin-center"
        />
        <motion.span
          animate={isOpen ? 'open' : 'closed'}
          variants={barVariants.mid}
          transition={{ duration: 0.1 }}
          className="block w-6 h-0.5 bg-white"
        />
        <motion.span
          animate={isOpen ? 'open' : 'closed'}
          variants={barVariants.bot}
          transition={{ duration: 0.2 }}
          className="block w-6 h-0.5 bg-white origin-center"
        />
      </button>

      {/* Overlay fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            variants={shouldReduce ? {} : overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-primary flex flex-col px-8 pt-8 pb-10"
          >
            {/* Botão fechar */}
            <div className="flex justify-between items-center mb-14">
              <span className="font-display font-semibold text-base text-white tracking-tight">
                Training Camping
              </span>
              <button
                ref={closeButtonRef}
                onClick={close}
                aria-label="Fechar menu"
                className="w-10 h-10 flex items-center justify-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links de navegação */}
            <nav aria-label="Menu mobile" className="flex-1">
              <ul className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      onClick={close}
                      initial="hidden"
                      animate="visible"
                      variants={linkVariants(i)}
                      className="block font-display font-semibold text-4xl text-white hover:text-secondary transition-colors duration-150 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA no fundo */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={linkVariants(links.length + 1)}
            >
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                id="btn-mobile-menu-wpp"
                data-tracking="click-whatsapp-mobile-menu"
                data-section="mobile-menu"
                className="w-full flex items-center justify-center gap-2 bg-secondary text-white font-medium py-4 px-6 rounded text-base hover:bg-secondary/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {ctaLabel}
              </a>
              <p className="text-white/40 text-xs text-center mt-4">
                (11) 91895-2921
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## Arquivo: `src/components/islands/CookieBanner.tsx`

```tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface Props {
  gtmId: string;
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function gtag(...args: any[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export default function CookieBanner({ gtmId }: Props) {
  const [visible, setVisible] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const consent = localStorage.getItem('adsgator_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(timer);
    }
    if (consent === 'granted') {
      updateConsentState('granted');
    }
  }, []);

  function updateConsentState(state: 'granted' | 'denied') {
    gtag('consent', 'update', {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    });
  }

  function handleAccept() {
    localStorage.setItem('adsgator_cookie_consent', 'granted');
    updateConsentState('granted');
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem('adsgator_cookie_consent', 'denied');
    updateConsentState('denied');
    setVisible(false);
  }

  const bannerVariants = {
    hidden: shouldReduce ? {} : { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: shouldReduce ? {} : { y: 20, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies e privacidade"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xs z-50 bg-primary text-white rounded p-5 border border-white/10"
        >
          <p className="text-sm leading-relaxed mb-4 text-white/80">
            Usamos cookies para análise de tráfego e otimização de anúncios.{' '}
            <a
              href="/politica-de-privacidade"
              className="text-secondary underline hover:text-secondary/80 transition-colors"
            >
              Política de privacidade
            </a>
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className="flex-1 bg-secondary text-white text-sm font-medium py-2.5 px-4 rounded hover:bg-secondary/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Aceitar
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-white/10 text-white/80 text-sm font-medium py-2.5 px-4 rounded hover:bg-white/15 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Recusar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

## Verificação ao final da Parte 2

```bash
# Verificar tipos TypeScript
npx tsc --noEmit

# O projeto ainda não tem páginas — isso é esperado
# Confirmar que não há erros de import ou de tipos

git add -A
git commit -m "feat: layout base e componentes globais"
```
