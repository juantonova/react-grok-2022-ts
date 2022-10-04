import React, { useEffect, useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import Page from './Page';
import Pagination from './Pagination';
import Row from '../UseReducer03_AddAndDeleteCity/Row';

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CITIES': return {
      ...state,
      cities: action.payload,
    };

    case 'SET_LIMIT': return {
      ...state,
      limit: action.payload,
    };

    case 'INIT_PAGES': return {
      ...state,
      pages: action.payload,
    };

    default:
      throw new Error('unexpected action type');
  }
};

const initialState = {
  cities: [],
  pages: [],
  limit: 8
};

function UseReducer05_Pagination() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setArrPages = (event) => {
    fetch(`${process.env.REACT_APP_URL}/cities/count`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ limit: Number(event.target.value) })
    }).then(res => res.json())
      .then(arrPages => {
        dispatch({ type: "INIT_PAGES", payload: arrPages })
        dispatch({ type: 'SET_LIMIT', payload: Number(event.target.value) })
      })
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/cities/count`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ limit: Number(state.limit) })
    }).then(res => res.json())
      .then(arrPages => { dispatch({ type: "INIT_PAGES", payload: arrPages }) })

    fetch(`${process.env.REACT_APP_URL}/pages/1?limit=${state.limit}`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'GET_CITIES', payload: data })
      })
  }, [state.limit])

  return (
    <section className='container'>

      <Routes>
        <Route path='/pages/:page' element={<Page state={state} dispatch={dispatch} />} />
      </Routes>

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
          {state.cities.length ? state.cities.map(city => <Row key={city.id} city={city} />) :
            <tr>
              <th scope="col">No data</th>
            </tr>
          }
        </tbody>
      </table >

      <nav className='row'>
        <Pagination state={state} />

        <section className='col-1 offset-1'>
          <select onChange={setArrPages} className="form-select">
            <option>8</option>
            <option>24</option>
          </select>
        </section>
      </nav>
    </section >
  );
}

export default UseReducer05_Pagination;