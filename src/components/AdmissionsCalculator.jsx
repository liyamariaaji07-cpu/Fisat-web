import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Award, Calculator, CheckCircle2, 
  ArrowRight, X, Download, ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOLARSHIP_TIERS } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function AdmissionsCalculator({ isOpen, onClose }) {
  const [keamRank, setKeamRank] = useState('');
  const [pcmPercentage, setPcmPercentage] = useState('');
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const handleCalculate = (e) => {
    e.preventDefault();
    soundFX.playSuccess();

    const rank = parseInt(keamRank, 10);
    const pcm = parseFloat(pcmPercentage);

    let tier = null;
    if (rank && rank <= 2000 || pcm >= 95) {
      tier = SCHOLARSHIP_TIERS[0]; // 100% waiver
    } else if (rank && rank <= 5000 || pcm >= 90) {
      tier = SCHOLARSHIP_TIERS[1]; // 50k / yr
    } else if (pcm >= 85) {
      tier = SCHOLARSHIP_TIERS[3]; // 30k / yr
    } else {
      tier = {
        title: "Merit Institutional Aid & Loan Assistance",
        amount: "Low-Interest Federal Bank Loan + Need Aid",
        eligibility: "Assistance available via FBOAES Educational Trust",
        quota: "General / Institutional",
        color: "from-blue-600 to-cyan-600"
      };
    }

    setResult(tier);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#00F2FE', '#0066FF', '#10B981']
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass-panel-glow bg-slate-950/95 rounded-3xl p-6 sm:p-10 border border-cyan-400/40 my-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono-tech text-xs">
            ₹12 CR+ POOL // SCHOLARSHIP MATRIX
          </span>
          <span className="text-xs font-mono-tech text-slate-400">
            ADMISSIONS 2026
          </span>
        </div>

        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
          Scholarship & Eligibility Simulator
        </h3>
        <p className="text-slate-300 text-sm mb-6">
          Find out in 5 seconds which scholarship tier you unlock at FISAT.
        </p>

        <form onSubmit={handleCalculate} className="space-y-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono-tech text-slate-300 uppercase mb-1.5">
                ESTIMATED KEAM RANK (OR EXPECTED)
              </label>
              <input
                type="number"
                placeholder="e.g. 1850"
                value={keamRank}
                onChange={(e) => setKeamRank(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono-tech text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-tech text-slate-300 uppercase mb-1.5">
                PLUS TWO (PCM) PERCENTAGE %
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="e.g. 94.5"
                value={pcmPercentage}
                onChange={(e) => setPcmPercentage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono-tech text-xs"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold font-display text-xs uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(0,242,254,0.35)]"
          >
            CALCULATE ELIGIBILITY & SCHOLARSHIP
          </button>
        </form>

        {/* Result Reveal */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-400/40"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono-tech text-cyan-400 uppercase font-bold">
                ELIGIBILITY CONFIRMED
              </span>
              <span className="text-xs font-mono-tech text-slate-300">
                {result.quota}
              </span>
            </div>

            <h4 className="font-display font-black text-2xl text-white mb-1">
              {result.title}
            </h4>
            <div className="font-display font-extrabold text-xl text-emerald-400 mb-3">
              🎉 {result.amount}
            </div>

            <p className="text-xs text-slate-300 mb-4">
              Criterion: {result.eligibility}
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-tech">
              <span className="text-slate-400">
                Apply online through FISAT Admissions Portal
              </span>
              <a
                href="https://fisat.ac.in/admission/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-colors"
              >
                PROCEED TO APPLY →
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
