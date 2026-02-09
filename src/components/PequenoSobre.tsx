import Image from "next/image";
export default function PequenoSobre() {
    return(
         <section className="pt-14">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 md:flex-row md:translate-x-16">
                <div className="flex-shrink-0">
                <Image src="/foto.jpeg" alt="Foto de Perfil" width={200} height={200} className="rounded-full mx-auto mt-8"/>
                </div>
                
                <div className="flex flex-col max-w-xl text-left ">
                        <h1 className="text-4xl font-bold mb-4 font-[--fonte-titulos] text-texto">
                        Olá, eu sou Adriano</h1>
                    <p className=" text-lg  font-[--fonte-texto]  text-texto-secundario leading-relaxed">
                        Sou desenvolvedor de software com foco em back-end e front-end.
                        No back-end, trabalho com C#, .NET, Clean Architecture, SQL e Docker.
                        No front-end, desenvolvo interfaces modernas utilizando JavaScript, TypeScript, React, Next.js e Tailwind CSS.
                        Tenho dedicação contínua a boas práticas como SOLID, DDD e Arquitetura Limpa para criar soluções escaláveis e bem estruturadas.
                        </p>
                </div>

            </div>
        </section>
    )
}
