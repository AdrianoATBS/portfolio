export interface BlocoSobreMim {
  titulo?: string;
  texto: string;
}

export interface SobreMim {
  pergunta: string;
  blocos: BlocoSobreMim[];
}

export const sobreMim: SobreMim = {
  pergunta: "Sobre Mim",
  blocos: [
    {
      texto: "Olá, eu sou o Adriano Teixeira Benevenuto Sampaio, sou Desenvolvedor de Software com foco em back-end e atuação crescente em front-end, movido pela curiosidade e pela vontade de criar soluções úteis para pessoas. Minha curiosidade na tecnologia começou aos 15 anos, influenciada por amigos que já atuavam na área, mas foi aos 20 anos, no início de 2024, que decidi mergulhar de vez nesse universo."
    },
    {
    titulo: "Formação e base técnica",
    texto: "Desde então, tenho me dedicado ao estudo constante e ao desenvolvimento de habilidades técnicas e comportamentais. Atualmente curso Análise e Desenvolvimento de Sistemas na Estácio e participei do programa Estartando Devs, onde dei meus primeiros passos estruturados no desenvolvimento de software. Ao longo desse processo, consolidei conhecimentos tanto em back-end quanto em front-end, tendo contato com princípios e práticas como DDD, CQRS, Clean Code e arquitetura em camadas, além de treinamentos em comunicação e trabalho em equipe."
  },

    {
      titulo: "Experiência prática",
      texto: "Minha experiência mais marcante até agora foi participar do desenvolvimento do Kognito, um aplicativo inclusivo voltado para pessoas neurodivergentes. Atuei no back-end com C# e .NET, aplicando boas práticas de arquitetura e aprendendo não só sobre tecnologia, mas também sobre empatia, colaboração e impacto social."
    },
    {
      titulo: "Evolução para o front-end",
      texto: "Com a base consolidada no back-end, passei a expandir minha atuação para o front-end, buscando compreender o desenvolvimento de forma mais completa. Um dos resultados desse movimento foi o Vizinho D’Água, projeto mobile-first desenvolvido com React, TypeScript e Vite, no qual criei interfaces para denúncias, comunidades e conteúdos educativos utilizando mockagem de dados."
    },
    {
      titulo: "Visão full stack",
      texto: "Essa transição fortaleceu minha visão de desenvolvimento como um fluxo completo, da regra de negócio à interface. Hoje trabalho com tecnologias como C#, .NET, Docker, SQL, Clean Architecture, SOLID e TDD, além de JavaScript, TypeScript, React, Next.js, Vite e Tailwind CSS, buscando sempre construir soluções bem estruturadas e escaláveis."
    },
    {
      titulo: "Objetivos",
      texto: "Meus próximos objetivos são conquistar meu primeiro emprego na área, concluir minha graduação e futuramente seguir para uma pós-graduação. Também estou investindo no aprendizado de inglês e tenho grande interesse em cibersegurança, tema que planejo explorar com mais profundidade."
    },
    {
      titulo: "Além da tecnologia",
      texto: "Fora da tecnologia, gosto de jogar e ler, especialmente livros de fantasia, hobbies que alimentam minha criatividade e me ajudam a manter o equilíbrio. Acredito no poder de ambientes de trabalho saudáveis, onde pessoas se apoiam, aprendem juntas e transformam desafios em oportunidades."
    }
  ]
};

