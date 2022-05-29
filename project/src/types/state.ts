import {GuitarType} from './guitar';

export type State = {
  guitars: GuitarType[],
  pageSize: number,
  totalProductsCount: number,
  currentPage: number,
  isDataLoaded: boolean,
};
