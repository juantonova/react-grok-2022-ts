import React from 'react';

function Basic04_List() {

  const towns = [{ id: 1, title: 'Moscow' }, { id: 2, title: 'Sankt-Peterburg' }, { id: 3, title: 'Kazan' }, { id: 4, title: 'Samara' }, { id: 5, title: 'Ekaterinburg' }]

  return (
    <ul className='list'>
      {towns.length ? towns.map(el => <li key={el.id} className='list-item'>{el.title}</li>) : <li>No data</li>}
    </ul>
  );
}

export default Basic04_List;