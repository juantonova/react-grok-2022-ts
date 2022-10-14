import React, { useEffect, useReducer } from 'react';
import reducer from './Reducer';
import Row from './Row';
import AddCityForm from './AddCityForm';
import DeleteCityModal from './DeleteCityModal';
import City from './types/City';
import CityValues from './types/CityValues';
import State from './types/State';

const initialState: State = {
  cities: [],
  updateModal: { status: false, payload: null },
  deleteModal: { status: false, payload: null },
  modal: { status: false, payload: null },
};

function UseReducer03_AddAndDeleteCity(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showModal = (id: number): void => {
    dispatch({ type: 'SHOW_MODAL', payload: id });
  };

  const hideModal = (): void => {
    dispatch({ type: 'HIDE_MODAL' });
  };

  const addCity = (newCity: CityValues): void => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/cities`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(newCity),
    })
      .then((res) => res.json())
      .then((payload) => dispatch({ type: 'ADD_CITY', payload }));
  };

  const deleteCity = (id: number): void => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/cities/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'DELETE_CITY', payload: data });
        hideModal();
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/cities`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'GET_CITIES', payload: data }));
  }, []);

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
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {state.cities.length ? (
            state.cities.map((city: City) => (
              <Row key={city.id} city={city} showModal={showModal} />
            ))
          ) : (
            <tr>
              <th scope="col">No data</th>
            </tr>
          )}
        </tbody>
      </table>

      <AddCityForm addCity={addCity} />
      {state.modal.payload !== null && state.modal.status && (
        <DeleteCityModal
          id={state.modal.payload}
          deleteCity={deleteCity}
          hideModal={hideModal}
        />
      )}
    </section>
  );
}

export default UseReducer03_AddAndDeleteCity;
