import { CategoryWithoutImgProps } from '@api/product/types';
import { CSSProperties } from 'react';

export type ModalType = 'regionSetting' | 'searchRegion' | 'category' | 'alert';

export type BaseModalProps = {
  style?: CSSProperties;
};

export type AlertModalProps = BaseModalProps & {
  message: string;
  leftButtonText: string;
  rightButtonText: string;
  onDelete: () => void;
};

export type RegionSettingModalProps = BaseModalProps;
export type SearchRegionModalProps = BaseModalProps;
export type CategoryModalProps = BaseModalProps & {
  selectedCategoryId?: number;
  categoryData: CategoryWithoutImgProps[];
  onClick: (categoryId: number) => void;
};

export type ModalPropsMapping = {
  [key in ModalType]: BaseModalProps | AlertModalProps | CategoryModalProps;
};

export type ModalState<T extends ModalType = ModalType> = {
  type: T;
  props: ModalPropsMapping[T];
};
