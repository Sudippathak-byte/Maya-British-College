import React from 'react';
import MaintenanceAlert from '../Components/MaintenanceAlert';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import L5dc from '../Components/l5dc';
import L5dc1 from '../Components/L5dc1';

const L5DC = () => {
    return (
        <div>
            <MaintenanceAlert/>
            <Navbar/>
            <L5dc/>
            <L5dc1/>
            <Footer/>
            
        </div>
    );
};

export default L5DC;