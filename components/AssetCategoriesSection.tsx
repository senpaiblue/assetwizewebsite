'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AssetCategoryModal from './AssetCategoryModal';

interface ICategoryItem {
  id: string;
  title: string;
  imageUrl: string;
}

const CATEGORIES: ICategoryItem[] = [
  { id: 'jewellery', title: 'Jewellery', imageUrl: '/Collectibles.svg' },
  { id: 'garage', title: 'Garage', imageUrl: '/Garage.svg' },
  { id: 'collectibles', title: 'Collectibles & Arts', imageUrl: '/Jewellery.svg' },
  { id: 'realty', title: 'Realty', imageUrl: '/Realty.svg' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AssetCategoriesSection: React.FC = () => {
  const [active, setActive] = useState<ICategoryItem | null>(null);

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Browse asset categories
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              type="button"
              variants={itemVariants}
              onClick={() => setActive(cat)}
              className="group relative w-full overflow-hidden rounded-3xl bg-gray-100 shadow-md border border-gray-200 text-left focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-72">
                <Image
                  src={cat.imageUrl}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw 50vw, 50vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-white/0" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                  <span className="text-white text-xl sm:text-2xl font-semibold drop-shadow">{cat.title}</span>
                  <span className="text-white/90 text-sm sm:text-base font-medium inline-flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    View more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.5l6 6-6 6M3 12h16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AssetCategoryModal open={!!active} category={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default AssetCategoriesSection;


