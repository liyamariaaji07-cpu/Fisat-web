import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth springs for high-framerate lag-free movement
  const mouseX = useSpring(0, { stiffness: 600, damping: 35 });
  const mouseY = useSpring(0, { stiffness: 600, damping: 35 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check for elements with data-cursor
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        const interactive = e.target.closest('a, button, input, select, textarea, [role="button"]');
        if (interactive) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden transition-opacity duration-300">
      {/* Outer follow ring / badge */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        className={`fixed flex items-center justify-center rounded-full transition-all duration-200 ${
          cursorText
            ? 'px-3.5 py-1.5 bg-cyan-400 text-slate-950 font-mono-tech text-[11px] font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,242,254,0.6)]'
            : isHovered
            ? 'w-11 h-11 border-2 border-cyan-400/80 bg-cyan-400/10 backdrop-blur-[2px]'
            : isClicking
            ? 'w-6 h-6 border border-cyan-400/90 bg-cyan-400/20'
            : 'w-8 h-8 border border-white/30'
        }`}
      >
        {cursorText && (
          <span className="select-none animate-in fade-in duration-150">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center sharp dot */}
      {!cursorText && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%'
          }}
          className={`fixed rounded-full transition-all duration-100 ${
            isClicking
              ? 'w-1 h-1 bg-cyan-300 scale-75'
              : isHovered
              ? 'w-2 h-2 bg-cyan-300 shadow-[0_0_12px_#00F2FE]'
              : 'w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_8px_#00F2FE]'
          }`}
        />
      )}
    </div>
  );
}
