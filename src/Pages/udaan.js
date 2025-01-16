import React, { useEffect } from "react";
import '../Styles/Udaan.css';

import Img1 from '../Images/udaan/udaanlogo.png';
import Img2 from '../Images/udaan/white wing.png';
import Card from "../components/Card";

const Udaan = () => {

  // Countdown Script
  var countDownDate = new Date("Feb 18, 2024 00:00:00").getTime();

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
      if(document.getElementById("days")) {
        document.getElementById("days").innerHTML = days.toString();
        document.getElementById("hours").innerHTML = hours.toString();
        document.getElementById("minutes").innerHTML = minutes.toString();
        document.getElementById("seconds").innerHTML = seconds.toString();
      }

      if (distance < 0) {
        clearInterval(x);
        // Check if the component is still mounted
        if(document.getElementById("days")) {
          document.getElementById("days").innerHTML = "00";
          document.getElementById("hours").innerHTML = "00";
          document.getElementById("minutes").innerHTML = "00";
          document.getElementById("seconds").innerHTML = "00";
        }
      }
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(x);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
    <div className="udaan-hero">
    <div id="jumbotron-div">
    <div class="logos-area-left">
      {/* <!-- Idhar NSS ke jagah pe Udaan ka logo daaldena --> */}
      <img
        src={Img1}
        alt="Udaan Logo" id='udaan-logo'/>
      {/* <img src={require("../Images/udaan/white wing.png")} alt="whitewing" class="secretPhoneLogo"/> */}
    </div>
    <h1 class="!text-6xl !font-bold udaantext"><b>UDAAN 2024</b></h1>
      <text class="highlight">Largest Fundraising Marathon Of Navi Mumbai</text>
        
        {/* <div class="logos-area-right">
        <img src={Img2} alt="Social Wing Logo"/>
        </div> */}
        
    </div> 
    <div class="buttonc">
        <a href="https://www.townscript.com/v2/e/udaan-2024-314013/booking/tickets"><button>Register Now</button></a>
      </div> 
    </div>
      

    
    

    {/* Countdown Div */}

    <div id="countdown-div">
    <div class="countdown-text">
      <h4 class="text-4xl font-bold">UDAAN 2024</h4>
      <h5 id="udaan_date font-bold">18 February 2024</h5>
    </div>
    <div class="countdown-timer">
      <div class="countdown-timer-box">
        <h1 id="days" class="text-6xl font-bold">00</h1>
        <h4 class="text-2xl font-semibold">Days</h4>
      </div>
      <div class="countdown-timer-box">
        <h1 id="hours" class="text-6xl font-bold">00</h1>
        <h4 class="text-2xl font-semibold">Hours</h4>
      </div>
      <div class="countdown-timer-box">
        <h1 id="minutes" class="text-6xl font-bold">00</h1>
        <h4 class="text-2xl font-semibold">Minutes</h4>
      </div>
      <div class="countdown-timer-box">
        <h1 id="seconds" class="text-6xl font-bold">00</h1>
        <h4 class="text-2xl font-semibold">Seconds</h4>
      </div>
    </div>
    {/* <!-- <a href="#stats-div"><button class="button1">Next Div</button></a> --> */}
  </div>

  {/* About udaan div */}
  
  <div id="about-udaan" class="odd">
    <div class="about-left-side">
      <h3 class="text-6xl font-bold">About Udaan</h3>
      <text class="udaan-info">Udaan is Navi Mumbai's largest marathon for charity, organized by <b>Social Wing -
          RAIT</b>, which is a part of D.Y. Patil University, Nerul.
        Udaan is a 7 km marathon in Nerul around DY Patil University.
        Udaan is recognized to be one of the biggest marathon of Navi Mumbai with average footfall of more than 6000
        runners.
        </text>
    </div>
    {/* <div class="about-right-side">
      <img src="https://lh3.googleusercontent.com/4CJGh-gXHUbFbaY_CDK6YoT4c6f_FcoYayjWFUd4Hs3s9Gk-UlUpQpc0oDgit9Kb5JU=w2400" alt="kid sitting udaan"/>
    </div> */}
  </div>
  
  
  <div id="about-udaan">
    <div class="about-left-side">
      <h3 class="text-6xl font-bold">Cause Of Udaan</h3>
      <text class="udaan-info">The main purpose of Udaan is to contribute towards the betterment of the society.
        Udaan influences more than thousands to help the poor and bring about a change in the society.
        </text>
    </div>
    {/* <div class="about-right-side">
      <img src="https://lh3.googleusercontent.com/4CJGh-gXHUbFbaY_CDK6YoT4c6f_FcoYayjWFUd4Hs3s9Gk-UlUpQpc0oDgit9Kb5JU=w2400" alt="kid sitting udaan"/>
    </div> */}
  </div>

  <div id="about-udaan" class="odd">
    <div class="about-left-side">
      <h3 class="text-6xl font-bold">Deliverables</h3>
      <text class="udaan-info">
        <ul class="about-left-side">
          <li>T-Shirts</li>
          <li>Bibs</li>
          <li>Refreshments</li>
          <li>Medals</li>
          <li>Certificates</li>
          <li>Zumba</li>
          <li>Cash Prizes</li>
        </ul>
        </text>
    </div>
    {/* <div class="about-right-side">
      <img src="https://lh3.googleusercontent.com/4CJGh-gXHUbFbaY_CDK6YoT4c6f_FcoYayjWFUd4Hs3s9Gk-UlUpQpc0oDgit9Kb5JU=w2400" alt="kid sitting udaan"/>
    </div> */}
  </div>
  
  <Card/>

  {/* <div class="">
  <div class="container-map1">
  <div>
    <h2 class="map-text">Location</h2>
  </div>
  <div class="container-map">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.492252860921!2d73.0241116749765!3d19.042082882155587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c53b1e255b%3A0x3fa8b73a42118233!2sD%20Y%20Patil%20Sports%20Stadium!5e0!3m2!1sen!2sin!4v1705821700728!5m2!1sen!2sin" 
    referrerpolicy="no-referrer-when-downgrade"
    width="600"
    height="450"
    style={{ border: "0" }}
    allowfullscreen=""
    loading="lazy">
  </iframe>
  </div>
  </div>
  </div> */}
  
    </>
  );
};

export default Udaan;
