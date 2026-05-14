# Documento de Implementação — Parte 4: Integrações + Páginas Adicionais
## Training Camping · Adsgator · 2026

> Enviar este arquivo **por último**, após as Partes 1, 2 e 3 concluídas.
> Executar `npm run build` com zero erros ao final desta parte.

---

## Ordem de execução

```
1.  src/components/islands/InstagramFeed.tsx
2.  src/components/islands/CookieBanner.tsx
3.  src/pages/links.astro
4.  src/pages/404.astro
5.  src/pages/politica-de-privacidade.astro
6.  src/pages/termos-de-uso.astro
7.  public/robots.txt
8.  public/manifest.json
9.  vercel.json
10. npm run build — confirmar zero erros
11. git add -A && git commit
```

---

## Arquivo: `src/components/islands/InstagramFeed.tsx`

```tsx
import { useState, useEffect, Component } from 'react';
import type { ReactNode } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface InstagramMedia {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface InstagramFeedProps {
  token: string;
  username: string;
  profileUrl: string;
}

// ─── Error Boundary ───────────────────────────────────────────────────────────

interface ErrorBoundaryState {
  hasError: boolean;
}

class FeedErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function FeedSkeleton() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4"
      aria-label="Carregando feed do Instagram"
      aria-busy="true"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded bg-border animate-pulse"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// ─── Fallback (sem token ou erro de API) ──────────────────────────────────────

function FeedFallback({ profileUrl, username }: { profileUrl: string; username: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
      <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#535353"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="#535353" stroke="none" />
        </svg>
      </div>
      <div>
        <p className="font-sans text-sm text-text-support mb-4">
          Acompanhe o trabalho no Instagram
        </p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-background font-sans font-semibold text-sm px-6 py-3 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`Ver @${username} no Instagram — abre em nova aba`}
          data-tracking="click-instagram-fallback"
          data-section="instagram"
        >
          @{username} no Instagram
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ─── Feed Grid ────────────────────────────────────────────────────────────────

function FeedGrid({
  posts,
  username,
}: {
  posts: InstagramMedia[];
  username: string;
}) {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4"
      role="list"
      aria-label={`Posts recentes de @${username} no Instagram`}
    >
      {posts.slice(0, 6).map((post) => {
        const src =
          post.media_type === 'VIDEO' && post.thumbnail_url
            ? post.thumbnail_url
            : post.media_url;

        const caption = post.caption
          ? post.caption.slice(0, 80) + (post.caption.length > 80 ? '…' : '')
          : `Post de @${username}`;

        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square rounded overflow-hidden bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`Ver post: ${caption} — abre Instagram`}
            data-tracking="click-instagram-post"
            data-section="instagram"
            role="listitem"
          >
            <img
              src={src}
              alt={caption}
              loading="lazy"
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-200 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-90 group-hover:scale-100"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
              </svg>
            </div>
            {/* Video indicator */}
            {post.media_type === 'VIDEO' && (
              <div
                className="absolute top-2 right-2 bg-primary/70 rounded px-1.5 py-0.5"
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="white">
                  <path d="M6 4l7 4-7 4V4z" />
                </svg>
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

function InstagramFeedInner({ token, username, profileUrl }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramMedia[] | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const fields = 'id,media_type,media_url,thumbnail_url,permalink,caption,timestamp';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=9&access_token=${token}`;

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Instagram API error: ${res.status}`);
        return res.json();
      })
      .then((data: { data: InstagramMedia[] }) => {
        if (!data.data || data.data.length === 0) throw new Error('No posts');
        setPosts(data.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [token]);

  if (loading) return <FeedSkeleton />;
  if (error || !posts) return <FeedFallback profileUrl={profileUrl} username={username} />;
  return <FeedGrid posts={posts} username={username} />;
}

export default function InstagramFeed(props: InstagramFeedProps) {
  return (
    <FeedErrorBoundary
      fallback={<FeedFallback profileUrl={props.profileUrl} username={props.username} />}
    >
      <InstagramFeedInner {...props} />
    </FeedErrorBoundary>
  );
}
```

---

## Arquivo: `src/components/islands/CookieBanner.tsx`

```tsx
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CookieBannerProps {
  gtmId: string;
}

const CONSENT_KEY = 'tc_cookie_consent';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

// Push Google Consent Mode v2 update
function pushConsentUpdate(granted: boolean) {
  if (typeof window === 'undefined' || !window.gtag) return;
  const status = granted ? 'granted' : 'denied';
  window.gtag('consent', 'update', {
    analytics_storage: status,
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
    functionality_storage: 'granted',
    security_storage: 'granted',
  });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieBanner({ gtmId }: CookieBannerProps) {
  const [status, setStatus] = useState<ConsentStatus>('pending');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentStatus | null;
    if (stored && stored !== 'pending') {
      setStatus(stored);
      pushConsentUpdate(stored === 'accepted');
      setVisible(false);
    } else {
      // Pequeno delay para não bloquear LCP
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setStatus('accepted');
    pushConsentUpdate(true);
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setStatus('declined');
    pushConsentUpdate(false);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && status === 'pending' && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="false"
          aria-label="Aviso de cookies"
          className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[100] bg-primary border border-white/10 rounded shadow-2xl p-5"
        >
          <p className="font-sans text-sm text-background/80 leading-relaxed mb-5">
            Usamos cookies para melhorar sua experiência e medir o desempenho do site. Veja nossa{' '}
            <a
              href="/politica-de-privacidade"
              className="underline underline-offset-2 text-background/90 hover:text-secondary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Política de Privacidade
            </a>
            .
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 bg-secondary text-background font-sans font-semibold text-sm py-2.5 px-4 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="flex-1 bg-white/10 text-background/70 font-sans font-medium text-sm py-2.5 px-4 rounded transition-colors duration-150 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
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

## Arquivo: `src/pages/links.astro`

```astro
---
// Página /links — Árvore de Links
// Disparador GTM: view_links (pageview)
// Mobile-first absoluto. Desktop é secundário.

import { Image } from 'astro:assets';
import avatarImg from '@/assets/images/avatar-links.webp';

const SITE_NAME = 'Training Camping';
const TAGLINE = 'Imersão presencial de treinamento comportamental para cães. SJC e região.';

const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';

const links = [
  {
    label: 'Saiba mais sobre a imersão',
    href: 'https://imersao.abeak9adestramento.com.br/',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M12 5l7 7-7 7"/></svg>`,
    variant: 'primary',
    tracking: 'click-links-landing',
  },
  {
    label: 'Falar pelo WhatsApp',
    href: WA_LINK,
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    variant: 'whatsapp',
    tracking: 'click-links-whatsapp',
  },
  {
    label: 'Instagram @abeak9',
    href: 'https://www.instagram.com/abeak9',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>`,
    variant: 'secondary',
    tracking: 'click-links-instagram',
  },
];

const variantClasses: Record<string, string> = {
  primary:
    'bg-primary text-background hover:bg-primary/90',
  secondary:
    'bg-surface text-text-main border border-border hover:border-text-support hover:bg-background',
  whatsapp:
    'bg-whatsapp text-background hover:bg-whatsapp/90',
};

const year = new Date().getFullYear();
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Training Camping — Imersão Canina em SJC</title>
  <meta name="description" content="Veja como funciona a imersão presencial para cães reativos e ansiosos em SJC." />
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://imersao.abeak9adestramento.com.br/links/" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- Open Graph -->
  <meta property="og:title" content="Training Camping — Imersão Canina em SJC" />
  <meta property="og:description" content="Veja como funciona a imersão presencial para cães reativos e ansiosos em SJC." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://imersao.abeak9adestramento.com.br/links/" />

  <!-- GTM Head -->
  <script is:inline>
    ;(function (w, d, s, l, i) {
      w[l] = w[l] || []
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : ''
      j.async = true
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
      f.parentNode.insertBefore(j, f)
    })(window, document, 'script', 'dataLayer', 'GTM-XXXXXXX')
  </script>

  <!-- Consent Mode v2 defaults -->
  <script is:inline>
    window.dataLayer = window.dataLayer || []
    function gtag() { dataLayer.push(arguments) }
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 500,
    })
  </script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&family=Inter:wght@400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --primary: #1a1d23;
      --secondary: #fe5d16;
      --background: #ffffff;
      --surface: #f7f5f1;
      --text-main: #1d1d1c;
      --text-support: #535353;
      --border: #e5e3de;
      --whatsapp: #25D366;
    }
    body {
      background: var(--background);
      color: var(--text-main);
      font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .font-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
    @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
  </style>
</head>
<body>
  <!-- GTM noscript -->
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
      height="0"
      width="0"
      style="display:none;visibility:hidden"
      title="Google Tag Manager"
    ></iframe>
  </noscript>

  <main
    id="main-content"
    class="links-page flex-1 flex flex-col items-center justify-start px-5 pt-16 pb-10 max-w-md mx-auto w-full"
  >
    <!-- Logo / Name -->
    <a
      href="https://imersao.abeak9adestramento.com.br/"
      class="links-item mb-6 block"
      aria-label="Training Camping — voltar à landing page"
      data-tracking="click-links-logo"
      data-section="links"
    >
      <span
        class="font-display font-bold text-2xl text-primary tracking-tight"
        style="font-family: 'Bricolage Grotesque', sans-serif;"
      >
        Training Camping
      </span>
    </a>

    <!-- Avatar -->
    <div class="links-item mb-5">
      <div
        class="w-24 h-24 rounded-full overflow-hidden border-2"
        style="border-color: var(--border);"
      >
        <Image
          src={avatarImg}
          alt="Beatriz Mattos — Training Camping, imersão canina em SJC"
          width={192}
          height={192}
          loading="eager"
          format="webp"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Tagline -->
    <p
      class="links-item text-center text-sm leading-relaxed mb-10 max-w-xs"
      style="color: var(--text-support); font-family: 'Inter', sans-serif;"
    >
      {TAGLINE}
    </p>

    <!-- Link buttons -->
    <div class="w-full space-y-3 mb-10">
      {links.map((link, i) => (
        <a
          href={link.href}
          id={`btn-links-${i}`}
          data-tracking={link.tracking}
          data-section="links"
          rel="noopener noreferrer"
          target={link.href.startsWith('http') ? '_blank' : undefined}
          class:list={[
            'links-item flex items-center gap-3 w-full px-5 py-4 rounded font-semibold text-sm text-center justify-center transition-transform duration-150 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2',
            variantClasses[link.variant],
          ]}
          style={`--i: ${i}; font-family: 'Inter', sans-serif;`}
        >
          <span set:html={link.icon} aria-hidden="true" />
          {link.label}
        </a>
      ))}
    </div>

    <!-- Social icons -->
    <div class="links-item flex items-center gap-5 mb-auto">
      <a
        href="https://www.instagram.com/abeak9"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram @abeak9 — abre em nova aba"
        data-tracking="click-links-social-instagram"
        data-section="links"
        class="transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
        style="color: var(--text-support);"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
      </a>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp — abre em nova aba"
        data-tracking="click-links-social-whatsapp"
        data-section="links"
        class="transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
        style="color: var(--text-support);"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>

    <!-- Footer minimal -->
    <footer class="links-item mt-12 text-center" aria-label="Rodapé">
      <p
        class="text-xs"
        style="color: var(--text-support); font-family: 'Inter', sans-serif;"
      >
        © {year} Training Camping — CNPJ 49.081.534/0001-89
      </p>
      <p class="text-xs mt-1" style="color: var(--border); font-family: 'Inter', sans-serif;">
        <a
          href="/politica-de-privacidade"
          class="hover:underline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary rounded"
          style="color: var(--text-support);"
        >
          Política de Privacidade
        </a>
      </p>
    </footer>
  </main>

  <script is:inline>
    // Animação de entrada com stagger
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      const items = document.querySelectorAll('.links-item');
      items.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        setTimeout(() => {
          el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 80 + i * 80);
      });
    }

    // GTM: disparar view_links
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'view_links' });
  </script>
</body>
</html>
```

---

## Arquivo: `src/pages/404.astro`

```astro
---
import Layout from '@/components/global/Layout.astro';

const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';
---

<Layout
  title="Página não encontrada — Training Camping"
  description="Esta página não existe. Mas a imersão existe e pode transformar a relação com o seu cão."
  canonical="https://imersao.abeak9adestramento.com.br/404/"
  ogTitle="Oops — Training Camping"
  ogDescription="Página não encontrada. Mas o Training Camping existe."
  ogImage="/og-image.webp"
>
  <main
    id="main-content"
    class="relative bg-background min-h-screen flex items-center overflow-hidden"
    aria-label="Página não encontrada"
  >
    <!-- 404 tipográfico de fundo -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <span
        id="four-o-four"
        class="font-display font-bold text-[28vw] leading-none tracking-tighter text-surface/60"
        style="user-select: none;"
      >
        404
      </span>
    </div>

    <!-- Content centralizado -->
    <div class="relative z-10 max-w-lg mx-auto px-6 py-32 text-center">

      <span
        id="err-label"
        class="inline-block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-secondary mb-6 opacity-0"
      >
        Página não encontrada
      </span>

      <h1
        id="err-h1"
        class="font-display font-bold text-3xl sm:text-4xl text-text-main leading-[1.1] tracking-tight mb-6 opacity-0"
      >
        Essa página não existe, mas a solução para o seu cão existe.
      </h1>

      <p
        id="err-sub"
        class="font-sans text-base text-text-support leading-relaxed mb-10 opacity-0"
      >
        Você pode voltar para o início ou entrar em contato pelo WhatsApp agora mesmo.
      </p>

      <div id="err-actions" class="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
        <a
          href="/"
          id="btn-404-home"
          data-tracking="click-404-home"
          data-section="404"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-background font-sans font-semibold text-base px-8 py-4 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="Voltar para a página inicial"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4"/>
          </svg>
          Voltar ao início
        </a>

        <a
          href={WA_LINK}
          id="btn-404-whatsapp"
          data-tracking="click-404-whatsapp"
          data-section="404"
          rel="noopener noreferrer"
          target="_blank"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border bg-background text-text-main font-sans font-semibold text-base px-8 py-4 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="Falar pelo WhatsApp — abre WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar pelo WhatsApp
        </a>
      </div>

    </div>
  </main>
</Layout>

<script>
  import gsap from 'gsap';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    // 404 flutuante no fundo
    gsap.to('#four-o-four', {
      y: -12,
      duration: 4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Conteúdo
    const tl = gsap.timeline({ delay: 0.2 });
    tl.to('#err-label', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      .to('#err-h1', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
      .to('#err-sub', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .to('#err-actions', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');

    gsap.set(['#err-label', '#err-h1', '#err-sub', '#err-actions'], { y: 20 });
  } else {
    ['#err-label', '#err-h1', '#err-sub', '#err-actions'].forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) (el as HTMLElement).style.opacity = '1';
    });
  }
</script>
```

---

## Arquivo: `src/pages/politica-de-privacidade.astro`

```astro
---
import Layout from '@/components/global/Layout.astro';
const year = new Date().getFullYear();
---

<Layout
  title="Política de Privacidade — Training Camping"
  description="Saiba como o Training Camping coleta, usa e protege seus dados pessoais conforme a LGPD."
  canonical="https://imersao.abeak9adestramento.com.br/politica-de-privacidade/"
  ogTitle="Política de Privacidade — Training Camping"
  ogDescription="Saiba como tratamos seus dados pessoais."
  ogImage="/og-image.webp"
  noindex={true}
>
  <!-- Header simplificado -->
  <header class="border-b border-border py-4 px-6" aria-label="Cabeçalho">
    <div class="max-w-5xl mx-auto flex items-center justify-between">
      <a
        href="/"
        class="font-display font-bold text-lg text-text-main tracking-tight hover:text-secondary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
        aria-label="Voltar para o Training Camping"
      >
        Training Camping
      </a>
      <a
        href="/"
        class="flex items-center gap-2 font-sans text-sm text-text-support hover:text-text-main transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
        aria-label="Voltar ao site"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M13 8H3M7 4L3 8l4 4"/>
        </svg>
        Voltar ao site
      </a>
    </div>
  </header>

  <main id="main-content" class="max-w-2xl mx-auto px-6 py-16 lg:py-24">
    <h1 class="font-display font-bold text-3xl sm:text-4xl text-text-main tracking-tight mb-3">
      Política de Privacidade
    </h1>
    <p class="font-sans text-sm text-text-support mb-12">Última atualização: maio de {year}</p>

    <div class="prose-content space-y-10 font-sans text-base text-text-main leading-[1.8]">

      <section aria-labelledby="pp-intro">
        <h2 id="pp-intro" class="font-display font-semibold text-xl text-text-main mb-3">1. Quem somos</h2>
        <p>
          Esta Política de Privacidade se aplica ao Training Camping, serviço de imersão presencial
          de treinamento comportamental canino operado por Beatriz Mattos, CNPJ 49.081.534/0001-89,
          com atendimento em São José dos Campos – SP.
        </p>
        <p class="mt-3">
          Ao acessar este site ou entrar em contato pelo WhatsApp, você concorda com os termos
          desta política.
        </p>
      </section>

      <section aria-labelledby="pp-dados">
        <h2 id="pp-dados" class="font-display font-semibold text-xl text-text-main mb-3">2. Dados que coletamos</h2>
        <p>Coletamos apenas os dados necessários para prestação dos nossos serviços:</p>
        <ul class="mt-3 space-y-2 list-none">
          {[
            'Nome e dados de contato (WhatsApp, e-mail) fornecidos voluntariamente por você.',
            'Informações sobre o seu cão (raça, idade, comportamento) compartilhadas na avaliação.',
            'Dados de navegação coletados pelo Google Analytics e Google Tag Manager (IP anonimizado, páginas visitadas, tempo de sessão).',
            'Preferências de cookies conforme consentimento registrado no banner LGPD.',
          ].map((item) => (
            <li class="flex items-start gap-3">
              <span class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true"/>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="pp-uso">
        <h2 id="pp-uso" class="font-display font-semibold text-xl text-text-main mb-3">3. Como usamos seus dados</h2>
        <p>Utilizamos seus dados exclusivamente para:</p>
        <ul class="mt-3 space-y-2 list-none">
          {[
            'Responder aos seus contatos e fornecer informações sobre o Training Camping.',
            'Realizar a avaliação prévia e planejar a imersão de acordo com o caso do seu cão.',
            'Melhorar o desempenho e a usabilidade do site.',
            'Cumprir obrigações legais e regulatórias.',
          ].map((item) => (
            <li class="flex items-start gap-3">
              <span class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true"/>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p class="mt-4">
          Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing.
        </p>
      </section>

      <section aria-labelledby="pp-cookies">
        <h2 id="pp-cookies" class="font-display font-semibold text-xl text-text-main mb-3">4. Cookies e tecnologias de rastreamento</h2>
        <p>
          Utilizamos o Google Tag Manager e o Google Analytics para coletar dados de navegação de
          forma anonimizada. A coleta só ocorre após seu consentimento explícito via banner de
          cookies presente no site, em conformidade com o Google Consent Mode v2.
        </p>
        <p class="mt-3">
          Você pode revogar seu consentimento a qualquer momento limpando os cookies do navegador.
        </p>
      </section>

      <section aria-labelledby="pp-retencao">
        <h2 id="pp-retencao" class="font-display font-semibold text-xl text-text-main mb-3">5. Retenção de dados</h2>
        <p>
          Dados de contato e informações sobre seu cão são mantidos pelo tempo necessário para
          a prestação do serviço contratado e pelo prazo mínimo exigido pela legislação brasileira.
          Dados de navegação são retidos por até 26 meses no Google Analytics.
        </p>
      </section>

      <section aria-labelledby="pp-direitos">
        <h2 id="pp-direitos" class="font-display font-semibold text-xl text-text-main mb-3">6. Seus direitos (LGPD)</h2>
        <p>Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:</p>
        <ul class="mt-3 space-y-2 list-none">
          {[
            'Confirmar a existência de tratamento dos seus dados.',
            'Acessar, corrigir ou atualizar seus dados.',
            'Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.',
            'Revogar o consentimento a qualquer momento.',
          ].map((item) => (
            <li class="flex items-start gap-3">
              <span class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true"/>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p class="mt-4">
          Para exercer qualquer um desses direitos, entre em contato pelo WhatsApp:{' '}
          <a
            href="https://wa.me/5511918952921"
            rel="noopener noreferrer"
            target="_blank"
            class="text-secondary underline underline-offset-2 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
          >
            (11) 91895-2921
          </a>.
        </p>
      </section>

      <section aria-labelledby="pp-seguranca">
        <h2 id="pp-seguranca" class="font-display font-semibold text-xl text-text-main mb-3">7. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra
          acesso não autorizado, perda ou divulgação indevida. O site opera com HTTPS e as
          comunicações por WhatsApp utilizam a criptografia de ponta a ponta da plataforma.
        </p>
      </section>

      <section aria-labelledby="pp-atualizacao">
        <h2 id="pp-atualizacao" class="font-display font-semibold text-xl text-text-main mb-3">8. Atualizações desta política</h2>
        <p>
          Esta política pode ser atualizada periodicamente. A data da última revisão está indicada
          no topo da página. Recomendamos a consulta periódica.
        </p>
      </section>

      <section aria-labelledby="pp-contato">
        <h2 id="pp-contato" class="font-display font-semibold text-xl text-text-main mb-3">9. Contato</h2>
        <p>
          Dúvidas sobre esta Política de Privacidade? Fale conosco pelo WhatsApp:{' '}
          <a
            href="https://wa.me/5511918952921"
            rel="noopener noreferrer"
            target="_blank"
            class="text-secondary underline underline-offset-2 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
          >
            (11) 91895-2921
          </a>.
        </p>
      </section>

    </div>
  </main>
</Layout>
```

---

## Arquivo: `src/pages/termos-de-uso.astro`

```astro
---
import Layout from '@/components/global/Layout.astro';
const year = new Date().getFullYear();
---

<Layout
  title="Termos de Uso — Training Camping"
  description="Leia os termos de uso do site Training Camping e do serviço de imersão presencial de treinamento canino."
  canonical="https://imersao.abeak9adestramento.com.br/termos-de-uso/"
  ogTitle="Termos de Uso — Training Camping"
  ogDescription="Termos de uso do Training Camping."
  ogImage="/og-image.webp"
  noindex={true}
>
  <!-- Header simplificado -->
  <header class="border-b border-border py-4 px-6" aria-label="Cabeçalho">
    <div class="max-w-5xl mx-auto flex items-center justify-between">
      <a
        href="/"
        class="font-display font-bold text-lg text-text-main tracking-tight hover:text-secondary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
        aria-label="Voltar para o Training Camping"
      >
        Training Camping
      </a>
      <a
        href="/"
        class="flex items-center gap-2 font-sans text-sm text-text-support hover:text-text-main transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
        aria-label="Voltar ao site"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M13 8H3M7 4L3 8l4 4"/>
        </svg>
        Voltar ao site
      </a>
    </div>
  </header>

  <main id="main-content" class="max-w-2xl mx-auto px-6 py-16 lg:py-24">
    <h1 class="font-display font-bold text-3xl sm:text-4xl text-text-main tracking-tight mb-3">
      Termos de Uso
    </h1>
    <p class="font-sans text-sm text-text-support mb-12">Última atualização: maio de {year}</p>

    <div class="space-y-10 font-sans text-base text-text-main leading-[1.8]">

      <section aria-labelledby="tu-aceite">
        <h2 id="tu-aceite" class="font-display font-semibold text-xl text-text-main mb-3">1. Aceitação dos termos</h2>
        <p>
          Ao acessar ou utilizar o site do Training Camping
          (imersao.abeak9adestramento.com.br), você concorda com estes Termos de Uso.
          Se não concordar com algum ponto, recomendamos que não utilize o site.
        </p>
      </section>

      <section aria-labelledby="tu-servico">
        <h2 id="tu-servico" class="font-display font-semibold text-xl text-text-main mb-3">2. Descrição do serviço</h2>
        <p>
          O Training Camping é um serviço de imersão presencial de treinamento comportamental
          canino, operado por Beatriz Mattos (CNPJ 49.081.534/0001-89), realizado na Chácara
          Recanto Feliz, em São José dos Campos – SP.
        </p>
        <p class="mt-3">
          As informações disponibilizadas neste site têm caráter informativo e não constituem
          contrato de prestação de serviços. A contratação se dá por meio de acordo explícito
          via WhatsApp ou outro canal de comunicação direto.
        </p>
      </section>

      <section aria-labelledby="tu-uso">
        <h2 id="tu-uso" class="font-display font-semibold text-xl text-text-main mb-3">3. Uso do site</h2>
        <p>Você concorda em utilizar este site apenas para fins lícitos e em conformidade com:</p>
        <ul class="mt-3 space-y-2 list-none">
          {[
            'A legislação brasileira aplicável.',
            'Estes Termos de Uso.',
            'A Política de Privacidade disponível neste site.',
          ].map((item) => (
            <li class="flex items-start gap-3">
              <span class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true"/>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p class="mt-4">
          É proibido utilizar o site para disseminar conteúdo falso, ofensivo, ou que viole
          direitos de terceiros.
        </p>
      </section>

      <section aria-labelledby="tu-propriedade">
        <h2 id="tu-propriedade" class="font-display font-semibold text-xl text-text-main mb-3">4. Propriedade intelectual</h2>
        <p>
          Todo o conteúdo deste site — textos, imagens, logotipos, layout e código — é de
          propriedade do Training Camping ou licenciado para uso. É proibida a reprodução,
          distribuição ou uso comercial sem autorização prévia e expressa.
        </p>
      </section>

      <section aria-labelledby="tu-responsabilidade">
        <h2 id="tu-responsabilidade" class="font-display font-semibold text-xl text-text-main mb-3">5. Limitação de responsabilidade</h2>
        <p>
          O Training Camping não se responsabiliza por danos diretos ou indiretos decorrentes
          do uso ou da impossibilidade de uso deste site, nem pela disponibilidade contínua
          do serviço online.
        </p>
        <p class="mt-3">
          Os resultados obtidos com a imersão dependem de fatores individuais de cada animal
          e do engajamento do tutor durante e após o processo. Não garantimos resultados
          específicos.
        </p>
      </section>

      <section aria-labelledby="tu-links">
        <h2 id="tu-links" class="font-display font-semibold text-xl text-text-main mb-3">6. Links externos</h2>
        <p>
          Este site pode conter links para plataformas externas (WhatsApp, Instagram). Esses
          serviços possuem seus próprios termos de uso e políticas de privacidade, pelos quais
          o Training Camping não se responsabiliza.
        </p>
      </section>

      <section aria-labelledby="tu-modificacoes">
        <h2 id="tu-modificacoes" class="font-display font-semibold text-xl text-text-main mb-3">7. Modificações</h2>
        <p>
          Estes termos podem ser atualizados a qualquer momento. A versão mais recente estará
          sempre disponível nesta página, com a data de última revisão indicada no topo.
        </p>
      </section>

      <section aria-labelledby="tu-lei">
        <h2 id="tu-lei" class="font-display font-semibold text-xl text-text-main mb-3">8. Lei aplicável</h2>
        <p>
          Estes Termos de Uso são regidos pela legislação brasileira. Eventuais disputas serão
          resolvidas no foro da comarca de São José dos Campos – SP.
        </p>
      </section>

    </div>
  </main>
</Layout>
```

---

## Arquivo: `public/robots.txt`

```
User-agent: *
Allow: /

Disallow: /links/
Disallow: /politica-de-privacidade/
Disallow: /termos-de-uso/
Disallow: /404/

Sitemap: https://imersao.abeak9adestramento.com.br/sitemap-index.xml
```

---

## Arquivo: `public/manifest.json`

```json
{
  "name": "Training Camping — Imersão Canina SJC",
  "short_name": "Training Camping",
  "description": "Imersão presencial de treinamento comportamental para cães em SJC.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1a1d23",
  "lang": "pt-BR",
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

## Arquivo: `vercel.json`

```json
{
  "cleanUrls": true,
  "trailingSlash": true,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/_astro/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)\\.(webp|svg|ico|png|jpg|jpeg)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=2592000, stale-while-revalidate=86400" }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/links",
      "destination": "/links/",
      "permanent": true
    }
  ]
}
```

---

## Nota de integração: Schema.org JSON-LD

> Adicionar no `<head>` do `Layout.astro` (já referenciado nas regras ADSGATOR).
> Copiar este bloco exatamente como está — sem inventar dados não fornecidos.

```html
<script type="application/ld+json" is:inline>
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Training Camping — Imersão Presencial de Treinamento Canino",
  "description": "Imersão presencial de 2 a 4 dias de treinamento comportamental canino em São José dos Campos. Você treina junto com seu cão. Especialidade em reatividade, ansiedade de separação e puxão na guia.",
  "url": "https://imersao.abeak9adestramento.com.br/",
  "telephone": "+5511918952921",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "São José dos Campos e região, SP, Brasil"
  },
  "image": "https://imersao.abeak9adestramento.com.br/og-image.webp",
  "sameAs": [
    "https://www.instagram.com/abeak9"
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  }
}
</script>
```

---

## Nota de integração: Layout.astro — prop `noindex`

> O Layout.astro (Parte 2) deve suportar a prop `noindex` para as páginas legais.
> Se a Parte 2 ainda não incluiu esta prop, adicionar o seguinte no `<head>` do Layout:

```astro
---
// Adicionar às props existentes do Layout.astro
interface Props {
  // ... props existentes ...
  noindex?: boolean;
}
const { noindex = false, ...rest } = Astro.props;
---

<!-- Dentro do <head>, após o canonical: -->
{noindex && <meta name="robots" content="noindex, follow" />}
```

---

## Verificação final — Build completo

```bash
# 1. Verificar todos os arquivos desta parte
ls -la src/components/islands/InstagramFeed.tsx
ls -la src/components/islands/CookieBanner.tsx
ls -la src/pages/links.astro
ls -la src/pages/404.astro
ls -la src/pages/politica-de-privacidade.astro
ls -la src/pages/termos-de-uso.astro
ls -la public/robots.txt
ls -la public/manifest.json
ls -la vercel.json

# 2. Verificar tipos TypeScript
npx astro check 2>&1

# 3. Build final — deve ser zero erros, zero warnings
npm run build 2>&1

# 4. Checagem rápida de HEX hardcoded no projeto todo
grep -rn '#[0-9a-fA-F]\{6\}' src/ --include="*.astro" --include="*.tsx" \
  | grep -v "svg\|fill=\|stroke=\|color:" \
  | grep -v "//.*#" \
  | head -20

# 5. Confirmar que todos os botões têm data-tracking
grep -rn 'id="btn-' src/ --include="*.astro" --include="*.tsx" | wc -l

# 6. Confirmar links externos com rel
grep -rn 'target="_blank"' src/ --include="*.astro" --include="*.tsx" \
  | grep -v 'rel="noopener noreferrer"' | head -10

# 7. Preview local antes de deploy
npm run preview

# 8. Commit final
git add -A
git commit -m "feat: integrações, páginas adicionais e config de deploy — Training Camping"

# 9. Push para main (deploy automático Vercel)
git push origin main
```

---

## Checklist de entrega final (Partes 1–4 concluídas)

### Funcionalidade
- [ ] `npm run build` — zero erros
- [ ] `npx astro check` — zero erros TypeScript
- [ ] Hero carrega com imagem e animação de entrada
- [ ] Todas as seções visíveis e animadas ao scroll
- [ ] FAQ accordion abre/fecha corretamente
- [ ] InstagramFeed exibe grid ou fallback de link
- [ ] CookieBanner aparece, aceita e recusa
- [ ] Consent Mode v2 atualizado após escolha do cookie
- [ ] Botão WhatsApp flutuante aparece após scroll do hero
- [ ] Menu mobile abre/fecha com AnimatePresence
- [ ] Focus trap ativo no menu mobile

### Links e tracking
- [ ] Todos os botões WA abrem `wa.me/5511918952921` com mensagem pré-preenchida
- [ ] Mensagem: "Oi, vi você no Google e gostaria de saber mais sobre a imersão Training Camping"
- [ ] Todos os CTAs têm `id="btn-*"`, `data-tracking` e `data-section`
- [ ] Link Instagram abre `instagram.com/abeak9` em nova aba
- [ ] GTM snippet no `<head>` e `<body>` do Layout e da /links

### SEO e performance
- [ ] `<title>` e `<meta description>` corretos em cada página
- [ ] `<link rel="canonical">` em todas as páginas
- [ ] `noindex` nas páginas /politica, /termos e /links
- [ ] Schema.org válido: testar em validator.schema.org
- [ ] og-image renderiza corretamente: testar em opengraph.xyz
- [ ] Sitemap gerado em /sitemap-index.xml
- [ ] robots.txt bloqueia /links, /politica, /termos, /404
- [ ] manifest.json acessível em /manifest.json

### Responsivo e acessibilidade
- [ ] Mobile 375px — sem overflow horizontal
- [ ] Contraste WCAG AA em todos os textos
- [ ] Todas as imagens com `alt` descritivo
- [ ] `focus-visible` visível em todos os elementos interativos
- [ ] `<h1>` único por página, hierarquia h1→h2→h3 respeitada
- [ ] Animações desativadas com `prefers-reduced-motion`

### Deploy Vercel
- [ ] Repositório conectado ao Vercel
- [ ] `.env` com valores reais configurado no painel Vercel
- [ ] GTM ID real substituído em todas as ocorrências de `GTM-XXXXXXX`
- [ ] Domínio `imersao.abeak9adestramento.com.br` apontado para Vercel
- [ ] Vercel Analytics aparece no dashboard
- [ ] Speed Insights aparece no dashboard

### Ações humanas pendentes antes do go-live
- [ ] Substituir `hero-principal.webp` pela foto real
- [ ] Substituir `profissional-retrato.webp` pela foto real
- [ ] Substituir `avatar-links.webp` pela foto real
- [ ] Inserir GTM ID real: substituir `GTM-XXXXXXX` em todos os arquivos
- [ ] Confirmar link WhatsApp no dispositivo físico
- [ ] Configurar conversões no Google Ads: `contato_wpp`, `view_content`, `view_links`
- [ ] Aprovar copy com o cliente antes do go-live
