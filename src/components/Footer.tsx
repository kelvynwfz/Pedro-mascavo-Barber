import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Instagram, Phone, MapPin } from 'lucide-react';
import { CONTENT, LOGO_URL } from '../constants';

const Footer = () => {
  return (
    <footer id="agendamento" className="bg-charcoal pt-32 pb-12 relative overflow-hidden">
      {/* Final CTA Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="bg-gradient-to-br from-navy-petrol to-charcoal p-12 md:p-24 rounded-[60px] border border-white/5 text-center relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-burnt/5 blur-[120px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display leading-[0.9]">
              {CONTENT.footer.headline}
            </h2>
            <p className="text-xl text-silver/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              {CONTENT.footer.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href={CONTENT.hero.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 bg-orange-burnt text-ice font-bold uppercase tracking-widest rounded-2xl hover:bg-orange-vibrant transition-all hover:shadow-[0_0_40px_rgba(229,102,46,0.4)] flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Quais horários disponível
              </a>
              <a 
                href="https://wa.me/5582998314344?text=Olá,%20gostaria%20de%20saber%20quais%20horários%20disponível"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 border border-white/10 text-ice font-bold uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                Falar com a Arena
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl font-bold tracking-tighter uppercase font-display">
                Pedro <span className="text-orange-burnt">Mascavo</span>
              </span>
            </div>
            <p className="text-silver/40 max-w-sm leading-relaxed">
              Elevando a imagem e a confiança do homem moderno através de um atendimento premium e personalizado em Maceió.
            </p>
          </div>

          <div>
            <h4 className="text-ice font-bold uppercase tracking-widest text-xs mb-8">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-silver/60 hover:text-orange-burnt transition-colors">
                <Phone className="w-4 h-4" />
                <span>{CONTENT.footer.contact.pedro}</span>
              </li>
              <li className="flex items-center gap-3 text-silver/60 hover:text-orange-burnt transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@pedromascavo</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ice font-bold uppercase tracking-widest text-xs mb-8">Localização</h4>
            <div className="flex items-start gap-3 text-silver/60">
              <MapPin className="w-4 h-4 mt-1 shrink-0" />
              <span>Arena Barbearia, Maceió - AL</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-silver/20">
          <span>© 2026 Pedro Mascavo. Todos os direitos reservados.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-orange-burnt transition-colors">Privacidade</a>
            <a href="#" className="hover:text-orange-burnt transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
