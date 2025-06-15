import React, { useState } from 'react';

const CyberSecurity1 = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <style>
        {`
          @keyframes slideDown {
            from {
              max-height: 0;
              opacity: 0;
            }
            to {
              max-height: 500px;
              opacity: 1;
            }
          }
          .animate-slide-down {
            animation: slideDown 0.3s ease-out;
            overflow: hidden;
          }
        `}
      </style>
      <div className="bg-[#00609a] text-white py-10">
        <div className="mx-auto w-[80%] mt-10 px-4 flex flex-col lg:flex-row items-start">
          <a
            href="https://www.nccedu.com/qualifications/professional-development/cyber-security/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ncclogo.jpg"
              alt="NCC Education Logo"
              className="w-[160px] h-[140px] mr-6 mb-4 lg:mb-0 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </a>
          <div>
            <a
              href="https://www.nccedu.com/qualifications/professional-development/cyber-security/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                <u>Cyber Security</u>
              </strong>
            </a>
            <p className="font-['Roboto',sans-serif] text-[16px] leading-relaxed mb-6">
              Participants will gain knowledge of the fundamental principles, underlying theory, and practical skills employed in securing information and networks.
            </p>
            <p className="font-['Roboto',sans-serif] text-[16px] leading-relaxed mb-6">
              The Cyber Security short course will provide participants with knowledge of the fundamental principles, underlying theory, and practical skills employed in securing information and networks.
            </p>
            <p className="font-['Roboto',sans-serif] text-[16px] leading-relaxed mb-6">
              It will allow learners to assess the security risks inherent in computer networks and the technologies that can be employed to counter such risks. It covers cryptographic algorithms, including practical examples of breaking codes. As a practical course that teaches the principles of network security and cryptography, our Cyber Security short course allows learners to acquire and demonstrate their practical, work-ready skills in this field.
            </p>
            <div className="overflow-hidden border-2 border-white rounded-lg">
              {['Units', 'Entry Requirements', 'Related National Occupation Standards'].map((section) => (
                <div key={section} className="border-b border-white last:border-b-0">
                  <div
                    className="flex items-center justify-between p-4 transition-colors bg-gray-800 cursor-pointer hover:bg-gray-700"
                    onClick={() => toggleSection(section)}
                  >
                    <h3 className="font-['Roboto',sans-serif] text-[18px] font-semibold">{section}</h3>
                    <span
                      className="text-xl transition-transform duration-300"
                      style={{ transform: openSection === section ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      ▼
                    </span>
                  </div>
                  {openSection === section && (
                    <div className="p-4 bg-gray-700 animate-slide-down">
                      <p className="font-['Roboto',sans-serif] text-[14px] leading-relaxed">
                        {section === 'Units' && (
                          <>
                              <ul className="pl-5 list-disc">
                              <li>Cryptography Fundamentals</li>
                              <li>Public-Key Infrastructure</li>
                              <li>Web Security</li>
                              <li>Email Security</li>
                              <li>Data Protection</li>
                              <li>Vulnerability Assessment</li>
                              <li>Authentication</li>
                              <li>Access Control</li>  
                              <li>Firewalls</li>
                              <li>VPN</li>
                              <li>Remote Access</li>
                              <li>Wireless Security</li>                              
                            </ul>
                            <br />
                          </>
                        )}
                        {section === 'Entry Requirements' && (
                          <>
                            As a minimum, participants should have:
                            <ul className="pl-5 list-disc">
                                <li>Good IT knowledge</li>
                                <li>Good understanding of English</li>
                            </ul>
                          </>
                        )}
                        {section === 'Related National Occupation Standards' && (
                          <>
                            Manage IT/technology security management process, requirements and systems.
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
              <div className="p-5 border-2 border-white">
        <h2 className="font-['Roboto',sans-serif] text-[24px] text-white mb-4">Download Course PDF</h2>
        <div className="w-full overflow-x-auto whitespace-nowrap">
          <a href="/public/cybersecurity3.pdf" target="_blank" rel="noopener noreferrer" className="inline-block p-2 mr-2 text-white bg-gray-800 rounded hover:bg-gray-700">
            Unit Specification
          </a>
                    <a href="/public/cybersecurity3.pdf" target="_blank" rel="noopener noreferrer" className="inline-block p-2 mr-2 text-white bg-gray-800 rounded hover:bg-gray-700">
            Flyer
          </a>
          <a href="/public/cybersecurity2.pdf" target="_blank" rel="noopener noreferrer" className="inline-block p-2 mr-2 text-white bg-gray-800 rounded hover:bg-gray-700">
            5 Reason To study Cyber Security
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CyberSecurity1;