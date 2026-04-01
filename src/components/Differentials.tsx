import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { CONTENT } from '../constants';

const Differentials = () => {
  return (
    <section className="py-32 bg-graphite/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTENT.differentials.map((diff, index) => {
            const IconComponent = (Icons as any)[diff.icon];
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium p-8 group"
              >
                <div className="w-12 h-12 bg-navy-petrol rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-burnt transition-colors duration-500">
                  {IconComponent && <IconComponent className="w-6 h-6 text-orange-burnt group-hover:text-ice transition-colors" />}
                </div>
                <h3 className="text-lg font-bold tracking-tight text-ice group-hover:text-orange-burnt transition-colors">
                  {diff.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
