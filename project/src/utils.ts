import {TabsParams, GuitarType, RussianGuitarType} from './const';

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

/**
 * Возвращает путь к картинкам в проекте
 * @param imgPath
 */
export const getImgPath = (imgPath : string) : string => {
  const guitarString = imgPath.slice(10);
  const defaultPath = '../img/content/catalog-product';
  return defaultPath.concat(guitarString);
};

/**
 * Возвращает наименование типа гитары на русском языке
 * @param type
 */
export const getRussianGuitarType = (type: string) => {
  switch (type) {
    case GuitarType.Acoustic: {
      return RussianGuitarType.Acoustic;
    }
    case GuitarType.Electric: {
      return RussianGuitarType.Electric;
    }
    case GuitarType.Ukulele: {
      return RussianGuitarType.Ukulele;
    }
  }
};

export const getPaginationPages = (totalProductsCount: number, pageSize: number) => {
  const pagesCount = Math.ceil(totalProductsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return pages;
};
