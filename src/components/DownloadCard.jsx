import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/DownloadCard.css";

const DownloadCard = () => {
  return (
    <section className="download-card-section py-5">
      <div className="container d-flex justify-content-center">

        <div className="row w-100 justify-content-center download-wrapper">

          {/* --- Box 1: Download --- */}
          <div className="col-md-5 mb-4">
            <div className="download-box text-center p-4">
              <h3 className="fw-bold mb-2">تحميل ملف القداس</h3>
              <p className="text-muted mb-4">
                يمكنك تحميل ملف القداس أو الخدمة من الزر التالي.
              </p>

              <a
                href="/files/Nour_MamdohCV.pdf"
                download
                className="download-btn"
              >
                تحميل الملف
              </a>
            </div>
          </div>

          {/* --- Box 2: Events Link --- */}
          <div className="col-md-5 mb-4">
            <div className="events-box text-center p-4">
              <h3 className="fw-bold mb-2">جميع المناسبات</h3>
              <p className="text-muted mb-4">
                شاهد المناسبات والاعياد والقداسات الخاصة بالكنيسة.
              </p>

              <Link to="/events" className="events-btn">
                الذهاب لصفحة المناسبات
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DownloadCard;
