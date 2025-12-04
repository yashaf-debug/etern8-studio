import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';

const ComparisonSlider: React.FC = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  const handleMove = (clientX: number) => {
    if (!isResizing || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newWidth = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setWidth(newWidth);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsResizing(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <section className="py-20 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Результат говорит за себя</h2>
          <p className="text-neutral-500">Потяните ползунок, чтобы увидеть магию AI</p>
        </div>

        {/* Workaround for framer-motion type inference */}
        <motion.div 
          {...({
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.8 },
            viewport: { once: true }
          } as any)}
          className="relative w-full max-w-4xl mx-auto aspect-[3/4] md:aspect-[16/9] bg-neutral-200 select-none overflow-hidden rounded-sm shadow-2xl touch-none"
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {/* AFTER Image (Background) */}
          <div className="absolute inset-0">
             <img 
              src="https://picsum.photos/id/338/1200/800" 
              alt="After AI Processing" 
              className="w-full h-full object-cover"
              draggable={false}
            />
            <span className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest backdrop-blur-sm pointer-events-none">
              Etern8 AI Model
            </span>
          </div>

          {/* BEFORE Image (Foreground with Clip Path) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - width}% 0 0)` }}
          >
            <img 
              src="https://picsum.photos/id/646/1200/800" 
              alt="Before - Mannequin" 
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
             <div className="absolute inset-0 bg-black/10"></div> {/* Slight darkening for "bad" photo effect */}
             <span className="absolute top-4 left-4 bg-white/70 text-black text-xs font-bold px-3 py-1 uppercase tracking-widest backdrop-blur-sm pointer-events-none">
              Фото на манекене
            </span>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            style={{ left: `${width}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform active:scale-95 transition-transform">
              <MoveHorizontal className="w-6 h-6 text-black" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSlider;