import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Award, GraduationCap, ShieldCheck, 
  Sparkles, CheckCircle2, ChevronRight, BookOpen, 
  Briefcase, Star
} from 'lucide-react';
import { LEADERSHIP_FACULTY } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function LeadershipFaculty() {
  const [selectedLeader, setSelectedLeader] = useState(LEADERSHIP_FACULTY[0]);
  const [filter, setFilter] = useState('All');

  const filteredList = filter === 'All'
    ? LEADERSHIP_FACULTY
    : LEADERSHIP_FACULTY.filter(item => {
        if (filter === 'Governance') return item.id === 'chairman';
        if (filter === 'Administration') return item.id === 'principal' || item.id === 'vice-principal';
        if (filter === 'Academic & R&D') return item.id === 'dean-rd' || item.id === 'hod-cse' || item.id === 'prof-me';
        return true;
      });

  return (
    <section id="leadership" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050B14] overflow-hidden">
      {/* Background Ambience */}
      <div 
        className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none transition-all duration-700 opacity-15"
        style={{ backgroundColor: selectedLeader.color }}
      />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-3">
              <Users size={13} />
              <span>THE MINDS BEHIND THE MISSION</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              INSTITUTIONAL LEADERSHIP <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                & EMINENT FACULTY.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            The visionary leaders, researchers, and mentors steering FISAT’s academic autonomy, research excellence, and student triumphs.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12">
          {['All', 'Governance', 'Administration', 'Academic & R&D'].map((f) => (
            <button
              key={f}
              onClick={() => {
                soundFX.playClick();
                setFilter(f);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-mono-tech transition-all whitespace-nowrap border ${
                filter === f
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {f === 'All' ? '⚡ ALL LEADERSHIP' : f}
            </button>
          ))}
        </div>

        {/* Interactive Master-Detail Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Faculty Directory Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {filteredList.map((leader) => {
              const isSelected = selectedLeader.id === leader.id;

              return (
                <div
                  key={leader.id}
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedLeader(leader);
                  }}
                  onMouseEnter={() => {
                    soundFX.playHover();
                    setSelectedLeader(leader);
                  }}
                  data-cursor="INSPECT"
                  className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-400/80 shadow-[0_0_25px_rgba(0,102,255,0.25)] translate-x-2'
                      : 'glass-panel border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Monogram Crest with Theme Color */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-extrabold text-base tracking-wider shrink-0 transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: `${leader.color}15`,
                        color: leader.color,
                        border: `1px solid ${leader.color}40`
                      }}
                    >
                      {leader.initials}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                          {leader.badge}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-200 transition-colors">
                        {leader.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono-tech">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <ChevronRight 
                    size={16} 
                    className={`transition-transform shrink-0 ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`} 
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Dossier Screen */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLeader.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="h-full glass-panel-glow p-6 sm:p-10 rounded-3xl border border-white/15 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Corner Monogram & Header */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-xl shadow-lg"
                        style={{
                          backgroundColor: `${selectedLeader.color}20`,
                          color: selectedLeader.color,
                          border: `1.5px solid ${selectedLeader.color}60`
                        }}
                      >
                        {selectedLeader.initials}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span 
                            className="font-mono-tech text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded"
                            style={{ backgroundColor: `${selectedLeader.color}20`, color: selectedLeader.color }}
                          >
                            {selectedLeader.badge}
                          </span>
                        </div>
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                          {selectedLeader.name}
                        </h3>
                        <p className="font-mono-tech text-xs text-cyan-400 font-medium">
                          {selectedLeader.role}
                        </p>
                      </div>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono-tech text-xs text-slate-300">
                      ⚡ {selectedLeader.experience}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-mono-tech mb-8">
                    {selectedLeader.subtitle}
                  </p>

                  {/* Academic Degrees & Credentials List */}
                  <div className="mb-8">
                    <h4 className="text-xs font-mono-tech uppercase text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap size={15} />
                      <span>ACADEMIC DEGREES & QUALIFICATIONS</span>
                    </h4>

                    <div className="space-y-2">
                      {selectedLeader.degrees.map((deg, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-900/70 border border-white/10 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 font-mono-tech"
                        >
                          <span className="text-cyan-400 shrink-0 font-bold">❯</span>
                          <span>{deg}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements & Impact */}
                  <div>
                    <h4 className="text-xs font-mono-tech uppercase text-amber-400 font-semibold mb-3 flex items-center gap-2">
                      <Award size={15} />
                      <span>KEY ACHIEVEMENTS & CONTRIBUTIONS</span>
                    </h4>

                    <div className="space-y-2.5">
                      {selectedLeader.achievements.map((ach, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Status Pill */}
                <div className="pt-6 border-t border-white/10 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-tech text-slate-400">
                  <span>FEDERAL INSTITUTE OF SCIENCE AND TECHNOLOGY // FACULTY GOVERNANCE</span>
                  <span className="text-cyan-300">EST. 2002 · FBOAES TRUST</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
