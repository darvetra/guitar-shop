import {getProductList, loadGuitars, setProducts, setCurrentPage} from '../store/action';

export enum ActionType {
  GetProductList = 'catalog/getProductList',
  SetProducts = 'catalog/setProducts',
  SetCurrentPage = 'catalog/setCurrentPage',
  LoadGuitars = 'data/loadGuitars',
}

export type Actions =
  | ReturnType<typeof getProductList>
  | ReturnType<typeof loadGuitars>
  | ReturnType<typeof setProducts>
  | ReturnType<typeof setCurrentPage>;
