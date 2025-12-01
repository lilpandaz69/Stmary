import React from "react";
import "../assets/css/NativityPage.css";
import heroImg from "../assets/img/sadweek.webp"; // أو حط صورة خاصة بـ أسبوع الآلام

function HolyWeekPage() {
  return (
    <div>
      {/* 🌟 HERO SECTION */}
      <header
        className="nativity-hero text-center text-white d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">أسبوع الآلام</h1>
          <p className="lead mt-3">
            رحلة الكنيسة مع المسيح في طريق الصليب، تأمل وصلاة ودموع توبة.
          </p>
        </div>
      </header>

      <div className="container py-5">
        {/* 🕊 BOX: مواعيد الكنيسة */}
        <div className="schedule-box shadow-sm p-4 mb-5">
          <h3 className="fw-bold mb-3 text-center">مواعيد الكنيسة في أسبوع الآلام</h3>
          <ul className="schedule-list">
            <li>📌 صلوات البصخة من الأحد للمساء — 6:00 مساءً</li>
            <li>📌 خميس العهد — قداس صباحي + بصخة مسائية</li>
            <li>📌 الجمعة العظيمة — صلوات من 8:00 صباحًا حتى 3:00 عصرًا</li>
            <li>📌 سبت الفرح — قداس منتصف الليل</li>
          </ul>
        </div>

        {/* 📂 قسم ال PowerPoint */}
{/* 📂 قسم ال PowerPoint */}
<div className="ppt-section text-center">
  <h3 className="fw-bold mb-3"> PowerPoint لأسبوع الآلام</h3>


  <div className="row g-4 justify-content-center">
    {/* بصخات صباحية */}
    <div className="col-md-6 mb-3">
      <div className="ppt-card shadow-sm p-4 h-100">
        <h4 className="fw-bold mb-3">بصخات صباحية</h4>
        <a
          className="btn btn-success px-4"
          href="/files/بصخات صباحيه.zip"
          download
        >
          تحميل بصخات صباحية 
        </a>
      </div>
    </div>

    {/* بصخات مسائية */}
    <div className="col-md-6 mb-3">
      <div className="ppt-card shadow-sm p-4 h-100">
        <h4 className="fw-bold mb-3">بصخات مسائية</h4>
        <a
          className="btn btn-success px-4"
          href="/files/بصخات مسائيه.zip"
          download
        >
          تحميل بصخات مسائية 
        </a>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default HolyWeekPage;
