
import { sobreMim } from "@/src/mock/sobreMim"

export default function SobreMim() {
    return(
        <>
        <section className="pt-24 px-6 max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-[--font-titulos] mb-10 text-texto">{sobreMim.pergunta}</h2>
            <div className="flex flex-col gap-10">
                {sobreMim.blocos.map((bloco, index) => (
                    <div key={index}>
                        {bloco.titulo && <h3 className="text-xl font-semibold mb-3 text-texto">
                            {bloco.titulo}
                            </h3>}
                        <p className="text-lg leading-relaxed font-[--font-texto] text-texto-secundario">{bloco.texto}</p>
                    </div>
                ))}

            </div>
        </section>
        </>
    )

}