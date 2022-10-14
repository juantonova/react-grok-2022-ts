import React from 'react';
import City from './types/City';

function Row({ city }: { city: City }): JSX.Element {
  return (
    <tr>
      <th scope="row">{city.id}</th>
      <td>{city.title}</td>
      <td>{city.founded}</td>
      <td>{city.area}</td>
      <td>{city.officialLanguage}</td>
      <td>{city.population}</td>
    </tr>
  );
}

export default Row;
