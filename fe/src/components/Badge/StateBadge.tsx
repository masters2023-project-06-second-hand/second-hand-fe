import styled from 'styled-components';

type BadgeProps = {
  state: string;
};

export const StateBadge: React.FC<BadgeProps> = ({ state }) => {
  return <Badge $state={state}>{state}</Badge>;
};

const Badge = styled.div<{ $state: string }>`
  font: ${({ theme: { font } }) => font.displayDefault12};
  color: ${({ theme: { color } }) => color.accentText};
  display: inline-block;
  border-radius: ${({ theme: { radius } }) => radius.small};
  height: 22px;
  padding: 3px 8px;
  background-color: ${({ $state, theme: { color } }) =>
    $state === '예약중' ? color.accentSecondary : color.neutralBorderStrong};
`;
