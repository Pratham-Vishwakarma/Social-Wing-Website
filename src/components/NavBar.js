import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IMG16 from "../Images/teams/whitesocialwing.png";
import IMG17 from "../Images/Assets/black dy.png";
import styled from "styled-components";

const IMG = styled.img`
    width: 60px;
`;

const IMG1 = styled.img`
    width: 100px;
`;

export default function NavBar() {
  return (

<nav class="navbar navbar-expand-lg bg-warning">
<div class="container">
  {/* <a class="navbar-brand text-white" href="#">SocialWing</a> */}
  <a class="navbar-brand text-white"><Link to="/"><IMG src={IMG16} ></IMG></Link></a>
  <IMG1 src={IMG17} ></IMG1>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page"><Link to="/">Home</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active"><Link to="/events">Events</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active"><Link to="/team">Team</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active"><Link to="/nss">NSS</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active"><Link to="/gallery">Gallery</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active"><Link to="/udaan">Udaan</Link></a>
      </li>
      
    </ul>
    
  </div>
</div>
</nav>
  );
}
