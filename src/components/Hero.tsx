import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MessageCircle, MapPin } from 'lucide-react';
import { CONTENT, LOGO_URL } from '../constants';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with cinematic depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/80 to-charcoal z-10" />
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          src="https://i.postimg.cc/rssDLCRP/imagem-2026-03-31-210124862.png" 
          alt="Barber Background"
          className="w-full h-full object-cover object-[70%_center] md:object-center"
          referrerPolicy="no-referrer"
        />
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-navy-petrol/30 rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-orange-burnt/10 rounded-full blur-[60px] md:blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8"
          >
            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-orange-burnt" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-silver">
              Arena Barbearia — Maceió
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold leading-[0.9] mb-6 md:mb-8 font-display"
          >
            {CONTENT.hero.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-2 md:mr-4">
                {word === 'fala' ? <span className="text-orange-burnt text-glow-orange">{word}</span> : word}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-silver/80 max-w-xl mb-10 md:mb-12 leading-relaxed"
          >
            {CONTENT.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <a 
              href={CONTENT.hero.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-6 md:py-5 bg-orange-burnt rounded-2xl md:rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(229,102,46,0.5)] active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center justify-center gap-3 text-ice font-bold uppercase tracking-widest text-sm md:text-base">
                <MessageCircle className="w-5 h-5" />
                {CONTENT.hero.ctaPrimary}
              </span>
            </a>

            <a 
              href="#cortes"
              className="px-8 py-6 md:py-5 border border-white/10 rounded-2xl md:rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3 text-ice font-bold uppercase tracking-widest text-sm md:text-base active:scale-95"
            >
              {CONTENT.hero.ctaSecondary}
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-12 opacity-40 hidden lg:flex">
        {["Visual com identidade", "Agendamento rápido", "Experiência premium"].map((text, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold">
            <div className="w-1 h-1 bg-orange-burnt rounded-full" />
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
