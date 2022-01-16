import React from 'react'
import { Link } from 'react-router-dom';

export default function Highlight(chosenWeapon) {
  const weaponPics = require.context('../../assets/weaponPics/', true);
  const highlightWeapon = chosenWeapon.chosenWeapon;
  return (
    <div className='chosen-weapon'>
      <img src={require(`../../assets/weaponPics/${highlightWeapon.slug}.png`)} alt={highlightWeapon.name}/>
      <h3>{highlightWeapon.name}</h3>
      <p>Cost: {highlightWeapon.cost}</p>
      <p>Damage type: {highlightWeapon.damage_type}</p>
      <p>Weight: {highlightWeapon.weight}</p>
      {highlightWeapon.properties && <p>Properties: {highlightWeapon.properties.join(', ')}</p>}
      <Link to='/roll'>
        <button>Roll</button>
      </Link>
    </div>
  )
}
