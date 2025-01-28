import React, {useEffect} from 'react'
import styled from 'styled-components'
import '../Styles/Home.css'
import IntroData from '../components/IntroData'
import Intro from '../components/Intro'
import OurEvents from '../components/OurEvents'

const H1 = styled.h1`
font-size: 4rem;
text-align: left;
margin-top:15px;
margin-bottom: 10px;
color: #e2e2e2;
@media (max-width: 768px) {
    font-size: 2.5rem;
}
`
const H2 = styled.h1`
font-size: 2rem;
text-align: left;
color: #e2e2e2;
@media (max-width: 768px) {
  font-size: 1.5rem;
}
`

const DefaultButton = styled.button`
background-color: #F4A906;
border: none;
padding: 20px;
color: white;
margin: auto;
margin-top: 50px;
display: flex;
justify-content: flex-start;
border-radius: 8px;
`

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []); // Empty dependency array ensures it runs only on component mount
  
  return (
    <>
      {/* Udaan Banner */}
      <div className="container1">
        <div className="event-details-home">
          <div className="logo-column">
            <img 
              className="logo" 
              src={require("../Images/Assets/udaanlogo.png")} 
              alt="Event Logo" 
            />
          </div>
          <div className="info-column">
            <div className="event-info">
              <h1 className="header1"><b>FEBRUARY 9, 2025</b></h1>
              <h2 className="event-info1">UDAAN</h2>
              <p className="event-info2">RUN FOR A CAUSE</p>
              <p className="event-info2">NAVI MUMBAI'S BIGGEST MARATHON FOR CHARITY</p>
            </div>
            <div className="buttons">
              <div className="buttonh">
                <a href="/udaan">
                  <button>More Details</button>
                </a>
              </div>
              <div className="buttonh">
                <a href="https://www.townscript.com/v2/e/udaan-2025-030014/booking/tickets">
                  <button>Register Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div style={{
          backgroundColor: "#000000",
          padding: 60,
        }}>
          <div className='homesection'>
            <div>
              <div style={{
                fontFamily: "Roboto-Slab"
              }}>
                <H1>Social Wing</H1> 
              </div>
              <H2>"Alone we can do so little; <br/>together we can do so much." <br/>
              - Helen Keller        
              </H2> 
            </div>
            <div className="candle">
              <div className="flame">
                <div className="shadows"></div>
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
              </div>
              <div className="wick"></div>
              <div className="wax"></div>
            </div>
          </div>
            
          <div>
            <a href="https://forms.gle/LLSGVyUvuyWBsct56" target="_blank" rel="noreferrer">
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px"
              }}>
                <DefaultButton>Get Membership</DefaultButton>
              </div>
            </a>
          </div>
        </div>
      </div>

      {
        IntroData.map((props,ind) => {
          return <Intro
          key={ind}
          title={props.title}
          description={props.description}
          />                  
        })
      } 

      <div id="event-stats-div">    
        <div className="event-stats">
          <div className="stat-box">
            <div className="stat-value">
              <h1 id="events" className="text-6xl font-bold">60 +</h1>
            </div>
            <div className="stat-label">
              <h4 className="text-2xl font-semibold">Events Done</h4>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-value">
              <h1 id="volunteers" className="text-6xl font-bold">1200 +</h1>
            </div>
            <div className="stat-label">
              <h4 className="text-2xl font-semibold">Happy Volunteers</h4>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-value">
              <h1 id="children" className="text-6xl font-bold">100 +</h1>
            </div>
            <div className="stat-label">
              <h4 className="text-2xl font-semibold">Children Educated</h4>
            </div>
          </div>
        </div>
      </div>



      <OurEvents/>
    </>
  )
}

export default Home
