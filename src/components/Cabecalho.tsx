import Link from "next/link";
export default function Cabecalho() {
    return(
        <header>
              <section className="w-full flex flex-col items-end justify-center pt-4 pr-8">
                <nav>
                    <ul className="text-texto flex gap-8 font-semibold text-lg cursor-pointer font-[--font-titulos] ">
                        <li className="hover:text-destaque transition-colors">
                            <Link href="/">Inicio</Link></li>

                        <li className="hover:text-destaque transition-colors">
                            <Link href="/sobre">Sobre Mim</Link></li>
                        
                        <li className="relative group">
                            <span className="hover:text-destaque transition-colors cursor-pointer">Projetos</span>
                            
                            <ul className="absolute hidden group-hover:flex flex-col bg-card p-2 rounded-md shadow-md">
                               
                                <li className="hover:text-destaque transition-colors">
                                    <Link href="/projetos/frontend">Front-End</Link></li>

                                <li className="hover:text-destaque transition-colors">
                                    <Link href="/projetos/backend">Back-End</Link></li>

                                <li className="hover:text-destaque transition-colors">
                                    <Link href="/projetos/integracao">Integração</Link></li>
                            </ul>
                        </li>
                        <li className="hover:text-destaque transition-colors">
                            <Link href="/cursos">Cursos e Metas</Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}