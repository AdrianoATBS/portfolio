export interface ProjetoBackend{
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
    video?: string;
    linkVideo?: string;
    status?: "Concluído" | "Em desenvolvimento";
    thumbnail?: string;
}

export const projetosBackend: ProjetoBackend[] = [
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
    nomeProjeto: "API de Gerenciamento de Usuários",
    descricao: "API REST desenvolvida para gerenciamento de usuários utilizando .NET 8 e Arquitetura em Camadas. Possui autenticação JWT e operações de gerenciamento de contas, utilizando as Claims do token para identificar o usuário autenticado em operações relacionadas à própria conta.",
    objetivo: "Praticar conceitos de desenvolvimento Backend, organização de aplicações em camadas, persistência de dados, autenticação e autorização, além da construção de APIs REST.",
    tecnologias: ["C#", ".NET 8", "ASP.NET Core", "SQL Server", "Docker", "Azure Data Studio"],
    biblioteca: ["Entity Framework Core", "JWT Bearer Authentication", "Swagger / Swashbuckle"],
    contribuicao: [
      "Estruturação da aplicação utilizando Arquitetura em Camadas",
      "Implementação da autenticação e autorização com JWT",
      "Criação dos endpoints de gerenciamento de usuários",
      "Implementação da identificação do usuário autenticado por meio das Claims do JWT",
      "Utilização do contexto da requisição para operações relacionadas à própria conta",
      "Configuração do Entity Framework Core com SQL Server",
      "Implementação do Repository Pattern",
      "Desenvolvimento de Middleware Global para tratamento de exceções",
      "Containerização da aplicação com Docker",
      "Documentação da API utilizando Swagger / OpenAPI"
    ],
    funcionalidades: [
      "Cadastro de usuários",
      "Login e geração de JWT",
      "Consulta de usuário por Id",
      "Consulta dos dados do usuário autenticado",
      "Alteração de nome e e-mail",
      "Desativação da própria conta",
      "Reativação da própria conta",
      "Exclusão da própria conta",
      "Autenticação e autorização via Bearer Token"
    ],
    decisoesTecnicas: [
      "Organização da aplicação utilizando Arquitetura em Camadas",
      "Separação de responsabilidades entre Domain, Application, Infrastructure e API",
      "Utilização do JWT para autenticação e autorização",
      "Identificação do usuário autenticado por meio das Claims presentes no token",
      "Uso do contexto da requisição para operações relacionadas à própria conta",
      "Centralização do acesso a dados utilizando Repository Pattern",
      "Utilização de DTOs para transferência de dados entre as camadas"
    ],
    desafios: [
      "Implementar autenticação e autorização utilizando JWT",
      "Compreender o funcionamento das Claims e sua utilização para identificar o usuário autenticado",
      "Evoluir operações que anteriormente dependiam do envio do Id para utilizar o contexto de autenticação",
      "Integrar Entity Framework Core com SQL Server",
      "Organizar responsabilidades entre as camadas da aplicação",
      "Implementar tratamento global de exceções"
    ],
    aprendizados: [
      "Arquitetura em Camadas",
      "Repository Pattern",
      "Injeção de Dependência",
      "Entity Framework Core",
      "Autenticação e autorização com JWT",
      "Claims e identificação do usuário autenticado",
      "Contexto HTTP e HttpContextAccessor",
      "Desenvolvimento de APIs REST",
      "Separação de responsabilidades",
      "Tratamento global de exceções"
    ],
    
    repositorio: "https://github.com/AdrianoATBS/gerenciador-de-usuario-api",
    video: "/videos/backend/GerenciadorDeUsuarios.mp4",
    status: "Concluído"
  },
  
{
  id: 3,
  nomeProjeto: "API de Controle de Produtos e Estoque",
  descricao:
    "API REST desenvolvida com .NET 8 para gerenciamento de categorias, produtos e movimentações de estoque. Utiliza Clean Architecture, Entity Framework Core e SQL Server para organizar as responsabilidades da aplicação e persistir os dados.",
  objetivo:
    "Praticar conceitos de desenvolvimento Backend, relacionamentos entre entidades, modelagem de banco de dados, regras de negócio, persistência com Entity Framework Core e organização de aplicações utilizando Clean Architecture.",
  tecnologias: [
    "C#",
    ".NET 8",
    "ASP.NET Core",
    "SQL Server",
    "Docker",
    "Clean Architecture"
  ],
  biblioteca: [
    "Entity Framework Core",
    "FluentValidation",
    "Swagger / Swashbuckle"
  ],
  contribuicao: [
    "Estruturação da aplicação utilizando Clean Architecture",
    "Modelagem das entidades Categoria, Produto e MovimentacaoEstoque",
    "Implementação dos relacionamentos entre as entidades",
    "Desenvolvimento dos casos de uso para gerenciamento de categorias e produtos",
    "Implementação das operações de entrada e saída de estoque",
    "Desenvolvimento dos repositórios utilizando Entity Framework Core",
    "Implementação de validações com FluentValidation",
    "Desenvolvimento de Middleware Global para tratamento de exceções",
    "Configuração do banco de dados SQL Server",
    "Containerização da aplicação e do banco de dados com Docker Compose",
    "Documentação da API utilizando Swagger / OpenAPI"
  ],
  funcionalidades: [
    "Cadastro, consulta, alteração e exclusão de categorias",
    "Desativação e reativação de categorias",
    "Cadastro, consulta, alteração e exclusão de produtos",
    "Desativação e reativação de produtos",
    "Consulta de produtos por categoria",
    "Registro de entradas e saídas de estoque",
    "Consulta de movimentações por produto",
    "Consulta da última movimentação de um produto",
    "Listagem de todas as movimentações de estoque",
    "Filtragem de movimentações por período"
  ],
  decisoesTecnicas: [
    "Organização da aplicação utilizando Clean Architecture",
    "Separação de responsabilidades entre Domain, Application, Infrastructure e API",
    "Utilização do Repository Pattern para centralizar o acesso aos dados",
    "Implementação de Use Cases para orquestrar as operações da aplicação",
    "Utilização de DTOs para transferência de dados entre as camadas",
    "Mapeamento dos relacionamentos entre entidades utilizando Fluent API",
    "Utilização do Entity Framework Core para persistência de dados",
    "Validação de entradas utilizando FluentValidation",
    "Centralização do tratamento de exceções por meio de Middleware",
    "Containerização da API e do SQL Server utilizando Docker Compose"
  ],
  desafios: [
    "Modelar os relacionamentos entre Categoria, Produto e MovimentacaoEstoque",
    "Compreender e configurar os relacionamentos e as chaves estrangeiras no Entity Framework Core",
    "Implementar regras de negócio relacionadas à quantidade disponível em estoque",
    "Garantir a consistência das operações de entrada e saída de estoque",
    "Organizar as responsabilidades entre as camadas da aplicação",
    "Integrar o Entity Framework Core com SQL Server",
    "Configurar a comunicação entre a API e o banco de dados utilizando Docker Compose",
    "Implementar o tratamento centralizado de exceções"
  ],
  aprendizados: [
    "Clean Architecture",
    "Relacionamentos entre entidades",
    "Modelagem de banco de dados relacional",
    "Entity Framework Core e Fluent API",
    "Repository Pattern",
    "Use Cases e separação de responsabilidades",
    "Injeção de Dependência",
    "FluentValidation",
    "Desenvolvimento de APIs REST",
    "Middleware e tratamento global de exceções",
    "Docker e Docker Compose",
    "Persistência e integridade dos dados"
  ],
  repositorio: "https://github.com/AdrianoATBS/controle-produto-estoque",

  linkVideo: "https://www.youtube.com/watch?v=A3ASLrXArjQ",
  status: "Concluído"
},

];