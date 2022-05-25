import {GuitarType} from '../types/guitar';

export enum ActionType {
  GetProductList = 'catalog/getProductList',
  SetProducts = 'catalog/setProducts',
  SetCurrentPage = 'catalog/setCurrentPage',
}

export type GetProductListActionType = {
  type: ActionType.GetProductList;
  payload: GuitarType[];
};

export type SetProductsActionType = {
    type: ActionType.SetProducts;
    payload: GuitarType[];
};

export type SetCurrentPageActionType = {
  type: ActionType.SetCurrentPage;
  payload: number;
};

export type Actions = GetProductListActionType | SetProductsActionType | SetCurrentPageActionType;
