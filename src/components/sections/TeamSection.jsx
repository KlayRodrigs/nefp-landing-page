import React, { useState, useMemo, useEffect } from 'react';

import { SHEETS_CONFIG } from '../../config/sheets';
import { useGoogleSheetsData } from '../../hooks/useSectionData';

import { SectionHeading } from '../ui/SectionHeading';
import { MemberCard } from '../ui/MemberCard';
import { MemberModal } from '../ui/MemberModal';
import { Users } from 'lucide-react';

const CATEGORIES = [
  { id: 'todos', label: 'Todos os Membros' },
  { id: 'coordenacao', label: 'Coordenação' },
  { id: 'doutorado', label: 'Doutores' },
  { id: 'doutorando', label: 'Doutorandos' },
  { id: 'mestrado', label: 'Mestres' },
  { id: 'mestre', label: 'Mestres' },
  { id: 'mestrando', label: 'Mestrandos' },
  { id: 'graduacao', label: 'Graduação & PIBITI' },
  { id: 'ex-membros', label: 'Ex-Membros' },
];

export function TeamSection() {
  const { team } = useGoogleSheetsData({
    tabName: SHEETS_CONFIG.TABS.TEAM,
    dataName: 'team',
  });

  const [activeTab, setActiveTab] = useState('todos');
  const [selectedMember, setSelectedMember] = useState(null);

  // Filtra somente os membros cujo campo visivel é true (ou indefinido/padrão)
  const visibleMembers = useMemo(() => {
    return (team || []).filter((m) => {
      if (m.visivel === undefined || m.visivel === null) return true;
      if (typeof m.visivel === 'boolean') return m.visivel;
      const v = String(m.visivel).trim().toLowerCase();
      return v === 'true' || v === '1' || v === 'sim' || v === 'yes';
    });
  }, [team]);

  // Só mantém categorias com pelo menos 1 membro visível (além da aba "todos")
  const visibleCategories = useMemo(() => {
    return CATEGORIES.filter(
      (cat) => cat.id === 'todos' || visibleMembers.some((m) => m.category === cat.id)
    );
  }, [visibleMembers]);

  // Se a aba ativa atual não existir mais nas categorias visíveis, volta para 'todos'
  useEffect(() => {
    if (activeTab !== 'todos' && !visibleCategories.some((c) => c.id === activeTab)) {
      setActiveTab('todos');
    }
  }, [activeTab, visibleCategories]);

  // Membros exibidos de acordo com a aba selecionada
  const filteredMembers = activeTab === 'todos'
    ? visibleMembers
    : visibleMembers.filter((m) => m.category === activeTab);

  return (
    <section id="equipe" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Corpo Científico"
          badgeIcon={Users}
          title="Nossa Equipe de Pesquisadores"
          subtitle="Pesquisadores, pós-graduandos e estudantes dedicados ao avanço da ciência e da tecnologia vegetal no Semiárido brasileiro."
        />

        {/* Filter Tabs - Apenas categorias com membros visíveis */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {visibleCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${activeTab === cat.id
                ? 'bg-nefp-600 text-white shadow-md shadow-nefp-600/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMembers.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onOpenModal={(m) => setSelectedMember(m)}
            />
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            Nenhum membro visível nesta categoria no momento.
          </div>
        )}
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}
