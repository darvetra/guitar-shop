import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

import {loadGuitars, setProducts, setCurrentPage} from '../store/action';

export enum ActionType {
  // GetProductList = 'catalog/getProductList',
  SetProducts = 'catalog/setProducts',
  SetCurrentPage = 'catalog/setCurrentPage',
  LoadGuitars = 'data/loadGuitars',
}

export type Actions =
  // | ReturnType<typeof getProductList>
  | ReturnType<typeof loadGuitars>
  | ReturnType<typeof setProducts>
  | ReturnType<typeof setCurrentPage>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
