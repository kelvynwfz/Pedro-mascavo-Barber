import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Shield, Zap, Target, Scissors } from 'lucide-react';
import { CONTENT, LOGO_URL } from '../constants';

const About = () => {
  const valueIcons = [Scissors, Shield, Zap, Target, CheckCircle2, Award];

  return (
    <section id="sobre" className="py-32 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden border-8 border-steel/30 relative z-10">
              <img 
                src={CONTENT.about.image} 
                alt="Pedro Mascavo" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-burnt/20 rounded-full blur-[80px] z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-navy-petrol/20 rounded-full blur-[100px] z-0" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-6 -left-6 bg-orange-burnt p-8 rounded-3xl z-20 shadow-2xl"
            >
              <span className="text-4xl font-bold text-ice block">10+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-ice/80">Anos de Experiência</span>
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-orange-burnt font-bold uppercase tracking-[0.4em] text-xs mb-4 block"
              >
                Quem é Pedro Mascavo
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-display leading-tight">
                {CONTENT.about.intro}
              </h2>
              <p className="text-xl text-silver/80 leading-relaxed mb-8">
                {CONTENT.about.complement}
              </p>
              <p className="text-lg text-silver/60 leading-relaxed italic">
                "{CONTENT.about.philosophy}"
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {CONTENT.about.values.map((value, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <div key={value} className="flex items-center gap-3 p-4 bg-steel/20 rounded-2xl border border-white/5">
                    <Icon className="w-5 h-5 text-orange-burnt" />
                    <span className="text-sm font-bold uppercase tracking-widest text-ice">{value}</span>
                  </div>
                );
              })}
            </div>

            <div className="p-8 bg-navy-petrol/20 border border-navy-petrol/30 rounded-3xl">
              <p className="text-silver/80 leading-relaxed">
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
