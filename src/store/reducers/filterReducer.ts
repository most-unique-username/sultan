import { FilterActionTypes, FilterAction } from './types';
import productsBase from "../../db.json"
import { IProduct, SortTypes } from '../../types/types';
import { getProductsLocalStorage } from '../../functions/getProductsLocalStorage';

interface FilterState {
  products: IProduct[];
  productsFiltered: IProduct[];
}

const productsLocalStorage: IProduct[] = getProductsLocalStorage();

const initialState: FilterState = {
  products:
    productsLocalStorage.length === 0 ?
      productsBase.goods :
      productsLocalStorage,
  productsFiltered:
    productsLocalStorage.length === 0 ?
      productsBase.goods :
      productsLocalStorage
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  let productsFiltered: IProduct[];

  switch (action.type) {

    case FilterActionTypes.FILTER_PRODUCTS:
      productsFiltered = state.products.filter(item =>
        item.price >= action.payload.price.min &&
        item.price <= action.payload.price.max
      );

      for (let filter of action.payload.filters) {

        if (filter.filters.length > 0) {
          productsFiltered = productsFiltered.filter(item =>
            filter.filters.includes(item[filter.name])
          );
        }
      }

      if (action.payload.category !== "Все") {
        productsFiltered = productsFiltered.filter(item =>
          item.category.includes(action.payload.category));
      }

      return { ...state, productsFiltered: productsFiltered };

    case FilterActionTypes.FILTER_CATEGORIES:
      action.payload === "Все" ?
        productsFiltered = state.products :
        productsFiltered = state.products.filter(item => item.category.includes(action.payload));
      return { ...state, productsFiltered: productsFiltered };

    case FilterActionTypes.SORT_PRODUCTS:
      action.payload === SortTypes.NAME_INCREASE ?
        productsFiltered = state.productsFiltered.sort((a, b) => a.name > b.name ? 1 : -1) :

        action.payload === SortTypes.NAME_DECREASE ?
          productsFiltered = state.productsFiltered.sort((a, b) => a.name > b.name ? -1 : 1) :

          action.payload === SortTypes.PRICE_INCREASE ?
            productsFiltered = state.productsFiltered.sort((a, b) => a.price - b.price) :
            productsFiltered = state.productsFiltered.sort((a, b) => b.price - a.price);

      return { ...state, productsFiltered: productsFiltered };

    default:
      return state;
  }
}