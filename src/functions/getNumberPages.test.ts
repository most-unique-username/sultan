import { getNumberPages } from "./getNumberPages"

test("Количество страниц", () => {
  expect(getNumberPages(10, 2)).toBe(5);
  expect(getNumberPages(11, 2)).toBe(6);
  expect(getNumberPages(9, 2)).toBe(5);
});