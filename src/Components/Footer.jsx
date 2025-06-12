import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#00609a] text-white">
            {/* Full-width decorative top border */}
            <div className="h-1 bg-gradient-to-r from-white via-[#00609a] to-white opacity-30"></div>
            
            {/* Main content container with 80% width */}
            <div className="mx-auto w-[80%] py-12">
                {/* Logo and College name with elegant design */}
                <div className="flex flex-col items-center mb-16 group">
                    <div className="relative mb-4 transition-transform duration-500 group-hover:scale-105">
                        <div className="absolute inset-0 transition-all duration-500 rounded-full bg-white/10 blur-md group-hover:blur-lg"></div>
                       
                            <img 
                                src="/mayalogo.jpg" 
                                alt="MAYA British College Logo" 
                                className="object-contain h-16"
                            />
                        
                    </div>
                    <h2 className="font-serif text-3xl font-bold tracking-wider text-white uppercase">
                        MAYA British College
                    </h2>
                    <div className="w-32 h-1 mt-4 transition-all duration-300 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 group-hover:opacity-100 group-hover:w-40"></div>
                </div>
                
                {/* Rest of your footer content remains the same */}
                <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-3">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <h3 className="pb-3 font-serif text-xl font-semibold border-b border-white/30">Contact Us</h3>
                        <div className="space-y-4">
                            <p className="flex items-start">
                                <svg className="w-6 h-6 text-white mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="text-white/90">Kamal Pokhari, Opposite of Kamal Pokhari Apartment, G.P.O 44600, Kathmandu, Nepal</span>
                            </p>
                            <p className="flex items-center">
                                <svg className="flex-shrink-0 w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span className="text-white/90">+977-9860-140-513, 980190872</span>
                            </p>
                            <p className="flex items-center">
                                <svg className="flex-shrink-0 w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <span className="text-white/90">info@mayabritishcollege.edu.np</span>
                            </p>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="pb-3 font-serif text-xl font-semibold border-b border-white/30">Quick Links</h3>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {['Admissions', 'Courses', 'Faculty', 'Events', 'News', 'Gallery'].map((link) => (
                                <a 
                                    key={link} 
                                    href="#" 
                                    className="flex items-center transition-all duration-300 hover:text-white/100 text-white/80 hover:pl-2"
                                >
                                    <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Opening Hours */}
                    <div className="space-y-6">
                        <h3 className="pb-3 font-serif text-xl font-semibold border-b border-white/30">Opening Hours</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between pb-2 border-b border-white/10">
                                <span className="text-white/80">Sunday - Friday</span>
                                <span className="font-medium">7:00 AM - 5:00 PM</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-white/80">Saturday</span>
                                <span className="font-medium">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Social Media and Copyright */}
                <div className="pt-8 border-t border-white/20">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        {/* Social Media Icons */}
                        <div className="flex mb-6 space-x-5 md:mb-0">
                            {[
                                {name: 'facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'},
                                {name: 'instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'},
                                {name: 'twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'},
                                {name: 'linkedin', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'},
                                {name: 'youtube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'}
                            ].map((social) => (
                                <a 
                                    key={social.name} 
                                    href="#" 
                                    className="transition-colors duration-300 text-white/70 hover:text-white"
                                    aria-label={social.name}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                        
                        {/* Copyright */}
                        <div className="text-sm text-white/70">
                            <p>© {new Date().getFullYear()} MAYA British College. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;