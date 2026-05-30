# ✅ TASKS — Novo Manto SP Landing Page

Execute cada tarefa em ordem. Não pule etapas.
Leia o BRIEFING.md completamente antes de começar.

---

## TASK 1 — Criar estrutura de pastas e arquivos

Crie a seguinte estrutura:

```
novomantosp/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── .gitkeep
└── videos/
    └── .gitkeep
```

**Critério:** Todos os diretórios e arquivos existem.

---

## TASK 2 — Criar `index.html`

### Meta e Head
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Novo Manto SP — Camisas de time no atacado e varejo. Pronta entrega, enviamos para todo o Brasil.">
  <title>Novo Manto SP | Camisas de Time no Atacado</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
```

### Elementos do Body (em ordem exata):

**1. Botão WhatsApp Lateral Flutuante**
```html
<!-- Aparece após 2s, fixo na lateral direita (desktop) ou canto inferior direito (mobile) -->
<a id="whatsapp-lateral" 
   href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20camisas!"
   target="_blank"
   aria-label="Falar no WhatsApp">
  <!-- SVG do ícone WhatsApp -->
  <svg>...</svg>
  <span class="wpp-label">FALAR AGORA</span>
</a>
```

**2. Vídeo 1 — Player Minimizado Fixo**
```html
<!-- Fixo no canto inferior direito, z-index 999 -->
<div id="video-minimizado" class="video-pip">
  <div class="video-pip-header">
    <span class="video-pip-titulo">🎥 Veja nossos produtos</span>
    <div class="video-pip-controles">
      <button id="btn-expandir-video" title="Expandir">⛶</button>
      <button id="btn-fechar-video" title="Fechar">✕</button>
    </div>
  </div>
  <div class="video-pip-wrapper">
    <!-- Placeholder até vídeo real ser inserido -->
    <div class="video-placeholder">
      <span>📹 Vídeo Criativo 1</span>
      <small>Substitua por: videos/criativo-1.mp4</small>
    </div>
    <!-- Tag de vídeo real (comentada, para o usuário descomentar):
    <video autoplay muted loop playsinline>
      <source src="videos/criativo-1.mp4" type="video/mp4">
    </video>
    -->
  </div>
  <p class="video-pip-legenda">Veja nossos produtos reais 👆</p>
</div>
```

**3. Header**
```html
<header id="header">
  <nav class="container nav-inner">
    <div class="logo">
      <span class="logo-nm">NM</span>
      <span class="logo-texto">NOVO MANTO SP</span>
    </div>
    <ul class="nav-links" id="nav-links">
      <li><a href="#produtos">Produtos</a></li>
      <li><a href="#atacado">Atacado</a></li>
      <li><a href="#prova-social">Depoimentos</a></li>
      <li><a href="#faq">FAQ</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>

<!-- Menu Mobile Overlay -->
<div class="menu-mobile-overlay" id="menu-overlay">
  <button class="menu-fechar" id="menu-fechar">✕</button>
  <ul>
    <li><a href="#produtos">Produtos</a></li>
    <li><a href="#atacado">Atacado</a></li>
    <li><a href="#prova-social">Depoimentos</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
</div>
```

**4. Seção Hero**
```html
<section id="hero">
  <div class="hero-bg"></div> <!-- imagem de fundo via CSS -->
  <div class="hero-overlay"></div>
  <div class="container hero-content">
    <div class="hero-badges">
      <span class="badge">⭐ <span data-count="500">0</span>+ clientes</span>
      <span class="badge">🚚 Envio nacional</span>
      <span class="badge">🏆 Qualidade garantida</span>
    </div>
    <h1 class="hero-titulo">SUAS CAMISAS DE TIME <br><span class="destaque-vermelho">COM PREÇO DE ATACADO</span></h1>
    <p class="hero-subtitulo">Pronta entrega · Atacado e Varejo · De SP para todo o Brasil</p>
    <div class="hero-ctas">
      <a href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20quero%20fazer%20um%20pedido!" 
         target="_blank" class="btn btn-whatsapp">
        <!-- SVG WhatsApp --> 💬 PEDIR NO WHATSAPP
      </a>
      <a href="#produtos" class="btn btn-outline">📦 VER PRODUTOS</a>
    </div>
  </div>
</section>
```

**5. Seção Diferenciais**
```html
<section id="diferenciais" class="section-dark">
  <div class="container">
    <div class="diferenciais-grid">
      <div class="diferencial-card fade-in-up">
        <span class="diferencial-icone">🚚</span>
        <h3>Pronta Entrega</h3>
        <p>Produtos em estoque, enviados imediatamente após confirmação.</p>
      </div>
      <div class="diferencial-card fade-in-up">
        <span class="diferencial-icone">💰</span>
        <h3>Preço de Atacado</h3>
        <p>Melhores preços do mercado para revendedores e compradores em quantidade.</p>
      </div>
      <div class="diferencial-card fade-in-up">
        <span class="diferencial-icone">🏆</span>
        <h3>Qualidade Garantida</h3>
        <p>Camisas selecionadas com rigor para garantir a satisfação do cliente.</p>
      </div>
      <div class="diferencial-card fade-in-up">
        <span class="diferencial-icone">📦</span>
        <h3>Todo o Brasil</h3>
        <p>Enviamos para qualquer estado. Rastreamento incluso no pedido.</p>
      </div>
    </div>
  </div>
</section>
```

**6. Seção Produtos**
```html
<section id="produtos" class="section-darker">
  <div class="container">
    <h2 class="section-titulo fade-in-up">NOSSOS <span class="destaque-vermelho">PRODUTOS</span></h2>
    <p class="section-subtitulo fade-in-up">Camisas dos principais times do Brasil e do mundo</p>
    <div class="produtos-grid">
      <!-- Repetir 6x — variar nome do time -->
      <div class="produto-card fade-in-up">
        <div class="produto-imagem">
          <img src="https://placehold.co/400x400/1a1a1a/ffffff?text=Camisa+Time" 
               alt="Camisa Time" loading="lazy">
          <span class="produto-badge">Atacado disponível</span>
        </div>
        <div class="produto-info">
          <h3>Camisa Flamengo 2024</h3>
        </div>
      </div>
      <!-- ... mais 5 cards com diferentes times -->
    </div>
    <!-- Botão único centralizado abaixo do grid -->
    <div class="produtos-cta fade-in-up">
      <a href="https://wa.me/5511999999999?text=Olá!%20Quero%20ver%20o%20catálogo%20completo%20de%20camisas!"
         target="_blank" class="btn btn-whatsapp btn-grande">
        💬 QUERO ENCOMENDAR — CHAMAR NO WHATSAPP
      </a>
    </div>
  </div>
</section>
```

**7. Seção Atacado**
```html
<section id="atacado" class="section-atacado">
  <div class="container atacado-inner">
    <div class="atacado-texto fade-in-up">
      <h2>COMPRE NO ATACADO<br><span>E LUCRE MAIS</span></h2>
      <p>Seja nosso revendedor e garanta os melhores preços do mercado.</p>
      <a href="https://wa.me/5511999999999?text=Quero%20informações%20sobre%20atacado!"
         target="_blank" class="btn btn-whatsapp">
        💬 QUERO COMPRAR NO ATACADO
      </a>
    </div>
    <div class="atacado-beneficios fade-in-up">
      <ul>
        <li>✅ Descontos progressivos por quantidade</li>
        <li>✅ Variedade de times nacionais e internacionais</li>
        <li>✅ Entrega rápida para todo o Brasil</li>
        <li>✅ Atendimento personalizado</li>
        <li>✅ Produto de qualidade comprovada</li>
      </ul>
    </div>
  </div>
</section>
```

**8. Seção Prova Social com Vídeo 2**
```html
<section id="prova-social" class="section-darker">
  <div class="container">
    <h2 class="section-titulo fade-in-up">VEJA QUEM JÁ RECEBEU <span class="destaque-vermelho">O SEU MANTO</span></h2>
    
    <!-- Vídeo 2 — Criativo embutido, com controls, sem autoplay -->
    <div class="video-prova-wrapper fade-in-up">
      <!-- Placeholder até vídeo real -->
      <div class="video-placeholder video-placeholder-grande">
        <span>📹 Vídeo Criativo 2 — Prova Social</span>
        <small>Substitua por: videos/criativo-2.mp4</small>
        <small>Suporta formato vertical (9:16) ou horizontal (16:9)</small>
      </div>
      <!-- Tag real (comentada):
      <video controls class="video-prova" poster="images/video-2-thumb.jpg">
        <source src="videos/criativo-2.mp4" type="video/mp4">
        Seu navegador não suporta vídeo HTML5.
      </video>
      -->
    </div>
    <p class="video-reforco fade-in-up">Produtos reais, entrega real, clientes reais. ⭐⭐⭐⭐⭐</p>

    <!-- Depoimentos escritos -->
    <div class="depoimentos-grid">
      <div class="depoimento-card fade-in-up">
        <div class="depoimento-estrelas">⭐⭐⭐⭐⭐</div>
        <p>"Recebi minhas camisas em 3 dias! Qualidade incrível e preço justo. Já fiz meu segundo pedido."</p>
        <span class="depoimento-autor">— Carlos M., São Paulo/SP</span>
      </div>
      <div class="depoimento-card fade-in-up">
        <div class="depoimento-estrelas">⭐⭐⭐⭐⭐</div>
        <p>"Comprei 20 camisas para revenda. Tudo certo, bem embalado e com ótima qualidade. Recomendo!"</p>
        <span class="depoimento-autor">— Fernanda L., Belo Horizonte/MG</span>
      </div>
      <div class="depoimento-card fade-in-up">
        <div class="depoimento-estrelas">⭐⭐⭐⭐⭐</div>
        <p>"Atendimento rápido no WhatsApp, produto chegou antes do prazo. Com certeza comprarei mais!"</p>
        <span class="depoimento-autor">— Rafael S., Fortaleza/CE</span>
      </div>
    </div>
  </div>
</section>
```

**9. Seção FAQ**
```html
<section id="faq" class="section-dark">
  <div class="container">
    <h2 class="section-titulo fade-in-up">PERGUNTAS <span class="destaque-vermelho">FREQUENTES</span></h2>
    <div class="faq-lista">
      <div class="faq-item fade-in-up">
        <button class="faq-pergunta">
          Qual o pedido mínimo para atacado? <span class="faq-seta">▼</span>
        </button>
        <div class="faq-resposta">
          <p>O pedido mínimo para atacado é a partir de 5 unidades. Quanto maior a quantidade, melhor o preço. Entre em contato para receber nossa tabela de preços!</p>
        </div>
      </div>
      <div class="faq-item fade-in-up">
        <button class="faq-pergunta">
          Vocês enviam para todo o Brasil? <span class="faq-seta">▼</span>
        </button>
        <div class="faq-resposta">
          <p>Sim! Enviamos para todos os estados do Brasil. O frete é calculado de acordo com o destino e os Correios ou transportadora são utilizados dependendo da região.</p>
        </div>
      </div>
      <div class="faq-item fade-in-up">
        <button class="faq-pergunta">
          Qual o prazo de entrega? <span class="faq-seta">▼</span>
        </button>
        <div class="faq-resposta">
          <p>O prazo varia de 3 a 10 dias úteis dependendo do CEP de destino. Produto em pronta entrega, postagem realizada no próximo dia útil após confirmação de pagamento.</p>
        </div>
      </div>
      <div class="faq-item fade-in-up">
        <button class="faq-pergunta">
          As camisas têm garantia de qualidade? <span class="faq-seta">▼</span>
        </button>
        <div class="faq-resposta">
          <p>Sim! Trabalhamos somente com produtos selecionados. Em caso de defeito de fabricação, realizamos a troca. Nossa reputação é construída na confiança dos nossos clientes.</p>
        </div>
      </div>
      <div class="faq-item fade-in-up">
        <button class="faq-pergunta">
          Posso comprar avulso também? <span class="faq-seta">▼</span>
        </button>
        <div class="faq-resposta">
          <p>Sim! Atendemos tanto no varejo (peça única) quanto no atacado. Fale conosco no WhatsApp e informe a quantidade desejada para receber o melhor preço!</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**10. CTA Final**
```html
<section id="cta-final" class="section-cta">
  <div class="container cta-inner fade-in-up">
    <h2>PRONTO PARA FAZER <span class="destaque-dourado">SEU PEDIDO?</span></h2>
    <p>Nossa equipe responde rápido no WhatsApp. Tire suas dúvidas e faça seu pedido agora!</p>
    <a href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20quero%20fazer%20um%20pedido!"
       target="_blank" class="btn btn-whatsapp btn-gigante">
      💬 CHAMAR NO WHATSAPP AGORA
    </a>
  </div>
</section>
```

**11. Footer**
```html
<footer id="footer">
  <div class="container footer-inner">
    <div class="footer-logo">
      <span class="logo-nm">NM</span>
      <span class="logo-texto">NOVO MANTO SP</span>
    </div>
    <div class="footer-links">
      <a href="#produtos">Produtos</a>
      <a href="#atacado">Atacado</a>
      <a href="#prova-social">Depoimentos</a>
      <a href="#faq">FAQ</a>
    </div>
    <div class="footer-social">
      <a href="https://instagram.com/novomantosp11" target="_blank">📸 @novomantosp11</a>
    </div>
    <p class="footer-copy">© 2025 Novo Manto SP. Todos os direitos reservados.</p>
  </div>
</footer>

<script src="js/main.js"></script>
```

**Critério:** HTML completo, válido, todas as seções com IDs corretos, sem tags abertas.

---

## TASK 3 — Criar `css/style.css`

### Variáveis e Reset
```css
:root {
  --cor-primaria:    #C8102E;
  --cor-secundaria:  #000000;
  --cor-destaque:    #FFD700;
  --cor-fundo:       #0a0a0a;
  --cor-card:        #141414;
  --cor-card-hover:  #1e1e1e;
  --cor-texto:       #FFFFFF;
  --cor-texto-muted: #aaaaaa;
  --cor-whatsapp:    #25D366;
  --cor-whatsapp-dk: #128C7E;
  --fonte-titulo:    'Bebas Neue', sans-serif;
  --fonte-corpo:     'Barlow', sans-serif;
  --radius:          10px;
  --radius-pill:     50px;
  --sombra:          0 4px 24px rgba(0,0,0,0.5);
  --sombra-verde:    0 4px 20px rgba(37,211,102,0.4);
  --transicao:       all 0.3s ease;
  --header-height:   70px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body { background: var(--cor-fundo); color: var(--cor-texto); font-family: var(--fonte-corpo); line-height: 1.6; overflow-x: hidden; }
img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
```

### Botões
```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: var(--radius-pill);
  font-family: var(--fonte-corpo);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: var(--transicao);
  white-space: nowrap;
}
.btn-whatsapp {
  background: var(--cor-whatsapp);
  color: white;
  box-shadow: var(--sombra-verde);
}
.btn-whatsapp:hover {
  background: var(--cor-whatsapp-dk);
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(37,211,102,0.6);
}
.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}
.btn-outline:hover {
  background: white;
  color: black;
}
.btn-grande { font-size: 1.15rem; padding: 20px 40px; }
.btn-gigante { font-size: 1.3rem; padding: 22px 48px; }
```

### Header
```css
#header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: var(--header-height);
  background: rgba(0,0,0,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: var(--transicao);
}
#header.scrolled {
  box-shadow: 0 2px 20px rgba(200,16,46,0.2);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.logo { display: flex; align-items: center; gap: 8px; font-family: var(--fonte-titulo); letter-spacing: 1px; }
.logo-nm { color: var(--cor-primaria); font-size: 1.6rem; }
.logo-texto { color: white; font-size: 1.1rem; }
.nav-links { display: flex; gap: 32px; }
.nav-links a { color: var(--cor-texto-muted); font-weight: 600; font-size: 0.9rem; letter-spacing: 0.5px; transition: var(--transicao); }
.nav-links a:hover { color: var(--cor-primaria); }
.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }
.hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: var(--transicao); }
```

### Menu Mobile Overlay
```css
.menu-mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.97);
  z-index: 1100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  transform: translateX(100%);
  transition: transform 0.35s ease;
}
.menu-mobile-overlay.aberto { transform: translateX(0); }
.menu-mobile-overlay ul { display: flex; flex-direction: column; align-items: center; gap: 28px; }
.menu-mobile-overlay a { font-family: var(--fonte-titulo); font-size: 2.5rem; color: white; letter-spacing: 2px; }
.menu-mobile-overlay a:hover { color: var(--cor-primaria); }
.menu-fechar { position: absolute; top: 20px; right: 20px; background: none; border: none; color: white; font-size: 2rem; cursor: pointer; }
```

### Hero
```css
#hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--header-height);
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('../images/hero-banner.jpg');
  background-size: cover;
  background-position: center;
  /* Fallback se imagem não existir: */
  background-color: #1a0005;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(200,16,46,0.2) 50%, rgba(0,0,0,0.9) 100%);
}
.hero-content {
  position: relative;
  z-index: 1;
  padding: 80px 20px;
}
.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}
.badge {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: var(--radius-pill);
  padding: 6px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
}
.hero-titulo {
  font-family: var(--fonte-titulo);
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 1;
  margin-bottom: 20px;
  letter-spacing: 2px;
}
.destaque-vermelho { color: var(--cor-primaria); }
.destaque-dourado  { color: var(--cor-destaque); }
.hero-subtitulo {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: var(--cor-texto-muted);
  margin-bottom: 40px;
  max-width: 520px;
}
.hero-ctas { display: flex; flex-wrap: wrap; gap: 16px; }
```

### Seções
```css
.section-dark   { background: #111; }
.section-darker { background: #0d0d0d; }
section { padding: 80px 0; }
.section-titulo {
  font-family: var(--fonte-titulo);
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 12px;
}
.section-subtitulo {
  text-align: center;
  color: var(--cor-texto-muted);
  font-size: 1.05rem;
  margin-bottom: 48px;
}
```

### Diferenciais
```css
.diferenciais-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
}
.diferencial-card {
  background: var(--cor-card);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 32px 24px;
  text-align: center;
  transition: var(--transicao);
}
.diferencial-card:hover {
  border-color: var(--cor-primaria);
  transform: translateY(-6px);
  box-shadow: 0 8px 30px rgba(200,16,46,0.2);
}
.diferencial-icone { font-size: 2.5rem; display: block; margin-bottom: 16px; }
.diferencial-card h3 { font-family: var(--fonte-titulo); font-size: 1.4rem; letter-spacing: 1px; margin-bottom: 8px; }
.diferencial-card p  { color: var(--cor-texto-muted); font-size: 0.9rem; }
```

### Produtos
```css
.produtos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}
.produto-card {
  background: var(--cor-card);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  transition: var(--transicao);
}
.produto-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--sombra);
  border-color: rgba(200,16,46,0.4);
}
.produto-imagem {
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
}
.produto-imagem img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.produto-card:hover .produto-imagem img { transform: scale(1.07); }
.produto-badge {
  position: absolute;
  top: 12px; left: 12px;
  background: var(--cor-destaque);
  color: black;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
}
.produto-info { padding: 16px; }
.produto-info h3 { font-family: var(--fonte-titulo); font-size: 1.2rem; letter-spacing: 1px; }
.produtos-cta { text-align: center; }
```

### Atacado
```css
.section-atacado {
  background: linear-gradient(135deg, #8B0000 0%, #C8102E 50%, #6B0000 100%);
  padding: 80px 0;
}
.atacado-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.atacado-texto h2 {
  font-family: var(--fonte-titulo);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  margin-bottom: 20px;
  letter-spacing: 2px;
}
.atacado-texto h2 span { color: var(--cor-destaque); }
.atacado-texto p { color: rgba(255,255,255,0.8); margin-bottom: 32px; font-size: 1.05rem; }
.atacado-beneficios ul { display: flex; flex-direction: column; gap: 16px; }
.atacado-beneficios li { font-size: 1rem; font-weight: 600; }
```

### Prova Social / Vídeo 2
```css
#prova-social { padding: 80px 0; }
.video-prova-wrapper {
  max-width: 640px;
  margin: 0 auto 32px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 60px rgba(0,0,0,0.7);
}
/* Suporte para vídeo vertical (9:16) */
.video-prova-wrapper.vertical { max-width: 360px; }
.video-prova { width: 100%; display: block; border-radius: 16px; }
.video-placeholder {
  background: #1a1a1a;
  border: 2px dashed rgba(255,255,255,0.2);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  aspect-ratio: 16/9;
  color: var(--cor-texto-muted);
  text-align: center;
  padding: 20px;
}
.video-placeholder span { font-size: 1.1rem; font-weight: 600; color: white; }
.video-placeholder small { font-size: 0.8rem; }
.video-placeholder-grande { aspect-ratio: 16/9; }
.video-reforco {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--cor-destaque);
  margin-bottom: 48px;
}
.depoimentos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 24px;
}
.depoimento-card {
  background: var(--cor-card);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 28px;
  transition: var(--transicao);
}
.depoimento-card:hover { border-color: var(--cor-destaque); transform: translateY(-4px); }
.depoimento-estrelas { font-size: 1.1rem; margin-bottom: 12px; }
.depoimento-card p { color: rgba(255,255,255,0.85); font-size: 0.95rem; margin-bottom: 16px; line-height: 1.7; }
.depoimento-autor { color: var(--cor-destaque); font-size: 0.85rem; font-weight: 700; }
```

### FAQ
```css
.faq-lista { max-width: 760px; margin: 40px auto 0; display: flex; flex-direction: column; gap: 0; }
.faq-item { border-bottom: 1px solid rgba(255,255,255,0.08); }
.faq-pergunta {
  width: 100%;
  background: none;
  border: none;
  color: white;
  text-align: left;
  padding: 22px 0;
  font-family: var(--fonte-corpo);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  transition: var(--transicao);
}
.faq-pergunta:hover { color: var(--cor-primaria); }
.faq-item.ativo .faq-pergunta { color: var(--cor-primaria); }
.faq-seta { transition: transform 0.3s ease; flex-shrink: 0; }
.faq-item.ativo .faq-seta { transform: rotate(180deg); }
.faq-resposta {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.3s ease;
}
.faq-resposta p { padding-bottom: 20px; color: var(--cor-texto-muted); line-height: 1.8; }
.faq-item.ativo .faq-resposta { max-height: 300px; }
```

### CTA Final
```css
.section-cta {
  background: radial-gradient(ellipse at center, rgba(200,16,46,0.15) 0%, #0a0a0a 70%);
  border-top: 1px solid rgba(200,16,46,0.2);
  padding: 100px 0;
}
.cta-inner { text-align: center; }
.cta-inner h2 { font-family: var(--fonte-titulo); font-size: clamp(2.5rem, 6vw, 4rem); letter-spacing: 2px; margin-bottom: 20px; }
.cta-inner p { color: var(--cor-texto-muted); font-size: 1.1rem; margin-bottom: 40px; }
```

### Footer
```css
#footer { background: #050505; border-top: 1px solid rgba(255,255,255,0.05); padding: 40px 0; }
.footer-inner { display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; }
.footer-links { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; }
.footer-links a { color: var(--cor-texto-muted); font-size: 0.9rem; transition: var(--transicao); }
.footer-links a:hover { color: var(--cor-primaria); }
.footer-social a { color: var(--cor-texto-muted); transition: var(--transicao); }
.footer-social a:hover { color: white; }
.footer-copy { color: rgba(255,255,255,0.3); font-size: 0.8rem; }
```

### Botão WhatsApp Lateral Flutuante
```css
#whatsapp-lateral {
  position: fixed;
  right: -100px; /* começa fora da tela */
  top: 50%;
  transform: translateY(-50%);
  z-index: 998;
  background: var(--cor-whatsapp);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 12px;
  border-radius: 12px 0 0 12px;
  box-shadow: -4px 0 20px rgba(37,211,102,0.4);
  transition: right 0.5s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}
#whatsapp-lateral.visivel { right: 0; }
#whatsapp-lateral:hover {
  box-shadow: -6px 0 30px rgba(37,211,102,0.7);
  background: var(--cor-whatsapp-dk);
}
#whatsapp-lateral svg { width: 28px; height: 28px; fill: white; }
.wpp-label {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: white;
}
/* Pulso animado */
#whatsapp-lateral::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 14px 0 0 14px;
  border: 2px solid var(--cor-whatsapp);
  animation: pulso-wpp 2s ease-out infinite;
  opacity: 0;
}
@keyframes pulso-wpp {
  0%   { opacity: 0.6; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.12); }
}
```

### Vídeo PiP (Vídeo 1 Minimizado)
```css
#video-minimizado {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  width: 240px;
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0,0,0,0.7);
  border: 1px solid rgba(255,255,255,0.12);
  transform: translateY(120%);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
#video-minimizado.visivel { transform: translateY(0); }
#video-minimizado.expandido { width: 400px; }
.video-pip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(0,0,0,0.8);
}
.video-pip-titulo { font-size: 0.75rem; font-weight: 600; color: white; }
.video-pip-controles { display: flex; gap: 6px; }
.video-pip-controles button {
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transicao);
}
.video-pip-controles button:hover { background: rgba(255,255,255,0.25); }
.video-pip-wrapper {
  aspect-ratio: 16/9;
  background: black;
}
.video-pip-wrapper video, .video-pip-wrapper .video-placeholder {
  width: 100%; height: 100%;
  object-fit: cover;
}
.video-pip-wrapper .video-placeholder {
  aspect-ratio: 16/9;
  border-radius: 0;
  border: none;
}
.video-pip-legenda {
  padding: 6px 12px;
  font-size: 0.7rem;
  color: var(--cor-texto-muted);
  text-align: center;
  background: rgba(0,0,0,0.5);
}
```

### Animações de Entrada
```css
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Responsividade
```css
@media (max-width: 1024px) {
  .diferenciais-grid { grid-template-columns: repeat(2, 1fr); }
  .produtos-grid { grid-template-columns: repeat(2, 1fr); }
  .atacado-inner { grid-template-columns: 1fr; gap: 40px; }
  .depoimentos-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .hero-titulo { font-size: clamp(2.5rem, 10vw, 4rem); }
  .produtos-grid { grid-template-columns: repeat(2, 1fr); }
  .depoimentos-grid { grid-template-columns: 1fr; }

  /* WhatsApp lateral vira botão circular no mobile */
  #whatsapp-lateral {
    top: auto;
    bottom: 20px;
    right: -80px;
    transform: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    padding: 0;
    flex-direction: row;
    border-radius: 50%;
  }
  #whatsapp-lateral.visivel { right: 16px; }
  .wpp-label { display: none; }
  #whatsapp-lateral::before { border-radius: 50%; }
}

@media (max-width: 480px) {
  section { padding: 60px 0; }
  .diferenciais-grid { grid-template-columns: 1fr; }
  .produtos-grid { grid-template-columns: 1fr; }
  .hero-ctas { flex-direction: column; }
  .hero-ctas .btn { justify-content: center; }
  #video-minimizado { width: 200px; bottom: 80px; }
  #video-minimizado.expandido { width: 300px; }
}
```

**Critério:** Visual dark, esportivo, hierarquia clara, responsivo em todos os breakpoints.

---

## TASK 4 — Criar `js/main.js`

Implemente TODAS as funcionalidades abaixo com comentários explicativos:

### 4.1 — Navbar Scrolled
```javascript
// Ao rolar > 50px, adicionar classe 'scrolled' ao #header
```

### 4.2 — Menu Mobile
```javascript
// Hamburguer abre .menu-mobile-overlay adicionando classe 'aberto'
// Botão fechar e links do menu fecham o overlay
// Tecla Escape também fecha
```

### 4.3 — Smooth Scroll com offset do header
```javascript
// Todos links âncora (#...) com scroll suave
// Subtrair 70px (altura do header fixo) do offset final
```

### 4.4 — FAQ Accordion
```javascript
// Clicar em .faq-pergunta:
//   - Fecha todos os outros itens .faq-item (remove classe 'ativo')
//   - Toggle da classe 'ativo' no item clicado
// A classe 'ativo' controla max-height e rotação da seta via CSS
```

### 4.5 — Intersection Observer (fade-in-up)
```javascript
// Observar todos os elementos .fade-in-up
// Quando 15% do elemento estiver visível: adicionar classe 'visible'
// Desregistrar o observer após animar (unobserve)
```

### 4.6 — Contador animado
```javascript
// Observar elementos com atributo [data-count]
// Ao entrar na viewport: animar de 0 até o valor de data-count em 1500ms
// Usar requestAnimationFrame para suavidade
// Adicionar "+" após o número final
```

### 4.7 — Botão WhatsApp Lateral (slide-in após 2s)
```javascript
// Após 2000ms do carregamento:
//   document.getElementById('whatsapp-lateral').classList.add('visivel')
```

### 4.8 — Vídeo PiP (Vídeo 1 Minimizado)
```javascript
// Após 1500ms do carregamento: mostrar o player (#video-minimizado) com classe 'visivel'

// Botão Fechar (✕):
//   - Remover classe 'visivel' (slide para baixo e some)
//   - Após 500ms: display none para não interferir no layout

// Botão Expandir (⛶):
//   - Toggle da classe 'expandido' no #video-minimizado
//   - Atualizar texto/ícone do botão: ⛶ ↔ ⊡

// Vídeo real (quando descomentado): 
//   - Pausar ao fechar, retomar ao expandir
```

**Critério:** Todas as 8 funcionalidades implementadas, zero erros no console, funciona em mobile e desktop.

---

## TASK 5 — Criar `README.md`

Conteúdo do README:
- Nome e descrição do projeto
- Como adicionar o número real do WhatsApp (buscar por `5511999999999`)
- Como inserir os vídeos reais (descomentando as tags `<video>` e removendo os `.video-placeholder`)
- Como adicionar imagens dos produtos (pasta `images/`)
- Estrutura de arquivos
- Como fazer deploy (Vercel, Netlify, GitHub Pages)
- Como alterar cores (variáveis CSS em `:root`)

---

## TASK 6 — Revisão Final

1. ✅ HTML sem tags abertas, IDs e classes consistentes com o CSS/JS
2. ✅ Todos os links WhatsApp no formato `wa.me/5511999999999?text=...`
3. ✅ Vídeo 1 aparece minimizado após 1.5s com animação suave
4. ✅ Vídeo 2 está na seção prova social com controls visíveis
5. ✅ Botão WhatsApp lateral aparece após 2s, acompanha scroll, some/aparece em mobile
6. ✅ FAQ accordion funciona corretamente
7. ✅ Animações fade-in-up ativam ao rolar
8. ✅ Contadores animam ao entrar na viewport
9. ✅ Menu hamburguer abre e fecha corretamente
10. ✅ Página funciona ao abrir `index.html` direto no navegador (sem servidor)

---

## ⚠️ Regras Obrigatórias

- **HTML/CSS/JS puro** — zero frameworks, zero backend, zero banco de dados
- **Funciona offline** — abrir index.html direto no navegador
- **Placeholders** para vídeos e imagens com instruções claras de como substituir
- **Número WhatsApp placeholder:** `5511999999999` — documentar onde trocar
- **Comentários no código** em seções importantes para facilitar personalização
