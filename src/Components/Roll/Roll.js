import React from 'react'

export default function Roll({calculateDamage}) {
  let damage = calculateDamage()

  const rollAgain = () => {
    damage = calculateDamage();
  }

  return (
    <div>
      <h3 className='damage'>{damage}</h3>
      <button onClick={() => {rollAgain()}}>Roll again</button>
    </div>
  )
}
