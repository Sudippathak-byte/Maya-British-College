import React from 'react';

const InclusionHero = () => {
    return (
<div className="relative px-6 py-12 bg-white md:px-12 lg:px-24">
  {/* <!-- Top left blue line (40% width) --> */}
  <div className="absolute top-0 left-0 w-2/5 h-1 bg-sky-600"></div>
  
  {/* <!-- Bottom right blue line (40% width) --> */}
  <div className="absolute bottom-0 right-0 w-2/5 h-1 bg-sky-600"></div>

  <div className="flex flex-col items-center gap-12 mx-auto max-w-7xl md:flex-row">
    {/* <!-- Left content --> */}
    <div className="md:w-1/2">
      <h1 className="mb-8 text-4xl font-bold text-gray-800 md:text-5xl">We welcome all</h1>
      
      <p className="mb-8 text-lg leading-relaxed text-gray-600">
        Only when different values, experiences, and perspectives are met with free and open discourse can education be truly transformative. This is why we continue to work together as an institution, and within our community, to promote a more inclusive environment on our campus and beyond.
      </p>
      
      <a href="#" className="inline-block text-lg font-bold underline transition duration-200 text-sky-600 hover:text-sky-700 underline-offset-4">
        LEARN MORE
      </a>
    </div>
    
    {/* <!-- Right image --> */}
    <div className="md:w-1/2">
      <img src="/welcome.png" alt="Welcome illustration" className="w-full h-auto rounded-lg"/>
    </div>
  </div>
</div>
    );
};

export default InclusionHero;