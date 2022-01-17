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
      <tbody>
          {items.map((item) => (
            <tr className='row' key={item.name} onClick={() => props.setWeapon(item.name)}>
              <td>{item.name}</td>
              <td>${convertCost(item.cost)}</td>
              <td className='category'>{convertCategory(item.category.split(' ')[1])}</td>
            </tr>
          ))}
        </tbody>
    </table>
  );
};

export default WeaponsTable;
