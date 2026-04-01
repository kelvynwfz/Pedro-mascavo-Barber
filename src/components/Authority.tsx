import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Award, Users, Globe } from 'lucide-react';
import { CONTENT } from '../constants';

const Authority = () => {
  return (
    <section id="autoridade" className="py-32 bg-charcoal relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-navy-petrol/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -left-20 w-[500px] h-[500px] bg-orange-burnt/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-orange-burnt font-bold uppercase tracking-[0.4em] text-xs block mb-2">
              Autoridade
            </span>
            <div className="h-1 w-12 bg-orange-burnt mx-auto rounded-full" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight"
          >
            {CONTENT.authority.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-silver/60 max-w-3xl mx-auto font-medium"
          >
            {CONTENT.authority.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
          {CONTENT.authority.cards.map((card, index) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative bg-graphite/40 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-md"
            >
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={card.image} 
                  alt={card.name}
                  className="w-full h-full object-cover transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-90 md:opacity-80" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-burnt/90 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-ice">
                      {card.selo}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-display text-ice leading-tight">
                    {card.name}
                  </h3>
                  <p className="text-silver/80 text-xs md:text-sm leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform md:translate-y-4 md:group-hover:translate-y-0">
                    {card.text}
                  </p>
                </div>
              </div>
              
              {/* Subtle Border Glow */}
              <div className="absolute inset-0 border border-orange-burnt/0 group-hover:border-orange-burnt/30 transition-colors duration-500 rounded-[32px] pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Impact Phrase Section */}
        <div className="max-w-5xl mx-auto text-center mb-24 md:mb-32 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-20 rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-navy-petrol/20 to-charcoal border border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-orange-burnt/5 opacity-20 pointer-events-none" />
            
            <h3 className="text-3xl md:text-6xl font-bold font-display mb-6 md:mb-8 leading-tight text-ice relative z-10">
              "{CONTENT.authority.impactPhrase}"
            </h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-orange-burnt font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-sm relative z-10"
            >
              {CONTENT.authority.microcopy}
            </motion.p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 md:mt-12 text-silver/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {CONTENT.authority.supportText}
          </motion.p>
        </div>

        {/* Final CTA for this section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-16 rounded-[32px] md:rounded-[40px] bg-graphite/30 border border-white/5 text-center backdrop-blur-sm shadow-2xl"
        >
          <h4 className="text-2xl md:text-4xl font-bold mb-4 font-display text-ice leading-tight">{CONTENT.authority.cta.title}</h4>
          <p className="text-silver/60 mb-8 md:mb-10 max-w-xl mx-auto text-base md:text-lg">
            {CONTENT.authority.cta.subtext}
          </p>
          <a 
            href={CONTENT.hero.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-orange-burnt text-ice font-bold uppercase tracking-widest rounded-2xl hover:bg-orange-vibrant transition-all shadow-xl shadow-orange-burnt/20 group active:scale-95"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {CONTENT.authority.cta.button}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Authority;
