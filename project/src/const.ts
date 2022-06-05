export const BACKEND_URL = 'https://guitar-shop.accelerator.pages.academy';
export const REQUEST_TIMEOUT = 5000;
export const FAIL_MESSAGE = 'Что-то пошло не так, сервер не отвечает. Приносим извинения за доставленные неудобства.';

export enum LoadingStatus {
  Loading = 'loading',
  Complete = 'complete',
  Error = 'error',
}

export enum AppRoute {
  Root = '/',
  Catalog = '/catalog/page/:pageNumber',
  CatalogPathPart = '/catalog/page/',
  Product = '/product/:id',
  ProductPathPart = '/product/',
  // Cart = '/cart',
  NotFound = '/404',
  Guitar = '/guitars/:id',
  CurrentGuitar = '/guitars/',
}

export const TabsParams = {
  CHARACTERISTICS: 'Характеристики',
  DESCRIPTION: 'Описание',
};

export enum APIRoute {
  Guitars = '/guitars',
  Guitar = '/guitars/:id',
  GuitarComments = '/guitars/:id/comments',
  NewComment = '/comments',
  Coupon = '/coupons',
  NewOrder = '/orders',
}

export enum NameSpace {
  data = 'DATA',
}

export enum GuitarType {
  Acoustic = 'acoustic',
  Electric = 'electric',
  Ukulele = 'ukulele',
}

export enum RussianGuitarType {
  Acoustic = 'Акустическая',
  Electric = 'Электронная',
  Ukulele = 'Акулеле',
}
