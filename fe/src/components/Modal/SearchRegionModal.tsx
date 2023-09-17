import { useEffect } from 'react';
import { styled } from 'styled-components';
import { Input } from '@components/Input/Input';
import { SearchRegionModalProps } from './types';
import { Icon } from '@components/Icon/Icon';

import { useInput } from '@hooks/useInput';
import { useDebounce } from '@hooks/useDebounce';
import { useModal } from './useModal';

export const SearchRegionModal: React.FC<SearchRegionModalProps> = ({
  style,
}) => {
  const { closeModal, closeAllModals } = useModal();
  const { value: region, onChange: onChangeRegion } = useInput();
  const debouncedRegion = useDebounce(region, 500);

  useEffect(() => {
    if (debouncedRegion) {
      /* TODO. 필터링 된 지역 목록 요청 (API 미완료) */
      console.log(debouncedRegion);
    }
  }, [debouncedRegion]);

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

      <InputWrapper>
        <Input
          placeholder="동명(읍, 면)으로 검색(ex. 서초동)"
          value={region}
          onChange={onChangeRegion}
        />
      </InputWrapper>

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

const SearchHeader = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: ${({ theme: { font } }) => font.displayStrong20};
  color: ${({ theme: { color } }) => color.neutralTextStrong};
`;

const InputWrapper = styled.div`
  padding: 0 16px;
  background-color: #eee;
  width: 288px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border-radius: ${({ theme: { radius } }) => radius.small};
`;

const ButtonBase = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
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
