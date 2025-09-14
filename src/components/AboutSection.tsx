import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-fade-in-up');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="gothic-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll opacity-0 gothic-title text-5xl lg:text-6xl mb-8">
            ABOUT US
          </h2>
          
          <div className="animate-on-scroll opacity-0 space-y-6 text-lg lg:text-xl gothic-body leading-relaxed">
            <p>
              <strong className="text-primary font-medium">Gothic Godz</strong> is more than jewelry—it's a <em>lifestyle</em> of power, 
              rebellion, and timeless gothic elegance.
            </p>
            
            <p>
              We craft each piece for men who refuse to blend into the background, 
              who understand that true style comes from embracing one's darker nature. 
              Our jewelry doesn't just accessorize; it <strong className="text-primary">empowers</strong>.
            </p>
            
            <p>
              From ancient symbols of power to modern interpretations of gothic artistry, 
              every Gothic Godz piece is forged with meticulous attention to detail and 
              an unwavering commitment to premium craftsmanship.
            </p>
            
            <p className="text-primary font-medium text-2xl mt-12 font-gothic">
              Stand out. Stand strong. Stand with the Godz.
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0 mt-12">
            <div className="inline-block p-8 gothic-glass rounded-2xl">
              <p className="gothic-subtitle text-xl">
                "Boldness is not the absence of fear, but the mastery of it."
              </p>
              <p className="text-muted-foreground mt-2 text-sm tracking-widest">
                — GOTHIC GODZ PHILOSOPHY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;