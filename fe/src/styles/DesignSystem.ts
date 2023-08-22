import { colors } from '@styles/base/Colors';
import { fonts } from '@styles/base/Fonts';

export const lightMode = {
  color: {
    neutral: {
      text: {
        default: colors.gray900,
        weak: colors.gray800,
        strong: colors.black,
      },
      background: {
        default: colors.white,
        weak: colors.gray50,
        bold: colors.gray400,
        blur: colors.gray100,
      },
      border: {
        default: colors.gray500,
        strong: colors.gray700,
      },
      overay: {
        default: colors.gray600,
      },
    },
    accent: {
      textWeak: colors.black,
      primary: colors.orange,
      secondary: colors.mint,
    },
    system: {
      warning: colors.red,
      background: colors.white,
      backgroundWeak: colors.gray200,
    },
  },

  font: {
    display: {
      strong20: fonts.bold20,
      strong16: fonts.bold16,
      default16: fonts.regular16,
      default12: fonts.regular12,
    },
    available: {
      strong16: fonts.bold16,
      strong12: fonts.bold12,
      strong10: fonts.bold10,
      default16: fonts.regular16,
      default12: fonts.regular12,
    },
    enabled: {
      strong16: fonts.bold16,
      strong10: fonts.bold10,
    },
  },
};
