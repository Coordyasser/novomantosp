# Novo Manto SP — Landing Page de Vendas

Landing page estática para a **Novo Manto SP**, loja de camisas de time no atacado e varejo. Visual dark, esportivo e otimizado para conversão via WhatsApp.

---

## Como usar

Abra o arquivo `index.html` diretamente no navegador — nenhum servidor ou instalação necessária.

---

## Personalização rápida

### 1. Número do WhatsApp

Busque por `5511999999999` em `index.html` e substitua pelo número real (DDD + número, sem espaços ou traços):

```
wa.me/5511999999999  →  wa.me/5511987654321
```

Há 5 ocorrências no `index.html` (hero, produtos, atacado, CTA final e botão lateral).

### 2. Inserir os vídeos reais

**Vídeo 1 — player minimizado no canto (criativo-1.mp4):**

Em `index.html`, localize o bloco `#video-minimizado` e:
1. Remova a `<div class="video-placeholder">...</div>`
2. Descomente a tag `<video autoplay muted loop playsinline>`
3. Coloque o arquivo em `videos/criativo-1.mp4`

**Vídeo 2 — seção Prova Social (criativo-2.mp4):**

Em `index.html`, localize `#prova-social` e:
1. Remova a `<div class="video-placeholder video-placeholder-grande">...</div>`
2. Descomente a tag `<video controls class="video-prova">`
3. Coloque o arquivo em `videos/criativo-2.mp4`
4. Para vídeo vertical (9:16 / Reels/TikTok): adicione a classe `vertical` ao `.video-prova-wrapper`

### 3. Imagens dos produtos

Substitua os placeholders em cada `.produto-card`:

```html
<!-- De: -->
<img src="https://placehold.co/400x400/..." alt="...">

<!-- Para: -->
<img src="images/produto-1.jpg" alt="Camisa Flamengo 2024">
```

Coloque as fotos na pasta `images/`. Tamanho recomendado: **400×400px** (quadrado).

### 4. Banner do hero

Coloque o arquivo `hero-banner.jpg` (ou `.webp`) na pasta `images/`. O CSS já aponta para `../images/hero-banner.jpg`.

### 5. Alterar cores

Edite as variáveis no topo de `css/style.css`:

```css
:root {
  --cor-primaria:  #C8102E;  /* vermelho principal */
  --cor-destaque:  #FFD700;  /* dourado/amarelo */
  --cor-whatsapp:  #25D366;  /* verde WhatsApp */
  --cor-fundo:     #0a0a0a;  /* fundo geral */
  --cor-card:      #141414;  /* fundo dos cards */
}
```

---

## Estrutura de arquivos

```
novomantosp/
├── index.html          ← Página principal (único arquivo HTML)
├── css/
│   └── style.css       ← Todo o visual e responsividade
├── js/
│   └── main.js         ← Toda a interatividade
├── images/
│   ├── hero-banner.jpg ← Banner do hero (inserir manualmente)
│   └── produto-1~6.jpg ← Fotos dos produtos (inserir manualmente)
├── videos/
│   ├── criativo-1.mp4  ← Vídeo PiP minimizado (inserir manualmente)
│   └── criativo-2.mp4  ← Vídeo da seção Prova Social (inserir manualmente)
├── INSTRUCTIONS.md
├── BRIEFING.md
├── TASKS.md
└── README.md
```

---

## Deploy

### Vercel (recomendado)
```bash
npx vercel
```
Ou arraste a pasta no painel do Vercel.

### Netlify
Arraste a pasta `novomantosp/` para [app.netlify.com/drop](https://app.netlify.com/drop).

### GitHub Pages
1. Suba o repositório no GitHub
2. Vá em **Settings → Pages → Deploy from branch → main → / (root)**
3. A URL será `https://seuusuario.github.io/novomantosp/`

---

## Funcionalidades incluídas

- Navbar sticky com efeito glass ao rolar
- Menu hamburguer para mobile com overlay fullscreen
- Vídeo 1 minimizado (PiP) — aparece no canto após 1,5s, com botões expandir/fechar
- Vídeo 2 embutido na seção de prova social com suporte a 16:9 e 9:16
- Botão WhatsApp lateral flutuante — slide-in após 2s, posição adaptada para mobile
- Grid de 6 produtos com imagens e badges
- Seção Atacado com lista de benefícios
- 3 cards de depoimentos escritos com estrelas
- FAQ accordion animado com 5 perguntas
- Animações fade-in-up via Intersection Observer
- Contador animado (0 → 500+) com easing
- 100% estático — zero backend, zero banco de dados, abre direto no navegador

---

Instagram: [@novomantosp11](https://instagram.com/novomantosp11)

© 2025 Novo Manto SP. Todos os direitos reservados.
