export interface ProjetoFrontend{
    id: number;
    nomeProjeto: string;
    descricao: string;
    objetivo?: string;
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
    decisoesTecnicas?: string[];
    desafios?: string[];
    aprendizados?: string[];
    melhoriasFuturas?: string[];
    repositorio: string;
    deploy?: string;
    video: string;
    linkVideo?: string;
    status?: "Concluído" | "Em desenvolvimento";
    thumbnail?: string;
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
    video: "/videos/frontend/Vizinho.mp4",
    status: "Concluído",
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
  video: "/videos/frontend/MiniBlogConcluido.mp4",
  status: "Concluído",
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
    video: "/videos/frontend/VioraConcluido.mp4",
  },
  {
    id: 4,
    nomeProjeto: "Focar",
    descricao: "Focar é uma aplicação desenvolvida com Next.js para auxiliar na organização da rotina através de um gerenciador de tarefas, um temporizador de foco (Pomodoro) e um calendário mensal. O projeto foi criado com o objetivo de praticar desenvolvimento Frontend moderno, consumindo a API pública DummyJSON, aplicando arquitetura baseada em funcionalidades (Feature-Based Architecture), componentização e gerenciamento de estado com React.",
    tecnologias: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "TailwindCSS",
      "DummyJSON API",
    ],
    biblioteca:[
      "React Icons",
    ],
     contribuicao: [
    "Estruturei toda a aplicação utilizando Feature-Based Architecture para organizar componentes, serviços, mocks, tipos e funcionalidades por domínio.",
    "Implementei integração com a API DummyJSON para listar, adicionar e remover tarefas utilizando requisições HTTP.",
    "Desenvolvi um sistema completo de gerenciamento de tarefas com filtros, alteração de status e atualização dinâmica da interface.",
    "Implementei um temporizador de foco com controle de iniciar, pausar, reiniciar e ajuste de tempo utilizando React Hooks.",
    "Desenvolvi um painel de sons ambientes com reprodução de áudio, seleção entre diferentes ambientes sonoros e controle de volume utilizando HTMLAudioElement.",
    "Implementei um calendário mensal com navegação entre meses, cálculo automático dos dias e destaque da data atual.",
    "Criei componentes reutilizáveis e uma estrutura escalável visando facilitar futuras evoluções do projeto."
  ],
    funcionalidades: [
    "Adicionar tarefas",
    "Listar tarefas",
    "Filtrar tarefas (Todas, Pendentes e Concluídas)",
    "Marcar tarefas como concluídas",
    "Excluir tarefas concluídas",
    "Temporizador de foco",
    "Iniciar e pausar cronômetro",
    "Resetar tempo",
    "Aumentar e diminuir tempo",
    "Mensagens motivacionais",
    "Reprodução de sons ambientes",
    "Controle de volume",
    "Calendário mensal",
    "Navegação entre meses",
    "Destaque do dia atual"
  ],
  repositorio:"https://github.com/AdrianoATBS/Focar",
  video: "/videos/frontend/FocarConcluido.mp4",
  status: "Concluído",
  },
  {
  id: 5,
  nomeProjeto: "ContaFlow",
  descricao:
    "ContaFlow é uma aplicação web desenvolvida com Next.js para gerenciamento de usuários, integrada a uma API REST própria, desenvolvida em C# e .NET 8. O projeto surgiu com o objetivo de dar uma interface visual ao Gerenciador de Usuários, permitindo que os usuários realizem cadastro, login e gerenciem suas informações pessoais. Além de trabalhar com o desenvolvimento frontend, o projeto permite aplicar conhecimentos de integração com APIs REST, autenticação JWT, componentização e organização de aplicações utilizando Feature-Based Architecture.",

  objetivo:
    "Desenvolver uma interface frontend para uma API de gerenciamento de usuários criada por mim, colocando em prática a integração entre frontend e backend, o consumo de APIs REST e os conceitos de autenticação e gerenciamento de usuários.",

  tecnologias: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],

  biblioteca: [
    "React Icons",
  ],

  contribuicao: [
    "Desenvolvi a interface da aplicação utilizando Next.js e React, aplicando o App Router para organização e navegação entre as páginas.",
    "Estruturei o projeto utilizando Feature-Based Architecture, separando funcionalidades, componentes, hooks, serviços e tipos.",
    "Implementei a integração com uma API REST própria, desenvolvida em C# e .NET 8.",
    "Implementei o fluxo de cadastro e autenticação de usuários utilizando JWT.",
    "Desenvolvi funcionalidades para consulta e atualização das informações pessoais dos usuários.",
    "Implementei ações de gerenciamento de conta, incluindo desativação, reativação e exclusão de usuários.",
    "Criei um mecanismo centralizado para consumo da API utilizando Fetch API, incluindo o envio do token JWT nas requisições autenticadas.",
    "Desenvolvi componentes reutilizáveis e Hooks personalizados para separar a lógica de negócio da interface."
  ],

  funcionalidades: [
    "Cadastro de usuários",
    "Login e autenticação com JWT",
    "Visualização do painel do usuário",
    "Consulta de informações do perfil",
    "Atualização do nome do usuário",
    "Atualização do endereço de e-mail",
    "Visualização do status da conta",
    "Desativação da conta",
    "Reativação da conta",
    "Exclusão da conta",
    "Logout da aplicação",
    "Configurações do perfil",
    "Interface responsiva"
  ],

  decisoesTecnicas: [
    "Feature-Based Architecture para organização das funcionalidades por domínio.",
    "Shared Components para centralizar componentes reutilizáveis.",
    "Custom Hooks para separar a lógica das funcionalidades dos componentes visuais.",
    "Fetch API com uma implementação centralizada para padronizar as requisições HTTP.",
    "TypeScript para tipagem dos dados e maior segurança durante o desenvolvimento.",
    "Autenticação JWT para integração com os endpoints protegidos da API.",
    "Tailwind CSS com abordagem Mobile First para construção de interfaces responsivas."
  ],

  desafios: [
    "Integrar uma aplicação frontend com uma API REST desenvolvida anteriormente por mim.",
    "Compreender e implementar o fluxo de autenticação JWT entre frontend e backend.",
    "Organizar o armazenamento e o envio do token nas requisições autenticadas.",
    "Desenvolver layouts responsivos mantendo a consistência visual entre diferentes tamanhos de tela.",
    "Separar a lógica de interação e comunicação com a API da camada de apresentação."
  ],

  aprendizados: [
    "Integração entre aplicações frontend e APIs REST próprias.",
    "Consumo de endpoints protegidos utilizando JWT.",
    "Next.js App Router.",
    "React Hooks e Custom Hooks.",
    "Componentização e reutilização de código.",
    "TypeScript aplicado ao consumo de APIs.",
    "Feature-Based Architecture.",
    "Organização de serviços e configuração centralizada de requisições.",
    "Desenvolvimento de interfaces responsivas."
  ],

  repositorio: "https://github.com/AdrianoATBS/conta-flow",
  video: "/videos/frontend/ContaFlow.mp4",
  status: "Concluído"
  }
    
];
