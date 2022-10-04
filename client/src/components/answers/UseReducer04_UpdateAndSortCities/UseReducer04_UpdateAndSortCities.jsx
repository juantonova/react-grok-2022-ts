import React, { useEffect, useReducer } from 'react';
import Row from './Row';
import DeleteCityModal from './DeleteCityModal';
import UpdateCityModal from './UpdateCityModal';

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

    case 'UPDATE_CITY': return {
      ...state,
      cities: state.cities.map(city => {
        if (city.id === Number(action.payload.id)) {
          return { ...city, title: action.payload.title }
        } else {
          return city
        }
      }),
    };

    case 'DELETE_CITY': return {
      ...state,
      cities: state.cities.filter(city => city.id !== Number(action.payload)),
    };

    case 'SHOW_DELETE_MODAL': return {
      ...state,
      deleteModal: { status: true, payload: action.payload }
    }

    case 'HIDE_DELETE_MODAL': return {
      ...state,
      deleteModal: { status: false, payload: null }
    }

    case 'SHOW_UPDATE_MODAL': return {
      ...state,
      updateModal: { status: true, payload: action.payload }
    }

    case 'HIDE_UPDATE_MODAL': return {
      ...state,
      updateModal: { status: false, payload: null }
    }

    case 'TOGGLE_SORT_AREA': {
      const direction = state.sortingByArea.direction === 'DESC' ? 'ASC' : 'DESC'

      return {
        ...state,
        cities: [...state.cities].sort((a, b) => {
          switch (direction) {
            case 'ASC':
              return a['area'] - b['area']
            case 'DESC':
              return b['area'] - a['area']
            default:
              return 0;
          }
        }),
        sortingByArea: { direction }
      }
    }

    default:
      throw new Error('unexpected action type');
  }
};

const initialState = {
  cities: [],
  updateModal: { status: false, payload: null },
  deleteModal: { status: false, payload: null },
  sortingByArea: { direction: null }
};

function UseReducer04_UpdateAndSortCities() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/cities`)
      .then(response => response.json())
      .then(data => dispatch({ type: 'GET_CITIES', payload: data }))
  }, [dispatch])

  return (
    <section className='container'>
      <table className="table table-striped" >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Founded</th>
            <th scope="col">
              Area
              <i className={`bi ${state.sortingByArea.direction === 'DESC' ? 'bi-caret-down-fill' : 'bi-caret-up-fill'}`} role="button" onClick={() => dispatch({ type: 'TOGGLE_SORT_AREA' })} ></i>
            </th>
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

      {state.deleteModal.status && <DeleteCityModal state={state} dispatch={dispatch} />}
      {state.updateModal.status && <UpdateCityModal state={state} dispatch={dispatch} />}

    </section>
  );
}

export default UseReducer04_UpdateAndSortCities;