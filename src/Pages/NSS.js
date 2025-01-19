import React, {useEffect} from "react";
import '../Styles/Nss.css';
import Img1 from '../Images/Assets/nss_logo (3).png';

const NSS = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []); // Empty dependency array ensures it runs only on component mount

  return (
    <>
      <div id="main-div" className="cardx">
        <div className="img">
          <img src={Img1} alt="" />
        </div>
        <div className="nss-jumbotron">
          <h1>NSS-RAIT</h1>
          <p id="not">
            NOT ME, BUT YOU
          </p>
        </div>
      </div>

      <div className="cardx-2">
        <div className="cardx-nss-1">        
          <div className="button-area">
            <a id="bt-1" href="#trans-button-1"><button className="custom-btn btn-1">Our Work</button></a>
            <a id="bt-2" href="/events"><button className="custom-btn btn-2">NSS Events</button></a>
          </div>
          <div className="cardx-nss-2">
            <div id="trans-button-1">
              <div className="sides">
                <div className="wrapper-sides1x">
                  <h2 className="text-2xl font-semibold text-white dark:text-gray-800">About NSS-RAIT</h2>
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
              <div className="sides sidesr">
                <div className="wrapper-bottom">
                  <div className="wrapper-sides1x">
                    <h2 className="text-2xl font-semibold text-white dark:text-gray-800">What we do</h2>
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
        </div>
      </div>
    </>
  );
};
export default NSS;
