import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import Pricing from '../components/Pricing';
import AnimatedCounter from '../components/AnimatedCounter';
import { PricingTier } from '../types';

const webTiers: PricingTier[] = [
  {
    name: "LANDING PAGE",
    description: "Быстрый старт. 1 товар/дроп.",
    marketPrice: "",
    ourPrice: "30 000 ₽",
    features: ["1 Продающая страница", "Уникальный дизайн", "Высокая конверсия", "Запуск за 3 дня"],
    isPopular: false
  },
  {
    name: "E-SHOP",
    description: "Полноценный магазин. До 50 товаров.",
    marketPrice: "",
    ourPrice: "80 000 ₽",
    features: ["Разработка на чистом коде", "Максимальная скорость", "AI-генерация контента", "SEO и Платежные системы"],
    isPopular: true
  },
  {
    name: "CUSTOM",
    description: "Сложные интеграции и дизайн.",
    marketPrice: "",
    ourPrice: "Individual",
    features: ["Стек React / Next.js", "Интеграции CRM / ERP", "Личный менеджер", "Неограниченное масштабирование"],
    isPopular: false
  }
];

const WebProduction: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-green-900/30">
        <div className="absolute top-0 left-0 w-full h-full z-0">
             <video 
              src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/video/web-hero-new.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
        </div>

         <div className="absolute inset-0 bg-black/70 z-10"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
               <div className="inline-block mb-6">
                 <span className="font-display text-green-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase border border-green-500/30 bg-green-900/10 px-4 py-2 rounded-full">
                   TURBO LAUNCH
                 </span>
               </div>
               
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white text-center mb-8 leading-[0.9]">
                 INSTANT <br/>
                 <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">E-COMMERCE</span>
               </h1>
               
               <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto text-center mt-6 font-light mb-10 leading-relaxed font-sans">
                 Магазин, который продает с первого дня. <br className="hidden md:block"/>
                 <span className="text-green-500 font-medium">Дизайн + Наполнение товарами + AI SEO.</span>
               </p>

               <div className="flex justify-center">
                 <a href="#portfolio">
                    <Button className="!bg-green-600 hover:!bg-green-500 !font-display !text-black !font-bold border-transparent shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]">
                       СМОТРЕТЬ КЕЙСЫ
                    </Button>
                 </a>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 2. PORTFOLIO (Mockups) */}
      <section id="portfolio" className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="text-center mb-16">
             <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
             <div className="h-1 w-20 bg-green-600 mx-auto"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Project 1 */}
              <div className="group relative">
                 <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 group-hover:border-green-500/50 transition-colors duration-500">
                    <div className="h-8 bg-neutral-800 border-b border-neutral-700 flex items-center px-4 gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <img 
                       src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/site/iwant-ipad-mockup.webp" 
                       alt="E-Commerce Project" 
                       className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                 </div>
                 <div className="mt-6">
                    <h3 className="font-display text-xl font-bold text-white mb-2 uppercase">Монобрендовый магазин</h3>
                    <p className="text-neutral-500 text-sm">Stack: Tilda + Etern8 AI Core</p>
                 </div>
              </div>

              {/* Project 2 */}
              <div className="group relative mt-12 md:mt-0">
                 <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 group-hover:border-green-500/50 transition-colors duration-500">
                    <div className="h-8 bg-neutral-800 border-b border-neutral-700 flex items-center px-4 gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <img 
                       src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/site/iwant.webp" 
                       alt="Landing Page" 
                       className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                 </div>
                 <div className="mt-6">
                    <h3 className="font-display text-xl font-bold text-white mb-2 uppercase">Лендинг новой коллекции</h3>
                    <p className="text-neutral-500 text-sm">Stack: React + Tailwind + AI Content</p>
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
                    <div className="font-display font-black text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-green-300 to-white leading-none mb-4 tracking-tighter">
                       <AnimatedCounter from={30} to={3} suffix=" ДНЯ" duration={2} />
                    </div>
                    <div className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-[0.25em]">
                       ЗАПУСК ПРОДАЖ
                    </div>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="flex flex-col items-center"
                 >
                    <div className="font-display font-black text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-green-300 to-white leading-none mb-4 tracking-tighter">
                       AI SEO
                    </div>
                    <div className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-[0.25em]">
                       ОРГАНИЧЕСКИЙ ТРАФИК
                    </div>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="flex flex-col items-center"
                 >
                    <div className="font-display font-black text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-green-300 to-white leading-none mb-4 tracking-tighter">
                       <AnimatedCounter from={0} to={100} suffix="%" duration={1.5} />
                    </div>
                    <div className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-[0.25em]">
                       ГОТОВЫЙ КОНТЕНТ
                    </div>
                 </motion.div>
            </div>
         </div>
      </section>

      {/* 4. PRICING */}
      <Pricing 
        tiers={webTiers} 
        accentColor="green"
        title="WEB ТАРИФЫ" 
        description="Инфраструктура для ваших продаж." 
        guaranteeTitle="ОПЛАТА ЗА РЕЗУЛЬТАТ"
        guaranteeText="Работаем по договору. Поэтапная оплата. Вы видите процесс разработки в реальном времени."
        guaranteeButtonText="ОБСУДИТЬ ПРОЕКТ"
      />

      {/* 5. CONTACT */}
      <ContactForm accentColor="green" />
    </div>
  );
};

export default WebProduction;