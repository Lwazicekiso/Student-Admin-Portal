import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyLogin from './MyComponents/MyLogin.jsx';
import MyAdmin from './MyComponents/MyAdmin.jsx';
import MyStaff from './MyComponents/MyStaff.jsx';
import MyStudent from './MyComponents/MyStudent.jsx';

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route index path="/" element={<MyLogin/>} />
        <Route path="/admin" element={<MyAdmin/>} />
        <Route path="/staff" element={<MyStaff/>} />
        <Route path="/student" element={<MyStudent/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;