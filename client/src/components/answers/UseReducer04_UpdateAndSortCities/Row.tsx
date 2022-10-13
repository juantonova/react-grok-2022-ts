import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import City from './types/City';

function Row({
  city,
  showDeleteModal,
  showUpdateModal,
}: {
  city: City;
  showDeleteModal: (id: number) => void;
  showUpdateModal: (id: number) => void;
}): JSX.Element {
  return (
    <tr>
      <th scope="row">{city.id}</th>
      <td>{city.title}</td>
      <td>{city.founded}</td>
      <td>{city.area}</td>
      <td>{city.officialLanguage}</td>
      <td>{city.population}</td>
      <td>{city.description}</td>
      <td>
        <i
          className="bi bi-pencil-square m-1"
          role="button"
          onClick={() => showDeleteModal(city.id)}
        />
        <i className="bi bi-x-lg m-1" role="button" onClick={() => showUpdateModal(city.id)} />
      </td>
    </tr>
  );
}

export default Row;
