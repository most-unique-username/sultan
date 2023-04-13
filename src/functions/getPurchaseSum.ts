export const getPurchaseSum = (price: number, quantity: number): string => {
  return (price * quantity).toFixed(2);
}