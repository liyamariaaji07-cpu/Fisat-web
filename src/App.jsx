import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IdentityStory from './components/IdentityStory';
import InteractiveCampus from './components/InteractiveCampus';
import AcademicsUniverse from './components/AcademicsUniverse';
import LifeAtFisat from './components/LifeAtFisat';
import EventsTimeline from './components/EventsTimeline';
import HallOfFame from './components/HallOfFame';
import PlacementsCareer from './components/PlacementsCareer';
import InnovationHub from './components/InnovationHub';
import CampusTour from './components/CampusTour';
import AdmissionsCalculator from './components/AdmissionsCalculator';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [campusTourModalOpen, setCampusTourModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050B14] text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
      {/* Custom Precision Follower Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar 
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAdmissions={() => setAdmissionsOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero */}
        <Hero 
          onOpenCampusTour={() => setCampusTourModalOpen(true)}
          onOpenAdmissions={() => setAdmissionsOpen(true)}
        />

        {/* Section 4: FISAT Identity & Storytelling */}
        <IdentityStory />

        {/* Section 5: “YOUR CAMPUS. YOUR STORY.” */}
        <InteractiveCampus />

        {/* Section 6: Academics / Department Universe */}
        <AcademicsUniverse />

        {/* Section 7: “MORE THAN A CLASSROOM” Student Life Collage */}
        <LifeAtFisat />

        {/* Section 8: Events Experience & Timeline */}
        <EventsTimeline />

        {/* Section 9: News / Hall of Fame */}
        <HallOfFame />

        {/* Section 10: Placements & Recruiter Marquee */}
        <PlacementsCareer />

        {/* Section 11: Innovation & AICTE IDEA Lab */}
        <InnovationHub />

        {/* Section 12: Digital Campus Tour */}
        <CampusTour />
      </main>

      {/* Section 17: Visually Strong Footer */}
      <Footer />

      {/* Modals & Command Palettes */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />

      <AdmissionsCalculator 
        isOpen={admissionsOpen} 
        onClose={() => setAdmissionsOpen(false)} 
      />

      {campusTourModalOpen && (
        <CampusTour 
          isModal={true} 
          onClose={() => setCampusTourModalOpen(false)} 
        />
      )}
    </div>
  );
}
