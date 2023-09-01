import {
  RegionSettingModalProps,
  SearchRegionModalProps,
  CategotyModalProps,
  AlertModalProps,
  ModalType,
  ModalPropsMapping,
} from './types';

import {
  RegionSettingModal,
  SearchRegionModal,
  CategoryModal,
  AlertModal,
} from './Modal';

export function createModalComponent<T extends ModalType>(
  type: T,
  props: ModalPropsMapping[T]
): JSX.Element {
  switch (type) {
    case 'regionSetting':
      return <RegionSettingModal {...(props as RegionSettingModalProps)} />;
    case 'searchRegion':
      return <SearchRegionModal {...(props as SearchRegionModalProps)} />;
    case 'category':
      return <CategoryModal {...(props as CategotyModalProps)} />;
    case 'alert':
      return <AlertModal {...(props as AlertModalProps)} />;
    default:
      throw new Error(`Unsupported modal type: ${type}`);
  }
}
