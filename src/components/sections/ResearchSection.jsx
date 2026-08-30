import React from 'react';
import { researchLines } from '../../data/researchLines';
import { projects } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { Microscope, Sparkles } from 'lucide-react';

export function ResearchSection() {
  return (
    <section id="pesquisa" className="py-20 md:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Inovação & Ciência"
          badgeIcon={Microscope}
          title="Linhas de Pesquisa e Projetos de Destaque"
          subtitle="Abordagens científicas integradas que conectam fisiologia vegetal, biopolímeros sustentáveis e inteligência artificial aplicada ao agronegócio."
        />

        {/* Research Lines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {researchLines.map((line) => (
            <ProjectCard key={line.id} research={line} />
          ))}
        </div>

        {/* Featured Projects Highlight (PitayaQual / BEXT) */}
        <div className="bg-gradient-to-br from-nefp-900 via-slate-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Projeto em Destaque • Iniciação Tecnológica (PIBITI)
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
              {projects[0].title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {projects[0].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 pt-4 border-t border-white/10">
              <div>
                <strong className="text-white">Orientador:</strong> {projects[0].leader}
              </div>
              <div>
                <strong className="text-white">Bolsista PIBITI:</strong> {projects[0].fellow}
              </div>
              <div>
                <strong className="text-white">Fomento:</strong> CNPq / UFRPE
              </div>
              <div>
                <strong className="text-white">Status:</strong>{' '}
                <span className="text-emerald-400 font-bold">{projects[0].status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
