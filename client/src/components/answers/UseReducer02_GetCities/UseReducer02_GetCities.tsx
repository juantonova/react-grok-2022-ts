import React, { useEffect, useReducer } from 'react';
import Row from './Row';
import State from './types/State';
import City from './types/City';
import reducer from './Reducer';

const initialState: State = {
  cities: [],
};

function UseReducer02_GetCities(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/cities`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'GET_CITIES', payload: data }));
  }, []);

  return (
    <section className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="table-header" scope="col">
              ID
            </th>
            <th className="table-header" scope="col">
              Title
            </th>
            <th className="table-header" scope="col">
              Founded
            </th>
            <th className="table-header" scope="col">
              Area
            </th>
            <th className="table-header" scope="col">
              Official Language
            </th>
            <th className="table-header" scope="col">
              Population
            </th>
            <th className="table-header" scope="col">
              Description
            </th>
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
    </section>
  );
}

export default UseReducer02_GetCities;
