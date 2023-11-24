export const getPageCount: (totalCount: number, limit: number) => number = (
  totalCount,
  limit
) => {
  return Math.ceil(totalCount / limit);
};
