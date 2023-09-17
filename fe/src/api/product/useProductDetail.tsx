import { API_ENDPOINTS } from '@api/constants';
import { publicApi } from '..';
import { useQuery } from '@tanstack/react-query';
import { Product } from './types';
import { QUERY_KEYS } from '@api/queryKey';

const getProductDetail = async (productId: number) => {
  const { data } = await publicApi.get(API_ENDPOINTS.PRODUCT_DETAIL(productId));
  return data;
};

export const useProductDetail = (productId: number) => {
  return useQuery<Product>(QUERY_KEYS.PRODUCT_DETAIL(productId), () =>
    getProductDetail(productId)
  );
};
