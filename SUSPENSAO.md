# Suspensão / Reativação dos sites — Bea K9 (inadimplência)

Mecanismo para tirar **todas as landing pages da cliente** do ar quando o
pagamento atrasa e devolvê-las quando regularizar — sem deletar nada, sem
mudar a arquitetura dos sites.

## Visão geral

Cada landing page é um projeto **estático** (Astro `output: static`) com seu
próprio projeto na Vercel, mas todas vivem neste mesmo repositório git:

- `B.MATTO-SHEFORCEK9`
- `B.MATTOS-IMERSAO`
- `B.MATTOS-LINKS`
- `B.MATTOS-MENTORIA`
- `B.MATTOS-PRESENCIAL`

A suspensão injeta um redirect no `vercel.json` de cada projeto, mandando todo
o tráfego para `/suspenso.html`. Como são 5 projetos, isso é feito de uma vez
pelo script `suspender.mjs` na raiz.

Por que redirect e não middleware/env var: middleware do Astro exige `output:
server`/`hybrid`. Os sites são estáticos, então o redirect nativo da Vercel é
o caminho mais simples e 100% reversível. O redirect é HTTP 307 (temporário),
então **não fica cacheado** no navegador do visitante — ao reativar, volta na
hora.

## Comandos

Atalhos no Claude Code (fazem o script, commit e push de uma vez):

- `/suspender` — suspende todos os sites
- `/reativar` — devolve todos ao ar

Ou, na raiz do repositório, manualmente:

```bash
node suspender.mjs status   # mostra o estado de cada site
node suspender.mjs on        # SUSPENDE os 5 sites
node suspender.mjs off       # REATIVA os 5 sites
```

O script só altera o que precisa: preserva a configuração existente de cada
`vercel.json` (headers, build, etc.) e é idempotente (rodar duas vezes não
causa problema).

## SUSPENDER (cliente passou dos 7 dias de vencimento)

```bash
node suspender.mjs on
git add -A
git commit -m "Suspende sites Bea K9 (inadimplencia)"
git push
```

A Vercel rebuilda cada projeto e em ~1 min os 4 sites caem na página de
suspensão.

## REATIVAR (cliente pagou)

```bash
node suspender.mjs off
git add -A
git commit -m "Reativa sites Bea K9"
git push
```

Os 4 sites voltam ao ar.

---

## Arquivos envolvidos

- `suspender.mjs` (raiz) — liga/desliga a suspensão nos 4 projetos.
- `<projeto>/public/suspenso.html` — página "Site temporariamente
  indisponível", com a logo da marca. Vai para o `dist/` no build.
- `<projeto>/public/logo-suspenso.svg` — logo usada na página de suspensão.
- `<projeto>/vercel.json` — config do projeto; recebe/perde o bloco `redirects`.

## Cuidados (aprendidos em 18/10/2026)

- **Padrão do `source` do redirect:** a Vercel rejeita grupo opcional dentro do
  lookahead (ex.: `suspenso(.html)?/?`) com `invalid-route-source-pattern` e o
  deploy dos projetos falha — o site continua no ar com a versão antiga. Use só a
  lista literal separada por `|`, como está em `suspender.mjs`.
- **Node:** a Vercel descontinuou o Node 20.x. Se algum `package.json` tiver
  `"engines": {"node": "20.x"}`, o deploy falha antes do build. LINKS e MENTORIA
  foram para `24.x`.
- **Sempre confira em produção** depois do push: `curl -I https://<dominio>/` deve
  dar `307` para `/suspenso.html` (no IMERSAO, que usa `cleanUrls`, termina em
  `/suspenso/`). Se o site não caiu, veja o status dos deploys:
  `gh api repos/Adsgator/B.MATTOS-ADESTRAMENTO/commits/<sha>/status`.

## Replicar para um novo cliente / projeto

1. Copie `public/suspenso.html` e `public/logo-suspenso.svg` para o novo
   projeto (troque a logo e o `alt`).
2. Adicione o nome da pasta do projeto ao array `PROJETOS` em `suspender.mjs`.
3. Garanta que o projeto tem `vercel.json` (mesmo que mínimo, `{}` serve) e que
   o *Root Directory* na Vercel aponta para a pasta do projeto.
