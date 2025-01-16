// src/components/Rules.js
import React from 'react';
import '../Styles/Location.css';

function Location() {
  return (
    <>
    <div>
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
  </div>

  </>
  );
};

export default Location;