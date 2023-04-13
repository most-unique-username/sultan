import { IProduct } from '../types/types';

export const getProductsLocalStorage = (): IProduct[] => {
  const products: IProduct[] = [];
  const keys = Object.keys(localStorage);
  let product: IProduct;

  for (let key of keys) {
    product = JSON.parse(localStorage.getItem(key) || "");
    products.push(product);
  }

  return products;
}