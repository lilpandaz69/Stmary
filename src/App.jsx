import React from 'react';
import { Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/Services';
import Footer from './components/Footer';
import DownloadCard from './components/DownloadCard';
import SocialLinks from './components/SocialLinks';
import CommentsWidget from './components/CommentsWidget';
import Events from "./pages/Events";
import NativityPage from "./pages/NativityPage";
import HolyWeekPage from "./pages/HolyWeekPage";
import ComingSoon from "./pages/ComingSoon";

// صفحة الـ Home
function Home() {
  return (
    <>
      <HeroSection />
      <DownloadCard />
      <SocialLinks />
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
        <Route path="/events" element={<Events />} />
        <Route path="/events/nativity" element={<NativityPage />} />
        <Route path="/events/holy-week" element={<HolyWeekPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

      </Routes>
    </>
  );
}

export default App;
