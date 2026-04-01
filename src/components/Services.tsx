import React from 'react';
import { motion } from 'motion/react';
import { Scissors, MessageCircle } from 'lucide-react';
import { CONTENT } from '../constants';

const Services = () => {
  return (
    <section id="servicos" className="py-32 bg-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Serviços <span className="text-orange-burnt">Premium</span>
            </h2>
            <p className="text-silver/60 text-lg">
              Cada atendimento é uma consultoria de imagem. Escolha o serviço que melhor se adapta à sua necessidade.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="hidden md:block"
          >
            <Scissors className="w-20 h-20 text-white/5" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-steel/20 border border-white/5 rounded-3xl hover:bg-navy-petrol/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Scissors className="w-12 h-12" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-ice group-hover:text-orange-burnt transition-colors">
                {service.name}
              </h3>
              <p className="text-silver/60 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <a 
                href="https://wa.me/5582987223080?text=Olá,%20gostaria%20de%20saber%20quais%20horários%20disponível"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-burnt font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all"
              >
                Quais horários disponível
                <MessageCircle className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
