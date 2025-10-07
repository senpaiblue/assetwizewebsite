'use client';

import { motion } from 'framer-motion';
import { useUIStore } from './store';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const { isMenuOpen, setMenuOpen, toggleMenu } = useUIStore();

  const navItems = ['Home', 'Product', 'Partners', 'Asset classes', 'Services', 'Research', 'Company'];

  return (
    <header className={`relative z-50 px-4 sm:px-6 lg:px-8 py-4 ${className}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold text-black font-inter"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          ASSETWIZE
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-gray-700 hover:text-black transition-colors duration-200 font-inter"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.button
          className="hidden lg:block bg-black text-white px-6 py-2 rounded-lg font-inter hover:bg-gray-800 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Request Invitation
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden bg-gray-100 p-2 rounded-lg"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-black"></div>
            <div className="w-full h-0.5 bg-black"></div>
            <div className="w-full h-0.5 bg-black"></div>
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 z-50 bg-white ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="text-2xl font-bold text-black font-inter">
            ASSETWIZE
          </div>
          <motion.button
            className="p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-black rotate-45 translate-y-1"></div>
              <div className="w-full h-0.5 bg-black -rotate-45 -translate-y-1"></div>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full">
          <nav className="flex-1 px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="block text-2xl font-medium text-gray-700 hover:text-black transition-colors duration-200 font-inter py-3"
                onClick={() => setMenuOpen(false)}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <div className="p-4 border-t border-gray-200">
            <motion.button
              className="w-full bg-black text-white px-6 py-4 rounded-lg font-inter text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            >
              Request Invitation
            </motion.button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
