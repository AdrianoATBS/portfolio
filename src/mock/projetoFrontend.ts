export interface PrrojetoFrontend{
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

export const projetosFrontend: PrrojetoFrontend[] = [
  {
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
    video: "/videos/teste.mp4",
  },
];
