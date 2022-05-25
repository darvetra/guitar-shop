import {ActionType, GetProductListActionType, SetProductsActionType, SetCurrentPageActionType} from '../types/action';
import {GuitarType} from '../types/guitar';

export const getProductList = (guitarList: GuitarType[]): GetProductListActionType => ({
  type: ActionType.GetProductList,
  payload: guitarList,
});

export const setProducts = (guitarList: GuitarType[]): SetProductsActionType => ({
  type: ActionType.SetProducts,
  payload: guitarList,
});

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: ActionType.SetCurrentPage,
  payload: currentPage,
});
