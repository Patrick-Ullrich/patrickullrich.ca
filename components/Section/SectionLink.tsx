import { Box, Button, Link, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

export const SectionLink = ({ children, to }) => (
  <Box mt={8}>
    <NextLink href={to} passHref>
      <Button
        bgColor={useColorModeValue('red.300', 'teal.300')}
        colorScheme={useColorModeValue('red', 'teal')}
      >
        {children}
      </Button>
    </NextLink>
  </Box>
);
