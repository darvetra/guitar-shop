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
