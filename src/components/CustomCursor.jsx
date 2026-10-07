import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setIsVisible(true);
      const x = e.clientX;
      const y = e.clientY;

      // Direct GPU transform update for instantaneous zero-latency tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      // Check for interactive targets
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        const interactive = e.target.closest('a, button, input, select, textarea, [role="button"], label');
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
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-9999 overflow-hidden transition-opacity duration-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Outer follow ring / badge (Zero position latency, only style/size transitions) */}
      <div
        ref={ringRef}
        style={{
          top: 0,
          left: 0,
          willChange: 'transform'
        }}
        className={`fixed flex items-center justify-center rounded-full transition-[width,height,background-color,border-color,box-shadow,border-radius,padding] duration-150 ease-out ${
          cursorText
            ? 'px-3 py-1 bg-cyan-400 text-slate-950 font-mono-tech text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,242,254,0.6)]'
            : isHovered
            ? 'w-10 h-10 border-2 border-cyan-400/90 bg-cyan-400/15 backdrop-blur-[1px] shadow-[0_0_12px_rgba(0,242,254,0.3)]'
            : isClicking
            ? 'w-6 h-6 border-2 border-cyan-400 bg-cyan-400/25'
            : 'w-7 h-7 border border-white/40'
        }`}
      >
        {cursorText && (
          <span className="select-none tracking-widest">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center sharp point dot (100% instantaneous 1:1 hardware tracking) */}
      {!cursorText && (
        <div
          ref={dotRef}
          style={{
            top: 0,
            left: 0,
            willChange: 'transform'
          }}
          className={`fixed rounded-full transition-[width,height,background-color] duration-100 ${
            isClicking
              ? 'w-1 h-1 bg-cyan-200'
              : isHovered
              ? 'w-2 h-2 bg-cyan-300 shadow-[0_0_10px_#00F2FE]'
              : 'w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_6px_#00F2FE]'
          }`}
        />
      )}
    </div>
  );
}
