import City from './City';

export default interface State {
  cities: City[];
  updateModal: { status: boolean; payload: string | null };
  deleteModal: { status: boolean; payload: string | null };
  modal: { status: boolean; payload: number | null };
}
