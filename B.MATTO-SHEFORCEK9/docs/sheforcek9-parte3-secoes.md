# SheForceK9 — Documento de Implementação
## PARTE 3 — Seções da Landing Page
### `Hero`, `Serviço`, `Diferenciais`, `Como Funciona`, `Preços`, `FAQ`, `Instagram`, `CTA Final`, `index.astro`

---

## ARQUIVO: `src/sections/Hero.astro`

```astro
---
import Button from '../components/global/Button.astro';

const whatsappHref = 'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.';
---

<!-- Hero full-bleed — fundo escuro com textura, conteúdo 2 colunas no desktop -->
<section
  id="hero-section"
  class="
    relative min-h-screen
    bg-dark overflow-hidden
    flex items-center
  "
  aria-label="Apresentação principal"
>

  <!-- Textura de fundo (grain visual sutil) -->
  <div
    aria-hidden="true"
    class="absolute inset-0 opacity-[0.04] pointer-events-none"
    style="background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\"); background-size: 200px;"
  ></div>

  <!-- Acento laranja — linha vertical desktop -->
  <div
    aria-hidden="true"
    class="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-primary"
  ></div>

  <!-- Container interno -->
  <div class="container-content relative z-10 w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
    <div class="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">

      <!-- Coluna texto -->
      <div>

        <!-- Label -->
        <p class="section-label mb-6" id="hero-label">
          She ForceK9 · São José dos Campos / SP
        </p>

        <!-- H1 -->
        <h1
          class="font-display text-display-2xl text-white leading-none mb-8"
          id="hero-title"
        >
          Aprenda a andar na rua sem medo com um cão de proteção ao seu lado
        </h1>

        <!-- Subtítulo -->
        <p
          class="font-sans text-body-lg text-white/70 leading-relaxed mb-10 max-w-xl"
          id="hero-subtitle"
        >
          O She ForceK9 é o único curso presencial do Brasil criado para mulheres que querem ter segurança real com cães de guarda e proteção — sem precisar ter experiência, sem precisar ter raça específica e dentro da lei. Próximas turmas: 09, 10, 11 e 12 de julho em São José dos Campos/SP.
        </p>

        <!-- Cards de micro-informação (estilo isomeet ref) — aparecem com stagger -->
        <div class="flex flex-wrap gap-3 mb-10" id="hero-badges">
          {[
            { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: '100% feminino' },
            { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', text: 'Jul 09-12, 2026' },
            { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', text: 'SJC / SP' },
          ].map(({ icon, text }) => (
            <span class="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded px-3 py-1.5 font-sans text-body-sm text-white/80">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d={icon} />
              </svg>
              {text}
            </span>
          ))}
        </div>

        <!-- CTA -->
        <div id="hero-cta">
          <Button
            label="Quero garantir minha vaga"
            href={whatsappHref}
            variant="primary"
            trackingId="hero-cta"
            section="hero"
            size="lg"
          />
        </div>

        <!-- Prova social mínima -->
        <p class="font-sans text-label text-white/40 mt-5 uppercase tracking-wider">
          Vagas limitadas · Turmas pequenas
        </p>
      </div>

      <!-- Coluna imagem -->
      <div class="relative" id="hero-image-wrapper">

        <!-- Placeholder — substituir por <Image /> quando asset chegar -->
        <div
          class="
            relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto
            bg-surface rounded overflow-hidden
            border border-white/10
          "
        >
          <!-- Ao ter o asset real, substituir pelo componente abaixo:
          <Image
            src={import('../assets/images/hero-principal.webp')}
            alt="Beatriz Mattos conduzindo cão de proteção em ambiente urbano"
            width={600}
            height={750}
            loading="eager"
            format="webp"
            class="w-full h-full object-cover"
          />
          -->
          <div class="absolute inset-0 flex items-end p-6">
            <p class="font-sans text-muted text-body-sm text-center w-full">
              [Foto da instrutora com cão de proteção — 600×750px]
            </p>
          </div>

          <!-- Card detalhe flutuante — inspiração isomeet -->
          <div
            class="
              absolute top-6 -right-4 lg:-right-8
              bg-dark/95 backdrop-blur-sm border border-white/15
              rounded px-4 py-3
              font-sans text-body-sm text-white
              flex items-center gap-2
              shadow-card
            "
            id="hero-detail-card-1"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fe5d16" stroke-width="2.5" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Formação dentro da lei
          </div>

          <!-- Card detalhe flutuante 2 -->
          <div
            class="
              absolute bottom-12 -left-4 lg:-left-8
              bg-primary/95 backdrop-blur-sm
              rounded px-4 py-3
              font-sans text-body-sm text-white font-semibold
              flex items-center gap-2
              shadow-button
            "
            id="hero-detail-card-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            Qualquer mulher pode participar
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
    <span class="font-sans text-label text-white uppercase tracking-widest">Scroll</span>
    <div class="w-px h-12 bg-white/30 relative overflow-hidden">
      <div class="absolute top-0 w-full h-4 bg-primary animate-[scroll-line_2s_ease-in-out_infinite]"></div>
    </div>
  </div>
</section>

<style>
  @keyframes scroll-line {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(400%); }
  }
</style>

<script>
  // Animações do Hero com GSAP
  document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl
      .from('#hero-label',    { opacity: 0, y: 20, duration: 0.6 }, 0.2)
      .from('#hero-title',    { opacity: 0, y: 40, duration: 0.8 }, 0.4)
      .from('#hero-subtitle', { opacity: 0, y: 30, duration: 0.7 }, 0.6)
      .from('#hero-badges > *', {
        opacity: 0, y: 15, duration: 0.5, stagger: 0.1
      }, 0.8)
      .from('#hero-cta',      { opacity: 0, y: 20, duration: 0.5 }, 1.0)
      .from('#hero-image-wrapper', { opacity: 0, x: 40, duration: 0.9 }, 0.5)
      .from('#hero-detail-card-1', { opacity: 0, x: 20, duration: 0.5 }, 1.1)
      .from('#hero-detail-card-2', { opacity: 0, x: -20, duration: 0.5 }, 1.2);
  });
</script>
```

---

## ARQUIVO: `src/sections/Servico.astro`

```astro
---
import SectionHeader from '../components/global/SectionHeader.astro';
import Button from '../components/global/Button.astro';

const whatsappHref = 'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.';

const itens = [
  { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', text: 'Quatro dias de imersão presencial em São José dos Campos' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Conteúdo prático com cães de proteção formados e seguros' },
  { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', text: 'Módulo de Psicologia: dinâmicas de escuta para mulheres que já sofreram assédio' },
  { icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3', text: 'Módulo de Direito: uso legal e responsável de cães de proteção no Brasil' },
  { icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z', text: 'Café da manhã, tarde e almoço inclusos' },
  { icon: 'M4 6h16M4 10h16M4 14h16M4 18h16', text: 'Você pode trazer qualquer cão — inclusive para treino de obediência' },
];
---

<section id="servico" class="py-24 lg:py-40 bg-bg" aria-label="O que é o She ForceK9">
  <div class="container-content">

    <SectionHeader
      label="O Serviço"
      title="O que é o She ForceK9?"
      subtitle="É um curso presencial intensivo de quatro dias onde eu ensino mulheres — do zero — a entender, conduzir e conviver com cães de guarda e proteção pessoal em ambiente urbano. Não importa se você nunca treinou um cão na vida. Não importa se seu cachorro é um vira-lata. O curso é para você."
      align="center"
    />

    <!-- Grid de itens -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12" id="servico-grid">
      {itens.map(({ icon, text }, i) => (
        <div
          class="
            gsap-stagger-item
            flex items-start gap-4 p-5
            bg-white border border-surface rounded-card
            transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover
          "
          data-index={i}
        >
          <div class="flex-shrink-0 w-9 h-9 rounded bg-primary/10 flex items-center justify-center mt-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary" aria-hidden="true">
              <path d={icon} />
            </svg>
          </div>
          <p class="font-sans text-body-sm text-text leading-relaxed">{text}</p>
        </div>
      ))}
    </div>

    <!-- CTA -->
    <div class="flex justify-center">
      <Button
        label="Falar sobre o curso"
        href={whatsappHref}
        variant="primary"
        trackingId="servico-cta"
        section="servico"
        size="lg"
      />
    </div>

  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.from('#servico-grid .gsap-stagger-item', {
      scrollTrigger: { trigger: '#servico-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.6, ease: 'power2.out', stagger: { each: 0.1, from: 'start' },
    });
  });
</script>
```

---

## ARQUIVO: `src/sections/Diferenciais.astro`

```astro
---
import SectionHeader from '../components/global/SectionHeader.astro';
import Button from '../components/global/Button.astro';

const whatsappHref = 'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.';

const itens = [
  { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', text: 'Qualquer mulher pode participar — nenhuma experiência prévia é necessária' },
  { icon: 'M4 6h16M4 10h16M4 14h16M4 18h16', text: 'Qualquer cão é bem-vindo — inclusive pets sem histórico de proteção' },
  { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', text: 'Você não aprende só sobre cães — aprende sobre seus direitos e sobre você mesma' },
  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', text: 'Ambiente exclusivamente feminino, sem julgamento, com escuta real' },
  { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', text: 'Didática clara e prática — sem teorias complicadas, sem termos técnicos desnecessários' },
  { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', text: 'Eu não retenho conhecimento: meu valor está em transmitir, não em guardar' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Grupo de mulheres que segue junto — a rede de apoio começa no curso e não termina' },
];
---

<!-- Fundo escuro para alternar com seção anterior -->
<section id="diferenciais" class="py-24 lg:py-40 bg-dark" aria-label="Diferenciais do She ForceK9">
  <div class="container-content">

    <div class="flex justify-center">
      <SectionHeader
        label="Por que é diferente"
        title="Por que o She ForceK9 não é igual a nenhum outro curso que você já viu"
        subtitle="Eu já ocupei todos os papéis dentro desse mercado: fui cliente, atendi a domicílio, tive escola, acompanhei competições, fui mentora e instrutora, e hoje sou competidora e titulada. Isso me dá uma leitura do comportamento canino — e do comportamento humano — que pouquíssimas pessoas têm."
        align="center"
        dark={true}
      />
    </div>

    <!-- Grid de diferenciais + foto lateral em desktop -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-12 items-start">

      <!-- Diferenciais -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="diferenciais-grid">
        {itens.map(({ icon, text }, i) => (
          <div
            class="
              gsap-stagger-item
              flex items-start gap-4 p-5
              bg-dark-lighter border border-white/10 rounded-card
              transition-all duration-200 hover:border-white/20 hover:-translate-y-1
            "
            data-index={i}
          >
            <div class="flex-shrink-0 w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary" aria-hidden="true">
                <path d={icon} />
              </svg>
            </div>
            <p class="font-sans text-body-sm text-white/75 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <!-- Foto da instrutora (retrato) -->
      <div class="relative hidden lg:block" id="diferenciais-foto">
        <div class="w-full aspect-[3/4] bg-dark-lighter rounded-card border border-white/10 overflow-hidden">
          <!-- Asset: profissional-retrato.webp
          <Image
            src={import('../assets/images/profissional-retrato.webp')}
            alt="Beatriz Mattos, instrutora do She ForceK9, posando com cão de proteção"
            width={340}
            height={450}
            loading="lazy"
            format="webp"
            class="w-full h-full object-cover"
          />
          -->
          <div class="absolute inset-0 flex items-end p-5">
            <p class="font-sans text-muted text-body-sm text-center w-full">
              [Retrato da instrutora — 340×450px]
            </p>
          </div>
        </div>

        <!-- Label sobreposto -->
        <div class="absolute -bottom-4 left-4 right-4 bg-primary rounded px-4 py-3">
          <p class="font-sans font-semibold text-white text-body-sm">Beatriz Mattos</p>
          <p class="font-sans text-white/70 text-label uppercase tracking-wider">Instrutora · She ForceK9</p>
        </div>
      </div>

    </div>

    <!-- CTA -->
    <div class="flex justify-center mt-14">
      <Button
        label="Quero fazer parte desse grupo"
        href={whatsappHref}
        variant="primary"
        trackingId="diferenciais-cta"
        section="diferenciais"
        size="lg"
      />
    </div>

  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.from('#diferenciais-grid .gsap-stagger-item', {
      scrollTrigger: { trigger: '#diferenciais-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.6, ease: 'power2.out', stagger: { each: 0.1, from: 'start' },
    });
    gsap.from('#diferenciais-foto', {
      scrollTrigger: { trigger: '#diferenciais-foto', start: 'top 80%', toggleActions: 'play none none none' },
      opacity: 0, x: 40, duration: 0.8, ease: 'power2.out',
    });
  });
</script>
```

---

## ARQUIVO: `src/sections/ComoFunciona.astro`

```astro
---
import SectionHeader from '../components/global/SectionHeader.astro';
import Button from '../components/global/Button.astro';

const whatsappHref = 'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.';

const modulos = [
  {
    grupo: 'Prática Canina',
    cor: 'primary',
    itens: [
      'Análise do comportamento canino aplicada a cães de guarda e proteção',
      'Como criar uma comunicação limpa com o cão em ambiente urbano',
      'Ferramentas e técnicas de condução segura — mesmo sem nunca ter feito isso antes',
      'Diferenciais da condução de cães de proteção versus cães comuns',
      'Figuração e formação: como cães de proteção são desenvolvidos',
      'Como selecionar um cão de proteção — o que observar antes de comprar ou adotar',
    ],
  },
  {
    grupo: 'Direito & Psicologia',
    cor: 'dark',
    itens: [
      'Psicologia: dinâmicas de escuta e suporte para mulheres que já viveram situações de abuso',
      'Direito: o que a lei brasileira diz sobre o uso de cães de proteção e quais são seus limites',
    ],
  },
];
---

<section id="como-funciona" class="py-24 lg:py-40 bg-surface" aria-label="O que você vai aprender">
  <div class="container-content">

    <SectionHeader
      label="Como Funciona"
      title="O que você vai aprender nos quatro dias"
      subtitle="O curso combina prática com cães, teoria aplicada e dinâmicas de grupo. Cada dia tem um propósito claro — e você sai de cada um deles com algo concreto nas mãos."
      align="center"
    />

    <!-- Linha do tempo visual por grupos -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14" id="como-funciona-grid">

      {modulos.map(({ grupo, cor, itens }, gi) => (
        <div class="bg-white border border-surface rounded-card p-8 gsap-fade-up">

          <!-- Cabeçalho do grupo -->
          <div class={`inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded ${cor === 'primary' ? 'bg-primary/10' : 'bg-dark/10'}`}>
            <span class={`font-sans font-semibold text-label uppercase tracking-widest ${cor === 'primary' ? 'text-primary' : 'text-dark'}`}>
              {grupo}
            </span>
          </div>

          <!-- Lista numerada -->
          <ol class="space-y-4">
            {itens.map((item, i) => (
              <li class="flex items-start gap-4">
                <span class={`flex-shrink-0 w-7 h-7 rounded flex items-center justify-center font-display text-sm ${cor === 'primary' ? 'bg-primary text-white' : 'bg-dark text-white'}`}>
                  {gi * 6 + i + 1}
                </span>
                <p class="font-sans text-body-sm text-text leading-relaxed pt-1">{item}</p>
              </li>
            ))}
          </ol>

        </div>
      ))}

    </div>

    <!-- CTA -->
    <div class="flex justify-center">
      <Button
        label="Tenho dúvidas — quero conversar"
        href={whatsappHref}
        variant="primary"
        trackingId="como-funciona-cta"
        section="como-funciona"
        size="lg"
      />
    </div>

  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.from('#como-funciona-grid .gsap-fade-up', {
      scrollTrigger: { trigger: '#como-funciona-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 40, duration: 0.7, ease: 'power2.out', stagger: 0.15,
    });
  });
</script>
```

---

## ARQUIVO: `src/sections/Precos.astro`

```astro
---
import Button from '../components/global/Button.astro';
import SectionHeader from '../components/global/SectionHeader.astro';

const whatsappHref = 'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.';

const incluso = [
  'Café da manhã, lanche da tarde e almoço inclusos nos quatro dias',
  'Conteúdo prático com cães de proteção formados e seguros',
  'Módulo de Psicologia com profissional habilitada',
  'Módulo de Direito: uso legal de cães no Brasil',
  'Acesso ao grupo de mulheres que segue junto após o curso',
  'Você pode trazer qualquer cão — inclusive para treino de obediência',
];
---

<section id="precos" class="py-24 lg:py-40 bg-dark" aria-label="Investimento e próximas datas">
  <div class="container-content">

    <div class="flex justify-center">
      <SectionHeader
        label="Investimento"
        title="Investimento e próximas datas"
        subtitle="O She ForceK9 acontece nos dias 09, 10, 11 e 12 de julho de 2026, em São José dos Campos/SP. As vagas são limitadas por design — o curso precisa ser pequeno para funcionar."
        align="center"
        dark={true}
      />
    </div>

    <!-- Card único de preço -->
    <div
      class="
        max-w-2xl mx-auto
        bg-dark-lighter border border-white/15 rounded-card
        overflow-hidden
      "
      id="preco-card"
    >

      <!-- Topo do card -->
      <div class="bg-primary px-8 py-6">
        <p class="font-sans text-white/80 text-body-sm uppercase tracking-widest mb-1">Valor de investimento</p>
        <p class="font-display text-display-xl text-white leading-none">
          A partir de R$ 1.747,00
        </p>
        <p class="font-sans text-white/70 text-body-sm mt-2">5% de desconto no Pix</p>
      </div>

      <!-- Corpo do card -->
      <div class="px-8 py-8">

        <!-- O que está incluso -->
        <h3 class="font-sans font-semibold text-white text-body-md mb-5 uppercase tracking-wider">
          O que está incluso
        </h3>
        <ul class="space-y-3 mb-8">
          {incluso.map((item) => (
            <li class="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fe5d16" stroke-width="2.5" class="flex-shrink-0 mt-0.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span class="font-sans text-body-sm text-white/75 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <!-- Formas de pagamento -->
        <div class="border-t border-white/10 pt-6 mb-8">
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-2.5">
              <!-- Ícone Pix simplificado -->
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-primary" aria-hidden="true">
                <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z"/>
                <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z"/>
              </svg>
              <span class="font-sans text-white/70 text-body-sm font-medium">Pix — 5% off</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-2.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-white/50" aria-hidden="true">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <span class="font-sans text-white/70 text-body-sm font-medium">Cartão parcelado</span>
            </div>
          </div>
          <p class="font-sans text-label text-white/30 mt-3">
            Parcelamento no cartão de crédito disponível. Juros por conta do cliente.
          </p>
        </div>

        <!-- Urgência + CTA -->
        <div class="bg-primary/10 border border-primary/20 rounded px-5 py-4 mb-6">
          <p class="font-sans text-body-sm text-white/80">
            <strong class="text-primary">Vagas limitadas</strong> — turmas pequenas para garantir atenção individual.
          </p>
        </div>

        <Button
          label="Quero saber como garantir minha vaga"
          href={whatsappHref}
          variant="primary"
          trackingId="precos-cta"
          section="precos"
          size="lg"
          fullWidth={true}
        />

        <!-- Espaço reservado para gateway de pagamento futuro -->
        <!-- NOTA PARA IMPLEMENTAÇÃO: integrar gateway aqui quando plataforma for confirmada -->
        <!-- id="checkout-gateway-placeholder" -->

      </div>
    </div>

  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.from('#preco-card', {
      scrollTrigger: { trigger: '#preco-card', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 40, duration: 0.8, ease: 'power2.out',
    });
  });
</script>
```

---

## ARQUIVO: `src/sections/FAQ.astro`

```astro
---
import SectionHeader from '../components/global/SectionHeader.astro';

const perguntas = [
  {
    pergunta: 'Preciso ter experiência com cães ou adestramento para participar?',
    resposta: 'Não. Muito pelo contrário — o She ForceK9 foi feito para mulheres que não são do meio e não tiveram acesso a esse conhecimento antes. Você começa do zero, com suporte total.',
  },
  {
    pergunta: 'Meu cão precisa ser de raça específica ou já ser treinado para proteção?',
    resposta: 'Não. O curso é completamente inclusivo. Você pode trazer qualquer cão — inclusive seu pet — para treinos de obediência. E durante o curso você vai ter experiência prática com cães de proteção formados e seguros.',
  },
  {
    pergunta: 'E se eu não tiver cão nenhum?',
    resposta: 'Também pode participar. Durante o curso você vai trabalhar com os cães disponíveis e vai aprender como selecionar o cão certo para você — quando estiver pronta para isso.',
  },
  {
    pergunta: 'É seguro trabalhar com cães de proteção sem experiência?',
    resposta: 'Sim — porque você vai estar sob orientação direta durante todo o tempo. Os cães usados nas práticas são formados e acompanhados por profissionais. Segurança é parte do método, não um detalhe.',
  },
  {
    pergunta: 'O que exatamente são os módulos de Direito e Psicologia?',
    resposta: 'No Direito, você aprende o que a lei brasileira permite e o que não permite no uso de cães de proteção — para nunca estar em risco legal. Na Psicologia, são aplicadas dinâmicas de escuta focadas em mulheres que já viveram situações de assédio ou violência. Não é obrigatório ter passado por isso — mas o espaço existe e é seguro.',
  },
  {
    pergunta: 'O curso é só para mulheres?',
    resposta: 'Sim. O ambiente é 100% feminino por escolha — para que todas possam falar, aprender e se sentir à vontade do começo ao fim.',
  },
];
---

<section id="faq" class="py-24 lg:py-40 bg-bg" aria-label="Perguntas frequentes">
  <div class="container-content">

    <SectionHeader
      label="FAQ"
      title="Perguntas que toda mulher faz antes de se inscrever"
      align="center"
    />

    <!-- Accordion -->
    <div class="max-w-2xl mx-auto space-y-3" id="faq-accordion">
      {perguntas.map((item, i) => (
        <div
          class="border border-surface rounded-card overflow-hidden bg-white"
          data-faq-item={i}
        >
          <button
            type="button"
            class="
              w-full flex items-start justify-between gap-4
              px-6 py-5 text-left
              font-sans font-semibold text-body-md text-text
              hover:text-primary transition-colors duration-150
              focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary
            "
            aria-expanded="false"
            aria-controls={`faq-answer-${i}`}
            id={`faq-btn-${i}`}
          >
            <span>{item.pergunta}</span>
            <svg
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="flex-shrink-0 transition-transform duration-300 mt-0.5 faq-icon"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            class="faq-answer overflow-hidden max-h-0 transition-[max-height] duration-300 ease-in-out"
          >
            <div class="px-6 pb-6">
              <p class="font-sans text-body-sm text-muted leading-relaxed">
                {item.resposta}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('[data-faq-item]');

    items.forEach((item) => {
      const btn    = item.querySelector('button');
      const answer = item.querySelector('.faq-answer');
      const icon   = item.querySelector('.faq-icon');
      if (!btn || !answer || !icon) return;

      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Fechar todos
        items.forEach((otherItem) => {
          const otherBtn    = otherItem.querySelector('button');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon   = otherItem.querySelector('.faq-icon');
          if (otherBtn && otherAnswer && otherIcon) {
            otherBtn.setAttribute('aria-expanded', 'false');
            (otherAnswer as HTMLElement).style.maxHeight = '0';
            (otherIcon as SVGElement).style.transform = 'rotate(0deg)';
          }
        });

        // Abrir este (se estava fechado)
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          const content = answer.querySelector('div');
          (answer as HTMLElement).style.maxHeight = content ? content.scrollHeight + 24 + 'px' : '500px';
          (icon as SVGElement).style.transform = 'rotate(180deg)';
        }
      });
    });

    // Animação de entrada
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      gsap.from('#faq-accordion > div', {
        scrollTrigger: { trigger: '#faq-accordion', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 0, y: 20, duration: 0.5, ease: 'power2.out', stagger: 0.08,
      });
    }
  });
</script>
```

---

## ARQUIVO: `src/sections/InstagramSection.astro`

```astro
---
import SectionHeader from '../components/global/SectionHeader.astro';
import InstagramFeed from '../components/islands/InstagramFeed';
---

<section id="instagram" class="py-24 lg:py-40 bg-surface" aria-label="Feed do Instagram">
  <div class="container-content">

    <SectionHeader
      label="No Instagram"
      title="Veja o que acontece na prática"
      subtitle="Sigo de perto no Instagram — tem conteúdo novo toda semana."
      align="center"
    />

    <!-- Island React — client:visible para não bloquear carregamento -->
    <InstagramFeed
      client:visible
      username="abeak9"
      profileUrl="https://www.instagram.com/abeak9"
    />

    <!-- CTA -->
    <div class="flex justify-center mt-10">
      <a
        id="btn-instagram-cta"
        href="https://www.instagram.com/abeak9"
        target="_blank"
        rel="noopener noreferrer"
        data-tracking="click-instagram-ver-mais"
        data-section="instagram"
        class="
          inline-flex items-center gap-2
          border-2 border-dark text-dark
          font-sans font-semibold text-body-md
          px-6 py-3.5 rounded
          hover:bg-dark hover:text-white
          transition-all duration-150 hover:scale-[1.03]
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark
        "
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        Ver mais no @abeak9
      </a>
    </div>

  </div>
</section>
```

---

## ARQUIVO: `src/components/islands/InstagramFeed.tsx`

```tsx
import { useState, useEffect } from 'react';

interface Post {
  id:        string;
  media_url: string;
  permalink: string;
  caption?:  string;
}

interface Props {
  username:   string;
  profileUrl: string;
}

function InstagramFeedContent({ username, profileUrl }: Props) {
  const [posts,   setPosts]   = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  useEffect(() => {
    const token = import.meta.env.INSTAGRAM_TOKEN;
    if (!token) { setError(true); setLoading(false); return; }

    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&limit=6&access_token=${token}`
    )
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data) => { setPosts(data.data || []); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square bg-surface rounded-card animate-pulse" />
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="font-sans text-muted text-body-sm mb-4">
          Veja o conteúdo do curso no Instagram
        </p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            border-2 border-dark text-dark
            font-sans font-semibold text-body-sm
            px-5 py-2.5 rounded
            hover:bg-dark hover:text-white
            transition-all duration-150
          "
        >
          Ver no Instagram →
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={post.caption ? `Post: ${post.caption.slice(0, 60)}...` : 'Ver post no Instagram'}
          className="
            relative aspect-square overflow-hidden rounded-card
            group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
          "
        >
          <img
            src={post.media_url}
            alt={post.caption ? post.caption.slice(0, 100) : `Post do Instagram @${username}`}
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="
            absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            flex items-center justify-center
          ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}

// ErrorBoundary wrapper
export default function InstagramFeed(props: Props) {
  try {
    return <InstagramFeedContent {...props} />;
  } catch {
    return (
      <div className="text-center py-8">
        <a
          href={props.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-primary underline text-body-sm"
        >
          Ver no Instagram →
        </a>
      </div>
    );
  }
}
```

---

## ARQUIVO: `src/sections/CTAFinal.astro`

```astro
---
import Button from '../components/global/Button.astro';

const whatsappHref = 'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.';
---

<!-- CTA Final full-bleed — fundo escuro máximo contraste -->
<section
  id="cta-final"
  class="relative py-28 lg:py-40 bg-dark overflow-hidden"
  aria-label="Garantir vaga no She ForceK9"
>

  <!-- Acento decorativo laranja no canto -->
  <div
    aria-hidden="true"
    class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
  ></div>
  <div
    aria-hidden="true"
    class="absolute bottom-0 left-0 w-48 h-48 bg-primary/8 rounded-full blur-2xl pointer-events-none"
  ></div>

  <div class="container-content relative z-10 text-center max-w-3xl mx-auto" id="cta-final-content">

    <!-- Label -->
    <p class="section-label mb-6">Últimas vagas · Julho 2026</p>

    <!-- Headline -->
    <h2 class="font-display text-display-xl text-white leading-none mb-8">
      As vagas para julho estão abertas — e são poucas
    </h2>

    <!-- Subtítulo -->
    <p class="font-sans text-body-lg text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
      O She ForceK9 não é um curso de massa. As turmas são pequenas de propósito. Se você está lendo isso e quer participar, o melhor momento para falar é agora.
    </p>

    <!-- CTA grande centralizado -->
    <Button
      label="Garantir minha vaga no She ForceK9"
      href={whatsappHref}
      variant="primary"
      trackingId="cta-final"
      section="cta-final"
      size="lg"
    />

    <!-- Microgarantia -->
    <p class="font-sans text-label text-white/30 mt-6 uppercase tracking-widest">
      Resposta rápida · Sem compromisso
    </p>

  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.from('#cta-final-content > *', {
      scrollTrigger: { trigger: '#cta-final', start: 'top 80%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.7, ease: 'power2.out', stagger: 0.12,
    });
  });
</script>
```

---

## ARQUIVO: `src/pages/index.astro`

```astro
---
import Layout from '../components/global/Layout.astro';
import Hero             from '../sections/Hero.astro';
import Servico          from '../sections/Servico.astro';
import Diferenciais     from '../sections/Diferenciais.astro';
import ComoFunciona     from '../sections/ComoFunciona.astro';
import Precos           from '../sections/Precos.astro';
import FAQ              from '../sections/FAQ.astro';
import InstagramSection from '../sections/InstagramSection.astro';
import CTAFinal         from '../sections/CTAFinal.astro';
---

<Layout
  title="Curso de Cão de Proteção para Mulheres | SheForceK9"
  description="Aprenda a ter e conduzir um cão de proteção com segurança e dentro da lei. Curso presencial em São José dos Campos — sem experiência prévia. Qualquer cão participa."
  ogTitle="SheForceK9 — Curso de Cão de Proteção para Mulheres"
  ogDescription="Segurança real nas ruas com um cão ao seu lado. Aprenda a conduzir, selecionar e viver com um cão de proteção — presencial em São José dos Campos, julho/2026."
  canonical="https://sheforcek9.abeak9adestramento.com.br"
>
  <Hero />
  <Servico />
  <Diferenciais />
  <ComoFunciona />
  <Precos />
  <FAQ />
  <InstagramSection />
  <CTAFinal />
</Layout>
```

---

> **Próximo arquivo:** Parte 4 — Integrações + Páginas Adicionais
