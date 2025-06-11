import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FacultyAndStaff from './Pages/FacultyAndStaff';
import NotFound from './Pages/NotFound';


const App = () => {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
       <Route path="/"  element={<Home/>}/>
       <Route path="/FacultyAndStaff"  element={<FacultyAndStaff/>}/>
       <Route path="*"  element={<NotFound/>}/>
       

       
    </Routes>     
    </BrowserRouter>



    </div>
  );
};

export default App;