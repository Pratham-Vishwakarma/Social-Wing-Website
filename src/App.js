import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./Pages/Home";
import Events from './Pages/Events';
import Team from './Pages/Team';
import NSS from './Pages/NSS';
import Gallery from './Pages/Gallery';
import Udaan from './Pages/udaan';
import Rules from './Pages/Rules';
import Location from './Pages/Location';

function App() {
  return (
    <Router>
      <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/nss" element={<NSS/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/udaan" element={<Udaan/>}/>
          <Route path="/rules" element={<Rules/>}/>
          <Route path="/location" element={<Location/>}/>
        </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
