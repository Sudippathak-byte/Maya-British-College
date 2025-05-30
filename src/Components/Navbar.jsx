import React, { useState } from 'react';

const Navbar = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const [showUndergraduate, setShowUndergraduate] = useState(false);
  const [showGraduate, setShowGraduate] = useState(false);
  
  // New state for departments dropdown
  const [showDepartments, setShowDepartments] = useState(false);
  const [showAcademies, setShowAcademies] = useState(false);
  const [showAdministration, setShowAdministration] = useState(false);

  const handleProgramsEnter = () => {
    setShowPrograms(true);
  };

  const handleProgramsLeave = () => {
    setShowPrograms(false);
    setShowUndergraduate(false);
    setShowGraduate(false);
  };

  const handleUndergraduateEnter = () => {
    setShowUndergraduate(true);
    setShowGraduate(false);
  };

  const handleUndergraduateLeave = () => {
    setShowUndergraduate(false);
  };

  const handleGraduateEnter = () => {
    setShowGraduate(true);
    setShowUndergraduate(false);
  };

  const handleGraduateLeave = () => {
    setShowGraduate(false);
  };

  // New handlers for departments dropdown
  const handleDepartmentsEnter = () => {
    setShowDepartments(true);
  };

  const handleDepartmentsLeave = () => {
    setShowDepartments(false);
    setShowAcademies(false);
    setShowAdministration(false);
  };

  const handleAcademiesEnter = () => {
    setShowAcademies(true);
    setShowAdministration(false);
  };

  const handleAcademiesLeave = () => {
    setShowAcademies(false);
  };

  const handleAdministrationEnter = () => {
    setShowAdministration(true);
    setShowAcademies(false);
  };

  const handleAdministrationLeave = () => {
    setShowAdministration(false);
  };

  return (
    <div>
      {/* Material Icons CDN */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      
      <nav className="flex items-center justify-between px-16 py-3 bg-white border-b shadow-md">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
            <img src="/maya logo.jpg" alt="MAYA British College" className="w-auto h-12" />
          <div>
            <h1 className="text-xl font-bold text-blue-800">Maya British College</h1>
            <p className="text-sm font-semibold text-black">Affiliated to University of Central Lancashire, UK</p>
            <p className="text-sm font-semibold text-black">Affiliated to Tribhuvan University</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="items-center hidden space-x-8 text-sm font-semibold text-red-700 md:flex">
          {/* PROGRAMS Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleProgramsEnter}
            onMouseLeave={handleProgramsLeave}
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
                  onMouseEnter={handleUndergraduateEnter}
                  onMouseLeave={handleUndergraduateLeave}
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
                  onMouseEnter={handleGraduateEnter}
                  onMouseLeave={handleGraduateLeave}
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
            onMouseEnter={handleDepartmentsEnter}
            onMouseLeave={handleDepartmentsLeave}
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
                  onMouseEnter={handleAcademiesEnter}
                  onMouseLeave={handleAcademiesLeave}
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
                  onMouseEnter={handleAdministrationEnter}
                  onMouseLeave={handleAdministrationLeave}
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

        {/* Hamburger */}
        <button className="flex flex-col space-y-1 md:hidden">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;