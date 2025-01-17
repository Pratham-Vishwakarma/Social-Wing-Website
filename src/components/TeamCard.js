import React from 'react';

const TeamCard = ({ imgUrl, name, position1, position2 }) => {
  return (
    <div className='team__item'>
      <div className='team__img'>
        <img loading="lazy" src={imgUrl} alt={name} />
      </div>
      <div className='team__details'>
        <h4>{name}</h4>
        <p className='description'>{position1}</p>
        {position2 && <p className='description'>{position2}</p>}
        <div className='team__member-social'>
          <span><i className='ri-linkedin-line' aria-label="LinkedIn"></i></span>
          <span><i className='ri-twitter-line' aria-label="Twitter"></i></span>
          <span><i className='ri-facebook-line' aria-label="Facebook"></i></span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
