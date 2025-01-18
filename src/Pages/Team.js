import React, {useEffect} from 'react';
import '../Styles/Teams.css';
import { faculty } from '../components/Faculty'; // Corrected named import
import { core } from '../components/Core'; // Corrected named import
import { jointCore } from '../components/JointCore'; // Corrected named import
import TeamCard from '../components/TeamCard';  // Reusable component

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []); // Empty dependency array ensures it runs only on component mount
  return (
    <div className='team'>
      {/* Faculty Section */}
      <section className='our__team'>
        <div className='container'>
          <div className='team__content'>
            <h2 className='subtitle'>Faculty</h2>
          </div>
          <div className='team__wrapper'>
            {faculty.map((item, idx) => (
              <TeamCard 
                key={idx} 
                imgUrl={item.imgUrl} 
                name={item.name} 
                position1={item.position1} 
                position2={item.position2}
                linkedin={item.linkedin}
                twitter={item.twitter}
                facebook={item.facebook}
                instagram={item.instagram}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Section */}
      <section className='our__team'>
        <div className='container'>
          <div className='team__content'>
            <h2 className='subtitle'>Core</h2>
          </div>
          <div className='team__wrapper'>
            {core.map((item, idx) => (
              <TeamCard 
                key={idx} 
                imgUrl={item.imgUrl} 
                name={item.name} 
                position1={item.position1} 
                position2={item.position2}
                linkedin={item.linkedin}
                twitter={item.twitter}
                facebook={item.facebook}
                instagram={item.instagram}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Joint Core Section */}
      <section className='our__team'>
        <div className='container'>
          <div className='team__content'>
            <h2 className='subtitle'>Joint Core</h2>
          </div>
          <div className='team__wrapper'>
            {jointCore.map((item, idx) => (
              <TeamCard 
                key={idx} 
                imgUrl={item.imgUrl} 
                name={item.name} 
                position1={item.position1} 
                position2={item.position2}
                linkedin={item.linkedin}
                twitter={item.twitter}
                facebook={item.facebook}
                instagram={item.instagram}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
