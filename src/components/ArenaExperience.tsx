import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink, MessageCircle, Coffee, Wifi, Tv } from 'lucide-react';
import { CONTENT } from '../constants';

const ArenaExperience = () => {
  const amenities = [
    { icon: Coffee, label: "Café & Bebidas" },
    { icon: Wifi, label: "Wi-Fi Premium" },
    { icon: Tv, label: "Esportes ao Vivo" },
  ];

  return (
    <section id="arena" className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-charcoal rounded-[32px] md:rounded-[60px] overflow-hidden border border-white/5 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-20 flex flex-col justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-petrol/50 border border-navy-petrol/50 mb-6 md:mb-8">
                  <span className="w-2 h-2 bg-orange-burnt rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-silver">Local de Atendimento</span>
                </div>
                
                <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 font-display leading-tight text-ice">
                  {CONTENT.arena.title}
                </h2>
                <p className="text-base md:text-xl text-silver/60 leading-relaxed mb-10 md:mb-12">
                  {CONTENT.arena.text}
                </p>

                <div className="flex flex-wrap gap-6 md:gap-8 mb-10 md:mb-12">
                  {amenities.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-orange-burnt" />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-silver">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <a 
                    href={CONTENT.hero.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-8 py-5 bg-orange-burnt text-ice font-bold uppercase tracking-widest rounded-2xl md:rounded-xl hover:bg-orange-vibrant transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Quais horários disponível
                  </a>
                  <a 
                    href="https://www.google.com/maps/place/Arena+Barbearia+%7C+Jatiúca/@-9.6504455,-35.7076513,17z/data=!4m14!1m7!3m6!1s0x70145b128691f53:0x930304bdf35a21fa!2sArena+Barbearia+%7C+Jatiúca!8m2!3d-9.6504455!4d-35.7050764!16s%2Fg%2F11bwzyqs1f!3m5!1s0x70145b128691f53:0x930304bdf35a21fa!8m2!3d-9.6504455!4d-35.7050764!16s%2Fg%2F11bwzyqs1f?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-8 py-5 border border-white/10 text-ice font-bold uppercase tracking-widest rounded-2xl md:rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    <MapPin className="w-5 h-5" />
                    Abrir localização
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="relative h-[300px] md:h-[400px] lg:h-auto order-1 lg:order-2">
              <img 
                src="https://i.postimg.cc/VNgpbjdm/imagem-2026-03-31-204435620.png" 
                alt="Arena Barbearia" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArenaExperience;
