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
            CONTROLE DE COOKIES. <br />
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
