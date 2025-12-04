import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Play, Eye, Heart } from 'lucide-react';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import Pricing from '../components/Pricing';
import AnimatedCounter from '../components/AnimatedCounter';
import { PricingTier } from '../types';

const videoTiers: PricingTier[] = [
  {
    name: "MOTION CARD",
    description: "Живое фото для карточки товара.",
    marketPrice: "",
    ourPrice: "1 500 ₽",
    features: ["Анимация одежды/ткани", "Эффект параллакса", "Зум и пролеты", "Саунд-дизайн"],
    isPopular: false
  },
  {
    name: "VIRAL REELS",
    description: "Пакет 10 роликов. Сценарий + Монтаж.",
    marketPrice: "",
    ourPrice: "15 000 ₽",
    features: ["Пакет из 10 роликов", "Сценарий и монтаж", "Трендовая музыка", "Генерация AI-моделей"],
    isPopular: true
  },
  {
    name: "CAMPAIGN",
    description: "Имиджевый ролик бренда (30-60 сек).",
    marketPrice: "",
    ourPrice: "40 000 ₽",
    features: ["Кинематографичное 4K", "Сюжетная линия", "Сложный монтаж", "Лицензионные права"],
    isPopular: false
  },
  {
    name: "FULL PACK",
    description: "Видео + Фото под ключ.",
    marketPrice: "",
    ourPrice: "Individual",
    features: ["Все форматы видео", "Каталожная съемка", "Контент-план", "Личный продюсер"],
    isPopular: false
  }
];

// Subcomponent for Live Stats Overlay
const LiveStats = () => {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Initialize with random values
    setViews(10000 + Math.floor(Math.random() * 5000));
    setLikes(500 + Math.floor(Math.random() * 1000));

    // Simulate viral growth
    const interval = setInterval(() => {
      setViews(prev => prev + Math.floor(Math.random() * 50));
      if (Math.random() > 0.5) {
        setLikes(prev => prev + Math.floor(Math.random() * 5));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num > 1000 ? (num / 1000).toFixed(1) + 'k' : num;
  };

  return (
    <div className="absolute bottom-6 left-6 z-20 flex gap-3">
      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
        <Eye size={12} className="text-white/80" />
        <span className="text-[10px] font-mono font-bold text-white">{formatNumber(views)}</span>
      </div>
      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
        <Heart size={12} className="text-red-500" fill="currentColor" />
        <span className="text-[10px] font-mono font-bold text-white">{formatNumber(likes)}</span>
      </div>
    </div>
  );
};

const VideoProduction: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/video/video-bg2.mp4" type="video/mp4" />
          </video>
        </div>
        
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-10"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/10 text-white text-xs font-mono font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                  VIRAL CONTENT ENGINE
               </div>
               
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white text-center mb-8 leading-[0.9]">
                 AI VIDEO <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-300 to-white drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">PRODUCTION</span>
               </h1>
               
               <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto text-center mt-6 font-light mb-10 leading-relaxed drop-shadow-md">
                 Создаем вирусные Reels и видео-обложки для маркетплейсов, которые досматривают до конца.
               </p>

               <div className="flex justify-center gap-4">
                  <a href="#showcase">
                     <Button className="!bg-purple-600 hover:!bg-purple-500 !font-display !font-bold border-transparent shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                        СМОТРЕТЬ ПРИМЕРЫ
                     </Button>
                  </a>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 2. PORTFOLIO GRID (Showcase) */}
      <section id="showcase" className="py-24 bg-black border-b border-neutral-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
               <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase">ПРИМЕРЫ РАБОТ</h2>
               <p className="text-neutral-500">Контент, который продает</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               
               {/* Card 1: Viral Reels */}
               <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer">
                  <video 
                     src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/video/reel-1.mp4" 
                     autoPlay loop muted playsInline 
                     className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
                  
                  {/* LIVE STATS */}
                  <LiveStats />

                  <div className="absolute top-6 left-6 flex items-center gap-2">
                     <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Hits</span>
                  </div>

                  <div className="absolute bottom-6 right-6">
                     <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors shadow-lg">
                        <Play size={16} fill="currentColor" />
                     </div>
                  </div>
               </div>

               {/* Card 2: Motion Card */}
               <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer">
                  <video 
                     src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/video/motion-card.mp4" 
                     autoPlay loop muted playsInline 
                     className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

                  {/* LIVE STATS */}
                  <LiveStats />

                  <div className="absolute top-6 left-6 flex items-center gap-2">
                     <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase">WB / Ozon</span>
                  </div>
                  
                   <div className="absolute bottom-6 right-6">
                     <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors shadow-lg">
                        <Play size={16} fill="currentColor" />
                     </div>
                  </div>
               </div>

               {/* Card 3: Campaign */}
               <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer">
                  <video 
                     src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/video/campaign.mp4" 
                     autoPlay loop muted playsInline 
                     className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
                  
                  {/* LIVE STATS */}
                  <LiveStats />

                  <div className="absolute top-6 left-6 flex items-center gap-2">
                     <span className="bg-electric text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Brand</span>
                  </div>
                  
                   <div className="absolute bottom-6 right-6">
                     <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors shadow-lg">
                        <Play size={16} fill="currentColor" />
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 3. STATS */}
      <section className="py-24 bg-black border-t border-neutral-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="flex flex-col items-center"
                 >
                    <div className="font-display font-black text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-300 to-white leading-none mb-4">
                       <AnimatedCounter from={1} to={5} prefix="x" duration={1.5} />
                    </div>
                    <div className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-[0.25em]">
                       ОХВАТЫ В SOC-MEDIA
                    </div>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="flex flex-col items-center"
                 >
                    <div className="font-display font-black text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-300 to-white leading-none mb-4">
                       <AnimatedCounter from={1} to={4} suffix="K" duration={1} />
                    </div>
                    <div className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-[0.25em]">
                       КИНО-КАЧЕСТВО
                    </div>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="flex flex-col items-center"
                 >
                    <div className="font-display font-black text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-300 to-white leading-none mb-4">
                       9:16
                    </div>
                    <div className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-[0.25em]">
                       ФОРМАТ REELS / SHORTS
                    </div>
                 </motion.div>
            </div>
         </div>
      </section>

      {/* 4. PRICING */}
      <Pricing 
        tiers={videoTiers} 
        accentColor="purple"
        title="VIDEO ТАРИФЫ" 
        description="Контент, который захватывает внимание с первой секунды." 
        guaranteeTitle="ТЕСТОВЫЙ МОНТАЖ"
        guaranteeText="Пришлите исходники — мы смонтируем 5-10 секунд бесплатно, чтобы вы оценили динамику и стиль."
        guaranteeButtonText="ЗАКАЗАТЬ ТЕСТ"
      />

      {/* 5. CONTACT */}
      <ContactForm accentColor="purple" />

    </div>
  );
};

export default VideoProduction;