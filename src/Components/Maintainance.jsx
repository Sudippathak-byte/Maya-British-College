import React from 'react';

const Maintainance = () => {
    return (
        <div>
<section className="relative py-24">
  <div className="w-full px-4 mx-auto max-w-7xl md:px-5 lg:px-5">
    <div className="inline-flex flex-col items-center justify-center w-full gap-10 lg:gap-14">
      {/* Maya British College Logo */}
      <div className="flex justify-center w-full">
        <img 
          src="/mayalogo.jpg"  
          alt="Maya British College Logo"
          className="object-contain h-16"  
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-5">
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <div className="w-full flex-col justify-start items-center gap-2.5 flex">
            <h2 className="text-3xl font-bold leading-normal text-center text-gray-800 font-manrope">
              Please bear with us! We're currently under maintenance.
            </h2>
            <p className="text-base font-normal leading-relaxed text-center text-gray-500">
              We're working hard to fix the issues and improve your experience.
            </p>
          </div>
        </div>
        <img 
          src="https://pagedone.io/asset/uploads/1718004199.png" 
          alt="Under maintenance illustration" 
          className="object-cover max-w-md"
        />
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Maintainance;