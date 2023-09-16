import { styled } from 'styled-components';
import { Icon } from '@components/Icon/Icon';
import { useModal } from './useModal';
import { CategotyModalProps, AlertModalProps } from './types';

/* Todo. 모달들 파일 분리하기 */

export const CategoryModal: React.FC<CategotyModalProps> = ({ style }) => {
  const { closeModal } = useModal();

  return (
    <ModalBase style={style}>
      <Header>
        <h3>동네설정</h3>
        <ButtonBase onClick={closeModal}>
          <Icon name="x" />
        </ButtonBase>
      </Header>
      {/* 키테고리 리스트 추가, 선택된 카테고리 스타일, 선택된 카테고리*/}
      <List>
        <Option>카테고리 항목</Option>
        <Option>카테고리 항목</Option>
        <Option>카테고리 항목</Option>
      </List>
    </ModalBase>
  );
};

export const AlertModal: React.FC<AlertModalProps> = ({
  style,
  onDelete,
  message,
  leftButtonText,
  rightButtonText,
}) => {
  const { closeModal } = useModal();

  return (
    <AlertWrapper style={style}>
      <Message>{message}</Message>
      <Action>
        <button onClick={closeModal}>{leftButtonText}</button>
        <button onClick={onDelete}>{rightButtonText}</button>
      </Action>
    </AlertWrapper>
  );
};

const ModalBase = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 700px;
  border: 1px solid ${({ theme: { color } }) => color.neutralBorder};
  border-radius: ${({ theme: { radius } }) => radius.large};
  background-color: ${({ theme: { color } }) => color.neutralBackground};
  overflow: hidden;
`;

const ButtonBase = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  padding: 8px 8px 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: ${({ theme: { font } }) => font.displayStrong20};
  color: ${({ theme: { color } }) => color.neutralTextStrong};
`;

const AlertWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 336px;
  border: 1px solid ${({ theme: { color } }) => color.neutralBorder};
  border-radius: ${({ theme: { radius } }) => radius.large};
  background-color: ${({ theme: { color } }) => color.neutralBackground};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Message = styled.div`
  padding: 24px;
  font: ${({ theme: { font } }) => font.displayStrong16};
`;
const Action = styled.div`
  padding: 24px;
  display: flex;
  gap: 32px;
  justify-content: flex-end;

  button:first-child {
    color: ${({ theme: { color } }) => color.neutralTextStrong};
    font: ${({ theme: { font } }) => font.displayDefault16};
  }
  button:last-child {
    color: ${({ theme: { color } }) => color.systemWarning};
    font: ${({ theme: { font } }) => font.displayStrong16};
  }
`;

const List = styled.ul`
  font: ${({ theme: { font } }) => font.availableDefault16};
  padding: 0 24px;
  overflow-y: scroll;
  height: 100%;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Option = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme: { color } }) => color.neutralBorder};
  &:last-child {
    border-bottom: none;
  }
`;
