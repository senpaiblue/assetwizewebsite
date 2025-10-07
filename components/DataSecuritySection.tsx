'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface DataSecuritySectionProps {
  className?: string;
}

const DataSecuritySection: React.FC<DataSecuritySectionProps> = ({ className = '' }) => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const securityCards = [
    {
      id: 'access-control',
      title: 'Access Control',
      description: 'Only you have **access** to the data and nobody else.',
      image: '/access.svg',
      gradient: 'from-teal-600 to-teal-800'
    },
    {
      id: 'device-security',
      title: 'Device Security',
      description: 'We give you a **high security** iPad, and all your **data remains on this device**.',
      image: '/high security.svg',
      gradient: 'from-teal-600 to-teal-800'
    },
    {
      id: 'data-encryption',
      title: 'Data Encryption',
      description: 'All your **data is encrypted** to the highest standards.',
      image: '/Encrypting your data.svg',
      gradient: 'from-teal-600 to-teal-800'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-medium text-gray-900 font-inter mb-16">
            Let&apos;s first talk about data security
          </h2>
        </motion.div>

        {/* Security Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {securityCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Header with Icon */}
              <div className="relative w-full">
                <div className="relative w-full h-80">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>


                {/* Card Description */}
                <div className="text-center p-4 text-start">
                  <p 
                    className="text-gray-600 text-sm lg:text-base font-inter leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: card.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
                    }}
                  />
                </div>
              </div>

              {/* Gradient Border Effect */}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DataSecuritySection;
