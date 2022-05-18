import {ActionType, GetProductListAction} from '../types/action';
import {GuitarType} from '../types/guitar';

export const getProductListAction = (guitarList: GuitarType[]): GetProductListAction => ({
  type: ActionType.GetProductList,
  payload: guitarList,
});
