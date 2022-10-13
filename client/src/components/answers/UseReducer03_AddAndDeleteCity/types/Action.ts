import City from './City';

type Action =
  | { type: 'GET_CITIES'; payload: City[] }
  | { type: 'ADD_CITY'; payload: City }
  | { type: 'DELETE_CITY'; payload: number }
  | { type: 'SHOW_MODAL'; payload: number }
  | { type: 'HIDE_MODAL' };

export default Action;
