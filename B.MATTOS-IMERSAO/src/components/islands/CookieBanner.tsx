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
