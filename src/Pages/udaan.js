import React, { useEffect, useState } from "react";
import '../Styles/Udaan.css';
import Img1 from '../Images/Assets/udaanlogo.png';
import Img2 from "../Images/Assets/whitesowlogo.png";
import Card from "../components/Card";
import KID from "../Images/Udaan/kid sitting.jpg";
import GIRL from "../Images/Udaan/img1.jpg";

const Udaan = () => {
  const [registeredCount, setRegisteredCount] = useState(() => {
    const storedValue = localStorage.getItem("registeredCount");
    const initialValue = storedValue ? Math.min(Number(storedValue), 3000) : 2000;  // Ensure we check for valid value
    return initialValue;
  });
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Countdown Timer Logic
  const countDownDate = new Date("Feb 9, 2025 00:00:00").getTime();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        setCountdown({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 200) + 1; // Random between 0 and 10
  
      setRegisteredCount((prevCount) => {
        const newCount = Math.min(prevCount + increment, 3000); // Limit to 3000
        localStorage.setItem("registeredCount", newCount);
        return newCount;
      });
    }, 200000); // Update every 30 minutes
  
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="udaan-hero">
        <div id="jumbotron-div">
          <div className="logos-area-left">
            <img src={Img1} alt="Udaan Logo" id="udaan-logo" />
          </div>
          <div className="jumbotron-text">
            <h1 className="udaantext">UDAAN 2025</h1>
            <p className="highlight">Largest Marathon Of Navi Mumbai</p>
            <div className="buttonc">
              <a href="https://www.townscript.com/v2/e/udaan-2025-030014/booking/tickets">
                <button>Register Now</button>
              </a>
            </div>
          </div>
          <div className="logos-area-right">
            <img src={Img2} alt="Social Wing Logo" id="social-wing-logo" />
          </div>
        </div>
      </div>

      {/* Total Participants (Runners + Donors) */}
      

      {/* Countdown Section */}
      <div id="countdown-div">
        <div className="countdown-text">
          <h4 className="event-title">UDAAN 2025</h4>
          <h5 id="udaan_date">9 February 2025</h5>
        </div>
        <div className="countdown-timer">
          <div className="countdown-timer-box">
            <h1 id="days" className="timer-value">{countdown.days}</h1>
            <h4 className="timer-label">Days</h4>
          </div>
          <div className="countdown-timer-box">
            <h1 id="hours" className="timer-value">{countdown.hours}</h1>
            <h4 className="timer-label">Hours</h4>
          </div>
          <div className="countdown-timer-box">
            <h1 id="minutes" className="timer-value">{countdown.minutes}</h1>
            <h4 className="timer-label">Minutes</h4>
          </div>
          <div className="countdown-timer-box">
            <h1 id="seconds" className="timer-value">{countdown.seconds}</h1>
            <h4 className="timer-label">Seconds</h4>
          </div>
        </div>
        <div className="registered-area">
            <h3>Total Participants:</h3>
            <div className="registered-count">
              <h2>{registeredCount}+ </h2>
            </div>
        </div>
      </div>

      {/* About Udaan Section */}
      <div id="about-udaan" className="section odd">
        <div className="about-left-side">
          <h3 className="section-title">About UDAAN</h3>
          <p className="udaan-info">
            UDAAN is Navi Mumbai's largest marathon for charity, organized by <b>Social Wing - RAIT</b>,
            which is a part of D.Y. Patil University, Nerul. UDAAN is a 7 km marathon in Nerul around DY Patil University.
            It is recognized as one of the biggest marathons in Navi Mumbai, with an average footfall of over 6000 runners.
          </p>
        </div>
        <div className="about-right-side">
          <img src={KID} alt="Kid sitting Udaan" />
        </div>
      </div>

      <div id="about-udaan" className="section even">
        <div className="about-right-side-girl">
          <img src={GIRL} alt="Girl Udaan" />
        </div>
        <div className="about-left-side">
          <h3 className="section-title">Cause Of UDAAN</h3>
          <p className="udaan-info">
            The main purpose of UDAAN is to contribute towards the betterment of society. UDAAN inspires thousands to
            help the underprivileged and bring about meaningful change in society.
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

      <Card />
    </>
  );
};

export default Udaan;
