import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 w-full z-50 px-8 py-8 flex justify-between items-start pointer-events-none mix-blend-difference"
    >
      {/* Top Left - Logo */}
      <button 
        onClick={() => onNavigate('hero')}
        className="pointer-events-auto text-light font-display font-bold text-xl tracking-tighter hover:text-accent transition-colors cursor-hover"
      >
        NM.
      </button>

      {/* Top Right - Menu */}
      <div className="pointer-events-auto flex flex-col items-end gap-2">
        {['About', 'Work', 'Contact'].map((item, i) => (
          <button
            key={item}
            onClick={() => onNavigate(item.toLowerCase())}
            className={`text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors cursor-hover ${activeSection === item.toLowerCase() ? 'text-accent' : 'text-light'}`}
          >
            {item}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;