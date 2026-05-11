import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface NavLink {
  label: string;
  href:  string;
}

interface Props {
  links:    NavLink[];
}

export default function MobileMenu({ links }: Props) {
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
              bg-dark
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
