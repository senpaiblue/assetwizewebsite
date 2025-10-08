'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AssetCategoryModal from './AssetCategoryModal';

interface ICategoryItem {
  id: string;
  title: string;
  imageUrl: string;
  gallery?: string[];
  paragraphs?: string[];
}

const CATEGORIES: ICategoryItem[] = [
  { id: 'jewellery', title: 'Jewellery', imageUrl: '/Jewellery.svg',
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200&auto=format&fit=crop'
    ],
    paragraphs: [
      'Discover timeless pieces crafted with precision and care.',
      'Each item is authenticated and securely stored with full provenance.',
      'Track valuations and insure assets directly from the app.'
    ]
  },
  { id: 'garage', title: 'Garage', imageUrl: '/Garage.svg',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop'
    ],
    paragraphs: [
      'Manage your collection of vehicles with detailed records and photos.',
      'Log maintenance, services, and ownership history in one place.',
      'Export reports for auctions or insurance in seconds.'
    ]
  },
  { id: 'collectibles', title: 'Collectibles & Arts', imageUrl: '/Collectibles.svg',
    gallery: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1200&auto=format&fit=crop'
    ],
    paragraphs: [
      'Catalogue art and collectibles with high-resolution imagery.',
      'Attach receipts, certificates, and appraisals to each piece.',
      'Share private viewing links with advisors when needed.'
    ]
  },
  { id: 'realty', title: 'Realty', imageUrl: '/Realty.svg',
    gallery: [
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop'
    ],
    paragraphs: [
      'Organize documents and photos for each property you own.',
      'Track renovations, valuations, and rental performance.',
      'Keep everything synced and shareable with stakeholders.'
    ]
  },
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
          className="text-center text-3xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-10"
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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


