import React from 'react';
import Navbar from '../Components/Navbar';
import Vedio from '../Components/Vedio';
import About from '../Components/About';
import UCLanHeroSection from '../Components/UCLanHeroSection';
import CoursesSection from '../Components/CoursesSection';
import InclusionHero from '../Components/InclusionHero';
import Footer from '../Components/Footer';



const Home = () => {
    return (
        <div>
            <Navbar/>
            <Vedio/>
            <About/>
            <UCLanHeroSection/>
            <CoursesSection/>
            <InclusionHero/>
            <Footer/>
        </div>
    );
};

export default Home;