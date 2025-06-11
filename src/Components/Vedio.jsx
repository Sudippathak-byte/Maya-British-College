import React, { useEffect, useRef, useState } from 'react';

const VideoWithFallback = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    let fallbackTimer;

    // Set a timer to show fallback if video takes too long to load
    fallbackTimer = setTimeout(() => {
      if (!videoLoaded) {
        setShowFallback(true);
      }
    }, 3000); // 3 seconds timeout

    const handleLoaded = () => {
      clearTimeout(fallbackTimer);
      setVideoLoaded(true);
      video.currentTime = 3;
      video.play().catch(e => {
        console.error("Autoplay failed:", e);
        setVideoError(true);
      });
    };

    const handleError = () => {
      clearTimeout(fallbackTimer);
      setVideoError(true);
      setShowFallback(true);
    };

    if (video) {
      video.addEventListener('loadeddata', handleLoaded);
      video.addEventListener('error', handleError);
      video.preload = 'auto';
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener('loadeddata', handleLoaded);
        video.removeEventListener('error', handleError);
      }
    };
  }, [videoLoaded]);

  return (
    <div className="relative w-full h-[90vh] bg-black/30">
      {/* Video with fallback */}
      {!showFallback ? (
        <video 
          ref={videoRef}
          className="object-cover w-full h-full mix-blend-overlay" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          loading="eager"
        >
          <source
            src="/UCLAN From Above - DJI Mini 3 Pro 4K_Full-HD.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img 
          src="/Photo of UCLan.jpg" // Replace with your fallback image path
          alt="University Campus"
          className="object-cover w-full h-full mix-blend-overlay"
          loading="eager"
        />
      )}
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-start px-4 sm:pl-8 md:pl-16 lg:pl-24">
        <div className="max-w-2xl space-y-3 text-left sm:space-y-4">
          <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl md:text-5xl">
            <span className="text-white drop-shadow-lg">Study in Nepal,</span><br />
            <span className="text-[#FFD700] bg-gradient-to-r from-[#1a365d]/90 to-[#0f4c81]/90 px-3 py-1 sm:px-4 sm:py-1 rounded-lg text-xl sm:text-2xl md:text-3xl">
              Graduate in the UK
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#00609a] font-medium bg-white/90 px-3 py-1 sm:px-4 sm:py-2 rounded-lg border-l-4 border-[#FFD700]">
            <span className="text-[#FFD700] font-semibold">✓</span> Save 50% on UK degrees with global recognition
          </p>

          {/* Optional loading indicator */}
          {!videoLoaded && !showFallback && (
            <div className="text-white">
              Loading video...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoWithFallback;