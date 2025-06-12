import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const partners = [
  {
    id: 1,
    name: "NCC Education",
    logo: "/src/assets/ncclogo.png",
    headline: "Awarding Great British Qualifications",
    description: "NCC Education is a leading UK awarding body offering internationally recognized qualifications and quality education worldwide.",
    color: "from-[#00609a] to-[#004a7c]"
  },
  {
    id: 2,
    name: "University of Central Lancashire",
    logo: "/src/assets/uclanlogo.jpg",
    headline: "Global Education Excellence", 
    description: "UCLan delivers world-class education and research across 180 countries with outstanding graduate employability.",
    color: "from-[#00609a] to-[#0088cc]"
  },
  {
    id: 3,
    name: "Maya Animation",
    logo: "/src/assets/animation.png",
    headline: "Creative Digital Innovation",
    description: "Pushing boundaries in animation and digital media with award-winning creative solutions.",
    color: "from-[#00609a] to-[#00a0e0]"
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
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Full-width hero section with gradient overlay */}
      <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#00609a] to-[#004a7c]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
        </motion.div>
        
        {/* Content container with 80% width */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full mx-auto max-w-[80%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-white uppercase rounded-full shadow-lg sm:text-sm bg-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 mr-2 bg-white rounded-full animate-pulse"></span>
              Strategic Alliances
            </div>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Our{' '}
              <span className="text-transparent bg-gradient-to-r from-white to-[#b3d9ff] bg-clip-text">
                Trusted Partners
              </span>
            </h2>
            <motion.div 
              className="w-20 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-white to-[#b3d9ff]"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Carousel container with 80% width */}
      <div className="relative px-4 mx-auto -mt-20 max-w-[80%]">
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute z-20 hidden p-3 text-white transition-all -translate-y-1/2 rounded-full sm:block bg-black/20 backdrop-blur-sm left-4 top-1/2 hover:bg-[#00609a] hover:scale-110"
            aria-label="Previous partner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Main content container */}
          <div className="relative overflow-hidden shadow-2xl rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                {/* Card with classic design */}
                <div className="relative bg-white">
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-12">
                      {/* Logo section */}
                      <motion.div 
                        className="order-1 mb-8 lg:order-1 lg:mb-0"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="relative p-1 rounded-xl bg-gradient-to-br from-[#00609a] to-[#004a7c]">
                          <div className="relative p-6 bg-white rounded-lg shadow-sm">
                            <img 
                              src={currentPartner.logo} 
                              alt={`${currentPartner.name} logo`}
                              className="object-contain w-full h-32 mx-auto lg:h-40"
                            />
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Content section */}
                      <motion.div 
                        className="order-2 space-y-6 lg:order-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${currentPartner.color} rounded-full shadow-lg`}>
                          {currentPartner.headline}
                        </div>
                        
                        <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                          {currentPartner.name}
                        </h3>
                        
                        <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                          {currentPartner.description}
                        </p>
                        
                        {/* CTA Button */}
                        <motion.button
                          className={`mt-6 px-8 py-3 bg-gradient-to-r ${currentPartner.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Learn More
                          <svg className="inline w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Right arrow */}
          <button 
            onClick={nextSlide}
            className="absolute z-20 hidden p-3 text-white transition-all -translate-y-1/2 rounded-full sm:block bg-black/20 backdrop-blur-sm right-4 top-1/2 hover:bg-[#00609a] hover:scale-110"
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
                    ? 'w-8 h-2 bg-gradient-to-r from-[#00609a] to-[#004a7c]' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
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

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default TrustedPartners;