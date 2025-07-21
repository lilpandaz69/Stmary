import React from 'react';
import '../assets/css/HeroSection.css';
import heroImg from '../assets/img/1.jpg';

function HeroSection() {
  return (
    <header
      className="hero-section text-center text-white d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold">  كنيسة السيدة العذراء مريم</h1>
        <p className="lead mt-3">بيت للرب، ومكان للصلاة والخدمة والمحبة</p>
        <a href="#services" className="btn btn-light mt-4 px-5">اعرف المزيد</a>
      </div>
    </header>
  );
}

export default HeroSection;
