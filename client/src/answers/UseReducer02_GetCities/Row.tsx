import React from 'react';
import City from './types/City';

function Row({ city }: { city: City }): JSX.Element {
  return (
    <tr className="table-row">
      <th>{city.id}</th>
      <td className="city-name">{city.title}</td>
      <td>{city.founded}</td>
      <td>{city.area}</td>
      <td>{city.officialLanguage}</td>
      <td>{city.population}</td>
    </tr>
  );
}

export default Row;
