import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

// убрать, когда подключишь сервер
import {guitarList} from '../mocks/guitars';

const initialState = {
  guitars: guitarList,
  pageSize: 3,
  totalProductsCount: 9,
  currentPage: 1,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.GetProductList:
      return {...state, guitars: action.payload};
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

export {reducer};
