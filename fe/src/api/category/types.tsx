export type Categories = {
  id: number;
  name: string;
};

export type CategoriesWithImg = Categories & {
  imgUrl: string;
};
