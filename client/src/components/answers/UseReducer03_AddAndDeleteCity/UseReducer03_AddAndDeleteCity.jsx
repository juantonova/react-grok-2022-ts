import React, { useEffect, useReducer } from 'react';
import Row from './Row';
import AddCityForm from './AddCityForm';
import DeleteCityModal from './DeleteCityModal';

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CITIES': return {
      ...state,
      cities: action.payload,
    };

    case 'ADD_CITY': return {
      ...state,
      cities: [...state.cities, action.payload],
    };

    case 'DELETE_CITY': return {
      ...state,
      cities: state.cities.filter(city => city.id !== Number(action.payload)),
    };

    case 'SHOW_MODAL': return {
      ...state,
      modal: { status: true, payload: action.payload }
    }

    case 'HIDE_MODAL': return {
      ...state,
      modal: { status: false, payload: null }
    }

    default:
      throw new Error('unexpected action type');
  }
};

const initialState = {
  cities: [],
  modal: { status: false, payload: null }
};

function UseReducer03_AddAndDeleteCity() {

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
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Founded</th>
            <th scope="col">Area</th>
            <th scope="col">Official Language</th>
            <th scope="col">Population</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {state.cities.length ? state.cities.map(city => <Row key={city.id} city={city} dispatch={dispatch} state={state} />) :
            <tr>
              <th scope="col">No data</th>
            </tr>
          }
        </tbody>
      </table >

      <AddCityForm dispatch={dispatch} />

      {state.modal.status && <DeleteCityModal state={state} dispatch={dispatch} />}

    </section>
  );
}

export default UseReducer03_AddAndDeleteCity;