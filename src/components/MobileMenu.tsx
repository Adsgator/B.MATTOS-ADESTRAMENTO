// src/components/MobileMenu.tsx
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsOpen(false); return; }
      if (e.key !== 'Tab') return;
      const overlay = overlayRef.current;
      if (!overlay) return;
      const focusable = Array.from(overlay.querySelectorAll('a[href], button:not([disabled])')) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <button
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen(true)}
        className="xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-2 text-foreground"
      >
        <span className="w-8 h-1 bg-current" />
        <span className="w-8 h-1 bg-current" />
        <span className="w-8 h-1 bg-current" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            ref={overlayRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'circOut' }}
            className="fixed inset-0 z-[60] bg-foreground flex flex-col p-8 border-l-8 border-accent"
          >
            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              className="self-end w-12 h-12 flex items-center justify-center text-white border-2 border-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>

            <nav className="mt-16 flex flex-col gap-8">
              <ul className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display text-[3.5rem] leading-none text-white hover:text-accent transition-colors uppercase tracking-widest"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-8">
              <div className="font-display text-h3 text-white tracking-widest opacity-60">
                (11) 91895-2921
              </div>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center bg-accent text-white font-display text-h2 py-5 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
              >
                {ctaLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
