export const API_ENDPOINTS = {
  LOGIN: (provider: string, queryString: string) =>
    `/login/oauth2/code/${provider}?${queryString}`,
  LOGOUT: '/members/signout',
  SIGNUP: '/members/signup',

  CATEGORIES: (includeImages: boolean) =>
    `/categories?includeImages=${includeImages}`,

  USER_INFO: (memberId: number) => `/members/${memberId}`,
  USER_REGIONS: (memberId: number) => `/members/${memberId}/regions`,
};
