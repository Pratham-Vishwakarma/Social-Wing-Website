
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Footer() {
    return(
<div>
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a  class="nav-link px-2 text-body-secondary"><Link to="/">Home</Link></a></li>
      <li class="nav-item"><a  class="nav-link px-2 text-body-secondary"><Link to="/events">Events</Link></a></li>
      <li class="nav-item"><a  class="nav-link px-2 text-body-secondary"><Link to="/team">Team</Link></a></li>
      <li class="nav-item"><a  class="nav-link px-2 text-body-secondary"><Link to="/nss">NSS</Link></a></li>
      <li class="nav-item"><a  class="nav-link px-2 text-body-secondary"><Link to="/gallery">Gallery</Link></a></li>
      
    </ul>
    
    <div class="d-flex flex-column flex-sm-row justify-content-between py-2 my-2">

    <p class="text-center text-body-secondary">&copy; 2024 Social Wing, Inc</p>
    
      
    </div>
    <div>
    <p class="text-center text-body-secondary">Designed and Developed by Danish Ansari and Dhumravarna Ambre</p>
    </div>
  </footer>
</div>
</div>
    )
  };
  