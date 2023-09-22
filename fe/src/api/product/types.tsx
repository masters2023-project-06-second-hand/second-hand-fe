type Writer = {
  id: number;
  nickname: string;
};

type Image = {
  id: number;
  imgUrl: string;
};

export type Product = {
  id: number;
  writer: Writer;
  images: Image[];
  productName: string;
  categoryName: string;
  regionName: string;
  createdAt: string;
  status: ProductStatus;
  content: string;
  price: number;
};

export type ProductStatus = '판매중' | '예약중' | '판매완료';

export type StatusMutation = {
  productId: number;
  status: ProductStatus;
};

export type NewProductProps = {
  name: string;
  categoryId: number;
  price: string;
  content: string;
  regionId: number;
  imagesId: number[];
};

export type CategoryWithoutImgProps = {
  id: number;
  name: string;
};
