import React from 'react';
import { X, ExternalLink, GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

export function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Background */}
        <div className="relative bg-gradient-to-r from-nefp-800 via-nefp-700 to-emerald-900 p-6 md:p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl shrink-0 bg-white">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <Badge variant="dark" size="sm" className="mb-2">
                {member.role}
              </Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {member.name}
              </h3>
              <p className="text-emerald-200 text-xs sm:text-sm mt-1">
                {member.level}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {/* Bio overview */}
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-nefp-600" />
              Trajetória Acadêmica & Científica
            </h4>
            <p className="text-slate-600">
              {member.bioShort}
            </p>
          </div>

          {/* Highlights */}
          {member.highlights && member.highlights.length > 0 && (
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-solar-500" />
                Destaques & Formação
              </h4>
              <ul className="space-y-2">
                {member.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-nefp-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-xs sm:text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Research Areas / Disciplines */}
          {member.disciplines && member.disciplines.length > 0 && (
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-tech-600" />
                Linhas de Atuação & Disciplinas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {member.disciplines.map((d, i) => (
                  <span
                    key={i}
                    className="bg-emerald-50 text-nefp-800 text-xs px-2.5 py-1 rounded-lg border border-emerald-200/60 font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          {member.lattesUrl && member.lattesUrl !== 'http://lattes.cnpq.br/' ? (
            <Button
              as="a"
              href={member.lattesUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              icon={ExternalLink}
              iconPosition="right"
            >
              Acessar Currículo Lattes
            </Button>
          ) : (
            <span className="text-xs text-slate-500 italic">Pesquisador(a) vinculado(a) ao NEFP</span>
          )}

          <Button variant="secondary" size="sm" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
}
