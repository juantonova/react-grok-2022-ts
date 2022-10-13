import City from './City';

export default interface Action {
  type: 'GET_CITIES';
  payload: City[];
}
