import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  // Navbar state
  const [showPrograms, setShowPrograms] = useState(false);
  const [showUndergraduate, setShowUndergraduate] = useState(false);
  const [showGraduate, setShowGraduate] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showAcademies, setShowAcademies] = useState(false);
  const [showAdministration, setShowAdministration] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // Video ref
  const videoRef = useRef(null);
  const navbarRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 3;
      videoRef.current.play();
    }
  }, []);

  // Handlers for desktop hover effects
  const handleProgramsEnter = () => setShowPrograms(true);
  const handleProgramsLeave = () => {
    setShowPrograms(false);
    setShowUndergraduate(false);
    setShowGraduate(false);
  };
  const handleUndergraduateEnter = () => {
    setShowUndergraduate(true);
    setShowGraduate(false);
  };
  const handleUndergraduateLeave = () => setShowUndergraduate(false);
  const handleGraduateEnter = () => {
    setShowGraduate(true);
    setShowUndergraduate(false);
  };
  const handleGraduateLeave = () => setShowGraduate(false);
  const handleDepartmentsEnter = () => setShowDepartments(true);
  const handleDepartmentsLeave = () => {
    setShowDepartments(false);
    setShowAcademies(false);
    setShowAdministration(false);
  };
  const handleAcademiesEnter = () => {
    setShowAcademies(true);
    setShowAdministration(false);
  };
  const handleAcademiesLeave = () => setShowAcademies(false);
  const handleAdministrationEnter = () => {
    setShowAdministration(true);
    setShowAcademies(false);
  };
  const handleAdministrationLeave = () => setShowAdministration(false);

  // Mobile menu toggle
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="relative">
      {/* Material Icons CDN */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      
      {/* Transparent Navbar that becomes solid on scroll */}
      <nav 
        ref={navbarRef}
        className={`fixed top-0 z-50 w-full flex items-center justify-between px-4 py-3 transition-all duration-300 ${navbarScrolled ? 'bg-white shadow-md border-b' : 'bg-transparent'} md:px-16`}
      >
        {/* Logo & Title - White when navbar is transparent */}
        <div className="flex items-center space-x-3">
          <img 
            src="/maya logo.jpg" 
            alt="MAYA British College" 
            className="w-auto h-10 md:h-12" 
          />
          <div className="hidden sm:block">
            <h1 className={`text-lg font-bold ${navbarScrolled ? 'text-blue-800' : 'text-white'} md:text-xl`}>Maya British College</h1>
            <p className={`text-xs font-semibold ${navbarScrolled ? 'text-black' : 'text-white/90'} md:text-sm`}>Affiliated to University of Central Lancashire, UK</p>
            <p className={`text-xs font-semibold ${navbarScrolled ? 'text-black' : 'text-white/90'} md:text-sm`}>Affiliated to Tribhuvan University</p>
          </div>
        </div>

        {/* Desktop Nav Links - White when navbar is transparent */}
        <div className="items-center hidden space-x-8 text-sm font-semibold md:flex">
          {/* PROGRAMS Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleProgramsEnter}
            onMouseLeave={handleProgramsLeave}
          >
            <button className={`flex items-center hover:opacity-80 ${navbarScrolled ? 'text-red-700' : 'text-white'}`}>
              PROGRAMS <span className="ml-1">{showPrograms ? '−' : '+'}</span>
            </button>

            {/* Level 1 Dropdown */}
            {showPrograms && (
              <div className="absolute left-0 z-10 w-56 bg-white border shadow-lg top-full animate-fadeIn">
                {/* Undergraduate */}
                <div 
                  className="relative"
                  onMouseEnter={handleUndergraduateEnter}
                  onMouseLeave={handleUndergraduateLeave}
                >
                  <div className="flex items-center justify-between px-4 py-3 text-blue-800 cursor-pointer hover:bg-gray-100">
                    <span>Undergraduate</span>
                    <span>{showUndergraduate ? '−' : '+'}</span>
                  </div>
                  {/* Level 2 Dropdown - Undergraduate */}
                  {showUndergraduate && (
                    <div className="absolute z-20 bg-white border shadow-lg top-3/4 right-full w-80 animate-slideIn">
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        BSc (Hons) Business Computing & Information Systems
                      </div>
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        BSc (Hons) Cyber Security & Networking
                      </div>
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Bachelor of Business Studies (BBS)
                      </div>
                    </div>
                  )}
                </div>

                {/* Graduate */}
                <div 
                  className="relative"
                  onMouseEnter={handleGraduateEnter}
                  onMouseLeave={handleGraduateLeave}
                >
                  <div className="flex items-center justify-between px-4 py-2 text-blue-800 cursor-pointer hover:bg-gray-100">
                    <span>Graduate</span>
                    <span>{showGraduate ? '−' : '+'}</span>
                  </div>
                  {/* Level 2 Dropdown - Graduate */}
                  {showGraduate && (
                    <div className="absolute z-20 bg-white border shadow-lg top-3/4 right-full w-80 animate-slideIn">
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Master of Business Studies (MBS)
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* DEPARTMENTS Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleDepartmentsEnter}
            onMouseLeave={handleDepartmentsLeave}
          >
            <button className={`flex items-center hover:opacity-80 ${navbarScrolled ? 'text-red-700' : 'text-white'}`}>
              DEPARTMENTS <span className="ml-1">{showDepartments ? '−' : '+'}</span>
            </button>

            {/* Level 1 Dropdown - Departments */}
            {showDepartments && (
              <div className="absolute left-0 z-10 w-56 bg-white border shadow-lg top-full animate-fadeIn">
                {/* Academies */}
                <div 
                  className="relative"
                  onMouseEnter={handleAcademiesEnter}
                  onMouseLeave={handleAcademiesLeave}
                >
                  <div className="flex items-center justify-between px-4 py-3 text-blue-800 cursor-pointer hover:bg-gray-100">
                    <span>Academies</span>
                    <span>{showAcademies ? '−' : '+'}</span>
                  </div>
                  {/* Level 2 Dropdown - Academies */}
                  {showAcademies && (
                    <div className="absolute z-20 w-64 bg-white border shadow-lg top-3/4 right-full animate-slideIn">
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Computing
                      </div>
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Data Science
                      </div>
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Cyber Security
                      </div>
                    </div>
                  )}
                </div>

                {/* Administration */}
                <div 
                  className="relative"
                  onMouseEnter={handleAdministrationEnter}
                  onMouseLeave={handleAdministrationLeave}
                >
                  <div className="flex items-center justify-between px-4 py-2 text-blue-800 cursor-pointer hover:bg-gray-100">
                    <span>Administration</span>
                    <span>{showAdministration ? '−' : '+'}</span>
                  </div>
                  {/* Level 2 Dropdown - Administration */}
                  {showAdministration && (
                    <div className="absolute z-20 w-64 bg-white border shadow-lg top-3/4 right-full animate-slideIn">
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Faculty & Staff
                      </div>
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Admissions Office
                      </div>
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Student Services
                      </div>
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Contact & Office Hours
                      </div>
                      <div className="px-4 py-2 text-gray-700 transition-colors cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        Policies & Regulations
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <a href="#" className={`flex items-center space-x-1 hover:opacity-80 group ${navbarScrolled ? 'text-red-700' : 'text-white'}`}>
            <span className="text-base material-icons group-hover:animate-bounce">download</span>
            <span>APPLY NOW</span>
          </a>
          <a href="#" className={`flex items-center space-x-1 hover:opacity-80 group ${navbarScrolled ? 'text-red-700' : 'text-white'}`}>
            <span className="text-base material-icons group-hover:animate-pulse">calendar_today</span>
            <span>VISIT US</span>
          </a>
        </div>

        {/* Mobile Menu Button - White when navbar is transparent */}
        <button 
          className="flex flex-col space-y-1 md:hidden"
          onClick={toggleMobileMenu}
        >
          <span className={`w-6 h-0.5 transition-all ${navbarScrolled ? 'bg-black' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 transition-all ${navbarScrolled ? 'bg-black' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 transition-all ${navbarScrolled ? 'bg-black' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed z-40 w-full px-4 py-2 mt-16 space-y-2 text-sm font-semibold bg-white shadow-lg md:hidden animate-slideDown">
          {/* Mobile Programs Dropdown */}
          <div className="py-2 border-b">
            <button 
              className="flex items-center justify-between w-full text-red-700"
              onClick={() => setShowPrograms(!showPrograms)}
            >
              <span>PROGRAMS</span>
              <span>{showPrograms ? '−' : '+'}</span>
            </button>
            {showPrograms && (
              <div className="pl-4 mt-2 space-y-2 animate-fadeIn">
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-blue-800"
                    onClick={() => setShowUndergraduate(!showUndergraduate)}
                  >
                    <span>Undergraduate</span>
                    <span>{showUndergraduate ? '−' : '+'}</span>
                  </button>
                  {showUndergraduate && (
                    <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">BSc (Hons) Business Computing</a>
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">BSc (Hons) Cyber Security</a>
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Bachelor of Business Studies</a>
                    </div>
                  )}
                </div>
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-blue-800"
                    onClick={() => setShowGraduate(!showGraduate)}
                  >
                    <span>Graduate</span>
                    <span>{showGraduate ? '−' : '+'}</span>
                  </button>
                  {showGraduate && (
                    <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Master of Business Studies</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Departments Dropdown */}
          <div className="py-2 border-b">
            <button 
              className="flex items-center justify-between w-full text-red-700"
              onClick={() => setShowDepartments(!showDepartments)}
            >
              <span>DEPARTMENTS</span>
              <span>{showDepartments ? '−' : '+'}</span>
            </button>
            {showDepartments && (
              <div className="pl-4 mt-2 space-y-2 animate-fadeIn">
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-blue-800"
                    onClick={() => setShowAcademies(!showAcademies)}
                  >
                    <span>Academies</span>
                    <span>{showAcademies ? '−' : '+'}</span>
                  </button>
                  {showAcademies && (
                    <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Computing</a>
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Data Science</a>
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Cyber Security</a>
                    </div>
                  )}
                </div>
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-blue-800"
                    onClick={() => setShowAdministration(!showAdministration)}
                  >
                    <span>Administration</span>
                    <span>{showAdministration ? '−' : '+'}</span>
                  </button>
                  {showAdministration && (
                    <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Faculty & Staff</a>
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Admissions Office</a>
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Student Services</a>
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Contact & Office Hours</a>
                      <a href="#" className="block py-1 text-gray-700 hover:text-blue-600">Policies & Regulations</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col pt-2 space-y-2">
            <a href="#" className="flex items-center py-2 space-x-2 text-red-700">
              <span className="material-icons">download</span>
              <span>APPLY NOW</span>
            </a>
            <a href="#" className="flex items-center py-2 space-x-2 text-red-700">
              <span className="material-icons">calendar_today</span>
              <span>VISIT US</span>
            </a>
          </div>
        </div>
      )}

      {/* Hero Video Section with Enhanced UI */}
      <div className="relative w-full h-[70vh] bg-black/30">
        <video 
          ref={videoRef}
          className="object-cover w-full h-full" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source
            src="/UCLAN From Above - DJI Mini 3 Pro 4K_Full-HD.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Hero Content - Completely Redesigned */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <div className="max-w-4xl space-y-6">

            
            {/* Main Headline with Typography Animation */}
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-white drop-shadow-lg animate-textFadeIn">
                Study in Nepal,
              </span>
              <span className="block mt-4 animate-gradientFlow">
                <span className="px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#C0C0C0] to-[#FFD700]">
                  Graduate in the UK
                </span>
              </span>
            </h1>

            {/* Value Proposition with Animated Icons */}
            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
              <div className="p-4 delay-100 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20 animate-fadeInUp">
                <div className="flex items-center justify-center mb-2">
                  <span className="material-icons text-3xl text-[#FFD700] animate-pulse">savings</span>
                </div>
                <p className="text-lg font-semibold text-white">
                  Save 50% compared to studying in UK
                </p>
              </div>
              <div className="p-4 delay-200 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20 animate-fadeInUp">
                <div className="flex items-center justify-center mb-2">
                  <span className="material-icons text-3xl text-[#FFD700] animate-bounce">school</span>
                </div>
                <p className="text-lg font-semibold text-white">
                  UK Degree with Global Recognition
                </p>
              </div>
              <div className="p-4 delay-300 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20 animate-fadeInUp">
                <div className="flex items-center justify-center mb-2">
                  <span className="material-icons text-3xl text-[#FFD700] animate-spin-slow">public</span>
                </div>
                <p className="text-lg font-semibold text-white">
                  International Career Opportunities
                </p>
              </div>
            </div>


          </div>
        </div>


      </div>
    </div>
  );
};

export default HeroSection;

