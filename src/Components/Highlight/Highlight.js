import React from 'react'

export default function Highlight(chosenWeapon) {
  console.log(chosenWeapon)
  return (
    <div className='chosen-weapon'>
      <p>{chosenWeapon.chosenWeapon.name}</p>
      <p>{chosenWeapon.chosenWeapon.cost}</p>
      <p>{chosenWeapon.chosenWeapon.damage_type}</p>
      <p>{chosenWeapon.chosenWeapon.weight}</p>
      {chosenWeapon.chosenWeapon.properties && <p>{chosenWeapon.chosenWeapon.properties.join(', ')}</p>}
    </div>
  )
}
