import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const partners = [
  {
    id: 1,
    name: "NCC Education",
    logo: "/ncclogo.png",
    headline: "Awarding Great British Qualifications",
    description: "NCC Education is a leading UK awarding body offering internationally recognized qualifications and quality education worldwide.",
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    name: "University of Central Lancashire",
    logo: "/uclanlogo.jpg",
    headline: "Global Education Excellence", 
    description: "UCLan delivers world-class education and research across 180 countries with outstanding graduate employability.",
    color: "from-emerald-600 to-blue-600"
  },
  {
    id: 3,
    name: "Maya Animation",
    logo: "/mayaalogo.png",
    headline: "Creative Digital Innovation",
    description: "Pushing boundaries in animation and digital media with award-winning creative solutions.",
    color: "from-purple-600 to-pink-600"
  }
];

const TrustedPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    if (!isHovered) {
      autoSlideRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!isHovered) {
      autoSlideRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isHovered]);

  const currentPartner = partners[currentIndex];

  return (
    <div className="relative min-h-screen py-12 overflow-hidden sm:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div 
          className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400 to-blue-600 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Header with enhanced mobile styling */}
      <div className="relative z-10 px-4 mx-auto text-center sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-white uppercase rounded-full shadow-lg sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600">
            <span className="w-2 h-2 mr-2 bg-white rounded-full animate-pulse"></span>
            Strategic Alliances
          </div>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Trusted Partners
            </span>
          </h2>
          <motion.div 
            className="w-20 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Mobile-optimized carousel */}
      <div 
        className="relative px-4 mx-auto mt-12 sm:px-6 sm:mt-16 max-w-7xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Desktop Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute z-20 hidden p-3 text-white transition-all -translate-y-1/2 rounded-full sm:block bg-black/20 backdrop-blur-sm left-4 top-1/2 hover:bg-black/40 hover:scale-110"
          aria-label="Previous partner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Main content container */}
        <div className="relative overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative"
            >
              {/* Card with gradient background */}
              <div className={`relative bg-gradient-to-br ${currentPartner.color} p-1 rounded-3xl shadow-2xl`}>
                <div className="p-6 bg-white/95 backdrop-blur-sm rounded-3xl sm:p-8 lg:p-12">
                  
                  {/* Mobile-first layout */}
                  <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-2 lg:gap-12 lg:text-left">
                    
                    {/* Logo section with enhanced mobile styling */}
                    <motion.div 
                      className="order-1 mb-8 lg:order-1 lg:mb-0"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="relative">
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${currentPartner.color} rounded-2xl blur-xl opacity-20`}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="relative p-6 bg-white border border-gray-100 shadow-lg rounded-2xl sm:p-8">
                          <img 
                            src={currentPartner.logo} 
                            alt={`${currentPartner.name} logo`}
                            className="object-contain w-full h-24 mx-auto sm:h-32 lg:h-40"
                          />
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Content section optimized for mobile */}
                    <motion.div 
                      className="order-2 space-y-4 lg:order-2 sm:space-y-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${currentPartner.color} rounded-full shadow-lg`}>
                        {currentPartner.headline}
                      </div>
                      
                      <h3 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                        {currentPartner.name}
                      </h3>
                      
                      <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                        {currentPartner.description}
                      </p>
                      
                      {/* CTA Button for mobile */}
                      <motion.button
                        className={`mt-6 px-6 py-3 bg-gradient-to-r ${currentPartner.color} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Desktop Navigation - Right arrow */}
        <button 
          onClick={nextSlide}
          className="absolute z-20 hidden p-3 text-white transition-all -translate-y-1/2 rounded-full sm:block bg-black/20 backdrop-blur-sm right-4 top-1/2 hover:bg-black/40 hover:scale-110"
          aria-label="Next partner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Enhanced pagination with progress indicator */}
      <div className="relative z-10 flex flex-col items-center mt-8 space-y-4 sm:mt-12">
        {/* Pagination dots */}
        <div className="flex justify-center space-x-3">
          {partners.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-purple-600' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to partner ${index + 1}`}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/30"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Mobile swipe indicator */}
        <motion.div 
          className="flex items-center space-x-2 text-sm text-gray-500 sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Swipe to explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedPartners;