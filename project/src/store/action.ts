import {ActionType, GetProductListActionType} from '../types/action';
import {GuitarType} from '../types/guitar';

export const getProductList = (guitarList: GuitarType[]): GetProductListActionType => ({
  type: ActionType.GetProductList,
  payload: guitarList,
});
