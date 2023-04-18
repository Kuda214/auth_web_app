import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../screens/Home/index.js';
import Login from '../screens/Login/index.js';
import Account from '../screens/Account/index.js';
import Unauthorized from '../screens/Unauthorized';


const AppRoutes = ({activeBtnId}) => {
  return (

      <Routes>
            <Route path="/" element={<Login/>} />
            <Route  path="/home" element={<Home/>} />
            <Route path="/account" element={<Account/>} />
            <Route path='/unauthorized' element={<Unauthorized/>} />
      </Routes> 
    );
};

export default AppRoutes;
