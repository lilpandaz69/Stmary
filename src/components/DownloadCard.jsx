// src/components/DownloadCard.jsx
import React from 'react';
import '../assets/css/DownloadCard.css';

const DownloadCard = () => {
  return (
    <section className="download-card-section py-5">
      <div className="container">
        <div className="card shadow-lg p-4 text-center download-card">
          <h3 className="mb-3 text-primary fw-bold">تنزيل الملف الخاص بالخدمة</h3>
          <p className="mb-4 text-muted">يمكنك تحميل الملف الخاص بخدمة الكنيسة من الزر بالأسفل.</p>
          <a
            href="/files/myfile.pdf" // ضع هنا اسم الملف النهائي
            download
            className="btn btn-primary px-4 py-2"
          >
            تحميل الملف
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadCard;
