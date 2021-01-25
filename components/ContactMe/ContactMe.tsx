import {
  Box,
  Center,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { SectionHeader } from '../Section/SectionHeader';
import { SectionInfoText } from '../Section/SectionInfoText';
import { SectionSubHeader } from '../Section/SectionSubHeader';

export const ContactMe = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.700')}
      py={{ base: 12, md: 20 }}
    >
      <Container maxW="1280px">
        <Flex
          spacing="auto"
          display="flex"
          align="center"
          flexDirection={['column', 'column', 'row']}
        >
          <Box maxWidth={{ base: '100%', md: '60%' }} pr={{ base: 0, md: 12 }}>
            <SectionHeader>Contact Form</SectionHeader>
            <SectionSubHeader>
              Looking for a speaker? Want some input on your next big idea?
              Trouble finding an industry mentor? Shoot me a message!
            </SectionSubHeader>
            <SectionInfoText>Don't be shy</SectionInfoText>
          </Box>
          <Box
            maxWidth={{ base: '100%', md: '40%' }}
            width="100%"
            justifyContent="center"
            alignItems="center"
            mt={{ base: 4, md: 0 }}
          >
            <Text w="100" textAlign="center">
              Coming soon.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
