import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import IMG16 from "../Images/Assets/whitesowlogo.png";
import IMG17 from "../Images/Assets/black dy.png";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="center-flex">
      <nav className="navbar-container">
        {/* Logo and Secondary Logo */}
        <div className="logo-container">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={IMG16} alt="Logo" className="sow-logo" />
          </Link>
          <img src={IMG17} alt="Secondary Logo" className="secondary-logo" />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`mobile-menu-button ${isMobileMenuOpen ? "active" : ""}`}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          onClick={toggleMobileMenu}
        >
          {/* Icon when menu is closed */}
          {!isMobileMenuOpen ? (
            <svg
              className="icon"
              fill="none"
              viewBox="0 0 25 25"
              strokeWidth="2.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {/* Desktop Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <li className="nav-link-item">
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-link-item">
            <Link to="/events" onClick={closeMobileMenu}>Events</Link>
          </li>
          <li className="nav-link-item">
            <Link to="/team" onClick={closeMobileMenu}>Team</Link>
          </li>
          <li className="nav-link-item">
            <Link to="/nss" onClick={closeMobileMenu}>NSS</Link>
          </li>
          <li className="nav-link-item">
            <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
          </li>
          <li className="nav-link-item">
            <Link to="/udaan" onClick={closeMobileMenu}>UDAAN</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

