import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, ArrowUpRight, Cpu, Network, Wrench, 
  Zap, Compass, Sliders, Layers, ChevronRight, X, Sparkles, BookOpen
} from 'lucide-react';
import { DEPARTMENTS } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function AcademicsUniverse() {
  const [activeDept, setActiveDept] = useState(DEPARTMENTS[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section id="academics" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070E1A] overflow-hidden">
      {/* Dynamic Background Accent Gradient tied to active department */}
      <div 
        className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: activeDept.color }}
      />
      <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-3">
              <GraduationCap size={13} />
              <span>THE ACADEMIC COSMOS // 9 MAJORS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              DEPARTMENT <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                UNIVERSE.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            Hover over any department code below to beam its frequency into the central cockpit. Dive into specialized curricula, high-tech labs, and student inventions.
          </p>
        </div>

        {/* Master Two-Column Universe Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Department Selector (List / Buttons) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {DEPARTMENTS.map((dept, index) => {
              const isActive = activeDept.id === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveDept(dept);
                  }}
                  onMouseEnter={() => {
                    soundFX.playHover();
                    setActiveDept(dept);
                  }}
                  data-cursor="BEAM"
                  className={`group w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-900/90 border-cyan-400/80 shadow-[0_0_25px_rgba(0,102,255,0.25)] translate-x-2'
                      : 'bg-white/3 border-white/8 hover:bg-white/7 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span 
                      className="font-mono-tech text-base font-extrabold px-2.5 py-1 rounded-lg transition-colors"
                      style={{ 
                        color: isActive ? dept.color : '#94A3B8',
                        backgroundColor: isActive ? `${dept.color}15` : 'transparent'
                      }}
                    >
                      {dept.code}
                    </span>

                    <div className="flex flex-col">
                      <span className={`font-display font-bold text-sm sm:text-base transition-colors ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {dept.name}
                      </span>
                      <span className="text-[11px] font-mono-tech text-slate-400">
                        "{dept.slogan}"
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-tech text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                      VIEW
                    </span>
                    <ChevronRight 
                      size={18} 
                      className={`transition-transform ${
                        isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-500'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Department Orbit Cockpit */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDept.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="h-full glass-panel-glow p-6 sm:p-10 rounded-3xl border border-white/15 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent glow corner */}
                <div 
                  className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none"
                  style={{ backgroundColor: activeDept.color }}
                />

                {/* Cockpit Top Bar */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2.5">
                      <span 
                        className="w-3 h-3 rounded-full animate-ping"
                        style={{ backgroundColor: activeDept.color }}
                      />
                      <span className="font-mono-tech text-xs tracking-widest uppercase font-bold" style={{ color: activeDept.color }}>
                        DEPARTMENT COCKPIT // {activeDept.code}
                      </span>
                    </div>

                    <span className="text-xs font-mono-tech px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      PLACEMENT RATE: <strong className="text-white">{activeDept.stats.placementRate}</strong>
                    </span>
                  </div>

                  {/* Slogan & Title */}
                  <div className="mb-4">
                    <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-slate-400 font-bold block mb-1">
                      MISSION STATEMENT
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
                      "{activeDept.slogan}"
                    </h3>
                  </div>

                  <h4 className="text-lg sm:text-xl font-medium text-slate-200 mb-4">
                    {activeDept.name}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                    {activeDept.tagline}
                  </p>

                  {/* Key Stats Ribbon */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 p-4 rounded-2xl bg-black/40 border border-white/10 font-mono-tech">
                    <div>
                      <span className="text-[10px] text-slate-400 block">ENROLLMENT</span>
                      <span className="text-lg font-bold text-white">{activeDept.stats.students}+</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">FACULTY CORPS</span>
                      <span className="text-lg font-bold text-white">{activeDept.stats.faculty}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">PLACEMENT</span>
                      <span className="text-lg font-bold text-cyan-400">{activeDept.stats.placementRate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">R&D BUILDS</span>
                      <span className="text-lg font-bold text-emerald-400">{activeDept.stats.projects}</span>
                    </div>
                  </div>

                  {/* Labs & Centers list */}
                  <div className="mb-6">
                    <span className="text-xs font-mono-tech uppercase text-cyan-400 font-semibold block mb-3">
                      ADVANCED LABORATORIES & RESEARCH FACILITIES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeDept.labs.map((lab) => (
                        <div 
                          key={lab}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
                        >
                          <Cpu size={14} className="text-cyan-400 shrink-0" />
                          <span className="truncate">{lab}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-400" />
                    <span className="text-xs text-slate-300 font-mono-tech">
                      Featured Project: <strong className="text-white">{activeDept.featuredProject}</strong>
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setDrawerOpen(true);
                    }}
                    onMouseEnter={() => soundFX.playHover()}
                    data-cursor="INSPECT"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold font-display text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>VIEW SYLLABUS & LABS</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Department Detail Drawer / Modal */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setDrawerOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl glass-panel-glow bg-slate-950/95 rounded-3xl p-6 sm:p-8 border border-cyan-400/50 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setDrawerOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono-tech text-xs font-bold">
                  {activeDept.code}
                </span>
                <span className="font-mono-tech text-xs text-slate-400">
                  UGC AUTONOMOUS CURRICULUM
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                {activeDept.name}
              </h3>
              <p className="text-sm text-cyan-300 font-mono-tech mb-6">
                "{activeDept.slogan}"
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono-tech uppercase text-cyan-400 font-semibold mb-2">
                    DEGREES OFFERED (B.TECH, M.TECH & RESEARCH)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeDept.degrees.map((deg) => (
                      <span key={deg} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white">
                        🎓 {deg}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono-tech uppercase text-cyan-400 font-semibold mb-2">
                    RESEARCH LABS & EQUIPMENT
                  </h4>
                  <ul className="space-y-2">
                    {activeDept.labs.map((lab) => (
                      <li key={lab} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono-tech uppercase text-cyan-400 font-semibold mb-2">
                    SHOWCASE STUDENT CAPSTONE
                  </h4>
                  <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-sm text-cyan-200">
                    💡 {activeDept.featuredProject}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold font-display text-xs uppercase"
                >
                  DONE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
