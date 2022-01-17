import React from 'react';
import PropTypes from 'prop-types';

function WeaponsCard({ props }) {
  return (
    <div className='weapon-container'>
      <p onClick={() => props.setWeapon(props.name)}>{props.name} {props.cost} {props.category}</p>
    </div>
  )
}

WeaponsCard.propTypes = {
  name: PropTypes.number,
  cost: PropTypes.string
};

export default WeaponsCard;