'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyAssetwizeSection: React.FC = () => {
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
          Why Assetwize
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left card - wider, image on top */}
          <div className="rounded-3xl bg-[#FBFBFB] border border-gray-200 shadow-md overflow-hidden lg:col-span-7 lg:h-[400px] flex flex-col">
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <div className="relative w-full h-56 sm:h-64 lg:h-[260px] rounded-2xl overflow-hidden bg-gray-50">
                <Image src="/physical asset.svg" alt="Manage every asset" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-900 text-lg sm:text-xl font-semibold">Manage every single physical asset</h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut , Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
          </div>

          {/* Right top - narrower, image at bottom */}
          <div className="rounded-3xl bg-[#FBFBFB] border border-gray-200 shadow-md overflow-hidden lg:col-span-5 lg:h-[400px] flex flex-col">
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-gray-900 text-lg sm:text-xl font-semibold">A concierge to help you catalogue</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut , Lorem ipsum dolor sit amet,</p>
              <div className="mt-auto pt-6 flex justify-center">
                <div className="relative w-52 h-52 sm:w-64 sm:h-64">
                  {/* Stacked cards effect */}
                  <div className="absolute inset-0 translate-x-7 -translate-y-4 rotate-6 bg-gray-100 rounded-2xl" />
                  <div className="absolute inset-0 -translate-x-6 -translate-y-2 -rotate-6 bg-gray-100 rounded-2xl" />
                  <div className="absolute inset-0">
                    <Image src="/catalogue.svg" alt="rings" fill className="object-cover rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom left - narrower, image centered */}
          <div className="rounded-3xl bg-[#FBFBFB] border border-gray-200 shadow-md overflow-hidden lg:col-span-5 lg:h-[350px] flex flex-col">
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-gray-900 text-lg sm:text-xl font-semibold">Only you have access to the data and nobody else.</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
              <div className="mt-auto pt-6 relative w-full h-40 sm:h-48">
                <Image src="/data.svg" alt="Access control" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Bottom right - wider, image anchored to bottom */}
          <div className="rounded-3xl bg-[#FBFBFB] border border-gray-200 shadow-md overflow-hidden lg:col-span-7 lg:h-[350px] flex flex-col">
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-gray-900 text-lg sm:text-xl font-semibold">A dedicated IPad with all data only stored on your device</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut , Lorem ipsum dolor sit amet,</p>
              <div className="mt-auto pt-6 relative w-full h-56 sm:h-84">
                <Image src="/dedicated Ipad.svg" alt="Dedicated iPad" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAssetwizeSection;


