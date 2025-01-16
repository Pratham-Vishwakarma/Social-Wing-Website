import React from "react";
import '../Styles/Nss.css';
import Img1 from '../Images/nss/nss_logo (3).png';

const NSS = () => {
  return (
    <>

<div id="main-div" class="card">
    <div class="img">
      <img src={Img1} alt="" />
    </div>
    <div class="nss-jumbotron">
      <h1>NSS-RAIT</h1>
      <p id="not">
        {/* <!-- The first NSS-RAIT unit was established in 2019 with the intent to
          connect with the nationwide NSS community of social workers.
          Activities under the National Service Scheme provide a platform for
          the students to upgrade their existing knowledge and skills and use
          them in a more relevant manner by bringing a change in their
          community. NSS-RAIT adds much more insightful activities testing the
          on-ground confrontational skills of the students along with their
          problem-solving abilities. --> */}
        NOT ME, BUT YOU
      </p>
      <div class="button-area">
        <a id="bt-1" href="#trans-button-1"><button class="custom-btn btn-1">Did You Know?</button></a>
        <a id="bt-2" href="#carouselExampleCaptions"><button class="custom-btn btn-2">NSS Events</button></a>
      </div>
    </div>
  </div>
  <div className="card1">
  <div className="card2">
  <div id="trans-button-1">
    <div class="sides">
      <div class="wrapper-sides">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-800">About NSS-RAIT</h2>
        <br/>
        <p>
          The first NSS-RAIT unit was established in 2019 with the intent to
          connect with the nationwide NSS community of social workers.
          Activities under the National Service Scheme provide a platform for
          the students to upgrade their existing knowledge and skills and use
          them in a more relevant manner by bringing a change in their
          community. NSS-RAIT adds much more insightful activities testing the
          on-ground confrontational skills of the students along with their
          problem-solving abilities.
        </p>
      </div>
    </div>
    {/* <!-- <div class="mid"></div> --> */}
    <div class="sides sides1">
      <div class="wrapper-sides">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-800">What we do</h2>
        <br/>
        <p>
          Some of the prominent activities carried out by our NSS-RAIT unit in
          collaboration with SocialWing-RAIT are: Road Safety Awareness
          Seminar, AIDS Awareness Campaign, Youth Week Celebration, National
          Girl Child Day Celebration, Martyr's Day, Rashtriya Ekta Diwas
          Celebration, Global Warming Awareness Campaign, Election Awareness
          Campaign: Street Play, Plogging, Poshan Mah: Awareness on the
          importance of Nutrition, NSS Residential Camp. The NSS Residential
          camp is an annual camping event where students get to camp at a
          village for 7 days and indulge in team-building exercises along with
          carrying out social work which in turn gives them exposure to the
          rural sections of our nation and teaches them self-sustainability.
        </p>
      </div>
    </div>
  </div>
  </div>
  </div>
    </>
  );
};
export default NSS;
