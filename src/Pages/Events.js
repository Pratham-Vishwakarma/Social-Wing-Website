import React, {useEffect} from "react";
import EventsData from "../components/EventsData";
import "../Styles/Events.css"; // Custom styles for events

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []);
  return (
    <div className="events">
      <main className="container">
        <h1 className="text-center mb-5">Events Conducted By Us</h1>
        <div className="row">
          {EventsData.map((props, ind) => (
            <div className="col-md-3" key={ind}>
              <div className="event-card">
                <img
                  src={props.img}
                  alt={props.title}
                  className="event-card-img"
                />
                <div className="event-card-body">
                  <h5>{props.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Events;
