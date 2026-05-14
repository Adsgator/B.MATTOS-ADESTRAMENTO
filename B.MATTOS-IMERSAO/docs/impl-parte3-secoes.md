# Documento de Implementação — Parte 3: Seções da Landing Page
## Training Camping · Adsgator · 2026

> Enviar este arquivo **após** as Partes 1 e 2 estarem concluídas e `npm install` executado.
> Criar todos os arquivos na ordem exata listada abaixo.

---

## Ordem de execução

```
1. src/components/islands/FAQAccordion.tsx
2. src/sections/HeroSection.astro
3. src/sections/ServicoSection.astro
4. src/sections/DiferenciaisSection.astro
5. src/sections/ComoFuncionaSection.astro
6. src/sections/InstagramSection.astro
7. src/sections/FAQSection.astro
8. src/sections/CTAFinalSection.astro
9. src/pages/index.astro
```

---

## Arquivo: `src/components/islands/FAQAccordion.tsx`

```tsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      animate={{ rotate: isOpen ? 45 : 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1V15M1 8H15"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <dl className="divide-y divide-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const itemId = `faq-answer-${index}`;

        return (
          <div key={index} className="py-5">
            <dt>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={itemId}
                className="flex w-full items-start justify-between gap-6 text-left group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
              >
                <span className="font-display font-semibold text-base sm:text-lg text-text-main leading-snug group-hover:text-secondary transition-colors duration-150">
                  {item.question}
                </span>
                <span
                  className={`mt-0.5 transition-colors duration-150 ${
                    isOpen ? 'text-secondary' : 'text-text-support'
                  }`}
                >
                  <PlusIcon isOpen={isOpen} />
                </span>
              </button>
            </dt>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.dd
                  id={itemId}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 pb-1 font-sans text-base text-text-support leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </motion.dd>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </dl>
  );
}
```

---

## Arquivo: `src/sections/HeroSection.astro`

```astro
---
import { Image } from 'astro:assets';
import heroImg from '@/assets/images/hero-principal.webp';

const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';
---

<section
  id="hero"
  class="relative min-h-screen bg-primary flex items-center overflow-hidden"
  aria-label="Hero — Training Camping"
  data-section="hero"
>
  <!-- Background image with overlay -->
  <div class="absolute inset-0 z-0">
    <Image
      src={heroImg}
      alt=""
      width={1200}
      height={1400}
      loading="eager"
      format="webp"
      class="w-full h-full object-cover object-center"
      style="opacity: 0.22;"
    />
    <!-- Gradient overlay para legibilidade -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(135deg, rgba(26,29,35,0.97) 0%, rgba(26,29,35,0.80) 55%, rgba(26,29,35,0.60) 100%);"
    ></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 lg:pt-40 lg:pb-32">
    <div class="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

      <!-- Text column -->
      <div class="space-y-8" id="hero-text">

        <span
          class="inline-block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-secondary opacity-0 translate-y-4"
          id="hero-label"
          aria-hidden="true"
        >
          Imersão Presencial · SJC
        </span>

        <h1
          class="font-display font-bold text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.06] tracking-tight text-background opacity-0 translate-y-6"
          id="hero-h1"
        >
          Seu cão é reativo, ansioso ou impossível de passear?
        </h1>

        <p
          class="font-sans text-base sm:text-lg text-background/70 max-w-[540px] leading-relaxed opacity-0 translate-y-4"
          id="hero-subtitle"
        >
          Você não precisa mandar ele embora para ser adestrado enquanto fica sem entender o que
          aconteceu. No Training Camping você fica junto, aprende na prática e sai com uma nova
          forma de lidar com o seu cão de verdade.
        </p>

        <div class="opacity-0 translate-y-4" id="hero-cta">
          <a
            href={WA_LINK}
            id="btn-hero"
            data-tracking="click-whatsapp-hero"
            data-section="hero"
            rel="noopener noreferrer"
            target="_blank"
            class="group inline-flex items-center gap-3 bg-secondary text-background font-sans font-semibold text-base px-8 py-4 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            aria-label="Quero saber como funciona — abre WhatsApp"
          >
            <!-- WhatsApp icon -->
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            Quero saber como funciona
          </a>
        </div>

      </div>

      <!-- Image column (desktop) -->
      <div
        class="hidden lg:block opacity-0 translate-x-8"
        id="hero-image"
        aria-hidden="true"
      >
        <div class="relative rounded overflow-hidden border border-white/[0.08] shadow-2xl" style="height: 580px;">
          <Image
            src={heroImg}
            alt="Beatriz Mattos realizando imersão de treinamento comportamental com cão"
            width={480}
            height={580}
            loading="eager"
            format="webp"
            class="w-full h-full object-cover object-top"
          />
          <!-- Bottom fade -->
          <div
            class="absolute bottom-0 left-0 right-0 h-32"
            style="background: linear-gradient(to top, rgba(26,29,35,0.7) 0%, transparent 100%);"
          ></div>
          <!-- Badge -->
          <div
            class="absolute bottom-6 left-6 right-6 flex items-center gap-3 bg-background/10 backdrop-blur-sm border border-white/10 rounded px-4 py-3"
          >
            <div class="w-2 h-2 rounded-full bg-secondary animate-pulse-soft flex-shrink-0"></div>
            <span class="font-sans text-sm text-background/80 font-medium">
              Imersão presencial de 2 a 4 dias · SJC
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Scroll cue -->
  <div
    class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-0"
    id="hero-scroll-cue"
    aria-hidden="true"
  >
    <span class="font-sans text-[10px] text-background/30 tracking-[0.25em] uppercase">Role</span>
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
      <rect
        x="7"
        y="5"
        width="2"
        height="5"
        rx="1"
        fill="rgba(255,255,255,0.4)"
        class="animate-[scrollDot_2s_ease-in-out_infinite]"
      />
    </svg>
  </div>
</section>

<style>
  @keyframes scrollDot {
    0%   { transform: translateY(0);   opacity: 1;   }
    50%  { transform: translateY(8px); opacity: 0.3; }
    100% { transform: translateY(0);   opacity: 1;   }
  }
</style>

<script>
  import gsap from 'gsap';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const allEls = ['#hero-label', '#hero-h1', '#hero-subtitle', '#hero-cta', '#hero-image', '#hero-scroll-cue'];

  if (prefersReduced) {
    allEls.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      }
    });
  } else {
    // Garantir que os estados iniciais de translate estão aplicados via CSS
    // e então animar com GSAP
    const tl = gsap.timeline({ delay: 0.15 });

    tl.to('#hero-label', {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: 'power2.out',
    })
    .to('#hero-h1', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
    }, '-=0.25')
    .to('#hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: 'power2.out',
    }, '-=0.4')
    .to('#hero-cta', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.35')
    .to('#hero-image', {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.55')
    .to('#hero-scroll-cue', {
      opacity: 1,
      duration: 0.4,
    }, '-=0.1');
  }
</script>
```

---

## Arquivo: `src/sections/ServicoSection.astro`

```astro
---
const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';

const items = [
  'Você participa de cada etapa do treinamento, sem filtro, sem resumo',
  'Eu te ensino como se comunicar com seu cão de um jeito que ele entende',
  'Passeios externos fazem parte, para colocar em prática o que você aprendeu',
  'No final, você sai com um novo manejo, uma nova rotina e confiança para continuar em casa',
];
---

<section
  id="servico"
  class="relative bg-surface overflow-hidden"
  aria-labelledby="servico-titulo"
  data-section="servico"
>
  <!-- Accent line topo -->
  <div class="absolute top-0 left-0 right-0 h-px bg-border"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">

    <!-- Label -->
    <div class="servico-reveal mb-2" aria-hidden="true">
      <span class="inline-block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-secondary">
        O que é o Training Camping
      </span>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

      <!-- Text -->
      <div class="space-y-8">
        <h2
          id="servico-titulo"
          class="servico-reveal font-display font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-text-main leading-[1.1] tracking-tight"
        >
          Você fica junto.<br />Aprende junto.<br />Sai diferente.
        </h2>

        <p class="servico-reveal font-sans text-base sm:text-lg text-text-support leading-relaxed">
          O Training Camping não é um hotelzinho onde você deixa o cão e torce para ele voltar
          diferente. É uma imersão presencial de 2 a 4 dias na Chácara Recanto Feliz, em SJC, onde
          você se hospeda comigo e treina ao lado do seu cão desde o primeiro momento.
        </p>

        <!-- Lista -->
        <ul class="space-y-4" role="list">
          {items.map((item, i) => (
            <li class="servico-item flex items-start gap-4" style={`--i: ${i}`}>
              <span
                class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center mt-0.5"
                aria-hidden="true"
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.667 7L9 1"
                    stroke="#fe5d16"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="font-sans text-base text-text-main leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <!-- CTA -->
        <div class="servico-reveal pt-2">
          <a
            href={WA_LINK}
            id="btn-servico"
            data-tracking="click-whatsapp-servico"
            data-section="servico"
            rel="noopener noreferrer"
            target="_blank"
            class="inline-flex items-center gap-2 bg-primary text-background font-sans font-semibold text-base px-8 py-4 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Quero garantir minha vaga — abre WhatsApp"
          >
            Quero garantir minha vaga
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8H13M9 4l4 4-4 4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Image / Visual -->
      <div class="servico-image-col lg:pt-10" aria-hidden="true">
        <div
          class="relative rounded overflow-hidden border border-border bg-background"
          style="aspect-ratio: 4/5;"
        >
          <!-- Placeholder visual até foto real chegar -->
          <div class="absolute inset-0 bg-surface flex flex-col items-center justify-center gap-4 p-8">
            <div class="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fe5d16" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <span class="font-sans text-xs text-text-support text-center leading-relaxed">
              [Foto da Chácara Recanto Feliz ou dono treinando com cão — 800×1000px]
            </span>
          </div>

          <!-- Floating stat card -->
          <div
            class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] bg-primary text-background rounded px-5 py-4 flex items-center gap-4 shadow-lg"
          >
            <div>
              <p class="font-display font-bold text-2xl text-secondary leading-none">2–4</p>
              <p class="font-sans text-xs text-background/60 mt-0.5">dias de imersão</p>
            </div>
            <div class="w-px h-10 bg-white/10 flex-shrink-0"></div>
            <div>
              <p class="font-display font-bold text-2xl text-background leading-none">100%</p>
              <p class="font-sans text-xs text-background/60 mt-0.5">presencial em SJC</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    // Reveals gerais
    gsap.utils.toArray<HTMLElement>('.servico-reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Itens da lista com stagger
    gsap.from('.servico-item', {
      opacity: 0,
      x: -20,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.servico-item',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // Coluna de imagem
    gsap.from('.servico-image-col', {
      opacity: 0,
      x: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.servico-image-col',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }
</script>
```

---

## Arquivo: `src/sections/DiferenciaisSection.astro`

```astro
---
const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';

const diferenciais = [
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    title: 'Sem reservas de conhecimento',
    description:
      'Você entende o que está sendo feito e por quê, em cada momento.',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
    title: 'Abordagem empática e objetiva',
    description:
      'Sem métodos que geram medo ou estresse desnecessário, e sem ingenuidade sobre o que o cão precisa.',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    title: 'Ambiente controlado e seguro',
    description:
      'A Chácara Recanto Feliz tem estrutura pensada para acolher cão e dono, com espaços de descompressão para os dois.',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>`,
    title: 'Avaliação online de brinde',
    description:
      'Ao reservar sua vaga, você já ganha uma avaliação antes da imersão para entrarmos alinhados.',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    title: 'Foco nos problemas reais',
    description:
      'Reatividade com cães, reatividade com pessoas, puxões na guia, ansiedade de separação e ansiedade generalizada.',
  },
];
---

<section
  id="diferenciais"
  class="bg-primary overflow-hidden"
  aria-labelledby="diferenciais-titulo"
  data-section="diferenciais"
>
  <div class="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">

    <!-- Header -->
    <div class="max-w-3xl mb-16">
      <span class="diferenciais-reveal inline-block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-secondary mb-3">
        Por que funciona
      </span>
      <h2
        id="diferenciais-titulo"
        class="diferenciais-reveal font-display font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-background leading-[1.1] tracking-tight mb-6"
      >
        O problema não é só o seu cão.<br />É a comunicação entre vocês dois.
      </h2>
      <p class="diferenciais-reveal font-sans text-base sm:text-lg text-background/60 leading-relaxed">
        Treinar o cão sem ensinar o dono não resolve. Eu trago você para dentro do processo
        porque é você que vai conviver com ele depois que a imersão acabar.
      </p>
    </div>

    <!-- Cards grid -->
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-14"
      role="list"
    >
      {diferenciais.map((item, i) => (
        <div
          class="diferencial-card group relative bg-white/[0.04] border border-white/[0.07] rounded p-6 hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-200"
          role="listitem"
          style={`--i: ${i}`}
        >
          <div
            class="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary mb-5"
            aria-hidden="true"
            set:html={item.icon}
          />
          <h3 class="font-display font-semibold text-base text-background mb-2 leading-snug">
            {item.title}
          </h3>
          <p class="font-sans text-sm text-background/55 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    <!-- CTA -->
    <div class="diferenciais-reveal flex justify-start">
      <a
        href={WA_LINK}
        id="btn-diferenciais"
        data-tracking="click-whatsapp-diferenciais"
        data-section="diferenciais"
        rel="noopener noreferrer"
        target="_blank"
        class="inline-flex items-center gap-3 bg-secondary text-background font-sans font-semibold text-base px-8 py-4 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        aria-label="Falar pelo WhatsApp — abre WhatsApp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Falar pelo WhatsApp
      </a>
    </div>

  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    gsap.utils.toArray<HTMLElement>('.diferenciais-reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    gsap.from('.diferencial-card', {
      opacity: 0,
      y: 30,
      duration: 0.55,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: '.diferencial-card',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
</script>
```

---

## Arquivo: `src/sections/ComoFuncionaSection.astro`

```astro
---
const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';

const steps = [
  {
    number: '01',
    text: 'Você entra em contato pelo WhatsApp e me conta o principal problema do seu cão. Raça, idade e histórico comportamental já me ajudam a entender o caso antes de conversar.',
  },
  {
    number: '02',
    text: 'Você ganha uma avaliação online de brinde ao reservar a vaga. Assim chegamos alinhados no primeiro dia.',
  },
  {
    number: '03',
    text: 'Você e seu cão se hospedam na Chácara Recanto Feliz por 2 a 4 dias. O ambiente é seguro, acolhedor e projetado para esse tipo de trabalho.',
  },
  {
    number: '04',
    text: 'Você treina junto comigo desde o primeiro momento. Passeios externos fazem parte da imersão para praticar o que foi aprendido.',
  },
  {
    number: '05',
    text: 'Na finalização, reestruturamos o manejo e a rotina que você vai levar para casa. Você sai com clareza do que fazer, não só com um cão diferente.',
  },
];
---

<section
  id="como-funciona"
  class="bg-background overflow-hidden"
  aria-labelledby="como-funciona-titulo"
  data-section="como-funciona"
>
  <!-- Top border -->
  <div class="h-px bg-border"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">

    <!-- Header -->
    <div class="max-w-2xl mb-16">
      <span class="como-reveal inline-block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-secondary mb-3">
        Como funciona
      </span>
      <h2
        id="como-funciona-titulo"
        class="como-reveal font-display font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-text-main leading-[1.1] tracking-tight mb-4"
      >
        Do primeiro contato até você em casa, no controle
      </h2>
      <p class="como-reveal font-sans text-base sm:text-lg text-text-support leading-relaxed">
        O processo é direto. Sem etapas desnecessárias.
      </p>
    </div>

    <!-- Steps -->
    <div class="relative max-w-3xl">
      <!-- Linha conectora vertical (desktop) -->
      <div
        class="absolute left-[1.75rem] top-8 bottom-8 w-px bg-border hidden md:block"
        aria-hidden="true"
      ></div>

      <ol class="space-y-10" role="list">
        {steps.map((step, i) => (
          <li
            class="como-step relative flex gap-6 md:gap-8 items-start"
            style={`--i: ${i}`}
          >
            <!-- Número -->
            <div
              class="flex-shrink-0 w-14 h-14 rounded-full border-2 border-border bg-background flex items-center justify-center relative z-10"
              aria-hidden="true"
            >
              <span class="font-display font-bold text-sm text-secondary">{step.number}</span>
            </div>

            <!-- Texto -->
            <div class="flex-1 pt-3 pb-2">
              <p class="font-sans text-base text-text-main leading-relaxed">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>

    <!-- CTA -->
    <div class="como-reveal mt-16">
      <a
        href={WA_LINK}
        id="btn-como-funciona"
        data-tracking="click-whatsapp-como-funciona"
        data-section="como-funciona"
        rel="noopener noreferrer"
        target="_blank"
        class="inline-flex items-center gap-2 bg-primary text-background font-sans font-semibold text-base px-8 py-4 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label="Quero reservar minha vaga — abre WhatsApp"
      >
        Quero reservar minha vaga
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    gsap.utils.toArray<HTMLElement>('.como-reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    gsap.from('.como-step', {
      opacity: 0,
      x: -24,
      duration: 0.55,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.como-step',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
</script>
```

---

## Arquivo: `src/sections/InstagramSection.astro`

```astro
---
import InstagramFeed from '@/components/islands/InstagramFeed';

const INSTAGRAM_TOKEN = import.meta.env.INSTAGRAM_TOKEN ?? '';
const INSTAGRAM_USERNAME = 'abeak9';
const INSTAGRAM_PROFILE = 'https://www.instagram.com/abeak9';
---

<section
  id="instagram"
  class="bg-surface overflow-hidden"
  aria-labelledby="instagram-titulo"
  data-section="instagram"
>
  <!-- Top border -->
  <div class="h-px bg-border"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">

    <!-- Header -->
    <div class="instagram-reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
      <div class="max-w-xl">
        <span class="inline-block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-secondary mb-3">
          Acompanhe o trabalho
        </span>
        <h2
          id="instagram-titulo"
          class="font-display font-bold text-3xl sm:text-4xl text-text-main leading-[1.1] tracking-tight mb-3"
        >
          Veja como é na prática
        </h2>
        <p class="font-sans text-base text-text-support leading-relaxed">
          No Instagram você encontra registros reais da imersão, dos cães e dos processos de
          treinamento.
        </p>
      </div>

      <a
        href={INSTAGRAM_PROFILE}
        id="btn-instagram"
        data-tracking="click-instagram"
        data-section="instagram"
        rel="noopener noreferrer"
        target="_blank"
        class="flex-shrink-0 inline-flex items-center gap-2 border border-border bg-background text-text-main font-sans font-semibold text-sm px-6 py-3 rounded transition-all duration-150 hover:border-text-support hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary whitespace-nowrap"
        aria-label={`Ver no Instagram @${INSTAGRAM_USERNAME} — abre em nova aba`}
      >
        <!-- Instagram icon -->
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
        Ver no Instagram @{INSTAGRAM_USERNAME}
      </a>
    </div>

    <!-- Feed island -->
    <InstagramFeed
      client:visible
      token={INSTAGRAM_TOKEN}
      username={INSTAGRAM_USERNAME}
      profileUrl={INSTAGRAM_PROFILE}
    />

  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    gsap.from('.instagram-reveal', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.instagram-reveal',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
</script>
```

---

## Arquivo: `src/sections/FAQSection.astro`

```astro
---
import FAQAccordion from '@/components/islands/FAQAccordion';

const faqs = [
  {
    question: 'Meu cão vai ficar sozinho durante a imersão?',
    answer:
      'Não. Você se hospeda comigo na chácara e participa ativamente de todo o treinamento. Não existe fase de "deixar o cão lá" e buscar no final.',
  },
  {
    question: 'Qualquer cão pode participar?',
    answer:
      'Ao reservar a vaga, você já ganha uma avaliação online onde analisamos juntos o caso do seu cão. Para entrar na chácara, o cão precisa estar com vacinação atualizada, vermifugado e com antiparasitário em dia. Se houver alguma condição de saúde, preciso saber com antecedência.',
  },
  {
    question: 'O que acontece depois que voltar para casa?',
    answer:
      'Ao final da imersão você sai com um novo manejo e uma rotina estruturada. Se quiser acompanhamento contínuo, há uma opção de suporte adicional com aulas online quinzenais durante um mês e acompanhamento pelo WhatsApp.',
  },
  {
    question: 'Quanto tempo dura a imersão?',
    answer:
      'De 2 a 4 dias. O tempo é definido de acordo com o caso do seu cão e o que precisamos trabalhar juntos.',
  },
  {
    question: 'Funciona para cães muito agressivos ou com histórico de mordidas?',
    answer:
      'Esse é exatamente o tipo de caso que precisa de avaliação cuidadosa antes. Me conta no WhatsApp o histórico do seu cão, incluindo se há mordidas efetivas, e eu te digo com honestidade se a imersão faz sentido para vocês.',
  },
];
---

<section
  id="faq"
  class="bg-background overflow-hidden"
  aria-labelledby="faq-titulo"
  data-section="faq"
>
  <!-- Top border -->
  <div class="h-px bg-border"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">

    <div class="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[440px_1fr] gap-12 xl:gap-20 items-start">

      <!-- Left: sticky header -->
      <div class="lg:sticky lg:top-28">
        <span class="faq-reveal inline-block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-secondary mb-3">
          Perguntas frequentes
        </span>
        <h2
          id="faq-titulo"
          class="faq-reveal font-display font-bold text-3xl sm:text-4xl lg:text-[2.4rem] text-text-main leading-[1.1] tracking-tight"
        >
          O que você precisa saber antes de entrar em contato
        </h2>
        <!-- Decorative accent -->
        <div class="mt-8 w-12 h-1 bg-secondary rounded-full faq-reveal"></div>
      </div>

      <!-- Right: accordion -->
      <div class="faq-accordion">
        <FAQAccordion client:visible items={faqs} />
      </div>

    </div>
  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    gsap.utils.toArray<HTMLElement>('.faq-reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    gsap.from('.faq-accordion', {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.faq-accordion',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
</script>
```

---

## Arquivo: `src/sections/CTAFinalSection.astro`

```astro
---
const WA_LINK =
  'https://wa.me/5511918952921?text=Oi%2C%20vi%20voc%C3%AA%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20imers%C3%A3o%20Training%20Camping';
---

<section
  id="cta-final"
  class="relative bg-primary overflow-hidden"
  aria-labelledby="cta-final-titulo"
  data-section="cta-final"
>
  <!-- Texture overlay -->
  <div
    class="absolute inset-0 opacity-[0.03]"
    style="background-image: url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");"
    aria-hidden="true"
  ></div>

  <!-- Accent shape -->
  <div
    class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"
    aria-hidden="true"
  ></div>

  <div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 py-28 lg:py-36 text-center">

    <span class="cta-final-reveal inline-block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-secondary mb-6">
      Próximo passo
    </span>

    <h2
      id="cta-final-titulo"
      class="cta-final-reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-background leading-[1.08] tracking-tight mb-6"
    >
      Se você chegou até aqui, o problema do seu cão é real e você quer resolver.
    </h2>

    <p class="cta-final-reveal font-sans text-base sm:text-lg text-background/65 max-w-xl mx-auto leading-relaxed mb-10">
      Me conta o que está acontecendo. Raça, idade e o principal problema já me ajudam a
      entender se o Training Camping é a solução certa para vocês. Sem compromisso, sem pressão.
    </p>

    <div class="cta-final-reveal">
      <a
        href={WA_LINK}
        id="btn-cta-final"
        data-tracking="click-whatsapp-cta-final"
        data-section="cta-final"
        rel="noopener noreferrer"
        target="_blank"
        class="group inline-flex items-center gap-3 bg-background text-primary font-sans font-bold text-base sm:text-lg px-10 py-5 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background w-full sm:w-auto justify-center sm:justify-start"
        aria-label="Falar agora pelo WhatsApp — abre WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Falar agora pelo WhatsApp
      </a>
    </div>

  </div>
</section>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    gsap.from('.cta-final-reveal', {
      opacity: 0,
      y: 30,
      duration: 0.65,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: '#cta-final',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }
</script>
```

---

## Arquivo: `src/pages/index.astro`

```astro
---
import Layout from '@/components/global/Layout.astro';
import HeroSection from '@/sections/HeroSection.astro';
import ServicoSection from '@/sections/ServicoSection.astro';
import DiferenciaisSection from '@/sections/DiferenciaisSection.astro';
import ComoFuncionaSection from '@/sections/ComoFuncionaSection.astro';
import InstagramSection from '@/sections/InstagramSection.astro';
import FAQSection from '@/sections/FAQSection.astro';
import CTAFinalSection from '@/sections/CTAFinalSection.astro';

const seo = {
  title: 'Cão Reativo em SJC? Training Camping Imersão Presencial',
  description:
    'Seu cão puxa, late ou reage? Na imersão Training Camping em SJC você treina junto e sai sabendo lidar com ele. Fale agora pelo WhatsApp.',
  canonical: 'https://imersao.abeak9adestramento.com.br/',
  ogTitle: 'Training Camping Imersão Presencial em SJC',
  ogDescription:
    'Você treina junto com seu cão. Sem reservas de conhecimento. Saindo com uma nova forma de se comunicar com ele. SJC, presencial.',
  ogImage: '/og-image.webp',
};
---

<Layout {...seo}>
  <main id="main-content">
    <HeroSection />
    <ServicoSection />
    <DiferenciaisSection />
    <ComoFuncionaSection />
    <InstagramSection />
    <FAQSection />
    <CTAFinalSection />
  </main>
</Layout>
```

---

## Verificação ao final da Parte 3

```bash
# Verificar estrutura de arquivos
ls -la src/sections/
ls -la src/components/islands/FAQAccordion.tsx
ls -la src/pages/index.astro

# Verificar tipos TypeScript
npx astro check 2>&1

# Build para confirmar zero erros
npm run build

# Dev server para revisar visualmente
npm run dev

# Confirmar que não há HEX hardcoded nos arquivos de seção
grep -rn '#[0-9a-fA-F]\{3,6\}' src/sections/ --include="*.astro" | grep -v "svg\|fill\|stroke" | head -20

# Confirmar que todos os CTAs têm data-tracking
grep -rn 'btn-' src/sections/ | head -20

# Commit
git add -A
git commit -m "feat: seções da landing page — Training Camping"
```
