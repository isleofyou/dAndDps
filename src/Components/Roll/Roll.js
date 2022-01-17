import React, { useState } from 'react';
import './Roll.css';


export default function Roll({calculateDamage}) {

  const [damage, setDamage] = useState(calculateDamage());

  return (
    <div className='roll-container'>
      <div className='damage-container'>
        <img src={require('../../assets/hitsplat.png')} alt='hit-splat'/>
        <h3 className='damage'>{damage}</h3>
      </div>
     <button onClick={() => setDamage(calculateDamage())}>Roll again</button>
    </div>
  )
}
