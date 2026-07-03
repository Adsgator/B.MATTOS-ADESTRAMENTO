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
      const consent = localStorage.getItem('bmattos_presencial_consent');
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const grantConsent = () => {
    try { localStorage.setItem('bmattos_presencial_consent', 'granted'); } catch {}
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
    try { localStorage.setItem('bmattos_presencial_consent', 'denied'); } catch {}
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
            md:bottom-6 md:left-6 md:right-auto md:max-w-md md:rounded-card md:border
          "
        >
          <p className="font-sans text-body-sm text-bg/80 mb-4 leading-relaxed">
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
                px-4 py-2.5 rounded-pill
                hover:bg-primary-hover transition-colors duration-150
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
              "
            >
              Aceitar
            </button>
            <button
              onClick={denyConsent}
              className="
                flex-1 border border-white/20 text-bg/60 font-sans text-body-sm
                px-4 py-2.5 rounded-pill
                hover:border-white/40 hover:text-bg/80 transition-colors duration-150
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
