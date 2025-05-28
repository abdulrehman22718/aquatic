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
import Services from './Components/Services/Services';
import ServiceOne from './Components/Services/ServiceOne';
import ServiceTwo from './Components/Services/ServiceTwo';
import ServiceThree from './Components/Services/ServiceThree';
import ServiceFour from './Components/Services/ServiceFour';
import MagazineFeature from './Components/MagazineFeature';
import ContactUs from './Components/ContactUs';
import Gallery from './Components/Gallery';
import Financing from './Components/Financing';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <Router>
      <Preloader />
      <MobileMenu />
      <Header />


      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pebble-tec-plaster" element={<ServiceOne />} />
        <Route path="/concrete-pools" element={<ServiceTwo />} />
        <Route path="/fiber-glass-pools" element={<ServiceThree />} />
        <Route path="/leak-and-repair" element={<ServiceFour />} />
        <Route path="/magazine-feature" element={<MagazineFeature />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/financing" element={<Financing />} />
      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
