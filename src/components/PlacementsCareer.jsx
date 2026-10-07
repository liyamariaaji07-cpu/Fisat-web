import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, TrendingUp, Building2, CheckCircle2, 
  ArrowRight, Sparkles, Award, Shield, Users
} from 'lucide-react';
import { RECRUITERS, PLACEMENT_CAREER_PATH } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function PlacementsCareer() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="placements" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070E1A] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-3">
              <Briefcase size={13} />
              <span>PLACEMENT & TRAINING CELL (PTC)</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              FROM CAMPUS <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                TO CAREER.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            A battle-tested training roadmap that bridges foundational classroom theory with top global tech product engineering offers.
          </p>
        </div>

        {/* 4 Placement Benchmarks Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
              RECORD OFFERS
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-cyan-400 mb-1">
              602+
            </div>
            <p className="text-xs text-slate-400">Total job offers for recent batches</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
              TOP PACKAGE
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-amber-400 mb-1">
              ₹17.04 L
            </div>
            <p className="text-xs text-slate-400">Highest CTC offered by product giants</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
              AVERAGE PACKAGE
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-emerald-400 mb-1">
              ₹5.70 L
            </div>
            <p className="text-xs text-slate-400">Average package across departments</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
              RECRUITER ROSTER
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-400 mb-1">
              120+
            </div>
            <p className="text-xs text-slate-400">Companies visiting campus yearly</p>
          </div>
        </div>

        {/* Moving Marquee of Verified Recruiters */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              FEATURED CORPORATE PARTNERS & GLOBAL RECRUITERS
            </h3>
            <span className="text-[11px] font-mono-tech text-slate-500 hidden sm:inline">
              HOVER TO PAUSE STREAM
            </span>
          </div>

          {/* Marquee Row 1 */}
          <div className="relative overflow-hidden py-4 border-y border-white/10 mask-gradient-x">
            <div className="animate-marquee flex gap-6 items-center">
              {[...RECRUITERS, ...RECRUITERS].map((r, i) => (
                <div
                  key={`${r.name}-${i}`}
                  onMouseEnter={() => soundFX.playHover()}
                  data-cursor="PARTNER"
                  className="px-6 py-3 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/40 flex items-center gap-3 transition-colors shrink-0"
                >
                  <span className="font-display font-bold text-lg text-white">
                    {r.name}
                  </span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {r.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Career Pathway Roadmap */}
        <div>
          <div className="mb-8">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
              THE 4-YEAR ASCENT ENGINE
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-white">
              Student → Skills → Projects → Internship → Placement → Career
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLACEMENT_CAREER_PATH.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.step}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveStep(idx);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  data-cursor="STEP"
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.2)]'
                      : 'glass-panel border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono-tech text-xs px-2.5 py-1 rounded bg-white/5 text-cyan-400 font-bold">
                        STEP {step.step}
                      </span>
                      <span className="text-xs font-mono-tech text-slate-400">
                        {step.phase}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl text-white mb-2">
                      {step.title}
                    </h4>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono-tech text-cyan-400">
                    <span>{isActive ? '● ACTIVE STAGE' : '○ CLICK TO SELECT'}</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
