import React from 'react';
import { motion } from 'motion/react';
import { CONTENT } from '../constants';

const Positioning = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-charcoal">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight font-display">
            {CONTENT.positioning.main}
          </h2>
          <div className="w-24 h-1 bg-orange-burnt mx-auto mb-12" />
          <p className="text-xl md:text-2xl text-silver/60 max-w-3xl mx-auto leading-relaxed font-light italic">
            "{CONTENT.positioning.support}"
          </p>
        </motion.div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none uppercase whitespace-nowrap">
        PRESENÇA
      </div>
    </section>
  );
};

export default Positioning;
