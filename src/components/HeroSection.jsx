import React from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/HeroSection.css";

import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";

function HeroSection() {
  const slides = [
    {
      img: img1,
      title: "كنيسة السيدة العذراء مريم",
      text: "بيت للرب، ومكان للصلاة والخدمة والمحبة",
    },
    {
      img: img2,
      title: "صلواتنا ترتفع أمام الله",
      text: "نرحب بجميع أولاد الكنيسة في الاجتماعات والقداسات",
    },
    {
      img: img3,
      title: "أسرة الشمامسة",
      text: "  هوذا ما أحسن وما اجمل سكن الأخوة معا ( مز 133-1) ",
    },
  ];

  return (
    <header className="hero-slider">
      <Carousel fade interval={3000}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="overlay"></div>

              <div className="hero-content text-center">
                <h1 className="fw-bold">{slide.title}</h1>
                <p className="lead mt-3">{slide.text}</p>
                <a href="#services" className="btn btn-light mt-4 px-5">
                  اعرف المزيد
                </a>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </header>
  );
}

export default HeroSection;
