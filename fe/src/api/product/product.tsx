import { API_ENDPOINTS } from '@constants/endpoints';
import { privateApi, publicApi } from '..';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Product, ProductStatus } from './types';
import { QUERY_KEYS } from '@api/queryKey';
import { useNavigate } from 'react-router-dom';

const getProductDetail = async (productId: number) => {
  const { data } = await publicApi.get(API_ENDPOINTS.PRODUCT_DETAIL(productId));
  return data;
};

export const useProductDetail = (productId: number) => {
  return useQuery<Product>(QUERY_KEYS.PRODUCT_DETAIL(productId), () =>
    getProductDetail(productId)
  );
};

type StatusMutation = {
  productId: number;
  status: ProductStatus;
};

const updateProductStatus = async (
  productId: number,
  status: ProductStatus
) => {
  const requestData = {
    status: status,
  };

  const response = await privateApi.put(
    API_ENDPOINTS.PRODUCT_STATUS(productId),
    requestData
  );
  return response.data;
};

export const useChangeProductStatusMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (data: StatusMutation) => updateProductStatus(data.productId, data.status),
    {
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries(
          QUERY_KEYS.PRODUCT_DETAIL(variables.productId)
        );
      },
    }
  );
  return { mutate };
};

const deleteProduct = async (productId: number) => {
  const response = await privateApi.delete(
    API_ENDPOINTS.DELETE_PRODUCT(productId)
  );
  return response.data;
};

export const useDeleteProductMutation = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    (productId: number) => deleteProduct(productId),
    {
      onSuccess: () => {
        navigate('/');
      },
    }
  );
  return { mutate };
};
