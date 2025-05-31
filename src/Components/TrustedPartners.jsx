import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const partners = [
  {
    id: 1,
    name: "NCC Education",
    logo: "/ncclogo.png",
    headline: "Awarding Great British Qualifications",
    description: "NCC Education is a leading UK awarding body offering internationally recognized qualifications and quality education worldwide."
  },
  {
    id: 2,
    name: "University of Central Lancashire",
    logo: "/uclanlogo.jpg",
    headline: "Global Education Excellence",
    description: "UCLan delivers world-class education and research across 180 countries with outstanding graduate employability."
  },
  {
    id: 3,
    name: "Maya Animation",
    logo: "/mayaalogo.png",
    headline: "Creative Digital Innovation",
    description: "Pushing boundaries in animation and digital media with award-winning creative solutions."
  }
];

const TrustedPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(nextSlide, 8000);
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(nextSlide, 8000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  return (
    <div className="relative py-20 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('/path-to-subtle-pattern.png')] bg-repeat"></div>
      </div>
      
      {/* Header */}
      <div className="px-6 mx-auto text-center max-w-7xl">
        <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">STRATEGIC ALLIANCES</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
          Our <span className="text-blue-600">Trusted Partners</span>
        </h2>
        <div className="w-16 h-1 mx-auto mt-6 bg-blue-600 rounded-full"></div>
      </div>

      {/* Carousel */}
      <div className="relative px-6 mx-auto mt-16 max-w-7xl">
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute z-10 p-2 text-gray-400 transition-all -translate-y-1/2 left-6 top-1/2 hover:text-blue-600"
          aria-label="Previous partner"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Content */}
        <div className="relative h-[400px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center"
            >
              <div className="grid items-center grid-cols-1 gap-12 mx-auto lg:grid-cols-2 max-w-7xl">
                {/* Logo */}
                <div className="flex items-center justify-center p-8">
                  <img 
                    src={partners[currentIndex].logo} 
                    alt={`${partners[currentIndex].name} logo`}
                    className="object-contain max-h-40"
                  />
                </div>
                
                {/* Details */}
                <div className="space-y-6">
                  <p className="text-xl font-medium text-blue-600">{partners[currentIndex].headline}</p>
                  <h3 className="text-3xl font-bold text-gray-900">{partners[currentIndex].name}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">{partners[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button 
          onClick={nextSlide}
          className="absolute z-10 p-2 text-gray-400 transition-all -translate-y-1/2 right-6 top-1/2 hover:text-blue-600"
          aria-label="Next partner"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Minimal pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-label={`Go to partner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;