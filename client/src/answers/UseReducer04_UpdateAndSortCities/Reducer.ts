import Action from './types/Action';
import State from './types/State';

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

    case 'UPDATE_CITY':
      return {
        ...state,
        cities: state.cities.map((city) => {
          if (city.id === Number(action.payload.id)) {
            return { ...city, title: action.payload.title };
          }
          return city;
        }),
      };

    case 'DELETE_CITY':
      return {
        ...state,
        cities: state.cities.filter(
          (city) => city.id !== Number(action.payload)
        ),
      };

    case 'SHOW_DELETE_MODAL':
      return {
        ...state,
        deleteModal: { status: true, payload: action.payload },
      };

    case 'HIDE_DELETE_MODAL':
      return {
        ...state,
        deleteModal: { status: false, payload: null },
      };

    case 'SHOW_UPDATE_MODAL':
      return {
        ...state,
        updateModal: { status: true, payload: action.payload },
      };

    case 'HIDE_UPDATE_MODAL':
      return {
        ...state,
        updateModal: { status: false, payload: null },
      };

    case 'TOGGLE_SORT_AREA': {
      const direction =
        state.sortingByArea.direction === 'DESC' ? 'ASC' : 'DESC';

      return {
        ...state,
        cities: [...state.cities].sort((a, b) =>
          direction === 'ASC' ? a.area - b.area : b.area - a.area
        ),
        sortingByArea: { direction },
      };
    }
  }
};

export default reducer;
