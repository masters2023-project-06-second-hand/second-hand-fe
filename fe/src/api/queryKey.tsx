export const QUERY_KEYS = {
  CATEGORIES: (includeImages?: boolean) => [`categories`, { includeImages }],
  PRODUCT_DETAIL: (productId?: number) => ['productData', { productId }],
  USER_REGIONS: (memberId: number | null) => [`userRegions`, memberId],
};
