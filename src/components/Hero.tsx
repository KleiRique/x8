import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="topo"
      className="border-b border-slate-200 bg-white pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna principal de texto */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-normal">
              Comparativo técnico 2026 <span aria-hidden="true">·</span> Ficha técnica e análise de uso real
            </p>

            <h1 className="mt-4 text-balance font-display text-[clamp(2.15rem,4vw,3.35rem)] font-extrabold leading-[1.1] tracking-tight text-slate-950">
              POCO X8 Pro vs iPhone 16e e Galaxy S25 FE: qual smartphone entrega mais para você?
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Colocamos frente a frente potência bruta e bateria gigante de 6.000 mAh, a praticidade do ecossistema Apple iOS e a versatilidade das câmeras triplas com Galaxy AI. Compare tela, processador, autonomia e escolha sem dúvidas.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#tabela-comparativa"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-rose-700 px-6 py-3 text-sm sm:text-base font-semibold text-white whitespace-nowrap shrink-0 shadow-sm transition-all duration-150 hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
              >
                <span>Ver tabela comparativa</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#qual-escolher"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-sm sm:text-base font-semibold text-slate-800 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-rose-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
              >
                <span>Ir direto para o veredito</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Painel editorial de síntese dos 4 pilares */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
              <h2 className="font-display text-base font-bold text-slate-950">
                Resumo rápido do duelo
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Cada modelo domina um critério específico da ficha técnica:
              </p>

              <dl className="mt-5 divide-y divide-slate-200 border-t border-slate-200">
                <div className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-sm font-semibold text-rose-700">POCO X8 Pro</dt>
                  <dd className="text-right text-sm text-slate-700 tabular-nums">
                    6.000 mAh · 90 W · 1.5K 120 Hz
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-sm font-semibold text-slate-900">Apple iPhone 16e</dt>
                  <dd className="text-right text-sm text-slate-700 tabular-nums">
                    Chip A18 · 48 MP · Apple Intelligence
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 pt-3.5">
                  <dt className="text-sm font-semibold text-slate-900">Galaxy S25 FE</dt>
                  <dd className="text-right text-sm text-slate-700 tabular-nums">
                    Zoom óptico 3x · Galaxy AI · 7 anos
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
