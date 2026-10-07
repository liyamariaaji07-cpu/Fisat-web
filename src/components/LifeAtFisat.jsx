import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Camera, Heart, MessageSquare, Maximize2, 
  X, Trophy, Flame, Music, Cpu, Users
} from 'lucide-react';
import { LIFE_COLLAGE } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function LifeAtFisat() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = [
    'All',
    'Arts',
    'Innovation',
    'Sports',
    'Clubs',
    'Social Initiatives'
  ];

  const filteredItems = selectedCategory === 'All'
    ? LIFE_COLLAGE
    : LIFE_COLLAGE.filter(item => item.category === selectedCategory);

  return (
    <section id="life-gallery" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050B14] overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-3">
              <Camera size={13} />
              <span>THE STUDENT MULTIVERSE // LIVE PULSE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              MORE THAN A <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                CLASSROOM.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            “This is where lectures turn into ideas, ideas turn into projects, and projects turn into memories.”
          </p>
        </div>

        {/* Filter Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-none mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick();
                setSelectedCategory(cat);
              }}
              onMouseEnter={() => soundFX.playHover()}
              data-cursor="FILTER"
              className={`px-4 py-2 rounded-xl text-xs font-mono-tech transition-all whitespace-nowrap border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold border-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.3)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat === 'All' ? '⚡ ALL MOMENTS' : cat}
            </button>
          ))}
        </div>

        {/* Irregular Collage Grid */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => {
                soundFX.playClick();
                setActivePhoto(item);
              }}
              onMouseEnter={() => soundFX.playHover()}
              data-cursor="VIEW"
              className={`${item.span} group relative min-h-[320px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-400/60 transition-all duration-500 shadow-2xl flex flex-col justify-end p-6 sm:p-8`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.6] group-hover:brightness-[0.78]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent" />
              </div>

              {/* Top Category Badge */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="font-mono-tech text-xs px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 border border-white/15">
                  {item.badge}
                </span>

                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white/80 group-hover:text-cyan-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={15} />
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-200 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                  {item.tagline}
                </p>

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-cyan-400">
                  <span>TAP TO READ STORY</span>
                  <span>FISAT MOMENT ↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photo Story Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-panel-glow bg-slate-950/95 rounded-3xl p-6 sm:p-10 border border-cyan-400/40 overflow-hidden"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono-tech text-xs">
                  {activePhoto.badge}
                </span>
                <span className="text-xs font-mono-tech text-slate-400">
                  CAMPUS ARCHIVE
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-cyan-300 font-mono-tech mb-6">
                "{activePhoto.tagline}"
              </p>

              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                {activePhoto.details}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono-tech text-slate-400">
                <span>📍 Hormis Nagar Campus, Angamaly</span>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-5 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold font-display uppercase tracking-wider"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
