import React from 'react';

const CourseCard = ({ 
  title, 
  provider, 
  description, 
  level, 
  image, 
  onClick 
}) => {
  return (
    <div className="relative h-full group">
      {/* Card Container */}
      <div className="flex flex-col h-full overflow-hidden transition-all duration-500 bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2 transform-gpu">
        {/* Image with overlay */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {image ? (
            <>
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-[#00609a] to-[#003a5c]">
              <span className="text-4xl font-bold text-white opacity-80">{level.charAt(0)}</span>
            </div>
          )}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-[#00609a]">
              {level}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">
              {title}
            </h3>
            <p className="mb-4 text-sm font-medium text-[#00609a]">
              Offered by {provider}
            </p>
            <p className="mb-6 text-gray-600 line-clamp-3">
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onClick}
            className="flex items-center justify-center w-full px-4 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-[#00609a] hover:bg-[#004a76] active:scale-95"
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
    </div>
  );
};

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Level 4 Diploma in Computing",
      provider: "NCC Education",
      description: "The NCC Education Level 4 Diploma in Computing (L4DC) is an Ofqual regulated qualification. The qualification makes up the first year of a Computing/IT degree pathway, equivalent to the first year of an IT degree in the UK university system.",
      level: "Level 4",
      image: "/L4dc.png"
    },
    {
      id: 2,
      title: "Level 5 Diploma in Computing",
      provider: "NCC Education",
      description: "The NCC Education Level 5 Diploma in Computing (L5DC) is an Ofqual regulated qualification. The qualification (with specialisms) makes up the second year of the NCC Education degree journey.",
      level: "Level 5",
      image: "/L5dc.jpg"
    },
    {
      id: 3,
      title: "BSc (Hons) Business Computing & Information Systems",
      provider: "University of Central Lancashire (UCLan)",
      description: "Combine business acumen with technical expertise. Learn to develop IT solutions that drive modern enterprises forward.",
      level: "Undergraduate",
      image: "/PhotoforInformationSystem.jpg"
    },
    {
      id: 4,
      title: "BSc (Hons) Cyber Security & Networking",
      provider: "University of Central Lancashire (UCLan)",
      description: "Master the art of protecting digital assets. Gain hands-on experience with cutting-edge security technologies.",
      level: "Undergraduate",
      image: "/PhotoforCyberSecurity.jpg"
    },
    {
      id: 5,
      title: "Short Course in Cyber Security",
      provider: "NCC Education",
      description: "A focused program covering essential cybersecurity concepts, tools, and techniques for professionals looking to enhance their security skills.",
      level: "Short Course",
      image: "/cybersecurity.png"
    }
  ];

  const handleCardClick = (courseId) => {
    // Handle navigation to course details page
    console.log(`Viewing details for course ${courseId}`);
    // In practice: router.push(`/courses/${courseId}`)
  };

  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our <span className="text-[#00609a]">Academic Programs</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Internationally recognized qualifications that open doors to global opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.slice(0,4).map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              provider={course.provider}
              description={course.description}
              level={course.level}
              image={course.image}
              onClick={() => handleCardClick(course.id)}
            />
          ))}
        </div>

        {/* Additional row for the 5th course */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.slice(4).map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              provider={course.provider}
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