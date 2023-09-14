const {
  // VITE_API_URL,
  VITE_APP_GOOGLE_LOGIN_BUTTON_URL,
  VITE_APP_NAVER_LOGIN_BUTTON_URL,
} = import.meta.env;

// export const BASE_API_URL =
//   process.env.NODE_ENV === 'production' ? VITE_API_URL : '';

export const BASE_API_URL = 'http://localhost:8080';

export const GOOGLE_LOGIN_BUTTON_URL = VITE_APP_GOOGLE_LOGIN_BUTTON_URL;
export const NAVER_LOGIN_BUTTON_URL = VITE_APP_NAVER_LOGIN_BUTTON_URL;

export const API_ENDPOINTS = {
  LOGIN: (provider: string, queryString: string) =>
    `/login/oauth2/code/${provider}?${queryString}`,
  SIGNUP: '/members/signup',

  CATEGORIES: (includeImages: boolean) =>
    `/categories?includeImages=${includeImages}`,

  USER_INFO: (memberId: number) => `/members/${memberId}`,
  USER_REGIONS: (memberId: number) => `/members/${memberId}/regions`,
};
