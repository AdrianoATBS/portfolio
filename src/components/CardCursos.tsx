"use client";
import { useState } from "react";
import { cursos } from "@/src/mock/cursos";
import Image from "next/image";
export default function CardCursos() {
  const [cursoAberto, setCursoAberto] = useState<string | null>(null);

  const toggleCurso = (nome: string) => {
    setCursoAberto(cursoAberto === nome ? null : nome);
  };

  return (
    <section className="px-6 pt-10 w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-[--font-titulos] text-texto mb-6">Cursos</h2>

      <div className="flex flex-col gap-4 ">
        {cursos.map((curso) => {
          const aberto = cursoAberto === curso.nomeCurso;

          return (
            <div
              key={curso.nomeCurso}
            
              className="bg-card rounded-2xl p-4 cursor-pointer hover:transition-transform duration-300 max-w-md w-full"
            >
              <h3 className="text-xl font-bold mb-2 text-texto font-[--font-titulos]"
                onClick={() => toggleCurso(curso.nomeCurso)}>{curso.nomeCurso}</h3>

              {aberto && (
                <div className="space-y-1 text-texto-secundario">
                  <p className="font-[--font-texto] "><span className="text-texto">Instituição:</span> {curso.instituicao}</p>
                  {curso.instrutor && <p className="font-[--font-texto] "><span className="text-texto">Instrutor:</span> {curso.instrutor}</p>}
                  <p className="font-[--font-texto] "><span className="text-texto">Duração:</span> {curso.duracao}</p>
                  <p className="font-[--font-texto] "><span className="text-texto">Conclusão:</span> {curso.conclusao}</p>
                  {curso.imagem && <Image src={curso.imagem} alt={curso.nomeCurso} width={350} height={200} />}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
