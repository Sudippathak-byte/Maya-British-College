import React, { useEffect, useRef } from 'react';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 3; // Start at 3 seconds
      videoRef.current.play(); // Auto-play
    }
  }, []);

  return (
    <div className="relative w-full h-[90vh] bg-black/30">
      <video 
        ref={videoRef}
        className="object-cover w-full h-full mix-blend-overlay" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        poster="/path-to-poster.jpg"  // Replace with your poster image path or remove if not used
      >
        <source
          src="/UCLAN From Above - DJI Mini 3 Pro 4K_Full-HD.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 flex items-center justify-start px-4 sm:pl-8 md:pl-16 lg:pl-24">
        <div className="max-w-2xl space-y-3 text-left sm:space-y-4">
          <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl md:text-5xl">
            <span className="text-white drop-shadow-lg">Study in Nepal,</span><br />
            <span className="text-[#FFD700] bg-gradient-to-r from-[#1a365d]/90 to-[#0f4c81]/90 px-3 py-1 sm:px-4 sm:py-1 rounded-lg text-xl sm:text-2xl md:text-3xl">
              Graduate in the UK
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white font-medium bg-black/60 px-3 py-1 sm:px-4 sm:py-2 rounded-lg border-l-4 border-[#FFD700]">
            <span className="text-[#FFD700] font-semibold">✓</span> Save 50% on UK degrees with global recognition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
