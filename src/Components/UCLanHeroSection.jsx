import React, { useState, useEffect, useRef } from 'react';

const UCLanHeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowContent(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[70vh] min-h-[500px] overflow-hidden group"
    >
      {/* Animated Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/uclan.jpg"  // Removed /public prefix
          alt="UCLan Campus"
          className={`
            w-full h-full object-cover transition-all duration-1000
            ${showContent ? 'scale-100 opacity-90' : 'scale-110 opacity-70'}
          `}
        />
        <div className={`
          absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10
          transition-all duration-1000
          ${showContent ? 'opacity-100' : 'opacity-70'}
        `}/>
      </div>

      {/* Content with Psychology-optimized Design */}
      <div className={`
        relative z-10 h-full flex items-end pb-12 px-6 sm:px-8 md:px-12 lg:px-16
        transition-all duration-700 ease-out
        ${showContent ? 'opacity-100' : 'opacity-0 translate-y-10'}
      `}>
        <div className="max-w-2xl space-y-4">
          {/* Headline with attention-grabbing contrast */}
          <h1 className={`
            text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight
            text-white drop-shadow-lg transition-all duration-500 delay-100
            ${showContent ? 'translate-y-0' : 'translate-y-8'}
          `}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">
              University of Central Lancashire
            </span>
            <br />
            <span className="text-white">(UCLan)</span>
          </h1>
          
          {/* Facts with staggered reveal */}
          <div className="space-y-3">
            <p className={`
              text-sm sm:text-base md:text-lg text-white/90 leading-relaxed
              transition-all duration-500 delay-200
              ${showContent ? 'translate-y-0' : 'translate-y-8'}
            `}>
              🎓 Founded in 1828 as the <span className="font-medium text-amber-300">Institution for the Diffusion of Knowledge</span> in Preston, UK
            </p>
            
            <p className={`
              text-sm sm:text-base md:text-lg text-white/90 leading-relaxed
              transition-all duration-500 delay-300
              ${showContent ? 'translate-y-0' : 'translate-y-8'}
            `}>
              📈 Among UK's <span className="font-medium text-amber-300">fastest-rising universities</span> with 38,000+ students and staff
            </p>
          </div>
          
          {/* Achievement badge with "wow" factor */}
          <div className={`
            inline-flex items-center px-4 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600
            shadow-lg transition-all duration-500 delay-500
            ${showContent ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-0'}
            hover:scale-105 transform-gpu cursor-pointer
          `}>
            <div className="mr-3 text-xl">🏆</div>
            <p className="text-sm font-bold text-gray-900 sm:text-base">
              Ranked in the <span className="text-white">TOP 3.7%</span> of universities worldwide (CWUR)
            </p>
          </div>
        </div>
      </div>

      {/* Subtle animated elements for depth */}
      <div className={`
        absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent
        transition-opacity duration-1000
        ${showContent ? 'opacity-100' : 'opacity-0'}
      `}/>
    </section>
  );
};

export default UCLanHeroSection;