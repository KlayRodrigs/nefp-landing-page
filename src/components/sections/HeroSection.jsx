import React from 'react';
import { institution } from '../../data/institution';
import { stats } from '../../data/stats';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Sparkles, Award, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-mesh-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Floating Pill Badge */}
          <div className="mb-6 animate-fade-in">
            <Badge variant="emerald" size="lg" icon={Sparkles} className="shadow-md">
              Grupo de Pesquisa Científica • UFRPE / UAST
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Ciência, Fisiologia e{' '}
            <span className="bg-gradient-to-r from-nefp-600 via-emerald-500 to-solar-500 bg-clip-text text-transparent">
              Inovação Sustentável
            </span>{' '}
            no Semiárido
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Núcleo de Estudos em Fisiologia e Pós-Colheita de Frutas, Hortaliças e Flores. Desenvolvendo biopolímeros da palma forrageira, conservação de frutos e inteligência artificial para o agronegócio.
          </p>

          {/* Coordinator Highlight */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm mb-10 text-xs sm:text-sm text-slate-700">
            <Award className="w-5 h-5 text-solar-500 shrink-0" />
            <span>
              Liderado pelo <strong>{institution.coordinator}</strong> (Bolsista Produtividade CNPq Nível 2)
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <Button
              as="a"
              href="#pesquisa"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Conheça as Linhas de Pesquisa
            </Button>
            <Button
              as="a"
              href="#equipe"
              variant="secondary"
              size="lg"
              icon={Users}
              className="w-full sm:w-auto"
            >
              Nossa Equipe
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full pt-8 border-t border-slate-200/70">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-5 rounded-2xl text-center flex flex-col justify-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-nefp-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
