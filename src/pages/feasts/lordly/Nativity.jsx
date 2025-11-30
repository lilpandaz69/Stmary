import React from "react";
// عدّل المسار حسب مكان الملف عندك
import "../../../assets/css/HeroSection.css";
import nativityImg from "../../../assets/img/nativity.jpg"; // صورة عيد الميلاد

function Nativity() {
  return (
    <>
      {/* Hero خاص بعيد الميلاد */}
      <header
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${nativityImg})` }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">عيد الميلاد المجيد</h1>
          <p className="lead mt-3">
            تذكار تجسد ربنا يسوع المسيح وولادته من العذراء مريم، أحد الأعياد السيدية الكبرى في الكنيسة.
          </p>
        </div>
      </header>

      {/* وصف صغير عن العيد */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <p className="fs-5 text-muted text-center">
                تحتفل الكنيسة بعيد الميلاد في 29 كيهك، وهو عيد الفرح والخلاص، 
                حيث أتى المسيح إلى العالم ليمنحنا حياة جديدة ويعلن لنا محبة الله للبشر.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* بوكس تحميل الباوربوينت */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4 p-md-5 text-center text-md-start">
                  <h2 className="h4 mb-3">تحميل عرض عيد الميلاد المجيد</h2>
                  <p className="mb-4 text-muted">
                    يمكنك تحميل عرض باوربوينت جاهز عن عيد الميلاد لاستخدامه في الاجتماعات، مدارس الأحد، 
                    أو العظات. يحتوي العرض على آيات، تأملات، وصور معبّرة عن ميلاد ربنا يسوع المسيح.
                  </p>

                  {/* عدّل الـ href لمسار ملف الباوربوينت الفعلي عندك */}
                  <a
                    href="/downloads/nativity-presentation.pptx"
                    className="btn btn-primary px-4"
                    download
                  >
                    تحميل عرض الباوربوينت
                    <i className="fas fa-download ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nativity;
