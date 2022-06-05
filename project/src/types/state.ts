import {GuitarType} from './types';
import {RootState} from '../store/root-reducer';

export type Data = {
  guitars: GuitarType[],
  pageSize: number,
  totalProductsCount: number,
  currentPage: number,
  isDataLoaded: boolean,
};

export type State = RootState;
