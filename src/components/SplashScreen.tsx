import { useState, useEffect } from 'react';
import logoImage from '@/assets/gothic-godz-logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Ensure logo is loaded before showing
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = logoImage;
  }, []);

  const handleLogoClick = () => {
    setIsVisible(false);
    setTimeout(onComplete, 600);
  };

  if (!logoLoaded) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-600 ease-luxury ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative">
        <img 
          src={logoImage}
          alt="Gothic Godz"
          className="w-64 md:w-80 lg:w-96 cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in"
          onClick={handleLogoClick}
          style={{
            filter: 'drop-shadow(0 10px 30px rgba(255, 255, 255, 0.1))'
          }}
        />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
          <p className="text-muted-foreground text-sm font-light tracking-widest">
            CLICK TO ENTER
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;