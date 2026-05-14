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
