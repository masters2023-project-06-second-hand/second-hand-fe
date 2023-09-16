import { styled } from 'styled-components';
import { Icon } from '@components/Icon/Icon';
import { useModal } from './useModal';
import {
  SearchRegionModalProps,
  CategotyModalProps,
  AlertModalProps,
} from './types';

/* Todo. 모달들 파일 분리하기 */

export const SearchRegionModal: React.FC<SearchRegionModalProps> = ({
  style,
}) => {
  const { closeModal, closeAllModals } = useModal();

  return (
    <ModalBase style={style}>
      <SearchHeader>
        <ButtonBase onClick={closeModal}>
          <Icon name="chevronLeft" />
        </ButtonBase>
        <ButtonBase onClick={closeAllModals}>
          <Icon name="x" />
        </ButtonBase>
      </SearchHeader>

      {/* Todo. Input 컴포넌트 데려와서 적용하기 */}
      <SearchInputArea>임시 텍스트 영역</SearchInputArea>

      {/* Todo. 지역 검색 리스트 추가하기 */}
      <List>
        <Option>서울 강남구 개포1동</Option>
        <Option>서울 강남구 개포2동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
        <Option>서울 강남구 개포3동</Option>
      </List>
    </ModalBase>
  );
};

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

const SearchHeader = styled.div`
  padding: 8px;
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
const SearchInputArea = styled.div`
  padding: 0 16px;
  background-color: #eee;
  width: 288px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
`;
const List = styled.ul`
  font: ${({ theme: { font } }) => font.availableDefault16};
  padding: 0 24px;
  overflow-y: scroll;
  height: 100%;
`;
const Option = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme: { color } }) => color.neutralBorder};

  &:last-child {
    border-bottom: none;
  }
`;
