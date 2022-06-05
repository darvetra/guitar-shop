import {GuitarType} from '../../types/types';
import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getGuitars = (state: State): GuitarType[] => state[NameSpace.data].guitars;
