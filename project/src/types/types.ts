export type ReviewType = {
  id: string,
  userName: string,
  advantage: string,
  disadvantage: string,
  comment: string,
  rating: number,
  createAt: string,
  guitarId: number
}

export type GuitarType = {
  id: number,
  name: string,
  vendorCode: string,
  type: string,
  description?: string,
  previewImg: string,
  stringCount: number,
  rating: number,
  price: number,
}

export type ParamsType = {
  id: string;
}
