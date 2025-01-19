import React, { useState, useEffect } from "react";
import '../Styles/Gallery.css';
import { IoIosCloseCircle } from "react-icons/io";
import { data } from '../components/ImageData';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []); // Empty dependency array ensures it runs only on component mount
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  
  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <div className="gallery-container">
      <div className={model? "model open" : "model"}>
          <img src={tempimgSrc} alt="" /> 
          <IoIosCloseCircle onClick={() => setModel(false)} />
      </div>
      <div className="py-4">
        <h1 style={{textAlign: 'center',}}>Events Gallery</h1>
      </div>    
      <div className="gallery">
          {data.map((item, index)=>{
              return(
                <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                    <img src={item.imgSrc} alt="" style={{width: '100%', padding: '3px'}} />
                </div>
              )
          })}
      </div>    
    </div>
  );
};
export default Gallery;