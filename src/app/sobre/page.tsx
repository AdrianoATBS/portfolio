
import { sobreMim } from "@/src/mock/sobreMim"

export default function SobreMim() {
    return(
        <>
        <section className="pt-24 px-6 max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-[--font-titulos] mb-6 text-texto">{sobreMim.pergunta}</h2>
            <p className="leading-relaxed text-lg whitespace-pre-line font-[--font-texto]  text-texto-secundario">{sobreMim.texto}</p>
        </section>
        </>
    )

}