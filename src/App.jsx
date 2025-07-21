import React from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/Services';
import Footer from './components/Footer';
import DownloadCard from './components/DownloadCard';
import SocialLinks from './components/SocialLinks';
import MapSection from './components/Location';
function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <DownloadCard />
        <SocialLinks />
        <MapSection / >
      <ServicesSection />
      <Footer />
      
    </>
  );
}

export default App;
