import React from 'react';
import { Badge } from './Badge';

export function SectionHeading({
  badge,
  badgeIcon,
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant="emerald" icon={badgeIcon} size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
