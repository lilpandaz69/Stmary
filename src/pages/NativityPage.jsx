import React from "react";
import "../assets/css/NativityPage.css";
import heroImg from "../assets/img/nativity.jpg"; // غير الصورة لو عايز صورة خاصة بعيد الميلاد
import CommentsWidget from '../components/CommentsWidget.jsx';
function NativityPage() {
  return (
    <div>

      {/* 🌟 HERO SECTION */}
      <header
        className="nativity-hero text-center text-white d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">عيد الميلاد المجيد</h1>
          <p className="lead mt-3">
            ميلاد يسوع المسيح… بداية الخلاص وظهور نور العالم.
          </p>
        </div>
      </header>

      <div className="container py-5">

        {/* 🕊 BOX: مواعيد الكنيسة */}
        <div className="schedule-box shadow-sm p-4 mb-5">
          <h3 className="fw-bold mb-3 text-center">مواعيد الكنيسة في عيد الميلاد</h3>
          <ul className="schedule-list">
            <li>📌 قداس 6 يناير — 8:00 مساءً</li>
            <li>📌 قداس عيد الميلاد — 12:00 بعد منتصف الليل</li>
            <li>📌 قداس ثاني يوم العيد — 8:00 صباحًا</li>
          </ul>
        </div>

        {/* 📂 قسم ال PowerPoint */}
        <div className="ppt-section text-center">
          <h3 className="fw-bold mb-3">عرض تقديمي (PowerPoint)</h3>
          <p className="text-muted mb-4">اضغط على الزر التالي لتحميل العرض الخاص بعيد الميلاد.</p>

          <a
            className="btn btn-success px-5 py-2"
            href="/files/nativity-presentation.pptx"
            download
          >
            تحميل PowerPoint 
          </a>
        </div>
        <CommentsWidget />
      </div>
    </div>
  );
}

export default NativityPage;
