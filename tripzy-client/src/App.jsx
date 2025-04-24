// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import AboutPage from './Components/Aboutpage';
import ServicesPage from './Components/ServicesPage';
import ContactPage from './Components/ContactPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is displayed on all pages */}
        <Navbar />
        
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        {/* Footer is displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
