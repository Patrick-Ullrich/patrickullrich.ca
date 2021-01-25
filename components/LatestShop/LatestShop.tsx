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
import { SectionLink } from '../Section/SectionLink';
import { SectionSubHeader } from '../Section/SectionSubHeader';

export const LatestShop = () => {
  return (
    <Box py={12}>
      <Container maxW="1280px">
        <Flex
          spacing="auto"
          display="flex"
          align="center"
          flexDirection={['column', 'column', 'row-reverse']}
        >
          <Box maxWidth={{ base: '100%', md: '60%' }}>
            <SectionHeader>Latest Merch</SectionHeader>
            <SectionSubHeader>
              Check out the latest merch available in the Store. Hoodies,
              T-Shirts, and coffee mugs.
            </SectionSubHeader>
            <SectionInfoText>As long as Supply lasts</SectionInfoText>
            <SectionLink to="shop">Check out all Merch</SectionLink>
          </Box>
          <Box
            width="100%"
            justifyContent="center"
            alignItems="center"
            maxWidth={{ base: '100%', md: '40%' }}
            mb={{ base: 8, md: 0 }}
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
