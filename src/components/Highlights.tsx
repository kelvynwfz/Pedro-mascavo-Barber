import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { CONTENT } from '../constants';

const Highlights = () => {
  const { highlights } = CONTENT;

  return (
    <section id="destaques" className="py-32 bg-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-navy-petrol/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-burnt/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <Star className="w-4 h-4 text-orange-burnt fill-orange-burnt" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-silver">
              Destaques & Prova Social
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 font-display leading-tight"
          >
            {highlights.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-silver/60 max-w-2xl mx-auto"
          >
            {highlights.subtitle}
          </motion.p>
        </div>

        {/* Main Personalities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {highlights.mainPersonalities.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 bg-graphite shadow-2xl">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent opacity-90 md:opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-1 md:space-y-2"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-ice leading-tight">{person.name}</h3>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-burnt">
                      {person.description}
                    </p>
                  </motion.div>
                </div>

                {/* Premium Border Glow */}
                <div className="absolute inset-0 border-2 border-orange-burnt/0 group-hover:border-orange-burnt/30 rounded-[32px] md:rounded-[40px] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24 px-4"
        >
          <div className="inline-block relative">
            <Quote className="absolute -top-6 md:-top-8 -left-6 md:-left-8 w-8 md:w-12 h-8 md:h-12 text-orange-burnt/20" />
            <p className="text-xl md:text-3xl font-display italic text-silver/80 max-w-3xl mx-auto relative z-10 leading-relaxed">
              {highlights.supportPhrase}
            </p>
            <Quote className="absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-8 md:w-12 h-8 md:h-12 text-orange-burnt/20 rotate-180" />
          </div>
        </motion.div>

        {/* Secondary Personalities */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] md:rounded-[40px] p-8 md:p-16">
          <div className="text-center mb-10 md:mb-12">
            <h4 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-orange-burnt mb-3 md:mb-4">
              {highlights.secondaryTitle}
            </h4>
            <p className="text-silver/40 text-[9px] md:text-xs uppercase tracking-widest">
              {highlights.microcopy}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {highlights.secondaryNames.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/5 bg-white/5 hover:bg-orange-burnt/10 hover:border-orange-burnt/30 transition-all cursor-default group active:scale-95"
              >
                <span className="text-xs md:text-sm font-medium text-silver/60 group-hover:text-ice transition-colors">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
