import {GuitarType} from '../types/guitar';

export enum ActionType {
  GetProductList = 'catalog/getProductList',
}

export type GetProductListAction = {
  type: ActionType.GetProductList;
  payload: GuitarType[];
};

export type Actions = GetProductListAction;