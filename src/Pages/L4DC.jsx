import React from 'react';
import MaintenanceAlert from '../Components/MaintenanceAlert';
import Navbar from '../Components/Navbar';

import L4dc from '../Components/L4dc';
import L4dc1 from '../Components/L4dc1';
import Footer from '../Components/Footer';

const L4DC = () => {
    return (
        <div>
            <MaintenanceAlert/>
            <Navbar/>
            <L4dc/>
            <L4dc1/>
            <Footer/>
            
        </div>
    );
};

export default L4DC;