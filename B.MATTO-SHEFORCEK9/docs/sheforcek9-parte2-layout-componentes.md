# SheForceK9 — Documento de Implementação
## PARTE 2 — Layout + Componentes Globais
### `Layout.astro`, `Header.astro`, `Footer.astro`, `Button.astro`, `SectionHeader.astro`, `FeatureCard.astro`, `GTM.astro`, `MobileMenu.tsx`, `CookieBanner.tsx`

---

## ARQUIVO: `src/components/global/GTM.astro`

```astro
---
interface Props {
  id: string;
}
const { id } = Astro.props;
---

<!-- GTM Head Snippet — is:inline obrigatório, nunca bundlar -->
<script is:inline define:vars={{ id }}>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer', id);
</script>

<!-- GTM Body Snippet — inserido pelo Layout.astro imediatamente após <body> via slot -->
<noscript>
  <iframe
    src={`https://www.googletagmanager.com/ns.html?id=${id}`}
    height="0"
    width="0"
    style="display:none;visibility:hidden"
    title="Google Tag Manager"
  ></iframe>
</noscript>
```

---

## ARQUIVO: `src/components/global/Layout.astro`

```astro
---
import { Analytics } from '@vercel/analytics/astro';
import { SpeedInsights } from '@vercel/speed-insights/astro';
import GTM from './GTM.astro';
import Header from './Header.astro';
import Footer from './Footer.astro';
import CookieBanner from '../islands/CookieBanner';
import '../../../src/styles/global.css';

interface Props {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  noindex?: boolean;
}

const {
  title       = 'Curso de Cão de Proteção para Mulheres | SheForceK9',
  description = 'Aprenda a ter e conduzir um cão de proteção com segurança e dentro da lei. Curso presencial em São José dos Campos — sem experiência prévia. Qualquer cão participa.',
  ogTitle     = 'SheForceK9 — Curso de Cão de Proteção para Mulheres',
  ogDescription = 'Segurança real nas ruas com um cão ao seu lado. Aprenda a conduzir, selecionar e viver com um cão de proteção — presencial em São José dos Campos, julho/2026.',
  canonical   = 'https://sheforcek9.abeak9adestramento.com.br',
  noindex     = false,
} = Astro.props;

const gtmId = import.meta.env.GTM_ID ?? 'GTM-XXXXXXX';
const siteUrl = 'https://sheforcek9.abeak9adestramento.com.br';
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  
  <!-- GTM Head — imediatamente após charset, conforme padrão Adsgator -->
  <GTM id={gtmId} />

  <!-- Google Consent Mode v2 — antes de qualquer tag de analytics -->
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'ad_storage':            'denied',
      'ad_user_data':          'denied',
      'ad_personalization':    'denied',
      'analytics_storage':     'denied',
      'wait_for_update':       500,
    });
  </script>

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <!-- SEO Primário -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content="curso cão de proteção para mulheres, cão de guarda feminino, treinamento proteção pessoal São José dos Campos, she force k9, curso proteção mulher SP, cão de proteção iniciante, empoderamento feminino cão" />
  {noindex && <meta name="robots" content="noindex, follow" />}
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content={canonical} />
  <meta property="og:title"       content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:image"       content={`${siteUrl}/og-image.webp`} />
  <meta property="og:locale"      content="pt_BR" />
  <meta property="og:site_name"   content="SheForceK9" />

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content={ogTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <meta name="twitter:image"       content={`${siteUrl}/og-image.webp`} />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#1a1d23" />

  <!-- Preconnect Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Bebas Neue — preload do woff2 crítico -->
  <link
    rel="preload"
    href="https://fonts.gstatic.com/s/bebasneuepro/v3/Block-fonts/BebasNeuePro-Regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  
  <!-- Google Fonts: Bebas Neue -->
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
    rel="stylesheet"
  />

  <!-- Preload da hero image crítica -->
  <link
    rel="preload"
    as="image"
    href="/src/assets/images/hero-principal.webp"
    fetchpriority="high"
  />

  <!-- Schema.org JSON-LD — LocalBusiness -->
  <script type="application/ld+json" is:inline>
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "She ForceK9",
    "description": "Curso presencial intensivo de guarda e proteção com cães voltado exclusivamente para mulheres. Aprenda a entender, conduzir e conviver com cães de proteção pessoal em ambiente urbano — sem experiência prévia.",
    "url": "https://sheforcek9.abeak9adestramento.com.br",
    "telephone": "+5511918952921",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São José dos Campos",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.instagram.com/abeak9",
      "https://www.tiktok.com/@abeak9"
    ]
  }
  </script>
</head>

<body class="bg-bg text-text font-sans antialiased overflow-x-hidden">

  <!-- GTM Body Noscript — imediatamente após <body> -->
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
      height="0"
      width="0"
      style="display:none;visibility:hidden"
      title="Google Tag Manager"
    ></iframe>
  </noscript>

  <Header />

  <main id="main-content">
    <slot />
  </main>

  <Footer />

  <!-- Botão WhatsApp Flutuante -->
  <a
    id="btn-whatsapp-flutuante"
    href="https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar pelo WhatsApp"
    data-tracking="click-whatsapp-flutuante"
    data-section="floating"
    class="
      fixed bottom-6 right-6 z-50
      flex items-center justify-center
      w-14 h-14 rounded-full
      bg-[#25D366] text-white
      shadow-lg
      transition-all duration-200
      hover:scale-110 hover:shadow-xl
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]
      opacity-0 pointer-events-none
    "
    id="whatsapp-fab"
  >
    <!-- WhatsApp SVG nativo -->
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>

  <!-- Cookie Banner LGPD -->
  <CookieBanner client:idle gtmId={gtmId} />

  <!-- GSAP + ScrollTrigger + Lenis — inicialização global -->
  <script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

  <script is:inline>
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Inicializar Lenis e integrar ao GSAP
    (function initLenis() {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
      window.__lenis = lenis;
    })();

    // WhatsApp FAB — IntersectionObserver no hero
    (function initWhatsappFAB() {
      const fab   = document.getElementById('whatsapp-fab');
      const hero  = document.getElementById('hero-section');
      if (!fab || !hero) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            fab.classList.add('opacity-0', 'pointer-events-none');
            fab.classList.remove('opacity-100');
          } else {
            fab.classList.remove('opacity-0', 'pointer-events-none');
            fab.classList.add('opacity-100');
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(hero);
    })();

    // Header inteligente — esconde ao scrollar pra baixo, reaparece ao subir
    (function initSmartHeader() {
      const header    = document.getElementById('site-header');
      if (!header) return;

      let lastY = 0;
      let ticking = false;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.addEventListener('scroll', () => {
        if (ticking) return;
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          // Backdrop blur após 80px
          if (currentY > 80) {
            header.classList.add('header-scrolled');
          } else {
            header.classList.remove('header-scrolled');
          }

          // Esconde/mostra com GSAP
          if (!prefersReduced) {
            if (currentY > lastY && currentY > 100) {
              gsap.to(header, { y: '-100%', duration: 0.3, ease: 'power2.inOut' });
            } else {
              gsap.to(header, { y: '0%', duration: 0.3, ease: 'power2.inOut' });
            }
          }

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }, { passive: true });
    })();

    // Rastrear view_content
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'view_content' });
  </script>

  <!-- Lenis via CDN (fallback se npm não for usado) -->
  <script is:inline src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.45/dist/lenis.min.js"></script>

  <Analytics />
  <SpeedInsights />
</body>
</html>
```

---

## ARQUIVO: `src/components/global/Header.astro`

```astro
---
const navLinks = [
  { label: 'O Curso',       href: '#servico' },
  { label: 'Diferenciais',  href: '#diferenciais' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Investimento',  href: '#precos' },
  { label: 'FAQ',           href: '#faq' },
];

const whatsappHref = 'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.';
---

<header
  id="site-header"
  class="
    fixed top-0 left-0 right-0 z-50
    transition-colors duration-200
    bg-dark
    [&.header-scrolled]:backdrop-blur-md [&.header-scrolled]:bg-dark/95
  "
>
  <div class="container-content flex items-center justify-between h-16 lg:h-20">

    <!-- Logo -->
    <a
      href="#top"
      aria-label="She ForceK9 — ir para o topo"
      class="flex flex-col leading-none group"
    >
      <span class="font-display text-2xl text-white tracking-wide group-hover:text-primary transition-colors duration-150">
        She ForceK9
      </span>
      <span class="font-sans text-[10px] text-white/50 uppercase tracking-[0.2em]">
        Curso de Guarda e Proteção para Mulheres
      </span>
    </a>

    <!-- Nav Desktop -->
    <nav aria-label="Navegação principal" class="hidden lg:flex items-center gap-8">
      {navLinks.map(({ label, href }) => (
        <a
          href={href}
          class="
            font-sans text-body-sm font-medium text-white/70
            hover:text-white transition-colors duration-150
            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary
          "
        >
          {label}
        </a>
      ))}
    </nav>

    <!-- CTA Desktop -->
    <div class="hidden lg:flex items-center gap-4">
      <a
        id="btn-header-cta"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-tracking="click-whatsapp-header"
        data-section="header"
        class="
          inline-flex items-center gap-2
          bg-primary text-white
          font-sans font-semibold text-body-sm
          px-5 py-2.5 rounded
          hover:bg-primary-hover
          transition-all duration-150 hover:scale-[1.03]
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
          shadow-button
        "
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Falar no WhatsApp
      </a>
    </div>

    <!-- Hambúrguer Mobile — island React com Framer Motion -->
    <div class="lg:hidden" id="mobile-menu-trigger">
      <!-- MobileMenu.tsx montado via island client:load -->
    </div>

  </div>
</header>

<!-- Island MobileMenu React -->
<script>
  import MobileMenu from '../islands/MobileMenu';
  import { createElement } from 'react';
  import { createRoot } from 'react-dom/client';

  const trigger = document.getElementById('mobile-menu-trigger');
  if (trigger) {
    const root = createRoot(trigger);
    root.render(
      createElement(MobileMenu, {
        links: [
          { label: 'O Curso',       href: '#servico' },
          { label: 'Diferenciais',  href: '#diferenciais' },
          { label: 'Como Funciona', href: '#como-funciona' },
          { label: 'Investimento',  href: '#precos' },
          { label: 'FAQ',           href: '#faq' },
        ],
        ctaLabel: 'Falar no WhatsApp',
        ctaHref:  'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.',
      })
    );
  }
</script>
```

---

## ARQUIVO: `src/components/islands/MobileMenu.tsx`

```tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface NavLink {
  label: string;
  href:  string;
}

interface Props {
  links:    NavLink[];
  ctaLabel: string;
  ctaHref:  string;
}

export default function MobileMenu({ links, ctaLabel, ctaHref }: Props) {
  const [isOpen, setIsOpen]   = useState(false);
  const prefersReduced        = useReducedMotion();
  const closeRef              = useRef<HTMLButtonElement>(null);
  const menuRef               = useRef<HTMLDivElement>(null);

  // Bloquear scroll do body quando aberto
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      closeRef.current?.focus();
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => { document.documentElement.style.overflow = ''; };
  }, [isOpen]);

  // Fechar com Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', trap);
    return () => window.removeEventListener('keydown', trap);
  }, [isOpen]);

  const overlayVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: prefersReduced ? 0.01 : 0.3 } },
    exit:    { opacity: 0, transition: { duration: prefersReduced ? 0.01 : 0.25 } },
  };

  const linkVariants = {
    hidden:  { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0.01 : 0.4,
        delay:    prefersReduced ? 0    : i * 0.05,
        ease:     [0.22, 1, 0.36, 1],
      },
    }),
    exit:    { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Botão hambúrguer com morphing */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        className="relative w-10 h-10 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <motion.span
          className="absolute block w-6 h-0.5 bg-white rounded-full"
          animate={isOpen
            ? { rotate: 45, y: 0, width: '24px' }
            : { rotate: 0,  y: -6, width: '24px' }
          }
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute block w-6 h-0.5 bg-white rounded-full"
          animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute block w-6 h-0.5 bg-white rounded-full"
          animate={isOpen
            ? { rotate: -45, y: 0, width: '24px' }
            : { rotate: 0,   y: 6, width: '24px' }
          }
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Overlay fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed inset-0 z-[100]
              bg-dark/97 backdrop-blur-sm
              flex flex-col justify-between
              px-8 py-24
            "
            onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
          >
            {/* Botão fechar */}
            <button
              ref={closeRef}
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
              className="
                absolute top-5 right-6
                w-10 h-10 flex items-center justify-center
                text-white/60 hover:text-white
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
              "
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Links de navegação */}
            <nav className="flex flex-col gap-2">
              {links.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setIsOpen(false)}
                  className="
                    font-display text-display-lg text-white leading-none
                    hover:text-primary transition-colors duration-150
                    focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary
                    py-2
                  "
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            {/* CTA no fundo do overlay */}
            <motion.div
              variants={linkVariants}
              custom={links.length + 1}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                data-tracking="click-whatsapp-mobile-menu"
                data-section="mobile-menu"
                className="
                  inline-flex items-center gap-3 w-full justify-center
                  bg-primary text-white
                  font-sans font-semibold text-body-lg
                  px-8 py-4 rounded
                  hover:bg-primary-hover
                  transition-all duration-150
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                "
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {ctaLabel}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## ARQUIVO: `src/components/islands/CookieBanner.tsx`

```tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface Props {
  gtmId: string;
}

export default function CookieBanner({ gtmId }: Props) {
  const [visible, setVisible] = useState(false);
  const prefersReduced        = useReducedMotion();

  useEffect(() => {
    try {
      const consent = localStorage.getItem('sheforcek9_consent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage indisponível — mostrar banner por segurança
      setVisible(true);
    }
  }, []);

  const grantConsent = () => {
    try { localStorage.setItem('sheforcek9_consent', 'granted'); } catch {}
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_update',
      ad_storage:          'granted',
      ad_user_data:        'granted',
      ad_personalization:  'granted',
      analytics_storage:   'granted',
    });
    setVisible(false);
  };

  const denyConsent = () => {
    try { localStorage.setItem('sheforcek9_consent', 'denied'); } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-label="Aviso de cookies"
          initial={{ y: prefersReduced ? 0 : 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22,1,0.36,1] } }}
          exit={{ y: prefersReduced ? 0 : 80, opacity: 0, transition: { duration: 0.25 } }}
          className="
            fixed bottom-0 left-0 right-0 z-[200]
            bg-dark border-t border-white/10
            px-6 py-5
            md:bottom-6 md:left-6 md:right-auto md:max-w-md md:rounded md:border
          "
        >
          <p className="font-sans text-body-sm text-white/80 mb-4 leading-relaxed">
            Usamos cookies para melhorar sua experiência e analisar o tráfego do site, conforme nossa{' '}
            <a
              href="/politica-de-privacidade"
              className="text-primary underline underline-offset-2 hover:text-primary-hover focus-visible:outline-primary"
            >
              Política de Privacidade
            </a>.
          </p>
          <div className="flex gap-3">
            <button
              onClick={grantConsent}
              className="
                flex-1 bg-primary text-white font-sans font-semibold text-body-sm
                px-4 py-2.5 rounded
                hover:bg-primary-hover transition-colors duration-150
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
              "
            >
              Aceitar
            </button>
            <button
              onClick={denyConsent}
              className="
                flex-1 border border-white/20 text-white/60 font-sans text-body-sm
                px-4 py-2.5 rounded
                hover:border-white/40 hover:text-white/80 transition-colors duration-150
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
              "
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

## ARQUIVO: `src/components/global/Button.astro`

```astro
---
interface Props {
  label:      string;
  href:       string;
  variant?:   'primary' | 'secondary' | 'ghost';
  trackingId: string;
  section:    string;
  external?:  boolean;
  fullWidth?: boolean;
  size?:      'sm' | 'md' | 'lg';
}

const {
  label,
  href,
  variant    = 'primary',
  trackingId,
  section,
  external   = href.startsWith('http'),
  fullWidth  = false,
  size       = 'md',
} = Astro.props;

const sizeClasses = {
  sm: 'px-4 py-2.5 text-body-sm',
  md: 'px-6 py-3.5 text-body-md',
  lg: 'px-8 py-4 text-body-lg',
};

const variantClasses = {
  primary:   'bg-primary text-white hover:bg-primary-hover shadow-button',
  secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost:     'border border-white/30 text-white hover:border-white hover:bg-white/10',
};
---

<a
  id={`btn-${trackingId}`}
  href={href}
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
  data-tracking={`click-${trackingId}`}
  data-section={section}
  class:list={[
    'inline-flex items-center justify-center gap-2 font-sans font-semibold rounded',
    'transition-all duration-150 hover:scale-[1.03]',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
  ]}
>
  {label}
</a>
```

---

## ARQUIVO: `src/components/global/SectionHeader.astro`

```astro
---
interface Props {
  label?:    string;
  title:     string;
  subtitle?: string;
  align?:    'left' | 'center';
  dark?:     boolean;  // true = texto branco (para fundos escuros)
}

const {
  label,
  title,
  subtitle,
  align = 'center',
  dark  = false,
} = Astro.props;

const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
---

<div class:list={['max-w-3xl mb-12 lg:mb-16 gsap-fade-up', alignClass]}>
  {label && (
    <span class:list={['section-label block mb-3', dark && 'text-primary']}>
      {label}
    </span>
  )}
  <h2 class:list={['font-display text-display-lg mb-4', dark ? 'text-white' : 'text-dark']}>
    {title}
  </h2>
  {subtitle && (
    <p class:list={['font-sans text-body-lg leading-relaxed', dark ? 'text-white/70' : 'text-muted']}>
      {subtitle}
    </p>
  )}
</div>
```

---

## ARQUIVO: `src/components/global/FeatureCard.astro`

```astro
---
interface Props {
  icon:        string;    // SVG path string
  title?:      string;
  description: string;
  dark?:       boolean;
  index?:      number;    // para stagger GSAP
}

const { icon, title, description, dark = false, index = 0 } = Astro.props;
---

<div
  class:list={[
    'gsap-stagger-item',
    'flex items-start gap-4 p-6 rounded-card',
    'transition-all duration-200 hover:-translate-y-1',
    dark
      ? 'bg-dark-lighter border border-white/10 hover:border-white/20'
      : 'bg-white border border-surface hover:shadow-card-hover',
  ]}
  data-index={index}
>
  <!-- Ícone monocromático -->
  <div class:list={['flex-shrink-0 w-10 h-10 rounded flex items-center justify-center', dark ? 'bg-primary/20' : 'bg-primary/10']}>
    <svg
      width="20" height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-primary"
      aria-hidden="true"
    >
      <path d={icon} />
    </svg>
  </div>

  <!-- Conteúdo -->
  <div>
    {title && (
      <h3 class:list={['font-sans font-semibold text-body-md mb-1', dark ? 'text-white' : 'text-text']}>
        {title}
      </h3>
    )}
    <p class:list={['font-sans text-body-sm', dark ? 'text-white/70' : 'text-muted']}>
      {description}
    </p>
  </div>
</div>
```

---

## ARQUIVO: `src/components/global/Footer.astro`

```astro
---
const currentYear = new Date().getFullYear();
const whatsappHref = 'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.';
---

<footer class="bg-dark text-white">

  <!-- Divisor superior -->
  <div class="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true"></div>

  <div class="container-content py-16 lg:py-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

      <!-- Coluna 1: Marca + descrição -->
      <div>
        <a href="#top" class="inline-block mb-4" aria-label="She ForceK9 — topo da página">
          <span class="font-display text-3xl text-white tracking-wide">She ForceK9</span>
        </a>
        <p class="font-sans text-body-sm text-white/60 leading-relaxed">
          Se você quer aprender mais sobre proteção com cães e acompanhar a próxima data do She ForceK9 em SP, nos siga nas redes.
        </p>
        <!-- CNPJ -->
        <p class="font-sans text-label text-white/30 mt-4">
          CNPJ: 49.081.534/0001-89
        </p>
      </div>

      <!-- Coluna 2: Redes sociais -->
      <div>
        <h3 class="font-sans font-semibold text-body-sm text-white/50 uppercase tracking-widest mb-6">
          Redes Sociais
        </h3>
        <ul class="space-y-3">
          <li>
            <a
              href="https://www.instagram.com/abeak9"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 font-sans text-body-sm text-white/70 hover:text-primary transition-colors duration-150 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              <!-- Instagram SVG -->
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @abeak9
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@abeak9"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 font-sans text-body-sm text-white/70 hover:text-primary transition-colors duration-150 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              <!-- TikTok SVG -->
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
              </svg>
              @abeak9
            </a>
          </li>
        </ul>
      </div>

      <!-- Coluna 3: Contato -->
      <div>
        <h3 class="font-sans font-semibold text-body-sm text-white/50 uppercase tracking-widest mb-6">
          Contato
        </h3>
        <ul class="space-y-3">
          <li>
            <a
              id="btn-footer-whatsapp"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-tracking="click-whatsapp-footer"
              data-section="footer"
              class="inline-flex items-center gap-3 font-sans text-body-sm text-white/70 hover:text-primary transition-colors duration-150 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              (11) 91895-2921
            </a>
          </li>
          <li class="flex items-center gap-3 font-sans text-body-sm text-white/50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            São José dos Campos / SP
          </li>
        </ul>

        <!-- CTA -->
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-tracking="click-whatsapp-footer-cta"
          data-section="footer"
          class="
            inline-flex items-center gap-2 mt-6
            bg-primary text-white
            font-sans font-semibold text-body-sm
            px-5 py-3 rounded
            hover:bg-primary-hover transition-all duration-150 hover:scale-[1.03]
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
          "
        >
          Falar no WhatsApp
        </a>
      </div>

    </div>

    <!-- Divisor -->
    <div class="h-px bg-white/10 my-10" aria-hidden="true"></div>

    <!-- Linha inferior -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="font-sans text-label text-white/30">
        © {currentYear} She ForceK9. Todos os direitos reservados.
      </p>
      <div class="flex items-center gap-6">
        <a
          href="/politica-de-privacidade"
          class="font-sans text-label text-white/30 hover:text-white/60 transition-colors focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          Política de Privacidade
        </a>
        <a
          href="/termos-de-uso"
          class="font-sans text-label text-white/30 hover:text-white/60 transition-colors focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          Termos de Uso
        </a>
        <a
          href="https://adsgator.com.br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site desenvolvido por Adsgator"
          class="font-sans text-label text-white/20 hover:text-white/40 transition-colors focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          ⚡ Adsgator
        </a>
      </div>
    </div>

    <!-- Aviso legal -->
    <p class="font-sans text-label text-white/20 mt-8 leading-relaxed max-w-3xl">
      She ForceK9 é um curso de guarda e proteção pessoal com cães voltado para mulheres. Todo o conteúdo prático é realizado sob supervisão profissional. O módulo de Direito aborda o uso legal de cães com base no Código Penal Brasileiro. O She ForceK9 não realiza diagnósticos psicológicos — o módulo de Psicologia é conduzido por profissional habilitada e tem caráter de suporte e escuta.
    </p>
  </div>
</footer>
```

---

> **Próximo arquivo:** Parte 3 — Seções da Landing Page
