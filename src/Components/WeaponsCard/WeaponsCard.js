import React from 'react';
import PropTypes from 'prop-types';

const WeaponsCard = ({ setWeapon, name, cost, category }) => {
  return (
    <div className='weapon-container'>
      <p onClick={() => setWeapon(name)}>{name} {cost} {category}</p>
    </div>
  )
}

WeaponsCard.propTypes = {
  name: PropTypes.number.isRequired,
  cost: PropTypes.string.isRequired,
};

export default WeaponsCard;