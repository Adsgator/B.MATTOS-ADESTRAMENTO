# Galeria de Turmas — Especificações

## 📐 Dimensões das Imagens

As imagens da galeria devem ter proporção **16:9** (landscape).

### Recomendações:
- **Resolução:** 1920 x 1080px (Full HD) ou superior
- **Otimização:** Máximo 500KB por imagem (JPEG/WebP)
- **Formato:** JPEG ou WebP para melhor compressão

## 📁 Nomes de Arquivo

Salve as 4 fotos exatamente com estes nomes na pasta `public/images/`:

1. `classroom-1.jpg`
2. `classroom-2.jpg`
3. `classroom-3.jpg`
4. `classroom-4.jpg`

## 🎨 Estilo Esperado

A galeria exibe:
- **Carrossel com transição automática** a cada 5 segundos
- **Controles manuais:** setas laterais (visíveis no hover) e dots indicadores na base
- **Overlay gradiente** no topo das imagens
- **Aspecto video:** 16:9, rounded corners mínimos
- **Contador:** mostra "01 / 04" e descrição da foto

## 💡 Dicas

- Use imagens com boa iluminação e composição clara (turmas em ação)
- Certifique-se de que as pessoas estejam visíveis e bem posicionadas
- Evite imagens muito escuras (o overlay degradado é sutil)
- Se possível, ajuste saturação/contraste para combinar com a paleta da marca

## ✅ Checklist

- [ ] Imagem 1: classroom-1.jpg (16:9, ~500KB)
- [ ] Imagem 2: classroom-2.jpg (16:9, ~500KB)
- [ ] Imagem 3: classroom-3.jpg (16:9, ~500KB)
- [ ] Imagem 4: classroom-4.jpg (16:9, ~500KB)
- [ ] Salvas na pasta `public/images/`
- [ ] Testado o carrossel no navegador

**Quando pronto, executa `npm run dev` e acessa a página para visualizar a galeria!**
