import React from 'react';
import City from './types/City';

function Row({ city }: { city: City }): JSX.Element {
  return (
    <tr className="table-row">
      <th>{city.id}</th>
      <td>{city.title}</td>
      <td>{city.founded}</td>
      <td>{city.area}</td>
      <td>{city.officialLanguage}</td>
      <td>{city.population}</td>
      <td>{city.description}</td>
    </tr>
  );
}

export default Row;
