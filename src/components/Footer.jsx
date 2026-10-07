import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Globe, ArrowUp, Sparkles, 
  Terminal, ShieldCheck, Heart, ChevronRight, X
} from 'lucide-react';

import { soundFX } from '../utils/sound';

export default function Footer({ onOpenTerminal }) {
  const [terminalOpen, setTerminalOpen] = useState(false);

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { title: 'Admissions 2026', href: 'https://fisat.ac.in/admission/', external: true },
    { title: 'Departments & Degrees', href: '#academics' },
    { title: 'Placement & Training Cell', href: '#placements' },
    { title: 'AICTE IDEA Lab & FabLab', href: '#innovation' },
    { title: 'Bharatham Cultural Fest', href: '#events' },
    { title: 'Alumni Network (FISATIAN)', href: 'https://alumni.fisat.ac.in/', external: true },
    { title: 'NAAC & NIRF Disclosures', href: 'https://fisat.ac.in/naac/', external: true },
    { title: 'Internal Quality Cell (IQAC)', href: 'https://fisat.ac.in/iqac/', external: true }
  ];

  return (
    <footer id="footer" className="relative bg-[#03070E] pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      {/* Background ambient neon glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-t from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Massive Memorable Sign-Off: "SEE YOU ON CAMPUS." */}
        <div className="border-b border-white/10 pb-16 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-cyan-400 font-bold">
              YOUR CHAPTER BEGINS HERE
            </span>
          </motion.div>

          <h2 className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            SEE YOU ON <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              CAMPUS. 🔥
            </span>
          </h2>
        </div>

        {/* 4-Column Editorial Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(0,102,255,0.4)]">
                  <span className="font-display font-black text-slate-950 text-2xl">F</span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-wider">
                    FISAT
                  </h3>
                  <p className="text-xs font-mono-tech text-cyan-400">
                    Autonomous · NAAC A+ Grade (3.45)
                  </p>
                </div>
              </div>

              <p className="font-mono-tech text-xs uppercase text-slate-400 font-semibold mb-2">
                FEDERAL INSTITUTE OF SCIENCE AND TECHNOLOGY
              </p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
                Established and managed by the Federal Bank Officers' Association Educational Society (FBOAES). Dedicated to engineering excellence since 2002.
              </p>

              {/* Campus Address & Contacts */}
              <div className="space-y-2 text-xs font-mono-tech text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>Hormis Nagar, Mookkannoor P.O., Angamaly, Ernakulam, Kerala - 683577, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-cyan-400 shrink-0" />
                  <a href="tel:+914842725272" className="hover:text-cyan-300 transition-colors">
                    +91 484 2725272 / +91 484 2725273
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-cyan-400 shrink-0" />
                  <a href="mailto:mail@fisat.ac.in" className="hover:text-cyan-300 transition-colors">
                    mail@fisat.ac.in / admissions@fisat.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
              <a
                href="https://instagram.com/fisatofficial"
                target="_blank"
                rel="noreferrer"
                data-cursor="SOCIAL"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://linkedin.com/school/fisat"
                target="_blank"
                rel="noreferrer"
                data-cursor="SOCIAL"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href="https://youtube.com/@fisat"
                target="_blank"
                rel="noreferrer"
                data-cursor="SOCIAL"
                aria-label="YouTube"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://twitter.com/fisatofficial"
                target="_blank"
                rel="noreferrer"
                data-cursor="SOCIAL"
                aria-label="Twitter / X"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://github.com/foss-cell-fisat"
                target="_blank"
                rel="noreferrer"
                data-cursor="SOCIAL"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="lg:col-span-4">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-6">
              PORTAL NAVIGATION & DIRECTORIES
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noreferrer' : ''}
                    onMouseEnter={() => soundFX.playHover()}
                    className="group flex items-center justify-between text-sm text-slate-300 hover:text-cyan-300 transition-colors py-1"
                  >
                    <span>{link.title}</span>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all text-cyan-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Terminal Easter Egg & Status */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono-tech text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-6">
                SYSTEM TELEMETRY
              </h4>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono-tech text-xs space-y-2.5 text-slate-400">
                <div className="flex justify-between">
                  <span>STATUS</span>
                  <span className="text-emerald-400 font-bold">100% OPERATIONAL</span>
                </div>
                <div className="flex justify-between">
                  <span>AUTONOMY</span>
                  <span className="text-white">UGC CONFERRED</span>
                </div>
                <div className="flex justify-between">
                  <span>NAAC CGPA</span>
                  <span className="text-cyan-400 font-bold">3.45 ('A+' GRADE)</span>
                </div>
                <div className="flex justify-between">
                  <span>CAMPUS GRID</span>
                  <span className="text-slate-200">26 ACRE GREEN</span>
                </div>
              </div>
            </div>

            {/* Secret Terminal Trigger Button */}
            <div className="pt-6">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setTerminalOpen(true);
                }}
                onMouseEnter={() => soundFX.playHover()}
                data-cursor="EXECUTE"
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 font-mono-tech text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Terminal size={14} className="text-cyan-400" />
                <span>LAUNCH FISAT TERMINAL // CLI</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-500">
          <div>
            © {new Date().getFullYear()} Federal Institute of Science and Technology (FISAT). Reimagined Frontend.
          </div>

          <div className="flex items-center gap-6">
            <span>Crafted for Web Design Creative Showcase 🔥</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Secret FISAT CLI Terminal Modal */}
      <AnimatePresence>
        {terminalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setTerminalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-xl bg-slate-950 rounded-2xl border border-cyan-400/50 p-6 font-mono-tech text-xs shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-slate-400 ml-2">root@fisat-core:~#</span>
                </div>
                <button
                  onClick={() => setTerminalOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-2 text-slate-300">
                <p className="text-cyan-400 font-bold">
                  [FISAT MAINFRAME OS v2026.4 // INITIALIZED]
                </p>
                <p>
                  &gt; hostname: hormonal-grid.fisat.ac.in
                </p>
                <p>
                  &gt; identity: Federal Institute of Science and Technology
                </p>
                <p>
                  &gt; location: 10.1983 N, 76.4385 E (Hormis Nagar, Mookkannoor)
                </p>
                <p>
                  &gt; accreditation: NAAC 'A+' (3.45 CGPA) | UGC Autonomous
                </p>
                <p>
                  &gt; makerspace: AICTE IDEA Lab (Active) + KSUM FabLab
                </p>
                <p className="text-emerald-400">
                  &gt; message: "Wait… THIS is our college website?! 🔥"
                </p>
                <p className="text-slate-500 pt-3 border-t border-white/10">
                  Press ESC or click dismiss to close terminal shell.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
