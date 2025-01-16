import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Img1 from '../Images/Events/1Uddan.JPG';
import Img2 from '../Images/Events/1tp.JPG';
import Img3 from '../Images/Events/1 Donation Drive.jpg';
import Img4 from '../Images/Events/1 cleanup drive.jpg';
import Img5 from '../Images/Events/1orphanage.jpg';
const H1 = styled.h1`
text-align: center;
margin-bottom: 20px;
margin-top: 30px;
`;

const HH1 = styled.h1`
text-align: center;
margin-top: 30px;
@media only screen and (max-width: 480px) {
margin-bottom: 10px;
font-size: 15px;
}
`;




const OurEvents = (props) => {
    return (
   <>
    <H1 class="display-5 fw-bold text-body-emphasis">Our Events</H1>


<div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active">
    <img src={Img1} class="d-block mx-auto w-50 h-50" alt="..."/>
      <div class="container">
        <div class="carousel-caption">
          <HH1>Udaan Marathon</HH1>    
        </div>
      </div>
    </div>

    <div class="carousel-item">
    <img src={Img2} class="d-block mx-auto w-50 h-50" alt="..."/>
      <div class="container">
        <div class="carousel-caption">
          <HH1>Tree Plantation</HH1>
        </div>
      </div>
    </div>

    <div class="carousel-item">
    <img src={Img3} class="d-block mx-auto w-50 h-50" alt="..."/>
      <div class="container">
        <div class="carousel-caption">
          <HH1>Donation Drive</HH1>
        </div>
      </div>
    </div>

    <div class="carousel-item">
    <img src={Img4} class="d-block mx-auto w-50 h-50" alt="..."/>
      <div class="container">
        <div class="carousel-caption">
          <HH1>Cleanup Drive</HH1>
        </div>
      </div>
    </div>

    <div class="carousel-item">
    <img src={Img5} class="d-block mx-auto w-50 h-50" alt="..."/>
      <div class="container">
        <div class="carousel-caption">
          <HH1>Orphanage Visits</HH1>
        </div>
      </div>
    </div>



  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden-focusable ">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden-focusable">Next</span>
  </button>
</div>

<p><a class="btn btn-lg btn-primary mt-3"><Link to="/events">Know More</Link></a></p>



  {/* <div class="row">
    <div class="col-lg-4">
    <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" height="20px" class="d-block mx-auto w-50 h-50" alt="..."/>
      <h2 class="fw-normal">Heading</h2>
      <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
      <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
    </div>
    <div class="col-lg-4">
    <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" height="20px" class="d-block mx-auto w-50 h-50" alt="..."/>
      <h2 class="fw-normal">Heading</h2>
      <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
      <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
    </div>
    <div class="col-lg-4">
    <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" height="20px" class="d-block mx-auto w-50 h-50" alt="..."/>
      <h2 class="fw-normal">Heading</h2>
      <p>And lastly this, the third column of representative placeholder content.</p>
      <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
    </div>
  </div>
</div> */}

  


   </>     
        
    )
  }
  
  export default OurEvents


//   