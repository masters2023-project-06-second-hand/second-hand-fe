import { atom, useAtom } from 'jotai';
import { ModalType, ModalPropsMapping, ModalState } from './types';

export const modalStackAtom = atom<ModalState[]>([]);

export const useModal = () => {
  const [modalStack, setModalStack] = useAtom(modalStackAtom);

  const openModal = <T extends ModalType>(
    type: T,
    props: ModalPropsMapping[T]
  ) => {
    setModalStack([...modalStack, { type, props }]);
    console.log('Modal Opened:', type);
  };

  const closeModal = () => {
    setModalStack((stack) => {
      if (stack.length === 0) return [];
      return stack.slice(0, stack.length - 1);
    });
  };

  const closeAllModals = () => {
    setModalStack([]);
  };

  return {
    openModal,
    closeModal,
    closeAllModals,
    modalStack,
  };
};
