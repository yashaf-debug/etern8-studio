import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import Button from './Button';

// --- Data Structure ---
const scenarios = [
  {
    id: 'selfie',
    tabLabel: 'СЕЛФИ',
    title: 'Из фото в зеркале — в глянец',
    description: 'Фото из шоурума или на сотруднике становятся профессиональным контентом.',
    bullets: [
      "Студийное освещение (8k)",
      "Чистый фон (Циклорама)",
      "Ретушь и цветокоррекция"
    ],
    before: 'https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/portfolio/Selfie1.webp',
    after: 'https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/portfolio/Selfie2.webp'
  },
  {
    id: 'flatlay',
    tabLabel: 'КАТАЛОГ',
    title: 'Одежда с пола — на модель',
    description: 'Показываем, как вещь сидит на фигуре, имея только фото изделия.',
    bullets: [
      "Понимание объема и кроя",
      "Сохранение фактуры ткани",
      "Быстрый тест новинок"
    ],
    before: 'https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/portfolio/Flatlay1.webp',
    after: 'https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/portfolio/Flatlay2.webp'
  },
  {
    id: 'location',
    tabLabel: 'ЛОКАЦИЯ',
    title: 'Любая локация мира',
    description: 'Переносим съемку в любую точку мира без командировок.',
    bullets: [
      "Улицы мировых столиц",
      "Интерьеры и природа",
      "Солнечный свет и динамика"
    ],
    before: 'https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/portfolio/Studio1.webp',
    after: 'https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/portfolio/Studio2.webp'
  },
  {
    id: 'total',
    tabLabel: 'ОБРАЗ',
    title: 'Образ из вещей',
    description: 'Собираем ваши товары в стильные аутфиты для повышения среднего чека.',
    bullets: [
      "Виртуальный стилист",
      "Гармоничные сочетания",
      "Cross-sale продажи"
    ],
    before: 'https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/portfolio/Total1.webp',
    after: 'https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/portfolio/Total2.webp'
  }
];

// --- Internal Slider Component (Dark Mode) ---
const PortfolioSlider = ({ before, after }: { before: string; after: string }) => {
  const [width, setWidth] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    setWidth(50);
  }, [before, after]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newWidth = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setWidth(newWidth);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isResizing) handleMove(e.clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    if (isResizing) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const stopResize = () => setIsResizing(false);
    window.addEventListener('mouseup', stopResize);
    window.addEventListener('touchend', stopResize);
    return () => {
      window.removeEventListener('mouseup', stopResize);
      window.removeEventListener('touchend', stopResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[3/4] md:aspect-[4/5] min-h-[500px] rounded-xl overflow-hidden select-none touch-none shadow-2xl shadow-blue-900/10 cursor-col-resize group bg-neutral-900 border border-white/10"
      onMouseDown={() => setIsResizing(true)}
      onTouchStart={() => setIsResizing(true)}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Base) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover opacity-90" draggable={false} />
      <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-electric text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider pointer-events-none border border-electric/20">
        Etern8 AI
      </span>

      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - width}% 0 0)` }}
      >
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125" draggable={false} />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider pointer-events-none border border-white/10">
          Исходник
        </span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-0.5 bg-electric shadow-[0_0_15px_rgba(37,99,235,0.8)] z-10"
        style={{ left: `${width}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neutral-900 border border-electric rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
          <MoveHorizontal size={14} className="text-electric" />
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component (Dark Mode) ---
const PortfolioSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(scenarios[0].id);
  const activeScenario = scenarios.find(s => s.id === activeTabId) || scenarios[0];

  return (
    <section className="py-24 bg-neutral-950 overflow-hidden border-t border-neutral-900" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2 
            {...({
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 }
            } as any)}
            className="font-display text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight"
          >
            Результат за 24 часа
          </motion.h2>
        </div>

        {/* Navigation Tabs (Mobile Scrollable) */}
        <div className="mb-6 overflow-x-auto no-scrollbar pb-2">
          <div className="flex flex-nowrap justify-start md:justify-center gap-2 min-w-max px-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveTabId(scenario.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 outline-none cursor-pointer border ${
                  activeTabId === scenario.id 
                    ? 'text-white border-electric/50' 
                    : 'text-neutral-500 border-transparent hover:text-neutral-300 hover:bg-white/5'
                }`}
              >
                {activeTabId === scenario.id && (
                  <motion.div
                    {...({
                      layoutId: "activePortfolioTab",
                      transition: { type: "spring", bounce: 0.2, duration: 0.6 }
                    } as any)}
                    className="absolute inset-0 bg-electric/10 rounded-full"
                  />
                )}
                <span className="relative z-10">{scenario.tabLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-black rounded-3xl p-6 md:p-12 shadow-2xl shadow-blue-900/5 border border-neutral-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              {...({
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.4, ease: "easeInOut" }
              } as any)}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
            >
              
              {/* Left: Text Content (Smaller proportion) */}
              <div className="md:col-span-4 order-2 md:order-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                  {activeScenario.title}
                </h3>
                <div className="w-12 h-1 bg-electric mb-6"></div>
                <p className="text-neutral-400 text-base leading-relaxed mb-6 font-light">
                  {activeScenario.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {activeScenario.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="hidden md:block">
                  <a href="https://t.me/yashaf" target="_blank" rel="noopener noreferrer">
                    <Button variant="electric" icon className="shadow-lg shadow-electric/20">
                      ХОЧУ ТАК ЖЕ
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Slider (Larger proportion) */}
              <div className="md:col-span-8 order-1 md:order-2 w-full max-w-5xl mx-auto">
                <PortfolioSlider 
                  before={activeScenario.before} 
                  after={activeScenario.after} 
                />
                
                {/* Mobile Button */}
                <div className="mt-8 md:hidden w-full">
                   <a href="https://t.me/yashaf" target="_blank" rel="noopener noreferrer">
                      <Button variant="electric" fullWidth icon className="shadow-lg shadow-electric/20">
                         ХОЧУ ТАК ЖЕ
                      </Button>
                   </a>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;