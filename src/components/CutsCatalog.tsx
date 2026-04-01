import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, MessageCircle, Star, CheckCircle2, Sparkles, Target } from 'lucide-react';
import { CONTENT } from '../constants';

const CutsCatalog = () => {
  const [activeCut, setActiveCut] = useState(CONTENT.cuts[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="cortes" className="py-32 bg-charcoal relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-navy-petrol/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-orange-burnt/5 rounded-full blur-[100px]" />
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
              Catálogo de Estilo
            </span>
            <div className="h-1 w-12 bg-orange-burnt mx-auto rounded-full" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold font-display mb-6"
          >
            Cortes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-silver/60 max-w-2xl mx-auto font-medium"
          >
            Escolha o estilo que melhor representa sua presença.
          </motion.p>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {/* Premium Selector Bar */}
          <div className="relative z-40 px-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full flex items-center justify-between px-6 py-5 bg-steel/20 border border-white/10 rounded-2xl backdrop-blur-md group hover:bg-steel/30 transition-all active:scale-[0.98] tap-highlight-none"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-orange-burnt shadow-[0_0_10px_rgba(229,102,46,0.8)]" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-burnt/60">Estilo Selecionado</span>
                  <span className="text-lg font-bold text-ice uppercase tracking-widest">{activeCut.title}</span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-silver/40 group-hover:text-orange-burnt transition-colors" />
              </motion.div>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <>
                  {/* Backdrop for closing */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 z-[-1] bg-charcoal/40 backdrop-blur-sm"
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-2 right-2 mt-3 bg-graphite/95 border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl overflow-hidden"
                  >
                    <div className="p-3 grid grid-cols-1 gap-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                      {CONTENT.cuts.map((cut) => (
                        <button
                          key={cut.id}
                          onClick={() => {
                            setActiveCut(cut);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-4 rounded-xl transition-all tap-highlight-none ${
                            activeCut.id === cut.id 
                              ? 'bg-orange-burnt text-ice' 
                              : 'hover:bg-white/5 text-silver/60 hover:text-ice'
                          }`}
                        >
                          <span className="font-bold uppercase tracking-widest text-sm">{cut.title}</span>
                          {activeCut.id === cut.id && <CheckCircle2 className="w-5 h-5" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Display Area - Editorial Style */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCut.id}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-graphite/40 border border-white/10 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative aspect-[4/5] md:aspect-auto min-h-[350px] md:min-h-[600px] overflow-hidden group">
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      src={activeCut.image} 
                      alt={activeCut.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent opacity-80 md:opacity-60" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-6 md:top-8 left-6 md:left-8">
                      <div className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-burnt/90 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-ice">
                          {activeCut.categorySelo}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-14 flex flex-col justify-center">
                    <div className="space-y-6 md:space-y-8">
                      <div>
                        <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-display leading-tight text-ice">
                          {activeCut.title}
                        </h3>
                        <p className="text-silver/70 text-base md:text-lg leading-relaxed">
                          {activeCut.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:gap-6">
                        <div className="space-y-1 md:space-y-2">
                          <div className="flex items-center gap-2 text-orange-burnt/60">
                            <Target className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Para quem combina:</span>
                          </div>
                          <p className="text-silver text-sm md:text-base font-medium pl-5 md:pl-6 border-l border-white/10">
                            {activeCut.paraQuemCombina}
                          </p>
                        </div>

                        <div className="space-y-1 md:space-y-2">
                          <div className="flex items-center gap-2 text-orange-burnt/60">
                            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Sensação que transmite:</span>
                          </div>
                          <p className="text-silver text-sm md:text-base font-medium pl-5 md:pl-6 border-l border-white/10">
                            {activeCut.sensacaoTransmite}
                          </p>
                        </div>

                        <div className="space-y-1 md:space-y-2">
                          <div className="flex items-center gap-2 text-orange-burnt/60">
                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Ideal para:</span>
                          </div>
                          <p className="text-silver text-sm md:text-base font-medium pl-5 md:pl-6 border-l border-white/10">
                            {activeCut.idealPara}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 md:pt-6">
                        <a 
                          href={CONTENT.hero.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-orange-burnt text-ice font-bold uppercase tracking-widest rounded-2xl hover:bg-orange-vibrant transition-all shadow-lg shadow-orange-burnt/20 group active:scale-95"
                        >
                          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          Quero esse estilo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Supporting Phrase */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-silver/30 text-sm uppercase tracking-[0.5em] font-bold">
            Seu corte não é só detalhe. É linguagem visual.
          </p>
        </motion.div>

        {/* Final CTA for this section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[40px] bg-gradient-to-br from-navy-petrol/40 to-charcoal border border-white/5 text-center"
        >
          <h4 className="text-3xl md:text-4xl font-bold mb-4 font-display">Já sabe qual combina mais com você?</h4>
          <p className="text-silver/60 mb-10 max-w-xl mx-auto">
            Escolha seu estilo e agende seu horário com Pedro Mascavo.
          </p>
          <a 
            href={CONTENT.hero.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-charcoal font-bold uppercase tracking-widest rounded-2xl hover:bg-orange-burnt hover:text-ice transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Quais horários disponível
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CutsCatalog;
