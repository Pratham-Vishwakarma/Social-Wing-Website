import React from 'react';
import EventsData from './EventsData';
import styled from "styled-components";


const H3 = styled.h3`
  font-size: 20px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`;

const desc = styled.p`
  font-size: 8px;
`;

const DIV = styled.div`
  height: 500px;
`;


const IMG = styled.img`
@media (max-width: 480px){
  height: 100%;
  width: 100%;
}
`;

const Event = (props) => {
    return (
        
             <div class="col-md-6 ">
               <DIV class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative shadow p-3 mb-5 bg-white rounded">
                <div class="col p-3 d-flex flex-column position-static">         
                   <H3 class="mb-0">{props.title}</H3>
                   {/* <div class="mb-1 text-body-secondary">{props.date}</div>
                   <desc class="card-text mb-auto">{props.info}</desc> */}
                </div>
                <div class="col-md-6 col-sm-12">
                  <IMG height="350px" width="450px" src={props.img} alt="Hello" /> 
                  {/* <img height="350px" width="400px" src={props.img} alt="Hello" />  */}
                </div>
              </DIV>
             </div>
        
    )
  }
  
  export default Event