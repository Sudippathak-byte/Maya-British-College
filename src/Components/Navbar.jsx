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
        link: "/undergraduate",
        items: [
          {
            title: "BSc (Hons) Business Computing & Information Systems",
            link: "/programs/business-computing"
          },
          {
            title: "BSc (Hons) Cyber Security & Networking",
            link: "/programs/cyber-security"
          }
        ]
      },
      {
        title: "Diploma",
        link: "/Diploma",
        items: [
          {
            title: "Level 4 Diploma in Computing (L4DC)",
            link: "/programs/l4dc"
          },
          {
            title: "Level 5 Diploma in Computing (L5DC)",
            link: "/programs/l5dc"
          },
        ]
      },
      {
        title: "Short Courses",
        link: "/Short_Courses",
        items: [
          {
            title: "Cyber Security",
            link: "/programs/CyberSecurity"
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
        link: "/academies",
        items: [
          {
            title: "Computing",
            link: "/academies/computing"
          },
          {
            title: "Data Science",
            link: "/academies/data-science"
          },
          {
            title: "Cyber Security",
            link: "/academies/cyber-security"
          }
        ]
      },
      {
        title: "Administration",
        link: "/administration",
        items: [
          {
            title: "Faculty & Staff",
            link: "/administration/faculty-staff"
          },
          {
            title: "Admissions Office",
            link: "/administration/admissions"
          },
          {
            title: "Student Services",
            link: "/administration/student-services"
          },
          {
            title: "Contact & Office Hours",
            link: "/administration/contact"
          },
          {
            title: "Policies & Regulations",
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
      link: "/career"
    },
    { 
      title: "APPLY NOW", 
      icon: "download",
      link: "/apply"
    },
    { 
      title: "VISIT US", 
      icon: "calendar_today",
      link: "/visit"
    }
  ]
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  
  const mainTimeoutRef = useRef(null);
  const submenuTimeoutRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    return () => {
      if (mainTimeoutRef.current) clearTimeout(mainTimeoutRef.current);
      if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    };
  }, []);

  const handleMainMenuEnter = (menuKey) => {
    if (mainTimeoutRef.current) {
      clearTimeout(mainTimeoutRef.current);
      mainTimeoutRef.current = null;
    }
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    
    setHoveredMenu(menuKey);
    if (hoveredMenu !== menuKey) {
      setHoveredSubmenu(null);
    }
  };

  const handleMainMenuLeave = (e) => {
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && navbarRef.current?.contains(relatedTarget)) {
      mainTimeoutRef.current = setTimeout(() => {
        setHoveredMenu(null);
        setHoveredSubmenu(null);
      }, 150);
    } else {
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
    if (mainTimeoutRef.current) clearTimeout(mainTimeoutRef.current);
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    
    setHoveredMenu(null);
    setHoveredSubmenu(null);
    setMobileMenuOpen(false);
  };

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
          className="relative flex items-center px-4 py-2 font-medium text-gray-800 transition-all duration-300 rounded-lg hover:text-blue-900 group-hover:shadow-sm"
          style={{
            transform: isOpen ? 'translateY(-1px)' : 'translateY(0)',
            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
            color: isOpen ? '#00609a' : '#1f2937'
          }}
        >
          {menu.title}
          <span 
            className="ml-2 text-xs transition-all duration-300"
            style={{
              transform: isOpen ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)',
              color: isOpen ? '#00609a' : '#1f2937'
            }}
          >
            ⌄
          </span>
          <div 
            className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300"
            style={{
              width: isOpen ? '80%' : '0%',
              transform: 'translateX(-50%)'
            }}
          />
        </button>

        <div 
          className="absolute left-0 z-30 mt-3 bg-white border border-gray-100 shadow-xl w-72 rounded-xl top-full"
          style={{
            ...animationStyles.dropdown,
            ...(isOpen ? animationStyles.dropdownVisible : {}),
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
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
                  <a
                    href={section.link || "#"}
                    className="flex items-center justify-between px-5 py-3 font-medium transition-all duration-300 border-l-4 border-transparent cursor-pointer group"
                    style={{
                      color: isSubmenuOpen ? '#00609a' : '#1f2937',
                      animation: `slideIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${idx * 0.15}s both`,
                      borderLeftColor: isSubmenuOpen ? '#00609a' : 'transparent'
                    }}
                    onMouseEnter={() => handleSubmenuEnter(sectionKey)}
                    onClick={closeAllMenus}
                  >
                    <span className="transition-colors duration-200 group-hover:text-blue-800">
                      {section.title}
                    </span>
                    <span
                      className="text-xs transition-all duration-300"
                      style={{
                        color: isSubmenuOpen ? '#00609a' : '#9ca3af',
                        transform: isSubmenuOpen ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                      }}
                    >
                      ⌄
                    </span>
                  </a>
                  
                  <div 
                    className={`absolute z-40 bg-white rounded-xl shadow-xl border border-gray-100 ${
                      menuKey === 'programs' ? 'w-96' : 'w-80'
                    }`}
                    style={{
                      top: '0.5rem',
                      left: '100%',
                      marginLeft: '0.75rem',
                      ...animationStyles.nestedDropdown,
                      ...(isSubmenuOpen ? animationStyles.nestedDropdownVisible : {}),
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
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

  const renderMobileDropdown = (menuKey) => {
    const menu = menuData[menuKey];
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    
    return (
      <div className="mb-3">
        <button 
          className="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-gray-800 transition-all duration-300 shadow-sm rounded-xl bg-gray-50 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: isOpen ? '#f3f4f6' : '#f9fafb'
          }}
        >
          <span style={{ color: isOpen ? '#00609a' : '#1f2937' }}>{menu.title}</span>
          <span
            className="text-sm transition-transform duration-300"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              color: isOpen ? '#00609a' : '#9ca3af'
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
                    className="flex items-center justify-between w-full px-4 py-3 font-medium text-left transition-all duration-300 rounded-lg shadow-sm"
                    style={{
                      color: isSubmenuOpen ? '#00609a' : '#1f2937',
                      backgroundColor: isSubmenuOpen ? '#f0f7ff' : '#f3f4f6'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenSubmenu(isSubmenuOpen ? null : sectionKey);
                    }}
                  >
                    <span>{section.title}</span>
                    <span
                      className="text-xs transition-transform duration-300"
                      style={{
                        transform: isSubmenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: isSubmenuOpen ? '#00609a' : '#9ca3af'
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
                          className="block px-4 py-3 text-gray-700 transition-all duration-200 border-l-2 border-transparent rounded-lg hover:pl-6 hover:border-blue-400 hover:text-blue-800"
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
        
        .group:hover .group-hover\\:shadow-sm {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }
        
        .dropdown-item-hover:hover {
          background: linear-gradient(to right, rgba(0, 96, 154, 0.1), rgba(0, 96, 154, 0.15));
          color: #00609a;
          border-left-color: #00609a;
        }
        
        .section-header-hover:hover {
          background: linear-gradient(to right, rgba(0, 96, 154, 0.1), rgba(0, 96, 154, 0.15));
          border-left-color: #00609a;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        .nav-container {
          width: 100%;
          margin: 0 auto;
        }
        
        @media (min-width: 1280px) {
          .nav-container {
            width: 80%;
          }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      
      <div className="relative" ref={navbarRef}>
        {/* Top Announcement Bar */}
        <div className="w-full px-4 py-2 text-center text-white bg-blue-900">
          <p className="text-sm font-medium">Maya British College - Excellence in Higher Education</p>
        </div>
        
        <nav className="relative z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="mx-auto nav-container">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-0">
              {/* Logo & Title - Updated Section */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center transition-all duration-300">
                  <img 
                    src="/src/assets/mayalogo.jpg" 
                    alt="Maya British College Logo" 
                    className="object-contain h-16"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                    }}
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 
                    className="text-2xl font-bold tracking-tight"
                    style={{ 
                      color: '#00609a',
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: '0.5px'
                    }}
                  >
                    MAYA <span className="font-normal">British College</span>
                  </h1>
                  <p 
                    className="mt-1 text-xs font-medium text-gray-600"
                    style={{
                      letterSpacing: '0.5px'
                    }}
                  >
                    Affiliated to University of Central Lancashire, UK
                  </p>
                </div>
              </div>

              {/* Hamburger Menu Button */}
              <button 
                className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5 md:hidden transition-all duration-300 hover:bg-gray-100 rounded-lg"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span 
                  className="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-400"
                  style={{
                    transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0deg) translateY(0)',
                    backgroundColor: mobileMenuOpen ? '#00609a' : '#1f2937'
                  }}
                />
                <span 
                  className="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-400"
                  style={{
                    opacity: mobileMenuOpen ? 0 : 1,
                    transform: `scaleX(${mobileMenuOpen ? 0 : 1})`,
                    backgroundColor: mobileMenuOpen ? '#00609a' : '#1f2937'
                  }}
                />
                <span 
                  className="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-400"
                  style={{
                    transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0deg) translateY(0)',
                    backgroundColor: mobileMenuOpen ? '#00609a' : '#1f2937'
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
                    className={`flex items-center space-x-2 px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:shadow-sm relative overflow-hidden group ${
                      index === menuData.quickLinks.length - 1 ? 'bg-blue-900 text-white hover:bg-blue-800' : 'text-blue-900 hover:bg-blue-50'
                    }`}
                  >
                    {link.icon && (
                      <span 
                        className="text-lg transition-transform duration-300 material-icons group-hover:scale-110"
                        style={{ color: index === menuData.quickLinks.length - 1 ? 'white' : '#00609a' }}
                      >
                        {link.icon}
                      </span>
                    )}
                    <span>{link.title}</span>
                    {index !== menuData.quickLinks.length - 1 && (
                      <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-r from-blue-50 to-blue-100 group-hover:opacity-20" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Mobile Menu */}
            <div 
              className="overflow-hidden transition-all duration-500 ease-in-out bg-white md:hidden"
              style={{
                maxHeight: mobileMenuOpen ? '1000px' : '0px',
                opacity: mobileMenuOpen ? 1 : 0
              }}
            >
              <div className="px-4 py-5 border-t border-gray-200">
                {renderMobileDropdown('programs')}
                {renderMobileDropdown('departments')}
                
                <div className="mt-5 space-y-3">
                  {menuData.quickLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.link || "#"}
                      className={`flex items-center px-5 py-3 font-medium transition-all duration-300 rounded-lg ${
                        index === menuData.quickLinks.length - 1 ? 'bg-blue-900 text-white hover:bg-blue-800' : 'text-blue-900 hover:bg-blue-50'
                      }`}
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
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;