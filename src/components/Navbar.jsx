import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Volume2, VolumeX, Search, Compass, 
  ArrowUpRight, Sparkles, GraduationCap, Building2,
  Calendar, Trophy, Award, MapPin, Phone
} from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function Navbar({ onOpenSearch, onOpenAdmissions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [istTime, setIstTime] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setSoundEnabled(soundFX.isSoundEnabled());

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    const updateTime = () => {
      const now = new Date();
      // IST time format
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setIstTime(istString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleSound = () => {
    const newState = soundFX.toggleSound();
    setSoundEnabled(newState);
  };

  const menuItems = [
    { 
      name: 'Home', 
      href: '#hero', 
      desc: 'Engineering the future since 2002',
      tag: 'START',
      image: '/images/fisat_campus_hero.jpg'
    },
    { 
      name: 'About & Legacy', 
      href: '#about', 
      desc: '23 years of institutional excellence & FBOAES trust',
      tag: '01',
      image: '/images/fisat_campus_hero.jpg'
    },
    { 
      name: 'Academics', 
      href: '#academics', 
      desc: '9 cutting-edge departments & research centers',
      tag: '02',
      image: '/images/fisat_idea_lab.jpg'
    },
    { 
      name: 'Campus Life', 
      href: '#campus-life', 
      desc: '26-acre green tech sanctuary in Mookkannoor',
      tag: '03',
      image: '/images/fisat_campus_hero.jpg'
    },
    { 
      name: 'Innovation Hub', 
      href: '#innovation', 
      desc: 'AICTE IDEA Lab, FabLab & student startups',
      tag: '04',
      image: '/images/fisat_idea_lab.jpg'
    },
    { 
      name: 'Placements', 
      href: '#placements', 
      desc: '600+ offers, top recruiters & career pathways',
      tag: '05',
      image: '/images/fisat_campus_hero.jpg'
    },
    { 
      name: 'Events & Fests', 
      href: '#events', 
      desc: 'Bharatham, Hack_FISAT, Arangu & Tech Summits',
      tag: '06',
      image: '/images/fisat_bharatham_fest.jpg'
    },
    { 
      name: 'Hall of Fame', 
      href: '#achievements', 
      desc: 'Patents, university ranks & SIH champions',
      tag: '07',
      image: '/images/fisat_idea_lab.jpg'
    },
    { 
      name: 'Contact & Map', 
      href: '#footer', 
      desc: 'Hormis Nagar, Angamaly, Ernakulam, Kerala',
      tag: '08',
      image: '/images/fisat_campus_hero.jpg'
    }
  ];

  const navigateTo = (href) => {
    soundFX.playClick();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 z-100 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-nav py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#hero');
            }}
            data-cursor="FISAT"
            className="flex items-center gap-3.5 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,102,255,0.4)] group-hover:shadow-[0_0_28px_rgba(0,242,254,0.7)] transition-all duration-300">
              <span className="font-display font-black text-slate-950 text-xl tracking-tighter">F</span>
              <div className="absolute -inset-0.5 rounded-xl border border-cyan-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  FISAT
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-tech uppercase font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  AUTONOMOUS
                </span>
              </div>
              <span className="text-[11px] font-mono-tech text-slate-400 tracking-tight hidden md:inline">
                FEDERAL INSTITUTE OF SCIENCE AND TECHNOLOGY
              </span>
            </div>
          </a>

          {/* Center Quick Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border-white/10">
            {['Academics', 'Campus Life', 'Innovation', 'Placements', 'Events'].map((item) => {
              const anchor = `#${item.toLowerCase().replace(' ', '-')}`;
              return (
                <button
                  key={item}
                  onClick={() => navigateTo(anchor)}
                  onMouseEnter={() => soundFX.playHover()}
                  className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
                  data-cursor="VIEW"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live IST Clock */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 font-mono-tech text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>IST {istTime || '14:26'}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={handleToggleSound}
              onMouseEnter={() => soundFX.playHover()}
              className={`p-2.5 rounded-xl border transition-all ${
                soundEnabled 
                  ? 'bg-cyan-500/15 border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.25)]' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
              }`}
              title={soundEnabled ? 'Sound FX Enabled (Click to mute)' : 'Sound FX Muted (Click to enable)'}
              aria-label="Toggle sound effects"
              data-cursor="SOUND"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Quick Command / Search Modal Trigger */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenSearch?.();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs font-mono-tech"
              title="Search FISAT (Ctrl+K)"
              data-cursor="SEARCH"
            >
              <Search size={15} className="text-cyan-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Admissions / Apply CTA */}
            <button
              onClick={() => {
                soundFX.playSuccess();
                onOpenAdmissions?.();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] hover:scale-105 active:scale-95 transition-all"
              data-cursor="APPLY"
            >
              <Sparkles size={14} />
              <span>ADMISSIONS '26</span>
            </button>

            {/* Fullscreen Creative Menu Trigger */}
            <button
              onClick={() => {
                soundFX.playWhoosh();
                setIsOpen(!isOpen);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`p-2.5 rounded-xl border transition-all flex items-center gap-2 ${
                isOpen
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                  : 'bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border-cyan-400/40 text-cyan-300 hover:border-cyan-400'
              }`}
              data-cursor={isOpen ? 'CLOSE' : 'MENU'}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
              <span className="font-display font-bold text-xs tracking-wider hidden sm:inline">
                {isOpen ? 'CLOSE' : 'MENU'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Creative Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 4%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 4%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 4%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050B14]/98 backdrop-blur-3xl overflow-y-auto flex flex-col justify-between p-6 sm:p-12 lg:p-16"
          >
            {/* Background dynamic ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none" />

            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 pt-16">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono-tech text-xs">
                  NAVIGATION MATRIX // 2026
                </span>
                <span className="text-slate-400 text-xs font-mono-tech hidden md:inline">
                  Select a destination to initiate transition
                </span>
              </div>
              <div className="font-mono-tech text-xs text-slate-400 flex items-center gap-2">
                <MapPin size={14} className="text-cyan-400" />
                <span>Angamaly, Kerala · 10.1983° N, 76.4385° E</span>
              </div>
            </div>

            {/* Middle Main Menu Grid: Large Editorial Items + Live Preview Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
              {/* Menu Links Column */}
              <div className="lg:col-span-7 flex flex-col gap-2 sm:gap-3">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="group"
                  >
                    <button
                      onClick={() => navigateTo(item.href)}
                      onMouseEnter={() => {
                        soundFX.playHover();
                        setActiveHover(item);
                      }}
                      className="flex items-baseline gap-4 text-left w-full transition-transform duration-300 group-hover:translate-x-3"
                      data-cursor="ENTER"
                    >
                      <span className="font-mono-tech text-xs sm:text-sm text-cyan-400/60 font-semibold group-hover:text-cyan-300">
                        {item.tag}
                      </span>
                      <span className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-white group-hover:to-blue-400 tracking-tight transition-all">
                        {item.name}
                      </span>
                      <ArrowUpRight 
                        size={20} 
                        className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                      />
                    </button>
                    <p className="ml-10 text-xs text-slate-400 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Right Interactive Preview Card */}
              <div className="lg:col-span-5 hidden lg:flex flex-col">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900/50 p-6 glass-panel-glow">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-5">
                    <img
                      src={activeHover?.image || '/images/fisat_campus_hero.jpg'}
                      alt={activeHover?.name || 'FISAT Campus'}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono-tech text-cyan-300 border border-cyan-400/30">
                      LIVE RADAR VIEW
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    {activeHover ? activeHover.name : 'Explore FISAT'}
                  </h3>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {activeHover ? activeHover.desc : 'Reimagining engineering education with 23 years of excellence, UGC Autonomous status, and top tier placements.'}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-slate-400">
                    <span>NAAC A+ ACCREDITED</span>
                    <span className="text-cyan-400">CGPA 3.45</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Overlay Footer */}
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-4">
                <span>EST. 2002 BY FBOAES</span>
                <span>•</span>
                <span>KTU AFFILIATED</span>
                <span>•</span>
                <span>AICTE APPROVED</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="tel:+914842725272" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Phone size={13} />
                  <span>+91 484 2725272</span>
                </a>
                <a href="mailto:mail@fisat.ac.in" className="hover:text-cyan-400 transition-colors">
                  mail@fisat.ac.in
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
