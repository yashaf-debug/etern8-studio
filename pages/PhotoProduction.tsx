import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import PortfolioSection from '../components/PortfolioSection';
import Pricing from '../components/Pricing';
import AnimatedCounter from '../components/AnimatedCounter';
import { PricingTier } from '../types';

const photoTiers: PricingTier[] = [
  {
    name: "TEST DRIVE",
    description: "Тест качества. 1 артикул бесплатно.",
    marketPrice: "",
    ourPrice: "0 ₽",
    features: ["1 фото вашего товара", "Любая модель и локация", "Готовность сегодня", "Без обязательств"],
    isPopular: false
  },
  {
    name: "MARKETPLACE",
    description: "Хит для Wildberries. 5 ракурсов.",
    marketPrice: "",
    ourPrice: "990 ₽",
    features: ["5 ракурсов на модели", "Высокий CTR", "Чистый фон / Интерьер", "Ретушь одежды"],
    isPopular: true
  },
  {
    name: "LOOKBOOK",
    description: "Имиджевая съемка. Улица/Интерьер.",
    marketPrice: "",
    ourPrice: "2 900 ₽",
    features: ["10 фото (Студия + Улица)", "Детальная съемка", "Lifestyle подача", "Видео-сниппет в подарок"],
    isPopular: false
  },
  {
    name: "CAMPAIGN",
    description: "Рекламная кампания. 10 артикулов.",
    marketPrice: "",
    ourPrice: "15 000 ₽",
    features: ["Разработка концепции", "Арт-дирекшн", "Сложный свет", "Лицензия на использование"],
    isPopular: false
  },
];

const PhotoProduction: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full z-0">
             <video 
              src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/video/photo-hero-new.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
        </div>

        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric/30 bg-electric/10 text-electric text-xs font-mono font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse"></span>
              Neural Production v2.0
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white text-center mb-8 leading-[0.9]">
              DIGITAL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-200 to-white drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">PHOTO STUDIO</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto text-center mt-6 font-light mb-10 leading-relaxed drop-shadow-md">
              Превращаем фото с манекена или телефона в глянцевый fashion-контент. 
              <span className="text-white font-medium block sm:inline"> Без студий. Без моделей. Без ожидания.</span>
            </p>

            <div className="flex justify-center gap-4">
               <a href="#portfolio">
                 <Button variant="electric" icon className="shadow-[0_0_30px_rgba(37,99,235,0.4)]">СМОТРЕТЬ РАБОТЫ</Button>
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PORTFOLIO SECTION (Comparison Slider) */}
      <PortfolioSection />

      {/* 3. STATS (Visual Numbers) */}
      <section className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase">ПОЧЕМУ ЭТО ВЫГОДНО</h2>
            <p className="text-neutral-500">Математика AI-продакшна</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="font-display font-black text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-electric via-blue-400 to-white leading-none mb-4">
                <AnimatedCounter from={5000} to={0} suffix=" ₽" duration={2} />
              </div>
              <div className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-[0.25em]">
                ЗАТРАТЫ НА СЪЕМКУ
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-baseline justify-center font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-electric via-blue-400 to-white leading-none mb-4">
                 <span className="text-6xl md:text-7xl">
                    <AnimatedCounter from={72} to={24} suffix=" часа" duration={2.5} />
                 </span>
              </div>
              <div className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-[0.25em]">
                ГОТОВНОСТЬ
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="font-display font-black text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-electric via-blue-400 to-white leading-none mb-4">
                <AnimatedCounter from={0} to={70} prefix="-" suffix="%" duration={1.5} />
              </div>
              <div className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-[0.25em]">
                ЭКОНОМИЯ БЮДЖЕТА
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PRICING */}
      <Pricing 
        tiers={photoTiers} 
        accentColor="electric" 
        title="AI PHOTO ТАРИФЫ"
        description="Вы платите за готовые артикулы, а не за съемочные дни."
        guaranteeTitle="БЕСПЛАТНЫЙ ТЕСТ"
        guaranteeText="Мы сделаем 1 фото бесплатно, чтобы вы убедились в качестве до оплаты."
        guaranteeButtonText="ПОЛУЧИТЬ БЕСПЛАТНО"
      />

      {/* 5. CONTACT */}
      <ContactForm accentColor="electric" />

    </div>
  );
};

export default PhotoProduction;