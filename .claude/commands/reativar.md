---
description: Devolve todos os sites da Bea K9 ao ar (cliente pagou) e sobe para a Vercel
---

Reative todos os sites da Bea K9. Execute os passos abaixo em ordem, sem pedir
confirmação (o usuário já autorizou ao rodar este comando):

1. Rode `node suspender.mjs status`. Se todos já estiverem **no ar**, apenas
   avise isso e **pare** — não faça commit nem push.
2. Rode `node suspender.mjs off`.
3. Rode `git add -A && git commit -m "Reativa sites Bea K9"`.
4. Rode `git push`.
5. Confirme com `node suspender.mjs status` e avise que a Vercel vai rebuildar e
   os sites voltam ao ar em ~1 minuto.

Se qualquer passo falhar (ex.: push rejeitado, sem rede), pare e mostre o erro.
