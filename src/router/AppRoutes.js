import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../screens/Home/index.js';
import Login from '../screens/Login/index.js';
import Account from '../screens/Account/index.js';


const AppRoutes = ({activeBtnId}) => {
  return (

      <Routes>
            <Route path="/" element={<Login/>} />
            <Route  path="/home" element={<Home/>} />
            <Route path="/account" element={<Account/>} />
      </Routes> 
    );
};

export default AppRoutes;
