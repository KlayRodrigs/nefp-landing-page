import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/navigation';
import { Button } from '../ui/Button';
import { Menu, X, Mail } from 'lucide-react';
import { institution } from '../../data/institution';
import { getImageUrl } from '../../utils/getImageUrl';
import { brand } from '../../data/brand'; 

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy
      const sections = NAV_LINKS.map(link => link.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-sm border-b border-slate-200/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform bg-white p-1 border border-emerald-200/50">
            <img
              src={getImageUrl(brand.logo)}
              alt="NEFP Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-nefp-700 transition-colors">
                NEFP
              </span>
              <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-nefp-100 text-nefp-800">
                UFRPE / UAST
              </span>
            </div>
            <p className="text-[10px] text-slate-500 hidden sm:block">
              Fisiologia & Pós-Colheita Vegetal
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-nefp-700 bg-emerald-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Quick Action */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            as="a"
            href={`mailto:${institution.email}`}
            variant="primary"
            size="sm"
            icon={Mail}
          >
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-200 p-5 mt-2 animate-fade-in shadow-xl mx-4 rounded-2xl">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-nefp-600 text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <Button
                as="a"
                href={`mailto:${institution.email}`}
                onClick={() => setMobileMenuOpen(false)}
                variant="primary"
                size="md"
                className="w-full"
                icon={Mail}
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
