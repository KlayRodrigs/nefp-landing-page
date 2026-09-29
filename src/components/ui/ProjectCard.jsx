import React from 'react';
import { Badge } from './Badge';
import { getCardStyles } from '../../config/cardPallete';
import { icons, Layers } from 'lucide-react';

export function ProjectCard({ research, index, onSelect }) {
  const Icon = icons[research.icon] || Layers;
  const styles = getCardStyles(index);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(research)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect?.(research)}
      className={`glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between group cursor-pointer transition-all duration-300 ${styles.border}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.iconBg} transition-transform duration-300 group-hover:scale-110`}>
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>
          <Badge variant={styles.badgeVar} size="sm">{research.area}</Badge>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-nefp-700 transition-colors mb-3">
          {research.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{research.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
        {research.tags?.map((tag) => (
          <span key={tag} className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}