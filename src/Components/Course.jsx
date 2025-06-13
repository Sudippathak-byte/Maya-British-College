import React from 'react';

const Course = () => {
  return (
    <div className="bg-[#00609a] text-white mx-auto w-[80%] py-10">
      <div className="flex items-center justify-between mb-10">
        <img
          src="/BCIS1.jpg" // Replace with your first image URL
          alt="Course Image 1"
          className="w-1/2 h-auto max-h-[400px] object-contain transition-transform duration-300 ease-in-out hover:scale-150"
        />
        <img
          src="/BCIS2.jpg" // Replace with your second image URL
          alt="Course Image 2"
          className="w-1/2 h-auto max-h-[400px] object-contain transition-transform duration-300 ease-in-out hover:scale-150"
        />
      </div>
      <div className="p-5 border-2 border-white">
        <h2 className="font-['Roboto',sans-serif] text-[24px] text-white mb-4">Download Course PDF</h2>
        <div className="w-full overflow-x-auto whitespace-nowrap">
          <a href="/public/brochure.pdf" target="_blank" rel="noopener noreferrer" className="inline-block p-2 mr-2 text-white bg-gray-800 rounded hover:bg-gray-700">
            View PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Course;