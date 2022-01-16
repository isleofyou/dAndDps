import React, { useState } from 'react';
import melee from '../../assets/melee.png';
import ranged from '../../assets/ranged.png';
import './WeaponsTable.scss';

const useSortableData = (items, config = null) => {

  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const WeaponsTable = (props) => {

  const { items, requestSort, sortConfig } = useSortableData(props.weapons);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const convertCost = (cost) => {
    return cost.split(' ')[0];

  }

  const convertCategory = (category) => {
    if (category.includes('Melee')) {
      return (
        <img src={melee} alt='melee'/>
      )
    } else {
      return (
        <img className='damage-type' src={ranged} alt='ranged'/>
      )
    }
  }

  return (
    <table className='weapon-table'>
      <caption>Weapons</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('cost')}
              className={getClassNamesFor('cost')}
            >
              Cost
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('category')}
              className={getClassNamesFor('category')}
            >
              Category
            </button>
          </th>
        </tr>
      </thead>
    <div className='scroll'>
      <tbody>
          {items.map((item) => (
            <tr key={item.name} onClick={() => props.setWeapon(item.name)}>
              <td>{item.name}</td>
              <td>${convertCost(item.cost)}</td>
              <td className='category'>{convertCategory(item.category)}</td>
            </tr>
          ))}
        </tbody>
      </div>  
    </table>
  );
};

// export default function WeaponsTable() {
//   return (
//     <div className="App">
//       <WeaponsTable
//         products={[
//           { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
//           { id: 2, name: 'Milk', price: 1.9, stock: 32 },
//           { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
//           { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
//           { id: 5, name: 'Butter', price: 0.9, stock: 99 },
//           { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
//           { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
//         ]}
//       />
//     </div>
//   );
// }

export default WeaponsTable;
