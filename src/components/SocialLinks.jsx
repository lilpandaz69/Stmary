import React from 'react';
import '../assets/css/SocialLinks.css';

const SocialLinks = () => {
  return (
    <section className="social-section py-5 text-center">
      <div className="container">

        {/* --- Social buttons --- */}
        <h2 className="mb-4 fw-bold">تابعنا على وسائل التواصل</h2>

        <div className="social-boxes d-flex justify-content-center gap-4 flex-wrap mb-5">

          <a
            href="https://www.youtube.com/@StMaryChurchOmrania"
            target="_blank"
            rel="noopener noreferrer"
            className="social-box youtube"
          >
            <i className="fab fa-youtube fa-2x mb-2"></i>
            <span>YouTube</span>
          </a>

          <a
            href="https://www.facebook.com/stmarychurchomraniaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="social-box facebook"
          >
            <i className="fab fa-facebook-f fa-2x mb-2"></i>
            <span>Facebook</span>
          </a>

        </div>

        {/* --- Video + Map side by side --- */}
        <div className="row align-items-center video-map-row">

          {/* YouTube Video */}
          <div className="col-md-6 mb-4">
            <div className="embed-container">
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=StMaryChurchOmrania"
                title="St. Mary YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Map */}
          <div className="col-md-6 mb-4">
            <div className="embed-container">
              <iframe
                title="Church Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.11210973208!2d31.20013087525158!3d30.004937120442044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458470db46974e7%3A0xcaf1ecdafb704d76!2z2YPZhtmK2LPYqSDYp9mE2LPZitiv2Kkg2KfZhNi52LDYsdin2KEg2YXYsdmK2YUg2KjYp9mE2LnZhdix2KfZhtmK2Kk!5e0!3m2!1sen!2sus!4v1764601583878!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SocialLinks;
