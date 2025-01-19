import React from 'react';

const TeamCard = ({ imgUrl, name, position1, position2, linkedin, twitter, facebook, instagram }) => {
  return (
    <div className='team__item'>
      <div className='team__img'>
        <img src={imgUrl} alt={name} />
      </div>
      <div className='team__details'>
        <h4>{name}</h4>
        <p className='description'>{position1}</p>
        {position2 && <p className='description'>{position2}</p>}
        <div className='team__member-social'>
          {/* LinkedIn */}
          {linkedin && (
            <span>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <i className='ri-linkedin-line' aria-label="LinkedIn"></i>
              </a>
            </span>
          )}

          {/* Twitter */}
          {twitter && (
            <span>
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <i className='ri-twitter-line' aria-label="Twitter"></i>
              </a>
            </span>
          )}

          {/* Facebook */}
          {facebook && (
            <span>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <i className='ri-facebook-line' aria-label="Facebook"></i>
              </a>
            </span>
          )}
          {/* Instagram */}
          {instagram && (
            <span>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <i className='ri-instagram-line' aria-label="Instagram"></i>
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
