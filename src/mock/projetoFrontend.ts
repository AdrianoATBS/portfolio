export interface ProjetoFrontend{
    id: number;
    nomeProjeto: string;
    descricao: string;
    tecnologias: string[];
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
}

  
];
