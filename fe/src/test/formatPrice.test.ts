import formatPrice from '../utils/formatPrice';

describe('formatPrice 함수 테스트', () => {
  it('0에 대해서는 "가격 없음"을 반환해야 한다', () => {
    expect(formatPrice(0)).toBe('가격 없음');
  });

  it('1,000,000 미만의 숫자는 세 자리마다 콤마(,)만 찍힌다.', () => {
    expect(formatPrice(5000)).toBe('5,000원');
    expect(formatPrice(23000)).toBe('23,000원');
  });

  it('1,000,000 이상의 숫자는 만원 단위로 나타낸다', () => {
    expect(formatPrice(1100000)).toBe('110만원');
  });

  it('100,000,000 이상의 숫자는 억원 단위로 나타낸다', () => {
    expect(formatPrice(200000000)).toBe('2억원');
  });

  it('억과 만원 단위를 모두 가진 숫자는 천원 단위는 표시하지 않는다', () => {
    expect(formatPrice(230000000)).toBe('2억 3,000만원');
  });
});
