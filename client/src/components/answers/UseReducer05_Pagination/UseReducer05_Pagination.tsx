import React, { useEffect, useReducer } from 'react';
import Pagination from './Pagination';
import Row from './Row';
import City from './types/City';
import reducer from './Reducer';
import State from './types/State';

const initialState: State = {
  cities: [],
  pages: [],
  limit: 8,
};

function UseReducer05_Pagination(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setArrPages = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    fetch(`${process.env.REACT_APP_URL}/cities/count`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ limit: Number(event.target.value) }),
    })
      .then((res) => res.json())
      .then((arrPages) => {
        dispatch({ type: 'INIT_PAGES', payload: arrPages });
        dispatch({ type: 'SET_LIMIT', payload: Number(event.target.value) });
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/cities/count`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ limit: Number(state.limit) }),
    })
      .then((res) => res.json())
      .then((arrPages) => {
        dispatch({ type: 'INIT_PAGES', payload: arrPages });
      });

    fetch(`${process.env.REACT_APP_URL}/pages/1?limit=${state.limit}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'GET_CITIES', payload: data });
      });
  }, [state.limit]);

  const choosePage = (page: number): void => {
    fetch(`${process.env.REACT_APP_URL}/pages/${page}?limit=${state.limit}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'GET_CITIES', payload: data });
      });
  };

  return (
    <section className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Founded</th>
            <th scope="col">Area</th>
            <th scope="col">Official Language</th>
            <th scope="col">Population</th>
            <th scope="col">Description</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {state.cities.length ? (
            state.cities.map((city: City) => <Row key={city.id} city={city} />)
          ) : (
            <tr>
              <th scope="col">No data</th>
            </tr>
          )}
        </tbody>
      </table>

      <nav className="row">
        <Pagination state={state} choosePage={choosePage} />

        <section className="col-1 offset-1">
          <select onChange={setArrPages} className="form-select">
            <option>8</option>
            <option>24</option>
          </select>
        </section>
      </nav>
    </section>
  );
}

export default UseReducer05_Pagination;
