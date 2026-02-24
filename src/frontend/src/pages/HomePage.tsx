import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import ShopByCategory from '../components/ShopByCategory';
import BestSellers from '../components/BestSellers';
import IngredientHighlight from '../components/IngredientHighlight';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <TrustBadges />
      <ShopByCategory />
      <BestSellers />
      <IngredientHighlight />
      <BeforeAfter />
      <Testimonials />
      <BlogPreview />
    </div>
  );
}
