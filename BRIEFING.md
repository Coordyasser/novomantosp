# 📋 BRIEFING — Novo Manto SP

## Sobre a Marca

| Campo | Informação |
|---|---|
| **Nome** | Novo Manto SP |
| **Nicho** | Camisas de time — atacado e varejo |
| **Localização** | São Paulo, SP |
| **Entrega** | Para todo o Brasil |
| **Diferenciais** | Pronta entrega · Atacado e varejo · Preço e qualidade |
| **Instagram** | @novomantosp11 |
| **WhatsApp** | 55 + DDD + número (substituir pelo número real) |

---

## 🎨 Identidade Visual

### Cores Principais (extraídas do logo)
```css
--cor-primaria:     #C8102E;   /* vermelho vibrante */
--cor-secundaria:   #000000;   /* preto */
--cor-destaque:     #FFD700;   /* dourado/amarelo */
--cor-fundo:        #0a0a0a;   /* preto profundo */
--cor-card:         #141414;
--cor-texto:        #FFFFFF;
--cor-texto-muted:  #aaaaaa;
--cor-whatsapp:     #25D366;
```

### Tipografia
- **Títulos**: `Bebas Neue` (Google Fonts) — impactante, esportivo
- **Corpo**: `Barlow` (Google Fonts) — limpo e legível

### Estilo Geral
- Visual **dark**, vibrante e esportivo
- Energia de torcida, paixão pelo futebol
- Animações sutis de entrada (fade-in, slide-up)

---

## 🎬 Vídeos Criativos (IMPORTANTE)

A landing page usa **2 vídeos** como prova social de que os produtos são reais.
O usuário irá fornecer os arquivos de vídeo — use placeholders por enquanto.

### Vídeo 1 — Hero Minimizado
- Aparece **imediatamente** ao abrir a página, **no canto inferior direito**
- Tamanho inicial: **240px × 135px** (16:9 minimizado), com bordas arredondadas e sombra
- Tem um botão `✕` para fechar/minimizar
- Tem um botão `⛶` para expandir para tamanho maior (400px × 225px)
- Fica sobreposto ao conteúdo (position fixed), **nunca bloqueia** o texto central
- Autoplay muted (sem som por padrão), loop
- Abaixo do player minimizado: pequeno texto `"Veja nossos produtos reais 👆"`
- Arquivo: `videos/criativo-1.mp4` (placeholder: use uma div escura com texto "Vídeo 1 — Criativo")

### Vídeo 2 — Seção Prova Social
- Aparece **dentro da seção de prova social**, embutido na página
- Tamanho: responsivo, máximo 640px de largura, centralizado
- Aspecto 9:16 (vertical, formato Reels/TikTok) OU 16:9 — Claude deve criar suporte para ambos via classe CSS
- Bordas arredondadas, sombra dramática
- Acima do vídeo: título `"VEJA QUEM JÁ RECEBEU O SEU MANTO"` em Bebas Neue
- Abaixo do vídeo: texto de reforço `"Produtos reais, entrega real, clientes reais."` + estrelas ⭐⭐⭐⭐⭐
- Arquivo: `videos/criativo-2.mp4` (placeholder: use uma div escura com texto "Vídeo 2 — Prova Social")
- **Não faz autoplay** — usuário clica para assistir (controls visível)

---

## 📱 Seções da Landing Page

### 1. HEADER / NAVBAR
- Logo da Novo Manto SP (texto estilizado até logo real ser inserido)
- Links de navegação: Produtos · Atacado · Contato
- Sticky (fixo ao rolar)
- **Sem botão de WhatsApp no header** — o botão lateral flutuante substitui

### 2. HERO SECTION (Banner Principal)
- Background: imagem `images/hero-banner.jpg` com overlay escuro gradiente
- Título grande: `"SUAS CAMISAS DE TIME COM PREÇO DE ATACADO"`
- Subtítulo: `"Pronta entrega · Atacado e Varejo · De SP para todo o Brasil"`
- 2 botões CTA:
  - `🟢 PEDIR NO WHATSAPP` → link wa.me
  - `📦 VER PRODUTOS` → âncora para seção produtos
- Badges de confiança: "⭐ +500 clientes" · "🚚 Envio nacional" · "🏆 Qualidade garantida"
- **Vídeo 1 aparece aqui** no canto inferior direito, minimizado e fixo

### 3. DIFERENCIAIS
- 4 cards com ícones SVG ou emoji:
  - 🚚 Pronta Entrega
  - 💰 Preço de Atacado
  - 🏆 Qualidade Garantida
  - 📦 Enviamos para todo o Brasil

### 4. PRODUTOS EM DESTAQUE
- Título da seção: `"NOSSOS PRODUTOS"`
- Grid de 6 cards (3 col desktop / 2 tablet / 1 mobile)
- Cada card tem:
  - Imagem do produto em `aspect-ratio: 1/1` com object-fit cover
  - Nome do produto (ex: "Camisa Flamengo 2024")
  - Badge (ex: "Atacado disponível")
  - **SEM botão individual** em cada card
- Abaixo do grid: 1 botão centralizado grande:
  `💬 QUERO ENCOMENDAR — CHAMAR NO WHATSAPP`

### 5. SEÇÃO ATACADO
- Fundo: gradiente vermelho escuro
- Texto: `"COMPRE NO ATACADO E LUCRE MAIS"`
- Lista de benefícios (ícone + texto)
- Botão: `💬 QUERO COMPRAR NO ATACADO`

### 6. PROVA SOCIAL COM VÍDEO (SEÇÃO NOVA)
- Fundo: preto profundo com textura sutil
- Título: `"VEJA QUEM JÁ RECEBEU O SEU MANTO"` — Bebas Neue, grande
- **Vídeo 2 embutido aqui** (com controls, sem autoplay)
- Abaixo do vídeo: `"Produtos reais, entrega real, clientes reais."` + ⭐⭐⭐⭐⭐
- 3 cards de depoimentos escritos abaixo do vídeo:
  - Nome, cidade, nota ⭐⭐⭐⭐⭐, texto curto

### 7. FAQ
- Accordion interativo, 5 perguntas:
  1. Qual o pedido mínimo para atacado?
  2. Vocês enviam para todo o Brasil?
  3. Qual o prazo de entrega?
  4. As camisas têm garantia de qualidade?
  5. Posso comprar avulso também?

### 8. CTA FINAL
- Fundo escuro com brilho/glow vermelho
- Título: `"PRONTO PARA FAZER SEU PEDIDO?"`
- Subtítulo: `"Nossa equipe responde rápido no WhatsApp"`
- Botão gigante verde: `💬 CHAMAR NO WHATSAPP AGORA`

### 9. FOOTER
- Logo/nome
- Links rápidos
- Instagram: @novomantosp11
- `© 2025 Novo Manto SP. Todos os direitos reservados.`

---

## 💬 Botão WhatsApp Lateral Flutuante (IMPORTANTE)

**Este é o principal CTA de conversão da página.**

- `position: fixed`, lado **direito** da tela, verticalmente **centralizado** (top: 50%, transform: translateY(-50%))
- Formato: **pílula vertical** ou **ícone circular grande** com sombra verde pulsante
- Ícone do WhatsApp (SVG oficial verde) + texto vertical `"FALAR AGORA"` (opcional no desktop, oculto no mobile)
- Ao passar o mouse (hover): expande levemente e exibe tooltip `"Chamar no WhatsApp"`
- Aparece após 2 segundos do carregamento da página (transition suave de slide-in da direita)
- No mobile: fica no **canto inferior direito** (bottom: 20px, right: 16px), ícone circular 56px
- Z-index: 998 (abaixo do vídeo minimizado que fica em 999)
- Link: `https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20camisas!`

---

## 🔗 Links WhatsApp

Formato padrão para todos os links:
```
https://wa.me/55XXXXXXXXXXX?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20camisas!
```
Substituir `XXXXXXXXXXX` pelo número real (DDD + número, sem traços ou espaços).

---

## 📐 Responsividade

- 📱 Mobile (320px–768px) — prioridade máxima
- 💻 Desktop (1024px+)
- 📟 Tablet (768px–1024px)

---

## ⚡ Funcionalidades JavaScript

1. **Menu hamburguer** para mobile
2. **Scroll suave** entre seções
3. **Navbar sticky** com classe `.scrolled` ao rolar > 50px
4. **Animações fade-in-up** via Intersection Observer
5. **FAQ accordion**
6. **Vídeo 1 minimizado** — lógica de abrir, fechar (✕), expandir/recolher
7. **Botão WhatsApp lateral** — slide-in após 2s, fixo e centralizado na tela
8. **Contador animado** nos badges do hero (ex: 0 → 500)
