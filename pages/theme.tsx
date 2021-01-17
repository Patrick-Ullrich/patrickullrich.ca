import { extendTheme, propNames } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
    mono: "'Poppins', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          outline: 'none',
          boxShadow: 'none',
        },
      },
    },
    Heading: {
      baseStyle: (props) => ({
        color: mode('brandBlack', 'brandWhite')(props),
      }),
    },
    Text: {
      baseStyle: {
        fontSize: 'lg',
      },
    },
    List: {
      baseStyle: {
        item: {
          fontSize: 'lg',
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'teal.300',
        textDecoration: 'underline',
      },
    },
  },
  colors: {
    brandWhite: '#f4f3f0',
    brandBlack: '#231f20',
    teal: {
      50: '#e2f9fc',
      100: '#c7e4e8',
      200: '#a8d0d6',
      300: '#87bdc4', // BRAND
      400: '#67aab2',
      500: '#4f9199',
      600: '#3b7178',
      700: '#285056',
      800: '#123135',
      900: '#001215',
    },
    red: {
      50: '#ffe5e7',
      100: '#fcb8bd',
      200: '#f48b93',
      300: '#ee5d68', // BRAND
      400: '#e8313e',
      500: '#cf1925',
      600: '#a2111c',
      700: '#740a13',
      800: '#47040a',
      900: '#1e0001',
    },
    blue: {
      50: '#e2f7ff',
      100: '#bae5f8',
      200: '#8fd3f1',
      300: '#66c2ec',
      400: '#43b0e5',
      500: '#3097cb',
      600: '#23759f',
      700: '#175472',
      800: '#073345', // BRAND
      900: '#00121a',
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});
