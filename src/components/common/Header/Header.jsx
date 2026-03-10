import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">

        {/* LEFT: Logo */}
        <div className="header__left">
          <Link to="/" className="header__logo">
            <span className="header__logo--first">🏋️‍♂️</span>
            <span className="header__logo--second">GYM</span>
          </Link>
        </div>

        {/* CENTER: Navigation */}
        <nav className="header__center">
          <ul className="header__nav--list">
            <li className="header__nav--item"><Link to="/">Home</Link></li>
            <li className="header__nav--item"><Link to="/exercises">Exercises</Link></li>
            <li className="header__nav--item"><Link to="/members">Members</Link></li>
            <li className="header__nav--item"><Link to="/calorie">CalorieInfo</Link></li>
          </ul>
        </nav>

        {/* RIGHT: Auth */}
        <div className="header__right">
          <Link to="/register" className="header__nav--icon">📝</Link>
          <Link to="/login" className="header__nav--icon">👤</Link>
        </div>

      </div>
    </header>
  );
}