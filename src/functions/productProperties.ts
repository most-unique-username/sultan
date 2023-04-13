import { IProduct } from '../types/types';
import { productSize } from "./productSize";

export const productProperties = (product: IProduct): string[] => {
  let arr: string[] = [];
  arr.push(`Категория: ${product.category.join(", ")}`);
  arr.push(`Бренд: ${product.brand}`);
  arr.push(`Страна производитель: ${product.country}`);
  arr.push(`${product.sizeType}: ${productSize(product)}`);
  arr.push(`Артикул: ${product.vendorCode}`);
  return arr;
}