import React from 'react';
import { motion } from 'motion/react';
import { LOGO_URL } from '../constants';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <span className="text-4xl md:text-6xl font-bold tracking-tighter uppercase font-display">
            Pedro <span className="text-orange-burnt">Mascavo</span>
          </span>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[2px] bg-orange-burnt mx-auto max-w-[200px]"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
