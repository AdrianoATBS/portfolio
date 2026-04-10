export interface ProjetoFrontend{
    id: number;
    nomeProjeto: string;
    descricao: string;
    tecnologias: string[];
    biblioteca?: string[];
    equipe?:{
        backend: number;
        frontend: number;
        design: number;
        total: number;
    }
    contribuicao: string[];
    funcionalidades: string[];
    repositorio: string;
    video: string;
}

export const projetosFrontend: ProjetoFrontend[] = [
  {
    id: 1,
    nomeProjeto: "Vizinho D’Água",
    descricao:
      "Um aplicativo criado para ajudar na denúncia de problemas relacionados à água em comunidades, promovendo a conscientização e a ação coletiva.",
    tecnologias: [
      "React",
      "TypeScript",
      "Vite",
      "React Router DOM",
      "CSS Modules",
    ],
    equipe: {
        backend: 4,
        frontend: 1,
        design: 2,
        total: 7,
    },
    contribuicao: [
        "Desenvolvimento completo do front-end com React e TypeScript.",
        "Implementação de rotas e navegação com React Router DOM.",
        "Criação de componentes reutilizáveis e estilização com CSS Modules.",
        "Integração com APIs mockadas para simular funcionalidades.",
    ],
    funcionalidades: [
      "Registro de denúncias simuladas",
      "Comunidades e interação mockada",
      "Dicas e alertas informativos",
      "Navegação SPA e layout responsivo",
    ],

    repositorio: "https://github.com/AdrianoATBS/vizinho-D-agua",
    video: "/videos/Vizinho.mp4",
  },
  {
  id: 2,
  nomeProjeto: "Mini Blog",
  descricao:
    "Aplicação desenvolvida com Next.js (App Router) consumindo a API pública JSONPlaceholder. O projeto simula um portal de conteúdo com listagem, paginação, busca e navegação dinâmica entre posts e usuários, aplicando organização arquitetural moderna e separação entre Server e Client Components.",
  tecnologias: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "JSONPlaceholder API",
  ],
  contribuicao: [
    "Estruturação do projeto utilizando App Router do Next.js.",
    "Implementação de Server Components para busca de dados e Client Components para interatividade.",
    "Criação de rotas dinâmicas (/posts/[id], /users/[id]).",
    "Implementação de paginação e busca via query string.",
    "Tipagem completa dos dados com TypeScript e organização por camadas (app, components, services, types).",
  ],
  funcionalidades: [
    "Listagem e paginação de posts",
    "Página de detalhe do post com comentários relacionados",
    "Página de perfil do usuário",
    "Listagem de posts por usuário",
  ],
  repositorio: "https://github.com/AdrianoATBS/mini-blog",
  video: "/videos/MiniBlog.mp4",
  },
  {
    id: 3,
    nomeProjeto: "Viora",
     descricao:"Viora é um projeto de e-commerce desenvolvido com Next.js, utilizando a API pública DummyJSON. O projeto foi criado com foco no desenvolvimento prático de aplicações frontend modernas, abordando desde integração com APIs REST até organização de código com arquitetura escalável. A aplicação simula um fluxo real de e-commerce, incluindo navegação de produtos, carrinho de compras e autenticação de usuário.",
     
    tecnologias: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "TailwindCSS",
    ],
    biblioteca: [
      "Swiper.js",
      "React Icons",
    ],
    
    contribuicao: [
        "Desenvolvi a interface completa da aplicação utilizando Next.js e React, aplicando o App Router para navegação dinâmica.",
        "Implementei a integração com a API DummyJSON para exibir produtos, categorias e detalhes de forma dinâmica.",
        "Criei funcionalidades de carrinho de compras, incluindo adição, remoção e atualização de itens, além do cálculo automático do valor total.",
        "Implementei a integração com o endpoint de autenticação da API DummyJSON para simular login e registro de usuários.",
        "Utilizei TailwindCSS para estilização responsiva e moderna da aplicação, garantindo uma boa experiência em diferentes dispositivos.",
    ],
    funcionalidades: [
      "Navegação entre produtos",
      "Visualização de detalhes dos produtos",
      "Listagem de produtos por categoria",
      "Exibição de produtos relacionados",
      "Paginação de produtos",
      "Adicionar produtos ao carrinho",
      "Remover produtos do carrinho",
      "Atualizar quantidade de itens",
      "Cálculo automático do valor total",
      "Simulação de controle de estoque",
      "Login de usuário",
      "Registro de usuário",
    ],

    repositorio: "https://github.com/AdrianoATBS/dummyjson-commerce",
    video: "/videos/Viora.mp4",
  },
  
  

  
];
