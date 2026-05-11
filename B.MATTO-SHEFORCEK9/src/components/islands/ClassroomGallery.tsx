import { useState, useEffect } from 'react';

const images = [
  {
    id: 1,
    src: 'classroom_1.webp',
    alt: 'Turma SheForceK9 - Momento de aprendizado',
  },
  {
    id: 2,
    src: 'classroom_2.webp',
    alt: 'Alunas com cães de proteção em treinamento',
  },
  {
    id: 3,
    src: 'classroom_3.webp',
    alt: 'Prática de proteção e segurança',
  },
  {
    id: 4,
    src: 'classroom_4.webp',
    alt: 'Certificação e conclusão do curso',
  },
  {
    id: 5,
    src: 'classroom_5.webp',
    alt: 'Finalização e celebração da turma',
  },
];

export default function ClassroomGallery() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    const next = (current + 1) % images.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (current - 1 + images.length) % images.length;
    goToSlide(prev);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dragEnd = e.clientX;
    const diff = dragStart - dragEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    setIsDragging(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const dragEnd = e.changedTouches[0].clientX;
    const diff = dragStart - dragEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    setIsDragging(false);
  };

  useEffect(() => {
    if (prefersReduced) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current, prefersReduced]);

  const getImageUrl = (filename: string) => {
    return new URL(`../../assets/images/${filename}`, import.meta.url).href;
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="relative w-full aspect-video bg-dark rounded-sm overflow-hidden group cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Imagens */}
        <div className="relative w-full h-full">
          {images.map((image, idx) => (
            <img
              key={image.id}
              src={getImageUrl(image.src)}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10" />

        {/* Botão anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 rounded-sm bg-black/40 text-white hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-gold disabled:opacity-50"
          aria-label="Foto anterior"
          disabled={isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Botão próximo */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 rounded-sm bg-black/40 text-white hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-gold disabled:opacity-50"
          aria-label="Próxima foto"
          disabled={isTransitioning}
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
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 ${
                idx === current
                  ? 'bg-gold w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ir para foto ${idx + 1}`}
              aria-current={idx === current}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>

      {/* Contador */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-muted text-sm">
          <span className="font-medium text-text">{String(current + 1).padStart(2, '0')}</span>
          <span className="text-muted"> / {String(images.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}
