import React from 'react';
import { Link } from 'react-router-dom';
import State from './types/State';

function Pagination({
  state,
  choosePage,
}: {
  state: State;
  choosePage: (page: number) => void;
}): JSX.Element {
  return (
    <section className="col-10">
      <ul className="pagination">
        {state.pages ? (
          state.pages.map((page: number) => (
            <li key={page} className="page-item">
              <Link
                className="page-link"
                to={`/useReducer05/pages/${page}?limit=${state.limit}`}
                onClick={() => choosePage(page)}
              >
                {page}
              </Link>
            </li>
          ))
        ) : (
          <li>No data</li>
        )}
      </ul>
    </section>
  );
}

export default Pagination;
