import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if autoplay fails
        console.log('Autoplay prevented');
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for text visibility */}
      <div className="gothic-overlay opacity-60" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl px-6">
          <h1 className="gothic-title animate-fade-in-up mb-6">
            GOTHIC GODZ
          </h1>
          <p className="gothic-subtitle animate-fade-in-up mb-8" style={{ animationDelay: '0.3s' }}>
            Embrace the Darkness
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="gothic-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Where rebellion meets elegance. Discover our exclusive collection of gothic jewelry 
              crafted for those who dare to stand apart from the crowd.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;