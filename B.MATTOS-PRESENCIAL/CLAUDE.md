# CLAUDE.md — Bea Mattos Presencial

Landing page do atendimento **presencial** de adestramento e comportamento canino da
Beatriz Mattos, em São José dos Campos/SP. Quinta LP do ecossistema Bea Mattos
(as outras são IMERSAO, MENTORIA, SHEFORCEK9, LINKS) — segue a mesma base técnica
das irmãs, mas com identidade visual própria (ver "Design System" abaixo).

## Stack

- **Astro 4** — gerador de site estático (output: static)
- **React 18** — apenas para islands interativos (MobileMenu, CookieBanner, InstagramFeed)
- **Tailwind CSS 3** — estilização via tokens centralizados em `tailwind.config.js`
- **GSAP + ScrollTrigger + Lenis** — animações e scroll suave
- **Framer Motion** — animações dos islands React (menu mobile, cookie banner)
- **TypeScript** — em components React

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
```

## Estrutura

```
src/
  components/global/   Layout, Header, Footer, Button, SectionHeader, FeatureCard,
                        GTM, StickyCTA
  components/islands/  React islands: MobileMenu, CookieBanner, InstagramFeed
  pages/                index.astro, 404.astro, politica, termos
  sections/             HeroSection, SobreSection, ServicosSection,
                        DiferenciaisSection, PrecosSection, FAQSection,
                        InstagramSection, CTAFinalSection
  styles/global.css     Tailwind directives + classes utilitárias customizadas
  assets/               Imagens e logo (reaproveitados das LPs irmãs — ver abaixo)
```

## Design System

Todos os tokens estão em `tailwind.config.js`. Nunca usar hex direto no código.

**Cores** (paleta terracota — distinta das outras 4 LPs, que usam laranja `#ff4d00`/
`#fe5d16` + preto frio `#1a1d23`):
- `primary` / `gold` — `#C6541F` (terracota queimado)
- `dark` — `#24211D` (quase-preto quente)
- `bg` — `#F6EFE4` (creme pergaminho)
- `surface` — `#EDE1CD`
- `text` — `#2B2621`
- `muted` — `#79695A`

**Tipografia:**
- Display: Fraunces (serifada — identidade acolhedora, sem uppercase agressivo)
- Body: Inter

**Forma:** cantos sempre arredondados (`rounded-card`, `rounded-pill` nos botões),
sombras suaves e difusas — nunca duras ou deslocadas.

**Classes utilitárias (global.css):**
- `.container-content` — largura e padding padrão
- `.section-label` / `.section-title` / `.section-subtitle`
- `.btn-gold` — botão premium com shimmer no hover
- `.glow-orb` — blur radial terracota, motivo recorrente (Hero, CTA Final)
- `.hand-underline` — sublinhado SVG que se desenha via `stroke-dashoffset`
- `.tilt-card` — hover com leve elevação/sombra (Serviços, Diferenciais, Preços)

**Mecânicas de movimento exclusivas desta LP** (não repetidas das irmãs):
- Parallax sutil no retrato do Hero (reage ao `mousemove`)
- Sublinhado desenhado à mão sob a palavra-chave do H1
- Timeline com scroll-scrub na seção Sobre (linha de progresso + reveal em `clip-path`)
- FAQ com animação de altura via Web Animations API sobre `<details>` nativo
- Sticky CTA mobile (mesmo mecanismo estrutural da Mentoria, copy/cor próprias)

## Assets reaproveitados do ecossistema

- Logo (`logo.svg`/`logo-branca.svg`): de `B.MATTOS-MENTORIA` — marca pessoal
  genérica, não vinculada a um curso específico.
- Fotos da Beatriz: de `B.MATTO-SHEFORCEK9` (`beatriz_mattos.webp`,
  `beatriz_mattos_instrutora.webp`) — fotos reais, sem placeholder fake.
- Assinatura Adsgator: de qualquer LP irmã.

## Regras Absolutas

1. Nunca alterar textos/copy sem instrução explícita — a fonte de verdade da copy é
   `../manifesto-beatriz-mattos.md`
2. Sem cores hex hardcodadas — usar sempre tokens Tailwind
3. Sem `console.log` em produção
4. Credenciais/tokens somente em `.env`
5. HTML semântico — `<button>`, `<a>`, nunca `<div>` clicável
6. `prefers-reduced-motion` em todas as animações
7. `width`, `height`, `alt` em todas as imagens
8. `rel="noopener noreferrer"` em links externos
9. `focus-visible` em todos os elementos interativos
10. IDs obrigatórios: Hero com `id="hero-section"`, Footer com `id="footer"`,
    main com `id="main-content"`
11. Sem dark mode — nenhuma das LPs irmãs tem, mantém-se a consistência do ecossistema

## Variáveis de Ambiente

Ver `.env.example`. Principais:
- `GTM_ID` — GTM-W7CBVWFX
- `WHATSAPP_NUMBER` / `WHATSAPP_MESSAGE`
- `INSTAGRAM_TOKEN` — opcional; sem token, o feed cai no fallback estático
- `SITE_URL` — domínio canônico (assumido `presencial.abeak9adestramento.com.br`,
  **confirmar antes do deploy**)

## Pendências conhecidas

- Confirmar subdomínio real de produção antes do deploy na Vercel
- Adicionar este projeto ao array `PROJETOS` de `suspender.mjs` (raiz do repo) quando
  for para produção/cobrança
- CNPJ real nas páginas legais (`politica-de-privacidade.astro`, `termos-de-uso.astro`)
  — hoje marcado como "a confirmar"
- OG image dedicada (hoje usa a foto real da Beatriz como fallback)
