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
