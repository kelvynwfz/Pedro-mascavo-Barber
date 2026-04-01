import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5582987223080?text=Olá,%20gostaria%20de%20saber%20quais%20horários%20disponível"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] group active:scale-95 transition-transform"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-20"
      />
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
      <div className="absolute right-full mr-4 bg-white text-charcoal px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Quais horários disponível
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
