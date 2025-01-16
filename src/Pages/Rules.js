import React from 'react';
import '../Styles/Rules.css';
import styled from 'styled-components'

const H1 = styled.h1`
font-size: 30px;
text-align: center;
`

const H2 = styled.h1`
font-size: 22px;
color: 	#484848;
`

const H3 = styled.h1`
font-size: 22px;
color: 	#484848;
`

const Rules = () => {
  return (
    
    <div>
      <H1 className='title'><u>Rules and Regulations</u></H1>
      <div className='container-rules1'>
            <div className='sent-rules'>
                <H2><b>1: Identification Requirement:</b></H2>
                <H3>- Participants must carry a valid ID proof for verification purposes.</H3>
            </div>
            <div className='sent-rules'>
                <H2><b>2: Arrival Recommendation</b>:</H2>
                <H3>- It is strongly advised to arrive at the venue at least 30 minutes before the event starts.</H3>
            </div>
            <div className='sent-rules'>
                <H2><b>3: Refund Policy:</b></H2>
                <H3>- No refunds will be provided for purchased tickets, even in the event of rescheduling.</H3>
            </div>
            <div className='sent-rules'>
                <H2><b>4: Prohibited Items:</b></H2>
                <H3>- For the safety of all participants, the following items are strictly prohibited within the venue: weapons, knives, guns, fireworks, laser devices, and alcohol bottles.</H3>
            </div>
            <div className='sent-rules'>
                <H2><b>5: Liability Disclaimer:</b></H2>
                <H3>- The sponsors, performers, and organizers are not liable for any injuries or damages that may occur during the event.</H3>
            </div>
            <div className='sent-rules'>
                <H2><b>6: Finishers Medal Distribution:</b></H2>
                <H3>- Finishers Medals will be awarded exclusively to the top 100 runners upon completion of the race.</H3>
            </div>
            <div className='sent-rules'>
                <H2><b>7: Management Rights:</b></H2>
                <H3>- All rights are reserved by the management, and these terms are subject to change with or without prior notice.</H3>
            </div>
            <div className='sent-rules'>
                <H2><b>8: Participant Acceptance:</b></H2>
                <H3>- By registering for the event, participants acknowledge and accept all the terms and conditions set forth by the organizers.</H3>
            </div>
            {/* Add more rules as needed */}
        
      </div>

    <div className='schedule'>
    <H1 className='title'><u>Schedule</u></H1>
    <div className='container-rules1'>
    <H2><b>5:00 - 6:30</b> - Kit Collection</H2>
    <H2><b>6:30 - 7:00</b> - Warm Up</H2>
    <H2><b>7:00 - 8:30</b> - Run</H2>
    <H2><b>8:30 - 9:00</b> - Zumba</H2>
    <H2><b>9:00 -10:00</b> - Prize Distribution</H2>
    </div>
    </div> 

    </div>
    

  );
};

// function Rules(){
//     return(
//         <>
//         <h1>hello</h1>
//         </>
//     )
// }

export default Rules;