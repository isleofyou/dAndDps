import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Highlight.css';

export default function Highlight(chosenWeapon) {

  const [rolling, setRolling] = useState(true);
  
  const hideRoll = () => {
    setRolling(false);
  }

  const highlightWeapon = chosenWeapon.chosenWeapon;
  return (
    <div className='weapon-container'>
      <div className='chosen-weapon'>
        <div className='centered'>
          <img className='weapon-pic' src={require(`../../assets/weaponPics/${highlightWeapon.slug}.png`)} alt={highlightWeapon.name}/>
          <h3 className='weapon-name'>{highlightWeapon.name}</h3>
        </div>
        <p className='weapon-info'>Damage: {highlightWeapon.damage_dice}</p>
        <p className='weapon-info'>Cost: {highlightWeapon.cost}</p>
        <p className='weapon-info'>Damage type: {highlightWeapon.damage_type}</p>
        <p className='weapon-info'>Weight: {highlightWeapon.weight}</p>
        {highlightWeapon.properties && <p className='weapon-info'>Properties: {highlightWeapon.properties.join(', ')}</p>}
        <div className='button-container'>
          <Link to='/roll'>
            {rolling && <button onClick={() => hideRoll()}>Roll</button>   }
          </Link>
        </div>
      </div>
    </div>
  )
}
