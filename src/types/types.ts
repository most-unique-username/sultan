export interface IItemText {
  item: string;
  itemClass: string;
}

export interface IItemLink {
  item: string;
  link: string;
}

export interface IOptionValue {
  text: string;
  value: string;
  selected?: boolean;
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

export type Filter = {
  name: "brand";
  filters: string[];
}

export enum SortTypes {
  NAME_INCREASE = "NAME_INCREASE",
  NAME_DECREASE = "NAME_DECREASE",
  PRICE_INCREASE = "PRICE_INCREASE",
  PRICE_DECREASE = "PRICE_DECREASE",
}