import { BasketActionTypes, BasketAction } from '../../store/reducers/types';
import { BusketProduct, IProduct } from '../../types/types';

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
  let product: IProduct;
  let quantity: number;
  let price: number;

  switch (action.type) {

    case BasketActionTypes.CHANGE_QUANTITY_PRODUCT:
      product = state.basket.get(action.payload.product.vendorCode)?.product ?? action.payload.product;
      quantity = state.basket.get(action.payload.product.vendorCode)?.quantity ?? 0;
      price = action.payload.difference * product.price;
      quantity += action.payload.difference;
      state.basket.set(product.vendorCode,
        { product: product, quantity: quantity });

      return {
        ...state,
        products: state.products + action.payload.difference,
        sum: +(state.sum + price).toFixed(2)
      };

    case BasketActionTypes.DELETE_PRODUCT:
      let deletedProduct = state.basket.get(action.payload);
      quantity = deletedProduct?.quantity ?? 0;
      price = (deletedProduct?.product?.price ?? 0) * quantity;
      state.basket.delete(action.payload);

      return {
        ...state,
        products: state.products - quantity,
        sum: +(state.sum - price).toFixed(2)
      };

    case BasketActionTypes.CLEAR_BASKET:
      return {
        basket: new Map<number, BusketProduct>(),
        products: 0,
        sum: 0
      };

    default:
      return state;
  }
}