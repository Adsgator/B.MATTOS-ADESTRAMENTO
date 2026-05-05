# 📋 IMPLEMENTAÇÃO — B.MATTOS-LINKS (Página de Links)

**Projeto:** `B.MATTOS-ADESTRAMENTO / B.MATTOS-LINKS`  
**Stack:** Astro (static) + Tailwind CSS + React  
**Objetivo:** Substituir o conteúdo atual do projeto por uma **página de links** estilo link-in-bio para Beatriz Mattos, adestradora de cães.

---

## 🎯 VISÃO GERAL DO DESIGN

### Referência Visual
A página segue o modelo de "link in bio" com:
- **Banner hero** no topo (foto de fundo com overlay)
- **Foto de perfil circular** com borda branca centralizada sobre a divisória hero/body
- **Nome + Profissão** abaixo da foto
- **Linha de ícones sociais**
- **Botões de link** empilhados verticalmente (brancos, full-width)

### Paleta de Cores
```
--color-bg:         #8B9E87   (verde-sage, fundo principal)
--color-hero-overlay: rgba(0,0,0,0.25)  (overlay leve sobre banner)
--color-btn-bg:     #FFFFFF
--color-btn-text:   #2A2A2A
--color-btn-hover:  #F3F0EB
--color-name:       #1A1A1A
--color-role:       #3D3D3D
--color-icon:       #2A2A2A
```

### Tipografia
- **Nome:** `font-display` (Playfair Display ou similar — pesado, elegante)
- **Cargo/Profissão:** `font-sans` uppercase, letter-spacing amplo
- **Botões:** `font-sans` medium, sem serifa

### Layout
- Página centralizada, max-width: `430px`
- Mobile-first, sem scroll horizontal
- Banner hero: `240px` de altura
- Avatar: `96px` diâmetro, borda branca `4px`, deslocado `-48px` para cima da divisória
- Botões: `border-radius: 10px`, padding generoso, sombra sutil

---

## 📁 ESTRUTURA DE ARQUIVOS FINAL

O projeto `B.MATTOS-LINKS/` deve ter apenas estes arquivos relevantes:

```
B.MATTOS-LINKS/
├── public/
│   ├── foto-perfil.jpg          ← FOTO DE PERFIL da Beatriz (substituir)
│   ├── banner-hero.jpg          ← FOTO DE FUNDO do banner (substituir)
│   ├── favicon.ico
│   ├── manifest.json            ← manter existente
│   └── robots.txt               ← manter existente
├── src/
│   ├── components/
│   │   └── LinkButton.astro     ← CRIAR (componente de botão de link)
│   ├── layouts/
│   │   └── LinksLayout.astro    ← CRIAR (layout minimalista para links)
│   └── pages/
│       └── index.astro          ← REESCREVER COMPLETAMENTE
├── astro.config.mjs             ← ATUALIZAR (ver seção abaixo)
├── tailwind.config.js           ← ATUALIZAR (ver seção abaixo)
└── package.json                 ← manter existente
```

> **⚠️ DELETAR / IGNORAR** todos os arquivos em `src/sections/`, `src/components/` que não sejam `LinkButton.astro`, e o conteúdo atual de `src/pages/index.astro`.

---

## 📄 ARQUIVOS A CRIAR/MODIFICAR

---

### 1. `astro.config.mjs` — SUBSTITUIR

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://links.abeak9adestramento.com.br', // ajustar ao domínio final
  integrations: [
    tailwind(),
  ],
});
```

> ℹ️ Removemos React e Sitemap pois não são necessários para esta página estática simples.

---

### 2. `tailwind.config.js` — SUBSTITUIR

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#8B9E87',
          dark:    '#6B7E67',
          light:   '#A8BBA4',
        },
        btn: {
          bg:    '#FFFFFF',
          hover: '#F3F0EB',
          text:  '#2A2A2A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        links: '430px',
      },
      height: {
        hero: '240px',
      },
      borderRadius: {
        btn: '10px',
      },
    },
  },
  plugins: [],
};
```

---

### 3. `src/layouts/LinksLayout.astro` — CRIAR

```astro
---
// src/layouts/LinksLayout.astro
export interface Props {
  title?: string;
  description?: string;
}

const {
  title = 'Beatriz Mattos | Adestradora de Cães',
  description = 'Mentoria online de adestramento para donos e profissionais. Método baseado em ciência, resultado real.',
} = Astro.props;
---

<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/foto-perfil.jpg" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700;800&display=swap"
      rel="stylesheet"
    />

    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <title>{title}</title>

    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body { height: 100%; }
      body {
        background-color: #8B9E87;
        font-family: 'DM Sans', system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
    </style>
  </head>
  <body>
    <slot />
  </body>
</html>
```

---

### 4. `src/components/LinkButton.astro` — CRIAR

```astro
---
// src/components/LinkButton.astro
export interface Props {
  label: string;
  href: string;
  newTab?: boolean;
  icon?: string; // emoji ou SVG inline opcional
}

const { label, href, newTab = false, icon } = Astro.props;
---

<a
  href={href}
  target={newTab ? '_blank' : '_self'}
  rel={newTab ? 'noopener noreferrer' : undefined}
  class="link-btn"
>
  {icon && <span class="link-btn-icon" aria-hidden="true">{icon}</span>}
  <span>{label}</span>
</a>

<style>
  .link-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 16px 24px;
    background-color: #FFFFFF;
    color: #2A2A2A;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-decoration: none;
    border-radius: 10px;
    border: none;
    box-shadow: 0 1px 4px rgba(0,0,0,0.10), 0 2px 12px rgba(0,0,0,0.06);
    transition: background-color 0.18s ease, transform 0.15s ease, box-shadow 0.18s ease;
    cursor: pointer;
  }

  .link-btn:hover {
    background-color: #F3F0EB;
    transform: translateY(-1px);
    box-shadow: 0 4px 18px rgba(0,0,0,0.12);
  }

  .link-btn:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  }

  .link-btn-icon {
    font-size: 18px;
    line-height: 1;
  }
</style>
```

---

### 5. `src/pages/index.astro` — REESCREVER COMPLETAMENTE

```astro
---
// src/pages/index.astro
import LinksLayout from '../layouts/LinksLayout.astro';
import LinkButton from '../components/LinkButton.astro';

export const prerender = true;

// ─── DADOS — editar aqui ───────────────────────────────────────────────────
const perfil = {
  nome:      'Beatriz Mattos',
  cargo:     'ADESTRADORA DE CÃES',
  fotoPerfil: '/foto-perfil.jpg',
  bannerHero: '/banner-hero.jpg',
};

const redesSociais = [
  {
    nome: 'Instagram',
    href: 'https://instagram.com/beamattos_adestramento', // ← AJUSTAR URL
    ariaLabel: 'Instagram de Beatriz Mattos',
  },
  {
    nome: 'TikTok',
    href: 'https://tiktok.com/@beamattos', // ← AJUSTAR URL
    ariaLabel: 'TikTok de Beatriz Mattos',
  },
  {
    nome: 'YouTube',
    href: 'https://youtube.com/@beamattos', // ← AJUSTAR URL
    ariaLabel: 'YouTube de Beatriz Mattos',
  },
  {
    nome: 'Facebook',
    href: 'https://facebook.com/beamattos', // ← AJUSTAR URL
    ariaLabel: 'Facebook de Beatriz Mattos',
  },
];

const links = [
  {
    label: 'Mentoria Online de Adestramento',
    href: 'https://mentoria.abeak9adestramento.com.br',
    icon: '🐾',
    newTab: true,
  },
  {
    label: 'Falar no WhatsApp',
    href: 'https://wa.me/5511918952921?text=Oi%20Beatriz%2C%20vi%20seu%20link%20e%20gostaria%20de%20saber%20mais!',
    icon: '💬',
    newTab: true,
  },
  {
    label: 'Ver no Instagram',
    href: 'https://instagram.com/beamattos_adestramento', // ← AJUSTAR URL
    icon: '📸',
    newTab: true,
  },
  {
    label: 'Canal no YouTube',
    href: 'https://youtube.com/@beamattos', // ← AJUSTAR URL
    icon: '▶️',
    newTab: true,
  },
];
// ──────────────────────────────────────────────────────────────────────────
---

<LinksLayout>
  <main class="links-page">

    <!-- ── HERO BANNER ─────────────────────────────────────────── -->
    <div class="hero-banner" role="img" aria-label="Banner de Beatriz Mattos">
      <img
        src={perfil.bannerHero}
        alt=""
        class="hero-banner__img"
        width="430"
        height="240"
        fetchpriority="high"
        decoding="async"
      />
      <div class="hero-banner__overlay" aria-hidden="true"></div>
    </div>

    <!-- ── CARD PRINCIPAL ──────────────────────────────────────── -->
    <div class="profile-card">

      <!-- Avatar (posicionado na divisória) -->
      <div class="avatar-wrapper" aria-hidden="true">
        <img
          src={perfil.fotoPerfil}
          alt={`Foto de ${perfil.nome}`}
          class="avatar"
          width="96"
          height="96"
          loading="eager"
          decoding="async"
        />
      </div>

      <!-- Nome + Cargo -->
      <div class="profile-info">
        <h1 class="profile-name">{perfil.nome}</h1>
        <p class="profile-role">{perfil.cargo}</p>
      </div>

      <!-- Redes Sociais -->
      <nav class="social-icons" aria-label="Redes sociais">
        {redesSociais.map((rede) => (
          <a
            href={rede.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={rede.ariaLabel}
            class="social-icon-link"
          >
            <!-- Ícone: TikTok -->
            {rede.nome === 'TikTok' && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z"/>
              </svg>
            )}
            <!-- Ícone: YouTube -->
            {rede.nome === 'YouTube' && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            )}
            <!-- Ícone: Instagram -->
            {rede.nome === 'Instagram' && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            )}
            <!-- Ícone: Facebook -->
            {rede.nome === 'Facebook' && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            )}
          </a>
        ))}
      </nav>

      <!-- Links -->
      <div class="links-list" role="list">
        {links.map((link) => (
          <div role="listitem">
            <LinkButton
              label={link.label}
              href={link.href}
              newTab={link.newTab}
              icon={link.icon}
            />
          </div>
        ))}
      </div>

      <!-- Rodapé -->
      <footer class="page-footer">
        <p>© {new Date().getFullYear()} Beatriz Mattos · Adestramento</p>
      </footer>

    </div>
  </main>
</LinksLayout>

<style>
  /* ── Layout geral ──────────────────────────────── */
  .links-page {
    min-height: 100vh;
    background-color: #8B9E87;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* ── Hero Banner ───────────────────────────────── */
  .hero-banner {
    position: relative;
    width: 100%;
    max-width: 430px;
    height: 240px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .hero-banner__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  .hero-banner__overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.22);
  }

  /* ── Card Principal ────────────────────────────── */
  .profile-card {
    width: 100%;
    max-width: 430px;
    background-color: #8B9E87;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px 40px;
    flex: 1;
  }

  /* ── Avatar ────────────────────────────────────── */
  .avatar-wrapper {
    margin-top: -48px;
    z-index: 10;
    position: relative;
  }

  .avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #FFFFFF;
    box-shadow: 0 4px 20px rgba(0,0,0,0.20);
    background-color: #d4d4d4;
    display: block;
  }

  /* ── Perfil Info ────────────────────────────────── */
  .profile-info {
    margin-top: 14px;
    text-align: center;
  }

  .profile-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 26px;
    font-weight: 800;
    color: #1A1A1A;
    line-height: 1.1;
    letter-spacing: -0.01em;
    margin-bottom: 4px;
  }

  .profile-role {
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: #3D3D3D;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  /* ── Redes Sociais ──────────────────────────────── */
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 28px;
  }

  .social-icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2A2A2A;
    transition: color 0.18s ease, transform 0.15s ease;
    text-decoration: none;
  }

  .social-icon-link:hover {
    color: #000000;
    transform: scale(1.15);
  }

  .social-icon-link:active {
    transform: scale(0.95);
  }

  /* ── Lista de Links ─────────────────────────────── */
  .links-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* ── Rodapé ─────────────────────────────────────── */
  .page-footer {
    margin-top: 36px;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 11px;
    color: rgba(0,0,0,0.35);
    text-align: center;
  }
</style>
```

---

## 🖼️ IMAGENS NECESSÁRIAS

O Roo Code **não pode gerar imagens**. Você deve fornecer estas duas fotos e colocá-las em `public/`:

| Arquivo | Descrição | Dimensões recomendadas |
|---|---|---|
| `public/foto-perfil.jpg` | Foto de rosto da Beatriz Mattos | Mínimo `200×200px`, quadrada ou circular |
| `public/banner-hero.jpg` | Foto de fundo do banner (pode ser paisagem, ambiente de treino, natureza, cão, etc.) | Mínimo `860×480px`, horizontal |

> Até as fotos serem fornecidas, o projeto deve funcionar com **placeholders** (ver instruções abaixo).

### Placeholders temporários (enquanto sem fotos reais)
Adicionar ao `index.astro` no `<head>` via LinksLayout, ou substituir temporariamente os `src` das imagens por:

```
foto-perfil:  https://placehold.co/200x200/8B9E87/FFF?text=BM
banner-hero:  https://placehold.co/860x480/6B7E67/FFF?text=Beatriz+Mattos
```

---

## 🔗 URLS SOCIAIS — PREENCHER

Localizar no arquivo `src/pages/index.astro` os campos marcados com `← AJUSTAR URL` e substituir com as URLs reais das redes sociais da Beatriz Mattos:

```javascript
const redesSociais = [
  { nome: 'Instagram', href: 'https://instagram.com/SEU_USUARIO_AQUI' },
  { nome: 'TikTok',    href: 'https://tiktok.com/@SEU_USUARIO_AQUI'   },
  { nome: 'YouTube',   href: 'https://youtube.com/@SEU_USUARIO_AQUI'  },
  { nome: 'Facebook',  href: 'https://facebook.com/SEU_USUARIO_AQUI'  },
];
```

> Remover qualquer rede social que a Beatriz **não utilize** (basta deletar o objeto do array).

---

## ⚙️ DEPENDÊNCIAS

Verificar no `package.json` que as seguintes dependências estão presentes. Se não estiverem, instalar:

```bash
npm install @astrojs/tailwind tailwindcss
```

As dependências `@astrojs/react`, `@astrojs/sitemap`, `gsap` **não são necessárias** para esta página e podem ser removidas do `package.json` para reduzir o bundle — mas só fazer isso se não houver risco de quebrar outro projeto dependente.

---

## ✅ CHECKLIST DE VALIDAÇÃO

Após implementar, verificar:

- [ ] `npm run dev` inicia sem erros no terminal
- [ ] Página carrega em `http://localhost:4321`
- [ ] Banner hero exibe a imagem de fundo (ou placeholder)
- [ ] Foto de perfil circular aparece centralizada na divisória banner/body
- [ ] Nome "Beatriz Mattos" legível, estilo serif bold
- [ ] Cargo "ADESTRADORA DE CÃES" em uppercase com tracking
- [ ] 4 ícones sociais aparecem na linha horizontal abaixo do cargo
- [ ] Hover nos ícones sociais: escurece + escala leve
- [ ] 4 botões de link aparecem empilhados, brancos, com ícone emoji à esquerda
- [ ] Hover nos botões: cor levemente creme + elevação sutil
- [ ] Clique em cada botão abre o link correto em nova aba
- [ ] Link do WhatsApp abre corretamente com a mensagem pré-preenchida
- [ ] Link da Mentoria abre `https://mentoria.abeak9adestramento.com.br`
- [ ] Página não tem scroll horizontal em mobile (375px)
- [ ] `npm run build` completa sem erros
- [ ] Fundo da página inteira é o verde-sage `#8B9E87`

---

## 📐 AJUSTES FINOS (OPCIONAIS mas recomendados)

### Animação de entrada suave (CSS puro, sem GSAP)
Adicionar no `<style>` do `index.astro`:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.avatar-wrapper {
  animation: fadeUp 0.5s ease 0.1s both;
}

.profile-info {
  animation: fadeUp 0.5s ease 0.2s both;
}

.social-icons {
  animation: fadeUp 0.5s ease 0.3s both;
}

.links-list {
  animation: fadeUp 0.5s ease 0.4s both;
}
```

### Hover suave no avatar
```css
.avatar:hover {
  transform: scale(1.04);
  transition: transform 0.2s ease;
}
```

---

## 🔧 CONFIGURAÇÃO DO DOMÍNIO (pós-deploy)

Atualizar `astro.config.mjs` com o domínio real da página de links:

```javascript
site: 'https://links.abeak9adestramento.com.br',
// ou:
site: 'https://abeak9adestramento.com.br/links',
```

---

## 📝 RESUMO FINAL PARA O ROO CODE

> **Execute em ordem:**
> 1. Substituir `astro.config.mjs` e `tailwind.config.js` com o conteúdo acima
> 2. Criar `src/layouts/LinksLayout.astro` com o conteúdo acima
> 3. Criar `src/components/LinkButton.astro` com o conteúdo acima
> 4. Substituir `src/pages/index.astro` inteiro com o conteúdo acima
> 5. Deletar os arquivos em `src/sections/` (não são usados)
> 6. Deletar arquivos de componentes não usados em `src/components/` (Button.astro, ContactForm.tsx, CookieBanner.tsx, FeatureCard.astro, GTM.astro, Icon.astro, MobileMenu.tsx, SectionHeader.astro, StickyCTA.astro)
> 7. Adicionar os placeholders de imagem (ou as fotos reais) em `public/`
> 8. Rodar `npm run dev` e validar o checklist
> 9. Preencher as URLs reais das redes sociais
> 10. Rodar `npm run build` para confirmar build limpo
