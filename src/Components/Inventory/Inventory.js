import React from 'react'; 
import WeaponsCard from '../WeaponsCard/WeaponsCard';

export default function Inventory({ weapons }) {

  const allWeapons = weapons.map(weapon => {
    return (
        <WeaponsCard
          name={weapon.name}
          cost={weapon.cost}
          category={weapon.category}
          />
      )
    });

  return (
    <main className='inventory-container'>
      {allWeapons}
    </main>
  );  
}
