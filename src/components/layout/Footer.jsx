import React from 'react';
import { institution } from '../../data/institution';
import { developer } from '../../data/developer';
import { fundingPartners } from '../../data/fundingPartners';
import { NAV_LINKS } from '../../data/navigation';
import { MapPin, Mail, Globe, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 shadow-md">
                <img
                  src="/images/brand/logo.png"
                  alt="NEFP Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-white text-lg tracking-tight">NEFP</span>
                <p className="text-xs text-emerald-400 font-medium">UFRPE • UAST</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Núcleo de Estudos em Fisiologia e Pós-Colheita de Frutas, Hortaliças e Flores. Pesquisa de excelência, biopolímeros sustentáveis e formação científica no Semiárido.
            </p>
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-white">Líder: </span>
              {institution.coordinator} ({institution.cnpqLevel})
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Research & Funding */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Fomento & Parcerias
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {fundingPartners.map((p) => (
                <li key={p.id} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>
                    <strong className="text-white">{p.name}:</strong> {p.grantProcesses.join(', ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Localização & Contato
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{institution.address}, Serra Talhada - PE</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`mailto:${institution.email}`}
                className="hover:text-emerald-400 transition-colors"
              >
                {institution.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Universidade Federal Rural de Pernambuco</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`mailto:${developer.email}`}
                className="hover:text-emerald-400 transition-colors"
              >
                Programador do site
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} NEFP - UFRPE - UAST. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Desenvolvido por {developer.name} • PIBITI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
