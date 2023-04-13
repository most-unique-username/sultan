import { getPurchaseSum } from "./getPurchaseSum"

test("Сумма за одно наименование", () => {
  expect(getPurchaseSum(10.11, 2)).toBe("20.22");
  expect(getPurchaseSum(11, 2)).toBe("22.00");
  expect(getPurchaseSum(9.151, 1)).toBe("9.15");
});