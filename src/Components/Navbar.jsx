import React, { useState } from 'react';

const Navbar = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const [showUndergraduate, setShowUndergraduate] = useState(false);
  const [showGraduate, setShowGraduate] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showAcademies, setShowAcademies] = useState(false);
  const [showAdministration, setShowAdministration] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close all dropdowns when clicking on mobile
  const closeAllDropdowns = () => {
    setShowPrograms(false);
    setShowUndergraduate(false);
    setShowGraduate(false);
    setShowDepartments(false);
    setShowAcademies(false);
    setShowAdministration(false);
  };

  return (
    <div>
      {/* Material Icons CDN */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      
      <nav className="bg-white border-b shadow-md">
        {/* Top Bar - Logo and Hamburger */}
        <div className="flex items-center justify-between px-4 py-3 md:px-16 md:py-3">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <img src="/mayalogo.jpg" alt="MAYA British College" className="w-auto h-12" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-blue-800">Maya British College</h1>
              <p className="text-xs font-semibold text-black">Affiliated to University of Central Lancashire, UK</p>
              <p className="text-xs font-semibold text-black">Affiliated to Tribhuvan University</p>
            </div>
          </div>

          {/* Hamburger */}
          <button 
            className="flex flex-col space-y-1 md:hidden"
            onClick={toggleMobileMenu}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>

          {/* Desktop Nav Links */}
          <div className="items-center hidden space-x-8 text-sm font-semibold text-red-700 md:flex">
            {/* PROGRAMS Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowPrograms(true)}
              onMouseLeave={() => {
                setShowPrograms(false);
                setShowUndergraduate(false);
                setShowGraduate(false);
              }}
            >
              <button className="flex items-center hover:text-red-900">
                PROGRAMS <span className="ml-1">{showPrograms ? '−' : '+'}</span>
              </button>

              {/* Level 1 Dropdown */}
              {showPrograms && (
                <div className="absolute left-0 z-10 w-56 bg-white border shadow-lg top-full">
                  {/* Undergraduate */}
                  <div 
                    className="relative"
                    onMouseEnter={() => {
                      setShowUndergraduate(true);
                      setShowGraduate(false);
                    }}
                    onMouseLeave={() => setShowUndergraduate(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-3 text-blue-800 cursor-pointer hover:bg-gray-100">
                      <span>Undergraduate</span>
                      <span>{showUndergraduate ? '−' : '+'}</span>
                    </div>
                    {/* Level 2 Dropdown - Undergraduate */}
                    {showUndergraduate && (
                      <div className="absolute z-20 bg-white border shadow-lg top-3/4 right-full w-80">
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          BSc (Hons) Business Computing & Information Systems
                        </div>
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          BSc (Hons) Cyber Security & Networking
                        </div>
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          Bachelor of Business Studies (BBS)
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Graduate */}
                  <div 
                    className="relative"
                    onMouseEnter={() => {
                      setShowGraduate(true);
                      setShowUndergraduate(false);
                    }}
                    onMouseLeave={() => setShowGraduate(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 text-blue-800 cursor-pointer hover:bg-gray-100">
                      <span>Graduate</span>
                      <span>{showGraduate ? '−' : '+'}</span>
                    </div>
                    {/* Level 2 Dropdown - Graduate */}
                    {showGraduate && (
                      <div className="absolute z-20 bg-white border shadow-lg top-3/4 right-full w-80">
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
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
              onMouseEnter={() => setShowDepartments(true)}
              onMouseLeave={() => {
                setShowDepartments(false);
                setShowAcademies(false);
                setShowAdministration(false);
              }}
            >
              <button className="flex items-center hover:text-red-900">
                DEPARTMENTS <span className="ml-1">{showDepartments ? '−' : '+'}</span>
              </button>

              {/* Level 1 Dropdown - Departments */}
              {showDepartments && (
                <div className="absolute left-0 z-10 w-56 bg-white border shadow-lg top-full">
                  {/* Academies */}
                  <div 
                    className="relative"
                    onMouseEnter={() => {
                      setShowAcademies(true);
                      setShowAdministration(false);
                    }}
                    onMouseLeave={() => setShowAcademies(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-3 text-blue-800 cursor-pointer hover:bg-gray-100">
                      <span>Academies</span>
                      <span>{showAcademies ? '−' : '+'}</span>
                    </div>
                    {/* Level 2 Dropdown - Academies */}
                    {showAcademies && (
                      <div className="absolute z-20 w-64 bg-white border shadow-lg top-3/4 right-full">
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          Computing
                        </div>
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          Data Science
                        </div>
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          Cyber Security
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Administration */}
                  <div 
                    className="relative"
                    onMouseEnter={() => {
                      setShowAdministration(true);
                      setShowAcademies(false);
                    }}
                    onMouseLeave={() => setShowAdministration(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 text-blue-800 cursor-pointer hover:bg-gray-100">
                      <span>Administration</span>
                      <span>{showAdministration ? '−' : '+'}</span>
                    </div>
                    {/* Level 2 Dropdown - Administration */}
                    {showAdministration && (
                      <div className="absolute z-20 w-64 bg-white border shadow-lg top-3/4 right-full">
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          Faculty & Staff
                        </div>
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          Admissions Office
                        </div>
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          Student Services
                        </div>
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          Contact & Office Hours
                        </div>
                        <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                          Policies & Regulations
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Apply Now & Visit Us */}
            <a href="#" className="flex items-center space-x-1 hover:text-red-900">
              <span className="text-base material-icons">download</span>
              <span>APPLY NOW</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-red-900">
              <span className="text-base material-icons">calendar_today</span>
              <span>VISIT US</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="px-4 py-2 bg-white md:hidden">
            {/* PROGRAMS Dropdown */}
            <div className="mb-2">
              <button 
                className="flex items-center justify-between w-full px-3 py-2 font-semibold text-left text-red-700 bg-gray-100 rounded"
                onClick={() => {
                  setShowPrograms(!showPrograms);
                  setShowDepartments(false);
                }}
              >
                <span>PROGRAMS</span>
                <span>{showPrograms ? '−' : '+'}</span>
              </button>
              
              {showPrograms && (
                <div className="pl-4 mt-1">
                  {/* Undergraduate */}
                  <div>
                    <button 
                      className="flex items-center justify-between w-full px-3 py-2 font-medium text-left text-blue-800 rounded bg-gray-50"
                      onClick={() => {
                        setShowUndergraduate(!showUndergraduate);
                        setShowGraduate(false);
                      }}
                    >
                      <span>Undergraduate</span>
                      <span>{showUndergraduate ? '−' : '+'}</span>
                    </button>
                    
                    {showUndergraduate && (
                      <div className="pl-4">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          BSc (Hons) Business Computing & Information Systems
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          BSc (Hons) Cyber Security & Networking
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Bachelor of Business Studies (BBS)
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {/* Graduate */}
                  <div>
                    <button 
                      className="flex items-center justify-between w-full px-3 py-2 font-medium text-left text-blue-800 rounded bg-gray-50"
                      onClick={() => {
                        setShowGraduate(!showGraduate);
                        setShowUndergraduate(false);
                      }}
                    >
                      <span>Graduate</span>
                      <span>{showGraduate ? '−' : '+'}</span>
                    </button>
                    
                    {showGraduate && (
                      <div className="pl-4">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Master of Business Studies (MBS)
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* DEPARTMENTS Dropdown */}
            <div className="mb-2">
              <button 
                className="flex items-center justify-between w-full px-3 py-2 font-semibold text-left text-red-700 bg-gray-100 rounded"
                onClick={() => {
                  setShowDepartments(!showDepartments);
                  setShowPrograms(false);
                }}
              >
                <span>DEPARTMENTS</span>
                <span>{showDepartments ? '−' : '+'}</span>
              </button>
              
              {showDepartments && (
                <div className="pl-4 mt-1">
                  {/* Academies */}
                  <div>
                    <button 
                      className="flex items-center justify-between w-full px-3 py-2 font-medium text-left text-blue-800 rounded bg-gray-50"
                      onClick={() => {
                        setShowAcademies(!showAcademies);
                        setShowAdministration(false);
                      }}
                    >
                      <span>Academies</span>
                      <span>{showAcademies ? '−' : '+'}</span>
                    </button>
                    
                    {showAcademies && (
                      <div className="pl-4">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Computing
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Data Science
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Cyber Security
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {/* Administration */}
                  <div>
                    <button 
                      className="flex items-center justify-between w-full px-3 py-2 font-medium text-left text-blue-800 rounded bg-gray-50"
                      onClick={() => {
                        setShowAdministration(!showAdministration);
                        setShowAcademies(false);
                      }}
                    >
                      <span>Administration</span>
                      <span>{showAdministration ? '−' : '+'}</span>
                    </button>
                    
                    {showAdministration && (
                      <div className="pl-4">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Faculty & Staff
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Admissions Office
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Student Services
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Contact & Office Hours
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                          Policies & Regulations
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Apply Now & Visit Us */}
            <a 
              href="#" 
              className="flex items-center px-3 py-2 mb-2 font-semibold text-red-700 bg-gray-100 rounded hover:bg-gray-200"
              onClick={closeAllDropdowns}
            >
              <span className="mr-2 material-icons">download</span>
              APPLY NOW
            </a>
            <a 
              href="#" 
              className="flex items-center px-3 py-2 font-semibold text-red-700 bg-gray-100 rounded hover:bg-gray-200"
              onClick={closeAllDropdowns}
            >
              <span className="mr-2 material-icons">calendar_today</span>
              VISIT US
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;