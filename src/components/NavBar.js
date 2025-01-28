import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          {[
            { name: "Home", path: "/" },
            { name: "Events", path: "/events" },
            { name: "Team", path: "/team" },
            { name: "NSS", path: "/nss" },
            { name: "Gallery", path: "/gallery" },
            { name: "UDAAN", path: "/udaan" },
          ].map((link) => (
            <li key={link.path} className="nav-link-item">
              <NavLink
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

