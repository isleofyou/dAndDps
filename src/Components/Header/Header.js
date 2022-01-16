import React from 'react';


export default function Header(showAll, clear) {

  return (
    <div>
      <p className='app-name'>D&DPS</p>
      <button className='button' onClick={showAll}>All Items</button>
      <button className='button' onClick={clear}>Clear</button>
    </div>
  )
}
