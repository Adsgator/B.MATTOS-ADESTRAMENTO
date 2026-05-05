// src/components/MobileMenu.tsx
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

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
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null); // Ref for the menu open button

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      // Restore focus to the trigger button when menu closes
      triggerButtonRef.current?.focus();
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;

      const overlay = overlayRef.current;
      if (!overlay) return;

      const focusable = Array.from(
        overlay.querySelectorAll('a[href], button:not([disabled])')
      ) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(e.target as Node) &&
        triggerButtonRef.current &&
        !triggerButtonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside); // Add click outside listener
    setTimeout(() => closeButtonRef.current?.focus(), 50); // Focus close button on open

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside); // Clean up
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const overlayContent = (
    <div
      id="mobile-menu-overlay"
      ref={overlayRef}
      className={`
        fixed inset-0 z-[110] bg-foreground flex flex-col p-8 border-l-8 border-accent
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}
      `}
    >
      <button
        ref={closeButtonRef}
        onClick={() => setIsOpen(false)}
        className="self-end w-12 h-12 flex items-center justify-center text-white border-2 border-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <nav className="mt-16 flex flex-col gap-8">
        <ul className="flex flex-col gap-6">
          {links.map((link, i) => (
            <li
              key={link.href}
              className={`
                transition-all duration-300
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
              `}
              style={{ transitionDelay: `${isOpen ? i * 0.1 : 0}s` }} // Delay for opening, no delay for closing
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-h1 leading-none text-white hover:text-accent transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            </li>
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
    </div>
  );

  return (
    <div>
      <button
        ref={triggerButtonRef} // Assign ref to the trigger button
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen(true)}
        className="xl:hidden flex flex-col justify-center items-center w-11 h-11 gap-2 text-foreground focus:outline-none"
      >
        <span className="w-8 h-1 bg-current" />
        <span className="w-8 h-1 bg-current" />
        <span className="w-8 h-1 bg-current" />
      </button>

      {/* Overlay do menu mobile renderizado no body para evitar conflitos de z-index e transform do header */}
      {mounted ? createPortal(overlayContent, document.body) : null}
    </div>
  );
}
