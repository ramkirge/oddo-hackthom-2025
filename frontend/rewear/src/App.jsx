// ReWear App - Full Frontend Routing and Screens

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ItemDetail from './pages/ItemDetail';
import AddItemPage from './pages/AddItemPage';
import AdminPanel from './pages/AdminPanel';
import Nav from './components/Nav';
//<Route path="/dashboard" element={<Dashboard />} />
//        <Route path="/dashboard" element={<Dashboard />} />
  //      <Route path="/add-item" element={<AddItemPage />} />
    //    <Route path="/admin" element={<AdminPanel />} />

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/add-item" element={<AddItemPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
