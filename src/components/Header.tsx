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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-silver hover:text-orange-burnt transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={CONTENT.hero.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-orange-burnt text-ice text-center font-bold rounded-xl uppercase tracking-widest"
              >
                Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
