# CLAUDE.md — SheForceK9

Landing page do curso **She ForceK9** (Guarda e Proteção para Mulheres) da instrutora Beatriz Mattos.

## Stack

- **Astro 4** — gerador de site estático (output: static)
- **React 18** — apenas para islands interativos (MobileMenu, CookieBanner, InstagramFeed)
- **Tailwind CSS 3** — estilização via tokens centralizados em `tailwind.config.js`
- **Framer Motion + GSAP** — animações
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
  components/global/   # Layout, Header, Footer, Button, FeatureCard, SectionHeader, GTM
  components/islands/  # React islands: MobileMenu, CookieBanner, InstagramFeed
  pages/               # index.astro, links.astro, 404.astro, politica, termos
  sections/            # Seções da homepage (Hero, Manifesto, Servico, Diferenciais, etc.)
  styles/global.css    # Tailwind directives + classes utilitárias customizadas
  assets/images/       # Imagens estáticas
docs/                  # Briefing e documentação do projeto
```

## Design System

Todos os tokens estão em `tailwind.config.js`. Nunca usar hex direto no código.

**Cores:**
- `primary` — #ff4d00 (laranja)
- `gold-*` — variantes douradas
- `dark` — #1a1d23
- `bg` — #fbf7f0 (creme)
- `text` — #2d2d2b

**Tipografia:**
- Display: Bebas Neue (títulos grandes)
- Body: DM Sans

**Classes utilitárias (global.css):**
- `.container-content` — largura e padding padrão
- `.section-label` — rótulo de seção
- `.section-title` — título de seção
- `.btn-gold` — botão dourado
- `.glass` — efeito glassmorphism
- `.elegant-line` — linha decorativa

## Regras Absolutas

1. Nunca alterar textos/copy sem instrução explícita
2. Sem cores hex hardcodadas — usar sempre tokens Tailwind
3. Sem `console.log` em produção
4. Credenciais/tokens somente em `.env`
5. HTML semântico — `<button>`, `<a>`, nunca `<div>` clicável
6. `prefers-reduced-motion` em todas as animações
7. `width`, `height`, `alt` em todas as imagens
8. `rel="noopener noreferrer"` em links externos
9. `focus-visible` em todos os elementos interativos
10. Formulários em React: usar event handlers, não `<form>` nativo

## Variáveis de Ambiente

Ver `.env.example`. Principais:
- `GTM_ID` — Google Tag Manager
- `WHATSAPP_NUMBER` / `WHATSAPP_MESSAGE`
- `INSTAGRAM_TOKEN` — Instagram Graph API
- `SITE_URL` — domínio canônico: https://sheforcek9.abeak9adestramento.com.br

## Informações do Produto

- **Curso:** She ForceK9 — Guarda e Proteção para Mulheres
- **Datas:** 9–12 de julho de 2026, São José dos Campos/SP
- **Preço:** a partir de R$ 1.747,00 (inclui refeições)
- **Pagamento:** 5% desconto Pix; parcelamento no cartão com juros
- **Checkout:** aguardando definição de gateway (não configurado ainda)
