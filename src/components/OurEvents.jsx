import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const CarouselButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  &:hover {
    background-color: gray;
  }
`;

const OurEvents = (props) => {
  return (
    <div className="mb-3">
      <H1 className="display-5 fw-bold text-body-emphasis">Our Events</H1>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} className="d-block mx-auto w-50 h-50" alt="..."/>
            <div className="container">
              <div className="carousel-caption">
                <HH1>Udaan Marathon</HH1>    
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={Img2} className="d-block mx-auto w-50 h-50" alt="..."/>
            <div className="container">
              <div className="carousel-caption">
                <HH1>Tree Plantation</HH1>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={Img3} className="d-block mx-auto w-50 h-50" alt="..."/>
            <div className="container">
              <div className="carousel-caption">
                <HH1>Donation Drive</HH1>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={Img4} className="d-block mx-auto w-50 h-50" alt="..."/>
            <div className="container">
              <div className="carousel-caption">
                <HH1>Cleanup Drive</HH1>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={Img5} className="d-block mx-auto w-50 h-50" alt="..."/>
            <div className="container">
              <div className="carousel-caption">
                <HH1>Orphanage Visits</HH1>
              </div>
            </div>
          </div>
        </div>
        <CarouselButton className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden-focusable ">Previous</span>
        </CarouselButton>
        <CarouselButton className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden-focusable">Next</span>
        </CarouselButton>
      </div>
      <ButtonContainer>
        <p>
          <Link to="/events" className="btn btn-lg btn-primary mt-3">
            Know More
          </Link>
        </p>
      </ButtonContainer>
    </div>       
  )
}
export default OurEvents