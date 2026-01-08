export interface Metas{
    objetivo: string;
    descricao: string;
    status: "Concluído" | "Em andamento" | "Planejado";
}


export interface GrupoMetas{
    prazo: string;
    metas: Metas[];
}
export const metas: GrupoMetas[] = [
    {
        prazo: "6 meses a 1 ano",
        metas: [
            {
                objetivo: "Aprimorar habilidades back-end",
                descricao: "Aprofundar em C#, .NET, Clean Architecture, Git, SQL/NoSQL, Docker e SOLID.",
                status: "Em andamento",
            },
            {
                objetivo: "Aprimorar habilidades front-end",
                descricao: "Aprofundar em JavaScript, TypeScript, React, Next.js, Vite e Tailwind CSS.",
                status: "Em andamento",
            },
            {
                objetivo: "Fazer mais projetos práticos",
                descricao: "Construir aplicações completas para consolidar aprendizado.",
                status: "Planejado",
            },
            {
                objetivo: "Inglês básico/intermediário",
                descricao: "Foco em leitura técnica e comunicação.",
                status: "Em andamento",
            }
        ],
    },
    {
        prazo: "1 a 3 anos",
    metas: [
        {
            objetivo: "Concluir graduação",
            descricao: "Finalizar ADS e consolidar base acadêmica.",
            status: "Em andamento",
        },
        {
            objetivo: "Iniciar pós-graduação",
            descricao: "Engenharia ou Arquitetura de Software.",
            status: "Planejado",
        }
        ],
    },
    {
        prazo: "3 a 5 anos",
        metas: [
        {
            objetivo: "Fluência em inglês",
            descricao: "Domínio completo de comunicação e escrita.",
            status: "Planejado",
        },
        {
            objetivo: "Atuar com arquitetura de sistemas",
            descricao: "Projetar e construir soluções escaláveis.",
            status: "Planejado",
        }
        ],
    },

]