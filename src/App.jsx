import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { TeamSection } from './components/sections/TeamSection';
import { PublicationsSection } from './components/sections/PublicationsSection';
import { WorkshopsSection } from './components/sections/WorkshopsSection';
import { GallerySection } from './components/sections/GallerySection';
import { OpportunitiesSection } from './components/sections/OpportunitiesSection';
import { PartnersSection } from './components/sections/PartnersSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <TeamSection />
        {/* <PublicationsSection />
        <WorkshopsSection />
        <GallerySection />
        <OpportunitiesSection />
        <PartnersSection />
        <ContactSection /> */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
