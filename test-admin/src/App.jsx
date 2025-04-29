import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyLogin from './MyComponents/MyLogin.jsx';
import MyLecturer from './MyComponents/MyLecturer.jsx';
import MyAdmin from './MyComponents/MyAdmin.jsx';
import MyStudent from './MyComponents/MyStudent.jsx';
import Applicant from './MyComponents/ApplicantPage.jsx';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLogin />} /> 
        <Route path="/admin" element={<MyAdmin />} />
        <Route path="/Lecturer" element={<MyLecturer />} />
        <Route path="/student" element={<MyStudent />} />
        <Route path="/Applicant" element={<Applicant />} />
      </Routes>
    </BrowserRouter>
  );
};
  
export default App;
