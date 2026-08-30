# 🌿 NEFP - Landing Page Oficial

> **Núcleo de Estudos em Fisiologia e Pós-Colheita de Frutas, Hortaliças e Flores**  
> Universidade Federal Rural de Pernambuco (UFRPE) • Unidade Acadêmica de Serra Talhada (UAST)

Landing page moderna, fluida e de alta performance desenvolvida em **ReactJS**, **Tailwind CSS**, **Framer Motion** e **Lucide Icons**, apresentando as linhas de pesquisa, corpo docente e discente, publicações científicas, projetos de inovação tecnológica (PIBITI/CNPq) e galeria laboratorial do grupo.

---

## 🚀 Tecnologias Utilizadas

- **[React 18](https://react.dev/)** - Biblioteca base para a interface de usuário
- **[Vite](https://vitejs.dev/)** - Ferramenta de build ultrarrápida com Hot Module Replacement (HMR)
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização com design system responsivo e Glassmorphism
- **[Framer Motion](https://www.framer.com/motion/)** - Animações e microinterações fluidas
- **[Lucide React](https://lucide.dev/)** - Conjunto moderno de ícones vetoriais

---

## 📂 Estrutura do Projeto

```
landing-page/
├── public/
│   └── images/
│       ├── brand/          # Logomarca oficial do NEFP
│       ├── team/           # Fotos dos pesquisadores e membros
│       ├── partners/       # Logos institucionais (FACEPE, CAPES, CNPq, UFRPE)
│       └── gallery/        # Registros fotográficos de campo e laboratório
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar (ScrollSpy), Footer e ScrollToTop
│   │   ├── sections/       # Hero, Sobre, Pesquisa, Equipe, Publicações, Eventos, Galeria, etc.
│   │   └── ui/             # Botões, Badges, Modais (Perfil e Lightbox) e Cards
│   ├── data/
│   │   ├── content.js      # Dataset estruturado de membros, publicações e projetos
│   │   └── navigation.js   # Links e âncoras de navegação
│   ├── App.jsx             # Estrutura principal da landing page
│   ├── main.jsx            # Ponto de entrada React
│   └── index.css           # Configuração de temas e utilitários Tailwind
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (versão 9 ou superior)

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/nefp-landing-page.git
cd nefp-landing-page
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O projeto estará acessível em `http://localhost:3000`.

### 4. Compilar para produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 👥 Coordenação & Liderança

- **Líder do Grupo:** Prof. Dr. Adriano do Nascimento Simões (*Bolsista de Produtividade em Pesquisa do CNPq - Nível 2*)
- **Instituição:** Universidade Federal Rural de Pernambuco (UFRPE) • Unidade Acadêmica de Serra Talhada (UAST)
- **Contato:** `nefp.uast.ufrpe@gmail.com`

---

## 📄 Licença

Este projeto é desenvolvido para fins acadêmicos e de divulgação científica do **NEFP/UFRPE/UAST**.
