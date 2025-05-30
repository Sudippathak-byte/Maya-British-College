import React from 'react';

const CourseCard = ({ 
  title, 
  university, 
  description, 
  level, 
  image, 
  onClick 
}) => {
  return (
    <div className="relative h-full group">
      {/* Card Container */}
      <div className="flex flex-col h-full overflow-hidden transition-all duration-500 bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2 transform-gpu">
        {/* Image with overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
              {level}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              {title}
            </h3>
            <p className="mb-4 text-sm font-medium text-gray-600">
              Offered by {university}
            </p>
            <p className="mb-6 text-gray-700">
              {description}
            </p>
          </div>

          {/* CTA Button with psychological effect */}
          <button 
            onClick={onClick}
            className="flex items-center justify-center w-full px-4 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 transform-gpu hover:shadow-md hover:from-blue-600 hover:to-blue-700 active:scale-95"
          >
            View Details
            <svg 
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-xl group-hover:opacity-100 bg-gradient-to-br from-blue-400/20 to-purple-400/10" />
    </div>
  );
};

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "BSc (Hons) Business Computing & Information Systems",
      university: "University of Central Lancashire (UCLan)",
      description: "Combine business acumen with technical expertise. Learn to develop IT solutions that drive modern enterprises forward.",
      level: "Undergraduate",
      image: "/Photo for Information System.jpg"
    },
    {
      id: 2,
      title: "BSc (Hons) Cyber Security & Networking",
      university: "University of Central Lancashire (UCLan)",
      description: "Master the art of protecting digital assets. Gain hands-on experience with cutting-edge security technologies.",
      level: "Undergraduate",
      image: "/Photo for Cyber Security.jpg"
    },
    {
      id: 3,
      title: "Bachelor of Business Studies (BBS)",
      university: "Tribhuvan University (TU)",
      description: "Build strong business fundamentals with Nepal's most prestigious business degree program.",
      level: "Undergraduate",
      image: "/bbs.png"
    },
    {
      id: 4,
      title: "Master of Business Studies (MBS)",
      university: "Tribhuvan University (TU)",
      description: "Elevate your business expertise with advanced management theories and practical applications.",
      level: "Graduate",
      image: "/mbs.png"
    }
  ];

  const handleCardClick = (courseId) => {
    // Handle navigation to course details page
    console.log(`Viewing details for course ${courseId}`);
    // In practice: router.push(`/courses/${courseId}`)
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our <span className="text-blue-600">Academic Programs</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Choose from our internationally recognized undergraduate and graduate programs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              university={course.university}
              description={course.description}
              level={course.level}
              image={course.image}
              onClick={() => handleCardClick(course.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;