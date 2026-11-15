import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DECISION_BLOCKS, SMARTPHONES, type PhoneId } from '../data/smartphones';

export const DecisionGuide: React.FC = () => {
  const [pendingNoticeId, setPendingNoticeId] = useState<PhoneId | null>(null);

  return (
    <section id="qual-escolher" className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Qual escolher? Veredito por perfil de uso
          </h2>
          <p className="mt-2.5 text-base text-slate-600">
            Não existe um único aparelho perfeito para todo mundo. Identifique o seu cenário principal para acertar na compra.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {DECISION_BLOCKS.map((block, index) => {
            const isPrimary = block.phoneId === 'poco-x8-pro';
            const stepNumber = String(index + 1).padStart(2, '0');
            const phoneUrl =
              SMARTPHONES.find((item) => item.id === block.phoneId)?.affiliateUrl ?? '#';
            const hasAffiliateLink = phoneUrl !== '#';

            return (
              <article
                key={block.id}
                className={`flex flex-col justify-between rounded-2xl border bg-white p-6 sm:p-7 transition-shadow duration-150 hover:shadow-md ${
                  isPrimary ? 'border-rose-200 ring-1 ring-rose-700/10' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                      {stepNumber}. Perfil de uso
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        isPrimary ? 'text-rose-700' : 'text-slate-700'
                      }`}
                    >
                      {block.targetModel}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-slate-950">
                    {block.profileTitle}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                    {block.summary}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm font-medium text-slate-500">
                    {block.seoAngle}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <a
                    href={phoneUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-affiliate-slot={`${block.phoneId}-guide`}
                    onClick={(e) => {
                      if (!hasAffiliateLink) {
                        e.preventDefault();
                        setPendingNoticeId(block.phoneId);
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 ${
                      isPrimary
                        ? 'text-rose-700 hover:text-rose-800 focus-visible:outline-rose-700'
                        : 'text-slate-900 hover:text-rose-700 focus-visible:outline-slate-900'
                    }`}
                  >
                    <span>Conferir disponibilidade deste modelo</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                  {pendingNoticeId === block.phoneId && !hasAffiliateLink && (
                    <p className="mt-2 text-xs font-medium text-amber-700">
                      Link pendente para este modelo.
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
