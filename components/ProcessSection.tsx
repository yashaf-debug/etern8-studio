import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Wand2, Download, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Пришлите исходники",
    text: "Подойдут фото на манекене, на полу (flatlay) или даже селфи в зеркало. Главное — чтобы вещь было видно."
  },
  {
    icon: Wand2,
    title: "Выберите стиль",
    text: "Мы подберем внешность модели, локацию (улица/студия) и настроение съемки под ваш бренд."
  },
  {
    icon: Download,
    title: "Получите контент",
    text: "Через 24 часа вы получите готовые фото в высоком разрешении, готовые к загрузке на WB/Ozon."
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-100">
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
            Как мы работаем
          </motion.h2>
          <p className="text-neutral-500">
            Всего 3 простых шага до идеального контента
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-neutral-200 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: index * 0.2 }
              } as any)}
              className="flex flex-col items-center text-center bg-neutral-50 md:bg-transparent"
            >
              <div className="w-24 h-24 rounded-full bg-white border border-neutral-100 shadow-lg flex items-center justify-center mb-6 relative z-10">
                <step.icon size={32} className="text-black" strokeWidth={1.5} />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-electric text-white flex items-center justify-center font-bold text-sm border-4 border-neutral-50">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;