import React from 'react';
import '../assets/css/SocialLinks.css'; // هنضيف ملف CSS خاص بالشكل

const SocialLinks = () => {
  return (
    <section className="social-section py-5 text-center">
      <div className="container">
        <h2 className="mb-4">تابعنا على وسائل التواصل</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <a
            href="https://www.youtube.com/channel/YOUR_CHANNEL"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link youtube"
          >
            <i className="fab fa-youtube"></i> YouTube
          </a>

          <a
            href="https://www.facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          
        </div>
        <div className="youtube-embed mt-5">
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed?listType=user_uploads&list=StMaryChurchOmrania"
    title="St. Mary YouTube"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      </div>
      
    </section>
  );
};

export default SocialLinks;
