import React from 'react';
import { Badge } from './Badge';
import { Layers, Apple, Cpu, SunMedium, Flower2 } from 'lucide-react';

const iconMap = {
  Layers,
  Apple,
  Cpu,
  SunMedium,
  Flower2,
};

export function ProjectCard({ research, onSelect }) {
  const IconComponent = iconMap[research.icon] || Layers;

  const colorStyles = {
    emerald: {
      border: 'hover:border-nefp-400/80',
      iconBg: 'bg-nefp-100 text-nefp-700',
      badgeVar: 'emerald'
    },
    amber: {
      border: 'hover:border-amber-400/80',
      iconBg: 'bg-amber-100 text-amber-700',
      badgeVar: 'amber'
    },
    sky: {
      border: 'hover:border-sky-400/80',
      iconBg: 'bg-sky-100 text-sky-700',
      badgeVar: 'sky'
    },
    orange: {
      border: 'hover:border-orange-400/80',
      iconBg: 'bg-orange-100 text-orange-700',
      badgeVar: 'solar'
    },
    rose: {
      border: 'hover:border-rose-400/80',
      iconBg: 'bg-rose-100 text-rose-700',
      badgeVar: 'rose'
    },
  }[research.color] || {
    border: 'hover:border-nefp-400/80',
    iconBg: 'bg-nefp-100 text-nefp-700',
    badgeVar: 'emerald'
  };

  return (
    <div
      className={`glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between group transition-all duration-300 ${colorStyles.border}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorStyles.iconBg} transition-transform duration-300 group-hover:scale-110`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <Badge variant={colorStyles.badgeVar} size="sm">
            {research.badge}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-nefp-700 transition-colors mb-3">
          {research.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {research.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
          {research.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
