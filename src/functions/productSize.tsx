import { IProduct } from '../types/types';

export const productSize = (product: IProduct): string => {
  let sizeType: string = "";
  product.sizeType === "Вес" ? sizeType = "г" : sizeType = "мл";
  return `${product.size} ${sizeType}`;
}