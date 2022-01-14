import React from 'react'

export default function WeaponsCard({ name, cost, category, setWeapon }) {
  return (
    <div className='weapon-container'>
      <p onClick={() => setWeapon(name)}>{name} {cost} {category}</p>
    </div>
  )
}
