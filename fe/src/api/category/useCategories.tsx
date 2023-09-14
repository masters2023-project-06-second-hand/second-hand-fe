import { useQuery, useQueryClient } from '@tanstack/react-query';
import { publicApi } from '../index';
import { CategoriesWithImg, Categories } from './types';
import { API_ENDPOINTS } from '../constants';
import { QUERY_KEYS } from '@api/queryKey';

const getCategories = async (includeImages: boolean) => {
  const { data } = await publicApi.get(API_ENDPOINTS.CATEGORIES(includeImages));
  return data;
};

export const useCategoriesWithImages = (): CategoriesWithImg[] => {
  const fallback: CategoriesWithImg[] = [];
  const { data = fallback } = useQuery(
    QUERY_KEYS.CATEGORIES(true),
    () => getCategories(true),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  return data;
};

export const useCategoriesWithoutImages = (): Categories[] => {
  const fallback: Categories[] = [];
  const { data = fallback } = useQuery(QUERY_KEYS.CATEGORIES(false), () =>
    getCategories(false)
  );

  return data;
};

export const usePrefetchCategoriesWithoutImages = (): void => {
  const queryClient = useQueryClient();

  queryClient.prefetchQuery(QUERY_KEYS.CATEGORIES(false), () =>
    getCategories(false)
  );
};
