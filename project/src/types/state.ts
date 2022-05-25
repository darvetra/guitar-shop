import {GuitarType} from '../types/guitar';

export type State = {
  productList: GuitarType[],
  pageSize: number,
  totalProductsCount: number,
  currentPage : number,
};
