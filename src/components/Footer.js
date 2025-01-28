import { Link } from "react-router-dom";
import "../Styles/Footer.css"; // Custom styles for the footer
import IMG16 from "../Images/Assets/whitesowlogo.png";
import IMG1 from "../Images/Assets/insta.png";
import IMG2 from "../Images/Assets/facebook.png";
import IMG3 from "../Images/Assets/linkedin.png";
import IMG4 from "../Images/Assets/x.png";
import IMG5 from "../Images/Assets/youtube.png";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="container-nav">
            <ul className="footer-nav">
              <li className="footer-nav-item">
                <Link to="/" className="footer-nav-link">Home</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/events" className="footer-nav-link">Events</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/team" className="footer-nav-link">Team</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/nss" className="footer-nav-link">NSS</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/gallery" className="footer-nav-link">Gallery</Link>
              </li>
            </ul>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6">
              <Link to="/" className="footer-logo">
                <img height="30px" src={IMG16} alt="sow-logo" />
              </Link>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://instagram.com/sowrait?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <img height="40px" src={IMG1} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/sowrait/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <img height="40px" src={IMG2} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/socialwing-rait/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <img height="40px" src={IMG3} alt="LinkedIn" />
            </a>
            <a
              href="https://x.com/SocialWing_RAIT"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
            >
              <img height="45px" src={IMG4} alt="Twitter" />
            </a>
            <a
              href="https://youtube.com/@socialwingrait9920"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
            >
              <img height="45px" src={IMG5} alt="Youtube" />
            </a>
          </div>

        </div>
      </div>

      <div className="container footer-bottom">
        <div className="copyright">
          &copy; Copyright 2025 <strong><span>Social Wing</span></strong>. All Rights Reserved
        </div>
        <div className="copyright">
          <span>
            <strong>Designed & Developed By : </strong>Technical Team of Social
            Wing
          </span>
        </div>
      </div>
    </footer>
  );
}
