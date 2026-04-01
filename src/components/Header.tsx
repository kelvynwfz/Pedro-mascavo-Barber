import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { CONTENT, LOGO_URL } from '../constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cortes', href: '#cortes' },
    { name: 'Destaques', href: '#destaques' },
    { name: 'Autoridade', href: '#autoridade' },
    { name: 'Quem é Pedro', href: '#sobre' },
    { name: 'Arena', href: '#arena' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-premium py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img 
            src={LOGO_URL} 
            alt="Pedro Mascavo Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-bold tracking-tighter uppercase font-display hidden sm:block">
            Pedro <span className="text-orange-burnt">Mascavo</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-medium text-silver hover:text-orange-burnt transition-colors uppercase tracking-widest"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href={CONTENT.hero.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-orange-burnt text-ice text-xs font-bold rounded-full uppercase tracking-widest hover:bg-orange-vibrant transition-all hover:shadow-[0_0_20px_rgba(229,102,46,0.4)]"
          >
            Agendar
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ice"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/95 backdrop-blur-2xl z-[60] md:hidden"
          >
            <div className="flex flex-col h-full p-8 pt-24">
              <button 
                className="absolute top-8 right-8 text-ice p-2 bg-white/5 rounded-full border border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>

              <div className="flex flex-col gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold font-display text-ice hover:text-orange-burnt transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <div className="w-12 h-1 bg-orange-burnt scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pb-12">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href={CONTENT.hero.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-6 bg-orange-burnt text-ice text-center font-bold rounded-2xl uppercase tracking-[0.2em] text-lg shadow-[0_20px_40px_rgba(229,102,46,0.3)] block"
                >
                  Agendar Agora
                </motion.a>
                
                <div className="mt-8 flex justify-center gap-6 text-silver/40 text-xs uppercase tracking-[0.3em] font-bold">
                  <span>Maceió, AL</span>
                  <div className="w-1 h-1 bg-orange-burnt rounded-full self-center" />
                  <span>Arena Barbearia</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
