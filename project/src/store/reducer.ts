import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

import {guitarList} from '../mocks/guitars';

const initialState = {
  productList: guitarList,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.GetProductList:
      return {...state, productList: action.payload};
    default:
      return state;
  }
};

export {reducer};
