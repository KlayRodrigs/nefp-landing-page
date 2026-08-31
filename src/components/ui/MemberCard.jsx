import React from 'react';
import { Badge } from './Badge';
import { ExternalLink, ChevronRight, Award } from 'lucide-react';
import { getImageUrl } from '../../utils/getImageUrl';

export function MemberCard({ member, onOpenModal }) {
  const isLeader = member.category === 'coordenacao';

  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
        isLeader ? 'ring-2 ring-nefp-500/40 bg-gradient-to-b from-emerald-50/40 to-white' : ''
      }`}
    >
      <div className="p-6 md:p-7 flex flex-col items-center text-center">
        {/* Photo Container */}
        <div className="relative mb-5">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100 relative group-hover:scale-105 transition-transform duration-300">
            <img
              src={getImageUrl(member.image)}
              alt={member.name}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              onError={(e) => {
                e.target.src = getImageUrl('/images/team/sem_foto_037.png');
              }}
            />
          </div>
          {isLeader && (
            <div className="absolute -bottom-1 -right-1 bg-nefp-600 text-white p-1.5 rounded-full shadow-md">
              <Award className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="mb-2">
          <Badge
            variant={isLeader ? 'solar' : member.category === 'doutorado' ? 'emerald' : member.category === 'graduacao' ? 'sky' : 'slate'}
            size="sm"
          >
            {member.role}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-nefp-700 transition-colors">
          {member.name}
        </h3>

        <p className="text-xs text-nefp-700 font-medium mt-1">
          {member.level}
        </p>

        <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
          {member.bioShort}
        </p>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => onOpenModal(member)}
          className="text-xs font-semibold text-nefp-700 hover:text-nefp-800 flex items-center gap-1 group/btn cursor-pointer transition-colors"
        >
          <span>Ver biografia completa</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>

        {member.lattesUrl && member.lattesUrl !== 'http://lattes.cnpq.br/' && (
          <a
            href={member.lattesUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Acessar Currículo Lattes"
            className="text-xs text-slate-500 hover:text-nefp-600 p-1 rounded-md hover:bg-slate-200/50 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
