import displayTimeAgo from '../utils/displayTimeAgo';

describe('displayTimeAgo 함수 테스트', () => {
  it('초단위로 경과된 시간을 올바르게 표시해야 한다', () => {
    const date = new Date();
    date.setSeconds(date.getSeconds() - 10);
    expect(displayTimeAgo(date.toISOString())).toBe('10초 전');
  });

  it('분단위로 경과된 시간을 올바르게 표시해야 한다', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 10);
    expect(displayTimeAgo(date.toISOString())).toBe('10분 전');
  });

  it('시간단위로 경과된 시간을 올바르게 표시해야 한다', () => {
    const date = new Date();
    date.setHours(date.getHours() - 10);
    expect(displayTimeAgo(date.toISOString())).toBe('10시간 전');
  });
});
