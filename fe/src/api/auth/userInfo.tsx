import { privateApi } from '../index';
import { API_ENDPOINTS } from '@constants/endpoints';

export const fetchUserInfo = async (memberId: number) => {
  const { data } = await privateApi.get(`${API_ENDPOINTS.USER_INFO(memberId)}`);

  return data;
};
