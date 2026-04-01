import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Shield, Zap, Target, Scissors } from 'lucide-react';
import { CONTENT, LOGO_URL } from '../constants';

const About = () => {
  const valueIcons = [Scissors, Shield, Zap, Target, CheckCircle2, Award];

  return (
    <section id="sobre" className="py-32 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative px-4 md:px-0"
          >
            <div className="aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden border-4 md:border-8 border-steel/30 relative z-10 shadow-2xl">
              <img 
                src={CONTENT.about.image} 
                alt="Pedro Mascavo" 
                className="w-full h-full object-cover transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-burnt/20 rounded-full blur-[80px] z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-navy-petrol/20 rounded-full blur-[100px] z-0" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-4 md:-bottom-6 -left-2 md:-left-6 bg-orange-burnt p-6 md:p-8 rounded-2xl md:rounded-3xl z-20 shadow-2xl"
            >
              <span className="text-3xl md:text-4xl font-bold text-ice block leading-none">10+</span>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-ice/80">Anos de Experiência</span>
            </motion.div>
          </motion.div>

          <div className="space-y-10 md:space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-orange-burnt font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs mb-3 md:mb-4 block"
              >
                Quem é Pedro Mascavo
              </motion.span>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 font-display leading-tight text-ice">
                {CONTENT.about.intro}
              </h2>
              <p className="text-base md:text-xl text-silver/80 leading-relaxed mb-6 md:mb-8">
                {CONTENT.about.complement}
              </p>
              <p className="text-sm md:text-lg text-silver/60 leading-relaxed italic border-l-2 border-orange-burnt/30 pl-4">
                "{CONTENT.about.philosophy}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {CONTENT.about.values.map((value, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <div key={value} className="flex items-center gap-3 p-4 bg-steel/20 rounded-xl md:rounded-2xl border border-white/5 backdrop-blur-sm active:scale-95 transition-transform">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-orange-burnt" />
                    <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-ice">{value}</span>
                  </div>
                );
              })}
            </div>

            <div className="p-6 md:p-8 bg-navy-petrol/20 border border-navy-petrol/30 rounded-2xl md:rounded-3xl shadow-xl">
              <p className="text-sm md:text-lg text-silver/80 leading-relaxed">
                {CONTENT.about.arena}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
