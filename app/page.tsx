import HeroSection from '../components/HeroSection';
import DataSecuritySection from '../components/DataSecuritySection';
import WhyAssetwizeSection from '../components/WhyAssetwizeSection';
import WhatPeopleTodaySection from '../components/WhatPeopleTodaySection';
import AssetCategoriesSection from '../components/AssetCategoriesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DataSecuritySection />
      <AssetCategoriesSection />
      <WhyAssetwizeSection /> 
      <WhatPeopleTodaySection />
    </main>
  );
}
