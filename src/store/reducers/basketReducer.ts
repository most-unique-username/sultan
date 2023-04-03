import { BasketActionTypes, BasketAction } from '../../store/reducers/types';
import { BusketProduct } from '../../types/types';

interface BasketState {
  basket: Map<number, BusketProduct>;
  products: number;
  sum: number;
}

const initialState: BasketState = {
  basket: new Map<number, BusketProduct>(),
  products: 0,
  sum: 0,
}

export const basketReducer = (state = initialState, action: BasketAction): BasketState => {

  switch (action.type) {

    case BasketActionTypes.ADD_PRODUCT:
      let addPrice = action.payload.quantity * action.payload.product.price;
      let addQuantity = state.basket.get(action.payload.product.vendorCode)?.quantity || 0;
      addQuantity += action.payload.quantity;
      state.basket.set(action.payload.product.vendorCode,
        { product: action.payload.product, quantity: addQuantity });
      return {
        ...state,
        products: state.products + action.payload.quantity,
        sum: +(state.sum + addPrice).toFixed(2)
      };

    case BasketActionTypes.CHANGE_NUMBER_PRODUCT:
      let changeProduct = state.basket.get(action.payload.product.vendorCode);
      let changeSum = 0;
      let changedQuantity = 0;
      if (changeProduct) {
        changeProduct.quantity + action.payload.quantity === 0 ?
          changedQuantity = 0 : changedQuantity = action.payload.quantity;
        changeSum = changedQuantity * changeProduct.product.price;
        state.basket.set(action.payload.product.vendorCode,
          { product: changeProduct.product, quantity: changeProduct.quantity + changedQuantity });
      }
      return {
        ...state,
        products: state.products + changedQuantity,
        sum: +(state.sum + changeSum).toFixed(2)
      };

    case BasketActionTypes.DELETE_PRODUCT:
      let deleteProduct = state.basket.get(action.payload);
      let decreaseProducts = deleteProduct?.quantity || 0;
      let decreasePrice = decreaseProducts * (deleteProduct?.product.price || 0);
      state.basket.delete(action.payload);
      return {
        ...state,
        products: state.products - decreaseProducts,
        sum: +(state.sum - decreasePrice).toFixed(2)
      };

    default:
      return state;
  }
}