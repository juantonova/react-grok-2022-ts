import Action from './types/Action';
import State from './types/State';
import City from './types/City';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'GET_CITIES':
      return {
        ...state,
        cities: action.payload,
      };

    case 'ADD_CITY':
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };

    case 'DELETE_CITY':
      return {
        ...state,
        cities: state.cities.filter((city: City) => city.id !== Number(action.payload)),
      };

    case 'SHOW_MODAL':
      return {
        ...state,
        modal: { status: true, payload: action.payload },
      };

    case 'HIDE_MODAL':
      return {
        ...state,
        modal: { status: false, payload: null },
      };
  }
};

export default reducer;
