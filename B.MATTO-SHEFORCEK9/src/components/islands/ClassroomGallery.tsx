import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: '/images/classroom-1.jpg',
    alt: 'Turma SheForceK9 - Momento de aprendizado',
  },
  {
    id: 2,
    src: '/images/classroom-2.jpg',
    alt: 'Alunas com cães de proteção em treinamento',
  },
  {
    id: 3,
    src: '/images/classroom-3.jpg',
    alt: 'Prática de proteção e segurança',
  },
  {
    id: 4,
    src: '/images/classroom-4.jpg',
    alt: 'Certificação e conclusão do curso',
  },
];

export default function ClassroomGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + images.length) % images.length);
  };

  useEffect(() => {
    if (prefersReduced) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [prefersReduced]);

  return (
    <div className="relative w-full h-full">
      {/* Container com aspect ratio 16:9 */}
      <div className="relative w-full aspect-video bg-dark rounded-sm overflow-hidden group">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={
              prefersReduced
                ? { duration: 0 }
                : {
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                  }
            }
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay gradient no topo */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10" />

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 rounded-sm bg-black/40 text-white hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-gold"
          aria-label="Foto anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 rounded-sm bg-black/40 text-white hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-gold"
          aria-label="Próxima foto"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Indicadores (dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 ${
                idx === current
                  ? 'bg-gold w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ir para foto ${idx + 1}`}
              aria-current={idx === current}
            />
          ))}
        </div>
      </div>

      {/* Contador de imagens */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-muted text-sm">
          <span className="font-medium text-text">{String(current + 1).padStart(2, '0')}</span>
          <span className="text-muted"> / {String(images.length).padStart(2, '0')}</span>
        </div>
        <p className="text-muted text-sm">
          {images[current].alt}
        </p>
      </div>
    </div>
  );
}
