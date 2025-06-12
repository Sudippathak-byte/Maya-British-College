import React, { useRef, useState } from 'react';

const Video = () => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const videoSrc = "/src/assets/UCLAN.mp4";
  const fallbackImage = "/src/assets/PhotoofUCLan.jpg"; // Make sure to provide a proper fallback image path

  // Set video to skip first 4 seconds and loop
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 4;
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
        setVideoError(true);
      });
    }
  };

  return (
    <div className="relative w-full h-[79.8vh] bg-gray-900 overflow-hidden">
      {/* Show fallback image if video fails to load */}
      {videoError ? (
        <img 
          src={fallbackImage} 
          alt="University Banner"
          className="object-cover w-full h-full"
        />
      ) : (
        <video 
          ref={videoRef}
          className="object-cover w-full h-full"
          autoPlay 
          loop 
          muted 
          playsInline
          onError={() => setVideoError(true)}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-start px-6 sm:pl-12 md:pl-20 lg:pl-32 bg-black/20">
        <div className="max-w-2xl space-y-6 text-left">
          <div className="mb-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Study in Nepal,
            </h1>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              <span className="bg-[#00609a] px-4 py-3 rounded-md inline-block shadow-lg">
                Graduate in the UK
              </span>
            </h2>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 p-1 mt-1 mr-3 bg-white rounded-full">
                <svg className="w-5 h-5 text-[#00609a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
                <span className="font-semibold">Save 50%</span> on UK degrees with global recognition
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 p-1 mt-1 mr-3 bg-white rounded-full">
                <svg className="w-5 h-5 text-[#00609a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
                <span className="font-semibold">Internationally accredited</span> programs
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 p-1 mt-1 mr-3 bg-white rounded-full">
                <svg className="w-5 h-5 text-[#00609a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
                <span className="font-semibold">Direct pathway</span> to UK education
              </p>
            </li>
          </ul>

          <button className="mt-8 px-8 py-3 bg-[#00609a] text-white font-bold rounded-md text-lg hover:bg-[#004a7a] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Learn More
            <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;