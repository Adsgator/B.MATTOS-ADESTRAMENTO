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
