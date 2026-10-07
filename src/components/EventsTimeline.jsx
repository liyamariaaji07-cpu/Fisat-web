import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Sparkles, ArrowRight, 
  Flame, CheckCircle2, X, Ticket, Share2, Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENTS_DATA } from '../data/fisatData';
import { soundFX } from '../utils/sound';

export default function EventsTimeline() {
  const [filter, setFilter] = useState('All');
  const [registeredEvent, setRegisteredEvent] = useState(null);
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);

  const eventTypes = ['All', 'Cultural', 'Hackathon', 'Technical', 'Workshops'];

  const filteredEvents = filter === 'All'
    ? EVENTS_DATA
    : EVENTS_DATA.filter(ev => ev.type.toLowerCase() === filter.toLowerCase());

  const handleRegister = (event) => {
    soundFX.playClick();
    setRegisteredEvent(event);
    setRegSuccess(false);
    setUserEmail('');
    setRegModalOpen(true);
  };

  const handleConfirmRegistration = (e) => {
    e.preventDefault();
    if (!userEmail) return;

    soundFX.playSuccess();
    setRegSuccess(true);
    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F2FE', '#0066FF', '#10B981', '#F59E0B']
    });
  };

  return (
    <section id="events" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070E1A] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-3">
              <Calendar size={13} />
              <span>THE CHRONOLOGY // 2026 CALENDAR</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              WHAT'S <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                HAPPENING?
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed md:text-right">
              From 36-hour national hackathons to the roar of Bharatham on the open-air stage. Check out our upcoming timeline.
            </p>

            <button
              onClick={() => soundFX.playWhoosh()}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono-tech text-xs uppercase tracking-widest group font-semibold"
            >
              <span>VIEW ALL EVENTS</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                soundFX.playClick();
                setFilter(type);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-mono-tech transition-all whitespace-nowrap border ${
                filter === type
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {type === 'All' ? '⚡ ALL STREAMS' : type}
            </button>
          ))}
        </div>

        {/* Interactive Timeline Stream */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredEvents.map((ev, index) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#050B14] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_#00F2FE]">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Event Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,102,255,0.2)]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-4">
                  {/* Date Badge + Title */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center justify-center min-w-[65px] px-3 py-2 rounded-2xl bg-slate-900 border border-white/15 text-center font-mono-tech">
                      <span className="text-[11px] text-cyan-400 font-bold uppercase">{ev.month}</span>
                      <span className="text-2xl font-black text-white">{ev.day}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech uppercase font-semibold bg-white/5 text-cyan-300 border border-cyan-400/20">
                          {ev.type}
                        </span>
                        {ev.hot && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono-tech font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                            <Flame size={12} />
                            FLAGSHIP
                          </span>
                        )}
                        <span className="text-xs font-mono-tech text-slate-500">
                          {ev.date}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-cyan-200 transition-colors">
                        {ev.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-400 font-mono-tech">
                        {ev.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Register / Details Action */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleRegister(ev)}
                      onMouseEnter={() => soundFX.playHover()}
                      data-cursor="TICKET"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold font-display text-xs tracking-wider uppercase flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)]"
                    >
                      <Ticket size={14} />
                      <span>REGISTER / RSVP</span>
                    </button>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {ev.desc}
                </p>

                {/* Event Metadata Footer */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-slate-400">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1 text-slate-300">
                      <MapPin size={13} className="text-cyan-400" />
                      {ev.venue}
                    </span>
                    <span>•</span>
                    <span className="text-slate-400">
                      Organized by: <strong className="text-slate-200">{ev.dept}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {ev.highlights.map(h => (
                      <span key={h} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] text-cyan-300">
                        ✦ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Registration RSVP Modal */}
      <AnimatePresence>
        {regModalOpen && registeredEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setRegModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass-panel-glow bg-slate-950/95 rounded-3xl p-6 sm:p-8 border border-cyan-400/40"
            >
              <button
                onClick={() => setRegModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {!regSuccess ? (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono-tech text-xs">
                      {registeredEvent.type}
                    </span>
                    <span className="font-mono-tech text-xs text-slate-400">
                      {registeredEvent.date}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white mb-1">
                    {registeredEvent.title}
                  </h3>
                  <p className="text-xs text-slate-300 mb-6">
                    {registeredEvent.venue} · {registeredEvent.dept}
                  </p>

                  <form onSubmit={handleConfirmRegistration} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono-tech text-slate-300 mb-1.5 uppercase">
                        YOUR EMAIL ADDRESS (STUDENT / PARTICIPANT)
                      </label>
                      <input
                        type="email"
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="you@fisat.ac.in or student@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono-tech text-xs"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 font-mono-tech">
                      🎟️ Digital Pass + QR Token will be sent instantly to your inbox. Free entry for registered colleges.
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold font-display text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(0,242,254,0.4)]"
                    >
                      CONFIRM MY REGISTRATION PASS
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="font-display font-black text-2xl text-white mb-2">
                    REGISTRATION CONFIRMED! 🔥
                  </h3>
                  <p className="text-sm text-slate-300 mb-2">
                    We've registered <strong className="text-cyan-300">{userEmail}</strong> for:
                  </p>
                  <p className="font-mono-tech text-xs text-cyan-400 font-bold mb-6">
                    {registeredEvent.title} ({registeredEvent.date})
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 font-mono-tech text-xs text-slate-400 mb-6">
                    PASS ID: <span className="text-white font-bold">FISAT-EV-2026-X892</span>
                  </div>

                  <button
                    onClick={() => setRegModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold font-display text-xs uppercase tracking-wider"
                  >
                    SEE YOU ON CAMPUS!
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
