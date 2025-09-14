import Header from './Header';
import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

const MainSite = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default MainSite;