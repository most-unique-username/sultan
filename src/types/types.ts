export interface IText {
  text: string;
  textClass: string;
}

export interface ILink {
  text: string;
  link: string;
}

export interface IProduct {
  vendorCode: number;
  name: string;
  description: string;
  price: number;
  url: string;
  category: string[];
  brand: string;
  country: string;
  sizeType: string;
  size: number;
}

export type BusketProduct = {
  product: IProduct;
  quantity: number;
}

export enum SortTypes {
  NAME_INCREASE = "NAME_INCREASE",
  NAME_DECREASE = "NAME_DECREASE",
  PRICE_INCREASE = "PRICE_INCREASE",
  PRICE_DECREASE = "PRICE_DECREASE",
}