import React, { useState } from 'react';
import { ArrowUpRight, Award, BatteryCharging, Camera, Cpu, Monitor, ShieldCheck } from 'lucide-react';
import { SMARTPHONES, type PhoneId, type SmartphoneSpec } from '../data/smartphones';
import { PhoneShowcaseImage } from './PhoneShowcaseImage';

type RowCategory = 'all' | 'display' | 'processor' | 'cameras' | 'battery' | 'system';

interface SpecRowConfig {
  key: keyof SmartphoneSpec['specs'];
  filterGroup: RowCategory;
  label: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SPEC_ROWS: SpecRowConfig[] = [
  {
    key: 'display',
    filterGroup: 'display',
    label: 'Tela',
    subtitle: 'Tamanho, painel e taxa em Hz',
    icon: Monitor,
  },
  {
    key: 'processor',
    filterGroup: 'processor',
    label: 'Processador',
    subtitle: 'Chipset e foco de desempenho',
    icon: Cpu,
  },
  {
    key: 'cameras',
    filterGroup: 'cameras',
    label: 'Câmeras',
    subtitle: 'Sensores, zoom e gravação',
    icon: Camera,
  },
  {
    key: 'battery',
    filterGroup: 'battery',
    label: 'Bateria e Carregamento',
    subtitle: 'Capacidade em mAh e potência',
    icon: BatteryCharging,
  },
  {
    key: 'system',
    filterGroup: 'system',
    label: 'Sistema e Recursos Extras',
    subtitle: 'SO, IA e proteção IP',
    icon: ShieldCheck,
  },
];

const FILTER_OPTIONS: { id: 'all' | 'performance' | 'cameras' | 'system'; label: string }[] = [
  { id: 'all', label: 'Ficha completa' },
  { id: 'performance', label: 'Tela, chip e bateria' },
  { id: 'cameras', label: 'Câmeras e vídeo' },
  { id: 'system', label: 'Sistema e IA' },
];

export const ComparisonTable: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'performance' | 'cameras' | 'system'>('all');
  const [pendingNoticeId, setPendingNoticeId] = useState<PhoneId | null>(null);

  const visibleRows = SPEC_ROWS.filter((row) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'performance') {
      return row.key === 'display' || row.key === 'processor' || row.key === 'battery';
    }
    if (activeFilter === 'cameras') {
      return row.key === 'cameras' || row.key === 'display';
    }
    return row.key === 'system' || row.key === 'processor';
  });

  return (
    <section
      id="tabela-comparativa"
      className="border-y border-slate-200 bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Tabela comparativa lado a lado
            </h2>
            <p className="mt-2.5 text-base text-slate-600">
              Compare as especificações técnicas essenciais e identifique o vencedor de cada quesito antes de decidir.
            </p>
          </div>

          {/* Controle segmentado funcional para filtrar critérios */}
          <div
            role="group"
            aria-label="Filtrar critérios da tabela comparativa"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const active = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveFilter(option.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-slate-900 ${
                    active
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dica discreta de rolagem no mobile */}
        <p className="mt-5 text-xs font-medium text-slate-500 lg:hidden">
          Deslize a tabela lateralmente para comparar todos os 3 modelos.
        </p>

        {/* Container com rolagem horizontal suave para mobile */}
        <div className="mt-4 lg:mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/90">
                <th
                  scope="col"
                  className="sticky left-0 z-20 w-[210px] border-r border-slate-200 bg-slate-50 px-5 py-5 align-bottom text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Critério técnico
                </th>

                {SMARTPHONES.map((phone) => {
                  const featured = Boolean(phone.isFeatured);
                  return (
                    <th
                      key={phone.id}
                      scope="col"
                      className={`w-[220px] px-5 py-5 align-top ${
                        featured ? 'bg-rose-50/60' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Miniatura da foto do modelo com link direto */}
                        <a
                          href={phone.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Ver ${phone.name} no Mercado Livre`}
                          aria-label={`Ver ${phone.name} no Mercado Livre`}
                          className="shrink-0 transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 rounded-lg"
                        >
                          <PhoneShowcaseImage phone={phone} variant="thumb" />
                        </a>
                        <div className="min-w-0">
                          {featured ? (
                            <span className="block text-[11px] font-bold text-rose-700">
                              Mais Procurado
                            </span>
                          ) : (
                            <span className="block text-[11px] font-medium text-slate-500">
                              {phone.brand}
                            </span>
                          )}
                          <span className="mt-0.5 block font-display text-base font-bold text-slate-950">
                            {phone.name}
                          </span>
                        </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {visibleRows.map((row) => {
                const Icon = row.icon;
                return (
                  <tr key={row.key} className="group transition-colors hover:bg-slate-50/50">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 border-r border-slate-200 bg-white px-5 py-5 align-top group-hover:bg-slate-50"
                    >
                      <div className="flex items-start gap-2.5">
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                        <div>
                          <span className="block font-display text-sm font-bold text-slate-950">
                            {row.label}
                          </span>
                          <span className="mt-0.5 block text-xs font-normal text-slate-500">
                            {row.subtitle}
                          </span>
                        </div>
                      </div>
                    </th>

                    {SMARTPHONES.map((phone) => {
                      const cell = phone.specs[row.key];
                      const featured = Boolean(phone.isFeatured);
                      const isWinner = Boolean(cell.isWinner);

                      return (
                        <td
                          key={`${phone.id}-${row.key}`}
                          className={`px-5 py-5 align-top ${
                            isWinner
                              ? featured
                                ? 'bg-rose-50/75'
                                : 'bg-emerald-50/65'
                              : featured
                              ? 'bg-rose-50/25'
                              : ''
                          }`}
                        >
                          {isWinner && (
                            <div
                              className={`mb-2 inline-flex items-center gap-1.5 text-xs font-bold ${
                                featured ? 'text-rose-800' : 'text-emerald-800'
                              }`}
                            >
                              <Award className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              <span>{cell.winnerNote ?? 'Destaque da categoria'}</span>
                            </div>
                          )}

                          <p className="font-display text-sm font-bold text-slate-950 tabular-nums">
                            {cell.summary}
                          </p>
                          <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                            {cell.details}
                          </p>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>

            {/* Linha final com botões de CTA persuasivos */}
            <tfoot>
              <tr className="border-t-2 border-slate-200 bg-slate-50/80">
                <th
                  scope="row"
                  className="sticky left-0 z-10 border-r border-slate-200 bg-slate-50 px-5 py-6 align-middle"
                >
                  <span className="block font-display text-sm font-bold text-slate-950">
                    Onde encontrar
                  </span>
                  <span className="mt-1 block text-xs font-normal text-slate-500">
                    Consulte estoque e condições atualizadas
                  </span>
                </th>

                {SMARTPHONES.map((phone) => {
                  const featured = Boolean(phone.isFeatured);
                  const hasAffiliateLink = phone.affiliateUrl !== '#';
                  return (
                    <td
                      key={`${phone.id}-cta`}
                      className={`px-5 py-6 align-middle ${featured ? 'bg-rose-50/50' : ''}`}
                    >
                      <p className="mb-2 text-center text-[11px] font-medium text-slate-500">
                        {phone.microcopy}
                      </p>
                      <a
                        href={phone.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-affiliate-slot={`${phone.id}-table`}
                        onClick={(e) => {
                          if (!hasAffiliateLink) {
                            e.preventDefault();
                            setPendingNoticeId(phone.id);
                          }
                        }}
                        className={`flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                          featured
                            ? 'bg-rose-700 text-white shadow-sm hover:bg-rose-800 focus-visible:outline-rose-700'
                            : 'bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-950'
                        }`}
                      >
                        <span className="truncate">{phone.ctaLabel}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </a>
                      {pendingNoticeId === phone.id && !hasAffiliateLink && (
                        <p className="mt-2 text-center text-[11px] font-medium text-amber-700">
                          Link pendente para este modelo.
                        </p>
                      )}
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};
