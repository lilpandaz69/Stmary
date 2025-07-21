import React from 'react';
import '../assets/css/MapSection.css';

const MapSection = () => {
  return (
    <section className="map-section py-5">
      <div className="container text-center">
        <h2 className="mb-4">موقعنا على الخريطة</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.112271501935!2d31.20013087521155!3d30.004932474943555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458470db46974e7%3A0xcaf1ecdafb704d76!2z2YPZhtmK2LPYqSDYp9mE2LPZitiv2Kkg2KfZhNi52LDYsdin2KEg2YXYsdmK2YUg2KjYp9mE2LnZhdix2KfZhtmK2Kk!5e0!3m2!1sen!2seg!4v1753139575853!5m2!1sen!2seg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="St Mary Church Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
