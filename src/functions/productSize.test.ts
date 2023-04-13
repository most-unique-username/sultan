import { IProduct } from "../types/types";
import { productSize } from "./productSize";

const productWeight: IProduct = {
  vendorCode: 568292,
  name: "Крем",
  description: "Крем",
  price: 85.09,
  url: "url",
  category: [],
  brand: "OLEA",
  country: "Россия",
  sizeType: "Вес",
  size: 30
};

const productVolume: IProduct = {
  vendorCode: 568292,
  name: "Крем",
  description: "Крем",
  price: 85.09,
  url: "url",
  category: [],
  brand: "OLEA",
  country: "Россия",
  sizeType: "Объем",
  size: 30
};

const productOther: IProduct = {
  vendorCode: 568292,
  name: "Крем",
  description: "Крем",
  price: 85.09,
  url: "url",
  category: [],
  brand: "OLEA",
  country: "Россия",
  sizeType: "Тип размера",
  size: 30
};

test("Тип размера", () => {
  expect(productSize(productWeight)).toBe("30г");
  expect(productSize(productVolume)).toBe("30мл");
  expect(productSize(productOther)).toBe("30мл");
});