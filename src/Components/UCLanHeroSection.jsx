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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[90vh] min-h-[800px] max-h-[1200px] overflow-hidden group"
    >
      {/* Dynamic Background with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`
          absolute inset-0 bg-[#00609a] opacity-30 z-10
          transition-all duration-1000
          ${showContent ? 'opacity-10' : 'opacity-30'}
        `}></div>
        <img
          src="/uclan.jpg"
          alt="UCLan Campus"
          className={`
            w-full h-full object-cover transition-all duration-1000
            ${showContent ? 'scale-100 opacity-100' : 'scale-125 opacity-90'}
            group-hover:scale-105
          `}
        />
        <div className={`
          absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
          transition-all duration-1000
          ${showContent ? 'opacity-100' : 'opacity-90'}
        `}/>
      </div>

      {/* Hero Content - Bold and Centered */}
      <div className={`
        relative z-20 h-full flex flex-col justify-center items-center text-center
        px-6 transition-all duration-700 ease-out
        ${showContent ? 'opacity-100' : 'opacity-0 translate-y-10'}
      `}>
        <div className="w-full max-w-[85%] mx-auto">
          {/* Massive Headline with Impact */}
          <h1 className={`
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight
            text-white mb-6 transition-all duration-500 delay-100
            ${showContent ? 'translate-y-0' : 'translate-y-12'}
            drop-shadow-2xl
          `}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9ec9e2]">
              UCLan
            </span>
          </h1>
          
          {/* Subheading with Strong Presence */}
          <h2 className={`
            text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-8
            transition-all duration-500 delay-200
            ${showContent ? 'translate-y-0' : 'translate-y-12'}
          `}>
            University of Central Lancashire
          </h2>

          {/* Animated Stats Grid */}
          <div className={`
            grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto
            transition-all duration-500 delay-300
            ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          `}>
            {[
              { value: "190+", label: "Years of History" },
              { value: "38,000+", label: "Students" },
              { value: "100+", label: "Countries" },
              { value: "Top 3.7%", label: "World Ranking" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-[#00609a]/50 transition-all"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Dramatic CTA Button */}
          <div className={`
            mt-12 transition-all duration-500 delay-500
            ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          `}>
            <button className={`
              px-10 py-4 text-lg font-bold rounded-full
              bg-gradient-to-r from-[#00609a] to-[#004a7a]
              text-white hover:from-white hover:to-white hover:text-[#00609a]
              transition-all duration-300 transform hover:scale-105
              shadow-xl hover:shadow-2xl
              border-2 border-white/30 hover:border-[#00609a]
            `}>
              EXPLORE OUR CAMPUS
              <span className="inline-block ml-3 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className={`
        absolute bottom-10 left-1/2 transform -translate-x-1/2
        transition-opacity duration-1000 delay-700
        ${showContent ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="flex flex-col items-center animate-bounce">
          <span className="mb-2 text-sm text-white">SCROLL</span>
          <div className="flex justify-center w-6 h-10 border-2 border-white rounded-full">
            <div className="w-1 h-2 mt-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Dynamic Light Effects */}
      <div className={`
        absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-[#00609a]/20 blur-3xl
        transition-all duration-1000 delay-300
        ${showContent ? 'opacity-70' : 'opacity-30'}
      `}></div>
      <div className={`
        absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl
        transition-all duration-1000 delay-500
        ${showContent ? 'opacity-50' : 'opacity-20'}
      `}></div>
    </section>
  );
};

export default UCLanHeroSection;