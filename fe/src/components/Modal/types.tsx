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
export type CategotyModalProps = BaseModalProps;

export type ModalPropsMapping = {
  [key in ModalType]: BaseModalProps | AlertModalProps;
};

export type ModalState<T extends ModalType = ModalType> = {
  type: T;
  props: ModalPropsMapping[T];
};
