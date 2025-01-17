import React from 'react';
import styled from 'styled-components';

// Styled-components
const EventCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const EventDetails = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EventTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

const EventDate = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 10px;
`;

const EventDesc = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const Event = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <EventCard>
        <div className="col-md-6 col-sm-12">
          <EventImage src={props.img} alt="Event Image" />
        </div>
        <EventDetails className="col p-3">
          <EventTitle>{props.title}</EventTitle>
          <EventDate>{props.date}</EventDate>
          <EventDesc>{props.info}</EventDesc>
        </EventDetails>
      </EventCard>
    </div>
  );
};

export default Event;
