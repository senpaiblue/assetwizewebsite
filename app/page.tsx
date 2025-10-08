import HeroSection from '../components/HeroSection';
import DataSecuritySection from '../components/DataSecuritySection';
import WhyAssetwizeSection from '../components/WhyAssetwizeSection';
import AssetCategoriesSection from '../components/AssetCategoriesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DataSecuritySection />
      <AssetCategoriesSection />
      <WhyAssetwizeSection />
    </main>
  );
}
