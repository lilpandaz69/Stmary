import React from 'react';
import { Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/Services';
import Footer from './components/Footer';
import DownloadCard from './components/DownloadCard';
import SocialLinks from './components/SocialLinks';
import MapSection from './components/Location';
import Nativity from './pages/feasts/lordly/Nativity';

// صفحة الـ Home
function Home() {
  return (
    <>
      <HeroSection />
      <DownloadCard />
      <SocialLinks />
      <MapSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feasts/lordly/nativity" element={<Nativity />} />
      </Routes>
    </>
  );
}

export default App;
