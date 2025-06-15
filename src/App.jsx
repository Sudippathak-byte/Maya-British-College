import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FacultyAndStaff from './Pages/FacultyAndStaff';
import NotFound from './Pages/NotFound';
import BCIS from './Pages/BCIS';
import Cybersecurity from './Pages/Cybersecurity';
import L4DC from './Pages/L4DC';
import L5DC from './Pages/L5DC';


const App = () => {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
       <Route path="/"  element={<Home/>}/>
       <Route path="/programs/business-computing" element={<BCIS/>}/>
       <Route path="/programs/CyberSecurity" element={<Cybersecurity/>}/>
       <Route path="/programs/l4dc" element={<L4DC/>}/>
       <Route path="/programs/l5dc" element={<L5DC/>}/>
       <Route path="/FacultyAndStaff"  element={<FacultyAndStaff/>}/>
       <Route path="*"  element={<NotFound/>}/>

       

       
    </Routes>     
    </BrowserRouter>



    </div>
  );
};

export default App;