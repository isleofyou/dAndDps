import React from 'react'

export default function WeaponsCard(name, cost, category) {
  return (
    <div className='weapon-container'>
      <p>{name} {cost} {category}</p>
    </div>
  )
}
