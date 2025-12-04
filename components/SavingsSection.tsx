import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Zap, Clock, Truck, Smartphone, AlertCircle, ShieldCheck, X, Check } from 'lucide-react';

const SavingsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-neutral-100" id="savings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            {...({
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            } as any)}
            className="font-display text-3xl md:text-5xl font-bold mb-4"
          >
            Почему это выгодно
          </motion.h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Сравните затраты ресурсов на создание контента.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mb-16">
          
          {/* Traditional Card (BAD) */}
          <motion.div
            {...({
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            } as any)}
            className="bg-neutral-100 rounded-2xl p-8 border border-transparent text-neutral-600 grayscale opacity-90 order-2 md:order-1"
          >
            <div className="flex items-center gap-4 mb-8 opacity-70">
              <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center text-neutral-500">
                <Camera size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-neutral-500 uppercase tracking-widest">Обычная съемка</h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Price Row */}
              <div className="flex items-start gap-4 pb-6 border-b border-neutral-200/50">
                <div className="mt-1 text-neutral-400"><X size={18} /></div>
                <div>
                  <div className="font-bold text-2xl text-neutral-500 mb-1 line-through decoration-red-500/50">40.000 ₽</div>
                  <p className="text-sm text-neutral-400">Оплата студии, фотографа, модели, визажиста и стилиста.</p>
                </div>
              </div>

              {/* Time Row */}
              <div className="flex items-start gap-4 pb-6 border-b border-neutral-200/50">
                <div className="mt-1 text-neutral-400"><X size={18} /></div>
                <div>
                  <div className="font-bold text-lg text-neutral-500 mb-1">5-7 дней</div>
                  <p className="text-sm text-neutral-400">Согласование, логистика товаров, день съемки, неделя на ретушь.</p>
                </div>
              </div>

              {/* Logistics Row */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-neutral-400"><X size={18} /></div>
                <div>
                  <div className="font-bold text-lg text-neutral-500 mb-1">Сложная логистика</div>
                  <p className="text-sm text-neutral-400">Нужно отпарить вещи, упаковать, отвезти в студию и забрать обратно.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Etern8 Card (GOOD) */}
          <motion.div
            {...({
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.2 }
            } as any)}
            className="bg-white rounded-2xl p-8 border-2 border-electric shadow-2xl relative overflow-hidden order-1 md:order-2 transform md:scale-105"
          >
            <div className="absolute top-0 right-0 bg-electric text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
              Выбор брендов
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-electric">
                <Zap size={24} fill="currentColor" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-electric uppercase tracking-widest">ETERN8 AI</h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Price Row */}
              <div className="flex items-start gap-4 pb-6 border-b border-neutral-100">
                <div className="mt-1 text-electric"><Check size={20} strokeWidth={3} /></div>
                <div>
                  <div className="font-bold text-4xl text-black mb-1">от 990 ₽ <span className="text-lg font-normal text-neutral-500">за артикул</span></div>
                  <p className="text-sm text-neutral-500">Экономия бюджета до 90%. Вы платите только за результат.</p>
                </div>
              </div>

              {/* Time Row */}
              <div className="flex items-start gap-4 pb-6 border-b border-neutral-100">
                <div className="mt-1 text-electric"><Check size={20} strokeWidth={3} /></div>
                <div>
                  <div className="font-bold text-xl text-black mb-1">24-48 часов</div>
                  <p className="text-sm text-neutral-500">Готовые фото уже на следующий день. Моментальный запуск продаж.</p>
                </div>
              </div>

              {/* Logistics Row */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-electric"><Check size={20} strokeWidth={3} /></div>
                <div>
                  <div className="font-bold text-xl text-black mb-1">Никуда не едем</div>
                  <p className="text-sm text-neutral-500">Работаем с вашими фото с телефона или манекена. Товар остается у вас.</p>
                </div>
              </div>
              
              <div className="pt-4 mt-2 border-t border-neutral-100">
                <p className="text-sm font-bold text-electric">
                  Результат гарантирован.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Callout */}
        <motion.div 
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.4 }
          } as any)}
          className="bg-neutral-900 rounded-xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-electric/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <h3 className="font-display text-xl md:text-2xl font-bold text-white relative z-10 leading-relaxed">
            "Вы сокращаете <span className="text-electric">Time-to-Market</span> (время запуска) новой коллекции <br className="hidden md:block" /> в <span className="text-electric">3 раза</span>, просто перейдя на AI-контент."
          </h3>
        </motion.div>

      </div>
    </section>
  );
};

export default SavingsSection;