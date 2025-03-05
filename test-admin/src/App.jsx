import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyLogin from './MyComponents/MyLogin.jsx';
import MyAdmin from './MyComponents/MyAdmin.jsx';
import MyStudent from './MyComponents/MyStudent.jsx';
import ApplicantForm from './MyComponents/ApplicantPage.jsx'



const App = () => {
  return (
  <BrowserRouter>
  <MyAdmin/>
  </BrowserRouter>

  );
};



export default App;
