"use client";

import { useState } from "react";
import { metas } from "@/src/mock/metas";

export default function CardMetas() {
  const [aberto, setAberto] = useState<string | null>(null);

  const toggleGrupo = (prazo: string) => {
    setAberto(aberto === prazo ? null : prazo);
  };

  return (
    <section className="px-6 pt-10 w-full max-w-lg mx-auto">
      <h2 className="text-texto text-3xl font-[--font-titulos] mb-6">Metas</h2>

      <div className="flex flex-col gap-4">
        {metas.map((grupo) => {
          const ativo = aberto === grupo.prazo;

          return (
            <div
              key={grupo.prazo}
              className="bg-card rounded-2xl p-4 cursor-pointer hover:transition-transform duration-300 max-w-md w-full"
              onClick={() => toggleGrupo(grupo.prazo)}
            >
              <h3 className="text-xl font-bold text-texto font-[--font-titulos]">{grupo.prazo}</h3>

              {ativo && (
                <div className="mt-3 space-y-3">
                  {grupo.metas.map((meta) => (
                    <div key={meta.objetivo} className="border-l-4 border-destaque pl-3">
                      <p className="text-texto font-semibold font-[--font-texto] ">{meta.objetivo}</p>
                      <p className="text-texto-secundario text-sm font-[--font-texto] ">{meta.descricao}</p>
                      <p className="text-xs text-destaque font-[--font-texto]">{meta.status}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
