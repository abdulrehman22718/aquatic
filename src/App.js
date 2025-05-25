import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './Components/Preloader';
import Header from './Components/Header';
import HomePageContent from './Components/HomePageContent';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import MobileMenu from './Components/MobileMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Preloader />
         <Header onToggleMenu={() => setMenuOpen(true)} />
      {menuOpen && <MobileMenu onCloseMenu={() => setMenuOpen(false)} />}
     
      
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
