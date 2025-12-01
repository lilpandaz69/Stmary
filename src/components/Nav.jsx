import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../assets/css/Nav.css';

function Nav() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  // أعياد سيدية (أمثلة – عدل زي ما تحب)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ height: '50px' }} />
        </Link>

        {/* Toggle Button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            {/* مثال لينك رئيسي للكنيسة */}
            <li className="nav-item">
              <Link className="nav-link active" to="/">الكنيسة</Link>
            </li>
            <Link className="nav-link" to="/events">
  المناسبات
</Link>

            {/* عرض كامل */}
            <li className="nav-item">
              <Link className="nav-link" to="/feasts">
                عرض كامل
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
