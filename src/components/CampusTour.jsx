import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Compass, Navigation, Maximize2, 
  ChevronRight, Sparkles, X, Layers, Eye
} from 'lucide-react';
import { CAMPUS_LOCATIONS } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function CampusTour({ isModal = false, onClose }) {
  const [activeLocation, setActiveLocation] = useState(CAMPUS_LOCATIONS[0]);

  const content = (
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header if not in modal */}
      {!isModal && (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-3">
              <Compass size={13} />
              <span>RADAR NAVIGATION // 26 ACRES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              EXPLORE THE <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                CAMPUS.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            Click on any quadrant below to teleport your viewport across Hormis Nagar's architectural landmarks.
          </p>
        </div>
      )}

      {/* Main Radar / Tour Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Location Switcher Buttons */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {CAMPUS_LOCATIONS.map((loc) => {
            const isActive = activeLocation.id === loc.id;

            return (
              <button
                key={loc.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveLocation(loc);
                }}
                onMouseEnter={() => {
                  soundFX.playHover();
                  setActiveLocation(loc);
                }}
                data-cursor="TELEPORT"
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                  isActive
                    ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.25)] translate-x-2'
                    : 'glass-panel border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${
                    isActive ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-slate-400'
                  }`}>
                    <MapPin size={16} />
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white">
                      {loc.name}
                    </h4>
                    <span className="text-[11px] font-mono-tech text-cyan-400">
                      {loc.zone} · {loc.coords}
                    </span>
                  </div>
                </div>

                <ChevronRight 
                  size={16} 
                  className={isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'} 
                />
              </button>
            );
          })}
        </div>

        {/* Right: Immersive Teleport Display Screen */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLocation.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="glass-panel-glow rounded-3xl overflow-hidden border border-cyan-400/30 flex flex-col justify-between h-full p-6 sm:p-8"
            >
              {/* Screen Visual */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={activeLocation.image}
                  alt={activeLocation.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {/* Telemetry Badge on Image */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono-tech text-cyan-300 border border-cyan-400/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>GPS: {activeLocation.coords}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-mono-tech uppercase text-cyan-400 tracking-wider">
                    {activeLocation.zone}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    {activeLocation.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {activeLocation.description}
              </p>

              {/* Facility Highlights */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono-tech uppercase text-slate-400 font-semibold block mb-2.5">
                  FACILITIES & KEY ASSETS IN THIS ZONE
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLocation.features.map(f => (
                    <span
                      key={f}
                      className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-cyan-200 font-mono-tech"
                    >
                      ✦ {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div 
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <div 
          onClick={e => e.stopPropagation()} 
          className="relative w-full max-w-5xl my-auto py-8"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white z-20"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="tour" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070E1A] overflow-hidden">
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
      {content}
    </section>
  );
}
