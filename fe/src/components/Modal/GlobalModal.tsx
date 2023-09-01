import React from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { useModal, modalStackAtom } from './useModal';
import { createModalComponent } from './index';

const getZIndex = (index: number) => 1000 + index;

export const GlobalModal: React.FC = () => {
  const [modalStack] = useAtom(modalStackAtom);
  const { closeModal } = useModal();

  if (modalStack.length === 0) return null;

  const lastModalIndex = modalStack.length - 1;

  return (
    <>
      {modalStack.map((modalState, index) => {
        return (
          <React.Fragment key={index}>
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
          </React.Fragment>
        );
      })}
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
`;
