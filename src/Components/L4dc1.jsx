import React, { useState } from 'react';

const L4dc1 = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-[#00609a] text-white py-10">
      <div className="mx-auto w-[80%] mt-10 px-4 flex-col lg:flex-row items-start">
        <a href="https://www.nccedu.com/qualifications/diplomas/ncc-education-level-4-diploma-in-computing-l4dc/" target="_blank" rel="noopener noreferrer">
          <img
            src="/ncclogo.jpg" // Replace with your NCC Education logo PNG path
            alt="NCC Education Logo"
            className="w-[160px] h-[140px] mr-6 mb-4 lg:mb-0 transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </a>      
        <div>
          <p className="font-['Roboto',sans-serif] text-[16px] leading-relaxed mb-6">
            The NCC Education Level 4 Diploma in Computing (L4DC) is an Ofqual regulated qualification. The qualification makes up the first year of a Computing/ IT degree pathway. The qualification is equivalent to the first year of an IT degree in the UK university system.
          </p>
          <p className="font-['Roboto',sans-serif] text-[16px] leading-relaxed mb-6">
            Students will be given the opportunity to develop essential thinking and study skills, not only within the computing domain, but also within the context of business through a balance of academic and vocational subjects.
            <br /><br />
            The qualification will allow them to understand and enter the computing profession with the necessary knowledge expected within the industry and the ability to apply the skills to a range of IT-related functions.
            <br /><br />
            On successful completion of the qualification students will be able to embark on NCC Education’s Level 5 Diploma in Computing (L5DC), which is equivalent to the second year of a UK Bachelor’s degree, transfer to a university or pursue a career in the IT industry.
            <br /><br />
            Approved by the Institute for Apprenticeships and Technical Education (IFATE) in England as a Higher Technical Qualification (HTQ).
          </p>
          <div className="overflow-hidden border-2 border-white rounded-lg">
            {['Units', 'Entry Requirements', 'Accreditation Status', 'Academic Progression'].map((section) => (
              <div key={section} className="border-b border-white last:border-b-0">
                <div
                  className="flex items-center justify-between p-4 transition-colors bg-gray-800 cursor-pointer hover:bg-gray-700"
                  onClick={() => toggleSection(section)}
                >
                  <h3 className="font-['Roboto',sans-serif] text-[18px] font-semibold">{section}</h3>
                  <span className="text-xl transition-transform duration-300" style={{ transform: openSection === section ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                  </span>
                </div>
                {openSection === section && (
                  <div className="p-4 bg-gray-700 animate-slide-down">
                    <p className="font-['Roboto',sans-serif] text-[14px] leading-relaxed">
                      {section === 'Units' && (
                        <>
                          Students must complete the 5 core units and the 3 specialist units <br /><br />
                          <strong>Five core units</strong><br />
                          <ul>
                            <li>  -Algorithms and Mathematical Concepts for Computing</li>
                            <li>  -Computer Networks</li>
                            <li>  -Computer Systems</li>
                            <li>  -Databases</li>
                            <li>  -Front End Web Development</li>
                          </ul><br />
                          <strong>Mandatory Specialist Units</strong><br />
                          <ul>
                            <li>  -Object Oriented System Analysis and Design</li>
                            <li>  -Software Engineering</li>
                            <li>  -Designing and Developing Object-Oriented Computer Programmes</li>
                          </ul>
                        </>
                      )}
                      {section === 'Entry Requirements' && (
                        <>
                          For entry onto the NCC Education L4DC qualification students must have at least one of the following:<br /><br />
                          - Holders of the NCC Education Level 3 International Foundation Diploma for Higher Education Studies (L3IFDHES).<br />
                          - Holders of the NCC Education Level 3 Diploma in Computing (L3DC) (RQF).<br />
                          - Holders of any local or international qualification deemed to be a similar level to either L3DC or L3IFDHES. These are to be agreed in advance with NCC Education.<br />
                          - Holders of one ‘A’ level or equivalent or an appropriate School Leaver’s certificate deemed to be of a similar level passed and approved by NCC Education.<br />
                          - Mature students, able to demonstrate over two years’ relevant work experience and have an ‘O’ Level/GCSE/iGCSE English and Maths or equivalent.
                        </>
                      )}
                      {section === 'Accreditation Status' && (
                        <>
                          NCC Education is regulated by Ofqual (Office of Qualifications and Examinations Regulation) to award the Level 4 Diploma in Computing in England. Ofqual Qualification reference number 600/0406/X
                        </>
                      )}
                      {section === 'Academic Progression' && (
                        <>
                          The qualification allows students entry to either the NCC Education Level 5 Diploma in Computing, (which is equivalent to the second year of a UK Bachelor’s degree), or the second year of many UK university degree courses, or enables you to pursue a career in the IT industry.
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS for slide-down animation
const styles = `
  @keyframes slideDown {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 500px; /* Adjust based on content height */
      opacity: 1;
    }
  }
  .animate-slide-down {
    animation: slideDown 0.3s ease-out;
    overflow: hidden;
  }
`;

export default L4dc1;