import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  History, Award, Shield, Users, Landmark, 
  CheckCircle2, Sparkles, ArrowRight, BookOpen
} from 'lucide-react';
import { FISAT_METRICS } from '../data/fisatData';
import { soundFX } from '../utils/sound';

// Animated Counter Component
function AnimatedCounter({ targetValue, prefix = "", suffix = "", duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easeProgress * targetValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, targetValue, duration]);

  // Format decimals if needed
  const displayValue = Number.isInteger(targetValue)
    ? Math.floor(count).toLocaleString()
    : count.toFixed(2);

  return (
    <span ref={ref} className="font-mono-tech tabular-nums font-bold">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export const STORY_CHAPTERS = [
  {
    id: "genesis",
    year: "2002",
    badge: "FOUNDING MOMENT",
    title: "The Genesis at Hormis Nagar",
    content: "Established by the Federal Bank Officers' Association Educational Society (FBOAES) to pioneer world-class engineering education in central Kerala. Dedicated in honor of K.P. Hormis, the visionary founder of Federal Bank.",
    tags: ["FBOAES Trust", "Mookkannoor", "Vision 2002"]
  },
  {
    id: "accreditation",
    year: "2018",
    badge: "ACCREDITATION MILESTONES",
    title: "NAAC 'A+' & NBA Accreditations",
    content: "Securing an elite NAAC 'A+' Grade with a stellar CGPA of 3.45, alongside continuous NBA accreditations for B.Tech engineering disciplines, validating two decades of faculty and research excellence.",
    tags: ["NAAC A+ 3.45", "NBA Tier-1", "KTU Top 5"]
  },
  {
    id: "autonomous",
    year: "2025-26",
    badge: "AUTONOMOUS REVOLUTION",
    title: "UGC Autonomous Empowerment",
    content: "Conferred Autonomous status by the University Grants Commission (UGC). Empowered to craft contemporary curriculum tailored to industry, AI-integrated pedagogy, and next-gen academic degrees.",
    tags: ["UGC Autonomous", "Industry Curricula", "Self-Determined"]
  },
  {
    id: "culture",
    year: "TODAY",
    badge: "THE STUDENT SPIRIT",
    title: "Where Builders Belong",
    content: "Over 3,200 aspiring innovators, 15+ student chapters, high-octane fests like Bharatham, national SIH hackathon champions, and a thriving open-source and maker community.",
    tags: ["3200+ Students", "FabLab", "IDEA Lab"]
  }
];

export default function IdentityStory() {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070E1A] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-3">
              <History size={13} />
              <span>FISAT IDENTITY // PROVEN LEGACY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              23 YEARS OF <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                BUILDING WHAT'S NEXT.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            Not just another university campus. A 26-acre collaborative laboratory where young engineers, designers, and entrepreneurs shape Kerala's future.
          </p>
        </div>

        {/* The Giant "23 YEARS" Centerpiece Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Left: Giant "23" Visual Focus */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-8 sm:p-12 glass-panel-glow overflow-hidden border border-cyan-500/30">
              {/* Subtle background glow circle */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col">
                <span className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest font-semibold mb-2">
                  INSTITUTIONAL ANCHOR
                </span>

                {/* Giant 23 Number */}
                <div className="font-display font-black text-8xl sm:text-9xl lg:text-[140px] text-white tracking-tighter leading-none flex items-baseline">
                  <span>23</span>
                  <span className="text-cyan-400 text-5xl sm:text-7xl font-sans font-light">+</span>
                </div>

                <div className="font-display font-extrabold text-2xl sm:text-3xl text-cyan-200 tracking-wider uppercase mt-1 mb-4">
                  YEARS OF EXCELLENCE
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Founded in 2002 by the Federal Bank Officers' Association Educational Society (FBOAES). Recognized across India for research rigor and student leadership.
                </p>

                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono-tech text-slate-400">
                  <div>
                    <span className="block text-slate-500">GOVERNANCE</span>
                    <span className="text-white font-medium">FBOAES Trust</span>
                  </div>
                  <div>
                    <span className="block text-slate-500">AUTONOMY</span>
                    <span className="text-cyan-400 font-medium">UGC Conferred</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Storytelling Journey */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {STORY_CHAPTERS.map((chap, idx) => (
                <button
                  key={chap.id}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveChapter(idx);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`px-4 py-2 rounded-xl text-xs font-mono-tech whitespace-nowrap transition-all border ${
                    activeChapter === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10'
                  }`}
                  data-cursor="SELECT"
                >
                  <span className="opacity-60 mr-1.5">{chap.year}</span>
                  <span>{chap.badge}</span>
                </button>
              ))}
            </div>

            {/* Active Chapter Card */}
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {STORY_CHAPTERS[activeChapter].year}
                </span>
                <span className="text-xs font-mono-tech text-slate-400">
                  CHAPTER 0{activeChapter + 1} OF 04
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-3">
                {STORY_CHAPTERS[activeChapter].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {STORY_CHAPTERS[activeChapter].content}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {STORY_CHAPTERS[activeChapter].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono-tech px-3 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Real Animated Statistics Counters Grid */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              VERIFIED INSTITUTIONAL METRICS // OFFICIAL 2026 AUDIT
            </h3>
            <span className="text-slate-500 text-xs font-mono-tech hidden sm:inline">
              LIVE VIEWPORT COUNTERS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FISAT_METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 group"
                data-cursor="STAT"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono-tech uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {metric.highlight}
                  </span>
                  <Sparkles size={14} className="text-cyan-400/60 group-hover:text-cyan-300 transition-colors" />
                </div>

                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white group-hover:text-cyan-300 transition-colors mb-1">
                  <AnimatedCounter
                    targetValue={metric.value}
                    prefix={metric.prefix || ''}
                    suffix={metric.suffix || ''}
                  />
                </div>

                <div className="font-medium text-sm text-slate-200 mb-1">
                  {metric.label}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {metric.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
