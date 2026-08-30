import React from 'react';
import { opportunities } from '../../data/opportunities';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { UserPlus, ArrowRight } from 'lucide-react';

export function OpportunitiesSection() {
  return (
    <section id="oportunidades" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Carreira Acadêmica"
          badgeIcon={UserPlus}
          title={opportunities.title}
          subtitle={opportunities.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {opportunities.levels.map((lvl, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-300 transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-nefp-700 flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                  {lvl.title}
                </h3>
                <div className="mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Público-Alvo:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lvl.forWhom}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-nefp-700 uppercase tracking-wider block mb-1">
                  Benefícios & Atividades:
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lvl.benefits}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action box */}
        <div className="bg-gradient-to-r from-nefp-600 to-emerald-700 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Pronto para fazer parte de pesquisas inovadoras?
            </h3>
            <p className="text-emerald-100 text-sm max-w-xl">
              Entre em contato conosco informando seu curso, área de interesse e disponibilidade para iniciarmos o processo.
            </p>
          </div>
          <Button
            as="a"
            href="#contato"
            variant="solar"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="shrink-0"
          >
            Candidate-se Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
