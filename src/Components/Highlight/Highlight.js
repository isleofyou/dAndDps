import React from 'react'
import { Link } from 'react-router-dom';
import './Highlight.css';

export default function Highlight(chosenWeapon) {
  const highlightWeapon = chosenWeapon.chosenWeapon;
  return (
    <div className='chosen-weapon'>
      <img className='weapon-pic' src={require(`../../assets/weaponPics/${highlightWeapon.slug}.png`)} alt={highlightWeapon.name}/>
      <h3>{highlightWeapon.name}</h3>
      <p>Cost: {highlightWeapon.cost}</p>
      <p>Damage type: {highlightWeapon.damage_type}</p>
      <p>Weight: {highlightWeapon.weight}</p>
      {highlightWeapon.properties && <p>Properties: {highlightWeapon.properties.join(', ')}</p>}
      <div className='button-container'>
        <Link to='/roll'>
          <button>Roll</button>
        </Link>
      </div>
    </div>
  )
}
