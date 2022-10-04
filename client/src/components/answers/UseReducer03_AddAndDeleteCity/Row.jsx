import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

function Row({ city, dispatch }) {

  return (
    <tr>
      <th scope="row">{city.id}</th>
      <td>{city.title}</td>
      <td>{city.founded}</td>
      <td>{city.area}</td>
      <td>{city.officialLanguage}</td>
      <td>{city.population}</td>
      <td>{city.description}</td>
      <td><i className="bi bi-x-lg" role="button" onClick={() => dispatch({ type: 'SHOW_MODAL', payload: city.id })}></i></td>
    </tr >
  );
}

export default Row;