import React from 'react'

export default function Highlight(chosenWeapon) {
  const highlightWeapon = chosenWeapon.chosenWeapon;

  return (
    <div className='chosen-weapon'>
      <p>{highlightWeapon.name}</p>
      <p>{highlightWeapon.cost}</p>
      <p>{highlightWeapon.damage_type}</p>
      <p>{highlightWeapon.weight}</p>
      {highlightWeapon.properties && <p>{highlightWeapon.properties.join(', ')}</p>}
    </div>
  )
}
