import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme } from '../lib/theme';
import 'focus-visible/dist/focus-visible';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
