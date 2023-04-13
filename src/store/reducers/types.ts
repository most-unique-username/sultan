import { Filter, SortTypes, IProduct } from '../../types/types';

export enum BasketActionTypes {
  CHANGE_QUANTITY_PRODUCT = "CHANGE_QUANTITY_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  CLEAR_BASKET = "CLEAR_BASKET"
}

interface ChangeQuantityProductAction {
  type: BasketActionTypes.CHANGE_QUANTITY_PRODUCT;
  payload: {
    product: IProduct;
    difference: number
  }
}

interface DeleteProductAction {
  type: BasketActionTypes.DELETE_PRODUCT;
  payload: number;
}

interface ClearBasketAction {
  type: BasketActionTypes.CLEAR_BASKET;
}

export type BasketAction = ChangeQuantityProductAction |
  DeleteProductAction |
  ClearBasketAction;

export enum FilterActionTypes {
  FILTER_PRODUCTS = "FILTER_PRODUCTS",
  FILTER_CATEGORIES = "FILTER_CATEGORIES",
  SORT_PRODUCTS = "SORT_PRODUCTS",
}

interface FilterProductsAction {
  type: FilterActionTypes.FILTER_PRODUCTS;
  payload: {
    price: { min: number; max: number };
    filters: Filter[];
    category: string;
  }
}

interface FilterCategoriesAction {
  type: FilterActionTypes.FILTER_CATEGORIES;
  payload: string;
}

interface SortProductsAction {
  type: FilterActionTypes.SORT_PRODUCTS;
  payload: SortTypes;
}

export type FilterAction = FilterProductsAction |
  FilterCategoriesAction |
  SortProductsAction;