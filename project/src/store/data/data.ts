import {Data} from '../../types/state';
import {ActionType, Actions} from '../../types/action';

const initialState = {
  guitars: [],
  pageSize: 3,
  totalProductsCount: 9,
  currentPage: 1,
  isDataLoaded: false,
};

export const data = (state: Data = initialState, action: Actions) : Data => {
  switch (action.type) {
    // case ActionType.GetProductList:
    //   return {...state, guitars: action.payload};
    case ActionType.SetProducts:
      return {...state, guitars: action.payload};
    case ActionType.LoadGuitars:
      return {...initialState, guitars: action.payload};
    case ActionType.SetCurrentPage:
      return {...state, currentPage: action.payload};
    default:
      return state;
  }
};
