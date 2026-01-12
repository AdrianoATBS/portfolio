export interface PrrojetoBackend{
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

export const projetosBackend: PrrojetoBackend[] = [
  {
    id: 1,
    nomeProjeto: "Kognito - Plataforma Educacional Gamificada",
    descricao:
      "Plataforma educacional inclusiva para neurodivergentes com gamificação e acompanhamento de progresso.",
    tecnologias: ["C#", ".NET", "SQL Server", "Clean Architecture", "CQRS"],
    equipe: {
      backend: 4,
      frontend: 4,
      design: 2,
      total: 10,
    },
    contribuicao: [
      "Implementação da lógica de negócios",
      "Estruturação do back-end com Clean Architecture",
      "Modelagem e criação de banco de dados",
      "Sistema de autenticação e permissões",
      "APIs para turmas, tarefas e usuários",
      "Lógica de gamificação",
      "Monitoramento de métricas educacionais",
    ],
    funcionalidades: [
      "Gerenciamento de turmas e tarefas",
      "Monitoramento de desempenho",
      "Sistema de recompensas",
      "Controle de acesso por perfil",
      "Acompanhamento de progresso do aluno",
    ],
    repositorio: "https://github.com/AdrianoATBS/kognito-backend",
    video: "",
  },
];