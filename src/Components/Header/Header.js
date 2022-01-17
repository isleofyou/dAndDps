import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({showAll, clear, chosenWeapon}) {

  return (
    <div className='header'>
      <p className='app-name'>D&DPS</p>
      <div className='nav-container'>
      { chosenWeapon && 
        <button className='button' onClick={() => clear()}>Clear</button>}
      
      </div>
    </div>
  )
}
