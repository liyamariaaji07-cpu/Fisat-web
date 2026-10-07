import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING FISAT SYSTEMS...');
  const [done, setDone] = useState(false);

  const statusMessages = [
    'INITIALIZING FISAT SYSTEMS...',
    'LOADING CAMPUS DATA...',
    'FETCHING DEPARTMENT MODULES...',
    'CALIBRATING TECH STACK...',
    'RENDERING INNOVATION HUB...',
    'LAUNCHING EXPERIENCE...',
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 14 + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setStatusText('ALL SYSTEMS GO. WELCOME TO FISAT.');
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 700);
        }, 500);
      }
      setProgress(Math.min(current, 100));
      const idx = Math.min(Math.floor((current / 100) * statusMessages.length), statusMessages.length - 1);
      setStatusText(statusMessages[idx]);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#03070E] overflow-hidden"
        >
          {/* Background ambient glows */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Spinning rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="w-[480px] h-[480px] rounded-full border border-dashed border-cyan-500/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-blue-500/10"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">

            {/* Emblem */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative w-24 h-24 mx-auto">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md"
                />
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/30 flex items-center justify-center shadow-[0_0_40px_rgba(0,242,254,0.2)]">
                  <span className="font-display font-black text-4xl bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">F</span>
                </div>
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="font-mono-tech text-[10px] tracking-[0.4em] text-cyan-400 mb-2 uppercase">
                Federal Institute of Science and Technology
              </div>
              <h1 className="font-display font-black text-5xl sm:text-7xl text-white tracking-tight mb-1">
                FISAT
              </h1>
              <div className="font-mono-tech text-[10px] tracking-[0.3em] text-slate-500 uppercase">
                Angamaly · Kerala · Est. 2002
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 w-72 sm:w-96"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono-tech text-[9px] tracking-widest text-slate-500 uppercase truncate max-w-[240px]">
                  {statusText}
                </span>
                <span className="font-mono-tech text-[9px] text-cyan-400 font-bold tabular-nums">
                  {Math.floor(progress)}%
                </span>
              </div>
              <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: progress + '%' }}
                />
              </div>
              <div className="flex justify-between mt-1">
                {[0, 25, 50, 75, 100].map((tick) => (
                  <span
                    key={tick}
                    className={`font-mono-tech text-[7px] tabular-nums transition-colors duration-300 ${
                      progress >= tick ? 'text-cyan-400/60' : 'text-white/10'
                    }`}
                  >
                    {tick}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bottom tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 font-mono-tech text-[9px] tracking-[0.35em] text-white/20 uppercase"
            >
              NAAC A+ · UGC AUTONOMOUS · APJ KTU AFFILIATED
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
