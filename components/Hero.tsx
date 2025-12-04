import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            {...({
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: "easeOut" }
            } as any)}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 border border-neutral-200 rounded-full text-xs font-bold tracking-wider uppercase mb-6 text-electric bg-blue-50">
              AI PRODUCTION STUDIO
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter mb-6 text-black">
              Виртуальная фотостудия <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400">
                для вашего бренда
              </span>
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 font-light max-w-lg mx-auto lg:mx-0">
              Ваш товар достоин выглядеть дорого. Превращаем фото с телефона в глянцевый контент, который <span className="text-electric font-bold bg-blue-50 px-1 rounded">повышает продажи на 30%</span>. Без фотографов, без отправок товара, готово уже завтра.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://t.me/yashaf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button icon fullWidth className="w-full sm:w-auto shadow-lg shadow-blue-900/10">Рассчитать стоимость</Button>
              </a>
              <Button 
                variant="secondary" 
                fullWidth 
                className="w-full sm:w-auto"
                onClick={scrollToPortfolio}
              >
                Смотреть примеры
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Visual Demo */}
          <motion.div
            {...({
              initial: { opacity: 0, scale: 0.95, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
            } as any)}
            className="relative mx-auto w-full max-w-md lg:max-w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 bg-white">
              <img 
                src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/portfolio/Total2.webp" 
                alt="Etern8 AI Result" 
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">Результат AI</span>
                </div>
                <p className="text-xs text-neutral-500 leading-tight">
                  Сгенерировано из фото разложенных вещей (Total Look)
                </p>
              </div>
            </div>
            
            {/* Decorative Elements behind image */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-neutral-100 rounded-2xl -z-10 hidden md:block"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-neutral-50 rounded-2xl -z-10 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;