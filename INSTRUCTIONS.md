# 🟢 Novo Manto SP — Landing Page de Vendas
## Instruções para o Claude Code (Cursor)

Este arquivo guia o Claude Code na criação completa da landing page da **Novo Manto SP**.

---

## 📁 Estrutura Final do Projeto

```
novomantosp/
├── index.html              ← Página principal
├── css/
│   └── style.css           ← Todo o visual
├── js/
│   └── main.js             ← Toda a interatividade
├── images/
│   ├── hero-banner.jpg     ← Substituir pelo criativo real
│   └── produto-1~6.jpg     ← Fotos dos produtos
├── videos/
│   ├── criativo-1.mp4      ← Vídeo PiP (aparece minimizado)
│   └── criativo-2.mp4      ← Vídeo prova social (embutido)
├── INSTRUCTIONS.md
├── BRIEFING.md
├── TASKS.md
└── README.md
```

---

## 🎬 Destaques do Projeto

- **Vídeo 1** — Player PiP (picture-in-picture) fixo no canto, aparece minimizado ao carregar a página
- **Vídeo 2** — Embutido na seção de prova social, como evidência dos produtos reais
- **Botão WhatsApp lateral** — Fixo na borda direita, acompanha o scroll, slide-in após 2s
- **Sem botão em cada card** — Um único CTA centralizado abaixo do grid de produtos
- **100% estático** — Sem backend, sem banco de dados, abre direto no navegador

---

## ▶️ Como usar no Cursor

1. Abra esta pasta no Cursor
2. Abra o Claude Code (painel lateral ou `Ctrl+Shift+P > Claude`)
3. Cole o prompt abaixo e pressione Enter:

```
Leia os arquivos INSTRUCTIONS.md, BRIEFING.md e TASKS.md desta pasta.
Execute todas as tarefas do TASKS.md em ordem, criando os arquivos:
index.html, css/style.css, js/main.js e README.md.
Siga rigorosamente as especificações de design, cores e funcionalidades descritas no BRIEFING.md.
```

4. Aguarde o Claude Code criar todos os arquivos
5. Abra o `index.html` no navegador para visualizar o resultado
