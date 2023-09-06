import axios from 'axios';
import { BASE_API_URL, GOOGLE_OAUTH_URL, NAVER_OAUTH_URL } from './constants';

export const publicApi = axios.create({
  baseURL: `${BASE_API_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const privateApi = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* 임시 */
export const googleOauthApi = axios.create({
  baseURL: GOOGLE_OAUTH_URL,
});

export const naverOauthApi = axios.create({
  baseURL: NAVER_OAUTH_URL,
});

/** Todo
 * login 관련 api 될 때 작동 확인 될 때 수정하기
 * token 관련 로그아웃 및 확인 로직 추가하기
 * refresh token, 재발급 관련 추가 필요
 */
privateApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
