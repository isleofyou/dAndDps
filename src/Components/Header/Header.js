import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
export default function Header({ clear, chosenWeapon }) {

  return (
    <div className='header' onClick={() => clear()}>
      <p className='app-name'>D&DPS</p>
      <div className='nav-container'>
      { chosenWeapon && 
        <button className='button' onClick={() => clear()}>Back to main</button>}
      
      </div>
    </div>
  )
}


Header.propTypes = {
  clear: PropTypes.func,
  chosenWeapon: PropTypes.object,
};
