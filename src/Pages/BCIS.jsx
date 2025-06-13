import React from 'react';
import MaintenanceAlert from './../Components/MaintenanceAlert';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Bcis from '../Components/Bcis';
import Course from '../Components/Course';

const BCIS = () => {
    return (
       <div>
       <MaintenanceAlert/>
       <Navbar/>
       <Bcis/>
       <Course/>
       <Footer/>
       </div>
    );
};

export default BCIS;