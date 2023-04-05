import { FilterActionTypes, FilterAction } from './types';
import productsBase from "../../db.json"
import { IProduct, SortTypes } from '../../types/types';

interface FilterState {
  minPrice: number;
  maxPrice: number;
  brands: string[];
  brand: string;
  products: IProduct[];
}

const initialState: FilterState = {
  minPrice: 0,
  maxPrice: 1000,
  brands: new Array<string>,
  brand: "",
  products: productsBase.goods,
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {

  switch (action.type) {

    case FilterActionTypes.CHANGE_MIN_PTICE:
      return { ...state, minPrice: action.payload };

    case FilterActionTypes.CHANGE_MAX_PTICE:
      state.maxPrice = action.payload;
      return { ...state, maxPrice: action.payload };

    case FilterActionTypes.ADD_BRAND:
      state.brands.push(action.payload);
      return { ...state };

    case FilterActionTypes.FILTER_PRODUCTS:
      state.brands.length === 0 ?
        state.products = state.products.filter(item =>
          item.price >= state.minPrice &&
          item.price <= state.maxPrice
        ) :
        state.products = state.products.filter(item =>
          item.price >= state.minPrice &&
          item.price <= state.maxPrice &&
          state.brands.includes(item.brand)
        );
      return { ...state };

    case FilterActionTypes.DELETE_FILTERS:
      return { ...initialState };

    case FilterActionTypes.FILTER_CATEGORIES:
      state.products = state.products.filter(item => item.category.includes(action.payload));
      return { ...state };

    case FilterActionTypes.SEARCH_BRANDS:
      state.products = state.products.filter(item => item.brand.includes(state.brand));
      return { ...state };

    case FilterActionTypes.CHANGE_BRAND:
      return { ...state, brand: action.payload.toUpperCase() };

    case FilterActionTypes.SORT_PRODUCTS:
      action.payload === SortTypes.NAME_INCREASE ?
        state.products = state.products.sort((a, b) => a.name > b.name ? 1 : -1) :
        action.payload === SortTypes.NAME_DECREASE ?
          state.products = state.products.sort((a, b) => a.name > b.name ? -1 : 1) :
          action.payload === SortTypes.PRICE_INCREASE ?
            state.products = state.products.sort((a, b) => a.price - b.price) :
            state.products = state.products.sort((a, b) => b.price - a.price);
      return { ...state };

    default:
      return state;
  }
}