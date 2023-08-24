import { theme } from '@styles/DesignSystem';

import { ReactComponent as Camera } from '@assets/camera.svg';
import { ReactComponent as Check } from '@assets/check.svg';
import { ReactComponent as ChevronDown } from '@assets/chevron-down.svg';
import { ReactComponent as ChevronLeft } from '@assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '@assets/chevron-right.svg';
import { ReactComponent as ChevronUp } from '@assets/chevron-up.svg';
import { ReactComponent as CircleXFilled } from '@assets/circle-x-filled.svg';
import { ReactComponent as Dots } from '@assets/dots.svg';
import { ReactComponent as ExclamationCircle } from '@assets/exclamation-circle.svg';
import { ReactComponent as HeartFilled } from '@assets/heart-filled.svg';
import { ReactComponent as Heart } from '@assets/heart.svg';
import { ReactComponent as Home } from '@assets/home.svg';
import { ReactComponent as LayoutGrid } from '@assets/layout-grid.svg';
import { ReactComponent as MapPinFIlled } from '@assets/map-pin-filled.svg';
import { ReactComponent as MessageNoti } from '@assets/message-noti.svg';
import { ReactComponent as Message } from '@assets/message.svg';
import { ReactComponent as News } from '@assets/news.svg';
import { ReactComponent as Paperclip } from '@assets/paperclip.svg';
import { ReactComponent as Pencil } from '@assets/pencil.svg';
import { ReactComponent as Photo } from '@assets/photo.svg';
import { ReactComponent as Plus } from '@assets/plus.svg';
import { ReactComponent as Search } from '@assets/search.svg';
import { ReactComponent as Send } from '@assets/send.svg';
import { ReactComponent as UserCircle } from '@assets/user-circle.svg';
import { ReactComponent as X } from '@assets/x.svg';

export const icons = {
  camera: Camera,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  circleXFilled: CircleXFilled,
  dots: Dots,
  exclamationCircle: ExclamationCircle,
  heartFilled: HeartFilled,
  heart: Heart,
  home: Home,
  layoutGrid: LayoutGrid,
  mapPinFIlled: MapPinFIlled,
  messageNoti: MessageNoti,
  message: Message,
  news: News,
  paperclip: Paperclip,
  pencil: Pencil,
  photo: Photo,
  plus: Plus,
  search: Search,
  send: Send,
  userCircle: UserCircle,
  x: X,
};

interface IconProps {
  name: keyof typeof icons;
  size?: 'M' | 'S';
  fill?: string;
  stroke?: string;
}

function isColorKey(key: string): key is keyof typeof theme.color {
  return key in theme.color;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  fill = 'none',
  stroke = 'accentTextWeak',
  ...props
}) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;

  const fillColor = isColorKey(fill) ? theme.color[fill] : fill;
  const strokeColor = isColorKey(stroke) ? theme.color[stroke] : stroke;
  const iconSize = size === 'M' ? 24 : 16;

  return (
    <IconComponent
      width={iconSize}
      height={iconSize}
      fill={fillColor}
      stroke={strokeColor}
      {...props}
    />
  );
};
