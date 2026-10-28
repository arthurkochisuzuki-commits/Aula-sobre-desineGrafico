# 🚀 Guia Completo do seu Portfólio

Este projeto é um site de **Portfólio Pessoal moderno, futurista e responsivo**, criado com **HTML5, Tailwind CSS, animações personalizadas e ícones da biblioteca Iconify**.

---

## 📁 Estrutura de Arquivos Organizada

Antes, o site estava empacotado em um formato confuso de download automático (com código em base64 e script Python para atualizar). Agora ele foi **100% reorganizado no padrão profissional da web**:

```text
Portfólio/
│
├── index.html              <-- 📄 ARQUIVO PRINCIPAL DO SITE (Edite seus textos aqui!)
├── favicon.ico             <-- Ícone que aparece na aba do navegador
│
├── assets/
│   ├── css/
│   │   └── styles.css      <-- Estilos, fontes e animações personalizadas
│   │
│   ├── js/
│   │   ├── main.js         <-- Controle de filtros, animações de scroll e Tailwind
│   │   └── FxFilter.js     <-- Efeito visual de vidro líquido (liquid-glass)
│   │
│   └── images/             <-- 🖼️ TODAS AS IMAGENS DO SEU SITE ESTÃO AQUI!
│       ├── certificados/    (Seus 8 certificados oficiais em alta resolução)
│       │   ├── certificado-canguru-bronze-2022.jpg
│       │   ├── certificado-delf-a1-frances-2026.jpg
│       │   ├── certificado-oba-2025.jpg
│       │   ├── certificado-gamejam-fecap-2026.jpg
│       │   ├── certificado-oba-2024.jpg
│       │   ├── certificado-onc-2024.jpg
│       │   ├── certificado-canguru-matematica-2025.jpg
│       │   └── certificado-japones-yume-2025.jpg
│       ├── hero-bg.webp     (Fundo da capa inicial)
│       ├── foto-perfil.webp (Sua foto na seção 'Sobre')
│       ├── projeto-1.webp   (Capa do Projeto 1 em destaque)
│       ├── projeto-2.webp   (Capa do Projeto 2)
│       ├── projeto-3.webp   (Capa do Projeto 3)
│       ├── skill-1.webp     (Ícone/ilustração da habilidade 1)
│       ├── skill-2.webp     (Ícone/ilustração da habilidade 2)
│       ├── skill-3.jpg      (Ícone/ilustração da habilidade 3)
│       └── favicon.ico      (Cópia do ícone da aba)
│
└── _backup_original/       <-- 🔒 Cópia de segurança intacta dos arquivos originais
```

---

## 🧭 O que há em cada Seção do `index.html`

O arquivo `index.html` agora está todo comentado em português para facilitar a sua edição:

1. **Barra de Navegação (`<!-- 1. BARRA DE NAVEGAÇÃO FIXA -->`)**:
   - Seu nome/logo no topo.
   - Links que rolam suavemente para cada seção do site.

2. **Capa / Hero (`<!-- 2. HERO / CAPA PRINCIPAL -->`)**:
   - Título com seu nome em destaque tipográfico.
   - Badge de disponibilidade (`Status: aberto a oportunidades`).
   - Card com breve resumo (2 a 3 linhas sobre você) e contadores rápidos.
   - Destaque para idiomas/certificações (ex: Francês A1).

3. **Projetos (`<!-- 3. PROJETOS EM DESTAQUE -->`)**:
   - Botões de filtro para organizar por categoria.
   - Cards com imagens, títulos, tecnologias usadas e botões com links para os seus projetos reais ou repositórios.

4. **Certificados (`<!-- SEÇÃO DE CERTIFICADOS & CONQUISTAS -->`)**:
   - Galeria interativa com os seus 8 certificados oficiais (incluindo Medalha de Bronze no Canguru 2022 e Diplôme DELF A1 de Francês).
   - Filtros por categoria: *Todos (8), Olimpíadas & Medalhas (5), Idiomas & Diplomas (2), Game Dev & Tech (1)*.
   - Ao clicar em qualquer certificado, abre um **modal lightbox em tela cheia** para visualização completa com alta resolução.

5. **Linha do Tempo (`<!-- 5. LINHA DO TEMPO -->`)**:
   - Marcos importantes do seu aprendizado e conquistas (2022: Medalha de Bronze Canguru; 2024: OBA & ONC; 2025: 28ª OBA, Canguru & Japonês A1; 2026: Game Jam FECAP & Diplôme DELF A1).

6. **Habilidades (`<!-- 6. HABILIDADES & COMPETÊNCIAS -->`)**:
   - Competências técnicas e comportamentais limpas e estruturadas:
     - **Francês:** Onde aprendi: NSM | Ano: 2025 (Certificado DELF A1)
     - **Python (Básico):** Onde aprendi: FECAP | Aplicação: Inteligência Artificial & Lógica
     - **Proatividade:** Soft skill com foco em iniciativa e inovação prática
     - **Dedicação:** Soft skill com foco em constância e excelência acadêmica

7. **Sistemas e Metodologias (`<!-- 7. SISTEMAS & METODOLOGIA -->`)**:
   - Fluxo de trabalho e boas práticas que você segue.

8. **Ferramentas (`<!-- 8. FERRAMENTAS QUE UTILIZO -->`)**:
   - Cards elegantes com as ferramentas utilizadas: *Pacote Office, Gemini, Antigravity, Copilot, Canva, PowerPoint, NotebookLM, GitHub, GitHub Desktop*.

9. **Contato (`<!-- 9. CONTATO & REDES PROFISSIONAIS -->`)**:
   - Cards clicáveis integrados com seus canais reais:
     - **Gmail:** `arthur.kochi.suzuki@gmail.com`
     - **GitHub:** `https://github.com/arthurkochisuzuki-commits`
   - Rodapé com links diretos e botão de voltar ao topo.

---

## ✏️ Como Personalizar o seu Site

### 1. Alterar Textos e Informações Pessoais
- Abra o arquivo `index.html` no seu editor de código (como o VS Code ou Antigravity).
- Use `Ctrl + F` para procurar por colchetes como `[` ou termos como:
  - `seuemail@exemplo.com` -> Coloque seu e-mail real.
  - `[Link do seu perfil]` -> Coloque seu link do LinkedIn ou GitHub.
  - `Arthur Kochi Suzuki` -> Se desejar alterar o nome exibido.
  - `[Escola / curso atual]` -> Coloque sua formação real.

### 2. Trocar as Imagens
- Basta salvar suas fotos na pasta `assets/images/` com os mesmos nomes:
  - Para trocar sua foto: substitua `assets/images/foto-perfil.webp`.
  - Para trocar as fotos dos projetos: substitua `assets/images/projeto-1.webp`, `projeto-2.webp` e `projeto-3.webp`.
  - Para trocar a foto de fundo da capa: substitua `assets/images/hero-bg.webp`.
*(Dica: formatos `.webp`, `.png` ou `.jpg` são aceitos. Se usar outra extensão, lembre-se de atualizar o nome no `index.html`)*.

---

## 🌐 Como Visualizar e Testar
- **No seu computador**: Basta dar um duplo clique no arquivo `index.html`. Ele abrirá diretamente no seu navegador padrão (Google Chrome, Edge, etc.) funcionando perfeitamente!
- Não precisa de terminal ou script Python para visualizar as mudanças: salvou o `index.html`, basta atualizar a página no navegador (`F5`).

---

## 🚀 Como Colocar no Ar Grátis
Quando seu site estiver pronto com suas informações, você pode publicá-lo na internet gratuitamente usando:
1. **GitHub Pages**: Crie um repositório no GitHub, suba os arquivos (`index.html` e a pasta `assets/`), vá em *Settings > Pages* e ative o site.
2. **Vercel ou Netlify**: Basta arrastar a pasta do projeto diretamente para a tela do Netlify ou conectar seu GitHub na Vercel para ter um link online em segundos.
