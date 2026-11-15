import React, { useState } from 'react';
import type { SmartphoneSpec } from '../data/smartphones';

interface PhoneShowcaseImageProps {
  phone: SmartphoneSpec;
  variant?: 'card' | 'thumb';
}

export const PhoneShowcaseImage: React.FC<PhoneShowcaseImageProps> = ({
  phone,
  variant = 'card',
}) => {
  const [hasError, setHasError] = useState(false);

  const isThumb = variant === 'thumb';

  // Fallback visual caso a imagem não carregue
  if (!phone.imagePath || hasError) {
    return (
      <div
        role="img"
        aria-label={phone.imageAlt}
        className={`relative flex w-full items-center justify-center overflow-hidden bg-slate-50 ${
          isThumb ? 'h-16 w-12 rounded-lg border border-slate-200' : 'aspect-[4/5] rounded-xl border border-slate-200/80'
        }`}
      >
        {/* Silhueta limpa de estúdio para manter uniformidade visual sem URL externa */}
        <svg
          viewBox="0 0 180 240"
          className={isThumb ? 'h-12 w-10' : 'h-4/5 w-4/5'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Corpo traseiro */}
          <rect
            x="24"
            y="24"
            width="86"
            height="176"
            rx="18"
            fill="#F8FAFC"
            stroke="#CBD5E1"
            strokeWidth="2.5"
          />
          <circle cx="44" cy="44" r="9" fill="#0F172A" />
          <circle cx="44" cy="44" r="4" fill="#334155" />
          <circle cx="60" cy="44" r="2.5" fill="#E2E8F0" />
          {/* Corpo frontal */}
          <rect
            x="66"
            y="36"
            width="90"
            height="182"
            rx="19"
            fill="#0F172A"
            stroke="#475569"
            strokeWidth="2.5"
          />
          <rect x="72" y="42" width="78" height="170" rx="14" fill="url(#phoneFallbackScreen)" />
          {/* Câmera frontal */}
          <rect x="97" y="48" width="28" height="7" rx="3.5" fill="#020617" />
          <defs>
            <linearGradient id="phoneFallbackScreen" x1="72" y1="42" x2="150" y2="212" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E293B" />
              <stop offset="0.5" stopColor="#334155" />
              <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden bg-white ${
        isThumb
          ? 'h-16 w-12 rounded-lg border border-slate-200'
          : 'aspect-[4/5] rounded-xl border border-slate-100'
      }`}
    >
      <img
        src={phone.imagePath}
        alt={phone.imageAlt}
        loading={isThumb ? 'lazy' : 'eager'}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`h-full w-full transition-transform duration-300 ease-out ${
          isThumb
            ? phone.imageCropClass ?? 'object-contain'
            : `${phone.imageCropClass ?? 'object-contain'} group-hover/img:scale-[1.06] group-hover:scale-[1.03]`
        }`}
      />
    </div>
  );
};
