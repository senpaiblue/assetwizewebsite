'use client';

import Image from 'next/image';

const cards = [
  {
    title: 'Increased AUM (Assets Under Management)',
    image: '/AUM.svg',
  },
  {
    title: 'Deeper Customer Engagement',
    image: '/Customer.svg',
  },
  {
    title: 'Holistic Asset Management',
    image: '/Holistic.svg',
  },
];

const BenefitsAssetMgmtSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
          Benefits for Asset Management
          <br />
          Companies
        </h2>

        {/* Desktop/tablet layout */}
        <div className="hidden lg:flex mt-12 lg:mt-16 flex-col gap-10">
          {/* Row 1: left and right spaced apart */}
          <div className="flex items-start justify-between">
            {/* Left card */}
            <div className="w-[560px] rounded-3xl bg-white border border-gray-100 shadow-md px-8 py-8 flex items-center justify-between gap-8">
              <div className="text-gray-700 text-xl font-medium max-w-[18rem]">{cards[0].title}</div>
              <div className="relative w-28 h-28">
                <Image src={cards[0].image} alt={cards[0].title} fill className="object-contain" />
              </div>
            </div>

            {/* Right card */}
            <div className="w-[560px] rounded-3xl bg-white border border-gray-100 shadow-md px-8 py-8 flex items-center justify-between gap-8">
              <div className="text-gray-700 text-xl font-medium max-w-[18rem]">{cards[2].title}</div>
              <div className="relative w-28 h-28">
                <Image src={cards[2].image} alt={cards[2].title} fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Row 2: centered middle card */}
          <div className="flex justify-center">
            <div className="w-[560px] rounded-3xl bg-white border border-gray-100 shadow-md px-8 py-8 flex items-center justify-between gap-8">
              <div className="text-gray-700 text-xl font-medium max-w-[22rem]">{cards[1].title}</div>
              <div className="relative w-32 h-32">
                <Image src={cards[1].image} alt={cards[1].title} fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden mt-10 -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-4">
          {cards.map((c, i) => (
            <div key={i} className="min-w-[85%] snap-center rounded-3xl bg-white border border-gray-100 shadow-md px-6 py-8 flex items-center justify-between gap-6">
              <div className="text-gray-700 text-base font-medium max-w-[14rem]">{c.title}</div>
              <div className="relative w-20 h-20">
                <Image src={c.image} alt={c.title} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsAssetMgmtSection;


