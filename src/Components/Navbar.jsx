import React, { useState, useRef, useEffect } from 'react';

// Enhanced animation styles for ultra-smooth transitions
const animationStyles = {
  dropdown: {
    transform: 'translateY(-8px)',
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
    transformOrigin: 'top center'
  },
  dropdownVisible: {
    transform: 'translateY(0)',
    opacity: 1,
    visibility: 'visible',
    transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
  },
  nestedDropdown: {
    transform: 'translateX(-8px)',
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
    transformOrigin: 'left center'
  },
  nestedDropdownVisible: {
    transform: 'translateX(0)',
    opacity: 1,
    visibility: 'visible',
    transition: 'all 0.25s cubic-bezier(0.23, 1, 0.32, 1)'
  }
};

// Menu data structure with navigation links
const menuData = {
  programs: {
    title: "PROGRAMS",
    items: [
      {
        title: "Undergraduate",
        // ADD YOUR UNDERGRADUATE PAGE SRC HERE: e.g., "/undergraduate" or "/programs/undergraduate"
        link: "/undergraduate",
        items: [
          {
            title: "BSc (Hons) Business Computing & Information Systems",
            // ADD YOUR BUSINESS COMPUTING PAGE SRC HERE
            link: "/programs/business-computing"
          },
          {
            title: "BSc (Hons) Cyber Security & Networking",
            // ADD YOUR CYBER SECURITY PAGE SRC HERE
            link: "/programs/cyber-security"
          },
          {
            title: "Bachelor of Business Studies (BBS)",
            // ADD YOUR BBS PAGE SRC HERE
            link: "/programs/bbs"
          }
        ]
      },
      {
        title: "Graduate",
        // ADD YOUR GRADUATE PAGE SRC HERE: e.g., "/graduate" or "/programs/graduate"
        link: "/graduate",
        items: [
          {
            title: "Master of Business Studies (MBS)",
            // ADD YOUR MBS PAGE SRC HERE
            link: "/programs/mbs"
          }
        ]
      }
    ]
  },
  departments: {
    title: "DEPARTMENTS",
    items: [
      {
        title: "Academies",
        // ADD YOUR ACADEMIES PAGE SRC HERE: e.g., "/academies" or "/departments/academies"
        link: "/academies",
        items: [
          {
            title: "Computing",
            // ADD YOUR COMPUTING ACADEMY PAGE SRC HERE
            link: "/academies/computing"
          },
          {
            title: "Data Science",
            // ADD YOUR DATA SCIENCE ACADEMY PAGE SRC HERE
            link: "/academies/data-science"
          },
          {
            title: "Cyber Security",
            // ADD YOUR CYBER SECURITY ACADEMY PAGE SRC HERE
            link: "/academies/cyber-security"
          }
        ]
      },
      {
        title: "Administration",
        // ADD YOUR ADMINISTRATION PAGE SRC HERE: e.g., "/administration" or "/departments/administration"
        link: "/administration",
        items: [
          {
            title: "Faculty & Staff",
            // ADD YOUR FACULTY & STAFF PAGE SRC HERE
            link: "/administration/faculty-staff"
          },
          {
            title: "Admissions Office",
            // ADD YOUR ADMISSIONS PAGE SRC HERE
            link: "/administration/admissions"
          },
          {
            title: "Student Services",
            // ADD YOUR STUDENT SERVICES PAGE SRC HERE
            link: "/administration/student-services"
          },
          {
            title: "Contact & Office Hours",
            // ADD YOUR CONTACT PAGE SRC HERE
            link: "/administration/contact"
          },
          {
            title: "Policies & Regulations",
            // ADD YOUR POLICIES PAGE SRC HERE
            link: "/administration/policies"
          }
        ]
      }
    ]
  },
  quickLinks: [
    { 
      title: "CAREER", 
      icon: null,
      // ADD YOUR CAREER PAGE SRC HERE
      link: "/career"
    },
    { 
      title: "APPLY NOW", 
      icon: "download",
      // ADD YOUR APPLICATION PAGE SRC HERE
      link: "/apply"
    },
    { 
      title: "VISIT US", 
      icon: "calendar_today",
      // ADD YOUR VISIT/CONTACT PAGE SRC HERE
      link: "/visit"
    }
  ]
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  
  // Enhanced refs for perfect timeout management
  const mainTimeoutRef = useRef(null);
  const submenuTimeoutRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Clear all timeouts on component unmount
  useEffect(() => {
    return () => {
      if (mainTimeoutRef.current) clearTimeout(mainTimeoutRef.current);
      if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    };
  }, []);

  // Perfect hover handlers - no more defects between menus
  const handleMainMenuEnter = (menuKey) => {
    // Clear any existing timeouts immediately
    if (mainTimeoutRef.current) {
      clearTimeout(mainTimeoutRef.current);
      mainTimeoutRef.current = null;
    }
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    
    setHoveredMenu(menuKey);
    // Reset submenu when switching main menus
    if (hoveredMenu !== menuKey) {
      setHoveredSubmenu(null);
    }
  };

  const handleMainMenuLeave = (e) => {
    // Check if we're moving to a dropdown or another menu item
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && navbarRef.current?.contains(relatedTarget)) {
      // If moving within navbar, use shorter timeout
      mainTimeoutRef.current = setTimeout(() => {
        setHoveredMenu(null);
        setHoveredSubmenu(null);
      }, 150);
    } else {
      // If leaving navbar completely, close immediately
      setHoveredMenu(null);
      setHoveredSubmenu(null);
    }
  };

  const handleSubmenuEnter = (submenuKey) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    setHoveredSubmenu(submenuKey);
  };

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setHoveredSubmenu(null);
    }, 150);
  };

  // Keep all menus open when hovering over dropdown areas
  const handleDropdownEnter = () => {
    if (mainTimeoutRef.current) {
      clearTimeout(mainTimeoutRef.current);
      mainTimeoutRef.current = null;
    }
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
  };

  const closeAllMenus = () => {
    // Clear all timeouts
    if (mainTimeoutRef.current) clearTimeout(mainTimeoutRef.current);
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    
    setHoveredMenu(null);
    setHoveredSubmenu(null);
    setMobileMenuOpen(false);
  };

  // Enhanced dropdown items with navigation
  const renderDropdownItems = (items, isNested = false) => {
    return items.map((item, index) => (
      <a 
        key={index}
        href={item.link || "#"}
        className={`block px-5 py-3 text-gray-700 cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-800 hover:pl-6 border-l-2 border-transparent hover:border-blue-400 ${
          isNested ? 'text-sm' : 'font-medium'
        }`}
        style={{
          animation: `slideIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.08}s both`,
          '--hover-from': 'rgba(0, 96, 154, 0.1)',
          '--hover-to': 'rgba(0, 96, 154, 0.15)',
          '--hover-text': '#00609a',
          '--hover-border': '#00609a'
        }}
        onClick={closeAllMenus}
      >
        {item.title || item}
      </a>
    ));
  };

  // Perfect desktop dropdown with zero defects
  const renderDesktopDropdown = (menuKey) => {
    const menu = menuData[menuKey];
    const isOpen = hoveredMenu === menuKey;
    
    return (
      <div 
        className="relative group"
        onMouseEnter={() => handleMainMenuEnter(menuKey)}
        onMouseLeave={handleMainMenuLeave}
      >
        <button 
          className="relative flex items-center px-4 py-2 font-semibold text-red-700 transition-all duration-300 rounded-lg hover:text-red-900 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 group-hover:shadow-md"
          style={{
            transform: isOpen ? 'translateY(-1px)' : 'translateY(0)',
            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        >
          {menu.title}
          <span 
            className="ml-2 text-xs transition-all duration-300"
            style={{
              transform: isOpen ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)'
            }}
          >
            ⌄
          </span>
          {/* Active indicator */}
          <div 
            className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300"
            style={{
              width: isOpen ? '80%' : '0%',
              transform: 'translateX(-50%)'
            }}
          />
        </button>

        {/* Main Dropdown with perfect positioning */}
        <div 
          className="absolute left-0 z-30 mt-3 bg-white border border-gray-100 shadow-2xl w-72 rounded-2xl top-full"
          style={{
            ...animationStyles.dropdown,
            ...(isOpen ? animationStyles.dropdownVisible : {}),
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleMainMenuLeave}
        >
          <div className="py-3">
            {menu.items.map((section, idx) => {
              const sectionKey = `${menuKey}-${section.title.toLowerCase()}`;
              const isSubmenuOpen = hoveredSubmenu === sectionKey;
              
              return (
                <div key={idx} className="relative">
                  {/* Section header with navigation */}
                  <a
                    href={section.link || "#"}
                    className="flex items-center justify-between px-5 py-4 font-bold transition-all duration-300 border-l-4 border-transparent cursor-pointer group"
                    style={{
                      color: '#00609a',
                      animation: `slideIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${idx * 0.15}s both`
                    }}
                    onMouseEnter={() => handleSubmenuEnter(sectionKey)}
                    onClick={closeAllMenus}
                  >
                    <span className="transition-colors duration-200 group-hover:opacity-80">
                      {section.title}
                    </span>
                    <span
                      className="text-xs transition-all duration-300"
                      style={{
                        color: '#00609a',
                        transform: isSubmenuOpen ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                      }}
                    >
                      ⌄
                    </span>
                  </a>
                  
                  {/* Nested Dropdown with perfect alignment */}
                  <div 
                    className={`absolute z-40 bg-white rounded-2xl shadow-2xl border border-gray-100 ${
                      menuKey === 'programs' ? 'w-96' : 'w-80'
                    }`}
                    style={{
                      top: '0.5rem',
                      left: '100%',
                      marginLeft: '0.75rem',
                      ...animationStyles.nestedDropdown,
                      ...(isSubmenuOpen ? animationStyles.nestedDropdownVisible : {}),
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={() => handleSubmenuEnter(sectionKey)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <div className="py-3">
                      {renderDropdownItems(section.items, true)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced mobile dropdown with navigation
  const renderMobileDropdown = (menuKey) => {
    const menu = menuData[menuKey];
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    
    return (
      <div className="mb-3">
        <button 
          className="flex items-center justify-between w-full px-5 py-4 font-bold text-left text-red-700 transition-all duration-300 shadow-sm rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 hover:shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{menu.title}</span>
          <span
            className="text-sm transition-transform duration-300"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          >
            ⌄
          </span>
        </button>
        
        <div 
          className="overflow-hidden transition-all ease-in-out duration-400"
          style={{
            maxHeight: isOpen ? '600px' : '0px',
            opacity: isOpen ? 1 : 0
          }}
        >
          <div className="pl-3 mt-3">
            {menu.items.map((section, idx) => {
              const sectionKey = section.title.toLowerCase();
              const isSubmenuOpen = openSubmenu === sectionKey;
              
              return (
                <div key={idx} className="mb-3">
                  <a
                    href={section.link || "#"}
                    className="flex items-center justify-between w-full px-4 py-3 font-semibold text-left transition-all duration-300 shadow-sm rounded-xl"
                    style={{
                      color: '#00609a',
                      background: 'linear-gradient(to right, rgba(0, 96, 154, 0.1), rgba(0, 96, 154, 0.15))'
                    }}
                    onClick={() => setOpenSubmenu(isSubmenuOpen ? null : sectionKey)}
                  >
                    <span>{section.title}</span>
                    <span
                      className="text-xs transition-transform duration-300"
                      style={{
                        transform: isSubmenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      ⌄
                    </span>
                  </a>
                  
                  <div 
                    className="overflow-hidden transition-all ease-in-out duration-400"
                    style={{
                      maxHeight: isSubmenuOpen ? '400px' : '0px',
                      opacity: isSubmenuOpen ? 1 : 0
                    }}
                  >
                    <div className="pl-4 mt-2">
                      {section.items.map((item, i) => (
                        <a 
                          key={i} 
                          href={item.link || "#"}
                          className="block px-4 py-3 text-gray-700 transition-all duration-200 border-l-2 border-transparent hover:pl-6 rounded-xl"
                          style={{
                            borderColor: 'transparent',
                            color: '#374151'
                          }}
                          onClick={closeAllMenus}
                        >
                          {item.title || item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Enhanced CSS for perfect animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group:hover .group-hover\\:shadow-md {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        /* Professional hover effects for dropdown items */
        .dropdown-item-hover:hover {
          background: linear-gradient(to right, rgba(0, 96, 154, 0.1), rgba(0, 96, 154, 0.15));
          color: #00609a;
          border-left-color: #00609a;
        }
        
        .section-header-hover:hover {
          background: linear-gradient(to right, rgba(0, 96, 154, 0.1), rgba(0, 96, 154, 0.15));
          border-left-color: #00609a;
        }
        
        /* Smooth scroll behavior */
        * {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Material Icons CDN */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      
      <div className="relative" ref={navbarRef}>
        <nav className="relative z-50 bg-white border-b-2 border-gray-100 shadow-xl">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-16">
            {/* Logo & Title */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center transition-all duration-300 shadow-xl w-14 h-14 hover:shadow-2xl hover:scale-105">
                <div className="flex items-center justify-center h-12 h-16 rounded-full">
                  <img src="/mayalogo.jpg" alt="MayaLogo.png" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 
                  className="text-2xl font-bold transition-all duration-300 bg-gradient-to-r bg-clip-text"
                  style={{
                    color: '#00609a',
                    background: `linear-gradient(to right, #00609a, #004d7a)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Maya British College
                </h1>
                <p className="text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-gray-800">
                  Affiliated to University of Central Lancashire, UK
                </p>
              </div>
            </div>

            {/* Enhanced Hamburger Menu Button */}
            <button 
              className="flex flex-col items-center justify-center w-12 h-12 space-y-1.5 md:hidden transition-all duration-300 hover:scale-110 hover:bg-gray-50 rounded-xl"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span 
                className="w-7 h-0.5 bg-gray-800 rounded-full transition-all duration-400"
                style={{
                  transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'rotate(0deg) translateY(0)',
                }}
              />
              <span 
                className="w-7 h-0.5 bg-gray-800 rounded-full transition-all duration-400"
                style={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  transform: `scaleX(${mobileMenuOpen ? 0 : 1})`,
                }}
              />
              <span 
                className="w-7 h-0.5 bg-gray-800 rounded-full transition-all duration-400"
                style={{
                  transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'rotate(0deg) translateY(0)',
                }}
              />
            </button>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-2 text-sm font-medium md:flex lg:space-x-6">
              {renderDesktopDropdown('programs')}
              {renderDesktopDropdown('departments')}
              
              {menuData.quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.link || "#"}
                  className="flex items-center space-x-2 px-4 py-2 text-red-700 font-semibold transition-all duration-300 hover:text-red-900 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl hover:shadow-md hover:-translate-y-0.5 relative overflow-hidden group"
                >
                  {link.icon && (
                    <span className="text-lg transition-transform duration-300 material-icons group-hover:scale-110">{link.icon}</span>
                  )}
                  <span>{link.title}</span>
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-red-100 to-pink-100 group-hover:opacity-20 rounded-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out md:hidden bg-gradient-to-b from-white via-gray-50 to-white"
            style={{
              maxHeight: mobileMenuOpen ? '700px' : '0px',
              opacity: mobileMenuOpen ? 1 : 0
            }}
          >
            <div className="px-4 py-5">
              {renderMobileDropdown('programs')}
              {renderMobileDropdown('departments')}
              
              <div className="mt-5 space-y-3">
                {menuData.quickLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.link || "#"}
                    className="flex items-center px-5 py-4 font-bold text-red-700 transition-all duration-300 shadow-sm rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 hover:shadow-md"
                    onClick={closeAllMenus}
                  >
                    {link.icon && (
                      <span className="mr-3 text-xl material-icons">{link.icon}</span>
                    )}
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;