import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const partners = [
  {
    id: 1,
    name: "NCC Education",
    logo: "/public/ncclogo.png", // Replace with your actual image paths
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    name: "Uclan University",
    logo: "/public/uclan logo.jpg",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    name: "Maya Animation",
    logo: "/public/mayaAlogo.png",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    id: 4,
    name: "California State University",
    logo: "/public/california state university logo.png",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    id: 5,
    name: "UWE Bristol",
    logo: "/public/uwe bristol logo.png",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa."
  },
  {
    id: 6,
    name: "University of West Alabama",
    logo: "/public/uwa-logo.png",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus."
  },
  {
    id: 7,
    name: "Christian Brothers University",
    logo: "/public/cbu-logo.jpg",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
  }
];

const TrustedPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoSlideRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % partners.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(nextSlide, 3000);
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  const visiblePartners = [];
  for (let i = -1; i <= 1; i++) {
    const index = (currentIndex + i + partners.length) % partners.length;
    visiblePartners.push({
      ...partners[index],
      position: i
    });
  }

  return (
    <div className="relative px-4 py-16 mx-auto my-12 overflow-hidden shadow-xl sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl max-w-7xl">
      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-600 bg-[length:200%_200%] animate-gradient-x" />
      
      {/* Title */}
      <h2 className="relative mb-12 text-4xl font-bold text-center text-gray-900">
        Trusted Partners
        <span className="absolute bottom-0 w-20 h-1 transform -translate-x-1/2 bg-indigo-600 rounded-full left-1/2" />
      </h2>
      
      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full mb-12">
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 bg-white rounded-full shadow-lg left-4 sm:left-8 hover:bg-indigo-600 hover:text-white hover:shadow-xl active:scale-95"
        >
          <svg className="w-6 h-6 text-indigo-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
        </button>
        
        <div className="relative flex items-center justify-center w-full h-48 max-w-4xl perspective-1000">
          <AnimatePresence custom={direction}>
            {visiblePartners.map((partner) => (
              <motion.div
                key={`${partner.id}-${partner.position}`}
                className={`absolute flex items-center justify-center ${
                  partner.position === 0 ? 'w-64 h-32 z-30' : 
                  partner.position === -1 ? 'w-48 h-24 left-16 sm:left-24 z-20' : 
                  'w-48 h-24 right-16 sm:right-24 z-20'
                }`}
                initial={{ 
                  x: direction * 300, 
                  opacity: 0,
                  scale: 0.8
                }}
                animate={{ 
                  x: 0, 
                  opacity: partner.position === 0 ? 1 : 0.6,
                  scale: partner.position === 0 ? 1.1 : 0.9,
                  filter: partner.position === 0 ? 'none' : 'grayscale(30%)'
                }}
                exit={{ 
                  x: -direction * 300, 
                  opacity: 0,
                  scale: 0.8
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
                custom={direction}
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                    partner.position === 0 ? 'hover:scale-110' : 'hover:scale-105'
                  }`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <button 
          onClick={nextSlide}
          className="absolute z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 bg-white rounded-full shadow-lg right-4 sm:right-8 hover:bg-indigo-600 hover:text-white hover:shadow-xl active:scale-95"
        >
          <svg className="w-6 h-6 text-indigo-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </button>
      </div>
      
      {/* Partner info */}
      <div className="max-w-3xl px-4 mx-auto text-center">
        <h3 className="relative inline-block mb-4 text-2xl font-bold text-gray-900">
          {partners[currentIndex].name}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-cyan-500 rounded-full" />
        </h3>
        <p className="text-lg leading-relaxed text-gray-600">
          {partners[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default TrustedPartners;