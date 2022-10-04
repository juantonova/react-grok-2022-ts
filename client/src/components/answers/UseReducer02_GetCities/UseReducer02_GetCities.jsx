import React, { useEffect, useReducer } from 'react';
import Row from './Row';

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CITIES': return {
      ...state,
      cities: action.payload,
    };

    default:
      throw new Error('unexpected action type');
  }
};

const initialState = {
  cities: []
};

function UseReducer02_GetCities() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/cities`)
      .then(response => response.json())
      .then(data => dispatch({ type: 'GET_CITIES', payload: data }))
  }, [])

  return (
    <section className='container'>
      <table className="table table-striped" >
        <thead>
          <tr>
            <th className='table-header' scope="col">ID</th>
            <th className='table-header' scope="col">Title</th>
            <th className='table-header' scope="col">Founded</th>
            <th className='table-header' scope="col">Area</th>
            <th className='table-header' scope="col">Official Language</th>
            <th className='table-header' scope="col">Population</th>
            <th className='table-header' scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {state.cities.length ? state.cities.map(city => <Row key={city.id} city={city} />) :
            <tr>
              <th scope="col">No data</th>
            </tr>
          }
        </tbody>
      </table >
    </section>
  );
}

export default UseReducer02_GetCities;