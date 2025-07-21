import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Nav.css'; // لو عندك CSS إضافي
import logo from '../assets/img/logo.png';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ height: '50px' }} />
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/">الكنيسة</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                خدمات
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">خدمة 1</a></li>
                <li><a className="dropdown-item" href="#">خدمة 2</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                أخبار ومقالات
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">مقالة 1</a></li>
                <li><a className="dropdown-item" href="#">مقالة 2</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                مكتبات
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">مكتبة 1</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
