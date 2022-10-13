import City from './City';

type Action =
  | { type: 'GET_CITIES'; payload: City[] }
  | { type: 'SET_LIMIT'; payload: number }
  | { type: 'INIT_PAGES'; payload: number[] };

export default Action;
