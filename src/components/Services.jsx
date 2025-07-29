import React from 'react';
import '../assets/css/ServicesSection.css';

function ServicesSection() {
  return (
    <section className="py-5 text-center" id="services">
      <div className="container">
        <h2 className="mb-4">خدماتنا</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">القداسات</h5>
                <p className="card-text"> القداسات بشكل دوري وسط أجواء من الروحانية</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">مدارس الأحد</h5>
                <p className="card-text">برامج تربوية وتعليمية للأطفال لتقويتهم في الإيمان.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">اجتماعات الشباب</h5>
                <p className="card-text">لقاءات دورية للشباب لتبادل الأفكار وتنمية الروح.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
