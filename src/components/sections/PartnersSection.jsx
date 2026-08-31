import React from 'react';
import { fundingPartners } from '../../data/fundingPartners';
import { SectionHeading } from '../ui/SectionHeading';
import { Award } from 'lucide-react';
import { getImageUrl } from '../../utils/getImageUrl'; 

export function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/80 border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Apoio Institucional"
          badgeIcon={Award}
          title="Instituições Financiadoras & Parceiros"
          subtitle="Projetos viabilizados através do fomento das principais agências de apoio à ciência do Brasil."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fundingPartners.map((partner) => (
            <div
              key={partner.id}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between text-center hover:border-emerald-300 transition-all duration-300"
            >
              <div>
                <div className="w-20 h-20 mx-auto rounded-2xl bg-white p-2 shadow-sm border border-slate-100 flex items-center justify-center mb-4">
                  <img
                    src={getImageUrl(partner.logo)}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3">
                  {partner.fullName}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
