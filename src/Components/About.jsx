import React from 'react';

const About = () => {
    return (
        <>
        <section className="bg-white ">
    <div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-900">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-800">Progress With <br /> MAYA British College </h2>
            <p className="mb-4">MAYA British College is dedicated to transforming higher education in Nepal by providing internationally recognized and industry relevant qualification. In academic partnership with the University of Central Lancashire(Uclan), Uk, MAYA British College is redefining the academic landscape with a bold vision-bridging the gap between academic learning and real-world industry demands. The college's commitment to academic excellence is reflected in its inclusive, affordable approach that delivers international standards while embracing core local values. </p>
            
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="/public/Photo of Maya College.webp" alt="MAYA College"/>
            <img className="w-full mt-4 rounded-lg lg:mt-10" src="/public/Photo of UCLan.jpg" alt="Uclan University"/>
        </div>
    </div>
</section>
        </>
    );
};

export default About;