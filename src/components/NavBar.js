// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import IMG16 from "../Images/teams/whitesocialwing.png";
// import IMG17 from "../Images/Assets/black dy.png";
// import styled from "styled-components";
// import "../Styles/Navbar.css";

// const IMG = styled.img`
//     width: 60px;`
// ;

// const IMG1 = styled.img`
//     width: 100px;`
// ;

// export default function NavBar() {
//   return (
//   <nav className="navbar navbar-expand-lg bg-warning">
//     <div className="container">
//       <a className="navbar-brand text-white"><Link to="/"><IMG src={IMG16} ></IMG></Link></a>
//       <IMG1 src={IMG17} ></IMG1>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page"><Link to="/">Home</Link></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active"><Link to="/events">Events</Link></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active"><Link to="/team">Team</Link></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active"><Link to="/nss">NSS</Link></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active"><Link to="/gallery">Gallery</Link></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active"><Link to="/udaan">Udaan</Link></a>
//           </li>          
//         </ul>        
//       </div>
//     </div>
//   </nav>
//   );
// }

//My version of navbar
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
            <Link to="/udaan" onClick={closeMobileMenu}>Udaan</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

