import City from './City';
import Direction from './Direcation';

export default interface State {
  cities: City[];
  updateModal: { status: boolean; payload: number | null };
  deleteModal: { status: boolean; payload: number | null };
  sortingByArea: { direction: Direction };
}
