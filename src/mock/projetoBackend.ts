export interface PrrojetoBackend{
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
  {
    id: 2,
    nomeProjeto: "API de Gerenciamento de Usuarios",
    descricao: "API REST desenvolvida para gerenciamento de usuários, criada com foco em estudos de desenvolvimento Backend utilizando .NET 8. O projeto foi construído seguindo os princípios de Arquitetura em Camadas, separando responsabilidades entre Domain, Application, Infrastructure e API.",
    tecnologias: ["C#", ".NET 8", "ASP.NET Core", "SQL Server",  "Docker", "Azure Data Studio"],
    biblioteca: ["Entity Framework Core", "JWT Bearer Authentication", "Swagger / Swashbuckle"],
    contribuicao: [
        "Estruturação da aplicação utilizando Arquitetura em Camadas",
        "Implementação da autenticação e autorização com JWT",
        "Criação dos endpoints de gerenciamento de usuários",
        "Configuração do Entity Framework Core com SQL Server",
        "Implementação do Repository Pattern",
        "Desenvolvimento de Middleware Global para tratamento de exceções",
        "Containerização da aplicação com Docker",
        "Documentação da API utilizando Swagger/OpenAPI",
    ],
    funcionalidades: [
      "Criar usuário",
      "Obter usuário por Id",
      "Alterar nome",
      "Alterar email",
      "Desativar usuário",
      "Reativar usuário",
      "Excluir usuário",
      " Login com JWT",
      "Autenticação e autorização via Bearer Token"
    ],
    repositorio: "https://github.com/AdrianoATBS/gerenciador-de-usuario-api",
    video: "/videos/backend/GerenciadorDeUsuarios.mp4",
  }
  ];