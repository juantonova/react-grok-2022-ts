import { Action } from './types/Action';
import State from './types/State';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'NEXT_CARD':
      return {
        ...state,
        card: state.card === 2 ? 0 : state.card + 1,
      };

    case 'NEXT_BACKGROUND':
      return {
        ...state,
        background:
          state.background === 'bg-primary'
            ? 'bg-secondary'
            : state.background === 'bg-secondary'
            ? 'bg-success'
            : 'bg-primary',
      };
  }
};

export default reducer;
