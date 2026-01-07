export interface Cursos{
    nomeCurso: string;
    instituicao: string;
    duracao: string;
    instrutor?: string;
    conclusao: string;
}
export const cursos: Cursos[] = [
  // 🟦 Backend / Arquitetura / C#
  {
    nomeCurso: "Clean Architecture Essencial - ASP .NET Core com C#",
    instituicao: "Udemy",
    instrutor: "Jose Carlos Macoratti",
    duracao: "14 horas",
    conclusao: "12/03/2025",
  },
  {
    nomeCurso: "Programando em MVC com C# 4 Camadas",
    instituicao: "Udemy",
    instrutor: "Hugo Vasconcelos",
    duracao: "4.5 horas",
    conclusao: "19/02/2025",
  },
  {
    nomeCurso: "Desenvolvimento Backend (C#, .NET, Clean Arch, SQL/NoSQL, Docker, DDD, SOLID, Scrum)",
    instituicao: "Estartando Devs",
    duracao: "120 horas",
    conclusao: "14/12/2024",
  },
  {
    nomeCurso: "Introdução ao Entity Framework Core",
    instituicao: "desenvolvedor.io",
    instrutor: "Rafael Almeida (MVP)",
    duracao: "3 horas",
    conclusao: "09/08/2024",
  },
  {
    nomeCurso: "C# COMPLETO Programação Orientada a Objetos + Projetos",
    instituicao: "Udemy",
    instrutor: "Nelio Alves",
    duracao: "38 horas",
    conclusao: "11/10/2025",
  },
  {
    nomeCurso: ".NET Core: um curso orientado para o mercado de trabalho",
    instituicao: "Udemy",
    instrutor: "Welisson Arley",
    duracao: "43 horas",
    conclusao: "07/07/2025",
  },
  {
    nomeCurso: "C# - Aplicando Princípios SOLID na prática",
    instituicao: "Udemy",
    instrutor: "Jose Carlos Macoratti",
    duracao: "9 horas",
    conclusao: "31/03/2025",
  },
  {
    nomeCurso: "C# primeiros passos: Lógica de Programação e Algoritmos",
    instituicao: "Udemy",
    instrutor: "Nelio Alves",
    duracao: "7.5 horas",
    conclusao: "10/01/2025",
  },

  // 🟨 Infraestrutura / DevOps / Banco
  {
    nomeCurso: "Aprenda DOCKER do Zero ao Avançado",
    instituicao: "Udemy",
    instrutor: "Andre Iacono",
    duracao: "5.5 horas",
    conclusao: "12/02/2025",
  },
  {
    nomeCurso: "Banco de Dados SQL do Zero ao Avançado + Projetos Reais",
    instituicao: "Udemy",
    instrutor: "Andre Iacono",
    duracao: "8 horas",
    conclusao: "24/01/2025",
  },

  // 🟩 Front-End
  {
    nomeCurso: "Webmaster Front-End Completo",
    instituicao: "Danki Code",
    duracao: "81 horas",
    conclusao: "01/03/2023",
  },
  {
    nomeCurso: "Curso de Lógica de Programação",
    instituicao: "Danki Code",
    duracao: "5 horas",
    conclusao: "27/04/2024",
  },
  {
    nomeCurso: "Web Frontend Completo: HTML, CSS, JS, TS, React, Next",
    instituicao: "Udemy",
    instrutor: "Jamilton Damasceno e Jorge Sant'Ana",
    duracao: "75.5 horas",
    conclusao: "19/09/2025",
  },
  {
    nomeCurso: "Desenvolvimento Front-End",
    instituicao: "Estartando Devs",
    duracao: "68 horas",
    conclusao: "29/11/2025",
  },

  // 🟧 Ferramentas / Controle de Versão
  {
    nomeCurso: "Git e GitHub",
    instituicao: "Curso em Vídeo",
    duracao: "20 horas",
    conclusao: "27/01/2023",
  },
];