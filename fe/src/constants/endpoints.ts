export const API_ENDPOINTS = {
  LOGIN: (provider: string, queryString: string) =>
    `/login/oauth2/code/${provider}?${queryString}`,
  LOGOUT: '/members/signout',
  SIGNUP: '/members/signup',

  CATEGORIES: (includeImages: boolean) =>
    `/categories?includeImages=${includeImages}`,

  DELETE_PRODUCT: (productId: number) => `/products/${productId}`,
  DELETE_PRODUCT_IMG: (imgId: number) => `/images/${imgId}`,
  POST_NEW_PRODUCT: () => '/products',
  POST_PRODUCT_IMG: () => '/products/images',
  PUT_PRODUCT: (productId: number) => `/products/${productId}`,
  PRODUCT_DETAIL: (productId: number) => `/products/${productId}`,
  PRODUCT_STATUS: (productId: number) => `/products/${productId}/status`,
  UPDATE_LIKE: (productId: number) => `/products/${productId}/likes`,
  USER_INFO: (memberId: number) => `/members/${memberId}`,
  USER_REGIONS: (memberId: number) => `/members/${memberId}/regions`,
};
