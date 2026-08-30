import React from 'react';
import { brandConcept } from '../../data/brandConcept';
import { timeline } from '../../data/timeline';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Leaf, Cog, Sparkles, Clock } from 'lucide-react';

const pillarIcons = {
  Leaf,
  Cog,
  Sparkles,
};

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Identidade & Trajetória"
          badgeIcon={Leaf}
          title="História e Conceito da Nossa Marca"
          subtitle="Fundado em 2009 na UAST/UFRPE em Serra Talhada, o NEFP transformou a pesquisa botânica e agronômica regional em inovação biotecnológica aplicada."
        />

        {/* Brand Concept Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Logo Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-tr from-emerald-50 via-white to-solar-50 p-6 shadow-xl border border-emerald-100 flex items-center justify-center group">
              <img
                src="/images/brand/logo.png"
                alt="Logomarca do NEFP"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-3 bg-slate-900 text-emerald-300 text-xs px-4 py-1 rounded-full shadow font-semibold">
                NEFP • Identidade Visual
              </div>
            </div>
          </div>

          {/* Pillars explanation */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              O significado por trás dos símbolos
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {brandConcept.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {brandConcept.pillars.map((pillar, idx) => {
                const IconComponent = pillarIcons[pillar.icon] || Leaf;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-nefp-700 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16 bg-slate-50/80 rounded-3xl p-8 sm:p-12 border border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="emerald" size="sm" icon={Clock} className="mb-2">
              Linha do Tempo
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              A Evolução do NEFP ao Longo dos Anos
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Da cozinha industrial da UAST à liderança em pós-graduação e inteligência artificial
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-300 ml-4 sm:ml-32 space-y-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8">
                {/* Year Marker on Left for Desktop */}
                <div className="hidden sm:block absolute -left-32 top-0 text-right w-24 font-extrabold text-nefp-700 text-base">
                  {item.year}
                </div>

                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-nefp-600 border-4 border-white shadow" />

                {/* Mobile Year Badge */}
                <div className="sm:hidden mb-1">
                  <span className="text-xs font-bold bg-nefp-100 text-nefp-800 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
