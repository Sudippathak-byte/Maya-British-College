import React from 'react';

const Footer = () => {
    return (
        <footer className="px-6 pt-12 pb-8 font-sans text-gray-800 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
            <div className="mx-auto max-w-7xl">
                {/* Logo and College name with elegant animation */}
                <div className="flex flex-col items-center mb-12 group">
                    <img 
                        src="/maya logo.jpg" 
                        alt="MAYA Logo" 
                        className="h-16 mb-4 transition-transform duration-500 group-hover:scale-110"
                    />
                    <h2 className="text-2xl font-bold tracking-wider text-indigo-700 uppercase transition-colors duration-300 group-hover:text-indigo-900">
                        MAYA British College
                    </h2>
                    <div className="w-24 h-1 mt-2 bg-indigo-500 rounded-full opacity-80"></div>
                </div>
                
                {/* Main content grid */}
                <div className="grid grid-cols-1 gap-10 mb-12 md:grid-cols-3">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="pb-2 text-lg font-semibold text-gray-900 border-b border-gray-200">Contact Us</h3>
                        <div className="space-y-2">
                            <p className="flex items-start">
                                <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>Kamal Pokhari, Opposite of Kamal Pokhari Apartment, G.P.O 44600, Kathmandu, Nepal</span>
                            </p>
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span>+977-9860-140-513, 980190872</span>
                            </p>
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <span>info@mayabritishcollege.edu.np</span>
                            </p>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="pb-2 text-lg font-semibold text-gray-900 border-b border-gray-200">Quick Links</h3>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <a href="#" className="flex items-center transition-colors duration-200 hover:text-indigo-700">
                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                Admissions
                            </a>
                            <a href="#" className="flex items-center transition-colors duration-200 hover:text-indigo-700">
                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                Courses
                            </a>
                            <a href="#" className="flex items-center transition-colors duration-200 hover:text-indigo-700">
                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                Faculty
                            </a>
                            <a href="#" className="flex items-center transition-colors duration-200 hover:text-indigo-700">
                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                Events
                            </a>
                            <a href="#" className="flex items-center transition-colors duration-200 hover:text-indigo-700">
                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                News
                            </a>
                            <a href="#" className="flex items-center transition-colors duration-200 hover:text-indigo-700">
                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                Gallery
                            </a>
                        </div>
                    </div>
                    
                    {/* Newsletter Subscription */}
                    <div className="space-y-4">
                        <h3 className="pb-2 text-lg font-semibold text-gray-900 border-b border-gray-200">Stay Updated</h3>
                        <p className="text-gray-600">Subscribe to our newsletter for the latest updates and news.</p>
                        <form className="mt-4 space-y-3">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                            <button 
                                type="submit" 
                                className="w-full px-4 py-2 font-medium text-white transition duration-300 transform bg-indigo-600 rounded-lg hover:bg-indigo-700 hover:scale-105"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                
                {/* Social Media and Copyright */}
                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        {/* Social Media Icons */}
                        <div className="flex mb-4 space-x-6 md:mb-0">
                            {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube'].map((social) => (
                                <a 
                                    key={social} 
                                    href="#" 
                                    className="text-gray-500 transition-colors duration-300 hover:text-indigo-600"
                                    aria-label={social}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        {/* Icons would be placed here */}
                                    </svg>
                                </a>
                            ))}
                        </div>
                        
                        {/* Copyright */}
                        <div className="text-sm text-gray-500">
                            <p>© {new Date().getFullYear()} MAYA British College. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;