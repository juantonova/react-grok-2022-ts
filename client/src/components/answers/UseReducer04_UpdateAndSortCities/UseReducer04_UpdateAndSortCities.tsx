import React, { useEffect, useReducer } from 'react';
import reducer from './Reducer';
import Row from './Row';
import DeleteCityModal from './DeleteCityModal';
import UpdateCityModal from './UpdateCityModal';
import City from './types/City';
import State from './types/State';
import CityValues from './types/CityValues';

const initialState: State = {
  cities: [],
  updateModal: { status: false, payload: null },
  deleteModal: { status: false, payload: null },
  sortingByArea: { direction: 'DESC' },
};

function UseReducer04_UpdateAndSortCities(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/cities`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'GET_CITIES', payload: data }));
  }, [dispatch]);

  const deleteCity = (id: number): void => {
    fetch(`${process.env.REACT_APP_URL}/cities/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'DELETE_CITY', payload: data });
        hideDeleteModal();
      });
  };

  const updateCity = (city: CityValues, id: number): void => {
    fetch(`${process.env.REACT_APP_URL}/cities/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(city),
    })
      .then((res) => res.json())
      .then((payload) => {
        dispatch({ type: 'UPDATE_CITY', payload });
        dispatch({ type: 'HIDE_UPDATE_MODAL' });
      });
  };

  const hideDeleteModal = (): void => {
    dispatch({ type: 'HIDE_DELETE_MODAL' });
  };

  const showDeleteModal = (id: number): void => {
    dispatch({ type: 'SHOW_UPDATE_MODAL', payload: id });
  };

  const hideUpdateModal = (): void => {
    dispatch({ type: 'HIDE_UPDATE_MODAL' });
  };

  const showUpdateModal = (id: number): void => {
    dispatch({ type: 'SHOW_DELETE_MODAL', payload: id });
  };

  return (
    <section className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Founded</th>
            <th scope="col">
              Area
              <i
                className={`bi ${
                  state.sortingByArea?.direction === 'DESC'
                    ? 'bi-caret-down-fill'
                    : 'bi-caret-up-fill'
                }`}
                role="button"
                onClick={() => dispatch({ type: 'TOGGLE_SORT_AREA' })}
              />
            </th>
            <th scope="col">Official Language</th>
            <th scope="col">Population</th>
            <th scope="col">Description</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {state.cities.length ? (
            state.cities.map((city: City) => (
              <Row
                key={city.id}
                city={city}
                showUpdateModal={showUpdateModal}
                showDeleteModal={showDeleteModal}
              />
            ))
          ) : (
            <tr>
              <th scope="col">No data</th>
            </tr>
          )}
        </tbody>
      </table>

      {state.deleteModal.payload !== null && state.deleteModal.status && (
        <DeleteCityModal
          hideDeleteModal={hideDeleteModal}
          id={state.deleteModal.payload}
          deleteCity={deleteCity}
        />
      )}
      {state.updateModal.payload !== null && state.updateModal.status && (
        <UpdateCityModal
          hideUpdateModal={hideUpdateModal}
          id={state.updateModal.payload}
          updateCity={updateCity}
        />
      )}
    </section>
  );
}

export default UseReducer04_UpdateAndSortCities;
