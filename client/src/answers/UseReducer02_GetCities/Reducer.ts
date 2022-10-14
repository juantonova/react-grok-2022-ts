import Action from './types/Action';
import State from './types/State';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'GET_CITIES':
      return {
        ...state,
        cities: action.payload,
      };
  }
};

export default reducer;
