import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Lightbulb, Rocket, Zap, Shield, Sparkles, 
  Wrench, Check, ArrowRight, Layers, FileCode2, Bot
} from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function InnovationHub() {
  const [activePipelineStage, setActivePipelineStage] = useState(1);

  const pipelineStages = [
    {
      step: 1,
      title: "IDEA STAGE",
      tagline: "Problem Identification & Concept Design",
      desc: "Students brainstorm in design sprints at the IEDC studio. Mentors from APJ AKTU, KSUM, and industry review problem statements.",
      tools: ["CAD Modeling", "Circuit Simulation", "Patent Search", "Feasibility Matrix"],
      metric: "120+ Annual Proposals"
    },
    {
      step: 2,
      title: "PROTOTYPE STAGE",
      tagline: "Rapid Fabrication at AICTE IDEA Lab",
      desc: "Translating digital schematics into tangible working hardware using 3D printers, laser cutters, PCB milling, and CNC routers.",
      tools: ["Stratasys 3D Printers", "CO2 Laser Engravers", "Roland PCB Milling", "Robotics Bay"],
      metric: "5,000 Sq.Ft Fab Floor"
    },
    {
      step: 3,
      title: "IMPACT STAGE",
      tagline: "Commercialization, Patents & Startups",
      desc: "Filing intellectual property patents, pitching at Kerala Startup Mission seed rounds, and deploying solutions for real communities.",
      tools: ["15+ Filed Patents", "24+ Startups", "₹2.5L KSUM Grants", "Industry Pilots"],
      metric: "National Recognition"
    }
  ];

  const labEquipment = [
    { name: "Stratasys Industrial 3D Printers", type: "Additive Fabrication", spec: "ABS / PLA / Carbon Fiber" },
    { name: "CO2 High-Precision Laser Cutters", type: "Sheet Prototyping", spec: "100W Tube / 0.01mm Precision" },
    { name: "Roland PCB Milling Machines", type: "Micro-Electronics", spec: "Double-Sided SMD Milling" },
    { name: "4-Axis Industrial CNC Router", type: "Subtractive Machining", spec: "Wood / Acrylic / Aluminum" },
    { name: "Keysight Digital Storage Oscilloscopes", type: "RF & Signal Analysis", spec: "Up to 500 MHz Quad-Channel" },
    { name: "Autonomous Drone Flight Test Arena", type: "Aerial Robotics", spec: "Safety Netting & Telemetry Log" }
  ];

  return (
    <section id="innovation" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050B14] overflow-hidden">
      {/* Background Circuit Grid & Lighting */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-3">
              <Cpu size={13} />
              <span>AICTE IDEA LAB & FABLAB KERALA</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              IDEAS <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                START HERE.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            A sanctioned ₹1.1 Crore AICTE IDEA Lab coupled with Kerala Startup Mission FabLab, empowering students to build what has never existed.
          </p>
        </div>

        {/* Visual "Idea → Prototype → Impact" Interactive Pipeline */}
        <div className="mb-20 glass-panel-glow p-6 sm:p-10 rounded-3xl border border-cyan-400/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-semibold block mb-1">
                INTERACTIVE GENERATOR
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                The Innovation Engine: Idea → Prototype → Impact
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {[1, 2, 3].map((step) => (
                <button
                  key={step}
                  onClick={() => {
                    soundFX.playClick();
                    setActivePipelineStage(step);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`px-4 py-2 rounded-xl font-mono-tech text-xs transition-all ${
                    activePipelineStage === step
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                  }`}
                  data-cursor="STAGE"
                >
                  STAGE 0{step}
                </button>
              ))}
            </div>
          </div>

          {/* Active Pipeline Card View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Schematic Diagram */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center p-6">
              <img
                src="/images/fisat_idea_lab.jpg"
                alt="AICTE IDEA Lab FISAT"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="relative z-10 text-center">
                <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 font-mono-tech text-xs border border-cyan-400/30 inline-block mb-3">
                  {pipelineStages[activePipelineStage - 1].metric}
                </span>
                <h4 className="font-display font-black text-3xl text-white">
                  {pipelineStages[activePipelineStage - 1].title}
                </h4>
              </div>
            </div>

            {/* Stage Description & Tools */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono-tech text-cyan-400 block mb-1">
                  STAGE 0{activePipelineStage} EXECUTION FLOW
                </span>
                <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
                  {pipelineStages[activePipelineStage - 1].tagline}
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {pipelineStages[activePipelineStage - 1].desc}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono-tech uppercase text-slate-400 font-semibold block mb-3">
                  INFRASTRUCTURE & METHODOLOGY
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {pipelineStages[activePipelineStage - 1].tools.map((t) => (
                    <div
                      key={t}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-tech text-cyan-300 flex items-center gap-2"
                    >
                      <Zap size={13} className="text-cyan-400 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heavy Prototyping Equipment Catalog */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              HARDWARE SPECIFICATIONS // PROTOTYPING ARSENAL
            </h3>
            <span className="text-xs font-mono-tech text-slate-500 hidden sm:inline">
              AVAILABLE TO ALL REGISTERED STUDENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {labEquipment.map((eq) => (
              <div
                key={eq.name}
                onMouseEnter={() => soundFX.playHover()}
                data-cursor="INSPECT"
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono-tech text-cyan-400 uppercase">
                    {eq.type}
                  </span>
                  <Wrench size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {eq.name}
                </h4>

                <div className="text-xs font-mono-tech text-slate-400 pt-3 border-t border-white/10">
                  SPEC: <span className="text-slate-200">{eq.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
