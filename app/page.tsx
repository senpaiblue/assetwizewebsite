import HeroSection from '../components/HeroSection';
import DataSecuritySection from '../components/DataSecuritySection';
import AssetCategoriesSection from '../components/AssetCategoriesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DataSecuritySection />
      <AssetCategoriesSection />
    </main>
  );
}
