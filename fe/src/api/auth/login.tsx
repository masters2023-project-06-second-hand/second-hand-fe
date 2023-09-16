import { privateApi, publicApi } from '../index';
import { API_ENDPOINTS } from '@constants/endpoints';
import axios from 'axios';
import { userInfoAtom } from '@atoms/userAtom';
import { useAtom } from 'jotai';
import { isLoginAtom, signupTokenAtom } from '@atoms/loginAtom';
import { fetchUserInfo } from './userInfo';
import { BASE_API_URL } from '../../envConfig';

/* TODO. 코드들 분리하기 */
type LoginData = {
  accessToken: string;
  refreshToken: string;
  memberId: number;
};

type SignupBody = {
  nickname: string;
  profileImg: string;
  regionsId: number[];
};

export const fetchLogin = async (provider: string, queryString: string) => {
  const { data } = await axios.get(
    `${BASE_API_URL}${API_ENDPOINTS.LOGIN(provider, queryString)}`,
    { withCredentials: true }
  );
  return data;
};

export const fetchLogout = async () => {
  const { data } = await privateApi.post(`${API_ENDPOINTS.LOGOUT}`);
  return data;
};

export const fetchSignup = async (body: SignupBody, signupToken: string) => {
  const { data } = await publicApi.post(`${API_ENDPOINTS.SIGNUP}`, body, {
    headers: {
      Authorization: `Bearer ${signupToken}`,
      'Content-Type': 'application/json',
    },
  });

  return data;
};

export const useHandleLogout = () => {
  const [, setUserInfo] = useAtom(userInfoAtom);
  const [, setIsLogin] = useAtom(isLoginAtom);

  const logout = async () => {
    await fetchLogout();

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    setUserInfo(null);
    setIsLogin(false);
    console.log('isLogin : 로그아웃 됐어요');
  };

  return logout;
};

export const useHandleLogin = () => {
  const [, setUserInfo] = useAtom(userInfoAtom);
  const [, setIsLogin] = useAtom(isLoginAtom);

  return async (data: LoginData) => {
    try {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      const userInfo = await fetchUserInfo(data.memberId);
      setUserInfo(userInfo);
      setIsLogin(true);

      console.log('isLogin : 로그인 됐어요');
    } catch (error) {
      console.error(
        'Error during fetching user info or setting tokens:',
        error
      );
    }
  };
};

export const useHandleSignup = () => {
  const [signupToken, setSignupToken] = useAtom(signupTokenAtom);
  const [, setUserInfo] = useAtom(userInfoAtom);
  const [, setIsLogin] = useAtom(isLoginAtom);

  return async (data: SignupBody) => {
    if (!signupToken) {
      console.error('Signup token이 없습니다.');
      return false;
    }

    try {
      const responseData = await fetchSignup(data, signupToken);
      setSignupToken(null);

      localStorage.setItem('accessToken', responseData.accessToken);
      localStorage.setItem('refreshToken', responseData.refreshToken);

      const userInfo = await fetchUserInfo(responseData.memberId);
      setUserInfo(userInfo);
      setIsLogin(true);
      return true;
    } catch (error) {
      console.error('회원가입 도중 오류 발생:', error);
      return false;
    }
  };
};
