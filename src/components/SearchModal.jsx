import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles, Building, Calendar, Trophy, BookOpen } from 'lucide-react';
import { DEPARTMENTS, EVENTS_DATA, HALL_OF_FAME, CAMPUS_LOCATIONS } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search items across datasets
  const allSearchable = [
    ...DEPARTMENTS.map(d => ({
      type: 'Department',
      title: `${d.code} — ${d.name}`,
      subtitle: d.slogan,
      anchor: '#academics',
      icon: <BookOpen size={16} className="text-cyan-400" />
    })),
    ...EVENTS_DATA.map(e => ({
      type: 'Event',
      title: e.title,
      subtitle: `${e.date} · ${e.venue}`,
      anchor: '#events',
      icon: <Calendar size={16} className="text-amber-400" />
    })),
    ...HALL_OF_FAME.map(h => ({
      type: 'Achievement',
      title: h.title,
      subtitle: h.badge,
      anchor: '#achievements',
      icon: <Trophy size={16} className="text-rose-400" />
    })),
    ...CAMPUS_LOCATIONS.map(l => ({
      type: 'Campus Facility',
      title: l.name,
      subtitle: l.zone,
      anchor: '#campus-life',
      icon: <Building size={16} className="text-emerald-400" />
    }))
  ];

  const results = query.trim() === ''
    ? allSearchable.slice(0, 6)
    : allSearchable.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (anchor) => {
    soundFX.playClick();
    onClose();
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-start justify-center pt-20 sm:pt-28 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: -20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl glass-panel-glow bg-slate-950/95 rounded-3xl border border-cyan-400/40 overflow-hidden shadow-2xl"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
          <Search size={20} className="text-cyan-400" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search departments, labs, events, facilities..."
            className="w-full bg-transparent text-white placeholder-slate-500 font-mono-tech text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {results.length > 0 ? (
            results.map((item, idx) => (
              <button
                key={`${item.title}-${idx}`}
                onClick={() => handleSelect(item.anchor)}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full p-3.5 rounded-2xl bg-white/3 hover:bg-white/8 border border-white/5 hover:border-cyan-400/30 flex items-center justify-between text-left transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono-tech text-cyan-400 font-semibold">
                        {item.type}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono-tech text-cyan-400">
                  <span>JUMP</span>
                  <CornerDownLeft size={13} />
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 font-mono-tech text-xs">
              NO MATCHES FOUND FOR "{query}". TRY "CSE", "BHARATHAM", OR "FABLAB".
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-6 py-3 border-t border-white/10 bg-slate-900/60 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
          <div className="flex items-center gap-3">
            <span>ESC to close</span>
            <span>•</span>
            <span>CLICK to jump</span>
          </div>
          <span className="text-cyan-400">FISAT QUICK COMMAND</span>
        </div>
      </motion.div>
    </div>
  );
}
