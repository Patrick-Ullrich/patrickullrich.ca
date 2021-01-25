import { Heading } from '@chakra-ui/react';

export const SectionSubHeader = ({ children }) => (
  <Heading
    as="h1"
    size="md"
    fontWeight="normal"
    lineHeight={1.5}
    textAlign="left"
  >
    {children}
  </Heading>
);
