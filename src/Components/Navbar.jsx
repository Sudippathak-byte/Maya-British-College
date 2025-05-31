import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const [showUndergraduate, setShowUndergraduate] = useState(false);
  const [showGraduate, setShowGraduate] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showAcademies, setShowAcademies] = useState(false);
  const [showAdministration, setShowAdministration] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation variants for dropdowns
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.9,
      transformOrigin: "top"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transformOrigin: "top",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      scale: 0.9,
      transformOrigin: "top",
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Animation variants for nested dropdowns (level 2)
  const nestedDropdownVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.9,
      transformOrigin: "right top"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transformOrigin: "right top",
      transition: {
        duration: 0.25,
        ease: "easeOut",
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      x: -15,
      scale: 0.9,
      transformOrigin: "right top",
      transition: {
        duration: 0.18,
        ease: "easeIn"
      }
    }
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for mobile dropdown items
  const mobileDropdownVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

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
            <motion.span 
              className="w-6 h-0.5 bg-black"
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-black"
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-black"
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
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
              <button className="flex items-center transition-colors duration-200 hover:text-red-900">
                PROGRAMS 
                <motion.span 
                  className="ml-1"
                  animate={{ rotate: showPrograms ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>

              {/* Level 1 Dropdown */}
              <AnimatePresence>
                {showPrograms && (
                  <motion.div 
                    className="absolute left-0 z-10 w-56 bg-white border shadow-lg top-full"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {/* Undergraduate */}
                    <div 
                      className="relative"
                      onMouseEnter={() => {
                        setShowUndergraduate(true);
                        setShowGraduate(false);
                      }}
                      onMouseLeave={() => setShowUndergraduate(false)}
                    >
                      <div className="flex items-center justify-between px-4 py-3 text-blue-800 transition-colors duration-150 cursor-pointer hover:bg-gray-100">
                        <span>Undergraduate</span>
                        <motion.span
                          animate={{ rotate: showUndergraduate ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          +
                        </motion.span>
                      </div>
                      {/* Level 2 Dropdown - Undergraduate */}
                      <AnimatePresence>
                        {showUndergraduate && (
                          <motion.div 
                            className="absolute z-20 bg-white border shadow-lg top-3/4 right-full w-80"
                            variants={nestedDropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              BSc (Hons) Business Computing & Information Systems
                            </motion.div>
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              BSc (Hons) Cyber Security & Networking
                            </motion.div>
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Bachelor of Business Studies (BBS)
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
                      <div className="flex items-center justify-between px-4 py-2 text-blue-800 transition-colors duration-150 cursor-pointer hover:bg-gray-100">
                        <span>Graduate</span>
                        <motion.span
                          animate={{ rotate: showGraduate ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          +
                        </motion.span>
                      </div>
                      {/* Level 2 Dropdown - Graduate */}
                      <AnimatePresence>
                        {showGraduate && (
                          <motion.div 
                            className="absolute z-20 bg-white border shadow-lg top-3/4 right-full w-80"
                            variants={nestedDropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Master of Business Studies (MBS)
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
              <button className="flex items-center transition-colors duration-200 hover:text-red-900">
                DEPARTMENTS 
                <motion.span 
                  className="ml-1"
                  animate={{ rotate: showDepartments ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>

              {/* Level 1 Dropdown - Departments */}
              <AnimatePresence>
                {showDepartments && (
                  <motion.div 
                    className="absolute left-0 z-10 w-56 bg-white border shadow-lg top-full"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {/* Academies */}
                    <div 
                      className="relative"
                      onMouseEnter={() => {
                        setShowAcademies(true);
                        setShowAdministration(false);
                      }}
                      onMouseLeave={() => setShowAcademies(false)}
                    >
                      <div className="flex items-center justify-between px-4 py-3 text-blue-800 transition-colors duration-150 cursor-pointer hover:bg-gray-100">
                        <span>Academies</span>
                        <motion.span
                          animate={{ rotate: showAcademies ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          +
                        </motion.span>
                      </div>
                      {/* Level 2 Dropdown - Academies */}
                      <AnimatePresence>
                        {showAcademies && (
                          <motion.div 
                            className="absolute z-20 w-64 bg-white border shadow-lg top-3/4 right-full"
                            variants={nestedDropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Computing
                            </motion.div>
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Data Science
                            </motion.div>
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Cyber Security
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
                      <div className="flex items-center justify-between px-4 py-2 text-blue-800 transition-colors duration-150 cursor-pointer hover:bg-gray-100">
                        <span>Administration</span>
                        <motion.span
                          animate={{ rotate: showAdministration ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          +
                        </motion.span>
                      </div>
                      {/* Level 2 Dropdown - Administration */}
                      <AnimatePresence>
                        {showAdministration && (
                          <motion.div 
                            className="absolute z-20 w-64 bg-white border shadow-lg top-3/4 right-full"
                            variants={nestedDropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Faculty & Staff
                            </motion.div>
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Admissions Office
                            </motion.div>
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Student Services
                            </motion.div>
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Contact & Office Hours
                            </motion.div>
                            <motion.div 
                              className="px-4 py-2 text-gray-700 transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              Policies & Regulations
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Apply Now & Visit Us */}
            <a href="#" className="flex items-center space-x-1 transition-colors duration-200 hover:text-red-900">
              <span className="text-base material-icons">download</span>
              <span>APPLY NOW</span>
            </a>
            <a href="#" className="flex items-center space-x-1 transition-colors duration-200 hover:text-red-900">
              <span className="text-base material-icons">calendar_today</span>
              <span>VISIT US</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="px-4 py-2 overflow-hidden bg-white md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* PROGRAMS Dropdown */}
              <div className="mb-2">
                <button 
                  className="flex items-center justify-between w-full px-3 py-2 font-semibold text-left text-red-700 transition-colors duration-200 bg-gray-100 rounded hover:bg-gray-200"
                  onClick={() => {
                    setShowPrograms(!showPrograms);
                    setShowDepartments(false);
                  }}
                >
                  <span>PROGRAMS</span>
                  <motion.span
                    animate={{ rotate: showPrograms ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {showPrograms && (
                    <motion.div 
                      className="pl-4 mt-1 overflow-hidden"
                      variants={mobileDropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {/* Undergraduate */}
                      <div>
                        <button 
                          className="flex items-center justify-between w-full px-3 py-2 font-medium text-left text-blue-800 transition-colors duration-200 rounded bg-gray-50 hover:bg-gray-100"
                          onClick={() => {
                            setShowUndergraduate(!showUndergraduate);
                            setShowGraduate(false);
                          }}
                        >
                          <span>Undergraduate</span>
                          <motion.span
                            animate={{ rotate: showUndergraduate ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            +
                          </motion.span>
                        </button>
                        
                        <AnimatePresence>
                          {showUndergraduate && (
                            <motion.div 
                              className="pl-4 overflow-hidden"
                              variants={mobileDropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                BSc (Hons) Business Computing & Information Systems
                              </a>
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                BSc (Hons) Cyber Security & Networking
                              </a>
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Bachelor of Business Studies (BBS)
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      
                      {/* Graduate */}
                      <div>
                        <button 
                          className="flex items-center justify-between w-full px-3 py-2 font-medium text-left text-blue-800 transition-colors duration-200 rounded bg-gray-50 hover:bg-gray-100"
                          onClick={() => {
                            setShowGraduate(!showGraduate);
                            setShowUndergraduate(false);
                          }}
                        >
                          <span>Graduate</span>
                          <motion.span
                            animate={{ rotate: showGraduate ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            +
                          </motion.span>
                        </button>
                        
                        <AnimatePresence>
                          {showGraduate && (
                            <motion.div 
                              className="pl-4 overflow-hidden"
                              variants={mobileDropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Master of Business Studies (MBS)
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* DEPARTMENTS Dropdown */}
              <div className="mb-2">
                <button 
                  className="flex items-center justify-between w-full px-3 py-2 font-semibold text-left text-red-700 transition-colors duration-200 bg-gray-100 rounded hover:bg-gray-200"
                  onClick={() => {
                    setShowDepartments(!showDepartments);
                    setShowPrograms(false);
                  }}
                >
                  <span>DEPARTMENTS</span>
                  <motion.span
                    animate={{ rotate: showDepartments ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {showDepartments && (
                    <motion.div 
                      className="pl-4 mt-1 overflow-hidden"
                      variants={mobileDropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {/* Academies */}
                      <div>
                        <button 
                          className="flex items-center justify-between w-full px-3 py-2 font-medium text-left text-blue-800 transition-colors duration-200 rounded bg-gray-50 hover:bg-gray-100"
                          onClick={() => {
                            setShowAcademies(!showAcademies);
                            setShowAdministration(false);
                          }}
                        >
                          <span>Academies</span>
                          <motion.span
                            animate={{ rotate: showAcademies ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            +
                          </motion.span>
                        </button>
                        
                        <AnimatePresence>
                          {showAcademies && (
                            <motion.div 
                              className="pl-4 overflow-hidden"
                              variants={mobileDropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Computing
                              </a>
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Data Science
                              </a>
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Cyber Security
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      
                      {/* Administration */}
                      <div>
                        <button 
                          className="flex items-center justify-between w-full px-3 py-2 font-medium text-left text-blue-800 transition-colors duration-200 rounded bg-gray-50 hover:bg-gray-100"
                          onClick={() => {
                            setShowAdministration(!showAdministration);
                            setShowAcademies(false);
                          }}
                        >
                          <span>Administration</span>
                          <motion.span
                            animate={{ rotate: showAdministration ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            +
                          </motion.span>
                        </button>
                        
                        <AnimatePresence>
                          {showAdministration && (
                            <motion.div 
                              className="pl-4 overflow-hidden"
                              variants={mobileDropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Faculty & Staff
                              </a>
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Admissions Office
                              </a>
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Student Services
                              </a>
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Contact & Office Hours
                              </a>
                              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors duration-150 hover:bg-gray-50">
                                Policies & Regulations
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Apply Now & Visit Us */}
              <motion.a 
                href="#" 
                className="flex items-center px-3 py-2 mb-2 font-semibold text-red-700 transition-colors duration-200 bg-gray-100 rounded hover:bg-gray-200"
                onClick={closeAllDropdowns}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2 material-icons">download</span>
                APPLY NOW
              </motion.a>
              <motion.a 
                href="#" 
                className="flex items-center px-3 py-2 font-semibold text-red-700 transition-colors duration-200 bg-gray-100 rounded hover:bg-gray-200"
                onClick={closeAllDropdowns}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2 material-icons">calendar_today</span>
                VISIT US
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;