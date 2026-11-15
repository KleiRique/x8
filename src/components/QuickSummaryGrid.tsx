import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SMARTPHONES, type PhoneId } from '../data/smartphones';
import { PhoneShowcaseImage } from './PhoneShowcaseImage';

export const QuickSummaryGrid: React.FC = () => {
  const [pendingNoticeId, setPendingNoticeId] = useState<PhoneId | null>(null);

  return (
    <section id="resumo-modelos" className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Visão rápida dos 3 smartphones comparados
          </h2>
          <p className="mt-2.5 text-base text-slate-600">
            Confira o perfil de destaque, os três pontos mais fortes e a disponibilidade de cada aparelho.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SMARTPHONES.map((phone) => {
            const featured = Boolean(phone.isFeatured);
            const hasAffiliateLink = phone.affiliateUrl !== '#';

            return (
              <article
                key={phone.id}
                className={`group flex flex-col justify-between rounded-2xl bg-white transition-all duration-200 hover:-translate-y-0.5 ${
                  featured
                    ? 'border-2 border-rose-700 shadow-md ring-1 ring-rose-700/10'
                    : 'border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Faixa de destaque para o modelo principal ou kicker editorial limpo */}
                  {featured ? (
                    <div className="flex items-center justify-between rounded-t-[14px] bg-rose-700 px-5 py-2.5 text-xs font-semibold text-white">
                      <span>{phone.featuredBadge}</span>
                      <span className="text-rose-100">Destaque Performance</span>
                    </div>
                  ) : (
                    <div className="border-b border-slate-100 px-5 py-2.5 text-xs font-medium text-slate-500">
                      {phone.brand}
                    </div>
                  )}

                  <div className="p-5 sm:p-6">
                    {/* Perfil do aparelho em texto limpo sem empilhamento de pílulas */}
                    <p
                      className={`text-xs font-semibold tracking-normal ${
                        featured ? 'text-rose-700' : 'text-slate-500'
                      }`}
                    >
                      {phone.profileLabel}
                    </p>

                    <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-slate-950">
                      {phone.name}
                    </h3>

                    {/* Imagem clicável que direciona direto para o Mercado Livre */}
                    <a
                      href={phone.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Ver ${phone.name} no Mercado Livre`}
                      aria-label={`Ver ${phone.name} no Mercado Livre`}
                      className="group/img relative mt-4 block overflow-hidden rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
                      data-image-slot={phone.id}
                    >
                      <PhoneShowcaseImage phone={phone} variant="card" />

                      {/* Feedback visual ao passar o mouse */}
                      <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-3 opacity-0 transition-opacity duration-200 group-hover/img:opacity-100 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-md backdrop-blur-sm transition-transform duration-150 group-hover/img:translate-y-0 translate-y-1">
                          <span>Ver no Mercado Livre</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-rose-700" aria-hidden="true" />
                        </span>
                      </div>
                    </a>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {phone.shortVerdict}
                    </p>

                    {/* 3 pontos fortes principais */}
                    <ul className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
                      {phone.strengths.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              featured ? 'text-rose-700' : 'text-slate-700'
                            }`}
                            aria-hidden="true"
                          />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Área de conversão: Microcopy + CTA persuasivo */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="mb-2 text-center text-xs font-medium text-slate-500">
                    {phone.microcopy}
                  </p>
                  {/* Botão pronto para receber link de afiliado em src/data/smartphones.ts */}
                  <a
                    href={phone.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-affiliate-slot={phone.id}
                    onClick={(e) => {
                      if (!hasAffiliateLink) {
                        e.preventDefault();
                        setPendingNoticeId(phone.id);
                      }
                    }}
                    className={`flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      featured
                        ? 'bg-rose-700 text-white shadow-sm hover:bg-rose-800 focus-visible:outline-rose-700'
                        : 'bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-950'
                    }`}
                  >
                    <span className="truncate">{phone.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                  {pendingNoticeId === phone.id && !hasAffiliateLink && (
                    <p className="mt-2 text-center text-xs font-medium text-amber-700">
                      Link deste modelo ainda não configurado.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
