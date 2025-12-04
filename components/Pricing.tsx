import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { PricingTier } from '../types';
import Button from './Button';

interface PricingProps {
  title?: string;
  description?: string;
  tiers?: PricingTier[];
  accentColor?: 'electric' | 'purple' | 'green';
  guaranteeTitle?: string;
  guaranteeText?: string;
  guaranteeButtonText?: string;
}

const defaultTiers: PricingTier[] = [
  {
    name: "TEST DRIVE",
    description: "Убедитесь в качестве.",
    marketPrice: "",
    ourPrice: "0 ₽",
    features: ["Feature 1", "Feature 2"],
    isPopular: false
  }
];

const Pricing: React.FC<PricingProps> = ({ 
  title = "Тарифы",
  description = "Честные цены. Платите только за результат.",
  tiers = defaultTiers,
  accentColor = 'electric',
  guaranteeTitle = "Не понравится результат — вернем деньги",
  guaranteeText = "Мы даем 100% гарантию качества. Если генерация не соответствует ТЗ, мы возвращаем предоплату.",
  guaranteeButtonText = "ОБСУДИТЬ УСЛОВИЯ"
}) => {

  const getAccentColors = (isActive: boolean) => {
    switch (accentColor) {
      case 'purple': 
        return isActive ? 'bg-neutral-900 border-purple-500 shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]' : 'hover:border-purple-500/50';
      case 'green':
        return isActive ? 'bg-neutral-900 border-green-500 shadow-[0_0_40px_-10px_rgba(34,197,94,0.2)]' : 'hover:border-green-500/50';
      default:
        return isActive ? 'bg-neutral-900 border-electric shadow-[0_0_40px_-10px_rgba(37,99,235,0.2)]' : 'hover:border-neutral-600';
    }
  };

  const getTextAccent = () => {
    switch (accentColor) {
      case 'purple': return 'text-purple-500';
      case 'green': return 'text-green-500';
      default: return 'text-electric';
    }
  };
  
  const getBadgeColor = () => {
    switch (accentColor) {
      case 'purple': return 'bg-purple-600';
      case 'green': return 'bg-green-600';
      default: return 'bg-electric';
    }
  }

  const getButtonConfig = (tierName: string) => {
    if (tierName.includes("TEST") || tierName.includes("Free")) {
      return { text: "ПОЛУЧИТЬ БЕСПЛАТНО", href: `https://t.me/yashaf?text=Привет! Хочу попробовать ${tierName}` };
    }
    return { text: "ВЫБРАТЬ ТАРИФ", href: `https://t.me/yashaf?text=Привет! Интересует тариф ${tierName}` };
  };

  // Dynamic Grid Class based on number of tiers
  const gridClass = tiers.length === 3 
    ? "grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto" 
    : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4";

  return (
    <section className="py-24 bg-black border-t border-neutral-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold mb-4 text-white uppercase"
          >
            {title}
          </motion.h2>
          <p className="text-neutral-500 max-w-2xl mx-auto font-mono text-sm">
            {description}
          </p>
        </div>

        <div className={`grid gap-6 mb-16 ${gridClass}`}>
          {tiers.map((tier, index) => {
            const btnConfig = getButtonConfig(tier.name);
            const isPopular = tier.isPopular;
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 border flex flex-col transition-all duration-300 group bg-black border-neutral-800 rounded-2xl ${getAccentColors(!!isPopular)}`}
              >
                {isPopular && (
                  <div className={`absolute top-0 right-0 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-xl rounded-tr-xl ${getBadgeColor()}`}>
                    Hit
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl mb-2 text-white uppercase">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-neutral-500 min-h-[40px] leading-relaxed font-mono">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-display font-bold text-white tracking-tight">
                    {tier.ourPrice}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? getTextAccent() : 'text-neutral-600'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={btnConfig.href} target="_blank" rel="noopener noreferrer" className="w-full block mt-auto">
                  <Button 
                    className={`w-full ${isPopular ? `!border-transparent !text-white` : ''}`}
                    style={isPopular ? { backgroundColor: accentColor === 'green' ? '#16a34a' : accentColor === 'purple' ? '#9333ea' : '#2563EB' } : {}}
                    variant={isPopular ? 'electric' : 'outline'}
                  >
                    {btnConfig.text}
                  </Button>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Guarantee Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="max-w-2xl">
            <div className={`flex items-center justify-center md:justify-start gap-2 mb-3 ${getTextAccent()}`}>
              <Sparkles size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Гарантия</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {guaranteeTitle}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              {guaranteeText}
            </p>
          </div>
          
          <a href="https://t.me/yashaf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" icon>{guaranteeButtonText}</Button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;