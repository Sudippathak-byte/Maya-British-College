import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const L5dc1 = () => {
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

        <a href="https://www.nccedu.com/qualifications/diplomas/ncc-education-level-5-diploma-in-computing-l5dc/" target='_main'><strong><b><u>NCC Education Level 5 Diploma in Computing (L5DC)</u></b></strong></a>   

        <div>
          <p className="font-['Roboto',sans-serif] text-[16px] leading-relaxed mb-6">
            The NCC Education Level 5 Diploma in Computing (L5DC) is an Ofqual regulated qualification. The qualification (with specialisms) makes up the second year of the NCC Education degree journey and builds upon the knowledge gained during the NCC Education Level 4 Diploma in Computing (L4DC) or the NCC Education Level 4 Diploma in Computing with Business Management (L4DC BM), exposing students to greater detail and more advanced topics in a range of areas including database development, information systems analysis, network security and cryptography.
          </p>
          <p className="font-['Roboto',sans-serif] text-[16px] leading-relaxed mb-6">
            Students will study a balance of academic and vocational subjects in order to provide the necessary knowledge and skills to play a significant role in IT organisations. On successful completion of the qualification students will be able to complete the final year of a degree with the NCC Education Business Computing and Information Systems Top Up validated by the University of Central Lancashire (UCLan), the University of Greenwich Computing Top-Up delivered at our Accredited Partner Centres, at one of the many universities that recognise NCC Education qualifications, or pursue a career in the IT industry. Only students who complete the Level 5 Diploma with Cyber Security (L5DC CS) specialism can then progress onto BSc (Hons) Cyber Security and Networking Top-Up Degree. 
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
                          Students must pass all four specialist units and two elective units  <br /><br />
                          <strong>Specialist Units: </strong><br /><br />
                          <ul>
                            <li>  -Networking Security and Cryptography</li>
                            <li>  -Computing Project</li>
                            <li>  -Agile Development</li>
                            <li>  -Mobile App Developments</li>
                          </ul><br />
                          <strong>Elective Units: </strong><br /><br />
                          <ul>
                            <li>  -Data Analysis and Visualisation with Python</li>
                            <li>  -Artificial Intelligence</li>
                            <li>  -Back End Web Development</li>
                            <li>  -Introduction to Data Science and Big Data</li>
                            <li>  -IT Project Management</li>
                            <li>  -Professional and Career Development in IT</li>
                            <li>  -Analysis, Design and Implementation</li>
                          </ul>
                        </>
                      )}
                      {section === 'Entry Requirements' && (
                        <>
                          <strong>For entry onto the NCC Education L5DC qualication students must have at least
                          one of the following:</strong><br /><br />
                          -NCC Education Level 4 Diploma in Computing (L4DC)<br /><br />
                          <strong>OR</strong><br /><br />
                          -A local or international qualification which is deemed to be of a similar level to the NCC Education L4DC qualification.
                        </>
                      )}
                      {section === 'Accreditation Status' && (
                        <>
                          NCC Education is accredited to award the Level 5 Diploma in Computing by Ofqual (Office of Qualifications and Examinations Regulation) in England. Ofqual Qualification reference number 600/3055/0.
                        </>
                      )}
                      {section === 'Academic Progression' && (
                        <>
                          Students that complete the NCC Education Level 5 Diploma in Computing (L5DC) can enrol onto NCC Education’s final year top-up degrees: <br />
                          <br />
                          - The BSc (Hons) Business Computing and Information Systems top-up degree is delivered online by NCC Education and is validated and awarded by the University of Central Lancashire (UCLan) <br />
                          <br />
                          - The BSc (Hons) Computing top-up degree is delivered at selected NCC Education Accredited Partner Centres and is awarded by the University of Greenwich 
                          <br /><br />
                          - Or apply to Year 3 of a university degree programme.
                       
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

export default L5dc1;