import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { SectionHeader } from '../Section/SectionHeader';
import { SectionInfoText } from '../Section/SectionInfoText';
import { SectionLink } from '../Section/SectionLink';
import { SectionSubHeader } from '../Section/SectionSubHeader';

export const LatestShop = () => {
  return (
    <Box py={{ base: 12, md: 20 }}>
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
            <SectionLink>Check out all Merch</SectionLink>
          </Box>
          <Box
            width="100%"
            justifyContent="center"
            alignItems="center"
            maxWidth={{ base: '100%', md: '40%' }}
            mb={{ base: 0, md: 0 }}
            mt={{ base: 12, md: 0 }}
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
