export const getNumberPages = (total: number, limit: number): number => {
  return Math.ceil(total / limit);
}