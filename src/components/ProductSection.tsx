import { useEffect, useRef } from 'react';
import berserkChain from '@/assets/berserk-chain.png';
import chromeWings from '@/assets/chrome-wings.png';
import gravepetalChain from '@/assets/gravepetal-chain.png';
import serpentCruiform from '@/assets/serpent-cruiform.png';

const products = [
  {
    name: "Berserk Chain",
    image: berserkChain,
    description: "Ancient symbols of power forged in sterling silver"
  },
  {
    name: "Chrome Wings", 
    image: chromeWings,
    description: "Spread your wings with crystalline elegance"
  },
  {
    name: "Gravepetal Chain",
    image: gravepetalChain, 
    description: "Sacred cross adorned with eternal blooms"
  },
  {
    name: "Serpent of the Cruiform",
    image: serpentCruiform,
    description: "Where divine meets serpentine in perfect harmony"
  }
];

const ProductSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.product-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-gothic">
      <div className="gothic-container">
        <div className="text-center mb-16">
          <h2 className="gothic-title text-5xl lg:text-6xl mb-6">
            THE COLLECTION
          </h2>
          <p className="gothic-body text-lg max-w-2xl mx-auto">
            Each piece tells a story of rebellion, power, and timeless gothic elegance. 
            Crafted for those who embrace the darkness within.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="product-card group opacity-0"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-elegant transition-all duration-500 hover:shadow-silver hover:scale-[1.02]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="gothic-subtitle text-2xl lg:text-3xl mb-3 group-hover:text-gothic-chrome transition-colors">
                    {product.name}
                  </h3>
                  <p className="gothic-body text-base">
                    {product.description}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-silver opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;