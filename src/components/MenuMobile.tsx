'use client';

import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import { useState, useRef } from "react";
 
interface MenuMobileProps {
    aberto: boolean;
    fechar: () => void;
}

export default function MenuMobile({ aberto, fechar }: MenuMobileProps) {
    
    const  [menuAberto, setMenuAberto] =  useState(false);

    const timeoutId = useRef<NodeJS.Timeout | null>(null);
    
     const abrirMenu = () => {
        clearTimeout(timeoutId.current!);
        setMenuAberto(true);
    };

    const fecharMenu = () => {
        timeoutId.current = setTimeout(() => (
            setMenuAberto(false)
        ), 600);
    };
    if(!aberto) return null;
    return(
        <>
            <div className="fixed inset-0 backdrop-blur-sm bg-black/60 z-40"
             onClick={fechar}></div>

            <aside className="fixed top-0 right-0 w-64 h-full bg-fundo z-50 p-6 shadow-lg">
            <button className="mb-4 text-texto" onClick={fechar}><IoIosCloseCircle size={24} /></button>
            


            <nav className="flex flex-col gap-4">
                <ul>
                    <li><Link className="font-[--font-titulos] text-texto text-xl hover:text-destaque"  href="/inicio" onClick={fechar}>Inicio</Link></li>
                    <li><Link className="font-[--font-titulos] text-texto text-lg text-xl hover:text-destaque" href="/sobre" onClick={fechar}>Sobre</Link></li>
                    <li><span className="font-[--font-titulos] text-texto text-xl hover:text-destaque cursor-pointer" onClick={() => setMenuAberto(prev => !prev)} >Projetos</span>
                        
                        {menuAberto && (<ul
                        className=" p-2 rounded-md shadow-md flex flex-col gap-2 bg-card">
                            <li><Link className="font-[--font-titulos] text-texto text-xl hover:text-destaque " href="/projetos/frontend" onClick={fechar}>Front-End</Link></li>
                            <li><Link className="font-[--font-titulos] text-texto text-xl hover:text-destaque " href="/projetos/backend" onClick={fechar}>Back-End</Link></li>
                            <li><Link className="font-[--font-titulos] text-texto text-xl hover:text-destaque " href="/projetos/integracao" onClick={fechar}>Integração</Link></li>
                        </ul>
                        )}
                    </li>
                    <li><Link className="font-[--font-titulos] text-texto text-xl hover:text-destaque " href="/cursos" onClick={fechar}>Cursos</Link></li>
                </ul>
            </nav>
            </aside>
        </>
    )
}