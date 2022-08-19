export const getPagesCount = (totalCount, limitPage) => {
  return Math.ceil(totalCount / limitPage);
};
export const getFromResult = (currentPage, limitPage) =>
  (currentPage - 1) * limitPage + 1;
export const getToResult = (fromResult, length) => fromResult + length - 1;
