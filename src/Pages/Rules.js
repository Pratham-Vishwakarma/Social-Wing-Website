import React, {useEffect} from 'react';
import '../Styles/Rules.css';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
  text-decoration: underline;
`;

const H2 = styled.h2`
  font-size: 20px;
  color: #484848;
  font-weight: bold;
  margin-bottom: 10px;
`;

const H3 = styled.h3`
  font-size: 16px;
  color: #666666;
  line-height: 1.5;
  margin-left: 20px;
`;

const Rules = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []); // Empty dependency array ensures it runs only on component mount

  return (
    <div className='rules'>
        <H1 className='title'>Rules and Regulations</H1>
        <div className='container-rules1'>
            <div className='rules1'>
                <div className='sent-rules'>
                <H2>1: Identification Requirement</H2>
                <H3>- Participants must carry a valid ID proof for verification purposes.</H3>
                </div>
                <div className='sent-rules'>
                <H2>2: Arrival Recommendation</H2>
                <H3>- It is strongly advised to arrive at the venue at least 30 minutes before the event starts.</H3>
                </div>
                <div className='sent-rules'>
                <H2>3: Refund Policy</H2>
                <H3>- No refunds will be provided for purchased tickets, even in the event of rescheduling.</H3>
                </div>
                <div className='sent-rules'>
                <H2>4: Prohibited Items</H2>
                <H3>- For the safety of all participants, the following items are strictly prohibited within the venue: weapons, knives, guns, fireworks, laser devices, and alcohol bottles.</H3>
                </div>
                <div className='sent-rules'>
                <H2>5: Liability Disclaimer</H2>
                <H3>- The sponsors, performers, and organizers are not liable for any injuries or damages that may occur during the event.</H3>
                </div>
                <div className='sent-rules'>
                <H2>6: Finishers Medal Distribution</H2>
                <H3>- Finishers Medals will be awarded exclusively to the top 100 runners upon completion of the race.</H3>
                </div>
                <div className='sent-rules'>
                <H2>7: Management Rights</H2>
                <H3>- All rights are reserved by the management, and these terms are subject to change with or without prior notice.</H3>
                </div>
                <div className='sent-rules'>
                <H2>8: Participant Acceptance</H2>
                <H3>- By registering for the event, participants acknowledge and accept all the terms and conditions set forth by the organizers.</H3>
                </div>
            </div>
        </div>

        <div className='rules1'>
            <div className='schedule'>
                <H1>Schedule</H1>
                <div className='container-schedule'>
                <H2><b>5:00 - 6:30</b> - Kit Collection</H2>
                <H2><b>6:30 - 7:00</b> - Warm Up</H2>
                <H2><b>7:00 - 8:30</b> - Run</H2>
                <H2><b>8:30 - 9:00</b> - Zumba</H2>
                <H2><b>9:00 -10:00</b> - Prize Distribution</H2>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Rules;
