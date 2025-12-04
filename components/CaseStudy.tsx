import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Workaround for framer-motion type inference */}
          <motion.div
            {...({
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              viewport: { once: true }
            } as any)}
          >
            <div className="inline-flex items-center gap-2 text-electric mb-6">
              <TrendingUp size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">РЕАЛЬНЫЙ КЕЙС</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Мы не теоретики.<br />
              Мы сами селлеры.
            </h2>
            
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Этот бренд был запущен нами с нуля. Весь визуальный контент сгенерирован алгоритмами Etern8.
              Мы сэкономили сотни тысяч рублей на аренде студий и гонорарах моделям, направив бюджет в рекламу.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 border-l-2 border-neutral-800 pl-6 mb-10">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">0 ₽</span>
                <span className="text-neutral-500 text-sm">Затрат на фотографов</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">x2.4</span>
                <span className="text-neutral-500 text-sm">Рост CTR карточек</span>
              </div>
            </div>

            <a 
              href="https://iwantconcept.store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors"
            >
              Перейти в iwantconcept.store <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Browser Mockup Image */}
          <motion.div
            {...({
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              viewport: { once: true }
            } as any)}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-transparent rounded-xl transform translate-x-4 translate-y-4"></div>
            
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
               {/* Browser Chrome / Header */}
               <div className="h-8 bg-neutral-800 border-b border-neutral-700 flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                 <div className="ml-4 flex-1 h-5 bg-neutral-900/50 rounded flex items-center px-3 text-[10px] text-neutral-500 font-mono">
                   iwantconcept.store
                 </div>
               </div>
               
               {/* Image content */}
               <div className="aspect-square md:aspect-auto relative group">
                <img 
                  src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/site/iwant.webp" 
                  alt="Store Screenshot" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <p className="font-display font-bold">iwantconcept.store</p>
                  <p className="text-xs text-neutral-400">Total Look AI Generation</p>
                </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudy;