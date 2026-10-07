import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Lightbulb, Rocket, GraduationCap, Briefcase, 
  Globe, Sparkles, Award, Star, ExternalLink, ChevronRight
} from 'lucide-react';
import { HALL_OF_FAME } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function HallOfFame() {
  const [activeCard, setActiveCard] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="text-amber-400" size={24} />;
      case 'Lightbulb': return <Lightbulb className="text-cyan-400" size={24} />;
      case 'Rocket': return <Rocket className="text-rose-400" size={24} />;
      case 'GraduationCap': return <GraduationCap className="text-blue-400" size={24} />;
      case 'Briefcase': return <Briefcase className="text-emerald-400" size={24} />;
      case 'Globe': return <Globe className="text-purple-400" size={24} />;
      default: return <Award className="text-cyan-400" size={24} />;
    }
  };

  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050B14] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono-tech mb-3">
              <Trophy size={13} />
              <span>COLLECTIBLE MERIT ARCHIVE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              WE DON'T JUST LEARN. <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                WE MAKE NOISE.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            Hover over our collectible hall of fame cards. From Smart India Hackathon champions to national patent grants and startup IPO tracks.
          </p>
        </div>

        {/* Collectible Foil Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HALL_OF_FAME.map((card, idx) => {
            const isSelected = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => {
                  soundFX.playClick();
                  setActiveCard(isSelected ? null : card.id);
                }}
                onMouseEnter={() => soundFX.playHover()}
                data-cursor="FOIL"
                className="group relative rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[340px] bg-gradient-to-b from-slate-900/90 to-slate-950/90 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]"
              >
                {/* Holographic foil shimmer streak on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-amber-400/40 transition-colors">
                      {getIcon(card.icon)}
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="font-mono-tech text-xs text-amber-400 font-bold">
                        {card.badge}
                      </span>
                      <span className="text-[10px] font-mono-tech text-slate-500">
                        {card.year}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono-tech text-[11px] text-slate-400 uppercase tracking-widest block mb-1">
                    {card.category}
                  </span>

                  <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-amber-200 transition-colors mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Card Bottom: Stat Anchor */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono-tech text-slate-500">HONOR BENCHMARK</span>
                    <span className="font-display font-black text-xl text-amber-300">
                      {card.stat}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-amber-400 group-hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all">
                    <Sparkles size={15} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Motivational Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-8 rounded-3xl glass-panel-glow border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="font-display font-black text-xl sm:text-2xl text-white mb-1">
              HAVE A BREAKTHROUGH PROJECT IN MIND?
            </h4>
            <p className="text-sm text-slate-300">
              FISAT IEDC & Kerala Startup Mission provide up to ₹2,50,000 prototype grants for selected student patents and ventures.
            </p>
          </div>

          <a
            href="#innovation"
            onClick={(e) => {
              e.preventDefault();
              soundFX.playClick();
              document.getElementById('innovation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono-tech text-xs tracking-wider uppercase font-bold border border-white/20 shrink-0 transition-all flex items-center gap-2"
          >
            <span>DISCOVER IDEA LAB</span>
            <ChevronRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
