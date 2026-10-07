import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock, Navigation, ExternalLink, ArrowRight, MessageSquare, ChevronRight } from 'lucide-react';
import { soundFX } from '../utils/sound';

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Hormis Nagar, Mookkannoor, Angamaly, Ernakulam, Kerala - 683577',
    color: '#00F2FE',
    link: 'https://maps.google.com/?q=Federal+Institute+of+Science+and+Technology+FISAT+Angamaly'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 484 245 3895 / 245 7074',
    color: '#10B981',
    link: 'tel:+914842453895'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'principal@fisat.ac.in',
    color: '#F59E0B',
    link: 'mailto:principal@fisat.ac.in'
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'fisat.ac.in',
    color: '#8B5CF6',
    link: 'https://fisat.ac.in'
  }
];

const QUICK_LINKS = [
  { label: 'Admissions 2025-26', href: 'https://fisat.ac.in/admission/', tag: 'APPLY NOW' },
  { label: 'NAAC & NIRF Reports', href: 'https://fisat.ac.in/naac/', tag: 'DISCLOSURE' },
  { label: 'Alumni Network (FISATIAN)', href: 'https://alumni.fisat.ac.in/', tag: 'COMMUNITY' },
  { label: 'IQAC Portal', href: 'https://fisat.ac.in/iqac/', tag: 'QUALITY' },
  { label: 'Student Grievance Cell', href: 'https://fisat.ac.in/grievances/', tag: 'SUPPORT' },
  { label: 'NBA Accreditation', href: 'https://fisat.ac.in/nba/', tag: 'EXCELLENCE' },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFX.playClick();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070E1A] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-blue-600/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono-tech mb-4">
            <MessageSquare size={13} />
            <span>GET IN TOUCH WITH FISAT</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
            FIND US ON <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              CAMPUS.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Reach out for admissions queries, industry collaboration, research partnerships, or to simply pay a campus visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Details + Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_INFO.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onMouseEnter={() => soundFX.playHover()}
                  onClick={() => soundFX.playClick()}
                  className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-white/20 group transition-all flex flex-col gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={16} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="font-mono-tech text-[9px] uppercase tracking-widest text-slate-500 mb-1">{item.label}</div>
                    <p className="text-xs sm:text-sm text-white font-medium leading-snug group-hover:text-cyan-200 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Hours Info */}
            <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3">
              <Clock size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-mono-tech text-[9px] uppercase tracking-widest text-slate-500 mb-1">Office Hours</div>
                <p className="text-xs text-white/80">Mon – Sat · 9:00 AM to 5:00 PM IST</p>
                <p className="text-xs text-slate-500 mt-1">Academic office & Principal's office</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-white/10 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.327!2d76.3821!3d10.1971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080a9b4f2a1a5b%3A0x12345!2sFISAT+Federal+Institute+of+Science+and+Technology!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(200deg) brightness(0.85) saturate(0.7)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FISAT Campus Location"
              />
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-white/10" />
              <a
                href="https://maps.google.com/?q=Federal+Institute+of+Science+and+Technology+FISAT+Angamaly+Kerala"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 text-cyan-400 font-mono-tech text-[9px] uppercase tracking-wider border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/10 transition-all"
              >
                <Navigation size={11} />
                Open Maps
              </a>
            </div>
          </div>

          {/* Right: Quick Links + Enquiry Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Quick Links Grid */}
            <div>
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-cyan-400 mb-4">Quick Links</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {QUICK_LINKS.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    onMouseEnter={() => soundFX.playHover()}
                    className="group flex items-center justify-between p-3 rounded-xl glass-panel border border-white/8 hover:border-cyan-400/30 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-[8px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/15">
                        {link.tag}
                      </span>
                      <span className="text-xs text-white/80 group-hover:text-white transition-colors">{link.label}</span>
                    </div>
                    <ExternalLink size={12} className="text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="glass-panel-glow p-6 rounded-3xl border border-white/10 flex-1">
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-cyan-400 mb-4">Send an Enquiry</div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-48 text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <p className="font-mono-tech text-emerald-400 text-sm font-bold">MESSAGE RECEIVED!</p>
                  <p className="text-slate-400 text-xs">We'll get back to you within 2 working days.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono-tech text-[9px] uppercase tracking-widest text-slate-500">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState(p => ({ ...p, name: e.target.value }))}
                        placeholder="e.g., Arjun Menon"
                        className="bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:bg-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-all font-mono-tech"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono-tech text-[9px] uppercase tracking-widest text-slate-500">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState(p => ({ ...p, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:bg-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-all font-mono-tech"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-tech text-[9px] uppercase tracking-widest text-slate-500">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState(p => ({ ...p, message: e.target.value }))}
                      placeholder="I'd like to inquire about admissions, research collaboration, placement recruitment..."
                      className="bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:bg-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-all font-mono-tech resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    onMouseEnter={() => soundFX.playHover()}
                    className="group w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold font-mono-tech text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    SEND MESSAGE
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
