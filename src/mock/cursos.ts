export interface Cursos{
    nomeCurso: string;
    instituicao: string;
    duracao: string;
    instrutor?: string;
    conclusao: string;
    imagem?: string;
}
export const cursos: Cursos[] = [
  // 🟦 Backend / Arquitetura / C#
  {
    nomeCurso: "Desenvolvimento Backend (C#, .NET, Clean Arch, SQL/NoSQL, Docker, DDD, SOLID, Scrum)",
    instituicao: "Estartando Devs",
    duracao: "120 horas",
    conclusao: "14/12/2024",
    imagem: "/certificados/BackendEstartandoDevs.png",
  },
  {
    nomeCurso: ".NET Core: um curso orientado para o mercado de trabalho",
    instituicao: "Udemy",
    instrutor: "Welisson Arley",
    duracao: "43 horas",
    conclusao: "07/07/2025",
    imagem: "/certificados/DotNetCoreMercado.png",
  },
  {
    nomeCurso: "C# primeiros passos: Lógica de Programação e Algoritmos",
    instituicao: "Udemy",
    instrutor: "Nelio Alves",
    duracao: "7.5 horas",
    conclusao: "10/01/2025",
    imagem: "/certificados/CSharpPrimeirosPassos.png",
  },

  // 🟨 Infraestrutura / DevOps / Banco
  {
    nomeCurso: "Aprenda DOCKER do Zero ao Avançado",
    instituicao: "Udemy",
    instrutor: "Andre Iacono",
    duracao: "5.5 horas",
    conclusao: "12/02/2025",
    imagem: "/certificados/DockerCurso.png",
  },
  {
    nomeCurso: "Banco de Dados SQL do Zero ao Avançado + Projetos Reais",
    instituicao: "Udemy",
    instrutor: "Andre Iacono",
    duracao: "8 horas",
    conclusao: "24/01/2025",
    imagem: "/certificados/BancoDeDadosSQL.png",
  },

  // 🟩 Front-End
  {
    nomeCurso: "Web Frontend Completo: HTML, CSS, JS, TS, React, Next",
    instituicao: "Udemy",
    instrutor: "Jamilton Damasceno e Jorge Sant'Ana",
    duracao: "75.5 horas",
    conclusao: "19/09/2025",
    imagem: "/certificados/WebFrontendCompleto.png",
  },
  {
    nomeCurso: "Desenvolvimento Front-End",
    instituicao: "Estartando Devs",
    duracao: "68 horas",
    conclusao: "29/11/2025",
    imagem: "/certificados/FrontEndEstartandoDevs.png",
  },

  // 🟧 Ferramentas / Controle de Versão
  {
    nomeCurso: "Git e GitHub",
    instituicao: "Curso em Vídeo",
    duracao: "20 horas",
    conclusao: "27/01/2023",
    imagem: "/certificados/GitHubCursoEmVideo.png",
  },
];