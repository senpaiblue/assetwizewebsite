'use client';

import { Fragment, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ICategoryItem {
  id: string;
  title: string;
  imageUrl: string;
  gallery?: string[];
  paragraphs?: string[];
}

interface IAssetCategoryModalProps {
  open: boolean;
  category: ICategoryItem | null;
  onClose: () => void;
}

const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const modal = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, scale: 0.98, y: 10, transition: { duration: 0.2 } }
};

const fallbackGallery: string[] = [
  'https://images.unsplash.com/photo-1616596661856-6d88b67a9abc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603575449153-328d9a8809a0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1612100452467-d2f6a2dff7e5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505682634904-d7c075c66e6a?q=80&w=1200&auto=format&fit=crop'
];

const AssetCategoryModal: React.FC<IAssetCategoryModalProps> = ({ open, category, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.matchMedia('(max-width: 640px)').matches);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000]"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlay}
        >
          <button aria-label="Close" className="absolute inset-0 w-full h-full bg-black/60" onClick={onClose} />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              className="pointer-events-auto w-full max-w-5xl rounded-3xl bg-white shadow-2xl border border-gray-200 max-h-[92vh] overflow-auto"
              variants={isMobile ? undefined : modal}
              initial={isMobile ? undefined : 'hidden'}
              animate={isMobile ? undefined : 'visible'}
              exit={isMobile ? undefined : 'exit'}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 sm:p-6">
                {/* Text content - shown first on mobile */}
                <div className="lg:w-1/2 flex flex-col order-2 lg:order-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{category?.title}</h3>
                    <button aria-label="Close" onClick={onClose} className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                  </div>
                  <div className="mt-3 space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                    {(category?.paragraphs ?? [
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    ]).map((t, i) => (<p key={i}>{t}</p>))}
                  </div>

                  <div className="mt-6">
                    <button type="button" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white text-sm sm:text-base shadow hover:shadow-md transition-shadow">
                      Download App
                    </button>
                  </div>
                </div>

                {/* Image grid - shown second on mobile, first on desktop */}
                <div className="lg:w-1/2 w-full grid grid-cols-2 gap-3 sm:gap-4 self-start order-1 lg:order-1" style={{ minHeight: '300px' }}>
                  {(category?.gallery ?? fallbackGallery).map((src, idx) => (
                    <div 
                      key={idx} 
                      className={`relative overflow-hidden rounded-2xl bg-gray-200 ${idx === 0 ? 'row-span-2' : ''}`}
                      style={{
                        height: idx === 0 ? '300px' : '145px',
                        minHeight: idx === 0 ? '300px' : '145px'
                      }}
                    >
                      <img
                        src={src}
                        alt={`${category?.title ?? 'Category'} ${idx + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                        loading={idx < 2 ? 'eager' : 'lazy'}
                        onLoad={() => console.log(`Image ${idx} loaded:`, src)}
                        onError={(e) => {
                          console.error('Image failed to load:', src);
                          const target = e.currentTarget;
                          target.style.backgroundColor = '#e5e7eb';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AssetCategoryModal;