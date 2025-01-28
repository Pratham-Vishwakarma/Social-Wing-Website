import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EventsData from "../components/EventsData";
import "../Styles/EventDetail.css"; // Reuse existing styles

const EventDetails = () => {
  const { eventId } = useParams(); // Get event ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []);

  const event = EventsData.find((e, ind) => ind === parseInt(eventId)); // Locate the event by ID

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <div className="event-details-container">
        <div className="event-details-header">
            <button onClick={() => navigate(-1)} className="custom-back-btn mb-3">Back</button>
            <h1 className="text-center mb-4">{event.title}</h1>
        </div>

        <div className="event-details-body">
          <img src={event.img} alt={event.title} className="event-detail-img mb-4" />
          <p>{event.info}</p>
        </div>
    </div>
  );
};

export default EventDetails;
