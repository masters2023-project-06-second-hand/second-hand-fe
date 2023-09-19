import { ProductStatus } from '@api/product/types';

export const MAX_NUMBER_OF_PRODUCT_IMG = 10;
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
export const NUMBER_OF_RECOMMEND_CATEGORY = 3;
export const STATES_OF_PRODUCT: ProductStatus[] = [
  '판매중',
  '예약중',
  '판매완료',
];

export const DEFAULT_REGIONS = Object.freeze({
  id: 1,
  name: '서울 강남구 역삼1동',
});
