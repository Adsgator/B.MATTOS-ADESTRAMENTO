# SheForceK9 — Documento de Implementação
## PARTE 4 — Integrações + Páginas Adicionais
### `/links`, `/404`, `/politica-de-privacidade`, `/termos-de-uso`, deploy, checklist final

---

## ARQUIVO: `src/pages/links.astro`

```astro
---
// Rastrear view_links via GTM ao carregar
const currentYear = new Date().getFullYear();
const links = [
  {
    label:    'Garantir minha vaga — Julho/2026',
    href:     'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.',
    primary:  true,
    tracking: 'click-links-cta-principal',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  },
  {
    label:    'Conhecer o She ForceK9',
    href:     'https://sheforcek9.abeak9adestramento.com.br',
    primary:  false,
    tracking: 'click-links-site-principal',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  },
  {
    label:    'Instagram @abeak9',
    href:     'https://www.instagram.com/abeak9',
    primary:  false,
    tracking: 'click-links-instagram',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z',
  },
  {
    label:    'TikTok @abeak9',
    href:     'https://www.tiktok.com/@abeak9',
    primary:  false,
    tracking: 'click-links-tiktok',
    icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z',
  },
];
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SheForceK9 — Links | Curso de Proteção para Mulheres</title>
  <meta name="description" content="Siga a SheForceK9 e acompanhe a próxima data do curso em SP." />
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://sheforcek9.abeak9adestramento.com.br/links" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- Google Fonts: Bebas Neue + DM Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

  <!-- GTM -->
  <script is:inline>
    const gtmId = 'GTM-XXXXXXX'; // substituir pelo GTM_ID real
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',gtmId);
  </script>

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
      background-color: #1a1d23;
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 1.5rem;
      -webkit-font-smoothing: antialiased;
    }
    .links-container {
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .links-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2.5rem;
      color: #fff;
      letter-spacing: 0.05em;
      text-decoration: none;
    }
    .links-avatar {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background-color: #252830;
      border: 2px solid rgba(255,255,255,0.1);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.3);
      font-size: 0.75rem;
      text-align: center;
      padding: 0.5rem;
    }
    .links-tagline {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.6);
      text-align: center;
      line-height: 1.5;
    }
    .link-btn {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      padding: 0.875rem 1.25rem;
      border-radius: 0.25rem;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      transition: transform 0.15s ease, opacity 0.15s ease;
      cursor: pointer;
    }
    .link-btn:hover { transform: scale(1.02); }
    .link-btn:focus-visible { outline: 2px solid #fe5d16; outline-offset: 2px; }
    .link-btn.primary { background-color: #fe5d16; color: #fff; }
    .link-btn.secondary { background-color: rgba(255,255,255,0.08); color: rgba(255,255,255,0.85); border: 1px solid rgba(255,255,255,0.12); }
    .link-btn svg { flex-shrink: 0; width: 18px; height: 18px; }
    .links-footer { margin-top: 1.5rem; font-size: 0.7rem; color: rgba(255,255,255,0.2); text-align: center; }

    /* Animações de entrada */
    .links-container > * { opacity: 0; transform: translateY(20px); }
    @media (prefers-reduced-motion: no-preference) {
      .links-container > *:nth-child(1) { animation: fadeUp 0.5s 0.0s ease-out forwards; }
      .links-container > *:nth-child(2) { animation: fadeUp 0.5s 0.08s ease-out forwards; }
      .links-container > *:nth-child(3) { animation: fadeUp 0.5s 0.16s ease-out forwards; }
      .links-container > *:nth-child(4) { animation: fadeUp 0.5s 0.24s ease-out forwards; }
      .links-container > *:nth-child(5) { animation: fadeUp 0.5s 0.32s ease-out forwards; }
      .links-container > *:nth-child(6) { animation: fadeUp 0.5s 0.40s ease-out forwards; }
      .links-container > *:nth-child(7) { animation: fadeUp 0.5s 0.48s ease-out forwards; }
    }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
  </style>
</head>
<body>
  <!-- GTM noscript -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>
  </noscript>

  <main class="links-container">

    <!-- Logo -->
    <a href="https://sheforcek9.abeak9adestramento.com.br" class="links-logo">She ForceK9</a>

    <!-- Avatar circular -->
    <div class="links-avatar" role="img" aria-label="Foto de Beatriz Mattos, instrutora She ForceK9">
      <!-- Substituir pelo <img> quando avatar-links.webp estiver disponível:
      <img src="/src/assets/images/avatar-links.webp" alt="Beatriz Mattos — She ForceK9" width="96" height="96" style="width:100%;height:100%;object-fit:cover;" />
      -->
      Foto
    </div>

    <!-- Tagline -->
    <p class="links-tagline">
      Curso de guarda e proteção para mulheres · São José dos Campos/SP
    </p>

    <!-- Botões de link -->
    {links.map(({ label, href, primary, tracking, icon }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-tracking={tracking}
        data-section="links"
        class={`link-btn ${primary ? 'primary' : 'secondary'}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={icon} />
        </svg>
        {label}
      </a>
    ))}

    <!-- Rodapé mínimo -->
    <p class="links-footer">
      © {currentYear} She ForceK9 — CNPJ 49.081.534/0001-89
    </p>

  </main>

  <!-- Rastrear view_links -->
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'view_links' });
  </script>
</body>
</html>
```

---

## ARQUIVO: `src/pages/404.astro`

```astro
---
const whatsappHref = 'https://wa.me/5511918952921?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais.';
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Página não encontrada | SheForceK9</title>
  <meta name="robots" content="noindex, follow" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'DM Sans', sans-serif;
      background-color: #1a1d23;
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem 1.5rem;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }
    .four-oh-four {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(8rem, 25vw, 18rem);
      line-height: 1;
      color: rgba(255,255,255,0.05);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      user-select: none;
      white-space: nowrap;
    }
    .content {
      position: relative;
      z-index: 1;
      max-width: 480px;
    }
    .label {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #fe5d16;
      margin-bottom: 1rem;
    }
    h1 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(2rem, 6vw, 3.5rem);
      color: #fff;
      line-height: 1;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      color: rgba(255,255,255,0.6);
      line-height: 1.7;
      margin-bottom: 2rem;
    }
    .btns { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background-color: #fe5d16;
      color: #fff;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      font-size: 0.95rem;
      padding: 0.875rem 1.5rem;
      border-radius: 0.25rem;
      text-decoration: none;
      transition: background-color 0.15s ease, transform 0.15s ease;
    }
    .btn-primary:hover { background-color: #e04d0c; transform: scale(1.03); }
    .btn-primary:focus-visible { outline: 2px solid #fe5d16; outline-offset: 2px; }
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid rgba(255,255,255,0.2);
      color: rgba(255,255,255,0.7);
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      font-size: 0.95rem;
      padding: 0.875rem 1.5rem;
      border-radius: 0.25rem;
      text-decoration: none;
      transition: border-color 0.15s ease, color 0.15s ease;
    }
    .btn-secondary:hover { border-color: rgba(255,255,255,0.5); color: #fff; }
    .btn-secondary:focus-visible { outline: 2px solid rgba(255,255,255,0.5); outline-offset: 2px; }
  </style>
</head>
<body>

  <!-- 404 tipográfico massivo como background -->
  <span class="four-oh-four" aria-hidden="true" id="four-oh-four-bg">404</span>

  <main class="content">
    <p class="label">She ForceK9</p>
    <h1>Essa página foi passear com o cão</h1>
    <p>
      Não encontramos o que você estava procurando. Mas você pode voltar para o início ou falar direto com a gente pelo WhatsApp.
    </p>
    <div class="btns">
      <a
        href="/"
        data-tracking="click-404-home"
        data-section="404"
        class="btn-primary"
      >
        Voltar ao início
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-tracking="click-404-whatsapp"
        data-section="404"
        class="btn-secondary"
      >
        Falar no WhatsApp
      </a>
    </div>
  </main>

  <!-- GSAP para animação do 404 float -->
  <script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script is:inline>
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      gsap.to('#four-oh-four-bg', {
        y: -10,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  </script>
</body>
</html>
```

---

## ARQUIVO: `src/pages/politica-de-privacidade.astro`

```astro
---
const currentYear = new Date().getFullYear();
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Política de Privacidade | SheForceK9</title>
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://sheforcek9.abeak9adestramento.com.br/politica-de-privacidade" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'DM Sans', sans-serif;
      background-color: #f9f0df;
      color: #1d1d1c;
      font-size: 1.0625rem;
      line-height: 1.8;
      -webkit-font-smoothing: antialiased;
    }
    .header-legal {
      background-color: #1a1d23;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .header-legal .logo { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: #fff; text-decoration: none; }
    .header-legal .back { font-family: 'DM Sans', sans-serif; font-size: 0.875rem; color: rgba(255,255,255,0.6); text-decoration: none; display: flex; align-items: center; gap: 0.4rem; }
    .header-legal .back:hover { color: #fe5d16; }
    .content { max-width: 720px; margin: 0 auto; padding: 3rem 1.5rem 6rem; }
    h1 { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; color: #1a1d23; margin-bottom: 0.25rem; }
    .updated { font-size: 0.8rem; color: #535353; margin-bottom: 2.5rem; }
    h2 { font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 1.1rem; color: #1a1d23; margin-top: 2rem; margin-bottom: 0.75rem; }
    p, li { color: #535353; margin-bottom: 0.75rem; }
    ul, ol { padding-left: 1.5rem; margin-bottom: 0.75rem; }
    li { margin-bottom: 0.5rem; }
    a { color: #fe5d16; }
    a:hover { text-decoration: underline; }
    strong { color: #1d1d1c; }
  </style>
</head>
<body>

  <header class="header-legal">
    <a href="/" class="logo">She ForceK9</a>
    <a href="/" class="back">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      Voltar ao site
    </a>
  </header>

  <main class="content">
    <h1>Política de Privacidade</h1>
    <p class="updated">Última atualização: {currentYear}</p>

    <p>
      A She ForceK9, operada por Beatriz Mattos (CNPJ 49.081.534/0001-89), com sede em São José dos Campos/SP, respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
    </p>

    <h2>1. Quais dados coletamos</h2>
    <p>Ao navegar neste site ou entrar em contato pelo WhatsApp, podemos coletar:</p>
    <ul>
      <li>Dados de navegação: páginas visitadas, tempo de permanência, cliques (via Google Tag Manager e Google Analytics).</li>
      <li>Dados de contato: nome e número de telefone fornecidos voluntariamente via WhatsApp.</li>
      <li>Preferências de cookies: aceite ou recusa do banner de consentimento.</li>
    </ul>

    <h2>2. Como usamos seus dados</h2>
    <ul>
      <li>Para responder ao seu interesse no curso She ForceK9.</li>
      <li>Para medir o desempenho das nossas campanhas de marketing digital.</li>
      <li>Para melhorar a experiência de navegação no site.</li>
    </ul>

    <h2>3. Base legal</h2>
    <p>O tratamento dos seus dados está baseado no seu consentimento (Art. 7º, I, LGPD) e no legítimo interesse para fins de marketing e melhoria do serviço (Art. 7º, IX, LGPD).</p>

    <h2>4. Compartilhamento</h2>
    <p>Não vendemos, alugamos ou compartilhamos seus dados com terceiros, exceto com prestadores de serviço essenciais à operação do site (Google, Vercel), que operam sob suas próprias políticas de privacidade.</p>

    <h2>5. Cookies</h2>
    <p>Utilizamos cookies para análise de tráfego e mensuração de anúncios. Você pode aceitar ou recusar o uso de cookies através do banner exibido no primeiro acesso. A recusa não impede o uso do site.</p>

    <h2>6. Seus direitos</h2>
    <p>Em conformidade com a LGPD, você tem direito a:</p>
    <ul>
      <li>Confirmar a existência de tratamento dos seus dados.</li>
      <li>Acessar os dados que temos sobre você.</li>
      <li>Solicitar a correção ou exclusão dos seus dados.</li>
      <li>Revogar seu consentimento a qualquer momento.</li>
    </ul>
    <p>Para exercer esses direitos, entre em contato pelo WhatsApp: <a href="https://wa.me/5511918952921" target="_blank" rel="noopener noreferrer">(11) 91895-2921</a>.</p>

    <h2>7. Retenção de dados</h2>
    <p>Os dados são mantidos apenas pelo tempo necessário para cumprir a finalidade da coleta ou conforme exigido por lei.</p>

    <h2>8. Segurança</h2>
    <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição.</p>

    <h2>9. Alterações nesta política</h2>
    <p>Podemos atualizar esta política periodicamente. Recomendamos que você a consulte regularmente. A versão mais recente sempre estará disponível nesta página.</p>

    <h2>10. Contato</h2>
    <p>Dúvidas? Fale conosco pelo WhatsApp: <a href="https://wa.me/5511918952921" target="_blank" rel="noopener noreferrer">(11) 91895-2921</a>.</p>

    <p style="margin-top: 2rem; font-size: 0.8rem; color: #999;">
      © {currentYear} She ForceK9 · CNPJ 49.081.534/0001-89 · São José dos Campos/SP
    </p>
  </main>

</body>
</html>
```

---

## ARQUIVO: `src/pages/termos-de-uso.astro`

```astro
---
const currentYear = new Date().getFullYear();
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Termos de Uso | SheForceK9</title>
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://sheforcek9.abeak9adestramento.com.br/termos-de-uso" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'DM Sans', sans-serif; background-color: #f9f0df; color: #1d1d1c; font-size: 1.0625rem; line-height: 1.8; -webkit-font-smoothing: antialiased; }
    .header-legal { background-color: #1a1d23; padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .header-legal .logo { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: #fff; text-decoration: none; }
    .header-legal .back { font-family: 'DM Sans', sans-serif; font-size: 0.875rem; color: rgba(255,255,255,0.6); text-decoration: none; display: flex; align-items: center; gap: 0.4rem; }
    .header-legal .back:hover { color: #fe5d16; }
    .content { max-width: 720px; margin: 0 auto; padding: 3rem 1.5rem 6rem; }
    h1 { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; color: #1a1d23; margin-bottom: 0.25rem; }
    .updated { font-size: 0.8rem; color: #535353; margin-bottom: 2.5rem; }
    h2 { font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 1.1rem; color: #1a1d23; margin-top: 2rem; margin-bottom: 0.75rem; }
    p, li { color: #535353; margin-bottom: 0.75rem; }
    ul { padding-left: 1.5rem; margin-bottom: 0.75rem; }
    li { margin-bottom: 0.5rem; }
    a { color: #fe5d16; }
  </style>
</head>
<body>
  <header class="header-legal">
    <a href="/" class="logo">She ForceK9</a>
    <a href="/" class="back">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      Voltar ao site
    </a>
  </header>

  <main class="content">
    <h1>Termos de Uso</h1>
    <p class="updated">Última atualização: {currentYear}</p>

    <p>Ao acessar e utilizar o site da She ForceK9, você concorda com os presentes Termos de Uso. Leia com atenção antes de continuar.</p>

    <h2>1. Sobre o site e o curso</h2>
    <p>Este site tem caráter informativo e comercial, destinado à divulgação do curso presencial She ForceK9 — Curso de Guarda e Proteção para Mulheres, realizado em São José dos Campos/SP.</p>

    <h2>2. Limitações do conteúdo</h2>
    <ul>
      <li>O conteúdo deste site é apenas informativo e não substitui orientação jurídica, médica ou profissional de qualquer natureza.</li>
      <li>O módulo de Psicologia do curso tem caráter de suporte e escuta, e não constitui atendimento psicológico, diagnóstico ou tratamento.</li>
      <li>O módulo de Direito é de caráter educativo e não substitui assessoria jurídica.</li>
    </ul>

    <h2>3. Propriedade intelectual</h2>
    <p>Todo o conteúdo deste site — textos, imagens, logotipo, identidade visual — é de propriedade exclusiva da She ForceK9. É proibida a reprodução total ou parcial sem autorização expressa.</p>

    <h2>4. Links externos</h2>
    <p>Este site pode conter links para WhatsApp, Instagram e TikTok. Não somos responsáveis pelo conteúdo ou práticas dessas plataformas externas.</p>

    <h2>5. Responsabilidade</h2>
    <p>A She ForceK9 não se responsabiliza por decisões tomadas com base nas informações publicadas neste site, nem por eventuais danos decorrentes do uso ou impossibilidade de uso do site.</p>

    <h2>6. Alterações</h2>
    <p>Podemos alterar estes termos a qualquer momento. A versão atualizada estará sempre disponível nesta página.</p>

    <h2>7. Legislação aplicável</h2>
    <p>Estes termos são regidos pelas leis brasileiras. Eventuais disputas serão resolvidas no foro da comarca de São José dos Campos/SP.</p>

    <h2>8. Contato</h2>
    <p>Dúvidas: <a href="https://wa.me/5511918952921" target="_blank" rel="noopener noreferrer">(11) 91895-2921</a>.</p>

    <p style="margin-top: 2rem; font-size: 0.8rem; color: #999;">
      © {currentYear} She ForceK9 · CNPJ 49.081.534/0001-89 · São José dos Campos/SP
    </p>
  </main>
</body>
</html>
```

---

## INSTRUÇÕES DE DEPLOY — VERCEL

### 1. Configurar no painel Vercel

```bash
# Build command
astro build

# Output directory
dist

# Install command
npm install

# Node.js version
18.x ou superior
```

### 2. Variáveis de ambiente no Vercel

No painel Vercel → Settings → Environment Variables, adicionar:

| Variável              | Valor Real                                      |
|-----------------------|-------------------------------------------------|
| `GTM_ID`              | ID real do GTM (ex: GTM-XXXXXXX)               |
| `WHATSAPP_NUMBER`     | `5511918952921`                                 |
| `WHATSAPP_MESSAGE`    | `Olá! Vi o site e quero saber mais.`            |
| `INSTAGRAM_TOKEN`     | Token da Graph API do Instagram                 |
| `SITE_URL`            | `https://sheforcek9.abeak9adestramento.com.br`  |

### 3. Configurar domínio customizado

No painel Vercel → Settings → Domains:
1. Adicionar: `sheforcek9.abeak9adestramento.com.br`
2. No DNS do provedor, criar registro CNAME apontando para `cname.vercel-dns.com`

### 4. Deploy automático

```bash
git add .
git commit -m "feat: implementação completa SheForceK9"
git push origin main
# Vercel detecta o push e faz build + deploy automaticamente
```

---

## SISTEMA DE RASTREAMENTO — EVENTOS GTM

Após o deploy, configurar no GTM as seguintes triggers e tags:

| Evento GTM             | Trigger                                    | Tag Google Ads           |
|------------------------|--------------------------------------------|--------------------------|
| `view_content`         | Pageview da landing page principal         | → conversão `view_content` |
| `view_links`           | Pageview de `/links`                       | → conversão `view_links`   |
| `contato_wpp`          | Click em qualquer `data-tracking="click-whatsapp-*"` | → conversão `contato_wpp` |
| `click-404-home`       | Click em botão home da /404               | — (monitorar)             |
| `click-404-whatsapp`   | Click em botão whatsapp da /404           | → conversão `contato_wpp` |

---

## CHECKLIST DE ENTREGA FINAL

### ✅ Fundação
- [ ] git init + .gitignore + commit "init: projeto Astro base"
- [ ] package.json com todas as dependências
- [ ] astro.config.mjs configurado (output: static, site URL, sitemap)
- [ ] tailwind.config.js com todos os tokens — sem HEX hardcoded
- [ ] .env.example documentado — valores reais no .env (nunca no repositório)
- [ ] public/robots.txt criado
- [ ] public/manifest.json criado
- [ ] src/styles/global.css com importação DM Sans e Tailwind
- [ ] Bebas Neue via Google Fonts no Layout.astro

### ✅ Layout e Componentes
- [ ] Layout.astro com GTM (is:inline), Consent Mode v2, Lenis, GSAP CDN, Analytics, SpeedInsights, Schema.org JSON-LD
- [ ] GTM.astro snippet head + body noscript
- [ ] Header.astro sticky com hide/show scroll e backdrop-blur
- [ ] Footer.astro com 3 colunas, aviso legal, CNPJ, ano dinâmico
- [ ] Button.astro com props variant, trackingId, section, size
- [ ] SectionHeader.astro com props label, title, subtitle, align, dark
- [ ] FeatureCard.astro com props icon, title, description, dark
- [ ] MobileMenu.tsx fullscreen overlay AnimatePresence, focus trap, Escape, scroll lock
- [ ] CookieBanner.tsx LGPD + Consent Mode v2
- [ ] InstagramFeed.tsx com ErrorBoundary e fallback

### ✅ Seções
- [ ] Hero.astro full-bleed, H1 correto, cards detalhe flutuantes, animação GSAP timeline
- [ ] Servico.astro grid 3 colunas, stagger GSAP
- [ ] Diferenciais.astro fundo dark, grid 2 colunas + foto lateral desktop
- [ ] ComoFunciona.astro dois grupos (Prática Canina / Direito & Psicologia), lista numerada
- [ ] Precos.astro card único, espaço reservado checkout, selos Pix/cartão, urgência
- [ ] FAQ.astro accordion acessível (aria-expanded, aria-controls, aria-labelledby)
- [ ] InstagramSection.astro island client:visible
- [ ] CTAFinal.astro full-bleed dark, headline grande, CTA centralizado

### ✅ Páginas Adicionais
- [ ] /links acessível via bio do Instagram, rastreamento view_links ativo
- [ ] /404 com tipografia massiva, animação GSAP float, dois botões rastreados
- [ ] /politica-de-privacidade noindex, header com voltar ao site
- [ ] /termos-de-uso noindex, header com voltar ao site
- [ ] index.astro montando todas as seções na ordem correta

### ✅ Botão WhatsApp Flutuante
- [ ] Posição: bottom-6 right-6, z-50
- [ ] IntersectionObserver no #hero-section — invisível durante hero
- [ ] aria-label="Falar pelo WhatsApp"
- [ ] data-tracking="click-whatsapp-flutuante"
- [ ] Link: wa.me correto com mensagem pré-preenchida

### ✅ SEO e Performance
- [ ] <h1> único por página (Hero)
- [ ] Hierarquia h1→h2→h3 sem pular nível
- [ ] <main>, <header>, <footer>, <nav>, <section> com semântica correta
- [ ] Canonical URL em todas as páginas
- [ ] og-image.webp 1200×630px
- [ ] Schema.org JSON-LD no Layout.astro
- [ ] @astrojs/sitemap excluindo /links, /404, /politica, /termos
- [ ] public/robots.txt com Disallow corretos + Sitemap URL
- [ ] Preload hero-principal.webp com fetchpriority="high"
- [ ] Preconnect Google Fonts

### ✅ Acessibilidade
- [ ] WCAG AA — ratio mínimo 4.5:1 texto normal
- [ ] focus-visible em todos os elementos interativos
- [ ] alt descritivo em todas as imagens (alt="" apenas decorativas)
- [ ] aria-label em botões icon-only (WhatsApp FAB, hambúrguer, fechar)
- [ ] rel="noopener noreferrer" em todos os links externos

### ✅ Animações
- [ ] prefers-reduced-motion check em TODOS os blocos GSAP
- [ ] Framer Motion usando useReducedMotion() nas islands
- [ ] Lenis integrado ao GSAP: lenis.on('scroll', ScrollTrigger.update)

### ✅ Código
- [ ] Zero HEX hardcoded — sempre via token Tailwind
- [ ] Zero console.log em produção
- [ ] Zero credenciais no código — sempre via import.meta.env
- [ ] Zero <div> clicável — sempre <button> ou <a>
- [ ] Zero <form> HTML nativo em islands React

### ✅ Antes do Go-Live
- [ ] Build sem erros: `npm run build`
- [ ] Lighthouse Performance ≥ 90 mobile
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Testar 375px — sem overflow horizontal
- [ ] Link WhatsApp testado no celular — mensagem aparece corretamente
- [ ] og-image verificada em opengraph.xyz
- [ ] Schema.org validado em validator.schema.org
- [ ] GTM ID real inserido
- [ ] Assets reais substituindo placeholders (hero-principal.webp, profissional-retrato.webp)
- [ ] Copy aprovada pelo cliente

### ✅ Ações Humanas Obrigatórias (não automatizáveis)
- [ ] Substituir `hero-principal.webp` pela foto real da Beatriz com cão
- [ ] Substituir `profissional-retrato.webp` pela foto de retrato real
- [ ] Substituir `avatar-links.webp` pela foto circular para /links
- [ ] Inserir `favicon.svg` da marca real
- [ ] Inserir GTM ID real: `GTM-XXXXXXX` → valor real no .env
- [ ] Gerar og-image.webp final (1200×630px)
- [ ] Conectar domínio `sheforcek9.abeak9adestramento.com.br` na Vercel
- [ ] Configurar conversões no Google Ads com o gestor de tráfego
- [ ] Obter token Instagram Graph API para feed dinâmico
- [ ] Confirmar link WhatsApp manualmente no dispositivo móvel
- [ ] Aprovar copy com a Beatriz antes do go-live

---

> **Documento de Implementação SheForceK9 — Completo.**
> Partes 1, 2, 3 e 4 prontas para envio ao agente implementador Roo Code / Claude Code.
> Gerado por LandingAI · Adsgator · Para: Beatriz Mattos
