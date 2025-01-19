import React, { useEffect } from "react";
import '../Styles/Udaan.css';
import Img1 from '../Images/Assets/udaanlogo.png';
import Img2 from "../Images/Assets/whitesowlogo.png";
import Card from "../components/Card";

const Udaan = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []); // Empty dependency array ensures it runs only on component mount

  // Countdown Script
  var countDownDate = new Date("Feb 9, 2025 00:00:00").getTime();

  useEffect(() => {
    // Update the count down every 1 second
    let x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Check if the component is still mounted
      if (document.getElementById("days")) {
        document.getElementById("days").innerHTML = days.toString();
        document.getElementById("hours").innerHTML = hours.toString();
        document.getElementById("minutes").innerHTML = minutes.toString();
        document.getElementById("seconds").innerHTML = seconds.toString();
      }
  
      if (distance < 0) {
        clearInterval(x);
        // Check if the component is still mounted
        if (document.getElementById("days")) {
          document.getElementById("days").innerHTML = "00";
          document.getElementById("hours").innerHTML = "00";
          document.getElementById("minutes").innerHTML = "00";
          document.getElementById("seconds").innerHTML = "00";
        }
      }
    }, 1000);
  
    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(x);
  }, [countDownDate]); // Add countDownDate here
  

  return (
    <>
      <div className="udaan-hero">
        <div id="jumbotron-div">
          <div className="logos-area-left">
            {/* Add Udaan's logo here */}
            <img
              src={Img1}
              alt="Udaan Logo"
              id="udaan-logo"
            />
          </div>
          <div className="jumbotron-text">
            <h1 className="udaantext">UDAAN 2025</h1>
            <p className="highlight">Largest Fundraising Marathon Of Navi Mumbai</p>
            <div className="buttonc">
              <a href="https://www.townscript.com/v2/e/udaan-2024-314013/booking/tickets">
                <button>Register Now</button>
              </a>
            </div>
          </div>
          <div className="logos-area-right">
            <img
              src={Img2} 
              alt="Social Wing Logo"
              id="social-wing-logo"
            />
          </div>
        </div>
      </div>
    
      {/* Countdown Div */}
      <div id="countdown-div">
        <div className="countdown-text">
          <h4 className="event-title">UDAAN 2025</h4>
          <h5 id="udaan_date">9 February 2025</h5>
        </div>
        <div className="countdown-timer">
          <div className="countdown-timer-box">
            <h1 id="days" className="timer-value">00</h1>
            <h4 className="timer-label">Days</h4>
          </div>
          <div className="countdown-timer-box">
            <h1 id="hours" className="timer-value">00</h1>
            <h4 className="timer-label">Hours</h4>
          </div>
          <div className="countdown-timer-box">
            <h1 id="minutes" className="timer-value">00</h1>
            <h4 className="timer-label">Minutes</h4>
          </div>
          <div className="countdown-timer-box">
            <h1 id="seconds" className="timer-value">00</h1>
            <h4 className="timer-label">Seconds</h4>
          </div>
        </div>
      </div>

      {/* About udaan div */}
      <div id="about-udaan" className="section odd">
        <div className="about-left-side">
          <h3 className="section-title">About Udaan</h3>
          <p className="udaan-info">
            Udaan is Navi Mumbai's largest marathon for charity, organized by <b>Social Wing - RAIT</b>, 
            which is a part of D.Y. Patil University, Nerul. Udaan is a 7 km marathon in Nerul around DY Patil University. 
            It is recognized as one of the biggest marathons in Navi Mumbai, with an average footfall of over 6000 runners.
          </p>
        </div>
        <div className="about-right-side">
          <img
            src="../Images/Udaan/IMG_1399.jpg"
            alt="Kid sitting Udaan"
          />
        </div>
      </div>

      <div id="about-udaan" className="section even">
        <div className="about-right-side">
          <img
            src="../Images/Udaan/IMG_1399.jpg"
            alt="Kid sitting Udaan"
          />
        </div>
        <div className="about-left-side">
          <h3 className="section-title">Cause Of Udaan</h3>
          <p className="udaan-info">
            The main purpose of Udaan is to contribute towards the betterment of society. 
            Udaan inspires thousands to help the underprivileged and bring about meaningful change in society.
          </p>
        </div>
      </div>

      <div id="about-udaan" className="section odd">
        <div className="about-left-side">
          <h3 className="section-title">Deliverables</h3>
          <ul className="udaan-info deliverables-list">
            <li>T-Shirts</li>
            <li>Bibs</li>
            <li>Refreshments</li>
            <li>Medals</li>
            <li>Certificates</li>
            <li>Zumba</li>
            <li>Cash Prizes</li>
          </ul>
        </div>
      </div>
    
      <Card/>  
    </>
  );
};

export default Udaan;
