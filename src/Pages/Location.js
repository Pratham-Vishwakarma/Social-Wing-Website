// src/components/Rules.js
import React, {useEffect} from 'react';
import '../Styles/Location.css';
import { useNavigate } from 'react-router-dom';

function Location() {  
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []); // Empty dependency array ensures it runs only on component mount
  
  return (
    <>
      <div>
        <div className="container-map1">
          <div>
            <button onClick={() => navigate(-1)} className="custom-back-btn mb-3 mt-2">Back</button>
            <h2 className="map-text">Location</h2>
          </div>
          <div className="container-map">
            <iframe 
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d15086.402828795757!2d73.01889532905983!3d19.037308670594044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e2!4m5!1s0x3be7c3c53b1e255b%3A0x3fa8b73a42118233!2sD%20Y%20Patil%20Sports%20Stadium!3m2!1d19.0420838!2d73.0267849!4m5!1s0x3be7c36459d80cff%3A0xdcdb0de3ae783ea1!2sChand%20Auto%20Garage%2C%20Bhimashankar%20society%2C%20Bhimashankar%20CHS%2C%20Sector%2019A%2C%20Nerul%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!3m2!1d19.032634899999998!2d73.0287997!4m5!1s0x3be7c3c63298d247%3A0x1072a704a6290bdb!2sSavitribhai%20Phule%20Marg%2C%20Sector%2019%2C%20Nerul!3m2!1d19.0332942!2d73.0279994!4m5!1s0x3be7c3b8a9bfa85d%3A0x4c44a27cd231235f!2sBasveshewar%20Maharaj%20Marg%2C%20Nerul%20East%2C%20Sector%2019A%2C%20Nerul!3m2!1d19.0297767!2d73.0232937!4m5!1s0x3be7c3c0c6f8292d%3A0x7dbf5c50bb3b1a3!2sSRM%20Trust!3m2!1d19.0313992!2d73.0218853!4m5!1s0x3be7c3c080e94d4d%3A0xd86b9e1ce5be6bd5!2sRing%20Rd%205%2C%20Nerul%20East%2C%20Sector%2021%2C%20Nerul!3m2!1d19.0294369!2d73.0198319!4m5!1s0x3be7c3bebe504b21%3A0xc2baa22c84d3d035!2sKamladevi%20Birajdar%20Marg%2C%20Nerul%20East%2C%20Sector%2021%2C%20Nerul!3m2!1d19.0249374!2d73.0213569!4m5!1s0x3be7c3c36890a593%3A0x69e0ebc14505d2cc!2sJagatguru%20Aadi%20Shankracharya%20Marg!3m2!1d19.0343552!2d73.019714!4m5!1s0x3be7c3c1513c9cbb%3A0xe156406e98bddfe7!2sAyyappa%20Temple%20Road!3m2!1d19.0371754!2d73.0243959!4m5!1s0x3be7c3dc15378481%3A0x951d4be5209d224b!2sCourtyard%20Navi%20Mumbai!3m2!1d19.0434075!2d73.0270221!5e0!3m2!1sen!2sin!4v1738083633800!5m2!1sen!2sin" 
              referrerpolicy="no-referrer-when-downgrade"
              width="600"
              height="450"
              style={{ border: "0", borderRadius: "20px" }}
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