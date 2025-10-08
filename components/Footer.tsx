'use client';

import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-10 bg-white">
      <div className="max-w-7xl mx-auto rounded-3xl border border-gray-200 bg-[#F7F7F7] p-6 sm:p-8 lg:p-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Brand and blurb */}
          <div className="lg:col-span-7">
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">ASSETWIZE</div>
            <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              <a aria-label="Instagram" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-800" href="#">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10A5 5 0 0012 7zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
              </a>
              <a aria-label="Facebook" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-800" href="#">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.29.2 2.29.2v2.52h-1.29c-1.27 0-1.67.79-1.67 1.6V12h2.84l-.45 2.91h-2.39v7.04A10 10 0 0022 12z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 text-gray-800">
            <div>
              <div className="text-lg font-semibold">Company</div>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li><a href="#" className="hover:text-gray-900">Product</a></li>
                <li><a href="#" className="hover:text-gray-900">Partners</a></li>
                <li><a href="#" className="hover:text-gray-900">Asset classes</a></li>
              </ul>
            </div>
            <div>
              <div className="text-lg font-semibold">Agents</div>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li><a href="#" className="hover:text-gray-900">Services</a></li>
                <li><a href="#" className="hover:text-gray-900">Research</a></li>
                <li><a href="#" className="hover:text-gray-900">Company</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-300" />

        {/* Bottom note */}
        <p className="text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore . Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
    </footer>
  );
};

export default Footer;


