import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zona 1: Wordmark em linha única */}
        <a
          href="#topo"
          className="font-display text-lg font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-700"
        >
          Guia Mobile
        </a>

        {/* Zona 2: Links de navegação concisos em linha única */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <a
            href="#resumo-modelos"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-slate-950 hover:underline hover:underline-offset-4"
          >
            Resumo
          </a>
          <a
            href="#tabela-comparativa"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-slate-950 hover:underline hover:underline-offset-4"
          >
            Comparativo
          </a>
          <a
            href="#qual-escolher"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-slate-950 hover:underline hover:underline-offset-4"
          >
            Qual escolher
          </a>
          <a
            href="#duvidas"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-slate-950 hover:underline hover:underline-offset-4"
          >
            Dúvidas
          </a>
        </nav>

        {/* Zona 3: Ação primária única */}
        <div className="flex items-center shrink-0">
          <a
            href="#tabela-comparativa"
            className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-4 py-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
          >
            Ver comparativo
          </a>
        </div>
      </div>
    </header>
  );
};
