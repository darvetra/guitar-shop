import {GuitarType} from '../types/guitar';

export enum ActionType {
  GetProductList = 'catalog/getProductList',
}

export type GetProductListActionType = {
  type: ActionType.GetProductList;
  payload: GuitarType[];
};

export type Actions = GetProductListActionType;
