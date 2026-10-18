---
description: Tira todos os sites da Bea K9 do ar (inadimplência) e sobe para a Vercel
---

Suspenda todos os sites da Bea K9. Execute os passos abaixo em ordem, sem pedir
confirmação (o usuário já autorizou ao rodar este comando):

1. Rode `node suspender.mjs status`. Se todos já estiverem **SUSPENSO**, apenas
   avise isso e **pare** — não faça commit nem push.
2. Rode `node suspender.mjs on`.
3. Rode `git add -A && git commit -m "Suspende sites Bea K9 (inadimplencia)"`.
4. Rode `git push`.
5. Confirme com `node suspender.mjs status` e avise que a Vercel vai rebuildar e
   os sites caem na página de suspensão em ~1 minuto.

Se qualquer passo falhar (ex.: push rejeitado, sem rede), pare e mostre o erro.
