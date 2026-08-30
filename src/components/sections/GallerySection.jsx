import React, { useState } from 'react';
import { SITE_DATA } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { LightboxModal } from '../ui/LightboxModal';
import { Image as ImageIcon, ZoomIn } from 'lucide-react';

const CATEGORIES = ['Todos', 'Laboratório', 'Campo', 'Eventos'];

export function GallerySection() {
  const [selectedCat, setSelectedCat] = useState('Todos');
  const [currentIdx, setCurrentIdx] = useState(null);

  const filteredImages = selectedCat === 'Todos'
    ? SITE_DATA.gallery
    : SITE_DATA.gallery.filter((img) => img.category === selectedCat);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="galeria" className="py-20 md:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Registros em Imagens"
          badgeIcon={ImageIcon}
          title="Galeria de Atividades & Laboratório"
          subtitle="Confira momentos de pesquisas em bancada, medições em campo e integração científica do nosso time."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCat === cat
                  ? 'bg-nefp-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setCurrentIdx(index)}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider">
                  {img.category}
                </span>
                <p className="text-xs font-medium line-clamp-2 mt-0.5">{img.title}</p>
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredImages}
        currentIndex={currentIdx}
        onClose={() => setCurrentIdx(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
