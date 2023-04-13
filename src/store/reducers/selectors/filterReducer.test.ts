import { BusketProduct, IProduct, SortTypes } from "../../../types/types";
import { filterReducer } from "../filterReducer";
import { BasketActionTypes, FilterActionTypes } from "../types";

const product: IProduct = {
  vendorCode: 568292,
  name: "Крем",
  description: "Крем",
  price: 1000,
  url: "url",
  category: [],
  brand: "OLEA",
  country: "Россия",
  sizeType: "Тип размера",
  size: 30
};

const cheaperProduct: IProduct = {
  vendorCode: 568292,
  name: "Крем",
  description: "Крем",
  price: 500,
  url: "url",
  category: [],
  brand: "OLEA",
  country: "Россия",
  sizeType: "Тип размера",
  size: 30
};

const cheapestProduct: IProduct = {
  vendorCode: 568292,
  name: "Крем",
  description: "Крем",
  price: 50,
  url: "url",
  category: [],
  brand: "OLEA",
  country: "Россия",
  sizeType: "Тип размера",
  size: 30
};

const products: IProduct[] = [cheaperProduct, product, cheapestProduct];

describe("Filter reducer", () => {

  test("Цена убывает", () => {
    expect((filterReducer({
      products: products,
      productsFiltered: products
    },
      { type: FilterActionTypes.SORT_PRODUCTS, payload: SortTypes.PRICE_INCREASE })).productsFiltered).
      toEqual([cheapestProduct, cheaperProduct, product])
  });
});