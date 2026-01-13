import Image from "next/image";
export default function PequenoSobre() {
    return(
         <section className="flex items-center justify-between px-8 max-w-screen-xl mx-auto gap-3 pt-10 md:flex-row md:justify-between flex-col">
            <Image src="/foto.jpeg" alt="Foto de Perfil" width={200} height={200} className="rounded-full mx-auto mt-8"/>
            
            <div className="flex flex-col text-left ">
                    <h1 className="text-4xl font-bold text-left mt-4 font-[--font-titulos] text-texto">
                    Olá, eu sou Adriano</h1>
                <p className="text-start text-base mt-2 max-w-xl mx-auto font-[--font-texto] text-texto-secundario">
                    Sou desenvolvedor de software com foco em back-end e front-end.
                    No back-end, trabalho com C#, .NET, Clean Architecture, SQL e Docker.
                    No front-end, desenvolvo interfaces modernas utilizando JavaScript, TypeScript, React, Next.js e Tailwind CSS.
                    Tenho dedicação contínua a boas práticas como SOLID, DDD e Arquitetura Limpa para criar soluções escaláveis e bem estruturadas.
                    </p>
            </div>
        </section>
    )
}
