import {ActionType} from '../types/action';
import {GuitarType} from '../types/types';

// export const getProductList = (guitars: GuitarType[]) => ({
//   type: ActionType.GetProductList,
//   payload: guitars,
// } as const);

export const loadGuitars = (guitars: GuitarType[]) => ({
  type: ActionType.LoadGuitars,
  payload: guitars,
} as const);

export const setProducts = (guitars: GuitarType[]) => ({
  type: ActionType.SetProducts,
  payload: guitars,
} as const);

// Нужно ли оно еще? Проведи потом ревизию
export const setCurrentPage = (currentPage: number) => ({
  type: ActionType.SetCurrentPage,
  payload: currentPage,
} as const);
