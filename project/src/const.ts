export const BACKEND_URL = 'https://guitar-shop.accelerator.pages.academy';
export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  Root = '/',
  Catalog = '/catalog/page/:pageNumber',
  CatalogPathPart = '/catalog/page/',
  Product = '/product/:id',
  ProductPathPart = '/product/',
  // Cart = '/cart',
  NotFound = '/404',
}

export const TabsParams = {
  CHARACTERISTICS: 'Характеристики',
  DESCRIPTION: 'Описание',
};

export enum APIRoute {
  Guitars = '/guitars',
  Guitar = '/guitars/: id',
  GuitarComments = '/guitars/: id/comments',
  NewComment = '/comments',
  Coupon = '/coupons',
  NewOrder = '/orders',
}
