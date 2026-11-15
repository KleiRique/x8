import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <span className="font-display text-base font-bold tracking-tight text-slate-950">
            Guia Mobile
          </span>
          <p className="mt-1 text-xs text-slate-500">
            Comparativo técnico independente · Especificações sujeitas à disponibilidade de cada região.
          </p>
        </div>

        <nav aria-label="Links do rodapé" className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#resumo-modelos" className="hover:text-slate-950 transition-colors">
            Modelos
          </a>
          <a href="#tabela-comparativa" className="hover:text-slate-950 transition-colors">
            Ficha Técnica
          </a>
          <a href="#qual-escolher" className="hover:text-slate-950 transition-colors">
            Qual Escolher
          </a>
          <a href="#duvidas" className="hover:text-slate-950 transition-colors">
            Perguntas Frequentes
          </a>
        </nav>
      </div>
    </footer>
  );
};
