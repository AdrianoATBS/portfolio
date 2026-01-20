"use client";
import { useState, useRef } from "react";
import Link from "next/link";


export default function Cabecalho( ) {
    const [aberto, setAberto] = useState(false);

    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    const abrir = () => {
        clearTimeout(timeoutId.current!);
        setAberto(true);
    };

    const fechar = () => {
        timeoutId.current = setTimeout(() => (
            setAberto(false)
        ), 200);
    };

    return(
        <header className="w-full flex flex-col items-end justify-center pt-4 pr-8 hidden md:flex">
                <nav>
                    <ul className="text-texto flex gap-8 font-semibold text-lg cursor-pointer font-[--font-titulos] ">
                        <li className="hover:text-destaque transition-colors">
                            <Link href="/">Inicio</Link></li>

                        <li className="hover:text-destaque transition-colors">
                            <Link href="/sobre">Sobre Mim</Link></li>
                        
                        <li className="relative " onMouseEnter={abrir} onMouseLeave={fechar}>
                            <button className="hover:text-destaque transition-colors 
                            cursor-pointer" aria-haspopup="menu" aria-expanded={aberto}>Projetos</button>
                            
                            {aberto && (
                                <ul className="absolute flex flex-col  bg-card p-2 rounded-md shadow-md ">
                               
                                <li className="hover:text-destaque transition-colors">
                                    <Link href="/projetos/frontend">Front-End</Link></li>

                                <li className="hover:text-destaque transition-colors">
                                    <Link href="/projetos/backend">Back-End</Link></li>

                                <li className="hover:text-destaque transition-colors">
                                    <Link href="/projetos/integracao">Integração</Link></li>
                            </ul>
                            )}
                        </li>
                        <li className="hover:text-destaque transition-colors">
                            <Link href="/cursos">Cursos e Metas</Link></li>
                    </ul>
                </nav>
        </header>
    )
}