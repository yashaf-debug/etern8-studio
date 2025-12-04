import React from 'react';
import { Send, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="max-w-xs">
            <h2 className="font-display font-extrabold text-2xl tracking-tighter text-white mb-6">
              ETERN8
            </h2>
            <p className="text-neutral-500 text-sm font-mono leading-relaxed mb-6">
              Нейро-продакшн полного цикла для Fashion-брендов и селлеров маркетплейсов.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://t.me/yashaf" icon={Send} />
              <SocialLink href="https://instagram.com/etern8_tech" icon={Instagram} />
              <SocialLink href="https://wa.me/79165630633" icon={MessageCircle} />
            </div>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-24">
             {/* Contacts Column */}
             <div>
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">Контакты</h3>
                <ul className="space-y-4 text-sm text-neutral-400 font-mono">
                   <li>
                      <span className="block text-neutral-600 text-xs mb-1">Телефон:</span>
                      <a href="tel:+74959406619" className="hover:text-white transition-colors">
                        +7 (495) 940-66-19
                      </a>
                   </li>
                   <li>
                      <span className="block text-neutral-600 text-xs mb-1">WhatsApp / Telegram:</span>
                      <a href="https://wa.me/79165630633" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        +7 (916) 563-06-33
                      </a>
                   </li>
                   <li>
                      <span className="block text-neutral-600 text-xs mb-1">Email:</span>
                      <a href="mailto:hello@etern8.tech" className="hover:text-white transition-colors">
                        hello@etern8.tech
                      </a>
                   </li>
                   <li>
                      <span className="block text-neutral-600 text-xs mb-1">График работы:</span>
                      Ежедневно 11:00–23:00
                   </li>
                </ul>
             </div>

             {/* Requisites Details */}
             <div>
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">Реквизиты</h3>
                <ul className="space-y-4 text-sm text-neutral-400 font-mono">
                   <li>ИП Радченко Яков Яковлевич</li>
                   <li>ИНН 490912773510</li>
                   <li>ОГРН 316774600440101</li>
                </ul>
             </div>

             {/* Menu Column */}
             <div>
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">Меню</h3>
                <ul className="space-y-4 text-sm font-medium text-neutral-400">
                   <li><a href="/#/" className="hover:text-white transition-colors">Главная</a></li>
                   <li><a href="/#/photo" className="hover:text-white transition-colors">Photo</a></li>
                   <li><a href="/#/video" className="hover:text-white transition-colors">Video</a></li>
                   <li><a href="/#/web" className="hover:text-white transition-colors">Web</a></li>
                </ul>
             </div>
          </div>

        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Etern8 AI Production.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <button onClick={onOpenPrivacy} className="hover:text-neutral-400 transition-colors">Политика конфиденциальности</button>
             <button onClick={onOpenTerms} className="hover:text-neutral-400 transition-colors">Договор оферты</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-all text-neutral-400">
    <Icon size={18} />
  </a>
);

export default Footer;