export const API_ENDPOINTS = {
  LOGIN: (provider: string, queryString: string) =>
    `/login/oauth2/code/${provider}?${queryString}`,
  LOGOUT: '/members/signout',
  SIGNUP: '/members/signup',

  CATEGORIES: (includeImages: boolean) =>
    `/categories?includeImages=${includeImages}`,

  PRODUCTS: '/products',
  DELETE_PRODUCT: (productId: number) => `/products/${productId}`,
  POST_NEW_PRODUCT: () => '/products',
  PRODUCT_DETAIL: (productId: number) => `/products/${productId}`,
  PRODUCT_STATUS: (productId: number) => `/products/${productId}/status`,
  UPDATE_LIKE: (productId: number) => `/products/${productId}/likes`,
  USER_INFO: (memberId: number) => `/members/${memberId}`,
  USER_REGIONS: (memberId: number) => `/members/${memberId}/regions`,
};
