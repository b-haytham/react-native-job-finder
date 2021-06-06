import { createTheme } from '@shopify/restyle'

const palette = {
  black1: '#000',
  black2: '#262626',
  black3: '#434343',
  black4: '#555555',
  white: '#FFFFFF',
  gray1: "#fafafafa",
  gray2: "#f5f5f5f5",
  gray3: "#e9e9e9e9",
  gray4: "#c4c4c4c4",
  
  primary1: "#44C6D2",
  primary2: "#5dd0da",
  primary3: "#87dee4",
  primaryDarker: "#44C6D2",
  backgroundLight: "#F5F5F5F5",
  error: "#F01F0E",
  success: "#2AA952",
  darkColor: "#2A2C36",
  backgroundDark: "#1E1F28"
};


const theme = createTheme({
  colors: {
    background: palette.backgroundLight,
    white: palette.white,
    gray1: palette.gray1,
    gray2: palette.gray2,
    gray3: palette.gray3,
    gray4: palette.gray4,
    black1: palette.black1,
    black2: palette.black2,
    black3: palette.black3,
    black4: palette.black4,
    error: palette.error,
    primary1: palette.primary1,
    primary2: palette.primary2,
    primary3: palette.primary3,
    primaryDarker: palette.primaryDarker,
    success: palette.success,
    darkColor: palette.darkColor
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    headline: {
      fontFamily: "Poppins-Bold",
      fontSize: 40,
      lineHeight: 45,
      color: "black1"
    },
    headline2: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 35,
      lineHeight: 39,
      color: "black1"
    },
    headline3: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 30,
      lineHeight: 35,
      color: "black1"
    },
    body: {
      fontFamily: "Poppins-Regular",
      fontSize: 14,
      lineHeight: 20,
      color: "black1"
    },
    body2: {
      fontFamily: "Poppins-Medium",
      fontSize: 16,
      lineHeight: 19,
      color: "black1"
    },
    description: {
      fontFamily: "Poppins-Medium",
      fontSize: 14,
      lineHeight: 20,
      color: "black4",
      opacity: .8
    },
    small: {
      fontFamily: "Poppins-Regular",
      fontSize: 11,
      lineHeight: 11,
      color: "black"
    },
    smallGray: {
      fontFamily: "Poppins-Regular",
      fontSize: 11,
      lineHeight: 11,
      color: "black1"
    },
  }
});

export type Theme = typeof theme;

export default theme;