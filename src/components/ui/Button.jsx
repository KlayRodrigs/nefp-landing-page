import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  as = 'button',
  href,
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-nefp-600 to-nefp-500 hover:from-nefp-700 hover:to-nefp-600 text-white shadow-md shadow-nefp-600/25 hover:shadow-lg hover:shadow-nefp-600/35 focus:ring-nefp-500 border border-nefp-400/30',
    secondary: 'bg-white hover:bg-slate-50 text-slate-800 shadow-sm border border-slate-200 hover:border-slate-300 focus:ring-slate-400',
    solar: 'bg-gradient-to-r from-solar-500 to-solar-600 hover:from-solar-600 hover:to-solar-700 text-white shadow-md shadow-solar-500/25 focus:ring-solar-400',
    tech: 'bg-gradient-to-r from-tech-600 to-tech-500 hover:from-tech-700 hover:to-tech-600 text-white shadow-md shadow-tech-500/25 focus:ring-tech-400',
    outline: 'bg-transparent border border-nefp-500/40 text-nefp-700 hover:bg-nefp-50 hover:border-nefp-500 focus:ring-nefp-400',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 focus:ring-slate-300',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  if (as === 'a' || href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform" />}
    </button>
  );
}
