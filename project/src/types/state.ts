import {GuitarType} from '../types/guitar';

export type State = {
  guitars: GuitarType[],
  pageSize: number,
  totalProductsCount: number,
  currentPage: number,
};
