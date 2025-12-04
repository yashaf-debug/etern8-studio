import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Gem, Factory } from 'lucide-react';

const segments = [
  {
    title: "Селлерам WB и Ozon",
    pain: "Сливаете бюджет на рекламу, а кликов нет? Фото выглядят дешево?",
    solution: "Сделаем карточку, которая выделяется в поиске. Высокий CTR гарантирован.",
    icon: ShoppingBag
  },
  {
    title: "Брендам одежды",
    pain: "Сложно организовать съемку, найти модель и студию под стиль бренда?",
    solution: "Создавайте Lookbook и контент для Instagram, не вставая из-за компьютера. Единый стиль навсегда.",
    icon: Gem
  },
  {
    title: "Производствам",
    pain: "Сотни артикулов, которые нужно быстро выложить в каталог?",
    solution: "Превратим фото с манекена в живой каталог за 48 часов. Масштабируем контент без затрат на логистику.",
    icon: Factory
  }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((item, index) => (
            <motion.div
              key={index}
              {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: index * 0.1 }
              } as any)}
              className="flex flex-col h-full p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5 text-black" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display font-bold text-xl text-black mb-4">
                {item.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-sm text-neutral-500 mb-2 font-medium">Проблема:</p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.pain}
                </p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-neutral-200">
                 <p className="text-sm text-electric font-medium mb-2">Решение:</p>
                 <p className="text-neutral-900 text-sm font-medium leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;