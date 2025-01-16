import React from "react";
import Event from "../components/Event";
import EventsData
 from "../components/EventsData";
const Events = () => {
  return (
    <div>
     

      <main class="container mt-5 mb-5">
      <h1>Events</h1>
        <div class="row mb-2">
               
              {
                EventsData.map((props,ind) => {
                  return <Event 
                  key={ind}
                  title={props.title}
                  date={props.date}
                  info={props.info}
                  img={props.img}
                  />                  
                })
              } 

        </div>
      </main>

</div>
  );
};


export default Events;
