import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Events.css";

const eventsList = [
  {
    id: "nativity",
    title: "عيد الميلاد المجيد",
    description: "ميلاد ربنا يسوع المسيح، فرح وخلاص للعالم.",
    img: "/img/events/nativity.jpg",
  },
  {
    id: "easter",
    title: "عيد القيامة",
    description: "قيامة المسيح، غلبة الموت والحياة الجديدة.",
    img: "/images/events/easter.jpg",
  },
  {
    id: "ascension",
    title: "عيد الصعود",
    description: "صعود المسيح إلى السماوات وتمجيده.",
    img: "/images/events/ascension.jpg",
  },
  {
    id: "holy-week",
    title: "اسبوع الام ",
    description: " اسبوع الام ",
    img: "/img/events/sadd week.jpg",
  },
];

function Events() {
  return (
    <div className="events-page container py-5">
      <h2 className="text-center mb-5 fw-bold">مناسبات الكنيسة</h2>

      <div className="row">
        {eventsList.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div className="event-card shadow-sm">
              <img src={event.img} alt={event.title} className="event-img" />
              <div className="p-3 text-center">
                <h4 className="fw-bold">{event.title}</h4>
                <p className="text-muted">{event.description}</p>
                <Link to={`/events/${event.id}`} className="btn btn-primary">
                  اعرف المزيد
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
