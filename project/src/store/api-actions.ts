import {ThunkActionResult} from '../types/action';
import {GuitarType} from '../types/guitar';
import {APIRoute} from '../const';
import {loadGuitars} from './action';

export const fetchGuitars = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<GuitarType[]>(APIRoute.Guitars);
    dispatch(loadGuitars(data));
  };
