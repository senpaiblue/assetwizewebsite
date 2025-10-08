'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Simple store implementation (you can replace with your actual store)
const useUIStore = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  return { isMenuOpen, setMenuOpen, toggleMenu };
};

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const { isMenuOpen, setMenuOpen, toggleMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Home', 'Product', 'Partners', 'Asset classes', 'Services', 'Research', 'Company'];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Header container with proper positioning */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 ${className}`}>
        <nav
          className={`mx-auto max-w-7xl rounded-full transition-all duration-300 ${
            isScrolled
              ? 'backdrop-blur-xl bg-white/70 shadow-lg shadow-black/5 border border-white/20'
              : 'backdrop-blur-md bg-white/50 border border-white/10'
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <motion.div 
              className="text-xl font-bold text-black tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              ASSETWIZE
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors duration-200 font-medium whitespace-nowrap"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.button
              className="hidden lg:block bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Request Invitation
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-center gap-1.5">
                <motion.div 
                  className="w-full h-0.5 bg-black rounded-full"
                  animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className="w-full h-0.5 bg-black rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className="w-full h-0.5 bg-black rounded-full"
                  animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="text-xl font-bold text-black tracking-tight">
                  ASSETWIZE
                </div>
                <motion.button
                  className="p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Close menu"
                >
                  <div className="w-6 h-6 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black rotate-45 transform -translate-y-1/2 rounded-full" />
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black -rotate-45 transform -translate-y-1/2 rounded-full" />
                  </div>
                </motion.button>
              </div>

              {/* Mobile Menu Content */}
              <nav className="px-4 py-6 space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200 py-3 px-4 rounded-lg"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <div className="p-4 border-t border-gray-100">
                <motion.button
                  className="w-full bg-black text-white px-6 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setMenuOpen(false)}
                >
                  Request Invitation
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;