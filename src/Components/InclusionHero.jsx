import React from 'react';

const InclusionHero = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00609a] to-transparent opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00609a] to-transparent opacity-30"></div>
            
            {/* Content container with 80% width */}
            <div className="mx-auto w-full max-w-[80%] py-16">
                <div className="flex flex-col items-center gap-12 lg:flex-row">
                    {/* Left content */}
                    <div className="lg:w-1/2">
                        <h1 className="mb-8 text-4xl font-bold text-[#00609a] md:text-5xl lg:text-6xl font-serif tracking-tight">
                            We welcome all
                        </h1>
                        
                        <p className="mb-8 text-lg leading-relaxed text-gray-700">
                            Only when different values, experiences, and perspectives are met with free and open discourse can education be truly transformative. This is why we continue to work together as an institution, and within our community, to promote a more inclusive environment on our campus and beyond.
                        </p>
                        
                        <a 
                            href="#" 
                            className="inline-block px-6 py-3 text-lg font-semibold text-white transition duration-200 bg-[#00609a] rounded-lg hover:bg-[#004a7a] shadow-md hover:shadow-lg"
                        >
                            LEARN MORE
                        </a>
                    </div>
                    
                    {/* Right image - full width within container */}
                    <div className="w-full lg:w-1/2">
                        <div className="overflow-hidden rounded-lg shadow-xl">
                            <img 
                                src="/welcome.png" 
                                alt="Welcome illustration" 
                                className="object-cover w-full h-auto transition duration-500 transform hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute top-1/4 right-0 w-16 h-16 rounded-full bg-[#00609a] opacity-10 -translate-y-1/2"></div>
            <div className="absolute bottom-1/3 left-0 w-24 h-24 rounded-full bg-[#00609a] opacity-10 translate-y-1/2"></div>
        </div>
    );
};

export default InclusionHero;