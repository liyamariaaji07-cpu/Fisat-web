import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, Library, Cpu, Users, ArrowUpRight, 
  Sparkles, Check, ChevronRight, X, ExternalLink
} from 'lucide-react';
import { CAMPUS_PILLARS } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function InteractiveCampus() {
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const getIcon = (id) => {
    switch (id) {
      case 'life': return <Users size={20} className="text-cyan-400" />;
      case 'facilities': return <Building size={20} className="text-blue-400" />;
      case 'library': return <Library size={20} className="text-emerald-400" />;
      case 'industry': return <Cpu size={20} className="text-amber-400" />;
      default: return <Sparkles size={20} className="text-cyan-400" />;
    }
  };

  return (
    <section id="campus-life" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050B14] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-3">
              <Sparkles size={13} />
              <span>EXPERIENCE THE HORIZON</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              YOUR CAMPUS. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                YOUR STORY.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            Move your cursor across each sector to dive into our living ecosystem — from 26 acres of lush hills to high-tech prototyping floors.
          </p>
        </div>

        {/* 4 Overlapping Asymmetrical Interactive Campus Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {CAMPUS_PILLARS.map((pillar, idx) => {
            // Asymmetrical grid column spans
            const colSpan = idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            const isHovered = hoveredPillar === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => {
                  soundFX.playHover();
                  setHoveredPillar(pillar.id);
                }}
                onMouseLeave={() => setHoveredPillar(null)}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedPillar(pillar);
                }}
                data-cursor="EXPLORE"
                className={`${colSpan} group relative min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-400/60 transition-all duration-500 shadow-2xl flex flex-col justify-end p-6 sm:p-8`}
              >
                {/* Background Image with Zoom & Dark Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.55] group-hover:brightness-[0.7]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
                  <div className="absolute inset-0 bg-radial-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Top Corner Icon & Sector Tag */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <div className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="font-mono-tech text-[11px] px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                    SECTOR 0{idx + 1}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1 block">
                    {pillar.subtitle}
                  </span>

                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-cyan-200 transition-colors mb-2">
                      {pillar.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-cyan-400 group-hover:text-slate-950 flex items-center justify-center text-white transition-all transform group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Description revealed / heightened on hover */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {pillar.desc}
                  </p>

                  {/* Micro stats & tags */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tech text-slate-400">
                    <span className="text-cyan-300">{pillar.stats}</span>
                    <span className="text-[11px] underline underline-offset-4 group-hover:text-white transition-colors">
                      CLICK TO INSPECT →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Inspection Modal for Campus Pillars */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPillar(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-panel-glow bg-slate-950/90 rounded-3xl p-6 sm:p-10 border border-cyan-400/40 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  setSelectedPillar(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                data-cursor="CLOSE"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 text-xs font-mono-tech">
                  {selectedPillar.subtitle}
                </span>
                <span className="text-xs font-mono-tech text-slate-400">
                  {selectedPillar.stats}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                {selectedPillar.title}
              </h3>

              <div className="relative h-60 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedPillar.image}
                  alt={selectedPillar.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {selectedPillar.desc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono-tech uppercase text-cyan-400 mb-2 font-semibold">
                  FEATURED HIGHLIGHTS & INFRASTRUCTURE
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-mono-tech"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedPillar(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider font-display hover:bg-cyan-300 transition-colors"
                >
                  DISMISS VIEW
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
