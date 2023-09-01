import { CSSProperties } from 'react';

export type ModalType = 'regionSetting' | 'searchRegion' | 'category' | 'alert';

export interface BaseModalProps {
  style?: CSSProperties;
}

export interface AlertModalProps extends BaseModalProps {
  message: string;
  leftButtonText: string;
  rightButtonText: string;
  onDelete: () => void;
}

export type RegionSettingModalProps = BaseModalProps;
export type SearchRegionModalProps = BaseModalProps;
export type CategotyModalProps = BaseModalProps;

export type ModalPropsMapping = {
  [key in ModalType]: BaseModalProps | AlertModalProps;
};

export interface ModalState<T extends ModalType = ModalType> {
  type: T;
  props: ModalPropsMapping[T];
}
