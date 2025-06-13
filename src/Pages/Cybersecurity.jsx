import React from 'react';
import MaintenanceAlert from '../Components/MaintenanceAlert';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Cyber from '../Components/Cyber';
import Course from '../Components/Course';

const Cybersecurity = () => {
    return (
        <div>
            <MaintenanceAlert/>
            <Navbar/>
            <Cyber/>
            <Course/>
            <Footer/>
        </div>
    );
};

export default Cybersecurity;