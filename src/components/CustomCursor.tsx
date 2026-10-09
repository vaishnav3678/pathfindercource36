import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices and when reduced motion is not preferred
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, select, textarea, [role="button"], .interactive-card, .clickable');
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    let animationFrameId: number;
    const updateRing = () => {
      // Smooth lerp for the outer ring (fluid physics)
      const lerpFactor = 0.18;
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * lerpFactor;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden transition-opacity duration-300">
      {/* Precision Central Dot */}
      <div
        ref={dotRef}
        style={{ willChange: 'transform' }}
        className={`fixed top-0 left-0 -mt-1 -ml-1 w-2 h-2 rounded-full transition-transform duration-75 ${
          isHovered
            ? 'bg-[#2563EB] scale-150'
            : isClicking
            ? 'bg-[#102A56] scale-75'
            : 'bg-[#102A56]'
        }`}
      />

      {/* Smooth Trailing Outer Ring */}
      <div
        ref={ringRef}
        style={{ willChange: 'transform' }}
        className={`fixed top-0 left-0 -mt-4 -ml-4 w-8 h-8 rounded-full border border-blue-400/60 transition-[width,height,margin,border-color,background-color] duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 -mt-6 -ml-6 border-[#2563EB]/80 bg-[#2563EB]/5 scale-110'
            : isClicking
            ? 'scale-90 border-[#102A56]/80 bg-[#102A56]/10'
            : 'bg-blue-400/5'
        }`}
      />
    </div>
  );
};
