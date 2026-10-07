import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  ArrowDown, Compass, Play, Sparkles, Terminal, 
  Cpu, Layers, ShieldCheck, MapPin, Zap
} from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function Hero({ onOpenCampusTour, onOpenAdmissions }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax motion values
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const scrollToSection = (id) => {
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#050B14]"
    >
      {/* Layer 0: Deep Background with Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      {/* Layer 1: Cinematic Campus Hero Image with Mouse Parallax & Gradient Mask */}
      <motion.div
        animate={{
          x: mousePos.x * -18,
          y: mousePos.y * -18,
          scale: 1.04
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src="/images/fisat_campus_hero.jpg"
          alt="FISAT Futuristic Campus"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12]"
        />
        {/* Layered Vignette and Gradient Blends */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-[#050B14]/70" />
        <div className="absolute inset-0 bg-radial-gradient" />
        <div className="absolute inset-0 bg-radial-cyan" />
      </motion.div>

      {/* Layer 2: Floating Engineering Schematic & Circuit Overlay */}
      <motion.div
        animate={{
          x: mousePos.x * 24,
          y: mousePos.y * 24
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 80 }}
        className="absolute inset-0 pointer-events-none z-1 flex items-center justify-center"
      >
        {/* SVG Blueprint Geometric Lines */}
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle cx="50%" cy="50%" r="340" stroke="url(#cyanLine)" strokeWidth="1" strokeDasharray="6 8" fill="none" />
          <circle cx="50%" cy="50%" r="480" stroke="url(#cyanLine)" strokeWidth="1" strokeDasharray="2 12" fill="none" />
          <line x1="10%" y1="30%" x2="40%" y2="30%" stroke="url(#cyanLine)" strokeWidth="1" />
          <line x1="40%" y1="30%" x2="45%" y2="24%" stroke="url(#cyanLine)" strokeWidth="1" />
          <line x1="60%" y1="70%" x2="90%" y2="70%" stroke="url(#cyanLine)" strokeWidth="1" />
          <line x1="55%" y1="76%" x2="60%" y2="70%" stroke="url(#cyanLine)" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Layer 3: Floating Telemetry Badges (Desktop) */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 pointer-events-none z-10 hidden lg:block">
        {/* Top-Left Telemetry */}
        <motion.div
          animate={{ x: mousePos.x * 12, y: mousePos.y * 12 }}
          className="absolute top-32 left-8 glass-panel px-4 py-2.5 rounded-xl border border-white/10"
        >
          <div className="flex items-center gap-2 text-cyan-400 font-mono-tech text-xs">
            <Cpu size={14} className="animate-spin text-cyan-400 duration-3000" />
            <span>AICTE IDEA LAB // ACTIVE</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
            5,000 SQ.FT RAPID PROTOTYPING BAY
          </div>
        </motion.div>

        {/* Top-Right Telemetry */}
        <motion.div
          animate={{ x: mousePos.x * -14, y: mousePos.y * -14 }}
          className="absolute top-32 right-8 glass-panel px-4 py-2.5 rounded-xl border border-white/10"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-mono-tech text-xs">
            <ShieldCheck size={14} />
            <span>NAAC 'A+' ACCREDITED (3.45)</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
            UGC AUTONOMOUS INSTITUTION
          </div>
        </motion.div>

        {/* Bottom-Left Telemetry */}
        <motion.div
          animate={{ x: mousePos.x * 16, y: mousePos.y * 16 }}
          className="absolute bottom-28 left-8 glass-panel px-4 py-2.5 rounded-xl border border-white/10"
        >
          <div className="flex items-center gap-2 text-blue-400 font-mono-tech text-xs">
            <MapPin size={14} />
            <span>LAT 10.1983° N, LON 76.4385° E</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
            HORMIS NAGAR, MOOKKANNOOR, KERALA
          </div>
        </motion.div>

        {/* Bottom-Right Telemetry */}
        <motion.div
          animate={{ x: mousePos.x * -16, y: mousePos.y * -16 }}
          className="absolute bottom-28 right-8 glass-panel px-4 py-2.5 rounded-xl border border-white/10"
        >
          <div className="flex items-center gap-2 text-amber-400 font-mono-tech text-xs">
            <Zap size={14} />
            <span>23+ YEARS // EST. 2002</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
            FEDERAL BANK OFFICERS' ASSOC. (FBOAES)
          </div>
        </motion.div>
      </div>

      {/* Layer 4: Central Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Futuristic Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,242,254,0.15)]"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono-tech text-xs text-cyan-300 tracking-wider">
            ADMISSIONS 2026 LIVE · UGC AUTONOMOUS · NAAC A+
          </span>
        </motion.div>

        {/* Brand Super-Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-3"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-cyan-400/60" />
            <h2 className="font-mono-tech text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-bold">
              FEDERAL INSTITUTE OF SCIENCE AND TECHNOLOGY
            </h2>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-cyan-400/60" />
          </div>
        </motion.div>

        {/* Master Statement Heading: "ENGINEERING THE FUTURE." */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-white uppercase mb-6"
        >
          <span className="block drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
            ENGINEERING
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-glow-cyan">
            THE FUTURE.
          </span>
        </motion.h1>

        {/* Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10"
        >
          Where Kerala's sharpest young minds design tomorrow's robots, code global systems, and turn ambitious dreams into impactful realities.
        </motion.p>

        {/* Dual Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* CTA 1: EXPLORE FISAT */}
          <button
            onClick={() => scrollToSection('about')}
            onMouseEnter={() => soundFX.playHover()}
            data-cursor="EXPLORE"
            className="w-full sm:w-auto group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-slate-950 font-bold font-display text-sm tracking-widest uppercase shadow-[0_0_35px_rgba(0,242,254,0.4)] hover:shadow-[0_0_50px_rgba(0,242,254,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <span>EXPLORE FISAT</span>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>

          {/* CTA 2: DISCOVER CAMPUS */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenCampusTour?.();
            }}
            onMouseEnter={() => soundFX.playHover()}
            data-cursor="CAMPUS"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white hover:text-cyan-300 border border-white/15 hover:border-cyan-400/50 font-bold font-display text-sm tracking-widest uppercase transition-all hover:bg-white/5 flex items-center justify-center gap-3 group"
          >
            <Compass size={16} className="text-cyan-400 group-hover:rotate-45 transition-transform" />
            <span>DISCOVER CAMPUS</span>
          </button>
        </motion.div>

        {/* Quick Micro Stat Ticker on Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono-tech"
        >
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-white">23+</span>
            <span className="text-[11px] text-slate-400 tracking-wider">YEARS LEGACY</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-cyan-400">₹12 Cr+</span>
            <span className="text-[11px] text-slate-400 tracking-wider">SCHOLARSHIPS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-blue-400">3,200+</span>
            <span className="text-[11px] text-slate-400 tracking-wider">STUDENTS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-emerald-400">602+</span>
            <span className="text-[11px] text-slate-400 tracking-wider">OFFERS RECENT</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.button
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-colors p-2 z-20 flex flex-col items-center gap-1"
        data-cursor="SCROLL"
        aria-label="Scroll down to explore FISAT"
      >
        <span className="text-[10px] font-mono-tech tracking-widest text-slate-500 uppercase">
          SCROLL
        </span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}
