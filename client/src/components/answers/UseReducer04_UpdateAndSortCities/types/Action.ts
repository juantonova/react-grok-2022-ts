import City from './City';

type Action =
  | { type: 'GET_CITIES'; payload: City[] }
  | { type: 'ADD_CITY'; payload: City }
  | { type: 'DELETE_CITY'; payload: number }
  | { type: 'UPDATE_CITY'; payload: City }
  | { type: 'SHOW_DELETE_MODAL'; payload: number }
  | { type: 'HIDE_DELETE_MODAL' }
  | { type: 'SHOW_UPDATE_MODAL'; payload: number }
  | { type: 'HIDE_UPDATE_MODAL' }
  | { type: 'TOGGLE_SORT_AREA' };

export default Action;
