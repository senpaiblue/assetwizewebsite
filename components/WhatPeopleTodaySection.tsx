'use client';

import Image from 'next/image';

const ICONS = [
  { src: '/excel.svg', alt: 'Excel' },
  { src: '/photos.svg', alt: 'Photos' },
  { src: '/drive.svg', alt: 'Google Drive' },
  { src: '/whatsapp.svg', alt: 'WhatsApp' },
  { src: '/locker.svg', alt: 'Locker' },
  { src: '/files.svg', alt: 'Files' },
];

const WhatPeopleTodaySection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: heading and copy */}
        <div className="lg:col-span-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
            What people are
            <br />
            doing today
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl">
            Tools ( &gt; 95% ) Indians rely on managing their physical assets
          </p>
        </div>

        {/* Right: icon grid */}
        <div className="lg:col-span-6 px-4 sm:px-8 lg:px-0">
          <div className="grid grid-cols-3 gap-6 place-items-center">
            {ICONS.map((icon, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                  <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleTodaySection;


