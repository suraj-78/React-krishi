import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed from Switch to Routes
import Header from './components/Header';
import LoginBox from './components/LoginBox';
import FarmerLogin from './components/FarmerLogin';
import FarmerSignup from './components/FarmerSignup';
import ContractorLogin from './components/ContractorLogin';
import ContractorSignup from './components/ContractorSignup';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<LoginBox />} />
          <Route path="/farmer-login" element={<FarmerLogin />} />
          <Route path="/farmer-signup" element={<FarmerSignup />} />
          <Route path="/contractor-login" element={<ContractorLogin />} />
          <Route path="/contractor-signup" element={<ContractorSignup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
