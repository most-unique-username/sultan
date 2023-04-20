import { BusketProduct, IProduct } from "../../../types/types";
import { basketReducer } from "../basketReducer";
import { BasketActionTypes } from "../types";

const newProduct: IProduct = {
  vendorCode: 568292,
  name: "Крем",
  description: "Крем",
  price: 100,
  url: "url",
  category: [],
  brand: "OLEA",
  country: "Россия",
  sizeType: "Тип размера",
  size: 30
};

const basket = new Map<number, BusketProduct>();
basket.set(newProduct.vendorCode, { product: newProduct, quantity: 5 })

describe("Basket reducer", () => {

  test("Добавление товара", () => {
    expect((basketReducer({
      basket: new Map<number, BusketProduct>(),
      products: 0,
      sum: 0,
    },
      {
        type: BasketActionTypes.CHANGE_QUANTITY_PRODUCT, payload: { product: newProduct, difference: 5 }
      })).sum).toBe(500)
  });

  test("Изменение количества товара", () => {
    expect((basketReducer({
      basket: basket,
      products: 5,
      sum: 500,
    },
      {
        type: BasketActionTypes.CHANGE_QUANTITY_PRODUCT, payload: { product: newProduct, difference: -3 }
      })).products).toBe(2)
  });

  test("Удаление несуществующего товара", () => {
    expect((basketReducer({
      basket: basket,
      products: 5,
      sum: 500,
    },
      { type: BasketActionTypes.DELETE_PRODUCT, payload: 111111 }
    )).products).toBe(5)
  });

  test("Удаление товара", () => {
    expect((basketReducer({
      basket: basket,
      products: 5,
      sum: 500,
    },
      { type: BasketActionTypes.DELETE_PRODUCT, payload: newProduct.vendorCode }
    )).basket.size).toBe(0)
  });
});