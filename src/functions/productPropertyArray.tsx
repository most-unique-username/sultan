import { IProduct } from '../types/types';

export const productPropertyArray = (product: IProduct): string[] => {
  let sizeType: string = "";
  product.sizeType === "Вес" ? sizeType = "г." : sizeType = "мл.";
  let arr: string[] = [];
  arr.push(`Категория: ${product.category.join(", ")}`);
  arr.push(`Бренд: ${product.brand}`);
  arr.push(`Страна производитель: ${product.country}`);
  arr.push(`${product.sizeType}: ${product.size}${sizeType}`);
  arr.push(`Артикул: ${product.vendorCode}`);
  return arr;
}