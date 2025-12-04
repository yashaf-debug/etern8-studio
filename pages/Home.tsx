import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Clapperboard, Monitor, ArrowRight, Volume2, VolumeX, ChevronDown, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('ecosystem');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/video/video-bg3.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             {/* Typography optimized for mobile */}
             <h1 className="font-display font-extrabold tracking-tighter text-white mb-6 leading-[0.9]">
               <span className="text-4xl sm:text-6xl md:text-8xl block mb-2">DIGITAL FASHION</span>
               <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                 REVOLUTION
               </span>
             </h1>
             
             <p className="font-mono text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed uppercase tracking-wide px-4">
               Сокращаем расходы на продакшн в 10 раз. <br className="hidden sm:block" />
               Фото, видео и сайты уровня мировых брендов без студий и фотографов.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
               <Link to="/photo" className="w-full sm:w-auto">
                 <Button variant="primary" className="min-w-[200px] w-full sm:w-auto">НАЧАТЬ С ФОТО</Button>
               </Link>
               <a href="https://t.me/yashaf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                 <Button variant="outline" className="min-w-[200px] w-full sm:w-auto">НАПИСАТЬ В TELEGRAM</Button>
               </a>
             </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToNext}
        >
          <ChevronDown className="text-white/50 hover:text-white transition-colors w-8 h-8" />
        </motion.div>
      </section>

      {/* 2. ECOSYSTEM (Services) - Moved Up */}
      <section id="ecosystem" className="py-32 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
              ОДНА ПЛАТФОРМА. <span className="text-neutral-500">ТРИ РЕШЕНИЯ.</span>
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Полный цикл производства контента для вашего бренда.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              to="/photo" 
              title="AI Photo" 
              desc="Каталоги для WB/Ozon. Готовность 24 часа."
              icon={Camera}
              color="group-hover:border-electric/50 group-hover:shadow-[0_0_50px_-20px_rgba(37,99,235,0.3)]"
              textColor="text-electric"
            />
            <ServiceCard 
              to="/video" 
              title="AI Video" 
              desc="Reels и Motion-обложки. Вирусный охват."
              icon={Clapperboard}
              color="group-hover:border-purple-500/50 group-hover:shadow-[0_0_50px_-20px_rgba(168,85,247,0.3)]"
              textColor="text-purple-500"
            />
            <ServiceCard 
              to="/web" 
              title="AI Web" 
              desc="Продающие онлайн-магазины с AI SEO."
              icon={Monitor}
              color="group-hover:border-emerald-500/50 group-hover:shadow-[0_0_50px_-20px_rgba(16,185,129,0.3)]"
              textColor="text-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* 3. SHOWREEL (NEW STANDARD) - Full Screen Height */}
      <section id="showcase" className="relative z-20 w-full min-h-screen overflow-hidden group bg-black">
         <video
            ref={videoRef}
            src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/video/video-bg2.mp4"
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/site/showcase-poster.webp"
         />
         
         {/* Dark Overlay */}
         <div className="absolute inset-0 bg-black/40"></div>

         {/* Center Text */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
           <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white/90 tracking-tighter uppercase text-center leading-[0.9]"
           >
             НОВЫЙ <br/> СТАНДАРТ <br/> КАЧЕСТВА
           </motion.h2>
         </div>

         {/* Mute Toggle Button */}
         <div className="absolute bottom-8 right-8 z-30">
            <button
               onClick={toggleMute}
               className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
               aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
               {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
         </div>
      </section>

      {/* 4. CASE STUDY (IWANT) */}
      <section className="py-32 bg-[#050505] border-t border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-[1px] bg-electric"></span>
                <span className="font-mono text-sm font-bold uppercase tracking-widest text-electric">Success Story</span>
              </div>
              
              <h2 className="font-display text-4xl sm:text-6xl font-bold leading-none mb-8 text-white">
                Бренд IWANT <br />
                <span className="text-neutral-600">Built on AI.</span>
              </h2>
              
              <p className="text-lg text-neutral-400 mb-12 leading-relaxed font-light max-w-md">
                Мы создали визуальную упаковку бренда полностью на нейросетях. 
                Ни одной реальной фотосессии. Бюджет направлен в маркетинг.
              </p>

              <div className="grid grid-cols-2 gap-10 mb-12 border-t border-neutral-800 pt-10">
                <div>
                   <div className="font-display text-5xl font-bold text-white mb-2">0 ₽</div>
                   <div className="font-mono text-xs uppercase tracking-wider text-neutral-500">Бюджет на съемки</div>
                </div>
                <div>
                   <div className="font-display text-5xl font-bold text-electric mb-2">x2.4</div>
                   <div className="font-mono text-xs uppercase tracking-wider text-neutral-500">Рост CTR карточек</div>
                </div>
              </div>

              <a href="https://iwantconcept.store" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" icon className="hover:bg-neutral-200">СМОТРЕТЬ КЕЙС</Button>
              </a>
            </motion.div>

            {/* Right Column: iPad Mockup (Image) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
               <img 
                 src="https://pub-20442e6de0fe4b78bc9b6212e649791f.r2.dev/site/iwant-ipad-mockup.webp" 
                 alt="IWANT Concept Store iPad Mockup" 
                 className="w-full max-w-xl h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
               />
               
               {/* Ambient Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-electric/20 blur-[100px] -z-10 rounded-full opacity-50"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
         {/* Decoration */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         
         <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 mb-6 text-neutral-400">
                  <Sparkles size={16} className="text-electric" />
                  <span className="font-mono text-sm uppercase tracking-widest">Future is now</span>
               </div>
               
               <h2 className="font-display text-4xl sm:text-6xl font-bold text-white mb-8">
                  Готовы изменить правила игры?
               </h2>
               <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-light">
                  Оставьте заявку сегодня и получите первые результаты уже через 24 часа.
               </p>
               
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="https://t.me/yashaf" target="_blank" rel="noopener noreferrer">
                     <Button variant="electric" className="w-full sm:w-auto min-w-[200px] !py-5 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                        НАЧАТЬ ПРОЕКТ
                     </Button>
                  </a>
                  <a href="https://wa.me/79165630633" target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" className="w-full sm:w-auto min-w-[200px] !py-5 border-neutral-700 hover:border-white">
                        WHATSAPP
                     </Button>
                  </a>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

// Subcomponent for Ecosystem Card (Updated)
const ServiceCard = ({ to, title, desc, icon: Icon, color, textColor }: any) => (
  <Link to={to} className={`group relative p-10 bg-neutral-900 border border-neutral-800 rounded-2xl transition-all duration-500 ${color} cursor-pointer hover:-translate-y-2`}>
    <div className="flex flex-col h-full justify-between">
      <div className="mb-8">
        <div className={`w-14 h-14 rounded-xl bg-black border border-neutral-800 flex items-center justify-center mb-8 transition-colors group-hover:bg-neutral-900 ${textColor}`}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className="font-display font-bold text-3xl text-white mb-4">{title}</h3>
        <p className="font-sans text-sm text-neutral-400 leading-relaxed">{desc}</p>
      </div>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors">
        ПОДРОБНЕЕ <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </Link>
);

export default Home;