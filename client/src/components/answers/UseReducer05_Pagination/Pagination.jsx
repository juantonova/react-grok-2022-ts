import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ state }) {
  return (
    <section className='col-10'>
      <ul className="pagination">
        {state.pages.length ? state.pages.map((page) =>
          <li key={page} className="page-item">
            <Link className="page-link" to={`/useReducer05/pages/${page}?limit=${state.limit}`}>{page}</Link>
          </li>)
          :
          <li>No data</li>}
      </ul>
    </section>
  );
}

export default Pagination;