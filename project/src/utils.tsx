import {TabsParams, GuitarType, RussianGuitarType, GUITARS_COUNT_PER_PAGE} from './const';

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

/**
 * Возврашает количество страниц (пагинация)
 * @param totalProductsCount
 * @param pageSize
 */
export const getPaginationPages = (totalProductsCount: number, pageSize: number) => {
  const pagesCount = Math.ceil(totalProductsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return pages;
};

/**
 * Возвращает начало диапазона пагинации
 * @param currentPage
 */
export const startGuitarRange = (currentPage : number) => {
  let startRange = 0;

  if (currentPage > 1) {
    startRange = (currentPage - 1) * GUITARS_COUNT_PER_PAGE;
  }

  return startRange;
};

/**
 * Возвращает конец диапазона пагинации
 * @param currentPage
 */
export const endGuitarRange = (currentPage : number) =>  currentPage * (GUITARS_COUNT_PER_PAGE);


/**
 * Возвращает рейтинг товара/комментария в графическом формате
 * @param ratingValue
 */
export const getStarRating = (ratingValue: number) => {

  const calcRating = Math.round(ratingValue);
  const remainingRating = 5 - calcRating;
  const stars = [];

  for (let i = 0; i < calcRating; i++) {
    stars.push(
      <svg width="14" height="14" aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>,
    );
  }

  for (let i = 0; i < remainingRating; i++) {
    stars.push(
      <svg width="14" height="14" aria-hidden="true">
        <use xlinkHref="#icon-star" />
      </svg>,
    );
  }

  return stars;
};
