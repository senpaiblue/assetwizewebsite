'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useUIStore } from './store';
import Navbar from './Navbar';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const { 
    currentTab, 
    personalNotes, 
    setCurrentTab, 
    setPersonalNotes
  } = useUIStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`relative min-h-screen bg-white overflow-hidden ${className}`}>
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/desktopbg.svg"
            alt="Desktop Background"
            fill
            className="object-fit"
            priority
          />
        </div>
        
        {/* Mobile Background */}
        <div className="block lg:hidden absolute inset-0">
          <Image
            src="/phonebg.svg"
            alt="Mobile Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl text-center">
          {/* Hero Text */}
          <motion.div 
            className="pt-32 md:pt-0"
            variants={textVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl sm:text-5xl lg:text-4xl xl:text-6xl font-inter leading-tight">
              <span className="italic text-gray-600">A Personal</span>
              <br />
              <span className="font-regular text-black/90">Asset Manager for {" "}</span>
              <span className="font-regular text-black/90">your Physical {" "}</span>
              <span className="font-regular text-black/90">assets</span>
            </h1>
          </motion.div>

          {/* App Preview Card */}
          
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
