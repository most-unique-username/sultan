import { BusketProduct, SortTypes } from '../../types/types';

export enum BasketActionTypes {
  CHANGE_QUANTITY_PRODUCT = "CHANGE_QUANTITY_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  CLEAR_BASKET = "CLEAR_BASKET"
}

interface ChangeQuantityProductAction {
  type: BasketActionTypes.CHANGE_QUANTITY_PRODUCT;
  payload: BusketProduct;
}

interface DeleteProductAction {
  type: BasketActionTypes.DELETE_PRODUCT;
  payload: number;
}

interface ClearBasketAction {
  type: BasketActionTypes.CLEAR_BASKET;
}

export type BasketAction = ChangeQuantityProductAction | DeleteProductAction | ClearBasketAction
  ;

export enum FilterActionTypes {
  CHANGE_MIN_PTICE = "CHANGE_MIN_PTICE",
  CHANGE_MAX_PTICE = "CHANGE_MAX_PTICE",
  ADD_BRAND = "ADD_BRAND",
  DELETE_FILTERS = "DELETE_FILTERS",
  FILTER_PRODUCTS = "FILTER_PRODUCTS",
  FILTER_CATEGORIES = "FILTER_CATEGORIES",
  SEARCH_BRANDS = "SEARCH_BRANDS",
  CHANGE_BRAND = "CHANGE_BRAND",
  SORT_PRODUCTS = "SORT_PRODUCTS",
}

interface ChangeMinPriceAction {
  type: FilterActionTypes.CHANGE_MIN_PTICE;
  payload: number;
}

interface ChangeMaxPriceAction {
  type: FilterActionTypes.CHANGE_MAX_PTICE;
  payload: number;
}

interface AddBrandAction {
  type: FilterActionTypes.ADD_BRAND;
  payload: string;
}

interface FilterProductsAction {
  type: FilterActionTypes.FILTER_PRODUCTS;
}

interface DeleteFiltersAction {
  type: FilterActionTypes.DELETE_FILTERS;
}

interface FilterCategoriesAction {
  type: FilterActionTypes.FILTER_CATEGORIES;
  payload: string;
}

interface SearchBrandsAction {
  type: FilterActionTypes.SEARCH_BRANDS;
}

interface ChangeBrandsAction {
  type: FilterActionTypes.CHANGE_BRAND;
  payload: string;
}

interface SortProductsAction {
  type: FilterActionTypes.SORT_PRODUCTS;
  payload: SortTypes;
}

export type FilterAction = ChangeMinPriceAction |
  ChangeMaxPriceAction |
  AddBrandAction |
  FilterProductsAction |
  DeleteFiltersAction |
  FilterCategoriesAction |
  SearchBrandsAction |
  ChangeBrandsAction |
  SortProductsAction;