import { Text, useColorModeValue } from '@chakra-ui/react';

export const SectionInfoText = ({ children }) => (
  <Text mt={4} fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
    {children}
  </Text>
);
