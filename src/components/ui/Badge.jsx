import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const VARIANTS = {
  emerald: 'bg-nefp-100 text-nefp-800 border-nefp-200/80',
  solar:   'bg-solar-100 text-solar-900 border-solar-200/80',
  sky:     'bg-sky-100 text-sky-800 border-sky-200/80',
  amber:   'bg-amber-100 text-amber-900 border-amber-200/80',
  rose:    'bg-rose-100 text-rose-800 border-rose-200/80',
  indigo:  'bg-indigo-100 text-indigo-800 border-indigo-200/80',
  slate:   'bg-slate-100 text-slate-700 border-slate-200',
  dark:    'bg-slate-900 text-emerald-300 border-slate-800',
};

const SIZES = {
  sm: 'text-[11px] px-2 py-0.5',
  md: 'text-xs px-2.5 py-1',
  lg: 'text-sm px-3.5 py-1.5 font-medium',
};

export function Badge({
  children,
  variant = 'emerald',
  size = 'md',
  className = '',
  icon: Icon,
}) {
  if (import.meta.env.DEV && !VARIANTS[variant]) {
    console.warn(`Badge: variante "${variant}" não existe, usando emerald.`);
  }

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 font-medium rounded-full border shadow-sm',
          VARIANTS[variant] || VARIANTS.emerald,
          SIZES[size] || SIZES.md,
          className
        )
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}