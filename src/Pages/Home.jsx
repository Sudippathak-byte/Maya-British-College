import React from 'react';
import Navbar from '../Components/Navbar';
import Vedio from '../Components/Vedio';
import About from '../Components/About';
import UCLanHeroSection from '../Components/UCLanHeroSection';
import CoursesSection from '../Components/CoursesSection';
import InclusionHero from '../Components/InclusionHero';
import Footer from '../Components/Footer';
import TrustedPartners from '../Components/TrustedPartners';
import MaintenanceAlert from '../Components/MaintenanceAlert';




const Home = () => {
    return (
        <div>
            <MaintenanceAlert/>
            <Navbar/>
            <Vedio/>
            <About/>
            <UCLanHeroSection/>
            <CoursesSection/>
            <InclusionHero/>
            <TrustedPartners/>
            <Footer/>
        </div>
    );
};

export default Home;