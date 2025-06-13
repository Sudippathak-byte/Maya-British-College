import React from 'react';

const Bcis = () => {
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
          Bsc.(Hons) Business, Computing & Information System (Specialization in Computing, Data Science & AI)
        </h2>
        <p className="font-['Roboto',sans-serif] text-[16px] text-white mt-5 leading-relaxed">
          This degree is designed for those wishing to become IT practitioners in a business environment. It is a practical degree covering both technical and theoretical issues relating to the development, management and maintenance of information systems and applications.
          <br /><br />
          As part of the degree you will gain experience of project management of IT development, appreciate security issues in IT, understand management and planning of IT within an organisation, and develop skills in software and database development. Course content includes understanding of business organisations, structures and business functions and how IT is used in such environments, learning how to design and build IT systems including database design and software development techniques, and understanding the legal and social impact of using IT.
          <br /><br />
          You will learn how to put personal and professional skills and ideas into practice, working both individually and in teams, in preparation for careers in industry and the commercial world.
          <br /><br />
          The aims of the programme are:
          <ul className="pl-5 text-left list-disc">
            <li>To educate in the theory, technology, practice and application of computing and the development of information systems</li>
            <li>To give a coherent and integrated learning experience relevant to the needs of future computing professionals</li>
            <li>To provide awareness of social, legal, ethical and political implications of information technology within a computing environment.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Bcis;