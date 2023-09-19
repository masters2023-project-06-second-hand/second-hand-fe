import { colors } from '@styles/base/Colors';
import { fonts } from '@styles/base/Fonts';

export const theme = {
  color: {
    neutralText: colors.gray900,
    neutralTextWeak: colors.gray800,
    neutralTextStrong: colors.black,

    neutralBackground: colors.white,
    neutralBackgroundWeak: colors.gray50,
    neutralBackgroundBold: colors.gray400,
    neutralBackgroundBlur: colors.gray100,

    neutralBorder: colors.gray500,
    neutralBorderStrong: colors.gray700,

    neutralOveray: colors.gray600,

    accentText: colors.white,
    accentTextWeak: colors.black,
    accentPrimary: colors.orange,
    accentSecondary: colors.mint,

    systemWarning: colors.red,
    systemBackground: colors.white,
    systemBackgroundWeak: colors.gray200,
  },

  font: {
    displayStrong20: fonts.bold20,
    displayStrong16: fonts.bold16,
    displayDefault16: fonts.regular16,
    displayDefault12: fonts.regular12,

    availableStrong16: fonts.bold16,
    availableStrong12: fonts.bold12,
    availableStrong10: fonts.bold10,
    availableDefault16: fonts.regular16,
    availableDefault12: fonts.regular12,

    enabledStrong16: fonts.bold16,
    enabledStrong10: fonts.bold10,
  },

  radius: {
    half: '50%',
    small: '8px',
    medium: '12px',
    large: '16px',
  },
};
