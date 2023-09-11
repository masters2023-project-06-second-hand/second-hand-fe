import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { styled } from 'styled-components';
import { useModal, modalStackAtom } from './useModal';
import { createModalComponent } from './index';
import { useAtom } from 'jotai';

const getZIndex = (index: number) => 10 + index;

export const GlobalModal: React.FC = () => {
  const [modalStack] = useAtom(modalStackAtom);
  const { closeModal } = useModal();

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  if (modalStack.length === 0) return null;

  const lastModalIndex = modalStack.length - 1;

  return ReactDOM.createPortal(
    <>
      {modalStack.map((modalState, index) => {
        return (
          <Fragment key={index}>
            {index === lastModalIndex && (
              <Overlay
                onClick={closeModal}
                style={{ zIndex: getZIndex(lastModalIndex) - 1 }}
              />
            )}
            {createModalComponent(modalState.type, {
              ...modalState.props,
              style: { zIndex: getZIndex(index) },
            })}
          </Fragment>
        );
      })}
    </>,
    modalRoot
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 393px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
`;
