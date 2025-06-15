import React from 'react';
import MaintenanceAlert from '../Components/MaintenanceAlert';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CyberSecurity from '../Components/CyberSecurity';
import CyberSecurity1 from '../Components/CyberSecurity1';

const Cybersecurity = () => {
    return (
        <div>
            <MaintenanceAlert/>
            <Navbar/>
            <CyberSecurity/>
            <CyberSecurity1/>
            <Footer/>
        </div>
    );
};

export default Cybersecurity;