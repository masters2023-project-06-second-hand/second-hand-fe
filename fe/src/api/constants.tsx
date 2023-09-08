const { VITE_API_URL, VITE_APP_GOOGLE_OAUTH_URL, VITE_APP_NAVER_OAUTH_URL } =
  import.meta.env;

export const BASE_API_URL =
  process.env.NODE_ENV === 'production' ? VITE_API_URL : '';

export const GOOGLE_OAUTH_URL = VITE_APP_GOOGLE_OAUTH_URL;
export const NAVER_OAUTH_URL = VITE_APP_NAVER_OAUTH_URL;

export const API_ENDPOINTS = {
  CATEGORIES: '/categories',
};
