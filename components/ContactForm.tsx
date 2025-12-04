import React, { useState } from 'react';
import Button from './Button';
import { CheckCircle, Loader2, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  accentColor?: 'electric' | 'emerald' | 'purple' | 'green';
}

const ContactForm: React.FC<ContactFormProps> = ({ accentColor = 'electric' }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  const getFocusColor = () => {
    switch (accentColor) {
      case 'emerald': return 'focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)]';
      case 'purple': return 'focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]';
      case 'green': return 'focus:border-green-500 focus:shadow-[0_0_15px_rgba(34,197,94,0.3)]';
      default: return 'focus:border-blue-500 focus:shadow-[0_0_15px_rgba(37,99,235,0.3)]';
    }
  };

  const getButtonCustomClass = () => {
    switch (accentColor) {
      case 'emerald': return '!bg-emerald-600 hover:!bg-emerald-500 shadow-lg shadow-emerald-900/40 hover:shadow-emerald-500/40 border-transparent';
      case 'purple': return '!bg-purple-600 hover:!bg-purple-500 shadow-lg shadow-purple-900/40 hover:shadow-purple-500/40 border-transparent';
      case 'green': return '!bg-green-600 hover:!bg-green-500 shadow-lg shadow-green-900/40 hover:shadow-green-500/40 border-transparent';
      default: return '!bg-electric hover:!bg-blue-500 shadow-lg shadow-blue-900/40 hover:shadow-blue-500/40 border-transparent';
    }
  };

  const inputClasses = `w-full bg-black/50 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-300 ${getFocusColor()}`;

  const getIconColor = () => {
     switch (accentColor) {
      case 'emerald': return 'text-emerald-500';
      case 'purple': return 'text-purple-500';
      case 'green': return 'text-green-500';
      default: return 'text-electric';
    }
  };

  const getGlowColor = () => {
    switch (accentColor) {
      case 'emerald': return 'bg-emerald-600';
      case 'purple': return 'bg-purple-600';
      case 'green': return 'bg-green-600';
      default: return 'bg-blue-600';
    }
  }

  return (
    <section className="py-32 bg-black border-t border-neutral-900 relative overflow-hidden" id="contact">
      
      {/* Ambient Background Glows */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none 
        ${getGlowColor()}
      `}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-white">
            Start Project
          </h2>
          <p className="text-neutral-400 font-mono text-sm">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Glass Shine Effect */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {status === 'success' ? (
             <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-white/5 border border-white/10 ${getIconColor()}`}>
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Заявка отправлена</h3>
                <p className="text-neutral-400 mb-8 max-w-xs">Менеджер уже получил ваше сообщение и пишет ответ.</p>
                <button onClick={() => setStatus('idle')} className="text-sm font-bold uppercase tracking-widest text-white hover:text-neutral-300 transition-colors border-b border-white/20 pb-1">
                  Отправить еще
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-neutral-500 uppercase ml-2">Имя</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Иван"
                    className={inputClasses}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-neutral-500 uppercase ml-2">Контакты</label>
                  <input 
                    type="text" 
                    required
                    placeholder="@telegram / +7..."
                    className={inputClasses}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-neutral-500 uppercase ml-2">Задача</label>
                <textarea 
                  rows={4}
                  placeholder="Опишите задачу: количество артикулов, пожелания..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="pt-4">
                <Button 
                  variant="primary" 
                  fullWidth 
                  className={`!h-16 !text-base !rounded-xl ${getButtonCustomClass()}`}
                >
                  {status === 'loading' ? <Loader2 className="animate-spin" /> : (
                    <span className="flex items-center gap-2">
                      ОТПРАВИТЬ ЗАЯВКУ <Send size={16} />
                    </span>
                  )}
                </Button>
                <p className="text-center text-xs text-neutral-600 mt-4">
                  Нажимая кнопку, вы соглашаетесь с <button className="underline hover:text-neutral-400">политикой конфиденциальности</button>
                </p>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;