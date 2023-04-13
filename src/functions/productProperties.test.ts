import { IProduct } from '../types/types';
import { productProperties } from "./productProperties";

const productWeight: IProduct = {
  vendorCode: 568292,
  name: "Крем",
  description: "Крем",
  price: 85.09,
  url: "url",
  category: ["Уход за руками"],
  brand: "OLEA",
  country: "Россия",
  sizeType: "Вес",
  size: 30
};

const productWeightToBe: string[] = [
  "Категория: Уход за руками",
  "Бренд: OLEA",
  "Страна производитель: Россия",
  "Вес: 30г",
  "Артикул: 568292"
];

const productVolume: IProduct = {
  vendorCode: 568292,
  name: "Крем",
  description: "Крем",
  price: 85.09,
  url: "url",
  category: ["Уход за руками",
    "Уход за телом"],
  brand: "OLEA",
  country: "Россия",
  sizeType: "Объем",
  size: 30
};

const productVolumeToBe: string[] = [
  "Категория: Уход за руками, Уход за телом",
  "Бренд: OLEA",
  "Страна производитель: Россия",
  "Объем: 30мл",
  "Артикул: 568292"
];

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

const productOtherToBe: string[] = [
  "Категория: ",
  "Бренд: OLEA",
  "Страна производитель: Россия",
  "Тип размера: 30мл",
  "Артикул: 568292"
];

test("Свойства товара", () => {
  expect(productProperties(productWeight)).
    toEqual(productWeightToBe);
  expect(productProperties(productVolume)).
    toEqual(productVolumeToBe);
  expect(productProperties(productOther)).
    toEqual(productOtherToBe);
});