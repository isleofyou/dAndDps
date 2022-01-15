import React from 'react'

export default function ButtonContainer({ showAll, showFavorites, showSorting, clear}) {
  return (
    <div className='buttons-container'>
      <button className='button' onClick={showAll()}>All Items</button>
      <button className='button' onClick={showFavorites()}>Favorites</button>
      <button className='button' onClick={showSorting()}>Sort</button>
      <button className='button' onClick={clear()}>Clear</button>
    </div>
  )
}
