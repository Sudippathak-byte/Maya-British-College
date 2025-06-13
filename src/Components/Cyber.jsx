import React from 'react';

const Cyber = () => {
  return (
    <div className="bg-[#00609a] text-white">
      <div className="bg-[#cccccc] py-[30px] w-full">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Featured"
          className="w-full h-[185px] object-cover"
        />
      </div>
      <div className="mx-auto w-[80%] text-center py-5">
        <h1 className="font-['Roboto',sans-serif] text-[32px] text-white">
          Undergraduate
        </h1>
      </div>
      <div className="mx-auto w-[80%] mt-10">
        <h2 className="font-['Roboto',sans-serif] text-[30px] text-white">
        Bsc.(Hons) CYBER SECURITY AND Networking
        </h2>
        <p className="font-['Roboto',sans-serif] text-[16px] text-white mt-5 leading-relaxed">
        Awarded by the University of Central Lancashire (UCLan), this programme is designed to equip students with the critical skills and knowledge required to protect digital infrastructure in today fast-evolving cyber landscape. The degree blends core networking principles with advanced cyber security practices, preparing graduates for high-demand role in IT security, network administration, and system protection.  
          <br /><br />
        Graduate of this programme have the opportunity to sit for globally recognized industry certifications Such as <b>CompTIA CySA+ or CompTIA Cloud+</b> upon completion, allowing them to graduate with both an academic degree and a professional certificate.

          <ul className="pl-5 text-left list-disc">
            <li><b>Cloud+ :</b> This certification validates a professional's ability in cloud architecture and design, security, automation, virtualization, and disaster recovery-key areas for modern IT infrastructure Roles</li>
            <li><b>CySA+ :</b> This certification demonstrates a candidate's competence in conducting threat detection, vulnerability analysis, and security monitoring to identify and mitigate risks within an organization of any size.</li>
            
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Cyber;