import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ScanFace, Sliders } from 'lucide-react';

const TechnologySection: React.FC = () => {
  const features = [
    {
      icon: Layers,
      title: "Сохранение фактуры",
      bad: "Перерисовывает ткань, превращает хлопок в пластик, искажает логотипы.",
      good: "Переносит исходные пиксели товара. Покупатель видит реальную ткань."
    },
    {
      icon: ScanFace,
      title: "Контроль анатомии",
      bad: "Ошибки в пальцах, неестественные позы, «стеклянные» глаза.",
      good: "Используем скелетное моделирование. Модели выглядят как живые люди, которым доверяют."
    },
    {
      icon: Sliders,
      title: "Нейро-режиссура",
      bad: "Рандомный результат. «Что получилось, то получилось».",
      good: "Полный контроль света, теней и композиции. Мы создаем продающую картинку, а не случайную."
    }
  ];

  return (
    <section className="py-24 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            {...({
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            } as any)}
            className="font-display text-3xl md:text-5xl font-bold mb-6"
          >
            Почему Etern8 — это не просто <br className="hidden md:block"/> генератор картинок
          </motion.h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Мы используем собственную технологию гибридной генерации (<span className="text-electric font-semibold">Proprietary Motion Engine & Generative Core</span>), чтобы защитить ваш бренд от ошибок нейросетей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: index * 0.1 }
              } as any)}
              className="bg-neutral-800/40 rounded-2xl p-8 border border-neutral-800 hover:bg-neutral-800/60 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-8 text-electric shadow-lg shadow-black/20">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-8 text-white">{feature.title}</h3>

              <div className="space-y-6">
                {/* Bad Example */}
                <div className="relative pl-4 border-l-2 border-red-500/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1 opacity-80">Обычный ИИ</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {feature.bad}
                  </p>
                </div>

                {/* Good Example */}
                <div className="relative pl-4 border-l-2 border-electric">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-electric mb-1">Etern8</p>
                  <p className="text-sm text-neutral-200 leading-relaxed font-medium">
                    {feature.good}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...({
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { delay: 0.4 }
          } as any)}
          className="text-center pt-8 border-t border-neutral-800"
        >
          <p className="text-neutral-500 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
            Результат контролирует арт-директор, а не алгоритм
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TechnologySection;