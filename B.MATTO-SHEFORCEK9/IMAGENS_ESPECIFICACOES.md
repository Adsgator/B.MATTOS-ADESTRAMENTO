# Especificações de Imagens - She ForceK9

## 📐 Dimensões e Formatos

### 1. **Logo (Header & Footer)**
- **Arquivo:** `logo-branca-sheforcek9.svg`
- **Dimensão declarada:** 180 × 50px
- **Tipo:** SVG (vetorial, recomendado)
- **Uso:** 
  - Header: `h-20 lg:h-24` (80px a 96px de altura)
  - Footer: `h-16 sm:h-20 lg:h-24` (64px a 96px de altura)
- **Notas:** Como é SVG, não há perda de qualidade. Mantenha o arquivo vetorial.

---

### 2. **Imagem Principal do Hero**
- **Arquivo:** `hero-principal.png`
- **Dimensão recomendada:** 800 × 1000px (proporção 4:5)
- **Aspecto:** 4:5 (conforme definido: `aspect-[4/5]`)
- **Uso:** Seção Hero, coluna direita
- **Formato:** PNG ou WebP
- **Otimização:**
  - Exportar em WebP para melhor compressão
  - Manter resolução alta (800×1000px)
  - A imagem exibe com `grayscale-[0.2]` no padrão, `grayscale-0` ao hover
  - Certifique-se que é uma foto de qualidade (mulher com cão, confiante)

---

### 3. **Avatar / Página Links**
- **Arquivo:** `avatar-links.webp`
- **Dimensão recomendada:** 96 × 96px (quadrado)
- **Aspecto:** 1:1
- **Uso:** Página de links sociais (página `/links`)
- **Formato:** WebP
- **Notas:** Foto de perfil da Beatriz (headshot quadrado)

---

### 4. **Foto Beatriz Mattos (Seção Diferenciais)**
- **Arquivo:** `beatriz-mattos.png`
- **Dimensão recomendada:** 400 × 533px (proporção 3:4)
- **Aspecto:** 3:4 (conforme definido: `aspect-[3/4]`)
- **Uso:** Seção "Diferenciais", coluna central (sticky top)
- **Formato:** PNG ou WebP
- **Notas:** 
  - Atualmente comentada no código (usando placeholder)
  - Será exibida em card com sombra e border
  - Rosto e parte superior do corpo (portrait profissional)

---

### 5. **OG Image (Social Meta)**
- **Arquivo:** `og-image.webp`
- **Dimensão:** 1200 × 630px
- **Aspecto:** 1.91:1 (padrão de redes sociais)
- **Uso:** Imagem compartilhada em WhatsApp, Facebook, LinkedIn, etc.
- **Formato:** WebP
- **Notas:** 
  - Deve incluir logo, título e cores da marca
  - Texto legível em tamanho pequeno (1200px será redimensionado para ~500px ao compartilhar)
  - Background #1a1d23 (dark) com laranja (#ff4d00)

---

### 6. **Imagens da Galeria de Turmas (ClassroomGallery)**
- **Quantidade:** Múltiplas imagens
- **Dimensão recomendada:** 600 × 600px mínimo (quadrado)
- **Aspecto:** 1:1 (quadrado)
- **Formato:** WebP ou JPG otimizado
- **Uso:** Seção "Galeria", carousel de imagens
- **Notas:**
  - Fotos da turma, cães, atividades práticas
  - Devem ser atrativas e de alta qualidade
  - Componente React com Framer Motion
  - Suporta múltiplas imagens em galeria lightbox

---

### 7. **Assinatura Adsgator (Footer)**
- **Arquivo:** `assinatura-adsgator-fundo-escuro.svg`
- **Dimensão declarada:** 120 × 40px
- **Tipo:** SVG (vetorial)
- **Uso:** Footer, canto inferior direito
- **Exibição:** `h-4 sm:h-5 w-auto object-contain` (16px a 20px de altura)
- **Notas:** Logo da agência, já foi otimizada

---

## 📱 Breakpoints de Responsividade

As imagens se redimensionam conforme:
- **Mobile (<640px):** Proporções mantidas, layout single-column
- **Tablet (640px-1024px):** Transição para multi-column
- **Desktop (>1024px):** Layout completo com imagens maiores

---

## 🎨 Recomendações Gerais

### Formato
- **Logos e ícones:** SVG (vetorial)
- **Fotos:** WebP (melhor compressão) ou JPG (compatibilidade)
- **Fallback:** PNG se necessário

### Compressão
- **WebP:** Usar TinyWebP ou similar
- **JPG:** Qualidade 85-90%
- **PNG:** Usar TinyPNG se necessário

### Alt Text
Todas as imagens devem ter `alt` descritivo:
- Hero: "Mulher confiante caminhando com seu cão de proteção em ambiente urbano"
- Beatriz: "Beatriz Mattos - Instrutora She ForceK9"
- Avatar: "Beatriz Mattos — She ForceK9"

---

## 📋 Checklist de Entrega

- [ ] `logo-branca-sheforcek9.svg` - Logo 180×50px
- [ ] `hero-principal.png` - 800×1000px (4:5)
- [ ] `beatriz-mattos.png` - 400×533px (3:4)
- [ ] `avatar-links.webp` - 96×96px (1:1)
- [ ] `og-image.webp` - 1200×630px (1.91:1)
- [ ] Imagens da galeria (mín. 600×600px, 1:1)
- [ ] `assinatura-adsgator-fundo-escuro.svg` - 120×40px

---

## 🔗 Locais de Uso

| Imagem | Arquivo | Locais |
|--------|---------|--------|
| Logo branca | `logo-branca-sheforcek9.svg` | Header, Footer |
| Hero principal | `hero-principal.png` | Seção Hero (direita) |
| Beatriz (Diferenciais) | `beatriz-mattos.png` | Seção Diferenciais (centro) |
| Avatar | `avatar-links.webp` | Página /links |
| OG Image | `og-image.webp` | Meta tag (compartilhamento social) |
| Galeria | Múltiplas | Seção Galeria de Turmas |
| Assinatura | `assinatura-adsgator-fundo-escuro.svg` | Footer (canto inferior) |
