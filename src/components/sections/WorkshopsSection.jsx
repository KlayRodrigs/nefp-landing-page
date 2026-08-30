import React from 'react';
import { workshops } from '../../data/workshops';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function WorkshopsSection() {
  return (
    <section id="eventos" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Eventos & Difusão"
          badgeIcon={Calendar}
          title="Workshops e Eventos Científicos"
          subtitle="Iniciativas de extensão e difusão científica que mobilizaram a comunidade acadêmica e produtores do Sertão do Pajeú."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((ws) => (
            <div
              key={ws.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="emerald" size="sm">
                      {ws.badge}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-nefp-700 font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{ws.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {ws.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ws.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {ws.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                    Tópicos Abordados:
                  </span>
                  <div className="space-y-1">
                    {ws.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
