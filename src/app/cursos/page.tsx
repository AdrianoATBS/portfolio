import CardCursos from "@/src/components/CardCursos";
import CardMetas from "@/src/components/CardMetas";
export default function Cursos(){
    return(
        <section className="flex flex-col md:flex-row gap-10 px-6 pt-8">
        <CardCursos />
        <CardMetas />
        </section>
    )
} 