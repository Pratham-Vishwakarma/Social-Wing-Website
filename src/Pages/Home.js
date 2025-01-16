import React from 'react'
import styled from 'styled-components'
import '../Styles/Home.css'
import IntroData from '../components/IntroData'
import Intro from '../components/Intro'
import OurEvents from '../components/OurEvents'
import '../Styles/sequel-100-black-85.ttf'


const H1 = styled.h1`
font-size: 4rem;
text-align: left;
margin-top:15px;
margin-bottom: 10px;
color: white;
@media (max-width: 768px) {
    font-size: 2.5rem;
}
`
const H2 = styled.h1`
font-size: 2rem;
text-align: left;
color: white;
@media (max-width: 768px) {
  font-size: 1.5rem;
}
`
const H3 = styled.h1`
font-size: 4rem;
text-align: center;
`
const P = styled.p`
text-align: center;
`
const DefaultButton = styled.button`
background-color: #FFA500;
border: none;
padding: 20px;
color: white;
margin: auto;
margin-top: 100px;
display: flex;
justify-content: flex-start;
border-radius: 8px;
`

function Home() {
  
  return (
    <>
     
       
      

    <div class="container1">
    <h1 className='header1'><b>FEBRUARY 9, 2025</b></h1>
        <div class="event-details">
        
            <img class="logo" src={require("../Images/udaan/udaanlogo.png")} alt="Event Logo"/>
            <div class="event-info">
                <h2 class="event-info1">UDAAN</h2>
                <p class="event-info2">RUN FOR A CAUSE</p>
                <p class="event-info2">NAVI MUMBAI'S BIGGEST MARATHON FOR CHARITY</p>
                {/* <p>Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla vel massa iaculis, vel fermentum massa congue.</p> */}
            </div>
        </div>
        <div class="container2">
        <div class="buttonc1">
        <a href="/udaan"><button>More Details</button></a>
        </div>
        <div class="buttonc2">
        <a href="https://www.townscript.com/v2/e/udaan-2024-314013/booking/tickets"><button>Register Now</button></a>
        </div>
        </div>
    </div>

    <div>
      <div style={{
        backgroundColor: "#000000",
        padding: 70
      }}>
    <div className='homesection'>
        <div>
        <div style={{
          fontFamily: "Roboto-Slab"
        }}>
          <H1>SocialWing</H1> </div>
          <H2>"Alone we can do so little; <br/>together we can do so much." <br/>
          - Helen Keller        
          </H2> 
        </div>
        <div class="candle">
        <div class="flame">
          <div class="shadows"></div>
          <div class="top"></div>
          <div class="middle"></div>
          <div class="bottom"></div>
        </div>
        <div class="wick"></div>
        <div class="wax"></div>
      </div>
        </div>
        
      <div>
          {/* <div><H2>Join Us</H2></div> */}
          <a href="http://docs.google.com/forms/d/e/1FAIpQLSccEKLUw_06re-iwR_pZ5yNiCV4aHxzh-rqDUrP-m1RC7lQTw/viewform" target="_blank">
          <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "150px"
        }}><DefaultButton>Get Membership</DefaultButton></div>
        </a>
        </div>
        </div>
        
        
      
      {/* <div className='card1'>
        <div className='card2'>
        <H3>Who we are</H3>
        <P>With an intent to work towards societal betterment and to help the students maintain their socially traditional roots, Social Wing RAIT was founded in the year 2013. We are dedicated to providing a grass-roots outlook of societal issues to our student members and finding and working on solutions to these issues. Ever since its inception, Social Wing has become a significant part of RAIT and has observed increasing participation of students with each passing year.</P>
        </div>
      </div>

      <div className='card1'>
        <div className=''>
        <H3>What we do</H3>
        <P>Throughout the academic year, the committee conducts various activities like Tree Plantation Drive, Cleanliness Drive, Wall Painting, Street Plays, Blood Donation Drive and so on. Major festivals like Diwali and Holi are celebrated by the committee members at orphanages and old-age homes to spread smiles, bring warmth and joy into the lives of the people living there. Wing also organizes Udaan - one of Navi Mumbai's leading marathons and a notable fundraiser event.</P>
        </div>
      </div> */}
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
        


  <div id="countdown-div">
   
    <div class="countdown-timer">
      <div class="countdown-timer-box">
        <h1 id="hours" class="text-6xl font-bold">60 +</h1>
        <h4 class="text-2xl font-semibold">Events Done</h4>
      </div>
      <div class="countdown-timer-box">
        <h1 id="minutes" class="text-6xl font-bold">1200 +</h1>
        <h4 class="text-2xl font-semibold">Happy Volunteers</h4>
      </div>
      <div class="countdown-timer-box">
        <h1 id="seconds" class="text-6xl font-bold">100 +</h1>
        <h4 class="text-2xl font-semibold">Children Educated</h4>
      </div>
    </div>
    {/* <!-- <a href="#stats-div"><button class="button1">Next Div</button></a> --> */}
  </div>

  <OurEvents/>

    </>
  )
}

export default Home
