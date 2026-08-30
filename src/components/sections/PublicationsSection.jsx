import React, { useState } from 'react';
import { publications } from '../../data/publications';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { BookOpen, Search, ExternalLink, Check, Copy } from 'lucide-react';

export function PublicationsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const filteredPubs = publications.filter((p) => {
    const text = `${p.title} ${p.authors} ${p.journal} ${p.tags.join(' ')}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });

  const handleCopyCitation = (pub) => {
    const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}, ${pub.volume}. ${pub.doi ? `DOI: ${pub.doi}` : ''}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="publicacoes" className="py-20 md:py-28 bg-slate-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Produção Científica"
          badgeIcon={BookOpen}
          title="Artigos e Trabalhos Publicados"
          subtitle="Mais de 80 artigos científicos gerados a partir de pesquisas laboratoriais e de campo no Semiárido."
        />

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por título, autor, cultura vegetal (ex: pitaia, palma) ou ano..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-nefp-500 text-sm text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredPubs.map((pub) => (
            <div
              key={pub.id}
              className="glass-card p-6 rounded-2xl transition-all duration-300 hover:border-emerald-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="emerald" size="sm">
                    {pub.category}
                  </Badge>
                  <span className="text-xs font-bold text-slate-500">
                    {pub.year}
                  </span>
                </div>
                <span className="text-xs font-semibold text-nefp-700">
                  {pub.journal}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                {pub.title}
              </h3>

              <p className="text-xs text-slate-600 mb-3 italic">
                {pub.authors}
              </p>

              {pub.abstract && (
                <p className="text-xs sm:text-sm text-slate-600 mb-4 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                  {pub.abstract}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <div className="flex flex-wrap gap-1">
                  {pub.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyCitation(pub)}
                    className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                    title="Copiar citação ABNT"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Citação</span>
                      </>
                    )}
                  </button>

                  {pub.doiUrl && (
                    <Button
                      as="a"
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      icon={ExternalLink}
                      iconPosition="right"
                    >
                      Acessar DOI
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredPubs.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              Nenhuma publicação encontrada para os termos buscados.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
