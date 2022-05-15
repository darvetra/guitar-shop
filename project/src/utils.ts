import {TabsParams} from '../src/const';

/**
 * Возвращает наименование вкладок в "человенческом" виде
 * @param tabName
 */
export const getTabsNames = (tabName : string)  => {
  if (tabName === 'description') {
    return TabsParams.DESCRIPTION;
  } else {
    return TabsParams.CHARACTERISTICS;
  }
};
