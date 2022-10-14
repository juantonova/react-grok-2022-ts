import City from './City';

export default interface State {
  cities: City[];
  pages: number[];
  limit: number;
}
