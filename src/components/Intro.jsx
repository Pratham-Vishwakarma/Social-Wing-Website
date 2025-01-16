import React from 'react';
import EventsData from './EventsData';
import IMG16 from "../Images/Events/sow logo.jpg";
import styled from 'styled-components';

const IMG = styled.img`
   border-radius: 50%;
   margin-bottom :20px;
`;

const Intro = (props) => {
    return (
        
            <div class="px-4 py-5 my-5 text-center">
               <IMG class="d-block mx-auto mb-4 " src={IMG16} alt="" width="190" height="190"/>
               <h1 class="display-5 fw-bold text-body-emphasis">{props.title}</h1>
               <div class="col-lg-6 mx-auto">
                 <p class="lead mb-4">{props.description}</p>
               <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  {/* <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
               </div>
             </div>
            </div>
        
    )
  }
  
  export default Intro