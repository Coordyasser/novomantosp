/* =============================================
   NOVO MANTO SP — main.js
   Todas as funcionalidades interativas
============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     4.1 — NAVBAR SCROLLED
     Adiciona classe 'scrolled' ao header ao rolar > 50px
  ───────────────────────────────────────── */
  const header = document.getElementById('header');

  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });


  /* ─────────────────────────────────────────
     4.2 — MENU MOBILE (HAMBURGUER)
     Abre e fecha o overlay de navegação mobile
  ───────────────────────────────────────── */
  const hamburger   = document.getElementById('hamburger');
  const menuOverlay = document.getElementById('menu-overlay');
  const btnFechar   = document.getElementById('menu-fechar');
  const menuLinks   = menuOverlay.querySelectorAll('a');

  function abrirMenu() {
    menuOverlay.classList.add('aberto');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function fecharMenu() {
    menuOverlay.classList.remove('aberto');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', abrirMenu);
  btnFechar.addEventListener('click', fecharMenu);

  // Fechar ao clicar em qualquer link do menu
  menuLinks.forEach(link => link.addEventListener('click', fecharMenu));

  // Fechar com tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('aberto')) {
      fecharMenu();
    }
  });


  /* ─────────────────────────────────────────
     4.3 — SMOOTH SCROLL COM OFFSET DO HEADER
     Compensa os 70px do header fixo
  ───────────────────────────────────────── */
  const HEADER_HEIGHT = 70;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const alvo = document.querySelector(href);
      if (!alvo) return;

      e.preventDefault();
      const topo = alvo.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top: topo, behavior: 'smooth' });
    });
  });


  /* ─────────────────────────────────────────
     4.4 — FAQ ACCORDION
     Toggle classe 'ativo' — CSS controla a animação
  ───────────────────────────────────────── */
  const faqItens = document.querySelectorAll('.faq-item');

  faqItens.forEach(item => {
    const btn = item.querySelector('.faq-pergunta');

    btn.addEventListener('click', () => {
      const estaAtivo = item.classList.contains('ativo');

      // Fecha todos os outros itens
      faqItens.forEach(outro => {
        outro.classList.remove('ativo');
        outro.querySelector('.faq-pergunta').setAttribute('aria-expanded', 'false');
      });

      // Abre o clicado (se não estava aberto)
      if (!estaAtivo) {
        item.classList.add('ativo');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });


  /* ─────────────────────────────────────────
     4.5 — INTERSECTION OBSERVER (animações de scroll)
     Suporta: fade-in-up, fade-in-left, fade-in-right, fade-in
  ───────────────────────────────────────── */
  const fadeEls = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right, .fade-in'
  );

  const observerFade = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target); // anima apenas uma vez
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeEls.forEach(el => observerFade.observe(el));


  /* ─────────────────────────────────────────
     4.6 — CONTADOR ANIMADO
     Anima de 0 até o valor de [data-count] em 1500ms
  ───────────────────────────────────────── */
  const contadores = document.querySelectorAll('[data-count]');

  function animarContador(el) {
    const alvo    = parseInt(el.getAttribute('data-count'), 10);
    const duracao = 1500;
    let inicio    = null;

    function step(timestamp) {
      if (!inicio) inicio = timestamp;
      const progresso = Math.min((timestamp - inicio) / duracao, 1);
      // Easing suave: ease-out quadrático
      const easedProgress = 1 - Math.pow(1 - progresso, 2);
      el.textContent = Math.floor(easedProgress * alvo);

      if (progresso < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = alvo + '+';
      }
    }

    requestAnimationFrame(step);
  }

  const observerContador = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animarContador(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  contadores.forEach(el => observerContador.observe(el));


  /* ─────────────────────────────────────────
     4.7 — BOTÃO WHATSAPP LATERAL (slide-in)
     Aparece 2 segundos após o carregamento da página
  ───────────────────────────────────────── */
  const wppLateral = document.getElementById('whatsapp-lateral');

  setTimeout(() => {
    wppLateral.classList.add('visivel');
  }, 2000);


  /* ─────────────────────────────────────────
     4.8 — VÍDEO PiP (VÍDEO 1 MINIMIZADO)
     Aparece após 1.5s, com botões expandir/fechar
  ───────────────────────────────────────── */
  const videoPip      = document.getElementById('video-minimizado');
  const btnFecharVid  = document.getElementById('btn-fechar-video');
  const btnExpandirVid = document.getElementById('btn-expandir-video');

  // Aparece após 1.5s com animação suave
  setTimeout(() => {
    videoPip.classList.add('visivel');
  }, 1500);

  // Botão fechar (✕) — slide para baixo e depois display none
  btnFecharVid.addEventListener('click', () => {
    videoPip.classList.remove('visivel');

    // Pausa o vídeo real se existir
    const video = videoPip.querySelector('video');
    if (video) video.pause();

    // Remove do layout após a animação terminar
    setTimeout(() => {
      videoPip.style.display = 'none';
    }, 500);
  });

  // Botão expandir/recolher (⛶ ↔ ⊡)
  let expandido = false;

  btnExpandirVid.addEventListener('click', () => {
    expandido = !expandido;
    videoPip.classList.toggle('expandido', expandido);
    btnExpandirVid.textContent = expandido ? '⊡' : '⛶';
    btnExpandirVid.title = expandido ? 'Recolher' : 'Expandir';

    // Se tiver vídeo real e estiver expandindo, tenta retomar
    const video = videoPip.querySelector('video');
    if (video && expandido) {
      video.play().catch(() => {});
    }
  });


  /* ─────────────────────────────────────────
     4.9 — CARROSSEL CAMISAS DA SELEÇÃO
     Auto-play a cada 3.5s, suporte a swipe e dots
  ───────────────────────────────────────── */
  (function initCarrosselSelecao() {
    const track    = document.getElementById('carrossel-selecao');
    const dotsWrap = document.getElementById('carrossel-dots-selecao');
    const btnPrev  = document.getElementById('selecao-prev');
    const btnNext  = document.getElementById('selecao-next');

    if (!track || !dotsWrap || !btnPrev || !btnNext) return;

    const wrapper = track.parentElement;
    const slides  = track.querySelectorAll('.carrossel-slide');
    const GAP     = 16;
    let currentIndex = 0;
    let autoTimer;
    let resizeTimer;

    function getVisivel() {
      if (window.innerWidth <= 600)  return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }

    function getSlideWidth() {
      const v = getVisivel();
      return (wrapper.clientWidth - GAP * (v - 1)) / v;
    }

    function getMaxIndex() {
      return Math.max(0, slides.length - getVisivel());
    }

    function aplicarLayout() {
      const sw = getSlideWidth();
      track.style.gap = GAP + 'px';
      slides.forEach(s => { s.style.width = sw + 'px'; });
    }

    function irPara(idx) {
      const max = getMaxIndex();
      currentIndex = idx < 0 ? max : idx > max ? 0 : idx;
      const sw = getSlideWidth();
      track.style.transform = `translateX(-${currentIndex * (sw + GAP)}px)`;
      atualizarDots();
    }

    function atualizarDots() {
      const total = getMaxIndex() + 1;
      dotsWrap.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'carrossel-dot' + (i === currentIndex ? ' ativo' : '');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        dot.addEventListener('click', () => { irPara(i); resetTimer(); });
        dotsWrap.appendChild(dot);
      }
    }

    function avancar() { irPara(currentIndex + 1); }
    function recuar()  { irPara(currentIndex - 1); }

    function startTimer() { autoTimer = setInterval(avancar, 3500); }
    function resetTimer() { clearInterval(autoTimer); startTimer(); }

    btnNext.addEventListener('click', () => { avancar(); resetTimer(); });
    btnPrev.addEventListener('click', () => { recuar();  resetTimer(); });

    const outer = track.closest('.carrossel-outer');
    outer.addEventListener('mouseenter', () => clearInterval(autoTimer));
    outer.addEventListener('mouseleave', startTimer);

    let touchX = 0;
    track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? avancar() : recuar();
        resetTimer();
      }
    }, { passive: true });

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        aplicarLayout();
        irPara(Math.min(currentIndex, getMaxIndex()));
      }, 100);
    });

    aplicarLayout();
    irPara(0);
    startTimer();
  })();

});
