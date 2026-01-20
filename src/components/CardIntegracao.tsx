'use client';
import { integracao } from "../mock/integracao";
import { useState } from "react";
import Link from "next/link";


export default function CardIntegracao(){
    const [aberto, setAberto] = useState<number | null>(null);

    const toggleGrupo = (id: number) => {
      setAberto((estadoAtual) => (estadoAtual === id ? null : id));
    }

    return(
        <>
        <section className="px-6 pt-10 w-full max-w-lg mx-auto">
      <h2 className="font-[--font-titulos] text-texto text-2xl mb-4"> Integração</h2>

      <div className="flex flex-col gap-6">
        {integracao.map((projeto) => {
          const ativo = aberto === projeto.id;

          return (
            <div
              key={projeto.id}
              className="bg-card p-4 rounded-2xl w-full max-w-lg mx-auto cursor-pointer"
              
            >
              <button className="font-[--font-titulos] text-texto text-lg cursor-pointer"
              aria-haspopup="menu"
              aria-expanded={ativo}
              onClick={() => toggleGrupo(projeto.id)}>
                {projeto.nomeProjeto}
              </button>

          
              {ativo && (
                    <div className="mt-3 space-y-3">
                    
                    <p className="font-[--font-texto] text-texto-secundario text-sm">
                        {projeto.descricao}
                    </p>

                    <div>
                        <h4 className="font-[--font-titulos] text-texto text-md">Tecnologias:</h4>
                        <ul className="list-disc list-inside font-[--font-texto] text-texto-secundario text-sm">
                        {projeto.tecnologias.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                        </ul>
                    </div>

                    {projeto.equipe && (
                        <div>
                        <h4 className="font-[--font-titulos] text-texto text-md">Equipe:</h4>
                        <ul className="list-disc list-inside font-[--font-texto] text-texto-secundario text-sm">
                            <li>Backend: {projeto.equipe.backend}</li>
                            <li>Frontend: {projeto.equipe.frontend}</li>
                            <li>Design: {projeto.equipe.design}</li>
                            <li>Total: {projeto.equipe.total}</li>
                        </ul>
                        </div>
                    )}

                    <div>
                        <h4 className="font-[--font-titulos] text-texto text-md">Contribuições:</h4>
                        <ul className="list-disc list-inside font-[--font-texto] text-texto-secundario text-sm">
                        {projeto.contribuicao.map((item) =>(
                            <li key={item}>{item}</li>
                        ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-[--font-titulos] text-texto text-md">Funcionalidades:</h4>
                        <ul className="list-disc list-inside font-[--font-texto] text-texto-secundario text-sm">
                        {projeto.funcionalidades.map((func) =>( 
                            <li key={func}>{func}</li>
                        ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-[--font-titulos] text-texto text-md">Repositório:</h4>
                        <Link href={projeto.repositorio} 
                        className="text-destaque font-[--font-texto] text-sm underline" 
                        target="_blank"
                        >
                        {projeto.repositorio}
                        </Link>
                    </div>

                    <div>
                    <h4 className="font-[--font-titulos] text-texto text-md">Vídeo:</h4>
                       {projeto.video ? (
                        <video className="rounded-lg mt-2 w-48 max-w-sm" src={projeto.video} controls></video>
                       ): (
                        <p className="font-[--font-texto] text-texto-secundario text-sm">Vídeo não disponível</p>
                       )}
                    </div>
                    
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
        </>   
    )
}