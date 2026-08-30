import React, { useState } from 'react';
import { team } from '../../data/team';
import { SectionHeading } from '../ui/SectionHeading';
import { MemberCard } from '../ui/MemberCard';
import { MemberModal } from '../ui/MemberModal';
import { Users } from 'lucide-react';

const CATEGORIES = [
  { id: 'todos', label: 'Todos os Membros' },
  { id: 'coordenacao', label: 'Coordenação' },
  { id: 'doutorado', label: 'Doutorandos' },
  { id: 'mestrado', label: 'Mestrandos' },
  { id: 'graduacao', label: 'Graduação & PIBITI' },
  { id: 'ex-membros', label: 'Ex-Membros' },
];

export function TeamSection() {
  const [activeTab, setActiveTab] = useState('todos');
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = activeTab === 'todos'
    ? team
    : team.filter(m => m.category === activeTab);

  return (
    <section id="equipe" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Corpo Científico"
          badgeIcon={Users}
          title="Nossa Equipe de Pesquisadores"
          subtitle="Pesquisadores, pós-graduandos e estudantes dedicados ao avanço da ciência e da tecnologia vegetal no Semiárido brasileiro."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
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
