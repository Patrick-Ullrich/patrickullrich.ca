import { Heading, useColorModeValue } from '@chakra-ui/react';

export const SectionHeader = ({ children }) => (
  <Heading
    as="h1"
    size="sm"
    color={useColorModeValue('red.300', 'teal.300')}
    mb={4}
    _before={{
      verticalAlign: 'middle',
      content: '""',
      display: 'inline-block',
      width: '0.75rem',
      height: '0.125rem',
      bg: useColorModeValue('red.300', 'teal.300'),
      marginRight: '0.5rem',
    }}
  >
    {children}
  </Heading>
);
