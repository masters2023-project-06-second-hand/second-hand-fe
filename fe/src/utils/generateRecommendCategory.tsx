import { NUMBER_OF_RECOMMEND_CATEGORY } from '@constants/constants';

type CategoryWithoutImg = {
  id: number;
  name: string;
};

export default function generateRecommendCategory(
  categoryList: CategoryWithoutImg[]
): CategoryWithoutImg[] {
  const result: CategoryWithoutImg[] = [];
  const categoryCount = categoryList.length;

  if (categoryCount <= NUMBER_OF_RECOMMEND_CATEGORY) {
    return categoryList;
  }

  while (result.length < NUMBER_OF_RECOMMEND_CATEGORY) {
    const randomIndex = Math.floor(Math.random() * categoryCount);
    const randomCategory = categoryList[randomIndex];

    if (!result.includes(randomCategory)) {
      result.push(randomCategory);
    }
  }

  return result;
}
